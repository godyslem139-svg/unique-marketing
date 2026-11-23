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

function ArrowUpLeft({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 17 7 7" />
      <path d="M7 17V7h10" />
    </svg>
  );
}

function ArrowLeft({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ChevronLeft({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
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
// NEXT.JS METADATA — WORDPRESS & NEXT.JS WEB DESIGN SERVICE (ARABIC RTL)
// ============================================================================

export const metadata: Metadata = {
  title:
    "تصميم مواقع WordPress و Next.js احترافية | سرعة +99 وجاهزية SEO — UNIQUE",
  description:
    "شركة متخصصة في تصميم وبرمجة مواقع WordPress وNext.js وHeadless CMS في مصر والسعودية والإمارات. مقارنة شاملة بين التقنيتين، سرعة Core Web Vitals +98، ربط بوابات الدفع العربية، وباقات شفافة تبدأ من $220.",
  keywords: [
    "تصميم مواقع WordPress و Next.js",
    "شركة تصميم مواقع ووردبريس",
    "شركة تطوير مواقع Next.js",
    "الفرق بين WordPress و Next.js",
    "تحويل موقع ووردبريس إلى Next.js",
    "تصميم موقع Next.js + Sanity CMS",
    "تصميم متجر WooCommerce سريع",
    "Headless WordPress Next.js",
    "اسعار تصميم مواقع ووردبريس و Next.js",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/services/wordpress-nextjs",
    languages: {
      ar: "https://www.uniquee-ws.com/services/wordpress-nextjs",
      en: "https://www.uniquee-ws.com/en/services/wordpress-nextjs",
      "x-default": "https://www.uniquee-ws.com/services/wordpress-nextjs",
    },
  },
  openGraph: {
    title: "تصميم مواقع WordPress و Next.js — UNIQUE Digital Agency",
    description:
      "نبني مواقع WordPress نظيفة وسريعة ومنصات Next.js 16 فائقة الأداء مع لوحة تحكم Sanity CMS وملكية كاملة 100%.",
    url: "https://www.uniquee-ws.com/services/wordpress-nextjs",
    siteName: "UNIQUE Digital Agency",
    locale: "ar_EG",
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
  enTitle: string;
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
// DATA ARRAYS — WORDPRESS & NEXT.JS ENGINEERING
// ============================================================================

const HERO_KPIS: HeroKpi[] = [
  {
    id: "speed",
    value: "99/100",
    title: "أداء Core Web Vitals خارق",
    subtitle: "تحميل أقل من ثانية في Next.js وأقل من 1.5 ثانية في WordPress النظيف على الموبايل.",
    accent: "emerald",
  },
  {
    id: "seo-geo",
    value: "SEO + AI",
    title: "جاهزية جوجل وChatGPT وWebMCP",
    subtitle: "بنية SSR، بيانات Schema JSON-LD، وملف llms.txt مدمجة في أساس الموقع من اليوم الأول.",
    accent: "cyan",
  },
  {
    id: "ownership",
    value: "100%",
    title: "ملكية كاملة للكود والدومين",
    subtitle: "تستلم الدومين باسمك، لوحة التحكم الكاملة، ومستودع الكود (GitHub) بدون أي احتكار.",
    accent: "blue",
  },
  {
    id: "price",
    value: "تبدأ من $220",
    title: "باقات واضحة بالدولار الأمريكي",
    subtitle: "3 باقات مرنة تشمل الدومين والاستضافة وشهادة SSL وربط بوابات الدفع العربية والعالمية.",
    accent: "amber",
  },
];

const WP_VS_NEXTJS_COMPARISON: ComparisonRow[] = [
  {
    criterion: "سرعة التحميل (LCP على الموبايل)",
    nextjs: "الأسرع عالمياً (0.6 – 1.0 ثانية) مع Server Components وEdge CDN",
    wordpress: "سريعة ومستقرة (1.3 – 1.8 ثانية) عند بنائها بكود نظيف بدون إضافات ثقيلة",
    headless: "سرعة Next.js الفائقة في الواجهة + سهولة لوحة WordPress في الخلفية",
  },
  {
    criterion: "الأمان والحماية من الاختراق",
    nextjs: "أعلى مستوى أمان (لا قواعد بيانات مكشوفة ولا ثغرات إضافات تقليدية)",
    wordpress: "آمنة جداً مع إعدادات الحماية، SSL، والتحديثات والنسخ الاحتياطي الدوري",
    headless: "عزل كامل بين الواجهة العامة ولوحة الإدارة لحماية قصوى",
  },
  {
    criterion: "قوة السيو والظهور في AI (SEO & GEO)",
    nextjs: "استثنائية — SSR/ISR + Metadata ديناميكي + JSON-LD + WebMCP + llms.txt",
    wordpress: "ممتازة مع ضبط Schema وSitemap وهيكلة العناوين وسرعة الموبايل",
    headless: "تجمع قوة Next.js التقنية مع سهولة نشر المقالات في WordPress",
  },
  {
    criterion: "سهولة إدارة المحتوى والمنتجات",
    nextjs: "لوحة Sanity CMS عصرية وسريعة جداً بالعربي والإنجليزي (بلا تعقيد)",
    wordpress: "لوحة تحكم ووردبريس الشهيرة والمألوفة لأغلب فرق التسويق والمحتوى",
    headless: "نفس لوحة WordPress المعتادة لفريقك مع واجهة React/Next.js حديثة",
  },
  {
    criterion: "بوابات الدفع والشحن العربية",
    nextjs: "ربط API مباشر مع Paymob، مدى، ميسر، Stripe، فوري، وبوسطة",
    wordpress: "ربط فوري عبر WooCommerce مع Paymob، فوري، فاليو، مدى، أرامكس، وبوسطة",
    headless: "تكامل APIs مرن لمتاجر Enterprise متعددة العملات واللغات",
  },
  {
    criterion: "الأنسب لأي نوع مشاريع؟",
    nextjs: "العقارات، السياحة متعددة اللغات، الشركات الكبرى، المنصات والسيو التنافسي",
    wordpress: "مواقع الشركات التعريفية، العيادات، المدونات، ومتاجر WooCommerce السريعة",
    headless: "المواقع الإخبارية والمدونات الضخمة التي تريد تحديث الواجهة دون فقدان WordPress",
  },
];

const THREE_DEV_TRACKS: DevTrack[] = [
  {
    id: "wordpress-pro",
    number: "01",
    badge: "المرونة وسرعة الإطلاق",
    title: "تصميم مواقع ومتاجر WordPress & WooCommerce الاحترافية",
    enTitle: "Clean, Fast WordPress & WooCommerce Engineering",
    summary:
      "نبتعد تماماً عن القوالب الثقيلة المليئة بـ 40 إضافة تُبطئ موقعك. نبني لك موقع WordPress أو متجر WooCommerce نظيفاً وسريعاً بهوية بصرية مخصصة، سهل الإدارة لفريقك، ومربوطاً ببوابات الدفع والشحن في مصر والخليج.",
    bestFor: "مثالي لمواقع الشركات التعريفية، العيادات الطبية، المكاتب الاستشارية، ومتاجر WooCommerce.",
    techStack: ["WordPress Latest", "WooCommerce", "Clean Custom Theme", "WebP/AVIF", "Redis Cache", "Paymob / Mada"],
    features: [
      "تصميم UI/UX مخصص يناسب هوية علامتك التجارية بدون قوالب مكررة",
      "أداء عالي وسرعة تحميل ممتازة على الموبايل مع ضغط الصور والتخزين المؤقت",
      "ربط كامل مع Paymob، فوري، مدى، فاليو، وبوسطة وأرامكس للمتاجر",
      "حماية متقدمة ضد الاختراق + شهادة SSL + نسخ احتياطي تلقائي دوري",
      "تدريب عملي مصوّر لفريقك على إضافة الصفحات والمقالات والمنتجات بسهولة",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تصميم موقع أو متجر احترافي على WordPress ومعرفة التفاصيل.",
  },
  {
    id: "nextjs-modern",
    number: "02",
    badge: "السرعة القصوى والجيل الجديد",
    title: "برمجة مواقع ومنصات Next.js 16 + Sanity CMS",
    enTitle: "Next.js App Router + TypeScript + Sanity CMS",
    summary:
      "التقنية التي تستخدمها أكبر الشركات العالمية (ونبني بها موقع UNIQUE نفسه). تمنحك سرعة تصفح لحظية (+98 في Lighthouse)، أماناً فائقاً، تعدد لغات سلساً حتى 7 لغات، وتفوقاً حاسماً في تصدر جوجل ومحركات الذكاء الاصطناعي.",
    bestFor: "مثالي لشركات العقارات، السياحة والغوص، المصانع المصدّرة، الوكالات، والمنصات المخصصة.",
    techStack: ["Next.js 16 App Router", "React & TypeScript", "Tailwind CSS", "Sanity v3 CMS", "Vercel Edge CDN", "WebMCP & llms.txt"],
    features: [
      "Server-Side Rendering (SSR) وISR لسرعة فورية وفهرسة مثالية في جوجل",
      "لوحة تحكم Sanity CMS عربية/إنجليزية عصرية لإدارة المقالات والمشاريع لحظياً",
      "دعم كامل لتعدد اللغات (RTL عربي / LTR إنجليزي / لغات أوروبية) مع Hreflang",
      "توليد تلقائي لـ Schema JSON-LD وDynamic Sitemaps وملف llms.txt للذكاء الاصطناعي",
      "استضافة سحابية عالمية Edge CDN تتحمل ملايين الزيارات بدون توقف",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد بناء موقع احترافي سريع بتقنية Next.js + Sanity CMS.",
  },
  {
    id: "headless-migration",
    number: "03",
    badge: "الترحيل الآمن والحل الهجين",
    title: "تحويل WordPress إلى Next.js أو بناء Headless CMS",
    enTitle: "Zero-SEO-Loss Migration & Headless Architecture",
    summary:
      "هل لديك موقع WordPress حالي بطيء ويخسر زواراً وعملاء؟ نعيد بناءه بواجهة Next.js فائقة السرعة (مع الإبقاء على WordPress أو الانتقال إلى Sanity) مع خريطة تحويلات 301 Redirects دقيقة تحفظ 100% من ترتيبك الحالي في جوجل.",
    bestFor: "مثالي للمواقع القائمة ذات الأرشفة القديمة التي تعاني من البطء وتريد قفزة في السرعة والترتيب.",
    techStack: ["Headless WP / GraphQL", "Next.js Frontend", "301 Redirect Map", "GSC Migration Audit", "Core Web Vitals 99"],
    features: [
      "جرد كامل لجميع الروابط المؤرشفة والباك لينكس القوية قبل الترحيل",
      "بناء خريطة 301 Redirects تحمي كل رابط قديم من أخطاء 404",
      "نقل كافة المقالات والصور والبيانات الوصفية (Meta & Alt) بأمان تام",
      "قفزة فورية في سرعة Core Web Vitals ومعدل التحويل على الموبايل",
      "متابعة لصيقة في Google Search Console بعد الإطلاق لضمان استقرار وصعود الترتيب",
    ],
    whatsappMsg: "مرحباً UNIQUE، لدي موقع WordPress حالي وأريد تحويله إلى Next.js بدون خسارة السيو.",
  },
];

const WEB_PACKAGES: WebPackage[] = [
  {
    id: "web-basic",
    tierEn: "STARTER WEBSITE PACKAGE",
    title: "الباقة الأساسية لتصميم المواقع",
    subtitle: "مثالية للشركات الناشئة والمكاتب — انطلاقة سريعة واحترافية",
    image: "/basic.webp",
    badge: "Starter • حتى 5 صفحات",
    price: "220",
    oldPrice: "290",
    features: [
      "حجز الدومين والاستضافة + شهادة الأمان SSL",
      "تصميم موقع احترافي متجاوب مع الهواتف والكمبيوتر",
      "إنشاء حتى 5 صفحات رئيسية (الرئيسية، من نحن، الخدمات، اتصل بنا)",
      "نموذج تواصل مباشر + ربط واتساب والسوشيال ميديا",
      "إعدادات SEO الأساسية + Google Search Console + خريطة Google Maps",
      "لوحة تحكم سهلة لإدارة محتوى الموقع",
    ],
  },
  {
    id: "web-professional",
    tierEn: "BUSINESS PACKAGE",
    title: "الباقة الاحترافية لتصميم المواقع",
    subtitle: "الأكثر طلباً للشركات الساعية لتصدر جوجل وتحقيق مبيعات مستمرة",
    image: "/professional.webp",
    badge: "الأكثر طلباً • حتى 12 صفحة",
    price: "290",
    oldPrice: "380",
    isPopular: true,
    features: [
      "جميع مميزات الباقة الأساسية + تصميم UI/UX مخصص لهوية شركتك",
      "إنشاء حتى 12 صفحة + مدونة مقالات (Blog) + معرض أعمال (Portfolio)",
      "تحسين SEO الداخلي (On-Page SEO) + سرعة التحميل وضغط الصور",
      "ربط Google Analytics 4 وتتبع نماذج التواصل وصفحات الهبوط",
      "إعداد حماية الموقع والنسخ الاحتياطي التلقائي",
      "تدريب العميل على إدارة الموقع + دعم فني بعد التسليم",
    ],
  },
  {
    id: "web-premium",
    tierEn: "PREMIUM PACKAGE",
    title: "الباقة المتقدمة (Next.js / متجر متكامل)",
    subtitle: "للشركات الكبرى والمتاجر المتكاملة وتعدد اللغات والربط البرمجي",
    image: "/Premium.webp",
    badge: "Premium • 25+ صفحة",
    price: "365",
    oldPrice: "490",
    isPremium: true,
    features: [
      "تصميم UI/UX مخصص بالكامل + حتى 25 صفحة أو أكثر حسب الاتفاق",
      "متجر إلكتروني متكامل أو منصة Next.js + Sanity CMS فائقة السرعة",
      "ربط بوابات الدفع الإلكتروني والشحن + دعم تعدد اللغات",
      "سيو تقني متقدم (Technical SEO) + Schema Markup + Core Web Vitals",
      "ربط أنظمة CRM أو واجهات API وأنظمة الحجز وطلب الخدمات",
      "اختبار شامل قبل الإطلاق + تدريب كامل + أولوية دعم فني وصيانة",
    ],
  },
];

const QUALITY_4_TABLES: QualityTable[] = [
  {
    id: "q-speed",
    title: "1. معيار السرعة والأداء (Core Web Vitals)",
    badge: "PageSpeed 98+",
    items: [
      "تحسين LCP وINP وCLS لأعلى تقييم في Google Lighthouse",
      "تحويل الصور تلقائياً إلى WebP / AVIF مع التحميل الكسول Lazy Loading",
      "كود نظيف بدون مكتبات زائدة أو سكريبتات تبطئ التصفح على 4G",
      "تفعيل التخزين المؤقت وشبكات توزيع المحتوى Edge CDN",
    ],
  },
  {
    id: "q-seo",
    title: "2. التجهيز للسيو والذكاء الاصطناعي (SEO & GEO)",
    badge: "Google & AI Ready",
    items: [
      "هيكلة عناوين H1–H3 نظيفة وروابط URLs صديقة لمحركات البحث",
      "تضمين بيانات Schema JSON-LD وملفات Sitemap وRobots.txt",
      "إمكانية إضافة ملف llms.txt وتقنية WebMCP لوكلاء الذكاء الاصطناعي",
      "ربط كامل مع Google Search Console وGoogle Analytics GA4",
    ],
  },
  {
    id: "q-security",
    title: "3. الأمان والملكية الكاملة 100%",
    badge: "Zero Lock-In",
    items: [
      "تسجيل الدومين والاستضافة باسمك وبياناتك الرسمية",
      "تفعيل HTTPS / SSL وحماية النماذج والواجهات البرمجية",
      "نسخ احتياطي تلقائي لقاعدة البيانات والملفات",
      "تسليم كامل الكود وصلاحيات الإدارة مع جلسة تدريب مصوّرة",
    ],
  },
  {
    id: "q-ux",
    title: "4. تجربة المستخدم والتحويل (UI/UX & CRO)",
    badge: "Mobile-First",
    items: [
      "تصميم مخصص يبرز هوية علامتك التجارية ويبني الثقة فوراً",
      "تجاوب مثالي مع كل مقاسات الشاشات (موبايل، تابلت، ديسكتوب)",
      "مسار تواصل مباشر عبر واتساب الذكي ونماذج طلب عروض الأسعار",
      "اختبار شامل لكل الصفحات والنماذج وبوابات الدفع قبل التسليم",
    ],
  },
];

const UNIQUE_PORTFOLIO: { name: string; stack: string }[] = [
  { name: "ذا لايت هاوس (The Light House)", stack: "Next.js + Sanity CMS — 7 لغات" },
  { name: "منصة UNIQUE الرسمية", stack: "Next.js 16 + Sanity + WebMCP + llms.txt" },
  { name: "موقع رنين التجاري (Raneen)", stack: "متجر إلكتروني متكامل فائق السرعة" },
  { name: "بوابة الرياض للدليل والخدمات", stack: "منصة خدمات متصدرة لجوجل" },
  { name: "البدر للعقارات والاستثمار", stack: "بوابة تطوير وتسويق عقاري" },
  { name: "مؤسسة المملكة للمقاولات", stack: "موقع شركات احترافي — الخليج" },
];

const DELIVERY_4_PHASES: DeliveryPhase[] = [
  {
    num: "01",
    timeframe: "اليوم 1 – 3",
    title: "اختيار التقنية وتخطيط البنية",
    desc: "نحلل أهداف مشروعك ونحدد الأنسب (WordPress أم Next.js أم Headless) مع رسم خريطة الصفحات والكلمات المفتاحية.",
    output: "وثيقة نطاق العمل + خريطة الموقع المعتمدة",
  },
  {
    num: "02",
    timeframe: "اليوم 4 – 8",
    title: "تصميم واجهة المستخدم (UI/UX)",
    desc: "نصمم واجهة عصرية فخمة تعكس هوية علامتك التجارية مع تركيز كامل على تجربة الموبايل وسهولة التحويل.",
    output: "تصميم UI/UX معتمد وجاهز للبرمجة",
  },
  {
    num: "03",
    timeframe: "اليوم 9 – 16",
    title: "التطوير، CMS، الدفع والسيو التقني",
    desc: "نبرمج الموقع بكود نظيف وسريع، نربط لوحة التحكم وبوابات الدفع، ونطبق كامل معايير SEO وSchema وCore Web Vitals.",
    output: "رابط معاينة حي (Staging) للمراجعة",
  },
  {
    num: "04",
    timeframe: "اليوم 17 – 21",
    title: "الاختبار، الإطلاق والتسليم الكامل",
    desc: "نجري اختبارات السرعة والأمان، نطلق الموقع على دومينك الرسمي، ونسلمك كامل الصلاحيات مع التدريب والدعم الفني.",
    output: "موقعك حي ومؤرشف بملكية 100%",
  },
];

const CHATGPT_QA_LIST: ChatGptQA[] = [
  {
    tag: "قرار التقنية",
    q: "متى أختار WordPress ومتى أختار Next.js لموقع شركتي في 2026؟",
    a: "اختر WordPress إذا كنت تريد إطلاقاً سريعاً بميزانية اقتصادية ولوحة تحكم مألوفة لمدونة أو موقع تعريفي أو متجر WooCommerce متوسط. أما إذا كنت تستهدف أقصى سرعة (99/100)، أماناً مؤسسياً عالياً، تعدد لغات احترافياً، وتفوقاً في تصدر كلمات بحث عالية المنافسة — فـ Next.js + Sanity CMS هو الخيار الأفضل والأطول عمراً.",
  },
  {
    tag: "الترحيل الآمن",
    q: "هل يمكن تحويل موقعي الحالي من WordPress إلى Next.js بدون فقدان ترتيبي في جوجل؟",
    a: "نعم بالتأكيد. نقوم باستخراج جميع الروابط المؤرشفة وبناء خريطة 301 Redirects دقيقة مع نقل كامل المحتوى والـ Metadata والـ Schema، وغالباً ما يرتفع ترتيب الموقع بعد الترحيل بفضل القفزة الكبيرة في سرعة Core Web Vitals.",
  },
  {
    tag: "إدارة المحتوى في Next.js",
    q: "إذا صممت موقعي بـ Next.js هل سأحتاج لمبرمج كلما أردت تعديل نص أو إضافة مقال؟",
    a: "إطلاقاً! نربط موقع Next.js بلوحة تحكم Sanity CMS (أو Headless WordPress) عربية وسهلة جداً تتيح لك تعديل النصوص والصور ونشر المقالات والمنتجات في ثوانٍ بدون كتابة سطر كود واحد.",
  },
  {
    tag: "الأسعار والملكية",
    q: "كم تكلفة تصميم موقع WordPress أو Next.js وهل أمتلك الكود بالكامل؟",
    a: "تبدأ باقاتنا الشفافة من $220 للباقة الأساسية و$290 للاحترافية و$365 للمتقدمة (تشمل الدومين والاستضافة وSSL)، ومع التسليم تمتلك 100% من الدومين ولوحة التحكم وملفات الكود بدون أي قيود.",
  },
];

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "الاختيار التقني",
    question: "لا أعرف أيهما أنسب لمشروعي: WordPress أم Next.js — هل تساعدونني في الاختيار؟",
    answer:
      "بالتأكيد. نقدم لك استشارة فنية مجانية عبر واتساب نفهم فيها نشاطك وميزانيتك وأهدافك التسويقية، ونرشح لك بكل أمانة التقنية التي تحقق لك أعلى عائد بدون تحميلك تكلفة تقنية لا تحتاجها.",
  },
  {
    id: "faq-2",
    category: "السرعة والسيو",
    question: "هل مواقع WordPress التي تصممونها بطيئة مثل المواقع التقليدية؟",
    answer:
      "لا، بطء مواقع WordPress التقليدية ينتج عن سوء التنفيذ وكثرة الإضافات العشوائية. نحن نبني WordPress بقوالب نظيفة وخفيفة وضغط صور WebP وتخزين مؤقت احترافي لتحقيق سرعة عالية جداً وتوافق كامل مع جوجل.",
  },
  {
    id: "faq-3",
    category: "تعدد اللغات",
    question: "هل تدعمون تصميم المواقع باللغتين العربية والإنجليزية أو أكثر؟",
    answer:
      "نعم، سواء على WordPress أو Next.js نبني مواقع متعددة اللغات بدعم كامل لاتجاه القراءة RTL/LTR وضبط وسوم Hreflang لضمان تصدر كل لغة في بلدها المستهدف.",
  },
  {
    id: "faq-4",
    category: "الدومين والاستضافة",
    question: "هل السعر يشمل الدومين والاستضافة وهل يمكن استضافة Next.js بتكلفة منخفضة؟",
    answer:
      "نعم، باقاتنا تشمل الدومين والاستضافة وشهادة SSL، ومواقع Next.js نستضيفها على بنية سحابية حديثة (مثل Vercel Edge) توفر سرعة عالمية وأماناً عالياً بتكلفة تشغيل اقتصادية جداً.",
  },
  {
    id: "faq-5",
    category: "الدعم والصيانة",
    question: "هل يوجد دعم فني وتدريب بعد تسليم الموقع؟",
    answer:
      "نعم، نسلمك فيديو تدريبياً وجلسة شرح مباشرة لإدارة الموقع، بالإضافة إلى فترة دعم فني وصيانة مجانية بعد الإطلاق لضمان استقرار موقعك.",
  },
];

const SEMANTIC_KEYWORDS: string[] = [
  "تصميم مواقع WordPress و Next.js",
  "شركة تصميم مواقع ووردبريس احترافية",
  "شركة برمجة وتطوير مواقع Next.js",
  "الفرق بين WordPress و Next.js في السيو",
  "تصميم موقع Next.js + Sanity CMS",
  "تحويل موقع ووردبريس إلى Next.js بأمان",
  "Headless WordPress مع Next.js",
  "تصميم متجر WooCommerce سريع",
  "تحسين سرعة Core Web Vitals 99",
  "مواقع شركات ومتاجر متعددة اللغات",
  "شركة تطوير ويب في مصر والسعودية والإمارات",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD — Service + OfferCatalog USD + FAQPage + Breadcrumb)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "تصميم وتطوير مواقع WordPress و Next.js — UNIQUE Digital Agency",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://www.uniquee-ws.com",
      telephone: "+201270506511",
    },
    serviceType: "WordPress & Next.js Web Development",
    areaServed: ["EG", "SA", "AE", "KW"],
    url: "https://www.uniquee-ws.com/services/wordpress-nextjs",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "باقات تصميم مواقع WordPress و Next.js",
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
        name: "الرئيسية",
        item: "https://www.uniquee-ws.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "تصميم مواقع WordPress و Next.js",
        item: "https://www.uniquee-ws.com/services/wordpress-nextjs",
      },
    ],
  },
];
// ============================================================================
// REUSABLE SECTION HEADER COMPONENT (RTL)
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
        <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
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
// MAIN PAGE COMPONENT — WORDPRESS & NEXT.JS SERVICE PAGE (ARABIC RTL)
// ============================================================================

export default function WordPressNextjsPage() {
  const heroWhatsapp = getWhatsAppUrl(
    "مرحباً UNIQUE Digital Agency! أريد استشارة مجانية لاختيار وتصميم موقع على WordPress أو Next.js."
  );

  return (
    <div
      dir="rtl"
      lang="ar"
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
          <Link href="/" className="flex items-center gap-3 group">
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
                هندسة مواقع WordPress و Next.js
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#comparison" className="hover:text-cyan-300 transition">
              المقارنة التقنية
            </a>
            <a href="#tracks" className="hover:text-cyan-300 transition">
              مسارات التطوير
            </a>
            <a href="#packages" className="hover:text-cyan-300 transition">
              الباقات والأسعار
            </a>
            <a href="#quality" className="hover:text-cyan-300 transition">
              معايير التسليم
            </a>
            <a href="#phases" className="hover:text-cyan-300 transition">
              مراحل العمل
            </a>
            <a href="#faq" className="hover:text-cyan-300 transition">
              الأسئلة الشائعة
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/en/services/wordpress-nextjs"
              className="px-3.5 py-2 rounded-xl border border-neutral-800 bg-neutral-950 hover:border-cyan-500/50 text-xs font-bold text-neutral-200 hover:text-cyan-300 transition"
            >
              English
            </Link>
            <a
              href={heroWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-l from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>استشارة مجانية</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION + LIVE SPEED BENCHMARK DUEL (WP VS NEXT.JS)
      ==================================================================== */}
      <section className="relative overflow-hidden pt-14 pb-20 lg:pt-24 lg:pb-28 border-b border-neutral-900">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-1/4 w-[540px] h-[540px] rounded-full bg-blue-600/12 blur-[150px]" />
          <div className="absolute top-20 left-1/4 w-[460px] h-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[560px] h-[300px] rounded-full bg-emerald-500/8 blur-[130px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link href="/" className="hover:text-cyan-300 transition">
              الرئيسية
            </Link>
            <ChevronLeft className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-cyan-300 font-semibold">تصميم مواقع WordPress و Next.js</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>WordPress &amp; WooCommerce</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">Next.js 16 + Sanity CMS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.18] mb-6">
                تصميم وبرمجة مواقع{" "}
                <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  WordPress و Next.js
                </span>{" "}
                بأقصى سرعة وجاهزية لتصدر جوجل
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                في <strong className="text-white">UNIQUE Digital Agency</strong> نجمع بين
                مرونة وسهولة <strong className="text-blue-300">WordPress النظيف</strong> وبين
                السرعة الخارقة والأمان المؤسسي لتقنية{" "}
                <strong className="text-cyan-300">Next.js + Sanity CMS</strong> — لنختار معك
                الهندسة الأنسب لمشروعك في مصر والخليج، ونبني لك موقعاً سريعاً يبيع ويتصدر محركات
                البحث والذكاء الاصطناعي.
              </p>

              {/* Trust Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "سرعة تحميل +98 في Next.js و+94 في WordPress",
                  "تحويل آمن من WordPress إلى Next.js بدون خسارة سيو",
                  "ربط Paymob، فوري، مدى، ميسر، Stripe وبوسطة",
                  "ملكية كاملة 100% للكود والدومين ولوحة التحكم",
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
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>اختر التقنية المناسبة مع خبرائنا</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <span>شاهد الباقات ($220 – $365)</span>
                  <ArrowLeft className="w-4 h-4 text-cyan-400" />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  واتساب: <strong className="text-neutral-200" dir="ltr">{WHATSAPP_PRIMARY}</strong> /{" "}
                  <strong className="text-cyan-300" dir="ltr">{WHATSAPP_SECONDARY}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  دومين + استضافة + SSL + تدريب ودعم فني
                </span>
              </div>
            </div>

            {/* Hero Visual: Live Benchmark Duel (Next.js vs Clean WordPress) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-cyan-300">
                      مقياس الأداء الحي — UNIQUE Architecture
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    Core Web Vitals ✓
                  </span>
                </div>

                {/* Next.js Card */}
                <div className="rounded-2xl bg-gradient-to-l from-blue-600/15 via-cyan-500/10 to-neutral-950 border border-cyan-500/40 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-black text-white flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      Next.js 16 + Sanity CMS
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black" dir="ltr">
                      99 / 100
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2">
                      <div className="text-[10px] text-neutral-500">LCP</div>
                      <div className="text-sm font-black text-emerald-400" dir="ltr">0.7s</div>
                    </div>
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2">
                      <div className="text-[10px] text-neutral-500">SEO</div>
                      <div className="text-sm font-black text-cyan-300" dir="ltr">100</div>
                    </div>
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2">
                      <div className="text-[10px] text-neutral-500">الأمان</div>
                      <div className="text-sm font-black text-amber-300">Enterprise</div>
                    </div>
                  </div>
                </div>

                {/* Clean WordPress Card */}
                <div className="rounded-2xl bg-neutral-950 border border-blue-500/30 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-black text-white flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-blue-400" />
                      WordPress النظيف (بمعيار UNIQUE)
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-black" dir="ltr">
                      94 / 100
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2">
                      <div className="text-[10px] text-neutral-500">LCP</div>
                      <div className="text-sm font-black text-emerald-400" dir="ltr">1.4s</div>
                    </div>
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2">
                      <div className="text-[10px] text-neutral-500">SEO</div>
                      <div className="text-sm font-black text-cyan-300" dir="ltr">98</div>
                    </div>
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2">
                      <div className="text-[10px] text-neutral-500">الإطلاق</div>
                      <div className="text-sm font-black text-blue-300">7 أيام</div>
                    </div>
                  </div>
                </div>

                {/* AI & Modern Readiness Badges */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4">
                  <div className="text-xs font-bold text-neutral-300 mb-2.5">
                    مزايا مدمجة في مواقعنا لعام 2026:
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
            badge="دليل اتخاذ القرار الصحيح"
            title="مقارنة هندسية شاملة:"
            highlight="Next.js مقابل WordPress مقابل Headless"
            subtitle="نساعدك تختار التقنية التي تناسب أهدافك وميزانيتك بدون أي تحيّز أو تكاليف غير ضرورية."
          />

          <div className="overflow-x-auto rounded-3xl border border-neutral-800 bg-[#060911]">
            <table className="w-full text-right border-collapse min-w-[780px]">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-950/90">
                  <th className="py-5 px-6 text-xs font-extrabold text-neutral-400">معيار المقارنة</th>
                  <th className="py-5 px-6 text-xs font-extrabold text-cyan-300 bg-blue-500/10">
                    Next.js 16 + Sanity CMS
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold text-emerald-300">
                    WordPress / WooCommerce النظيف
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold text-amber-300">
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
            badge="هندسة برمجية متخصصة"
            title="3 مسارات احترافية لتطوير"
            highlight="مواقع WordPress و Next.js في UNIQUE"
            subtitle="سواء كنت تبدأ من الصفر أو تطور موقعاً قائماً — لدينا المسار الهندسي الدقيق لاحتياجك."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {THREE_DEV_TRACKS.map((tr) => (
              <div
                key={tr.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-blue-500/50 p-7 flex flex-col justify-between transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-3xl font-black bg-gradient-to-l from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      {tr.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300">
                      {tr.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1.5">
                    {tr.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-400 mb-4" dir="ltr">
                    {tr.enTitle}
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-5">{tr.summary}</p>

                  <div className="rounded-2xl bg-emerald-500/8 border border-emerald-500/25 p-3.5 mb-5">
                    <div className="text-[11px] font-extrabold text-emerald-300 mb-0.5">
                      الأنسب لمن؟
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
                  <span>اطلب هذا المسار عبر واتساب</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. OFFICIAL WEB DESIGN PACKAGES ($220 / $290 / $365) WITH POSTERS
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="باقات تصميم المواقع الرسمية"
            title="أسعار وباقات تصميم مواقع"
            highlight="WordPress و Next.js بالدولار ($)"
            subtitle="باقات واضحة تشمل الدومين والاستضافة وشهادة SSL وملكية كاملة 100% بدون مصاريف خفية."
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
                      className={`absolute top-4 start-4 inline-flex items-center gap-1.5 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg z-10 ${
                        pkg.isPremium
                          ? "bg-gradient-to-l from-amber-500 to-yellow-400 text-black"
                          : pkg.isPopular
                          ? "bg-gradient-to-l from-blue-600 to-cyan-500 text-white"
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
                        dir="ltr"
                        className={`text-[11px] font-black tracking-widest uppercase mb-1.5 text-right ${
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
                            dir="ltr"
                            className={`text-3xl font-black ${
                              pkg.isPremium ? "text-amber-300" : "text-cyan-300"
                            }`}
                          >
                            ${pkg.price}
                          </span>
                          <span className="text-xs text-neutral-400 font-semibold">
                            دولار / تدفع مرة واحدة
                          </span>
                          <span dir="ltr" className="text-sm text-neutral-500 line-through ms-auto">
                            ${pkg.oldPrice}
                          </span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px]">
                          <span className="text-emerald-400 font-bold">
                            ✓ دومين + استضافة + شهادة SSL
                          </span>
                          <span className="text-neutral-400">ملكية 100%</span>
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
                        `مرحباً UNIQUE، أرغب في حجز ${pkg.title} ($${pkg.price}) ومناقشة اختيار WordPress أو Next.js.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl font-extrabold text-sm transition-all duration-300 shadow-lg ${
                        pkg.isPremium
                          ? "bg-gradient-to-l from-amber-500 via-yellow-400 to-amber-400 hover:from-amber-400 hover:to-yellow-300 text-black shadow-amber-500/25"
                          : pkg.isPopular
                          ? "bg-gradient-to-l from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-blue-600/30"
                          : "bg-blue-600 hover:bg-blue-500 text-white"
                      }`}
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>احجز الباقة عبر واتساب</span>
                      <ArrowUpLeft className="w-4 h-4" />
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
            badge="معيار التسليم الهندسي"
            title="4 قوائم فحص جودة نلتزم بها"
            highlight="في كل موقع WordPress و Next.js"
            subtitle="لا نُطلق أي موقع قبل اجتيازه اختبارات السرعة والسيو والأمان وتجربة المستخدم."
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
            <div
              dir="ltr"
              className="lg:col-span-6 rounded-3xl bg-[#050811] border border-cyan-500/30 p-6 font-mono text-xs flex flex-col justify-between text-left"
            >
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
                  <ArrowUpLeft className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl bg-[#070B14] border border-neutral-800 p-6 sm:p-7">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-xs font-bold text-amber-300 mb-1">
                    سابقة أعمال UNIQUE الحقيقية
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    مواقع ومنصات بنيناها بأحدث التقنيات
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
            badge="خطة تنفيذ منظمة"
            title="كيف نبني ونُطلق موقعك في"
            highlight="4 مراحل واضحة ومحددة المواعيد"
            subtitle="تتابع معنا كل خطوة على رابط معاينة مباشر حتى الاعتماد والإطلاق الرسمي."
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
                      المرحلة {ph.num}
                    </span>
                    <span className="text-xs font-bold text-amber-300">{ph.timeframe}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2.5">{ph.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                    {ph.desc}
                  </p>
                </div>
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-3">
                  <div className="text-[10px] font-bold text-emerald-300 mb-0.5">المخرج:</div>
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
            badge="إجابات موثّقة لرواد الأعمال ومحركات AI"
            title="أسئلة يبحث عنها أصحاب المشاريع"
            highlight="قبل الاختيار بين WordPress و Next.js"
            subtitle="إجابات هندسية صريحة حول السرعة، الترحيل، سهولة الإدارة، والتكلفة."
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
            badge="الأسئلة الشائعة"
            title="كل ما تحتاج معرفته عن"
            highlight="تصميم مواقع WordPress و Next.js"
            subtitle="تفاصيل الاستضافة، تعدد اللغات، السرعة، والدعم الفني بعد الإطلاق."
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
                  <ChevronLeft className="w-5 h-5 text-neutral-400 group-open:-rotate-90 group-open:text-cyan-400 transition shrink-0" />
                </summary>
                <p className="mt-4 pt-4 border-t border-neutral-800/80 text-sm text-neutral-300 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="rounded-3xl bg-[#070B14] border border-neutral-800 p-7 sm:p-8">
            <div className="text-xs font-bold text-blue-400 mb-2">
              التغطية الدلالية لخدمات تطوير الويب
            </div>
            <h3 className="text-lg font-extrabold text-white mb-5">
              تخصصات تصميم وبرمجة المواقع في UNIQUE
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
              <span>استشارة فنية مجانية لاختيار التقنية الأنسب لمشروعك</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              جاهز لبناء موقع{" "}
              <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                WordPress أو Next.js
              </span>{" "}
              يتفوق على منافسيك؟
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              أرسل لنا تفاصيل مشروعك عبر واتساب الآن وسنقترح عليك أفضل بنية تقنية مع جدول زمني
              وعرض سعر واضح خلال 24 ساعة.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>تواصل معنا عبر واتساب الآن</span>
                <ArrowUpLeft className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-black/70 border border-neutral-700 text-white font-bold text-sm">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <span dir="ltr">{WHATSAPP_PRIMARY}</span>
                <span className="text-neutral-600">•</span>
                <span dir="ltr" className="text-cyan-300">{WHATSAPP_SECONDARY}</span>
              </div>
            </div>
          </div>

          <footer className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <div>
              © {new Date().getFullYear()} UNIQUE Digital Agency — تصميم وتطوير مواقع WordPress و Next.js.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/en/services/wordpress-nextjs" className="hover:text-cyan-300 transition">
                WordPress &amp; Next.js (EN)
              </Link>
              <Link href="/services/backlinks" className="hover:text-cyan-300 transition">
                خدمة الباك لينكس
              </Link>
              <Link href="/egypt-web-design" className="hover:text-cyan-300 transition">
                تصميم مواقع في مصر
              </Link>
              <Link href="/pricing" className="hover:text-cyan-300 transition">
                كل الباقات والأسعار
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}