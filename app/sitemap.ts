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
    sitemapEntries.push({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  });

  // 2. صفحات السيو وتصميم المواقع الجغرافية (التي حددتها بدقة)
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
    sitemapEntries.push({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // 3. صفحة الخدمات والخدمات الفرعية التخصصية
  const serviceSlugs = [
    'services/seo',
    'services/backlinks',
    'services/wordpress-nextjs',
    'services/e-commerce',
    'services/android',
    'services/content-writing',
  ];

  serviceSlugs.forEach((service) => {
    sitemapEntries.push({
      url: `${baseUrl}/${service}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // 4. سحب المقالات الجديدة من Sanity أوتوماتيكياً وللأبد
  try {
    const posts = await client.fetch(`*[_type == "post"] { "slug": slug.current, _updatedAt }`);
    
    if (posts && Array.isArray(posts)) {
      posts.forEach((post: { slug: string; _updatedAt: string }) => {
        if (post.slug) {
          sitemapEntries.push({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post._updatedAt || Date.now()),
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