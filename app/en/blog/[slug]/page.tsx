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
  // فك تشفير الرابط لضمان قراءة الحروف العربية والرموز بشكل صحيح
  const rawSlug = decodeURIComponent(resolvedParams.slug);
  const fullSlug = rawSlug.startsWith('blog/') ? rawSlug : `blog/${rawSlug}`;
  const domain = "https://www.uniquee-ws.com";

  const page = await client.fetch(PAGE_QUERY, { slug: fullSlug });

  const title = page?.pageTitle?.en || page?.pageTitle?.ar || 'Detailed Article';
  const description = page?.description || 'Read insightful articles and expert tips on SEO and digital marketing.';

  return {
    title: `${title} | Unique Blog`,
    description: description,
    alternates: {
      canonical: `${domain}/en/blog/${rawSlug.replace('blog/', '')}`,
    },
  };
}

export default async function EnBlogPostPage({ params }: Props) {
  const resolvedParams = await params
  // فك تشفير الرابط لضمان قراءة الحروف العربية والرموز بشكل صحيح
  const rawSlug = decodeURIComponent(resolvedParams.slug)
  const fullSlug = rawSlug.startsWith('blog/') ? rawSlug : `blog/${rawSlug}`

  const page = await client.fetch(PAGE_QUERY, { slug: fullSlug })

  if (!page) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white ltr" dir="ltr">
      <div className="max-w-[1050px] mx-auto px-4 md:px-8 py-12">
        <main className="w-full">
          <DynamicPageClient page={page} />
        </main>
      </div>

      <GeoKeywordsSection />
    </div>
  )
}