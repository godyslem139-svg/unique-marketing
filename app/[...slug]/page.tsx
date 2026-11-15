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

  const isEnglish = fullSlug.startsWith('en');

  // قراءة حقول السيو من داخل كائن seo
  const title = isEnglish 
    ? (page?.seo?.metaTitle?.en || page?.pageTitle?.en || fullSlug)
    : (page?.seo?.metaTitle?.ar || page?.pageTitle?.ar || fullSlug);

  const description = isEnglish
    ? (page?.seo?.metaDescription?.en || page?.description?.en || '')
    : (page?.seo?.metaDescription?.ar || page?.description?.ar || 'شركة سيو متخصصة في تحسين محركات البحث.');

  return {
    title: title,
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