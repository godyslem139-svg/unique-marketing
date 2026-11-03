import { client } from '@/sanity/lib/client'
import { PAGE_QUERY } from '@/sanity/lib/queries'
import DynamicPageClient from '@/components/DynamicPageClient'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug;
  const fullSlug = Array.isArray(slugArray) ? slugArray.join('/') : slugArray;
  const domain = "https://www.uniquee-ws.com";

  const page = await client.fetch(PAGE_QUERY, { slug: fullSlug });

  const title = page?.pageTitle?.ar || page?.pageTitle?.en || fullSlug;
  const description = page?.description || 'شركة سيو متخصصة في تحسين محركات البحث.';

  return {
    title: `${title} | Unique`,
    description: description,
    alternates: {
      canonical: `${domain}/${fullSlug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug;
  const fullSlug = Array.isArray(slugArray) ? slugArray.join('/') : slugArray;

  if (!fullSlug || fullSlug === 'blog' || fullSlug.startsWith('blog/')) {
    notFound();
  }

  const page = await client.fetch(PAGE_QUERY, { slug: fullSlug });

  if (!page) {
    notFound();
  }

  return <DynamicPageClient page={page} />;
}