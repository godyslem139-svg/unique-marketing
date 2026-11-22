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

function TrendingUp({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
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

// ============================================================================
// BRAND & WHATSAPP HELPERS
// ============================================================================

const WHATSAPP_NUMBER_DISPLAY = "01270506511";
const WHATSAPP_INTERNATIONAL = "201270506511";

function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encodeURIComponent(message)}`;
}

// ============================================================================
// NEXT.JS METADATA — EGYPT SEO COMPANY (ARABIC RTL)
// ============================================================================

export const metadata: Metadata = {
  title:
    "شركة سيو في مصر | تصدر جوجل وخرائط جوجل والذكاء الاصطناعي — UNIQUE",
  description:
    "أفضل شركة سيو في مصر لتحسين محركات البحث (SEO & GEO) للشركات والمتاجر الإلكترونية في القاهرة والإسكندرية. نتائج موثقة من Search Console، تصدر خرائط جوجل، وباقات شفافة تبدأ من 7,500 جنيه مصري.",
  keywords: [
    "شركة سيو في مصر",
    "افضل شركة سيو في مصر",
    "شركات SEO في مصر",
    "اسعار خدمات السيو في مصر",
    "باقات السيو في مصر",
    "شركة تحسين محركات البحث في القاهرة",
    "شركة سيو في الاسكندرية",
    "سيو متاجر الكترونية في مصر",
    "تصدر نتائج بحث جوجل مصر",
    "تحسين الظهور في ChatGPT وAI Overviews",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/egypt-seo",
    languages: {
      "ar-EG": "https://www.uniquee-ws.com/egypt-seo",
      "en-EG": "https://www.uniquee-ws.com/en/egypt-seo",
      "x-default": "https://www.uniquee-ws.com/egypt-seo",
    },
  },
  openGraph: {
    title: "شركة سيو في مصر — UNIQUE Digital Agency",
    description:
      "استراتيجيات سيو تقني ومحتوى دلالي وسيو محلي لمضاعفة زياراتك ومبيعاتك من جوجل في مصر بنتائج موثقة وتقارير Search Console شهرية.",
    url: "https://www.uniquee-ws.com/egypt-seo",
    siteName: "UNIQUE Digital Agency",
    locale: "ar_EG",
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

interface SeoVsAdsRow {
  criterion: string;
  uniqueSeo: string;
  paidAds: string;
  cheapSeo: string;
}

interface SeoServicePillar {
  id: string;
  number: string;
  badge: string;
  title: string;
  enSubtitle: string;
  summary: string;
  businessImpactInEgypt: string;
  executionChecklist: string[];
  deliverables: string[];
  whatsappText: string;
}

interface EgyptLocalZone {
  id: string;
  zoneTitle: string;
  badgeTag: string;
  commercialCharacter: string;
  targetBusinesses: string[];
  localSeoActions: string[];
  localKeywords: string[];
}

interface EcommerceSeoPlatform {
  id: string;
  platformName: string;
  marketShareTag: string;
  title: string;
  painPointSolved: string;
  technicalSolutions: string[];
  expectedGrowth: string;
  whatsappMsg: string;
}

interface GscCaseStudy {
  id: string;
  sector: string;
  cityInEgypt: string;
  platform: string;
  projectTitle: string;
  timeframe: string;
  clicksBefore: string;
  clicksAfter: string;
  impressionsAfter: string;
  revenueGrowth: string;
  topKeywordsRanked: string[];
  summary: string;
}

interface EgyptSectorItem {
  id: string;
  sectorName: string;
  projectsCount: string;
  avgGrowth: string;
  description: string;
  keySeoFocus: string[];
  whatsappMsg: string;
}

interface SeoAuditTableGroup {
  id: string;
  tableTitle: string;
  tableBadge: string;
  items: string[];
}

interface NinetyDayPhase {
  phaseNum: string;
  timeframe: string;
  title: string;
  description: string;
  tasks: string[];
  milestoneOutput: string;
}

interface EgyptSeoPackageEGP {
  id: string;
  packageName: string;
  badgeText: string;
  priceEGP: string;
  billingCycle: string;
  idealFor: string;
  isPopular: boolean;
  keywordsCount: string;
  includedServices: string[];
  technicalAndContentFeatures: string[];
  reportingAndSupport: string;
  whatsappMsg: string;
}

interface ChatGptClientQuestion {
  tag: string;
  q: string;
  a: string;
}

interface EgyptSeoFaq {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// DATA ARRAYS — EGYPT SEO MARKET (2026)
// ============================================================================

const HERO_KPIS: HeroKpiCard[] = [
  {
    id: "growth",
    value: "+310%",
    title: "متوسط نمو الزيارات العضوية",
    subtitle: "نمو حقيقي وموثّق عبر Google Search Console على الكلمات البيعية في السوق المصري.",
    accent: "emerald",
  },
  {
    id: "geo",
    value: "SEO + GEO",
    title: "تصدر جوجل وChatGPT معاً",
    subtitle: "نبني سلطة علامتك التجارية لتظهر في الصفحة الأولى لجوجل وإجابات AI Overviews وChatGPT.",
    accent: "cyan",
  },
  {
    id: "maps",
    value: "Top 3",
    title: "السيطرة على خرائط جوجل بمصر",
    subtitle: "مضاعفة مكالمات العملاء وطلبات الاتجاهات في القاهرة الجديدة، الشيخ زايد، المعادي والإسكندرية.",
    accent: "blue",
  },
  {
    id: "egp",
    value: "7,500 ج.م",
    title: "باقات شهرية واضحة بالجنيه",
    subtitle: "تسعير شفاف بالجنيه المصري بدون عقود احتكارية مع تقارير أداء شهرية مباشرة من جوجل.",
    accent: "amber",
  },
];

const SEO_VS_ADS_COMPARISON_EGYPT: SeoVsAdsRow[] = [
  {
    criterion: "تكلفة العميل المحتمل (CPL) في مصر",
    uniqueSeo: "تنخفض تدريجياً كل شهر مع تراكم تصدر الصفحات والمقالات",
    paidAds: "ترتفع باستمرار مع اشتداد المنافسة وتغير أسعار الصرف",
    cheapSeo: "لا تجلب عملاء فعليين — زيارات وهمية أو كلمات غير بيعية",
  },
  {
    criterion: "استمرارية النتائج بعد إيقاف الدفع",
    uniqueSeo: "أصل رقمي مملوك لك يستمر في جلب عملاء ومبيعات لسنوات",
    paidAds: "تتوقف المبيعات والزيارات في نفس لحظة نفاد الميزانية",
    cheapSeo: "تراجع سريع أو عقوبات جوجل بسبب الروابط العشوائية (Spam)",
  },
  {
    criterion: "نية الشراء وثقة العميل المصري",
    uniqueSeo: "أعلى نية شراء — العميل يبحث بنفسه عن خدمتك ويثق بنتائج جوجل الأولى",
    paidAds: "نية متوسطة إلى منخفضة (إعلانات مقاطعة على السوشيال ميديا)",
    cheapSeo: "ظهور في صفحات متأخرة لا يراها العميل المستهدف",
  },
  {
    criterion: "الظهور في ChatGPT وAI Overviews",
    uniqueSeo: "مُهندس بالكامل ببيانات Schema وسلطة الكيان (Entity Authority)",
    paidAds: "لا يؤثر نهائياً على ترشيحات الذكاء الاصطناعي",
    cheapSeo: "محتوى مكرر ومنسوخ تتجاهله محركات الذكاء الاصطناعي",
  },
  {
    criterion: "القياس والشفافية في التقارير",
    uniqueSeo: "تقارير شهرية حية من Google Search Console + GA4 + مكالمات الخرائط",
    paidAds: "تقارير نقرات ومشاهدات قد لا تترجم لعائد استثمار مستدام",
    cheapSeo: "وعود إنشائية بدون أرقام حقيقية أو ربط بالمبيعات",
  },
];

const CORE_SEO_SERVICES_EGYPT: SeoServicePillar[] = [
  {
    id: "technical-seo",
    number: "01",
    badge: "البنية التحتية والسرعة",
    title: "السيو التقني وهندسة Core Web Vitals",
    enSubtitle: "Technical SEO & Performance Engineering",
    summary:
      "نبدأ بفحص هندسي عميق لأكثر من 120 نقطة تقنية داخل موقعك (سواء WordPress أو Next.js أو Shopify) لإزالة عوائق الأرشفة، تسريع التحميل على شبكات الموبايل المصرية، وضبط ميزانية الزحف (Crawl Budget).",
    businessImpactInEgypt:
      "إصلاح الأخطاء التقنية وحدها غالباً ما يرفع ترتيب الصفحات الحالية بنسبة 30% إلى 60% خلال أول 45 يوماً.",
    executionChecklist: [
      "فحص شامل لأخطاء الزحف والفهرسة (404، Redirect Chains، Canonical Conflicts)",
      "تحسين مؤشرات Core Web Vitals (LCP، INP، CLS) لأعلى أداء على الموبايل",
      "بناء وتدقيق البيانات المنظمة JSON-LD Schema (Organization، Service، Product، FAQ)",
      "إعداد ملفات XML Sitemap وRobots.txt وهيكل الروابط الداخلية (Internal Linking)",
      "حل مشكلات التعدد اللغوي Hreflang بين النسخة العربية والإنجليزية بدون تضارب",
    ],
    deliverables: [
      "تقرير فحص تقني +120 نقطة",
      "إصلاح أخطاء Search Console",
      "Schema Markup مخصص",
      "تحسين سرعة الموبايل",
    ],
    whatsappText: "مرحباً UNIQUE، أريد فحص سيو تقني شامل لموقعي في مصر ومعالجة مشاكل الأرشفة والسرعة.",
  },
  {
    id: "local-seo-maps",
    number: "02",
    badge: "خرائط جوجل والبحث المحلي",
    title: "السيو المحلي وتصدر خرائط جوجل في مصر (Local 3-Pack)",
    enSubtitle: "Egypt Local SEO & Google Business Profile",
    summary:
      "للعيادات، الشركات، المكاتب، الفروع، والمطاعم في القاهرة والإسكندرية والمحافظات—نرفع ظهورك في أول 3 نتائج على خرائط جوجل (Local 3-Pack) عند البحث عن خدماتك بالقرب من العميل.",
    businessImpactInEgypt:
      "أسرع قناة لجلب مكالمات هاتفية فورية وطلبات اتجاهات (Directions) من عملاء جاهزين للشراء داخل منطقتك.",
    executionChecklist: [
      "تحسين وتوثيق ملف Google Business Profile بالفئات والخدمات والصور الجغرافية",
      "بناء صفحات هبوط محلية مخصصة للأحياء والمدن (التجمع، الشيخ زايد، المعادي، الإسكندرية)",
      "توحيد بيانات NAP (الاسم، العنوان، الهاتف) في الأدلة المصرية الموثوقة",
      "استراتيجية منظمة لزيادة التقييمات الحقيقية والرد الاحترافي عليها بكلمات مفتاحية",
      "تضمين LocalBusiness GeoCoordinates Schema لربط موقعك بمقرك الجغرافي بدقة",
    ],
    deliverables: [
      "تصدر خرائط جوجل",
      "تقرير مكالمات واتجاهات",
      "صفحات استهداف محلي",
      "إدارة وتقوية GBP",
    ],
    whatsappText: "مرحباً UNIQUE، أريد تصدر خرائط جوجل والسيو المحلي لنشاطي في مصر.",
  },
  {
    id: "ecommerce-seo",
    number: "03",
    badge: "مضاعفة مبيعات المتاجر",
    title: "سيو المتاجر الإلكترونية (WooCommerce • Shopify • EasyOrder)",
    enSubtitle: "Revenue-Driven E-Commerce SEO",
    summary:
      "نحوّل متجرك الإلكتروني من الاعتماد الكامل على إعلانات ميتا وتيك توك إلى ماكينة مبيعات عضوية مستمرة عبر تصدر صفحات التصنيفات والمنتجات للكلمات الشرائية عالية النية في مصر.",
    businessImpactInEgypt:
      "يخفض تكلفة الاستحواذ على الطلب (CAC) ويجلب مبيعات يومية مستمرة على مدار السنة بدون زيادة ميزانية الإعلانات.",
    executionChecklist: [
      "هيكلة صفحات التصنيفات (Category Hubs) لاستهداف الكلمات التجارية الأعلى بحثاً",
      "كتابة أوصاف منتجات مقنعة وفريدة خالية من النسخ مع Product + Offer (EGP) Schema",
      "حل مشاكل الفلاتر والتكرار (Faceted Navigation & Duplicate URLs)",
      "تحسين صور المنتجات وسرعة صفحات الدفع لرفع معدل التحويل العضوي",
      "تتبع المبيعات القادمة من جوجل بدقة عبر Google Analytics GA4 E-Commerce",
    ],
    deliverables: [
      "تصدر صفحات التصنيفات",
      "Product Schema بالجنيه",
      "تتبع مبيعات GA4",
      "توسيع الكلمات الشرائية",
    ],
    whatsappText: "مرحباً UNIQUE، لدي متجر إلكتروني في مصر وأريد زيادة مبيعاته عبر السيو.",
  },
  {
    id: "semantic-content",
    number: "04",
    badge: "المحتوى والسلطة الموضوعية",
    title: "المحتوى الدلالي وبناء السلطة الموضوعية (Semantic SEO)",
    enSubtitle: "Topical Authority & Commercial Content",
    summary:
      "لا نكتب مقالات حشو عامة — بل نبني خريطة موضوعية كاملة (Topical Map) تغطي كل مراحل رحلة العميل المصري، من صفحات الخدمات البيعية وصفحات المقارنة إلى الأدلة المتخصصة المتوافقة مع معايير E-E-A-T.",
    businessImpactInEgypt:
      "يجعل موقعك المرجع الأول في مجالك أمام جوجل والعملاء، ويرفع معدل تحويل الزائر القارئ إلى عميل متواصل.",
    executionChecklist: [
      "تحليل نية البحث (Search Intent) وفجوة المحتوى مقابل أقوى 5 منافسين في مصر",
      "بناء صفحات خدمات بيعية (Money Pages) مُحسّنة للتحويل والتصدر الفوري",
      "إنشاء عنقود محتوى مترابط (Topic Clusters) بروابط داخلية ذكية تقوي الصفحات الرئيسية",
      "تحديث وتحسين الصفحات القديمة (Content Refresh) لاستعادة وتصدر المراكز الأولى",
      "كتابة محتوى عربي وإنجليزي احترافي بخبرة حقيقية في السوق المصري بدون ركاكة",
    ],
    deliverables: [
      "خريطة كلمات ومحتوى",
      "مقالات وصفحات بيعية",
      "هندسة روابط داخلية",
      "تحديث المحتوى القديم",
    ],
    whatsappText: "مرحباً UNIQUE، أريد خطة محتوى دلالي وصفحات بيعية لتصدر جوجل في مصر.",
  },
  {
    id: "ai-search-geo",
    number: "05",
    badge: "الجيل الجديد من البحث",
    title: "تحسين الظهور في الذكاء الاصطناعي (GEO — ChatGPT & AI Overviews)",
    enSubtitle: "Generative Engine Optimization (GEO)",
    summary:
      "آلاف العملاء في مصر يسألون اليوم ChatGPT وGoogle AI Overviews وPerplexity عن «أفضل شركة» و«أفضل منتج» قبل الشراء. نهيّئ موقعك وعلامتك التجارية لتكون الإجابة الموصى بها داخل هذه المحركات.",
    businessImpactInEgypt:
      "يمنحك سبقاً تنافسياً هائلاً على 95% من الشركات المصرية التي ما زالت تطبق سيو تقليدي قديم.",
    executionChecklist: [
      "بناء سلطة الكيان الرقمي (Entity SEO) وربط علامتك ببيانات Organization Schema",
      "صياغة فقرات إجابات مباشرة وموثّقة بالأرقام والجداول يسهل على AI اقتباسها",
      "تعزيز الإشارات والعلامات التجارية (Brand Mentions) في المصادر والمنصات الموثوقة",
      "إضافة أقسام أسئلة وأجوبة مهيكلة (FAQ & Q&A) تجيب على أسئلة قرار الشراء",
      "مراقبة ظهور علامتك التجارية واقتباسها في محركات البحث التوليدية شهرياً",
    ],
    deliverables: [
      "تجهيز Entity & GEO",
      "محتوى قابل للاقتباس بـ AI",
      "Schema متقدم",
      "تفوق على المنافسين",
    ],
    whatsappText: "مرحباً UNIQUE، أريد تهيئة موقعي للظهور في جوجل وChatGPT وAI Overviews.",
  },
  {
    id: "offpage-authority",
    number: "06",
    badge: "الروابط الآمنة والسمعة",
    title: "بناء الروابط الخلفية الآمنة والعلاقات الرقمية (White-Hat Link Building)",
    enSubtitle: "Safe Authority & Digital PR",
    summary:
      "نبتعد تماماً عن روابط السبام الرخيصة التي تدمّر الدومين؛ ونبني لك ملف روابط خلفية طبيعي وقوي من مواقع ومنصات عربية ومصرية موثوقة ذات صلة مباشرة بنشاطك.",
    businessImpactInEgypt:
      "يرفع قوة الدومين (Domain Authority) ويحسم المنافسة لصالحك على الكلمات التجارية عالية الربحية.",
    executionChecklist: [
      "فحص وتنظيف الروابط الضارة (Toxic Backlinks Audit & Disavow) لحماية الموقع",
      "تحليل فجوة الروابط الخلفية (Link Gap) للمنافسين المتصدرين في مصر",
      "نشر مقالات ضيف (Guest Posts) وعلاقات رقمية في مواقع حقيقية ذات زيارات فعلية",
      "بناء إشارات محلية (Local Citations) تعزز موثوقية شركتك داخل مصر والخليج",
      "تقرير شهري شفاف بكل رابط جديد تم بناؤه وقوته وصفحته المستهدفة",
    ],
    deliverables: [
      "روابط White-Hat آمنة",
      "تنظيف الروابط السامة",
      "علاقات رقمية Digital PR",
      "تقرير روابط شهري",
    ],
    whatsappText: "مرحباً UNIQUE، أريد تقوية الدومين وبناء روابط خلفية آمنة لموقعي في مصر.",
  },
];

const EGYPT_LOCAL_SEO_ZONES: EgyptLocalZone[] = [
  {
    id: "new-cairo-capital",
    zoneTitle: "القاهرة الجديدة، التجمع الخامس والعاصمة الإدارية",
    badgeTag: "العقارات، العيادات والشركات الكبرى",
    commercialCharacter:
      "أعلى منطقة تنافسية في البحث التجاري بمصر — خاصة في التطوير العقاري، عيادات التجميل والأسنان، والمكاتب الاستشارية الكبرى.",
    targetBusinesses: [
      "شركات التطوير والتسويق العقاري",
      "العيادات التجميلية والطبية",
      "شركات الاستشارات والهندسة",
      "الشركات الخدمية الفاخرة",
    ],
    localSeoActions: [
      "استهداف كلمات الكمبوندات والمشروعات العقارية والخدمات الطبية عالية القيمة",
      "السيطرة على نتائج Local 3-Pack في التجمع الخامس والرحاب ومدينتي والعاصمة",
      "كتابة صفحات مقارنات وأدلة أسعار تقتنص الباحث الجاهز لاتخاذ القرار",
    ],
    localKeywords: [
      "شركة سيو في التجمع الخامس",
      "سيو شركات عقارات القاهرة الجديدة",
      "تسويق طبي وسيو عيادات التجمع",
    ],
  },
  {
    id: "zayed-october-maadi",
    zoneTitle: "الشيخ زايد، 6 أكتوبر، المهندسين والمعادي",
    badgeTag: "البراندات، الديكور والخدمات المتخصصة",
    commercialCharacter:
      "مركز ضخم للمتاجر الإلكترونية والبراندات المحلية، شركات التشطيب والديكور، الأكاديميات، ومراكز الرعاية الصحية.",
    targetBusinesses: [
      "شركات التشطيب والديكور",
      "المتاجر والبراندات المحلية",
      "المراكز الطبية ومعامل التحاليل",
      "الأكاديميات ومراكز التدريب",
    ],
    localSeoActions: [
      "بناء صفحات خدمات محلية لكل حي لالتقاط عمليات البحث القريبة (Near Me)",
      "تحسين صفحات أعمال التشطيب والديكور والصور لتصدر بحث الصور وخرائط جوجل",
      "ربط خطة السيو بحملات البحث الممولة لخفض تكلفة العميل الإجمالية",
    ],
    localKeywords: [
      "شركة سيو في الشيخ زايد",
      "تحسين محركات البحث 6 اكتوبر",
      "شركة سيو في المعادي والمهندسين",
    ],
  },
  {
    id: "alexandria-north-coast",
    zoneTitle: "الإسكندرية، الساحل الشمالي وقطاع السياحة واللوجستيات",
    badgeTag: "الموانئ، الشحن والسياحة",
    commercialCharacter:
      "سوق حيوي لشركات الشحن والتخليص الجمركي، الاستيراد والتصدير، السياحة والفنادق، والعيادات والشركات التجارية في عروس البحر المتوسط.",
    targetBusinesses: [
      "شركات الشحن والتخليص الجمركي",
      "شركات السياحة والفنادق",
      "العيادات والمستشفيات الكبرى",
      "الشركات التجارية والخدمية",
    ],
    localSeoActions: [
      "استهداف مزدوج (محلي داخل الإسكندرية + إقليمي ودولي للسياحة والشحن)",
      "تحسين ملفات Google Business Profile لفروع الإسكندرية والساحل الشمالي",
      "سيو متعدد اللغات (عربي/إنجليزي) لاقتناص عملاء الخارج والشركات الأجنبية",
    ],
    localKeywords: [
      "شركة سيو في الاسكندرية",
      "سيو شركات شحن ولوجستيات مصر",
      "تصدر جوجل لشركات السياحة",
    ],
  },
  {
    id: "industrial-export-egypt",
    zoneTitle: "المدن الصناعية (العاشر، العبور، السادات، برج العرب) — سيو التصدير",
    badgeTag: "المصانع وقطاع B2B والتصدير",
    commercialCharacter:
      "آلاف المصانع المصرية التي تستهدف عقود التوريد المحلي (B2B) والمستوردين في السعودية والإمارات وأفريقيا وأوروبا.",
    targetBusinesses: [
      "مصانع الأغذية والتعبئة والتغليف",
      "مصانع الكيماويات والبلاستيك",
      "شركات التوريدات والمعدات الصناعية",
      "مصانع الملابس والأثاث للتصدير",
    ],
    localSeoActions: [
      "استهداف كلمات البحث الإنجليزية والعربية التي يستخدمها المستوردون (Wholesale / Supplier Egypt)",
      "تحسين صفحات الكتالوج الصناعي والمواصفات الفنية لتصدر بحث جوجل الدولي",
      "توجيه زوار جوجل مباشرة إلى نماذج طلبات التصدير (RFQ) وواتساب المبيعات",
    ],
    localKeywords: [
      "سيو مصانع وشركات تصدير مصر",
      "تصدر جوجل لشركات B2B",
      "تسويق الكتروني للمصانع في مصر",
    ],
  },
];

const ECOMMERCE_SEO_PLATFORMS_EGYPT: EcommerceSeoPlatform[] = [
  {
    id: "woocommerce",
    platformName: "WooCommerce / WordPress",
    marketShareTag: "الأكثر انتشاراً في مصر",
    title: "سيو متاجر ووكومرس الاحترافي",
    painPointSolved:
      "تعاني معظم متاجر WooCommerce في مصر من بطء شديد وتكرار روابط الفلاتر وصفحات المنتجات الفارغة من الوصف، مما يمنعها من تصدر جوجل.",
    technicalSolutions: [
      "تنظيف الإضافات الثقيلة وضبط السرعة للوصول إلى Core Web Vitals ممتاز",
      "منع أرشفة صفحات الفلاتر والسلة وتوجيه قوة الزحف لصفحات التصنيفات المربحة",
      "ضبط Product + Offer (EGP) + AggregateRating Schema لإظهار السعر والنجوم في جوجل",
    ],
    expectedGrowth: "+180% إلى +340% نمو في زيارات ومبيعات جوجل العضوية خلال 4-6 أشهر",
    whatsappMsg: "مرحباً UNIQUE، لدي متجر WooCommerce في مصر وأريد تحسينه لتصدر جوجل.",
  },
  {
    id: "shopify-easyorder",
    platformName: "Shopify & EasyOrder",
    marketShareTag: "الأقوى للبراندات المحلية",
    title: "سيو متاجر شوبيفاي وإيزي أوردر",
    painPointSolved:
      "تعتمد معظم البراندات المحلية على إعلانات ميتا وتيك توك فقط وتخسر آلاف عمليات البحث اليومية المجانية عن منتجاتها في جوجل مصر.",
    technicalSolutions: [
      "بناء صفحات مجموعات (Collections) مستهدفة للكلمات الشرائية باللهجة المصرية والفصحى",
      "إصلاح مشاكل تكرار روابط المنتجات داخل المجموعات (Canonical URLs)",
      "تحسين سرعة القالب وربط مدونة إرشادية تدفع الزوار مباشرة لصفحات الشراء",
    ],
    expectedGrowth: "خفض الاعتماد على الإعلانات بنسبة 35% وبناء مبيعات عضوية يومية مستمرة",
    whatsappMsg: "مرحباً UNIQUE، لدي متجر Shopify أو EasyOrder في مصر وأريد خطة سيو لزيادة المبيعات.",
  },
  {
    id: "nextjs-custom-ecom",
    platformName: "Next.js & Custom Stores",
    marketShareTag: "الأسرع للمتاجر الكبرى",
    title: "سيو المتاجر والمنصات المبرمجة خصيصاً",
    painPointSolved:
      "تعاني بعض المتاجر المبرمجة بـ React/SPA من مشاكل عدم قراءة جوجل للمحتوى (Client-Side Rendering) وغياب خرائط الموقع الديناميكية.",
    technicalSolutions: [
      "تطبيق Server-Side Rendering (SSR) وMetadata ديناميكي لكل منتج وتصنيف",
      "توليد خرائط Sitemap آلية وتحديثها فور إضافة أي منتج جديد",
      "هيكلة روابط داخلية وBreadcrumb JSON-LD ترفع معدل النقر CTR في نتائج البحث",
    ],
    expectedGrowth: "فهرسة فورية لآلاف المنتجات وتفوق تقني حاسم على المنافسين",
    whatsappMsg: "مرحباً UNIQUE، لدي متجر مبرمج خصيصاً أو Next.js وأريد تحسينه تقنياً للسيو.",
  },
];

const GSC_DOCUMENTED_RESULTS_EGYPT: GscCaseStudy[] = [
  {
    id: "cs-real-estate-eg",
    sector: "التطوير والتسويق العقاري",
    cityInEgypt: "القاهرة الجديدة والتجمع الخامس",
    platform: "Next.js + Sanity CMS",
    projectTitle: "منصة تسويق ومشروعات عقارية — شرق القاهرة",
    timeframe: "خلال 5 أشهر",
    clicksBefore: "1,150 / شهر",
    clicksAfter: "14,800 / شهر",
    impressionsAfter: "490K ظهور",
    revenueGrowth: "+380% استفسارات واتساب مؤهلة",
    topKeywordsRanked: [
      "شقق للبيع في التجمع الخامس",
      "كمبوندات القاهرة الجديدة",
      "أسعار شقق العاصمة الإدارية",
    ],
    summary:
      "أعدنا بناء هيكل صفحات الكمبوندات مع جداول أسعار محدثة وSchema عقاري، مما قفز بالموقع للمراكز الثلاثة الأولى وخفّض تكلفة العميل مقارنة بإعلانات ميتا.",
  },
  {
    id: "cs-ecom-eg",
    sector: "التجارة الإلكترونية (براند محلي)",
    cityInEgypt: "القاهرة والإسكندرية",
    platform: "WooCommerce",
    projectTitle: "متجر إلكتروني لمنتجات العناية والأزياء — مصر",
    timeframe: "خلال 4 أشهر",
    clicksBefore: "2,400 / شهر",
    clicksAfter: "19,200 / شهر",
    impressionsAfter: "620K ظهور",
    revenueGrowth: "+265% مبيعات عضوية من جوجل",
    topKeywordsRanked: [
      "أفضل منتجات عناية في مصر",
      "شراء أونلاين مصر",
      "عروض متاجر مصر",
    ],
    summary:
      "حللنا مشاكل تكرار الفلاتر وأنشأنا صفحات تصنيفات بيعية مع Product Schema بالأسعار بالجنيه، ما أدى لمضاعفة الطلبات اليومية المجانية من جوجل.",
  },
  {
    id: "cs-medical-eg",
    sector: "العيادات والمراكز الطبية",
    cityInEgypt: "الشيخ زايد والمعادي والإسكندرية",
    platform: "WordPress + Local SEO",
    projectTitle: "مجموعة عيادات متخصصة في الأسنان والتجميل",
    timeframe: "خلال 90 يوماً",
    clicksBefore: "680 / شهر",
    clicksAfter: "7,450 / شهر",
    impressionsAfter: "215K ظهور",
    revenueGrowth: "+210% مكالمات وحجوزات خرائط جوجل",
    topKeywordsRanked: [
      "أفضل دكتور أسنان في الشيخ زايد",
      "مركز تجميل في المعادي",
      "أسعار زراعة الأسنان في مصر",
    ],
    summary:
      "جمعنا بين تصدر Local 3-Pack على خرائط جوجل ومقالات طبية موثّقة وفق E-E-A-T، ما ضاعف الحجوزات المباشرة دون زيادة ميزانية الإعلانات.",
  },
];

const EGYPT_6_SECTORS: EgyptSectorItem[] = [
  {
    id: "sec-real-estate",
    sectorName: "شركات العقارات والمطورين",
    projectsCount: "خبرة عالية في شرق وغرب القاهرة",
    avgGrowth: "+340% زيارات بيعية",
    description:
      "استهداف أدق كلمات الكمبوندات والوحدات السكنية والإدارية في القاهرة الجديدة والشيخ زايد والساحل الشمالي.",
    keySeoFocus: [
      "صفحات هبوط مخصصة لكل كمبوند ومطور",
      "تحسين صفحات الأسعار وأنظمة السداد",
      "السيطرة على البحث المحلي وخرائط جوجل",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد خطة سيو لشركة عقارات في مصر.",
  },
  {
    id: "sec-medical",
    sectorName: "العيادات والمستشفيات والمراكز الطبية",
    projectsCount: "تطبيق صارم لمعايير YMYL / E-E-A-T",
    avgGrowth: "+220% حجوزات ومكالمات",
    description:
      "رفع ثقة جوجل والمرضى بموقعك الطبي وتصدر خرائط جوجل والكلمات العلاجية في نطاق عيادتك.",
    keySeoFocus: [
      "توثيق صفحات الأطباء والخبرات الطبية",
      "تصدر خرائط جوجل Local 3-Pack لكل فرع",
      "محتوى طبي يجيب على أسئلة المرضى بدقة",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد خطة سيو لعيادة أو مركز طبي في مصر.",
  },
  {
    id: "sec-ecom",
    sectorName: "المتاجر الإلكترونية والبراندات",
    projectsCount: "WooCommerce • Shopify • EasyOrder",
    avgGrowth: "+260% مبيعات عضوية",
    description:
      "تحويل البحث اليومي عن المنتجات والأسعار في مصر إلى طلبات مباشرة تقلل اعتمادك على الإعلانات الممولة.",
    keySeoFocus: [
      "تحسين صفحات التصنيفات والمنتجات",
      "تطبيق Product + Offer (EGP) Schema",
      "بناء محتوى مقارنات وأدلة شراء",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد خطة سيو لمتجر إلكتروني في مصر.",
  },
  {
    id: "sec-factories",
    sectorName: "المصانع وشركات الاستيراد والتصدير",
    projectsCount: "سيو B2B محلي ودولي",
    avgGrowth: "+190% طلبات تسعير RFQ",
    description:
      "جذب تجار الجملة والمستوردين من مصر والخليج وأوروبا عبر تصدر كلمات التصنيع والتوريد بالعربي والإنجليزي.",
    keySeoFocus: [
      "استهداف كلمات التوريد والجملة والتصدير",
      "تحسين صفحات الكتالوج والمواصفات الفنية",
      "سيو إنجليزي دولي لأسواق الخليج وأوروبا",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد خطة سيو لمصنع أو شركة تصدير في مصر.",
  },
  {
    id: "sec-tourism",
    sectorName: "السياحة والفنادق والغوص والرحلات",
    projectsCount: "سيو متعدد اللغات (حتى 7 لغات)",
    avgGrowth: "+290% حجوزات مباشرة",
    description:
      "زيادة الحجوزات المباشرة بدون عمولات المنصات الوسيطة عبر تصدر جوجل باللغات الإنجليزية والألمانية والعربية.",
    keySeoFocus: [
      "ضبط Hreflang وسيو دولي للسياح الأجانب",
      "تحسين صفحات البرامج والرحلات بالصور السريعة",
      "بناء روابط من منصات سفر عالمية موثوقة",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد خطة سيو لشركة سياحة أو رحلات في مصر.",
  },
  {
    id: "sec-services",
    sectorName: "شركات الخدمات، الديكور، المحاماة والتعليم",
    projectsCount: "استهداف نية شراء عالية",
    avgGrowth: "+240% عملاء واتساب",
    description:
      "تصدر الكلمات التي يبحث بها العميل الجاهز للتعاقد فوراً مثل «أفضل شركة...» و«أسعار... في مصر».",
    keySeoFocus: [
      "صفحات خدمات بيعية عالية التحويل",
      "دراسات حالة ومعارض أعمال مهيأة للسيو",
      "الظهور في إجابات ChatGPT وAI Overviews",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد خطة سيو لشركة خدمات أو مكتب استشاري في مصر.",
  },
];

const UNIQUE_4_SEO_TABLES_EGYPT: SeoAuditTableGroup[] = [
  {
    id: "audit-table",
    tableTitle: "1. فحص وتشخيص الموقع (SEO Audit)",
    tableBadge: "+120 نقطة فحص",
    items: [
      "تحليل شامل لوضع الموقع في Google Search Console قبل البدء",
      "استخراج الكلمات المفتاحية التجارية وفجوات المنافسين في مصر",
      "فحص الصفحات المكررة وأخطاء الأرشفة والروابط المكسورة 404",
      "اختبار الموقع للتأكد من خلوه من عقوبات جوجل أو الروابط السامة",
      "قياس Core Web Vitals وسرعة الموبايل على الشبكات المصرية",
    ],
  },
  {
    id: "onpage-table",
    tableTitle: "2. تحسين السيو الداخلي (On-Page SEO)",
    tableBadge: "هيكلة ومحتوى",
    items: [
      "ضبط العناوين (Meta Titles & H1–H3) والأوصاف لرفع نسبة النقر CTR",
      "إعادة هيكلة الروابط الداخلية لتوزيع قوة الدومين على الصفحات البيعية",
      "كتابة وتحديث صفحات الخدمات والمقالات وفق نية البحث وE-E-A-T",
      "ضغط الصور بصيغة WebP وإضافة نصوص بديلة Alt Text مستهدفة",
      "تضمين Schema JSON-LD مخصص (Service، Product، LocalBusiness، FAQ)",
    ],
  },
  {
    id: "offpage-table",
    tableTitle: "3. السيو الخارجي والسلطة (Off-Page & GEO)",
    tableBadge: "White-Hat آمن",
    items: [
      "بناء روابط خلفية عالية الجودة من مواقع عربية ومصرية ذات صلة",
      "تقوية ملف Google Business Profile وخرائط جوجل Local 3-Pack",
      "بناء الإشارات المحلية (Local Citations) وتوحيد بيانات NAP",
      "تعزيز إشارات العلامة التجارية للظهور في ChatGPT وAI Overviews",
      "تنظيف الروابط الضارة ومراقبة ملف الباك لينكس شهرياً",
    ],
  },
  {
    id: "reporting-table",
    tableTitle: "4. القياس والتقارير الشهرية (Reporting)",
    tableBadge: "شفافية 100%",
    items: [
      "تقرير شهري مباشر من Google Search Console (النقرات والظهور والترتيب)",
      "تقرير تتبع ترتيب الكلمات المفتاحية المستهدفة أسبوعاً بأسبوع",
      "تقرير التحويلات (ضغطات واتساب، المكالمات، والمبيعات عبر GA4)",
      "ملخص كامل لكل ما تم تنفيذه من إصلاحات ومقالات وروابط خلال الشهر",
      "خطة واضحة للشهر التالي بناءً على البيانات الفعلية",
    ],
  },
];

const UNIQUE_PORTFOLIO_PROJECTS: { name: string; category: string }[] = [
  { name: "بوابة الرياض للدليل والخدمات", category: "دليل ومنصة خدمات متصدرة لجوجل" },
  { name: "ذا لايت هاوس (The Light House)", category: "بوابة سياحة وغوص — سيو 7 لغات" },
  { name: "موقع رنين التجاري (Raneen)", category: "متجر إلكتروني متكامل عالي السرعة" },
  { name: "مؤسسة المملكة للمقاولات والخدمات", category: "سيو شركات ومقاولات — الخليج" },
  { name: "البدر للعقارات والاستثمار", category: "سيو تطوير وتسويق عقاري" },
  { name: "تعقيم للتنظيف والصيانة", category: "سيو محلي وخدمات منزلية" },
  { name: "لمسات للتصميم والوكالات", category: "موقع وكالة إبداعية ومعرض أعمال" },
  { name: "منصة قرآني للتعليم", category: "منصة تعليمية تفاعلية متكاملة" },
];

const NINETY_DAY_ROADMAP_EGYPT: NinetyDayPhase[] = [
  {
    phaseNum: "01",
    timeframe: "الأيام 1 – 30",
    title: "التشخيص التقني وخريطة الكلمات المربحة",
    description:
      "نصلح كل العوائق التقنية التي تمنع جوجل من فهرسة وتصدر موقعك، ونبني خطة كلمات بيعية مبنية على تحليل أقوى منافسيك في مصر.",
    tasks: [
      "فحص تقني شامل + إصلاح أخطاء Search Console والسرعة",
      "استخراج الكلمات التجارية الأعلى عائدًا وبناء Topical Map",
      "تحسين أهم الصفحات البيعية (Money Pages) وضبط Schema JSON-LD",
    ],
    milestoneOutput: "موقع نظيف تقنياً + بداية تحسن فوري في الفهرسة والظهور",
  },
  {
    phaseNum: "02",
    timeframe: "الأيام 31 – 60",
    title: "المحتوى الدلالي، خرائط جوجل وبناء السلطة",
    description:
      "نطلق إنتاج المحتوى التخصصي المترابط، نرفع ترتيبك في خرائط جوجل Local 3-Pack، ونبدأ بناء روابط خلفية آمنة وعالية الجودة.",
    tasks: [
      "نشر مقالات وصفحات هبوط محلية متوافقة مع E-E-A-T وGEO",
      "تطوير ملف Google Business Profile وتعزيز الإشارات المحلية",
      "بدء حملة روابط خلفية White-Hat تقوي الصفحات التجارية",
    ],
    milestoneOutput: "دخول كلمات بيعية للصفحة الأولى + زيادة ملحوظة في النقرات",
  },
  {
    phaseNum: "03",
    timeframe: "الأيام 61 – 90",
    title: "تثبيت الصدارة ومضاعفة التحويلات والمبيعات",
    description:
      "نوسع السيطرة على الكلمات عالية المنافسة، نحسّن معدل النقر CTR ومعدل تحويل الزائر لعميل، ونضبط الاستراتيجية وفق أرقام Search Console.",
    tasks: [
      "دفع الكلمات في المراكز 4–10 للوصول للمراكز 1–3 الأولى",
      "تحسين صفحات التحويل لرفع نسبة طلبات واتساب والمبيعات",
      "توسيع الظهور في إجابات ChatGPT وGoogle AI Overviews",
    ],
    milestoneOutput: "نمو عضوي مستدام وتدفق عملاء يومي من جوجل بتكلفة أقل",
  },
];

const EGYPT_SEO_PACKAGES_EGP: EgyptSeoPackageEGP[] = [
  {
    id: "local-starter-seo",
    packageName: "باقة السيو المحلي والانطلاق",
    badgeText: "للعيادات والمكاتب والشركات الناشئة",
    priceEGP: "7,500",
    billingCycle: "جنيه مصري / شهرياً",
    idealFor:
      "مثالية للعيادات، المكاتب الاستشارية، وشركات الخدمات المحلية في القاهرة أو الإسكندرية الساعية لتصدر منطقتها وخرائط جوجل.",
    isPopular: false,
    keywordsCount: "حتى 20 كلمة تجارية مستهدفة",
    includedServices: [
      "فحص سيو تقني شامل وإصلاح أخطاء Google Search Console",
      "تحسين وإدارة ملف Google Business Profile لتصدر Local 3-Pack",
      "تحسين 5 صفحات خدمات رئيسية (On-Page + Schema JSON-LD)",
      "كتابة 4 مقالات سيو دلالية متخصصة شهرياً",
      "بناء روابط خلفية آمنة وإشارات محلية (Local Citations)",
    ],
    technicalAndContentFeatures: [
      "ضبط سرعة الموقع الأساسية وتوافق الموبايل",
      "تهيئة أسئلة وأجوبة مهيكلة للظهور في AI Overviews",
      "تتبع دقيق لضغطات واتساب والمكالمات",
    ],
    reportingAndSupport: "تقرير شهري شفاف من Search Console + متابعة عبر واتساب.",
    whatsappMsg: "مرحباً UNIQUE، أرغب في الاشتراك أو الاستفسار عن باقة السيو المحلي (7,500 جنيه شهرياً).",
  },
  {
    id: "growth-seo-pro",
    packageName: "باقة النمو للشركات والمتاجر",
    badgeText: "الأكثر طلباً في مصر",
    priceEGP: "14,500",
    billingCycle: "جنيه مصري / شهرياً",
    idealFor:
      "الأنسب للمتاجر الإلكترونية (WooCommerce / Shopify) وشركات العقارات والديكور والخدمات المنافسة على مستوى مصر.",
    isPopular: true,
    keywordsCount: "حتى 50 كلمة تجارية وتصنيفية",
    includedServices: [
      "سيو تقني متقدم + تحسين Core Web Vitals وSchema شامل للمنتجات/الخدمات",
      "تحسين مستمر لصفحات التصنيفات والخدمات البيعية لرفع التحويل",
      "كتابة 8 مقالات وصفحات هبوط تجارية شهرياً وفق خريطة Topical Map",
      "حملة بناء روابط خلفية White-Hat وعلاقات رقمية شهرية قوية",
      "تحسين متكامل للظهور في ChatGPT وPerplexity وGoogle AI (GEO)",
    ],
    technicalAndContentFeatures: [
      "تحليل شهري للمنافسين واقتناص فرص الكلمات الجديدة",
      "إدارة وتقوية السيو المحلي لعدة مناطق/فروع في مصر",
      "ربط وتتبع مبيعات وتحويلات جوجل عبر GA4",
    ],
    reportingAndSupport: "تقرير شهري مفصّل + اجتماع مراجعة شهري + مدير حساب مخصص.",
    whatsappMsg: "مرحباً UNIQUE، أرغب في حجز باقة النمو للسيو (14,500 جنيه شهرياً) لموقعي/متجري في مصر.",
  },
  {
    id: "enterprise-seo-eg",
    packageName: "باقة السيطرة والمؤسسات (Enterprise)",
    badgeText: "للمطورين العقاريين والمصانع والتصدير",
    priceEGP: "26,000",
    billingCycle: "جنيه مصري / شهرياً",
    idealFor:
      "مصممة للشركات الكبرى، المطورين العقاريين، المصانع المصدّرة، والمتاجر الضخمة التي تستهدف الصدارة في مصر والخليج بلغتين.",
    isPopular: false,
    keywordsCount: "+100 كلمة تجارية (عربي وإنجليزي)",
    includedServices: [
      "استراتيجية سيو شاملة متعددة اللغات (عربي/إنجليزي) لمصر والخليج وأوروبا",
      "تطوير وإنتاج 16 صفحة ومقالاً متخصصاً شهرياً لبناء سلطة موضوعية كاملة",
      "حملة Digital PR وروابط خلفية عالية السلطة (High Authority Backlinks)",
      "تحسين CRO مستمر لرفع عائد الزيارات العضوية ومبيعات الموقع",
      "استراتيجية GEO متكاملة لترشيح علامتك التجارية في محركات الذكاء الاصطناعي",
    ],
    technicalAndContentFeatures: [
      "دعم هندسي مباشر مع فريق البرمجة (Next.js / Custom / Large Stores)",
      "لوحة متابعة حية (Live Looker Studio Dashboard) لنتائج البحث والمبيعات",
      "أولوية قصوى في التنفيذ والتواصل المباشر مع قائد فريق السيو",
    ],
    reportingAndSupport: "تقارير نصف شهرية + لوحة بيانات حية + اجتماعات استراتيجية.",
    whatsappMsg: "مرحباً UNIQUE، أرغب في مناقشة باقة السيطرة والمؤسسات للسيو (26,000 جنيه شهرياً).",
  },
];

const EGYPT_CHATGPT_QUESTIONS: ChatGptClientQuestion[] = [
  {
    tag: "أسعار السيو في مصر",
    q: "كم أسعار باقات السيو الشهرية في مصر عام 2026؟",
    a: "تتراوح أسعار خدمات السيو الاحترافية في مصر عادةً بين 7,500 جنيه شهرياً للأنشطة المحلية والعيادات، و14,500 جنيه للشركات المتوسطة والمتاجر الإلكترونية، وتبدأ من 26,000 جنيه للشركات الكبرى والمطورين العقاريين والمواقع متعددة اللغات التي تنافس في مصر والخليج.",
  },
  {
    tag: "مدة ظهور النتائج",
    q: "متى أبدأ في رؤية نتائج حقيقية ومبيعات من السيو في مصر؟",
    a: "تبدأ مؤشرات التحسن في الأرشفة والظهور وحركة الكلمات خلال أول 30 إلى 60 يوماً بعد الإصلاحات التقنية وتحسين الصفحات البيعية، بينما يتحقق النمو التجاري القوي والمستقر في المبيعات والعملاء عادةً بين الشهر الثالث والسادس حسب شدة المنافسة في قطاعك.",
  },
  {
    tag: "معايير اختيار شركة سيو",
    q: "كيف أختار أفضل شركة سيو في مصر وأتجنب الوعود الوهمية؟",
    a: "اختر الشركة التي تبدأ بفحص حقيقي لموقعك قبل التعاقد، وتربط خطتها بالكلمات البيعية والمبيعات لا مجرد زيارات عشوائية، وتقدم لك تقارير شفافة مباشرة من Google Search Console، وتبتعد عن وعود «الصفحة الأولى في أسبوع» أو الروابط العشوائية التي تعرّض موقعك للعقاب.",
  },
  {
    tag: "السيو والذكاء الاصطناعي",
    q: "هل ما زال السيو مفيداً في مصر مع انتشار ChatGPT وGoogle AI؟",
    a: "أصبح أهم من أي وقت مضى؛ لأن محركات الذكاء الاصطناعي مثل ChatGPT وGoogle AI Overviews تعتمد في إجاباتها وترشيحاتها على المواقع المتصدرة تقنياً وذات السلطة الموضوعية القوية والبيانات المنظمة (Schema). في UNIQUE نجمع بين SEO التقليدي وGEO معاً.",
  },
];

const EGYPT_SEO_FAQS: EgyptSeoFaq[] = [
  {
    id: "faq-1",
    category: "البدء والتعاقد",
    question: "هل تقدمون فحصاً مجانياً لموقعي قبل الاشتراك في باقة سيو؟",
    answer:
      "نعم، بمجرد إرسال رابط موقعك عبر واتساب يقوم فريقنا بفحص أولي مجاني خلال 24 ساعة يوضح لك أهم المشاكل التقنية الحالية، وفرص الكلمات المفتاحية مقارنة بمنافسيك في مصر، والباقة الأنسب لحجم نشاطك.",
  },
  {
    id: "faq-2",
    category: "العقود والالتزام",
    question: "هل هناك عقد إلزامي لمدة سنة أم الدفع شهرياً؟",
    answer:
      "لا نفرض عقوداً احتكارية سنوية. الاشتراك شهري مرن مع توصية عملية بالاستمرار 3 إلى 6 أشهر كحد أدنى لتحقيق أقصى عائد تراكمي من تحسين محركات البحث، ويمكنك مراجعة النتائج في كل تقرير شهري بشفافية كاملة.",
  },
  {
    id: "faq-3",
    category: "نوع المنصة",
    question: "هل تعملون على جميع منصات المواقع والمتاجر؟",
    answer:
      "نعم، لدينا خبرة عملية عميقة في تحسين محركات البحث لمواقع Next.js وReact وWordPress ومتاجر WooCommerce وShopify وEasyOrder والمواقع المبرمجة خصيصاً (Laravel / Custom).",
  },
  {
    id: "faq-4",
    category: "المحتوى والروابط",
    question: "هل الباقات تشمل كتابة المقالات وبناء الروابط الخلفية؟",
    answer:
      "بالتأكيد. كل باقاتنا الشهرية شاملة للتنفيذ التقني، كتابة وتحسين المحتوى التسويقي المتوافق مع السيو، وبناء الروابط الخلفية الآمنة (White-Hat) دون الحاجة لتوظيف فريق إضافي.",
  },
  {
    id: "faq-5",
    category: "السيو المحلي وخرائط جوجل",
    question: "هل يمكن استهداف مدينة واحدة مثل القاهرة أو الإسكندرية أو التجمع فقط؟",
    answer:
      "نعم، نبني استراتيجية Local SEO دقيقة تستهدف الحي أو المحافظة التي تعمل بها لتصدر نتائج خرائط جوجل Local 3-Pack والكلمات المحلية عالية التحويل، مع إمكانية التوسع لاحقاً لكل محافظات مصر أو الخليج.",
  },
  {
    id: "faq-6",
    category: "التقارير والقياس",
    question: "كيف أتابع تقدم موقعي كل شهر؟",
    answer:
      "تحصل على تقرير شهري واضح ومباشر من Google Search Console وGoogle Analytics GA4 يعرض تطور النقرات، الظهور، ترتيب الكلمات البيعية، عدد العملاء المتواصلين، وكل المهام المنفذة خلال الشهر.",
  },
];

const EGYPT_SEMANTIC_KEYWORDS_AR: string[] = [
  "شركة سيو في مصر",
  "أفضل شركة سيو في مصر",
  "شركات تحسين محركات البحث في مصر",
  "أسعار باقات السيو في مصر 2026",
  "شركة سيو في القاهرة والتجمع الخامس",
  "شركة سيو في الإسكندرية",
  "سيو متاجر إلكترونية WooCommerce وShopify",
  "تصدر خرائط جوجل Local SEO مصر",
  "خبير سيو في مصر",
  "تحسين الظهور في ChatGPT وAI Overviews",
  "سيو شركات العقارات والعيادات في مصر",
  "سيو المصانع وشركات التصدير B2B",
  "فحص سيو تقني لموقعك SEO Audit",
  "بناء روابط خلفية آمنة White-Hat",
  "زيادة مبيعات جوجل العضوية في مصر",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD WITH CAIRO/EGYPT GEOCOORDINATES 30.0444, 31.2357)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "UNIQUE Digital Agency — شركة سيو في مصر",
    url: "https://www.uniquee-ws.com/egypt-seo",
    telephone: "+201270506511",
    email: "godyslem139@gmail.com",
    priceRange: "7,500 EGP - 26,000+ EGP",
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
      name: "باقات خدمات السيو الشهرية في مصر",
      itemListElement: EGYPT_SEO_PACKAGES_EGP.map((pkg) => ({
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
    mainEntity: EGYPT_SEO_FAQS.map((faq) => ({
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
        name: "شركة سيو في مصر",
        item: "https://www.uniquee-ws.com/egypt-seo",
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
  align = "center",
}: {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  align?: "center" | "right";
}) {
  const isCenter = align === "center";
  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-4xl mx-auto" : "text-right max-w-3xl"}`}>
      <div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-bold mb-5 ${
          isCenter ? "mx-auto" : ""
        }`}
      >
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
// MAIN PAGE COMPONENT — EGYPT SEO COMPANY (ARABIC RTL)
// ============================================================================

export default function EgyptSeoPage() {
  const heroAuditWhatsapp = getWhatsAppUrl(
    "مرحباً UNIQUE Digital Agency! أريد فحص سيو مجاني (SEO Audit) لموقعي أو متجري الإلكتروني في مصر."
  );

  return (
    <div
      dir="rtl"
      lang="ar"
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
                هندسة تصدر جوجل والذكاء الاصطناعي في مصر
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#services" className="hover:text-cyan-300 transition">
              الخدمات
            </a>
            <a href="#zones" className="hover:text-cyan-300 transition">
              مناطق مصر
            </a>
            <a href="#ecommerce" className="hover:text-cyan-300 transition">
              سيو المتاجر
            </a>
            <a href="#results" className="hover:text-cyan-300 transition">
              نتائج GSC
            </a>
            <a href="#audit-tables" className="hover:text-cyan-300 transition">
              قوائم الفحص
            </a>
            <a href="#packages" className="hover:text-cyan-300 transition">
              الباقات بالجنيه
            </a>
            <a href="#faq" className="hover:text-cyan-300 transition">
              الأسئلة الشائعة
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/en/egypt-seo"
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
          2. HERO SECTION — EGYPT SEO COMPANY + LIVE GSC & MAPS SIMULATOR
      ==================================================================== */}
      <section className="relative overflow-hidden pt-14 pb-20 lg:pt-24 lg:pb-28 border-b border-neutral-900">
        {/* Ambient Glows (Blue / Cyan / Emerald only) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-1/4 w-[520px] h-[520px] rounded-full bg-blue-600/12 blur-[140px]" />
          <div className="absolute top-20 left-1/4 w-[440px] h-[440px] rounded-full bg-cyan-500/10 blur-[140px]" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[560px] h-[300px] rounded-full bg-emerald-500/8 blur-[130px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link href="/" className="hover:text-cyan-300 transition">
              الرئيسية
            </Link>
            <ChevronLeft className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-cyan-300 font-semibold">شركة سيو في مصر</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Right Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>القاهرة • الإسكندرية • جميع محافظات مصر</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">الصفحة الأولى بجوجل + ChatGPT (GEO)</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.18] mb-6">
                أقوى{" "}
                <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  شركة سيو في مصر
                </span>{" "}
                لتحويل بحث جوجل وخرائط جوجل إلى عملاء ومبيعات يومية
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                توقف عن الاعتماد الكامل على الإعلانات الممولة متصاعدة التكلفة. في{" "}
                <strong className="text-white">UNIQUE Digital Agency</strong> نبني لك منظومة سيو
                هندسية متكاملة للشركات، العيادات، العقارات، المصانع، ومتاجر WooCommerce وShopify
                في مصر — بنتائج موثّقة مباشرة من{" "}
                <strong className="text-cyan-300">Google Search Console</strong>.
              </p>

              {/* Key Trust Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "نتائج نمو حقيقية موثّقة من Search Console",
                  "تصدر خرائط جوجل Local 3-Pack في القاهرة والإسكندرية",
                  "سيو متاجر WooCommerce وShopify وEasyOrder",
                  "تهيئة كاملة للظهور في ChatGPT وAI Overviews",
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
                  <span>شاهد باقات السيو بالجنيه</span>
                  <ArrowLeft className="w-4 h-4 text-cyan-400" />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  واتساب مباشر: <strong className="text-neutral-200" dir="ltr">{WHATSAPP_NUMBER_DISPLAY}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  باقات شهرية مرنة بالجنيه المصري بدون عقود احتكارية
                </span>
              </div>
            </div>

            {/* Hero Left Visual: Live Egypt GSC & Google Maps Local 3-Pack Simulator */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-cyan-300">
                      لوحة متابعة الأداء — Google Search Console (مصر)
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    +310% نمو عضوي
                  </span>
                </div>

                {/* GSC Metrics Strip */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">إجمالي النقرات</div>
                    <div className="text-xl font-black text-blue-400" dir="ltr">41.4K</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">↑ 295% سنوياً</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">مرات الظهور</div>
                    <div className="text-xl font-black text-cyan-300" dir="ltr">1.32M</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">↑ بحث مصر</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">متوسط الترتيب</div>
                    <div className="text-xl font-black text-amber-300" dir="ltr">#2.1</div>
                    <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">كلمات بيعية</div>
                  </div>
                </div>

                {/* Visual Growth Bars */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      مسار نمو الزيارات العضوية (90 – 180 يوم)
                    </span>
                    <span className="text-[11px] text-neutral-500">موثّق GSC</span>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-24 pt-2" dir="ltr">
                    {[16, 23, 33, 45, 58, 71, 86, 100].map((h, i) => (
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

                {/* Egypt Google Maps Local 3-Pack Preview */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      السيطرة على خرائط جوجل في مصر
                    </span>
                    <span className="text-[11px] text-amber-300 font-semibold">التجمع • زايد • الإسكندرية</span>
                  </div>
                  {[
                    { rank: "#1", name: "علامتك التجارية (بإشراف UNIQUE SEO)", stat: "+185 مكالمة/شهر" },
                    { rank: "#2", name: "منافس محلي أ", stat: "بدون Schema" },
                    { rank: "#3", name: "منافس محلي ب", stat: "سرعة ضعيفة" },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs border ${
                        idx === 0
                          ? "bg-blue-500/12 border-blue-500/40 text-white"
                          : "bg-black/60 border-neutral-800/80 text-neutral-400"
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          className={`px-1.5 py-0.5 rounded font-black text-[10px] ${
                            idx === 0 ? "bg-emerald-500/20 text-emerald-300" : "bg-neutral-800 text-neutral-400"
                          }`}
                        >
                          {row.rank}
                        </span>
                        <span className="truncate font-semibold">{row.name}</span>
                      </div>
                      <span className={`shrink-0 mr-2 text-[11px] font-bold ${idx === 0 ? "text-amber-300" : "text-neutral-500"}`}>
                        {row.stat}
                      </span>
                    </div>
                  ))}
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
          3. SEO VS PAID ADS VS CHEAP SEO COMPARISON TABLE
      ==================================================================== */}
      <section className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="اقتصاديات النمو في السوق المصري"
            title="لماذا تستثمر الشركات الذكية في مصر في"
            highlight="السيو التراكمي بدلاً من الاعتماد على الإعلانات فقط؟"
            subtitle="مقارنة واقعية بين منظومة السيو الهندسية من UNIQUE، الإعلانات الممولة، وعروض السيو العشوائية."
          />

          <div className="overflow-x-auto rounded-3xl border border-neutral-800 bg-[#060911]">
            <table className="w-full text-right border-collapse min-w-[780px]">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-950/90">
                  <th className="py-5 px-6 text-xs font-extrabold text-neutral-400">
                    معيار التقييم
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold text-cyan-300 bg-blue-500/10">
                    منظومة UNIQUE للسيو (مصر)
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold text-amber-300">
                    الإعلانات الممولة (ميتا / جوجل)
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold text-neutral-400">
                    عروض السيو الرخيصة والعشوائية
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80 text-sm">
                {SEO_VS_ADS_COMPARISON_EGYPT.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/40 transition">
                    <td className="py-4 px-6 font-bold text-white">{row.criterion}</td>
                    <td className="py-4 px-6 text-emerald-300 font-semibold bg-blue-500/[0.04]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.uniqueSeo}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-neutral-300">{row.paidAds}</td>
                    <td className="py-4 px-6 text-neutral-400">{row.cheapSeo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. 6 CORE EGYPT SEO SERVICES
      ==================================================================== */}
      <section id="services" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="هندسة البحث الشاملة (360° SEO)"
            title="6 ركائز أساسية نطبقها في"
            highlight="خدمات تحسين محركات البحث في مصر"
            subtitle="تنفيذ متكامل يجمع بين السيو التقني، السيو المحلي، المحتوى الدلالي، الروابط الآمنة، والذكاء الاصطناعي GEO."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {CORE_SEO_SERVICES_EGYPT.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800/90 hover:border-blue-500/40 p-7 sm:p-8 flex flex-col justify-between transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-3xl font-black bg-gradient-to-l from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      {service.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-1.5">{service.title}</h3>
                  <div className="text-xs font-semibold text-blue-400 mb-4" dir="ltr">
                    {service.enSubtitle}
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-5">{service.summary}</p>

                  <div className="rounded-2xl bg-emerald-500/8 border border-emerald-500/25 p-4 mb-6">
                    <div className="text-[11px] font-extrabold text-emerald-300 mb-1">
                      الأثر التجاري المباشر في السوق المصري
                    </div>
                    <p className="text-xs text-neutral-200 leading-relaxed">
                      {service.businessImpactInEgypt}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-bold text-neutral-400 mb-3">
                      خطوات التنفيذ الفعلية:
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
                  <span>ناقش هذه الخدمة معنا عبر واتساب</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. HYPER-LOCAL EGYPT COMMERCIAL & INDUSTRIAL ZONES
      ==================================================================== */}
      <section id="zones" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="استهداف جغرافي دقيق (Local SEO)"
            title="خطط سيو محلية مخصصة لأقوى"
            highlight="4 محاور تجارية وصناعية في مصر"
            subtitle="نخصص الكلمات المفتاحية وصفحات الهبوط وخرائط جوجل لتتناسب مع سلوك الباحث في كل مدينة ومنطقة داخل مصر."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {EGYPT_LOCAL_SEO_ZONES.map((zone) => (
              <div
                key={zone.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-cyan-500/40 p-7 transition"
              >
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{zone.badgeTag}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                  {zone.zoneTitle}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                  {zone.commercialCharacter}
                </p>

                <div className="mb-5">
                  <div className="text-xs font-bold text-cyan-300 mb-2.5">
                    الأنشطة الأعلى عائداً في هذه المنطقة:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {zone.targetBusinesses.map((biz, i) => (
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
                  {zone.localSeoActions.map((act, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
                  {zone.localKeywords.map((kw, i) => (
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
          6. EGYPT E-COMMERCE SEO (WOOCOMMERCE, SHOPIFY, EASYORDER, NEXT.JS)
      ==================================================================== */}
      <section id="ecommerce" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="سيو المتاجر الإلكترونية في مصر"
            title="حلول سيو متخصصة لمتاجر"
            highlight="WooCommerce وShopify وEasyOrder"
            subtitle="ضاعف مبيعات متجرك اليومية من بحث جوجل المجاني مع حل مشاكل الفلاتر وضبط Product Schema بالأسعار بالجنيه."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {ECOMMERCE_SEO_PLATFORMS_EGYPT.map((plat) => (
              <div
                key={plat.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-blue-500/40 p-7 flex flex-col justify-between transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="inline-flex items-center gap-2 text-cyan-300 font-extrabold text-sm">
                      <ShoppingBag className="w-4 h-4 text-blue-400" />
                      <span>{plat.platformName}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] font-bold text-amber-300">
                      {plat.marketShareTag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3">{plat.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                    {plat.painPointSolved}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {plat.technicalSolutions.map((sol, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-2xl bg-blue-500/10 border border-blue-500/25 p-3.5 mb-6">
                    <div className="text-[11px] font-bold text-blue-300 mb-0.5">
                      النمو المتوقع للمتجر
                    </div>
                    <div className="text-sm font-extrabold text-white">{plat.expectedGrowth}</div>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(plat.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-l from-blue-600/20 to-cyan-500/20 hover:from-blue-600 hover:to-cyan-500 border border-blue-500/35 text-white text-xs sm:text-sm font-bold transition"
                >
                  <span>اطلب خطة سيو لمتجرك الآن</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. DOCUMENTED GSC RESULTS + 6 EGYPTIAN SECTORS
      ==================================================================== */}
      <section id="results" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="نتائج موثّقة بالأرقام"
            title="نمو حقيقي وملموس في"
            highlight="Google Search Console بالسوق المصري"
            subtitle="نقيس نجاح كل حملة سيو بعدد النقرات البيعية، المكالمات، والطلبات الفعلية لا بالكلام الإنشائي."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-20">
            {GSC_DOCUMENTED_RESULTS_EGYPT.map((cs) => (
              <div
                key={cs.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-emerald-500/40 p-7 flex flex-col justify-between transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                      {cs.sector}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-400">{cs.timeframe}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2">{cs.projectTitle}</h3>
                  <div className="text-xs text-cyan-300 font-medium mb-4">
                    {cs.cityInEgypt} • {cs.platform}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3">
                      <div className="text-[10px] text-neutral-500">النقرات (قبل ← بعد)</div>
                      <div className="text-xs sm:text-sm font-black text-white mt-1">
                        {cs.clicksBefore} ← <span className="text-emerald-400">{cs.clicksAfter}</span>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3">
                      <div className="text-[10px] text-neutral-500">أثر المبيعات والعملاء</div>
                      <div className="text-xs sm:text-sm font-black text-amber-300 mt-1">{cs.revenueGrowth}</div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                    {cs.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80">
                  <div className="text-[11px] text-neutral-500 font-bold mb-2">
                    أبرز الكلمات المتصدرة ({cs.impressionsAfter}):
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.topKeywordsRanked.map((kw, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-200"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SectionHeader
            badge="استراتيجيات حسب القطاع"
            title="خطط سيو متخصصة لـ"
            highlight="6 قطاعات عالية الربحية في مصر"
            subtitle="لكل قطاع نية بحث ومنافسة مختلفة — نصمم خطة مخصصة تقتنص العميل الأكثر استعداداً للشراء."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EGYPT_6_SECTORS.map((sec) => (
              <div
                key={sec.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-blue-500/40 p-6 flex flex-col justify-between transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-cyan-300">{sec.projectsCount}</span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-bold text-emerald-300">
                      {sec.avgGrowth}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2.5">{sec.sectorName}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                    {sec.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {sec.keySeoFocus.map((focus, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-200">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{focus}</span>
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
                  <span>اطلب خطة سيو لمجالك</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. UNIQUE'S 4 SEO AUDIT TABLES + LIVE TERMINAL + REAL PORTFOLIO
      ==================================================================== */}
      <section id="audit-tables" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="منهجية UNIQUE الموثّقة"
            title="4 جداول هندسية لفحص وتنفيذ"
            highlight="السيو الاحترافي في مصر"
            subtitle="شفافية كاملة في كل خطوة ننفذها داخل موقعك وخارجه لضمان تصدر مستقر وآمن."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {UNIQUE_4_SEO_TABLES_EGYPT.map((table) => (
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

          {/* Live SEO Diagnostic Terminal + Real Portfolio Projects */}
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
                      unique-seo-cli — Egypt Diagnostic Engine
                    </span>
                  </div>
                  <span className="text-emerald-400">ONLINE</span>
                </div>
                <div className="space-y-2.5 text-neutral-300 leading-relaxed">
                  <div>
                    <span className="text-cyan-400">$</span> unique-audit --target=&quot;egypt-eg&quot; --domain=&quot;uniquee-ws.com&quot;
                  </div>
                  <div className="text-emerald-400">
                    ✓ [Core Web Vitals] Mobile LCP: 1.0s | INP: 39ms | CLS: 0.00
                  </div>
                  <div className="text-emerald-400">
                    ✓ [Geo-Schema] ProfessionalService + GeoCoordinates (30.0444, 31.2357) Valid
                  </div>
                  <div className="text-emerald-400">
                    ✓ [Bilingual Hreflang] ar-EG &lt;-&gt; en-EG Reciprocal Mapping Verified
                  </div>
                  <div className="text-blue-300">
                    ✓ [AI Search / GEO] Entity Citation Readiness: 98/100 (ChatGPT &amp; Perplexity)
                  </div>
                  <div className="text-amber-300">
                    ✓ [Egypt Maps 3-Pack] New Cairo • Zayed • Maadi • Alexandria Active
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between font-sans">
                <span className="text-neutral-400 text-xs">Official Website: www.uniquee-ws.com</span>
                <a
                  href={heroAuditWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white font-bold text-xs inline-flex items-center gap-1"
                >
                  <span>Run My Free Audit</span>
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
                    مشاريع ومواقع متصدرة في مصر والخليج
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
          9. 90-DAY EGYPT SEO EXECUTION ROADMAP
      ==================================================================== */}
      <section className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="خارطة تنفيذ واضحة"
            title="خطة الـ 90 يوماً لتصدر"
            highlight="نتائج بحث جوجل في مصر"
            subtitle="مسار عمل مدروس وموثّق بالأرقام من اليوم الأول للفحص التقني حتى تصدر الكلمات البيعية."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {NINETY_DAY_ROADMAP_EGYPT.map((phase) => (
              <div
                key={phase.phaseNum}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-extrabold text-cyan-300">
                      المرحلة {phase.phaseNum}
                    </span>
                    <span className="text-xs font-bold text-amber-300">{phase.timeframe}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">{phase.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-5">
                    {phase.description}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {phase.tasks.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-3.5">
                  <div className="text-[10px] font-bold text-emerald-300 mb-0.5">
                    المخرج الملموس:
                  </div>
                  <div className="text-xs font-bold text-white">{phase.milestoneOutput}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          10. TRANSPARENT EGP MONTHLY SEO PACKAGES
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="باقات شفافة بالجنيه المصري"
            title="أسعار وباقات خدمات السيو"
            highlight="الشهرية في مصر (EGP)"
            subtitle="باقات شاملة للتنفيذ التقني والمحتوى والروابط الآمنة بتقارير Search Console واضحة بدون مصاريف خفية."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {EGYPT_SEO_PACKAGES_EGP.map((pkg) => (
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
                    <span className="text-xs font-bold text-amber-300">{pkg.keywordsCount}</span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2">{pkg.packageName}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">{pkg.idealFor}</p>

                  <div className="flex items-baseline gap-2 pb-6 mb-6 border-b border-neutral-800">
                    <span className="text-4xl font-black text-white">{pkg.priceEGP}</span>
                    <span className="text-xs font-bold text-cyan-300">{pkg.billingCycle}</span>
                  </div>

                  <div className="mb-5">
                    <div className="text-xs font-bold text-neutral-400 mb-3">
                      ما يشمله التنفيذ الشهري:
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.includedServices.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-bold text-neutral-400 mb-3">
                      مميزات تقنية وإضافية:
                    </div>
                    <ul className="space-y-2">
                      {pkg.technicalAndContentFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-3 text-xs text-neutral-300 mb-6">
                    <strong className="text-blue-300">التقارير والمتابعة:</strong>{" "}
                    {pkg.reportingAndSupport}
                  </div>
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
                  <span>ابدأ {pkg.packageName}</span>
                  <ArrowUpLeft className="w-4 h-4" />
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
            badge="إجابات موثّقة لرواد الأعمال ومحركات AI"
            title="أسئلة يطرحها أصحاب الشركات في مصر"
            highlight="على ChatGPT وجوجل قبل التعاقد"
            subtitle="إجابات مباشرة وشفافة حول التكلفة، مدة ظهور النتائج، ومعايير اختيار شركة السيو الصحيحة."
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
            badge="الأسئلة الشائعة"
            title="كل ما تحتاج معرفته عن"
            highlight="خدمات تحسين محركات البحث في مصر"
            subtitle="تفاصيل الفحص المجاني، مدة التعاقد، كتابة المحتوى، السيو المحلي، والتقارير الشهرية."
          />

          <div className="max-w-4xl mx-auto space-y-4 mb-20">
            {EGYPT_SEO_FAQS.map((faq) => (
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

          {/* Semantic Keywords Cloud */}
          <div className="rounded-3xl bg-[#070B14] border border-neutral-800 p-7 sm:p-8">
            <div className="text-xs font-bold text-blue-400 mb-2">
              التغطية الدلالية لخدمات السيو في مصر
            </div>
            <h3 className="text-lg font-extrabold text-white mb-5">
              أبرز مجالات وتخصصات تحسين محركات البحث التي ننفذها في مصر
            </h3>
            <div className="flex flex-wrap gap-2">
              {EGYPT_SEMANTIC_KEYWORDS_AR.map((kw, idx) => (
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
          12. FINAL FREE EGYPT SEO AUDIT CTA & FOOTER
      ==================================================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B1730] via-[#070D1A] to-[#051418] border border-blue-500/35 p-8 sm:p-12 lg:p-14 text-center shadow-2xl shadow-blue-950/50">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>فحص سيو تقني مجاني + تحليل منافسين خلال 24 ساعة</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              جاهز لتصدر الصفحة الأولى في جوجل{" "}
              <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                داخل مصر؟
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              أرسل لنا رابط موقعك أو متجرك الإلكتروني عبر واتساب الآن، وسنرسل لك تقريراً عملياً
              بأهم الأخطاء التي تعيق تصدرك وفرص الكلمات البيعية وخطة 90 يوماً مخصصة لنشاطك.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroAuditWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>احصل على فحص السيو المجاني الآن</span>
                <ArrowUpLeft className="w-4 h-4" />
              </a>

              <a
                href={`tel:+${WHATSAPP_INTERNATIONAL}`}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-black/70 border border-neutral-700 hover:border-cyan-400 text-white font-bold text-base transition"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span dir="ltr">{WHATSAPP_NUMBER_DISPLAY}</span>
              </a>
            </div>
          </div>

          <footer className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <div>
              © {new Date().getFullYear()} UNIQUE Digital Agency — شركة سيو في مصر وتحسين محركات البحث.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/en/egypt-seo" className="hover:text-cyan-300 transition">
                SEO Company in Egypt (EN)
              </Link>
              <Link href="/egypt-web-design" className="hover:text-cyan-300 transition">
                شركة تصميم مواقع في مصر
              </Link>
              <Link href="/saudi-seo" className="hover:text-cyan-300 transition">
                شركة سيو في السعودية
              </Link>
              <Link href="/riyadh-seo" className="hover:text-cyan-300 transition">
                شركة سيو في الرياض
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}