import { client } from '@/sanity/lib/client'
import { PAGE_QUERY } from '@/sanity/lib/queries'
import DynamicPageClient from '@/components/DynamicPageClient'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const domain = "https://www.uniquee-ws.com";

  const page = await client.fetch(PAGE_QUERY, { slug });

  return {
    title: page?.title ? `${page.title} | Unique Agency` : "Unique Digital Agency",
    description: page?.description || "Specialized SEO agency helping you improve rankings.",
    alternates: {
      canonical: `${domain}/en/${slug}`,
    },
  };
}

export default async function EnglishPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug || slug === 'blog' || slug.startsWith('blog/')) {
    notFound();
  }

  const page = await client.fetch(PAGE_QUERY, { slug });

  if (!page) {
    notFound();
  }

  return <DynamicPageClient page={page} />;
}