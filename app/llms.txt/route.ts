import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'

// إعادة توليد الملف تلقائياً كل ساعة لالتقاط أحدث مقالات وصفحات Sanity
export const revalidate = 3600

const DOMAIN = 'https://www.uniquee-ws.com'

// ============================================================================
// روابط صفحات الخدمات الثابتة (عدّل أي slug هنا لو اسم الفولدر مختلف عندك في app/)
// ============================================================================
const STATIC_SERVICES_AR = [
  {
    title: 'الرئيسية — UNIQUE Digital Agency',
    path: '/',
    desc: 'وكالة رقمية متكاملة لخدمات السيو (SEO & GEO) وتصميم وبرمجة المواقع والمتاجر الإلكترونية في مصر والسعودية والإمارات.',
  },
  {
    title: 'شركة سيو في مصر',
    path: '/egypt-seo',
    desc: 'خدمات تحسين محركات البحث والسيو المحلي وخرائط جوجل وسيو المتاجر في مصر بباقات شهرية تبدأ من 7,500 جنيه مصري.',
  },
  {
    title: 'شركة تصميم مواقع إلكترونية في مصر',
    path: '/egypt-web-design',
    desc: 'تصميم مواقع Next.js وووردبريس ومتاجر WooCommerce وShopify وEasyOrder مربوطة بباي موب وفوري وبوسطة بدءاً من 8,500 جنيه مصري.',
  },
  {
    title: 'شركة سيو في السعودية',
    path: '/saudi-seo',
    desc: 'استراتيجيات تصدر جوجل والسيو التقني وسيو متاجر سلة وزد في المملكة العربية السعودية.',
  },
  {
    title: 'شركة سيو في الرياض',
    path: '/riyadh-seo',
    desc: 'خدمات تحسين محركات البحث وخرائط جوجل والذكاء الاصطناعي GEO للشركات والمتاجر في الرياض بباقات تبدأ من 1,850 ريال شهرياً.',
  },
  {
    title: 'شركة سيو في جدة',
    path: '/seocompanyjeddah',
    desc: 'خدمات السيو المحلي وتصدر خرائط جوجل وسيو متاجر سلة وزد والشركات في جدة.',
  },
  {
    title: 'شركة تصميم مواقع في الإمارات',
    path: '/uae-web-design',
    desc: 'تصميم مواقع احترافية ومتاجر إلكترونية سريعة للشركات في دبي وأبوظبي والإمارات.',
  },
  {
    title: 'المدونة العربية',
    path: '/blog',
    desc: 'أحدث مقالات وأدلة الخبراء في تحسين محركات البحث والسيو التقني وتصميم المواقع.',
  },
]

const STATIC_SERVICES_EN = [
  {
    title: 'Home — UNIQUE Digital Agency (EN)',
    path: '/en',
    desc: 'Full-service SEO, AI Search (GEO), and Next.js / WordPress Web Development agency serving Egypt, Saudi Arabia, and the UAE.',
  },
  {
    title: 'SEO Company in Egypt',
    path: '/en/egypt-seo',
    desc: 'Search Console-verified Technical SEO, Google Maps Local 3-Pack, and E-Commerce SEO in Egypt starting at 7,500 EGP/month.',
  },
  {
    title: 'Web Design Company in Egypt',
    path: '/en/egypt-web-design',
    desc: 'Ultra-fast Next.js, WordPress, WooCommerce, Shopify & EasyOrder builds with Paymob, Fawry & Bosta integration starting at 8,500 EGP.',
  },
  {
    title: 'SEO Company in Saudi Arabia',
    path: '/en/saudi-seo',
    desc: 'Enterprise SEO, Salla/Zid store optimization, and AI Search (GEO) across Saudi Arabia.',
  },
  {
    title: 'SEO Company in Riyadh',
    path: '/en/riyadh-seo',
    desc: 'Riyadh SEO, Google Maps 3-Pack, and Salla/Zid e-commerce optimization starting at 1,850 SAR/month.',
  },
  {
    title: 'SEO Company in Jeddah',
    path: '/en/seocompanyjeddah',
    desc: 'Jeddah Local SEO, medical & corporate search growth, and AI Search (GEO) optimization.',
  },
  {
    title: 'SEO Company in UAE',
    path: '/en/uae-seo',
    desc: 'High-ROI SEO & AI Search optimization for Dubai, Abu Dhabi, and UAE enterprises.',
  },
  {
    title: 'English Blog',
    path: '/en/blog',
    desc: 'Actionable guides on SEO, GEO, Core Web Vitals, and web development.',
  },
]

// ============================================================================
// SANITY QUERIES — سحب المقالات والصفحات الديناميكية تلقائياً
// ============================================================================
interface SanityPageItem {
  pageTitle?: {
    ar?: string
    en?: string
  }
  slug?: {
    current?: string
  }
  description?: string
}

const BLOG_POSTS_QUERY = defineQuery(`
  *[_type == "flexiblePage" && slug.current match "blog*"] | order(_createdAt desc)[0...100]{
    pageTitle,
    slug,
    description
  }
`)

const OTHER_FLEXIBLE_PAGES_QUERY = defineQuery(`
  *[_type == "flexiblePage" && !(slug.current match "blog*") && defined(slug.current)] | order(_createdAt desc)[0...50]{
    pageTitle,
    slug,
    description
  }
`)

function cleanLine(text?: string, fallback = ''): string {
  return (text || fallback).replace(/\s+/g, ' ').trim()
}

