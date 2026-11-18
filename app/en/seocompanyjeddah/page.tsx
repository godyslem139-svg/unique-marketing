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
    "SEO Company in Jeddah | #1 SEO Agency & AI Search Experts in Jeddah | Unique",
  description:
    "Leading SEO Company in Jeddah, Saudi Arabia. We rank your business #1 on Google.com.sa, Google Maps & AI Search (ChatGPT / AI Overviews). 90-day verified SEO growth for clinics, contracting, real estate & Salla, Zid, and Shopify stores in Jeddah.",
  keywords: [
    "SEO Company in Jeddah",
    "Best SEO Agency Jeddah",
    "SEO Services in Jeddah",
    "Local SEO Jeddah",
    "Google Maps SEO Jeddah",
    "E-commerce SEO Jeddah",
    "Salla SEO Agency Jeddah",
    "Zid SEO Services Jeddah",
    "Shopify SEO Jeddah",
    "Technical SEO Consultant Jeddah",
    "AI Search Optimization GEO Jeddah",
    "Search Engine Optimization Jeddah KSA",
    "Medical Clinic SEO Jeddah",
    "Real Estate SEO Jeddah",
    "UNIQUE Digital Agency",
  ],
  authors: [{ name: "UNIQUE Digital Agency" }],
  publisher: "UNIQUE",
  metadataBase: new URL("https://marketing-beta-gold-30.vercel.app"),
  alternates: {
    canonical: "/en/jeddah-seo",
    languages: {
      "en-SA": "/en/jeddah-seo",
      "ar-SA": "/jeddah-seo",
      en: "/en/jeddah-seo",
      ar: "/jeddah-seo",
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
      "SEO Company in Jeddah | Dominate Google Page #1, Maps & AI Search | Unique",
    description:
      "Your strategic SEO partner in Jeddah and Makkah Province. Full-stack Technical SEO, Local 3-Pack Maps domination across Jeddah districts, and E-Commerce SEO for Salla, Zid & Shopify.",
    url: "https://marketing-beta-gold-30.vercel.app/en/jeddah-seo",
    siteName: "Unique Agency",
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Company in Jeddah | Best SEO Agency in Jeddah KSA | Unique",
    description:
      "Verified 90-day Google Search Console growth for clinics, contracting firms, real estate developers, and online stores in Jeddah.",
  },
};

// ============================================================================
// 3. TYPESCRIPT INTERFACES FOR JEDDAH ENGLISH SEO PAGE
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
  businessImpactInJeddah: string;
  executionChecklist: string[];
  deliverables: string[];
  whatsappText: string;
}

