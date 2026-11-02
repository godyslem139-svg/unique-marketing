import { client } from '@/sanity/lib/client'
import { PAGE_QUERY } from '@/sanity/lib/queries'
import DynamicPageClient from '@/components/DynamicPageClient'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const slug = resolvedParams.slug

  // إذا كان الرابط هو blog أو يبدأ بـ blog/، قم بإرجاع 404 من هنا لكي يسمح لـ app/blog بالعمل
  if (!slug || slug === 'blog' || slug.startsWith('blog/')) {
    notFound()
  }

  const page = await client.fetch(PAGE_QUERY, { slug })

  if (!page) {
    notFound()
  }

  return <DynamicPageClient page={page} />
}