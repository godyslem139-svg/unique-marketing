import { client } from '@/sanity/lib/client'
import { PAGE_QUERY } from '@/sanity/lib/queries'
import { defineQuery } from 'next-sanity'
import DynamicPageClient from '@/components/DynamicPageClient'
import GeoKeywordsSection from '@/components/GeoKeywordsSection'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const SIDEBAR_POSTS_QUERY = defineQuery(`
  *[_type == "flexiblePage" && slug.current match "blog*"] | order(_createdAt desc)[0...5]{
    pageTitle,
    slug,
    _createdAt
  }
`)

export default async function EnBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
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
    <div className="min-h-screen bg-black text-white ltr" dir="ltr">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <main className="lg:col-span-8 w-full">
            <DynamicPageClient page={page} />
          </main>

          <aside className="lg:col-span-4 space-y-8 sticky top-28">
            
            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-xl">
              <h3 className="text-lg font-extrabold mb-6 text-white border-b border-neutral-800 pb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Latest Articles
              </h3>
              
              <div className="space-y-4">
                {sidebarPosts && sidebarPosts.length > 0 ? (
                  sidebarPosts.map((post: any, idx: number) => {
                    const postSlug = post.slug?.current?.replace('blog/', '')
                    if (!postSlug) return null

                    return (
                      <Link 
                        key={idx}
                        href={`/en/blog/${postSlug}`}
                        className="block group p-3 rounded-2xl bg-neutral-950 border border-neutral-800/60 hover:border-blue-500/50 transition duration-300"
                      >
                        <h4 className="text-sm font-bold text-gray-200 group-hover:text-blue-400 transition line-clamp-2">
                          {post.pageTitle?.en || post.pageTitle?.ar || 'Untitled Article'}
                        </h4>
                        <span className="text-xs text-neutral-500 mt-2 block">
                          {new Date(post._createdAt).toLocaleDateString('en-US')}
                        </span>
                      </Link>
                    )
                  })
                ) : (
                  <p className="text-xs text-neutral-500 text-center py-4">No articles available.</p>
                )}
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-xl">
              <h3 className="text-lg font-extrabold mb-6 text-white border-b border-neutral-800 pb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Most Popular
              </h3>
              
              <div className="space-y-4">
                {sidebarPosts && sidebarPosts.length > 0 ? (
                  sidebarPosts.slice().reverse().map((post: any, idx: number) => {
                    const postSlug = post.slug?.current?.replace('blog/', '')
                    if (!postSlug) return null

                    return (
                      <Link 
                        key={idx}
                        href={`/en/blog/${postSlug}`}
                        className="flex items-center gap-3 p-3 rounded-2xl bg-neutral-950 border border-neutral-800/60 hover:border-indigo-500/50 transition duration-300 group"
                      >
                        <span className="text-lg font-black text-neutral-600 group-hover:text-indigo-400">
                          0{idx + 1}
                        </span>
                        <h4 className="text-sm font-bold text-gray-200 group-hover:text-indigo-400 transition line-clamp-2">
                          {post.pageTitle?.en || post.pageTitle?.ar || 'Untitled Article'}
                        </h4>
                      </Link>
                    )
                  })
                ) : (
                  <p className="text-xs text-neutral-500 text-center py-4">No data available.</p>
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