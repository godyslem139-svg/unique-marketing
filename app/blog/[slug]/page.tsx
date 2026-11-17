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

// جلب أحدث 5 مقالات
const LATEST_POSTS_QUERY = defineQuery(`
  *[_type == "flexiblePage" && slug.current match "blog*"] | order(_createdAt desc)[0...5]{
    pageTitle,
    slug,
    _createdAt
  }
`)

// جلب أكثر 5 مقالات مشاهدة (يرتب حسب views إذا كانت موجودة أو يعرض أهم 5 مقالات)
const MOST_VIEWED_QUERY = defineQuery(`
  *[_type == "flexiblePage" && slug.current match "blog*"] | order(coalesce(views, 0) desc, _updatedAt desc)[0...5]{
    pageTitle,
    slug,
    _createdAt,
    views
  }
`)

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params
  const rawSlug = decodeURIComponent(resolvedParams.slug)
  const fullSlug = rawSlug.startsWith('blog/') ? rawSlug : `blog/${rawSlug}`
  
  const [page, latestPosts, mostViewedPosts] = await Promise.all([
    client.fetch(PAGE_QUERY, { slug: fullSlug }),
    client.fetch(LATEST_POSTS_QUERY),
    client.fetch(MOST_VIEWED_QUERY)
  ])

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
      
      {/* الحاوية الرئيسية التي تجمع مستطيل المقال والسكشنين الجانبيين */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ==========================================
              العمود الأول (8 أعمدة): المستطيل الطويل للمقال والصورة
              ========================================== */}
          <main className="lg:col-span-8 w-full">
            <article className="bg-[#080B12] border border-neutral-800/90 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(37,99,235,0.07)]">
              
              {/* الصورة العلوية داخل المستطيل (إذا لم تكن مدمجة مسبقاً داخل DynamicPageClient) */}
              {featuredImageUrl && (
                <div className="p-4 sm:p-6 pb-0">
                  <div className="w-full h-[240px] sm:h-[360px] md:h-[420px] relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
                    <img
                      src={featuredImageUrl}
                      alt={page?.pageTitle?.ar || 'صورة المقال'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* محتوى المقال المنسق داخل المستطيل */}
              <div className="p-6 sm:p-10 md:p-12 
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

          {/* ==========================================
              العمود الثاني (4 أعمدة): الشريط الجانبي الطولي (Sticky Sidebar)
              ========================================== */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 w-full">
            
            {/* 1. سكشن أحدث 5 مقالات */}
            <div className="bg-[#080B12] border border-neutral-800/90 rounded-3xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              <h3 className="text-lg font-extrabold mb-5 text-white border-b border-neutral-800 pb-4 flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  أحدث 5 مقالات
                </span>
                <span className="text-xs font-medium text-neutral-500">جديد المدونة</span>
              </h3>
              
              <div className="space-y-3.5">
                {latestPosts && latestPosts.length > 0 ? (
                  latestPosts.map((post: any, idx: number) => {
                    const postSlug = post.slug?.current?.replace('blog/', '')
                    if (!postSlug) return null

                    return (
                      <Link 
                        key={idx}
                        href={`/blog/${postSlug}`}
                        className="block group p-3.5 rounded-2xl bg-[#04060A] border border-neutral-800/70 hover:border-cyan-500/50 hover:bg-neutral-900/60 transition-all duration-300"
                      >
                        <h4 className="text-sm font-bold text-gray-200 group-hover:text-cyan-400 transition line-clamp-2 leading-relaxed">
                          {post.pageTitle?.ar || post.pageTitle?.en || 'مقال بدون عنوان'}
                        </h4>
                        <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-neutral-900">
                          <span className="text-[11px] text-neutral-500">
                            {new Date(post._createdAt).toLocaleDateString('ar-EG')}
                          </span>
                          <span className="text-[11px] text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                            اقرأ المزيد ←
                          </span>
                        </div>
                      </Link>
                    )
                  })
                ) : (
                  <p className="text-xs text-neutral-500 text-center py-4">لا توجد مقالات مضافة بعد.</p>
                )}
              </div>
            </div>

            {/* 2. سكشن أكثر 5 مقالات مشاهدة */}
            <div className="bg-[#080B12] border border-neutral-800/90 rounded-3xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              <h3 className="text-lg font-extrabold mb-5 text-white border-b border-neutral-800 pb-4 flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  الأكثر مشاهدة
                </span>
                <span className="text-xs font-medium text-amber-400/80">Top 5</span>
              </h3>
              
              <div className="space-y-3.5">
                {mostViewedPosts && mostViewedPosts.length > 0 ? (
                  mostViewedPosts.slice().reverse().map((post: any, idx: number) => {
                    const postSlug = post.slug?.current?.replace('blog/', '')
                    if (!postSlug) return null

                    return (
                      <Link 
                        key={idx}
                        href={`/blog/${postSlug}`}
                        className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#04060A] border border-neutral-800/70 hover:border-blue-500/50 hover:bg-neutral-900/60 transition-all duration-300 group"
                      >
                        <div className="w-9 h-9 shrink-0 rounded-xl bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-sm font-black text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          0{idx + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-gray-200 group-hover:text-blue-400 transition line-clamp-2 leading-relaxed">
                            {post.pageTitle?.ar || post.pageTitle?.en || 'مقال بدون عنوان'}
                          </h4>
                        </div>
                      </Link>
                    )
                  })
                ) : (
                  <p className="text-xs text-neutral-500 text-center py-4">لا توجد بيانات متاحة.</p>
                )}
              </div>
            </div>

          </aside>

        </div>
      </div>

      <div className="mt-16">
        <GeoKeywordsSection />
      </div>
    </div>
  )
}