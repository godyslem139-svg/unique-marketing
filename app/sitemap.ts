import { MetadataRoute } from 'next';
import { createClient } from '@sanity/client';

// إعداد عميل سانتي لجلب المقالات أوتوماتيكياً
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ff1dwnu5',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-10-12',
  useCdn: true,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.uniquee-ws.com';
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // دالة مساعدة لإضافة الروابط باللغتين (العربية والإنجليزية)
  const addLocalizedEntries = (
    path: string, 
    priority: number, 
    changeFrequency: 'daily' | 'weekly' | 'monthly'
  ) => {
    // 1. النسخة العربية (بدون بادئة)
    sitemapEntries.push({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    });

    // 2. النسخة الإنجليزية (مسبوقة بـ /en)
    // مع التعامل مع المسار الرئيسي (root) بشكل صحيح لتجنب التكرار مثل //en
    const enPath = path === '' ? '/en' : `/en${path}`;
    sitemapEntries.push({
      url: `${baseUrl}${enPath}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    });
  };

  // 1. الصفحات الرئيسية الثابتة (للغتين)
  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'daily' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/portfolio', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/pricing', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  staticPages.forEach((page) => {
    addLocalizedEntries(page.url, page.priority, page.changeFrequency);
  });

  const geoSlugs = [
    'SEOCompanySaudiArabia',
    'seocompanyjeddah',
    'SEOcompanyinRiyadh',
    'SEOCompanyUAE',
    'SEOCompanySharjah',
    'SEOCompanyDubai',
    'SEOCompanyKuwait',
    'SEOCompanyEgypt',
    'SEOCompanyAlexandria',
    'SEOCompanyCairo',
    'WebsiteDesignCompanySaudiArabia',
    'WebsiteDesignCompanyRiyadh',
    'WebsiteDesignCompanyJeddah',
    'WebsiteDesignCompanyKuwait',
    'WebsiteDesignCompanyUAE',
    'WebsiteDesignCompanySharjah',
    'WebsiteDesignCompanyDubai',
    'WebsiteDesignCompanyEgypt',
    'WebsiteDesignCompanyAlexandria',
    'WebsiteDesignCompanyCairo',
  ];

  geoSlugs.forEach((slug) => {
    addLocalizedEntries(`/${slug}`, 0.8, 'weekly');
  });

  const serviceSlugs = [
    'services/seo',
    'services/backlinks',
    'services/wordpress-nextjs',
    'services/e-commerce',
    'services/android',
    'services/content-writing',
  ];

  serviceSlugs.forEach((service) => {
    addLocalizedEntries(`/${service}`, 0.8, 'weekly');
  });

  try {
    const posts = await client.fetch(`*[_type == "post"] { "slug": slug.current, _updatedAt }`);
    
    if (posts && Array.isArray(posts)) {
      posts.forEach((post: { slug: string; _updatedAt: string }) => {
        if (post.slug) {
          const lastModDate = new Date(post._updatedAt || Date.now());

          sitemapEntries.push({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: lastModDate,
            changeFrequency: 'weekly',
            priority: 0.6,
          });

          sitemapEntries.push({
            url: `${baseUrl}/en/blog/${post.slug}`,
            lastModified: lastModDate,
            changeFrequency: 'weekly',
            priority: 0.6,
          });
        }
      });
    }
  } catch (error) {
    console.error('Error fetching blog posts from Sanity for sitemap:', error);
  }

  return sitemapEntries;
}