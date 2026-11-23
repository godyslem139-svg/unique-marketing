import type { Metadata } from "next";
import Link from "next/link";
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

function ShoppingBag({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
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

const WHATSAPP_PRIMARY = "01270506511";
const WHATSAPP_SECONDARY = "01202987700";
const WHATSAPP_INTERNATIONAL = "201270506511";
function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encodeURIComponent(message)}`;
}

export const metadata: Metadata = {
  title:
    "Professional E-Commerce Store Design | WooCommerce, Shopify, Salla & Next.js — UNIQUE",
  description:
    "High-converting e-commerce store design & development across Egypt, Saudi Arabia, UAE & Kuwait. Mada, Apple Pay, Tabby/Tamara, Paymob & Fawry integration, automated shipping, Meta CAPI & GA4 tracking, and Product Schema SEO starting at $290.",
  keywords: [
    "E-Commerce Store Design Agency",
    "WooCommerce Store Development",
    "Shopify Store Design MENA GCC",
    "Salla and Zid Store Customization",
    "Custom Next.js Headless E-Commerce",
    "Mada Apple Pay Paymob Integration",
    "E-Commerce Conversion Optimization CRO",
    "Meta CAPI TikTok Pixel E-Commerce Tracking",
    "E-Commerce Packages USD",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/en/services/e-commerce",
    languages: {
      ar: "https://www.uniquee-ws.com/services/e-commerce",
      en: "https://www.uniquee-ws.com/en/services/e-commerce",
      "x-default": "https://www.uniquee-ws.com/services/e-commerce",
    },
  },
  openGraph: {
    title: "Professional E-Commerce Store Design — UNIQUE Digital Agency",
    description:
      "Launch a fast, conversion-engineered online store on WooCommerce, Shopify, Salla/Zid, or Next.js with full payment, shipping, pixel, and SEO setup.",
    url: "https://www.uniquee-ws.com/en/services/e-commerce",
    siteName: "UNIQUE Digital Agency",
    locale: "en_US",
    type: "website",
  },
};

interface HeroKpi {
  id: string;
  value: string;
  title: string;
  subtitle: string;
  accent: "emerald" | "cyan" | "blue" | "amber";
}

interface StorePillar {
  id: string;
  number: string;
  badge: string;
  title: string;
  subLabel: string;
  summary: string;
  impact: string;
  features: string[];
  whatsappMsg: string;
}

interface PlatformChoice {
  name: string;
  tag: string;
  bestFor: string;
  points: string[];
}

interface IntegrationBlock {
  category: string;
  badge: string;
  items: string[];
}

interface StoreChecklist {
  id: string;
  title: string;
  badge: string;
  items: string[];
}

interface LaunchPhase {
  num: string;
  timeframe: string;
  title: string;
  desc: string;
  output: string;
}

interface StorePackageUSD {
  id: string;
  name: string;
  badge: string;
  price: string;
  cycle: string;
  idealFor: string;
  isPopular?: boolean;
  delivery: string;
  features: string[];
  whatsappMsg: string;
}

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const HERO_KPIS: HeroKpi[] = [
  {
    id: "speed",
    value: "< 1.2s",
    title: "Sub-Second Mobile Load",
    subtitle: "Every second of lag costs orders—our stores are tuned for instant mobile browsing.",
    accent: "emerald",
  },
  {
    id: "cro",
    value: "1-Step",
    title: "Frictionless CRO Checkout",
    subtitle: "Shortened checkout with Apple Pay, Mada, Cash on Delivery, and cart recovery.",
    accent: "cyan",
  },
  {
    id: "tracking",
    value: "CAPI + GA4",
    title: "Paid-Ads Ready on Day 1",
    subtitle: "Verified Meta CAPI, TikTok, Snapchat & Google Ads purchase events to lower CPA.",
    accent: "blue",
  },
  {
    id: "pricing",
    value: "From $290",
    title: "Zero Hidden Commissions",
    subtitle: "Turnkey store delivery with payments, shipping, SEO, and hands-on training.",
    accent: "amber",
  },
];

const SIX_STORE_PILLARS: StorePillar[] = [
  {
    id: "cro-ux",
    number: "01",
    badge: "Conversion UI/UX",
    title: "Mobile-First Storefront Built to Convert",
    subLabel: "One-Page Checkout • Upsells • High-Trust Product Pages",
    summary:
      "Over 85% of shoppers in Egypt and the GCC buy from their phones. We design clean, branded storefronts with instant search, persuasive product pages, and frictionless mobile checkout.",
    impact: "Lifts visitor-to-buyer conversion rates and reduces bounce from paid social traffic.",
    features: [
      "100% responsive Mobile-First UI tailored for Arabic (RTL) & English (LTR)",
      "Clean variant selectors (colors, sizes, bundles, and flash deals)",
      "Streamlined One-Page Checkout engineered to cut cart abandonment",
      "Built-in Upsell, Cross-Sell, and free-shipping progress bars to boost AOV",
    ],
    whatsappMsg: "Hello UNIQUE, I want a conversion-focused e-commerce store designed to grow my sales.",
  },
  {
    id: "payments-shipping",
    number: "02",
    badge: "Automated Checkout & Fulfillment",
    title: "Full MENA & GCC Payments, BNPL & Shipping",
    subLabel: "Mada • Apple Pay • Tabby/Tamara • Paymob • Bosta",
    summary:
      "Your store is handed over fully connected to accept online payments, split-pay installments, and generate automated courier waybills without manual data entry.",
    impact: "Removes checkout friction and saves hours every day on order dispatch.",
    features: [
      "Saudi & GCC: Mada, Apple Pay, STC Pay, plus Tabby & Tamara BNPL",
      "Egypt: Paymob, Fawry, e-wallets, InstaPay, and Cash on Delivery",
      "Direct shipping APIs with Bosta, Aramex, SMSA, and local couriers",
      "Automated city/weight shipping rules and free-shipping thresholds",
    ],
    whatsappMsg: "Hello UNIQUE, I need an online store integrated with Egypt/GCC payment and shipping gateways.",
  },
  {
    id: "pixels-tracking",
    number: "03",
    badge: "Ad-Spend Attribution",
    title: "Meta CAPI, TikTok Pixel & GA4 Revenue Tracking",
    subLabel: "Server-Side Events • Abandoned Cart Recovery",
    summary:
      "Running ads without accurate tracking burns budget. We configure and verify every e-commerce event (ViewContent, AddToCart, InitiateCheckout, Purchase) end to end.",
    impact: "Feeds ad algorithms clean purchase signals to lower your Cost Per Acquisition (CPA).",
    features: [
      "Meta Pixel + Server-Side Conversions API (CAPI) for accurate iOS tracking",
      "TikTok Pixel, Snapchat Pixel, and Google Ads purchase conversion tags",
      "Google Analytics 4 Enhanced E-Commerce & Google Merchant Center feed",
      "Automated WhatsApp & email abandoned cart recovery sequences",
    ],
    whatsappMsg: "Hello UNIQUE, I want my store set up with accurate Meta CAPI, TikTok Pixel, and GA4 tracking.",
  },
  {
    id: "ecommerce-seo",
    number: "04",
    badge: "Organic Google Sales",
    title: "Built-In E-Commerce SEO & Product Schema",
    subLabel: "Category Hubs • Product JSON-LD • Core Web Vitals",
    summary:
      "We engineer your store from Day 1 to rank on Google for your product and category keywords—building a free organic order stream alongside paid ads.",
    impact: "Compounds zero-ad-cost store sales month over month.",
    features: [
      "Product, Offer, Price & Rating Schema for rich Google price & star snippets",
      "Clean category/product URL architecture and automatic WebP compression",
      "Google Search Console & dynamic XML product sitemaps configured",
      "Canonical & filter cleanup to prevent crawl-budget duplication",
    ],
    whatsappMsg: "Hello UNIQUE, I want an SEO-ready e-commerce store built to rank on Google.",
  },
  {
    id: "inventory-erp",
    number: "05",
    badge: "Inventory & Invoicing",
    title: "Effortless Admin Panel, Stock & Tax Invoicing",
    subLabel: "Multi-Variant Stock • Coupons • ZATCA / ERP Ready",
    summary:
      "Manage products, stock levels, promo codes, and customer orders effortlessly from desktop or mobile with instant order alerts and automated PDF invoices.",
    impact: "Gives you full visibility over margins, stock, and repeat buyers without technical hassle.",
    features: [
      "Fast management of variable products (sizes, colors) and timed discounts",
      "Low-stock alerts and automated PDF tax invoices (ZATCA-ready on request)",
      "Discount coupons, affiliate referral tracking, and loyalty points",
      "Optional integration with POS & accounting ERPs (Odoo, Qoyod, Daftra)",
    ],
    whatsappMsg: "Hello UNIQUE, I need an online store with clean inventory control and invoicing.",
  },
  {
    id: "scalable-headless",
    number: "06",
    badge: "High-Scale Commerce",
    title: "Custom Next.js Headless Stores & Mobile App Sync",
    subLabel: "Sub-Second Speed • Multi-Vendor • Flutter Ready",
    summary:
      "For high-growth brands and multi-vendor marketplaces demanding peak speed during Ramadan & White Friday traffic spikes plus direct Android/iOS app sync.",
    impact: "Handles thousands of concurrent shoppers smoothly with zero platform limits.",
    features: [
      "Ultra-fast Next.js storefronts backed by Sanity CMS or custom APIs",
      "Multi-currency, multi-language, and multi-warehouse fulfillment support",
      "Ready to connect directly to a Flutter Android & iOS mobile app",
      "100% source code ownership with hardened security and daily backups",
    ],
    whatsappMsg: "Hello UNIQUE, I want a custom Next.js e-commerce store or multi-vendor marketplace.",
  },
];

const PLATFORM_CHOICES: PlatformChoice[] = [
  {
    name: "WooCommerce (WordPress)",
    tag: "Full Ownership & Zero Fees",
    bestFor: "Businesses across Egypt & GCC wanting full code control with 0% sales commission.",
    points: [
      "0% platform transaction fees + complete hosting & code ownership",
      "Unmatched SEO flexibility, blogging power, and local gateway plugins",
      "Scales smoothly from boutique stores to thousands of SKUs",
    ],
  },
  {
    name: "Salla & Zid",
    tag: "Fastest for Saudi Arabia",
    bestFor: "Merchants focused on Saudi Arabia & GCC needing rapid local launch.",
    points: [
      "Custom branded theme styling that stands out from generic templates",
      "Instant local integration with Mada, Apple Pay, Tabby, Tamara, Aramex & SMSA",
      "Complete category/product SEO and ad pixel optimization",
    ],
  },
  {
    name: "Shopify",
    tag: "D2C & Cross-Border Brands",
    bestFor: "Direct-to-consumer brands selling regionally or globally with a rich app ecosystem.",
    points: [
      "Rock-solid cloud uptime during heavy flash sales and ad bursts",
      "World-class checkout UX with native Meta, TikTok & Google integrations",
      "Custom RTL Arabic & LTR English theme speed optimization",
    ],
  },
  {
    name: "Next.js (Custom Build)",
    tag: "Peak Speed & Zero Limits",
    bestFor: "Enterprise stores, Multi-Vendor platforms, or deep ERP/Mobile App ecosystems.",
    points: [
      "Sub-second page loads & 95+ mobile PageSpeed scores",
      "100% custom checkout & seamless Flutter mobile app API sync",
      "Built-in SEO, AI Search (GEO) & Chrome WebMCP readiness",
    ],
  },
];

const STORE_INTEGRATIONS: IntegrationBlock[] = [
  {
    category: "Payments & BNPL Installments",
    badge: "Egypt, Saudi & GCC",
    items: ["Mada, Apple Pay & STC Pay", "Tabby & Tamara Buy-Now-Pay-Later", "Paymob, Fawry, InstaPay & E-Wallets", "Cash on Delivery + Stripe & PayTabs"],
  },
  {
    category: "Automated Shipping & Couriers",
    badge: "Auto Waybills",
    items: ["Bosta & Aramex API Integration", "SMSA Express, DHL & FedEx", "Automated city & weight shipping rules", "Live shipment tracking & WhatsApp updates"],
  },
  {
    category: "Pixels, Ads & Recovery",
    badge: "Higher ROAS",
    items: ["Meta Pixel + Conversions API (CAPI)", "TikTok, Snapchat & Google Ads Tags", "Automated WhatsApp cart recovery", "Google Analytics 4 & Merchant Center"],
  },
];

const UNIQUE_4_STORE_CHECKLISTS: StoreChecklist[] = [
  {
    id: "c-design",
    title: "1. Brand Identity & CRO Design",
    badge: "UI/UX & CRO",
    items: [
      "Custom homepage, category hubs, and high-converting product templates",
      "Pixel-clean responsiveness across mobile, tablet, and desktop",
      "Promotional banners and clear navigation filters for fast discovery",
      "Smart floating WhatsApp concierge for instant buyer support",
    ],
  },
  {
    id: "c-tech",
    title: "2. Payments, Shipping & Security",
    badge: "Ready to Sell",
    items: [
      "SSL encryption and proactive security hardening",
      "End-to-end live test orders across online payments & COD",
      "Configured shipping zones, rates, and automated PDF invoices",
      "Automated cloud backups protecting products and customer records",
    ],
  },
  {
    id: "c-growth",
    title: "3. Ad Tracking & Built-In SEO",
    badge: "SEO + Pixels",
    items: [
      "Verified Meta, TikTok & Google purchase events before launch",
      "Product Schema JSON-LD & WebP compression for rapid mobile loads",
      "Promo coupons, quantity bundles, and abandoned cart triggers",
      "Connected Google Search Console & GA4 e-commerce dashboards",
    ],
  },
  {
    id: "c-handover",
    title: "4. Handover, Training & Support",
    badge: "Full Control",
    items: [
      "Initial product catalog upload included to perfect store layout",
      "Clear video walkthroughs for adding products and fulfilling orders",
      "100% ownership of your domain, store, and connected accounts",
      "Free post-launch technical support for a smooth opening month",
    ],
  },
];

const LAUNCH_ROADMAP: LaunchPhase[] = [
  {
    num: "01",
    timeframe: "Days 1 – 2",
    title: "Platform Selection & Store Architecture",
    desc: "We finalize the ideal platform (WooCommerce, Salla/Zid, Shopify, or Next.js) and map your categories and checkout flow.",
    output: "Platform Blueprint & Category Map",
  },
  {
    num: "02",
    timeframe: "Days 3 – 7",
    title: "Visual Design & Storefront Build",
    desc: "We craft your branded homepage, product pages, and streamlined mobile checkout with your direct review and feedback.",
    output: "Complete Responsive Storefront",
  },
  {
    num: "03",
    timeframe: "Days 8 – 11",
    title: "Payments, Shipping, Pixels & SEO",
    desc: "We connect payment/shipping gateways, verify Meta/TikTok/GA4 events, deploy Product Schema, and upload initial products.",
    output: "End-to-End Verified Test Order",
  },
  {
    num: "04",
    timeframe: "Days 12 – 14",
    title: "Speed Audit, Live Launch & Training",
    desc: "Final mobile speed and security checks, live launch on your custom domain, team training videos, and post-launch support.",
    output: "Live Store Ready for Daily Orders",
  },
];

const STORE_PACKAGES_USD: StorePackageUSD[] = [
  {
    id: "store-starter",
    name: "Starter E-Commerce Store",
    badge: "New Stores & Salla/Zid",
    price: "290",
    cycle: "USD / one-time",
    idealFor: "Ideal for launching your first online store quickly on Salla, Zid, WooCommerce, or EasyOrder.",
    delivery: "7 – 10 Business Days",
    features: [
      "Clean, 100% mobile-responsive branded storefront design",
      "1 online payment gateway + Cash on Delivery configured",
      "Shipping zones setup + up to 25 initial products uploaded",
      "Meta Pixel, Google Analytics 4 & WhatsApp button connected",
      "Foundational SEO setup + full order management training",
    ],
    whatsappMsg: "Hello UNIQUE, I would like to book the Starter E-Commerce Store package ($290).",
  },
  {
    id: "store-pro",
    name: "Professional Growth Store",
    badge: "Most Popular",
    price: "365",
    cycle: "USD / one-time",
    idealFor: "Built for ambitious brands on WooCommerce, Shopify, or Salla Pro needing full CRO, ads tracking & SEO.",
    isPopular: true,
    delivery: "10 – 14 Business Days",
    features: [
      "Bilingual (Arabic & English) conversion-engineered storefront (CRO)",
      "Multi-gateway payments (Mada, Apple Pay, Tabby/Tamara, Paymob, Fawry) & shipping",
      "Meta CAPI + TikTok + Snapchat + Google Ads + abandoned cart recovery",
      "Advanced SEO, Product Schema JSON-LD & Core Web Vitals tuning",
      "Up to 50 products uploaded + coupons, bundles & PDF invoices",
      "Free post-launch support & stability warranty",
    ],
    whatsappMsg: "Hello UNIQUE, I want to book the Professional Growth Store package ($365).",
  },
  {
    id: "store-custom",
    name: "Custom Next.js / Multi-Vendor",
    badge: "High-Scale & Enterprise",
    price: "750",
    cycle: "Starting from / USD",
    idealFor: "For high-traffic brands, multi-vendor marketplaces, or stores integrating ERP and mobile apps.",
    delivery: "3 – 5 Weeks",
    features: [
      "Custom ultra-fast Next.js storefront or full Multi-Vendor platform",
      "Multi-currency, multi-warehouse & direct ERP accounting integration",
      "Ready to sync with a Flutter Android & iOS mobile app",
      "Full SEO, AI Search (GEO) & WebMCP optimization",
      "100% source code ownership + dedicated engineering handover",
    ],
    whatsappMsg: "Hello UNIQUE, I would like a quote for a Custom Next.js or Multi-Vendor store ($750+).",
  },
];

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Choosing a Platform",
    question: "Which platform is best for my store: WooCommerce, Shopify, Salla, or Zid?",
    answer:
      "It depends on your market and goals: Salla and Zid are great for rapid Saudi launches, Shopify excels for multi-market D2C brands, and WooCommerce gives you 100% ownership with 0% sales commission and unmatched SEO flexibility. In our free consultation we recommend the exact fit for your catalog.",
  },
  {
    id: "faq-2",
    category: "Payments & Shipping",
    question: "Do you help activate payment gateways (Mada, Tabby, Paymob) and couriers?",
    answer:
      "Yes. We guide you through submitting the required merchant documents, handle the full API integration, and run live end-to-end test orders so payments and courier waybills work smoothly from Day 1.",
  },
  {
    id: "faq-3",
    category: "Hosting & Subscriptions",
    question: "Do package prices include platform subscriptions or web hosting?",
    answer:
      "Our package fee is a one-time payment covering design, development, integrations, and setup. Third-party subscriptions (domain/hosting for WooCommerce, or monthly plans for Salla, Zid, or Shopify) are registered directly in your name so you retain 100% ownership.",
  },
  {
    id: "faq-4",
    category: "Delivery Timeline",
    question: "How long does it take to launch a ready-to-sell online store?",
    answer:
      "Starter and Professional Growth stores launch in 7 to 14 business days once we receive your brand assets and product details. Custom Next.js or Multi-Vendor platforms take 3 to 5 weeks.",
  },
  {
    id: "faq-5",
    category: "Ads & SEO Readiness",
    question: "Will my store be ready for paid ads and Google SEO right away?",
    answer:
      "Absolutely. Every store ships with verified Meta, TikTok, and GA4 purchase tracking alongside clean Product Schema SEO—and you can add our monthly SEO plans to scale organic revenue.",
  },
];

const SEMANTIC_KEYWORDS: string[] = [
  "Professional E-Commerce Store Design",
  "WooCommerce Store Development",
  "Shopify Store Setup MENA & GCC",
  "Salla & Zid Custom Store Design",
  "Custom Next.js Headless Commerce",
  "Mada, Apple Pay, Tabby & Tamara",
  "Paymob, Fawry & Bosta Integration",
  "Meta CAPI & TikTok Pixel Tracking",
  "E-Commerce CRO & One-Page Checkout",
  "Product Schema & E-Commerce SEO",
];

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional E-Commerce Store Design & Development — UNIQUE Digital Agency",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://www.uniquee-ws.com",
      telephone: "+201270506511",
    },
    serviceType: "E-Commerce Store Design & Development (WooCommerce, Shopify, Salla, Zid, Next.js)",
    areaServed: ["EG", "SA", "AE", "KW"],
    url: "https://www.uniquee-ws.com/en/services/e-commerce",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "E-Commerce Store Packages (USD)",
      itemListElement: STORE_PACKAGES_USD.map((pkg) => ({
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
        name: "E-Commerce Store Design",
        item: "https://www.uniquee-ws.com/en/services/e-commerce",
      },
    ],
  },
];
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

export default function EcommerceServiceEnPage() {
  const heroStoreWhatsapp = getWhatsAppUrl(
    "Hello UNIQUE Digital Agency! I want to build a professional e-commerce store and discuss the best platform and package for my business."
  );

  return (
    <div
      dir="ltr"
      lang="en"
      className="min-h-screen bg-[#000000] text-white selection:bg-blue-500/30 selection:text-cyan-200 font-sans antialiased"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />

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
                UNIQUE <span className="text-blue-400">Commerce</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">
                E-Commerce Store Design &amp; CRO
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#pillars" className="hover:text-cyan-300 transition">
              Store Pillars
            </a>
            <a href="#platforms" className="hover:text-cyan-300 transition">
              Platforms
            </a>
            <a href="#integrations" className="hover:text-cyan-300 transition">
              Integrations
            </a>
            <a href="#roadmap" className="hover:text-cyan-300 transition">
              Launch Plan
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
              href="/services/e-commerce"
              className="px-3.5 py-2 rounded-xl border border-neutral-800 bg-neutral-950 hover:border-cyan-500/50 text-xs font-bold text-neutral-200 hover:text-cyan-300 transition"
            >
              العربية
            </Link>
            <a
              href={heroStoreWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Start Your Store</span>
            </a>
          </div>
        </div>
      </header>
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
            <span className="text-cyan-300 font-semibold">Professional E-Commerce Store Design</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                <span>WooCommerce • Shopify • Salla • Zid • Next.js</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">Ready to Sell on Day 1</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.14] mb-6">
                High-Converting{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  E-Commerce Store Design
                </span>{" "}
                Built to Scale Your Online Sales
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                At <strong className="text-white">UNIQUE Digital Agency</strong>, we build more than
                attractive storefronts—we engineer complete sales machines combining{" "}
                <strong className="text-cyan-300">
                  sub-second mobile speed, 1-step checkout, local payments &amp; shipping, and verified ad tracking
                </strong>{" "}
                so every click turns into a confident purchase.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "Mada, Apple Pay, Tabby/Tamara, Paymob & Fawry ready",
                  "Automated shipping with Bosta, Aramex & SMSA",
                  "Verified Meta CAPI, TikTok Pixel & GA4 revenue tracking",
                  "Built-in Product Schema SEO & ultra-fast mobile loads",
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
                  href={heroStoreWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Launch Your E-Commerce Store Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <span>View Store Packages</span>
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
                  7–14 Day Launch • 100% Store Ownership
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-cyan-300">
                      Store Readiness — Commerce CRO Suite
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    Ready to Sell ✓
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Mobile Load</div>
                    <div className="text-xl font-black text-blue-400">0.9s</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">Fast LCP</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Conversion</div>
                    <div className="text-xl font-black text-cyan-300">+48%</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">1-Step Pay</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Pixel Match</div>
                    <div className="text-xl font-black text-amber-300">100%</div>
                    <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">CAPI + GA4</div>
                  </div>
                </div>

                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-neutral-200 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      Included &amp; Tested Inside Your Store
                    </span>
                    <span className="text-[11px] text-cyan-300 font-bold">Live Verified</span>
                  </div>
                  {[
                    { step: "Payments & BNPL (Mada, Apple Pay, Paymob)", tag: "Linked ✓" },
                    { step: "Auto Shipping Couriers (Bosta, Aramex, SMSA)", tag: "Linked ✓" },
                    { step: "Ad Tracking (Meta CAPI + TikTok + GA4)", tag: "Active ✓" },
                    { step: "Product Schema SEO + Abandoned Cart Recovery", tag: "Active ✓" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-blue-500/8 border border-blue-500/20 text-xs"
                    >
                      <span className="text-neutral-200 font-medium">{item.step}</span>
                      <span className="text-emerald-400 font-bold shrink-0">{item.tag}</span>
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

      <section id="pillars" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Built for Daily Orders"
            title="6 Pillars Behind Every"
            highlight="UNIQUE E-Commerce Store"
            subtitle="We engineer every detail that drives revenue—from mobile product discovery to one-tap checkout and cart recovery."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {SIX_STORE_PILLARS.map((p) => (
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
                      Direct Revenue Impact:
                    </div>
                    <p className="text-xs text-neutral-200">{p.impact}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
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
                  <span>Ask About This Feature on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platforms" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Platform Decision Guide"
            title="We Build on the World's Top"
            highlight="E-Commerce Platforms"
            subtitle="Clear comparison to help you choose the exact platform matching your catalog size, market, and budget."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {PLATFORM_CHOICES.map((pl, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-cyan-500/40 p-6 transition"
              >
                <span className="inline-block px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] font-bold text-amber-300 mb-3">
                  {pl.tag}
                </span>
                <h3 className="text-lg font-extrabold text-white mb-2">{pl.name}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">{pl.bestFor}</p>
                <ul className="space-y-2">
                  {pl.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div id="integrations">
            <SectionHeader
              badge="Complete Sales Ecosystem"
              title="Seamless Integrations with"
              highlight="Payments, Shipping & Ad Pixels"
              subtitle="Every tool your online store needs to collect payments and scale ads across Egypt, Saudi Arabia, UAE & Kuwait."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {STORE_INTEGRATIONS.map((grp, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-[#070B14] border border-neutral-800 p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-neutral-800 pb-4 mb-4">
                    <h3 className="text-base sm:text-lg font-extrabold text-white">{grp.category}</h3>
                    <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300 shrink-0">
                      {grp.badge}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {grp.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800/80 text-xs sm:text-sm text-neutral-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section id="roadmap" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="UNIQUE Handover Standard"
            title="4 Pre-Launch Checklists We Verify"
            highlight="Before Your Store Goes Live"
            subtitle="Every checkout button, payment gateway, waybill API, and pixel event is tested live before handover."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {UNIQUE_4_STORE_CHECKLISTS.map((tbl) => (
              <div
                key={tbl.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 p-6 sm:p-7"
              >
                <div className="flex items-center justify-between gap-3 border-b border-neutral-800 pb-4 mb-5">
                  <h3 className="text-lg font-extrabold text-white">{tbl.title}</h3>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300 shrink-0">
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
            badge="Fast Launch Blueprint"
            title="From Concept to Live Orders"
            highlight="in 7 to 14 Business Days"
            subtitle="Four structured milestones taking your brand from platform setup to your first verified sale."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LAUNCH_ROADMAP.map((ph) => (
              <div
                key={ph.num}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-extrabold text-cyan-300">
                      Step {ph.num}
                    </span>
                    <span className="text-xs font-bold text-amber-300">{ph.timeframe}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-3">{ph.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">{ph.desc}</p>
                </div>
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-3.5">
                  <div className="text-[10px] font-bold text-emerald-300 mb-0.5">Deliverable:</div>
                  <div className="text-xs font-bold text-white">{ph.output}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Clear Pricing • Zero Hidden Fees"
            title="E-Commerce Store Packages"
            highlight="in US Dollars ($)"
            subtitle="Choose the tier that matches your catalog and platform—with 100% ownership of your store."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {STORE_PACKAGES_USD.map((pkg) => (
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
                    <span className="text-xs font-bold text-amber-300">{pkg.delivery}</span>
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
                  <span>Book {pkg.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Everything to Know Before"
            highlight="Launching Your Online Store"
            subtitle="Clear answers on platform selection, payment & courier activation, timelines, and ad readiness."
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
                <span>Semantic Coverage of UNIQUE E-Commerce Services</span>
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


      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B1730] via-[#070D1A] to-[#051418] border border-blue-500/35 p-8 sm:p-12 lg:p-14 text-center shadow-2xl shadow-blue-950/50">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Platform Consultation &amp; Store Launch Plan</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Ready to Launch Your Online Store{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                and Start Taking Orders?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              Message us on WhatsApp with your product category and target market, and we will map
              out the ideal platform, payment/shipping integrations, and launch timeline.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroStoreWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Start Your E-Commerce Store on WhatsApp</span>
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
              © {new Date().getFullYear()} UNIQUE Digital Agency — Professional E-Commerce Store Design &amp; Development.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/services/e-commerce" className="hover:text-cyan-300 transition">
                المتاجر الإلكترونية (AR)
              </Link>
              <Link href="/en/services/android" className="hover:text-cyan-300 transition">
                Mobile Apps
              </Link>
              <Link href="/en/services/seo" className="hover:text-cyan-300 transition">
                SEO Services
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