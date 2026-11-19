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
    "SEO Company in Riyadh | #1 SEO Agency & AI Search Experts in Riyadh | Unique",
  description:
    "Leading SEO Company in Riyadh, Saudi Arabia. We rank your business #1 on Google.com.sa, Google Maps & AI Search (ChatGPT / AI Overviews). Verified 90-day SEO growth for enterprises, factories, clinics, real estate & Salla, Zid, and Shopify stores in Riyadh.",
  keywords: [
    "SEO Company in Riyadh",
    "Best SEO Agency Riyadh",
    "SEO Services in Riyadh",
    "Local SEO Riyadh",
    "Google Maps SEO Riyadh",
    "E-commerce SEO Riyadh",
    "Salla SEO Agency Riyadh",
    "Zid SEO Services Riyadh",
    "Shopify SEO Riyadh",
    "B2B & Industrial SEO Riyadh",
    "Technical SEO Consultant Riyadh",
    "AI Search Optimization GEO Riyadh",
    "Medical Clinic SEO Riyadh",
    "Real Estate SEO North Riyadh",
    "UNIQUE Digital Agency",
  ],
  authors: [{ name: "UNIQUE Digital Agency" }],
  publisher: "UNIQUE",
  metadataBase: new URL("https://www.uniquee-ws.com"),
  alternates: {
    canonical: "/en/riyadh-seo",
    languages: {
      "en-SA": "/en/riyadh-seo",
      "ar-SA": "/riyadh-seo",
      en: "/en/riyadh-seo",
      ar: "/riyadh-seo",
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
      "SEO Company in Riyadh | Dominate Google Page #1, Maps & AI Search | Unique",
    description:
      "Your strategic SEO partner in Riyadh. Full-stack Technical SEO, Local 3-Pack Maps domination across North Riyadh, Olaya, KAFD & Industrial Cities, plus E-Commerce SEO for Salla, Zid & Shopify.",
    url: "https://www.uniquee-ws.com/en/riyadh-seo",
    siteName: "Unique Agency",
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Company in Riyadh | Best SEO Agency in Riyadh KSA | Unique",
    description:
      "Verified 90-day Google Search Console growth for enterprises, factories, clinics, real estate developers, and online stores in Riyadh.",
  },
};

// ============================================================================
// 3. TYPESCRIPT INTERFACES FOR RIYADH ENGLISH SEO PAGE
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
  businessImpactInRiyadh: string;
  executionChecklist: string[];
  deliverables: string[];
  whatsappText: string;
}

