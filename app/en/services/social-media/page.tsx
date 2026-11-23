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

function Share2({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
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

function Video({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
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
// NEXT.JS METADATA — SOCIAL MEDIA MANAGEMENT SERVICE PAGE (ENGLISH LTR)
// ============================================================================

export const metadata: Metadata = {
  title:
    "Social Media Management & Reels Production | Starting at $110/mo — UNIQUE",
  description:
    "Full-service social media management for brands and stores across Egypt, Saudi Arabia, UAE & Kuwait. Creative designs, short-form Reels, monthly calendars, scheduling, community management & reporting starting at $110/month.",
  keywords: [
    "Social Media Management Agency",
    "Social Media Marketing Packages USD",
    "Instagram and Facebook Management",
    "TikTok and Reels Video Production",
    "Snapchat and X Marketing GCC",
    "LinkedIn B2B Social Media Management",
    "Creative Social Media Design",
    "Monthly Social Media Retainer",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/en/services/social-media",
    languages: {
      ar: "https://www.uniquee-ws.com/services/social-media",
      en: "https://www.uniquee-ws.com/en/services/social-media",
      "x-default": "https://www.uniquee-ws.com/services/social-media",
    },
  },
  openGraph: {
    title: "Social Media Management & Reels Production — UNIQUE Digital Agency",
    description:
      "Turn Instagram, Facebook, TikTok, and Snapchat into a consistent sales channel with all-in-one monthly management starting at $110.",
    url: "https://www.uniquee-ws.com/en/services/social-media",
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

interface SocialPillar {
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

interface PlatformPlaybook {
  name: string;
  tag: string;
  bestFor: string;
  points: string[];
}

interface SocialGuarantee {
  id: string;
  title: string;
  badge: string;
  items: string[];
}

interface MonthlyStep {
  num: string;
  timeframe: string;
  title: string;
  desc: string;
  output: string;
}

interface SocialPackageUSD {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  badge: string;
  price: string;
  oldPrice: string;
  isPopular?: boolean;
  features: string[];
  whatsappMsg: string;
}

interface ReelsTier {
  title: string;
  price: string;
  old: string;
  save: string;
  whatsappMsg: string;
}

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// DATA ARRAYS — SOCIAL MEDIA MANAGEMENT & REELS (OFFICIAL USD PRICING)
// ============================================================================

const HERO_KPIS: HeroKpi[] = [
  {
    id: "reach",
    value: "+410%",
    title: "Avg. Organic Reach Lift",
    subtitle: "Consistent visibility powered by high-retention Reels and scroll-stopping visuals.",
    accent: "emerald",
  },
  {
    id: "all-in-one",
    value: "Full Team",
    title: "Copy + Design + Video + Ops",
    subtitle: "A complete creative team (copywriter, designer, editor & manager) for less than one hire.",
    accent: "cyan",
  },
  {
    id: "social-price",
    value: "From $110",
    title: "Monthly Management Plans",
    subtitle: "Includes designs, Reels videos, scheduling, community management & monthly reporting.",
    accent: "blue",
  },
  {
    id: "reels-price",
    value: "$1.5 / Reel",
    title: "Standalone & Bulk Reels",
    subtitle: "Fast, engaging Reels production in 10, 20, or 30-video bundles with instant savings.",
    accent: "amber",
  },
];

const SIX_SOCIAL_PILLARS: SocialPillar[] = [
  {
    id: "strategy-calendar",
    number: "01",
    badge: "Strategy & Planning",
    title: "Custom Marketing Strategy & Monthly Calendar",
    subLabel: "Audience Research • Seasonal Campaigns • Content Mix",
    summary:
      "We audit your accounts and competitors, then build a structured monthly calendar balancing educational, trust-building, interactive, and direct-sales posts across Egypt and GCC seasons.",
    impact: "Eliminates random posting and builds a recognizable, persuasive brand presence.",
    features: [
      "Audience persona, brand tone of voice, and winning creative angles",
      "Full monthly content calendar approved by you before design begins",
      "Seasonal campaigns (Ramadan, Eid, National Days, White Friday)",
      "Balanced mix of authority posts, direct offers, and social proof",
    ],
    whatsappMsg: "Hello UNIQUE, I want a custom marketing strategy and monthly social media management.",
  },
  {
    id: "creative-design",
    number: "02",
    badge: "Visual Identity",
    title: "Scroll-Stopping Creative Designs & Brand Grid",
    subLabel: "Posts • Carousels • Stories • Highlights",
    summary:
      "Cohesive, on-brand posts, interactive carousels, and vertical stories that make your brand instantly recognizable and elevate buyer trust on first visit.",
    impact: "Turns your profile into a high-converting digital storefront that invites inquiries.",
    features: [
      "Native dimensions crafted for Instagram, Facebook, LinkedIn & X",
      "Educational and sales carousels that boost saves, shares & dwell time",
      "Consistent typography, palette, optimized bio & highlight covers",
      "Seasonal promo creatives and high-CTR ad visuals",
    ],
    whatsappMsg: "Hello UNIQUE, I want to upgrade my brand's social media design and visual grid.",
  },
  {
    id: "reels-video",
    number: "03",
    badge: "Organic Reach Engine",
    title: "High-Retention Reels & Short-Form Video",
    subLabel: "Instagram Reels • TikTok • YouTube Shorts",
    summary:
      "Short-form video is today's fastest organic growth channel. We script 3-second hooks, edit dynamic pacing with on-screen captions, and close with clear conversion CTAs.",
    impact: "Multiplies organic discovery and brings fresh daily leads without relying solely on ads.",
    features: [
      "4 to 8 creative videos included every month inside our management plans",
      "Optional standalone Reels bundles (10, 20, or 30 Reels) at bulk savings",
      "Crisp editing, readable captions, and direct WhatsApp/store calls to action",
      "Cross-formatted for Instagram Reels, TikTok, Snapchat & Shorts",
    ],
    whatsappMsg: "Hello UNIQUE, I want professional Reels and short-form video production.",
  },
  {
    id: "scheduling-community",
    number: "04",
    badge: "Consistency & Engagement",
    title: "Peak-Time Scheduling & Community Management",
    subLabel: "Smart Publishing • Comment Replies • Lead Routing",
    summary:
      "Reliable publishing during your audience's peak active hours paired with attentive comment and inbox management that routes interested prospects directly to checkout or WhatsApp.",
    impact: "Speeds up response times and ensures warm leads never slip through the cracks.",
    features: [
      "Data-backed scheduling aligned with each platform's engagement peaks",
      "Polite, brand-aligned replies to comments and recurring buyer questions",
      "Smart quick-reply flows guiding prospects straight to your sales team",
      "Active moderation keeping your brand pages clean and trustworthy",
    ],
    whatsappMsg: "Hello UNIQUE, I need consistent publishing and community management for my brand.",
  },
  {
    id: "paid-ads-ready",
    number: "05",
    badge: "Conversion Scaling",
    title: "Paid-Ad Synergy & Creative Testing Readiness",
    subLabel: "Meta • TikTok • Snapchat • Retargeting",
    summary:
      "Every design and video is crafted to work seamlessly with paid campaigns—aligning organic proof with retargeting offers that lower your Cost Per Message and boost ROAS.",
    impact: "Improves ad click-through rates and lowers customer acquisition costs.",
    features: [
      "Ad-ready creatives and vertical videos built for high-ROAS campaigns",
      "Alignment between organic content and paid retargeting funnels",
      "Frictionless routing to WhatsApp chats or e-commerce product pages",
      "Creative angle testing to scale your best-performing offers",
    ],
    whatsappMsg: "Hello UNIQUE, I want social media management aligned with our paid ad campaigns.",
  },
  {
    id: "monthly-reports",
    number: "06",
    badge: "Transparent Analytics",
    title: "Detailed Monthly Reporting & Optimization",
    subLabel: "Reach • Engagement • Top Creatives • Next Sprint",
    summary:
      "At the end of every month, receive a clear performance report detailing reach, engagement, top-performing posts and Reels, and our action plan for next month's growth.",
    impact: "Track real ROI in plain numbers rather than guesswork.",
    features: [
      "Clear breakdown of reach, engagement rate, follower growth & clicks",
      "Insights on which creatives and Reels drove the most buyer inquiries",
      "Actionable recommendations to compound growth in the upcoming month",
      "Direct WhatsApp access to your dedicated account manager",
    ],
    whatsappMsg: "Hello UNIQUE, I would like to learn more about your monthly management and reporting.",
  },
];

const PLATFORM_PLAYBOOKS: PlatformPlaybook[] = [
  {
    name: "Instagram & Facebook",
    tag: "Daily Engagement & Sales",
    bestFor: "E-commerce stores, clinics, restaurants, and service brands across MENA.",
    points: [
      "Cohesive visual grid + high-reach Reels + interactive daily stories",
      "Turning comments and DMs directly into WhatsApp leads and orders",
      "Seamless catalog sync with your online store",
    ],
  },
  {
    name: "TikTok & Reels",
    tag: "Maximum Organic Reach",
    bestFor: "Brands seeking rapid awareness and lower-cost customer acquisition.",
    points: [
      "Short-form scripts engineered around 3-second scroll-stopping hooks",
      "Brand-safe trend adaptation tailored to your target audience",
      "Converting views into bio link clicks and direct purchase messages",
    ],
  },
  {
    name: "Snapchat & X (Twitter)",
    tag: "Saudi & GCC Markets",
    bestFor: "Businesses and stores targeting Saudi Arabia, UAE, and Kuwait.",
    points: [
      "Direct, culturally authentic messaging tailored for Gulf buyers",
      "Fast promo highlights, live updates, and real-time brand engagement on X",
      "Vertical 9:16 creatives optimized for Snapchat Stories & Ads",
    ],
  },
  {
    name: "LinkedIn",
    tag: "Corporate & B2B Growth",
    bestFor: "Consulting firms, factories, real estate developers, and tech agencies.",
    points: [
      "Executive thought-leadership posts that earn decision-maker trust",
      "High-value document carousels showcasing case studies & capabilities",
      "Consistent positioning to attract high-ticket B2B partnerships",
    ],
  },
];

const UNIQUE_4_SOCIAL_GUARANTEES: SocialGuarantee[] = [
  {
    id: "sg-team",
    title: "1. Dedicated Multi-Disciplinary Team",
    badge: "Full Team",
    items: [
      "Copywriter + graphic designer + video editor + account manager",
      "Fast, direct communication via a dedicated WhatsApp group",
      "Deep cultural fluency across Egypt, Saudi Arabia, UAE & Kuwait",
      "100% adherence to your brand colors, fonts, and tone of voice",
    ],
  },
  {
    id: "sg-approval",
    title: "2. 100% Pre-Publishing Approval",
    badge: "Zero Surprises",
    items: [
      "Review and approve every calendar, design, and Reel before it goes live",
      "Fast, flexible revisions so every post matches your exact vision",
      "Punctual publishing schedule with zero missed posting days",
      "Full brand ownership of all published creatives and copy",
    ],
  },
  {
    id: "sg-sales",
    title: "3. Built for Sales—Not Vanity Likes",
    badge: "ROI Focus",
    items: [
      "Messaging centered on buyer benefits, offers, and trust signals",
      "Clear CTAs driving WhatsApp messages, bookings, or store orders",
      "Blending Reels and carousels to grow organic reach and cut ad spend",
      "Easy integration with our SEO, Web Design, and E-Commerce services",
    ],
  },
  {
    id: "sg-flex",
    title: "4. Flexible Month-to-Month Plans",
    badge: "No Lock-In",
    items: [
      "Transparent USD pricing starting at $110/mo with zero annual lock-in",
      "Upgrade tiers or add standalone Reels packs whenever you scale",
      "Monthly performance report tracking real growth metrics",
      "100% ownership of all your pages, pixels, and ad accounts",
    ],
  },
];

const MONTHLY_WORKFLOW: MonthlyStep[] = [
  {
    num: "01",
    timeframe: "Days 1 – 3",
    title: "Account Audit & Content Strategy",
    desc: "We audit your profiles, optimize bios and highlights, and map out your full monthly calendar and Reels concepts.",
    output: "Approved Monthly Content Plan",
  },
  {
    num: "02",
    timeframe: "Days 4 – 8",
    title: "Creative Design & Video Editing",
    desc: "Our designers and editors produce your monthly batch of posts and Reels for your review and sign-off.",
    output: "Approved Designs & Reels Library",
  },
  {
    num: "03",
    timeframe: "All Month",
    title: "Scheduling & Community Management",
    desc: "Consistent peak-time publishing paired with active comment/inbox replies routing leads to sales.",
    output: "Active Daily Presence & Inquiries",
  },
  {
    num: "04",
    timeframe: "Month-End",
    title: "Monthly Report & Next-Month Scaling",
    desc: "Detailed performance recap highlighting winning creatives and strategic adjustments to grow results next month.",
    output: "KPI Report + Next-Month Roadmap",
  },
];

const SOCIAL_PACKAGES_USD: SocialPackageUSD[] = [
  {
    id: "social-basic",
    name: "Basic Package",
    subtitle: "Professional management for your brand presence and sales growth",
    image: "/ensocialmediamanagement.jpeg",
    badge: "40% OFF",
    price: "110",
    oldPrice: "180",
    features: [
      "Full Social Media Management",
      "8 Creative Branded Designs",
      "4 Creative Videos (Reels)",
      "Peak-Time Content Scheduling & Publishing",
      "Audience Interaction Management",
      "Detailed Monthly Performance Report",
    ],
    whatsappMsg: "Hello UNIQUE, I would like to subscribe to the Basic Social Media Management package ($110/month).",
  },
  {
    id: "social-pro",
    name: "Professional Package",
    subtitle: "Consistent growth, stronger engagement & custom marketing strategy",
    image: "/socialmediamanagementen.jpeg",
    badge: "Most Popular • 25% OFF",
    price: "165",
    oldPrice: "220",
    isPopular: true,
    features: [
      "Full Social Media Management",
      "12 Creative Branded Designs",
      "6 Premium Creative Videos (Reels)",
      "Peak-Time Content Scheduling & Publishing",
      "Audience Interaction Management",
      "Custom Marketing Strategy & Monthly Report",
    ],
    whatsappMsg: "Hello UNIQUE, I want to book the Professional Social Media Management package ($165/month).",
  },
  {
    id: "social-premium",
    name: "Premium Package",
    subtitle: "Maximum brand presence, reach & conversion velocity",
    image: "/socialmediamanagement.jpeg",
    badge: "27% OFF",
    price: "200",
    oldPrice: "275",
    features: [
      "Comprehensive Social Media Management",
      "16 Creative Branded Designs",
      "8 Unique Video Ads & Reels",
      "Peak-Time Content Scheduling & Publishing",
      "Audience & Inbox Interaction Management",
      "Custom Marketing Strategy & Monthly Report",
    ],
    whatsappMsg: "Hello UNIQUE, I want to book the Premium Social Media Management package ($200/month).",
  },
];

const REELS_PACKAGES_USD: ReelsTier[] = [
  {
    title: "Single Reel",
    price: "1.5",
    old: "",
    save: "Quick Trial",
    whatsappMsg: "Hello UNIQUE, I want to order a Single Reel ($1.5).",
  },
  {
    title: "10 Reels Package",
    price: "12",
    old: "15",
    save: "Save $3",
    whatsappMsg: "Hello UNIQUE, I want to book the 10 Reels Package ($12).",
  },
  {
    title: "20 Reels Package",
    price: "22",
    old: "30",
    save: "Save $8",
    whatsappMsg: "Hello UNIQUE, I want to book the 20 Reels Package ($22).",
  },
  {
    title: "30 Reels Package",
    price: "27",
    old: "45",
    save: "Save $18",
    whatsappMsg: "Hello UNIQUE, I want to book the 30 Reels Package ($27).",
  },
];

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "What's Included",
    question: "Do social media management packages include copywriting, design, and video editing?",
    answer:
      "Yes. Every monthly package is all-inclusive—covering copywriting, branded designs, creative Reels videos, peak-time scheduling, community management, and a detailed monthly report.",
  },
  {
    id: "faq-2",
    category: "Ad Spend",
    question: "Is paid advertising budget included in the monthly management price?",
    answer:
      "Our package pricing covers full creative production and account management. Paid ad spend is paid directly to Meta, TikTok, or Snapchat according to the budget you choose for your campaigns.",
  },
  {
    id: "faq-3",
    category: "Supported Platforms",
    question: "Which social platforms can you manage under these plans?",
    answer:
      "We manage Facebook, Instagram, TikTok, Snapchat, X (Twitter), and LinkedIn—formatting every post and video natively for each channel.",
  },
  {
    id: "faq-4",
    category: "Standalone Reels",
    question: "Can I order a Reels bundle without a monthly management retainer?",
    answer:
      "Yes! Our standalone Reels bundles start at $1.5 for a single Reel up to $27 for 30 Reels, and can be ordered independently or added on top of any monthly management plan.",
  },
  {
    id: "faq-5",
    category: "Flexibility",
    question: "Are plans month-to-month or locked into annual contracts?",
    answer:
      "All plans are flexible month-to-month with zero lock-in contracts, and you keep 100% ownership of your accounts and content.",
  },
];

const SEMANTIC_KEYWORDS: string[] = [
  "Social Media Account Management",
  "Monthly Social Media Packages USD",
  "Social Media Agency Egypt, Saudi & UAE",
  "Reels & TikTok Video Production",
  "Creative Social Media Graphic Design",
  "Instagram & Facebook Growth Management",
  "Snapchat & X Marketing for GCC",
  "Monthly Content Calendars & Copywriting",
  "Community Management & Lead Routing",
  "Social Media Analytics & Monthly Reporting",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD — Service + OfferCatalog USD + FAQPage + Breadcrumb)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Social Media Management & Reels Production — UNIQUE Digital Agency",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://www.uniquee-ws.com",
      telephone: "+201270506511",
    },
    serviceType: "Social Media Account Management & Reels Production",
    areaServed: ["EG", "SA", "AE", "KW"],
    url: "https://www.uniquee-ws.com/en/services/social-media",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Monthly Social Media Packages (USD)",
      itemListElement: SOCIAL_PACKAGES_USD.map((pkg) => ({
        "@type": "Offer",
        name: pkg.name,
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
        name: "Social Media Management",
        item: "https://www.uniquee-ws.com/en/services/social-media",
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
// MAIN PAGE COMPONENT — SOCIAL MEDIA MANAGEMENT SERVICE PAGE (ENGLISH LTR)
// ============================================================================

export default function SocialMediaServiceEnPage() {
  const heroSocialWhatsapp = getWhatsAppUrl(
    "Hello UNIQUE Digital Agency! I would like to inquire about your Social Media Management and Reels packages for my brand."
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
                UNIQUE <span className="text-blue-400">Social</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">
                Social Media &amp; Reels Management
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#pillars" className="hover:text-cyan-300 transition">
              Services
            </a>
            <a href="#platforms" className="hover:text-cyan-300 transition">
              Platforms
            </a>
            <a href="#packages" className="hover:text-cyan-300 transition">
              Packages
            </a>
            <a href="#reels" className="hover:text-cyan-300 transition">
              Reels Packs
            </a>
            <a href="#faq" className="hover:text-cyan-300 transition">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/services/social-media"
              className="px-3.5 py-2 rounded-xl border border-neutral-800 bg-neutral-950 hover:border-cyan-500/50 text-xs font-bold text-neutral-200 hover:text-cyan-300 transition"
            >
              العربية
            </Link>
            <a
              href={heroSocialWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Start Managing</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION + SOCIAL GROWTH & REELS TELEMETRY CARD
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
            <span className="text-cyan-300 font-semibold">Social Media Management</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instagram • Facebook • TikTok • Snapchat • LinkedIn</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">Plans From $110/mo</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.14] mb-6">
                Full-Service{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  Social Media Management
                </span>{" "}
                Turning Followers into Daily Sales
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                At <strong className="text-white">UNIQUE Digital Agency</strong>, a complete creative
                team manages your presence end to end — delivering{" "}
                <strong className="text-cyan-300">
                  branded designs, high-reach Reels, monthly calendars, scheduling &amp; community management
                </strong>{" "}
                starting at just $110/month.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "8–16 creative designs + 4–8 Reels videos monthly",
                  "Custom marketing strategy for Egypt & GCC audiences",
                  "Peak-time scheduling & active community management",
                  "Standalone Reels packs starting at just $1.5/Reel",
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
                  href={heroSocialWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Book Your Social Media Plan</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <span>Explore Packages &amp; Reels</span>
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
                  Up to 40% Off • Month-to-Month Flexibility
                </span>
              </div>
            </div>

            {/* Hero Visual: Social Media Growth Telemetry */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-cyan-300">
                      Account Growth — Social Growth Console
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    +410% Reach
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Reels Views</div>
                    <div className="text-xl font-black text-blue-400">1.2M+</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">↑ Organic Lift</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Engagement</div>
                    <div className="text-xl font-black text-cyan-300">+285%</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">DMs &amp; Saves</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Starts At</div>
                    <div className="text-xl font-black text-amber-300">$110</div>
                    <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">/ month</div>
                  </div>
                </div>

                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-neutral-200 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      Delivered Every Month by UNIQUE
                    </span>
                    <span className="text-[11px] text-cyan-300 font-bold">All-In-One</span>
                  </div>
                  {[
                    { ch: "Branded Post & Carousel Designs", tag: "8–16 / mo" },
                    { ch: "High-Retention Creative Reels & Video Ads", tag: "4–8 / mo" },
                    { ch: "Peak-Time Scheduling & Community Replies", tag: "Daily ✓" },
                    { ch: "Custom Strategy & Monthly KPI Report", tag: "Included ✓" },
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
          3. 6 CORE SOCIAL MEDIA MANAGEMENT PILLARS
      ==================================================================== */}
      <section id="pillars" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="360° Account Management"
            title="6 Pillars Behind Our"
            highlight="Social Media Management"
            subtitle="From strategy, design, and Reels editing to daily scheduling, inbox replies, and monthly analytics—handled by one cohesive team."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {SIX_SOCIAL_PILLARS.map((p) => (
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
                      Direct Brand Impact:
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
                  <span>Ask About This Service on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. PLATFORMS + GUARANTEES + MONTHLY WORKFLOW
      ==================================================================== */}
      <section id="platforms" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Platform-Native Playbooks"
            title="Tailored Growth Across"
            highlight="Every Major Social Channel"
            subtitle="Every algorithm rewards different formats—we tailor your designs, copy, and Reels natively for each platform."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {PLATFORM_PLAYBOOKS.map((pl, idx) => (
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

          <SectionHeader
            badge="UNIQUE Operating Standards"
            title="4 Guarantees for Disciplined"
            highlight="Social Media Execution"
            subtitle="Full visibility on approvals, deadlines, ownership, and monthly ROI reporting."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {UNIQUE_4_SOCIAL_GUARANTEES.map((tbl) => (
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
            badge="Monthly Execution Cycle"
            title="How We Run Your Accounts"
            highlight="in 4 Organized Steps"
            subtitle="From Day-1 audit to month-end analytics—every stage is transparent and approved by you."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MONTHLY_WORKFLOW.map((ph) => (
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

      {/* ====================================================================
          5. OFFICIAL SOCIAL MEDIA PACKAGES ($110 / $165 / $200) + REELS
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Official Monthly Plans"
            title="Social Media Management Packages"
            highlight="in US Dollars ($)"
            subtitle="All-inclusive monthly plans covering designs, Reels, scheduling, community management, and reporting."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch mb-16">
            {SOCIAL_PACKAGES_USD.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl overflow-hidden flex flex-col justify-between transition ${
                  pkg.isPopular
                    ? "bg-gradient-to-b from-[#0A1428] to-[#070B14] border-2 border-cyan-400/60 shadow-2xl shadow-blue-600/20"
                    : "bg-[#070B14] border border-neutral-800 hover:border-blue-500/40"
                }`}
              >
                <div>
                  <div className="relative aspect-[4/3] w-full bg-neutral-950 border-b border-neutral-800 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={`${pkg.name} — UNIQUE Social Media Management`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-extrabold backdrop-blur-md ${
                        pkg.isPopular
                          ? "bg-cyan-500/90 text-black"
                          : "bg-black/80 text-cyan-300 border border-cyan-500/40"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <div className="p-7 sm:p-8">
                    <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-5">{pkg.subtitle}</p>

                    <div className="flex items-baseline gap-3 pb-6 mb-6 border-b border-neutral-800">
                      <span className="text-4xl font-black text-white">${pkg.price}</span>
                      <span className="text-base text-neutral-500 line-through font-bold">
                        ${pkg.oldPrice}
                      </span>
                      <span className="text-xs font-bold text-cyan-300">/ month</span>
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
                </div>

                <div className="px-7 pb-7 sm:px-8 sm:pb-8">
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
              </div>
            ))}
          </div>

          {/* Dedicated Reels Packages Showcase */}
          <div
            id="reels"
            className="rounded-3xl bg-[#070B14] border border-cyan-500/30 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
                <Image
                  src="/rils.jpeg"
                  alt="Professional Reels Video Packages — UNIQUE Digital Agency"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-4">
                <Video className="w-3.5 h-3.5" />
                <span>Standalone &amp; Add-On Reels Bundles</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Accelerate Your Reach with{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  Professional Reels Bundles
                </span>
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Order high-engagement Reels for Instagram, TikTok, and Snapchat individually or in bulk packs with instant savings.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {REELS_PACKAGES_USD.map((r, idx) => (
                  <a
                    key={idx}
                    href={getWhatsAppUrl(r.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-cyan-400/60 p-4 flex items-center justify-between gap-3 transition"
                  >
                    <div>
                      <div className="text-sm font-extrabold text-white group-hover:text-cyan-300 transition">
                        {r.title}
                      </div>
                      <span className="text-[11px] font-bold text-emerald-400">{r.save}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-white">${r.price}</div>
                      {r.old && (
                        <div className="text-xs text-neutral-500 line-through">${r.old}</div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
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
            title="Everything to Know About"
            highlight="Social Media Management"
            subtitle="Clear answers on what's included, ad spend, supported channels, and standalone Reels."
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
                <span>Semantic Coverage of UNIQUE Social Media Services</span>
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
              <span>Free Account Audit &amp; Custom Month-1 Recommendation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Ready to Upgrade Your Social Media{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                and Scale Daily Sales?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              Share your social links on WhatsApp today and receive a quick review plus the best
              monthly package for your brand goals and budget.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroSocialWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Start Social Media Management</span>
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
              © {new Date().getFullYear()} UNIQUE Digital Agency — Social Media Management &amp; Reels Production.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/services/social-media" className="hover:text-cyan-300 transition">
                إدارة السوشيال ميديا (AR)
              </Link>
              <Link href="/en/services/content-writing" className="hover:text-cyan-300 transition">
                Content Writing
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