import { client } from '@/sanity/lib/client'
import { PAGE_QUERY } from '@/sanity/lib/queries'
import { defineQuery } from 'next-sanity'
import DynamicPageClient from '@/components/DynamicPageClient'
import GeoKeywordsSection from '@/components/GeoKeywordsSection'
import Link from 'next/link'
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

const SIDEBAR_POSTS_QUERY = defineQuery(`
  *[_type == "flexiblePage" && slug.current match "blog*"] | order(_createdAt desc)[0...6]{
    pageTitle,
    slug,
    _createdAt
  }
`)

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params
  const rawSlug = decodeURIComponent(resolvedParams.slug)
  const fullSlug = rawSlug.startsWith('blog/') ? rawSlug : `blog/${rawSlug}`
  
  const [page, sidebarPosts] = await Promise.all([
    client.fetch(PAGE_QUERY, { slug: fullSlug }),
    client.fetch(SIDEBAR_POSTS_QUERY)
  ])

  if (!page) {
    notFound()
  }

  // استخراج رابط الصورة البارزة في حال كانت موجودة مباشرة في بيانات الصفحة من Sanity
  const featuredImageUrl =
    page?.mainImage?.asset?.url ||
    page?.image?.asset?.url ||
    page?.featuredImage?.asset?.url ||
    page?.ogImage?.asset?.url ||
    null;

  return (
    <div className="min-h-screen bg-[#000000] text-white rtl py-10 md:py-16" dir="rtl">
      {/* 
        الحاوية المركزية: max-w-4xl تجعل المستطيل في منتصف الشاشة بالضبط 
        وبعرض مثالي للقراءة بدلاً من التمدد الكامل
      */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* المستطيل الطويل الرئيسي الذي يضم الصورة والمحتوى معاً */}
        <article className="bg-[#080B12] border border-neutral-800/90 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(37,99,235,0.07)]">
          
          {/* 1. الصورة داخل المستطيل من الأعلى (في حال كانت ممررة من بيانات الصفحة) */}
          {featuredImageUrl && (
            <div className="w-full h-[260px] sm:h-[380px] md:h-[440px] relative overflow-hidden border-b border-neutral-800 bg-neutral-950">
              <img
                src={featuredImageUrl}
                alt={page?.pageTitle?.ar || 'صورة المقال'}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-transparent to-transparent opacity-80" />
            </div>
          )}

          {/* 
            2. منطقة المحتوى داخل المستطيل 
            تمت إضافة تنسيقات تلقائية للصور والعناوين والفقرات داخل DynamicPageClient 
            لضمان بقاء أي صورة علوية أو داخلية منسقة داخل المستطيل
          */}
          <div className="p-6 sm:p-10 md:p-14 
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

        {/* قسم أجدد المقالات أسفل المستطيل الرئيسي للحفاظ على تمركز المقال في المنتصف */}
        <section className="mt-12 bg-[#080B12] border border-neutral-800/90 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
            <h3 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
              مقالات قد تهمك أيضاً
            </h3>
            <Link href="/blog" className="text-xs sm:text-sm text-blue-400 hover:text-cyan-300 font-bold">
              عرض كل المقالات ←
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {sidebarPosts && sidebarPosts.length > 0 ? (
              sidebarPosts.map((post: any, idx: number) => {
                const postSlug = post.slug?.current?.replace('blog/', '')
                if (!postSlug) return null

                return (
                  <Link 
                    key={idx}
                    href={`/blog/${postSlug}`}
                    className="flex flex-col justify-between p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/70 hover:border-blue-500/50 transition duration-300 group"
                  >
                    <h4 className="text-sm font-bold text-gray-200 group-hover:text-blue-400 transition line-clamp-2 leading-relaxed">
                      {post.pageTitle?.ar || post.pageTitle?.en || 'مقال بدون عنوان'}
                    </h4>
                    <span className="text-xs text-neutral-500 mt-4 pt-2 border-t border-neutral-900 block">
                      {new Date(post._createdAt).toLocaleDateString('ar-EG')}
                    </span>
                  </Link>
                )
              })
            ) : (
              <p className="text-xs text-neutral-500 text-center py-4 col-span-full">
                لا توجد مقالات مضافة بعد.
              </p>
            )}
          </div>
        </section>

      </div>

      <div className="mt-16">
        <GeoKeywordsSection />
      </div>
    </div>
  )
}