interface RiyadhDistrictZone {
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
  districtInRiyadh: string;
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

interface RiyadhSectorItem {
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

interface RiyadhSeoPackageSAR {
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

interface RiyadhSeoFaq {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// 4. COMPREHENSIVE RIYADH SEO DATA ARRAYS (HYPER-LOCALIZED ENGLISH COPY)
// ============================================================================

const HERO_KPIS: HeroKpiCard[] = [
  {
    id: "kpi-riyadh-clicks",
    value: "+420%",
    title: "Average Organic Traffic Growth in Riyadh",
    subtitle: "Verified click and impression surges inside Google Search Console for our Riyadh enterprises & stores",
    accent: "emerald",
  },
  {
    id: "kpi-riyadh-maps",
    value: "Top #3",
    title: "Riyadh Google Maps Local Pack",
    subtitle: "Dominating local searches across North Riyadh, Al Malqa, Al Olaya, Al Yasmin, King Fahd Rd & KAFD",
    accent: "cyan",
  },
  {
    id: "kpi-riyadh-stores",
    value: "Salla • Zid • Shopify",
    title: "Riyadh E-Commerce & B2B SEO Leaders",
    subtitle: "Turning Riyadh online stores and B2B corporations into 24/7 organic lead & sales machines",
    accent: "amber",
  },
  {
    id: "kpi-riyadh-ai",
    value: "Google + AI",
    title: "SERP #1 & AI Search (ChatGPT / GEO)",
    subtitle: "Dual engineering to rank #1 on Google.com.sa and in ChatGPT & Google AI Overviews recommendations",
    accent: "blue",
  },
];

const CORE_SEO_SERVICES_RIYADH: SeoServicePillar[] = [
  {
    id: "ryd-en-technical",
    number: "01",
    badge: "The Engineering Foundation for Riyadh Rankings",
    title: "Advanced Technical SEO & Core Web Vitals Engineering",
    arabicSubtitle: "الفحص الهندسي الشامل والسيو التقني المتقدم بالرياض",
    summary:
      "In Riyadh's fiercely competitive Vision 2030 digital market, silent technical bugs block your website from ranking regardless of your content budget. Our in-house developers audit your site via Screaming Frog & GSC to fix broken canonicals, eliminate network bloat, and hit 99/100 mobile speed.",
    businessImpactInRiyadh:
      "Boosts Googlebot crawl efficiency by 165% within weeks and cuts mobile bounce rates across Riyadh 5G/4G networks below 18%.",
    executionChecklist: [
      "Fixing Non-Indexable Canonical errors, 404 dead links, 301 redirect chains, and crawl budget waste",
      "Optimizing Core Web Vitals (LCP < 0.8s, CLS = 0.00, fast INP) and resolving enormous network payloads",
      "Deploying geo-targeted Schema.org JSON-LD for Riyadh (`GeoCoordinates 24.7136, 46.6753`, LocalBusiness, Product SAR, FAQPage)",
      "Configuring dynamic XML Sitemaps, Robots.txt directives, and instant On-Demand ISR cache updates",
      "Direct code-level execution by our own engineers on Next.js 16, WordPress/Elementor Pro, Salla, Zid, and Shopify",
    ],
    deliverables: [
      "Complete Before/After Screaming Frog Technical Audit",
      "95-100 Mobile PageSpeed Insights Score",
      "Riyadh Geo-Targeted Schema.org & Zero GSC Errors",
    ],
    whatsappText: "Hello Unique Agency, I want a Technical SEO Audit & Speed Optimization for my website in Riyadh.",
  },
  {
    id: "ryd-en-local-maps",
    number: "02",
    badge: "Capture High-Intent Local Buyers Across Riyadh",
    title: "Riyadh Local SEO & Google Business Profile (Maps 3-Pack) Domination",
    arabicSubtitle: "السيو المحلي وتصدر خرائط قوقل في أحياء الرياض",
    summary:
      "Thousands of high-spending buyers in Riyadh search locally every day—such as 'best dental clinic North Riyadh', 'law firm Olaya', or 'warehouse contractor Riyadh'. We position your business in the Top 3 Google Maps Local Pack and localized organic results.",
    businessImpactInRiyadh:
      "Multiplies direct phone calls, WhatsApp inquiries, and branch visits across Riyadh by over +330%.",
    executionChecklist: [
      "Full verification and optimization of your Google Business Profile (GBP) with Riyadh coordinates, localized categories, and geo-tagged media",
      "Building unique, non-duplicate landing pages targeting Riyadh's key corridors (North Riyadh, Olaya, Diriyah, Industrial Cities)",
      "Standardizing NAP (Name, Address, Phone) citations across authoritative Saudi commercial directories",
      "Implementing a customer review growth and keyword-rich response system to lock in Map Pack leadership",
    ],
    deliverables: [
      "Fully Optimized Riyadh Google Business Profile (GBP)",
      "Dedicated Riyadh District & Corridor Landing Pages",
      "Top 3 Google Maps Local Pack Ranking Execution",
    ],
    whatsappText: "Hello Unique Agency, I want Local SEO and Google Maps Top-3 ranking for my business in Riyadh.",
  },
  {
    id: "ryd-en-ecommerce",
    number: "03",
    badge: "Scale Online Store Revenue 24/7",
    title: "Riyadh E-Commerce SEO (Salla, Zid, Shopify, WooCommerce & EasyOrder)",
    arabicSubtitle: "سيو المتاجر الإلكترونية في الرياض (سلة، زد، شوبيفاي)",
    summary:
      "We free Riyadh online retailers from skyrocketing Snapchat, TikTok, and Google Ads CPCs. By restructuring your store collections, product copy, and SAR schema on Salla, Zid, or Shopify, we turn your store into a self-sustaining 24/7 organic sales engine.",
    businessImpactInRiyadh:
      "Slashes Customer Acquisition Cost (CAC) by up to 65% while generating daily high-margin organic orders across Riyadh and KSA.",
    executionChecklist: [
      "Restructuring category and sub-collection hierarchies on Salla, Zid, and Shopify around high-volume Saudi buyer searches",
      "Writing persuasive, conversion-engineered bilingual (Arabic & English) product titles and descriptions",
      "Deploying Product Schema displaying prices in Saudi Riyals (SAR), stock status, Tabby/Tamara badges, and star ratings",
      "Resolving duplicate filter/sorting URLs and Shopify `/collections/` vs `/products/` crawl waste",
      "Building commercial buying-guide clusters that capture comparison shoppers and route them straight to checkout",
    ],
    deliverables: [
      "Complete E-Commerce Category & Keyword Architecture",
      "Optimization of Top-Margin Products & Collections",
      "Rich SAR Product Snippets & Review Stars on Google.com.sa",
    ],
    whatsappText: "Hello Unique Agency, I own an online store in Riyadh and want E-Commerce SEO to scale organic sales.",
  },
  {
    id: "ryd-en-b2b-factories",
    number: "04",
    badge: "Built for Riyadh Corporations, Factories & Contractors",
    title: "B2B Corporate, Industrial & Real Estate SEO in Riyadh",
    arabicSubtitle: "سيو الشركات الكبرى والمصانع والمقاولات وقطاع الأعمال B2B بالرياض",
    summary:
      "Riyadh hosts thousands of factories, general contractors, real estate developers, and enterprise suppliers powering Vision 2030. We engineer B2B SEO funnels targeting procurement managers and C-level decision-makers to drive high-ticket RFQs and corporate contracts.",
    businessImpactInRiyadh:
      "Attracts institutional clients and multi-million SAR B2B contracts directly through Google Search.",
    executionChecklist: [
      "Targeting high-value industrial, engineering, legal, and real estate keywords in both Arabic and English",
      "Building authoritative technical specification pages and downloadable Company Profile/RFQ funnels",
      "Connecting B2B service silos directly to WhatsApp sales desks and CRM lead capture forms",
      "Publishing sector whitepapers and thought-leadership content that establishes undeniable corporate authority",
    ],
    deliverables: [
      "Bilingual B2B & Industrial Keyword Blueprint",
      "High-Converting Corporate Service & RFQ Pages",
      "Top-3 Visibility for Riyadh Industrial & Corporate Terms",
    ],
    whatsappText: "Hello Unique Agency, I need B2B / Industrial / Corporate SEO for my company in Riyadh.",
  },
  {
    id: "ryd-en-ai-geo",
    number: "05",
    badge: "Lead the 2026 AI Search Revolution in Riyadh",
    title: "AI Search Optimization (GEO / AEO for ChatGPT & Google AI Overviews)",
    arabicSubtitle: "تحسين الظهور في نتائج الذكاء الاصطناعي ChatGPT & AI Overviews",
    summary:
      "Executives and buyers in Riyadh increasingly ask ChatGPT and Google AI Overviews directly for the best company, clinic, or supplier in Riyadh. We apply Generative Engine Optimization (GEO) and CTR Rich Snippets so AI assistants cite and recommend your brand #1.",
    businessImpactInRiyadh:
      "Secures first-mover dominance in AI-assisted purchasing decisions across Riyadh and Saudi Arabia.",
    executionChecklist: [
      "Formatting commercial pages with direct-answer blocks (AEO) and structured comparison tables",
      "Building verified Brand Entity signals and Knowledge Graph connections for your Riyadh enterprise",
      "Deploying interconnected JSON-LD Schema so LLMs accurately parse your services, pricing, and location",
      "Maximizing organic Click-Through Rate (CTR) with psychological Meta Titles and Rich Review Stars",
    ],
    deliverables: [
      "Full GEO & AEO Content & Schema Engineering",
      "High-CTR Rich Snippets & Featured Snippet Capture",
      "Brand Entity Authority Setup for ChatGPT & Perplexity",
    ],
    whatsappText: "Hello Unique Agency, I want to optimize my Riyadh business for Google and AI Search (ChatGPT / GEO).",
  },
  {
    id: "ryd-en-content-links",
    number: "06",
    badge: "100% Safe White-Hat Domain Authority",
    title: "Topical Authority Content & White-Hat Saudi Digital PR",
    arabicSubtitle: "بناء السلطة الموضوعية والباك لينك السعودي الآمن والموثوق",
    summary:
      "Competing on Page #1 in Riyadh requires genuine domain authority—not cheap spam links. We build deep bilingual Topical Authority content clusters backed by contextual White-Hat Dofollow backlinks and Guest Posts on respected Saudi and GCC publications.",
    businessImpactInRiyadh:
      "Safely elevates your Domain Rating (DR) and locks in permanent Top-3 positions against Riyadh's strongest rivals.",
    executionChecklist: [
      "Developing a localized Arabic & English content calendar addressing every buyer question in your Riyadh sector",
      "Publishing contextual Guest Posts and editorial PR features on high-traffic Saudi and Arab industry portals",
      "Maintaining a natural, penalty-proof Anchor Text profile across brand, local, and commercial terms",
      "Auditing legacy backlinks and disavowing any toxic or spammy domains",
    ],
    deliverables: [
      "Expert Bilingual SEO Content Published Monthly",
      "High-DR Contextual White-Hat Backlinks",
      "Transparent Monthly Link & Ranking Growth Report",
    ],
    whatsappText: "Hello Unique Agency, I want a Content & White-Hat Link Building strategy for my website in Riyadh.",
  },
];

const RIYADH_DISTRICTS_ZONES: RiyadhDistrictZone[] = [
  {
    id: "dist-en-north-riyadh-kafd",
    districtTitle: "North Riyadh Corridor (Al Malqa, Al Yasmin, Hittin, Al Narjis & KAFD)",
    arabicTag: "محور شمال الرياض (الملقا، الياسمين، حطين، النرجس، و KAFD)",
    commercialCharacter:
      "Riyadh's fastest-expanding economic and residential belt—home to King Abdullah Financial District (KAFD), luxury real estate projects, aesthetic clinics, FinTech startups, and upscale dining.",
    targetBusinesses: ["Real Estate Developers & Residential Projects", "Dental, Dermatology & Cosmetic Clinics", "FinTech, Corporate & Consulting Firms", "Fine Dining, Specialty Cafes & Luxury Brands"],
    localSeoActions: [
      "Targeting district-specific queries (North Riyadh, Al Malqa, Hittin, Al Yasmin, Al Narjis, KAFD) across service silos and Google Maps",
      "Capturing affluent mobile 'near me' searches with sub-0.8s loading landing pages",
      "Activating Rich Review Stars and appointment schema to maximize direct bookings",
    ],
    localKeywords: ["best dental clinic north riyadh", "real estate developer al malqa riyadh", "interior design hittin riyadh"],
  },
  {
    id: "dist-en-olaya-kingfahd-tahlia",
    districtTitle: "Al Olaya, King Fahd Road, Tahlia Street & Al Sulimaniyah",
    arabicTag: "محور العليا، طريق الملك فهد، التحلية، والسليمانية",
    commercialCharacter:
      "Riyadh's established business and administrative core—housing multinational headquarters, top law firms, specialty hospitals, five-star hotels, and B2B service leaders.",
    targetBusinesses: ["Law Firms & Corporate Legal Advisors", "Hospitals & Specialty Medical Centers", "Holding Groups & B2B Agencies", "Hotels, Hospitality & Luxury Car Rentals"],
    localSeoActions: [
      "Building authoritative bilingual (English & Arabic) corporate silos targeting C-level decision-makers",
      "Optimizing Google Business Profiles to dominate Google Maps in Central Riyadh & King Fahd Rd",
      "Acquiring high-DR Digital PR backlinks to outperform legacy competitors in Central Riyadh",
    ],
    localKeywords: ["best law firm in riyadh olaya", "seo company in riyadh", "corporate consulting king fahd road"],
  },
  {
    id: "dist-en-diriyah-dq-west",
    districtTitle: "Diriyah Gate, Diplomatic Quarter (DQ), Irqah & West Riyadh",
    arabicTag: "محور الدرعية، حي السفارات، عرقة، وغرب الرياض",
    commercialCharacter:
      "Saudi Arabia's global cultural tourism flagship (Diriyah Gate), international events, diplomatic missions, and luxury hospitality requiring world-class multilingual SEO.",
    targetBusinesses: ["Event Management & Hospitality Agencies", "Luxury Resorts, Heritage Dining & Tourism", "High-End Real Estate & Advisory", "Premium Home Services & Maintenance"],
    localSeoActions: [
      "Engineering multilingual SEO (English, Arabic & up to 7 languages via `next-intl`) for global visitors and investors",
      "Delivering 99/100 mobile speed for rich media showcases and instant booking experiences",
      "Optimizing Brand Entities for ChatGPT & Google AI Overviews queries about Diriyah and Riyadh",
    ],
    localKeywords: ["event management company riyadh diriyah", "luxury hospitality services riyadh", "multilingual seo agency riyadh"],
  },
  {
    id: "dist-en-industrial-sulay-east",
    districtTitle: "Riyadh 2nd & 3rd Industrial Cities, Al Sulay & East/South Riyadh",
    arabicTag: "المدينة الصناعية الثانية والثالثة، السلي، وشرق الرياض",
    commercialCharacter:
      "The Kingdom's largest manufacturing, warehousing, and logistics powerhouse—comprising thousands of factories, steel hangar contractors, freight hubs, and B2B wholesalers.",
    targetBusinesses: ["Factories, Manufacturing & B2B Suppliers", "General Contracting, Steel Hangars & Sandwich Panels", "Warehousing, Freight & Logistics Firms", "Wholesale Building Materials & Equipment"],
    localSeoActions: [
      "Targeting high-contract B2B industrial and procurement keywords across Riyadh's Industrial Cities",
      "Ranking #1 for warehouse construction, steel hangars, car parking shades, and industrial logistics",
      "Integrating fast technical catalog pages with instant WhatsApp and RFQ lead forms",
    ],
    localKeywords: ["steel hangar contractor riyadh", "sandwich panel installation riyadh", "industrial suppliers 2nd industrial city riyadh"],
  },
];

const ECOMMERCE_SEO_PLATFORMS_RIYADH: EcommerceSeoPlatform[] = [
  {
    id: "ryd-en-salla",
    platformName: "Salla Store SEO in Riyadh (سيو متاجر سلة)",
    marketShareTag: "#1 Platform for Riyadh Online Merchants",
    title: "Scale Non-Ad Organic Orders for Your Riyadh Salla Store",
    painPointSolved:
      "Skyrocketing Snapchat and TikTok ad costs in Riyadh erode store profit margins, while unoptimized Salla categories remain invisible on Google Page #1.",
    technicalSolutions: [
      "Configuring advanced Salla SEO settings, custom robots.txt rules, and verified GSC/GA4 tracking",
      "Rewriting category and product titles/descriptions around high-intent Riyadh and Saudi buyer keywords",
      "Custom CSS UI enhancements to elevate brand prestige, mobile speed, and checkout conversion",
      "Publishing commercial blog clusters on Salla that drive ready-to-buy shoppers directly to product pages",
    ],
    expectedGrowth: "+280% to +450% growth in organic non-ad traffic and orders within 90 days",
    whatsappMsg: "Hello Unique Agency, I have a Salla store in Riyadh and want to scale organic sales with SEO.",
  },
  {
    id: "ryd-en-zid",
    platformName: "Zid Store SEO in Riyadh (سيو متاجر زد)",
    marketShareTag: "Fast-Growing Retail Ecosystem in KSA",
    title: "Rank Your Zid Store Categories #1 in Riyadh & Saudi Arabia",
    painPointSolved:
      "Unstructured category trees and missing semantic copy on collection pages keep Zid stores from capturing high-volume retail searches.",
    technicalSolutions: [
      "Architecting a clean hierarchical category and sub-category tree targeting Riyadh and national demand",
      "Compressing product imagery and scripts for sub-second mobile loading",
      "Adding keyword-rich semantic copy blocks to category headers and footers",
      "Deploying SAR Product Schema and building safe authority backlinks to priority store collections",
    ],
    expectedGrowth: "Sustained Page #1 visibility for commercial retail categories and lower CAC",
    whatsappMsg: "Hello Unique Agency, I have a Zid store in Riyadh and need a complete E-Commerce SEO plan.",
  },
  {
    id: "ryd-en-shopify-woo",
    platformName: "Shopify, WooCommerce & EasyOrder SEO",
    marketShareTag: "For Scaling D2C Brands & Custom Stores",
    title: "Enterprise Bilingual SEO for Shopify & WooCommerce in Riyadh",
    painPointSolved:
      "Duplicate `/collections/` vs `/products/` URLs in Shopify and heavy plugin bloat in WooCommerce that hurt Core Web Vitals and indexation.",
    technicalSolutions: [
      "Fixing Shopify Liquid internal links to enforce canonical product URLs and eliminate crawl waste",
      "Speed engineering to achieve 95+ PageSpeed alongside SAR Product & Review Star Schema",
      "Bilingual Arabic & English (`ar-SA` / `en-SA`) optimization to capture all Riyadh demographics",
      "CRO optimization for Tabby, Tamara, Apple Pay, and one-page COD checkouts",
    ],
    expectedGrowth: "Total domination of brand and commercial product searches in Riyadh and KSA",
    whatsappMsg: "Hello Unique Agency, I run a Shopify / WooCommerce store in Riyadh and want expert SEO.",
  },
];

const GSC_DOCUMENTED_RESULTS_RIYADH: GscCaseStudy[] = [
  {
    id: "ryd-en-gsc-1",
    sector: "Multi-Specialty Dental, Dermatology & Cosmetic Clinic",
    districtInRiyadh: "North Riyadh — Al Malqa & Al Olaya",
    platform: "WordPress & Elementor Pro",
    projectTitle: "Jumping from Page 5 to #1 in Riyadh & Scaling Patient Bookings by +320%",
    timeframe: "Within 90 Days",
    clicksBefore: "1,650 clicks/mo",
    clicksAfter: "38,400 clicks/mo",
    impressionsAfter: "495,000+ Local Riyadh Impressions",
    revenueGrowth: "+320% Surge in Monthly WhatsApp Clinic Appointments",
    topKeywordsRanked: ["best dental clinic in riyadh", "hollywood smile north riyadh", "laser clinic al malqa riyadh"],
    summary:
      "Built dedicated procedure and physician pages aligned with Google healthcare E-E-A-T standards and dominated the Google Maps Local 3-Pack in North and Central Riyadh.",
  },
  {
    id: "ryd-en-gsc-2",
    sector: "Real Estate Development, Contracting & Steel Hangars",
    districtInRiyadh: "Riyadh — Al Sulay & Al Malqa",
    platform: "Next.js 16 + Sanity CMS",
    projectTitle: "Ranking #1–#3 for 70+ High-Ticket Real Estate & Contracting Keywords in Riyadh",
    timeframe: "Within 75 Days",
    clicksBefore: "740 clicks/mo",
    clicksAfter: "31,200 clicks/mo",
    impressionsAfter: "380,000+ High-Intent Riyadh Searches",
    revenueGrowth: "+440% Growth in Inbound Calls & B2B RFQ Inquiries",
    topKeywordsRanked: ["steel hangar contractor riyadh", "sandwich panel riyadh", "real estate developer north riyadh"],
    summary:
      "Engineered ultra-fast Next.js service silos (99/100 PageSpeed) with compressed project showcases and Riyadh-specific LocalBusiness & Service JSON-LD schema.",
  },
  {
    id: "ryd-en-gsc-3",
    sector: "Luxury Oud, Bakhoor & Niche Perfumes Store",
    districtInRiyadh: "Riyadh (Same-Day & Nationwide KSA Delivery)",
    platform: "Salla Store (سلة)",
    projectTitle: "Reaching 46,500+ Monthly Organic Buyers & Cutting Paid Ad Spend by 60%",
    timeframe: "Within 4 Months",
    clicksBefore: "1,400 clicks/mo",
    clicksAfter: "46,500 clicks/mo",
    impressionsAfter: "560,000+ Commercial Searches on Google.com.sa",
    revenueGrowth: "+375% Increase in Net Non-Ad Organic Revenue (SAR)",
    topKeywordsRanked: ["best oud store in riyadh", "luxury royal bakhoor ksa", "niche perfumes riyadh"],
    summary:
      "Restructured 22 categories and 210+ products on Salla, deployed SAR Product Schema with star ratings, and built safe high-DR contextual backlinks.",
  },
];

const SEO_VS_ADS_COMPARISON_RIYADH: SeoVsAdsRow[] = [
  {
    criterion: "Long-Term Sustainability of Leads & Sales in Riyadh",
    uniqueSeo: "Compounds 24/7—owned digital equity that brings free organic clients for years",
    paidAds: "Stops the exact second your daily ad budget runs out",
    traditionalOrCheapSeo: "Empty promises without technical fixes, or spam penalties that de-index your site",
  },
  {
    criterion: "Cost Per Acquisition (CAC) & Financial ROI",
    uniqueSeo: "Zero cost per click; your acquisition cost drops every month as rankings solidify",
    paidAds: "Highest CPC bidding wars in Saudi Arabia across Riyadh commercial sectors",
    traditionalOrCheapSeo: "Wasted retainer on spun content and toxic links that never convert",
  },
  {
    criterion: "Trust Among Riyadh Executives & Consumers",
    uniqueSeo: "Top organic and Google Maps leaders earn 4x higher buyer trust than sponsored ads",
    paidAds: "High-value B2B buyers and savvy consumers routinely skip 'Sponsored' links",
    traditionalOrCheapSeo: "Slow, broken pages damage your brand prestige in the capital",
  },
  {
    criterion: "Technical Engineering & AI Search Readiness",
    uniqueSeo: "99/100 PageSpeed, clean Canonicals, and #1 visibility in ChatGPT & Google AI Overviews",
    paidAds: "Never improves your site speed, architecture, or AI search authority",
    traditionalOrCheapSeo: "Zero engineering depth in Next.js, WordPress, Salla, Zid, or GEO",
  },
];

const RIYADH_6_SECTORS: RiyadhSectorItem[] = [
  {
    id: "rsec-en-clinics",
    sectorName: "Dental, Dermatology & Cosmetic Clinics in Riyadh",
    projectsCount: "+80 Clinics & Centers",
    avgGrowth: "+320% Patient Bookings",
    description: "Ranking #1 for high-value treatments across Al Malqa, Olaya, Al Yasmin, and Tahlia.",
    keySeoFocus: ["Doctor & Treatment Silos", "Riyadh Maps 3-Pack", "Healthcare E-E-A-T"],
    whatsappMsg: "Hello Unique Agency, I want an SEO strategy for our medical / dental clinic in Riyadh.",
  },
  {
    id: "rsec-en-realestate",
    sectorName: "Real Estate, General Contracting, Hangars & Shades",
    projectsCount: "+90 Developers & Firms",
    avgGrowth: "+440% RFQs & Calls",
    description: "Dominating residential property searches in North Riyadh and B2B industrial construction in Al Sulay.",
    keySeoFocus: ["Riyadh District Pages", "Fast Project Galleries", "B2B RFQ Funnels"],
    whatsappMsg: "Hello Unique Agency, I want an SEO strategy for our real estate / contracting company in Riyadh.",
  },
  {
    id: "rsec-en-ecommerce",
    sectorName: "E-Commerce Stores in Riyadh (Salla, Zid, Shopify)",
    projectsCount: "+120 Online Stores",
    avgGrowth: "+375% Organic Orders",
    description: "Scaling daily non-ad orders for oud, perfumes, abayas, furniture, specialty coffee, and electronics.",
    keySeoFocus: ["SAR Product Schema", "Category Architecture", "Duplicate Filter Fix"],
    whatsappMsg: "Hello Unique Agency, I want E-Commerce SEO for my online store in Riyadh.",
  },
  {
    id: "rsec-en-factories",
    sectorName: "Factories, Industrial Supply & Logistics in Riyadh",
    projectsCount: "+55 Factories & Suppliers",
    avgGrowth: "+310% B2B Contracts",
    description: "Capturing procurement managers searching for factories and suppliers in Riyadh 2nd & 3rd Industrial Cities.",
    keySeoFocus: ["Technical B2B Catalogs", "Fast RFQ Forms", "High Domain Authority"],
    whatsappMsg: "Hello Unique Agency, I want B2B / Industrial SEO for our factory or company in Riyadh.",
  },
  {
    id: "rsec-en-law-finance",
    sectorName: "Law Firms, Financial Advisory & Company Formation",
    projectsCount: "+50 Advisory Firms",
    avgGrowth: "+285% Consultations",
    description: "Establishing legal and corporate authority targeting investors across Al Olaya and KAFD.",
    keySeoFocus: ["Authoritative Bilingual Copy", "Topical Clusters", "Investor Lead Funnels"],
    whatsappMsg: "Hello Unique Agency, I want an SEO strategy for our law / consulting firm in Riyadh.",
  },
  {
    id: "rsec-en-hospitality",
    sectorName: "Restaurants, Cafes, Hotels & Event Management",
    projectsCount: "+65 Brands & Venues",
    avgGrowth: "+340% Bookings & Visits",
    description: "Dominating Google Maps and event/hospitality searches across Riyadh Season, Diriyah, and North Riyadh.",
    keySeoFocus: ["Branch Maps Local SEO", "Multilingual SEO", "99/100 Mobile Speed"],
    whatsappMsg: "Hello Unique Agency, I want an SEO strategy for our hospitality / restaurant / events brand in Riyadh.",
  },
];

const UNIQUE_4_SEO_TABLES_RIYADH: SeoAuditTableGroup[] = [
  {
    id: "ryd-en-table-audit",
    tableTitle: "1. Comprehensive Riyadh Website SEO Audit",
    tableBadge: "Foundation Phase",
    items: [
      "Full engineering crawl via Screaming Frog before launching your Riyadh SEO campaign",
      "Current Google.com.sa SERP visibility and Riyadh Google Maps ranking analysis",
      "Deep reverse-engineering of your top 10 ranking competitors in Riyadh",
      "Quick-win page audit identifying high-impact ranking boosts in Weeks 1–4",
      "Bilingual keyword intelligence targeting Riyadh districts (Al Malqa, Olaya, KAFD, Al Sulay)",
      "Detecting duplicate content, broken canonicals, and index bloat—and fixing them at the code level",
      "Backlink profile health audit identifying toxic or spammy links for immediate Disavow",
      "Mobile Core Web Vitals inspection to eliminate heavy payloads and slow load times",
    ],
  },
  {
    id: "ryd-en-table-onpage",
    tableTitle: "2. On-Page & Technical SEO Engineering",
    tableBadge: "Code & Pages",
    items: [
      "Restructuring H1, H2, and H3 semantic hierarchies aligned with Riyadh buyer search intent",
      "Writing high-CTR Meta Titles and Meta Descriptions engineered to steal clicks from rivals",
      "Compressing images to WebP/AVIF formats with descriptive SEO Alt attributes",
      "Upgrading commercial service pages and Salla/Zid/Shopify product & collection copy",
      "Clean Permalink/URL structuring, 404 dead-link resolution, and 301 redirect mapping",
      "Configuring Robots.txt and Dynamic XML Sitemaps for instant Googlebot discovery",
      "Building Topical Internal Linking Silos that channel PageRank into your money pages",
      "Connecting Google Search Console, GA4, and deploying custom Schema.org JSON-LD graphs",
    ],
  },
  {
    id: "ryd-en-table-offpage",
    tableTitle: "3. Off-Page Authority & Riyadh Local SEO",
    tableBadge: "Authority & Maps",
    items: [
      "Full optimization and verification of your Google Business Profile for Riyadh Local 3-Pack",
      "Consistent NAP (Name, Address, Phone) citation building across trusted Saudi directories",
      "Publishing contextual White-Hat Dofollow Guest Posts on high-authority Saudi & Arab portals",
      "Safe, natural Anchor Text diversification protecting your domain against algorithm updates",
      "Generative Engine Optimization (GEO) for ChatGPT Search and Google AI Overviews visibility",
      "Review acquisition and response playbook to dominate local trust across Riyadh districts",
    ],
  },
  {
    id: "ryd-en-table-reporting",
    tableTitle: "4. Transparent Monthly Reporting & Scaling",
    tableBadge: "100% Data Transparency",
    items: [
      "Verified monthly performance report pulled directly from Google Search Console (GSC)",
      "Keyword ranking tracker monitoring Arabic & English terms across Riyadh and KSA",
      "Conversion tracking report covering organic traffic, phone calls, WhatsApp clicks, and store orders",
      "Full execution log of completed Technical SEO, On-Page updates, content, and acquired links",
      "Next-month expansion roadmap targeting newly uncovered high-ROI search opportunities",
    ],
  },
];

const UNIQUE_PORTFOLIO_PROJECTS: { name: string; category: string }[] = [
  { name: "Riyadh Gate Directory & Services", category: "Local Portal — Riyadh" },
  { name: "Al-Mamlakah General Contracting", category: "Corporate & Contracting — KSA" },
  { name: "Al-Badr Real Estate & Investment", category: "Real Estate Development" },
  { name: "Taqeem Cleaning & Maintenance", category: "Home & Commercial Services" },
  { name: "The Light House Diving & Tourism", category: "7-Language Global Portal" },
  { name: "Raneen Commercial Store", category: "Full E-Commerce Storefront" },
  { name: "Lamasat Design & Digital Agency", category: "Creative & Branding" },
  { name: "Qurani Educational Platform", category: "EdTech Platform" },
];

const NINETY_DAY_ROADMAP_RIYADH: NinetyDayPhase[] = [
  {
    phaseNum: "01",
    timeframe: "Weeks 1 - 2",
    title: "Search Console Audit & Code-Level Fixes",
    description:
      "We crawl your domain with Screaming Frog, resolve canonical/indexing errors, and boost mobile PageSpeed to 99/100.",
    tasks: ["Full Technical Audit", "Canonical & Sitemap Fix", "Core Web Vitals Speed", "Riyadh Geo Schema"],
    milestoneOutput: "100% technically healthy, ultra-fast website ready for rapid Google indexation",
  },
  {
    phaseNum: "02",
    timeframe: "Weeks 2 - 3",
    title: "Riyadh Competitor Audit & Keyword Blueprint",
    description:
      "We analyze top Riyadh competitors, extract high-ROI local, commercial & B2B keywords, and map them across your pages.",
    tasks: ["Riyadh District Keywords", "Competitor Gap Audit", "Silo Hierarchy Plan", "Zero Cannibalization"],
    milestoneOutput: "Approved revenue-driven keyword map and site architecture blueprint",
  },
  {
    phaseNum: "03",
    timeframe: "Weeks 4 - 6",
    title: "Service Page Rebuilding, On-Page & CTR Boost",
    description:
      "We craft high-CTR Meta Titles, rebuild service and category pages, structure internal links, and optimize WhatsApp CTAs.",
    tasks: ["High-CTR Meta Tags", "Service & Product Copy", "Internal Linking Silos", "WebP/AVIF Optimization"],
    milestoneOutput: "Significant jump in Google Search Console impressions and initial rankings",
  },
  {
    phaseNum: "04",
    timeframe: "Weeks 6 - 10",
    title: "Riyadh Google Maps Local Pack & AI Search (GEO)",
    description:
      "We optimize your Google Business Profile for Riyadh Map Pack rankings, publish topical clusters, and structure data for ChatGPT/AI Overviews.",
    tasks: ["Riyadh Maps 3-Pack", "Topical Content Clusters", "AI Search (GEO) Setup", "Review Optimization"],
    milestoneOutput: "Core keywords enter Page #1 with rising phone calls, RFQs, and store orders",
  },
  {
    phaseNum: "05",
    timeframe: "Weeks 8 - 12+",
    title: "White-Hat Digital PR & Sustained #1 Leadership",
    description:
      "We acquire safe, high-DR Dofollow Guest Posts on reputable Saudi/GCC portals and scale winning pages with transparent monthly reports.",
    tasks: ["Contextual Guest Posts", "Weekly GSC Tracking", "CRO Rate Scaling", "Monthly ROI Reports"],
    milestoneOutput: "Locked-in Top-3 rankings in Riyadh and compounding monthly SAR revenue",
  },
];

const RIYADH_SEO_PACKAGES_SAR: RiyadhSeoPackageSAR[] = [
  {
    id: "ryd-en-pkg-starter",
    packageName: "Riyadh Local & Starter SEO Plan",
    badgeText: "Ideal for Clinics, Offices & Local Service Companies in Riyadh",
    priceSAR: "1,850",
    billingCycle: "SAR / Month (Flexible — No Lock-In Contracts)",
    idealFor: "Service businesses, medical clinics, law firms, and restaurants targeting Riyadh",
    isPopular: false,
    keywordsCount: "Up to 20 High-Intent Local & Commercial Keywords in Riyadh",
    includedServices: [
      "Complete Technical SEO Audit & indexation fixes in Google Search Console",
      "Mobile Core Web Vitals & PageSpeed optimization",
      "Full On-Page SEO optimization for up to 10 core service pages",
      "Google Business Profile (Google Maps) setup and Riyadh Local Pack optimization",
      "6 expert human-written SEO articles or local landing pages per month (Arabic or English)",
      "Safe White-Hat contextual backlinks to build foundational domain authority",
    ],
    technicalAndContentFeatures: [
      "Custom Meta Titles, Descriptions, Dynamic Canonicals & Riyadh Local Schema",
      "Internal linking silo setup & WebP image compression",
    ],
    reportingAndSupport: "Detailed monthly Google Search Console report + Direct WhatsApp support",
    whatsappMsg: "Hello Unique Agency, I want to subscribe to the (Riyadh Local & Starter SEO Plan - 1,850 SAR/mo).",
  },
  {
    id: "ryd-en-pkg-pro",
    packageName: "Riyadh Market Domination & E-Commerce Plan",
    badgeText: "Most Popular for Competitive Riyadh Firms, Factories & Salla / Zid / Shopify Stores",
    priceSAR: "3,200",
    billingCycle: "SAR / Month (Complete Revenue-Driven Riyadh & KSA Suite)",
    idealFor: "E-Commerce stores (Salla, Zid, Shopify), contracting, factories, real estate & medical centers in Riyadh",
    isPopular: true,
    keywordsCount: "Up to 45 Competitive Commercial, B2B & Local Keywords in Riyadh & KSA",
    includedServices: [
      "Everything in Starter Plan + Deep Screaming Frog engineering audit & code fixes",
      "Full E-Commerce & Portal SEO (Categories, Filters, SAR Product Schema, and 30+ pages optimized monthly)",
      "Topical Authority strategy with 12 in-depth commercial articles or landing pages per month",
      "Multi-corridor Riyadh Local SEO (North Riyadh, Olaya, KAFD, Industrial City) & Maps Top-3 domination",
      "High-DR White-Hat Link Building & Digital PR on authoritative Saudi & GCC portals",
      "Generative Engine Optimization (GEO) for Google AI Overviews & ChatGPT Search visibility",
    ],
    technicalAndContentFeatures: [
      "Conversion Rate Optimization (CRO) for checkout & WhatsApp/RFQ lead funnels",
      "Monthly competitor tracking in Riyadh & new keyword opportunity capture",
    ],
    reportingAndSupport: "Bi-weekly & monthly verified GSC/GA4 reports + Dedicated Account Manager on WhatsApp",
    whatsappMsg: "Hello Unique Agency, I want to subscribe to the (Riyadh Market Domination & E-Commerce SEO Plan - 3,200 SAR/mo).",
  },
  {
    id: "ryd-en-pkg-enterprise",
    packageName: "Enterprise & National KSA Authority Plan",
    badgeText: "For Mega Stores, Real Estate Developers, Factories & Multi-Branch Groups",
    priceSAR: "5,500",
    billingCycle: "SAR / Month (Custom Full-Scale Market Leadership)",
    idealFor: "Large e-commerce catalogs, real estate/industrial groups, and enterprises targeting Riyadh & all KSA",
    isPopular: false,
    keywordsCount: "Unlimited Keyword Clusters (80+ Priority Commercial Terms)",
    includedServices: [
      "Dedicated full-stack Technical SEO engineering for Next.js, WordPress, Shopify Plus, Salla & Zid",
      "Continuous optimization across hundreds of product, category, and branch pages in Riyadh and KSA",
      "20+ pieces of authoritative bilingual (Arabic & English) commercial content per month",
      "High-authority Digital PR and editorial backlinks from premier regional and global publications",
      "Ongoing UI/UX speed optimization, custom schema graphs, and CRO split-testing",
      "Multilingual SEO management for global investors, Vision 2030 projects, and hospitality brands",
    ],
    technicalAndContentFeatures: [
      "Priority engineering & dev execution by our senior Next.js/WordPress/Shopify team",
      "Custom live ROI, lead attribution, and ranking dashboard",
    ],
    reportingAndSupport: "Weekly strategy calls & live reporting + 24/7 VIP engineering & SEO support",
    whatsappMsg: "Hello Unique Agency, I would like to inquire about the (Riyadh Enterprise & National SEO Plan - 5,500 SAR/mo).",
  },
];

const RIYADH_CHATGPT_QUESTIONS: ChatGptClientQuestion[] = [
  {
    tag: "AI Search & ChatGPT Visibility in Riyadh",
    q: "How does your Riyadh SEO company rank my business in ChatGPT and Google AI Overviews?",
    a: "When buyers and executives in Riyadh ask ChatGPT or Google AI Overviews 'What is the best company / clinic / store in Riyadh?', AI models retrieve recommendations from websites with verified semantic authority, clear direct-answer formatting, interconnected Schema.org JSON-LD, and strong local trust signals. We apply Generative Engine Optimization (GEO & AEO) so AI engines recommend your business first.",
  },
  {
    tag: "Outranking Legacy Competitors in Riyadh",
    q: "Riyadh is hyper-competitive—how do you outrank older, established websites?",
    a: "Most legacy websites ranking in Riyadh suffer from slow mobile speeds, outdated generic copy, missing district-level targeting, and zero AI Search optimization. We exploit these exact gaps by combining 99/100 engineering speed, deeper commercial content, hyper-local Riyadh district silos, and high-DR White-Hat Digital PR links.",
  },
  {
    tag: "In-House Engineering Advantage",
    q: "What sets Unique Digital Agency apart from other SEO agencies in Riyadh?",
    a: "Traditional SEO agencies hand you a theoretical PDF audit and tell you to find a developer. At Unique, we are a full-stack web engineering company (Next.js, WordPress, Shopify, Salla, Zid) and a specialized SEO agency—meaning our own engineers implement every code, speed, canonical, and schema fix directly while reporting transparently from Google Search Console.",
  },
  {
    tag: "B2B & Industrial SEO in Riyadh",
    q: "Does SEO work for factories, contractors, and B2B companies in Riyadh?",
    a: "Absolutely—SEO is the #1 highest-ROI lead channel for B2B companies and factories in Riyadh. Procurement managers, engineers, and project directors actively search Google for verified suppliers and contractors across Riyadh's Industrial Cities and Vision 2030 projects.",
  },
];

const RIYADH_SEO_FAQS: RiyadhSeoFaq[] = [
  {
    id: "rfaq-en-1",
    category: "Pricing & Plans",
    question: "How much do professional SEO services cost in Riyadh?",
    answer:
      "Our transparent monthly SEO packages in Riyadh start at 1,850 SAR/month for the Local & Starter Plan, 3,200 SAR/month for our popular Market Domination & E-Commerce Plan (for Salla, Zid, Shopify, factories, clinics, and contracting firms), and 5,500 SAR/month for Enterprise & National campaigns. Every plan includes full technical implementation, content, and safe White-Hat links with zero hidden fees.",
  },
  {
    id: "rfaq-en-2",
    category: "Timeline & ROI",
    question: "How long does it take to rank #1 on Google in Riyadh?",
    answer:
      "Technical indexation fixes, speed boosts, and rising Google Search Console impressions typically appear within the first 2 to 4 weeks. Strong Page #1 rankings for competitive Riyadh commercial keywords—alongside measurable growth in phone calls, WhatsApp RFQs, and store orders—are achieved within our 60 to 90-day execution roadmap.",
  },
  {
    id: "rfaq-en-3",
    category: "E-Commerce SEO",
    question: "Do you specialize in Salla, Zid, and Shopify SEO in Riyadh?",
    answer:
      "Yes! E-Commerce SEO for Saudi merchants is one of our core specialties. We restructure your store categories, optimize bilingual product copy, deploy SAR Product & Review Schema for rich snippets, and build commercial blog clusters that bring daily non-ad buyers directly to your checkout.",
  },
  {
    id: "rfaq-en-4",
    category: "Google Maps & Local SEO",
    question: "Can you rank my Riyadh business in the Top 3 on Google Maps?",
    answer:
      "Definitely. We optimize your Google Business Profile (GBP), build localized district pages (Al Malqa, Olaya, Al Yasmin, KAFD, Al Sulay), standardize NAP citations across Saudi directories, and execute a review growth strategy to secure Top-3 Map Pack visibility.",
  },
  {
    id: "rfaq-en-5",
    category: "Free Riyadh SEO Audit",
    question: "How can I claim a free SEO audit for my Riyadh website or store?",
    answer:
      "Simply click any WhatsApp button on this page to message our team directly at +201270506511 with your website URL. Within 24 hours, we will send you a comprehensive technical and competitor audit outlining your exact ranking opportunities in Riyadh completely free.",
  },
];

const RIYADH_SEMANTIC_KEYWORDS_EN: string[] = [
  "SEO Company in Riyadh",
  "Best SEO Agency Riyadh",
  "SEO Services Riyadh KSA",
  "Local SEO North Riyadh & Olaya",
  "Google Maps SEO Riyadh",
  "Salla Store SEO Riyadh",
  "Zid Store SEO Riyadh",
  "Shopify SEO Agency Riyadh",
  "B2B & Industrial SEO Riyadh",
  "Technical SEO Consultant Riyadh",
  "AI Search Optimization GEO Riyadh",
  "Medical Clinic SEO Al Malqa Riyadh",
  "Real Estate SEO North Riyadh",
  "White-Hat Link Building Saudi Arabia",
  "Arabic & English SEO Riyadh",
  "شركة سيو في الرياض",
];

// ============================================================================
// 5. JSON-LD STRUCTURED DATA SCHEMAS FOR RIYADH, SAUDI ARABIA (EN-SA)
// ============================================================================
const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.uniquee-ws.com/en/riyadh-seo#agency",
    name: "Unique Digital Agency - SEO Company in Riyadh",
    alternateName: "Unique SEO Agency Riyadh, Saudi Arabia",
    url: "https://www.uniquee-ws.com/en/riyadh-seo",
    telephone: "+201270506511",
    description:
      "Leading SEO Company in Riyadh specializing in Technical SEO, Google Maps Local Pack domination, B2B & Industrial SEO, E-Commerce SEO (Salla, Zid, Shopify), and AI Search Optimization (GEO) in Riyadh.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.7136,
      longitude: 46.6753,
    },
    areaServed: [
      { "@type": "City", name: "Riyadh" },
      { "@type": "City", name: "Diriyah" },
      { "@type": "AdministrativeArea", name: "Riyadh Province" },
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
    serviceType: "Search Engine Optimization (SEO) Services in Riyadh",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://www.uniquee-ws.com",
      telephone: "+201270506511",
    },
    areaServed: {
      "@type": "City",
      name: "Riyadh",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Riyadh Monthly SEO Packages (SAR)",
      itemListElement: RIYADH_SEO_PACKAGES_SAR.map((pkg) => ({
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
    mainEntity: RIYADH_SEO_FAQS.map((faq) => ({
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
        item: "https://www.uniquee-ws.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "SEO Company in Saudi Arabia",
        item: "https://www.uniquee-ws.com/en/saudi-seo",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "SEO Company in Riyadh",
        item: "https://www.uniquee-ws.com/en/riyadh-seo",
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
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold tracking-wide uppercase mb-5 ${
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
// MAIN PAGE COMPONENT — RIYADH SEO COMPANY (ENGLISH LTR)
// ============================================================================

export default function RiyadhSeoEnglishPage() {
  const heroAuditWhatsapp = getWhatsAppUrl(
    "Hello UNIQUE Digital Agency! I would like a Free Technical SEO & Local Riyadh Audit for my website / store."
  );

  return (
    <div
      dir="ltr"
      lang="en"
      className="min-h-screen bg-[#000000] text-white selection:bg-blue-500/30 selection:text-cyan-200 font-sans antialiased"
    >
      {/* Structured Data (JSON-LD with Riyadh GeoCoordinates 24.7136, 46.6753) */}
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
                Riyadh Growth &amp; Search Engineering
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a href="#services" className="hover:text-cyan-300 transition">
              Services
            </a>
            <a href="#districts" className="hover:text-cyan-300 transition">
              Riyadh Districts
            </a>
            <a href="#ecommerce" className="hover:text-cyan-300 transition">
              Salla &amp; Zid
            </a>
            <a href="#results" className="hover:text-cyan-300 transition">
              GSC Proof
            </a>
            <a href="#audit-tables" className="hover:text-cyan-300 transition">
              SEO Checklist
            </a>
            <a href="#packages" className="hover:text-cyan-300 transition">
              SAR Packages
            </a>
            <a href="#faq" className="hover:text-cyan-300 transition">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/riyadh-seo"
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
              <span>Free Riyadh Audit</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION — RIYADH SEO COMPANY + LIVE GSC & MAPS SIMULATOR
      ==================================================================== */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-neutral-900">
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
            <Link href="/en/saudi-seo" className="hover:text-cyan-300 transition">
              Saudi Arabia SEO
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-cyan-300 font-semibold">Riyadh SEO Company</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Riyadh, Kingdom of Saudi Arabia</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">Google Page #1 &amp; AI Search (GEO)</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
                Top{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  SEO Company in Riyadh
                </span>{" "}
                Engineered for Revenue, Maps &amp; AI Dominance
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                Stop burning budgets on rising Riyadh CPCs. <strong className="text-white">UNIQUE Digital Agency</strong>{" "}
                builds compounding organic search systems for Riyadh enterprises, clinics, real estate developers,
                industrial factories, and Salla/Zid stores—turning high-intent Arabic &amp; English searches into
                qualified WhatsApp leads and verified sales.
              </p>

              {/* Key Trust Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "Google Search Console Verified Traffic Growth",
                  "Riyadh Google Maps Local 3-Pack Domination",
                  "Salla, Zid, Shopify & Next.js Technical SEO",
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
                  <span>Request Free Riyadh SEO Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <span>View SAR Packages</span>
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
                  Transparent Monthly SAR Contracts — Zero Lock-In
                </span>
              </div>
            </div>

            {/* Hero Right Visual: Live Riyadh GSC & Google Maps Local 3-Pack Simulator */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                {/* Simulator Header */}
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Riyadh Live Search Telemetry
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    +318% Organic Growth
                  </span>
                </div>

                {/* GSC Metrics Strip */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Total Clicks</div>
                    <div className="text-xl font-black text-blue-400">48.6K</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">↑ 284% YoY</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Impressions</div>
                    <div className="text-xl font-black text-cyan-300">1.42M</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">↑ Riyadh KSA</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Avg. Position</div>
                    <div className="text-xl font-black text-amber-300">#1.8</div>
                    <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">Money Terms</div>
                  </div>
                </div>

                {/* Visual Growth Bars */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      90-Day Organic Click Trajectory
                    </span>
                    <span className="text-[11px] text-neutral-500">GSC Verified</span>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-24 pt-2">
                    {[18, 24, 31, 42, 55, 68, 82, 100].map((h, i) => (
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

                {/* Riyadh Google Maps Local 3-Pack Preview */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      Riyadh Local 3-Pack Snapshot
                    </span>
                    <span className="text-[11px] text-amber-300 font-semibold">Olaya • KAFD • Al-Malqa</span>
                  </div>
                  {[
                    { rank: "#1", name: "Your Riyadh Brand (Optimized by UNIQUE)", rating: "4.9 ★ (240+)", calls: "+190 Calls/mo" },
                    { rank: "#2", name: "Riyadh Competitor A", rating: "4.4 ★ (58)", calls: "Missing Schema" },
                    { rank: "#3", name: "Riyadh Competitor B", rating: "4.1 ★ (31)", calls: "Slow Mobile LCP" },
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
                        {row.calls}
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
            badge="Riyadh ROI Economics"
            title="Why Smart Riyadh CEOs Invest in"
            highlight="Compounding SEO Over Ads Alone"
            subtitle="Compare UNIQUE's engineered Riyadh SEO system against Google/Snapchat paid ads and low-cost generic SEO agencies."
          />

          <div className="overflow-x-auto rounded-3xl border border-neutral-800 bg-[#060911]">
            <table className="w-full text-left border-collapse min-w-[780px]">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-950/90">
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                    Evaluation Criterion
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-cyan-300 bg-blue-500/10">
                    UNIQUE Riyadh SEO System
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-amber-300">
                    Paid Ads (Google / Snap)
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                    Cheap / Generic SEO
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80 text-sm">
                {SEO_VS_ADS_COMPARISON_RIYADH.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/40 transition">
                    <td className="py-4 px-6 font-bold text-white">{row.criterion}</td>
                    <td className="py-4 px-6 text-emerald-300 font-semibold bg-blue-500/[0.04]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.uniqueSeo}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-neutral-300">{row.paidAds}</td>
                    <td className="py-4 px-6 text-neutral-400">{row.traditionalOrCheapSeo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. 6 CORE RIYADH SEO SERVICES
      ==================================================================== */}
      <section id="services" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Full-Stack Search Engineering"
            title="6 Core SEO Pillars Built for"
            highlight="Riyadh's Competitive Market"
            subtitle="Every pillar is executed in-house by technical SEO engineers, bilingual Arabic/English strategists, and conversion specialists."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {CORE_SEO_SERVICES_RIYADH.map((service) => (
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
                  <div className="text-xs font-semibold text-blue-400 mb-4">{service.arabicSubtitle}</div>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-5">{service.summary}</p>

                  <div className="rounded-2xl bg-emerald-500/8 border border-emerald-500/25 p-4 mb-6">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-300 mb-1">
                      Riyadh Business Impact
                    </div>
                    <p className="text-xs text-neutral-200 leading-relaxed">
                      {service.businessImpactInRiyadh}
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
          5. HYPER-LOCAL RIYADH COMMERCIAL CORRIDORS (4 DISTRICTS)
      ==================================================================== */}
      <section id="districts" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Hyper-Local Geo-Targeting"
            title="District-by-District SEO Across"
            highlight="Riyadh's 4 Commercial Corridors"
            subtitle="Generic Saudi SEO fails in Riyadh. We engineer neighborhood landing pages, LocalBusiness GeoCoordinates, and Maps prominence tailored to each Riyadh hub."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {RIYADH_DISTRICTS_ZONES.map((zone) => (
              <div
                key={zone.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-cyan-500/40 p-7 transition"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{zone.arabicTag}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {zone.districtTitle}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                  {zone.commercialCharacter}
                </p>

                <div className="mb-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2.5">
                    Key Target Businesses
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

                <div className="mb-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                    Local SEO Execution
                  </div>
                  <ul className="space-y-2">
                    {zone.localSeoActions.map((act, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-800/80">
                  <div className="text-[11px] font-bold text-neutral-500 uppercase mb-2">
                    High-Intent District Keywords
                  </div>
                  <div className="flex flex-wrap gap-1.5">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. RIYADH E-COMMERCE SEO (SALLA, ZID, SHOPIFY & NEXT.JS)
      ==================================================================== */}
      <section id="ecommerce" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Saudi E-Commerce Growth"
            title="Specialized E-Commerce SEO for"
            highlight="Salla, Zid, Shopify & Custom Stores"
            subtitle="Turn your Riyadh online store into an organic sales engine with clean faceted indexing, Product + Offer SAR Schema, and commercial category hubs."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {ECOMMERCE_SEO_PLATFORMS_RIYADH.map((plat) => (
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
                      Expected 90-Day Impact
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
          7. DOCUMENTED GSC RESULTS + 6 RIYADH SECTORS
      ==================================================================== */}
      <section id="results" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Verified Search Console Proof"
            title="Real Organic Growth Across"
            highlight="Riyadh Businesses & Industries"
            subtitle="No broken counters or vanity promises—every campaign is measured by Google Search Console clicks, Maps calls, and qualified revenue."
          />

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-20">
            {GSC_DOCUMENTED_RESULTS_RIYADH.map((cs) => (
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
                    {cs.districtInRiyadh} • {cs.platform}
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
                    Ranked Commercial Terms ({cs.impressionsAfter} Imp.)
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

          {/* 6 Specialized Riyadh Sectors */}
          <SectionHeader
            badge="Sector Playbooks"
            title="Specialized SEO Playbooks for"
            highlight="6 High-Value Riyadh Sectors"
            subtitle="We tailor keyword intent, compliance, schema types, and conversion funnels for Riyadh's highest-demand verticals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RIYADH_6_SECTORS.map((sec) => (
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
            subtitle="Every Riyadh campaign undergoes our signature 4-part execution matrix—audited, verified, and tracked in real time."
          />

          {/* 4 Signature SEO Tables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {UNIQUE_4_SEO_TABLES_RIYADH.map((table) => (
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
            {/* Live SEO Terminal */}
            <div className="lg:col-span-6 rounded-3xl bg-[#050811] border border-cyan-500/30 p-6 font-mono text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="ml-2 text-neutral-400 font-sans font-bold">
                      unique-seo-cli — Riyadh Diagnostic Engine
                    </span>
                  </div>
                  <span className="text-emerald-400">ONLINE</span>
                </div>
                <div className="space-y-2.5 text-neutral-300 leading-relaxed">
                  <div>
                    <span className="text-cyan-400">$</span> unique-audit --target=&quot;riyadh-ksa&quot; --domain=&quot;uniquee-ws.com&quot;
                  </div>
                  <div className="text-emerald-400">
                    ✓ [Core Web Vitals] Mobile LCP: 1.1s | INP: 42ms | CLS: 0.00
                  </div>
                  <div className="text-emerald-400">
                    ✓ [Geo-Schema] LocalBusiness + GeoCoordinates (24.7136, 46.6753) Valid
                  </div>
                  <div className="text-emerald-400">
                    ✓ [Bilingual Hreflang] ar-SA &lt;-&gt; en-SA Reciprocal Mapping Verified
                  </div>
                  <div className="text-blue-300">
                    ✓ [AI Search / GEO] Entity Citation Readiness: 98/100 (ChatGPT &amp; Perplexity)
                  </div>
                  <div className="text-amber-300">
                    ✓ [Riyadh Maps 3-Pack] Olaya • KAFD • Diriyah • Al-Malqa Signals Active
                  </div>
                  <div className="pt-2 text-neutral-400">
                    &gt; Ready to audit your Riyadh domain in 24 hours...
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
                  <span>Run My Audit</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Real Portfolio Projects */}
            <div className="lg:col-span-6 rounded-3xl bg-[#070B14] border border-neutral-800 p-6 sm:p-7">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                    Verified UNIQUE Portfolio
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    Featured Saudi &amp; Regional Projects
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
          9. 90-DAY RIYADH SEO EXECUTION ROADMAP
      ==================================================================== */}
      <section className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Predictable Execution"
            title="Your 90-Day Riyadh SEO"
            highlight="Growth & Ranking Roadmap"
            subtitle="Clear milestones from Day 1 technical recovery to Day 90 Page-1 commercial keyword dominance."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {NINETY_DAY_ROADMAP_RIYADH.map((phase) => (
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
          10. TRANSPARENT SAR PACKAGES
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Transparent Riyadh Pricing"
            title="Monthly Riyadh SEO Packages"
            highlight="in Saudi Riyals (SAR)"
            subtitle="Clear deliverables, direct Search Console reporting, and zero hidden fees. Choose the growth velocity that fits your Riyadh business."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {RIYADH_SEO_PACKAGES_SAR.map((pkg) => (
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
                    <span className="text-4xl font-black text-white">{pkg.priceSAR}</span>
                    <span className="text-sm font-bold text-cyan-300">{pkg.billingCycle}</span>
                  </div>

                  <div className="mb-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                      Core Execution Included
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
                      Technical &amp; Content Stack
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
          {/* ChatGPT & AI Overviews Q&A */}
          <SectionHeader
            badge="AI Search & GEO Readiness"
            title="Questions Riyadh Founders Ask"
            highlight="ChatGPT & Google AI Before Hiring"
            subtitle="Structured, authoritative answers engineered for both decision-makers and generative search engines."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {RIYADH_CHATGPT_QUESTIONS.map((item, idx) => (
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

          {/* Standard FAQ Accordion */}
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Everything About Hiring an"
            highlight="SEO Company in Riyadh"
            subtitle="Direct answers on timelines, SAR pricing, Salla/Zid stores, Google Maps ranking, and bilingual execution."
          />

          <div className="max-w-4xl mx-auto space-y-4 mb-20">
            {RIYADH_SEO_FAQS.map((faq) => (
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
              Riyadh Semantic Search Coverage
            </div>
            <h3 className="text-lg font-extrabold text-white mb-5">
              Core Commercial &amp; Local Search Clusters We Target in Riyadh
            </h3>
            <div className="flex flex-wrap gap-2">
              {RIYADH_SEMANTIC_KEYWORDS_EN.map((kw, idx) => (
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
          12. FINAL FREE RIYADH SEO AUDIT CTA & FOOTER
      ==================================================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B1730] via-[#070D1A] to-[#051418] border border-blue-500/35 p-8 sm:p-12 lg:p-14 text-center shadow-2xl shadow-blue-950/50">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Limited Monthly Onboarding Slots in Riyadh</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Ready to Own Page #1 of Google in{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Riyadh?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              Send us your website or Salla/Zid store link on WhatsApp and receive a complimentary
              24-hour technical audit, Riyadh competitor keyword gap analysis, and a tailored 90-day
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
                <span>Claim Your Free Riyadh SEO Audit</span>
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

          {/* Minimal Footer Links */}
          <footer className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <div>
              © {new Date().getFullYear()} UNIQUE Digital Agency — Riyadh SEO &amp; Search Growth Engineering.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/riyadh-seo" className="hover:text-cyan-300 transition">
                شركة سيو في الرياض (AR)
              </Link>
              <Link href="/en/saudi-seo" className="hover:text-cyan-300 transition">
                Saudi Arabia SEO
              </Link>
              <Link href="/en/jeddah-seo" className="hover:text-cyan-300 transition">
                Jeddah SEO
              </Link>
              <Link href="/en/uae-seo" className="hover:text-cyan-300 transition">
                UAE SEO
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}