import { client } from '@/sanity/lib/client'
import { PAGE_QUERY } from '@/sanity/lib/queries'
import DynamicPageClient from '@/components/DynamicPageClient'
import { notFound } from 'next/navigation'

export default async function EnglishPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const slug = resolvedParams.slug

  if (!slug || slug === 'blog' || slug.startsWith('blog/')) {
    notFound()
  }

  // هنا ممكن لو الـ Sanity عندك بيميز المقالات أو الصفحات الإنجليزية بلغة معينة، 
  // تقدر تعدل الـ Query أو تجيب الـ slug زي ما هو.
  const page = await client.fetch(PAGE_QUERY, { slug })

  if (!page) {
    notFound()
  }

  return <DynamicPageClient page={page} />
}