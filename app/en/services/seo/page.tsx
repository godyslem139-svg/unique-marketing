import type { Metadata } from "next";
import Link from "next/link";

// ============================================================================
// BUILT-IN ZERO-DEPENDENCY SVG ICONS (NO EXTERNAL ICON PACKAGES)
// ============================================================================

interface IconProps {
  className?: string;
}

function Sparkles({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function TrendingUp({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function Globe({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ShieldCheck({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckCircle2({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function Check({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowUpRight({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function ArrowRight({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ChevronRight({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function Award({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function MessageSquare({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function PhoneCall({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// ============================================================================
// BRAND & WHATSAPP HELPERS
// ============================================================================

const WHATSAPP_PRIMARY = "01270506511";
const WHATSAPP_SECONDARY = "01202987700";
const WHATSAPP_INTERNATIONAL = "201270506511";

function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encodeURIComponent(message)}`;
}

// ============================================================================
// NEXT.JS METADATA — FLAGSHIP SEO SERVICE PILLAR PAGE (ENGLISH LTR)
// ============================================================================

export const metadata: Metadata = {
  title:
    "SEO & AI Search (GEO) Services | Rank #1 on Google & ChatGPT — UNIQUE",
  description:
    "Full-funnel Search Engine Optimization (SEO) & Generative Engine Optimization (GEO) for businesses and e-commerce stores across Egypt, Saudi Arabia, UAE & Kuwait. Technical SEO, Semantic Content, Local 3-Pack, White-Hat Backlinks & verified Search Console reporting starting at $250/month.",
  keywords: [
    "SEO Services",
    "Search Engine Optimization Agency",
    "Technical SEO & Core Web Vitals",
    "Generative Engine Optimization GEO",
    "AI Search Optimization ChatGPT",
    "E-Commerce SEO Salla Zid Shopify WooCommerce",
    "Local SEO Google Maps 3-Pack",
    "White-Hat Backlink Building",
    "Monthly SEO Packages USD",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/en/services/seo",
    languages: {
      ar: "https://www.uniquee-ws.com/services/seo",
      en: "https://www.uniquee-ws.com/en/services/seo",
      "x-default": "https://www.uniquee-ws.com/services/seo",
    },
  },
  openGraph: {
    title: "SEO & AI Search (GEO) Services — UNIQUE Digital Agency",
    description:
      "Turn Google Search and ChatGPT into a predictable revenue channel with engineered Technical SEO, Semantic Content, and verified Search Console growth.",
    url: "https://www.uniquee-ws.com/en/services/seo",
    siteName: "UNIQUE Digital Agency",
    locale: "en_US",
    type: "website",
  },
};

// ============================================================================
// TYPESCRIPT INTERFACES
// ============================================================================

interface HeroKpi {
  id: string;
  value: string;
  title: string;
  subtitle: string;
  accent: "emerald" | "cyan" | "blue" | "amber";
}

interface SeoPillar {
  id: string;
  number: string;
  badge: string;
  title: string;
  subLabel: string;
  summary: string;
  impact: string;
  tasks: string[];
  whatsappMsg: string;
}

interface PlatformSeoCard {
  name: string;
  tag: string;
  focus: string[];
}

interface RegionalHubLink {
  country: string;
  title: string;
  href: string;
  desc: string;
}

interface AuditTable {
  id: string;
  title: string;
  badge: string;
  items: string[];
}

interface RoadmapPhase {
  num: string;
  timeframe: string;
  title: string;
  desc: string;
  output: string;
}

interface SeoPackageUSD {
  id: string;
  name: string;
  badge: string;
  price: string;
  cycle: string;
  idealFor: string;
  isPopular?: boolean;
  keywords: string;
  features: string[];
  whatsappMsg: string;
}

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// DATA ARRAYS — FLAGSHIP SEO & GEO SERVICE (ENGLISH)
// ============================================================================

const HERO_KPIS: HeroKpi[] = [
  {
    id: "traffic",
    value: "+320%",
    title: "Avg. Commercial Traffic Growth",
    subtitle: "Verified organic click growth directly inside Google Search Console on buyer-intent keywords.",
    accent: "emerald",
  },
  {
    id: "geo",
    value: "SEO + GEO",
    title: "Rank on Google & ChatGPT",
    subtitle: "We unite classic Google SEO with AI Search optimization (AI Overviews, ChatGPT, Perplexity & WebMCP).",
    accent: "cyan",
  },
  {
    id: "markets",
    value: "4 Markets",
    title: "MENA & GCC Search Expertise",
    subtitle: "Bilingual Arabic & English SEO engineered for Egypt, Saudi Arabia, UAE, and Kuwait.",
    accent: "blue",
  },
  {
    id: "pricing",
    value: "From $250",
    title: "Flexible Month-to-Month Plans",
    subtitle: "Full-stack execution (Technical + Content + Safe Backlinks) with zero lock-in contracts.",
    accent: "amber",
  },
];

const SIX_SEO_PILLARS: SeoPillar[] = [
  {
    id: "technical-seo",
    number: "01",
    badge: "Engineering Foundation",
    title: "Technical SEO & Core Web Vitals",
    subLabel: "Crawlability • Indexing • Schema JSON-LD",
    summary:
      "A 120+ point technical audit that eliminates crawl traps, resolves Search Console indexing errors, and accelerates mobile performance so Google reads and ranks every revenue page cleanly.",
    impact: "Unlocks immediate indexation gains and gives existing pages a rapid ranking lift.",
    tasks: [
      "Fix 404 errors, redirect chains, orphan pages, and canonical conflicts",
      "Optimize Core Web Vitals (LCP < 1.2s, INP, CLS) across mobile devices",
      "Deploy rich JSON-LD Schema (Organization, Service, Product, FAQPage)",
      "Configure XML Sitemaps, Robots.txt, and multilingual Hreflang tags",
    ],
    whatsappMsg: "Hello UNIQUE, I would like a comprehensive Technical SEO Audit for my website.",
  },
  {
    id: "onpage-semantic",
    number: "02",
    badge: "Content & Topical Authority",
    title: "On-Page & Semantic SEO Architecture",
    subLabel: "Topical Maps • Money Pages • E-E-A-T",
    summary:
      "We build complete Topical Maps, high-converting commercial service pages, and semantically linked articles aligned with real search intent and Google's E-E-A-T guidelines.",
    impact: "Positions your brand as the category authority and multiplies organic lead conversion rates.",
    tasks: [
      "Commercial keyword research & competitor content gap extraction",
      "High-CTR Meta Titles, Descriptions, and clean H1–H3 hierarchies",
      "Strategic Internal Linking Silos that channel authority to money pages",
      "Content refresh cycles to defend and reclaim Top-3 positions",
    ],
    whatsappMsg: "Hello UNIQUE, I want a Semantic SEO and content strategy for my website.",
  },
  {
    id: "local-seo",
    number: "03",
    badge: "Google Maps & Calls",
    title: "Local SEO & Google Maps 3-Pack",
    subLabel: "Google Business Profile • City Landing Pages",
    summary:
      "Hyper-targeted local visibility to rank in the Google Maps Local 3-Pack across Cairo, Alexandria, Riyadh, Jeddah, Dubai, and Kuwait—driving direct phone calls and branch visits.",
    impact: "The fastest organic channel for generating high-intent calls for clinics, offices, and local services.",
    tasks: [
      "Full Google Business Profile optimization (categories, services, geotagged media)",
      "Dedicated city & neighborhood landing pages with LocalBusiness GeoCoordinates",
      "Consistent NAP citations across trusted directories & review growth systems",
      "Monthly tracking of Maps calls, direction requests, and website clicks",
    ],
    whatsappMsg: "Hello UNIQUE, I want to rank my business in the Google Maps Local 3-Pack.",
  },
  {
    id: "ecommerce-seo",
    number: "04",
    badge: "Organic Store Revenue",
    title: "E-Commerce SEO for Online Stores",
    subLabel: "Salla • Zid • Shopify • WooCommerce",
    summary:
      "Reduce dependency on rising ad costs by turning your category and product pages into a daily organic order engine targeting high-intent transactional queries.",
    impact: "Lowers Customer Acquisition Cost (CAC) and compounds store revenue year-round.",
    tasks: [
      "Category Hub optimization and unique, conversion-driven product copy",
      "Faceted navigation & filter canonical cleanup to stop crawl budget waste",
      "Product, Offer, Price & Rating Schema for rich Google Shopping snippets",
      "End-to-end organic revenue attribution via Google Analytics GA4",
    ],
    whatsappMsg: "Hello UNIQUE, I run an online store and want an E-Commerce SEO plan to grow organic sales.",
  },
  {
    id: "offpage-backlinks",
    number: "05",
    badge: "Domain Authority",
    title: "White-Hat Off-Page SEO & Backlinks",
    subLabel: "Digital PR • Manual Link Building • Link Gap",
    summary:
      "Natural, manually built backlink profiles across authoritative Arabic and international platforms with safe anchor text distribution to grow Domain Rating (DR/DA) and outrank entrenched competitors.",
    impact: "Strengthens domain authority and pushes competitive keywords from Page 2 into Positions 1–3.",
    tasks: [
      "Toxic backlink audit & disavow protection to safeguard domain health",
      "Competitor Link Gap analysis across top-ranking industry domains",
      "Manual guest posts & diversified placements across 20 trusted platform types",
      "Transparent monthly live-link report with domain metrics",
    ],
    whatsappMsg: "Hello UNIQUE, I want to strengthen my domain authority with safe White-Hat backlinks.",
  },
  {
    id: "ai-search-geo",
    number: "06",
    badge: "Future of Search 2026",
    title: "AI Search Optimization (GEO & WebMCP)",
    subLabel: "ChatGPT • Perplexity • Google AI Overviews",
    summary:
      "Prepare your brand and website to be the verified, cited recommendation whenever buyers ask ChatGPT, Perplexity, or Google AI Overviews for the best provider in your industry.",
    impact: "Gives you an early-mover advantage over competitors stuck in legacy SEO playbooks.",
    tasks: [
      "Entity SEO & connected Organization/Service Schema Knowledge Graph signals",
      "Dynamic llms.txt deployment & Chrome WebMCP browser-agent readiness",
      "Structured answers, comparison tables, and factual summaries built for AI citation",
      "Authoritative brand mentions across trusted industry publications",
    ],
    whatsappMsg: "Hello UNIQUE, I want to optimize my website for Google AI Overviews, ChatGPT, and GEO.",
  },
];

const SUPPORTED_PLATFORMS: PlatformSeoCard[] = [
  {
    name: "Next.js & React",
    tag: "Peak Performance",
    focus: ["SSR / ISR & Dynamic Metadata", "Automated JSON-LD & XML Sitemaps", "llms.txt & WebMCP Ready"],
  },
  {
    name: "WordPress & WooCommerce",
    tag: "Most Popular",
    focus: ["Plugin bloat cleanup & LCP speed", "Category silos & Product Schema", "Filter duplication & crawl fixes"],
  },
  {
    name: "Salla & Zid",
    tag: "Saudi & GCC Stores",
    focus: ["Collection & product SEO architecture", "Blog activation & internal linking", "GCC commercial keyword targeting"],
  },
  {
    name: "Shopify & EasyOrder",
    tag: "Fast Commerce",
    focus: ["Collection canonical & URL cleanup", "Theme Core Web Vitals optimization", "Organic sales alongside paid ads"],
  },
];

const REGIONAL_HUBS: RegionalHubLink[] = [
  {
    country: "Egypt",
    title: "SEO Company in Egypt",
    href: "/en/egypt-seo",
    desc: "Cairo, New Cairo, Sheikh Zayed & Alexandria — EGP monthly SEO packages.",
  },
  {
    country: "Saudi Arabia",
    title: "SEO Company in Saudi Arabia",
    href: "/en/saudi-seo",
    desc: "Nationwide rankings & Salla/Zid e-commerce SEO across the Kingdom.",
  },
  {
    country: "Riyadh",
    title: "SEO Company in Riyadh",
    href: "/en/riyadh-seo",
    desc: "Riyadh district targeting & Google Maps Local 3-Pack with SAR plans.",
  },
  {
    country: "UAE",
    title: "SEO Company in UAE",
    href: "/en/uae-seo",
    desc: "High-ROI corporate & e-commerce SEO for Dubai, Abu Dhabi & Sharjah.",
  },
];

const UNIQUE_4_AUDIT_TABLES: AuditTable[] = [
  {
    id: "t-audit",
    title: "1. Comprehensive SEO Audit",
    badge: "120+ Checks",
    items: [
      "Crawlability & indexation diagnostics inside Google Search Console",
      "Competitor reverse-engineering for highest-ROI commercial keywords",
      "Mobile Core Web Vitals & UX bottleneck profiling",
      "Backlink profile audit & toxic link risk assessment",
    ],
  },
  {
    id: "t-onpage",
    title: "2. On-Page & Content Engineering",
    badge: "On-Page & E-E-A-T",
    items: [
      "CTR-focused Meta Titles & Descriptions for every money page",
      "Commercial service pages & semantically interlinked Topical Clusters",
      "Custom JSON-LD Schema tailored per page template",
      "WebP image compression & descriptive keyword-aligned Alt attributes",
    ],
  },
  {
    id: "t-offpage",
    title: "3. Authority, Local & AI Search",
    badge: "Off-Page & GEO",
    items: [
      "Manual White-Hat backlinks across vetted high-authority platforms",
      "Google Business Profile & Local 3-Pack dominance",
      "Dynamic llms.txt & entity signals for ChatGPT & Google AI Overviews",
      "Ongoing Domain Rating & external brand mention tracking",
    ],
  },
  {
    id: "t-report",
    title: "4. Transparent Reporting & ROI",
    badge: "GSC + GA4",
    items: [
      "Monthly Google Search Console report (clicks, impressions, CTR)",
      "Weekly commercial keyword position tracking",
      "Conversion attribution (WhatsApp leads, phone calls, store orders)",
      "Data-driven sprint roadmap for every upcoming month",
    ],
  },
];

const ROADMAP_90_DAYS: RoadmapPhase[] = [
  {
    num: "01",
    timeframe: "Days 1 – 30",
    title: "Technical Diagnostics & Keyword Architecture",
    desc: "We resolve every technical blocker, configure Search Console & GA4, deploy JSON-LD Schema, and optimize your primary revenue pages.",
    output: "Technically sound site + rapid indexation & impression lift",
  },
  {
    num: "02",
    timeframe: "Days 31 – 60",
    title: "Semantic Content, Maps & Authority Building",
    desc: "We publish high-intent commercial pages and topical clusters, optimize Google Maps, and launch safe White-Hat backlink outreach.",
    output: "Buyer keywords entering Page 1 + measurable click growth",
  },
  {
    num: "03",
    timeframe: "Days 61 – 90",
    title: "Top-3 Consolidation & Conversion Scaling",
    desc: "We push positions 4–10 into the Top 3, optimize landing page conversion rates (CRO), and expand AI Search (GEO) brand citations.",
    output: "Predictable daily organic leads at a lower acquisition cost",
  },
];

const SEO_PACKAGES_USD: SeoPackageUSD[] = [
  {
    id: "seo-starter",
    name: "Starter & Local SEO",
    badge: "Startups & Clinics",
    price: "250",
    cycle: "USD / month",
    idealFor: "Ideal for corporate sites, clinics, and local offices aiming to dominate city searches & Google Maps.",
    keywords: "Up to 20 Commercial Keywords",
    features: [
      "Full Technical SEO Audit & Search Console error fixes",
      "Google Business Profile optimization & Local 3-Pack signals",
      "Optimization of 5 core service pages + JSON-LD Schema",
      "4 SEO-engineered articles published per month",
      "Safe backlinks & local citations + monthly GSC report",
    ],
    whatsappMsg: "Hello UNIQUE, I would like to start or inquire about the Starter & Local SEO package ($250/month).",
  },
  {
    id: "seo-growth",
    name: "Growth SEO for Brands & Stores",
    badge: "Most Popular",
    price: "450",
    cycle: "USD / month",
    idealFor: "Built for e-commerce stores (Salla, Zid, Shopify, WooCommerce) and competitive service brands.",
    isPopular: true,
    keywords: "Up to 50 Commercial Keywords",
    features: [
      "Advanced Technical SEO, Core Web Vitals & full Schema suite",
      "Ongoing category & money-page optimization for higher conversions",
      "8 commercial landing pages & topical articles per month",
      "Dedicated monthly White-Hat backlink campaign",
      "Full AI Search optimization (GEO, llms.txt & AI Overviews)",
      "Detailed GSC + GA4 reporting & monthly strategy review call",
    ],
    whatsappMsg: "Hello UNIQUE, I want to book the Growth SEO package ($450/month) for my website.",
  },
  {
    id: "seo-enterprise",
    name: "Enterprise & Regional Dominance",
    badge: "Multi-Market & Bilingual",
    price: "850",
    cycle: "USD / month",
    idealFor: "For real estate developers, exporters, and large stores targeting multiple countries in Arabic & English.",
    keywords: "100+ Keywords (AR & EN)",
    features: [
      "Bilingual Arabic & English SEO strategy across Egypt & GCC",
      "16 specialized pages & articles monthly for complete topical authority",
      "Digital PR, high-authority backlink outreach & CRO testing",
      "Full GEO, dynamic llms.txt & Chrome WebMCP AI readiness",
      "Direct developer collaboration & live Looker Studio KPI dashboard",
    ],
    whatsappMsg: "Hello UNIQUE, I would like to discuss the Enterprise SEO package ($850/month).",
  },
];

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Timeline & Results",
    question: "How soon will I see measurable results from SEO?",
    answer:
      "Initial gains in crawl health, indexation, impressions, and keyword movement typically appear within the first 30 to 60 days after technical fixes. Strong, compounding commercial growth in leads and sales generally builds between months 3 and 6 depending on industry competition.",
  },
  {
    id: "faq-2",
    category: "Free Audit",
    question: "Do you provide a free SEO audit before I commit?",
    answer:
      "Yes. Send your website URL on WhatsApp and within 24 hours we will share a practical diagnostic highlighting critical technical errors, commercial keyword opportunities vs. competitors, and the right package for your budget.",
  },
  {
    id: "faq-3",
    category: "Contracts & Flexibility",
    question: "Are SEO plans flexible month-to-month or locked into annual contracts?",
    answer:
      "All our plans are flexible month-to-month with zero lock-in contracts. We recommend a 3-to-6-month horizon to capture compounding ROI, and you verify every gain yourself each month directly in Google Search Console.",
  },
  {
    id: "faq-4",
    category: "AI Search (GEO)",
    question: "What is the difference between traditional SEO and GEO?",
    answer:
      "Traditional SEO focuses on ranking your web pages in Google's search results, while GEO (Generative Engine Optimization) structures your brand entity, JSON-LD Schema, and llms.txt so ChatGPT, Perplexity, and Google AI Overviews cite and recommend your business directly.",
  },
  {
    id: "faq-5",
    category: "Content & Backlinks",
    question: "Do monthly SEO packages include content writing and backlink building?",
    answer:
      "Yes. Every monthly package includes technical fixes, on-page optimization, SEO content creation, and safe White-Hat backlink building. You can also order our standalone Backlink Packages separately to accelerate domain authority.",
  },
];

const SEMANTIC_KEYWORDS: string[] = [
  "Search Engine Optimization (SEO) Services",
  "SEO Agency in Egypt, Saudi Arabia & UAE",
  "Technical SEO & Core Web Vitals",
  "Generative Engine Optimization (GEO)",
  "Rank on Google & ChatGPT AI Overviews",
  "E-Commerce SEO for Salla, Zid & Shopify",
  "Local SEO & Google Maps 3-Pack",
  "White-Hat Backlink Building",
  "Free Technical SEO Audit",
  "Organic Lead & Sales Growth",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD — Service + OfferCatalog USD + FAQPage + Breadcrumb)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO & AI Search (GEO) Services — UNIQUE Digital Agency",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://www.uniquee-ws.com",
      telephone: "+201270506511",
    },
    serviceType: "Search Engine Optimization (SEO) & Generative Engine Optimization (GEO)",
    areaServed: ["EG", "SA", "AE", "KW"],
    url: "https://www.uniquee-ws.com/en/services/seo",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Monthly SEO Packages (USD)",
      itemListElement: SEO_PACKAGES_USD.map((pkg) => ({
        "@type": "Offer",
        name: pkg.name,
        price: pkg.price,
        priceCurrency: "USD",
        description: pkg.idealFor,
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
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
        item: "https://www.uniquee-ws.com/en",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "SEO Services",
        item: "https://www.uniquee-ws.com/en/services/seo",
      },
    ],
  },
];

// ============================================================================
// REUSABLE SECTION HEADER COMPONENT (LTR)
// ============================================================================

function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
}: {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
}) {
  return (
    <div className="mb-12 md:mb-16 text-center max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-bold mb-5">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>{badge}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.2] mb-5">
        {title}{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT — FLAGSHIP SEO SERVICE PAGE (ENGLISH LTR)
// ============================================================================

export default function SeoServiceEnPage() {
  const heroAuditWhatsapp = getWhatsAppUrl(
    "Hello UNIQUE Digital Agency! I would like a free Technical SEO Audit and a customized SEO plan for my website."
  );

  return (
    <div
      dir="ltr"
      lang="en"
      className="min-h-screen bg-[#000000] text-white selection:bg-blue-500/30 selection:text-cyan-200 font-sans antialiased"
    >
      {/* Structured Data (JSON-LD — Service + OfferCatalog + FAQPage + Breadcrumb) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />

      {/* ====================================================================
          1. STICKY NAVIGATION BAR
      ==================================================================== */}
      <header className="sticky top-0 z-50 border-b border-neutral-900/90 bg-[#000000]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <Link href="/en" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-500 p-[1px] shadow-lg shadow-blue-500/20">
              <div className="w-full h-full rounded-[11px] bg-[#000000] flex items-center justify-center">
                <span className="font-black text-lg bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  U
                </span>
              </div>
            </div>
            <div>
              <div className="font-black text-base tracking-tight text-white group-hover:text-cyan-300 transition">
                UNIQUE <span className="text-blue-400">SEO</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">
                Search Engine &amp; AI Optimization
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#pillars" className="hover:text-cyan-300 transition">
              SEO Pillars
            </a>
            <a href="#platforms" className="hover:text-cyan-300 transition">
              Platforms
            </a>
            <a href="#markets" className="hover:text-cyan-300 transition">
              Markets
            </a>
            <a href="#audit" className="hover:text-cyan-300 transition">
              Methodology
            </a>
            <a href="#packages" className="hover:text-cyan-300 transition">
              Packages
            </a>
            <a href="#faq" className="hover:text-cyan-300 transition">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/services/seo"
              className="px-3.5 py-2 rounded-xl border border-neutral-800 bg-neutral-950 hover:border-cyan-500/50 text-xs font-bold text-neutral-200 hover:text-cyan-300 transition"
            >
              العربية
            </Link>
            <a
              href={heroAuditWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Free SEO Audit</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION + LIVE GSC & AI CITATION TELEMETRY
      ==================================================================== */}
      <section className="relative overflow-hidden pt-14 pb-20 lg:pt-24 lg:pb-28 border-b border-neutral-900">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/4 w-[540px] h-[540px] rounded-full bg-blue-600/12 blur-[150px]" />
          <div className="absolute top-20 right-1/4 w-[460px] h-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[560px] h-[300px] rounded-full bg-emerald-500/8 blur-[130px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link href="/en" className="hover:text-cyan-300 transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-cyan-300 font-semibold">SEO &amp; AI Search Services</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>Egypt • Saudi Arabia • UAE • Kuwait</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">Google SEO + AI Search (GEO)</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.14] mb-6">
                Engineered{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  SEO Services
                </span>{" "}
                Built for Predictable Leads from Google &amp; AI Search
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                At <strong className="text-white">UNIQUE Digital Agency</strong>, we position your
                brand on Page 1 of Google, Google Maps Local 3-Pack, and{" "}
                <strong className="text-cyan-300">ChatGPT &amp; Google AI Overviews</strong> — through
                full-stack Technical SEO, Semantic Content, and White-Hat authority backed by Search Console data.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "120+ point Technical Audit & Search Console fixes",
                  "E-E-A-T commercial content & Semantic Topical Maps",
                  "Google Maps 3-Pack + Salla, Zid & Shopify SEO",
                  "Full AI Search readiness (GEO, llms.txt & WebMCP)",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-sm text-neutral-200 bg-neutral-950/90 border border-neutral-800/80 rounded-xl px-3.5 py-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={heroAuditWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Request Free SEO Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <span>View Monthly Packages</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  WhatsApp: <strong className="text-neutral-200">{WHATSAPP_PRIMARY}</strong> /{" "}
                  <strong className="text-cyan-300">{WHATSAPP_SECONDARY}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Transparent GSC Monthly Reports • Zero Lock-In Contracts
                </span>
              </div>
            </div>

            {/* Hero Visual: Live GSC + AI Search Telemetry */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-cyan-300">
                      Organic Performance — Search &amp; AI Console
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    +320% Verified
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Organic Clicks</div>
                    <div className="text-xl font-black text-blue-400">54.2K</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">↑ 315% Growth</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Impressions</div>
                    <div className="text-xl font-black text-cyan-300">1.68M</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">↑ MENA &amp; GCC</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Avg. Position</div>
                    <div className="text-xl font-black text-amber-300">#1.9</div>
                    <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">Buyer Terms</div>
                  </div>
                </div>

                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      Compounding Commercial Traffic
                    </span>
                    <span className="text-[11px] text-neutral-500">GSC Verified</span>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-24 pt-2">
                    {[14, 21, 31, 44, 57, 72, 87, 100].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <div
                          style={{ height: `${h}%` }}
                          className={`w-full rounded-t-md ${
                            i >= 6
                              ? "bg-gradient-to-t from-blue-600 via-cyan-400 to-emerald-400"
                              : "bg-gradient-to-t from-blue-950 to-blue-500/80"
                          }`}
                        />
                        <span className="text-[10px] text-neutral-500">M{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-2">
                  <div className="text-xs font-bold text-white mb-2">
                    Visibility Channels Covered by UNIQUE:
                  </div>
                  {[
                    { ch: "Google Page 1 Organic Results (SERP)", status: "Active ✓" },
                    { ch: "Google Maps Local Pack (Local 3-Pack)", status: "Active ✓" },
                    { ch: "ChatGPT, Perplexity & AI Overviews (GEO)", status: "Active ✓" },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-blue-500/8 border border-blue-500/20 text-xs"
                    >
                      <span className="text-neutral-200 font-medium">{row.ch}</span>
                      <span className="text-emerald-400 font-bold">{row.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HERO_KPIS.map((kpi) => {
              const accentMap = {
                emerald: "border-emerald-500/30 text-emerald-400",
                cyan: "border-cyan-500/30 text-cyan-300",
                blue: "border-blue-500/30 text-blue-400",
                amber: "border-amber-500/30 text-amber-300",
              };
              const cls = accentMap[kpi.accent];
              return (
                <div
                  key={kpi.id}
                  className={`rounded-2xl bg-[#070A12] border ${cls.split(" ")[0]} p-6 hover:bg-[#0B101D] transition`}
                >
                  <div className={`text-3xl sm:text-4xl font-black mb-2 ${cls.split(" ")[1]}`}>
                    {kpi.value}
                  </div>
                  <div className="text-base font-bold text-white mb-1">{kpi.title}</div>
                  <p className="text-xs text-neutral-400 leading-relaxed">{kpi.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. 6 CORE SEO & GEO PILLARS
      ==================================================================== */}
      <section id="pillars" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="360° Search Growth Engine"
            title="6 Core Pillars Behind Our"
            highlight="SEO & AI Search Services"
            subtitle="We execute every lever that moves rankings and revenue—from clean code and Core Web Vitals to topical authority, safe backlinks, and AI citations."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {SIX_SEO_PILLARS.map((p) => (
              <div
                key={p.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800/90 hover:border-blue-500/40 p-7 sm:p-8 flex flex-col justify-between transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      {p.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-1">{p.title}</h3>
                  <div className="text-xs font-semibold text-blue-400 mb-4">
                    {p.subLabel}
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-5">{p.summary}</p>

                  <div className="rounded-2xl bg-emerald-500/8 border border-emerald-500/25 p-3.5 mb-5">
                    <div className="text-[11px] font-extrabold text-emerald-300 mb-0.5">
                      Direct Commercial Impact:
                    </div>
                    <p className="text-xs text-neutral-200">{p.impact}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {p.tasks.map((t, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsAppUrl(p.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-neutral-950 hover:bg-blue-600/20 border border-neutral-800 hover:border-blue-500/50 text-sm font-bold text-cyan-300 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask About This Pillar on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. PLATFORMS + REGIONAL SEO HUBS (INTERNAL LINKING SILO)
      ==================================================================== */}
      <section id="platforms" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Multi-Platform Engineering"
            title="Specialized SEO for Every"
            highlight="Website & E-Commerce Stack"
            subtitle="Hands-on developer expertise solving the unique technical SEO bottlenecks of modern frameworks and store platforms."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {SUPPORTED_PLATFORMS.map((pl, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-cyan-500/40 p-6 transition"
              >
                <span className="inline-block px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] font-bold text-amber-300 mb-3">
                  {pl.tag}
                </span>
                <h3 className="text-lg font-extrabold text-white mb-4">{pl.name}</h3>
                <ul className="space-y-2">
                  {pl.focus.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div id="markets">
            <SectionHeader
              badge="Regional Search Coverage"
              title="Dedicated SEO Hubs Across"
              highlight="Egypt, Saudi Arabia, UAE & GCC"
              subtitle="Explore our localized regional SEO pages for market-specific strategies and local currency plans."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {REGIONAL_HUBS.map((hub, idx) => (
                <Link
                  key={idx}
                  href={hub.href}
                  className="group rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-blue-500/50 p-6 flex flex-col justify-between transition"
                >
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300 mb-3">
                      {hub.country}
                    </span>
                    <h3 className="text-lg font-extrabold text-white group-hover:text-cyan-300 transition mb-2">
                      {hub.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">{hub.desc}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:text-cyan-300">
                    <span>Explore Regional Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. 4 AUDIT TABLES + 90-DAY ROADMAP
      ==================================================================== */}
      <section id="audit" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="UNIQUE Execution Standard"
            title="4 Engineering Checklists Behind"
            highlight="Sustainable Page-1 Rankings"
            subtitle="Every deliverable is documented, verifiable, and tracked directly inside Google Search Console and GA4."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {UNIQUE_4_AUDIT_TABLES.map((tbl) => (
              <div
                key={tbl.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 p-6 sm:p-7"
              >
                <div className="flex items-center justify-between gap-3 border-b border-neutral-800 pb-4 mb-5">
                  <h3 className="text-lg font-extrabold text-white">{tbl.title}</h3>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300">
                    {tbl.badge}
                  </span>
                </div>
                <div className="space-y-2.5">
                  {tbl.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800/80 text-xs sm:text-sm text-neutral-200"
                    >
                      <span>{item}</span>
                      <span className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <SectionHeader
            badge="90-Day Growth Blueprint"
            title="How We Scale Your Website to"
            highlight="Page 1 Within 90 Days"
            subtitle="A phased sprint plan moving from technical cleanup to topical authority and compounding organic leads."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {ROADMAP_90_DAYS.map((ph) => (
              <div
                key={ph.num}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-extrabold text-cyan-300">
                      Phase {ph.num}
                    </span>
                    <span className="text-xs font-bold text-amber-300">{ph.timeframe}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">{ph.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">{ph.desc}</p>
                </div>
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-3.5">
                  <div className="text-[10px] font-bold text-emerald-300 mb-0.5">Tangible Output:</div>
                  <div className="text-xs font-bold text-white">{ph.output}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. TRANSPARENT MONTHLY USD PACKAGES ($250 / $450 / $850)
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Flexible Monthly Plans"
            title="Transparent SEO Packages"
            highlight="in US Dollars ($)"
            subtitle="Full-stack technical fixes, semantic content, and safe backlinks with zero long-term lock-in."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {SEO_PACKAGES_USD.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition ${
                  pkg.isPopular
                    ? "bg-gradient-to-b from-[#0A1428] to-[#070B14] border-2 border-cyan-400/60 shadow-2xl shadow-blue-600/20"
                    : "bg-[#070B14] border border-neutral-800 hover:border-blue-500/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-extrabold ${
                        pkg.isPopular
                          ? "bg-cyan-400/15 text-cyan-300 border border-cyan-400/40"
                          : "bg-neutral-900 text-neutral-300 border border-neutral-800"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-bold text-amber-300">{pkg.keywords}</span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">{pkg.idealFor}</p>

                  <div className="flex items-baseline gap-2 pb-6 mb-6 border-b border-neutral-800">
                    <span className="text-4xl font-black text-white">${pkg.price}</span>
                    <span className="text-xs font-bold text-cyan-300">{pkg.cycle}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsAppUrl(pkg.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-4 px-5 rounded-2xl font-extrabold text-sm transition ${
                    pkg.isPopular
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-600/30"
                      : "bg-neutral-950 hover:bg-blue-600/20 border border-neutral-700 hover:border-blue-500 text-white"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start {pkg.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. FAQ ACCORDION + SEMANTIC CLOUD
      ==================================================================== */}
      <section id="faq" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Everything You Need to Know About"
            highlight="Our SEO & GEO Services"
            subtitle="Clear answers on timelines, free technical audits, AI Search optimization, and monthly flexibility."
          />

          <div className="max-w-4xl mx-auto space-y-4 mb-16">
            {FAQS.map((faq) => (
              <details
                key={faq.id}
                className="group rounded-2xl bg-[#070B14] border border-neutral-800 open:border-blue-500/40 p-6 transition"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <div>
                    <span className="text-[11px] font-bold text-cyan-400 block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-neutral-400 group-open:rotate-90 group-open:text-cyan-400 transition shrink-0" />
                </summary>
                <p className="mt-4 pt-4 border-t border-neutral-800/80 text-sm text-neutral-300 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="rounded-3xl bg-[#070B14] border border-neutral-800 p-7 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold text-blue-400 mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Semantic Coverage of UNIQUE SEO Services</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {SEMANTIC_KEYWORDS.map((kw, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 hover:border-cyan-500/40 hover:text-cyan-300 transition"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. FINAL CTA & FOOTER
      ==================================================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B1730] via-[#070D1A] to-[#051418] border border-blue-500/35 p-8 sm:p-12 lg:p-14 text-center shadow-2xl shadow-blue-950/50">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Technical SEO Audit Delivered Within 24 Hours</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Ready to Turn Google into Your #1{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Organic Revenue Engine?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              Send your website URL on WhatsApp today and receive an actionable diagnostic covering
              technical blockers, high-intent keyword gaps, and a custom 90-day growth plan.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroAuditWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Request Your Free SEO Audit Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-black/70 border border-neutral-700 text-white font-bold text-sm">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{WHATSAPP_PRIMARY}</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">{WHATSAPP_SECONDARY}</span>
              </div>
            </div>
          </div>

          <footer className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <div>
              © {new Date().getFullYear()} UNIQUE Digital Agency — SEO &amp; AI Search (GEO) Services.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/services/seo" className="hover:text-cyan-300 transition">
                خدمة السيو (AR)
              </Link>
              <Link href="/en/services/backlinks" className="hover:text-cyan-300 transition">
                Backlinks Service
              </Link>
              <Link href="/en/services/wordpress-nextjs" className="hover:text-cyan-300 transition">
                WordPress &amp; Next.js
              </Link>
              <Link href="/en/pricing" className="hover:text-cyan-300 transition">
                All Packages &amp; Pricing
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}