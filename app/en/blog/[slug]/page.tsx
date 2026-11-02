import { client } from '@/sanity/lib/client'
import { PAGE_QUERY } from '@/sanity/lib/queries'
import { defineQuery } from 'next-sanity'
import DynamicPageClient from '@/components/DynamicPageClient'
import GeoKeywordsSection from '@/components/GeoKeywordsSection'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// استعلام لجلب أجدد المقالات للسايدبار الجانبي مع جلب العناوين باللغتين
const SIDEBAR_POSTS_QUERY = defineQuery(`
  *[_type == "flexiblePage" && slug.current match "blog*"] | order(_createdAt desc)[0...5]{
    pageTitle,
    slug,
    _createdAt
  }
`)

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const rawSlug = resolvedParams.slug

  const fullSlug = rawSlug.startsWith('blog/') ? rawSlug : `blog/${rawSlug}`
  
  const [page, sidebarPosts] = await Promise.all([
    client.fetch(PAGE_QUERY, { slug: fullSlug }),
    client.fetch(SIDEBAR_POSTS_QUERY)
  ])

  if (!page) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* المحتوى الرئيسي للمقال (8 أعمدة) */}
          <main className="lg:col-span-8 w-full">
            <DynamicPageClient page={page} />
          </main>

          {/* السايدبار الجانبي (4 أعمدة - يمين في العربي ويسار في الإنجليزي تلقائياً) */}
          <aside className="lg:col-span-4 space-y-8 sticky top-28">
            
            {/* قسم أجدد 5 مقالات */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-xl">
              {/* العنوان يتغير ديناميكياً حسب اللغة */}
              <h3 className="text-lg font-extrabold mb-6 text-white border-b border-neutral-800 pb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="hidden [[dir=rtl]_&]:inline">أجدد المقالات</span>
                <span className="hidden [[dir=ltr]_&]:inline">Latest Articles</span>
              </h3>
              
              <div className="space-y-4">
                {sidebarPosts && sidebarPosts.length > 0 ? (
                  sidebarPosts.map((post: any, idx: number) => {
                    const postSlug = post.slug?.current?.replace('blog/', '')
                    if (!postSlug) return null

                    return (
                      <Link 
                        key={idx}
                        href={`/blog/${postSlug}`}
                        className="block group p-3 rounded-2xl bg-neutral-950 border border-neutral-800/60 hover:border-blue-500/50 transition duration-300"
                      >
                        {/* عرض العنوان باللغة العربية حصراً في وضع الـ RTL والعنوان الإنجليزي حصراً في وضع الـ LTR */}
                        <h4 className="text-sm font-bold text-gray-200 group-hover:text-blue-400 transition line-clamp-2">
                          <span className="hidden [[dir=rtl]_&]:inline">{post.pageTitle?.ar || 'مقال بدون عنوان'}</span>
                          <span className="hidden [[dir=ltr]_&]:inline">{post.pageTitle?.en || post.pageTitle?.ar || 'Untitled Article'}</span>
                        </h4>
                        <span className="text-xs text-neutral-500 mt-2 block">
                          {new Date(post._createdAt).toLocaleDateString('ar-EG')}
                        </span>
                      </Link>
                    )
                  })
                ) : (
                  <p className="text-xs text-neutral-500 text-center py-4">
                    <span className="hidden [[dir=rtl]_&]:inline">لا توجد مقالات مضافة بعد.</span>
                    <span className="hidden [[dir=ltr]_&]:inline">No articles available.</span>
                  </p>
                )}
              </div>
            </div>

            {/* قسم أكثر المقالات زيارة (الأكثر نقراً) */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-xl">
              <h3 className="text-lg font-extrabold mb-6 text-white border-b border-neutral-800 pb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="hidden [[dir=rtl]_&]:inline">الأكثر زيارة</span>
                <span className="hidden [[dir=ltr]_&]:inline">Most Popular</span>
              </h3>
              
              <div className="space-y-4">
                {sidebarPosts && sidebarPosts.length > 0 ? (
                  sidebarPosts.slice().reverse().map((post: any, idx: number) => {
                    const postSlug = post.slug?.current?.replace('blog/', '')
                    if (!postSlug) return null

                    return (
                      <Link 
                        key={idx}
                        href={`/blog/${postSlug}`}
                        className="flex items-center gap-3 p-3 rounded-2xl bg-neutral-950 border border-neutral-800/60 hover:border-indigo-500/50 transition duration-300 group"
                      >
                        <span className="text-lg font-black text-neutral-600 group-hover:text-indigo-400">
                          0{idx + 1}
                        </span>
                        <h4 className="text-sm font-bold text-gray-200 group-hover:text-indigo-400 transition line-clamp-2">
                          <span className="hidden [[dir=rtl]_&]:inline">{post.pageTitle?.ar || 'مقال بدون عنوان'}</span>
                          <span className="hidden [[dir=ltr]_&]:inline">{post.pageTitle?.en || post.pageTitle?.ar || 'Untitled Article'}</span>
                        </h4>
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

      <GeoKeywordsSection />
    </div>
  )
}