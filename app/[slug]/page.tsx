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
    title: page?.title ? `${page.title} | Unique` : "Unique Digital Agency",
    description: page?.description || "شركة سيو متخصصة في تحسين محركات البحث SEO.",
    alternates: {
      canonical: `${domain}/${slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
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