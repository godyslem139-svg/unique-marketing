import type { Metadata } from "next";
import Image from "next/image";
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

function Crown({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
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
// NEXT.JS METADATA — WORDPRESS & NEXT.JS WEB DESIGN SERVICE (ENGLISH LTR)
// ============================================================================

export const metadata: Metadata = {
  title:
    "WordPress & Next.js Web Development | 99/100 Speed & SEO Ready — UNIQUE",
  description:
    "Specialized WordPress, WooCommerce, Next.js 16 + Sanity CMS, and Headless web development agency serving Egypt, Saudi Arabia & UAE. 98+ Core Web Vitals, zero-loss WP-to-Next.js migrations, and transparent USD packages starting at $220.",
  keywords: [
    "WordPress and Next.js Web Development",
    "Next.js Development Agency",
    "Custom WordPress Website Design",
    "WordPress vs Next.js for Business",
    "Migrate WordPress to Next.js Zero SEO Loss",
    "Headless WordPress Next.js",
    "Next.js Sanity CMS Development",
    "Fast WooCommerce Store Design",
    "Web Development Packages USD",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/en/services/wordpress-nextjs",
    languages: {
      en: "https://www.uniquee-ws.com/en/services/wordpress-nextjs",
      ar: "https://www.uniquee-ws.com/services/wordpress-nextjs",
      "x-default": "https://www.uniquee-ws.com/services/wordpress-nextjs",
    },
  },
  openGraph: {
    title: "WordPress & Next.js Web Development — UNIQUE Digital Agency",
    description:
      "Clean, fast WordPress websites and ultra-fast Next.js 16 + Sanity CMS platforms engineered for Google SEO, AI Search (GEO), and 100% ownership.",
    url: "https://www.uniquee-ws.com/en/services/wordpress-nextjs",
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

interface ComparisonRow {
  criterion: string;
  nextjs: string;
  wordpress: string;
  headless: string;
}

interface DevTrack {
  id: string;
  number: string;
  badge: string;
  title: string;
  arabicTag: string;
  summary: string;
  bestFor: string;
  techStack: string[];
  features: string[];
  whatsappMsg: string;
}

interface WebPackage {
  id: string;
  tierEn: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  price: string;
  oldPrice: string;
  isPopular?: boolean;
  isPremium?: boolean;
  features: string[];
}

interface QualityTable {
  id: string;
  title: string;
  badge: string;
  items: string[];
}

interface DeliveryPhase {
  num: string;
  timeframe: string;
  title: string;
  desc: string;
  output: string;
}

interface ChatGptQA {
  tag: string;
  q: string;
  a: string;
}

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// DATA ARRAYS — WORDPRESS & NEXT.JS ENGINEERING (ENGLISH)
// ============================================================================

const HERO_KPIS: HeroKpi[] = [
  {
    id: "speed",
    value: "99/100",
    title: "Elite Core Web Vitals Speed",
    subtitle: "Sub-1s mobile LCP on Next.js and under 1.5s on our clean, bloat-free WordPress builds.",
    accent: "emerald",
  },
  {
    id: "seo-geo",
    value: "SEO + AI",
    title: "Google, ChatGPT & WebMCP Ready",
    subtitle: "SSR architecture, JSON-LD Schema, dynamic sitemaps, and llms.txt built in from Day 1.",
    accent: "cyan",
  },
  {
    id: "ownership",
    value: "100%",
    title: "Full Code & Domain Ownership",
    subtitle: "Your domain, admin CMS, and GitHub source repository belong 100% to you with zero lock-in.",
    accent: "blue",
  },
  {
    id: "price",
    value: "From $220",
    title: "Transparent USD Packages",
    subtitle: "3 clear tiers covering domain, hosting, SSL, and MENA/global payment gateway integrations.",
    accent: "amber",
  },
];

const WP_VS_NEXTJS_COMPARISON: ComparisonRow[] = [
  {
    criterion: "Mobile Load Speed (LCP)",
    nextjs: "Fastest on the web (0.6s – 1.0s) via Server Components & Edge CDN",
    wordpress: "Fast & reliable (1.3s – 1.8s) when cleanly built without bloated plugins",
    headless: "Blazing Next.js storefront speed paired with WordPress editorial backend",
  },
  {
    criterion: "Security & Attack Surface",
    nextjs: "Enterprise-grade — no exposed PHP admin or third-party plugin vulnerabilities",
    wordpress: "Hardened security with SSL, firewall rules, updates & automated backups",
    headless: "Complete isolation between public frontend and admin dashboard",
  },
  {
    criterion: "SEO & AI Search (GEO) Power",
    nextjs: "Unmatched — SSR/ISR, dynamic Metadata, JSON-LD, WebMCP & llms.txt",
    wordpress: "Strong with clean URLs, structured Schema, XML Sitemaps & mobile speed",
    headless: "Combines Next.js technical SEO dominance with familiar WP publishing",
  },
  {
    criterion: "Content & Store Management",
    nextjs: "Modern bilingual Sanity CMS Studio — instant real-time publishing",
    wordpress: "Familiar WordPress admin dashboard loved by marketing teams",
    headless: "Keep your team's existing WordPress workflow while upgrading UI speed",
  },
  {
    criterion: "MENA & Global Payment Gateways",
    nextjs: "Direct APIs for Paymob, Mada, Moyasar, Stripe, Fawry & Bosta",
    wordpress: "Turnkey WooCommerce plugins for Paymob, Fawry, ValU, Mada & Aramex",
    headless: "Flexible API architecture for multi-currency enterprise stores",
  },
  {
    criterion: "Best Fit Projects",
    nextjs: "Real estate, multilingual tourism, enterprises & high-competition SEO",
    wordpress: "Corporate websites, clinics, blogs & rapid WooCommerce stores",
    headless: "High-traffic publishers & large blogs modernizing legacy WordPress",
  },
];

const THREE_DEV_TRACKS: DevTrack[] = [
  {
    id: "wordpress-pro",
    number: "01",
    badge: "Flexibility & Fast Launch",
    title: "Clean WordPress & WooCommerce Development",
    arabicTag: "تصميم مواقع ومتاجر ووردبريس احترافية",
    summary:
      "We never ship sluggish themes stuffed with 40 conflicting plugins. We engineer lightweight, custom-branded WordPress websites and WooCommerce stores that load fast, convert mobile traffic, and stay effortless for your team to edit.",
    bestFor: "Ideal for corporate profiles, medical clinics, consulting offices, blogs & WooCommerce stores.",
    techStack: ["WordPress Latest", "WooCommerce", "Lightweight Custom UI", "WebP/AVIF", "Redis Cache", "Paymob / Mada"],
    features: [
      "Custom UI/UX aligned with your brand identity—no recycled templates",
      "High mobile speed with WebP compression and server-level caching",
      "Full checkout setup with Paymob, Fawry, Mada, ValU, Bosta & Aramex",
      "Security hardening, HTTPS/SSL, and scheduled automated backups",
      "Recorded video walkthrough so your team can update pages & products easily",
    ],
    whatsappMsg: "Hello UNIQUE! I want to build a fast, professional WordPress or WooCommerce website.",
  },
  {
    id: "nextjs-modern",
    number: "02",
    badge: "Peak Speed & Next-Gen Stack",
    title: "Custom Next.js 16 + Sanity CMS Platforms",
    arabicTag: "برمجة مواقع ومنصات Next.js فائقة السرعة",
    summary:
      "The exact architecture powering global tech leaders—and UNIQUE's own website. Delivers 99/100 Lighthouse speed, enterprise security, seamless multi-language support (up to 7 languages), and unmatched SEO & AI Search (GEO) performance.",
    bestFor: "Ideal for real estate portals, multilingual tourism, export factories, agencies & SaaS.",
    techStack: ["Next.js 16 App Router", "React & TypeScript", "Tailwind CSS", "Sanity v3 CMS", "Vercel Edge CDN", "WebMCP & llms.txt"],
    features: [
      "Server-Side Rendering (SSR) & ISR for instant loads and flawless Google crawling",
      "Modern bilingual Sanity CMS Studio for real-time articles & portfolio updates",
      "Native RTL Arabic / LTR English & European language routing with Hreflang",
      "Automated JSON-LD Schema, dynamic Sitemaps, llms.txt & WebMCP AI tools",
      "Global Edge CDN hosting handling massive ad or organic traffic effortlessly",
    ],
    whatsappMsg: "Hello UNIQUE! I want to build a custom high-speed Next.js + Sanity CMS website.",
  },
  {
    id: "headless-migration",
    number: "03",
    badge: "Safe Migration & Hybrid Stack",
    title: "WordPress-to-Next.js Migration & Headless CMS",
    arabicTag: "تحويل ووردبريس إلى Next.js بدون خسارة السيو",
    summary:
      "Already have a slow WordPress site losing rankings and leads? We upgrade you to a blazing-fast Next.js frontend (either Headless WordPress or Sanity CMS) with a strict 301 Redirect plan that preserves 100% of your Google equity.",
    bestFor: "Ideal for established sites suffering from slow speed that want an immediate SEO & CRO lift.",
    techStack: ["Headless WP / GraphQL", "Next.js Frontend", "301 Redirect Map", "GSC Audit", "Core Web Vitals 99"],
    features: [
      "Full audit of all indexed URLs and high-value backlinks prior to migration",
      "Precision 301 Redirect mapping eliminating 404 errors during launch",
      "Complete transfer of articles, images, Meta tags & Alt attributes",
      "Immediate jump in mobile Core Web Vitals and conversion rates",
      "Post-launch Google Search Console monitoring to verify ranking stability",
    ],
    whatsappMsg: "Hello UNIQUE! I have an existing WordPress site and want to migrate to Next.js safely.",
  },
];

const WEB_PACKAGES: WebPackage[] = [
  {
    id: "web-basic",
    tierEn: "STARTER WEBSITE PACKAGE",
    title: "Basic Website Package",
    subtitle: "Ideal for startups & service firms needing a fast, credible launchpad",
    image: "/enbasic.jpeg",
    badge: "Starter • Up to 5 Pages",
    price: "220",
    oldPrice: "290",
    features: [
      "Domain & Hosting Registration + SSL Security Certificate",
      "Responsive Mobile, Tablet & Desktop Design",
      "Up to 5 Core Pages (Home, About, Services/Products, Contact)",
      "Direct Contact Form, WhatsApp & Social Media Integration",
      "Foundational SEO + Google Search Console + Google Maps Embed",
      "Easy Admin Dashboard for Content Management",
    ],
  },
  {
    id: "web-professional",
    tierEn: "BUSINESS PACKAGE",
    title: "Professional Business Package",
    subtitle: "Most popular for growing companies targeting Google SEO & consistent leads",
    image: "/enprofessional.webp",
    badge: "Most Popular • Up to 12 Pages",
    price: "290",
    oldPrice: "380",
    isPopular: true,
    features: [
      "Everything in Starter + Bespoke Brand-Aligned UI/UX Design",
      "Up to 12 Pages + Blog / News Section + Projects Portfolio",
      "Full On-Page SEO + Speed & Image Compression Optimization",
      "Google Analytics 4 + Lead Form Tracking + Marketing Landing Pages",
      "Security Hardening & Automated Backup Setup",
      "Client Training + Post-Launch Technical Support",
    ],
  },
  {
    id: "web-premium",
    tierEn: "PREMIUM PACKAGE",
    title: "Premium Package (Next.js / Full Store)",
    subtitle: "For enterprises, full e-commerce stores, multilingual portals & APIs",
    image: "/enPremium.webp",
    badge: "Premium • 25+ Pages",
    price: "365",
    oldPrice: "490",
    isPremium: true,
    features: [
      "Fully Custom UI/UX + 25+ Pages Built to Your Business Scope",
      "Full E-Commerce Store or Ultra-Fast Next.js + Sanity CMS Platform",
      "Payment Gateways, Shipping Setup & Multi-Language Support",
      "Advanced Technical SEO + JSON-LD Schema + Core Web Vitals",
      "CRM, External APIs & Online Booking System Integrations",
      "Full Pre-Launch QA, Team Training & Priority Maintenance Support",
    ],
  },
];

const QUALITY_4_TABLES: QualityTable[] = [
  {
    id: "q-speed",
    title: "1. Speed & Core Web Vitals Standard",
    badge: "PageSpeed 98+",
    items: [
      "Optimized LCP, INP, and CLS scores across mobile & desktop",
      "Automated WebP / AVIF media compression & lazy loading",
      "Clean codebase free of bloated scripts or unused plugins",
      "Edge CDN & server caching configured for instant navigation",
    ],
  },
  {
    id: "q-seo",
    title: "2. SEO & AI Search (GEO) Readiness",
    badge: "Google & AI Ready",
    items: [
      "Semantic H1–H3 hierarchy and clean SEO-friendly URLs",
      "JSON-LD Schema Markup, dynamic XML Sitemaps & Robots.txt",
      "Optional llms.txt & WebMCP tool registration for AI agents",
      "Google Search Console & Google Analytics GA4 connected",
    ],
  },
  {
    id: "q-security",
    title: "3. Security & 100% Client Ownership",
    badge: "Zero Lock-In",
    items: [
      "Domain & hosting registered directly under your ownership",
      "HTTPS / SSL encryption and anti-spam form protection",
      "Automated scheduled backups for files and databases",
      "Full source code & admin handover plus team training",
    ],
  },
  {
    id: "q-ux",
    title: "4. UX & Conversion Optimization (CRO)",
    badge: "Mobile-First",
    items: [
      "Custom brand-aligned UI/UX engineered to earn instant trust",
      "Pixel-perfect responsiveness across all screen sizes",
      "Smart WhatsApp CTAs and frictionless lead quote forms",
      "End-to-end QA testing of every link, form & checkout flow",
    ],
  },
];

const UNIQUE_PORTFOLIO: { name: string; stack: string }[] = [
  { name: "The Light House Diving & Tourism", stack: "Next.js + Sanity CMS — 7 Languages" },
  { name: "UNIQUE Digital Agency Platform", stack: "Next.js 16 + Sanity + WebMCP + llms.txt" },
  { name: "Raneen Commercial Store", stack: "High-Speed E-Commerce Storefront" },
  { name: "Riyadh Gate Directory & Services", stack: "Top-Ranking Service Portal" },
  { name: "Al-Badr Real Estate & Investment", stack: "Real Estate Development Portal" },
  { name: "Al-Mamlakah General Contracting", stack: "Corporate Website — GCC" },
];

const DELIVERY_4_PHASES: DeliveryPhase[] = [
  {
    num: "01",
    timeframe: "Days 1 – 3",
    title: "Stack Selection & Architecture",
    desc: "We align on goals and choose the highest-ROI stack (WordPress, Next.js, or Headless) while mapping pages and SEO routes.",
    output: "Approved Scope & Sitemap",
  },
  {
    num: "02",
    timeframe: "Days 4 – 8",
    title: "Custom UI/UX Design",
    desc: "We craft a modern, conversion-focused interface tailored to your brand identity with Mobile-First ergonomics.",
    output: "Signed-Off UI/UX Design",
  },
  {
    num: "03",
    timeframe: "Days 9 – 16",
    title: "Engineering, CMS & Technical SEO",
    desc: "We build clean code, connect your CMS & payment gateways, and implement full Schema, speed, and security layers.",
    output: "Live Staging Link for Review",
  },
  {
    num: "04",
    timeframe: "Days 17 – 21",
    title: "QA Testing, Launch & Handover",
    desc: "After full Lighthouse and security QA, we launch on your official domain and transfer 100% ownership with training.",
    output: "Live, Indexed Website (100% Owned)",
  },
];

const CHATGPT_QA_LIST: ChatGptQA[] = [
  {
    tag: "Stack Decision",
    q: "When should I choose WordPress vs Next.js for my business in 2026?",
    a: "Choose WordPress if you want a rapid launch, familiar editorial dashboard, or standard WooCommerce store. Choose Next.js + Sanity CMS if you want 99/100 mobile speed, enterprise security, seamless multi-language routing, and a technical edge on competitive Google SEO keywords.",
  },
  {
    tag: "Safe Migration",
    q: "Can I migrate my slow WordPress site to Next.js without losing SEO rankings?",
    a: "Yes. We audit all indexed URLs, deploy a precision 301 Redirect map, transfer all metadata and Schema, and monitor Google Search Console post-launch—often resulting in higher rankings thanks to faster Core Web Vitals.",
  },
  {
    tag: "Editing Next.js",
    q: "Will I need a developer to edit text or publish blogs on a Next.js site?",
    a: "Not at all. We connect your Next.js site to Sanity CMS (or Headless WordPress), giving your team an intuitive dashboard to publish articles, projects, and updates in seconds with zero code.",
  },
  {
    tag: "Pricing & Ownership",
    q: "How much does a WordPress or Next.js website cost, and do I own the code?",
    a: "Our transparent packages start at $220 (Starter), $290 (Business), and $365 (Premium)—including domain, hosting, and SSL—and you receive 100% ownership of your domain, CMS, and source code.",
  },
];

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Stack Advice",
    question: "I'm not sure whether WordPress or Next.js fits my project—can you advise me?",
    answer:
      "Yes. Message us on WhatsApp for a free technical consultation. We evaluate your business model, content workflow, and budget to recommend the exact stack that maximizes your ROI.",
  },
  {
    id: "faq-2",
    category: "WordPress Speed",
    question: "Are WordPress sites slow compared to Next.js?",
    answer:
      "Only when built poorly with heavy page builders and dozens of plugins. Our clean WordPress builds achieve 90+ PageSpeed scores through lightweight architecture, WebP media, and proper caching.",
  },
  {
    id: "faq-3",
    category: "Multilingual",
    question: "Can you build bilingual Arabic & English (or multi-language) websites?",
    answer:
      "Absolutely. Both our WordPress and Next.js builds support crisp RTL Arabic and LTR English (or up to 7 languages) with reciprocal Hreflang tags for international SEO.",
  },
  {
    id: "faq-4",
    category: "Hosting & Domain",
    question: "Are domain and hosting included in the packages?",
    answer:
      "Yes. Packages include domain registration, fast hosting, and SSL security. For Next.js projects, we deploy on modern Edge CDN platforms like Vercel for global speed and low operating cost.",
  },
  {
    id: "faq-5",
    category: "Support",
    question: "Do you provide training and post-launch maintenance?",
    answer:
      "Yes. Every handover includes a training walkthrough for your team plus complimentary post-launch technical support to guarantee smooth operation.",
  },
];

const SEMANTIC_KEYWORDS: string[] = [
  "WordPress & Next.js Web Development",
  "Custom Next.js 16 + Sanity CMS Agency",
  "Fast Clean WordPress & WooCommerce Design",
  "WordPress vs Next.js Speed & SEO Comparison",
  "Zero-SEO-Loss WordPress to Next.js Migration",
  "Headless WordPress with Next.js Frontend",
  "Core Web Vitals 99/100 Web Engineering",
  "Multilingual RTL & LTR Websites",
  "AI-Ready Websites (Schema, llms.txt & WebMCP)",
  "Egypt, Saudi Arabia & UAE Web Development Agency",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD — Service + OfferCatalog USD + FAQPage + Breadcrumb)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WordPress & Next.js Web Development — UNIQUE Digital Agency",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://www.uniquee-ws.com",
      telephone: "+201270506511",
    },
    serviceType: "WordPress & Next.js Web Development",
    areaServed: ["EG", "SA", "AE", "KW", "US", "GB"],
    url: "https://www.uniquee-ws.com/en/services/wordpress-nextjs",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "WordPress & Next.js Website Design Packages (USD)",
      itemListElement: WEB_PACKAGES.map((pkg) => ({
        "@type": "Offer",
        name: pkg.title,
        price: pkg.price,
        priceCurrency: "USD",
        description: pkg.subtitle,
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
        name: "WordPress & Next.js Web Development",
        item: "https://www.uniquee-ws.com/en/services/wordpress-nextjs",
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
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-bold uppercase tracking-wider mb-5">
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
// MAIN PAGE COMPONENT — WORDPRESS & NEXT.JS SERVICE PAGE (ENGLISH LTR)
// ============================================================================

export default function WordPressNextjsEnglishPage() {
  const heroWhatsapp = getWhatsAppUrl(
    "Hello UNIQUE Digital Agency! I would like a free consultation to build a WordPress or Next.js website."
  );

  return (
    <div
      dir="ltr"
      lang="en"
      className="min-h-screen bg-[#000000] text-white selection:bg-blue-500/30 selection:text-cyan-200 font-sans antialiased"
    >
      {/* Structured Data (JSON-LD — Service + OfferCatalog USD + FAQPage + Breadcrumb) */}
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
                UNIQUE <span className="text-blue-400">DEV</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">
                WordPress &amp; Next.js Engineering
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#comparison" className="hover:text-cyan-300 transition">
              WP vs Next.js
            </a>
            <a href="#tracks" className="hover:text-cyan-300 transition">
              Dev Tracks
            </a>
            <a href="#packages" className="hover:text-cyan-300 transition">
              USD Packages
            </a>
            <a href="#quality" className="hover:text-cyan-300 transition">
              QA Standards
            </a>
            <a href="#phases" className="hover:text-cyan-300 transition">
              Timeline
            </a>
            <a href="#faq" className="hover:text-cyan-300 transition">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/services/wordpress-nextjs"
              className="px-3.5 py-2 rounded-xl border border-neutral-800 bg-neutral-950 hover:border-cyan-500/50 text-xs font-bold text-neutral-200 hover:text-cyan-300 transition"
            >
              العربية
            </Link>
            <a
              href={heroWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Free Consultation</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION + LIVE SPEED BENCHMARK DUEL (WP VS NEXT.JS)
      ==================================================================== */}
      <section className="relative overflow-hidden pt-14 pb-20 lg:pt-24 lg:pb-28 border-b border-neutral-900">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/4 w-[540px] h-[540px] rounded-full bg-blue-600/12 blur-[150px]" />
          <div className="absolute top-20 right-1/4 w-[460px] h-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[560px] h-[300px] rounded-full bg-emerald-500/8 blur-[130px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link href="/en" className="hover:text-cyan-300 transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-cyan-300 font-semibold">WordPress &amp; Next.js Development</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>WordPress &amp; WooCommerce</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">Next.js 16 + Sanity CMS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
                High-Speed{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  WordPress &amp; Next.js
                </span>{" "}
                Websites Engineered for SEO &amp; Conversions
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                At <strong className="text-white">UNIQUE Digital Agency</strong>, we pair the
                editorial ease of <strong className="text-blue-300">clean WordPress</strong> with
                the 99/100 performance and security of{" "}
                <strong className="text-cyan-300">Next.js 16 + Sanity CMS</strong>—matching your
                business to the exact stack that maximizes speed, Google rankings, and ROI.
              </p>

              {/* Trust Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "98+ Speed on Next.js & 94+ on Clean WordPress",
                  "Zero-SEO-Loss WordPress to Next.js Migrations",
                  "Paymob, Mada, Moyasar, Stripe & Bosta Ready",
                  "100% Ownership of Domain, CMS & Source Code",
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

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={heroWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Get Free Tech Stack Advice</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <span>View Packages ($220 – $365)</span>
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
                  Domain + Hosting + SSL + Team Training
                </span>
              </div>
            </div>

            {/* Hero Right Visual: Live Benchmark Duel */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Live Speed Benchmark — UNIQUE
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    Core Web Vitals ✓
                  </span>
                </div>

                {/* Next.js Card */}
                <div className="rounded-2xl bg-gradient-to-r from-blue-600/15 via-cyan-500/10 to-neutral-950 border border-cyan-500/40 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-black text-white flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      Next.js 16 + Sanity CMS
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black">
                      99 / 100
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2">
                      <div className="text-[10px] text-neutral-500">LCP</div>
                      <div className="text-sm font-black text-emerald-400">0.7s</div>
                    </div>
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2">
                      <div className="text-[10px] text-neutral-500">SEO</div>
                      <div className="text-sm font-black text-cyan-300">100</div>
                    </div>
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2">
                      <div className="text-[10px] text-neutral-500">Security</div>
                      <div className="text-sm font-black text-amber-300">Enterprise</div>
                    </div>
                  </div>
                </div>

                {/* Clean WordPress Card */}
                <div className="rounded-2xl bg-neutral-950 border border-blue-500/30 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-black text-white flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-blue-400" />
                      Clean WordPress (UNIQUE Standard)
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-black">
                      94 / 100
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2">
                      <div className="text-[10px] text-neutral-500">LCP</div>
                      <div className="text-sm font-black text-emerald-400">1.4s</div>
                    </div>
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2">
                      <div className="text-[10px] text-neutral-500">SEO</div>
                      <div className="text-sm font-black text-cyan-300">98</div>
                    </div>
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2">
                      <div className="text-[10px] text-neutral-500">Launch</div>
                      <div className="text-sm font-black text-blue-300">7 Days</div>
                    </div>
                  </div>
                </div>

                {/* Modern Features */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4">
                  <div className="text-xs font-bold text-neutral-300 mb-2.5">
                    2026 Modern Web Features Included:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "SSR / ISR",
                      "Schema JSON-LD",
                      "llms.txt",
                      "WebMCP Ready",
                      "RTL / LTR",
                      "Paymob / Mada",
                      "Sanity / WP",
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

          {/* 4 Hero KPIs */}
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
          3. COMPARISON TABLE — NEXT.JS VS WORDPRESS VS HEADLESS
      ==================================================================== */}
      <section id="comparison" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering Decision Guide"
            title="Head-to-Head Comparison:"
            highlight="Next.js vs WordPress vs Headless"
            subtitle="Pick the exact architecture aligned with your growth goals, speed expectations, and editorial workflow."
          />

          <div className="overflow-x-auto rounded-3xl border border-neutral-800 bg-[#060911]">
            <table className="w-full text-left border-collapse min-w-[780px]">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-950/90">
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                    Evaluation Factor
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-cyan-300 bg-blue-500/10">
                    Next.js 16 + Sanity CMS
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                    Clean WordPress / WooCommerce
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-amber-300">
                    Headless (WP Backend + Next.js)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80 text-sm">
                {WP_VS_NEXTJS_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/40 transition">
                    <td className="py-4 px-6 font-bold text-white">{row.criterion}</td>
                    <td className="py-4 px-6 text-cyan-100 font-medium bg-blue-500/[0.04]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{row.nextjs}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-neutral-300">{row.wordpress}</td>
                    <td className="py-4 px-6 text-neutral-300">{row.headless}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. THREE SPECIALIZED DEVELOPMENT TRACKS
      ==================================================================== */}
      <section id="tracks" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Specialized Engineering Tracks"
            title="3 Ways We Build & Upgrade"
            highlight="WordPress & Next.js Websites"
            subtitle="Whether launching from scratch or modernizing a slow legacy site—we execute cleanly end-to-end."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {THREE_DEV_TRACKS.map((tr) => (
              <div
                key={tr.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-blue-500/50 p-7 flex flex-col justify-between transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      {tr.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300">
                      {tr.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1.5">
                    {tr.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-400 mb-4">{tr.arabicTag}</div>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-5">{tr.summary}</p>

                  <div className="rounded-2xl bg-emerald-500/8 border border-emerald-500/25 p-3.5 mb-5">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-300 mb-0.5">
                      Best Fit For
                    </div>
                    <p className="text-xs text-neutral-200">{tr.bestFor}</p>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {tr.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {tr.techStack.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-[11px] text-amber-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(tr.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-neutral-950 hover:bg-blue-600/20 border border-neutral-800 hover:border-blue-500/50 text-xs sm:text-sm font-bold text-cyan-300 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request This Track on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. OFFICIAL WEB DESIGN PACKAGES ($220 / $290 / $365) WITH EN POSTERS
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Official USD Packages"
            title="WordPress & Next.js"
            highlight="Website Design Packages ($)"
            subtitle="Clear one-time USD pricing including domain, hosting, SSL, and 100% client ownership."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {WEB_PACKAGES.map((pkg) => {
              const cardStyle = pkg.isPremium
                ? "bg-gradient-to-b from-[#131008] via-[#090D18] to-[#070B14] border-2 border-amber-400/60 shadow-[0_0_55px_rgba(251,191,36,0.16)]"
                : pkg.isPopular
                ? "bg-gradient-to-b from-[#091529] to-[#070B14] border-2 border-cyan-400/60 shadow-[0_0_50px_rgba(6,182,212,0.18)]"
                : "bg-[#070B14] border border-neutral-800/90 hover:border-blue-500/60 shadow-2xl";

              return (
                <div
                  key={pkg.id}
                  className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${cardStyle}`}
                >
                  <div className="relative w-full h-[430px] bg-black flex items-center justify-center p-2 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={`${pkg.title} - UNIQUE Digital Agency`}
                      title={pkg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105 p-1"
                    />
                    <span
                      className={`absolute top-4 left-4 inline-flex items-center gap-1.5 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg z-10 ${
                        pkg.isPremium
                          ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-black"
                          : pkg.isPopular
                          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                          : "bg-blue-600/90 text-white"
                      }`}
                    >
                      {pkg.isPremium && <Crown className="w-3.5 h-3.5" />}
                      <span>{pkg.badge}</span>
                    </span>
                  </div>

                  <div className="p-7 bg-[#090E1A]/95 border-t border-neutral-800/80 flex flex-col justify-between flex-grow">
                    <div>
                      <div
                        className={`text-[11px] font-black tracking-widest uppercase mb-1.5 ${
                          pkg.isPremium
                            ? "text-amber-300"
                            : pkg.isPopular
                            ? "text-cyan-300"
                            : "text-blue-400"
                        }`}
                      >
                        {pkg.tierEn}
                      </div>

                      <h3 className="text-2xl font-black text-white mb-2">{pkg.title}</h3>
                      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-5">
                        {pkg.subtitle}
                      </p>

                      <div
                        className={`mb-6 bg-black/55 p-4 rounded-2xl border ${
                          pkg.isPremium
                            ? "border-amber-400/35"
                            : pkg.isPopular
                            ? "border-cyan-400/35"
                            : "border-neutral-800"
                        }`}
                      >
                        <div className="flex items-baseline gap-2.5">
                          <span
                            className={`text-3xl font-black ${
                              pkg.isPremium ? "text-amber-300" : "text-cyan-300"
                            }`}
                          >
                            ${pkg.price}
                          </span>
                          <span className="text-xs text-neutral-400 font-semibold">
                            USD / One-Time
                          </span>
                          <span className="text-sm text-neutral-500 line-through ml-auto">
                            ${pkg.oldPrice}
                          </span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px]">
                          <span className="text-emerald-400 font-bold">
                            ✓ Domain + Hosting + SSL
                          </span>
                          <span className="text-neutral-400">100% Ownership</span>
                        </div>
                      </div>

                      <ul className="space-y-2.5 mb-7">
                        {pkg.features.map((feat, i) => (
                          <li
                            key={i}
                            className="text-neutral-200 text-xs sm:text-sm flex items-start gap-2.5 leading-relaxed"
                          >
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                pkg.isPremium
                                  ? "bg-amber-500/15 border border-amber-400/40 text-amber-300"
                                  : "bg-emerald-500/15 border border-emerald-500/35 text-emerald-400"
                              }`}
                            >
                              <Check className="w-3 h-3" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={getWhatsAppUrl(
                        `Hello UNIQUE! I would like to book the ${pkg.title} ($${pkg.price} USD) and discuss WordPress vs Next.js.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl font-extrabold text-sm transition-all duration-300 shadow-lg ${
                        pkg.isPremium
                          ? "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-400 hover:from-amber-400 hover:to-yellow-300 text-black shadow-amber-500/25"
                          : pkg.isPopular
                          ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-blue-600/30"
                          : "bg-blue-600 hover:bg-blue-500 text-white"
                      }`}
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Book Package on WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. QUALITY TABLES + LIVE TERMINAL + PORTFOLIO
      ==================================================================== */}
      <section id="quality" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering QA Standard"
            title="4 Pre-Launch Quality Checklists"
            highlight="On Every WordPress & Next.js Build"
            subtitle="No site goes live before passing our speed, technical SEO, security, and mobile UX checks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {QUALITY_4_TABLES.map((tbl) => (
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
            <div className="lg:col-span-6 rounded-3xl bg-[#050811] border border-cyan-500/30 p-6 font-mono text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="ml-2 text-neutral-400 font-sans font-bold">
                      unique-web-pipeline — Next.js &amp; WordPress QA
                    </span>
                  </div>
                  <span className="text-emerald-400">PASSED</span>
                </div>
                <div className="space-y-2.5 text-neutral-300 leading-relaxed">
                  <div>
                    <span className="text-cyan-400">$</span> unique-verify --stack=&quot;nextjs-16,wordpress&quot;
                  </div>
                  <div className="text-emerald-400">
                    ✓ [Lighthouse] Performance: 99 | SEO: 100 | Accessibility: 98
                  </div>
                  <div className="text-emerald-400">
                    ✓ [AI Readiness] JSON-LD Schema + llms.txt + WebMCP Verified
                  </div>
                  <div className="text-blue-300">
                    ✓ [Migration] 301 Redirect Map Checked — Zero 404 Broken Links
                  </div>
                  <div className="text-amber-300">
                    ✓ [Handover] 100% Domain, Admin &amp; Source Ownership Transferred
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between font-sans">
                <span className="text-neutral-400 text-xs">www.uniquee-ws.com</span>
                <a
                  href={heroWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white font-bold text-xs inline-flex items-center gap-1"
                >
                  <span>Start Your Project</span>
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
                    Web Platforms Built With Modern Stacks
                  </h3>
                </div>
                <Award className="w-6 h-6 text-amber-400 shrink-0" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {UNIQUE_PORTFOLIO.map((proj, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-blue-500/40 p-3.5 transition"
                  >
                    <div className="text-sm font-bold text-white mb-0.5">{proj.name}</div>
                    <div className="text-[11px] text-cyan-300 font-medium">{proj.stack}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. 4-PHASE DELIVERY ROADMAP
      ==================================================================== */}
      <section id="phases" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Predictable Timeline"
            title="From Architecture to Launch in"
            highlight="4 Transparent Engineering Phases"
            subtitle="Track every milestone on a live staging link until official domain launch."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERY_4_PHASES.map((ph) => (
              <div
                key={ph.num}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-extrabold text-cyan-300">
                      Phase {ph.num}
                    </span>
                    <span className="text-xs font-bold text-amber-300">{ph.timeframe}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2.5">{ph.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                    {ph.desc}
                  </p>
                </div>
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-3">
                  <div className="text-[10px] uppercase font-bold text-emerald-300 mb-0.5">
                    Deliverable
                  </div>
                  <div className="text-xs font-bold text-white">{ph.output}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. CHATGPT Q&A + FAQ ACCORDION + SEMANTIC CLOUD
      ==================================================================== */}
      <section id="faq" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="AI Search & Founder Q&A"
            title="Key Questions Founders Ask"
            highlight="Before Choosing WordPress vs Next.js"
            subtitle="Straight engineering answers on speed, zero-loss migrations, CMS editing, and ownership."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {CHATGPT_QA_LIST.map((item, idx) => (
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
            title="Everything About Our"
            highlight="WordPress & Next.js Service"
            subtitle="Clear details on hosting, multilingual routing, speed, and ongoing support."
          />

          <div className="max-w-4xl mx-auto space-y-4 mb-16">
            {FAQS.map((faq) => (
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

          <div className="rounded-3xl bg-[#070B14] border border-neutral-800 p-7 sm:p-8">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              Web Engineering Coverage
            </div>
            <h3 className="text-lg font-extrabold text-white mb-5">
              WordPress, Next.js &amp; Headless Solutions at UNIQUE
            </h3>
            <div className="flex flex-wrap gap-2">
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
      </section>

      {/* ====================================================================
          9. FINAL CTA & FOOTER
      ==================================================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B1730] via-[#070D1A] to-[#051418] border border-blue-500/35 p-8 sm:p-12 lg:p-14 text-center shadow-2xl shadow-blue-950/50">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Technical Consultation to Pick Your Ideal Stack</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Ready to Build a{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                WordPress or Next.js
              </span>{" "}
              Site That Outperforms?
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              Message us your project goals on WhatsApp and receive an honest stack recommendation,
              timeline, and fixed USD quote within 24 hours.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat With Us on WhatsApp</span>
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
              © {new Date().getFullYear()} UNIQUE Digital Agency — WordPress &amp; Next.js Web Engineering.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/services/wordpress-nextjs" className="hover:text-cyan-300 transition">
                WordPress &amp; Next.js (AR)
              </Link>
              <Link href="/en/services/backlinks" className="hover:text-cyan-300 transition">
                Backlinks Service
              </Link>
              <Link href="/en/egypt-web-design" className="hover:text-cyan-300 transition">
                Web Design Egypt
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