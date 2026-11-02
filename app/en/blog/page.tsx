'use client'

import React, { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'
import { defineQuery } from 'next-sanity'
import Link from 'next/link'
import GeoKeywordsSection from '@/components/GeoKeywordsSection'

const BLOG_INDEX_QUERY = defineQuery(`
  *[_type == "flexiblePage" && slug.current match "blog*"]{
    pageTitle,
    slug,
    sections[_type == "heroSection"][0]{
      "bgImageUrl": bgImage.asset->url,
      "bgVideoFileUrl": bgVideoFile.asset->url,
      bgVideoUrl
    }
  }
`)

export default function EnBlogIndexPage() {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    client.fetch(BLOG_INDEX_QUERY).then((data) => {
      setPosts(data || [])
    }).catch((err) => console.error(err))
  }, [])

  return (
    <main className="min-h-screen bg-black text-white ltr" dir="ltr">
      <div className="px-6 py-28 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center tracking-tight">
          Blog & Expert Articles
        </h1>
        
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {posts.map((post: any, idx: number) => {
              const title = post.pageTitle?.en || post.pageTitle?.ar || 'Untitled Article'
              const currentSlug = post.slug?.current || ''
              
              const rawSlug = currentSlug.startsWith('blog/') ? currentSlug.replace('blog/', '') : currentSlug

              if (!rawSlug) return null

              const heroSection = post.sections
              const heroImg = heroSection?.bgImageUrl
              const heroVideoFile = heroSection?.bgVideoFileUrl

              return (
                <div 
                  key={idx} 
                  className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition duration-300 shadow-xl flex flex-col justify-between group"
                >
                  <div className="w-full h-48 relative overflow-hidden bg-neutral-950">
                    {heroVideoFile ? (
                      <video src={heroVideoFile} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" muted playsInline />
                    ) : heroImg ? (
                      <img src={heroImg} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-600 text-xs">
                        [Article Image]
                      </div>
                    )}
                    <div className="absolute inset-0 bg-blue-600/10 pointer-events-none" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <h2 className="text-xl font-bold mb-6 text-white leading-snug line-clamp-2">
                      {title}
                    </h2>
                    <div>
                      <Link 
                        href={`/en/blog/${rawSlug}`}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-500 transition shadow-[0_0_15px_rgba(30,58,138,0.5)] w-full justify-center"
                      >
                        <span>Read Article</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-20 text-lg mb-24">
            No blog posts available at the moment.
          </div>
        )}
      </div>

      <GeoKeywordsSection />
    </main>
  )
}