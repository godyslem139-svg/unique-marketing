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

function Link2({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
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

function TrendingUp({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
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
// NEXT.JS METADATA — BACKLINKS SERVICE PAGE (ENGLISH LTR)
// ============================================================================

export const metadata: Metadata = {
  title:
    "Organic White-Hat Backlinks Service | 100 to 500 Backlinks from $5 — UNIQUE",
  description:
    "Boost Domain Authority (DA/DR) and climb Google rankings safely with UNIQUE's 100% manual organic backlink packages. 20 authority platform types (Web 2.0, Guest Posts, Wiki, Directory, Medium, Github, Pinterest) with full Excel reporting starting at $5.",
  keywords: [
    "Organic Backlinks Service",
    "Buy Safe White-Hat Backlinks",
    "Backlink Packages Starting $5",
    "Increase Domain Authority DA DR",
    "Manual Link Building Agency",
    "Web 2.0 & Guest Post Backlinks",
    "Off-Page SEO Link Building",
    "High DA Diverse Backlinks",
    "UNIQUE Digital Agency Backlinks",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/en/services/backlinks",
    languages: {
      en: "https://www.uniquee-ws.com/en/services/backlinks",
      ar: "https://www.uniquee-ws.com/services/backlinks",
      "x-default": "https://www.uniquee-ws.com/services/backlinks",
    },
  },
  openGraph: {
    title: "Organic White-Hat Backlinks Service — UNIQUE Digital Agency",
    description:
      "100 to 500 manually placed organic backlinks across 20 authority platform types with natural anchor diversity and verified Excel reports.",
    url: "https://www.uniquee-ws.com/en/services/backlinks",
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
  uniqueBacklinks: string;
  spamBacklinks: string;
  noBacklinks: string;
}

interface BacklinkCategoryGroup {
  id: string;
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  seoBenefit: string;
  platforms: { name: string; role: string }[];
}

interface BacklinkPackageItem {
  id: string;
  tierEn: string;
  title: string;
  totalLinks: string;
  perTypeCount: string;
  idealFor: string;
  image: string;
  price: string;
  badge: string;
  isPopular?: boolean;
  isSummit?: boolean;
  highlights: string[];
}

interface SafetyChecklistGroup {
  id: string;
  title: string;
  badge: string;
  items: string[];
}

interface WorkflowStep {
  num: string;
  timeframe: string;
  title: string;
  description: string;
  deliverable: string;
}

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// DATA ARRAYS — UNIQUE BACKLINKS ENGINEERING (ENGLISH)
// ============================================================================

const HERO_KPIS: HeroKpi[] = [
  {
    id: "platforms",
    value: "20 Types",
    title: "Natural Multi-Platform Diversity",
    subtitle: "Distributed across 20 distinct link types: Dofollow, Web 2.0, Guest Posts, Wiki, News, Github, Slideshare & more.",
    accent: "cyan",
  },
  {
    id: "safety",
    value: "100%",
    title: "Manual White-Hat Execution",
    subtitle: "Zero automated spam blasts—balanced Anchor Text ratios and natural Dofollow/Nofollow signals.",
    accent: "emerald",
  },
  {
    id: "report",
    value: "Full Sheet",
    title: "Verified Excel Delivery Report",
    subtitle: "Receive a structured spreadsheet listing every live URL, platform category, anchor text & status.",
    accent: "blue",
  },
  {
    id: "price",
    value: "From $5",
    title: "Flexible 100 to 500 Link Tiers",
    subtitle: "Pick the right link velocity for your domain age and niche competition with zero recurring lock-in.",
    accent: "amber",
  },
];

const BACKLINKS_COMPARISON: ComparisonRow[] = [
  {
    criterion: "Safety Against Google Spam Updates",
    uniqueBacklinks: "100% Safe — Manual diverse placement with natural Anchor Text ratios",
    spamBacklinks: "High penalty risk & sudden ranking drops from repetitive bot spam",
    noBacklinks: "Slow growth unable to outrank established high-DR competitors",
  },
  {
    criterion: "Platform & Link Type Diversity",
    uniqueBacklinks: "20 distinct categories (Web 2.0, Guest Posts, Wiki, News, Profiles, Github)",
    spamBacklinks: "Thousands of identical low-quality comment spam links",
    noBacklinks: "Content-only reliance with weak off-page authority signals",
  },
  {
    criterion: "Domain Authority (DA / DR) & Indexing",
    uniqueBacklinks: "Steady, durable lift in DA/DR and faster Google indexing of new pages",
    spamBacklinks: "Temporary artificial spike followed by Google devaluation",
    noBacklinks: "Domain authority stays stagnant for months",
  },
  {
    criterion: "AI Search & GEO Brand Citations",
    uniqueBacklinks: "Strengthens entity brand mentions across trusted platforms read by AI",
    spamBacklinks: "Adds zero credibility for ChatGPT or Google AI Overviews",
    noBacklinks: "Weak external entity signals limit AI search visibility",
  },
  {
    criterion: "Transparency & Reporting",
    uniqueBacklinks: "Complete live-checked Excel sheet documenting every published link",
    spamBacklinks: "Broken, unverified, or quickly deleted links",
    noBacklinks: "None",
  },
];

const BACKLINK_4_CATEGORIES: BacklinkCategoryGroup[] = [
  {
    id: "cat-editorial",
    number: "01",
    badge: "Editorial & Contextual Power",
    title: "Guest Posts, News Articles & Web 2.0 Authority",
    subtitle: "Contextual links embedded inside relevant content surrounding your target keywords.",
    seoBenefit: "Sends the strongest topical relevance signal to Google for service and product pages.",
    platforms: [
      { name: "Guest Posts", role: "Contextual editorial placements building strong topical authority" },
      { name: "News Articles", role: "Publication-style mentions that boost brand credibility" },
      { name: "Web 2.0 Properties", role: "Dedicated high-trust Web 2.0 blogs with contextual backlinks" },
      { name: "Web 2.0 Profiles", role: "Reinforcing entity authority across major blogging ecosystems" },
      { name: "Dofollow Links", role: "Direct PageRank & link equity transfer to your target URLs" },
    ],
  },
  {
    id: "cat-tech-authority",
    number: "02",
    badge: "DA 90+ Global Platforms",
    title: "High-Authority Tech, Document & Media Hubs",
    subtitle: "Leverage ultra-high domain authority platforms trusted natively by Google.",
    seoBenefit: "Accelerates crawl discovery, strengthens entity trust, and reinforces GEO signals.",
    platforms: [
      { name: "GitHub", role: "Ultra-high authority technical platform trusted globally" },
      { name: "Evernote", role: "Indexed public notes diversifying your referring domain mix" },
      { name: "Slideshare", role: "Presentation sharing hub with strong domain authority" },
      { name: "Image & Video Sharing", role: "Rich multimedia citations driving brand visibility" },
      { name: "Drip Feed Indexing", role: "Gradual, natural discovery cadence for safe ranking lift" },
    ],
  },
  {
    id: "cat-knowledge",
    number: "03",
    badge: "Knowledge & Social Trust",
    title: "Wiki, Social Bookmarks & Visual Networks",
    subtitle: "Broaden your footprint across reference sites and active social ecosystems.",
    seoBenefit: "Creates a natural, balanced link graph that mirrors organic viral growth.",
    platforms: [
      { name: "Wiki Backlinks", role: "Reference-style citations reinforcing domain trust" },
      { name: "Pinterest", role: "Visual discovery signals and long-tail referral traffic" },
      { name: "Social Bookmarks", role: "Fast crawl triggers and social sharing signals" },
      { name: "Social Networks", role: "Brand profile links connecting your digital ecosystem" },
      { name: "Blog Comments", role: "Natural niche engagement balancing your link velocity" },
    ],
  },
  {
    id: "cat-local-signals",
    number: "04",
    badge: "Citations & Community Signals",
    title: "Directories, Forum Profiles & Paid Submissions",
    subtitle: "Complete your natural Off-Page profile and reinforce local/commercial trust.",
    seoBenefit: "Supports Google Maps Local 3-Pack and balances Dofollow/Nofollow ratios.",
    platforms: [
      { name: "Directory Listings", role: "Structured business citations boosting local & brand SEO" },
      { name: "Forum Profiles", role: "High-trust community profiles establishing brand footprint" },
      { name: "Paid Submissions", role: "Curated directory placements with cleaner moderation" },
      { name: "Brand & Naked URL Mix", role: "Protects against anchor over-optimization filters" },
      { name: "Verified Live Audit", role: "Every placement checked before final Excel handover" },
    ],
  },
];

const BACKLINK_PACKAGES: BacklinkPackageItem[] = [
  {
    id: "bl-100",
    tierEn: "100% ORGANIC BACKLINKS",
    title: "Rank Start-up 100 Backlink",
    totalLinks: "100 Backlinks",
    perTypeCount: "5 links per type across 20 authority categories",
    idealFor: "New websites and landing pages needing safe indexing and initial authority.",
    image: "/Organic Backlink Services in a Modern Office.png",
    price: "5",
    badge: "100 Backlinks",
    highlights: [
      "5 Dofollow + 5 Blog Comment + 5 Web 2.0 + 5 Forum Profiles + 5 Wiki",
      "5 Directory Listings + 5 News Article + 5 Guest Post + 5 Social Bookmark",
      "5 Image Sharing + 5 Video Sharing + 5 Web 2.0 Profiles + 5 Social Networks",
      "5 Paid Submission + 5 Drip Feed + 5 Evernote + 5 Slideshare + 5 Pinterest + 5 Github",
    ],
  },
  {
    id: "bl-200",
    tierEn: "200 BACKLINK EXCELLENCE",
    title: "Rank Excellence 200 Backlink",
    totalLinks: "200 Backlinks",
    perTypeCount: "10 links per type across 20 authority categories",
    idealFor: "Service websites and growing blogs targeting mid-competition keywords.",
    image: "/200 Backlink Excellence Office Promo.png",
    price: "10",
    badge: "200 Backlinks",
    highlights: [
      "10 Dofollow + 10 Blog Comment + 10 Web 2.0 + 10 Forum Profiles + 10 Wiki",
      "10 Directory Listings + 10 News Article + 10 Guest Post + 10 Social Bookmark",
      "10 Image Sharing + 10 Video Sharing + 10 Web 2.0 Profiles + 10 Social Networks",
      "10 Paid Submission + 10 Drip Feed + 10 Evernote + 10 Slideshare + 10 Pinterest + 10 Github",
    ],
  },
  {
    id: "bl-300",
    tierEn: "300 RANK START-UP",
    title: "Rank Start-up 300 Backlink",
    totalLinks: "300 Backlinks",
    perTypeCount: "15 links per type across 20 authority categories",
    idealFor: "Most popular for e-commerce stores and corporate sites pushing to Page #1.",
    image: "/300 Rank Start-up Backlink Package.png",
    price: "15",
    badge: "Most Popular • 300 Backlinks",
    isPopular: true,
    highlights: [
      "15 Dofollow + 15 Blog Comment + 15 Web 2.0 + 15 Forum Profiles + 15 Wiki",
      "15 Directory Listings + 15 News Article + 15 Guest Post + 15 Social Bookmark",
      "15 Image Sharing + 15 Video Sharing + 15 Web 2.0 Profiles + 15 Social Networks",
      "15 Paid Submission + 15 Drip Feed + 15 Evernote + 15 Slideshare + 15 Pinterest + 15 Github",
    ],
  },
  {
    id: "bl-400",
    tierEn: "400 BACKLINK LEADERSHIP",
    title: "Rank Leadership 400 Backlink",
    totalLinks: "400 Backlinks",
    perTypeCount: "20 links per type across 20 authority categories",
    idealFor: "Established stores & competitive verticals (real estate, clinics, B2B).",
    image: "/400 Backlink Leadership Package.png",
    price: "20",
    badge: "400 Backlinks",
    highlights: [
      "20 Dofollow + 20 Blog Comment + 20 Web 2.0 + 20 Forum Profiles + 20 Wiki",
      "20 Directory Listings + 20 News Article + 20 Guest Post + 20 Social Bookmark",
      "20 Image Sharing + 20 Video Sharing + 20 Web 2.0 Profiles + 20 Social Networks",
      "20 Paid Submission + 20 Drip Feed + 20 Evernote + 20 Slideshare + 20 Pinterest + 20 Github",
    ],
  },
  {
    id: "bl-500",
    tierEn: "500 RANK SUMMIT",
    title: "Rank Summit 500 Backlink",
    totalLinks: "500 Backlinks",
    perTypeCount: "Maximum multi-platform authority coverage (20 categories)",
    idealFor: "High-competition niches, national portals & aggressive Page-1 campaigns.",
    image: "/Corporate Backlink Package Presentation.png",
    price: "25",
    badge: "Summit • 500 Backlinks",
    isSummit: true,
    highlights: [
      "Complete 500 organic backlink campaign spanning 20 diverse authority categories",
      "Strategic multi-URL & multi-keyword Anchor Text distribution for peak safety",
      "Includes Dofollow, Guest Posts, News Articles, Web 2.0, Wiki, Github & Drip Feed",
      "Priority execution + verified Excel report + post-delivery indexing guidance",
    ],
  },
];

const SAFETY_4_TABLES: SafetyChecklistGroup[] = [
  {
    id: "anchor-safety",
    title: "1. Balanced Anchor Text Engineering",
    badge: "Anti-Penalty Ratio",
    items: [
      "Natural ratio of Brand Anchors & Naked URLs (50%) for maximum domain safety",
      "Partial-match & semantic LSI variations (35%) expanding long-tail rankings",
      "Controlled exact-match commercial keywords (15%) preventing over-optimization",
      "Option to distribute links across multiple target pages in one campaign",
    ],
  },
  {
    id: "quality-mix",
    title: "2. Natural Multi-Platform Link Profile",
    badge: "20 Link Types",
    items: [
      "Healthy blend of Dofollow equity links and natural Nofollow trust signals",
      "Combines contextual articles, Web 2.0, Wiki, profiles, directories & media",
      "Leverages globally trusted DA 70–95+ platforms for safe authority growth",
      "Compatible with Next.js, WordPress, Shopify, WooCommerce, Salla & Zid",
    ],
  },
  {
    id: "execution-std",
    title: "3. 100% Manual Placement & Drip Feed",
    badge: "Zero Bot Spam",
    items: [
      "Hand-built by our Off-Page SEO specialists without automated spam tools",
      "Clean, niche-aligned descriptions tailored to your brand and industry",
      "Drip-feed release pacing so search engines observe natural link velocity",
      "Live HTTP 200 verification on every URL prior to client delivery",
    ],
  },
  {
    id: "delivery-report",
    title: "4. Transparent Excel Handover Report",
    badge: "100% Verified",
    items: [
      "Organized Excel / Google Sheet listing every single published backlink",
      "Categorized by platform type, target URL, and assigned anchor text",
      "Complimentary pre-campaign advice on choosing the highest-ROI target URLs",
      "Direct WhatsApp support after delivery for any follow-up questions",
    ],
  },
];

const WORKFLOW_4_STEPS: WorkflowStep[] = [
  {
    num: "01",
    timeframe: "Day 1",
    title: "URL & Anchor Text Strategy",
    description:
      "Send your website URL and 3–5 target keywords. We review your current link profile and design a safe, balanced Anchor Text split.",
    deliverable: "Approved URL & Anchor Distribution Plan",
  },
  {
    num: "02",
    timeframe: "Execution",
    title: "Manual Building Across 20 Platforms",
    description:
      "Our Off-Page team manually builds your links across all 20 authority categories with natural Drip-Feed pacing.",
    deliverable: "Clean, Diverse Multi-Platform Placements",
  },
  {
    num: "03",
    timeframe: "Pre-Delivery",
    title: "Live QA & Indexing Signals",
    description:
      "We verify every link is live and accessible, then trigger safe discovery signals so Google crawls your new backlinks faster.",
    deliverable: "100% Live & Checked Backlink Batch",
  },
  {
    num: "04",
    timeframe: "Handover",
    title: "Full Excel Report & Next Steps",
    description:
      "You receive a complete Excel report with all live URLs plus tailored recommendations to compound your ranking gains.",
    deliverable: "Complete Excel Report + Growth Roadmap",
  },
];

const BACKLINKS_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Google Safety",
    question: "Are your backlink packages safe against Google Spam Updates?",
    answer:
      "Yes. Every package is executed 100% manually using White-Hat principles, spread across 20 distinct platform categories with a natural Anchor Text ratio (brand, naked URL, LSI, and target keywords) so your link profile grows safely.",
  },
  {
    id: "faq-2",
    category: "Choosing a Tier",
    question: "Which package should I pick: 100, 300, or 500 backlinks?",
    answer:
      "For new domains or fresh landing pages, start with 100 or 200 backlinks for a natural baseline. For established e-commerce stores and competitive corporate niches, the 300 Rank Start-up or 500 Rank Summit delivers the strongest authority boost.",
  },
  {
    id: "faq-3",
    category: "Multiple URLs",
    question: "Can I target multiple pages and keywords in a single package?",
    answer:
      "Absolutely. We recommend splitting links across your homepage and 2 to 4 key service or category pages with varied Arabic or English keywords for the most natural and effective SEO impact.",
  },
  {
    id: "faq-4",
    category: "Turnaround Time",
    question: "How long does delivery take?",
    answer:
      "100 and 200 backlink packages are delivered within 3–5 business days, while 300 to 500 backlink campaigns take 5–10 business days to ensure careful manual placement and safe Drip-Feed pacing.",
  },
  {
    id: "faq-5",
    category: "Results & Indexing",
    question: "When will the backlinks show up in Search Console and Ahrefs?",
    answer:
      "Links typically begin indexing across Google Search Console and third-party tools within 2 to 4 weeks, with measurable DA/DR and keyword ranking improvements compounding over 30 to 60 days.",
  },
  {
    id: "faq-6",
    category: "Languages & CMS",
    question: "Do you support both English and Arabic websites on any CMS?",
    answer:
      "Yes. We build backlinks for English, Arabic, and multilingual websites across Next.js, WordPress, WooCommerce, Shopify, Salla, Zid, and custom platforms.",
  },
];

const SEMANTIC_KEYWORDS: string[] = [
  "100% Organic Backlinks Service",
  "Manual White-Hat Link Building",
  "Backlink Packages Starting $5",
  "Boost Domain Authority DA & DR",
  "Web 2.0 & Guest Post Backlinks",
  "Dofollow & Diverse Authority Links",
  "Wiki, Directory & Forum Profile Links",
  "Github, Evernote, Slideshare & Pinterest SEO",
  "Safe Drip-Feed Backlinks Campaign",
  "E-Commerce Off-Page SEO Link Building",
  "Verified Excel Backlink Report",
  "UNIQUE Digital Agency SEO Services",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD — Service + OfferCatalog USD + FAQPage + Breadcrumb)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Organic White-Hat Backlinks Service — UNIQUE Digital Agency",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://www.uniquee-ws.com",
      telephone: "+201270506511",
    },
    serviceType: "Off-Page SEO & White-Hat Link Building",
    areaServed: ["EG", "SA", "AE", "KW", "US", "GB"],
    url: "https://www.uniquee-ws.com/en/services/backlinks",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "100% Organic Backlinks Packages (USD)",
      itemListElement: BACKLINK_PACKAGES.map((pkg) => ({
        "@type": "Offer",
        name: pkg.title,
        price: pkg.price,
        priceCurrency: "USD",
        description: `${pkg.totalLinks} — ${pkg.perTypeCount}`,
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BACKLINKS_FAQS.map((faq) => ({
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
        name: "Backlinks Service",
        item: "https://www.uniquee-ws.com/en/services/backlinks",
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
// MAIN PAGE COMPONENT — BACKLINKS SERVICE PAGE (ENGLISH LTR)
// ============================================================================

export default function BacklinksServiceEnglishPage() {
  const heroWhatsapp = getWhatsAppUrl(
    "Hello UNIQUE Digital Agency! I would like a free consultation to choose the best Backlinks package for my website."
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
                UNIQUE <span className="text-blue-400">BACKLINKS</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">
                White-Hat Link Building &amp; Authority
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#comparison" className="hover:text-cyan-300 transition">
              Why UNIQUE?
            </a>
            <a href="#platforms" className="hover:text-cyan-300 transition">
              20 Link Types
            </a>
            <a href="#packages" className="hover:text-cyan-300 transition">
              USD Packages
            </a>
            <a href="#safety" className="hover:text-cyan-300 transition">
              Safety Protocol
            </a>
            <a href="#workflow" className="hover:text-cyan-300 transition">
              Process
            </a>
            <a href="#faq" className="hover:text-cyan-300 transition">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/services/backlinks"
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
              <span>Order Now</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION + LIVE DOMAIN AUTHORITY (DR/DA) SIMULATOR
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
            <span className="text-cyan-300 font-semibold">Backlinks Service</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <Link2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Manual White-Hat Link Building</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">20 Diverse Authority Categories</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
                Boost Your Domain Authority With{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  100% Organic White-Hat Backlinks
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                Quality backlinks are the <strong className="text-white">votes of trust</strong>{" "}
                Google uses to rank your site above competitors. At{" "}
                <strong className="text-cyan-300">UNIQUE Digital Agency</strong>, we manually
                build diverse, multi-platform backlinks across 20 authority categories (Guest Posts,
                Web 2.0, Wiki, News, Github, Slideshare, Drip Feed) with verified Excel reporting
                starting at <strong className="text-amber-300">just $5</strong>.
              </p>

              {/* Trust Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "100% Manual Execution — Google Spam-Safe",
                  "Balanced Diversity Across 20 Link Categories",
                  "Complete Live-Checked Excel Handover Sheet",
                  "Supports English, Arabic & E-Commerce Sites",
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
                  href="#packages"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <span>Explore Backlink Packages ($5 – $25)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={heroWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Free Link Profile Advice</span>
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
                  Natural Anchor Text Ratio • Zero Spam
                </span>
              </div>
            </div>

            {/* Hero Right Visual: Live Authority & Backlink Health Dashboard */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                      Authority &amp; Link Velocity Monitor
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    Spam Score: 1% Safe
                  </span>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Domain Rating</div>
                    <div className="text-xl font-black text-emerald-400">14 → 48</div>
                    <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">Steady Lift</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Referring Domains</div>
                    <div className="text-xl font-black text-cyan-300">+340</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">20 Link Types</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Organic Traffic</div>
                    <div className="text-xl font-black text-amber-300">+290%</div>
                    <div className="text-[10px] text-blue-300 font-semibold mt-0.5">Compounding</div>
                  </div>
                </div>

                {/* Growth Chart */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      Post-Campaign Authority &amp; Ranking Trajectory
                    </span>
                    <span className="text-[11px] text-neutral-500">White-Hat</span>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-24 pt-2">
                    {[15, 22, 34, 48, 60, 74, 88, 100].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <div
                          style={{ height: `${h}%` }}
                          className={`w-full rounded-t-md ${
                            i >= 6
                              ? "bg-gradient-to-t from-blue-600 via-cyan-400 to-emerald-400"
                              : "bg-gradient-to-t from-blue-950 to-blue-500/80"
                          }`}
                        />
                        <span className="text-[10px] text-neutral-500">W{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Anchor Text Balance Preview */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Safe Anchor Text Ratio</span>
                    <span className="text-[11px] text-emerald-400 font-bold">100% Balanced</span>
                  </div>
                  {[
                    { label: "Brand Name & Naked URLs", pct: "50%", w: "w-[50%]", color: "bg-emerald-400" },
                    { label: "Partial Match & Semantic LSI Terms", pct: "35%", w: "w-[35%]", color: "bg-cyan-400" },
                    { label: "Exact-Match Commercial Keywords", pct: "15%", w: "w-[15%]", color: "bg-amber-400" },
                  ].map((bar, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] text-neutral-300">
                        <span>{bar.label}</span>
                        <span className="font-bold text-white">{bar.pct}</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden">
                        <div className={`h-full rounded-full ${bar.w} ${bar.color}`} />
                      </div>
                    </div>
                  ))}
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
          3. COMPARISON TABLE — UNIQUE BACKLINKS VS SPAM VS NONE
      ==================================================================== */}
      <section id="comparison" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Quality & Safety Comparison"
            title="Why Site Owners Trust"
            highlight="UNIQUE's Manual Diverse Backlinks"
            subtitle="The difference between sustainable Page-1 rankings and a Google penalty comes down to manual execution, diversity, and Anchor Text discipline."
          />

          <div className="overflow-x-auto rounded-3xl border border-neutral-800 bg-[#060911]">
            <table className="w-full text-left border-collapse min-w-[780px]">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-950/90">
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                    Evaluation Factor
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-cyan-300 bg-blue-500/10">
                    UNIQUE Manual Backlinks (20 Types)
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-amber-300">
                    Cheap Automated Spam Blasts
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                    No Link Building
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80 text-sm">
                {BACKLINKS_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/40 transition">
                    <td className="py-4 px-6 font-bold text-white">{row.criterion}</td>
                    <td className="py-4 px-6 text-emerald-300 font-semibold bg-blue-500/[0.04]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.uniqueBacklinks}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-neutral-300">{row.spamBacklinks}</td>
                    <td className="py-4 px-6 text-neutral-400">{row.noBacklinks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. THE 20 BACKLINK PLATFORMS EXPLAINED (4 ENGINEERING CATEGORIES)
      ==================================================================== */}
      <section id="platforms" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Natural Multi-Platform Diversity"
            title="Inside the 20 Authority Link Types"
            highlight="Powering Every UNIQUE Package"
            subtitle="Every tier blends contextual articles, high-DA tech hubs, wiki references, and local citations into one natural link graph."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {BACKLINK_4_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-blue-500/40 p-7 sm:p-8 transition"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {cat.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300">
                    {cat.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-5">{cat.subtitle}</p>

                <div className="rounded-2xl bg-emerald-500/8 border border-emerald-500/25 p-3.5 mb-5">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-300 mb-0.5">
                    SEO Ranking Impact
                  </div>
                  <p className="text-xs text-neutral-200">{cat.seoBenefit}</p>
                </div>

                <div className="space-y-2.5">
                  {cat.platforms.map((pl, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800/80"
                    >
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-white">{pl.name}: </span>
                        <span className="text-xs text-neutral-400">{pl.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. OFFICIAL 5 BACKLINK PACKAGES ($5 / $10 / $15 / $20 / $25)
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Official USD Packages"
            title="100% Organic Backlink Packages"
            highlight="From 100 to 500 Diverse Links"
            subtitle="Transparent one-time USD pricing with full live-checked Excel delivery reports."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {BACKLINK_PACKAGES.map((pkg) => {
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
                  {/* Poster Image */}
                  <div className="relative w-full h-[360px] bg-black flex items-center justify-center p-2 overflow-hidden">
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
                      {pkg.isSummit && <Crown className="w-3.5 h-3.5" />}
                      <span>{pkg.badge}</span>
                    </span>
                  </div>

                  {/* Card Body */}
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
                      <p className="text-xs text-neutral-400 mb-5 leading-relaxed">{pkg.idealFor}</p>

                      {/* Price Box */}
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
                        <div className="mt-2 pt-2 border-t border-neutral-800/80 text-[11px] text-neutral-300">
                          {pkg.perTypeCount}
                        </div>
                      </div>

                      <ul className="space-y-2.5 mb-7">
                        {pkg.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-neutral-200 text-xs flex items-start gap-2.5 leading-relaxed"
                          >
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                pkg.isSummit
                                  ? "bg-amber-500/15 border border-amber-400/40 text-amber-300"
                                  : "bg-emerald-500/15 border border-emerald-500/35 text-emerald-400"
                              }`}
                            >
                              <Check className="w-3 h-3" />
                            </span>
                            <span>{h}</span>
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
                      <MessageSquare className="w-4 h-4" />
                      <span>Order Package Now</span>
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
          6. SAFETY STANDARDS (4 TABLES) + LIVE BACKLINK AUDIT TERMINAL
      ==================================================================== */}
      <section id="safety" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="UNIQUE Safety Protocol"
            title="4 Quality Standards Protecting"
            highlight="Your Domain & Boosting Rankings"
            subtitle="Strict adherence to Google Spam Policies ensures durable authority growth with zero penalty risk."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {SAFETY_4_TABLES.map((tbl) => (
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

          {/* Live Backlink Quality Terminal */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#050811] border border-cyan-500/30 p-6 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span className="ml-2 text-neutral-400 font-sans font-bold">
                  unique-backlink-verifier — Off-Page Quality Gate
                </span>
              </div>
              <span className="text-emerald-400">VERIFIED</span>
            </div>
            <div className="space-y-2 text-neutral-300 leading-relaxed">
              <div>
                <span className="text-cyan-400">$</span> unique-links --verify --package=&quot;rank-summit-500&quot;
              </div>
              <div className="text-emerald-400">
                ✓ [Placement] 100% Manual White-Hat Execution Across 20 Distinct Categories
              </div>
              <div className="text-emerald-400">
                ✓ [Anchor Diversity] 50% Brand/URL | 35% Partial/LSI | 15% Target Keyword
              </div>
              <div className="text-blue-300">
                ✓ [Authority Mix] Dofollow • Guest Posts • Web 2.0 • News • Wiki • GitHub • Drip Feed
              </div>
              <div className="text-amber-300">
                ✓ [Deliverable] Live Verified Excel Report Ready for Client Handover
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. 4-STEP WORKFLOW
      ==================================================================== */}
      <section id="workflow" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Transparent Execution"
            title="How We Deliver Your Campaign in"
            highlight="4 Structured Steps"
            subtitle="From initial Anchor Text planning to your final live-verified Excel spreadsheet."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_4_STEPS.map((st) => (
              <div
                key={st.num}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-extrabold text-cyan-300">
                      Step {st.num}
                    </span>
                    <span className="text-xs font-bold text-amber-300">{st.timeframe}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2.5">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                    {st.description}
                  </p>
                </div>
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-3">
                  <div className="text-[10px] uppercase font-bold text-emerald-300 mb-0.5">
                    Deliverable
                  </div>
                  <div className="text-xs font-bold text-white">{st.deliverable}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. FAQ ACCORDION + SEMANTIC KEYWORDS CLOUD
      ==================================================================== */}
      <section id="faq" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Everything About Our"
            highlight="Organic Backlinks Service"
            subtitle="Clear answers on Google safety, package selection, turnaround times, and indexing."
          />

          <div className="max-w-4xl mx-auto space-y-4 mb-16">
            {BACKLINKS_FAQS.map((faq) => (
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

          {/* Semantic Cloud */}
          <div className="rounded-3xl bg-[#070B14] border border-neutral-800 p-7 sm:p-8">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              Off-Page SEO Coverage
            </div>
            <h3 className="text-lg font-extrabold text-white mb-5">
              Core Link Building &amp; Authority Services at UNIQUE
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
              <span>Start Building Safe Domain Authority Today — From $5</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Ready to Outrank Your Competitors on{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Google?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              Message us your website URL on WhatsApp and our Off-Page SEO team will recommend
              the ideal backlink tier and Anchor Text distribution for fast, safe ranking growth.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Order Backlinks on WhatsApp</span>
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
              © {new Date().getFullYear()} UNIQUE Digital Agency — White-Hat Backlinks &amp; Off-Page SEO.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/services/backlinks" className="hover:text-cyan-300 transition">
                خدمة الباك لينكس (AR)
              </Link>
              <Link href="/en/egypt-seo" className="hover:text-cyan-300 transition">
                Egypt SEO
              </Link>
              <Link href="/en/riyadh-seo" className="hover:text-cyan-300 transition">
                Riyadh SEO
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