interface JeddahDistrictZone {
  id: string;
  districtTitle: string;
  arabicTag: string;
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
  districtInJeddah: string;
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

interface SeoVsAdsRow {
  criterion: string;
  uniqueSeo: string;
  paidAds: string;
  traditionalOrCheapSeo: string;
}

interface JeddahSectorItem {
  id: string;
  sectorName: string;
  projectsCount: string;
  avgGrowth: string;
  description: string;
  keySeoFocus: string[];
  whatsappMsg: string;
}

interface NinetyDayPhase {
  phaseNum: string;
  timeframe: string;
  title: string;
  description: string;
  tasks: string[];
  milestoneOutput: string;
}

interface JeddahSeoPackageSAR {
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

interface ChatGptClientQuestion {
  tag: string;
  q: string;
  a: string;
}

interface JeddahSeoFaq {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// 4. COMPREHENSIVE JEDDAH SEO DATA ARRAYS (HYPER-LOCALIZED ENGLISH COPY)
// ============================================================================

const HERO_KPIS: HeroKpiCard[] = [
  {
    id: "kpi-jeddah-clicks",
    value: "+390%",
    title: "Average Organic Traffic Growth in Jeddah",
    subtitle: "Verified click and impression surges inside Google Search Console for our Jeddah & Makkah clients",
    accent: "emerald",
  },
  {
    id: "kpi-jeddah-maps",
    value: "Top #3",
    title: "Jeddah Google Maps Local Pack",
    subtitle: "Dominating local searches across Tahlia St, Al Rawdah, Obhur, Al Salamah & King Abdulaziz Road",
    accent: "cyan",
  },
  {
    id: "kpi-jeddah-stores",
    value: "Salla • Zid • Shopify",
    title: "Jeddah E-Commerce SEO Leaders",
    subtitle: "Turning Jeddah online stores into 24/7 organic sales machines without burning daily ad budgets",
    accent: "amber",
  },
  {
    id: "kpi-jeddah-ai",
    value: "Google + AI",
    title: "SERP #1 & AI Search (ChatGPT / GEO)",
    subtitle: "Dual engineering to rank #1 on Google.com.sa and in ChatGPT & Google AI Overviews recommendations",
    accent: "blue",
  },
];

const CORE_SEO_SERVICES_JEDDAH: SeoServicePillar[] = [
  {
    id: "jed-en-technical",
    number: "01",
    badge: "The Engineering Foundation for Fast Rankings",
    title: "Advanced Technical SEO & Core Web Vitals Engineering",
    arabicSubtitle: "الفحص الهندسي الشامل والسيو التقني المتقدم في جدة",
    summary:
      "We start by auditing your Jeddah website or online store using Screaming Frog, Google Search Console, and Lighthouse. Our in-house developers fix every broken canonical, indexation bottleneck, and network payload issue holding your site back on Google.com.sa.",
    businessImpactInJeddah:
      "Accelerates Googlebot indexation and delivers a 99/100 mobile PageSpeed score across Jeddah 5G/4G networks within the first 14 days.",
    executionChecklist: [
      "Fixing Non-Indexable Canonical errors, 404 dead links, redirect chains (301), and crawl budget waste",
      "Optimizing Core Web Vitals (LCP < 0.8s, CLS = 0.00, fast INP) and eliminating enormous network payloads",
      "Deploying geo-targeted Schema.org JSON-LD for Jeddah (`GeoCoordinates`, LocalBusiness, MedicalClinic, Product SAR, FAQPage)",
      "Configuring dynamic XML Sitemaps, Robots.txt directives, and instant cache revalidation",
      "Direct code-level execution by our engineers on Next.js 16, WordPress/Elementor Pro, Salla, Zid, and Shopify",
    ],
    deliverables: [
      "Full Before/After Screaming Frog Technical Audit",
      "95-100 Mobile PageSpeed Insights Score",
      "Jeddah Geo-Targeted Schema.org & Zero GSC Errors",
    ],
    whatsappText: "Hello Unique Agency, I want a Technical SEO Audit & Speed Optimization for my website in Jeddah.",
  },
  {
    id: "jed-en-local-maps",
    number: "02",
    badge: "Capture High-Intent Local Buyers in Jeddah",
    title: "Jeddah Local SEO & Google Business Profile (Maps 3-Pack) Domination",
    arabicSubtitle: "السيو المحلي وتصدر خرائط قوقل في أحياء جدة",
    summary:
      "Most customers in Jeddah search with local intent—such as 'best dental clinic in Jeddah', 'contracting company Jeddah', or 'restaurant near me in Tahlia / Obhur'. We rank your business in the Top 3 Google Maps Local Pack and localized organic results.",
    businessImpactInJeddah:
      "Generates a 310%+ surge in direct phone calls, WhatsApp inquiries, and showroom/clinic visits across Jeddah.",
    executionChecklist: [
      "Complete optimization and verification of your Google Business Profile (GBP) with Jeddah coordinates, categories, and geo-tagged media",
      "Building unique, non-duplicate landing pages targeting Jeddah neighborhoods and the Jeddah-Makkah corridor",
      "Standardizing NAP (Name, Address, Phone) citations across authoritative Saudi and Red Sea business directories",
      "Implementing a systematic customer review generation and keyword-rich response strategy",
    ],
    deliverables: [
      "Fully Optimized Jeddah Google Business Profile (GBP)",
      "Localized Jeddah District & Corridor Landing Pages",
      "Top 3 Google Maps Local Pack Ranking Execution",
    ],
    whatsappText: "Hello Unique Agency, I want Local SEO and Google Maps Top-3 ranking for my business in Jeddah.",
  },
  {
    id: "jed-en-ecommerce",
    number: "03",
    badge: "Scale Online Store Orders 24/7",
    title: "Jeddah E-Commerce SEO (Salla, Zid, Shopify, WooCommerce & EasyOrder)",
    arabicSubtitle: "سيو المتاجر الإلكترونية في جدة (سلة، زد، شوبيفاي)",
    summary:
      "We help Jeddah merchants break free from expensive Snapchat and TikTok ad dependency. By restructuring your store categories, product copy, and technical schema on Salla, Zid, or Shopify, we turn your store into a self-sustaining organic sales machine.",
    businessImpactInJeddah:
      "Reduces Customer Acquisition Cost (CAC) by up to 60% while driving daily organic orders from Jeddah and across KSA.",
    executionChecklist: [
      "Restructuring category and sub-collection trees on Salla, Zid, and Shopify around high-volume buyer searches",
      "Writing persuasive, SEO-optimized bilingual (Arabic & English) product titles and descriptions",
      "Activating Product Schema markup to display prices in Saudi Riyals (SAR), stock status, and star ratings on Google",
      "Fixing duplicate filter and sorting URLs that waste crawl budget on e-commerce stores",
      "Publishing commercial buying guides that capture shoppers comparing products and route them directly to checkout",
    ],
    deliverables: [
      "Complete E-Commerce Category & Keyword Architecture",
      "Optimization of Top-Margin Products & Collections",
      "Rich SAR Product Snippets & Review Stars on SERPs",
    ],
    whatsappText: "Hello Unique Agency, I own an online store in Jeddah and want E-Commerce SEO to grow organic sales.",
  },
  {
    id: "jed-en-onpage-ctr",
    number: "04",
    badge: "Maximize Clicks & WhatsApp Conversions",
    title: "On-Page SEO, Rich Snippets CTR & Conversion Optimization (CRO)",
    arabicSubtitle: "تحسين السيو الداخلي ورفع نسبة النقر والتحويل البيعي",
    summary:
      "We engineer every page on your website to satisfy both Google's semantic algorithms and Jeddah buyer psychology. We craft magnetic Meta Titles that boost CTR, structure H1-H3 silos, and embed frictionless WhatsApp conversion funnels.",
    businessImpactInJeddah:
      "More than doubles your organic Click-Through Rate (CTR) and converts visitors into immediate WhatsApp leads.",
    executionChecklist: [
      "Writing psychological, offer-driven Meta Titles and Descriptions that stand out on Google.com.sa",
      "Structuring semantic HTML5 headings (H1, H2, H3) enriched with NLP entities and localized Jeddah terminology",
      "Building Topical Internal Linking Silos that channel authority directly into your core revenue pages",
      "Compressing images to WebP/AVIF with descriptive Alt tags and embedding Google E-E-A-T trust credentials",
    ],
    deliverables: [
      "Full On-Page Optimization Across Core Revenue Pages",
      "Internal Linking Silo Architecture",
      "CRO & Instant WhatsApp Lead Funnel Setup",
    ],
    whatsappText: "Hello Unique Agency, I need On-Page SEO and CRO optimization for my website in Jeddah.",
  },
  {
    id: "jed-en-ai-geo",
    number: "05",
    badge: "Lead the 2026 AI Search Revolution in Jeddah",
    title: "AI Search Optimization (GEO / AEO for ChatGPT & Google AI Overviews)",
    arabicSubtitle: "تحسين الظهور في نتائج الذكاء الاصطناعي ChatGPT & AI Search",
    summary:
      "Thousands of residents, expats, and corporate buyers in Jeddah now ask ChatGPT and Google AI Overviews directly for the best clinics, contractors, and stores. We implement Generative Engine Optimization (GEO) so AI engines cite and recommend your business #1.",
    businessImpactInJeddah:
      "Captures high-intent buyers using AI assistants to make purchasing decisions in Jeddah.",
    executionChecklist: [
      "Structuring direct-answer content blocks (Answer Engine Optimization - AEO) and clear comparison tables",
      "Building verified Brand Entity signals and Knowledge Graph connections for your Jeddah business",
      "Deploying interconnected JSON-LD Schema so LLMs accurately parse your services, pricing, and location",
      "Publishing authoritative guides and verified case studies that AI models cite as primary sources",
    ],
    deliverables: [
      "Full GEO & AEO Content & Schema Engineering",
      "Featured Snippet & AI Overview Answer Blocks",
      "Brand Entity Authority Setup for ChatGPT & Perplexity",
    ],
    whatsappText: "Hello Unique Agency, I want to optimize my Jeddah business for Google and AI Search (ChatGPT / GEO).",
  },
  {
    id: "jed-en-content-links",
    number: "06",
    badge: "100% Safe White-Hat Domain Authority",
    title: "Topical Authority Content & White-Hat Saudi Link Building",
    arabicSubtitle: "المحتوى الاستراتيجي وبناء الباك لينك الآمن والموثوق",
    summary:
      "We build undeniable topical authority for your Jeddah website through expert bilingual content clusters backed by contextual White-Hat Dofollow backlinks and Guest Posts on reputable Saudi and GCC publications.",
    businessImpactInJeddah:
      "Safely increases your Domain Rating (DR) and secures long-term Top-3 rankings for competitive keywords in Jeddah.",
    executionChecklist: [
      "Creating a localized content calendar addressing every commercial and informational query in your Jeddah niche",
      "Publishing contextual Guest Posts and Digital PR features on high-traffic Saudi and Arab news/industry portals",
      "Maintaining a natural, penalty-proof Anchor Text profile across brand, local, and commercial terms",
      "Auditing your backlink profile and disavowing toxic or spammy legacy links",
    ],
    deliverables: [
      "Expert Bilingual SEO Content Every Month",
      "High-DR Contextual White-Hat Backlinks",
      "Transparent Monthly Link & Ranking Report",
    ],
    whatsappText: "Hello Unique Agency, I want a Content & White-Hat Link Building strategy for my website in Jeddah.",
  },
];

const JEDDAH_DISTRICTS_ZONES: JeddahDistrictZone[] = [
  {
    id: "dist-en-tahlia-rawdah",
    districtTitle: "Tahlia Street, Al Rawdah, Al Khalidiyah & Al Zahra Corridor",
    arabicTag: "محور التحلية، الروضة، الخالدية، والزهراء",
    commercialCharacter:
      "Jeddah's premier hub for aesthetic and dental clinics, luxury fashion and perfume boutiques, specialty cafes, fine dining, and interior design studios.",
    targetBusinesses: ["Dental, Dermatology & Cosmetic Clinics", "Luxury Perfume, Oud & Fashion Brands", "Specialty Cafes & Fine Dining Restaurants", "Interior Design & Architecture Studios"],
    localSeoActions: [
      "Targeting district-specific search queries (Tahlia, Al Rawdah, Al Khalidiyah, Al Zahra) across landing pages and Google Maps",
      "Dominating mobile 'near me' searches for high-value patients and shoppers",
      "Activating Rich Review Stars and appointment schema to maximize direct bookings",
    ],
    localKeywords: ["best dental clinic jeddah tahlia", "aesthetic clinic al rawdah jeddah", "interior design company jeddah"],
  },
  {
    id: "dist-en-obhur-corniche-kingroad",
    districtTitle: "King Abdulaziz Road, Al Shati, Corniche & Obhur (North/South)",
    arabicTag: "طريق الملك عبدالعزيز، الشاطئ، الكورنيش، وأبحر",
    commercialCharacter:
      "The epicenter of Jeddah's luxury real estate developments, commercial towers, Red Sea beach resorts, yacht charters, and luxury car rentals.",
    targetBusinesses: ["Real Estate Developers & Brokerages", "Beach Resorts, Chalets & Marine Tourism", "Corporate Headquarters & FinTech", "Yacht Charter & Luxury Car Rental"],
    localSeoActions: [
      "Building bilingual (Arabic & English) property and tourism silos targeting local buyers, expats, and tourists",
      "Capturing high-ticket investment queries for North Obhur, Al Shati, and Jeddah Waterfront projects",
      "Achieving sub-0.8s mobile load speeds for high-resolution project galleries and videos",
    ],
    localKeywords: ["real estate company jeddah", "apartments for sale obhur jeddah", "beach resorts jeddah corniche"],
  },
  {
    id: "dist-en-salamah-hamra-central",
    districtTitle: "Al Salamah, Al Hamra, Al Naeem & Al Faisaliyah Corridor",
    arabicTag: "محور السلامة، الحمراء، النعيم، والفيصلية",
    commercialCharacter:
      "A dense commercial zone housing corporate service providers, medical centers, law firms, training academies, and specialized retail stores.",
    targetBusinesses: ["Law Firms & Legal Consultants", "Medical Centers & Diagnostic Labs", "B2B Agencies & Software Companies", "Training Academies & Educational Institutes"],
    localSeoActions: [
      "Establishing Topical Authority clusters that position your firm as the #1 choice in central and north Jeddah",
      "Connecting local branch profiles to detailed service pages for Top-3 Map Pack visibility",
      "Optimizing lead generation forms and instant WhatsApp consultation buttons",
    ],
    localKeywords: ["best law firm in jeddah", "seo company in jeddah", "accredited training center jeddah"],
  },
  {
    id: "dist-en-industrial-port-makkah",
    districtTitle: "Jeddah Industrial City, Islamic Port & Jeddah-Makkah Corridor",
    arabicTag: "المنطقة الصناعية، ميناء جدة الإسلامي، ومحور جدة - مكة",
    commercialCharacter:
      "The industrial, logistics, and contracting backbone of Western Saudi Arabia—covering steel warehouses, general contracting, customs clearance, and Hajj/Umrah transport.",
    targetBusinesses: ["General Contracting, Steel Hangars & Shade Structures", "Freight Forwarding, Customs Clearance & Logistics", "Factories & B2B Industrial Suppliers", "Umrah Hospitality & Transport Fleets"],
    localSeoActions: [
      "Targeting high-value B2B procurement and RFQ keywords across Jeddah and Makkah",
      "Dominating search terms for sandwich panels, steel hangars, car parking shades, and port logistics",
      "Regional SEO architecture serving clients across Jeddah, Makkah, and Taif simultaneously",
    ],
    localKeywords: ["contracting company jeddah", "steel hangar contractor jeddah", "customs clearance jeddah islamic port"],
  },
];

const ECOMMERCE_SEO_PLATFORMS_JEDDAH: EcommerceSeoPlatform[] = [
  {
    id: "jed-en-salla",
    platformName: "Salla Store SEO in Jeddah (سيو متاجر سلة)",
    marketShareTag: "#1 Platform for Jeddah Online Merchants",
    title: "Scale Non-Ad Organic Orders for Your Jeddah Salla Store",
    painPointSolved:
      "Thousands of Salla stores in Jeddah have great products but rely 100% on paid Snapchat/TikTok ads—the moment ad spend pauses, daily orders stop.",
    technicalSolutions: [
      "Configuring advanced Salla SEO settings, custom robots.txt rules, and verified GSC/GA4 tracking",
      "Rewriting category and product titles/descriptions around high-intent Jeddah and Saudi buyer keywords",
      "Custom CSS UI enhancements to elevate brand prestige, mobile speed, and checkout conversion",
      "Publishing commercial blog clusters on Salla that drive ready-to-buy shoppers directly to product pages",
    ],
    expectedGrowth: "+260% to +420% growth in organic non-ad traffic and orders within 90 days",
    whatsappMsg: "Hello Unique Agency, I have a Salla store in Jeddah and want to scale organic sales with SEO.",
  },
  {
    id: "jed-en-zid",
    platformName: "Zid Store SEO in Jeddah (سيو متاجر زد)",
    marketShareTag: "Fast-Growing Retail Ecosystem in KSA",
    title: "Rank Your Zid Store Categories #1 on Google Saudi Arabia",
    painPointSolved:
      "Flat category structures and missing semantic copy on collection pages prevent Zid stores from ranking for high-volume retail keywords.",
    technicalSolutions: [
      "Architecting a hierarchical category and sub-category tree targeting Jeddah and national retail demand",
      "Compressing product imagery and scripts for sub-second mobile loading",
      "Adding keyword-rich semantic copy blocks to category headers and footers",
      "Deploying SAR Product Schema and building safe authority backlinks to core store collections",
    ],
    expectedGrowth: "Sustained Page #1 visibility for commercial retail categories and lower CAC",
    whatsappMsg: "Hello Unique Agency, I have a Zid store in Jeddah and need a complete E-Commerce SEO strategy.",
  },
  {
    id: "jed-en-shopify-woo",
    platformName: "Shopify, WooCommerce & EasyOrder SEO",
    marketShareTag: "For D2C Brands & Custom Storefronts",
    title: "Enterprise Bilingual SEO for Shopify & WooCommerce in Jeddah",
    painPointSolved:
      "Duplicate `/collections/` vs `/products/` URLs in Shopify and heavy plugin bloat in WooCommerce that hurt Core Web Vitals and indexation.",
    technicalSolutions: [
      "Fixing Shopify Liquid internal links to enforce canonical product URLs and eliminate crawl waste",
      "Speed engineering to achieve 95+ PageSpeed alongside SAR Product & Review Star Schema",
      "Bilingual Arabic & English (`ar-SA` / `en-SA`) store optimization to capture all Jeddah demographics",
      "CRO optimization for Tabby, Tamara, Apple Pay, and one-page COD checkouts",
    ],
    expectedGrowth: "Total domination of brand and commercial product searches in Jeddah and KSA",
    whatsappMsg: "Hello Unique Agency, I run a Shopify / WooCommerce store in Jeddah and want expert SEO.",
  },
];

const GSC_DOCUMENTED_RESULTS_JEDDAH: GscCaseStudy[] = [
  {
    id: "jed-en-gsc-1",
    sector: "Multi-Specialty Dental, Dermatology & Cosmetic Clinic",
    districtInJeddah: "Jeddah — Al Rawdah & Tahlia St",
    platform: "WordPress & Elementor Pro",
    projectTitle: "From Page 4 to #1 in Jeddah & Tripling Monthly Patient Bookings",
    timeframe: "Within 75 Days",
    clicksBefore: "1,380 clicks/mo",
    clicksAfter: "29,600 clicks/mo",
    impressionsAfter: "390,000+ Local Jeddah Impressions",
    revenueGrowth: "+295% Surge in Direct WhatsApp & Phone Appointments",
    topKeywordsRanked: ["best dental clinic in jeddah", "hollywood smile jeddah", "laser clinic tahlia jeddah"],
    summary:
      "Engineered dedicated treatment and doctor profile pages aligned with Google healthcare E-E-A-T standards and dominated the Jeddah Google Maps Local 3-Pack.",
  },
  {
    id: "jed-en-gsc-2",
    sector: "General Contracting, Steel Hangars, Shades & Sandwich Panel",
    districtInJeddah: "Jeddah & Makkah Corridor",
    platform: "Next.js 16 + Sanity CMS",
    projectTitle: "Ranking Top #1–#3 for 55+ High-Contract B2B Construction Keywords in Jeddah",
    timeframe: "Within 60 Days",
    clicksBefore: "490 clicks/mo",
    clicksAfter: "24,300 clicks/mo",
    impressionsAfter: "310,000+ High-Intent B2B Searches",
    revenueGrowth: "+430% Growth in Site Inspection & RFQ Inquiries",
    topKeywordsRanked: ["car parking shades jeddah", "sandwich panel contractor jeddah", "steel hangar construction jeddah"],
    summary:
      "Built ultra-fast Next.js service silos (99/100 PageSpeed) with compressed project video galleries, localized Jeddah/Makkah pages, and LocalBusiness Schema.",
  },
  {
    id: "jed-en-gsc-3",
    sector: "Luxury Oud, Bakhoor & Niche Perfumes Brand",
    districtInJeddah: "Jeddah (Nationwide KSA Shipping)",
    platform: "Salla Store (سلة)",
    projectTitle: "Generating 36,400+ Monthly Organic Buyers Without Paid Snapchat Ads",
    timeframe: "Within 90 Days",
    clicksBefore: "1,120 clicks/mo",
    clicksAfter: "36,400 clicks/mo",
    impressionsAfter: "445,000+ Commercial Searches on Google.com.sa",
    revenueGrowth: "+350% Increase in Net Non-Ad Organic Revenue",
    topKeywordsRanked: ["perfume store jeddah", "luxury royal oud ksa", "best bakhoor gift set jeddah"],
    summary:
      "Restructured store categories, wrote persuasive bilingual copy for 160+ products, deployed SAR Product Schema with star ratings, and built safe authority links.",
  },
];

const SEO_VS_ADS_COMPARISON_JEDDAH: SeoVsAdsRow[] = [
  {
    criterion: "Long-Term Sustainability of Leads & Sales in Jeddah",
    uniqueSeo: "Compounds 24/7—continues bringing free organic clients and orders for years",
    paidAds: "Stops the exact second your daily ad budget runs out",
    traditionalOrCheapSeo: "Minimal reach or temporary spike followed by severe Google spam penalties",
  },
  {
    criterion: "Cost Per Acquisition (CAC) & ROI",
    uniqueSeo: "Zero cost per click; your acquisition cost drops every month as rankings solidify",
    paidAds: "You pay for every single click (rising CPC bidding wars in Jeddah)",
    traditionalOrCheapSeo: "Wasted budget on spun AI content and toxic links that never convert",
  },
  {
    criterion: "Brand Trust & Credibility Among Jeddah Buyers",
    uniqueSeo: "Maximum authority—Jeddah customers trust #1 organic results & Map Pack leaders 4x more",
    paidAds: "Many buyers skip 'Sponsored' ads and click top organic brands instead",
    traditionalOrCheapSeo: "Slow, broken pages damage your corporate reputation",
  },
  {
    criterion: "Website Speed, UX & AI Search Visibility",
    uniqueSeo: "Boosts PageSpeed to 99/100, improves mobile UX, and ranks you in ChatGPT & AI Overviews",
    paidAds: "Focuses only on ad impressions without fixing your website or building digital equity",
    traditionalOrCheapSeo: "Lacks software engineering expertise in Next.js, WordPress, Salla, Zid, and AI SEO",
  },
];

const JEDDAH_12_SECTORS: JeddahSectorItem[] = [
  {
    id: "jsec-en-clinics",
    sectorName: "Dental, Dermatology & Cosmetic Clinics in Jeddah",
    projectsCount: "+65 Clinics & Centers",
    avgGrowth: "+295% Patient Bookings",
    description: "Ranking #1 for high-value treatments in Tahlia, Al Rawdah, and Al Salamah across Google Search and Maps.",
    keySeoFocus: ["Doctor & Treatment Silos", "Jeddah Maps 3-Pack", "Healthcare E-E-A-T"],
    whatsappMsg: "Hello Unique Agency, I want an SEO strategy for our medical / dental clinic in Jeddah.",
  },
  {
    id: "jsec-en-contracting",
    sectorName: "General Contracting, Shades, Sandwich Panel & Steel Hangars",
    projectsCount: "+75 Contracting Firms",
    avgGrowth: "+420% RFQ & Calls",
    description: "Dominating construction, shade structures, sandwich panel, and warehouse keywords in Jeddah & Makkah.",
    keySeoFocus: ["Localized Service Pages", "Fast Project Galleries", "99/100 Mobile Speed"],
    whatsappMsg: "Hello Unique Agency, I want an SEO strategy for our contracting company in Jeddah.",
  },
  {
    id: "jsec-en-ecommerce",
    sectorName: "E-Commerce Stores in Jeddah (Salla, Zid, Shopify)",
    projectsCount: "+95 Online Stores",
    avgGrowth: "+350% Organic Orders",
    description: "Scaling daily non-ad orders for perfumes, abayas, fashion, electronics, and specialty retail.",
    keySeoFocus: ["SAR Product Schema", "Category Architecture", "Duplicate Filter Fix"],
    whatsappMsg: "Hello Unique Agency, I want E-Commerce SEO for my online store in Jeddah.",
  },
  {
    id: "jsec-en-realestate",
    sectorName: "Real Estate Development, Property Sales & Interior Design",
    projectsCount: "+50 Property Brands",
    avgGrowth: "+310% Investor Leads",
    description: "Capturing apartment, villa, and commercial property buyers in Obhur, Al Shati, and North Jeddah.",
    keySeoFocus: ["Jeddah District Pages", "Project Catalogs", "Bilingual Investor SEO"],
    whatsappMsg: "Hello Unique Agency, I want an SEO strategy for our real estate / interior design firm in Jeddah.",
  },
  {
    id: "jsec-en-tourism",
    sectorName: "Beach Resorts, Hotels, Yacht Charter, Car Rental & Umrah",
    projectsCount: "+45 Hospitality Brands",
    avgGrowth: "+340% Direct Bookings",
    description: "Attracting domestic and international tourists and pilgrims across Jeddah Corniche, Obhur, and Makkah.",
    keySeoFocus: ["Multilingual SEO", "Corniche & Obhur Maps", "Direct Booking Funnels"],
    whatsappMsg: "Hello Unique Agency, I want an SEO strategy for our hospitality / travel / car rental business in Jeddah.",
  },
  {
    id: "jsec-en-logistics",
    sectorName: "Freight Forwarding, Customs Clearance & Port Logistics",
    projectsCount: "+35 Logistics Firms",
    avgGrowth: "+280% B2B Contracts",
    description: "Ranking #1 for importers and corporations searching for customs clearance and warehousing at Jeddah Islamic Port.",
    keySeoFocus: ["B2B Industrial Keywords", "RFQ Lead Forms", "High Domain Authority"],
    whatsappMsg: "Hello Unique Agency, I want an SEO strategy for our logistics / customs clearance company in Jeddah.",
  },
];

const NINETY_DAY_ROADMAP_JEDDAH: NinetyDayPhase[] = [
  {
    phaseNum: "01",
    timeframe: "Weeks 1 - 2",
    title: "Search Console Audit & Technical Code Fixes",
    description:
      "We crawl your domain with Screaming Frog, fix canonical and indexing errors, and boost mobile PageSpeed to 99/100.",
    tasks: ["Full Technical Audit", "Canonical & Sitemap Fix", "Core Web Vitals Speed", "Jeddah Geo Schema"],
    milestoneOutput: "100% technically healthy, fast website ready for rapid Google indexation",
  },
  {
    phaseNum: "02",
    timeframe: "Weeks 2 - 3",
    title: "Jeddah Competitor Analysis & Keyword Architecture",
    description:
      "We analyze top Jeddah competitors, extract high-ROI local and commercial keywords, and map them across your pages.",
    tasks: ["Jeddah & Makkah Keywords", "Competitor Gap Audit", "Silo Hierarchy Plan", "Zero Cannibalization"],
    milestoneOutput: "Approved revenue-driven keyword map and site architecture blueprint",
  },
  {
    phaseNum: "03",
    timeframe: "Weeks 4 - 6",
    title: "Service Page Rebuilding, On-Page SEO & CTR Boost",
    description:
      "We craft high-CTR Meta Titles, rebuild service and category pages, structure internal links, and optimize WhatsApp CTAs.",
    tasks: ["High-CTR Meta Tags", "Service Page Copy", "Internal Linking Silos", "WebP Image Compression"],
    milestoneOutput: "Significant jump in Google Search Console impressions and initial rankings",
  },
  {
    phaseNum: "04",
    timeframe: "Weeks 6 - 10",
    title: "Jeddah Google Maps Local Pack & AI Search (GEO)",
    description:
      "We optimize your Google Business Profile for Jeddah Map Pack rankings, publish local content, and structure data for ChatGPT/AI Overviews.",
    tasks: ["Jeddah Maps 3-Pack", "Jeddah & Makkah Articles", "AI Search (GEO) Setup", "Review Optimization"],
    milestoneOutput: "Core keywords enter Page #1 with rising phone calls and WhatsApp leads",
  },
  {
    phaseNum: "05",
    timeframe: "Weeks 8 - 12+",
    title: "White-Hat Link Building & Sustained #1 Leadership",
    description:
      "We acquire safe, high-DR Dofollow Guest Posts on reputable Saudi/Arab portals and scale winning pages with transparent monthly reports.",
    tasks: ["Contextual Guest Posts", "Weekly GSC Tracking", "CRO Rate Scaling", "Monthly ROI Reports"],
    milestoneOutput: "Locked-in Top-3 rankings in Jeddah and compounding monthly revenue",
  },
];

const JEDDAH_SEO_PACKAGES_SAR: JeddahSeoPackageSAR[] = [
  {
    id: "jed-en-pkg-starter",
    packageName: "Jeddah Local & Starter SEO Plan",
    badgeText: "Ideal for Clinics, Offices & Local Service Companies in Jeddah",
    priceSAR: "1,850",
    billingCycle: "SAR / Month (Flexible — No Lock-In Contracts)",
    idealFor: "Service businesses, medical clinics, restaurants, and emerging brands targeting Jeddah",
    isPopular: false,
    keywordsCount: "Up to 20 High-Intent Local & Commercial Keywords in Jeddah",
    includedServices: [
      "Complete Technical SEO Audit & indexation fixes in Google Search Console",
      "Mobile Core Web Vitals & PageSpeed optimization",
      "Full On-Page SEO optimization for up to 10 core service pages",
      "Google Business Profile (Google Maps) setup and Jeddah Local Pack optimization",
      "6 expert human-written SEO articles or local landing pages per month (Arabic or English)",
      "Safe White-Hat contextual backlinks to build foundational domain authority",
    ],
    technicalAndContentFeatures: [
      "Custom Meta Titles, Descriptions, Dynamic Canonicals & Jeddah Local Schema",
      "Internal linking silo setup & WebP image compression",
    ],
    reportingAndSupport: "Detailed monthly Google Search Console report + Direct WhatsApp support",
    whatsappMsg: "Hello Unique Agency, I want to subscribe to the (Jeddah Local & Starter SEO Plan - 1,850 SAR/mo).",
  },
  {
    id: "jed-en-pkg-pro",
    packageName: "Jeddah Market Domination & E-Commerce Plan",
    badgeText: "Most Popular for Ambitious Jeddah Companies & Salla / Zid / Shopify Stores",
    priceSAR: "3,200",
    billingCycle: "SAR / Month (Complete Revenue-Driven Jeddah & KSA Suite)",
    idealFor: "E-Commerce stores (Salla, Zid, Shopify), contracting & real estate firms, and medical centers in Jeddah",
    isPopular: true,
    keywordsCount: "Up to 45 Competitive Commercial & Local Keywords in Jeddah & KSA",
    includedServices: [
      "Everything in Starter Plan + Deep Screaming Frog engineering audit & code fixes",
      "Full E-Commerce & Portal SEO (Categories, Filters, SAR Product Schema, and 30+ pages optimized monthly)",
      "Topical Authority strategy with 12 in-depth commercial articles or landing pages per month",
      "Multi-district Jeddah & Makkah corridor Local SEO targeting & Google Maps Top-3 domination",
      "High-DR White-Hat Link Building & Digital PR on authoritative Saudi & GCC portals",
      "Generative Engine Optimization (GEO) for Google AI Overviews & ChatGPT Search visibility",
    ],
    technicalAndContentFeatures: [
      "Conversion Rate Optimization (CRO) for checkout & WhatsApp lead funnels",
      "Monthly competitor tracking in Jeddah & new keyword opportunity capture",
    ],
    reportingAndSupport: "Bi-weekly & monthly verified GSC/GA4 reports + Dedicated Account Manager on WhatsApp",
    whatsappMsg: "Hello Unique Agency, I want to subscribe to the (Jeddah Market Domination & E-Commerce SEO Plan - 3,200 SAR/mo).",
  },
  {
    id: "jed-en-pkg-enterprise",
    packageName: "Enterprise & National KSA Authority Plan",
    badgeText: "For Mega Stores, Real Estate Developers & Multi-Branch Groups",
    priceSAR: "5,500",
    billingCycle: "SAR / Month (Custom Full-Scale Market Leadership)",
    idealFor: "Large e-commerce catalogs, real estate/tourism portals, and enterprises targeting Jeddah, Riyadh & all KSA",
    isPopular: false,
    keywordsCount: "Unlimited Keyword Clusters (80+ Priority Commercial Terms)",
    includedServices: [
      "Dedicated full-stack Technical SEO engineering for Next.js, WordPress, Shopify Plus, Salla & Zid",
      "Continuous optimization across hundreds of product, category, and branch pages in Jeddah and KSA",
      "20+ pieces of authoritative bilingual (Arabic & English) commercial content per month",
      "High-authority Digital PR and editorial backlinks from premier regional and global publications",
      "Ongoing UI/UX speed optimization, custom schema graphs, and CRO split-testing",
      "Multilingual SEO management for hospitality, tourism, and real estate portals in Jeddah",
    ],
    technicalAndContentFeatures: [
      "Priority engineering & dev execution by our senior Next.js/WordPress/Shopify team",
      "Custom live ROI, lead attribution, and ranking dashboard",
    ],
    reportingAndSupport: "Weekly strategy calls & live reporting + 24/7 VIP engineering & SEO support",
    whatsappMsg: "Hello Unique Agency, I would like to inquire about the (Jeddah Enterprise & National SEO Plan - 5,500 SAR/mo).",
  },
];

const JEDDAH_CHATGPT_QUESTIONS: ChatGptClientQuestion[] = [
  {
    tag: "AI Search & ChatGPT Visibility in Jeddah",
    q: "How does your Jeddah SEO company help my brand appear in ChatGPT and Google AI Overviews?",
    a: "When customers in Jeddah ask ChatGPT or Google AI Overviews 'What is the best clinic / contractor / store in Jeddah?', AI engines retrieve answers from websites with clear semantic authority, direct-answer formatting, interconnected Schema.org JSON-LD, and strong local trust signals. We engineer your website with Generative Engine Optimization (GEO & AEO) so AI models cite and recommend your business first.",
  },
  {
    tag: "Hyper-Local Jeddah District Targeting",
    q: "Why do I need a Jeddah-specific SEO strategy instead of generic SEO?",
    a: "Search behavior in Jeddah is highly localized—buyers frequently pair their search with specific corridors like Tahlia Street, Al Rawdah, Obhur, Al Salamah, or Jeddah Islamic Port. Optimizing your landing pages and Google Business Profile around these exact geographic entities captures high-intent local buyers who convert at 3x the rate of generic traffic.",
  },
  {
    tag: "In-House Engineering Advantage",
    q: "What makes Unique Digital Agency different from other SEO agencies in Jeddah?",
    a: "Most agencies only send theoretical PDF recommendations or build low-quality links without touching your code. At Unique, we are both a full-stack software development house (Next.js, WordPress, Shopify, Salla, Zid) and a specialized SEO agency—meaning our own engineers fix your speed, Core Web Vitals, canonicals, and schema directly while our copywriters and PR team build your authority.",
  },
  {
    tag: "Boosting Click-Through Rate (CTR)",
    q: "How do you make sure Jeddah customers click on our website instead of competitors on Page #1?",
    a: "Ranking on Page #1 is only half the battle. We engineer high-CTR Meta Titles using proven buyer triggers and deploy Rich Snippet Schema that displays 5.0-star ratings, SAR pricing, and stock availability directly underneath your link on Google—making your listing visually dominate the search results.",
  },
];

const JEDDAH_SEO_FAQS: JeddahSeoFaq[] = [
  {
    id: "jfaq-en-1",
    category: "Pricing & Plans",
    question: "How much do professional SEO services cost in Jeddah?",
    answer:
      "Our transparent monthly SEO packages in Jeddah start at 1,850 SAR/month for the Local & Starter Plan, 3,200 SAR/month for our popular Market Domination & E-Commerce Plan (for Salla, Zid, Shopify, clinics, and contracting firms), and 5,500 SAR/month for Enterprise & National campaigns. Every plan includes technical engineering, content, and safe White-Hat link building with zero hidden fees.",
  },
  {
    id: "jfaq-en-2",
    category: "Timeline & ROI",
    question: "How long does it take to rank #1 on Google in Jeddah?",
    answer:
      "Technical indexation fixes, speed improvements, and rising Google Search Console impressions typically appear within the first 2 to 4 weeks. Strong Page #1 rankings for competitive Jeddah and commercial keywords—alongside measurable growth in phone calls, WhatsApp leads, and store orders—are achieved within our 60 to 90-day execution roadmap.",
  },
  {
    id: "jfaq-en-3",
    category: "E-Commerce SEO",
    question: "Is SEO effective for Salla, Zid, and Shopify stores in Jeddah?",
    answer:
      "Yes! E-Commerce SEO is the highest-ROI growth channel for online stores in Jeddah and across KSA. It eliminates your 100% reliance on expensive paid ads and positions your products and categories at the top of Google 24/7 whenever shoppers search with buying intent.",
  },
  {
    id: "jfaq-en-4",
    category: "Google Maps & Local SEO",
    question: "Can you rank my business in the Top 3 on Google Maps in Jeddah?",
    answer:
      "Absolutely. Local SEO in Jeddah is one of our core strengths. We optimize your Google Business Profile (GBP), build localized district pages, standardize NAP citations across Saudi directories, and implement a review growth strategy to secure Top-3 Local Pack visibility.",
  },
  {
    id: "jfaq-en-5",
    category: "Free Jeddah SEO Audit",
    question: "How can I claim a free SEO audit for my Jeddah website or store?",
    answer:
      "Simply click any WhatsApp button on this page to message our team directly at +201270506511 with your website URL. Within 24 hours, we will send you a comprehensive technical and competitor audit outlining your exact ranking opportunities in Jeddah completely free.",
  },
];

const JEDDAH_SEMANTIC_KEYWORDS_EN: string[] = [
  "SEO Company in Jeddah",
  "Best SEO Agency Jeddah",
  "SEO Services Jeddah KSA",
  "Local SEO Jeddah & Makkah",
  "Google Maps SEO Jeddah",
  "Salla Store SEO Jeddah",
  "Zid Store SEO Jeddah",
  "Shopify SEO Agency Jeddah",
  "Technical SEO Consultant Jeddah",
  "AI Search Optimization GEO Jeddah",
  "Medical Clinic SEO Tahlia Jeddah",
  "Real Estate SEO Obhur Jeddah",
  "Contracting Company SEO Jeddah",
  "White-Hat Link Building Saudi Arabia",
  "Arabic & English SEO Jeddah",
  "شركة سيو في جدة",
];

// ============================================================================
// 5. JSON-LD STRUCTURED DATA SCHEMAS FOR JEDDAH, SAUDI ARABIA (EN-SA)
// ============================================================================
const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://marketing-beta-gold-30.vercel.app/en/jeddah-seo#agency",
    name: "Unique Digital Agency - SEO Company in Jeddah",
    alternateName: "Unique SEO Agency Jeddah & Makkah Province",
    url: "https://marketing-beta-gold-30.vercel.app/en/jeddah-seo",
    telephone: "+201270506511",
    description:
      "Leading SEO Company in Jeddah specializing in Technical SEO, Google Maps Local Pack domination, E-Commerce SEO (Salla, Zid, Shopify), and AI Search Optimization (GEO) in Jeddah and Makkah.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.5433,
      longitude: 39.1728,
    },
    areaServed: [
      { "@type": "City", name: "Jeddah" },
      { "@type": "City", name: "Makkah" },
      { "@type": "AdministrativeArea", name: "Makkah Province" },
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
    serviceType: "Search Engine Optimization (SEO) Services in Jeddah",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://marketing-beta-gold-30.vercel.app",
      telephone: "+201270506511",
    },
    areaServed: {
      "@type": "City",
      name: "Jeddah",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Jeddah Monthly SEO Packages (SAR)",
      itemListElement: JEDDAH_SEO_PACKAGES_SAR.map((pkg) => ({
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
    mainEntity: JEDDAH_SEO_FAQS.map((faq) => ({
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
      {
        "@type": "ListItem",
        position: 3,
        name: "SEO Company in Jeddah",
        item: "https://marketing-beta-gold-30.vercel.app/en/jeddah-seo",
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
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
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
// 7. MAIN PAGE COMPONENT (ENGLISH JEDDAH SEO COMPANY LANDING PAGE)
// ============================================================================
export default function JeddahSeoEnglishPage() {
  const mainWhatsAppLink = getWhatsAppUrl(
    "Hello Unique Agency, I would like to request a Free SEO Audit and consultation for my website/store in Jeddah."
  );

  return (
    <main
      dir="ltr"
      lang="en"
      className="relative min-h-screen bg-[#000000] text-left text-white selection:bg-blue-600 selection:text-white overflow-x-hidden"
    >
      {/* Structured Data JSON-LD for Google.com.sa (Jeddah Geo-Targeted) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />

      {/* Ambient Background Glow Effects (Cyan, Emerald, Blue, Gold - Strictly No Red) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-cyan-600/12 blur-[150px]" />
        <div className="absolute top-1/3 -right-48 h-[460px] w-[460px] rounded-full bg-emerald-600/10 blur-[150px]" />
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
        <span className="hidden sm:inline">Free Jeddah SEO Audit:</span>
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
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 font-black text-black shadow-lg shadow-cyan-500/25">
              U
            </span>
            <div>
              <p className="text-xs font-bold text-cyan-400">UNIQUE SEO AGENCY JEDDAH</p>
              <p className="text-[11px] text-slate-400">
                #1 SEO Company in Jeddah (Tahlia • Al Rawdah • Obhur • Al Salamah)
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-5 text-xs font-bold text-slate-300 lg:flex">
            <a href="#jeddah-seo-services" className="transition-colors hover:text-cyan-400">
              Jeddah SEO Services
            </a>
            <a href="#jeddah-districts" className="transition-colors hover:text-cyan-400">
              Jeddah Districts
            </a>
            <a href="#jeddah-ecommerce-seo" className="transition-colors hover:text-cyan-400">
              Salla, Zid & Shopify SEO
            </a>
            <a href="#jeddah-gsc-results" className="transition-colors hover:text-emerald-400">
              GSC Case Studies
            </a>
            <a href="#jeddah-sectors" className="transition-colors hover:text-cyan-400">
              Sectors
            </a>
            <a href="#jeddah-pricing" className="transition-colors hover:text-amber-400">
              Pricing (SAR)
            </a>
            <a href="#jeddah-faq" className="transition-colors hover:text-cyan-400">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/jeddah-seo"
              className="hidden rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-slate-200 transition-colors hover:bg-white/10 sm:inline-block"
            >
              العربية
            </Link>
            <a
              href={mainWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-xs font-black text-black shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Free Audit:</span>
              <span className="font-mono">{WHATSAPP_NUMBER_DISPLAY}</span>
            </a>
          </div>
        </div>
      </nav>

      {/* =====================================================================
          SECTION 2: CREATIVE JEDDAH HERO SECTION WITH GSC & LOCAL MAP PACK SIMULATOR
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
            <Link href="/en/saudi-seo" className="transition-colors hover:text-cyan-400">
              SEO Company in Saudi Arabia
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
            <span className="font-bold text-cyan-400">
              SEO Company in Jeddah
            </span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Primary Commercial Jeddah SEO Pitch */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-300">
                <Award className="h-4 w-4 text-amber-400" />
                <span>
                  #1 Strategic SEO & AI Search Partner in the Bride of the Red Sea — Jeddah
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-black leading-[1.18] tracking-tight text-white sm:text-5xl lg:text-6xl">
                SEO Company in Jeddah{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
                  That Ranks You #1 on Google, Maps & AI Search
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
                In Jeddah&apos;s fast-moving commercial and tourism economy, simply
                having a website is no longer enough—real revenue belongs to the
                brands ranked{" "}
                <strong className="text-emerald-300">
                  #1 on Google Search and Google Maps
                </strong>{" "}
                the exact moment customers in Tahlia, Al Rawdah, Obhur, or Al
                Salamah search for your services or products. At{" "}
                <strong className="font-bold text-white">UNIQUE Digital Agency</strong>,
                we execute a verified 90-day engineering and content roadmap
                combining{" "}
                <strong className="text-cyan-300">
                  Technical SEO, Jeddah & Makkah Local SEO, Salla/Zid/Shopify
                  Store Optimization, and AI Search Visibility (ChatGPT & Google
                  AI Overviews)
                </strong>
                .
              </p>

              {/* 4 Trust Badges Grid */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm font-medium text-slate-200">
                    90-Day Verified Growth in Google Search Console
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-sm font-medium text-slate-200">
                    Top-3 Google Maps Local Pack Across Jeddah Districts
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-sm font-medium text-slate-200">
                    Specialized SEO for Salla, Zid, Shopify, WordPress & Next.js
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-400" />
                  <span className="text-sm font-medium text-slate-200">
                    AI Visibility Optimization (GEO) for ChatGPT & AI Overviews
                  </span>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={mainWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 px-8 py-4 text-base font-black text-black shadow-[0_0_35px_rgba(6,182,212,0.4)] transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Claim Your Free Jeddah SEO Audit</span>
                  <ArrowUpRight className="h-5 w-5" />
                </a>
                <a
                  href="#jeddah-gsc-results"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-slate-200 backdrop-blur-md transition-all hover:border-cyan-400/50 hover:bg-white/10 hover:text-white"
                >
                  <TrendingUp className="h-5 w-5 text-cyan-400" />
                  <span>View Jeddah Case Studies</span>
                </a>
              </div>
            </div>

            {/* Right Column: Creative Live Jeddah GSC & Google Maps Local Pack Simulator */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-cyan-500/35 bg-gradient-to-b from-[#071a26]/95 to-[#040811]/95 p-6 shadow-[0_0_65px_rgba(6,182,212,0.2)] backdrop-blur-2xl sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-cyan-400" />
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1 text-[11px] font-mono text-cyan-300 border border-cyan-500/25">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Jeddah SEO & Local Pack Telemetry</span>
                  </div>
                </div>

                {/* 4 GSC Metric Boxes */}
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-2xl border border-cyan-500/30 bg-cyan-600/15 p-3">
                    <p className="text-[10px] text-cyan-200">Jeddah Clicks</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      36.4K
                    </p>
                    <span className="text-[10px] font-bold text-emerald-400">
                      +350% Growth
                    </span>
                  </div>
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-600/15 p-3">
                    <p className="text-[10px] text-emerald-200">Impressions</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      445K
                    </p>
                    <span className="text-[10px] font-bold text-emerald-400">
                      +410% Growth
                    </span>
                  </div>
                  <div className="rounded-2xl border border-blue-500/30 bg-blue-600/15 p-3">
                    <p className="text-[10px] text-blue-200">Average CTR</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      8.9%
                    </p>
                    <span className="text-[10px] font-bold text-cyan-300">
                      Rich Schema
                    </span>
                  </div>
                  <div className="rounded-2xl border border-amber-500/30 bg-amber-500/15 p-3">
                    <p className="text-[10px] text-amber-200">Jeddah Rank</p>
                    <p className="mt-1 font-mono text-lg font-black text-amber-300">
                      #1.1
                    </p>
                    <span className="text-[10px] font-bold text-amber-300">
                      Top Position
                    </span>
                  </div>
                </div>

                {/* Simulated Google Maps Jeddah Local 3-Pack */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/60 p-4">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-cyan-300">
                      📍 Google Maps Jeddah Local 3-Pack
                    </span>
                    <span className="rounded bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                      Ranked #1 in Jeddah
                    </span>
                  </div>

                  <div className="rounded-xl border border-emerald-500/30 bg-[#071520] p-3.5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-black text-white">
                        1. Your Brand — Jeddah (Tahlia / King Rd)
                      </p>
                      <span className="text-[11px] font-bold text-amber-400">
                        ★★★★★ 4.9 (380)
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-300">
                      Open Now • Serving Jeddah & Makkah • Direct Call & WhatsApp
                    </p>
                  </div>

                  <div className="mt-2 rounded-xl border border-white/5 bg-white/[0.02] p-2.5 opacity-60">
                    <p className="text-[11px] text-slate-400">
                      2. Local Competitor in Jeddah — ★★★★☆ 4.1
                    </p>
                  </div>
                </div>

                {/* Direct Audit Strip */}
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-cyan-500/30 bg-cyan-950/30 px-4 py-3">
                  <div>
                    <p className="text-[11px] text-slate-300">
                      Get a Free Audit of Your Jeddah Website & Competitors
                    </p>
                    <p className="font-mono text-sm font-black text-emerald-400">
                      +20 12 70506511
                    </p>
                  </div>
                  <a
                    href={mainWhatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-emerald-500 px-4 py-2 text-xs font-black text-black transition-transform hover:scale-105"
                  >
                    Start Now
                  </a>
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
          SECTION 3: WHY JEDDAH BUSINESSES NEED SPECIALIZED SEO + COMPARISON TABLE
      ===================================================================== */}
      <section className="relative z-10 border-b border-white/10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Strategic Digital Equity in Western Saudi Arabia"
            title="Why Partnering with an SEO Company in Jeddah"
            highlightedWord="Outperforms Paid Ads & Traditional Marketing"
            subtitle="As the commercial and tourism gateway on the Red Sea, Jeddah features intense competition across healthcare, real estate, contracting, and retail. Compare how Unique's engineering-driven SEO stacks up against paid ads and generic agencies."
          />

          <div className="overflow-hidden rounded-3xl border border-white/15 bg-[#050a15] shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/15 bg-[#0a1328]">
                    <th className="p-5 font-black text-white w-[25%]">
                      Comparison Criterion in Jeddah
                    </th>
                    <th className="p-5 font-black text-emerald-300 bg-emerald-600/15 border-x border-emerald-500/30 w-[30%]">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-amber-400" />
                        <span>Unique Agency White-Hat Jeddah SEO</span>
                      </div>
                    </th>
                    <th className="p-5 font-bold text-slate-300 w-[23%]">
                      Paid Ads Only (PPC / Snap / Google Ads)
                    </th>
                    <th className="p-5 font-bold text-slate-400 w-[22%]">
                      Traditional Marketing or Cheap Spam SEO
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {SEO_VS_ADS_COMPARISON_JEDDAH.map((row) => (
                    <tr
                      key={row.criterion}
                      className="transition-colors hover:bg-white/[0.02]"
                    >
                      <td className="p-4 sm:p-5 font-bold text-white bg-black/40">
                        {row.criterion}
                      </td>
                      <td className="p-4 sm:p-5 bg-emerald-600/[0.06] border-x border-emerald-500/25 font-bold text-emerald-300">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                          <span>{row.uniqueSeo}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-300">
                        {row.paidAds}
                      </td>
                      <td className="p-4 sm:p-5 text-amber-200/80">
                        {row.traditionalOrCheapSeo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: 6 CORE SEO SERVICES IN JEDDAH
      ===================================================================== */}
      <section
        id="jeddah-seo-services"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Full-Stack Search Engine Optimization in Jeddah"
            title="What Our Jeddah SEO Agency Executes"
            highlightedWord="To Rank Your Business #1"
            subtitle="From code-level Technical SEO and Core Web Vitals speed to Jeddah Google Maps domination, Salla/Zid/Shopify e-commerce SEO, and AI Search Visibility."
          />

          <div className="space-y-10">
            {CORE_SEO_SERVICES_JEDDAH.map((srv) => (
              <article
                key={srv.id}
                className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#081224] to-[#03060d] p-6 shadow-2xl sm:p-10"
              >
                <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-6 lg:flex-row lg:items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-300">
                      <span>Core Service {srv.number}</span>
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
                    className="inline-flex items-center gap-2 self-start rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3.5 text-xs font-black text-black shadow-lg transition-transform hover:scale-[1.02] lg:self-auto"
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
                      Actionable Execution Checklist for Your Jeddah Website:
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
                        Direct Business Impact in Jeddah:
                      </p>
                      <p className="text-xs leading-relaxed text-slate-300">
                        {srv.businessImpactInJeddah}
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
                        <span>Direct WhatsApp: {WHATSAPP_NUMBER_DISPLAY}</span>
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
          SECTION 5: JEDDAH COMMERCIAL DISTRICTS LOCAL SEO COVERAGE
      ===================================================================== */}
      <section
        id="jeddah-districts"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Hyper-Local Geo-Targeting Across Jeddah's Commercial Corridors"
            title="Dominating Local Search & Google Maps in"
            highlightedWord="Tahlia, Al Rawdah, Obhur, Al Salamah & Islamic Port"
            subtitle="We go beyond generic city-level keywords—building hyper-local authority across the exact neighborhoods and commercial zones where your Jeddah clients search."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {JEDDAH_DISTRICTS_ZONES.map((dist) => (
              <div
                key={dist.id}
                className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#091326] to-[#040812] p-7 sm:p-8"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white sm:text-2xl">
                      {dist.districtTitle}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-400">
                      {dist.arabicTag}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-slate-300">
                  {dist.commercialCharacter}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {dist.targetBusinesses.map((tb) => (
                    <span
                      key={tb}
                      className="rounded-lg bg-white/5 px-3 py-1 text-xs font-semibold text-amber-300 border border-white/10"
                    >
                      {tb}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-200">
                  {dist.localSeoActions.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                  {dist.localKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded bg-cyan-500/10 px-2.5 py-1 text-[11px] text-cyan-200 border border-cyan-500/20"
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
          SECTION 6: JEDDAH E-COMMERCE SEO (SALLA, ZID, SHOPIFY)
      ===================================================================== */}
      <section
        id="jeddah-ecommerce-seo"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Scale Non-Ad E-Commerce Sales in Jeddah & Nationwide KSA"
            title="E-Commerce SEO in Jeddah:"
            highlightedWord="Salla, Zid, Shopify & WooCommerce"
            subtitle="We transform your online store in Jeddah into a 24/7 organic sales machine that ranks #1 for high-intent buyer searches across Saudi Arabia."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {ECOMMERCE_SEO_PLATFORMS_JEDDAH.map((plat) => (
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
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 py-3.5 text-xs font-black text-black transition-transform hover:scale-[1.01]"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>Scale Your Jeddah Store Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: DOCUMENTED GSC RESULTS IN JEDDAH + 6 SECTORS
      ===================================================================== */}
      <section
        id="jeddah-gsc-results"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Verified Google Search Console Numbers from Jeddah Clients"
            title="Real Success Stories & Organic Revenue Growth"
            highlightedWord="in Jeddah & Makkah Province"
            subtitle="See how clinics, contracting firms, and online stores in Jeddah scaled their organic traffic, phone calls, and revenue within 60 to 90 days."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {GSC_DOCUMENTED_RESULTS_JEDDAH.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#071924] to-[#030710] p-7 shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="rounded-lg bg-cyan-500/15 px-3 py-1 font-bold text-cyan-300">
                      {item.sector}
                    </span>
                    <span className="font-mono text-slate-400">
                      {item.districtInJeddah}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-black text-white">
                    {item.projectTitle}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-emerald-400">
                    Platform: {item.platform} • Timeline: {item.timeframe}
                  </p>

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
                      Sample Keywords Ranked #1 in Jeddah:
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

          {/* 6 Jeddah Economic Sectors Grid */}
          <div id="jeddah-sectors" className="mt-20 scroll-mt-24">
            <h3 className="text-center text-2xl font-black text-white sm:text-3xl mb-10">
              High-Growth Economic Sectors We Dominate in Jeddah
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {JEDDAH_12_SECTORS.map((sec) => (
                <div
                  key={sec.id}
                  className="flex flex-col justify-between rounded-3xl border border-white/12 bg-[#071020] p-6 transition-all hover:border-cyan-400/50"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="rounded-lg bg-cyan-500/15 px-3 py-1 font-bold text-cyan-300">
                        {sec.projectsCount}
                      </span>
                      <span className="font-bold text-emerald-400">
                        {sec.avgGrowth}
                      </span>
                    </div>
                    <h4 className="mt-4 text-lg font-black text-white">
                      {sec.sectorName}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      {sec.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/10 pt-3">
                      {sec.keySeoFocus.map((f) => (
                        <span
                          key={f}
                          className="rounded bg-white/5 px-2.5 py-1 text-[11px] text-amber-300"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={getWhatsAppUrl(sec.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 py-2.5 text-xs font-bold text-cyan-300 transition-colors hover:bg-cyan-400 hover:text-black"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>Request Jeddah SEO Plan for This Sector</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: 90-DAY ROADMAP FOR JEDDAH BUSINESSES
      ===================================================================== */}
      <section className="relative z-10 border-b border-white/10 bg-[#03060e] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Step-by-Step 90-Day Execution Blueprint"
            title="How We Rank Your Jeddah Website on"
            highlightedWord="Google Page #1 Within 90 Days"
            subtitle="A transparent 5-phase engineering and content roadmap starting with immediate technical fixes in Week 1 and scaling to full local and national authority."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {NINETY_DAY_ROADMAP_JEDDAH.map((phase) => (
              <div
                key={phase.phaseNum}
                className="flex flex-col justify-between rounded-3xl border border-white/12 bg-[#070f20] p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 font-mono text-sm font-black text-black">
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
                        <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-xl bg-black/50 p-3 text-[11px] font-bold text-cyan-300 border border-white/10">
                  Outcome: {phase.milestoneOutput}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: TRANSPARENT JEDDAH SEO PACKAGES IN SAR
      ===================================================================== */}
      <section
        id="jeddah-pricing"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Transparent Investment — High-ROI Monthly Plans"
            title="Jeddah SEO Packages & Pricing"
            highlightedWord="in Saudi Riyals (SAR)"
            subtitle="Select the package aligned with your business goals in Jeddah and message our team on WhatsApp to start immediately."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {JEDDAH_SEO_PACKAGES_SAR.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all ${
                  pkg.isPopular
                    ? "border-2 border-cyan-400 bg-gradient-to-b from-[#071f29] to-[#040914] shadow-[0_0_55px_rgba(6,182,212,0.22)] lg:-translate-y-3"
                    : "border border-white/15 bg-[#060c1a]"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-8 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-1 text-xs font-black text-black shadow-lg">
                    Most Popular for Jeddah Companies & Stores
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
                        {pkg.priceSAR}
                      </span>
                      <span className="text-sm font-bold text-amber-300">
                        SAR / Month
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
                      ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-black shadow-lg shadow-cyan-500/25 hover:scale-[1.01]"
                      : "border border-white/20 bg-white/5 text-white hover:bg-cyan-500 hover:text-black"
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
          SECTION 10: CHATGPT / AI QUESTIONS + JEDDAH FAQ ACCORDION
      ===================================================================== */}
      <section
        id="jeddah-faq"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Direct Answers for Jeddah Decision-Makers"
            title="Key Questions About Jeddah SEO, AI Search"
            highlightedWord="& Ranking #1 on Google.com.sa"
            subtitle="Everything you need to know about our engineering-driven SEO services in Jeddah and Makkah Province."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-14">
            {JEDDAH_CHATGPT_QUESTIONS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/12 bg-[#070f20] p-7"
              >
                <span className="inline-block rounded-lg bg-cyan-500/15 px-3 py-1 text-xs font-bold text-cyan-300 border border-cyan-500/25">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-lg font-black text-white">
                  {item.q}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {JEDDAH_SEO_FAQS.map((faq, idx) => (
              <details
                key={faq.id}
                open={idx === 0}
                className="group rounded-2xl border border-white/12 bg-[#060c1a] p-6 transition-all open:border-cyan-500/40 open:bg-[#071524]"
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

          {/* Jeddah Semantic Keywords Cloud */}
          <div className="mt-14 rounded-3xl border border-white/10 bg-black/50 p-7 text-center">
            <h3 className="text-base font-black text-white">
              Core Search Queries & Semantic Entities We Dominate in Jeddah & Makkah
            </h3>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {JEDDAH_SEMANTIC_KEYWORDS_EN.map((kw) => (
                <span
                  key={kw}
                  className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-3.5 py-1.5 text-xs font-semibold text-cyan-300"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 11: FINAL FREE JEDDAH SEO AUDIT & WHATSAPP CTA BANNER
      ===================================================================== */}
      <section className="relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-[#071f29] via-[#05101e] to-[#02050b] p-8 shadow-[0_0_80px_rgba(6,182,212,0.2)] sm:p-12 lg:p-16 text-center">
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300">
                <Sparkles className="h-4 w-4" />
                <span>Claim Your 100% Free Jeddah Technical & Competitor SEO Audit</span>
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Send Us Your Website or Store URL & Rank #1 in Jeddah Within 90 Days
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                Whether you operate a medical clinic in Tahlia, a contracting or
                real estate company in Jeddah, or an online store on{" "}
                <strong className="text-emerald-300">Salla, Zid, or Shopify</strong>;
                message our team on WhatsApp and receive a custom 24-hour audit
                revealing your exact ranking opportunities completely free.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={mainWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-4 text-base font-black text-black shadow-[0_0_35px_rgba(6,182,212,0.4)] transition-all hover:scale-[1.03]"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Request Free Audit on WhatsApp:</span>
                  <span className="font-mono text-lg">
                    {WHATSAPP_NUMBER_DISPLAY}
                  </span>
                </a>

                <Link
                  href="/jeddah-seo"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  <span>النسخة العربية (Arabic Jeddah SEO)</span>
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