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

function TrendingUp({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function Globe({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
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
// NEXT.JS METADATA — FLAGSHIP SEO SERVICE PILLAR PAGE (ARABIC RTL)
// ============================================================================

export const metadata: Metadata = {
  title:
    "خدمة تحسين محركات البحث SEO | تصدر جوجل والذكاء الاصطناعي (GEO) — UNIQUE",
  description:
    "خدمة تحسين محركات البحث (SEO & GEO) الشاملة للشركات والمتاجر الإلكترونية في مصر والسعودية والإمارات والكويت. سيو تقني، محتوى دلالي، خرائط جوجل، باك لينكس آمن، وتقارير Search Console موثقة بباقات تبدأ من $250 شهرياً.",
  keywords: [
    "خدمة تحسين محركات البحث",
    "تحسين محركات البحث SEO",
    "شركة تحسين محركات البحث",
    "خدمات السيو للمواقع والمتاجر",
    "السيو التقني Technical SEO",
    "تحسين الظهور في الذكاء الاصطناعي GEO",
    "تصدر نتائج بحث جوجل",
    "باقات السيو الشهرية",
    "سيو متاجر سلة وزد وشوبيفاي وووكومرس",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/services/seo",
    languages: {
      ar: "https://www.uniquee-ws.com/services/seo",
      en: "https://www.uniquee-ws.com/en/services/seo",
      "x-default": "https://www.uniquee-ws.com/services/seo",
    },
  },
  openGraph: {
    title: "خدمة تحسين محركات البحث (SEO & GEO) — UNIQUE Digital Agency",
    description:
      "حوّل بحث جوجل وChatGPT إلى قناة مبيعات مستدامة عبر استراتيجية سيو هندسية شاملة ونتائج موثقة في Google Search Console.",
    url: "https://www.uniquee-ws.com/services/seo",
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

interface SeoPillar {
  id: string;
  number: string;
  badge: string;
  title: string;
  enTitle: string;
  summary: string;
  impact: string;
  tasks: string[];
  whatsappMsg: string;
}

interface PlatformSeoCard {
  name: string;
  tag: string;
  focus: string[];
}

interface RegionalHubLink {
  country: string;
  title: string;
  href: string;
  desc: string;
}

interface AuditTable {
  id: string;
  title: string;
  badge: string;
  items: string[];
}

interface RoadmapPhase {
  num: string;
  timeframe: string;
  title: string;
  desc: string;
  output: string;
}

interface SeoPackageUSD {
  id: string;
  name: string;
  badge: string;
  price: string;
  cycle: string;
  idealFor: string;
  isPopular?: boolean;
  keywords: string;
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
// DATA ARRAYS — FLAGSHIP SEO & GEO SERVICE
// ============================================================================

const HERO_KPIS: HeroKpi[] = [
  {
    id: "traffic",
    value: "+320%",
    title: "متوسط نمو الزيارات البيعية",
    subtitle: "نمو حقيقي موثّق بالأرقام مباشرة من Google Search Console على الكلمات الشرائية.",
    accent: "emerald",
  },
  {
    id: "geo",
    value: "SEO + GEO",
    title: "تصدر جوجل وChatGPT معاً",
    subtitle: "نجمع بين السيو الكلاسيكي وتهيئة محركات الذكاء الاصطناعي (AI Overviews، ChatGPT، WebMCP).",
    accent: "cyan",
  },
  {
    id: "markets",
    value: "4 أسواق",
    title: "خبرة محلية في مصر والخليج",
    subtitle: "استراتيجيات مخصصة للبحث العربي والإنجليزي في مصر، السعودية، الإمارات والكويت.",
    accent: "blue",
  },
  {
    id: "pricing",
    value: "تبدأ من $250",
    title: "باقات مرنة بدون عقود احتكارية",
    subtitle: "تنفيذ شامل (تقني + محتوى + روابط آمنة) بتقارير شهرية شفافة من جوجل.",
    accent: "amber",
  },
];

const SIX_SEO_PILLARS: SeoPillar[] = [
  {
    id: "technical-seo",
    number: "01",
    badge: "الأساس الهندسي",
    title: "السيو التقني وهندسة Core Web Vitals",
    enTitle: "Technical SEO & Crawl Architecture",
    summary:
      "فحص شامل لأكثر من 120 نقطة تقنية لإزالة عوائق الزحف والأرشفة، معالجة الأخطاء في Search Console، ورفع سرعة الموبايل لضمان قراءة جوجل لكل صفحة بسلاسة.",
    impact: "يرفع الفهرسة والأداء فوراً ويمنح الصفحات الحالية دفعة سريعة نحو المراكز الأولى.",
    tasks: [
      "إصلاح أخطاء 404، سلاسل التحويل Redirect Chains، وتعارض الـ Canonical",
      "تحسين Core Web Vitals (LCP < 1.2s، INP، CLS) على الهواتف",
      "تطبيق بيانات منظمة JSON-LD Schema (Organization، Service، Product، FAQ)",
      "ضبط XML Sitemap وRobots.txt ووسوم Hreflang للمواقع متعددة اللغات",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد فحصاً تقنياً شاملاً (Technical SEO Audit) لموقعي.",
  },
  {
    id: "onpage-semantic",
    number: "02",
    badge: "المحتوى والسلطة الموضوعية",
    title: "السيو الداخلي والمحتوى الدلالي (Semantic SEO)",
    enTitle: "On-Page & Topical Authority",
    summary:
      "نبني خريطة موضوعية متكاملة (Topical Map) وصفحات خدمات بيعية (Money Pages) ومقالات مترابطة تجيب على نية الباحث الحقيقية وتتفوق على منافسيك وفق معايير E-E-A-T.",
    impact: "يحوّل موقعك إلى المرجع الأول في مجالك ويضاعف نسبة تحويل القارئ إلى عميل.",
    tasks: [
      "بحث كلمات مفتاحية تجارية وتحليل فجوة المحتوى مقابل أقوى المنافسين",
      "صياغة عناوين Meta Titles وأوصاف جذابة ترفع نسبة النقر CTR",
      "هندسة الروابط الداخلية (Internal Linking Silos) لتقوية الصفحات المربحة",
      "تحديث المحتوى القديم لاستعادة وتثبيت المراكز الثلاثة الأولى",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد استراتيجية محتوى دلالي وسيو داخلي لموقعي.",
  },
  {
    id: "local-seo",
    number: "03",
    badge: "خرائط جوجل والمكالمات",
    title: "السيو المحلي وتصدر خرائط جوجل (Local 3-Pack)",
    enTitle: "Local SEO & Google Business Profile",
    summary:
      "استهداف دقيق للباحثين في مدينتك أو حيك لتصدر أول 3 نتائج على خرائط جوجل في القاهرة، الإسكندرية، الرياض، جدة، دبي، والكويت ومضاعفة المكالمات المباشرة.",
    impact: "أسرع قناة لجلب مكالمات هاتفية فورية وزيارات فعلية للفروع والعيادات والشركات.",
    tasks: [
      "توثيق وتحسين ملف Google Business Profile بالفئات والخدمات والصور",
      "بناء صفحات محلية مخصصة للمدن والأحياء مع LocalBusiness GeoCoordinates",
      "توحيد بيانات NAP في الأدلة الموثوقة وتعزيز التقييمات الحقيقية",
      "تتبع شهري للمكالمات وطلبات الاتجاهات القادمة من خرائط جوجل",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تصدر خرائط جوجل والسيو المحلي لنشاطي.",
  },
  {
    id: "ecommerce-seo",
    number: "04",
    badge: "مبيعات المتاجر العضوية",
    title: "سيو المتاجر الإلكترونية (E-Commerce SEO)",
    enTitle: "Salla • Zid • Shopify • WooCommerce",
    summary:
      "حوّل متجرك من الاعتماد الكامل على الإعلانات الممولة إلى تدفق طلبات يومي مجاني من جوجل عبر تصدر صفحات التصنيفات والمنتجات للكلمات الشرائية عالية النية.",
    impact: "يخفض تكلفة الاستحواذ على الطلب (CAC) ويبني مبيعات مستدامة على مدار العام.",
    tasks: [
      "تحسين صفحات التصنيفات (Category Hubs) والأوصاف الفريدة للمنتجات",
      "منع تضخم فهرسة الفلاتر والتكرار (Faceted Navigation Cleanup)",
      "تطبيق Product + Offer + Rating Schema لإظهار السعر والنجوم في جوجل",
      "ربط وتتبع مبيعات السيو بدقة عبر Google Analytics GA4",
    ],
    whatsappMsg: "مرحباً UNIQUE، لدي متجر إلكتروني وأريد خطة سيو لمضاعفة المبيعات.",
  },
  {
    id: "offpage-backlinks",
    number: "05",
    badge: "الروابط الخلفية والسلطة",
    title: "السيو الخارجي وبناء الباك لينكس الآمن (White-Hat)",
    enTitle: "Off-Page Authority & Digital PR",
    summary:
      "بناء ملف روابط خلفية طبيعي ومتنوع يدوياً عبر مواقع ومنصات عالية الموثوقية مع توزيع آمن للـ Anchor Text لرفع قوة الدومين (DA/DR) وحسم المنافسة لصالحك.",
    impact: "يقوّي سلطة الدومين ويدفع الكلمات الصعبة من الصفحة الثانية إلى المراكز 1–3.",
    tasks: [
      "فحص وتنظيف الروابط السامة (Toxic Backlinks Audit) لحماية الدومين",
      "تحليل فجوة الروابط (Link Gap) للمنافسين المتصدرين في قطاعك",
      "نشر جست بست وروابط متنوعة عبر 20 نوع منصة عالمية وعربية بأمان",
      "تقرير شفاف شهري بكل رابط جديد تم بناؤه وقوته",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تقوية الدومين وبناء باك لينكس آمن لموقعي.",
  },
  {
    id: "ai-search-geo",
    number: "06",
    badge: "مستقبل البحث 2026",
    title: "تحسين الظهور في الذكاء الاصطناعي (GEO & WebMCP)",
    enTitle: "ChatGPT • Perplexity • Google AI Overviews",
    summary:
      "تجهيز موقعك وعلامتك التجارية لتكون الإجابة الموثّقة والموصى بها عندما يسأل عملاؤك ChatGPT أو Perplexity أو Google AI Overviews عن أفضل شركة في مجالك.",
    impact: "يمنحك سبقاً تقنياً كاسحاً على المنافسين الذين يكتفون بالسيو التقليدي القديم.",
    tasks: [
      "تطبيق Entity SEO وربط علامتك التجارية ببيانات Schema متكاملة",
      "إنشاء ملف llms.txt ديناميكي وتفعيل تقنية WebMCP لوكلاء المتصفح",
      "صياغة إجابات مهيكلة وجداول مقارنة يسهل على محركات AI اقتباسها",
      "تعزيز إشارات العلامة التجارية (Brand Mentions) في المصادر الموثوقة",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تهيئة موقعي للظهور في جوجل وChatGPT وAI Overviews.",
  },
];

const SUPPORTED_PLATFORMS: PlatformSeoCard[] = [
  {
    name: "Next.js & React",
    tag: "السرعة القصوى",
    focus: ["SSR / ISR & Dynamic Metadata", "Automated JSON-LD & Sitemaps", "llms.txt & WebMCP Ready"],
  },
  {
    name: "WordPress & WooCommerce",
    tag: "الأكثر انتشاراً",
    focus: ["تنظيف الإضافات وتسريع LCP", "هيكلة التصنيفات وProduct Schema", "إصلاح أخطاء الفلاتر والتكرار"],
  },
  {
    name: "سلة وزد (Salla & Zid)",
    tag: "متاجر السعودية والخليج",
    focus: ["تهيئة أقسام ومنتجات المتجر", "تفعيل المدونة والربط الداخلي", "تحسين كلمات البحث الخليجية"],
  },
  {
    name: "Shopify & EasyOrder",
    tag: "التجارة السريعة",
    focus: ["إصلاح Canonical للمجموعات", "تحسين سرعة القالب والموبايل", "رفع المبيعات العضوية بجانب الإعلانات"],
  },
];

const REGIONAL_HUBS: RegionalHubLink[] = [
  {
    country: "مصر",
    title: "شركة سيو في مصر",
    href: "/egypt-seo",
    desc: "القاهرة، التجمع، الشيخ زايد والإسكندرية — باقات بالجنيه المصري.",
  },
  {
    country: "السعودية",
    title: "شركة سيو في السعودية",
    href: "/saudi-seo",
    desc: "استراتيجيات تصدر وطنية وسيو متاجر سلة وزد للشركات بالمملكة.",
  },
  {
    country: "الرياض",
    title: "شركة سيو في الرياض",
    href: "/riyadh-seo",
    desc: "استهداف أحياء الرياض وخرائط جوجل Local 3-Pack بباقات بالريال.",
  },
  {
    country: "جدة",
    title: "شركة سيو في جدة",
    href: "/seocompanyjeddah",
    desc: "سيو محلي للعيادات والشركات والمتاجر في جدة ومنطقة مكة.",
  },
];

const UNIQUE_4_AUDIT_TABLES: AuditTable[] = [
  {
    id: "t-audit",
    title: "1. التدقيق الشامل (SEO Audit)",
    badge: "+120 نقطة",
    items: [
      "فحص أخطاء الزحف والفهرسة في Google Search Console",
      "تحليل المنافسين واستخراج الكلمات البيعية الأعلى عائداً",
      "قياس Core Web Vitals وسرعة الموبايل وتجربة المستخدم",
      "مراجعة ملف الروابط الخلفية وفحص الروابط السامة",
    ],
  },
  {
    id: "t-onpage",
    title: "2. التحسين الداخلي والمحتوى",
    badge: "On-Page & E-E-A-T",
    items: [
      "تحسين العناوين والأوصاف (Meta Tags) لرفع نسبة النقر CTR",
      "بناء صفحات خدمات بيعية ومقالات مترابطة (Topical Clusters)",
      "تطبيق Schema JSON-LD مخصص لكل نوع صفحة",
      "ضغط الصور بصيغة WebP وإضافة نصوص بديلة Alt مستهدفة",
    ],
  },
  {
    id: "t-offpage",
    title: "3. السلطة والروابط والذكاء الاصطناعي",
    badge: "Off-Page & GEO",
    items: [
      "بناء روابط خلفية يدوية آمنة (White-Hat) عبر منصات موثوقة",
      "تحسين ملف Google Business Profile وخرائط جوجل",
      "تجهيز llms.txt وبيانات الكيان للظهور في ChatGPT وAI Overviews",
      "مراقبة مستمرة لقوة الدومين وتطور الإشارات الخارجية",
    ],
  },
  {
    id: "t-report",
    title: "4. القياس والتقارير الشفافة",
    badge: "GSC + GA4",
    items: [
      "تقرير شهري مباشر من Google Search Console (النقرات والظهور)",
      "تتبع أسبوعي لترتيب الكلمات المفتاحية التجارية",
      "قياس التحويلات الفعلية (واتساب، مكالمات، وطلبات المتجر)",
      "خارطة عمل واضحة لكل شهر بناءً على البيانات الحقيقية",
    ],
  },
];

const ROADMAP_90_DAYS: RoadmapPhase[] = [
  {
    num: "01",
    timeframe: "الأيام 1 – 30",
    title: "التشخيص التقني وبناء خريطة الكلمات",
    desc: "نصلح كل العوائق التقنية في موقعك، نربط Search Console وGA4، ونحسّن أهم الصفحات البيعية مع Schema JSON-LD.",
    output: "موقع سليم تقنياً + بداية صعود فوري في الفهرسة والظهور",
  },
  {
    num: "02",
    timeframe: "الأيام 31 – 60",
    title: "المحتوى الدلالي، الخرائط وبناء السلطة",
    desc: "نطلق إنتاج المقالات والصفحات المترابطة، نقوّي خرائط جوجل، ونبدأ حملة روابط خلفية آمنة تقوّي صفحاتك الرئيسية.",
    output: "دخول كلمات بيعية للصفحة الأولى + نمو ملحوظ في النقرات",
  },
  {
    num: "03",
    timeframe: "الأيام 61 – 90",
    title: "تثبيت الصدارة ومضاعفة العملاء والمبيعات",
    desc: "ندفع الكلمات في المراكز 4–10 نحو المراكز الثلاثة الأولى، نحسّن معدل التحويل CRO، ونوسّع ظهورك في محركات AI.",
    output: "تدفق عملاء يومي ومستدام بتكلفة استحواذ أقل",
  },
];

const SEO_PACKAGES_USD: SeoPackageUSD[] = [
  {
    id: "seo-starter",
    name: "باقة الانطلاق والسيو المحلي",
    badge: "للشركات الناشئة والعيادات",
    price: "250",
    cycle: "دولار / شهرياً",
    idealFor: "مثالية للمواقع التعريفية، العيادات، والمكاتب الساعية لتصدر مدينتها وخرائط جوجل.",
    keywords: "حتى 20 كلمة تجارية مستهدفة",
    features: [
      "فحص سيو تقني شامل وإصلاح أخطاء Search Console",
      "تحسين وإدارة ملف خرائط جوجل (Google Business Profile)",
      "تحسين 5 صفحات خدمات رئيسية + Schema JSON-LD",
      "كتابة 4 مقالات سيو متخصصة شهرياً",
      "بناء روابط خلفية آمنة وإشارات محلية + تقرير شهري من GSC",
    ],
    whatsappMsg: "مرحباً UNIQUE، أرغب في الاشتراك أو الاستفسار عن باقة الانطلاق للسيو ($250 شهرياً).",
  },
  {
    id: "seo-growth",
    name: "باقة النمو للشركات والمتاجر",
    badge: "الأكثر طلباً",
    price: "450",
    cycle: "دولار / شهرياً",
    idealFor: "الأنسب للمتاجر الإلكترونية (سلة، زد، شوبيفاي، ووكومرس) والشركات المنافسة.",
    isPopular: true,
    keywords: "حتى 50 كلمة تجارية وتصنيفية",
    features: [
      "سيو تقني متقدم + تحسين Core Web Vitals وSchema شامل",
      "تحسين مستمر لصفحات التصنيفات والخدمات البيعية لرفع التحويل",
      "كتابة 8 مقالات وصفحات هبوط تجارية شهرياً (Topical Map)",
      "حملة بناء روابط خلفية White-Hat شهرية قوية",
      "تهيئة كاملة للظهور في ChatGPT وGoogle AI Overviews (GEO)",
      "تقرير شهري مفصّل من GSC وGA4 + اجتماع مراجعة شهري",
    ],
    whatsappMsg: "مرحباً UNIQUE، أرغب في حجز باقة النمو للسيو ($450 شهرياً) لموقعي.",
  },
  {
    id: "seo-enterprise",
    name: "باقة السيطرة والمؤسسات (Enterprise)",
    badge: "للشركات الكبرى والأسواق الإقليمية",
    price: "850",
    cycle: "دولار / شهرياً",
    idealFor: "للمطورين العقاريين، المصانع المصدّرة، والمتاجر الضخمة المستهدفة لعدة دول بلغتين.",
    keywords: "+100 كلمة تجارية (عربي وإنجليزي)",
    features: [
      "استراتيجية سيو متعددة اللغات (عربي/إنجليزي) لمصر والخليج",
      "إنتاج 16 صفحة ومقالاً متخصصاً شهرياً لبناء سلطة موضوعية كاملة",
      "حملة Digital PR وروابط خلفية عالية السلطة + تحسين CRO",
      "استراتيجية GEO وllms.txt وWebMCP للريادة في محركات AI",
      "دعم هندسي مباشر مع فريق البرمجة ولوحة متابعة حية (Looker Studio)",
    ],
    whatsappMsg: "مرحباً UNIQUE، أرغب في مناقشة باقة السيطرة والمؤسسات للسيو ($850 شهرياً).",
  },
];

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "النتائج والمدة",
    question: "متى أبدأ برؤية نتائج ملموسة من خدمة تحسين محركات البحث؟",
    answer:
      "تبدأ مؤشرات التحسن في الفهرسة والظهور وحركة الكلمات خلال أول 30 إلى 60 يوماً بعد الإصلاحات التقنية، بينما يتحقق النمو التجاري القوي والمستقر في المبيعات والعملاء عادةً بين الشهر الثالث والسادس حسب قوة المنافسة.",
  },
  {
    id: "faq-2",
    category: "الفحص المجاني",
    question: "هل تقدمون فحص سيو مجاني لموقعي قبل التعاقد؟",
    answer:
      "نعم، أرسل رابط موقعك عبر واتساب وسنجهّز لك خلال 24 ساعة فحصاً أولياً يوضح أبرز الأخطاء التقنية، فرص الكلمات المربحة مقارنة بمنافسيك، والباقة الأنسب لميزانيتك.",
  },
  {
    id: "faq-3",
    category: "العقود والمرونة",
    question: "هل الاشتراك الشهري مرن أم يوجد التزام سنوي إجباري؟",
    answer:
      "الباقات شهرية مرنة تماماً بدون أي عقود احتكارية. نوصي بالاستمرار من 3 إلى 6 أشهر لتحقيق أقوى عائد تراكمي، وتتابع النتائج بنفسك كل شهر عبر تقارير Google Search Console المباشرة.",
  },
  {
    id: "faq-4",
    category: "الذكاء الاصطناعي GEO",
    question: "ما الفرق بين السيو التقليدي والـ GEO الذي تقدمونه؟",
    answer:
      "السيو التقليدي يركز على تصدر روابط موقعك في بحث جوجل، بينما الـ GEO (Generative Engine Optimization) يهيّئ كيانك ومحتواك وبياناتك المنظمة (Schema وllms.txt) ليقتبسها ChatGPT وGoogle AI Overviews ويرشّح شركتك مباشرة للعميل.",
  },
  {
    id: "faq-5",
    category: "التكامل مع الباك لينكس",
    question: "هل تشمل باقات السيو الشهرية كتابة المحتوى وبناء الباك لينكس؟",
    answer:
      "نعم، جميع باقاتنا الشهرية شاملة للتنفيذ التقني، كتابة وتحسين المحتوى، وبناء الروابط الخلفية الآمنة، كما يمكنك طلب باقات الباك لينكس المستقلة بشكل منفرد لتقوية دومين موقعك.",
  },
];

const SEMANTIC_KEYWORDS: string[] = [
  "خدمة تحسين محركات البحث SEO",
  "شركة تحسين محركات البحث في مصر والسعودية",
  "تصدر نتائج بحث جوجل الصفحة الأولى",
  "السيو التقني Technical SEO وCore Web Vitals",
  "تحسين الظهور في الذكاء الاصطناعي GEO",
  "سيو المتاجر الإلكترونية سلة وزد وشوبيفاي",
  "السيو المحلي وخرائط جوجل Local 3-Pack",
  "بناء روابط خلفية آمنة White-Hat Backlinks",
  "فحص سيو مجاني SEO Audit",
  "زيادة الزيارات العضوية والمبيعات من جوجل",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD — Service + OfferCatalog USD + FAQPage + Breadcrumb)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمة تحسين محركات البحث (SEO & GEO) — UNIQUE Digital Agency",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://www.uniquee-ws.com",
      telephone: "+201270506511",
    },
    serviceType: "Search Engine Optimization (SEO) & Generative Engine Optimization (GEO)",
    areaServed: ["EG", "SA", "AE", "KW"],
    url: "https://www.uniquee-ws.com/services/seo",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "باقات خدمات تحسين محركات البحث الشهرية (USD)",
      itemListElement: SEO_PACKAGES_USD.map((pkg) => ({
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
        name: "الرئيسية",
        item: "https://www.uniquee-ws.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "تحسين محركات البحث",
        item: "https://www.uniquee-ws.com/services/seo",
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
// MAIN PAGE COMPONENT — FLAGSHIP SEO SERVICE PAGE (ARABIC RTL)
// ============================================================================

export default function SeoServicePage() {
  const heroAuditWhatsapp = getWhatsAppUrl(
    "مرحباً UNIQUE Digital Agency! أريد فحص سيو مجاني (SEO Audit) ومعرفة أفضل خطة لتحسين محركات البحث لموقعي."
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
                UNIQUE <span className="text-blue-400">SEO</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">
                تحسين محركات البحث والذكاء الاصطناعي
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#pillars" className="hover:text-cyan-300 transition">
              ركائز السيو
            </a>
            <a href="#platforms" className="hover:text-cyan-300 transition">
              المنصات
            </a>
            <a href="#markets" className="hover:text-cyan-300 transition">
              الأسواق
            </a>
            <a href="#audit" className="hover:text-cyan-300 transition">
              منهجية الفحص
            </a>
            <a href="#packages" className="hover:text-cyan-300 transition">
              الباقات
            </a>
            <a href="#faq" className="hover:text-cyan-300 transition">
              الأسئلة الشائعة
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/en/services/seo"
              className="px-3.5 py-2 rounded-xl border border-neutral-800 bg-neutral-950 hover:border-cyan-500/50 text-xs font-bold text-neutral-200 hover:text-cyan-300 transition"
            >
              English
            </Link>
            <a
              href={heroAuditWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-l from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>فحص سيو مجاني</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION + LIVE GSC & AI CITATION TELEMETRY
      ==================================================================== */}
      <section className="relative overflow-hidden pt-14 pb-20 lg:pt-24 lg:pb-28 border-b border-neutral-900">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-1/4 w-[540px] h-[540px] rounded-full bg-blue-600/12 blur-[150px]" />
          <div className="absolute top-20 left-1/4 w-[460px] h-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[560px] h-[300px] rounded-full bg-emerald-500/8 blur-[130px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link href="/" className="hover:text-cyan-300 transition">
              الرئيسية
            </Link>
            <ChevronLeft className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-cyan-300 font-semibold">خدمة تحسين محركات البحث (SEO)</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>مصر • السعودية • الإمارات • الكويت</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">Google SEO + AI Search (GEO)</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.18] mb-6">
                خدمة{" "}
                <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  تحسين محركات البحث SEO
                </span>{" "}
                لبناء تدفق عملاء ومبيعات مستدام من جوجل والذكاء الاصطناعي
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                في <strong className="text-white">UNIQUE Digital Agency</strong> نُهندس حضور
                علامتك التجارية في الصفحة الأولى لجوجل وخرائط جوجل وإجابات{" "}
                <strong className="text-cyan-300">ChatGPT وGoogle AI Overviews</strong> — عبر
                منظومة سيو شاملة (تقني + محتوى دلالي + باك لينكس آمن) بنتائج موثّقة من Search Console.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "فحص تقني +120 نقطة وإصلاح أخطاء Search Console",
                  "محتوى بيعي متوافق مع E-E-A-T ونية الباحث",
                  "تصدر خرائط جوجل + سيو متاجر سلة وزد وشوبيفاي",
                  "تهيئة كاملة للذكاء الاصطناعي (GEO + llms.txt)",
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
                  href={heroAuditWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>اطلب فحص سيو مجاني لموقعك</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <span>تصفح باقات السيو الشهرية</span>
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
                  تقارير GSC شهرية شفافة • بدون عقود سنوية
                </span>
              </div>
            </div>

            {/* Hero Visual: Live GSC + AI Search Telemetry */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-cyan-300">
                      مؤشر الأداء العضوي — Search &amp; AI Console
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    +320% نمو موثّق
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">نقرات عضوية</div>
                    <div className="text-xl font-black text-blue-400" dir="ltr">54.2K</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">↑ 315% نمو</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">مرات الظهور</div>
                    <div className="text-xl font-black text-cyan-300" dir="ltr">1.68M</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">↑ MENA &amp; GCC</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">معدل الترتيب</div>
                    <div className="text-xl font-black text-amber-300" dir="ltr">#1.9</div>
                    <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">كلمات تجارية</div>
                  </div>
                </div>

                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      نمو الزيارات البيعية التراكمي
                    </span>
                    <span className="text-[11px] text-neutral-500">GSC Verified</span>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-24 pt-2" dir="ltr">
                    {[14, 21, 31, 44, 57, 72, 87, 100].map((h, i) => (
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

                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-2">
                  <div className="text-xs font-bold text-white mb-2">
                    قنوات الظهور التي تغطيها حملة UNIQUE:
                  </div>
                  {[
                    { ch: "نتائج بحث جوجل الصفحة الأولى (SERP)", status: "نشط ✓" },
                    { ch: "خرائط جوجل المحلية (Local 3-Pack)", status: "نشط ✓" },
                    { ch: "ChatGPT وPerplexity وAI Overviews (GEO)", status: "نشط ✓" },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-blue-500/8 border border-blue-500/20 text-xs"
                    >
                      <span className="text-neutral-200 font-medium">{row.ch}</span>
                      <span className="text-emerald-400 font-bold">{row.status}</span>
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
          3. 6 CORE SEO & GEO PILLARS
      ==================================================================== */}
      <section id="pillars" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="منظومة السيو الشاملة 360°"
            title="6 ركائز أساسية ننفّذها في"
            highlight="خدمة تحسين محركات البحث SEO"
            subtitle="نغطي كل جانب يؤثر على ترتيب موقعك ومبيعاتك من الكود التقني حتى المحتوى والروابط والذكاء الاصطناعي."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {SIX_SEO_PILLARS.map((p) => (
              <div
                key={p.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800/90 hover:border-blue-500/40 p-7 sm:p-8 flex flex-col justify-between transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-3xl font-black bg-gradient-to-l from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      {p.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-1">{p.title}</h3>
                  <div className="text-xs font-semibold text-blue-400 mb-4" dir="ltr">
                    {p.enTitle}
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-5">{p.summary}</p>

                  <div className="rounded-2xl bg-emerald-500/8 border border-emerald-500/25 p-3.5 mb-5">
                    <div className="text-[11px] font-extrabold text-emerald-300 mb-0.5">
                      الأثر التجاري المباشر:
                    </div>
                    <p className="text-xs text-neutral-200">{p.impact}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {p.tasks.map((t, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{t}</span>
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
                  <span>استفسر عن هذه الركيزة عبر واتساب</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. PLATFORMS + REGIONAL SEO HUBS (INTERNAL LINKING SILO)
      ==================================================================== */}
      <section id="platforms" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="تغطية كافة المنصات التقنية"
            title="نحسّن محركات البحث لجميع"
            highlight="المواقع والمتاجر الإلكترونية"
            subtitle="خبرة هندسية مباشرة في التعامل مع تحديات السيو لكل منصة برمجية وتجارية."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {SUPPORTED_PLATFORMS.map((pl, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-cyan-500/40 p-6 transition"
              >
                <span className="inline-block px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] font-bold text-amber-300 mb-3">
                  {pl.tag}
                </span>
                <h3 className="text-lg font-extrabold text-white mb-4">{pl.name}</h3>
                <ul className="space-y-2">
                  {pl.focus.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div id="markets">
            <SectionHeader
              badge="تغطية إقليمية متخصصة"
              title="خدمات السيو المخصصة لأسواق"
              highlight="مصر والسعودية والإمارات والكويت"
              subtitle="تصفح صفحاتنا المتخصصة لكل سوق ومدينة للاطلاع على الباقات بالعملة المحلية."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {REGIONAL_HUBS.map((hub, idx) => (
                <Link
                  key={idx}
                  href={hub.href}
                  className="group rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-blue-500/50 p-6 flex flex-col justify-between transition"
                >
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300 mb-3">
                      {hub.country}
                    </span>
                    <h3 className="text-lg font-extrabold text-white group-hover:text-cyan-300 transition mb-2">
                      {hub.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">{hub.desc}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:text-cyan-300">
                    <span>استكشف التفاصيل</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. 4 AUDIT TABLES + 90-DAY ROADMAP
      ==================================================================== */}
      <section id="audit" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="منهجية التنفيذ في UNIQUE"
            title="4 قوائم عمل هندسية تضمن"
            highlight="نتائج سيو حقيقية ومستقرة"
            subtitle="كل خطوة موثّقة وقابلة للقياس المباشر في تقارير Google Search Console."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {UNIQUE_4_AUDIT_TABLES.map((tbl) => (
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

          <SectionHeader
            badge="خارطة طريق 90 يوماً"
            title="كيف نصعد بموقعك إلى"
            highlight="الصفحة الأولى خلال 90 يوماً؟"
            subtitle="خطة مرحلية واضحة تبدأ بالتنظيف التقني وتنتهي بمضاعفة العملاء والمبيعات."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {ROADMAP_90_DAYS.map((ph) => (
              <div
                key={ph.num}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-extrabold text-cyan-300">
                      المرحلة {ph.num}
                    </span>
                    <span className="text-xs font-bold text-amber-300">{ph.timeframe}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">{ph.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">{ph.desc}</p>
                </div>
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-3.5">
                  <div className="text-[10px] font-bold text-emerald-300 mb-0.5">المخرج الملموس:</div>
                  <div className="text-xs font-bold text-white">{ph.output}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. TRANSPARENT MONTHLY USD PACKAGES ($250 / $450 / $850)
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="باقات سيو شهرية مرنة"
            title="باقات وأسعار تحسين محركات البحث"
            highlight="بالدولار الأمريكي ($)"
            subtitle="تنفيذ كامل للتقنية والمحتوى والباك لينكس بدون عقود احتكارية."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {SEO_PACKAGES_USD.map((pkg) => (
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
                    <span className="text-xs font-bold text-amber-300">{pkg.keywords}</span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">{pkg.idealFor}</p>

                  <div className="flex items-baseline gap-2 pb-6 mb-6 border-b border-neutral-800">
                    <span dir="ltr" className="text-4xl font-black text-white">
                      ${pkg.price}
                    </span>
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
                      ? "bg-gradient-to-l from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-600/30"
                      : "bg-neutral-950 hover:bg-blue-600/20 border border-neutral-700 hover:border-blue-500 text-white"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>ابدأ {pkg.name}</span>
                  <ArrowUpLeft className="w-4 h-4" />
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
            badge="الأسئلة الشائعة"
            title="كل ما تحتاج معرفته عن"
            highlight="خدمة تحسين محركات البحث"
            subtitle="إجابات واضحة حول المدة، الفحص المجاني، الذكاء الاصطناعي GEO، والعقود."
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

          <div className="rounded-3xl bg-[#070B14] border border-neutral-800 p-7 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold text-blue-400 mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span>التغطية الدلالية لخدمات السيو في UNIQUE</span>
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
              <span>فحص سيو تقني مجاني لموقعك خلال 24 ساعة</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              جاهز لتحويل جوجل إلى أقوى مصدر{" "}
              <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                عملاء ومبيعات لشركتك؟
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              أرسل لنا رابط موقعك عبر واتساب الآن وسنرسل لك تقريراً عملياً بأهم الأخطاء التقنية
              وفرص الكلمات البيعية وخطة 90 يوماً مخصصة لنمو موقعك.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroAuditWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>اطلب فحص السيو المجاني الآن</span>
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
              © {new Date().getFullYear()} UNIQUE Digital Agency — خدمة تحسين محركات البحث (SEO &amp; GEO).
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/en/services/seo" className="hover:text-cyan-300 transition">
                SEO Service (EN)
              </Link>
              <Link href="/services/backlinks" className="hover:text-cyan-300 transition">
                خدمة الباك لينكس
              </Link>
              <Link href="/services/wordpress-nextjs" className="hover:text-cyan-300 transition">
                WordPress &amp; Next.js
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