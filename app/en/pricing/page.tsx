"use client";

import { useState } from "react";
import Image from "next/image";

// ============================================================================
// BUILT-IN ZERO-DEPENDENCY SVG ICONS
// ============================================================================

interface IconProps {
  className?: string;
}

function SparklesIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

function CheckIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function ZoomInIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="11" x2="11" y1="8" y2="14" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </svg>
  );
}

function CloseIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function CrownIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  );
}

function LinkChainIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function PhoneIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// ============================================================================
// WHATSAPP HELPER
// ============================================================================

const WHATSAPP_INTL = "201270506511";

function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(message)}`;
}

// ============================================================================
// SCALABLE CATEGORIES CONFIG
// To add future services (e.g., Monthly SEO, Branding, Paid Ads), simply add a tab here
// ============================================================================

type CategoryId = "all" | "social" | "web" | "backlinks";

interface CategoryTab {
  id: CategoryId;
  label: string;
  subtitle: string;
  countBadge: string;
}

const CATEGORY_TABS: CategoryTab[] = [
  {
    id: "all",
    label: "All Services",
    subtitle: "Complete UNIQUE Pricing Catalog",
    countBadge: "11 Plans + Reels",
  },
  {
    id: "social",
    label: "Social Media Management",
    subtitle: "Account Growth, Designs & Reels",
    countBadge: "3 Plans + Reels",
  },
  {
    id: "web",
    label: "Web Design & Stores",
    subtitle: "Corporate Sites & E-Commerce",
    countBadge: "3 Plans",
  },
  {
    id: "backlinks",
    label: "Backlinks Packages",
    subtitle: "Organic Authority & Google Ranking",
    countBadge: "5 Plans",
  },
];

// ============================================================================
// 1. SOCIAL MEDIA & REELS DATA (USD — $110 / $165 / $200)
// ============================================================================

interface SocialPackage {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  price: string;
  oldPrice: string;
  badge: string;
  isPopular?: boolean;
  features: string[];
}

const SOCIAL_PACKAGES: SocialPackage[] = [
  {
    id: "social-basic",
    title: "Basic Package",
    subtitle: "Professional management for your presence and sales growth",
    image: "/ensocialmediamanagement.jpeg",
    price: "110",
    oldPrice: "180",
    badge: "40% OFF",
    features: [
      "Social Media Management",
      "8 Creative Designs",
      "4 Creative Videos",
      "Content Scheduling & Publishing",
      "Audience Interaction Management",
      "Detailed Monthly Report",
    ],
  },
  {
    id: "social-pro",
    title: "Professional Package",
    subtitle: "Consistent growth, stronger engagement & custom strategy",
    image: "/socialmediamanagementen.jpeg", // Replace if you have a dedicated English image for the Pro social package
    price: "165",
    oldPrice: "220",
    badge: "Most Popular • 25% OFF",
    isPopular: true,
    features: [
      "Social Media Management",
      "12 Creative Designs",
      "6 Premium Creative Videos",
      "Content Scheduling & Publishing",
      "Audience Interaction Management",
      "Custom Marketing Strategy",
    ],
  },
  {
    id: "social-premium",
    title: "Premium Package",
    subtitle: "Maximum brand presence, reach & conversion velocity",
    image: "/socialmediamanagement.jpeg",
    price: "200",
    oldPrice: "275",
    badge: "27% OFF",
    features: [
      "Social Media Management",
      "16 Creative Designs",
      "8 Unique Video Ads",
      "Content Scheduling & Publishing",
      "Audience Interaction Management",
      "Custom Marketing Strategy",
    ],
  },
];

const REELS_PACKAGES = [
  { title: "Single Reel", price: "1.5", old: "", save: "" },
  { title: "10 Reels Package", price: "12", old: "15", save: "Save $3" },
  { title: "20 Reels Package", price: "22", old: "30", save: "Save $8" },
  { title: "30 Reels Package", price: "27", old: "45", save: "Save $18" },
];

// ============================================================================
// 2. WEB DESIGN PACKAGES DATA (USD — $220 / $290 / $365)
// ============================================================================

interface WebPackage {
  id: string;
  tierEn: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  price: string;
  oldPrice: string;
  billingLabel: string;
  accent: "blue" | "cyan" | "amber";
  isPopular?: boolean;
  isPremium?: boolean;
  features: string[];
}

const WEB_DESIGN_PACKAGES: WebPackage[] = [
  {
    id: "web-basic",
    tierEn: "STARTER WEBSITE PACKAGE",
    title: "Basic Web Design Package",
    subtitle: "Your digital launchpad — ideal for startups, offices & service brands",
    image: "/enprofessional.webp",
    badge: "Starter • Up to 5 Pages",
    price: "220",
    oldPrice: "290",
    billingLabel: "USD / One-Time",
    accent: "blue",
    features: [
      "Domain & Hosting Registration",
      "Professional Responsive Website Design",
      "Mobile, Tablet & Desktop Optimized",
      "Up to 5 Core Pages (Home, About, Services/Products, Contact)",
      "High-Impact Custom Homepage",
      "Direct Contact Form & WhatsApp Integration",
      "Social Media Profiles Integration",
      "SSL Security Certificate & Foundational SEO Setup",
      "Google Search Console Connection",
      "Google Maps Location Embed",
      "Easy Admin Dashboard for Content Management",
    ],
  },
  {
    id: "web-professional",
    tierEn: "BUSINESS PACKAGE",
    title: "Professional Web Design Package",
    subtitle: "Complete business website engineered for growth, speed & Google SEO",
    image: "/enprofessional.webp",
    badge: "Most Popular • Up to 12 Pages",
    price: "290",
    oldPrice: "380",
    billingLabel: "USD / One-Time",
    accent: "cyan",
    isPopular: true,
    features: [
      "Everything in the Starter Package",
      "Bespoke Design Matched to Your Brand Identity",
      "Up to 12 Pages with Professional UI/UX Architecture",
      "Dedicated Blog / News Section",
      "Projects & Portfolio Showcase",
      "Core Website Content Setup & Structuring",
      "Full On-Page SEO (Meta Titles, Descriptions & Keywords)",
      "Page Speed & Image Compression Optimization",
      "Google Analytics 4 & Lead Form Tracking",
      "High-Converting Marketing Landing Pages",
      "Security Hardening & Automated Backups",
      "Client Training & Post-Launch Technical Support",
    ],
  },
  {
    id: "web-premium",
    tierEn: "PREMIUM PACKAGE",
    title: "Premium Web Design Package",
    subtitle: "Enterprise web platforms, full e-commerce stores, multilingual & APIs",
    image: "/enPremium.webp",
    badge: "Premium • 25+ Pages",
    price: "365",
    oldPrice: "490",
    billingLabel: "USD / One-Time",
    accent: "amber",
    isPremium: true,
    features: [
      "Fully Custom UI/UX Tailored to Your Business Model",
      "25+ Pages Based on Project Scope",
      "Custom Features & Functional Modules",
      "Full E-Commerce Store & Product/Category Management",
      "Online Payment Gateway & Shipping Integration",
      "Multi-Language Support (Arabic / English / Global)",
      "Advanced Technical SEO & JSON-LD Schema Markup",
      "Core Web Vitals & Internal Linking Strategy",
      "Professional Editorial Blog Setup",
      "CRM, Marketing Tools & External API Integrations",
      "Online Booking & Service Request Systems",
      "Pre-Launch QA, Full Training & Priority Maintenance Support",
    ],
  },
];

// ============================================================================
// 3. BACKLINKS PACKAGES DATA (USD — $5 / $10 / $15 / $20 / $25)
// Exact uploaded English poster filenames
// ============================================================================

interface BacklinkPackage {
  id: string;
  tierEn: string;
  title: string;
  totalLinks: string;
  perTypeCount: string;
  image: string;
  price: string;
  badge: string;
  isPopular?: boolean;
  isSummit?: boolean;
  platforms: string[];
}

const ENGLISH_BACKLINK_PLATFORMS = [
  "Dofollow, Blog Comment & Web 2.0 Backlinks",
  "Forum Profiles, Wiki & Directory Listings",
  "News Articles, Guest Posts & Social Bookmarks",
  "Image Sharing, Video Sharing & Web 2.0 Profiles",
  "Social Networks, Paid Submissions & Drip Feed",
  "Evernote, Slideshare, Pinterest & Github",
];

const BACKLINKS_PACKAGES: BacklinkPackage[] = [
  {
    id: "bl-100",
    tierEn: "100% ORGANIC BACKLINKS",
    title: "Rank Start-up 100 Backlink",
    totalLinks: "100 Organic Backlinks",
    perTypeCount: "5 links per category across 20 authority platforms",
    image: "/Organic Backlink Services in a Modern Office.png",
    price: "5",
    badge: "100 Backlinks",
    platforms: ENGLISH_BACKLINK_PLATFORMS,
  },
  {
    id: "bl-200",
    tierEn: "200 BACKLINK EXCELLENCE",
    title: "Rank Excellence 200 Backlink",
    totalLinks: "200 Organic Backlinks",
    perTypeCount: "10 links per category across 20 authority platforms",
    image: "/200 Backlink Excellence Office Promo.png",
    price: "10",
    badge: "200 Backlinks",
    platforms: ENGLISH_BACKLINK_PLATFORMS,
  },
  {
    id: "bl-300",
    tierEn: "300 RANK START-UP",
    title: "Rank Start-up 300 Backlink",
    totalLinks: "300 Organic Backlinks",
    perTypeCount: "15 links per category across 20 authority platforms",
    image: "/300 Rank Start-up Backlink Package.png",
    price: "15",
    badge: "Most Popular • 300 Backlinks",
    isPopular: true,
    platforms: ENGLISH_BACKLINK_PLATFORMS,
  },
  {
    id: "bl-400",
    tierEn: "400 BACKLINK LEADERSHIP",
    title: "Rank Leadership 400 Backlink",
    totalLinks: "400 Organic Backlinks",
    perTypeCount: "20 links per category across 20 authority platforms",
    image: "/400 Backlink Leadership Package.png",
    price: "20",
    badge: "400 Backlinks",
    platforms: ENGLISH_BACKLINK_PLATFORMS,
  },
  {
    id: "bl-500",
    tierEn: "500 RANK SUMMIT",
    title: "Rank Summit 500 Backlink",
    totalLinks: "500 Organic Backlinks",
    perTypeCount: "Maximum authority coverage across 20 diverse platforms",
    image: "/Corporate Backlink Package Presentation.png",
    price: "25",
    badge: "Summit • 500 Backlinks",
    isSummit: true,
    platforms: ENGLISH_BACKLINK_PLATFORMS,
  },
];

// ============================================================================
// MAIN ENGLISH PRICING PAGE COMPONENT (LTR)
// ============================================================================

export default function EnPricingPage() {
  const [activeTab, setActiveTab] = useState<CategoryId>("all");
  const [expandedWebCards, setExpandedWebCards] = useState<Record<string, boolean>>({});
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const toggleWebFeatures = (id: string) => {
    setExpandedWebCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const showSocial = activeTab === "all" || activeTab === "social";
  const showWeb = activeTab === "all" || activeTab === "web";
  const showBacklinks = activeTab === "all" || activeTab === "backlinks";

  return (
    <main
      className="relative min-h-screen bg-[#000000] text-white py-24 sm:py-28 px-4 sm:px-6 overflow-hidden"
      dir="ltr"
    >
      {/* Ambient Glows (Blue / Cyan / Emerald only — zero red) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[520px] h-[520px] rounded-full bg-blue-600/12 blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-[460px] h-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[360px] rounded-full bg-emerald-500/8 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ================================================================
            1. HERO HEADER
        ================================================================ */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <SparklesIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Official USD Packages &amp; Offers — UNIQUE Digital Agency</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.12] mb-5">
            Choose the Right Package{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              to Scale Your Brand
            </span>
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Switch seamlessly between Social Media Management, Reels, Web Design,
            and Organic Backlinks packages—click any poster to zoom in full HD.
          </p>
        </div>

        {/* ================================================================
            2. INTERACTIVE CATEGORY FILTER TABS (4 TABS)
        ================================================================ */}
        <div className="mb-16">
          <div
            role="tablist"
            aria-label="Service Pricing Categories"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-6xl mx-auto p-2.5 rounded-3xl bg-[#070B14]/90 border border-neutral-800/90 shadow-2xl backdrop-blur-xl"
          >
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative rounded-2xl px-4 py-4 text-left transition-all duration-300 border ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600/25 via-cyan-500/15 to-blue-600/10 border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.18)]"
                      : "bg-neutral-950/70 border-neutral-800/80 hover:border-blue-500/40 hover:bg-neutral-900/60"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span
                      className={`text-sm sm:text-base font-black transition-colors ${
                        isActive ? "text-white" : "text-neutral-200 group-hover:text-cyan-300"
                      }`}
                    >
                      {tab.label}
                    </span>
                    <span
                      className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                        isActive
                          ? "bg-cyan-400/20 text-cyan-200 border border-cyan-400/40"
                          : "bg-neutral-900 text-neutral-400 border border-neutral-800"
                      }`}
                    >
                      {tab.countBadge}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 line-clamp-1">{tab.subtitle}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================
            3. SECTION A: SOCIAL MEDIA MANAGEMENT + REELS PACKAGES
        ================================================================ */}
        {showSocial && (
          <section className="mb-24" aria-label="Social Media Management Packages">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-5 border-b border-neutral-900">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  <SparklesIcon className="w-3.5 h-3.5" />
                  <span>Social Growth &amp; Creative Content</span>
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white">
                  Social Media Management &amp; Reels Packages
                </h2>
              </div>
              <p className="text-sm text-neutral-400 max-w-md">
                Consistent presence, scroll-stopping designs &amp; videos, and active audience engagement that drives sales.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
              {SOCIAL_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${
                    pkg.isPopular
                      ? "bg-[#081020] border-2 border-cyan-400/60 shadow-[0_0_50px_rgba(37,99,235,0.22)]"
                      : "bg-[#070B14] border border-neutral-800/90 hover:border-blue-500/60 shadow-2xl"
                  }`}
                >
                  <div
                    onClick={() => setLightboxImage({ src: pkg.image, title: pkg.title })}
                    className="relative w-full h-[430px] bg-black flex items-center justify-center p-3 cursor-zoom-in overflow-hidden"
                  >
                    <Image
                      src={pkg.image}
                      alt={`${pkg.title} - UNIQUE Digital Agency`}
                      title={pkg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105 p-2"
                    />
                    <span
                      className={`absolute top-4 left-4 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg z-10 ${
                        pkg.isPopular
                          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                          : "bg-blue-600/90 text-white"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                    <span className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 border border-neutral-700 text-[11px] font-bold text-neutral-200 opacity-90 group-hover:border-cyan-400 group-hover:text-cyan-300 transition">
                      <ZoomInIcon className="w-3.5 h-3.5" />
                      <span>Zoom Poster</span>
                    </span>
                  </div>

                  <div className="p-7 bg-[#090E1A] border-t border-neutral-800/80 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="text-neutral-400 text-sm mb-5">{pkg.subtitle}</p>

                      <div className="flex items-baseline gap-2.5 mb-6 bg-black/50 p-4 rounded-2xl border border-neutral-800">
                        <span className="text-3xl font-black text-cyan-300">
                          ${pkg.price}
                        </span>
                        <span className="text-xs text-neutral-400 font-semibold">
                          USD / month
                        </span>
                        <span className="text-sm text-neutral-500 line-through ml-auto">
                          ${pkg.oldPrice}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-7">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-neutral-200 text-sm flex items-center gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center shrink-0">
                              <CheckIcon className="w-3 h-3 text-emerald-400" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={getWhatsAppUrl(
                        `Hello UNIQUE! I would like to book the ${pkg.title} for Social Media Management ($${pkg.price}/month).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl font-extrabold text-sm transition-all duration-300 shadow-lg ${
                        pkg.isPopular
                          ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-blue-600/30"
                          : "bg-blue-600 hover:bg-blue-500 text-white"
                      }`}
                    >
                      <span>Book Package Now</span>
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Reels Packages Section */}
            <div className="bg-gradient-to-b from-[#080E1B] to-[#050811] border border-blue-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "/rils.jpeg",
                      title: "Reels Packages — UNIQUE Digital Agency",
                    })
                  }
                  className="lg:col-span-5 relative w-full h-[420px] bg-black rounded-2xl overflow-hidden border border-neutral-800 flex items-center justify-center p-3 cursor-zoom-in group"
                >
                  <Image
                    src="/rils.jpeg"
                    alt="Reels Packages - UNIQUE Digital Agency"
                    title="Reels Packages"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105 p-2"
                  />
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg z-10">
                    Reels Offers
                  </span>
                  <span className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 border border-neutral-700 text-[11px] font-bold text-neutral-200 group-hover:border-cyan-400 group-hover:text-cyan-300 transition">
                    <ZoomInIcon className="w-3.5 h-3.5" />
                    <span>Zoom Poster</span>
                  </span>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3.5 py-1.5 mb-3 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                      Fastest Delivery • High Quality
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                      Reels Packages
                    </h3>
                    <p className="text-neutral-300 text-sm md:text-base mb-6 leading-relaxed">
                      Professional content, stronger presence, and greater interaction. Flexible Reels bundles tailored to boost your reach and engagement.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {REELS_PACKAGES.map((reel, rIdx) => (
                      <div
                        key={rIdx}
                        className="bg-black/75 border border-neutral-800 p-5 rounded-2xl flex flex-col justify-between text-center hover:border-cyan-500/50 transition-all shadow-xl"
                      >
                        <div>
                          <h4 className="text-base font-extrabold text-white mb-1.5">
                            {reel.title}
                          </h4>
                          {reel.save && (
                            <span className="inline-block bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-2">
                              {reel.save}
                            </span>
                          )}
                        </div>

                        <div className="my-2">
                          <div className="text-2xl font-black text-white">
                            ${reel.price}{" "}
                            <span className="text-xs text-neutral-400 font-normal">USD</span>
                          </div>
                          {reel.old && (
                            <div className="text-xs text-neutral-500 line-through mt-0.5">
                              ${reel.old}
                            </div>
                          )}
                        </div>

                        <a
                          href={getWhatsAppUrl(
                            `Hello UNIQUE! I would like to order the ${reel.title} ($${reel.price} USD).`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-cyan-300 hover:text-white border border-blue-500/35 text-xs font-extrabold transition-all"
                        >
                          <span>Order Now</span>
                          <ArrowUpRightIcon className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================
            4. SECTION B: WEB DESIGN PACKAGES ($220 / $290 / $365)
        ================================================================ */}
        {showWeb && (
          <section className="mb-24" aria-label="Web Design Packages">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-5 border-b border-neutral-900">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  <SparklesIcon className="w-3.5 h-3.5" />
                  <span>Web Development &amp; E-Commerce</span>
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white">
                  Website Design Packages
                </h2>
              </div>
              <p className="text-sm text-neutral-400 max-w-md">
                Fast, mobile-first websites engineered for Core Web Vitals, Google SEO, and 100% client ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {WEB_DESIGN_PACKAGES.map((pkg) => {
                const isExpanded = !!expandedWebCards[pkg.id];
                const visibleFeatures = isExpanded
                  ? pkg.features
                  : pkg.features.slice(0, 7);

                const borderStyle = pkg.isPremium
                  ? "bg-gradient-to-b from-[#131008] via-[#090D18] to-[#070B14] border-2 border-amber-400/60 shadow-[0_0_55px_rgba(251,191,36,0.16)]"
                  : pkg.isPopular
                  ? "bg-gradient-to-b from-[#091529] to-[#070B14] border-2 border-cyan-400/60 shadow-[0_0_50px_rgba(6,182,212,0.18)]"
                  : "bg-[#070B14] border border-neutral-800/90 hover:border-blue-500/60 shadow-2xl";

                return (
                  <div
                    key={pkg.id}
                    className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${borderStyle}`}
                  >
                    <div
                      onClick={() => setLightboxImage({ src: pkg.image, title: pkg.title })}
                      className="relative w-full h-[460px] bg-black flex items-center justify-center p-2 cursor-zoom-in overflow-hidden"
                    >
                      <Image
                        src={pkg.image}
                        alt={`${pkg.title} - UNIQUE Digital Agency`}
                        title={pkg.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105 p-1.5"
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
                        {pkg.isPremium && <CrownIcon className="w-3.5 h-3.5" />}
                        <span>{pkg.badge}</span>
                      </span>
                      <span className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/85 border border-neutral-700 text-[11px] font-bold text-neutral-200 opacity-90 group-hover:border-cyan-400 group-hover:text-cyan-300 transition">
                        <ZoomInIcon className="w-3.5 h-3.5" />
                        <span>Zoom Poster</span>
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
                              {pkg.billingLabel}
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

                        <ul className="space-y-2.5 mb-4">
                          {visibleFeatures.map((feat, fIdx) => (
                            <li
                              key={fIdx}
                              className="text-neutral-200 text-xs sm:text-sm flex items-start gap-2.5 leading-relaxed"
                            >
                              <span
                                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                  pkg.isPremium
                                    ? "bg-amber-500/15 border border-amber-400/40 text-amber-300"
                                    : "bg-emerald-500/15 border border-emerald-500/35 text-emerald-400"
                                }`}
                              >
                                <CheckIcon className="w-3 h-3" />
                              </span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>

                        {pkg.features.length > 7 && (
                          <button
                            type="button"
                            onClick={() => toggleWebFeatures(pkg.id)}
                            className="mb-6 text-xs font-extrabold text-cyan-400 hover:text-cyan-200 underline underline-offset-4 transition"
                          >
                            {isExpanded
                              ? "Show Less ▲"
                              : `View All Features (${pkg.features.length} included) ▼`}
                          </button>
                        )}
                      </div>

                      <a
                        href={getWhatsAppUrl(
                          `Hello UNIQUE! I would like to book the ${pkg.title} (${pkg.tierEn}) at $${pkg.price} USD.`
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
                        <span>Order via WhatsApp</span>
                        <ArrowUpRightIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ================================================================
            5. SECTION C: BACKLINKS PACKAGES ($5 / $10 / $15 / $20 / $25)
        ================================================================ */}
        {showBacklinks && (
          <section className="mb-24" aria-label="Backlinks Packages">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-5 border-b border-neutral-900">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">
                  <LinkChainIcon className="w-3.5 h-3.5" />
                  <span>Off-Page Authority &amp; Ranking Boost</span>
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white">
                  100% Organic Backlinks Packages
                </h2>
              </div>
              <p className="text-sm text-neutral-400 max-w-md">
                Diverse, multi-platform backlinks across 20 authority categories to strengthen domain authority and accelerate rankings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {BACKLINKS_PACKAGES.map((pkg) => {
                const cardStyle = pkg.isSummit
                  ? "bg-gradient-to-b from-[#131008] via-[#090D18] to-[#070B14] border-2 border-amber-400/60 shadow-[0_0_55px_rgba(251,191,36,0.16)]"
                  : pkg.isPopular
                  ? "bg-gradient-to-b from-[#091529] to-[#070B14] border-2 border-cyan-400/60 shadow-[0_0_50px_rgba(6,182,212,0.18)]"
                  : "bg-[#070B14] border border-neutral-800/90 hover:border-blue-500/60 shadow-2xl";

                return (
                  <div
                    key={pkg.id}
                    className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${cardStyle}`}
                  >
                    <div
                      onClick={() => setLightboxImage({ src: pkg.image, title: pkg.title })}
                      className="relative w-full h-[360px] bg-black flex items-center justify-center p-2 cursor-zoom-in overflow-hidden"
                    >
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
                          pkg.isSummit
                            ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-black"
                            : pkg.isPopular
                            ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                            : "bg-blue-600/90 text-white"
                        }`}
                      >
                        {pkg.isSummit && <CrownIcon className="w-3.5 h-3.5" />}
                        <span>{pkg.badge}</span>
                      </span>
                      <span className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/85 border border-neutral-700 text-[11px] font-bold text-neutral-200 opacity-90 group-hover:border-cyan-400 group-hover:text-cyan-300 transition">
                        <ZoomInIcon className="w-3.5 h-3.5" />
                        <span>Zoom Table</span>
                      </span>
                    </div>

                    <div className="p-7 bg-[#090E1A]/95 border-t border-neutral-800/80 flex flex-col justify-between flex-grow">
                      <div>
                        <div
                          className={`text-[11px] font-black tracking-wider uppercase mb-1.5 ${
                            pkg.isSummit
                              ? "text-amber-300"
                              : pkg.isPopular
                              ? "text-cyan-300"
                              : "text-blue-400"
                          }`}
                        >
                          {pkg.tierEn}
                        </div>

                        <h3 className="text-2xl font-black text-white mb-1.5">{pkg.title}</h3>
                        <p className="text-neutral-400 text-xs mb-5">{pkg.perTypeCount}</p>

                        <div
                          className={`mb-6 bg-black/55 p-4 rounded-2xl border ${
                            pkg.isSummit
                              ? "border-amber-400/35"
                              : pkg.isPopular
                              ? "border-cyan-400/35"
                              : "border-neutral-800"
                          }`}
                        >
                          <div className="flex items-baseline gap-2.5">
                            <span
                              className={`text-3xl font-black ${
                                pkg.isSummit ? "text-amber-300" : "text-cyan-300"
                              }`}
                            >
                              ${pkg.price}
                            </span>
                            <span className="text-xs text-neutral-400 font-semibold">
                              USD / Package
                            </span>
                            <span className="text-[11px] font-bold text-emerald-400 ml-auto">
                              {pkg.totalLinks}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-2.5 mb-7">
                          {pkg.platforms.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-neutral-200 text-xs sm:text-sm flex items-start gap-2.5 leading-relaxed"
                            >
                              <span
                                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                  pkg.isSummit
                                    ? "bg-amber-500/15 border border-amber-400/40 text-amber-300"
                                    : "bg-emerald-500/15 border border-emerald-500/35 text-emerald-400"
                                }`}
                              >
                                <CheckIcon className="w-3 h-3" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={getWhatsAppUrl(
                          `Hello UNIQUE! I would like to order the ${pkg.title} (${pkg.totalLinks}) at $${pkg.price} USD.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl font-extrabold text-sm transition-all duration-300 shadow-lg ${
                          pkg.isSummit
                            ? "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-400 hover:from-amber-400 hover:to-yellow-300 text-black shadow-amber-500/25"
                            : pkg.isPopular
                            ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-blue-600/30"
                            : "bg-blue-600 hover:bg-blue-500 text-white"
                        }`}
                      >
                        <span>Order Package Now</span>
                        <ArrowUpRightIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ================================================================
            6. CUSTOM PACKAGE CTA BANNER
        ================================================================ */}
        <section className="rounded-[2rem] bg-gradient-to-br from-[#0B1730] via-[#070D1A] to-[#051418] border border-blue-500/35 p-8 sm:p-12 text-center shadow-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300 mb-5">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Custom Bundle Tailored to Your Business</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">
            Need a Combined Bundle (Website + Social Media + Backlinks &amp; SEO)?
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Message the <strong className="text-white">UNIQUE</strong> sales team directly
            and we will craft a discounted all-in-one growth proposal for your brand.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(
                "Hello UNIQUE! I would like a custom bundled quote for my business."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-sm sm:text-base shadow-xl shadow-blue-600/25 transition"
            >
              <span>Chat With Us on WhatsApp</span>
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-neutral-300 bg-black/60 border border-neutral-800 px-5 py-3.5 rounded-2xl">
              <PhoneIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-mono font-bold text-white">01270506511</span>
              <span className="text-neutral-600">•</span>
              <span className="font-mono font-bold text-cyan-300">01202987700</span>
              <span className="text-neutral-600">•</span>
              <span className="font-mono font-semibold text-neutral-400">035488069</span>
            </div>
          </div>
        </section>
      </div>

      {/* ================================================================
          7. FULL-SCREEN POSTER LIGHTBOX MODAL
      ================================================================ */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.title}
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] rounded-3xl bg-[#070B14] border border-cyan-500/40 p-3 sm:p-4 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between gap-3 px-2 pb-3 border-b border-neutral-800">
              <span className="text-sm font-extrabold text-white truncate">
                {lightboxImage.title}
              </span>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-300 hover:border-cyan-400 hover:text-white transition"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full h-[75vh] mt-3">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}