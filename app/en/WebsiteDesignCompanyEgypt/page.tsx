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

function Code2({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="18 16 22 12 18 8" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="14" x2="10" y1="4" y2="20" />
    </svg>
  );
}

function Zap({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
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

function CreditCard({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
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
// NEXT.JS METADATA — EGYPT WEB DESIGN COMPANY (ENGLISH LTR)
// ============================================================================

export const metadata: Metadata = {
  title:
    "Web Design Company in Egypt | Next.js, WordPress & E-Commerce — UNIQUE",
  description:
    "Top web design and development company in Egypt building ultra-fast Next.js, WordPress, WooCommerce, Shopify & EasyOrder websites. 98+ PageSpeed, Paymob, Fawry, InstaPay & Bosta integration, and transparent EGP packages starting at 8,500 EGP.",
  keywords: [
    "Web Design Company in Egypt",
    "Best Web Development Agency Egypt",
    "Website Design Prices in Egypt",
    "E-Commerce Website Development Egypt",
    "Web Design Company Cairo",
    "Web Design Company Alexandria",
    "Next.js Development Agency Egypt",
    "WordPress Web Design Egypt",
    "Paymob Bosta E-Commerce Integration Egypt",
    "Corporate Website Design Egypt 2026",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/en/egypt-web-design",
    languages: {
      "en-EG": "https://www.uniquee-ws.com/en/egypt-web-design",
      "ar-EG": "https://www.uniquee-ws.com/egypt-web-design",
      "x-default": "https://www.uniquee-ws.com/egypt-web-design",
    },
  },
  openGraph: {
    title: "Web Design Company in Egypt — UNIQUE Digital Agency",
    description:
      "High-converting corporate websites and e-commerce stores engineered for speed, SEO dominance, and 100% client ownership across Cairo, Alexandria, and Egypt.",
    url: "https://www.uniquee-ws.com/en/egypt-web-design",
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

interface TechStackRow {
  criterion: string;
  nextjsStack: string;
  wordpressStack: string;
  ecommercePlatforms: string;
}

interface WebServicePillar {
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

interface EgyptGatewayItem {
  id: string;
  category: "Egyptian Payment Gateways" | "Shipping & Logistics Partners";
  name: string;
  tag: string;
  details: string;
  features: string[];
}

interface EgyptHubZone {
  id: string;
  zoneTitle: string;
  badgeTag: string;
  commercialCharacter: string;
  targetBusinesses: string[];
  webActions: string[];
  localKeywords: string[];
}

interface EgyptSectorItem {
  id: string;
  sectorName: string;
  deliveryTime: string;
  highlightMetric: string;
  description: string;
  keyFeatures: string[];
  whatsappMsg: string;
}

interface QualityTableGroup {
  id: string;
  tableTitle: string;
  tableBadge: string;
  items: string[];
}

interface ExecutionStep {
  stepNum: string;
  timeframe: string;
  title: string;
  description: string;
  tasks: string[];
  milestoneOutput: string;
}

interface EgyptWebPackageEGP {
  id: string;
  packageName: string;
  badgeText: string;
  priceEGP: string;
  billingCycle: string;
  idealFor: string;
  isPopular: boolean;
  deliveryBadge: string;
  includedFeatures: string[];
  technicalSpecs: string[];
  ownershipAndSupport: string;
  whatsappMsg: string;
}

interface ChatGptClientQuestion {
  tag: string;
  q: string;
  a: string;
}

interface EgyptWebFaq {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// DATA ARRAYS — EGYPT WEB DESIGN MARKET (2026, ENGLISH)
// ============================================================================

const HERO_KPIS: HeroKpiCard[] = [
  {
    id: "speed",
    value: "98+",
    title: "Google Lighthouse Speed Score",
    subtitle: "Sub-1.2s mobile loading on Egyptian 4G networks so paid and organic visitors never bounce.",
    accent: "emerald",
  },
  {
    id: "ownership",
    value: "100%",
    title: "Full Domain & Source Ownership",
    subtitle: "Your domain, hosting, admin dashboard, and source code are registered in your name with zero lock-in.",
    accent: "cyan",
  },
  {
    id: "seo",
    value: "SEO-First",
    title: "Built to Rank on Google & AI",
    subtitle: "Clean semantic HTML, JSON-LD Schema Markup, and crawlable architecture from Day 1 of launch.",
    accent: "blue",
  },
  {
    id: "egp",
    value: "8,500 EGP",
    title: "Transparent EGP Packages",
    subtitle: "Clear pricing for corporate sites & stores with Paymob, Fawry, InstaPay, ValU, and Bosta ready.",
    accent: "amber",
  },
];

const TECH_STACK_COMPARISON_EGYPT: TechStackRow[] = [
  {
    criterion: "Best Fit in the Egyptian Market",
    nextjsStack: "Enterprises, real estate developers, tourism portals & high-competition SEO leaders",
    wordpressStack: "Corporate websites, clinics, consulting offices & mid-size WooCommerce stores",
    ecommercePlatforms: "Egyptian Local Brands running high-volume Meta & TikTok ad campaigns (Shopify / EasyOrder)",
  },
  {
    criterion: "Page Speed (Core Web Vitals)",
    nextjsStack: "Fastest possible (0.6s – 1.1s LCP) with 98+ mobile Lighthouse scores",
    wordpressStack: "Very fast (1.4s – 1.9s) when engineered cleanly without bloated page builders",
    ecommercePlatforms: "Fast cloud-hosted checkout engineered to handle sudden ad traffic spikes",
  },
  {
    criterion: "SEO & AI Search (GEO) Strength",
    nextjsStack: "Exceptional — Server-Side Rendering + custom JSON-LD Schema per route",
    wordpressStack: "Strong with clean URL hierarchy, XML Sitemaps, and structured Schema",
    ecommercePlatforms: "Solid on Shopify with optimized collection hubs & Product Offer Schema",
  },
  {
    criterion: "Egypt Payment & Shipping Integration",
    nextjsStack: "Direct API integration with Paymob, Fawry, InstaPay, Bosta, and ERP/CRM",
    wordpressStack: "Instant stable plugins for Paymob, Fawry, ValU, Vodafone Cash & Bosta",
    ecommercePlatforms: "Turnkey integration with Paymob, Cash on Delivery (COD) & local couriers",
  },
  {
    criterion: "Content & Store Management",
    nextjsStack: "Modern bilingual Sanity CMS dashboard with instant real-time publishing",
    wordpressStack: "Familiar WordPress dashboard for easy text, image, and blog updates",
    ecommercePlatforms: "Purpose-built daily order, inventory, and fulfillment management",
  },
  {
    criterion: "Typical Delivery Timeline",
    nextjsStack: "14 – 21 business days depending on custom integrations and languages",
    wordpressStack: "7 – 12 business days for standard corporate sites and stores",
    ecommercePlatforms: "5 – 10 business days to launch store with payment & shipping live",
  },
];

const CORE_WEB_SERVICES_EGYPT: WebServicePillar[] = [
  {
    id: "corporate-websites",
    number: "01",
    badge: "Corporate & Enterprise",
    title: "Corporate Website Design in Egypt",
    arabicTag: "تصميم مواقع الشركات والمؤسسات",
    summary:
      "We design bespoke corporate websites that position your Egyptian business as an industry leader across Egypt and the GCC—custom UI/UX without recycled templates, structured to turn visitors into qualified WhatsApp inquiries and RFQ leads.",
    businessImpactInEgypt:
      "Elevates brand authority in B2B tenders and executive meetings while acting as a 24/7 digital sales representative.",
    executionChecklist: [
      "Custom UI/UX design tailored to your brand identity and audience expectations",
      "Complete page architecture (Home, About, Services, Portfolio, Blog, Contact)",
      "Mobile-First responsive engineering tested across iOS and Android devices",
      "Direct WhatsApp smart buttons, RFQ quote forms, and Google Maps embeds",
      "Official branded business emails (info@yourcompany.com) and SSL security",
    ],
    deliverables: [
      "100% Domain & Hosting Ownership",
      "Easy Admin Dashboard",
      "HTTPS / SSL Security",
      "SEO-Ready Architecture",
    ],
    whatsappText: "Hello UNIQUE! I want to design a professional corporate website for my company in Egypt.",
  },
  {
    id: "ecommerce-egypt",
    number: "02",
    badge: "E-Commerce Engineering",
    title: "E-Commerce Store Development (WooCommerce • Shopify • EasyOrder)",
    arabicTag: "تصميم المتاجر الإلكترونية في مصر",
    summary:
      "We build high-converting Egyptian online stores engineered to handle Meta, Instagram, and TikTok ad bursts—featuring streamlined one-page checkout flows that slash cart abandonment and maximize order completion.",
    businessImpactInEgypt:
      "Boosts checkout conversion rates by up to 40% by seamlessly supporting Cash on Delivery (COD) alongside Paymob, Fawry, and ValU installments.",
    executionChecklist: [
      "Conversion-focused product pages with size/color variants and social proof",
      "Full Egyptian payment integration (Paymob, Fawry, ValU, InstaPay, Vodafone Cash)",
      "Automated courier integration (Bosta, Aramex, Mylerz) with governorate shipping rates",
      "Accurate Meta Conversions API (CAPI), TikTok Pixel, and Google Analytics GA4 tracking",
      "Promo codes, upsell/cross-sell bundles, and automated WhatsApp abandoned cart recovery",
    ],
    deliverables: [
      "Launch-Ready Online Store",
      "Payment & Shipping Live",
      "Staff Order Training",
      "Ad Pixel & CAPI Setup",
    ],
    whatsappText: "Hello UNIQUE! I want to build an e-commerce store in Egypt with Paymob and Bosta integration.",
  },
  {
    id: "nextjs-custom",
    number: "03",
    badge: "Peak Speed & Modern Stack",
    title: "Custom Next.js & React + Sanity CMS Platforms",
    arabicTag: "برمجة مواقع Next.js فائقة السرعة",
    summary:
      "When your business demands a decisive technical edge over every competitor in Egypt, we engineer custom web platforms with Next.js App Router and Sanity CMS—delivering instant page loads, enterprise security, and unmatched Google SEO performance.",
    businessImpactInEgypt:
      "Ideal for real estate developers, medical centers, tourism portals, and high-growth startups targeting top-3 Google rankings on competitive keywords.",
    executionChecklist: [
      "98+ Google PageSpeed Insights with Server-Side Rendering (SSR) and Edge CDN",
      "Intuitive bilingual Sanity CMS for effortless articles, projects, and page updates",
      "Native multi-language support (Arabic RTL, English LTR, European languages) with Hreflang",
      "Automated dynamic XML Sitemaps and tailored JSON-LD Schema for every route",
      "Scalable architecture ready for CRM, ERP, booking engines, and AI integrations",
    ],
    deliverables: [
      "Clean 100% TypeScript Code",
      "Edge Cloud Hosting",
      "Sanity CMS Studio",
      "Core Web Vitals Guarantee",
    ],
    whatsappText: "Hello UNIQUE! I want to build a custom high-speed Next.js website for my project in Egypt.",
  },
  {
    id: "landing-pages-cro",
    number: "04",
    badge: "Ad ROI Multiplier",
    title: "High-Converting Ad Landing Pages (CRO)",
    arabicTag: "تصميم صفحات هبوط عالية التحويل",
    summary:
      "Sending paid Google, Meta, or TikTok traffic to a slow homepage wastes half your ad budget. We design persuasive, sub-second landing pages with direct-response copywriting built to capture leads and bookings immediately.",
    businessImpactInEgypt:
      "Lowers Cost Per Lead (CPL/CPA) and improves lead quality for your Egyptian sales team.",
    executionChecklist: [
      "Persuasive Arabic & English copywriting addressing local buyer objections",
      "Sub-second load time to eliminate ad-click bounce on mobile networks",
      "Pre-filled WhatsApp CTAs and frictionless lead capture forms",
      "Full conversion tracking via Google Tag Manager, GA4, and Meta CAPI",
      "Designed Mobile-First for Egypt's 85%+ smartphone ad audience",
    ],
    deliverables: [
      "Full CRO Landing Page",
      "Sales Copywriting",
      "Conversion Tracking",
      "3–5 Day Fast Delivery",
    ],
    whatsappText: "Hello UNIQUE! I need a high-converting landing page for my paid ad campaigns in Egypt.",
  },
  {
    id: "website-redesign",
    number: "05",
    badge: "Modernization & SEO Rescue",
    title: "Website Redesign & Performance Upgrade (Zero SEO Loss)",
    arabicTag: "تطوير وإعادة تصميم المواقع القديمة",
    summary:
      "If your current site looks outdated, loads slowly, or fails to convert mobile visitors, we rebuild it from the ground up with a modern UI/UX and strict 301 Redirect migration so you keep every existing Google ranking—and climb higher.",
    businessImpactInEgypt:
      "Refreshes your brand image and doubles inquiry rates without losing a single indexed URL or organic visitor.",
    executionChecklist: [
      "Full audit of existing pages, top-performing URLs, and backlink equity",
      "Precision 301 Redirect mapping to preserve search rankings during launch",
      "Modern responsive UI/UX overhaul with WebP/AVIF media optimization",
      "Security hardening, code cleanup, and Core Web Vitals remediation",
      "Post-launch Google Search Console re-indexing and monitoring",
    ],
    deliverables: [
      "Legacy Site Audit",
      "Safe 301 Redirect Map",
      "Modern UI/UX Rebuild",
      "Instant Speed Boost",
    ],
    whatsappText: "Hello UNIQUE! I have an existing website and want to redesign it without losing Google rankings.",
  },
  {
    id: "multilingual-portals",
    number: "06",
    badge: "Export & Global Reach",
    title: "Multilingual Websites for Export, Tourism & International Firms",
    arabicTag: "تصميم مواقع متعددة اللغات للتصدير والسياحة",
    summary:
      "Built for Egyptian export factories, Red Sea tourism/diving operators, and regional consultancies targeting the GCC and Europe—supporting 2 to 7 languages with clean RTL/LTR layouts and international SEO.",
    businessImpactInEgypt:
      "Opens hard-currency export contracts and international bookings by presenting your brand natively in your buyer's language.",
    executionChecklist: [
      "Seamless RTL (Arabic) and LTR (English, German, French, etc.) design parity",
      "Dedicated clean language routes (/ar/, /en/, /de/) with reciprocal Hreflang",
      "Unified CMS dashboard to manage all language versions from one place",
      "Multi-currency tourism booking or B2B export RFQ forms",
      "Global CDN edge delivery for instant speed across Europe, GCC, and Egypt",
    ],
    deliverables: [
      "Multilingual Architecture",
      "International Hreflang",
      "RFQ / Booking Flows",
      "Global Edge CDN",
    ],
    whatsappText: "Hello UNIQUE! I need a multilingual website for my export or tourism business in Egypt.",
  },
];

const EGYPT_PAYMENT_SHIPPING_GATEWAYS: EgyptGatewayItem[] = [
  {
    id: "paymob",
    category: "Egyptian Payment Gateways",
    name: "Paymob Integration",
    tag: "Visa • Mastercard • Meeza • Wallets",
    details: "Egypt's leading payment gateway integrated directly via secure API for frictionless online checkout.",
    features: [
      "Accept Visa, Mastercard, and local Egyptian Meeza debit/credit cards",
      "Support mobile wallets (Vodafone Cash, Orange Cash, Etisalat Cash)",
      "Built-in ValU & Egyptian bank installment options inside checkout",
    ],
  },
  {
    id: "fawry-instapay",
    category: "Egyptian Payment Gateways",
    name: "Fawry & InstaPay Workflows",
    tag: "High-Trust Local Egyptian Payments",
    details: "Offer the exact payment methods Egyptian shoppers trust most across every governorate.",
    features: [
      "Automated Fawry Pay reference codes for cash/kiosk and app settlement",
      "Streamlined InstaPay instant transfer instructions with WhatsApp verification",
      "Smart Cash on Delivery (COD) confirmation flow to reduce return rates",
    ],
  },
  {
    id: "bosta-mylerz",
    category: "Shipping & Logistics Partners",
    name: "Bosta & Mylerz Automation",
    tag: "Nationwide Egypt Fulfillment",
    details: "Direct store-to-courier integration for automated airway bills (AWBs) and live shipment tracking.",
    features: [
      "Auto-calculated shipping rates by governorate (Cairo, Alex, Delta, Upper Egypt)",
      "One-click AWB generation directly from your store admin dashboard",
      "Automated customer status updates and COD reconciliation",
    ],
  },
  {
    id: "aramex-dhl",
    category: "Shipping & Logistics Partners",
    name: "Aramex & DHL Express",
    tag: "GCC & International Shipping",
    details: "Built for Egyptian brands expanding sales to Saudi Arabia, UAE, Kuwait, and Europe.",
    features: [
      "Automated weight- and zone-based international shipping calculations",
      "Multi-currency storefront support (EGP, SAR, AED, USD, EUR)",
      "Real-time international tracking and country-level sales analytics",
    ],
  },
];

const EGYPT_COMMERCIAL_HUBS: EgyptHubZone[] = [
  {
    id: "new-cairo-capital",
    zoneTitle: "New Cairo, Fifth Settlement & New Administrative Capital",
    badgeTag: "Corporate HQ & Real Estate Hub",
    commercialCharacter:
      "Egypt's premier cluster for real estate developers, holding companies, luxury medical clinics, and engineering/legal consultancies.",
    targetBusinesses: [
      "Real Estate Developers & Brokerages",
      "Aesthetic & Specialized Medical Clinics",
      "Engineering & Legal Consultancies",
      "Tech Startups & Enterprise B2B",
    ],
    webActions: [
      "Custom real estate portals with instant compound/unit filters and CRM sync",
      "Executive-grade UI/UX engineered to elevate brand trust and booking velocity",
      "LocalBusiness GeoCoordinates & Google Maps prominence for New Cairo & NAC",
    ],
    localKeywords: [
      "Web Design Company New Cairo",
      "Real Estate Website Design Egypt",
      "Fifth Settlement Web Development",
    ],
  },
  {
    id: "zayed-october-mohandessin",
    zoneTitle: "Sheikh Zayed, 6th of October, Mohandessin & Maadi",
    badgeTag: "Local Brands & Commercial Services",
    commercialCharacter:
      "Thriving center for fast-growing Egyptian Local Brands, interior design studios, medical labs, training academies, and service firms.",
    targetBusinesses: [
      "Egyptian Local Fashion & Beauty Brands",
      "Interior Design & Finishing Studios",
      "Medical Centers & Diagnostic Labs",
      "Training Academies & Courses",
    ],
    webActions: [
      "High-speed e-commerce stores synced with Paymob and Bosta for West/South Cairo",
      "High-resolution, fast-loading project galleries for interior design firms",
      "Dedicated ad landing pages optimized for Meta & TikTok conversion campaigns",
    ],
    localKeywords: [
      "Web Design Sheikh Zayed",
      "E-Commerce Agency 6th of October",
      "Web Development Maadi Cairo",
    ],
  },
  {
    id: "alexandria-north-coast",
    zoneTitle: "Alexandria, North Coast & Tourism/Logistics Corridor",
    badgeTag: "Maritime, Export & Hospitality",
    commercialCharacter:
      "Major hub for maritime shipping, customs clearance, import/export trading, Red Sea & North Coast hospitality, and regional commerce.",
    targetBusinesses: [
      "Shipping, Freight & Maritime Agencies",
      "Import & Export Trading Companies",
      "Hotels, Resorts & Diving Centers",
      "Regional Commercial Enterprises",
    ],
    webActions: [
      "Multilingual portals (Arabic, English, European languages) for tourism & logistics",
      "Shipment tracking inquiry tools and instant international quotation forms",
      "Combined local Alexandria SEO and international Google search targeting",
    ],
    localKeywords: [
      "Web Design Company Alexandria",
      "Logistics Website Development Egypt",
      "Multilingual Tourism Website Egypt",
    ],
  },
  {
    id: "industrial-cities",
    zoneTitle: "10th of Ramadan, Obour, Sadat & Borg El Arab Industrial Cities",
    badgeTag: "Manufacturing & B2B Export",
    commercialCharacter:
      "Egypt's industrial backbone—food processing, packaging, chemicals, textiles, furniture, and industrial supplies targeting regional & global buyers.",
    targetBusinesses: [
      "Food & Agricultural Export Factories",
      "Plastics, Packaging & Chemical Plants",
      "Industrial Machinery & B2B Suppliers",
      "Furniture & Textile Manufacturers",
    ],
    webActions: [
      "Structured B2B product catalogs with technical specs and downloadable PDFs",
      "Dedicated ISO certification, production line, and quality assurance showcases",
      "Bilingual Arabic/English wholesale & export RFQ quotation funnels",
    ],
    localKeywords: [
      "Factory Website Design Egypt",
      "B2B Export Catalog Website Egypt",
      "Industrial Web Development Cairo",
    ],
  },
];

const EGYPT_8_SECTORS: EgyptSectorItem[] = [
  {
    id: "real-estate",
    sectorName: "Real Estate & Developers",
    deliveryTime: "12 – 18 Days",
    highlightMetric: "Instant Unit Filtering",
    description:
      "Property portals showcasing compounds, payment plans, and unit specs by area and budget with direct CRM & WhatsApp lead routing.",
    keyFeatures: [
      "Dedicated SEO pages per compound and developer",
      "Built-in installment & down-payment calculators",
      "Instant WhatsApp sales & brochure downloads",
    ],
    whatsappMsg: "Hello UNIQUE! I want to design a real estate website in Egypt.",
  },
  {
    id: "medical-clinics",
    sectorName: "Medical Clinics & Centers",
    deliveryTime: "7 – 12 Days",
    highlightMetric: "Online Booking",
    description:
      "Trust-building medical websites for doctors, dental centers, and aesthetic clinics designed to streamline patient appointments.",
    keyFeatures: [
      "Doctor profiles, specialties, and before/after galleries",
      "Appointment booking & Google Maps branch integration",
      "Patient-focused medical blog engineered for Google SEO",
    ],
    whatsappMsg: "Hello UNIQUE! I want to build a website for my medical clinic in Egypt.",
  },
  {
    id: "factories-export",
    sectorName: "Factories & Export Trading",
    deliveryTime: "10 – 15 Days",
    highlightMetric: "B2B Bilingual Catalog",
    description:
      "Industrial portals presenting production lines, ISO certifications, and spec sheets to win international importers in GCC and Europe.",
    keyFeatures: [
      "Technical product catalog with downloadable PDFs",
      "Bilingual Arabic & English international SEO",
      "Wholesale & export RFQ quotation forms",
    ],
    whatsappMsg: "Hello UNIQUE! I need a B2B website for my factory or export company in Egypt.",
  },
  {
    id: "local-brands-ecom",
    sectorName: "Local Brands & E-Commerce",
    deliveryTime: "7 – 12 Days",
    highlightMetric: "Ad-Ready Checkout",
    description:
      "Fashion, perfume, beauty, and electronics stores engineered to convert Meta & TikTok ad clicks into completed orders.",
    keyFeatures: [
      "Paymob, Fawry, ValU, and COD checkout flows",
      "Direct Bosta & Mylerz shipping automation",
      "Meta CAPI, TikTok Pixel, and ultra-fast mobile UI",
    ],
    whatsappMsg: "Hello UNIQUE! I want to launch an e-commerce store for my brand in Egypt.",
  },
  {
    id: "tourism-diving",
    sectorName: "Tourism, Hotels & Diving",
    deliveryTime: "12 – 20 Days",
    highlightMetric: "Up to 7 Languages",
    description:
      "Visually rich, ultra-fast booking portals for Red Sea diving, safaris, hotels, and Egypt tours in multiple languages and currencies.",
    keyFeatures: [
      "Interactive tour itineraries with live pricing",
      "Multi-language & multi-currency (USD, EUR, EGP)",
      "Instant booking confirmations via email & WhatsApp",
    ],
    whatsappMsg: "Hello UNIQUE! I want a multilingual website for my tourism or diving company in Egypt.",
  },
  {
    id: "contracting-decor",
    sectorName: "Contracting & Interior Design",
    deliveryTime: "8 – 14 Days",
    highlightMetric: "HD Fast Galleries",
    description:
      "Architectural websites highlighting finished projects, finishing packages, and engineering credentials to drive site-visit bookings.",
    keyFeatures: [
      "Fast WebP/AVIF project portfolios (before & after)",
      "Clear finishing package comparisons",
      "Free engineering consultation booking forms",
    ],
    whatsappMsg: "Hello UNIQUE! I want a website for my contracting or interior design firm in Egypt.",
  },
  {
    id: "education-courses",
    sectorName: "Academies & EdTech Platforms",
    deliveryTime: "12 – 21 Days",
    highlightMetric: "LMS & Content Protection",
    description:
      "Online course platforms for academies and educators with student accounts, protected video streaming, quizzes, and certificates.",
    keyFeatures: [
      "Structured courses, lessons, and online assessments",
      "Enrollment via Paymob, Fawry, and Vodafone Cash",
      "Student progress tracking & automated certificates",
    ],
    whatsappMsg: "Hello UNIQUE! I want to build an e-learning platform or academy website in Egypt.",
  },
  {
    id: "consulting-legal",
    sectorName: "Law, Accounting & Consulting",
    deliveryTime: "7 – 10 Days",
    highlightMetric: "Executive Authority",
    description:
      "Authoritative corporate sites for legal, audit, and financial advisory firms operating in Egypt and the MENA region.",
    keyFeatures: [
      "Clear practice areas, partner bios, and case highlights",
      "Online or in-office consultation scheduling",
      "SEO-structured legal & financial insights blog",
    ],
    whatsappMsg: "Hello UNIQUE! I need a corporate website for my consulting or law firm in Egypt.",
  },
];

const UNIQUE_4_QUALITY_TABLES_EGYPT: QualityTableGroup[] = [
  {
    id: "perf-table",
    tableTitle: "1. Speed & Core Web Vitals Standard",
    tableBadge: "PageSpeed 98+",
    items: [
      "Mobile LCP under 1.2 seconds on Egyptian 4G networks",
      "Automated WebP / AVIF image compression & lazy loading",
      "Mobile-First responsive layout across all screen sizes",
      "Clean codebase free of bloated plugins and unused scripts",
      "Edge CDN & server caching configured for instant navigation",
    ],
  },
  {
    id: "seo-table",
    tableTitle: "2. Technical SEO & AI Search (GEO) Readiness",
    tableBadge: "Google Ready",
    items: [
      "Semantic H1–H3 hierarchy and clean SEO-friendly URLs",
      "Structured JSON-LD Schema (Service, Product, LocalBusiness, FAQ)",
      "Configured XML Sitemap and Robots.txt crawl directives",
      "Full Google Search Console & Google Analytics GA4 connection",
      "Optimized OpenGraph tags for rich WhatsApp & LinkedIn sharing",
    ],
  },
  {
    id: "security-table",
    tableTitle: "3. Security & 100% Client Ownership",
    tableBadge: "Zero Lock-In",
    items: [
      "Domain & hosting registered directly under client ownership",
      "HTTPS / SSL encryption and anti-spam form protection",
      "Automated scheduled backups for files and databases",
      "Full source code & admin handover plus team training video",
      "Post-launch technical support and maintenance guarantee",
    ],
  },
  {
    id: "cro-table",
    tableTitle: "4. UX & Conversion Rate Optimization (CRO)",
    tableBadge: "High Conversion",
    items: [
      "Bespoke UI/UX tailored to your brand—no recycled templates",
      "Frictionless 3-click path to WhatsApp inquiry or checkout",
      "Pre-filled smart WhatsApp CTAs tailored per service page",
      "Crisp Arabic & English typography engineered for readability",
      "End-to-end QA testing of all forms, links, and payment flows",
    ],
  },
];

const UNIQUE_PORTFOLIO_PROJECTS: { name: string; category: string }[] = [
  { name: "The Light House Diving & Tourism", category: "7-Language Global Portal (Next.js)" },
  { name: "Raneen Commercial Store", category: "High-Speed E-Commerce Storefront" },
  { name: "Riyadh Gate Directory & Services", category: "Top-Ranking Local Service Portal" },
  { name: "Al-Mamlakah General Contracting", category: "Corporate & Contracting — GCC" },
  { name: "Al-Badr Real Estate & Investment", category: "Real Estate Development Portal" },
  { name: "Taqeem Cleaning & Maintenance", category: "Home & Commercial Services" },
  { name: "Lamasat Design & Agency", category: "Creative Studio & Portfolio" },
  { name: "Qurani Educational Platform", category: "Interactive E-Learning Portal" },
];

const EXECUTION_ROADMAP_EGYPT: ExecutionStep[] = [
  {
    stepNum: "01",
    timeframe: "Days 1 – 3",
    title: "Discovery, Architecture & Tech Stack",
    description:
      "We align on your business goals, Egyptian target audience, and ideal stack (Next.js, WordPress, or Shopify) while mapping every page and conversion path.",
    tasks: [
      "Requirements workshop defining pages, features, and revenue goals",
      "Core keyword research to structure SEO-ready service & product routes",
      "Payment, shipping, and CRM/WhatsApp integration specification",
    ],
    milestoneOutput: "Approved Scope Document & Visual Sitemap",
  },
  {
    stepNum: "02",
    timeframe: "Days 4 – 8",
    title: "Custom UI/UX Design & Copy",
    description:
      "We craft a modern, brand-aligned interface with Mobile-First ergonomics, clear visual hierarchy, and persuasive conversion copy.",
    tasks: [
      "Custom homepage and inner page UI/UX layouts",
      "Interactive review rounds until 100% design sign-off",
      "Optimized visual assets, custom SVG icons, and sales messaging",
    ],
    milestoneOutput: "Signed-Off UI/UX Design Ready for Build",
  },
  {
    stepNum: "03",
    timeframe: "Days 9 – 15",
    title: "Engineering, CMS & Egypt Gateways",
    description:
      "We engineer your site for 98+ speed, connect your admin CMS, integrate Egyptian payment/shipping gateways, and implement technical SEO.",
    tasks: [
      "Clean responsive coding adhering to Core Web Vitals",
      "Paymob, Fawry, Bosta, Meta CAPI, and GA4 integrations",
      "JSON-LD Schema, XML Sitemap, and HTTPS security hardening",
    ],
    milestoneOutput: "Live Staging Link for Full Client Review",
  },
  {
    stepNum: "04",
    timeframe: "Days 16 – 21",
    title: "QA Testing, Launch & Handover",
    description:
      "We test every button, form, and checkout flow across real devices, deploy to your official domain, and hand over full ownership and training.",
    tasks: [
      "PageSpeed, cross-browser, mobile, and security verification",
      "Production launch + Google Search Console sitemap submission",
      "100% ownership handover, team training session & warranty support",
    ],
    milestoneOutput: "Live, Indexed Website with 100% Ownership",
  },
];

const EGYPT_WEB_PACKAGES_EGP: EgyptWebPackageEGP[] = [
  {
    id: "starter-corporate",
    packageName: "Starter Corporate Package",
    badgeText: "Startups & Service Firms",
    priceEGP: "8,500",
    billingCycle: "EGP / One-Time Payment",
    idealFor:
      "Ideal for corporate profiles, clinics, consulting offices, and service companies needing a fast, credible, SEO-ready web presence.",
    isPopular: false,
    deliveryBadge: "7 – 10 Business Days",
    includedFeatures: [
      "Custom Mobile-First design (up to 6 professional pages)",
      "Easy Arabic/English admin dashboard to edit text & media",
      "Official .com domain + fast hosting + SSL for Year 1",
      "Branded business emails (info@yourcompany.com)",
      "Smart WhatsApp CTA, Google Maps & lead inquiry forms",
    ],
    technicalSpecs: [
      "Foundational SEO setup (Sitemap + Meta Tags + Schema)",
      "High mobile speed & Google Mobile-Friendly compliance",
      "Google Analytics GA4 & Google Search Console connected",
    ],
    ownershipAndSupport: "100% full ownership + 3 months complimentary technical support.",
    whatsappMsg: "Hello UNIQUE! I would like to inquire about the Starter Corporate Package (8,500 EGP).",
  },
  {
    id: "growth-store-pro",
    packageName: "Growth Store / Bilingual Pro",
    badgeText: "Most Popular in Egypt",
    priceEGP: "18,500",
    billingCycle: "EGP / One-Time Payment",
    idealFor:
      "Best for Egyptian e-commerce brands or growing companies requiring a full online store or bilingual AR/EN corporate site built for ads & SEO.",
    isPopular: true,
    deliveryBadge: "10 – 15 Business Days",
    includedFeatures: [
      "Full E-Commerce Store (WooCommerce / Shopify) or Bilingual Corporate Site",
      "Egyptian payment gateways (Paymob, Fawry, ValU, Vodafone Cash, COD)",
      "Automated shipping integration (Bosta / Aramex) by governorate",
      "Conversion-focused custom UI/UX engineered to lift sales",
      "Meta Conversions API (CAPI), TikTok Pixel & GTM tracking",
    ],
    technicalSpecs: [
      "Advanced SEO architecture (Product / LocalBusiness Schema + 95+ speed)",
      "Coupons, product reviews & WhatsApp abandoned cart recovery",
      "Domain + high-performance hosting + SSL + business emails (Year 1)",
    ],
    ownershipAndSupport: "100% full ownership + team training + 6 months complimentary support.",
    whatsappMsg: "Hello UNIQUE! I want to book the Growth Store / Bilingual Pro Package (18,500 EGP).",
  },
  {
    id: "enterprise-nextjs",
    packageName: "Enterprise Custom (Next.js)",
    badgeText: "Real Estate, Export & Portals",
    priceEGP: "35,000",
    billingCycle: "EGP / Starting From",
    idealFor:
      "Engineered for real estate developers, export factories, multilingual tourism portals, and enterprises demanding peak speed & custom Next.js + Sanity.",
    isPopular: false,
    deliveryBadge: "15 – 21 Business Days",
    includedFeatures: [
      "Custom Next.js App Router + TypeScript architecture",
      "Sanity CMS Studio + multi-language support (up to 7 languages)",
      "98+ Google Lighthouse speed & instant mobile navigation",
      "Custom modules (property filters, B2B catalogs, bookings, CRM/ERP)",
      "Advanced Technical SEO & AI Search (GEO) entity optimization",
    ],
    technicalSpecs: [
      "Dynamic JSON-LD Schema, international Hreflang & auto-sitemaps",
      "Global Edge CDN deployment & enterprise security headers",
      "Custom API integrations with local/international payment & ERP tools",
    ],
    ownershipAndSupport: "Full GitHub repository handover + 12 months priority support & maintenance.",
    whatsappMsg: "Hello UNIQUE! I want to discuss an Enterprise Custom Next.js project (starting 35,000 EGP).",
  },
];

const EGYPT_CHATGPT_QUESTIONS: ChatGptClientQuestion[] = [
  {
    tag: "Egypt Market Pricing",
    q: "How much does a professional website cost in Egypt in 2026?",
    a: "In Egypt, professional corporate websites typically range from 8,500 to 18,000 EGP, full e-commerce stores integrated with Paymob and Bosta range from 15,000 to 35,000 EGP, and custom-engineered Next.js platforms for real estate, export, or multilingual tourism start from 35,000 EGP depending on scope.",
  },
  {
    tag: "Choosing Your Stack",
    q: "Should I build my Egyptian website on WordPress, Next.js, or Shopify?",
    a: "Shopify or WooCommerce is ideal for Egyptian local brands scaling Meta and TikTok ads quickly; clean WordPress works well for standard corporate sites and clinics; while Next.js + Sanity CMS is the top choice for real estate, tourism, and competitive industries targeting peak speed (98+) and #1 Google SEO rankings.",
  },
  {
    tag: "Payments & Shipping",
    q: "Can my store integrate with Egyptian payment gateways and couriers?",
    a: "Yes. UNIQUE integrates Paymob (Visa, Mastercard, Meeza, mobile wallets, ValU installments), Fawry, InstaPay, and Cash on Delivery (COD), alongside automated shipping APIs with Bosta, Mylerz, and Aramex across all Egyptian governorates.",
  },
  {
    tag: "Ownership & SEO",
    q: "How do I guarantee full website ownership and Google readiness?",
    a: "We include both in our contract: your domain, hosting, admin dashboard, and source code are 100% registered in your name, and every website launches with verified Core Web Vitals speed, JSON-LD Schema, XML Sitemaps, and Google Search Console connected.",
  },
];

const EGYPT_WEB_FAQS: EgyptWebFaq[] = [
  {
    id: "faq-1",
    category: "Pricing & Scope",
    question: "Do your EGP packages include domain, hosting, and SSL security?",
    answer:
      "Yes. Our web design packages include an official .com domain, fast reliable hosting, HTTPS/SSL security certificate, and branded business emails for the first year, with transparent annual renewal rates shared upfront.",
  },
  {
    id: "faq-2",
    category: "Timeline",
    question: "How long does it take to design and launch a website in Egypt?",
    answer:
      "Landing pages and corporate websites take 5 to 10 business days, full e-commerce stores take 10 to 15 business days, and custom Next.js or multilingual platforms take 15 to 21 business days depending on content volume and integrations.",
  },
  {
    id: "faq-3",
    category: "Management",
    question: "Can my team update text, images, and products without a developer?",
    answer:
      "Absolutely. We deliver an intuitive Arabic/English dashboard (WordPress, Sanity CMS, or Shopify) along with a recorded video walkthrough and live onboarding session so your team can manage daily updates effortlessly.",
  },
  {
    id: "faq-4",
    category: "SEO & Google",
    question: "Will my new website be ready to rank on Google?",
    answer:
      "Yes. Every site is built SEO-First with clean heading structure, fast mobile LCP, JSON-LD Schema Markup, XML Sitemaps, and Google Search Console setup. We also offer dedicated monthly SEO campaigns if you want ongoing Page-1 growth.",
  },
  {
    id: "faq-5",
    category: "Payment & Ownership",
    question: "How do milestone payments work, and do I own the code?",
    answer:
      "Payments are split into 2 or 3 clear milestones (kickoff, design approval, and final launch). Upon delivery, you retain 100% ownership of your domain, hosting, database, and source code.",
  },
  {
    id: "faq-6",
    category: "Support",
    question: "What post-launch support and maintenance do you provide?",
    answer:
      "Every package includes 3 to 12 months of complimentary technical support, security updates, automated backups, and direct WhatsApp assistance to keep your site running smoothly.",
  },
];

const EGYPT_SEMANTIC_KEYWORDS_EN: string[] = [
  "Web Design Company in Egypt",
  "Best Web Development Agency Cairo",
  "Website Design Prices in Egypt 2026",
  "E-Commerce Store Development Egypt",
  "Next.js Web Development Egypt",
  "WordPress & WooCommerce Agency Egypt",
  "Paymob & Bosta Store Integration",
  "Web Design Company Alexandria",
  "New Cairo & Fifth Settlement Web Design",
  "Real Estate Website Development Egypt",
  "B2B Factory & Export Website Egypt",
  "High-Converting Landing Pages Egypt",
  "Multilingual Tourism Website Egypt",
  "Website Redesign & SEO Migration Egypt",
  "Shopify & EasyOrder Experts Egypt",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD WITH CAIRO/EGYPT GEOCOORDINATES 30.0444, 31.2357)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "UNIQUE Digital Agency — Web Design Company in Egypt",
    url: "https://www.uniquee-ws.com/en/egypt-web-design",
    telephone: "+201270506511",
    email: "godyslem139@gmail.com",
    priceRange: "8,500 EGP - 35,000+ EGP",
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
      name: "Egypt Web Design & E-Commerce Packages (EGP)",
      itemListElement: EGYPT_WEB_PACKAGES_EGP.map((pkg) => ({
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
    mainEntity: EGYPT_WEB_FAQS.map((faq) => ({
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
        name: "Web Design Company in Egypt",
        item: "https://www.uniquee-ws.com/en/egypt-web-design",
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
// MAIN PAGE COMPONENT — EGYPT WEB DESIGN COMPANY (ENGLISH LTR)
// ============================================================================

export default function EgyptWebDesignEnglishPage() {
  const heroConsultWhatsapp = getWhatsAppUrl(
    "Hello UNIQUE Digital Agency! I would like a free consultation and quote for a corporate website or e-commerce store in Egypt."
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
                UNIQUE <span className="text-blue-400">WEB</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">
                Egypt Web Design &amp; Engineering
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#services" className="hover:text-cyan-300 transition">
              Services
            </a>
            <a href="#tech-stack" className="hover:text-cyan-300 transition">
              Tech Stack
            </a>
            <a href="#gateways" className="hover:text-cyan-300 transition">
              Payments &amp; Shipping
            </a>
            <a href="#hubs" className="hover:text-cyan-300 transition">
              Egypt Hubs
            </a>
            <a href="#quality" className="hover:text-cyan-300 transition">
              QA Standards
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
              href="/egypt-web-design"
              className="px-3.5 py-2 rounded-xl border border-neutral-800 bg-neutral-950 hover:border-cyan-500/50 text-xs font-bold text-neutral-200 hover:text-cyan-300 transition"
            >
              العربية
            </Link>
            <a
              href={heroConsultWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Free Quote</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION — EGYPT WEB DESIGN + LIVE LIGHTHOUSE SIMULATOR
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
            <span className="text-cyan-300 font-semibold">Web Design Company in Egypt</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cairo • Alexandria • Nationwide Egypt</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">Next.js • WordPress • E-Commerce</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
                Leading{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  Web Design Company in Egypt
                </span>{" "}
                Built for Speed, Sales &amp; Google SEO
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                At <strong className="text-white">UNIQUE Digital Agency</strong>, we don&apos;t deliver
                static brochures—we engineer ultra-fast corporate websites and online stores using{" "}
                <strong className="text-cyan-300">Next.js, WordPress &amp; Shopify</strong>, fully
                integrated with Egyptian payment &amp; shipping gateways and built SEO-First from Day 1.
              </p>

              {/* Key Trust Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "98+ Google Lighthouse Mobile Speed Score",
                  "Paymob, Fawry, InstaPay, ValU & Bosta Ready",
                  "Technical SEO & JSON-LD Schema Built-In",
                  "100% Client Ownership of Domain & Source Code",
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
                  href={heroConsultWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Request a Free Egypt Quote</span>
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
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Clear Contracts • On-Time Delivery • Post-Launch Warranty
                </span>
              </div>
            </div>

            {/* Hero Right Visual: Live Core Web Vitals & Egypt Stack Simulator */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      UNIQUE Performance Standard
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    Mobile-First 99/100
                  </span>
                </div>

                {/* 4 Lighthouse Score Circles */}
                <div className="grid grid-cols-4 gap-2.5 text-center">
                  {[
                    { label: "Speed", score: "99", color: "border-emerald-400 text-emerald-400" },
                    { label: "SEO", score: "100", color: "border-cyan-400 text-cyan-300" },
                    { label: "Practices", score: "100", color: "border-blue-400 text-blue-300" },
                    { label: "A11y", score: "98", color: "border-amber-400 text-amber-300" },
                  ].map((m, i) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3 flex flex-col items-center"
                    >
                      <div
                        className={`w-12 h-12 rounded-full border-2 ${m.color} flex items-center justify-center font-black text-base mb-1.5`}
                      >
                        {m.score}
                      </div>
                      <span className="text-[11px] text-neutral-300 font-semibold">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Core Web Vitals Metrics */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      Egypt 4G Mobile Network Benchmark
                    </span>
                    <span className="text-emerald-400 font-bold">Passed ✓</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2.5">
                      <div className="text-[10px] text-neutral-500">LCP</div>
                      <div className="text-sm font-black text-emerald-400">0.9s</div>
                    </div>
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2.5">
                      <div className="text-[10px] text-neutral-500">INP</div>
                      <div className="text-sm font-black text-cyan-300">38ms</div>
                    </div>
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2.5">
                      <div className="text-[10px] text-neutral-500">CLS</div>
                      <div className="text-sm font-black text-blue-400">0.00</div>
                    </div>
                  </div>
                </div>

                {/* Ready Integrations Snapshot */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      Turnkey Egypt Integrations
                    </span>
                    <span className="text-[11px] text-blue-300">Direct API</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Paymob",
                      "Fawry",
                      "InstaPay",
                      "ValU",
                      "Bosta",
                      "Aramex",
                      "WhatsApp API",
                      "Meta CAPI",
                      "GA4 + GSC",
                    ].map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/25 text-[11px] font-semibold text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
          3. TECH STACK COMPARISON TABLE
      ==================================================================== */}
      <section id="tech-stack" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Choose the Right Architecture"
            title="Comparing Top Web Technologies"
            highlight="for Businesses in Egypt"
            subtitle="We match your business model to the highest-ROI tech stack—never forcing a one-size-fits-all template."
          />

          <div className="overflow-x-auto rounded-3xl border border-neutral-800 bg-[#060911]">
            <table className="w-full text-left border-collapse min-w-[780px]">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-950/90">
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                    Evaluation Criterion
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-cyan-300 bg-blue-500/10">
                    Next.js + Sanity CMS (Modern Custom)
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                    WordPress / WooCommerce
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-amber-300">
                    Shopify &amp; EasyOrder (Fast Stores)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80 text-sm">
                {TECH_STACK_COMPARISON_EGYPT.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/40 transition">
                    <td className="py-4 px-6 font-bold text-white">{row.criterion}</td>
                    <td className="py-4 px-6 text-cyan-100 font-medium bg-blue-500/[0.04]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{row.nextjsStack}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-neutral-300">{row.wordpressStack}</td>
                    <td className="py-4 px-6 text-neutral-300">{row.ecommercePlatforms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. 6 CORE WEB DESIGN SERVICES IN EGYPT
      ==================================================================== */}
      <section id="services" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Full-Stack Web Engineering"
            title="6 Core Web Design & Development"
            highlight="Services in Egypt"
            subtitle="From executive corporate websites to high-volume Egyptian e-commerce stores and custom Next.js platforms."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {CORE_WEB_SERVICES_EGYPT.map((service) => (
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
                      Commercial Impact in Egypt
                    </div>
                    <p className="text-xs text-neutral-200 leading-relaxed">
                      {service.businessImpactInEgypt}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                      What We Deliver
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
                  <span>Discuss This Service on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. EGYPT PAYMENT & SHIPPING GATEWAYS INTEGRATION
      ==================================================================== */}
      <section id="gateways" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Built for Egyptian Commerce"
            title="Seamless Integration with"
            highlight="Egypt's Top Payment & Shipping Gateways"
            subtitle="Automate checkout, installments, AWB generation, and COD reconciliation across all Egyptian governorates."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {EGYPT_PAYMENT_SHIPPING_GATEWAYS.map((gw) => (
              <div
                key={gw.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-cyan-500/40 p-7 transition"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400">
                    {gw.category === "Egyptian Payment Gateways" ? (
                      <CreditCard className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <ShoppingBag className="w-4 h-4 text-amber-400" />
                    )}
                    <span>{gw.category}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-blue-300">
                    {gw.tag}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-2">{gw.name}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-5">{gw.details}</p>

                <ul className="space-y-2.5">
                  {gw.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. EGYPT COMMERCIAL & INDUSTRIAL HUBS (4 ZONES)
      ==================================================================== */}
      <section id="hubs" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Nationwide Egypt Coverage"
            title="Serving Enterprises & Factories Across"
            highlight="Egypt's Key Business Hubs"
            subtitle="Whether you operate in New Cairo, Sheikh Zayed, Alexandria, or 10th of Ramadan, we engineer digital platforms tailored to your market."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {EGYPT_COMMERCIAL_HUBS.map((hub) => (
              <div
                key={hub.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-blue-500/40 p-7 transition"
              >
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{hub.badgeTag}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                  {hub.zoneTitle}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                  {hub.commercialCharacter}
                </p>

                <div className="mb-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                    Key Client Verticals
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hub.targetBusinesses.map((biz, i) => (
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
                  {hub.webActions.map((act, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
                  {hub.localKeywords.map((kw, i) => (
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
          7. 8 HIGH-DEMAND EGYPTIAN SECTORS
      ==================================================================== */}
      <section className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Industry-Specific Solutions"
            title="Tailored Web Design for"
            highlight="8 High-Demand Egyptian Sectors"
            subtitle="Every industry receives custom page architecture, conversion flows, and technical integrations built for its buyers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EGYPT_8_SECTORS.map((sec) => (
              <div
                key={sec.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-amber-300">{sec.deliveryTime}</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-bold text-emerald-300">
                      {sec.highlightMetric}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2.5">{sec.sectorName}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {sec.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {sec.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-200">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
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
                  <span>Request Sector Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. UNIQUE'S 4 QUALITY TABLES + LIVE TERMINAL + REAL PORTFOLIO
      ==================================================================== */}
      <section id="quality" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="UNIQUE Engineering QA"
            title="4 Pre-Launch Quality Checklists"
            highlight="Guaranteed on Every Build"
            subtitle="Every website passes our 4-part verification matrix for speed, technical SEO, 100% ownership, and UX conversion."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {UNIQUE_4_QUALITY_TABLES_EGYPT.map((table) => (
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

          {/* Live Build Terminal + Real Portfolio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
            <div className="lg:col-span-6 rounded-3xl bg-[#050811] border border-cyan-500/30 p-6 font-mono text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="ml-2 text-neutral-400 font-sans font-bold">
                      unique-build-check — Egypt Web Engineering
                    </span>
                  </div>
                  <span className="text-emerald-400">PASSED</span>
                </div>
                <div className="space-y-2.5 text-neutral-300 leading-relaxed">
                  <div>
                    <span className="text-cyan-400">$</span> unique-deploy --region=&quot;egypt-eg&quot; --domain=&quot;uniquee-ws.com&quot;
                  </div>
                  <div className="text-emerald-400">
                    ✓ [Lighthouse Mobile] Performance: 99 | SEO: 100 | Best Practices: 100
                  </div>
                  <div className="text-emerald-400">
                    ✓ [Egypt Gateways] Paymob + Fawry + InstaPay + Bosta Webhooks Active
                  </div>
                  <div className="text-emerald-400">
                    ✓ [Ownership] Client Domain + SSL + Full Source Code Handover Verified
                  </div>
                  <div className="text-blue-300">
                    ✓ [Schema JSON-LD] ProfessionalService + OfferCatalog (EGP) + FAQ Valid
                  </div>
                  <div className="text-amber-300">
                    ✓ [Multilingual] en-EG (LTR) &lt;-&gt; ar-EG (RTL) Reciprocal Hreflang Ready
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between font-sans">
                <span className="text-neutral-400 text-xs">Official Platform: www.uniquee-ws.com</span>
                <a
                  href={heroConsultWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white font-bold text-xs inline-flex items-center gap-1"
                >
                  <span>Start Your Build</span>
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
                    Featured Egypt &amp; Regional Web Projects
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
          9. 4-STEP EXECUTION & DELIVERY ROADMAP
      ==================================================================== */}
      <section className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Predictable Delivery"
            title="From Concept to Launch in"
            highlight="4 Structured Engineering Phases"
            subtitle="Track every milestone with clear deliverables, live staging previews, and zero hidden surprises."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXECUTION_ROADMAP_EGYPT.map((step) => (
              <div
                key={step.stepNum}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-extrabold text-cyan-300">
                      Phase {step.stepNum}
                    </span>
                    <span className="text-xs font-bold text-amber-300">{step.timeframe}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2.5">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {step.tasks.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-3">
                  <div className="text-[10px] uppercase font-bold text-emerald-300 mb-0.5">
                    Phase Deliverable
                  </div>
                  <div className="text-xs font-bold text-white">{step.milestoneOutput}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          10. TRANSPARENT EGP PACKAGES
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Transparent Egypt Pricing"
            title="Web Design & Store Packages"
            highlight="in Egyptian Pounds (EGP)"
            subtitle="Clear scope, 100% ownership, and zero hidden fees. Pick the package that matches your growth stage."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {EGYPT_WEB_PACKAGES_EGP.map((pkg) => (
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
                    <span className="text-xs font-bold text-amber-300">{pkg.deliveryBadge}</span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2">{pkg.packageName}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">{pkg.idealFor}</p>

                  <div className="flex items-baseline gap-2 pb-6 mb-6 border-b border-neutral-800">
                    <span className="text-4xl font-black text-white">{pkg.priceEGP}</span>
                    <span className="text-xs font-bold text-cyan-300">{pkg.billingCycle}</span>
                  </div>

                  <div className="mb-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                      Core Features Included
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.includedFeatures.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                      Technical &amp; SEO Stack
                    </div>
                    <ul className="space-y-2">
                      {pkg.technicalSpecs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-3 text-xs text-neutral-300 mb-6">
                    <strong className="text-blue-300">Ownership &amp; Support:</strong>{" "}
                    {pkg.ownershipAndSupport}
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
                  <span>Book {pkg.packageName}</span>
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
            badge="AI Search & Founder Q&A"
            title="Questions Egyptian Founders Ask"
            highlight="ChatGPT & Google Before Hiring"
            subtitle="Direct, structured answers on 2026 EGP pricing, choosing your tech stack, payment gateways, and full ownership."
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
            title="Everything About Hiring a"
            highlight="Web Design Company in Egypt"
            subtitle="Answers on domain/hosting inclusion, delivery timelines, CMS control, SEO readiness, and post-launch support."
          />

          <div className="max-w-4xl mx-auto space-y-4 mb-20">
            {EGYPT_WEB_FAQS.map((faq) => (
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
              Web Design &amp; E-Commerce Solutions We Engineer Across Egypt
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
          12. FINAL FREE CONSULTATION CTA & FOOTER
      ==================================================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B1730] via-[#070D1A] to-[#051418] border border-blue-500/35 p-8 sm:p-12 lg:p-14 text-center shadow-2xl shadow-blue-950/50">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Technical Consultation + Detailed EGP Quote Within 24 Hours</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Ready to Launch a High-Converting Website in{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Egypt?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              Message us on WhatsApp with your business details and our engineering team will
              recommend the highest-ROI stack (Next.js, WordPress, or Shopify) with a transparent
              EGP timeline and quote.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroConsultWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat With Us on WhatsApp</span>
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
              © {new Date().getFullYear()} UNIQUE Digital Agency — Web Design &amp; Development Company in Egypt.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/egypt-web-design" className="hover:text-cyan-300 transition">
                شركة تصميم مواقع في مصر (AR)
              </Link>
              <Link href="/en/saudi-seo" className="hover:text-cyan-300 transition">
                Saudi Arabia SEO
              </Link>
              <Link href="/en/riyadh-seo" className="hover:text-cyan-300 transition">
                Riyadh SEO
              </Link>
              <Link href="/en/jeddah-seo" className="hover:text-cyan-300 transition">
                Jeddah SEO
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}