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

function Smartphone({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function Layers({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
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
// NEXT.JS METADATA — MOBILE APP DEVELOPMENT SERVICE PAGE (ENGLISH LTR)
// ============================================================================

export const metadata: Metadata = {
  title:
    "Mobile App Design & Development (Android & iOS) | Flutter & Native — UNIQUE",
  description:
    "Custom Android & iOS mobile app development across Egypt, Saudi Arabia, UAE & Kuwait. Flutter, React Native & Native Swift/Kotlin apps with cloud admin panels, Mada/Apple Pay/Paymob integration, 100% source code ownership, and full Google Play & App Store publishing.",
  keywords: [
    "Mobile App Development Agency",
    "Android and iOS App Design",
    "Flutter App Development",
    "React Native Mobile Apps",
    "E-Commerce Mobile App Development",
    "On-Demand Delivery App Development",
    "Mobile App Development Cost USD",
    "App Store Optimization ASO",
    "Mada Apple Pay Paymob App Integration",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/en/services/android",
    languages: {
      ar: "https://www.uniquee-ws.com/services/android",
      en: "https://www.uniquee-ws.com/en/services/android",
      "x-default": "https://www.uniquee-ws.com/services/android",
    },
  },
  openGraph: {
    title: "Mobile App Design & Development (Android & iOS) — UNIQUE Digital Agency",
    description:
      "Turn your idea or online store into a 60 FPS Android & iOS mobile app with a cloud admin panel, 100% source code ownership, and full store launch.",
    url: "https://www.uniquee-ws.com/en/services/android",
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

interface AppSolution {
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

interface TechStackCard {
  name: string;
  tag: string;
  bestFor: string;
  points: string[];
}

interface IntegrationGroup {
  category: string;
  badge: string;
  items: string[];
}

interface GuaranteeTable {
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

interface AppPackageUSD {
  id: string;
  name: string;
  badge: string;
  price: string;
  cycle: string;
  idealFor: string;
  isPopular?: boolean;
  timeline: string;
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
// DATA ARRAYS — MOBILE APP DESIGN & DEVELOPMENT (ENGLISH)
// ============================================================================

const HERO_KPIS: HeroKpi[] = [
  {
    id: "fps",
    value: "60 FPS",
    title: "Native-Grade Fluidity",
    subtitle: "Lag-free mobile experiences engineered for smooth performance on every Android & iOS device.",
    accent: "emerald",
  },
  {
    id: "savings",
    value: "45% Saved",
    title: "Unified Codebase (Flutter)",
    subtitle: "Launch simultaneously on Google Play & App Store faster and at nearly half the cost.",
    accent: "cyan",
  },
  {
    id: "ownership",
    value: "100%",
    title: "Full Source Code Ownership",
    subtitle: "You receive the complete Git repository, databases, and store accounts under your company name.",
    accent: "blue",
  },
  {
    id: "pricing",
    value: "From $950",
    title: "Milestone-Based Pricing",
    subtitle: "Transparent written scopes from fast startup MVPs to multi-role enterprise ecosystems.",
    accent: "amber",
  },
];

const SIX_APP_SOLUTIONS: AppSolution[] = [
  {
    id: "ecommerce-apps",
    number: "01",
    badge: "E-Commerce",
    title: "E-Commerce & Omnichannel Store Apps",
    subLabel: "WooCommerce • Shopify • Salla • Zid • Custom API",
    summary:
      "Transform your existing online store—or launch a custom mobile storefront—into a high-converting Android & iOS app powered by one-tap checkout and smart push notifications.",
    impact: "Boosts repeat purchase rates by up to 3x compared to mobile web browsers.",
    features: [
      "Real-time product, inventory, and order sync via REST / GraphQL APIs",
      "One-tap checkout with Mada, Apple Pay, STC Pay, Paymob & Fawry",
      "Targeted push notifications for abandoned carts and flash offers",
      "Full Arabic (RTL) & English (LTR) support with multi-currency switching",
    ],
    whatsappMsg: "Hello UNIQUE, I want to design and develop an E-Commerce mobile app for Android & iOS.",
  },
  {
    id: "ondemand-delivery",
    number: "02",
    badge: "On-Demand & Delivery",
    title: "On-Demand Delivery & Logistics Ecosystems",
    subLabel: "Customer App • Driver App • Merchant Dashboard",
    summary:
      "A complete multi-role platform uniting customer ordering, driver/provider dispatch, and merchant control panels with live GPS map tracking and automated order routing.",
    impact: "Automates the entire order lifecycle from request to doorstep at lower operational cost.",
    features: [
      "Live Google Maps driver tracking with dynamic ETA calculation",
      "Built-in digital wallet, promo codes, and automated provider commissions",
      "Real-time in-app chat and instant order status notifications",
      "Centralized admin dashboard for fleet monitoring and financial analytics",
    ],
    whatsappMsg: "Hello UNIQUE, I want to build an on-demand delivery or service app (Customer + Driver + Admin).",
  },
  {
    id: "booking-medical",
    number: "03",
    badge: "Clinics & Booking",
    title: "Booking, Healthcare, Real Estate & Service Apps",
    subLabel: "Appointments • Deposits • Loyalty Programs",
    summary:
      "Tailored mobile apps for medical centers, clinics, real estate agencies, salons, and hospitality brands to manage bookings, showcase listings, and collect deposits seamlessly.",
    impact: "Cuts appointment no-shows through automated reminders and builds lasting client retention.",
    features: [
      "Smart calendar scheduling with automated Push & WhatsApp reminders",
      "Encrypted client profiles, visit history, and digital invoices",
      "Advanced map, location, and rating search filters",
      "Loyalty points engine and recurring monthly membership plans",
    ],
    whatsappMsg: "Hello UNIQUE, I want a booking, clinic, or real estate mobile app.",
  },
  {
    id: "edtech-lms",
    number: "04",
    badge: "EdTech & LMS",
    title: "Protected E-Learning & Academy Apps",
    subLabel: "DRM Video Protection • Quizzes • Certificates",
    summary:
      "Secure mobile learning platforms for academies, instructors, and training institutes featuring anti-piracy video streaming, interactive quizzes, and student progress tracking.",
    impact: "Protects your course IP from screen-recording leaks while scaling mobile enrollments.",
    features: [
      "Encrypted video streaming (DRM, dynamic watermarks & screen-capture blocking)",
      "Question banks, timed exams, and automated completion certificates",
      "Activation codes, subscriptions, and local/GCC payment gateways",
      "Encrypted offline lesson downloads for uninterrupted studying",
    ],
    whatsappMsg: "Hello UNIQUE, I want a secure E-Learning (LMS) mobile app for courses or an academy.",
  },
  {
    id: "enterprise-crm",
    number: "05",
    badge: "Enterprise & Field Ops",
    title: "Enterprise, ERP/CRM & Field Force Apps",
    subLabel: "Offline Sync • RBAC • ERP Integration",
    summary:
      "Custom internal mobile applications for field sales teams, maintenance crews, warehouses, and HR—integrated directly into your existing Odoo, SAP, or custom ERP/CRM.",
    impact: "Accelerates field productivity and gives leadership real-time operational visibility.",
    features: [
      "Offline-first mode with automatic background sync upon reconnection",
      "Granular role-based access control (RBAC) & GPS attendance check-in",
      "Barcode / QR scanning and instant digital invoicing in the field",
      "End-to-end encrypted APIs adhering to enterprise security standards",
    ],
    whatsappMsg: "Hello UNIQUE, I want a custom enterprise mobile app integrated with our ERP/CRM.",
  },
  {
    id: "mvp-ai-apps",
    number: "06",
    badge: "Startups & AI",
    title: "Startup MVPs & AI-Powered Mobile Apps",
    subLabel: "4–6 Week Launch • AI Assistants • Investor-Ready",
    summary:
      "Rapid 4-to-6-week MVP execution engineered to validate your market and impress investors—with optional AI assistants, smart recommendations, and scalable cloud architecture.",
    impact: "Gets you to market fast with minimal capital risk and a clean codebase ready to scale.",
    features: [
      "Interactive Figma clickable prototype ready for investor pitches before coding",
      "AI feature integration (smart chat, semantic search & personalized feeds)",
      "Clean Architecture codebase built to add Phase-2 features without rewrites",
      "App Store Optimization (ASO) setup for organic store discovery from Day 1",
    ],
    whatsappMsg: "Hello UNIQUE, I have a startup app idea (MVP) and want a technical roadmap and quote.",
  },
];

const TECH_STACK_CARDS: TechStackCard[] = [
  {
    name: "Flutter (Dart)",
    tag: "Best Speed & ROI",
    bestFor: "Simultaneous Android & iOS apps from one codebase at 60 FPS.",
    points: [
      "Cuts development & maintenance costs by up to 45%",
      "Pixel-consistent custom UI across both iOS and Android",
      "Backed by Google—ideal for stores, booking, delivery & MVPs",
    ],
  },
  {
    name: "React Native",
    tag: "Seamless Next.js Fit",
    bestFor: "Teams running React or Next.js web platforms wanting shared logic.",
    points: [
      "Shares TypeScript business logic and API contracts with your web app",
      "Fast over-the-air updates and strong content/commerce performance",
      "Mature ecosystem of native modules and integrations",
    ],
  },
  {
    name: "Native (Swift & Kotlin)",
    tag: "Heavy Hardware Apps",
    bestFor: "Apps requiring deep OS hardware, Bluetooth, or real-time processing.",
    points: [
      "100% direct access to device CPU, camera, NFC, and sensors",
      "Ideal for fintech, banking, advanced live streaming, and IoT",
      "Maximum security and strict Apple/Google platform compliance",
    ],
  },
  {
    name: "Backend & Admin Panel",
    tag: "Cloud & Control",
    bestFor: "Effortless daily management of users, orders, content, and payouts.",
    points: [
      "Scalable Node.js / NestJS / Laravel REST & GraphQL APIs",
      "Bilingual web admin dashboard with live KPIs and staff roles",
      "Secure cloud hosting (AWS / DigitalOcean / Firebase) with daily backups",
    ],
  },
];

const ECOSYSTEM_INTEGRATIONS: IntegrationGroup[] = [
  {
    category: "Payment Gateways (MENA & GCC)",
    badge: "Seamless Checkout",
    items: ["Mada & Apple Pay", "STC Pay, Tabby & Tamara BNPL", "Paymob, Fawry & InstaPay", "Stripe, PayTabs & MyFatoorah"],
  },
  {
    category: "Maps, Shipping & Logistics",
    badge: "Direct API Sync",
    items: ["Google Maps SDK & Live GPS Tracking", "Aramex & SMSA Express", "Bosta & Local Courier APIs", "Automated distance-based delivery pricing"],
  },
  {
    category: "Push, Auth & Growth Analytics",
    badge: "Retention Engine",
    items: ["Firebase Cloud Messaging & OneSignal", "Google Analytics 4 & Crashlytics", "WhatsApp OTP, Google & Apple Sign-In", "App Store Optimization (ASO) for organic installs"],
  },
];

const UNIQUE_4_APP_GUARANTEES: GuaranteeTable[] = [
  {
    id: "g-uiux",
    title: "1. Conversion-Driven UI/UX Design",
    badge: "Figma Prototype",
    items: [
      "User flow engineering that minimizes taps from discovery to checkout",
      "Native-feeling RTL Arabic and LTR English layouts",
      "Interactive clickable Figma prototype approved by you before coding",
      "Custom app icon and high-converting store screenshots",
    ],
  },
  {
    id: "g-code",
    title: "2. Clean Architecture & 100% Ownership",
    badge: "100% Ownership",
    items: [
      "Modular, documented codebase ready for future internal or external teams",
      "Full handover of Git source code and databases under your name",
      "Encrypted API communication and hardened authentication flows",
      "Real-device QA testing across multiple Android & iPhone screen sizes",
    ],
  },
  {
    id: "g-store",
    title: "3. End-to-End Store Publishing + ASO",
    badge: "Play & App Store",
    items: [
      "Complete submission under your official Google Play & Apple Developer accounts",
      "Handling all Apple App Review & Google Play compliance feedback until live",
      "ASO keyword, title, and subtitle optimization to rank inside store search",
      "Compliant privacy policies and terms aligned with store guidelines",
    ],
  },
  {
    id: "g-support",
    title: "4. Post-Launch Warranty & Scaling",
    badge: "SLA & Support",
    items: [
      "Free post-launch technical warranty covering any unexpected bugs",
      "Live crash and performance monitoring via Firebase Crashlytics",
      "Hands-on team training for your admin dashboard and order workflows",
      "Flexible maintenance retainers for future Android & iOS OS releases",
    ],
  },
];

const DELIVERY_ROADMAP: DeliveryPhase[] = [
  {
    num: "01",
    timeframe: "Week 1",
    title: "Discovery, Scope & Wireframes",
    desc: "We map every user role, screen, and API integration into a crystal-clear written specification with fixed milestones and timeline.",
    output: "Written SRS Scope + Screen Wireframes",
  },
  {
    num: "02",
    timeframe: "Weeks 2 – 3",
    title: "Interactive UI/UX Design in Figma",
    desc: "We design every screen around your brand identity and hand you a clickable prototype to test on your own phone before coding starts.",
    output: "Approved Full Figma Prototype",
  },
  {
    num: "03",
    timeframe: "Weeks 4 – 7",
    title: "App Coding, Backend & Admin Panel",
    desc: "Parallel development of the mobile app (Flutter/React Native/Native), cloud APIs, payment gateways, and your web admin dashboard.",
    output: "Weekly TestFlight / APK Builds",
  },
  {
    num: "04",
    timeframe: "Week 8",
    title: "QA Testing, Security & Store Launch",
    desc: "Comprehensive performance and security QA across physical devices, publishing to Google Play & App Store, ASO setup, and full code handover.",
    output: "Live Store Apps + 100% Source Code",
  },
];

const APP_PACKAGES_USD: AppPackageUSD[] = [
  {
    id: "app-mvp",
    name: "Starter MVP / Store App",
    badge: "Startups & Online Stores",
    price: "950",
    cycle: "Starting from / USD",
    idealFor: "Ideal for converting an existing e-commerce store into a mobile app or launching a fast Android & iOS MVP.",
    timeline: "4 – 5 Weeks",
    features: [
      "Unified Android & iOS mobile app built with Flutter",
      "Modern Arabic & English UI/UX design (up to 15 screens)",
      "Sync with your existing website or essential cloud admin panel",
      "Instant Push Notifications + 1 payment gateway integration",
      "Google Play & App Store publishing + 3-month technical warranty",
    ],
    whatsappMsg: "Hello UNIQUE, I would like to inquire about the Starter MVP / Store App package (starting at $950).",
  },
  {
    id: "app-business",
    name: "Professional Business App",
    badge: "Most Popular",
    price: "1,850",
    cycle: "Starting from / USD",
    idealFor: "Built for companies, clinics, advanced stores, and custom booking or service apps requiring full branding.",
    isPopular: true,
    timeline: "6 – 8 Weeks",
    features: [
      "Custom Android & iOS app with interactive Figma UI/UX prototype",
      "Advanced web admin dashboard + scalable custom Backend API",
      "Multi-gateway payments (Mada, Apple Pay, Paymob, Fawry) & shipping",
      "OTP authentication, maps, reviews, and promo code engine",
      "App Store Optimization (ASO) + 100% source code ownership",
      "6-month technical warranty & full team onboarding",
    ],
    whatsappMsg: "Hello UNIQUE, I want a detailed quote for the Professional Business App package ($1,850+).",
  },
  {
    id: "app-enterprise",
    name: "Multi-Role Ecosystem & AI App",
    badge: "Delivery & Enterprise",
    price: "3,200",
    cycle: "Starting from / USD",
    idealFor: "For multi-app delivery platforms (Customer + Driver + Merchant), DRM EdTech, or ERP & AI integrations.",
    timeline: "8 – 12 Weeks",
    features: [
      "Multi-role app suite (Customer + Provider/Driver + Admin Portal)",
      "Live GPS tracking, in-app chat, digital wallet & automated payouts",
      "Custom AI assistant integration or DRM video protection",
      "High-availability cloud architecture & enterprise security hardening",
      "Full store launch, ASO & dedicated ongoing scaling support",
    ],
    whatsappMsg: "Hello UNIQUE, I would like to discuss a Multi-Role / Enterprise mobile app project ($3,200+).",
  },
];

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Tech & Budget",
    question: "Should I choose Flutter or separate Native Android & iOS apps?",
    answer:
      "For over 85% of commercial apps—including e-commerce, booking, clinics, and delivery—Flutter is the smartest choice because it delivers smooth 60 FPS performance on both Android and iOS from one codebase while cutting cost and time by up to 45%. We recommend Native Swift/Kotlin only for apps with heavy hardware or specialized real-time processing needs.",
  },
  {
    id: "faq-2",
    category: "Code Ownership",
    question: "Do I own 100% of the source code and store accounts after delivery?",
    answer:
      "Yes, 100%. We publish the app under your own official Google Play and Apple Developer accounts and deliver the entire Git source code (mobile app, backend APIs, and admin dashboard) with clear technical documentation and zero lock-in.",
  },
  {
    id: "faq-3",
    category: "Store Publishing",
    question: "Do you handle Google Play and Apple App Store review and publishing?",
    answer:
      "Absolutely. We prepare all store listings, screenshots, privacy policies, and technical builds, submit them to both stores, and resolve any Apple or Google review feedback until your app is live.",
  },
  {
    id: "faq-4",
    category: "Website Sync",
    question: "Can you connect the mobile app to my existing website or store?",
    answer:
      "Yes. We integrate directly with WooCommerce, Shopify, Salla, Zid, or custom backends via APIs so your products, pricing, inventory, customers, and orders stay synchronized in real time.",
  },
  {
    id: "faq-5",
    category: "Pricing & Milestones",
    question: "How is the final cost calculated and paid?",
    answer:
      "After a free discovery call, we send a written technical and financial proposal detailing every screen, integration, and timeline. Payments are split into transparent milestones tied to tangible deliverables (Design, Beta Build, and Live Launch).",
  },
  {
    id: "faq-6",
    category: "Post-Launch & Growth",
    question: "What happens after launch? Do you provide maintenance and ASO?",
    answer:
      "Every project includes a free post-launch technical warranty for bug fixes plus App Store Optimization (ASO) to drive organic downloads. We also offer optional maintenance retainers alongside SEO and social media growth campaigns.",
  },
];

const SEMANTIC_KEYWORDS: string[] = [
  "Mobile App Design & Development",
  "Android & iOS App Agency",
  "Flutter Cross-Platform Development",
  "React Native Mobile Engineering",
  "UI/UX Mobile Prototyping in Figma",
  "E-Commerce Mobile App Sync",
  "On-Demand Delivery & Booking Apps",
  "Mada, Apple Pay & Paymob Integration",
  "Google Play & App Store Publishing",
  "App Store Optimization (ASO)",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD — Service + OfferCatalog USD + FAQPage + Breadcrumb)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile App Design & Development (Android & iOS) — UNIQUE Digital Agency",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://www.uniquee-ws.com",
      telephone: "+201270506511",
    },
    serviceType: "Mobile Application Design & Development (Flutter, React Native, iOS, Android)",
    areaServed: ["EG", "SA", "AE", "KW"],
    url: "https://www.uniquee-ws.com/en/services/android",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile App Development Packages (USD)",
      itemListElement: APP_PACKAGES_USD.map((pkg) => ({
        "@type": "Offer",
        name: pkg.name,
        price: pkg.price.replace(/,/g, ""),
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
        name: "Mobile App Development",
        item: "https://www.uniquee-ws.com/en/services/android",
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
// MAIN PAGE COMPONENT — MOBILE APP DEVELOPMENT SERVICE PAGE (ENGLISH LTR)
// ============================================================================

export default function MobileAppsServiceEnPage() {
  const heroConsultWhatsapp = getWhatsAppUrl(
    "Hello UNIQUE Digital Agency! I have an Android & iOS mobile app project and would like a free consultation, timeline, and cost estimate."
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
                UNIQUE <span className="text-blue-400">Apps</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">
                Mobile App Design &amp; Engineering
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#solutions" className="hover:text-cyan-300 transition">
              App Solutions
            </a>
            <a href="#tech" className="hover:text-cyan-300 transition">
              Tech Stack
            </a>
            <a href="#integrations" className="hover:text-cyan-300 transition">
              Integrations
            </a>
            <a href="#roadmap" className="hover:text-cyan-300 transition">
              Process
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
              href="/services/android"
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
              <span>Free Consultation</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION + MOBILE ARCHITECTURE & TELEMETRY CARD
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
            <span className="text-cyan-300 font-semibold">Mobile App Design &amp; Development</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Android &amp; iOS • Flutter • React Native • Native</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">Egypt, Saudi Arabia &amp; UAE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.14] mb-6">
                Custom{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  Mobile App Development
                </span>{" "}
                Built for Speed, Retention &amp; Revenue
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                At <strong className="text-white">UNIQUE Digital Agency</strong>, we turn your
                product vision or online store into a 60 FPS Android &amp; iOS app — complete with{" "}
                <strong className="text-cyan-300">Figma UI/UX, cloud admin dashboards, local payment gateways</strong>,
                100% source code ownership, and end-to-end Google Play &amp; App Store launch.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "Unified Flutter/React Native codebase saving up to 45%",
                  "Mada, Apple Pay, STC Pay, Paymob & Fawry ready",
                  "100% source code & official store account ownership",
                  "Full Google Play & App Store publishing with ASO",
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
                  href={heroConsultWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Discuss Your App &amp; Get a Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <span>Explore App Packages</span>
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
                  Milestone Payments • Post-Launch Technical Warranty
                </span>
              </div>
            </div>

            {/* Hero Visual: Mobile Engineering & Store Readiness Telemetry */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-cyan-300">
                      App Architecture — Mobile Engineering Suite
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    iOS + Android
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Frame Rate</div>
                    <div className="text-xl font-black text-blue-400">60 FPS</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">Ultra-Smooth</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Stability</div>
                    <div className="text-xl font-black text-cyan-300">99.9%</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">Crash-Free</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Code Rights</div>
                    <div className="text-xl font-black text-amber-300">100%</div>
                    <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">Git Full Repo</div>
                  </div>
                </div>

                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-neutral-200 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      UNIQUE End-to-End Delivery Pipeline
                    </span>
                    <span className="text-[11px] text-emerald-400 font-bold">End-to-End</span>
                  </div>
                  {[
                    { step: "1. Interactive Figma UI/UX (RTL & LTR)", tag: "Approved" },
                    { step: "2. Flutter / React Native / Native Build", tag: "60 FPS" },
                    { step: "3. Backend APIs + Admin + Payment Gateways", tag: "Encrypted" },
                    { step: "4. Google Play & App Store Launch + ASO", tag: "Verified" },
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

      {/* ====================================================================
          3. 6 CORE MOBILE APP SOLUTIONS
      ==================================================================== */}
      <section id="solutions" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Industry-Tailored Solutions"
            title="6 Mobile App Categories We Engineer"
            highlight="for Performance & Scale"
            subtitle="From high-converting e-commerce apps and multi-role delivery platforms to clinics, academies, and investor-ready MVPs."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {SIX_APP_SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800/90 hover:border-blue-500/40 p-7 sm:p-8 flex flex-col justify-between transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      {sol.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300">
                      {sol.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-1">{sol.title}</h3>
                  <div className="text-xs font-semibold text-blue-400 mb-4">
                    {sol.subLabel}
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-5">{sol.summary}</p>

                  <div className="rounded-2xl bg-emerald-500/8 border border-emerald-500/25 p-3.5 mb-5">
                    <div className="text-[11px] font-extrabold text-emerald-300 mb-0.5">
                      Direct Business Impact:
                    </div>
                    <p className="text-xs text-neutral-200">{sol.impact}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {sol.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsAppUrl(sol.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-neutral-950 hover:bg-blue-600/20 border border-neutral-800 hover:border-blue-500/50 text-sm font-bold text-cyan-300 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request a Quote for This App Type</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. TECH STACK + MENA & GCC PAYMENT/SHIPPING INTEGRATIONS
      ==================================================================== */}
      <section id="tech" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Right Stack for Your Goals"
            title="Modern Mobile Engineering with"
            highlight="Flutter, React Native & Native"
            subtitle="We recommend the exact technology stack that balances your budget, launch speed, and long-term scaling roadmap."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {TECH_STACK_CARDS.map((tech, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-cyan-500/40 p-6 transition"
              >
                <span className="inline-block px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] font-bold text-amber-300 mb-3">
                  {tech.tag}
                </span>
                <h3 className="text-lg font-extrabold text-white mb-2">{tech.name}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">{tech.bestFor}</p>
                <ul className="space-y-2">
                  {tech.points.map((pt, i) => (
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
              badge="Ready for MENA & GCC Markets"
              title="Seamless Integrations with"
              highlight="Payments, Shipping, Maps & Push"
              subtitle="Your app launches ready to accept local payments and fulfill orders across Egypt, Saudi Arabia, UAE, and Kuwait."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {ECOSYSTEM_INTEGRATIONS.map((grp, idx) => (
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

      {/* ====================================================================
          5. 4 ENGINEERING GUARANTEES + 4-STAGE DELIVERY ROADMAP
      ==================================================================== */}
      <section id="roadmap" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="UNIQUE Engineering Commitments"
            title="4 Guarantees Protecting Your"
            highlight="Mobile App Investment"
            subtitle="Full transparency across UX design, clean source code, store approvals, and post-launch reliability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {UNIQUE_4_APP_GUARANTEES.map((tbl) => (
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
            badge="Agile Delivery Process"
            title="From Idea to Live App Stores"
            highlight="in 4 Clear Milestones"
            subtitle="Test real weekly builds directly on your phone from early prototype through Google Play & App Store launch."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERY_ROADMAP.map((ph) => (
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
          6. TRANSPARENT STARTING PACKAGES IN USD
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Milestone-Based Tiers"
            title="Mobile App Development Packages"
            highlight="in US Dollars ($)"
            subtitle="Clear starting ranges to help you budget—followed by a tailored written technical proposal for your exact scope."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {APP_PACKAGES_USD.map((pkg) => (
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
                    <span className="text-xs font-bold text-amber-300">{pkg.timeline}</span>
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
                  <span>Request {pkg.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. FAQ ACCORDION + SEMANTIC CLOUD
      ==================================================================== */}
      <section id="faq" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Everything You Should Know Before"
            highlight="Building Your Mobile App"
            subtitle="Clear answers on Flutter vs. Native, 100% source code ownership, store approvals, and milestone payments."
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
                <span>Semantic Coverage of UNIQUE Mobile App Services</span>
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
          8. FINAL CTA & FOOTER
      ==================================================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B1730] via-[#070D1A] to-[#051418] border border-blue-500/35 p-8 sm:p-12 lg:p-14 text-center shadow-2xl shadow-blue-950/50">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Technical Discovery &amp; Cost Estimate Within 24 Hours</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Ready to Launch Your App on{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Google Play &amp; the App Store?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              Share your app idea or store URL on WhatsApp today and receive a clear technical
              proposal covering the ideal stack, milestone timeline, and transparent budget.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroConsultWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Book Your Free App Consultation</span>
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
              © {new Date().getFullYear()} UNIQUE Digital Agency — Mobile App Design &amp; Development (Android &amp; iOS).
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/services/android" className="hover:text-cyan-300 transition">
                تطبيقات الجوال (AR)
              </Link>
              <Link href="/en/services/wordpress-nextjs" className="hover:text-cyan-300 transition">
                WordPress &amp; Next.js
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