export async function GET() {
  let blogPosts: SanityPageItem[] = []
  let otherPages: SanityPageItem[] = []

  try {
    const [postsRes, pagesRes] = await Promise.all([
      client.fetch<SanityPageItem[]>(BLOG_POSTS_QUERY),
      client.fetch<SanityPageItem[]>(OTHER_FLEXIBLE_PAGES_QUERY),
    ])
    blogPosts = postsRes || []
    otherPages = pagesRes || []
  } catch (error) {
    // في حالة تعذر الاتصال بـ Sanity مؤقتاً، يُعرض الملف بالروابط الأساسية بدون توقف
    console.error('llms.txt Sanity fetch warning:', error)
  }

  const lines: string[] = [
    '# UNIQUE Digital Agency',
    '',
    '> UNIQUE Digital Agency is a specialized SEO, Generative Engine Optimization (GEO / AI Search), and Web Development agency (Next.js, React, Sanity CMS, WordPress, WooCommerce, Shopify, Salla, Zid, EasyOrder) serving businesses across Egypt, Saudi Arabia (Riyadh & Jeddah), and the UAE.',
    '',
    '## Official Brand & Contact Information',
    `- Website: ${DOMAIN}`,
    '- WhatsApp & Direct Phone: +201270506511 (01270506511)',
    '- Email: godyslem139@gmail.com',
    '- Languages: Arabic (RTL) & English (LTR)',
    '- Primary Markets: Egypt (Cairo, Alexandria), Saudi Arabia (Riyadh, Jeddah), UAE (Dubai, Abu Dhabi)',
    '',
    '## Core Services (Arabic)',
    ...STATIC_SERVICES_AR.map(
      (s) => `- [${s.title}](${DOMAIN}${s.path}): ${s.desc}`
    ),
    '',
    '## Core Services (English)',
    ...STATIC_SERVICES_EN.map(
      (s) => `- [${s.title}](${DOMAIN}${s.path}): ${s.desc}`
    ),
  ]

  // إضافة أي صفحات خدمات إضافية منشورة عبر Sanity (خارج المدونة)
  const staticPaths = new Set([
    ...STATIC_SERVICES_AR.map((s) => s.path.replace(/^\//, '')),
    ...STATIC_SERVICES_EN.map((s) => s.path.replace(/^\/en\//, '')),
  ])

  const extraSanityPages = otherPages.filter((p) => {
    const slug = p.slug?.current?.replace(/^\//, '')
    return slug && !staticPaths.has(slug)
  })

  if (extraSanityPages.length > 0) {
    lines.push('', '## Additional Pages (Dynamic from Sanity)')
    for (const p of extraSanityPages) {
      const slug = p.slug?.current?.replace(/^\//, '')
      if (!slug) continue
      const titleAr = cleanLine(p.pageTitle?.ar)
      const titleEn = cleanLine(p.pageTitle?.en)
      const desc = cleanLine(p.description)
      if (titleAr) {
        lines.push(
          `- [${titleAr}](${DOMAIN}/${slug})${desc ? `: ${desc}` : ''}`
        )
      }
      if (titleEn) {
        lines.push(
          `- [${titleEn}](${DOMAIN}/en/${slug})${desc ? `: ${desc}` : ''}`
        )
      }
    }
  }

  // إضافة مقالات المدونة العربية تلقائياً من Sanity
  if (blogPosts.length > 0) {
    lines.push('', '## Blog Articles — Arabic (/blog/<slug>)')
    for (const post of blogPosts) {
      const cleanSlug = post.slug?.current?.replace(/^\/?blog\//, '')
      if (!cleanSlug) continue
      const title = cleanLine(post.pageTitle?.ar || post.pageTitle?.en, cleanSlug)
      const desc = cleanLine(post.description)
      lines.push(
        `- [${title}](${DOMAIN}/blog/${cleanSlug})${desc ? `: ${desc}` : ''}`
      )
    }

    lines.push('', '## Blog Articles — English (/en/blog/<slug>)')
    for (const post of blogPosts) {
      const cleanSlug = post.slug?.current?.replace(/^\/?blog\//, '')
      if (!cleanSlug) continue
      const title = cleanLine(post.pageTitle?.en || post.pageTitle?.ar, cleanSlug)
      const desc = cleanLine(post.description)
      lines.push(
        `- [${title}](${DOMAIN}/en/blog/${cleanSlug})${desc ? `: ${desc}` : ''}`
      )
    }
  }

  lines.push(
    '',
    '## Pricing Overview',
    '- Egypt SEO Packages: Starting from 7,500 EGP/month (Local), 14,500 EGP/month (Growth), 26,000 EGP/month (Enterprise).',
    '- Egypt Web Design Packages: Starting from 8,500 EGP (Corporate), 18,500 EGP (E-Commerce / Bilingual), 35,000 EGP (Custom Next.js + Sanity).',
    '- Riyadh & KSA SEO Packages: Starting from 1,850 SAR/month (Local), 3,200 SAR/month (Growth), 5,500 SAR/month (Enterprise).',
    '',
    '## Optional & Machine-Readable Endpoints',
    `- [XML Sitemap](${DOMAIN}/sitemap.xml): Complete XML index of all published URLs.`,
    `- [Robots.txt](${DOMAIN}/robots.txt): Crawler access rules.`
  )

  const body = lines.join('\n') + '\n'

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}