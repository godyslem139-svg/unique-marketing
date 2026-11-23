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

function PenTool({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 19 7-7 3 3-7 7-3-3z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="m2 2 7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
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
// NEXT.JS METADATA — CONTENT WRITING SERVICE PAGE (ENGLISH LTR)
// ============================================================================

export const metadata: Metadata = {
  title:
    "Website & Social Media Content Writing | SEO Copywriting & Reels Scripts — UNIQUE",
  description:
    "100% human-edited website copywriting, SEO & AI Search (GEO) blog articles, e-commerce product descriptions, and monthly social media calendars & Reels scripts in English and Arabic (MSA, Gulf & Egyptian) starting at $120/month.",
  keywords: [
    "Website Content Writing Services",
    "Social Media Content Writing Agency",
    "SEO Article Writing Services",
    "Conversion Copywriting Landing Pages",
    "E-Commerce Product Description Writing",
    "Reels and TikTok Scriptwriting",
    "Bilingual Arabic English Copywriting",
    "GEO AI Search Content Optimization",
    "Monthly Content Writing Packages USD",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/en/services/content-writing",
    languages: {
      ar: "https://www.uniquee-ws.com/services/content-writing",
      en: "https://www.uniquee-ws.com/en/services/content-writing",
      "x-default": "https://www.uniquee-ws.com/services/content-writing",
    },
  },
  openGraph: {
    title: "Website & Social Media Content Writing — UNIQUE Digital Agency",
    description:
      "100% original human-crafted copy engineered to rank on Google & AI Overviews and turn readers into paying customers.",
    url: "https://www.uniquee-ws.com/en/services/content-writing",
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

interface ContentPillar {
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

interface ToneVoiceCard {
  name: string;
  tag: string;
  bestFor: string;
  points: string[];
}

interface EditorialChecklist {
  id: string;
  title: string;
  badge: string;
  items: string[];
}

interface WorkflowPhase {
  num: string;
  timeframe: string;
  title: string;
  desc: string;
  output: string;
}

interface ContentPackageUSD {
  id: string;
  name: string;
  badge: string;
  price: string;
  cycle: string;
  idealFor: string;
  isPopular?: boolean;
  volume: string;
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
// DATA ARRAYS — WEBSITE & SOCIAL MEDIA CONTENT WRITING (ENGLISH)
// ============================================================================

const HERO_KPIS: HeroKpi[] = [
  {
    id: "human",
    value: "100% Human",
    title: "Original & Zero AI Fluff",
    subtitle: "Plagiarism-checked, specialist-edited copy aligned with Google E-E-A-T standards.",
    accent: "emerald",
  },
  {
    id: "seo-geo",
    value: "SEO + GEO",
    title: "Built for Google & ChatGPT",
    subtitle: "Semantic H1–H3 structure and direct factual answers ready for AI Overviews citation.",
    accent: "cyan",
  },
  {
    id: "dialects",
    value: "2 Languages",
    title: "English + 3 Arabic Dialects",
    subtitle: "Commercial English, Modern Standard Arabic, Gulf/Saudi, and Egyptian tone of voice.",
    accent: "blue",
  },
  {
    id: "pricing",
    value: "From $120",
    title: "Flexible Monthly Plans",
    subtitle: "Publish-ready monthly calendars and articles with free revisions until approved.",
    accent: "amber",
  },
];

const SIX_CONTENT_PILLARS: ContentPillar[] = [
  {
    id: "seo-articles",
    number: "01",
    badge: "Organic Search & Authority",
    title: "Semantic SEO & GEO Blog Articles",
    subLabel: "Topical Authority • Search Intent • AI Citation Ready",
    summary:
      "In-depth, research-backed blog articles built around real commercial search intent—formatted with clean headings, comparison tables, and internal links to rank on Page 1 and AI Overviews.",
    impact: "Turns your blog into a compounding organic asset that attracts free leads for years.",
    features: [
      "Commercial & informational keyword research plus competitor gap mapping",
      "Publish-ready delivery (H1–H3, Meta Title, Meta Description & Image Alt text)",
      "Natural semantic keyword flow and strategic internal linking to money pages",
      "Direct-answer blocks formatted for Google Featured Snippets & ChatGPT",
    ],
    whatsappMsg: "Hello UNIQUE, I need professional SEO & GEO blog articles to rank on Google.",
  },
  {
    id: "website-copy",
    number: "02",
    badge: "Conversion Copywriting",
    title: "Website & High-Converting Landing Page Copy",
    subLabel: "AIDA & PAS Frameworks • UX Microcopy • Clear CTAs",
    summary:
      "Persuasive copy for homepages, service pillars, About pages, and paid-ad landing pages engineered to communicate your unique value in seconds and drive WhatsApp or form inquiries.",
    impact: "Multiplies conversion rates from both organic search and paid ad campaigns.",
    features: [
      "Scroll-stopping headlines that communicate clear customer value in 3 seconds",
      "Proactive objection handling backed by proof, process, and guarantees",
      "Action-oriented CTAs placed strategically at every decision point",
      "UX-friendly scannable copy tailored for fast mobile reading",
    ],
    whatsappMsg: "Hello UNIQUE, I need conversion-focused copywriting for my website or landing pages.",
  },
  {
    id: "social-content",
    number: "03",
    badge: "Community & Engagement",
    title: "Social Media Content & Monthly Calendars",
    subLabel: "Facebook • Instagram • LinkedIn • X • TikTok",
    summary:
      "Complete monthly content calendars balancing educational, trust-building, interactive, and direct-response sales posts with a consistent brand voice across every social platform.",
    impact: "Keeps your brand consistently active and converts followers into paying buyers.",
    features: [
      "Structured monthly calendar mapped to awareness, trust, engagement & sales",
      "On-design visual text + persuasive caption + targeted hashtags per post",
      "Platform-native voice (executive for LinkedIn, conversational for IG/FB)",
      "Seamless upgrade path into UNIQUE's full Social Media Management plans",
    ],
    whatsappMsg: "Hello UNIQUE, I want a monthly social media content calendar and copywriting plan.",
  },
  {
    id: "reels-ad-scripts",
    number: "04",
    badge: "Reach & Paid Ads",
    title: "Reels, TikTok & Paid Ad Scriptwriting",
    subLabel: "3-Second Hooks • Visual Cues • High-ROAS Ad Copy",
    summary:
      "Short-form video scripts and paid ad copy built around scroll-stopping 3-second hooks, scene-by-scene visual direction, and direct calls to action that lower ad costs.",
    impact: "Boosts video watch-through rates and reduces Cost Per Message/Lead in paid ads.",
    features: [
      "3 distinct opening hooks per campaign for rapid A/B creative testing",
      "Second-by-second visual cues paired with natural spoken voiceover lines",
      "Policy-compliant ad copy tailored for Meta, TikTok, Snapchat & Google Ads",
      "Pairs directly with UNIQUE's dedicated Reels production packages",
    ],
    whatsappMsg: "Hello UNIQUE, I need Reels/TikTok scripts and high-converting paid ad copy.",
  },
  {
    id: "product-descriptions",
    number: "05",
    badge: "E-Commerce Conversions",
    title: "E-Commerce Product & Category Descriptions",
    subLabel: "Salla • Zid • Shopify • WooCommerce",
    summary:
      "Turn dry manufacturer specs into persuasive, SEO-rich product and category copy that answers sizing, usage, and warranty questions while ranking for buyer-intent searches.",
    impact: "Lifts Add-to-Cart rates while reducing repetitive support questions and returns.",
    features: [
      "100% unique product copy eliminating duplicate-content SEO penalties",
      "Scannable benefit bullets highlighting why the shopper should buy now",
      "Natural buyer-intent keywords tailored for Egypt, Saudi Arabia & UAE",
      "Optimized Category Hub copy to capture high-volume generic searches",
    ],
    whatsappMsg: "Hello UNIQUE, I run an online store and need SEO-friendly product descriptions.",
  },
  {
    id: "profiles-bilingual",
    number: "06",
    badge: "Corporate Identity & AR/EN",
    title: "Company Profiles & Bilingual Transcreation",
    subLabel: "Executive Profiles • Email Flows • AR ↔ EN Adaptation",
    summary:
      "Executive company profiles, pitch decks, email & WhatsApp sequences, and true commercial transcreation between English and Arabic—never robotic literal translation.",
    impact: "Elevates your corporate credibility in front of enterprise clients and partners.",
    features: [
      "Cohesive Vision, Mission, Capabilities, and Portfolio storytelling",
      "Marketing transcreation that preserves persuasion across Arabic & English",
      "Automated email nurture flows and high-reply WhatsApp follow-up scripts",
      "Unified Brand Tone of Voice guideline across all digital touchpoints",
    ],
    whatsappMsg: "Hello UNIQUE, I need a corporate company profile or bilingual AR/EN copywriting.",
  },
];

const TONE_VOICE_CARDS: ToneVoiceCard[] = [
  {
    name: "Commercial English (EN)",
    tag: "Regional & Global Growth",
    bestFor: "Bilingual websites, Dubai/GCC corporate brands, exporters & SaaS.",
    points: [
      "Crisp, native-grade commercial English built for B2B & D2C conversion",
      "Structured for English Google SEO and AI Overviews citations",
      "100% messaging parity with your Arabic website and campaigns",
    ],
  },
  {
    name: "Modern Standard Arabic",
    tag: "Websites & SEO Authority",
    bestFor: "Official websites, authority blogs, consulting firms & corporate profiles.",
    points: [
      "Clear, contemporary Arabic free from stiff academic phrasing",
      "Ideal for high-ranking SEO articles, whitepapers, and LinkedIn",
      "Strict grammatical and editorial proofreading before every delivery",
    ],
  },
  {
    name: "Gulf & Saudi Dialect",
    tag: "Saudi, UAE & Kuwait",
    bestFor: "Salla/Zid stores, clinics, hospitality, and GCC social campaigns.",
    points: [
      "Natural, culturally authentic phrasing that builds instant local trust",
      "High-performing for Snapchat, TikTok, Instagram & Reels scripts",
      "Respects Gulf brand etiquette while driving direct conversions",
    ],
  },
  {
    name: "Egyptian White Dialect",
    tag: "High-Engagement Social",
    bestFor: "Egyptian brands, e-commerce, Reels, and Meta social campaigns.",
    points: [
      "Smart, conversational hooks that stop scrolling and spark comments",
      "Ideal for direct-response offers and handling buyer objections naturally",
      "Keeps your brand polished and relatable without losing authority",
    ],
  },
];

const UNIQUE_4_CONTENT_STANDARDS: EditorialChecklist[] = [
  {
    id: "st-original",
    title: "1. 100% Human-Edited & Original",
    badge: "Zero Fluff",
    items: [
      "Written and edited by specialist marketers with full plagiarism checks",
      "Substantive, practical value for readers—zero generic filler paragraphs",
      "Strict alignment with your brand voice and target buyer persona",
      "100% full intellectual property ownership transferred to you",
    ],
  },
  {
    id: "st-seo",
    title: "2. SEO & AI Search Engineering",
    badge: "SEO + GEO",
    items: [
      "Data-backed keyword & search intent research prior to drafting",
      "Clean H1–H3 hierarchy and mobile-scannable paragraph pacing",
      "Publish-ready Meta Title, Meta Description & internal link anchors",
      "Quotable structured answers built for Google AI Overviews & ChatGPT",
    ],
  },
  {
    id: "st-cro",
    title: "3. Conversion-First Copywriting",
    badge: "Copywriting",
    items: [
      "Benefit-led messaging focused on customer outcomes, not dry specs",
      "Clear, persuasive CTAs driving WhatsApp chats, bookings, or orders",
      "Strategic bridges from educational topics to your paid offers",
      "Multiple hook variations for social posts, Reels, and paid ads",
    ],
  },
  {
    id: "st-delivery",
    title: "4. On-Time Delivery & Revisions",
    badge: "On-Time",
    items: [
      "Clean Google Docs & calendar spreadsheets ready for instant publishing",
      "Multi-stage linguistic and marketing QA prior to client delivery",
      "2 complimentary revision rounds per piece until 100% approved",
      "Optional direct publishing to WordPress, Sanity, or Salla on request",
    ],
  },
];

const WORKFLOW_PHASES: WorkflowPhase[] = [
  {
    num: "01",
    timeframe: "Days 1 – 2",
    title: "Brand Discovery & Tone Brief",
    desc: "We study your offers, competitors, audience pain points, and ideal dialect/language to lock in your Brand Voice Guide.",
    output: "Brand Tone & Content Strategy Brief",
  },
  {
    num: "02",
    timeframe: "Days 3 – 4",
    title: "Keyword Research & Calendar",
    desc: "We map priority search keywords and build a complete monthly calendar of articles, social posts, and Reels topics for approval.",
    output: "Approved Monthly Content Calendar",
  },
  {
    num: "03",
    timeframe: "Weekly Sprints",
    title: "Drafting, SEO Tuning & QA",
    desc: "Our writers produce each batch, followed by SEO/GEO formatting, conversion review, and linguistic proofreading.",
    output: "Weekly Publish-Ready Content Batches",
  },
  {
    num: "04",
    timeframe: "Monthly Review",
    title: "Performance Optimization",
    desc: "We review top-ranking articles and highest-converting social posts to double down on what generates real revenue next month.",
    output: "Compounding Content ROI",
  },
];

const CONTENT_PACKAGES_USD: ContentPackageUSD[] = [
  {
    id: "content-seo",
    name: "Website SEO Content Plan",
    badge: "Blogs & Google Rankings",
    price: "120",
    cycle: "USD / month",
    idealFor: "Ideal for websites and stores building topical authority and compounding free Google search traffic.",
    volume: "8 SEO Pillar Articles",
    features: [
      "8 in-depth SEO articles (1,000–1,500 words each), 100% original",
      "Keyword intent research & approved topic map before drafting",
      "Delivered publish-ready with Meta Tags, H1–H3 & internal link cues",
      "Structured for both Google SERP and AI Overviews (GEO)",
      "Full proofreading + 2 free revision rounds per article",
    ],
    whatsappMsg: "Hello UNIQUE, I would like to subscribe to the Website SEO Content Plan ($120/month).",
  },
  {
    id: "content-social",
    name: "Social Media & Reels Copy Plan",
    badge: "Most Popular",
    price: "165",
    cycle: "USD / month",
    idealFor: "Built for active brands wanting a full monthly social calendar, Reels scripts, and paid ad copy that sells.",
    isPopular: true,
    volume: "Calendar + Reels & Ad Copy",
    features: [
      "Full monthly calendar (16 posts: visual text + persuasive caption + hashtags)",
      "6 Reels/TikTok scripts with strong 3-second hooks & conversion CTAs",
      "4 paid ad copy variations ready for Meta & TikTok campaigns",
      "Tailored in English, MSA, Gulf, or Egyptian dialect to fit your market",
      "Easy upgrade path into full Social Media Management & design",
    ],
    whatsappMsg: "Hello UNIQUE, I want to book the Social Media & Reels Copy Plan ($165/month).",
  },
  {
    id: "content-360",
    name: "360° Full Content Engine",
    badge: "Web + Social + Store",
    price: "280",
    cycle: "USD / month",
    idealFor: "For growing companies and stores unifying their brand voice across website blogs, products, and social media.",
    volume: "All-Channel AR or Bilingual",
    features: [
      "12 SEO articles or commercial service/landing pages per month",
      "Complete social calendar (20 posts) + 10 Reels & paid ad scripts",
      "Writing or optimizing up to 25 e-commerce product descriptions monthly",
      "Flexible split across English & Arabic with unified Brand Tone",
      "Optional direct CMS upload (WordPress/Sanity/Salla) + monthly review",
    ],
    whatsappMsg: "Hello UNIQUE, I would like to subscribe to the 360° Full Content Engine ($280/month).",
  },
];

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Originality & Quality",
    question: "Is the content written by humans or copied from AI tools?",
    answer:
      "Every article, landing page, and script is crafted and edited by specialist human copywriters to reflect your brand's real expertise, pass plagiarism checks, and meet Google's E-E-A-T standards without generic AI fluff.",
  },
  {
    id: "faq-2",
    category: "Languages & Dialects",
    question: "Can you write in both English and regional Arabic dialects (Gulf & Egyptian)?",
    answer:
      "Yes. We match the exact language and dialect to your audience and channel—Commercial English, Modern Standard Arabic for websites/SEO, and authentic Gulf or Egyptian dialects for social media and Reels.",
  },
  {
    id: "faq-3",
    category: "Revisions",
    question: "What if I want to adjust the tone or angle of a piece?",
    answer:
      "Every plan includes two complimentary revision rounds on every deliverable so the final copy matches your brand voice and commercial goals 100% before publishing.",
  },
  {
    id: "faq-4",
    category: "One-Time Projects",
    question: "Can I order one-time website copy or a company profile without a monthly plan?",
    answer:
      "Absolutely. We offer fixed-price one-time packages for full website copywriting, landing pages, corporate profiles, and bulk e-commerce product descriptions.",
  },
  {
    id: "faq-5",
    category: "Full-Service Bundles",
    question: "Can I bundle content writing with social media designs, Reels production, or SEO?",
    answer:
      "Yes—visit our Pricing page to combine content writing with full Social Media Management (starting at $110/mo), Reels production, and full-stack SEO campaigns under one roof.",
  },
];

const SEMANTIC_KEYWORDS: string[] = [
  "Website Content Writing Services",
  "Social Media Content & Calendars",
  "SEO & GEO Pillar Articles",
  "High-Converting Landing Page Copy",
  "Reels & TikTok Scriptwriting",
  "E-Commerce Product Descriptions",
  "Bilingual Arabic & English Copywriting",
  "Gulf & Egyptian Dialect Marketing Copy",
  "Corporate Company Profiles",
  "E-E-A-T Human-Edited Copy",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD — Service + OfferCatalog USD + FAQPage + Breadcrumb)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website & Social Media Content Writing — UNIQUE Digital Agency",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://www.uniquee-ws.com",
      telephone: "+201270506511",
    },
    serviceType: "Website Content Writing, SEO Copywriting & Social Media Content Creation",
    areaServed: ["EG", "SA", "AE", "KW"],
    url: "https://www.uniquee-ws.com/en/services/content-writing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Monthly Content Writing Packages (USD)",
      itemListElement: CONTENT_PACKAGES_USD.map((pkg) => ({
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
        name: "Content Writing",
        item: "https://www.uniquee-ws.com/en/services/content-writing",
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
// MAIN PAGE COMPONENT — CONTENT WRITING SERVICE PAGE (ENGLISH LTR)
// ============================================================================

export default function ContentWritingServiceEnPage() {
  const heroContentWhatsapp = getWhatsAppUrl(
    "Hello UNIQUE Digital Agency! I would like to inquire about Website & Social Media Content Writing for my brand."
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
                UNIQUE <span className="text-blue-400">Content</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">
                Website &amp; Social Copywriting
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#pillars" className="hover:text-cyan-300 transition">
              Content Types
            </a>
            <a href="#tones" className="hover:text-cyan-300 transition">
              Languages
            </a>
            <a href="#standards" className="hover:text-cyan-300 transition">
              Standards
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
              href="/services/content-writing"
              className="px-3.5 py-2 rounded-xl border border-neutral-800 bg-neutral-950 hover:border-cyan-500/50 text-xs font-bold text-neutral-200 hover:text-cyan-300 transition"
            >
              العربية
            </Link>
            <a
              href={heroContentWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Free Content Plan</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION + EDITORIAL PERFORMANCE & CONVERSION CARD
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
            <span className="text-cyan-300 font-semibold">Website &amp; Social Media Content Writing</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <PenTool className="w-3.5 h-3.5 text-emerald-400" />
                <span>SEO Articles • Website Copy • Social Media • Reels Scripts</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">English &amp; Arabic</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.14] mb-6">
                Persuasive{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  Website &amp; Social Content
                </span>{" "}
                That Ranks on Google &amp; Converts Buyers
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                At <strong className="text-white">UNIQUE Digital Agency</strong>, we write words
                that earn trust and close sales — from{" "}
                <strong className="text-cyan-300">
                  semantic SEO blogs, landing pages, and product copy to monthly social calendars &amp; Reels scripts
                </strong>{" "}
                crafted by real marketers for Egypt and GCC audiences.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "100% human-edited copy built for Google E-E-A-T & GEO",
                  "Monthly social media calendars, Reels & paid ad scripts",
                  "Commercial English + MSA, Gulf & Egyptian Arabic dialects",
                  "Publish-ready delivery with free revisions until approved",
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
                  href={heroContentWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Request a Custom Content Plan</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <span>View Content Packages</span>
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
                  100% Plagiarism-Free • Full Content Ownership
                </span>
              </div>
            </div>

            {/* Hero Visual: Editorial Quality & Conversion Scorecard */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-cyan-300">
                      Content Lab — Editorial &amp; SEO Scorecard
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    100% Original ✓
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">SEO Score</div>
                    <div className="text-xl font-black text-blue-400">96/100</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">SEO + GEO</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Originality</div>
                    <div className="text-xl font-black text-cyan-300">100%</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">Human-Edited</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Conversion</div>
                    <div className="text-xl font-black text-amber-300">+2.4x</div>
                    <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">Sales Copy</div>
                  </div>
                </div>

                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-neutral-200 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      Content Channels We Power for You
                    </span>
                    <span className="text-[11px] text-cyan-300 font-bold">EN &amp; AR</span>
                  </div>
                  {[
                    { ch: "Semantic SEO Blogs & Conversion Landing Pages", tag: "SEO ✓" },
                    { ch: "Monthly Social Media Calendars & Captions", tag: "Engage ✓" },
                    { ch: "Reels/TikTok Scripts & Paid Ad Copywriting", tag: "Convert ✓" },
                    { ch: "Salla, Zid, Shopify & WooCommerce Product Copy", tag: "Sales ✓" },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-blue-500/8 border border-blue-500/20 text-xs"
                    >
                      <span className="text-neutral-200 font-medium">{row.ch}</span>
                      <span className="text-emerald-400 font-bold shrink-0">{row.tag}</span>
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
          3. 6 CORE CONTENT WRITING SERVICES
      ==================================================================== */}
      <section id="pillars" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="360° Editorial Coverage"
            title="6 Specialized Services in"
            highlight="SEO & Marketing Copywriting"
            subtitle="Whether you are scaling a ranking blog, an e-commerce store, or active social channels—every word is written to perform."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {SIX_CONTENT_PILLARS.map((p) => (
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
                      Direct Marketing Impact:
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
                  <span>Request This Service on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. LANGUAGES & TONE OF VOICE + EDITORIAL STANDARDS
      ==================================================================== */}
      <section id="tones" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Audience-Native Voice"
            title="We Write in the Exact Language"
            highlight="Your Customers Trust"
            subtitle="Matching the right tone and dialect turns passive scrolling into genuine engagement and inquiries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {TONE_VOICE_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-cyan-500/40 p-6 transition"
              >
                <span className="inline-block px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] font-bold text-amber-300 mb-3">
                  {card.tag}
                </span>
                <h3 className="text-lg font-extrabold text-white mb-2">{card.name}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">{card.bestFor}</p>
                <ul className="space-y-2">
                  {card.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div id="standards">
            <SectionHeader
              badge="UNIQUE Editorial Standard"
              title="4 Quality Guarantees Behind Every"
              highlight="Article, Post & Script"
              subtitle="Every deliverable passes linguistic proofreading, SEO/GEO verification, and conversion review."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {UNIQUE_4_CONTENT_STANDARDS.map((tbl) => (
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
              badge="Structured Workflow"
              title="How We Produce High-Impact Content"
              highlight="in 4 Clear Stages"
              subtitle="Approve your monthly calendar upfront and receive organized, publish-ready batches every week."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {WORKFLOW_PHASES.map((ph) => (
                <div
                  key={ph.num}
                  className="rounded-3xl bg-[#070B14] border border-neutral-800 p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-extrabold text-cyan-300">
                        Stage {ph.num}
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
        </div>
      </section>

      {/* ====================================================================
          5. TRANSPARENT MONTHLY USD PACKAGES ($120 / $165 / $280)
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Flexible Month-to-Month Plans"
            title="Content Writing Packages"
            highlight="in US Dollars ($)"
            subtitle="Pick the monthly engine that fits your brand—or request a fixed quote for a one-time website project."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {CONTENT_PACKAGES_USD.map((pkg) => (
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
                    <span className="text-xs font-bold text-amber-300">{pkg.volume}</span>
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
          6. FAQ ACCORDION + SEMANTIC CLOUD
      ==================================================================== */}
      <section id="faq" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Clear Answers About Our"
            highlight="Content Writing Services"
            subtitle="Everything you should know about originality, bilingual dialects, revisions, and one-time projects."
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
                <span>Semantic Coverage of UNIQUE Content Services</span>
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
          7. FINAL CTA & FOOTER
      ==================================================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B1730] via-[#070D1A] to-[#051418] border border-blue-500/35 p-8 sm:p-12 lg:p-14 text-center shadow-2xl shadow-blue-950/50">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Month-1 Content Plan Proposal &amp; Industry Samples</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Ready to Turn Your Brand Copy into{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Daily Traffic &amp; Sales?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              Share your website or social handle on WhatsApp today and receive a custom Month-1
              content proposal with target keywords, blog topics, and Reels concepts.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroContentWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Start Your Content Plan on WhatsApp</span>
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
              © {new Date().getFullYear()} UNIQUE Digital Agency — Website &amp; Social Media Content Writing.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/services/content-writing" className="hover:text-cyan-300 transition">
                كتابة المحتوى (AR)
              </Link>
              <Link href="/en/services/seo" className="hover:text-cyan-300 transition">
                SEO Services
              </Link>
              <Link href="/en/services/e-commerce" className="hover:text-cyan-300 transition">
                E-Commerce
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