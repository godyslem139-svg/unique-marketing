import type { Metadata } from "next";
import Link from "next/link";

// ============================================================================
// 0. BUILT-IN ZERO-DEPENDENCY SVG ICONS (NO EXTERNAL LIBRARY NEEDED)
// ============================================================================
interface IconProps {
  className?: string;
}

function Sparkles({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
    </svg>
  );
}

function Award({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function CheckCircle2({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function Check({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ArrowUpRight({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function ArrowRight({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ChevronRight({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function TrendingUp({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function MapPin({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MessageSquare({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function PhoneCall({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function Cpu({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" />
      <path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" />
    </svg>
  );
}

function ShoppingBag({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

// ============================================================================
// 1. COMPANY WHATSAPP CONFIGURATION (+20 12 70506511)
// ============================================================================
const WHATSAPP_NUMBER_DISPLAY = "01270506511";
const WHATSAPP_INTERNATIONAL = "201270506511";

function getWhatsAppUrl(customMessage: string): string {
  return `https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encodeURIComponent(customMessage)}`;
}

// ============================================================================
// 2. NEXT.JS APP ROUTER SEO METADATA (TITLE, DESCRIPTION, CANONICAL, OG)
// ============================================================================
export const metadata: Metadata = {
  title:
    "SEO Company in UAE | #1 SEO Agency in Dubai & Abu Dhabi | Unique",
  description:
    "Leading SEO Company in the UAE (Dubai, Abu Dhabi, Sharjah). We dominate Google.ae Page #1 and scale organic revenue for Next.js, WordPress, Shopify, Salla & EasyOrder websites with Technical SEO, Multilingual SEO, AI Search (GEO), and verified Google Search Console results.",
  keywords: [
    "SEO Company in UAE",
    "Best SEO Agency Dubai",
    "SEO Services Abu Dhabi",
    "SEO Company Sharjah",
    "Search Engine Optimization UAE",
    "E-commerce SEO Dubai",
    "Shopify SEO UAE",
    "Salla SEO UAE",
    "Technical SEO Consultant Dubai",
    "Multilingual SEO Agency UAE",
    "Local SEO Dubai",
    "Arabic & English SEO UAE",
    "AI Search Optimization GEO Dubai",
    "Real Estate SEO Dubai",
    "UNIQUE Digital Agency",
  ],
  authors: [{ name: "UNIQUE Digital Agency" }],
  publisher: "UNIQUE",
  metadataBase: new URL("https://marketing-beta-gold-30.vercel.app"),
  alternates: {
    canonical: "/en/uae-seo",
    languages: {
      "en-AE": "/en/uae-seo",
      "ar-AE": "/uae-seo",
      en: "/en/uae-seo",
      ar: "/uae-seo",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "SEO Company in UAE | Dominate Google.ae Page #1 & Scale Revenue | Unique",
    description:
      "Your strategic SEO partner in Dubai, Abu Dhabi, Sharjah, and across the Emirates. Full-stack Technical SEO, Multilingual Content Engineering (up to 7 languages), White-Hat Digital PR, and E-Commerce SEO.",
    url: "https://marketing-beta-gold-30.vercel.app/en/uae-seo",
    siteName: "Unique Agency",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Company in UAE | Best SEO Agency in Dubai & Abu Dhabi | Unique",
    description:
      "Verified Google Search Console growth for UAE enterprises, real estate portals, clinics, and e-commerce stores in Dubai, Abu Dhabi, and Sharjah.",
  },
};

// ============================================================================
// 3. TYPESCRIPT INTERFACES FOR UAE SEO ENGLISH PAGE
// ============================================================================
interface HeroKpiCard {
  id: string;
  value: string;
  title: string;
  subtitle: string;
  accent: "emerald" | "cyan" | "blue" | "amber";
}

interface SeoServicePillar {
  id: string;
  number: string;
  badge: string;
  title: string;
  arabicSubtitle: string;
  summary: string;
  businessImpactInUAE: string;
  executionChecklist: string[];
  deliverables: string[];
  whatsappText: string;
}

interface EcommerceSeoPlatform {
  id: string;
  platformName: string;
  marketShareTag: string;
  title: string;
  painPointSolved: string;
  technicalSolutions: string[];
  expectedGrowth: string;
  whatsappMsg: string;
}

interface GscCaseStudy {
  id: string;
  sector: string;
  city: string;
  platform: string;
  projectTitle: string;
  timeframe: string;
  clicksBefore: string;
  clicksAfter: string;
  impressionsAfter: string;
  revenueGrowth: string;
  topKeywordsRanked: string[];
  summary: string;
}

interface UaeEmirateSeoZone {
  id: string;
  emirateName: string;
  arabicTag: string;
  commercialImportance: string;
  highDemandSectors: string[];
  localSeoStrategy: string[];
  sampleKeywords: string[];
}

interface SeoVsAdsRow {
  criterion: string;
  uniqueSeo: string;
  paidAds: string;
  randomCheapSeo: string;
}

interface NinetyDayPhase {
  phaseNum: string;
  timeframe: string;
  title: string;
  description: string;
  tasks: string[];
  milestoneOutput: string;
}

interface UaeSeoPackageAED {
  id: string;
  packageName: string;
  badgeText: string;
  priceAED: string;
  billingCycle: string;
  idealFor: string;
  isPopular: boolean;
  keywordsCount: string;
  includedServices: string[];
  technicalAndContentFeatures: string[];
  reportingAndSupport: string;
  whatsappMsg: string;
}

interface UaeSeoFaq {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// 4. COMPREHENSIVE UAE SEO DATA ARRAYS (ENGLISH COMMERCIAL COPY)
// ============================================================================

const HERO_KPIS: HeroKpiCard[] = [
  {
    id: "kpi-uae-clicks",
    value: "+410%",
    title: "Average Google.ae Traffic Growth",
    subtitle: "Verified organic click and impression scaling inside Google Search Console across Dubai & Abu Dhabi",
    accent: "emerald",
  },
  {
    id: "kpi-uae-speed",
    value: "99/100",
    title: "Core Web Vitals & Technical Speed",
    subtitle: "Code-level speed optimization eliminating enormous network payloads for sub-0.8s mobile loading",
    accent: "cyan",
  },
  {
    id: "kpi-uae-multilingual",
    value: "Up to 7 Languages",
    title: "Multilingual SEO for UAE Audiences",
    subtitle: "Ranking across English, Arabic, Russian, Chinese, French, German & Spanish search intents in the UAE",
    accent: "blue",
  },
  {
    id: "kpi-uae-ai",
    value: "Google + AI",
    title: "SERP #1 & AI Overviews (GEO)",
    subtitle: "Engineered to dominate both Google.ae Page #1 and AI recommendations on ChatGPT & Perplexity",
    accent: "amber",
  },
];

const CORE_SEO_SERVICES_UAE: SeoServicePillar[] = [
  {
    id: "uae-seo-technical",
    number: "01",
    badge: "Code-Level Engineering for Maximum Rankings",
    title: "Advanced Technical SEO & Core Web Vitals Optimization",
    arabicSubtitle: "الفحص الهندسي الشامل والسيو التقني المتقدم في الإمارات",
    summary:
      "In a hyper-competitive market like Dubai and Abu Dhabi, technical flaws silently kill your rankings. Our in-house software engineers audit your domain with Screaming Frog, Lighthouse, and GSC to fix broken canonicals, eliminate enormous network payloads, and achieve a 99/100 PageSpeed score.",
    businessImpactInUAE:
      "Boosts Googlebot crawl efficiency by up to 160% and drastically reduces mobile bounce rates across UAE 5G/4G networks.",
    executionChecklist: [
      "Fixing Non-Indexable Canonical errors, 404 dead links, redirect chains (301), and index bloat",
      "Optimizing Core Web Vitals (LCP < 0.8s, CLS = 0.00, fast INP) and resolving 'Avoid enormous network payloads'",
      "Deploying custom Schema.org JSON-LD markup for LocalBusiness (Dubai/Abu Dhabi), Products (AED), Services, and FAQs",
      "Dynamic XML Sitemaps, Robots.txt optimization, and instant On-Demand ISR cache revalidation for new blog posts",
      "Full technical SEO implementation for Next.js 16 (App Router), WordPress/Elementor Pro, Shopify, Salla, and custom portals",
    ],
    deliverables: [
      "Complete Before/After Screaming Frog Technical Audit",
      "95-100 Google PageSpeed Insights Score on Mobile",
      "Custom Schema.org Graph & Zero GSC Indexation Errors",
    ],
    whatsappText: "Hello Unique Agency, I would like a Technical SEO Audit & Core Web Vitals optimization for my UAE website.",
  },
  {
    id: "uae-seo-ecommerce",
    number: "02",
    badge: "Built for UAE Online Retailers & D2C Brands",
    title: "E-Commerce SEO for Shopify, WooCommerce, Salla & Custom Stores",
    arabicSubtitle: "سيو المتاجر الإلكترونية في الإمارات (شوبيفاي، ووكومرس، سلة)",
    summary:
      "Paid ad CPCs in the UAE are among the highest in the region. We turn your Shopify, WooCommerce, Salla, or headless Next.js storefront into a self-sustaining organic sales channel that ranks #1 for high-intent buyer searches across Dubai, Abu Dhabi, and Sharjah.",
    businessImpactInUAE:
      "Cuts Customer Acquisition Cost (CAC) by up to 65% while generating daily high-margin organic orders in AED.",
    executionChecklist: [
      "Architecting SEO-friendly collection hierarchies and sub-categories targeting UAE commercial search demand",
      "Writing persuasive, conversion-focused English & Arabic product descriptions that outrank generic competitor pages",
      "Implementing rich Product Schema displaying prices in UAE Dirhams (AED), stock availability, Tabby/Tamara options, and star ratings",
      "Resolving Shopify duplicate product URLs (/collections/ vs /products/) and faceted filter indexation waste",
      "Building high-converting commercial blog clusters that capture shoppers researching the best products in the UAE",
    ],
    deliverables: [
      "Full E-Commerce Category & Keyword Architecture",
      "Optimization of Priority Collections & Top-Selling Products",
      "Rich AED Product Snippets & Review Stars on Google.ae",
    ],
    whatsappText: "Hello Unique Agency, I run an e-commerce store in the UAE and want E-Commerce SEO to grow organic sales.",
  },
  {
    id: "uae-seo-multilingual",
    number: "03",
    badge: "Capturing the UAE's Global Expat & Investor Market",
    title: "Multilingual & International SEO (Arabic, English & Up to 7 Languages)",
    arabicSubtitle: "السيو متعدد اللغات لمخاطبة كافة الجنسيات والمستثمرين في الإمارات",
    summary:
      "The UAE is home to over 200 nationalities and global investors searching in English, Arabic, Russian, Chinese, French, German, and Spanish. We engineer bulletproof multilingual SEO architectures (`hreflang`, localized slugs, and native copy) so your business dominates every target language.",
    businessImpactInUAE:
      "Unlocks high-ticket international and expat clients in Dubai real estate, tourism, healthcare, and luxury services.",
    executionChecklist: [
      "Implementing error-free `hreflang` matrices (`en-AE`, `ar-AE`, `ru`, `zh`, `fr`, `de`, `es`) with proper canonical alignment",
      "Native human SEO copywriting in English and Arabic (never cheap automated machine translation that hurts rankings)",
      "Structuring clean language routing (`/en`, `/ar`, etc.) via `next-intl` or multilingual WordPress/Shopify setups",
      "Aligning RTL/LTR typography and localized conversion funnels for each target demographic in the Emirates",
    ],
    deliverables: [
      "Complete Multilingual Hreflang & URL Architecture",
      "Native Bilingual/Multilingual Commercial Landing Pages",
      "Cross-Language Rank Tracking on Google.ae",
    ],
    whatsappText: "Hello Unique Agency, I need Multilingual SEO (English & Arabic) for my business in the UAE.",
  },
  {
    id: "uae-seo-keywords",
    number: "04",
    badge: "Targeting High-Ticket UAE Buyers",
    title: "UAE Search Intent Mapping & Competitor Keyword Intelligence",
    arabicSubtitle: "دراسة الكلمات المفتاحية والنية الشرائية للسوق الإماراتي",
    summary:
      "We reverse-engineer the top-ranking competitors in your exact UAE niche and identify the highest-ROI transactional and commercial keywords searched by decision-makers in Dubai, Abu Dhabi, and Sharjah.",
    businessImpactInUAE:
      "Brings qualified, ready-to-buy prospects directly to your service pages and WhatsApp sales team.",
    executionChecklist: [
      "Deep research into high-intent Commercial & Transactional keywords across English and Arabic search queries in the UAE",
      "Competitor Keyword Gap Analysis uncovering lucrative search terms your rivals rank for on Google.ae",
      "Targeting fast-ranking Long-Tail keywords that generate qualified leads within the first 30 to 45 days",
      "Strict URL-by-URL Keyword Mapping to eliminate internal Keyword Cannibalization across your domain",
    ],
    deliverables: [
      "Master UAE Bilingual Keyword Strategy Matrix",
      "Competitor SEO Gap & Opportunity Report",
      "Zero-Cannibalization URL Mapping Blueprint",
    ],
    whatsappText: "Hello Unique Agency, I want a Keyword Research & Competitor Analysis blueprint for the UAE market.",
  },
  {
    id: "uae-seo-onpage",
    number: "05",
    badge: "Turning Traffic into WhatsApp Leads & Sales",
    title: "On-Page SEO, Semantic Silos & Conversion Rate Optimization (CRO)",
    arabicSubtitle: "تحسين السيو الداخلي وهندسة التحويل البيعي (CRO)",
    summary:
      "Ranking #1 means nothing if visitors leave without contacting you. We optimize every page's semantic structure, Meta tags, internal linking silos, and conversion touchpoints to maximize both Google rankings and lead generation.",
    businessImpactInUAE:
      "Increases organic Click-Through Rate (CTR) on Google.ae and doubles visitor-to-WhatsApp inquiry rates.",
    executionChecklist: [
      "Crafting high-CTR Meta Titles and Meta Descriptions tailored to UAE buyers",
      "Structuring semantic HTML5 headings (H1, H2, H3) enriched with Google NLP entities and industry terminology",
      "Building Topical Internal Linking Silos that pass maximum authority to your core revenue pages",
      "Compressing images to WebP/AVIF with descriptive Alt text and embedding Google E-E-A-T trust signals",
    ],
    deliverables: [
      "Full On-Page Optimization Across Priority Pages",
      "Internal Linking Silo Architecture",
      "CRO & Instant WhatsApp Lead Funnel Integration",
    ],
    whatsappText: "Hello Unique Agency, I want On-Page SEO and CRO optimization for my UAE website.",
  },
  {
    id: "uae-seo-local",
    number: "06",
    badge: "Dominate Google Maps Across All 7 Emirates",
    title: "Local SEO & Google Business Profile (GBP) Domination in UAE",
    arabicSubtitle: "السيو المحلي وتصدر خرائط جوجل في دبي وأبوظبي والشارقة",
    summary:
      "When prospects in Business Bay, Dubai Marina, Downtown Dubai, Abu Dhabi, or Sharjah search for 'best [service] near me', we rank your business in the Top 3 Google Maps Local Pack to drive immediate phone calls and showroom visits.",
    businessImpactInUAE:
      "Generates a 300%+ increase in direct phone calls, WhatsApp messages, and Google Maps direction requests.",
    executionChecklist: [
      "Full optimization of your Google Business Profile (GBP) with UAE local categories, service areas, and geo-tagged media",
      "Building unique, high-converting local landing pages for Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and UAQ",
      "Consistent NAP (Name, Address, Phone) citation building across premier UAE business directories",
      "Structured review growth strategy and keyword-optimized management to build undeniable local trust",
    ],
    deliverables: [
      "Fully Optimized Google Business Profile (GBP)",
      "Dedicated Emirate-by-Emirate Local Landing Pages",
      "Top 3 Google Maps Local Pack Ranking Execution",
    ],
    whatsappText: "Hello Unique Agency, I need Local SEO and Google Maps ranking in Dubai / UAE.",
  },
  {
    id: "uae-seo-authority-ai",
    number: "07",
    badge: "Safe White-Hat Authority & AI Search Leadership",
    title: "White-Hat Link Building, Digital PR & AI Search Optimization (GEO)",
    arabicSubtitle: "بناء الباك لينك الآمن وتصدر محركات الذكاء الاصطناعي ChatGPT & AI Overviews",
    summary:
      "We combine high-authority White-Hat Digital PR backlinks from respected UAE, GCC, and international publications with Generative Engine Optimization (GEO)—ensuring your brand is recommended #1 by Google.ae, Google AI Overviews, ChatGPT Search, and Perplexity.",
    businessImpactInUAE:
      "Builds permanent, penalty-proof Domain Rating (DR) and positions your brand at the forefront of AI-powered search in the UAE.",
    executionChecklist: [
      "Acquiring contextual Guest Posts and editorial backlinks on high-DR UAE, GCC, and global industry websites",
      "Structuring Brand Entities, Knowledge Graph signals, and direct-answer blocks for Google AI Overviews & LLMs",
      "Maintaining a natural, safe Anchor Text profile and disavowing any toxic or spammy legacy backlinks",
      "Publishing authoritative industry guides and comparison tables that earn natural citations",
    ],
    deliverables: [
      "High-Authority Contextual White-Hat Backlinks",
      "AI Search (GEO) & Entity Optimization",
      "Toxic Link Audit & Monthly Authority Report",
    ],
    whatsappText: "Hello Unique Agency, I want White-Hat Link Building and AI Search Optimization (GEO) in the UAE.",
  },
];

const ECOMMERCE_SEO_PLATFORMS_UAE: EcommerceSeoPlatform[] = [
  {
    id: "ecom-shopify-uae",
    platformName: "Shopify & Headless Shopify SEO",
    marketShareTag: "#1 Choice for UAE Luxury & D2C Brands",
    title: "Enterprise SEO for Shopify Stores in Dubai & Abu Dhabi",
    painPointSolved:
      "Default Shopify themes suffer from duplicate collection/product URLs, heavy app scripts that slow down mobile speed, and missing AED structured data.",
    technicalSolutions: [
      "Fixing Liquid internal links to enforce canonical `/products/` URLs and prevent crawl budget waste",
      "Speed optimization for Shopify OS 2.0 and Headless Next.js storefronts to achieve 95+ mobile PageSpeed",
      "Deploying rich Product & Review Schema with AED pricing, stock status, and Tabby/Tamara installment badges",
      "Bilingual English & Arabic (`en-AE` / `ar-AE`) collection and product optimization for maximum UAE reach",
    ],
    expectedGrowth: "+280% to +420% growth in organic non-ad revenue within 3 to 6 months",
    whatsappMsg: "Hello Unique Agency, I run a Shopify store in the UAE and want to scale organic sales with SEO.",
  },
  {
    id: "ecom-salla-woo-uae",
    platformName: "Salla & WooCommerce SEO in UAE",
    marketShareTag: "Flexible Regional & Custom E-Commerce",
    title: "High-Converting Organic Search Growth for Salla & WooCommerce",
    painPointSolved:
      "Unoptimized category trees, slow database queries, and thin product descriptions keep Salla and WooCommerce stores buried on page 3+ of Google.ae.",
    technicalSolutions: [
      "Full category tree restructuring around high-volume UAE commercial search queries",
      "Server caching, Cloudflare CDN setup, and WebP/AVIF image compression for instant mobile browsing",
      "Custom CSS/UI enhancements and persuasive bilingual product copywriting",
      "Topical blog clusters linking buying guides directly to your highest-margin product categories",
    ],
    expectedGrowth: "Consistent Page #1 rankings for core product categories across Google.ae",
    whatsappMsg: "Hello Unique Agency, I have a WooCommerce / Salla store in the UAE and need expert SEO.",
  },
  {
    id: "ecom-nextjs-portals-uae",
    platformName: "Next.js & Custom Portal SEO (Real Estate & Travel)",
    marketShareTag: "Ultra-Fast Custom Web Platforms",
    title: "Technical & Programmatic SEO for UAE Portals & Service Brands",
    painPointSolved:
      "Many custom websites in Dubai use client-side JavaScript rendering or broken static canonicals that prevent Google from indexing dynamic property, yacht, or clinic pages.",
    technicalSolutions: [
      "Server-Side Rendering (SSR) & Dynamic Metadata (`generateMetadata`) for 100% instant Google indexation",
      "Automated dynamic XML sitemaps and On-Demand ISR cache revalidation via Sanity CMS or Headless WP",
      "Programmatic geo-targeted landing pages for Dubai districts, communities, and UAE Emirates",
      "Multilingual 7-language architecture (`next-intl`) capturing global investors and tourists",
    ],
    expectedGrowth: "Total organic domination across hundreds of high-ticket service and portal keywords",
    whatsappMsg: "Hello Unique Agency, I want Technical & Portal SEO for our Next.js / Custom website in the UAE.",
  },
];

const GSC_DOCUMENTED_RESULTS_UAE: GscCaseStudy[] = [
  {
    id: "gsc-uae-1",
    sector: "Dubai Real Estate & Off-Plan Property Portal",
    city: "Dubai & Abu Dhabi",
    platform: "Next.js 16 + Sanity CMS (5 Languages)",
    projectTitle: "Scaling from 1,800 to 54,200+ Monthly Organic Clicks from Global Property Investors",
    timeframe: "Within 4 Months",
    clicksBefore: "1,800 clicks/mo",
    clicksAfter: "54,200 clicks/mo",
    impressionsAfter: "680,000+ High-Intent Impressions",
    revenueGrowth: "+390% Surge in Qualified Investor WhatsApp Leads",
    topKeywordsRanked: ["off plan projects dubai", "buy luxury apartment dubai marina", "real estate investment abu dhabi"],
    summary:
      "Engineered dynamic community and developer silos in English, Arabic, Russian, and French with 99/100 PageSpeed and RealEstateAgent JSON-LD schema.",
  },
  {
    id: "gsc-uae-2",
    sector: "Luxury Oud, Niche Perfumes & Cosmetics Brand",
    city: "Dubai, Abu Dhabi & Sharjah",
    platform: "Shopify Store (Bilingual EN/AR)",
    projectTitle: "Generating 38,600+ Monthly Organic Shoppers & Cutting Paid Ad Dependency by 65%",
    timeframe: "Within 90 Days",
    clicksBefore: "1,150 clicks/mo",
    clicksAfter: "38,600 clicks/mo",
    impressionsAfter: "490,000+ Commercial Impressions",
    revenueGrowth: "+325% Growth in Organic Non-Ad Sales (AED)",
    topKeywordsRanked: ["best niche perfume store dubai", "luxury arabian oud uae", "buy bakhoor online dubai"],
    summary:
      "Resolved Shopify duplicate URLs, optimized 35 collections and 180+ products in English and Arabic, and deployed AED Product Schema with review stars.",
  },
  {
    id: "gsc-uae-3",
    sector: "Aesthetic, Dental & Dermatology Clinic",
    city: "Dubai (Jumeirah & Business Bay)",
    platform: "WordPress & Elementor Pro",
    projectTitle: "Ranking #1 on Google Maps & Organic Search for High-Value Medical Treatments",
    timeframe: "Within 3 Months",
    clicksBefore: "1,900 clicks/mo",
    clicksAfter: "31,400 clicks/mo",
    impressionsAfter: "410,000+ Local Medical Searches",
    revenueGrowth: "+290% Increase in Direct Patient Bookings",
    topKeywordsRanked: ["best dental clinic dubai", "hollywood smile dubai price", "hydrafacial & laser clinic jumeirah"],
    summary:
      "Created DHA-compliant doctor and treatment pages following Google E-E-A-T guidelines, boosted mobile speed to 98/100, and dominated the Dubai Local 3-Pack.",
  },
];

const SEO_VS_ADS_COMPARISON_UAE: SeoVsAdsRow[] = [
  {
    criterion: "Cost Per Click & Lead Sustainability in UAE",
    uniqueSeo: "Compounds 24/7—delivers free, high-intent clicks for years without paying AED 25–65 per click",
    paidAds: "Extremely expensive CPCs in Dubai; leads stop the exact second you pause your ad campaign",
    randomCheapSeo: "Short-lived tricks followed by severe Google algorithm penalties and domain de-indexing",
  },
  {
    criterion: "Buyer Trust Among UAE Decision-Makers",
    uniqueSeo: "Maximum credibility—UAE consumers and B2B buyers trust #1 organic leaders 4x more than ads",
    paidAds: "Savvy prospects skip 'Sponsored' links and click top organic brands instead",
    randomCheapSeo: "Poorly spun content and broken layouts ruin your brand prestige in the Emirates",
  },
  {
    criterion: "Technical Engineering & Speed Execution",
    uniqueSeo: "In-house Next.js/WP/Shopify engineers fix Core Web Vitals (99/100), Canonicals & Schema directly",
    paidAds: "Does not fix slow mobile load times—causing you to lose 40%+ of paid clicks to bounce",
    randomCheapSeo: "Zero technical engineering; relies on outdated plugins and toxic spam backlinks",
  },
];

const UAE_EMIRATES_ZONES: UaeEmirateSeoZone[] = [
  {
    id: "zone-dubai-en",
    emirateName: "Dubai",
    arabicTag: "شركة سيو في دبي",
    commercialImportance:
      "The commercial, financial, tourism, and luxury capital of the Middle East—where ranking #1 on Google.ae delivers massive high-ticket revenue.",
    highDemandSectors: ["Real Estate & Off-Plan Portals", "Aesthetic & Dental Clinics", "Luxury E-Commerce & Shopify", "Yacht, Car Rental & Tourism"],
    localSeoStrategy: [
      "Hyper-targeted SEO for key Dubai districts (Downtown, Business Bay, Dubai Marina, Jumeirah, DIFC, JLT)",
      "Google Business Profile (GBP) domination for the Top 3 Local Map Pack across Dubai",
      "Multilingual SEO (English, Arabic, Russian, Chinese, French) to capture expats, tourists, and global investors",
    ],
    sampleKeywords: ["SEO Company Dubai", "Best SEO Agency in Dubai", "شركة سيو في دبي"],
  },
  {
    id: "zone-abudhabi-en",
    emirateName: "Abu Dhabi & Al Ain",
    arabicTag: "شركة سيو في أبوظبي والعين",
    commercialImportance:
      "The UAE federal capital and powerhouse of corporate enterprises, healthcare institutions, real estate, government-linked projects, and retail.",
    highDemandSectors: ["Corporate & Holding Groups", "Hospitals & Medical Centers", "Engineering & Contracting", "Real Estate & Retail Stores"],
    localSeoStrategy: [
      "Authoritative bilingual (`en-AE` & `ar-AE`) content clusters tailored to Abu Dhabi and Al Ain search intent",
      "Local schema and Google Maps optimization across Al Reem Island, Corniche, Yas Island, and Khalifa City",
      "High-trust Digital PR backlinks that establish institutional authority on Google.ae",
    ],
    sampleKeywords: ["SEO Company Abu Dhabi", "SEO Services Abu Dhabi", "شركة سيو في أبوظبي"],
  },
  {
    id: "zone-sharjah-ajman-en",
    emirateName: "Sharjah & Ajman",
    arabicTag: "شركة سيو في الشارقة وعجمان",
    commercialImportance:
      "The industrial, manufacturing, educational, and e-commerce hub of the UAE with thousands of B2B suppliers and fast-growing online merchants.",
    highDemandSectors: ["Industrial & B2B Manufacturing", "E-Commerce (Salla, Shopify, EasyOrder)", "Construction & Home Services", "Education & Training"],
    localSeoStrategy: [
      "Capturing high-volume B2B procurement keywords and nationwide B2C e-commerce searches",
      "Technical speed optimization and structured catalog architecture for large product inventories",
      "Regional Local SEO connecting Sharjah and Ajman businesses with buyers across all 7 Emirates",
    ],
    sampleKeywords: ["SEO Company Sharjah", "SEO Agency Ajman", "شركة سيو في الشارقة"],
  },
  {
    id: "zone-rak-fujairah-uaq-en",
    emirateName: "Ras Al Khaimah, Fujairah & Umm Al Quwain",
    arabicTag: "رأس الخيمة، الفجيرة، وأم القيوين",
    commercialImportance:
      "Booming hospitality, real estate investment, free zones, and maritime logistics markets offering rapid Page #1 ranking opportunities.",
    highDemandSectors: ["Resorts, Tourism & Real Estate in RAK", "Logistics & Marine Services in Fujairah", "Free Zone Companies & E-Commerce"],
    localSeoStrategy: [
      "Dedicated Emirate landing pages with zero duplicate content penalties",
      "International and local SEO targeting investors and tourists searching for Al Marjan Island and Northern Emirates",
      "Fast organic domination with high-converting WhatsApp and booking funnels",
    ],
    sampleKeywords: ["SEO Services Ras Al Khaimah", "SEO Company Fujairah", "SEO Agency UAE"],
  },
];

const NINETY_DAY_ROADMAP_UAE: NinetyDayPhase[] = [
  {
    phaseNum: "01",
    timeframe: "Weeks 1 - 2",
    title: "Deep Technical Audit & Core Web Vitals Fix",
    description:
      "We crawl your domain with Screaming Frog and GSC, resolve canonical/indexing errors, eliminate network payload bloat, and deploy JSON-LD Schema.",
    tasks: ["Screaming Frog Audit", "Dynamic Canonical Fix", "99/100 PageSpeed", "Schema.org Deployment"],
    milestoneOutput: "100% technically healthy, ultra-fast website ready for instant Google.ae indexation",
  },
  {
    phaseNum: "02",
    timeframe: "Weeks 2 - 3",
    title: "UAE Keyword Intelligence & Silo Architecture",
    description:
      "We analyze your top Dubai/UAE competitors, extract high-ROI English & Arabic buyer keywords, and map every query to a dedicated revenue page.",
    tasks: ["Bilingual Keyword Matrix", "Competitor Gap Audit", "Silo Hierarchy Design", "Hreflang Setup"],
    milestoneOutput: "Approved revenue-driven keyword map and site architecture blueprint",
  },
  {
    phaseNum: "03",
    timeframe: "Weeks 4 - 6",
    title: "On-Page SEO & Conversion Engineering (CRO)",
    description:
      "We optimize Meta Titles, H1-H3 headings, persuasive bilingual copy, internal linking silos, and instant WhatsApp/Checkout funnels.",
    tasks: ["High-CTR Meta Tags", "Commercial Landing Copy", "Internal Linking Silos", "WebP/AVIF Optimization"],
    milestoneOutput: "Surge in Google Search Console impressions and early ranking jumps on Google.ae",
  },
  {
    phaseNum: "04",
    timeframe: "Weeks 6 - 10",
    title: "Topical Authority, Local Maps & AI Search (GEO)",
    description:
      "We publish authoritative content clusters, optimize your Google Business Profile for Dubai/Abu Dhabi Map Pack rankings, and structure data for AI Overviews.",
    tasks: ["Topical Content Clusters", "Google Maps GBP Boost", "AI Overviews (GEO)", "Collection Optimization"],
    milestoneOutput: "Target keywords enter Google.ae Page #1 with rising organic calls and orders",
  },
  {
    phaseNum: "05",
    timeframe: "Weeks 8 - 12+",
    title: "White-Hat Digital PR & Market Domination",
    description:
      "We acquire high-DR contextual backlinks from respected UAE/GCC portals, track weekly GSC movements, and lock in Top-3 positions.",
    tasks: ["High-DR Guest Posts", "Weekly GSC Tracking", "CRO Split-Testing", "Transparent ROI Reports"],
    milestoneOutput: "Sustained Top-3 rankings on Google.ae and compounding monthly AED revenue",
  },
];

const UAE_SEO_PACKAGES_AED: UaeSeoPackageAED[] = [
  {
    id: "aed-en-growth",
    packageName: "UAE Growth & Local SEO Plan",
    badgeText: "Ideal for Emerging Businesses, Clinics & Service Websites in UAE",
    priceAED: "2,200",
    billingCycle: "AED / Month (Flexible — No Lock-In Contracts)",
    idealFor: "Service companies, medical clinics, law firms, and local businesses in Dubai, Abu Dhabi, or Sharjah",
    isPopular: false,
    keywordsCount: "Up to 20 High-Intent Commercial & Local Keywords in UAE",
    includedServices: [
      "Complete Technical SEO Audit & indexation fixes in Google Search Console",
      "Mobile Core Web Vitals & PageSpeed optimization (< 0.8s load time)",
      "Full On-Page SEO optimization for up to 10 core service or landing pages",
      "Google Business Profile (Google Maps) setup and local pack optimization in your Emirate",
      "6 expert human-written SEO articles or landing pages per month (English or Arabic)",
      "Safe White-Hat contextual backlinks to build foundational domain authority",
    ],
    technicalAndContentFeatures: [
      "Custom Meta Titles, Descriptions, Dynamic Canonicals & Schema.org JSON-LD",
      "Internal linking silo setup & WebP/AVIF image compression",
    ],
    reportingAndSupport: "Detailed monthly Google Search Console report + Direct WhatsApp support",
    whatsappMsg: "Hello Unique Agency, I want to subscribe to the (UAE Growth & Local SEO Plan - 2,200 AED/mo).",
  },
  {
    id: "aed-en-domination",
    packageName: "Market Domination & E-Commerce SEO Plan",
    badgeText: "Most Popular for Dubai/Abu Dhabi Companies & Shopify / Salla Stores",
    priceAED: "3,800",
    billingCycle: "AED / Month (Complete Revenue-Driven Bilingual SEO Suite)",
    idealFor: "E-Commerce stores (Shopify, WooCommerce, Salla), real estate brokers, aesthetic clinics, and B2B firms",
    isPopular: true,
    keywordsCount: "Up to 45 Competitive Bilingual (EN/AR) Commercial Keywords in UAE",
    includedServices: [
      "Everything in Growth Plan + Deep Screaming Frog engineering audit & code-level fixes",
      "Full E-Commerce & Portal SEO (Collections, Filters, AED Product Schema, and 30+ pages optimized monthly)",
      "Bilingual Topical Authority strategy with 12 in-depth commercial articles or landing pages per month",
      "Multi-Emirate Local SEO targeting (Dubai, Abu Dhabi, Sharjah) & Google Maps Top-3 domination",
      "High-DR White-Hat Link Building & Digital PR on authoritative UAE, GCC & international portals",
      "Generative Engine Optimization (GEO) for Google AI Overviews & ChatGPT Search visibility",
    ],
    technicalAndContentFeatures: [
      "Conversion Rate Optimization (CRO) for checkout & WhatsApp lead funnels",
      "Monthly competitor tracking & new keyword opportunity capture on Google.ae",
    ],
    reportingAndSupport: "Bi-weekly & monthly verified GSC/GA4 reports + Dedicated Account Manager on WhatsApp",
    whatsappMsg: "Hello Unique Agency, I want to subscribe to the (UAE Market Domination & E-Commerce SEO Plan - 3,800 AED/mo).",
  },
  {
    id: "aed-en-enterprise",
    packageName: "Enterprise & Multilingual Authority Plan",
    badgeText: "For Real Estate Developers, Mega Stores & Multilingual Portals",
    priceAED: "6,500",
    billingCycle: "AED / Month (Custom Full-Scale UAE & Global Leadership)",
    idealFor: "Large e-commerce brands, off-plan real estate portals, luxury yacht/travel platforms, and multi-branch groups",
    isPopular: false,
    keywordsCount: "Unlimited Keyword Clusters (80+ Priority Commercial Terms Across Languages)",
    includedServices: [
      "Dedicated full-stack Technical SEO engineering for Next.js 16, WordPress, Shopify Plus & custom platforms",
      "Continuous optimization across hundreds of product, property, category, and district pages in the UAE",
      "20+ pieces of authoritative multilingual (English, Arabic, Russian, etc.) commercial content per month",
      "Premier Digital PR and editorial backlinks from top-tier regional and global publications",
      "Ongoing UI/UX speed engineering, custom JSON-LD knowledge graphs, and CRO split-testing",
      "Full International & 7-Language SEO management (`next-intl` / `hreflang` matrix)",
    ],
    technicalAndContentFeatures: [
      "Priority code execution by our senior Next.js, WordPress, and Shopify engineering team",
      "Custom live ROI, lead attribution, and Google Search Console performance dashboard",
    ],
    reportingAndSupport: "Weekly strategy calls & live reporting + 24/7 VIP engineering & SEO support",
    whatsappMsg: "Hello Unique Agency, I would like to inquire about the (UAE Enterprise & Multilingual SEO Plan - 6,500 AED/mo).",
  },
];

const UAE_SEO_FAQS: UaeSeoFaq[] = [
  {
    id: "uae-faq-1",
    category: "Timeline & Results",
    question: "How long does it take to rank on Page #1 of Google.ae in the UAE?",
    answer:
      "Technical improvements—such as resolved canonical issues, faster mobile Core Web Vitals, and rising Google Search Console impressions—take effect within the first 2 to 4 weeks. Measurable Page #1 rankings and significant growth in organic traffic, WhatsApp inquiries, and online sales typically materialize within 60 to 90 days depending on your domain authority and sector competition in Dubai and Abu Dhabi.",
  },
  {
    id: "uae-faq-2",
    category: "Bilingual & Multilingual SEO",
    question: "Should my UAE website target English, Arabic, or multiple languages?",
    answer:
      "In the UAE, targeting both English (`en-AE`) and Arabic (`ar-AE`) is essential to capture the full market—and for sectors like real estate, yacht rental, tourism, and luxury retail, adding Russian, Chinese, or French multiplies your investor reach. We engineer clean multilingual architectures (up to 7 languages using `next-intl` and proper `hreflang` tags) so you rank natively in every language without duplicate-content issues.",
  },
  {
    id: "uae-faq-3",
    category: "E-Commerce SEO",
    question: "Can you optimize our Shopify, WooCommerce, Salla, or EasyOrder store in the UAE?",
    answer:
      "Yes! We specialize in E-Commerce SEO across Shopify, WooCommerce, Salla, EasyOrder, and Headless Next.js storefronts. We optimize your collection hierarchy, rewrite product copy for high-intent UAE searches, deploy AED Product & Review Schema for rich Google snippets, and build commercial content that drives daily non-ad orders.",
  },
  {
    id: "uae-faq-4",
    category: "Engineering & Code Fixes",
    question: "Do your developers implement the technical SEO and speed fixes directly?",
    answer:
      "Absolutely. Unlike traditional agencies in Dubai that send you a theoretical PDF report and leave you to hire developers, Unique Digital Agency is a full-stack web development and SEO company. Our engineers directly implement all code, speed, schema, and canonical optimizations on Next.js, WordPress, Elementor, Shopify, and Salla.",
  },
  {
    id: "uae-faq-5",
    category: "White-Hat Safety",
    question: "How do you protect our domain from Google algorithm penalties?",
    answer:
      "We strictly follow 100% White-Hat SEO practices aligned with Google's latest Core and Spam Updates. We never use automated link farms, PBNs, or unedited AI spam. Every technical fix, content cluster, and contextual Digital PR backlink is engineered for permanent, penalty-proof authority.",
  },
  {
    id: "uae-faq-6",
    category: "Free UAE SEO Audit",
    question: "How can I request a free SEO audit for my UAE website or online store?",
    answer:
      "Simply click any WhatsApp button on this page to message our team directly at +201270506511 with your website URL. Within 24 hours, we will prepare a custom technical and competitor audit showing your exact ranking bottlenecks and highest-ROI keyword opportunities in the UAE completely free.",
  },
];

// ============================================================================
// 5. JSON-LD STRUCTURED DATA SCHEMAS FOR GOOGLE UAE (EN-AE)
// ============================================================================
const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://marketing-beta-gold-30.vercel.app/en/uae-seo#agency",
    name: "Unique Digital Agency - SEO Company in UAE",
    alternateName: "Unique SEO Agency Dubai, Abu Dhabi & Sharjah",
    url: "https://marketing-beta-gold-30.vercel.app/en/uae-seo",
    telephone: "+201270506511",
    description:
      "Leading SEO Company in the UAE specializing in Technical SEO, Multilingual SEO (up to 7 languages), E-Commerce SEO (Shopify, WooCommerce, Salla), Local SEO, and AI Search Optimization (GEO) across Dubai, Abu Dhabi, and Sharjah.",
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ajman" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
      { "@type": "City", name: "Umm Al Quwain" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    priceRange: "AED 2200 - AED 6500",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+201270506511",
      contactType: "sales and SEO consultation",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Search Engine Optimization (SEO) Services in United Arab Emirates",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://marketing-beta-gold-30.vercel.app",
      telephone: "+201270506511",
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "UAE Monthly SEO Packages (AED)",
      itemListElement: UAE_SEO_PACKAGES_AED.map((pkg) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: pkg.packageName,
          description: pkg.idealFor,
        },
        priceCurrency: "AED",
        price: pkg.priceAED.replace(/,/g, ""),
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: UAE_SEO_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://marketing-beta-gold-30.vercel.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "SEO Company in UAE",
        item: "https://marketing-beta-gold-30.vercel.app/en/uae-seo",
      },
    ],
  },
];

// ============================================================================
// 6. REUSABLE UI SUB-COMPONENTS (SERVER-SAFE, LTR, ZERO RED ACCENTS)
// ============================================================================

function SectionHeader({
  badge,
  title,
  highlightedWord,
  subtitle,
  align = "center",
}: {
  badge: string;
  title: string;
  highlightedWord?: string;
  subtitle: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mb-14 ${
        align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl text-left"
      }`}
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold tracking-wide text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.15)] ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <Sparkles className="h-3.5 w-3.5 text-amber-400" />
        <span>{badge}</span>
      </div>
      <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}{" "}
        {highlightedWord && (
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
            {highlightedWord}
          </span>
        )}
      </h2>
      <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}

// ============================================================================
// 7. MAIN PAGE COMPONENT (ENGLISH UAE SEO AGENCY LANDING PAGE)
// ============================================================================
export default function UaeSeoEnglishPage() {
  const mainWhatsAppLink = getWhatsAppUrl(
    "Hello Unique Agency, I would like to request a Free SEO Audit and consultation for my website/store in the UAE."
  );

  return (
    <main
      dir="ltr"
      lang="en"
      className="relative min-h-screen bg-[#000000] text-left text-white selection:bg-blue-600 selection:text-white overflow-x-hidden"
    >
      {/* Structured Data JSON-LD for Google.ae Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />

      {/* Ambient Background Glow Effects (Blue, Cyan, Emerald, Gold - Strictly No Red) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-blue-600/12 blur-[150px]" />
        <div className="absolute top-1/3 -right-48 h-[460px] w-[460px] rounded-full bg-cyan-500/12 blur-[150px]" />
        <div className="absolute bottom-10 left-1/4 h-[420px] w-[420px] rounded-full bg-amber-500/8 blur-[160px]" />
      </div>

      {/* Floating Direct WhatsApp Action Button (Fixed Bottom Right) */}
      <a
        href={mainWhatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp 01270506511"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-emerald-400/40 bg-gradient-to-r from-emerald-600 to-teal-500 px-5 py-3.5 text-xs font-black text-white shadow-[0_0_35px_rgba(16,185,129,0.45)] transition-all hover:scale-105"
      >
        <MessageSquare className="h-5 w-5" />
        <span className="hidden sm:inline">Free WhatsApp SEO Audit:</span>
        <span className="font-mono text-sm">{WHATSAPP_NUMBER_DISPLAY}</span>
      </a>

      {/* =====================================================================
          SECTION 1: TOP STICKY NAVIGATION BAR
      ===================================================================== */}
      <nav
        aria-label="Quick Page Navigation"
        className="sticky top-0 z-40 border-b border-white/10 bg-[#000000]/85 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 font-black text-white shadow-lg shadow-blue-600/25">
              U
            </span>
            <div>
              <p className="text-xs font-bold text-cyan-400">UNIQUE SEO AGENCY UAE</p>
              <p className="text-[11px] text-slate-400">
                #1 SEO Company in UAE (Dubai • Abu Dhabi • Sharjah)
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-5 text-xs font-bold text-slate-300 lg:flex">
            <a href="#seo-services-uae" className="transition-colors hover:text-cyan-400">
              SEO Services
            </a>
            <a href="#ecommerce-seo-uae" className="transition-colors hover:text-cyan-400">
              Shopify, Salla & Portal SEO
            </a>
            <a href="#gsc-results-uae" className="transition-colors hover:text-cyan-400">
              GSC Case Studies
            </a>
            <a href="#ai-geo-seo-uae" className="transition-colors hover:text-emerald-400">
              AI Search (GEO)
            </a>
            <a href="#uae-emirates" className="transition-colors hover:text-cyan-400">
              7 Emirates
            </a>
            <a href="#pricing-aed" className="transition-colors hover:text-amber-400">
              Pricing (AED)
            </a>
            <a href="#faq-uae" className="transition-colors hover:text-cyan-400">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/uae-seo"
              className="hidden rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-slate-200 transition-colors hover:bg-white/10 sm:inline-block"
            >
              العربية
            </Link>
            <a
              href={mainWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-xs font-black text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Free Audit:</span>
              <span className="font-mono">{WHATSAPP_NUMBER_DISPLAY}</span>
            </a>
          </div>
        </div>
      </nav>

      {/* =====================================================================
          SECTION 2: CREATIVE HERO SECTION WITH LIVE GSC & GOOGLE.AE SIMULATOR
      ===================================================================== */}
      <header className="relative z-10 overflow-hidden border-b border-white/10 pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Background Video Layer */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-25">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/globe.svg"
            className="h-full w-full object-cover"
          >
            <source src="/vedio1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000]/85 to-[#000000]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-xs text-slate-400"
          >
            <Link href="/" className="transition-colors hover:text-cyan-400">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
            <span className="text-slate-300">UAE Digital Services</span>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
            <span className="font-bold text-cyan-400">
              SEO Company in UAE
            </span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Primary Commercial SEO Pitch */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300">
                <Award className="h-4 w-4 text-amber-400" />
                <span>
                  #1 Engineering-Driven SEO Agency in Dubai, Abu Dhabi & Sharjah
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-black leading-[1.18] tracking-tight text-white sm:text-5xl lg:text-6xl">
                SEO Company in the UAE{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
                  That Ranks You #1 on Google.ae
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
                In the UAE&apos;s ultra-competitive digital market, paying AED 25 to
                AED 65 per click on Google Ads is not a sustainable growth model.
                At{" "}
                <strong className="font-bold text-white">UNIQUE Digital Agency</strong>,
                we fuse{" "}
                <strong className="text-cyan-300">
                  99/100 Core Web Vitals engineering, multilingual buyer content (up
                  to 7 languages), and high-authority White-Hat Digital PR
                </strong>{" "}
                to rank your{" "}
                <strong className="text-emerald-300">
                  Next.js, WordPress, Shopify, Salla, or EasyOrder
                </strong>{" "}
                website #1 across Dubai, Abu Dhabi, and Sharjah.
              </p>

              {/* 4 Trust Badges Grid */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm font-medium text-slate-200">
                    Verified Growth in Google Search Console (Google.ae)
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-sm font-medium text-slate-200">
                    Multilingual SEO (English, Arabic, Russian, Chinese & More)
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-sm font-medium text-slate-200">
                    In-House Next.js, WordPress & Shopify Developers
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-400" />
                  <span className="text-sm font-medium text-slate-200">
                    100% Safe White-Hat SEO + AI Search (GEO) Domination
                  </span>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={mainWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-4 text-base font-black text-white shadow-[0_0_35px_rgba(37,99,235,0.4)] transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Claim Your Free UAE SEO Audit</span>
                  <ArrowUpRight className="h-5 w-5" />
                </a>
                <a
                  href="#gsc-results-uae"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-slate-200 backdrop-blur-md transition-all hover:border-cyan-400/50 hover:bg-white/10 hover:text-white"
                >
                  <TrendingUp className="h-5 w-5 text-cyan-400" />
                  <span>View Dubai & UAE Case Studies</span>
                </a>
              </div>
            </div>

            {/* Right Column: Creative Live Google Search Console & Google.ae #1 Simulator */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-blue-500/35 bg-gradient-to-b from-[#0b1329]/95 to-[#040811]/95 p-6 shadow-[0_0_65px_rgba(37,99,235,0.22)] backdrop-blur-2xl sm:p-7">
                {/* Top Header of GSC Simulator */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-cyan-400" />
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1 text-[11px] font-mono text-cyan-300 border border-blue-500/25">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Google Search Console • UAE Property</span>
                  </div>
                </div>

                {/* 4 GSC Metric Boxes */}
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-2xl border border-blue-500/30 bg-blue-600/15 p-3">
                    <p className="text-[10px] text-blue-200">Total Clicks</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      54.2K
                    </p>
                    <span className="text-[10px] font-bold text-emerald-400">
                      +390% Growth
                    </span>
                  </div>
                  <div className="rounded-2xl border border-cyan-500/30 bg-cyan-600/15 p-3">
                    <p className="text-[10px] text-cyan-200">Impressions</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      680K
                    </p>
                    <span className="text-[10px] font-bold text-emerald-400">
                      +440% Growth
                    </span>
                  </div>
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-600/15 p-3">
                    <p className="text-[10px] text-emerald-200">Average CTR</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      8.0%
                    </p>
                    <span className="text-[10px] font-bold text-emerald-400">
                      High Intent
                    </span>
                  </div>
                  <div className="rounded-2xl border border-amber-500/30 bg-amber-500/15 p-3">
                    <p className="text-[10px] text-amber-200">Avg. Position</p>
                    <p className="mt-1 font-mono text-lg font-black text-amber-300">
                      #1.2
                    </p>
                    <span className="text-[10px] font-bold text-amber-300">
                      Page #1 UAE
                    </span>
                  </div>
                </div>

                {/* Visual SVG Growth Curve Inside Card */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/60 p-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-slate-300">
                      90-Day Google.ae Organic Traffic Growth
                    </span>
                    <span className="font-mono text-[11px] text-cyan-400">
                      Dubai & Abu Dhabi Search
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 400 100"
                    className="h-24 w-full overflow-visible"
                    aria-label="Google.ae Organic Traffic Growth Chart"
                  >
                    <defs>
                      <linearGradient id="gscGradUaeEn" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 92 Q 80 86, 140 65 T 260 32 T 400 6 L 400 100 L 0 100 Z"
                      fill="url(#gscGradUaeEn)"
                    />
                    <path
                      d="M 0 92 Q 80 86, 140 65 T 260 32 T 400 6"
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <circle cx="140" cy="65" r="4" fill="#10b981" />
                    <circle cx="260" cy="32" r="4" fill="#10b981" />
                    <circle cx="395" cy="7" r="5.5" fill="#fbbf24" />
                  </svg>
                </div>

                {/* Simulated #1 Google.ae Search Result Preview */}
                <div className="mt-4 rounded-2xl border border-cyan-500/30 bg-[#07111e] p-4">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-bold text-emerald-400">
                      🏆 Ranked #1 on Google.ae (UAE)
                    </span>
                    <span className="rounded bg-cyan-500/15 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                      Rich Schema Active
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-cyan-300">
                    Your Brand #1 on Google.ae | Dubai, Abu Dhabi & Sharjah
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-amber-400">
                    <span>★★★★★</span>
                    <span className="text-[11px] text-slate-300">
                      4.9 Rating (520+ Verified Reviews) • AED Pricing • Tabby Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Hero KPI Cards */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_KPIS.map((kpi) => {
              const borderMap = {
                emerald: "border-emerald-500/30 hover:border-emerald-400/60",
                cyan: "border-cyan-500/30 hover:border-cyan-400/60",
                blue: "border-blue-500/30 hover:border-blue-400/60",
                amber: "border-amber-500/30 hover:border-amber-400/60",
              }[kpi.accent];

              const textMap = {
                emerald: "text-emerald-400",
                cyan: "text-cyan-400",
                blue: "text-blue-400",
                amber: "text-amber-400",
              }[kpi.accent];

              return (
                <div
                  key={kpi.id}
                  className={`rounded-2xl border bg-[#060b18]/90 p-6 transition-all duration-300 ${borderMap}`}
                >
                  <p className={`text-2xl font-black sm:text-3xl ${textMap}`}>
                    {kpi.value}
                  </p>
                  <h2 className="mt-2 text-base font-bold text-white">
                    {kpi.title}
                  </h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {kpi.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </header>

      {/* =====================================================================
          SECTION 3: 7 CORE SEO SERVICES IN THE UAE
      ===================================================================== */}
      <section
        id="seo-services-uae"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Full-Stack Search Engine Optimization in the Emirates"
            title="Comprehensive SEO Services Engineered for"
            highlightedWord="Dubai, Abu Dhabi & UAE Enterprises"
            subtitle="We execute all 7 pillars of modern SEO under one roof: from code-level Technical SEO and Core Web Vitals speed to multilingual 7-language architecture, Shopify/Salla e-commerce SEO, Local Maps domination, and safe White-Hat Digital PR."
          />

          <div className="space-y-10">
            {CORE_SEO_SERVICES_UAE.map((srv) => (
              <article
                key={srv.id}
                className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#081224] to-[#03060d] p-6 shadow-2xl sm:p-10"
              >
                <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-6 lg:flex-row lg:items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-300">
                      <span>Pillar {srv.number}</span>
                      <span>•</span>
                      <span>{srv.badge}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                      {srv.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-emerald-400">
                      {srv.arabicSubtitle}
                    </p>
                  </div>

                  <a
                    href={getWhatsAppUrl(srv.whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-xs font-black text-white shadow-lg transition-transform hover:scale-[1.02] lg:self-auto"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Request This Service on WhatsApp</span>
                  </a>
                </div>

                <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-8">
                    <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                      {srv.summary}
                    </p>

                    <h4 className="mt-6 text-sm font-black text-cyan-300">
                      What Our Engineering & SEO Team Executes:
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {srv.executionChecklist.map((task, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-black/40 p-3.5 text-xs text-slate-200"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-white/10 bg-black/50 p-6">
                    <div>
                      <p className="text-xs font-bold text-amber-300 mb-2">
                        Direct Business Impact in UAE:
                      </p>
                      <p className="text-xs leading-relaxed text-slate-300">
                        {srv.businessImpactInUAE}
                      </p>

                      <p className="mt-6 text-xs font-bold text-emerald-300 mb-3">
                        Key Deliverables Included:
                      </p>
                      <ul className="space-y-2 text-xs text-slate-200">
                        {srv.deliverables.map((deliv, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <Check className="h-4 w-4 shrink-0 text-cyan-400" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 border-t border-white/10 pt-4">
                      <a
                        href={getWhatsAppUrl(srv.whatsappText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 py-3 text-xs font-bold text-cyan-300 transition-colors hover:bg-cyan-400 hover:text-black"
                      >
                        <PhoneCall className="h-3.5 w-3.5" />
                        <span>Consult Now: {WHATSAPP_NUMBER_DISPLAY}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: UAE E-COMMERCE & PORTAL SEO (SHOPIFY, SALLA, NEXT.JS)
      ===================================================================== */}
      <section
        id="ecommerce-seo-uae"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Specialized Organic Growth for UAE Stores & Web Portals"
            title="E-Commerce & Platform SEO in the UAE:"
            highlightedWord="Shopify, Salla, WooCommerce & Next.js"
            subtitle="Stop losing margin to rising ad costs in Dubai. We engineer your online store or real estate/travel portal to rank #1 on Google.ae for high-intent commercial searches."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {ECOMMERCE_SEO_PLATFORMS_UAE.map((plat) => (
              <div
                key={plat.id}
                className="flex flex-col justify-between rounded-3xl border border-white/15 bg-gradient-to-b from-[#091528] to-[#040812] p-7 shadow-xl"
              >
                <div>
                  <span className="inline-block rounded-full bg-cyan-500/15 px-3.5 py-1 text-xs font-bold text-cyan-300 border border-cyan-500/30">
                    {plat.marketShareTag}
                  </span>
                  <h3 className="mt-4 text-2xl font-black text-white">
                    {plat.platformName}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-emerald-300">
                    {plat.title}
                  </p>

                  <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3.5 text-xs text-slate-300">
                    <strong className="text-amber-300 block mb-1">
                      The Challenge We Solve:
                    </strong>
                    {plat.painPointSolved}
                  </div>

                  <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-4 text-xs text-slate-200">
                    {plat.technicalSolutions.map((sol, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-xs font-bold text-emerald-400 mb-4">
                    Expected Impact: {plat.expectedGrowth}
                  </p>
                  <a
                    href={getWhatsAppUrl(plat.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3.5 text-xs font-black text-white transition-transform hover:scale-[1.01]"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>Scale Your Platform with SEO</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: DOCUMENTED GOOGLE SEARCH CONSOLE (GSC) RESULTS IN UAE
      ===================================================================== */}
      <section
        id="gsc-results-uae"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Verified Performance — Real Google.ae Numbers"
            title="Documented Google Search Console Results for"
            highlightedWord="Our Clients in Dubai & Across the UAE"
            subtitle="Explore how real estate portals, luxury Shopify brands, and medical clinics in the UAE scaled from modest traffic to tens of thousands of monthly organic buyers."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {GSC_DOCUMENTED_RESULTS_UAE.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#071928] to-[#030710] p-7 shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="rounded-lg bg-cyan-500/15 px-3 py-1 font-bold text-cyan-300">
                      {item.sector}
                    </span>
                    <span className="font-mono text-slate-400">{item.city}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-black text-white">
                    {item.projectTitle}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-emerald-400">
                    Platform: {item.platform} • Timeline: {item.timeframe}
                  </p>

                  {/* Before / After GSC Metrics Box */}
                  <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-black/60 p-4">
                    <div>
                      <p className="text-[11px] text-slate-400">Clicks Before</p>
                      <p className="mt-1 text-sm font-bold text-slate-300 line-through">
                        {item.clicksBefore}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] text-emerald-300">
                        Clicks After SEO
                      </p>
                      <p className="mt-1 text-base font-black text-emerald-400">
                        {item.clicksAfter}
                      </p>
                    </div>
                    <div className="col-span-2 border-t border-white/10 pt-2.5 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Monthly Impressions:</span>
                      <span className="font-bold text-cyan-300">
                        {item.impressionsAfter}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-slate-300">
                    {item.summary}
                  </p>

                  <div className="mt-4">
                    <p className="text-[11px] font-bold text-amber-300 mb-2">
                      Sample Keywords Ranked #1 on Google.ae:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.topKeywordsRanked.map((kw) => (
                        <span
                          key={kw}
                          className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-white border border-white/10"
                        >
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-emerald-500/15 p-3 text-center text-xs font-black text-emerald-300 border border-emerald-500/30">
                  {item.revenueGrowth}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: AI SEARCH & GENERATIVE ENGINE OPTIMIZATION (GEO) IN UAE
      ===================================================================== */}
      <section
        id="ai-geo-seo-uae"
        className="relative z-10 border-b border-white/10 bg-[#03060f] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-cyan-500/35 bg-gradient-to-r from-blue-950/60 via-[#061226] to-emerald-950/40 p-8 sm:p-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-4 py-1 text-xs font-bold text-cyan-300 border border-cyan-500/30">
                  <Cpu className="h-4 w-4" />
                  <span>Next-Gen AI Search Optimization (GEO) in Dubai & UAE</span>
                </div>
                <h2 className="mt-4 text-2xl font-black text-white sm:text-4xl">
                  Rank #1 on Both Google.ae &{" "}
                  <span className="text-cyan-300">
                    Google AI Overviews, ChatGPT & Perplexity
                  </span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
                  High-net-worth buyers, expats, and corporate executives in Dubai
                  and Abu Dhabi increasingly ask AI assistants directly:
                  &ldquo;What is the best company/clinic/store for [service] in
                  Dubai?&rdquo; At{" "}
                  <strong className="text-white">Unique Digital Agency</strong>, we
                  engineer your brand entities, interconnected JSON-LD schemas,
                  and authoritative citations through{" "}
                  <strong className="text-emerald-300">
                    Generative Engine Optimization (GEO)
                  </strong>{" "}
                  so AI engines cite and recommend your business as the #1 choice
                  in the UAE.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2.5 rounded-xl bg-black/50 p-3.5 border border-white/10">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span>Knowledge Graph & UAE Brand Entity Recognition</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-black/50 p-3.5 border border-white/10">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400" />
                    <span>Direct-Answer Formatting for Google AI Overviews</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-black/50 p-3.5 border border-white/10">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400" />
                    <span>Verified Google E-E-A-T Trust & Authority Signals</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-black/50 p-3.5 border border-white/10">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                    <span>Multilingual Schema.org JSON-LD Architecture</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-black/75 p-6">
                <p className="text-xs font-bold text-amber-300 mb-3">
                  ROI Comparison: Unique White-Hat SEO vs. UAE Paid Ads
                </p>
                <div className="space-y-3">
                  {SEO_VS_ADS_COMPARISON_UAE.map((row) => (
                    <div
                      key={row.criterion}
                      className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 text-xs"
                    >
                      <p className="font-bold text-white mb-1">{row.criterion}</p>
                      <p className="text-emerald-300">
                        <strong>Unique SEO: </strong>
                        {row.uniqueSeo}
                      </p>
                      <p className="mt-1 text-slate-400">
                        <strong>Paid Ads: </strong>
                        {row.paidAds}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: LOCAL SEO COVERAGE ACROSS ALL 7 EMIRATES
      ===================================================================== */}
      <section
        id="uae-emirates"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Nationwide Geo-Targeted SEO Across the United Arab Emirates"
            title="Local SEO Services in Dubai, Abu Dhabi,"
            highlightedWord="Sharjah, Ajman & All 7 Emirates"
            subtitle="We customize your local search strategy, Google Business Profile, and geo-targeted landing pages to capture high-intent customers in every Emirate."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {UAE_EMIRATES_ZONES.map((zone) => (
              <div
                key={zone.id}
                className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#091326] to-[#040812] p-7 sm:p-8"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-cyan-400 border border-blue-500/30">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      SEO Company in {zone.emirateName}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-400">
                      {zone.arabicTag}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-slate-300">
                  {zone.commercialImportance}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {zone.highDemandSectors.map((sec) => (
                    <span
                      key={sec}
                      className="rounded-lg bg-white/5 px-3 py-1 text-xs font-semibold text-amber-300 border border-white/10"
                    >
                      {sec}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-200">
                  {zone.localSeoStrategy.map((st, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{st}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                  {zone.sampleKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded bg-blue-500/10 px-2.5 py-1 text-[11px] text-cyan-200 border border-blue-500/20"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: 90-DAY SCIENTIFIC EXECUTION ROADMAP
      ===================================================================== */}
      <section className="relative z-10 border-b border-white/10 bg-[#03060e] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Transparent Step-by-Step Methodology"
            title="Our 90-Day Scientific Roadmap to"
            highlightedWord="Google.ae Page #1 in the UAE"
            subtitle="We execute a disciplined 5-phase engineering, multilingual content, and authority roadmap designed for rapid technical wins and compounding revenue."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {NINETY_DAY_ROADMAP_UAE.map((phase) => (
              <div
                key={phase.phaseNum}
                className="flex flex-col justify-between rounded-3xl border border-white/12 bg-[#070f20] p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-mono text-sm font-black text-white">
                      {phase.phaseNum}
                    </span>
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-bold text-amber-300">
                      {phase.timeframe}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-black text-white">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {phase.description}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3 text-[11px] text-slate-200">
                    {phase.tasks.map((t) => (
                      <li key={t} className="flex items-center gap-1.5">
                        <Check className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-xl bg-black/50 p-3 text-[11px] font-bold text-emerald-300 border border-white/10">
                  Outcome: {phase.milestoneOutput}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: TRANSPARENT SEO PACKAGES IN UAE DIRHAMS (AED)
      ===================================================================== */}
      <section
        id="pricing-aed"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Transparent Investment — High-ROI Monthly Plans"
            title="UAE SEO Packages & Pricing"
            highlightedWord="in UAE Dirhams (AED)"
            subtitle="Choose the plan aligned with your growth goals in Dubai, Abu Dhabi, or Sharjah and message our engineering & SEO team on WhatsApp to start today."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {UAE_SEO_PACKAGES_AED.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all ${
                  pkg.isPopular
                    ? "border-2 border-cyan-400 bg-gradient-to-b from-[#0b1936] to-[#040914] shadow-[0_0_55px_rgba(6,182,212,0.22)] lg:-translate-y-3"
                    : "border border-white/15 bg-[#060c1a]"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-8 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-1 text-xs font-black text-black shadow-lg">
                    Most Popular for Dubai & UAE Businesses
                  </div>
                )}

                <div>
                  <span className="text-xs font-bold text-cyan-400">
                    {pkg.badgeText}
                  </span>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    {pkg.packageName}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {pkg.idealFor}
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 p-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-cyan-300">
                        {pkg.priceAED}
                      </span>
                      <span className="text-sm font-bold text-amber-300">
                        AED / Month
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] font-bold text-emerald-300">
                      {pkg.keywordsCount}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-2.5 text-xs text-slate-200">
                    {pkg.includedServices.map((srv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-xs font-bold text-cyan-300 mb-2">
                      Technical & CRO Enhancements Included:
                    </p>
                    <ul className="space-y-2 text-xs text-slate-200">
                      {pkg.technicalAndContentFeatures.map((tf, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                          <span>{tf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 rounded-xl bg-amber-500/10 p-3 text-xs font-bold text-amber-300 border border-amber-500/20">
                    {pkg.reportingAndSupport}
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(pkg.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-black transition-all ${
                    pkg.isPopular
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 hover:scale-[1.01]"
                      : "border border-white/20 bg-white/5 text-white hover:bg-blue-600"
                  }`}
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Start Now on WhatsApp ({WHATSAPP_NUMBER_DISPLAY})</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 10: UAE SEO FAQ ACCORDION SECTION
      ===================================================================== */}
      <section
        id="faq-uae"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Clear Answers to Your Key Questions"
            title="Frequently Asked Questions About"
            highlightedWord="SEO Services in the UAE"
            subtitle="Everything you need to know before launching your search engine optimization campaign in Dubai, Abu Dhabi, Sharjah, and across the Emirates."
          />

          <div className="space-y-4">
            {UAE_SEO_FAQS.map((faq, idx) => (
              <details
                key={faq.id}
                open={idx === 0}
                className="group rounded-2xl border border-white/12 bg-[#060c1a] p-6 transition-all open:border-cyan-500/40 open:bg-[#071526]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-cyan-500/15 px-2.5 py-1 text-xs font-bold text-cyan-300">
                      {faq.category}
                    </span>
                    <h3 className="text-base font-black text-white sm:text-lg group-open:text-cyan-300">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-400 transition-transform group-open:rotate-180">
                    <ChevronRight className="h-4 w-4 rotate-90" />
                  </span>
                </summary>
                <div className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-300">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 11: FINAL FREE UAE SEO AUDIT & WHATSAPP CTA BANNER
      ===================================================================== */}
      <section className="relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-blue-500/40 bg-gradient-to-b from-[#081b33] via-[#05101e] to-[#02050b] p-8 shadow-[0_0_80px_rgba(37,99,235,0.22)] sm:p-12 lg:p-16 text-center">
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300">
                <Sparkles className="h-4 w-4" />
                <span>Claim Your 100% Free UAE Technical & Keyword SEO Audit</span>
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Send Us Your Website or Store URL & Discover How to Rank #1 on Google.ae
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                Whether you run a custom platform on{" "}
                <strong className="text-cyan-300">Next.js or WordPress</strong>,
                or an online store on{" "}
                <strong className="text-emerald-300">
                  Shopify, Salla, WooCommerce, or EasyOrder
                </strong>
                ; message our team on WhatsApp for a comprehensive 24-hour audit
                of your technical health and highest-ROI keyword opportunities in
                Dubai and the UAE.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={mainWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-base font-black text-black shadow-[0_0_35px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.03]"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Request Free Audit on WhatsApp:</span>
                  <span className="font-mono text-lg">
                    {WHATSAPP_NUMBER_DISPLAY}
                  </span>
                </a>

                <Link
                  href="/uae-web-design"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  <span>UAE Web Design Services</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}