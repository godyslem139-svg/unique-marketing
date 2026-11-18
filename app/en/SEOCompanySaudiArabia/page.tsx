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
    "SEO Company in Saudi Arabia | #1 SEO Agency in Riyadh & Jeddah | Unique",
  description:
    "Leading SEO Company in Saudi Arabia (Riyadh, Jeddah, Dammam). We scale organic traffic and sales for Salla, Zid, Shopify, WordPress & Next.js websites with technical SEO, AI search optimization (GEO), and verified Google Search Console results.",
  keywords: [
    "SEO Company in Saudi Arabia",
    "Best SEO Agency Saudi Arabia",
    "SEO Agency Riyadh",
    "SEO Services Jeddah",
    "SEO Company Dammam",
    "Search Engine Optimization Saudi Arabia",
    "E-commerce SEO Saudi Arabia",
    "Salla SEO Agency",
    "Zid SEO Services",
    "Shopify SEO Saudi Arabia",
    "Technical SEO Consultant KSA",
    "Local SEO Riyadh",
    "Arabic SEO Agency Saudi Arabia",
    "AI Search Optimization GEO KSA",
    "UNIQUE Digital Agency",
  ],
  authors: [{ name: "UNIQUE Digital Agency" }],
  publisher: "UNIQUE",
  metadataBase: new URL("https://marketing-beta-gold-30.vercel.app"),
  alternates: {
    canonical: "/en/saudi-seo",
    languages: {
      "en-SA": "/en/saudi-seo",
      "ar-SA": "/saudi-seo",
      en: "/en/saudi-seo",
      ar: "/saudi-seo",
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
      "SEO Company in Saudi Arabia | Dominate Google Page #1 & Scale Revenue | Unique",
    description:
      "Your strategic SEO partner in Riyadh, Jeddah, Dammam, and across KSA. Full-stack Technical SEO, Arabic & English Content Engineering, White-Hat Authority Building, and E-Commerce SEO for Salla, Zid & Shopify.",
    url: "https://marketing-beta-gold-30.vercel.app/en/saudi-seo",
    siteName: "Unique Agency",
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Company in Saudi Arabia | Best SEO Agency KSA | Unique",
    description:
      "Verified Google Search Console growth for Saudi enterprises and e-commerce stores in Riyadh, Jeddah, and Dammam.",
  },
};

// ============================================================================
// 3. TYPESCRIPT INTERFACES FOR SAUDI SEO ENGLISH PAGE
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
  businessImpactInKSA: string;
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

