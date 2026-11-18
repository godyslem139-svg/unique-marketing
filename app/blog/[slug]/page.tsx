import { client } from '@/sanity/lib/client'
import { PAGE_QUERY } from '@/sanity/lib/queries'
import DynamicPageClient from '@/components/DynamicPageClient'
import GeoKeywordsSection from '@/components/GeoKeywordsSection'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const rawSlug = decodeURIComponent(resolvedParams.slug);
  const fullSlug = rawSlug.startsWith('blog/') ? rawSlug : `blog/${rawSlug}`;
  const domain = "https://www.uniquee-ws.com";

  const page = await client.fetch(PAGE_QUERY, { slug: fullSlug });

  const title = page?.pageTitle?.ar || page?.pageTitle?.en || 'مقال تفصيلي';
  const description = page?.description || 'تصفح تفاصيل المقال وأحدث نصائح الخبراء في تحسين محركات البحث.';

  return {
    title: `${title} | مدونة Unique`,
    description: description,
    alternates: {
      canonical: `${domain}/blog/${rawSlug.replace('blog/', '')}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params
  const rawSlug = decodeURIComponent(resolvedParams.slug)
  const fullSlug = rawSlug.startsWith('blog/') ? rawSlug : `blog/${rawSlug}`

  const page = await client.fetch(PAGE_QUERY, { slug: fullSlug })

  if (!page) {
    notFound()
  }

  // استخراج رابط الصورة البارزة في حال كانت ممررة من خارج مكون DynamicPageClient
  const featuredImageUrl =
    page?.mainImage?.asset?.url ||
    page?.image?.asset?.url ||
    page?.featuredImage?.asset?.url ||
    page?.ogImage?.asset?.url ||
    null;

  return (
    <div className="min-h-screen bg-[#000000] text-white rtl py-10 md:py-16" dir="rtl">
      {/* الحاوية الرئيسية للمقال بدون أي شريط أو سكشن جانبي */}
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6 lg:px-8">
        <main className="w-full">
          <article className="bg-[#080B12] border border-neutral-800/90 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(37,99,235,0.07)]">
            {/* الصورة العلوية داخل المستطيل (إذا لم تكن مدمجة مسبقاً داخل DynamicPageClient) */}
            {featuredImageUrl && (
              <div className="p-4 sm:p-6 pb-0">
                <div className="w-full h-[240px] sm:h-[360px] md:h-[440px] relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
                  <img
                    src={featuredImageUrl}
                    alt={page?.pageTitle?.ar || 'صورة المقال'}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* محتوى المقال المنسق داخل المستطيل */}
            <div
              className="p-6 sm:p-10 md:p-12 
                [&_img]:w-full [&_img]:max-h-[450px] [&_img]:object-cover [&_img]:rounded-2xl [&_img]:mb-8 [&_img]:border [&_img]:border-neutral-800
                [&_h1]:text-2xl sm:[&_h1]:text-3xl md:[&_h1]:text-4xl [&_h1]:font-black [&_h1]:text-white [&_h1]:mb-6 [&_h1]:leading-snug
                [&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-cyan-400 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:pb-3 [&_h2]:border-b [&_h2]:border-neutral-800/80
                [&_h3]:text-lg sm:[&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-blue-300 [&_h3]:mt-8 [&_h3]:mb-3
                [&_p]:text-gray-300 [&_p]:leading-loose [&_p]:text-base sm:[&_p]:text-lg [&_p]:mb-5
                [&_ul]:space-y-2.5 [&_ul]:mb-6 [&_ul]:pr-5 [&_ul]:list-disc [&_li]:text-gray-300 [&_li]:leading-relaxed
                [&_a]:text-blue-400 hover:[&_a]:text-cyan-300 [&_a]:underline [&_a]:underline-offset-4 transition-colors
                [&_hr]:border-neutral-800 [&_hr]:my-8"
            >
              <DynamicPageClient page={page} />
            </div>
          </article>
        </main>
      </div>

      <div className="mt-16">
        <GeoKeywordsSection />
      </div>
    </div>
  )
}