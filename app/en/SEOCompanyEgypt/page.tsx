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

function Award({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
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

function TrendingUp({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function MapPin({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
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

function ShoppingBag({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

// ============================================================================
// BRAND & WHATSAPP HELPERS
// ============================================================================

const WHATSAPP_NUMBER_DISPLAY = "01270506511";
const WHATSAPP_INTERNATIONAL = "201270506511";

function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encodeURIComponent(message)}`;
}

// ============================================================================
// NEXT.JS METADATA — EGYPT SEO COMPANY (ENGLISH LTR)
// ============================================================================

export const metadata: Metadata = {
  title:
    "SEO Company in Egypt | Google Page #1, Local Maps & AI Search — UNIQUE",
  description:
    "Top SEO company in Egypt delivering Search Console-verified growth, Google Maps Local 3-Pack rankings, WooCommerce/Shopify e-commerce SEO, and AI Search (GEO) across Cairo & Alexandria. Transparent EGP packages starting at 7,500 EGP/month.",
  keywords: [
    "SEO Company in Egypt",
    "Best SEO Agency Egypt",
    "SEO Services Cairo",
    "SEO Company Alexandria",
    "SEO Packages Prices in Egypt",
    "E-Commerce SEO Egypt",
    "Local SEO Google Maps Egypt",
    "Technical SEO Agency Egypt",
    "AI Search GEO Optimization Egypt",
    "Bilingual Arabic English SEO Egypt",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/en/egypt-seo",
    languages: {
      "en-EG": "https://www.uniquee-ws.com/en/egypt-seo",
      "ar-EG": "https://www.uniquee-ws.com/egypt-seo",
      "x-default": "https://www.uniquee-ws.com/egypt-seo",
    },
  },
  openGraph: {
    title: "SEO Company in Egypt — UNIQUE Digital Agency",
    description:
      "Technical SEO, Semantic Content, Google Maps Local 3-Pack, and AI Search (GEO) engineered for Egyptian enterprises and e-commerce stores with monthly GSC reporting.",
    url: "https://www.uniquee-ws.com/en/egypt-seo",
    siteName: "UNIQUE Digital Agency",
    locale: "en_EG",
    type: "website",
  },
};

// ============================================================================
// TYPESCRIPT INTERFACES
// ============================================================================

interface HeroKpiCard {
  id: string;
  value: string;
  title: string;
  subtitle: string;
  accent: "emerald" | "cyan" | "blue" | "amber";
}

interface SeoVsAdsRow {
  criterion: string;
  uniqueSeo: string;
  paidAds: string;
  cheapSeo: string;
}

interface SeoServicePillar {
  id: string;
  number: string;
  badge: string;
  title: string;
  arabicTag: string;
  summary: string;
  businessImpactInEgypt: string;
  executionChecklist: string[];
  deliverables: string[];
  whatsappText: string;
}

interface EgyptLocalZone {
  id: string;
  zoneTitle: string;
  badgeTag: string;
  commercialCharacter: string;
  targetBusinesses: string[];
  localSeoActions: string[];
  localKeywords: string[];
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
  cityInEgypt: string;
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

interface EgyptSectorItem {
  id: string;
  sectorName: string;
  projectsCount: string;
  avgGrowth: string;
  description: string;
  keySeoFocus: string[];
  whatsappMsg: string;
}

interface SeoAuditTableGroup {
  id: string;
  tableTitle: string;
  tableBadge: string;
  items: string[];
}

interface NinetyDayPhase {
  phaseNum: string;
  timeframe: string;
  title: string;
  description: string;
  tasks: string[];
  milestoneOutput: string;
}

interface EgyptSeoPackageEGP {
  id: string;
  packageName: string;
  badgeText: string;
  priceEGP: string;
  billingCycle: string;
  idealFor: string;
  isPopular: boolean;
  keywordsCount: string;
  includedServices: string[];
  technicalAndContentFeatures: string[];
  reportingAndSupport: string;
  whatsappMsg: string;
}

interface ChatGptClientQuestion {
  tag: string;
  q: string;
  a: string;
}

interface EgyptSeoFaq {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// DATA ARRAYS — EGYPT SEO MARKET (2026, ENGLISH)
// ============================================================================

const HERO_KPIS: HeroKpiCard[] = [
  {
    id: "growth",
    value: "+310%",
    title: "Average Organic Traffic Lift",
    subtitle: "Verified in Google Search Console on high-intent commercial keywords across Egypt.",
    accent: "emerald",
  },
  {
    id: "geo",
    value: "SEO + GEO",
    title: "Rank on Google & ChatGPT",
    subtitle: "We build entity authority so your brand ranks on Google Page #1 and inside AI Overviews & ChatGPT.",
    accent: "cyan",
  },
  {
    id: "maps",
    value: "Top 3",
    title: "Egypt Google Maps Dominance",
    subtitle: "Multiply inbound calls and direction requests across New Cairo, Sheikh Zayed, Maadi & Alexandria.",
    accent: "blue",
  },
  {
    id: "egp",
    value: "7,500 EGP",
    title: "Transparent Monthly EGP Tiers",
    subtitle: "Clear Egyptian Pound pricing with zero annual lock-in and direct Google Search Console reports.",
    accent: "amber",
  },
];

const SEO_VS_ADS_COMPARISON_EGYPT: SeoVsAdsRow[] = [
  {
    criterion: "Cost Per Lead (CPL) in Egypt",
    uniqueSeo: "Drops month over month as ranked pages compound free organic traffic",
    paidAds: "Rises continuously with ad auctions and currency fluctuations",
    cheapSeo: "Zero real revenue — vanity clicks or irrelevant non-buyer terms",
  },
  {
    criterion: "Longevity After Pausing Spend",
    uniqueSeo: "Owned digital asset generating qualified leads and orders for years",
    paidAds: "Traffic and inquiries stop the exact second your ad budget ends",
    cheapSeo: "Fast ranking collapse or Google penalties from toxic spam links",
  },
  {
    criterion: "Egyptian Buyer Purchase Intent",
    uniqueSeo: "Highest intent — buyers actively searching Google trust top organic brands",
    paidAds: "Low-to-medium intent (interruption ads on social feeds)",
    cheapSeo: "Buried on Page 3+ where decision-makers never click",
  },
  {
    criterion: "ChatGPT & AI Overviews Visibility",
    uniqueSeo: "Engineered with JSON-LD Schema and Entity Authority for AI citations",
    paidAds: "Zero influence on generative AI brand recommendations",
    cheapSeo: "Thin, copied content ignored by Google and AI search engines",
  },
  {
    criterion: "Measurement & Reporting Clarity",
    uniqueSeo: "Live Google Search Console + GA4 revenue & Maps call tracking",
    paidAds: "Clicks and impressions that often fail to yield sustainable ROI",
    cheapSeo: "Vague promises with no transparent Search Console proof",
  },
];

const CORE_SEO_SERVICES_EGYPT: SeoServicePillar[] = [
  {
    id: "technical-seo",
    number: "01",
    badge: "Infrastructure & Speed",
    title: "Technical SEO & Core Web Vitals Engineering",
    arabicTag: "السيو التقني وهندسة الأداء والسرعة",
    summary:
      "We start with a 120+ point engineering audit across your Next.js, WordPress, or Shopify site to remove crawl blockers, accelerate mobile speed on Egyptian 4G networks, and maximize crawl budget.",
    businessImpactInEgypt:
      "Resolving technical bottlenecks alone frequently lifts existing page rankings by 30% to 60% within the first 45 days.",
    executionChecklist: [
      "Full crawl & indexation repair (404s, redirect chains, canonical conflicts)",
      "Core Web Vitals optimization (LCP, INP, CLS) for peak mobile performance",
      "Custom JSON-LD Schema Markup (Organization, Service, Product, FAQ)",
      "Clean XML Sitemap, Robots.txt, and strategic internal linking architecture",
      "Bilingual ar-EG / en-EG Hreflang mapping with zero indexation cannibalization",
    ],
    deliverables: [
      "120+ Point Technical Audit",
      "Search Console Fixes",
      "Custom JSON-LD Schema",
      "Mobile Speed Tuning",
    ],
    whatsappText: "Hello UNIQUE! I want a full Technical SEO Audit for my website in Egypt.",
  },
  {
    id: "local-seo-maps",
    number: "02",
    badge: "Google Maps & Near-Me",
    title: "Egypt Local SEO & Google Maps Local 3-Pack",
    arabicTag: "السيو المحلي وتصدر خرائط جوجل في مصر",
    summary:
      "For clinics, companies, offices, and branches across Cairo, Giza, and Alexandria—we push your brand into the Google Maps Local 3-Pack whenever nearby customers search for your services.",
    businessImpactInEgypt:
      "The fastest channel to generate direct phone calls and route requests from high-intent local buyers ready to book.",
    executionChecklist: [
      "Full Google Business Profile optimization (categories, services, geo-tagged media)",
      "Dedicated neighborhood landing pages (New Cairo, Sheikh Zayed, Maadi, Alexandria)",
      "Consistent NAP citations across trusted Egyptian business directories",
      "Review velocity & keyword-rich owner response playbook",
      "Embedded LocalBusiness GeoCoordinates Schema tying your site to your exact branch",
    ],
    deliverables: [
      "Google Maps Top 3 Focus",
      "Call & Direction Tracking",
      "District Landing Pages",
      "GBP Management",
    ],
    whatsappText: "Hello UNIQUE! I want to rank #1 on Google Maps and Local SEO in Egypt.",
  },
  {
    id: "ecommerce-seo",
    number: "03",
    badge: "Organic Store Revenue",
    title: "E-Commerce SEO (WooCommerce • Shopify • EasyOrder)",
    arabicTag: "سيو المتاجر الإلكترونية في مصر",
    summary:
      "Break free from 100% dependence on Meta and TikTok ads. We turn your Egyptian online store into a daily organic sales channel by ranking high-margin category hubs and product pages on Google.",
    businessImpactInEgypt:
      "Lowers Customer Acquisition Cost (CAC) and generates compounding daily orders year-round without increasing ad spend.",
    executionChecklist: [
      "Commercial category hub optimization targeting top Egyptian buyer queries",
      "Unique, persuasive product descriptions with Product + Offer (EGP) Schema",
      "Faceted navigation & filter URL cleanup to stop crawl waste and duplicates",
      "Image compression and checkout speed optimization to boost organic conversion",
      "Accurate GA4 E-Commerce revenue tracking from organic search",
    ],
    deliverables: [
      "Category Page Rankings",
      "EGP Product Schema",
      "GA4 Sales Attribution",
      "Buyer Keyword Scaling",
    ],
    whatsappText: "Hello UNIQUE! I own an online store in Egypt and want to scale organic sales with SEO.",
  },
  {
    id: "semantic-content",
    number: "04",
    badge: "Topical Authority",
    title: "Semantic Content & E-E-A-T Authority Building",
    arabicTag: "المحتوى الدلالي وبناء السلطة الموضوعية",
    summary:
      "No generic filler blog posts—we engineer a complete Topical Map covering commercial service pages, comparison guides, and localized Egyptian buyer resources written to convert.",
    businessImpactInEgypt:
      "Establishes your domain as the #1 authority in your Egyptian niche while turning readers into WhatsApp leads.",
    executionChecklist: [
      "Search intent mapping & content gap analysis against Egypt's top 5 competitors",
      "High-converting Money Pages engineered for immediate commercial rankings",
      "Interlinked Topic Clusters passing internal link equity to core service pages",
      "Strategic content refreshes to reclaim and lock top-3 positions",
      "Native-grade Arabic and English editorial execution tailored to Egypt",
    ],
    deliverables: [
      "Topical Keyword Map",
      "Commercial Money Pages",
      "Internal Link Mesh",
      "Content Refresh Cycle",
    ],
    whatsappText: "Hello UNIQUE! I want a Semantic SEO content strategy to rank my website in Egypt.",
  },
  {
    id: "ai-search-geo",
    number: "05",
    badge: "Next-Gen AI Search",
    title: "AI Search Optimization (GEO — ChatGPT & AI Overviews)",
    arabicTag: "تحسين الظهور في محركات الذكاء الاصطناعي GEO",
    summary:
      "Thousands of Egyptian founders and consumers now ask ChatGPT, Perplexity, and Google AI Overviews for brand recommendations before buying. We position your business to be the cited, trusted answer.",
    businessImpactInEgypt:
      "Gives you a decisive head start over 95% of Egyptian competitors still relying on outdated legacy SEO tactics.",
    executionChecklist: [
      "Entity SEO & structured Organization Schema connecting your brand signals",
      "Data-backed, citation-ready answer blocks structured for AI extraction",
      "Trusted brand mentions across authoritative Egyptian and regional publications",
      "Decision-stage FAQ & Q&A modules matching real prompt patterns",
      "Monthly monitoring of brand visibility across generative search platforms",
    ],
    deliverables: [
      "Entity & GEO Setup",
      "AI-Citation Content",
      "Advanced Schema Graph",
      "First-Mover Advantage",
    ],
    whatsappText: "Hello UNIQUE! I want to optimize my brand for Google AI Overviews and ChatGPT (GEO).",
  },
  {
    id: "offpage-authority",
    number: "06",
    badge: "Safe Authority Links",
    title: "White-Hat Link Building & Digital PR",
    arabicTag: "بناء الروابط الخلفية الآمنة والعلاقات الرقمية",
    summary:
      "Zero cheap spam networks that risk Google penalties. We build a clean, high-authority backlink profile from relevant Egyptian, Arab, and international sites with real organic readership.",
    businessImpactInEgypt:
      "Strengthens domain authority and tips the scales in your favor on Egypt's most profitable commercial keywords.",
    executionChecklist: [
      "Toxic backlink audit & disavow cleanup to safeguard domain trust",
      "Competitor link-gap analysis across top-ranking Egyptian websites",
      "Editorial guest posts and Digital PR placements on real traffic domains",
      "Local Egyptian business citations reinforcing geographic relevance",
      "Transparent monthly link report detailing every placement and target URL",
    ],
    deliverables: [
      "Safe White-Hat Links",
      "Toxic Link Cleanup",
      "Digital PR Outreach",
      "Monthly Backlink Report",
    ],
    whatsappText: "Hello UNIQUE! I want safe White-Hat link building to boost my domain authority in Egypt.",
  },
];

const EGYPT_LOCAL_SEO_ZONES: EgyptLocalZone[] = [
  {
    id: "new-cairo-capital",
    zoneTitle: "New Cairo, Fifth Settlement & New Administrative Capital",
    badgeTag: "Real Estate, Clinics & Corporate HQ",
    commercialCharacter:
      "Egypt's most competitive commercial search hub—dominated by real estate developers, aesthetic/dental clinics, and premier consultancies.",
    targetBusinesses: [
      "Real Estate Developers & Brokerages",
      "Aesthetic & Dental Clinics",
      "Engineering & Legal Consultancies",
      "Luxury B2B & Service Brands",
    ],
    localSeoActions: [
      "Target high-value compound, property, and medical treatment search queries",
      "Capture Google Maps Local 3-Pack across 5th Settlement, Rehab, Madinaty & NAC",
      "Build pricing & comparison guides that convert bottom-of-funnel buyers",
    ],
    localKeywords: [
      "SEO Company New Cairo",
      "Real Estate SEO Fifth Settlement",
      "Medical Clinic SEO New Cairo",
    ],
  },
  {
    id: "zayed-october-maadi",
    zoneTitle: "Sheikh Zayed, 6th of October, Mohandessin & Maadi",
    badgeTag: "Local Brands, Decor & Specialized Services",
    commercialCharacter:
      "High-growth ecosystem for Egyptian Local Brands, interior finishing firms, diagnostic labs, and private academies.",
    targetBusinesses: [
      "Interior Design & Finishing Firms",
      "Egyptian E-Commerce Local Brands",
      "Medical Centers & Labs",
      "Training Academies & Schools",
    ],
    localSeoActions: [
      "Deploy district-specific landing pages capturing 'Near Me' mobile searches",
      "Optimize visual project galleries to rank in Google Images & Maps",
      "Align organic SEO with paid search campaigns to slash blended CPL",
    ],
    localKeywords: [
      "SEO Agency Sheikh Zayed",
      "Local SEO 6th of October",
      "SEO Services Maadi & Mohandessin",
    ],
  },
  {
    id: "alexandria-north-coast",
    zoneTitle: "Alexandria, North Coast & Maritime/Tourism Corridor",
    badgeTag: "Logistics, Hospitality & Regional Trade",
    commercialCharacter:
      "Key commercial gateway for maritime shipping, customs clearance, import/export firms, resorts, and leading medical/commercial institutions.",
    targetBusinesses: [
      "Maritime Shipping & Customs Firms",
      "Tourism, Resorts & Diving Centers",
      "Major Hospitals & Clinics",
      "Commercial & Service Enterprises",
    ],
    localSeoActions: [
      "Dual targeting: Local Alexandria Maps + international English search",
      "Optimize multi-branch Google Business Profiles across Alexandria & North Coast",
      "Bilingual AR/EN SEO engineered to attract foreign clients & corporate contracts",
    ],
    localKeywords: [
      "SEO Company Alexandria",
      "Logistics & Shipping SEO Egypt",
      "Tourism & Hotel SEO Egypt",
    ],
  },
  {
    id: "industrial-export-egypt",
    zoneTitle: "10th of Ramadan, Obour, Sadat & Borg El Arab — Export B2B SEO",
    badgeTag: "Manufacturing & Global Export",
    commercialCharacter:
      "Egypt's industrial powerhouse serving domestic B2B supply chains and international importers across GCC, Africa, and Europe.",
    targetBusinesses: [
      "Food & Packaging Export Factories",
      "Chemicals & Plastics Plants",
      "Industrial Machinery Suppliers",
      "Textiles & Furniture Exporters",
    ],
    localSeoActions: [
      "Rank for English & Arabic importer queries (Wholesale / Manufacturer Egypt)",
      "Optimize technical product spec sheets for international Google visibility",
      "Route organic B2B visitors straight into export RFQ forms & sales WhatsApp",
    ],
    localKeywords: [
      "B2B Factory SEO Egypt",
      "Export Company SEO Cairo",
      "Industrial Supplier SEO Egypt",
    ],
  },
];

const ECOMMERCE_SEO_PLATFORMS_EGYPT: EcommerceSeoPlatform[] = [
  {
    id: "woocommerce",
    platformName: "WooCommerce / WordPress",
    marketShareTag: "Most Popular in Egypt",
    title: "Technical WooCommerce SEO",
    painPointSolved:
      "Most Egyptian WooCommerce stores suffer from slow plugin bloat, duplicate filter URLs, and thin product pages that block Google rankings.",
    technicalSolutions: [
      "Clean plugin overhead and optimize Core Web Vitals for Egyptian mobile users",
      "Block filter/cart index bloat so Google focuses crawl budget on money categories",
      "Implement Product + Offer (EGP) + AggregateRating Schema for rich Google snippets",
    ],
    expectedGrowth: "+180% to +340% organic Google traffic & sales lift in 4–6 months",
    whatsappMsg: "Hello UNIQUE! I have a WooCommerce store in Egypt and want to grow organic sales.",
  },
  {
    id: "shopify-easyorder",
    platformName: "Shopify & EasyOrder",
    marketShareTag: "Top for Local Brands",
    title: "Shopify & EasyOrder Store SEO",
    painPointSolved:
      "Egyptian local brands often rely 100% on Meta & TikTok ads while missing thousands of free daily Google searches for their product categories.",
    technicalSolutions: [
      "Build commercial collection hubs targeting Egyptian Arabic & English buyer terms",
      "Fix Shopify duplicate product-in-collection canonical URL issues",
      "Speed up themes and connect buying guides that funnel traffic into checkout",
    ],
    expectedGrowth: "Reduce ad reliance by 35% with compounding daily organic orders",
    whatsappMsg: "Hello UNIQUE! I run a Shopify or EasyOrder store in Egypt and need an SEO growth plan.",
  },
  {
    id: "nextjs-custom-ecom",
    platformName: "Next.js & Custom Stores",
    marketShareTag: "Enterprise Velocity",
    title: "Custom & Headless E-Commerce SEO",
    painPointSolved:
      "Many custom React/SPA stores suffer from Client-Side Rendering indexation blind spots and missing dynamic sitemaps.",
    technicalSolutions: [
      "Engineer Server-Side Rendering (SSR) and dynamic Metadata per SKU & category",
      "Auto-generate real-time XML Sitemaps whenever inventory updates",
      "Deploy clean internal linking & Breadcrumb JSON-LD to maximize SERP CTR",
    ],
    expectedGrowth: "Instant indexation of thousands of SKUs and decisive technical superiority",
    whatsappMsg: "Hello UNIQUE! I have a custom or Next.js store and need technical SEO optimization.",
  },
];

const GSC_DOCUMENTED_RESULTS_EGYPT: GscCaseStudy[] = [
  {
    id: "cs-real-estate-eg",
    sector: "Real Estate & Developers",
    cityInEgypt: "New Cairo & Fifth Settlement",
    platform: "Next.js + Sanity CMS",
    projectTitle: "East Cairo Property & Compound Portal",
    timeframe: "Within 5 Months",
    clicksBefore: "1,150 / mo",
    clicksAfter: "14,800 / mo",
    impressionsAfter: "490K Imp.",
    revenueGrowth: "+380% Qualified WhatsApp Leads",
    topKeywordsRanked: [
      "Apartments for Sale New Cairo",
      "Fifth Settlement Compounds",
      "New Capital Property Prices",
    ],
    summary:
      "Re-architected compound landing pages with live payment-plan tables and Real Estate Schema, capturing Top-3 rankings and slashing CPL vs Meta ads.",
  },
  {
    id: "cs-ecom-eg",
    sector: "E-Commerce (Local Brand)",
    cityInEgypt: "Cairo & Alexandria",
    platform: "WooCommerce",
    projectTitle: "Egyptian Skincare & Apparel Online Store",
    timeframe: "Within 4 Months",
    clicksBefore: "2,400 / mo",
    clicksAfter: "19,200 / mo",
    impressionsAfter: "620K Imp.",
    revenueGrowth: "+265% Organic Google Revenue",
    topKeywordsRanked: [
      "Best Skincare Egypt",
      "Buy Online Egypt",
      "Local Brand Offers Egypt",
    ],
    summary:
      "Eliminated filter crawl bloat and launched optimized category hubs with EGP Product Schema, multiplying daily organic orders.",
  },
  {
    id: "cs-medical-eg",
    sector: "Medical Clinics",
    cityInEgypt: "Sheikh Zayed, Maadi & Alexandria",
    platform: "WordPress + Local SEO",
    projectTitle: "Multi-Branch Dental & Aesthetic Clinic Group",
    timeframe: "Within 90 Days",
    clicksBefore: "680 / mo",
    clicksAfter: "7,450 / mo",
    impressionsAfter: "215K Imp.",
    revenueGrowth: "+210% Google Maps Calls & Bookings",
    topKeywordsRanked: [
      "Best Dentist Sheikh Zayed",
      "Aesthetic Clinic Maadi",
      "Dental Implant Cost Egypt",
    ],
    summary:
      "Combined Google Maps Local 3-Pack dominance with E-E-A-T verified doctor content to double direct patient bookings.",
  },
];

const EGYPT_6_SECTORS: EgyptSectorItem[] = [
  {
    id: "sec-real-estate",
    sectorName: "Real Estate & Developers",
    projectsCount: "East & West Cairo Specialists",
    avgGrowth: "+340% Buyer Traffic",
    description:
      "Capture high-value compound, residential, and commercial property searches across New Cairo, Zayed, and North Coast.",
    keySeoFocus: [
      "Dedicated SEO hubs per compound & developer",
      "Pricing & installment plan intent capture",
      "Local Maps & organic lead funnel sync",
    ],
    whatsappMsg: "Hello UNIQUE! I want an SEO plan for my real estate company in Egypt.",
  },
  {
    id: "sec-medical",
    sectorName: "Medical Clinics & Hospitals",
    projectsCount: "Strict YMYL / E-E-A-T Compliance",
    avgGrowth: "+220% Bookings & Calls",
    description:
      "Build patient and Google trust while dominating Local 3-Pack Maps and treatment queries in your clinic's area.",
    keySeoFocus: [
      "Verified doctor credentials & specialty pages",
      "Multi-branch Google Maps Local 3-Pack",
      "Patient-first medical Q&A content",
    ],
    whatsappMsg: "Hello UNIQUE! I need SEO for my medical clinic or center in Egypt.",
  },
  {
    id: "sec-ecom",
    sectorName: "E-Commerce & Local Brands",
    projectsCount: "WooCommerce • Shopify • EasyOrder",
    avgGrowth: "+260% Organic Orders",
    description:
      "Turn daily Egyptian product and price searches into direct checkout orders while lowering your paid ad dependency.",
    keySeoFocus: [
      "Commercial category & product optimization",
      "Product + Offer (EGP) Rich Snippets",
      "Buyer guides & product comparisons",
    ],
    whatsappMsg: "Hello UNIQUE! I want to grow my Egyptian e-commerce store with SEO.",
  },
  {
    id: "sec-factories",
    sectorName: "Factories & Export Trading",
    projectsCount: "Domestic & Global B2B SEO",
    avgGrowth: "+190% Export RFQs",
    description:
      "Attract wholesale buyers and international importers from GCC, Europe, and Africa via bilingual Arabic/English SEO.",
    keySeoFocus: [
      "Manufacturer, wholesale & export keywords",
      "Technical catalog & spec sheet SEO",
      "International English Google targeting",
    ],
    whatsappMsg: "Hello UNIQUE! I need B2B export SEO for my factory in Egypt.",
  },
  {
    id: "sec-tourism",
    sectorName: "Tourism, Hotels & Diving",
    projectsCount: "Multilingual SEO (Up to 7 Languages)",
    avgGrowth: "+290% Direct Bookings",
    description:
      "Grow commission-free direct bookings by ranking in English, German, French, and Arabic across European & regional search.",
    keySeoFocus: [
      "International Hreflang & multilingual routes",
      "Fast visual itinerary & tour pages",
      "Global travel PR & authority links",
    ],
    whatsappMsg: "Hello UNIQUE! I want multilingual SEO for my tourism or diving company in Egypt.",
  },
  {
    id: "sec-services",
    sectorName: "Services, Decor, Law & EdTech",
    projectsCount: "High-Intent Commercial Focus",
    avgGrowth: "+240% WhatsApp Leads",
    description:
      "Rank #1 for ready-to-hire Egyptian queries like 'Best Company' and 'Prices in Egypt' that convert immediately.",
    keySeoFocus: [
      "Conversion-focused Money Pages",
      "SEO-structured case studies & portfolios",
      "ChatGPT & Google AI Overviews visibility",
    ],
    whatsappMsg: "Hello UNIQUE! I want an SEO strategy for my service firm or academy in Egypt.",
  },
];

const UNIQUE_4_SEO_TABLES_EGYPT: SeoAuditTableGroup[] = [
  {
    id: "audit-table",
    tableTitle: "1. Technical Diagnostics (SEO Audit)",
    tableBadge: "120+ Checks",
    items: [
      "Baseline Google Search Console crawl & ranking diagnostics",
      "Commercial keyword gap analysis against Egypt's top competitors",
      "Duplicate URL, orphan page, and 404/redirect chain cleanup",
      "Penalty & toxic backlink health verification",
      "Core Web Vitals & Egyptian 4G mobile speed benchmarking",
    ],
  },
  {
    id: "onpage-table",
    tableTitle: "2. On-Page & Semantic Optimization",
    tableBadge: "Structure & Content",
    items: [
      "High-CTR Meta Titles, Descriptions, and semantic H1–H3 structure",
      "Strategic internal linking funneling authority to Money Pages",
      "E-E-A-T aligned commercial pages & topical cluster articles",
      "WebP image optimization with targeted descriptive Alt Text",
      "Custom JSON-LD Schema (Service, Product, LocalBusiness, FAQ)",
    ],
  },
  {
    id: "offpage-table",
    tableTitle: "3. Off-Page Authority & GEO",
    tableBadge: "100% White-Hat",
    items: [
      "Relevant, high-authority backlinks from real Egyptian & regional sites",
      "Google Business Profile & Maps Local 3-Pack authority signals",
      "Consistent Local Citations & NAP verification across Egypt",
      "Entity & brand mention signals for ChatGPT & AI Overviews",
      "Monthly backlink profile monitoring & toxic link defense",
    ],
  },
  {
    id: "reporting-table",
    tableTitle: "4. Transparent Monthly Reporting",
    tableBadge: "100% GSC Proof",
    items: [
      "Direct Google Search Console clicks, impressions & position reports",
      "Weekly rank tracking for all targeted commercial keywords",
      "GA4 conversion tracking (WhatsApp clicks, calls & store revenue)",
      "Itemized log of every technical fix, article, and backlink built",
      "Data-backed action plan for the upcoming month",
    ],
  },
];

const UNIQUE_PORTFOLIO_PROJECTS: { name: string; category: string }[] = [
  { name: "Riyadh Gate Directory & Services", category: "Top-Ranking Local Service Portal" },
  { name: "The Light House Diving & Tourism", category: "7-Language Global SEO Portal" },
  { name: "Raneen Commercial Store", category: "High-Speed E-Commerce Storefront" },
  { name: "Al-Mamlakah General Contracting", category: "Corporate & Contracting — GCC" },
  { name: "Al-Badr Real Estate & Investment", category: "Real Estate Development SEO" },
  { name: "Taqeem Cleaning & Maintenance", category: "Local SEO & Home Services" },
  { name: "Lamasat Design & Agency", category: "Creative Studio & Portfolio" },
  { name: "Qurani Educational Platform", category: "Interactive E-Learning Portal" },
];

const NINETY_DAY_ROADMAP_EGYPT: NinetyDayPhase[] = [
  {
    phaseNum: "01",
    timeframe: "Days 1 – 30",
    title: "Technical Recovery & Money Keyword Map",
    description:
      "We fix every crawl, speed, and indexation barrier holding your site back and build a revenue-first keyword map tailored to Egypt.",
    tasks: [
      "120+ point technical audit + Search Console error resolution",
      "Commercial keyword & competitor gap research + Topical Map",
      "Money Page On-Page overhaul + custom JSON-LD Schema deployment",
    ],
    milestoneOutput: "Technically clean domain + immediate indexation & impression lift",
  },
  {
    phaseNum: "02",
    timeframe: "Days 31 – 60",
    title: "Semantic Content, Maps 3-Pack & Authority",
    description:
      "We publish interlinked E-E-A-T content, accelerate Google Maps Local 3-Pack signals, and launch clean White-Hat link acquisition.",
    tasks: [
      "Publish commercial & localized Egypt landing pages + GEO blocks",
      "Google Business Profile optimization & local citation expansion",
      "Safe editorial backlinks pointing to high-priority revenue pages",
    ],
    milestoneOutput: "Commercial keywords entering Page #1 + rising organic clicks",
  },
  {
    phaseNum: "03",
    timeframe: "Days 61 – 90",
    title: "Top-3 Dominance & Conversion Scaling",
    description:
      "We push Page-1 keywords into Top-3 slots, refine CTR and lead conversion paths, and scale visibility inside AI search engines.",
    tasks: [
      "Boost positions #4–#10 into Top-3 high-click positions",
      "CRO refinement to maximize WhatsApp leads & store checkout rate",
      "Expand brand citations across ChatGPT & Google AI Overviews",
    ],
    milestoneOutput: "Compounding organic revenue & daily inbound leads at lower CPL",
  },
];

const EGYPT_SEO_PACKAGES_EGP: EgyptSeoPackageEGP[] = [
  {
    id: "local-starter-seo",
    packageName: "Local Starter SEO Package",
    badgeText: "Clinics, Offices & Local Firms",
    priceEGP: "7,500",
    billingCycle: "EGP / Month",
    idealFor:
      "Ideal for clinics, consulting offices, and local service businesses in Cairo or Alexandria targeting district & Google Maps dominance.",
    isPopular: false,
    keywordsCount: "Up to 20 Commercial Keywords",
    includedServices: [
      "Full technical SEO audit & Google Search Console error fixes",
      "Google Business Profile optimization for Local 3-Pack rankings",
      "On-Page & JSON-LD Schema optimization for 5 core service pages",
      "4 E-E-A-T semantic SEO articles published monthly",
      "Safe White-Hat backlinks & Egyptian local directory citations",
    ],
    technicalAndContentFeatures: [
      "Core mobile speed & indexation tuning",
      "Structured Q&A blocks for Google AI Overviews",
      "WhatsApp & phone call conversion tracking",
    ],
    reportingAndSupport: "Monthly Google Search Console report + direct WhatsApp support.",
    whatsappMsg: "Hello UNIQUE! I want to inquire about the Local Starter SEO Package (7,500 EGP/mo).",
  },
  {
    id: "growth-seo-pro",
    packageName: "Growth Corporate & Store SEO",
    badgeText: "Most Popular in Egypt",
    priceEGP: "14,500",
    billingCycle: "EGP / Month",
    idealFor:
      "Best for Egyptian e-commerce stores (WooCommerce / Shopify), real estate brokerages, interior firms & nationwide service brands.",
    isPopular: true,
    keywordsCount: "Up to 50 Commercial & Category Terms",
    includedServices: [
      "Advanced technical SEO + Core Web Vitals & full Product/Service Schema",
      "Ongoing optimization of category hubs and commercial Money Pages",
      "8 semantic articles & localized landing pages per month (Topical Map)",
      "Monthly White-Hat link building & Digital PR authority campaign",
      "Full AI Search (GEO) optimization for ChatGPT, Perplexity & AI Overviews",
    ],
    technicalAndContentFeatures: [
      "Monthly competitor gap monitoring & keyword expansion",
      "Multi-district Local SEO & Google Maps management",
      "GA4 organic revenue & lead attribution setup",
    ],
    reportingAndSupport: "Detailed monthly GSC/GA4 report + strategy call + dedicated lead.",
    whatsappMsg: "Hello UNIQUE! I want to book the Growth Corporate & Store SEO Package (14,500 EGP/mo).",
  },
  {
    id: "enterprise-seo-eg",
    packageName: "Enterprise & Export SEO",
    badgeText: "Developers, Factories & Large Stores",
    priceEGP: "26,000",
    billingCycle: "EGP / Month",
    idealFor:
      "Built for real estate developers, export factories, large e-commerce catalogs, and bilingual brands competing across Egypt & the GCC.",
    isPopular: false,
    keywordsCount: "100+ Keywords (Arabic & English)",
    includedServices: [
      "Full bilingual (Arabic & English) SEO strategy for Egypt, GCC & Europe",
      "16 specialized pages & authority articles produced monthly",
      "High-authority Digital PR & niche-relevant editorial backlinks",
      "Continuous CRO optimization to maximize organic ROI and RFQs",
      "Complete GEO entity dominance across generative AI search platforms",
    ],
    technicalAndContentFeatures: [
      "Direct engineering collaboration for Next.js / Custom / Large Stores",
      "Live Looker Studio dashboard tracking rankings, traffic & revenue",
      "Priority execution & direct access to Senior SEO Director",
    ],
    reportingAndSupport: "Bi-weekly reports + live dashboard + executive strategy sessions.",
    whatsappMsg: "Hello UNIQUE! I want to discuss the Enterprise & Export SEO Package (26,000 EGP/mo).",
  },
];

const EGYPT_CHATGPT_QUESTIONS: ChatGptClientQuestion[] = [
  {
    tag: "Egypt SEO Pricing",
    q: "How much do monthly SEO packages cost in Egypt in 2026?",
    a: "Professional SEO agencies in Egypt typically price local business and clinic campaigns around 7,500 EGP/month, competitive corporate and e-commerce growth plans around 14,500 EGP/month, and enterprise bilingual or export SEO campaigns starting from 26,000 EGP/month.",
  },
  {
    tag: "Ranking Timeline",
    q: "How long does SEO take to generate real leads and sales in Egypt?",
    a: "Technical fixes and On-Page upgrades begin lifting indexation, impressions, and keyword movement within 30 to 60 days. Strong, compounding commercial lead and revenue growth typically materializes between months 3 and 6 depending on industry competition.",
  },
  {
    tag: "Choosing an Agency",
    q: "How do I choose the best SEO company in Egypt and avoid scams?",
    a: "Choose an agency that starts with a real audit before asking for payment, ties strategy to buyer keywords and revenue rather than vanity traffic, provides live Google Search Console reports, and never promises 'Page #1 in 7 days' via risky spam links.",
  },
  {
    tag: "SEO & AI Search",
    q: "Is SEO still worth it in Egypt with ChatGPT and Google AI Overviews?",
    a: "More than ever. ChatGPT, Perplexity, and Google AI Overviews pull their brand recommendations directly from technically clean, high-authority, Schema-structured websites. UNIQUE engineers your brand for both traditional Google SEO and Generative Engine Optimization (GEO).",
  },
];

const EGYPT_SEO_FAQS: EgyptSeoFaq[] = [
  {
    id: "faq-1",
    category: "Getting Started",
    question: "Do you offer a free SEO audit before I subscribe to a package?",
    answer:
      "Yes. Share your website or store URL on WhatsApp and our team will deliver a complimentary 24-hour diagnostic highlighting technical blockers, competitor keyword gaps in Egypt, and the right package for your goals.",
  },
  {
    id: "faq-2",
    category: "Contracts",
    question: "Are your SEO packages locked into annual contracts?",
    answer:
      "No. We operate on flexible month-to-month agreements. While we recommend 3 to 6 months to capture full compounding SEO momentum, you stay because of verified Search Console results—not legal lock-in.",
  },
  {
    id: "faq-3",
    category: "Platforms",
    question: "Which website and e-commerce platforms do you optimize?",
    answer:
      "We optimize Next.js, React, WordPress, WooCommerce, Shopify, EasyOrder, and custom Laravel/PHP platforms with full technical implementation support.",
  },
  {
    id: "faq-4",
    category: "Content & Links",
    question: "Do monthly packages include SEO copywriting and backlinks?",
    answer:
      "Yes. Every package is end-to-end—covering technical fixes, commercial Arabic/English SEO content creation, internal linking, and safe White-Hat link building.",
  },
  {
    id: "faq-5",
    category: "Local SEO",
    question: "Can we target only Cairo, New Cairo, Sheikh Zayed, or Alexandria?",
    answer:
      "Absolutely. We tailor Local SEO and Google Business Profile strategies to specific districts or governorates so you dominate local Maps and 'Near Me' searches before expanding nationwide.",
  },
  {
    id: "faq-6",
    category: "Reporting",
    question: "How will I track my SEO progress every month?",
    answer:
      "You receive a transparent monthly report powered directly by Google Search Console and GA4 showing organic clicks, impressions, keyword rankings, leads/orders, and every deliverable completed.",
  },
];

const EGYPT_SEMANTIC_KEYWORDS_EN: string[] = [
  "SEO Company in Egypt",
  "Best SEO Agency Cairo",
  "SEO Services Alexandria",
  "Egypt SEO Packages & Pricing 2026",
  "Local SEO & Google Maps Egypt",
  "E-Commerce SEO WooCommerce & Shopify Egypt",
  "Technical SEO Audit Egypt",
  "AI Search Optimization (GEO) Egypt",
  "Real Estate SEO New Cairo",
  "Medical Clinic SEO Egypt",
  "B2B Factory & Export SEO Egypt",
  "White-Hat Link Building Egypt",
  "Bilingual Arabic English SEO",
  "Next.js Technical SEO Specialists",
  "Organic Lead Generation Egypt",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD WITH CAIRO/EGYPT GEOCOORDINATES 30.0444, 31.2357)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "UNIQUE Digital Agency — SEO Company in Egypt",
    url: "https://www.uniquee-ws.com/en/egypt-seo",
    telephone: "+201270506511",
    email: "godyslem139@gmail.com",
    priceRange: "7,500 EGP - 26,000+ EGP",
    areaServed: [
      { "@type": "Country", name: "Egypt" },
      { "@type": "City", name: "Cairo" },
      { "@type": "City", name: "Alexandria" },
      { "@type": "City", name: "Giza" },
      { "@type": "City", name: "New Cairo" },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "EG",
      addressRegion: "Cairo & Alexandria",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.0444,
      longitude: 31.2357,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Monthly Egypt SEO Packages (EGP)",
      itemListElement: EGYPT_SEO_PACKAGES_EGP.map((pkg) => ({
        "@type": "Offer",
        name: pkg.packageName,
        price: pkg.priceEGP.replace(/,/g, ""),
        priceCurrency: "EGP",
        description: pkg.idealFor,
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: EGYPT_SEO_FAQS.map((faq) => ({
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
        name: "SEO Company in Egypt",
        item: "https://www.uniquee-ws.com/en/egypt-seo",
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
  align = "center",
}: {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-4xl mx-auto" : "text-left max-w-3xl"}`}>
      <div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-bold tracking-wide uppercase mb-5 ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>{badge}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.15] mb-5">
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
// MAIN PAGE COMPONENT — EGYPT SEO COMPANY (ENGLISH LTR)
// ============================================================================

export default function EgyptSeoEnglishPage() {
  const heroAuditWhatsapp = getWhatsAppUrl(
    "Hello UNIQUE Digital Agency! I would like a Free Technical SEO Audit for my website or online store in Egypt."
  );

  return (
    <div
      dir="ltr"
      lang="en"
      className="min-h-screen bg-[#000000] text-white selection:bg-blue-500/30 selection:text-cyan-200 font-sans antialiased"
    >
      {/* Structured Data (JSON-LD with Cairo/Egypt GeoCoordinates 30.0444, 31.2357) */}
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
                Egypt Search &amp; AI Growth Engineering
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#services" className="hover:text-cyan-300 transition">
              Services
            </a>
            <a href="#zones" className="hover:text-cyan-300 transition">
              Egypt Hubs
            </a>
            <a href="#ecommerce" className="hover:text-cyan-300 transition">
              E-Commerce SEO
            </a>
            <a href="#results" className="hover:text-cyan-300 transition">
              GSC Proof
            </a>
            <a href="#audit-tables" className="hover:text-cyan-300 transition">
              SEO Checklist
            </a>
            <a href="#packages" className="hover:text-cyan-300 transition">
              EGP Packages
            </a>
            <a href="#faq" className="hover:text-cyan-300 transition">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/egypt-seo"
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
              <span>Free Egypt Audit</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION — EGYPT SEO COMPANY + LIVE GSC & MAPS SIMULATOR
      ==================================================================== */}
      <section className="relative overflow-hidden pt-14 pb-20 lg:pt-24 lg:pb-28 border-b border-neutral-900">
        {/* Ambient Glows (Blue / Cyan / Emerald only) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/4 w-[520px] h-[520px] rounded-full bg-blue-600/12 blur-[140px]" />
          <div className="absolute top-20 right-1/4 w-[440px] h-[440px] rounded-full bg-cyan-500/10 blur-[140px]" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[560px] h-[300px] rounded-full bg-emerald-500/8 blur-[130px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link href="/en" className="hover:text-cyan-300 transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-cyan-300 font-semibold">SEO Company in Egypt</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cairo • Alexandria • Nationwide Egypt</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">Google Page #1 &amp; AI Search (GEO)</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
                Top{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  SEO Company in Egypt
                </span>{" "}
                Turning Google Search &amp; Maps Into Daily Revenue
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                Stop depending 100% on rising paid ad costs. <strong className="text-white">UNIQUE Digital Agency</strong>{" "}
                engineers compounding organic search systems for Egyptian companies, clinics, real estate
                developers, factories, and WooCommerce/Shopify stores—backed by transparent{" "}
                <strong className="text-cyan-300">Google Search Console</strong> proof.
              </p>

              {/* Key Trust Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "Google Search Console Verified Traffic Growth",
                  "Cairo & Alexandria Google Maps Local 3-Pack",
                  "WooCommerce, Shopify & EasyOrder Store SEO",
                  "ChatGPT, Perplexity & Google AI Overviews (GEO)",
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

              {/* Primary CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={heroAuditWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Request Free Egypt SEO Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <span>View EGP Packages</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  Direct WhatsApp: <strong className="text-neutral-200">{WHATSAPP_NUMBER_DISPLAY}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Flexible Monthly EGP Plans — Zero Annual Lock-In
                </span>
              </div>
            </div>

            {/* Hero Right Visual: Live Egypt GSC & Google Maps Local 3-Pack Simulator */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Egypt Live Search Telemetry
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    +310% Organic Growth
                  </span>
                </div>

                {/* GSC Metrics Strip */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Total Clicks</div>
                    <div className="text-xl font-black text-blue-400">41.4K</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">↑ 295% YoY</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Impressions</div>
                    <div className="text-xl font-black text-cyan-300">1.32M</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">↑ Egypt SERP</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Avg. Position</div>
                    <div className="text-xl font-black text-amber-300">#2.1</div>
                    <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">Money Terms</div>
                  </div>
                </div>

                {/* Visual Growth Bars */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      90–180 Day Organic Click Trajectory
                    </span>
                    <span className="text-[11px] text-neutral-500">GSC Verified</span>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-24 pt-2">
                    {[16, 23, 33, 45, 58, 71, 86, 100].map((h, i) => (
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

                {/* Egypt Google Maps Local 3-Pack Preview */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      Egypt Local 3-Pack Snapshot
                    </span>
                    <span className="text-[11px] text-amber-300 font-semibold">New Cairo • Zayed • Alex</span>
                  </div>
                  {[
                    { rank: "#1", name: "Your Egypt Brand (Optimized by UNIQUE)", stat: "+185 Calls/mo" },
                    { rank: "#2", name: "Local Competitor A", stat: "No Schema" },
                    { rank: "#3", name: "Local Competitor B", stat: "Slow Mobile" },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs border ${
                        idx === 0
                          ? "bg-blue-500/12 border-blue-500/40 text-white"
                          : "bg-black/60 border-neutral-800/80 text-neutral-400"
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          className={`px-1.5 py-0.5 rounded font-black text-[10px] ${
                            idx === 0 ? "bg-emerald-500/20 text-emerald-300" : "bg-neutral-800 text-neutral-400"
                          }`}
                        >
                          {row.rank}
                        </span>
                        <span className="truncate font-semibold">{row.name}</span>
                      </div>
                      <span className={`shrink-0 ml-2 text-[11px] font-bold ${idx === 0 ? "text-amber-300" : "text-neutral-500"}`}>
                        {row.stat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4 Hero KPI Cards */}
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
          3. SEO VS PAID ADS VS CHEAP SEO COMPARISON TABLE
      ==================================================================== */}
      <section className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Egypt Growth Economics"
            title="Why Smart Egyptian Founders Invest in"
            highlight="Compounding SEO Over Ads Alone"
            subtitle="Compare UNIQUE's engineered Egypt SEO system against paid social/search ads and low-cost generic SEO offers."
          />

          <div className="overflow-x-auto rounded-3xl border border-neutral-800 bg-[#060911]">
            <table className="w-full text-left border-collapse min-w-[780px]">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-950/90">
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                    Evaluation Criterion
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-cyan-300 bg-blue-500/10">
                    UNIQUE Egypt SEO System
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-amber-300">
                    Paid Ads (Meta / Google)
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                    Cheap / Generic SEO
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80 text-sm">
                {SEO_VS_ADS_COMPARISON_EGYPT.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/40 transition">
                    <td className="py-4 px-6 font-bold text-white">{row.criterion}</td>
                    <td className="py-4 px-6 text-emerald-300 font-semibold bg-blue-500/[0.04]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.uniqueSeo}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-neutral-300">{row.paidAds}</td>
                    <td className="py-4 px-6 text-neutral-400">{row.cheapSeo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. 6 CORE EGYPT SEO SERVICES
      ==================================================================== */}
      <section id="services" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Full-Stack 360° SEO"
            title="6 Core SEO Pillars Engineered for"
            highlight="Egypt's Digital Economy"
            subtitle="End-to-end execution spanning Technical SEO, Local Maps, E-Commerce, Semantic Content, White-Hat Links, and AI Search (GEO)."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {CORE_SEO_SERVICES_EGYPT.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800/90 hover:border-blue-500/40 p-7 sm:p-8 flex flex-col justify-between transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      {service.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-1.5">{service.title}</h3>
                  <div className="text-xs font-semibold text-blue-400 mb-4">{service.arabicTag}</div>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-5">{service.summary}</p>

                  <div className="rounded-2xl bg-emerald-500/8 border border-emerald-500/25 p-4 mb-6">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-300 mb-1">
                      Direct Impact in Egypt
                    </div>
                    <p className="text-xs text-neutral-200 leading-relaxed">
                      {service.businessImpactInEgypt}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                      Execution Checklist
                    </div>
                    <ul className="space-y-2">
                      {service.executionChecklist.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.deliverables.map((del, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-300"
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(service.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-neutral-950 hover:bg-blue-600/20 border border-neutral-800 hover:border-blue-500/50 text-sm font-bold text-cyan-300 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss This Pillar on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. HYPER-LOCAL EGYPT COMMERCIAL & INDUSTRIAL ZONES
      ==================================================================== */}
      <section id="zones" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Hyper-Local Geo-Targeting"
            title="Localized SEO Campaigns Across"
            highlight="Egypt's 4 Key Business Corridors"
            subtitle="We tailor keyword intent, district landing pages, and Google Maps signals for every major Egyptian business hub."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {EGYPT_LOCAL_SEO_ZONES.map((zone) => (
              <div
                key={zone.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-cyan-500/40 p-7 transition"
              >
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{zone.badgeTag}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                  {zone.zoneTitle}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                  {zone.commercialCharacter}
                </p>

                <div className="mb-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2.5">
                    High-ROI Verticals
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {zone.targetBusinesses.map((biz, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-200 font-medium"
                      >
                        {biz}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {zone.localSeoActions.map((act, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
                  {zone.localKeywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-[11px] text-amber-300 font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. EGYPT E-COMMERCE SEO (WOOCOMMERCE, SHOPIFY, EASYORDER, NEXT.JS)
      ==================================================================== */}
      <section id="ecommerce" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Egyptian E-Commerce SEO"
            title="Specialized Store SEO for"
            highlight="WooCommerce, Shopify & EasyOrder"
            subtitle="Turn daily Google product searches into commission-free orders with clean faceted indexing and EGP Product Schema."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {ECOMMERCE_SEO_PLATFORMS_EGYPT.map((plat) => (
              <div
                key={plat.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-blue-500/40 p-7 flex flex-col justify-between transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="inline-flex items-center gap-2 text-cyan-300 font-extrabold text-sm">
                      <ShoppingBag className="w-4 h-4 text-blue-400" />
                      <span>{plat.platformName}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] font-bold text-amber-300">
                      {plat.marketShareTag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3">{plat.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                    {plat.painPointSolved}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {plat.technicalSolutions.map((sol, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-2xl bg-blue-500/10 border border-blue-500/25 p-3.5 mb-6">
                    <div className="text-[11px] uppercase font-bold text-blue-300 mb-0.5">
                      Expected Store Impact
                    </div>
                    <div className="text-sm font-extrabold text-white">{plat.expectedGrowth}</div>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(plat.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600/20 to-cyan-500/20 hover:from-blue-600 hover:to-cyan-500 border border-blue-500/35 text-white text-xs sm:text-sm font-bold transition"
                >
                  <span>Optimize My {plat.platformName} Store</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. DOCUMENTED GSC RESULTS + 6 EGYPTIAN SECTORS
      ==================================================================== */}
      <section id="results" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Verified Search Console Proof"
            title="Real Organic Growth Across"
            highlight="Egyptian Businesses & Stores"
            subtitle="Measured strictly by Google Search Console clicks, Maps calls, and qualified revenue—not empty vanity metrics."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-20">
            {GSC_DOCUMENTED_RESULTS_EGYPT.map((cs) => (
              <div
                key={cs.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-emerald-500/40 p-7 flex flex-col justify-between transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                      {cs.sector}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-400">{cs.timeframe}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2">{cs.projectTitle}</h3>
                  <div className="text-xs text-cyan-300 font-medium mb-4">
                    {cs.cityInEgypt} • {cs.platform}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3">
                      <div className="text-[10px] text-neutral-500 uppercase">Before → After Clicks</div>
                      <div className="text-sm font-black text-white mt-1">
                        {cs.clicksBefore} → <span className="text-emerald-400">{cs.clicksAfter}</span>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3">
                      <div className="text-[10px] text-neutral-500 uppercase">Revenue / Lead Lift</div>
                      <div className="text-sm font-black text-amber-300 mt-1">{cs.revenueGrowth}</div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                    {cs.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80">
                  <div className="text-[11px] text-neutral-500 font-bold uppercase mb-2">
                    Ranked Commercial Terms ({cs.impressionsAfter})
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.topKeywordsRanked.map((kw, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-200"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SectionHeader
            badge="Sector Playbooks"
            title="Specialized SEO Strategies for"
            highlight="6 High-Value Egyptian Verticals"
            subtitle="Every sector gets tailored search intent mapping, schema markup, and conversion funnels."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EGYPT_6_SECTORS.map((sec) => (
              <div
                key={sec.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-blue-500/40 p-6 flex flex-col justify-between transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-cyan-300">{sec.projectsCount}</span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-bold text-emerald-300">
                      {sec.avgGrowth}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2.5">{sec.sectorName}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                    {sec.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {sec.keySeoFocus.map((focus, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-200">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsAppUrl(sec.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-cyan-300 transition"
                >
                  <span>Request Sector SEO Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. UNIQUE'S 4 SEO AUDIT TABLES + LIVE TERMINAL + REAL PORTFOLIO
      ==================================================================== */}
      <section id="audit-tables" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="UNIQUE Engineering Standard"
            title="Our 4-Table Technical & Content"
            highlight="SEO Execution Checklist"
            subtitle="Full transparency across every audit, On-Page fix, White-Hat link, and monthly Search Console report."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {UNIQUE_4_SEO_TABLES_EGYPT.map((table) => (
              <div
                key={table.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 p-6 sm:p-7"
              >
                <div className="flex items-center justify-between gap-3 border-b border-neutral-800 pb-4 mb-5">
                  <h3 className="text-lg font-extrabold text-white">{table.tableTitle}</h3>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300">
                    {table.tableBadge}
                  </span>
                </div>
                <div className="space-y-2.5">
                  {table.items.map((item, i) => (
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

          {/* Live SEO Diagnostic Terminal + Real Portfolio Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
            <div className="lg:col-span-6 rounded-3xl bg-[#050811] border border-cyan-500/30 p-6 font-mono text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="ml-2 text-neutral-400 font-sans font-bold">
                      unique-seo-cli — Egypt Diagnostic Engine
                    </span>
                  </div>
                  <span className="text-emerald-400">ONLINE</span>
                </div>
                <div className="space-y-2.5 text-neutral-300 leading-relaxed">
                  <div>
                    <span className="text-cyan-400">$</span> unique-audit --target=&quot;egypt-eg&quot; --domain=&quot;uniquee-ws.com&quot;
                  </div>
                  <div className="text-emerald-400">
                    ✓ [Core Web Vitals] Mobile LCP: 1.0s | INP: 39ms | CLS: 0.00
                  </div>
                  <div className="text-emerald-400">
                    ✓ [Geo-Schema] ProfessionalService + GeoCoordinates (30.0444, 31.2357) Valid
                  </div>
                  <div className="text-emerald-400">
                    ✓ [Bilingual Hreflang] en-EG &lt;-&gt; ar-EG Reciprocal Mapping Verified
                  </div>
                  <div className="text-blue-300">
                    ✓ [AI Search / GEO] Entity Citation Readiness: 98/100 (ChatGPT &amp; Perplexity)
                  </div>
                  <div className="text-amber-300">
                    ✓ [Egypt Maps 3-Pack] New Cairo • Zayed • Maadi • Alexandria Active
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between font-sans">
                <span className="text-neutral-400 text-xs">Official Platform: www.uniquee-ws.com</span>
                <a
                  href={heroAuditWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white font-bold text-xs inline-flex items-center gap-1"
                >
                  <span>Run My Free Audit</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl bg-[#070B14] border border-neutral-800 p-6 sm:p-7">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                    Verified UNIQUE Portfolio
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    Featured Egypt &amp; Regional Projects
                  </h3>
                </div>
                <Award className="w-6 h-6 text-amber-400 shrink-0" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {UNIQUE_PORTFOLIO_PROJECTS.map((proj, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-blue-500/40 p-3.5 transition"
                  >
                    <div className="text-sm font-bold text-white mb-0.5">{proj.name}</div>
                    <div className="text-[11px] text-cyan-300 font-medium">{proj.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          9. 90-DAY EGYPT SEO EXECUTION ROADMAP
      ==================================================================== */}
      <section className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Predictable Execution"
            title="Your 90-Day Egypt SEO"
            highlight="Growth & Ranking Roadmap"
            subtitle="Clear monthly milestones from Day 1 technical cleanup to Day 90 Page-1 commercial keyword dominance."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {NINETY_DAY_ROADMAP_EGYPT.map((phase) => (
              <div
                key={phase.phaseNum}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-extrabold text-cyan-300">
                      Phase {phase.phaseNum}
                    </span>
                    <span className="text-xs font-bold text-amber-300">{phase.timeframe}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">{phase.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-5">
                    {phase.description}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {phase.tasks.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-3.5">
                  <div className="text-[10px] uppercase font-bold text-emerald-300 mb-0.5">
                    Deliverable Milestone
                  </div>
                  <div className="text-xs font-bold text-white">{phase.milestoneOutput}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          10. TRANSPARENT EGP MONTHLY SEO PACKAGES
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Transparent Egypt Pricing"
            title="Monthly Egypt SEO Packages"
            highlight="in Egyptian Pounds (EGP)"
            subtitle="All-inclusive technical, content, and White-Hat link execution with direct Google Search Console reporting."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {EGYPT_SEO_PACKAGES_EGP.map((pkg) => (
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
                      {pkg.badgeText}
                    </span>
                    <span className="text-xs font-bold text-amber-300">{pkg.keywordsCount}</span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2">{pkg.packageName}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">{pkg.idealFor}</p>

                  <div className="flex items-baseline gap-2 pb-6 mb-6 border-b border-neutral-800">
                    <span className="text-4xl font-black text-white">{pkg.priceEGP}</span>
                    <span className="text-sm font-bold text-cyan-300">{pkg.billingCycle}</span>
                  </div>

                  <div className="mb-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                      Core Monthly Execution
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.includedServices.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                      Technical &amp; Growth Extras
                    </div>
                    <ul className="space-y-2">
                      {pkg.technicalAndContentFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-3 text-xs text-neutral-300 mb-6">
                    <strong className="text-blue-300">Reporting:</strong> {pkg.reportingAndSupport}
                  </div>
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
                  <span>Start {pkg.packageName}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          11. CHATGPT / AI SEARCH (GEO) Q&A + FAQ + SEMANTIC CLOUD
      ==================================================================== */}
      <section id="faq" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="AI Search & GEO Readiness"
            title="Questions Egyptian Founders Ask"
            highlight="ChatGPT & Google Before Hiring"
            subtitle="Clear, verifiable answers on 2026 EGP SEO costs, realistic timelines, and AI search readiness."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {EGYPT_CHATGPT_QUESTIONS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 p-6 sm:p-7"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-[11px] font-bold text-cyan-300 mb-3">
                  {item.tag}
                </span>
                <h3 className="text-lg font-extrabold text-white mb-3">{item.q}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <SectionHeader
            badge="Frequently Asked Questions"
            title="Everything About Hiring an"
            highlight="SEO Company in Egypt"
            subtitle="Direct answers on free audits, flexible monthly terms, platforms, content, and Search Console reporting."
          />

          <div className="max-w-4xl mx-auto space-y-4 mb-20">
            {EGYPT_SEO_FAQS.map((faq) => (
              <details
                key={faq.id}
                className="group rounded-2xl bg-[#070B14] border border-neutral-800 open:border-blue-500/40 p-6 transition"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
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

          {/* Semantic Keywords Cloud */}
          <div className="rounded-3xl bg-[#070B14] border border-neutral-800 p-7 sm:p-8">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              Egypt Semantic Search Coverage
            </div>
            <h3 className="text-lg font-extrabold text-white mb-5">
              Core Commercial &amp; Local SEO Clusters We Target Across Egypt
            </h3>
            <div className="flex flex-wrap gap-2">
              {EGYPT_SEMANTIC_KEYWORDS_EN.map((kw, idx) => (
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
      </section>

      {/* ====================================================================
          12. FINAL FREE EGYPT SEO AUDIT CTA & FOOTER
      ==================================================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B1730] via-[#070D1A] to-[#051418] border border-blue-500/35 p-8 sm:p-12 lg:p-14 text-center shadow-2xl shadow-blue-950/50">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Technical SEO Audit + Egypt Competitor Gap Report in 24 Hours</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Ready to Own Page #1 of Google in{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Egypt?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              Send us your website or online store URL on WhatsApp and receive a complimentary
              24-hour technical audit, Egyptian competitor keyword analysis, and a tailored 90-day
              ranking roadmap.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroAuditWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Claim Your Free Egypt SEO Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:+${WHATSAPP_INTERNATIONAL}`}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-black/70 border border-neutral-700 hover:border-cyan-400 text-white font-bold text-base transition"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>{WHATSAPP_NUMBER_DISPLAY}</span>
              </a>
            </div>
          </div>

          <footer className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <div>
              © {new Date().getFullYear()} UNIQUE Digital Agency — Egypt SEO &amp; Search Growth Engineering.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/egypt-seo" className="hover:text-cyan-300 transition">
                شركة سيو في مصر (AR)
              </Link>
              <Link href="/en/egypt-web-design" className="hover:text-cyan-300 transition">
                Web Design Egypt
              </Link>
              <Link href="/en/saudi-seo" className="hover:text-cyan-300 transition">
                Saudi Arabia SEO
              </Link>
              <Link href="/en/riyadh-seo" className="hover:text-cyan-300 transition">
                Riyadh SEO
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}