interface SaudiCitySeoZone {
  id: string;
  cityName: string;
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

interface SaudiSeoPackageSAR {
  id: string;
  packageName: string;
  badgeText: string;
  priceSAR: string;
  billingCycle: string;
  idealFor: string;
  isPopular: boolean;
  keywordsCount: string;
  includedServices: string[];
  technicalAndContentFeatures: string[];
  reportingAndSupport: string;
  whatsappMsg: string;
}

interface SaudiSeoFaq {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// 4. COMPREHENSIVE SAUDI SEO DATA ARRAYS (ENGLISH COMMERCIAL COPY)
// ============================================================================

const HERO_KPIS: HeroKpiCard[] = [
  {
    id: "kpi-gsc-clicks",
    value: "+380%",
    title: "Average Organic Traffic Growth",
    subtitle: "Verified real-world click and impression growth inside Google Search Console for our KSA clients",
    accent: "emerald",
  },
  {
    id: "kpi-first-page",
    value: "60 - 90 Days",
    title: "To Reach Google.com.sa Page #1",
    subtitle: "Data-driven engineering combining Technical SEO, Arabic/English buyer content, and safe authority links",
    accent: "cyan",
  },
  {
    id: "kpi-ecommerce-stores",
    value: "Salla • Zid • Shopify",
    title: "Saudi E-Commerce SEO Specialists",
    subtitle: "We transform online stores from 100% paid-ad dependency into 24/7 organic sales machines",
    accent: "amber",
  },
  {
    id: "kpi-ai-seo",
    value: "Google + AI",
    title: "SERP #1 & AI Overviews (GEO)",
    subtitle: "Dual optimization to dominate traditional Google search results, ChatGPT Search, and Google AI Overviews",
    accent: "blue",
  },
];

const CORE_SEO_SERVICES_KSA: SeoServicePillar[] = [
  {
    id: "ksa-seo-technical",
    number: "01",
    badge: "The Engineering Foundation for Fast Rankings",
    title: "Advanced Technical SEO & Core Web Vitals Engineering",
    arabicSubtitle: "الفحص الهندسي الشامل والسيو التقني المتقدم",
    summary:
      "Before publishing content or building links, our software engineers audit your entire website using Screaming Frog, Google Search Console, and Lighthouse. We eliminate every indexing bottleneck, broken canonical, and speed issue holding your website back in Google Saudi Arabia.",
    businessImpactInKSA:
      "Resolving technical bottlenecks boosts crawl efficiency by up to 150% within the first 3 weeks and gives your mobile site an immediate ranking edge across KSA.",
    executionChecklist: [
      "Fixing Non-Indexable Canonical errors, 404 broken links, redirect chains (301), and orphan pages",
      "Optimizing Core Web Vitals (LCP < 0.8s, zero CLS layout shift, fast INP) and eliminating enormous network payloads",
      "Engineering custom Schema.org JSON-LD markup for Products (SAR), LocalBusiness, Services, FAQs, and Reviews",
      "Configuring dynamic XML Sitemaps, Robots.txt directives, and Crawl Budget allocation for large portals",
      "Full SSR & bilingual technical optimization (hreflang ar-SA / en-SA) for Next.js, WordPress, Shopify, Salla, and Zid",
    ],
    deliverables: [
      "Full Before/After Screaming Frog Technical Audit",
      "95-100 Google PageSpeed Mobile Score",
      "Rich Schema.org JSON-LD & Zero GSC Indexing Errors",
    ],
    whatsappText: "Hello Unique Agency, I would like to request a Technical SEO Audit & Optimization for my website in Saudi Arabia.",
  },
  {
    id: "ksa-seo-ecommerce",
    number: "02",
    badge: "Built for Saudi Online Retailers",
    title: "E-Commerce SEO for Salla, Zid, Shopify & WooCommerce in KSA",
    arabicSubtitle: "سيو المتاجر الإلكترونية في السعودية (سلة، زد، شوبيفاي)",
    summary:
      "We solve the #1 challenge facing Saudi online stores: 'The moment we pause Snapchat or TikTok ads, orders stop!' We restructure your category tree, product pages, and technical schema on Salla, Zid, or Shopify so high-intent Saudi shoppers find and buy from you organically every single day.",
    businessImpactInKSA:
      "Reduces Customer Acquisition Cost (CAC) by up to 60% while building a compounding organic revenue channel that scales month over month.",
    executionChecklist: [
      "Restructuring main categories and sub-collections around high-volume Saudi buyer keywords in Arabic and English",
      "Writing persuasive, SEO-optimized product titles and descriptions that outperform generic supplier copy",
      "Implementing Product Schema markup to display prices in Saudi Riyals (SAR), stock status, and star ratings on Google",
      "Resolving duplicate URL issues caused by faceted filters, sorting parameters, and multi-collection paths",
      "Building high-converting commercial blog clusters that capture Saudi shoppers comparing products and route them to checkout",
    ],
    deliverables: [
      "Complete E-Commerce Category & Keyword Architecture",
      "On-Page Optimization for Top Revenue Products & Collections",
      "Rich Product Snippets (Price in SAR & Star Reviews) on SERPs",
    ],
    whatsappText: "Hello Unique Agency, I own an e-commerce store in Saudi Arabia and want E-Commerce SEO to scale organic sales.",
  },
  {
    id: "ksa-seo-keywords",
    number: "03",
    badge: "Targeting Ready-to-Buy Saudi Customers",
    title: "Saudi Search Intent Mapping & Bilingual Keyword Intelligence",
    arabicSubtitle: "هندسة الكلمات المفتاحية والنية الشرائية للسوق السعودي",
    summary:
      "We never chase vanity traffic that does not convert. We analyze how real decision-makers and consumers search across Riyadh, Jeddah, and Dammam—in both Saudi Arabic dialect, Modern Standard Arabic, and English—and map every high-intent keyword to a dedicated revenue-generating page.",
    businessImpactInKSA:
      "Attracts qualified visitors who are actively looking to purchase your product or hire your company right now.",
    executionChecklist: [
      "Uncovering high-converting Transactional & Commercial keywords in Arabic (Saudi dialect + MSA) and English",
      "Competitor Keyword Gap Analysis against the top 5 ranking domains in your exact Saudi niche",
      "Capturing low-difficulty, high-margin Long-Tail keywords that deliver quick wins within the first 45 days",
      "Building a strict Keyword Mapping Matrix to prevent internal Keyword Cannibalization across your URLs",
    ],
    deliverables: [
      "Master Bilingual Saudi Keyword Strategy Blueprint",
      "URL-by-URL Keyword Mapping Sheet",
      "Top 5 Saudi Competitor Gap Analysis Report",
    ],
    whatsappText: "Hello Unique Agency, I want a Keyword Research & SEO Strategy blueprint for my business in Saudi Arabia.",
  },
  {
    id: "ksa-seo-onpage",
    number: "04",
    badge: "Turning Rankings into Revenue",
    title: "On-Page SEO, Semantic Architecture & Conversion Optimization (CRO)",
    arabicSubtitle: "تحسين السيو الداخلي وهندسة التحويل البيعي",
    summary:
      "We engineer every landing page and service page to satisfy both Google's semantic ranking algorithms and Saudi buyer psychology. From high-CTR Meta Titles to persuasive content hierarchies and instant WhatsApp conversion funnels, we turn organic clicks into paying clients.",
    businessImpactInKSA:
      "Increases organic Click-Through Rate (CTR) on Google SERPs and doubles lead-to-WhatsApp conversion rates.",
    executionChecklist: [
      "Crafting magnetic Arabic & English Meta Titles and Meta Descriptions that maximize organic CTR",
      "Structuring semantic HTML5 headings (H1, H2, H3) enriched with NLP entities and LSI vocabulary",
      "Building topical Internal Linking Silos that channel PageRank authority directly into your money pages",
      "Optimizing images with descriptive Alt attributes, WebP/AVIF compression, and localized file naming",
      "Integrating Google E-E-A-T trust signals, verified credentials, and frictionless WhatsApp/Lead CTAs",
    ],
    deliverables: [
      "Full On-Page Optimization Across Core Landing Pages",
      "Internal Linking Silo Architecture",
      "CRO & WhatsApp Funnel Enhancement",
    ],
    whatsappText: "Hello Unique Agency, I need On-Page SEO and Conversion Optimization for my Saudi website.",
  },
  {
    id: "ksa-seo-local",
    number: "05",
    badge: "Dominate Local Search & Google Maps",
    title: "Local SEO & Google Business Profile Domination Across KSA",
    arabicSubtitle: "السيو المحلي وتصدر خرائط جوجل في مدن المملكة",
    summary:
      "When customers in Riyadh, Jeddah, Dammam, or Khobar search for 'best [service] near me' or browse Google Maps, we position your business in the Top 3 Local Pack to drive direct phone calls, showroom visits, and WhatsApp inquiries.",
    businessImpactInKSA:
      "Drives a 280%+ surge in direct phone calls, direction requests, and local branch appointments across Saudi cities.",
    executionChecklist: [
      "Complete optimization and verification of your Google Business Profile (GBP) with localized categories and keywords",
      "Building unique, non-duplicate geo-targeted city landing pages (Riyadh, Jeddah, Dammam, Khobar, Makkah, Madinah)",
      "Standardizing NAP (Name, Address, Phone) citations across authoritative Saudi business directories",
      "Implementing a systematic customer review acquisition and keyword-rich response strategy",
    ],
    deliverables: [
      "Fully Optimized Google Business Profile (GBP)",
      "Dedicated Geo-Targeted Saudi City Landing Pages",
      "Top 3 Google Maps Local Pack Ranking Strategy",
    ],
    whatsappText: "Hello Unique Agency, I want Local SEO and Google Maps ranking for my business in Saudi Arabia.",
  },
  {
    id: "ksa-seo-content-authority",
    number: "06",
    badge: "Topical Authority & AI Search Readiness",
    title: "Topical Authority Content & AI Search Optimization (GEO)",
    arabicSubtitle: "بناء السلطة الموضوعية وتصدر محركات الذكاء الاصطناعي",
    summary:
      "Modern search goes beyond isolated keywords. We build comprehensive Topical Authority clusters in Arabic and English that establish your brand as the undisputed industry leader on Google.com.sa, Google AI Overviews, ChatGPT Search, and Perplexity.",
    businessImpactInKSA:
      "Captures hundreds of commercial and informational search queries while positioning your brand as the #1 AI-recommended solution in KSA.",
    executionChecklist: [
      "Designing Pillar Pages and supporting Content Clusters that cover your entire industry ecosystem in Saudi Arabia",
      "Writing expert-level, human-crafted Arabic & English SEO content tailored to Saudi market regulations and culture",
      "Formatting content with direct answer blocks, comparison tables, and structured lists to win Featured Snippets",
      "Applying Generative Engine Optimization (GEO) and Entity SEO so LLMs cite and recommend your business",
    ],
    deliverables: [
      "Monthly Topical Authority Content Calendar",
      "Bilingual Commercial Pages & In-Depth SEO Articles",
      "AI Overviews & Featured Snippet Optimization",
    ],
    whatsappText: "Hello Unique Agency, I want a Content SEO & AI Search Optimization (GEO) strategy for Saudi Arabia.",
  },
  {
    id: "ksa-seo-linkbuilding",
    number: "07",
    badge: "100% Safe White-Hat Domain Authority",
    title: "White-Hat Link Building & Saudi Digital PR",
    arabicSubtitle: "بناء الباك لينك الآمن والجيست بوست الموثوق",
    summary:
      "We strictly reject toxic PBNs and automated spam links that trigger Google penalties. Instead, we acquire high-authority, contextual White-Hat backlinks and Digital PR placements from reputable Arabic, GCC, and international publications relevant to your sector.",
    businessImpactInKSA:
      "Safely elevates your Domain Rating (DR) and locks in top-3 rankings for the most competitive keywords in Saudi Arabia.",
    executionChecklist: [
      "Reverse-engineering the backlink profiles of top-ranking Saudi competitors to capture high-value link opportunities",
      "Publishing contextual Guest Posts and editorial features on high-traffic Arabic and Gulf news and niche portals",
      "Maintaining a natural, penalty-proof Anchor Text distribution across brand, naked, and target keywords",
      "Auditing your existing backlink profile and submitting Disavow files to neutralize toxic or spammy links",
    ],
    deliverables: [
      "High-DR Contextual White-Hat Backlinks",
      "Toxic Backlink Audit & Disavow Protection",
      "Transparent Monthly Link Acquisition Report",
    ],
    whatsappText: "Hello Unique Agency, I want safe White-Hat Link Building to boost my website authority in Saudi Arabia.",
  },
];

const ECOMMERCE_SEO_PLATFORMS_KSA: EcommerceSeoPlatform[] = [
  {
    id: "ecom-salla-en",
    platformName: "Salla Store SEO (سيو متاجر سلة)",
    marketShareTag: "#1 Local E-Commerce Platform in KSA",
    title: "Specialized Search Engine Optimization for Salla Stores",
    painPointSolved:
      "Most Salla merchants rely on default theme settings and thin product descriptions, leaving their stores invisible on Google and 100% dependent on expensive Snapchat and TikTok ads.",
    technicalSolutions: [
      "Configuring advanced Salla SEO settings, custom robots.txt rules, and seamless GSC & GA4 integration",
      "Rewriting category and product titles/descriptions around high-volume Saudi buyer search queries",
      "Custom CSS/JS UI enhancements to improve mobile browsing speed, visual trust, and add-to-cart rates",
      "Building an integrated Salla blog strategy that links commercial buying guides directly to top-margin products",
    ],
    expectedGrowth: "+250% to +400% surge in organic traffic and non-ad orders within 3 to 6 months",
    whatsappMsg: "Hello Unique Agency, I have a Salla store in Saudi Arabia and want to scale my organic sales with SEO.",
  },
  {
    id: "ecom-zid-en",
    platformName: "Zid Store SEO (سيو متاجر زد)",
    marketShareTag: "Fast-Growing Saudi Retail Ecosystem",
    title: "Full-Funnel Organic Growth for Zid E-Commerce Stores",
    painPointSolved:
      "Unstructured product catalogs and missing category copy prevent Zid stores from ranking for broad, high-volume commercial keywords in Saudi Arabia.",
    technicalSolutions: [
      "Architecting a clean, hierarchical category and sub-category tree targeting Saudi retail search demand",
      "Compressing product imagery and scripts to achieve lightning-fast mobile load times on Saudi 5G/4G networks",
      "Adding keyword-rich semantic content blocks to category headers and footers to boost topical relevance",
      "Activating rich Product Schema and building contextual authority links to priority store collections",
    ],
    expectedGrowth: "Page #1 visibility for core retail categories and sustainable reduction in ad spend",
    whatsappMsg: "Hello Unique Agency, I have a Zid store in Saudi Arabia and want a complete E-Commerce SEO plan.",
  },
  {
    id: "ecom-shopify-en",
    platformName: "Shopify & WooCommerce SEO",
    marketShareTag: "For Scaling Saudi & Global D2C Brands",
    title: "Enterprise Technical & Bilingual SEO for Shopify & WooCommerce",
    painPointSolved:
      "Duplicate collection/product URL paths in Shopify (/collections/ vs /products/) and heavy plugin bloat in WooCommerce that hurt Core Web Vitals and indexation.",
    technicalSolutions: [
      "Fixing Shopify Liquid internal linking to enforce canonical `/products/` URLs and eliminate duplicate crawl waste",
      "Speed engineering for Shopify OS 2.0 and WooCommerce with full SAR Product & Review Schema markup",
      "Optimizing faceted navigation and collection filters to prevent index bloat",
      "Bilingual Arabic/English SEO architecture (`ar-SA` & `en-SA`) to capture both local and expat shoppers across KSA",
    ],
    expectedGrowth: "Total domination of brand and non-brand commercial keywords across Google Saudi Arabia",
    whatsappMsg: "Hello Unique Agency, I run a Shopify / WooCommerce store in Saudi Arabia and need expert SEO.",
  },
];

const GSC_DOCUMENTED_RESULTS: GscCaseStudy[] = [
  {
    id: "gsc-en-1",
    sector: "Luxury Oud, Bakhoor & Niche Perfumes",
    city: "Riyadh & Nationwide KSA",
    platform: "Salla Store (سلة)",
    projectTitle: "From Paid-Ad Dependency to 42,800+ Monthly Organic Clicks on Google.com.sa",
    timeframe: "Within 4 Months",
    clicksBefore: "1,450 clicks/mo",
    clicksAfter: "42,800 clicks/mo",
    impressionsAfter: "510,000+ Monthly Impressions",
    revenueGrowth: "+340% Growth in Organic Non-Ad Revenue",
    topKeywordsRanked: ["best oud store saudi arabia", "luxury royal bakhoor riyadh", "niche perfumes ksa"],
    summary:
      "Restructured 18 core categories and 240+ product pages on Salla, implemented rich SAR Product Schema, and published a 30-article topical cluster on Oud and Arabian perfumery.",
  },
  {
    id: "gsc-en-2",
    sector: "General Contracting, Steel Hangars & Shade Structures",
    city: "Jeddah, Riyadh & Dammam",
    platform: "Next.js 16 + Sanity CMS",
    projectTitle: "Ranking Top #3 for 65+ High-Ticket B2B & Commercial Contracting Keywords",
    timeframe: "Within 75 Days",
    clicksBefore: "620 clicks/mo",
    clicksAfter: "28,900 clicks/mo",
    impressionsAfter: "340,000+ High-Intent Impressions",
    revenueGrowth: "+410% Increase in Inbound WhatsApp & RFQ Leads",
    topKeywordsRanked: ["sandwich panel installation ksa", "hangar contractor riyadh", "car parking shades jeddah"],
    summary:
      "Engineered ultra-fast Next.js service pages (99/100 PageSpeed) with dedicated city silos, compressed project video galleries, and LocalBusiness JSON-LD schema.",
  },
  {
    id: "gsc-en-3",
    sector: "Multi-Specialty Dental, Dermatology & Aesthetic Clinic",
    city: "Jeddah & Riyadh",
    platform: "WordPress & Elementor Pro",
    projectTitle: "Tripling Monthly Patient Appointments via Medical SEO & Google Maps Pack",
    timeframe: "Within 3 Months",
    clicksBefore: "2,100 clicks/mo",
    clicksAfter: "34,500 clicks/mo",
    impressionsAfter: "460,000+ Local & Medical Searches",
    revenueGrowth: "+275% Growth in Direct Clinic Bookings",
    topKeywordsRanked: ["best dental clinic in jeddah", "hollywood smile riyadh", "laser clinic saudi arabia"],
    summary:
      "Built dedicated treatment and doctor profile pages aligned with Google healthcare E-E-A-T guidelines and optimized Google Business Profiles for Top-3 Map Pack rankings.",
  },
];

const SEO_VS_ADS_COMPARISON: SeoVsAdsRow[] = [
  {
    criterion: "Sustainability of Traffic & Sales",
    uniqueSeo: "Compounds 24/7 for years—continues generating leads and sales even if you pause budget",
    paidAds: "Traffic and orders drop to zero the exact second your ad balance runs out",
    randomCheapSeo: "Temporary spike followed by severe Google algorithm penalties and de-indexing",
  },
  {
    criterion: "Customer Acquisition Cost (CAC) Over Time",
    uniqueSeo: "Drops significantly every month as organic rankings solidify on Page #1",
    paidAds: "Increases constantly due to aggressive CPC bidding wars in the Saudi market",
    randomCheapSeo: "Double loss: wasted retainer fees plus expensive recovery costs to clean toxic links",
  },
  {
    criterion: "Saudi Buyer Trust & Brand Authority",
    uniqueSeo: "High trust—Saudi decision-makers trust #1 organic results 4x more than sponsored ads",
    paidAds: "Many high-value prospects skip 'Sponsored' labels and scroll straight to organic leaders",
    randomCheapSeo: "Low-quality AI-spun articles damage your brand reputation and credibility",
  },
  {
    criterion: "Technical Execution & Link Quality",
    uniqueSeo: "In-house developers fix code/speed + human comercial copy + 100% safe White-Hat PR links",
    paidAds: "Does nothing to improve your website speed, structure, or long-term digital equity",
    randomCheapSeo: "False promises of '300 spam backlinks & 80 spun articles/month' that destroy domains",
  },
];

const SAUDI_CITIES_ZONES: SaudiCitySeoZone[] = [
  {
    id: "city-riyadh-en",
    cityName: "Riyadh",
    arabicTag: "شركة سيو في الرياض",
    commercialImportance:
      "The economic powerhouse and capital of Saudi Arabia—home to Vision 2030 mega-projects, corporate headquarters, luxury retail, clinics, and booming real estate.",
    highDemandSectors: ["Real Estate & Contracting", "Salla, Zid & Shopify Stores", "Medical & Aesthetic Clinics", "B2B Tech & Corporate Services"],
    localSeoStrategy: [
      "Targeting high-intent Arabic and English commercial queries across Riyadh districts (Olaya, Al Malqa, North Riyadh)",
      "Google Business Profile (GBP) optimization to dominate the Riyadh Local 3-Pack on Google Maps",
      "High-authority Digital PR and topical silos engineered to beat fierce capital-city competition",
    ],
    sampleKeywords: ["SEO Company Riyadh", "Best SEO Agency in Riyadh", "شركة سيو في الرياض"],
  },
  {
    id: "city-jeddah-en",
    cityName: "Jeddah",
    arabicTag: "شركة سيو في جدة",
    commercialImportance:
      "The commercial and tourism gateway on the Red Sea—a vibrant hub for hospitality,医療/aesthetic clinics, e-commerce brands, logistics, and construction.",
    highDemandSectors: ["Tourism, Hospitality & Car Rental", "Dental & Cosmetic Clinics", "Construction & Interior Design", "Fashion & Perfume E-Commerce"],
    localSeoStrategy: [
      "Building localized service and category pages tailored to Jeddah search behavior and seasonal demand",
      "Mobile Core Web Vitals optimization (99/100) for fast browsing across coastal and urban networks",
      "Capturing both Arabic local searches and English expat/tourist search demand in Jeddah",
    ],
    sampleKeywords: ["SEO Agency Jeddah", "SEO Services in Jeddah", "شركة سيو في جدة"],
  },
  {
    id: "city-dammam-khobar-en",
    cityName: "Dammam, Khobar & Eastern Province",
    arabicTag: "شركة سيو في الدمام والخبر والشرقية",
    commercialImportance:
      "The industrial, energy, logistics, and commercial heartland of the Eastern Province (Dammam, Al Khobar, Dhahran, Jubail, and Al Ahsa).",
    highDemandSectors: ["Industrial & B2B Supply", "Engineering & Contracting", "Logistics & Freight", "Healthcare & Retail Stores"],
    localSeoStrategy: [
      "Targeting high-contract B2B industrial keywords alongside regional B2C retail queries",
      "Creating authoritative technical specification pages that convert procurement managers",
      "Regional schema and Google Maps optimization across Dammam, Khobar, and Jubail",
    ],
    sampleKeywords: ["SEO Company Dammam", "SEO Agency Al Khobar", "شركة سيو بالدمام والخبر"],
  },
  {
    id: "city-makkah-madinah-neom-en",
    cityName: "Makkah, Madinah, Qassim, Abha & NEOM",
    arabicTag: "مكة، المدينة، القصيم، أبها، ونيوم",
    commercialImportance:
      "Rapidly expanding religious tourism, hospitality, real estate, and regional e-commerce markets offering massive first-mover SEO advantage.",
    highDemandSectors: ["Hotels, Umrah & Travel Portals", "Real Estate & Regional Contracting", "Nationwide E-Commerce Delivery"],
    localSeoStrategy: [
      "Multi-city dynamic landing page architecture with zero duplicate content penalties",
      "Multilingual SEO (Arabic, English, and international languages) for hospitality and travel brands",
      "Fast organic domination in regional search results with high conversion rates",
    ],
    sampleKeywords: ["SEO Services Makkah", "SEO Agency Madinah", "SEO Company Saudi Arabia"],
  },
];

const NINETY_DAY_ROADMAP: NinetyDayPhase[] = [
  {
    phaseNum: "01",
    timeframe: "Weeks 1 - 2",
    title: "Deep Technical Audit & Code-Level Fixes",
    description:
      "We crawl your entire domain with Screaming Frog and GSC, fix indexing/canonical bugs, optimize Core Web Vitals speed, and deploy JSON-LD Schema.",
    tasks: ["100% Technical Audit", "Canonical & Sitemap Fix", "Core Web Vitals Speed", "Schema.org Deployment"],
    milestoneOutput: "100% technically healthy, fast-loading website ready for rapid Google indexation",
  },
  {
    phaseNum: "02",
    timeframe: "Weeks 2 - 3",
    title: "Saudi Keyword Intelligence & Site Architecture",
    description:
      "We analyze top Saudi competitors, extract high-ROI Arabic & English buyer keywords, and map every target query to a dedicated page or collection.",
    tasks: ["Bilingual Keyword Research", "Competitor Gap Analysis", "Category & Silo Mapping", "Zero Cannibalization Plan"],
    milestoneOutput: "Approved revenue-focused keyword map and site hierarchy blueprint",
  },
  {
    phaseNum: "03",
    timeframe: "Weeks 4 - 6",
    title: "On-Page SEO & Conversion Engineering (CRO)",
    description:
      "We optimize Meta Titles, H1-H3 headings, commercial copy, internal linking silos, and WhatsApp/Checkout conversion touchpoints.",
    tasks: ["High-CTR Meta Tags", "Service/Category Copy", "Internal Linking Silos", "WebP & Alt Text Optimization"],
    milestoneOutput: "Immediate surge in Google Search Console impressions and early ranking jumps",
  },
  {
    phaseNum: "04",
    timeframe: "Weeks 6 - 10",
    title: "Topical Authority, Local SEO & AI Search (GEO)",
    description:
      "We publish authoritative content clusters, optimize your Google Business Profile for Local Map Pack rankings, and structure data for AI Overviews.",
    tasks: ["Topical Content Clusters", "Google Maps GBP Boost", "AI Overviews (GEO) Setup", "Product Page Enhancements"],
    milestoneOutput: "Target keywords enter Google Page #1 with rising organic calls and orders",
  },
  {
    phaseNum: "05",
    timeframe: "Weeks 8 - 12+",
    title: "White-Hat Link Building & Market Domination",
    description:
      "We build high-DR contextual Arabic & English backlinks, monitor weekly GSC rankings, and scale winning pages to lock in Top-3 positions.",
    tasks: ["Contextual Guest Posts", "Weekly GSC Tracking", "CRO Rate Scaling", "Transparent ROI Reports"],
    milestoneOutput: "Sustained Top-3 rankings on Google.com.sa and compounding monthly revenue",
  },
];

const SAUDI_SEO_PACKAGES_SAR: SaudiSeoPackageSAR[] = [
  {
    id: "sar-en-growth",
    packageName: "Growth & Local SEO Plan",
    badgeText: "Ideal for Emerging Businesses, Clinics & Service Websites",
    priceSAR: "1,850",
    billingCycle: "SAR / Month (Flexible — No Lock-In Contracts)",
    idealFor: "Service companies, clinics, law firms, and local businesses in Riyadh, Jeddah, or Dammam",
    isPopular: false,
    keywordsCount: "Up to 20 High-Intent Commercial & Local Keywords",
    includedServices: [
      "Complete Technical SEO Audit & fixes in Google Search Console",
      "Mobile Core Web Vitals & PageSpeed optimization",
      "Full On-Page SEO optimization for up to 10 core service pages",
      "Google Business Profile (Google Maps) setup and local pack optimization",
      "6 expert human-written SEO articles or landing pages per month (Arabic or English)",
      "Safe White-Hat contextual backlinks to build foundational domain authority",
    ],
    technicalAndContentFeatures: [
      "Custom Meta Titles, Descriptions, Dynamic Canonicals & Schema.org JSON-LD",
      "Internal linking silo setup & WebP image compression",
    ],
    reportingAndSupport: "Detailed monthly Google Search Console report + Direct WhatsApp support",
    whatsappMsg: "Hello Unique Agency, I want to subscribe to the (Growth & Local SEO Plan in Saudi Arabia - 1,850 SAR/mo).",
  },
  {
    id: "sar-en-domination",
    packageName: "Market Domination & E-Commerce SEO Plan",
    badgeText: "Most Popular for Ambitious Companies & Salla / Zid / Shopify Stores",
    priceSAR: "3,200",
    billingCycle: "SAR / Month (Complete Revenue-Driven SEO Suite)",
    idealFor: "E-Commerce stores (Salla, Zid, Shopify), contracting & real estate firms, and multi-specialty clinics",
    isPopular: true,
    keywordsCount: "Up to 45 Competitive Commercial & Transactional Keywords in KSA",
    includedServices: [
      "Everything in Growth Plan + Deep Screaming Frog engineering audit & code fixes",
      "Full E-Commerce SEO (Categories, Filters, Product Schema in SAR, and 30+ products/pages optimized monthly)",
      "Topical Authority strategy with 12 in-depth commercial articles or landing pages per month",
      "Multi-city Local SEO targeting (Riyadh, Jeddah, Dammam, Khobar) & Google Maps domination",
      "High-DR White-Hat Link Building & Digital PR on authoritative Arabic & GCC portals",
      "Generative Engine Optimization (GEO) for Google AI Overviews & ChatGPT Search visibility",
    ],
    technicalAndContentFeatures: [
      "Conversion Rate Optimization (CRO) for checkout & WhatsApp lead funnels",
      "Monthly competitor movement tracking & new keyword opportunity capture",
    ],
    reportingAndSupport: "Bi-weekly & monthly verified GSC/GA4 reports + Dedicated Account Manager on WhatsApp",
    whatsappMsg: "Hello Unique Agency, I want to subscribe to the (Market Domination & E-Commerce SEO Plan - 3,200 SAR/mo).",
  },
  {
    id: "sar-en-enterprise",
    packageName: "Enterprise & National Authority Plan",
    badgeText: "For Mega E-Commerce Brands, Portals & Multi-Branch Enterprises",
    priceSAR: "5,500",
    billingCycle: "SAR / Month (Custom Full-Scale Market Leadership)",
    idealFor: "Large e-commerce catalogs, real estate/travel portals, and bilingual national enterprises",
    isPopular: false,
    keywordsCount: "Unlimited Keyword Clusters (80+ Priority Commercial Terms)",
    includedServices: [
      "Dedicated full-stack Technical SEO engineering for Next.js, WordPress, Shopify Plus, Salla & Zid",
      "Continuous optimization across hundreds of product, category, and regional city pages across KSA",
      "20+ pieces of authoritative bilingual (Arabic & English) commercial content per month",
      "High-authority Digital PR and editorial backlinks from premier regional and global publications",
      "Ongoing UI/UX speed optimization, custom schema graphs, and CRO split-testing",
      "International & multilingual SEO management (`ar-SA`, `en-SA`, and global markets)",
    ],
    technicalAndContentFeatures: [
      "Priority engineering & dev execution by our senior Next.js/WordPress/Shopify team",
      "Custom live ROI, revenue attribution, and ranking dashboard",
    ],
    reportingAndSupport: "Weekly strategy calls & live reporting + 24/7 VIP engineering & SEO support",
    whatsappMsg: "Hello Unique Agency, I would like to inquire about the (Enterprise & National Authority SEO Plan - 5,500 SAR/mo).",
  },
];

const SAUDI_SEO_FAQS: SaudiSeoFaq[] = [
  {
    id: "faq-en-1",
    category: "Timeline & ROI",
    question: "How long does it take to see measurable SEO results in Saudi Arabia?",
    answer:
      "Initial technical improvements—such as faster indexation, resolved canonical errors, and rising Google Search Console impressions—typically appear within the first 2 to 4 weeks. Significant Page #1 rankings and compounding growth in organic traffic, WhatsApp leads, and store orders are achieved within 60 to 90 days depending on your domain history and industry competition in KSA.",
  },
  {
    id: "faq-en-2",
    category: "E-Commerce SEO",
    question: "Can you scale organic sales for Salla, Zid, and Shopify stores without paid ads?",
    answer:
      "Yes! E-Commerce SEO in Saudi Arabia is one of our core specialties. We restructure your store categories, optimize product titles and descriptions for high-intent Arabic and English searches, implement SAR Product & Review Schema for rich snippets, and build commercial blog clusters that bring ready-to-buy shoppers directly to your store 24/7.",
  },
  {
    id: "faq-en-3",
    category: "Safety & Methodology",
    question: "How is Unique different from agencies promising '300 backlinks and 80 articles a month'?",
    answer:
      "Agencies offering hundreds of cheap links and mass-produced articles use automated spam tools and toxic link farms (Black-Hat SEO) that inevitably trigger Google Spam Updates and de-index your domain. At Unique Digital Agency, we combine real software engineering (Next.js, WordPress, Core Web Vitals 99/100) with persuasive human-crafted content and contextual White-Hat Digital PR links that build permanent, penalty-proof authority.",
  },
  {
    id: "faq-en-4",
    category: "Technical Implementation",
    question: "Do your developers implement the technical SEO fixes directly on our website?",
    answer:
      "Absolutely. Unlike traditional SEO agencies that hand you a complex PDF audit and tell you to find a developer, our in-house engineering team handles all code-level optimizations directly across Next.js, React, WordPress, Elementor, Shopify, Salla, and Zid.",
  },
  {
    id: "faq-en-5",
    category: "Bilingual SEO",
    question: "Do you optimize for both Arabic and English searches in Saudi Arabia?",
    answer:
      "Yes. The Saudi market features strong search demand in both Arabic (Saudi dialect and Modern Standard Arabic) and English—especially in Riyadh, Jeddah, Dammam, and NEOM. We implement proper `hreflang` architecture (`ar-SA` and `en-SA`) and native bilingual content so you dominate both audiences.",
  },
  {
    id: "faq-en-6",
    category: "Free SEO Audit",
    question: "How can I get a free SEO audit for my Saudi website or online store?",
    answer:
      "Simply click any WhatsApp button on this page to message our team directly at +201270506511 with your website URL. Within 24 hours, we will send you a comprehensive video/PDF audit revealing your technical bottlenecks, competitor keyword gaps, and a clear 90-day growth roadmap completely free.",
  },
];

// ============================================================================
// 5. JSON-LD STRUCTURED DATA SCHEMAS FOR GOOGLE SAUDI ARABIA (EN-SA)
// ============================================================================
const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://marketing-beta-gold-30.vercel.app/en/saudi-seo#agency",
    name: "Unique Digital Agency - SEO Company in Saudi Arabia",
    alternateName: "Unique SEO Agency Riyadh, Jeddah & Dammam",
    url: "https://marketing-beta-gold-30.vercel.app/en/saudi-seo",
    telephone: "+201270506511",
    description:
      "Leading SEO Company in Saudi Arabia specializing in Technical SEO, E-Commerce SEO (Salla, Zid, Shopify), Local SEO, and AI Search Optimization (GEO) across Riyadh, Jeddah, and Dammam.",
    areaServed: [
      { "@type": "City", name: "Riyadh" },
      { "@type": "City", name: "Jeddah" },
      { "@type": "City", name: "Dammam" },
      { "@type": "City", name: "Khobar" },
      { "@type": "City", name: "Makkah" },
      { "@type": "City", name: "Madinah" },
      { "@type": "Country", name: "Saudi Arabia" },
    ],
    priceRange: "SAR 1850 - SAR 5500",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+201270506511",
      contactType: "sales and SEO consultation",
      areaServed: "SA",
      availableLanguage: ["English", "Arabic"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Search Engine Optimization (SEO) Services in Saudi Arabia",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://marketing-beta-gold-30.vercel.app",
      telephone: "+201270506511",
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Saudi Arabia Monthly SEO Packages (SAR)",
      itemListElement: SAUDI_SEO_PACKAGES_SAR.map((pkg) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: pkg.packageName,
          description: pkg.idealFor,
        },
        priceCurrency: "SAR",
        price: pkg.priceSAR.replace(/,/g, ""),
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SAUDI_SEO_FAQS.map((faq) => ({
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
        name: "SEO Company in Saudi Arabia",
        item: "https://marketing-beta-gold-30.vercel.app/en/saudi-seo",
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
        className={`inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold tracking-wide text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.15)] ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <Sparkles className="h-3.5 w-3.5 text-amber-400" />
        <span>{badge}</span>
      </div>
      <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}{" "}
        {highlightedWord && (
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
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
// 7. MAIN PAGE COMPONENT (ENGLISH SAUDI ARABIA SEO AGENCY PAGE)
// ============================================================================
export default function SaudiSeoEnglishPage() {
  const mainWhatsAppLink = getWhatsAppUrl(
    "Hello Unique Agency, I would like to request a Free SEO Audit and consultation for my website/store in Saudi Arabia."
  );

  return (
    <main
      dir="ltr"
      lang="en"
      className="relative min-h-screen bg-[#000000] text-left text-white selection:bg-blue-600 selection:text-white overflow-x-hidden"
    >
      {/* Structured Data JSON-LD for Google.com.sa Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />

      {/* Ambient Background Glow Effects (Emerald, Cyan, Blue, Gold - Strictly No Red) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-emerald-600/12 blur-[150px]" />
        <div className="absolute top-1/3 -right-48 h-[460px] w-[460px] rounded-full bg-blue-600/12 blur-[150px]" />
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
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 font-black text-black shadow-lg shadow-emerald-500/25">
              U
            </span>
            <div>
              <p className="text-xs font-bold text-emerald-400">UNIQUE SEO AGENCY KSA</p>
              <p className="text-[11px] text-slate-400">
                #1 SEO Company in Saudi Arabia (Riyadh • Jeddah • Dammam)
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-5 text-xs font-bold text-slate-300 lg:flex">
            <a href="#seo-services-ksa" className="transition-colors hover:text-emerald-400">
              SEO Services
            </a>
            <a href="#ecommerce-seo-ksa" className="transition-colors hover:text-emerald-400">
              Salla, Zid & Shopify SEO
            </a>
            <a href="#gsc-results" className="transition-colors hover:text-emerald-400">
              GSC Case Studies
            </a>
            <a href="#ai-geo-seo" className="transition-colors hover:text-cyan-400">
              AI Search (GEO)
            </a>
            <a href="#saudi-cities" className="transition-colors hover:text-emerald-400">
              Saudi Cities
            </a>
            <a href="#pricing-sar" className="transition-colors hover:text-amber-400">
              Pricing (SAR)
            </a>
            <a href="#faq-ksa" className="transition-colors hover:text-emerald-400">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/saudi-seo"
              className="hidden rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-slate-200 transition-colors hover:bg-white/10 sm:inline-block"
            >
              العربية
            </Link>
            <a
              href={mainWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-2 text-xs font-black text-black shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Free Audit:</span>
              <span className="font-mono">{WHATSAPP_NUMBER_DISPLAY}</span>
            </a>
          </div>
        </div>
      </nav>

      {/* =====================================================================
          SECTION 2: CREATIVE HERO SECTION WITH LIVE GSC & SERP #1 SIMULATOR
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
            <Link href="/" className="transition-colors hover:text-emerald-400">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
            <span className="text-slate-300">Saudi Arabia Services</span>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
            <span className="font-bold text-emerald-400">
              SEO Company in Saudi Arabia
            </span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Primary Commercial SEO Pitch */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-300">
                <Award className="h-4 w-4 text-amber-400" />
                <span>
                  #1 Revenue-Focused SEO Partner in Riyadh, Jeddah, Dammam & Across KSA
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-black leading-[1.18] tracking-tight text-white sm:text-5xl lg:text-6xl">
                SEO Company in Saudi Arabia{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
                  That Ranks You #1 & Multiplies Revenue
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
                In Saudi Arabia&apos;s booming Vision 2030 digital economy, ranking on
                Page #1 of Google when high-intent buyers search for your services
                or products is the ultimate competitive moat. At{" "}
                <strong className="font-bold text-white">UNIQUE Digital Agency</strong>,
                we combine{" "}
                <strong className="text-emerald-300">
                  deep software engineering, bilingual Arabic/English buyer copy, and
                  safe White-Hat authority links
                </strong>{" "}
                to turn your website or{" "}
                <strong className="text-cyan-300">
                  Salla, Zid, Shopify, WordPress, or Next.js
                </strong>{" "}
                platform into a 24/7 organic sales engine.
              </p>

              {/* 4 Trust Badges Grid */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm font-medium text-slate-200">
                    Verified Growth in Google Search Console (GSC)
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-sm font-medium text-slate-200">
                    Deep Expertise in Salla, Zid & Shopify E-Commerce SEO
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-sm font-medium text-slate-200">
                    In-House Engineers Implement Technical SEO Directly
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-400" />
                  <span className="text-sm font-medium text-slate-200">
                    100% Safe White-Hat SEO + AI Search (GEO) Optimization
                  </span>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={mainWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-8 py-4 text-base font-black text-black shadow-[0_0_35px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Claim Your Free Saudi SEO Audit</span>
                  <ArrowUpRight className="h-5 w-5" />
                </a>
                <a
                  href="#gsc-results"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-slate-200 backdrop-blur-md transition-all hover:border-emerald-400/50 hover:bg-white/10 hover:text-white"
                >
                  <TrendingUp className="h-5 w-5 text-emerald-400" />
                  <span>View Verified GSC Results</span>
                </a>
              </div>
            </div>

            {/* Right Column: Creative Live Google Search Console & SERP #1 Simulator */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-emerald-500/35 bg-gradient-to-b from-[#07191e]/95 to-[#040811]/95 p-6 shadow-[0_0_65px_rgba(16,185,129,0.2)] backdrop-blur-2xl sm:p-7">
                {/* Top Header of GSC Simulator */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-cyan-400" />
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1 text-[11px] font-mono text-emerald-300 border border-emerald-500/25">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Google Search Console • KSA Property</span>
                  </div>
                </div>

                {/* 4 GSC Metric Boxes */}
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-2xl border border-blue-500/30 bg-blue-600/15 p-3">
                    <p className="text-[10px] text-blue-200">Total Clicks</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      42.8K
                    </p>
                    <span className="text-[10px] font-bold text-emerald-400">
                      +340% Growth
                    </span>
                  </div>
                  <div className="rounded-2xl border border-cyan-500/30 bg-cyan-600/15 p-3">
                    <p className="text-[10px] text-cyan-200">Impressions</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      510K
                    </p>
                    <span className="text-[10px] font-bold text-emerald-400">
                      +415% Growth
                    </span>
                  </div>
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-600/15 p-3">
                    <p className="text-[10px] text-emerald-200">Average CTR</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      8.4%
                    </p>
                    <span className="text-[10px] font-bold text-emerald-400">
                      Top Benchmark
                    </span>
                  </div>
                  <div className="rounded-2xl border border-amber-500/30 bg-amber-500/15 p-3">
                    <p className="text-[10px] text-amber-200">Avg. Position</p>
                    <p className="mt-1 font-mono text-lg font-black text-amber-300">
                      #1.4
                    </p>
                    <span className="text-[10px] font-bold text-amber-300">
                      Page #1 KSA
                    </span>
                  </div>
                </div>

                {/* Visual SVG Growth Curve Inside Card */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/60 p-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-slate-300">
                      90-Day Organic Traffic Trajectory
                    </span>
                    <span className="font-mono text-[11px] text-emerald-400">
                      Google.com.sa Organic
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 400 100"
                    className="h-24 w-full overflow-visible"
                    aria-label="Organic Traffic Growth Chart"
                  >
                    <defs>
                      <linearGradient id="gscGradEn" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 90 Q 80 85, 140 68 T 260 35 T 400 8 L 400 100 L 0 100 Z"
                      fill="url(#gscGradEn)"
                    />
                    <path
                      d="M 0 90 Q 80 85, 140 68 T 260 35 T 400 8"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <circle cx="140" cy="68" r="4" fill="#38bdf8" />
                    <circle cx="260" cy="35" r="4" fill="#38bdf8" />
                    <circle cx="395" cy="9" r="5.5" fill="#fbbf24" />
                  </svg>
                </div>

                {/* Simulated #1 Google Saudi Search Result Preview */}
                <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-[#07111e] p-4">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-bold text-emerald-400">
                      🏆 Ranked #1 on Google Saudi Arabia
                    </span>
                    <span className="rounded bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                      Rich Schema Active
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-cyan-300">
                    Your Brand #1 on Google.com.sa | Riyadh, Jeddah & KSA
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-amber-400">
                    <span>★★★★★</span>
                    <span className="text-[11px] text-slate-300">
                      4.9 Rating (480+ Verified Reviews) • In Stock • SAR Pricing
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
          SECTION 3: 7 CORE SEO SERVICES IN SAUDI ARABIA
      ===================================================================== */}
      <section
        id="seo-services-ksa"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Full-Stack Search Engine Optimization in Saudi Arabia"
            title="Comprehensive SEO Services Engineered for"
            highlightedWord="Saudi Enterprises & Online Stores"
            subtitle="We execute all 7 pillars of modern SEO under one roof: from code-level Technical SEO and Core Web Vitals speed to Salla/Zid/Shopify store optimization, bilingual content clusters, Local SEO, and safe White-Hat Digital PR."
          />

          <div className="space-y-10">
            {CORE_SEO_SERVICES_KSA.map((srv) => (
              <article
                key={srv.id}
                className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#081224] to-[#03060d] p-6 shadow-2xl sm:p-10"
              >
                <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-6 lg:flex-row lg:items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-300">
                      <span>Pillar {srv.number}</span>
                      <span>•</span>
                      <span>{srv.badge}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                      {srv.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-cyan-400">
                      {srv.arabicSubtitle}
                    </p>
                  </div>

                  <a
                    href={getWhatsAppUrl(srv.whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3.5 text-xs font-black text-black shadow-lg transition-transform hover:scale-[1.02] lg:self-auto"
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
                        Direct Business Impact in KSA:
                      </p>
                      <p className="text-xs leading-relaxed text-slate-300">
                        {srv.businessImpactInKSA}
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
          SECTION 4: SAUDI E-COMMERCE SEO (SALLA, ZID, SHOPIFY)
      ===================================================================== */}
      <section
        id="ecommerce-seo-ksa"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Specialized Organic Growth for Saudi Online Stores"
            title="E-Commerce SEO in Saudi Arabia:"
            highlightedWord="Salla, Zid, Shopify & WooCommerce"
            subtitle="If your online store relies 100% on paid ads, you are renting traffic every day. We build permanent organic assets that rank your categories and products #1 on Google Saudi Arabia and generate daily non-ad orders."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {ECOMMERCE_SEO_PLATFORMS_KSA.map((plat) => (
              <div
                key={plat.id}
                className="flex flex-col justify-between rounded-3xl border border-white/15 bg-gradient-to-b from-[#091528] to-[#040812] p-7 shadow-xl"
              >
                <div>
                  <span className="inline-block rounded-full bg-emerald-500/15 px-3.5 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30">
                    {plat.marketShareTag}
                  </span>
                  <h3 className="mt-4 text-2xl font-black text-white">
                    {plat.platformName}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-cyan-300">
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
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 py-3.5 text-xs font-black text-black transition-transform hover:scale-[1.01]"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>Scale Your Store with SEO</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: DOCUMENTED GOOGLE SEARCH CONSOLE (GSC) RESULTS IN KSA
      ===================================================================== */}
      <section
        id="gsc-results"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Verified Performance — No Empty Promises"
            title="Real Google Search Console Results for"
            highlightedWord="Our Clients Across Saudi Arabia"
            subtitle="See how businesses and online stores in Riyadh, Jeddah, and Dammam scaled from modest monthly traffic to tens of thousands of high-intent organic buyers."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {GSC_DOCUMENTED_RESULTS.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-[#071922] to-[#030710] p-7 shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="rounded-lg bg-emerald-500/15 px-3 py-1 font-bold text-emerald-300">
                      {item.sector}
                    </span>
                    <span className="font-mono text-slate-400">{item.city}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-black text-white">
                    {item.projectTitle}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-cyan-400">
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
                      Sample Keywords Ranked #1:
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
          SECTION 6: AI SEARCH & GENERATIVE ENGINE OPTIMIZATION (GEO) IN KSA
      ===================================================================== */}
      <section
        id="ai-geo-seo"
        className="relative z-10 border-b border-white/10 bg-[#03060f] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-cyan-500/35 bg-gradient-to-r from-blue-950/60 via-[#061226] to-emerald-950/40 p-8 sm:p-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-4 py-1 text-xs font-bold text-cyan-300 border border-cyan-500/30">
                  <Cpu className="h-4 w-4" />
                  <span>Next-Gen AI Search Optimization (GEO) in Saudi Arabia</span>
                </div>
                <h2 className="mt-4 text-2xl font-black text-white sm:text-4xl">
                  Rank #1 in Both Traditional Google Search &{" "}
                  <span className="text-cyan-300">
                    Google AI Overviews & ChatGPT
                  </span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
                  Thousands of buyers and executives in Riyadh and Jeddah now ask
                  AI engines directly: &ldquo;What is the best company/store for
                  [service] in Saudi Arabia?&rdquo; While traditional agencies
                  remain stuck in outdated keyword stuffing,{" "}
                  <strong className="text-white">Unique Digital Agency</strong>{" "}
                  engineers your brand entities, structured JSON-LD graphs, and
                  authoritative citations through{" "}
                  <strong className="text-emerald-300">
                    Generative Engine Optimization (GEO)
                  </strong>{" "}
                  so AI models recommend your business first.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2.5 rounded-xl bg-black/50 p-3.5 border border-white/10">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span>Knowledge Graph & Brand Entity Recognition</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-black/50 p-3.5 border border-white/10">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400" />
                    <span>Direct-Answer Formatting for Google AI Overviews</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-black/50 p-3.5 border border-white/10">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400" />
                    <span>Verified Google E-E-A-T Authority Signals</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-black/50 p-3.5 border border-white/10">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                    <span>Interconnected Schema.org JSON-LD Architecture</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-black/75 p-6">
                <p className="text-xs font-bold text-amber-300 mb-3">
                  ROI Comparison: Unique White-Hat SEO vs. Paid Ads
                </p>
                <div className="space-y-3">
                  {SEO_VS_ADS_COMPARISON.slice(0, 3).map((row) => (
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
          SECTION 7: LOCAL SEO COVERAGE ACROSS SAUDI CITIES
      ===================================================================== */}
      <section
        id="saudi-cities"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Nationwide Geo-Targeted SEO Across the Kingdom"
            title="Local SEO Services in Riyadh, Jeddah,"
            highlightedWord="Dammam, Khobar & All Saudi Cities"
            subtitle="We tailor your local search strategy, Google Business Profile, and geo-targeted landing pages to capture high-intent customers in every major Saudi region."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {SAUDI_CITIES_ZONES.map((zone) => (
              <div
                key={zone.id}
                className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#091326] to-[#040812] p-7 sm:p-8"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      SEO Company in {zone.cityName}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400">
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
                      className="rounded bg-emerald-500/10 px-2.5 py-1 text-[11px] text-emerald-200 border border-emerald-500/20"
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
            highlightedWord="Google Page #1 in Saudi Arabia"
            subtitle="We execute a disciplined 5-phase engineering and content roadmap designed to deliver early technical wins and compounding long-term rankings."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {NINETY_DAY_ROADMAP.map((phase) => (
              <div
                key={phase.phaseNum}
                className="flex flex-col justify-between rounded-3xl border border-white/12 bg-[#070f20] p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 font-mono text-sm font-black text-black">
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
          SECTION 9: TRANSPARENT SEO PACKAGES IN SAUDI RIYALS (SAR)
      ===================================================================== */}
      <section
        id="pricing-sar"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Transparent Investment — High-ROI Monthly Plans"
            title="Saudi Arabia SEO Packages & Pricing"
            highlightedWord="in Saudi Riyals (SAR)"
            subtitle="Choose the plan aligned with your business goals and message our engineering & SEO team on WhatsApp to launch immediately."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {SAUDI_SEO_PACKAGES_SAR.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all ${
                  pkg.isPopular
                    ? "border-2 border-emerald-400 bg-gradient-to-b from-[#071f24] to-[#040914] shadow-[0_0_55px_rgba(16,185,129,0.22)] lg:-translate-y-3"
                    : "border border-white/15 bg-[#060c1a]"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-8 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-1 text-xs font-black text-black shadow-lg">
                    Most Popular for Saudi Stores & Enterprises
                  </div>
                )}

                <div>
                  <span className="text-xs font-bold text-emerald-400">
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
                      <span className="text-4xl font-black text-emerald-400">
                        {pkg.priceSAR}
                      </span>
                      <span className="text-sm font-bold text-amber-300">
                        SAR / Month
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] font-bold text-cyan-300">
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
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-lg shadow-emerald-500/25 hover:scale-[1.01]"
                      : "border border-white/20 bg-white/5 text-white hover:bg-emerald-500 hover:text-black"
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
          SECTION 10: SAUDI SEO FAQ ACCORDION SECTION
      ===================================================================== */}
      <section
        id="faq-ksa"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Clear Answers to Your Key Questions"
            title="Frequently Asked Questions About"
            highlightedWord="SEO Services in Saudi Arabia"
            subtitle="Everything you need to know before launching your search engine optimization campaign in Riyadh, Jeddah, Dammam, and across KSA."
          />

          <div className="space-y-4">
            {SAUDI_SEO_FAQS.map((faq, idx) => (
              <details
                key={faq.id}
                open={idx === 0}
                className="group rounded-2xl border border-white/12 bg-[#060c1a] p-6 transition-all open:border-emerald-500/40 open:bg-[#071522]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-emerald-500/15 px-2.5 py-1 text-xs font-bold text-emerald-300">
                      {faq.category}
                    </span>
                    <h3 className="text-base font-black text-white sm:text-lg group-open:text-emerald-300">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-emerald-400 transition-transform group-open:rotate-180">
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
          SECTION 11: FINAL FREE SEO AUDIT & WHATSAPP CTA BANNER
      ===================================================================== */}
      <section className="relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-[#071f29] via-[#05101e] to-[#02050b] p-8 shadow-[0_0_80px_rgba(16,185,129,0.2)] sm:p-12 lg:p-16 text-center">
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300">
                <Sparkles className="h-4 w-4" />
                <span>Claim Your 100% Free Technical & Keyword SEO Audit</span>
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Send Us Your Website or Store URL & Discover How to Rank #1 in Saudi Arabia
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                Whether you run an online store on{" "}
                <strong className="text-emerald-300">Salla, Zid, or Shopify</strong>,
                or a corporate website on{" "}
                <strong className="text-cyan-300">WordPress or Next.js</strong>;
                message our team on WhatsApp and receive a comprehensive audit of
                your technical bottlenecks and highest-ROI keyword opportunities.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={mainWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 text-base font-black text-black shadow-[0_0_35px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.03]"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Request Free Audit on WhatsApp:</span>
                  <span className="font-mono text-lg">
                    {WHATSAPP_NUMBER_DISPLAY}
                  </span>
                </a>

                <Link
                  href="/saudi-seo"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  <span>النسخة العربية (Arabic Version)</span>
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