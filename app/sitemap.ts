import { MetadataRoute } from 'next';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ff1dwnu5',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-10-12',
  useCdn: true,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.uniquee-ws.com';
  const sitemapEntries: MetadataRoute.Sitemap = [];

  const addLocalizedEntries = (
    path: string, 
    priority: number, 
    changeFrequency: 'daily' | 'weekly' | 'monthly'
  ) => {
    sitemapEntries.push({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    });

    const enPath = path === '' ? '/en' : `/en${path}`;
    sitemapEntries.push({
      url: `${baseUrl}${enPath}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    });
  };

  // 1. الصفحات الرئيسية الثابتة
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

  // 2. صفحات السيو الجغرافية
  const geoSlugs = [
    'SEOCompanySaudiArabia', 'seocompanyjeddah', 'SEOcompanyinRiyadh',
    'SEOCompanyUAE', 'SEOCompanySharjah', 'SEOCompanyDubai',
    'SEOCompanyKuwait', 'SEOCompanyEgypt', 'SEOCompanyAlexandria',
    'SEOCompanyCairo', 'WebsiteDesignCompanySaudiArabia',
    'WebsiteDesignCompanyRiyadh', 'WebsiteDesignCompanyJeddah',
    'WebsiteDesignCompanyKuwait', 'WebsiteDesignCompanyUAE',
    'WebsiteDesignCompanySharjah', 'WebsiteDesignCompanyDubai',
    'WebsiteDesignCompanyEgypt', 'WebsiteDesignCompanyAlexandria',
    'WebsiteDesignCompanyCairo',
  ];

  geoSlugs.forEach((slug) => {
    addLocalizedEntries(`/${slug}`, 0.8, 'weekly');
  });

  // 3. صفحة الخدمات
  const serviceSlugs = [
    'services/seo', 'services/backlinks', 'services/wordpress-nextjs',
    'services/e-commerce', 'services/android', 'services/content-writing',
  ];

  serviceSlugs.forEach((service) => {
    addLocalizedEntries(`/${service}`, 0.8, 'weekly');
  });

  // 4. سحب المقالات بناءً على هيكل ملف المدونة الخاص بك (flexiblePage + blog/)
  try {
    const posts = await client.fetch(`*[_type == "flexiblePage" && slug.current match "blog*"] { 
      "currentSlug": slug.current,
      _updatedAt
    }`);
    
    if (posts && Array.isArray(posts)) {
      posts.forEach((post: { currentSlug?: string; _updatedAt: string }) => {
        if (post.currentSlug) {
          // استخراج الـ slug النظيف (إزالة كلمة blog/ إذا كانت موجودة لتجنب التكرار)
          const rawSlug = post.currentSlug.startsWith('blog/') 
            ? post.currentSlug.replace('blog/', '') 
            : post.currentSlug;

          if (rawSlug) {
            const lastModDate = new Date(post._updatedAt || Date.now());

            // المقال باللغة العربية
            sitemapEntries.push({
              url: `${baseUrl}/blog/${rawSlug}`,
              lastModified: lastModDate,
              changeFrequency: 'weekly',
              priority: 0.6,
            });

            // المقال باللغة الإنجليزية
            sitemapEntries.push({
              url: `${baseUrl}/en/blog/${rawSlug}`,
              lastModified: lastModDate,
              changeFrequency: 'weekly',
              priority: 0.6,
            });
          }
        }
      });
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
  }

  return sitemapEntries;
}