import type { Metadata } from "next";
import Link from "next/link";

// ============================================================================
// 0. BUILT-IN ZERO-DEPENDENCY SVG ICONS (NO EXTERNAL LIBRARY NEEDED)
// ============================================================================
interface IconProps {
  className?: string;
}

function Sparkles({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
    </svg>
  );
}

function Award({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function CheckCircle2({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function Check({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ArrowUpLeft({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M17 17H7V7" />
    </svg>
  );
}

function ArrowLeft({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ChevronLeft({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function TrendingUp({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function MapPin({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MessageSquare({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function PhoneCall({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function Cpu({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" />
      <path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" />
    </svg>
  );
}

function ShoppingBag({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

// ============================================================================
// 1. COMPANY WHATSAPP CONFIGURATION (+20 12 70506511)
// ============================================================================
const WHATSAPP_NUMBER_DISPLAY = "01270506511";
const WHATSAPP_INTERNATIONAL = "201270506511";

function getWhatsAppUrl(customMessage: string): string {
  return `https://wa.me/${WHATSAPP_INTERNATIONAL}?text=${encodeURIComponent(customMessage)}`;
}

// ============================================================================
// 2. NEXT.JS APP ROUTER SEO METADATA (TITLE, DESCRIPTION, CANONICAL, OG)
// ============================================================================
export const metadata: Metadata = {
  title:
    "شركة سيو في السعودية | أفضل شركة تحسين محركات البحث SEO في الرياض وجدة | Unique",
  description:
    "أفضل شركة سيو في السعودية (الرياض، جدة، الدمام). نضاعف زيارات ومبيعات موقعك ومتجرك على سلة وزد وشوبيفاي وووردبريس و Next.js عبر استراتيجيات SEO تقنية، محتوى بيعي، وباك لينك آمن بنتائج موثقة في Google Search Console.",
  keywords: [
    "شركة سيو في السعودية",
    "أفضل شركة سيو في السعودية",
    "شركة تحسين محركات البحث في السعودية",
    "شركة سيو في الرياض",
    "شركة سيو في جدة",
    "شركة سيو في الدمام",
    "سيو المتاجر الإلكترونية في السعودية",
    "سيو متاجر سلة",
    "سيو متاجر زد",
    "سيو شوبيفاي السعودية",
    "خبير سيو في السعودية",
    "أسعار السيو في السعودية",
    "خدمات SEO في السعودية",
    "تصدر نتائج بحث جوجل السعودية",
    "تحسين محركات البحث بالذكاء الاصطناعي",
    "SEO Company Saudi Arabia",
    "Best SEO Agency Riyadh",
    "SEO Services Jeddah",
    "UNIQUE Digital Agency",
  ],
  authors: [{ name: "UNIQUE Digital Agency" }],
  publisher: "UNIQUE",
  metadataBase: new URL("https://marketing-beta-gold-30.vercel.app"),
  alternates: {
    canonical: "/saudi-seo",
    languages: {
      "ar-SA": "/saudi-seo",
      ar: "/saudi-seo",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "شركة سيو في السعودية | تصدر الصفحة الأولى في جوجل وضاعف مبيعاتك | Unique",
    description:
      "شريكك الاستراتيجي لتصدر نتائج بحث جوجل في الرياض وجدة والدمام وكافة مدن المملكة. خدمات سيو متكاملة للشركات ومتاجر سلة وزد وشوبيفاي ومواقع ووردبريس و Next.js.",
    url: "https://marketing-beta-gold-30.vercel.app/saudi-seo",
    siteName: "Unique Agency",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة سيو في السعودية | أفضل شركة تحسين محركات البحث SEO | Unique",
    description:
      "نتائج موثقة من Google Search Console لمضاعفة الزيارات والمبيعات العضوية للشركات والمتاجر الإلكترونية في المملكة العربية السعودية.",
  },
};

// ============================================================================
// 3. TYPESCRIPT INTERFACES FOR SAUDI SEO PAGE
// ============================================================================
interface HeroKpiCard {
  id: string;
  value: string;
  title: string;
  subtitle: string;
  accent: "emerald" | "cyan" | "blue" | "amber";
}

interface SeoServicePillar {
  id: string;
  number: string;
  badge: string;
  title: string;
  englishName: string;
  summary: string;
  businessImpactInKSA: string;
  executionChecklist: string[];
  deliverables: string[];
  whatsappText: string;
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
  city: string;
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

interface SaudiCitySeoZone {
  id: string;
  cityName: string;
  englishName: string;
  commercialImportance: string;
  highDemandSectors: string[];
  localSeoStrategy: string[];
  sampleKeywords: string[];
}

interface SeoVsAdsRow {
  criterion: string;
  uniqueSeo: string;
  paidAds: string;
  randomCheapSeo: string;
}

interface NinetyDayPhase {
  phaseNum: string;
  timeframe: string;
  title: string;
  description: string;
  tasks: string[];
  milestoneOutput: string;
}

interface SaudiSeoPackageSAR {
  id: string;
  packageName: string;
  badgeText: string;
  priceSAR: string;
  billingCycle: string;
  idealFor: string;
  isPopular: boolean;
  keywordsCount: string;
  includedServices: string[];
  technicalAndContentFeatures: string[];
  reportingAndSupport: string;
  whatsappMsg: string;
}

interface SaudiSeoFaq {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// 4. COMPREHENSIVE SAUDI SEO DATA ARRAYS (CUSTOMER-FACING & CONVERSION-FOCUSED)
// ============================================================================

const HERO_KPIS: HeroKpiCard[] = [
  {
    id: "kpi-gsc-clicks",
    value: "+380%",
    title: "متوسط نمو الزيارات العضوية من جوجل",
    subtitle: "نتائج موثقة بالأرقام الفعلية من داخل حسابات Google Search Console لعملائنا في المملكة",
    accent: "emerald",
  },
  {
    id: "kpi-first-page",
    value: "60 - 90 يوم",
    title: "للوصول إلى الصفحة الأولى في جوجل السعودية",
    subtitle: "منهجية علمية تجمع السيو التقني والمحتوى البيعي والروابط الموثوقة بدون أي ممارسات سبام",
    accent: "cyan",
  },
  {
    id: "kpi-ecommerce-stores",
    value: "سلة • زد • شوبيفاي",
    title: "تخصص عميق في سيو المتاجر السعودية",
    subtitle: "نحول متجرك من الاعتماد الكلي على الإعلانات الممولة إلى ماكينة مبيعات عضوية تعمل 24/7",
    accent: "amber",
  },
  {
    id: "kpi-ai-seo",
    value: "Google + AI",
    title: "تصدر بحث جوجل وإجابات الذكاء الاصطناعي",
    description: "",
    subtitle: "تهيئة مزدوجة للظهور في الصفحة الأولى لجوجل وفي ترشيحات ChatGPT و Google AI Overviews",
    accent: "blue",
  } as HeroKpiCard,
];

const CORE_SEO_SERVICES_KSA: SeoServicePillar[] = [
  {
    id: "ksa-seo-technical",
    number: "01",
    badge: "الأساس الهندسي للتصدر السريع",
    title: "الفحص الشامل والسيو التقني المتقدم (Technical SEO & Core Web Vitals)",
    englishName: "Deep Technical SEO Audit, Speed & Indexation Engineering",
    summary:
      "قبل كتابة أي كلمة أو بناء أي رابط، نفحص موقعك أو متجرك بالكامل عبر أدوات الفحص الهندسي (Screaming Frog و Google Search Console) لاكتشاف وإصلاح كافة العوائق التقنية التي تمنع عناكب جوجل من أرشفة صفحاتك أو ترفع معدل ارتداد الزوار.",
    businessImpactInKSA:
      "إصلاح الأخطاء التقنية وحده يرفع كفاءة أرشفة الموقع بنسبة تصل إلى 150% خلال الأسابيع الأولى ويمنحك تفوقاً فورياً في سرعة الجوال داخل المملكة.",
    executionChecklist: [
      "إصلاح مشاكل عدم الأرشفة والروابط القانونية الخاطئة (Non-Indexable Canonical Errors) وصفحات الخطأ 404 والتحويلات 301",
      "تحسين مؤشرات Core Web Vitals (سرعة LCP < 0.8s، استقرار CLS، واستجابة INP) وتصفير حمولات الشبكة الضخمة",
      "بناء وتفعيل أكواد البيانات المنظمة (Schema.org JSON-LD) للمنتجات، الخدمات، التقييمات، والأسئلة الشائعة",
      "ضبط خريطة الموقع الذكية (XML Sitemap) وملف Robots.txt وتوجيه ميزانية الزحف (Crawl Budget) نحو صفحات البيع",
      "تهيئة البنية البرمجية لمواقع WordPress و Next.js ومتاجر سلة وزد وشوبيفاي لقراءة فورية من Googlebot",
    ],
    deliverables: [
      "تقرير فحص تقني شامل قبل وبعد الإصلاح",
      "أداء PageSpeed باللون الأخضر على الجوال",
      "تفعيل Schema.org وحل كافة تحذيرات Search Console",
    ],
    whatsappText: "مرحباً شركة Unique، أرغب في طلب فحص وخدمة السيو التقني (Technical SEO) لموقعي في السعودية.",
  },
  {
    id: "ksa-seo-ecommerce",
    number: "02",
    badge: "الحل الجذري لتجار المملكة",
    title: "سيو المتاجر الإلكترونية في السعودية (سلة، زد، شوبيفاي، ووكومرس)",
    englishName: "E-Commerce SEO for Salla, Zid, Shopify & WooCommerce in KSA",
    summary:
      "نعالج المشكلة الأكبر التي تواجه المتاجر الإلكترونية في السعودية: «إذا أوقفنا الإعلانات يوماً واحداً تتوقف الطلبات!». نعيد هيكلة أقسام وتصنيفات ومنتجات متجرك على سلة أو زد أو شوبيفاي ليتصدر الكلمات الشرائية المباشرة ويجلب لك مبيعات يومية مجانية ومستدامة.",
    businessImpactInKSA:
      "خفض تكلفة الاستحواذ على العميل (CAC) بنسبة 60% وبناء قناة مبيعات عضوية مستمرة ترفع أرباح المتجر الصافية شهراً بعد شهر.",
    executionChecklist: [
      "إعادة هيكلة شجرة التصنيفات والأقسام الفرعية (Category Architecture) لاستهداف الكلمات ذات الحجم البحثي العالي في السعودية",
      "كتابة عناوين وأوصاف منتجات بيعية متوافقة مع السيو تغنيك عن النصوص المكررة أو المختصرة التي تضعف ترتيب المتجر",
      "تفعيل Product Schema لعرض سعر المنتج بالريال السعودي (SAR)، حالة التوفر، وتقييمات النجوم مباشرة في نتائج بحث جوجل",
      "معالجة مشاكل تكرار الروابط الناتجة عن الفلترة والترتيب والتصنيفات المتعددة في متاجر سلة وزد وشوبيفاي",
      "بناء مدونة متجر استراتيجية تستهدف أسئلة المشترين في السعودية وتربطهم داخلياً بصفحات المنتجات الأكثر ربحية",
    ],
    deliverables: [
      "هيكلة كاملة لأقسام المتجر والكلمات الشرائية",
      "تحسين صفحات المنتجات والتصنيفات الرئيسية",
      "تفعيل النتائج الغنية للمنتجات (Rich Product Snippets)",
    ],
    whatsappText: "مرحباً شركة Unique، أمتلك متجراً إلكترونياً في السعودية وأرغب في خدمة سيو المتاجر لمضاعفة المبيعات العضوية.",
  },
  {
    id: "ksa-seo-keywords",
    number: "03",
    badge: "استهداف العملاء الجاهزين للشراء",
    title: "هندسة الكلمات المفتاحية ودراسة النية الشرائية للسوق السعودي",
    englishName: "Saudi Search Intent Mapping & High-ROI Keyword Research",
    summary:
      "لا نختار كلمات مفتاحية عشوائية لمجرد زيادة الزيارات الوهمية؛ بل ندرس كيف يبحث العميل السعودي فعلياً في الرياض وجدة والدمام، ونصنف الكلمات حسب نية الباحث (شرائية، خدمية، محلية، أو معلوماتية) لنربط كل كلمة بصفحة هبوط مخصصة تحول الزائر إلى عميل.",
    businessImpactInKSA:
      "جذب زيارات عالية الجودة من أشخاص يبحثون عن خدمتك أو منتجك في نفس اللحظة ومستعدين للتواصل عبر واتساب أو إتمام الشراء.",
    executionChecklist: [
      "تحليل الكلمات الشرائية والخدمية المباشرة (Transactional & Commercial Keywords) باللهجة السعودية والفصحى والإنجليزية",
      "كشف فجوات الكلمات المفتاحية (Keyword Gap Analysis) التي يتصدر بها منافسوك في السوق السعودي وتتفوق عليهم فيها",
      "اقتناص الكلمات الطويلة عالية التحويل (Long-Tail Keywords) التي تحقق مبيعات سريعة خلال أول 45 يوماً",
      "بناء خريطة توزيع الكلمات (Keyword Mapping Matrix) لمنع التنافس الداخلي بين صفحات موقعك (Keyword Cannibalization)",
    ],
    deliverables: [
      "ملف استراتيجية الكلمات المفتاحية الشامل للسعودية",
      "خريطة ربط كل كلمة مفتاحية بالصفحة المستهدفة",
      "تحليل الكلمات الرابحة لدى أقوى 5 منافسين",
    ],
    whatsappText: "مرحباً شركة Unique، أرغب في دراسة الكلمات المفتاحية وخطة تصدر جوجل لنشاطي في السعودية.",
  },
  {
    id: "ksa-seo-onpage",
    number: "04",
    badge: "تحويل الصفحات إلى مغناطيس للعملاء",
    title: "تحسين السيو الداخلي وهندسة التحويل (On-Page SEO & CRO)",
    englishName: "On-Page Optimization, Semantic Structure & Conversion Rate Optimization",
    summary:
      "نطور كل صفحة داخل موقعك لتكون مثالية في عيون خوارزميات جوجل ومقنعة تماماً للزائر السعودي. نضبط العناوين، الترويسات، الروابط الداخلية، وعناصر الثقة لضمان ارتفاع نسبة النقر (CTR) ومعدل التحويل البيعي.",
    businessImpactInKSA:
      "رفع ترتيب الصفحات الحالية في جوجل مع مضاعفة نسبة تحول الزوار إلى اتصالات وطلبات عبر واتساب.",
    executionChecklist: [
      "صياغة Meta Title و Meta Description جذابة ترفع نسبة النقر إلى الظهور (CTR) في صفحة نتائج جوجل السعودية",
      "تنظيم التسلسل الهرمي للترويسات (H1, H2, H3) وتضمين المرادفات الدلالية (NLP & LSI Entities) بشكل طبيعي",
      "بناء شبكة ربط داخلي عنقودية (Internal Linking Silos) توزع القوة والسلطة على أهم صفحات الخدمات والمنتجات",
      "تحسين الصور بإضافة النصوص البديلة (Alt Tags) وضغطها بصيغ WebP/AVIF مع تسمية الملفات بالكلمات المستهدفة",
      "تطبيق معايير الخبرة والموثوقية (Google E-E-A-T) وإضافة أزرار تواصل واضحة تزيد من تفاعل المستخدم وبقائه في الموقع",
    ],
    deliverables: [
      "تحسين كامل لكافة صفحات الخدمات والمنتجات",
      "هيكلة ربط داخلي ذكية تعزز الصفحات البيعية",
      "تحسين تجربة المستخدم ومسارات التحويل (CRO)",
    ],
    whatsappText: "مرحباً شركة Unique، أرغب في تحسين السيو الداخلي (On-Page SEO) لصفحات موقعي في السعودية.",
  },
  {
    id: "ksa-seo-local",
    number: "05",
    badge: "السيطرة على البحث الجغرافي والخرائط",
    title: "السيو المحلي وتصدر خرائط جوجل في مدن المملكة (Local SEO & GBP)",
    englishName: "Saudi Local SEO & Google Business Profile Domination",
    summary:
      "عندما يبحث عميل في الرياض أو جدة أو الدمام عن «أفضل شركة... قريبة مني» أو يفتح خرائط جوجل، نضمن ظهور نشاطك التجاري في المراكز الثلاثة الأولى (Local 3-Pack) لجذب الاتصالات المباشرة والزيارات الفعلية لمقرك أو فروعك.",
    businessImpactInKSA:
      "زيادة الاتصالات الهاتفية المباشرة وطلبات الاتجاهات على خرائط جوجل بنسبة تتجاوز 280% في المدن المستهدفة.",
    executionChecklist: [
      "إنشاء وتوثيق وتحسين ملف نشاطك التجاري على Google Business Profile (خرائط جوجل) بالكلمات المفتاحية المحلية",
      "بناء صفحات هبوط محلية مخصصة لمدن المملكة (الرياض، جدة، الدمام، الخبر، مكة، المدينة...) بمحتوى فريد 100%",
      "توحيد بيانات النشاط (NAP: الاسم، العنوان، رقم الهاتف) في الأدلة التجارية السعودية الموثوقة",
      "استراتيجية احترافية لزيادة التقييمات الإيجابية الحقيقية والرد عليها بطرق تعزز الثقة والترتيب المحلي",
    ],
    deliverables: [
      "تحسين شامل لملف خرائط جوجل (GBP)",
      "صفحات مدن محلية متوافقة مع السيو الجغرافي",
      "تصدر نتائج البحث المحلي والخرائط في مدينتك",
    ],
    whatsappText: "مرحباً شركة Unique، أرغب في خدمة السيو المحلي وتصدر خرائط جوجل لنشاطي في السعودية.",
  },
  {
    id: "ksa-seo-content-authority",
    number: "06",
    badge: "بناء المرجعية والسلطة الموضوعية",
    title: "كتابة المحتوى البيعي وبناء السلطة الموضوعية (Topical Authority & AI SEO)",
    englishName: "Topical Authority Content Clusters & AI Search Optimization (GEO)",
    summary:
      "جوجل اليوم لا يرتب الصفحات المنعزلة، بل يكافئ المواقع التي تغطي مجالها بعمق وشمولية (Topical Authority). نكتب لك محتوى عربياً وإنجليزياً متخصصاً يجمع بين قوة الإقناع البيعي والتوافق مع خوارزميات جوجل ومحركات الذكاء الاصطناعي (ChatGPT & Google AI Overviews).",
    businessImpactInKSA:
      "تحقيق سيطرة شاملة على مئات الكلمات المفتاحية في قطاعك وبناء ثقة عالية تجعل عميلك يختارك أنت دون تردد.",
    executionChecklist: [
      "بناء العناقيد الموضوعية (Content Clusters & Pillar Pages) التي تغطي كافة جوانب خدمتك أو منتجاتك في السوق السعودي",
      "كتابة مقالات وصفحات خدمات متعمقة على يد كتاب محتوى متخصصين في السيو (بدون حشو ممل أو نصوص آلية ركيكة)",
      "تهيئة المحتوى بصيغة الإجابات المباشرة والجداول المقارنة والقوائم المرقمة لاقتناص الـ Featured Snippets",
      "تحسين ظهور علامتك التجارية في إجابات الذكاء الاصطناعي التوليدي (Generative Engine Optimization - GEO)",
    ],
    deliverables: [
      "خطة محتوى شهرية مبنية على العناقيد الموضوعية",
      "مقالات وصفحات بيعية حصرية متوافقة 100% مع السيو",
      "تحديث وتطوير المحتوى القديم لرفع ترتيبه (Content Refresh)",
    ],
    whatsappText: "مرحباً شركة Unique، أرغب في خطة محتوى سيو وبناء سلطة موضوعية لموقعي في السعودية.",
  },
  {
    id: "ksa-seo-linkbuilding",
    number: "07",
    badge: "قوة الدومين بطرق آمنة 100%",
    title: "بناء الروابط الخلفية الآمنة والجيست بوست الموثوق (White-Hat Link Building)",
    englishName: "High-Authority White-Hat Backlinks & Saudi Digital PR",
    summary:
      "نرفض تماماً أساليب الباك لينك العشوائي أو المزارع المشبوهة (Spam Backlinks) التي تدمر المواقع عند أول تحديث لجوجل. نبني لموقعك روابط خلفية قوية وطبيعية (White-Hat) من مواقع وصحف ومدونات عربية وسعودية ذات صلة حقيقية بمجالك وذات Domain Rating مرتفع.",
    businessImpactInKSA:
      "رفع سلطة الدومين (Domain Authority / DR) بأمان تام وتثبيت موقعك في المراكز الأولى للكلمات شديدة المنافسة في السعودية.",
    executionChecklist: [
      "تحليل ملف الروابط الخلفية لمنافسيك المتصدرين في السعودية واقتناص أقوى الفرص المرجعية",
      "نشر مقالات استضافية (Guest Posts) وتقارير صحفية في مواقع عربية وخليجية موثوقة وذات زيارات حقيقية",
      "تنويع النصوص الرابطة (Anchor Text Profile) بشكل طبيعي يحمي موقعك من أي عقوبات خوارزمية",
      "فحص وتنظيف ملف الروابط القديم والتنصل من أي روابط ضارة أو سبام (Toxic Backlink Disavow)",
    ],
    deliverables: [
      "روابط خلفية سياقية عالية الجودة (White-Hat 100%)",
      "تنظيف وحماية ملف الباك لينك من الروابط الضارة",
      "تقرير شهري شفاف بكافة الروابط المنشأة ومقاييسها",
    ],
    whatsappText: "مرحباً شركة Unique، أرغب في بناء باك لينك آمن وقوي لرفع ترتيب موقعي في السعودية.",
  },
];

const ECOMMERCE_SEO_PLATFORMS_KSA: EcommerceSeoPlatform[] = [
  {
    id: "ecom-salla-ksa",
    platformName: "سيو متاجر سلة (Salla SEO)",
    marketShareTag: "المنصة رقم 1 للتجار في السعودية",
    title: "تحسين محركات البحث المتخصص لمتاجر سلة في المملكة",
    painPointSolved:
      "أغلب متاجر سلة تعتمد على نفس القوالب الافتراضية وتترك عناوين المنتجات والأقسام بدون تهيئة، مما يجعلها غير مرئية في جوجل وتعتمد فقط على إعلانات سناب وتيك توك المكلفة.",
    technicalSolutions: [
      "ضبط إعدادات السيو المتقدمة في لوحة تحكم سلة، تحسين ملف robots.txt، وربط Google Search Console و GA4",
      "إعادة صياغة عناوين وأوصاف التصنيفات والمنتجات بالكلمات الشرائية التي يبحث عنها المتسوق السعودي",
      "تخصيص تصميم المتجر بـ Custom CSS لتحسين تجربة التصفح وسرعة العرض ورفع معدل التحويل",
      "بناء مقالات مدونة سلة وربطها بالمنتجات الأكثر مبيعاً لاقتناص الباحثين في مرحلة المقارنة والشراء",
    ],
    expectedGrowth: "+250% إلى +400% زيادة في الزيارات والمبيعات العضوية خلال 3-6 أشهر",
    whatsappMsg: "مرحباً Unique، أمتلك متجراً على منصة سلة في السعودية وأريد تحسين السيو وزيادة المبيعات من جوجل.",
  },
  {
    id: "ecom-zid-ksa",
    platformName: "سيو متاجر زد (Zid SEO)",
    marketShareTag: "نمو متسارع لقطاع التجزئة السعودي",
    title: "تهيئة وتصدر متاجر زد في نتائج البحث الأولى بجوجل السعودية",
    painPointSolved:
      "تراكم المنتجات بدون هيكلة تصنيفات واضحة وغياب المحتوى التعريفي في صفحات الأقسام يؤدي لضعف أرشفة متاجر زد في الكلمات التنافسية الكبرى.",
    technicalSolutions: [
      "بناء هيكل أقسام هرمي ذكي يستهدف الكلمات العامة والفرعية عالية البحث في السوق السعودي",
      "تحسين سرعة تحميل صور المنتجات والبنرات لضمان تجربة تصفح فورية على الجوال",
      "إضافة أوصاف غنية بالكلمات المفتاحية أعلى وأسفل صفحات التصنيفات لرفع سلطتها لدى جوجل",
      "تفعيل بيانات المنتجات المنظمة وبناء روابط خارجية قوية لأهم أقسام المتجر",
    ],
    expectedGrowth: "مضاعفة الظهور في الصفحة الأولى للكلمات التجارية وتقليل الاعتماد على الإعلانات",
    whatsappMsg: "مرحباً Unique، أمتلك متجراً على منصة زد في السعودية وأرغب في خدمة السيو المتكاملة.",
  },
  {
    id: "ecom-shopify-woocommerce-ksa",
    platformName: "سيو متاجر شوبيفاي وووكومرس (Shopify & WooCommerce SEO)",
    marketShareTag: "للبراندات الكبرى والمتاجر المخصصة",
    title: "هندسة سيو احترافية لمتاجر شوبيفاي وووكومرس في السعودية",
    painPointSolved:
      "مشاكل تكرار الروابط في شوبيفاي (/collections/ vs /products/) وثقل الإضافات في ووكومرس التي تضعف مؤشرات Core Web Vitals وتؤخر الترتيب.",
    technicalSolutions: [
      "إصلاح هيكلة الروابط الداخلية في ثيم شوبيفاي للاعتماد على الرابط القانوني المباشر للمنتج",
      "تسريع متاجر شوبيفاي وووكومرس برمجياً وتفعيل Product & Review Schema بالريال السعودي",
      "تحسين صفحات المجموعات (Collections) والفلترة لمنع هدر ميزانية الزحف (Crawl Budget)",
      "استهداف الكلمات الشرائية باللغتين العربية والإنجليزية للمتاجر التي تخاطب كافة شرائح المملكة",
    ],
    expectedGrowth: "سيطرة كاملة على الكلمات الشرائية للعلامة التجارية والمنتجات في جوجل السعودية",
    whatsappMsg: "مرحباً Unique، أمتلك متجر شوبيفاي / ووكومرس في السعودية وأريد تطوير السيو والمبيعات.",
  },
];

const GSC_DOCUMENTED_RESULTS: GscCaseStudy[] = [
  {
    id: "gsc-case-1",
    sector: "متجر عطور وبخور وعود فاخر",
    city: "الرياض وكافة مناطق المملكة",
    platform: "متجر سلة (Salla)",
    projectTitle: "الانتقال من الاعتماد الكامل على إعلانات سناب إلى 42,000+ نقرة عضوية شهرياً",
    timeframe: "خلال 4 أشهر",
    clicksBefore: "1,450 نقرة/شهر",
    clicksAfter: "42,800 نقرة/شهر",
    impressionsAfter: "510,000+ ظهور في جوجل السعودية",
    revenueGrowth: "+340% نمو في المبيعات العضوية بدون إعلانات",
    topKeywordsRanked: ["أفضل متجر عود في السعودية", "بخور ملكي فاخر", "عطور النيش الرياض"],
    summary:
      "أعدنا هيكلة 18 قسماً رئيسياً و 240 منتجاً على متجر سلة، مع كتابة أوصاف حسية بيعية وبناء عنقود مقالات عن العود والعطور وروابط خلفية آمنة.",
  },
  {
    id: "gsc-case-2",
    sector: "شركة مقاولات عامة ومظلات وساندوتش بانل وهناجر",
    city: "جدة والرياض والدمام",
    platform: "Next.js 16 + Sanity CMS",
    projectTitle: "تصدر المراكز الثلاثة الأولى لأكثر من 65 كلمة خدمية عالية القيمة",
    timeframe: "خلال 75 يوماً",
    clicksBefore: "620 نقرة/شهر",
    clicksAfter: "28,900 نقرة/شهر",
    impressionsAfter: "340,000+ ظهور لعملاء يبحثون عن مقاولات",
    revenueGrowth: "+410% زيادة في اتصالات وطلبات التسعير عبر واتساب",
    topKeywordsRanked: ["تركيب ساندوتش بانل", "مظلات وسواتر جدة", "مقاول هناجر ومستودعات الرياض"],
    summary:
      "بناء صفحات خدمات متخصصة فائقة السرعة (99/100 PageSpeed) مع معارض أعمال وفيديوهات مضغوطة وتطبيق LocalBusiness & Service Schema.",
  },
  {
    id: "gsc-case-3",
    sector: "مجمع عيادات أسنان وجلدية وتجميل",
    city: "جدة والرياض",
    platform: "WordPress & Elementor Pro",
    projectTitle: "مضاعفة حجوزات المواعيد الطبية وتصدر البحث المحلي وخرائط جوجل",
    timeframe: "خلال 3 أشهر",
    clicksBefore: "2,100 نقرة/شهر",
    clicksAfter: "34,500 نقرة/شهر",
    impressionsAfter: "460,000+ ظهور في البحث المحلي والطبي",
    revenueGrowth: "+275% نمو في حجوزات العيادة الشهرية",
    topKeywordsRanked: ["أفضل عيادة أسنان في جدة", "ابتسامة هوليوود الرياض", "عيادة ليزر وتجميل"],
    summary:
      "تطوير صفحات مستقلة لكل خدمة طبية وطبيب وفق معايير جوجل الطبية E-E-A-T مع تحسين ملف Google Business Profile للظهور في قمة الخرائط.",
  },
];

const SEO_VS_ADS_COMPARISON: SeoVsAdsRow[] = [
  {
    criterion: "استمرارية الزيارات والمبيعات",
    uniqueSeo: "مستمرة ومتصاعدة 24/7 لسنوات حتى لو أوقفت الميزانية مؤقتاً",
    paidAds: "تتوقف المبيعات والزيارات في نفس الثانية التي يتوقف فيها شحن الرصيد",
    randomCheapSeo: "ارتفاع مؤقت يعقبه عقاب وحظر من جوجل بسبب الباك لينك السبام",
  },
  {
    criterion: "تكلفة اكتساب العميل الواحد (CAC) على المدى المتوسط",
    uniqueSeo: "تنخفض شهرياً لتصل إلى أقل تكلفة ممكنة مع ثبات التصدر",
    paidAds: "ترتفع باستمرار بسبب شراسة المزايدة بين المنافسين في السعودية",
    randomCheapSeo: "خسارة مزدوجة: ضياع المبلغ المدفوع + تكلفة إصلاح الدومين لاحقاً",
  },
  {
    criterion: "ثقة العميل السعودي في العلامة التجارية",
    uniqueSeo: "ثقة عالية جداً؛ العميل يثق في النتائج العضوية الأولى أكثر بـ 4 أضعاف من الإعلان",
    paidAds: "يدرك كثير من المشترين أنه إعلان مدفوع فيتجاوزونه للنتائج الطبيعية",
    randomCheapSeo: "محتوى ركيك ومكرر يضر بسمعة ومكانة الشركة أمام العميل",
  },
  {
    criterion: "المنهجية التقنية وجودة الروابط",
    uniqueSeo: "فحص هندسي شامل + محتوى بيعي متخصص + روابط White-Hat آمنة 100%",
    paidAds: "لا تحسن من جودة موقعك التقنية أو سلطته في محركات البحث",
    randomCheapSeo: "وعود وهمية بـ 300 باك لينك سبام و 80 مقال منسوخ بالذكاء الاصطناعي الرخيص",
  },
  {
    criterion: "التقارير والشفافية",
    uniqueSeo: "تقارير حية ومباشرة من حسابك في Google Search Console و GA4 ونمو المبيعات",
    paidAds: "تقارير نقرات ومشاهدات قد يتخللها نقرات غير صالحة أو وهمية",
    randomCheapSeo: "تقارير مبهمة لا تعكس أي زيادة حقيقية في المبيعات أو العملاء",
  },
];

const SAUDI_CITIES_ZONES: SaudiCitySeoZone[] = [
  {
    id: "ksa-city-riyadh",
    cityName: "الرياض",
    englishName: "Riyadh SEO Agency",
    commercialImportance:
      "العاصمة الاقتصادية والقلب النابض للمشاريع الكبرى، الشركات القابضة، المتاجر الإلكترونية، العيادات، وشركات العقارات والمقاولات في المملكة.",
    highDemandSectors: ["العقارات والمقاولات", "متاجر سلة وزد وشوبيفاي", "المراكز الطبية والتجميل", "الشركات التقنية وخدمات B2B"],
    localSeoStrategy: [
      "استهداف الكلمات الشرائية والخدمية المقترنة بمدينة الرياض وأحيائها الحيوية (شمال الرياض، العليا، الملقا...)",
      "تحسين خرائط جوجل (Google Business Profile) لتصدر البحث المحلي في العاصمة",
      "بناء سلطة موضوعية وروابط قوية تتفوق على حدة المنافسة في سوق الرياض",
    ],
    sampleKeywords: ["شركة سيو في الرياض", "أفضل شركة تحسين محركات البحث بالرياض", "خبير سيو الرياض"],
  },
  {
    id: "ksa-city-jeddah",
    cityName: "جدة",
    englishName: "Jeddah SEO Services",
    commercialImportance:
      "البوابة التجارية والسياحية الكبرى على البحر الأحمر، ومركز حيوي للتجارة، السياحة، الفنادق، العيادات، المقاولات، والخدمات اللوجستية.",
    highDemandSectors: ["السياحة والضيافة وتأجير السيارات", "عيادات الأسنان والتجميل", "المقاولات والديكور والإنشاءات", "التجارة الإلكترونية والأزياء"],
    localSeoStrategy: [
      "بناء صفحات خدمات مخصصة لسوق جدة تراعي سلوك البحث المحلي والموسمي",
      "تهيئة المتاجر والمواقع الخدمية في جدة لتحقيق سرعة 99/100 على الجوال",
      "تصدر نتائج الخرائط والبحث المحلي (Local Pack) لجذب العملاء المباشرين في جدة",
    ],
    sampleKeywords: ["شركة سيو في جدة", "تحسين محركات البحث جدة", "أفضل شركة SEO بجدة"],
  },
  {
    id: "ksa-city-dammam-khobar",
    cityName: "الدمام والخبر والمنطقة الشرقية",
    englishName: "Dammam, Khobar & Eastern Province SEO",
    commercialImportance:
      "المركز الصناعي والنفطي واللوجستي والتجاري الاستراتيجي في المنطقة الشرقية (الدمام، الخبر، الظهران، الجبيل، الأحساء).",
    highDemandSectors: ["الشركات الصناعية والتوريدات B2B", "المقاولات والهندسة والإنشاءات", "الخدمات اللوجستية والشحن", "المتاجر والخدمات الطبية"],
    localSeoStrategy: [
      "استهداف كلمات البحث الصناعية والتجارية (B2B & B2C) في الدمام والخبر والجبيل",
      "تطوير محتوى تقني وتجاري يخاطب مديري المشتريات والشركات والأفراد في الشرقية",
      "ربط الموقع جغرافياً بمدن المنطقة الشرقية لتعزيز الظهور الإقليمي الشامل",
    ],
    sampleKeywords: ["شركة سيو في الدمام", "شركة سيو بالخبر", "تحسين محركات البحث المنطقة الشرقية"],
  },
  {
    id: "ksa-city-makkah-madinah-all",
    cityName: "مكة المكرمة، المدينة المنورة، القصيم، أبها، وكافة مناطق المملكة",
    englishName: "Makkah, Madinah, Qassim, Abha & Nationwide KSA",
    commercialImportance:
      "أسواق واسعة تشهد نمواً عمرانياً وسياحياً وتجارياً هائلاً ضمن رؤية المملكة 2030 مع فرص ذهبية للسيطرة السريعة في جوجل.",
    highDemandSectors: ["السياحة والفنادق وخدمات الحج والعمرة", "العقارات والمقاولات والخدمات المنزلية", "المتاجر الإلكترونية والشحن الوطني"],
    localSeoStrategy: [
      "بناء هيكلية صفحات فروع ومدن متوافقة مع السيو بدون أي تكرار محتوى (Dynamic City SEO)",
      "تهيئة المواقع متعددة اللغات لخدمة الزوار والعملاء من داخل وخارج المملكة",
      "تحقيق تصدر سريع ومستدام في الكلمات المحلية والوطنية على مستوى السعودية",
    ],
    sampleKeywords: ["شركة سيو في مكة", "شركة سيو المدينة المنورة", "أفضل شركة سيو في السعودية"],
  },
];

const NINETY_DAY_ROADMAP: NinetyDayPhase[] = [
  {
    phaseNum: "01",
    timeframe: "الأسبوع 1 - 2",
    title: "الفحص الهندسي الشامل وإصلاح السيو التقني (Technical Foundation)",
    description:
      "نفحص موقعك بالكامل عبر Screaming Frog و GSC، نصلح أخطاء الأرشفة والـ Canonical وروابط 404، ونرفع سرعة الموقع على الهواتف الذكية.",
    tasks: ["فحص تقني شامل 100%", "ضبط Canonical & Sitemap", "تحسين سرعة Core Web Vitals", "تركيب أكواد Schema.org"],
    milestoneOutput: "موقع سليم برمجياً 100% وجاهز للزحف والأرشفة الفورية في جوجل",
  },
  {
    phaseNum: "02",
    timeframe: "الأسبوع 2 - 3",
    title: "دراسة السوق السعودي وخريطة الكلمات المفتاحية (Keyword Architecture)",
    description:
      "نحلل منافسيك في السعودية ونستخرج الكلمات الشرائية والخدمية الأعلى عائداً، ونبني خريطة ربط دقيقة لكل صفحة وقسم في موقعك أو متجرك.",
    tasks: ["بحث الكلمات الشرائية السعودية", "تحليل فجوة المنافسين", "هيكلة شجرة الصفحات والأقسام", "منع التنافس الداخلي"],
    milestoneOutput: "خطة كلمات مفتاحية وهيكلة صفحات معتمدة وموجهة نحو المبيعات",
  },
  {
    phaseNum: "03",
    timeframe: "الأسبوع 4 - 6",
    title: "تحسين السيو الداخلي وتجربة المستخدم (On-Page & CRO Execution)",
    description:
      "نطور العناوين (Meta Titles/Descriptions)، الترويسات (H1-H3)، المحتوى البيعي للصفحات الرئيسية، وشبكة الربط الداخلي وأزرار التحويل للواتساب.",
    tasks: ["تحسين الميتا تاج لرفع الـ CTR", "تطوير محتوى صفحات الخدمات/الأقسام", "بناء الربط الداخلي الذكي", "تحسين الصور والـ Alt Text"],
    milestoneOutput: "قفزة واضحة في مرات الظهور والترتيب الأولي للكلمات المستهدفة",
  },
  {
    phaseNum: "04",
    timeframe: "الأسبوع 6 - 10",
    title: "بناء السلطة الموضوعية والسيو المحلي (Topical Authority & Local SEO)",
    description:
      "ننشر محتوى استراتيجياً يغطي كافة أسئلة عملائك في السعودية، مع تحسين ملف خرائط جوجل (GBP) وصفحات المدن السعودية.",
    tasks: ["كتابة ونشر العناقيد الموضوعية", "تحسين خرائط جوجل Local Pack", "تهيئة الظهور في AI Overviews", "تطوير صفحات المنتجات"],
    milestoneOutput: "دخول الكلمات المفتاحية إلى الصفحة الأولى وزيادة الاتصالات والطلبات",
  },
  {
    phaseNum: "05",
    timeframe: "الأسبوع 8 - 12+",
    title: "بناء الباك لينك الآمن والهيمنة المستمرة (White-Hat Authority & Scaling)",
    description:
      "نعزز قوة دومين موقعك بروابط خلفية طبيعية وموثوقة من مواقع عربية وسعودية ذات صلة، مع متابعة وتوسيع التصدر وتقديم تقارير شفافة.",
    tasks: ["بناء روابط Guest Posts موثوقة", "مراقبة الترتيب في GSC أسبوعياً", "تحسين معدل التحويل المستمر", "تقارير أداء ومبيعات شفافة"],
    milestoneOutput: "ثبات في المراكز الثلاثة الأولى بجوجل السعودية ونمو متضاعف في العائد (ROI)",
  },
];

const SAUDI_SEO_PACKAGES_SAR: SaudiSeoPackageSAR[] = [
  {
    id: "sar-pkg-growth",
    packageName: "باقة الانطلاق والنمو (Starter & Local SEO)",
    badgeText: "مثالية للشركات الناشئة والعيادات والمواقع الخدمية",
    priceSAR: "1,850",
    billingCycle: "ريال سعودي / شهرياً (بدون عقود احتكار طويلة)",
    idealFor: "المواقع الخدمية، الشركات الناشئة، العيادات، والأنشطة المحلية في الرياض أو جدة أو الدمام",
    isPopular: false,
    keywordsCount: "استهداف حتى 20 كلمة مفتاحية شرائية ومحلية",
    includedServices: [
      "فحص وإصلاح كامل لأخطاء السيو التقني والأرشفة في Google Search Console",
      "تحسين سرعة الموقع ومؤشرات Core Web Vitals على الجوال",
      "تحسين السيو الداخلي (On-Page SEO) لعدد 10 صفحات رئيسية وخدمية",
      "إعداد وتطوير ملف خرائط جوجل (Google Business Profile) للسيو المحلي",
      "كتابة 6 مقالات أو صفحات سيو احترافية شهرياً متوافقة مع نية البحث السعودية",
      "بناء روابط خلفية آمنة وعالية الجودة (White-Hat Backlinks) لرفع قوة الدومين",
    ],
    technicalAndContentFeatures: [
      "ضبط كامل للـ Meta Titles, Descriptions, Dynamic Canonicals & Schema.org",
      "بناء خطة الربط الداخلي وتحسين الصور بصيغ WebP الحديثة",
    ],
    reportingAndSupport: "تقرير أداء شهري مفصل من Google Search Console + تواصل مباشر عبر واتساب",
    whatsappMsg: "مرحباً شركة Unique، أرغب في الاشتراك في (باقة الانطلاق والنمو للسيو في السعودية - 1,850 ر.س).",
  },
  {
    id: "sar-pkg-domination",
    packageName: "باقة السيطرة والتصدر (Pro Business & E-Commerce SEO)",
    badgeText: "الأكثر طلباً للشركات الطموحة ومتاجر سلة وزد وشوبيفاي",
    priceSAR: "3,200",
    billingCycle: "ريال سعودي / شهرياً (خطة شاملة لتصدر السوق السعودي)",
    idealFor: "المتاجر الإلكترونية (سلة، زد، شوبيفاي)، شركات المقاولات والعقارات، والمراكز الطبية الكبرى",
    isPopular: true,
    keywordsCount: "استهداف حتى 45 كلمة مفتاحية تنافسية وشرائية في المملكة",
    includedServices: [
      "كل مزايا باقة الانطلاق + فحص هندسي متعمق عبر Screaming Frog وإصلاح كافة الثغرات",
      "تهيئة شاملة لسيو المتاجر (الأقسام، الفلاتر، Product Schema، وتحسين حتى 30 صفحة/منتج شهرياً)",
      "خطة بناء سلطة موضوعية (Topical Authority) مع كتابة 12 مقالاً أو صفحة بيعية متخصصة شهرياً",
      "استهداف متعدد المدن في السعودية (الرياض، جدة، الدمام...) وتصدر نتائج الخرائط والبحث المحلي",
      "حملة بناء باك لينك وجيست بوست قوية وآمنة 100% من مواقع عربية وخليجية موثوقة ذات DR عالٍ",
      "تهيئة الموقع للظهور في إجابات الذكاء الاصطناعي (Google AI Overviews & ChatGPT Search)",
    ],
    technicalAndContentFeatures: [
      "تحسين معدل التحويل (CRO) ومسارات الشراء والتواصل عبر واتساب لمضاعفة المبيعات الفعلية",
      "تحليل شهري لتحركات المنافسين واقتناص الفرص والكلمات الجديدة في السوق السعودي",
    ],
    reportingAndSupport: "تقارير أداء نصف شهرية وشهرية موثقة من GSC & GA4 + مدير مشروع مخصص على واتساب",
    whatsappMsg: "مرحباً شركة Unique، أرغب في الاشتراك في (باقة السيطرة والتصدر للسيو في السعودية - 3,200 ر.س).",
  },
  {
    id: "sar-pkg-enterprise",
    packageName: "باقة الهيمنة والمؤسسات الكبرى (Enterprise & Mega Stores)",
    badgeText: "للمتاجر الضخمة والمنصات الكبرى والسيطرة الوطنية الشاملة",
    priceSAR: "5,500",
    billingCycle: "ريال سعودي / شهرياً (حلول مخصصة للعلامات الرائدة)",
    idealFor: "المتاجر الكبرى ذات مئات المنتجات، البوابات العقارية والسياحية، والشركات متعددة الفروع واللغات",
    isPopular: false,
    keywordsCount: "استهداف مفتوح (80+ كلمة مفتاحية وعناقيد بحثية كاملة)",
    includedServices: [
      "إدارة سيو تقني وهندسي مستمر للمنصات الكبيرة (Next.js, WordPress, Shopify Plus, Salla/Zid)",
      "تحسين شامل ومستمر لمئات المنتجات والتصنيفات وصفحات الهبوط الإقليمية في كافة مدن المملكة",
      "إنتاج 20+ قطعة محتوى بيعي وموسوعي شهرياً لبناء هيمنة مطلقة في قطاعك",
      "حملة علاقات عامة رقمية (Digital PR) وبناء روابط مرجعية عالية السلطة باللغتين العربية والإنجليزية",
      "تطوير برمجي مستمر لسرعة الموقع، البنية التحتية، ومعدلات التحويل البيعية (CRO)",
      "تهيئة السيو الدولي ومتعدد اللغات للشركات المستهدفة للسعودية والخليج والعالم",
    ],
    technicalAndContentFeatures: [
      "أولوية قصوى في التنفيذ والتطوير البرمجي والتقني مع فريق هندسي وتسويقي كامل",
      "لوحة تحكم وتقارير لحظية لمتابعة نمو الزيارات، الترتيب، والعائد المالي على الاستثمار (ROI)",
    ],
    reportingAndSupport: "اجتماعات وتقارير أسبوعية مباشرة + دعم فني واستشاري VIP على مدار الساعة",
    whatsappMsg: "مرحباً شركة Unique، أرغب في الاستفسار عن (باقة الهيمنة والمؤسسات الكبرى للسيو في السعودية - 5,500 ر.س).",
  },
];

const SAUDI_SEO_FAQS: SaudiSeoFaq[] = [
  {
    id: "sfaq-1",
    category: "النتائج والمدة الزمنية",
    question: "متى تبدأ نتائج السيو في الظهور على موقعي أو متجري في السعودية؟",
    answer:
      "تبدأ المؤشرات الإيجابية الأولى (إصلاح الأرشفة، ارتفاع مرات الظهور Impressions، وتحسن ترتيب الكلمات المتوسطة) خلال أول 3 إلى 4 أسابيع من بدء العمل وإصلاح السيو التقني. أما الوصول للصفحة الأولى والمراكز المتقدمة وتحقيق قفزة ملموسة في الزيارات والمبيعات العضوية فيتم عادةً خلال 60 إلى 90 يوماً حسب قوة المنافسة في مجالك وعمر الدومين.",
  },
  {
    id: "sfaq-2",
    category: "سيو المتاجر الإلكترونية",
    question: "أمتلك متجراً على منصة سلة (أو زد / شوبيفاي)، هل يمكنكم مضاعفة مبيعاته من جوجل بدون إعلانات؟",
    answer:
      "بكل تأكيد! نحن متخصصون بعمق في سيو متاجر سلة وزد وشوبيفاي في السوق السعودي. نقوم بإعادة هيكلة التصنيفات، كتابة أوصاف منتجات شرائية متوافقة مع السيو، تفعيل بيانات Product Schema لعرض السعر بالريال والتقييمات في جوجل، وبناء مدونة تجلب المشترين الباحثين عن منتجاتك مباشرة لمتجرك 24/7.",
  },
  {
    id: "sfaq-3",
    category: "الأمان ومنهجية العمل",
    question: "ما الفرق بين طريقة عمل Unique وبين الشركات التي تعد بـ 300 باك لينك و 80 مقالاً شهرياً؟",
    answer:
      "الشركات التي تعد بمئات الروابط الخلفية وعشرات المقالات الرخيصة شهرياً تستخدم برامج آلية ومزارع روابط مشبوهة (Black-Hat Spam) تؤدي في النهاية إلى معاقبة موقعك وحذفه من نتائج جوجل. في وكالة Unique، نحن مهندسو برمجيات وخبراء سيو نطبق استراتيجيات White-Hat آمنة 100%: نهتم بجودة الكود البرمجي، سرعة الموقع 99/100، المحتوى البيعي المتقن، والروابط الخلفية القوية والطبيعية التي تبني لموقعك تصدراً دائماً ومحمياً من أي تحديثات.",
  },
  {
    id: "sfaq-4",
    category: "المدن والتغطية الجغرافية",
    question: "هل تقدمون خدمات السيو لجميع مدن المملكة (الرياض، جدة، الدمام...)؟",
    answer:
      "نعم، نقدم خدماتنا للشركات والمؤسسات والمتاجر في كافة أنحاء المملكة العربية السعودية: الرياض، جدة، الدمام، الخبر، مكة المكرمة، المدينة المنورة، القصيم، أبها، تبوك، ونيوم. نصمم استراتيجيات سيو محلي ووطني تضمن تصدرك في المدينة أو المناطق التي تستهدفها.",
  },
  {
    id: "sfaq-5",
    category: "المتابعة والتقارير",
    question: "كيف أتابع نتائج العمل والتطور في ترتيب موقعي؟",
    answer:
      "الشفافية هي أساس عملنا؛ نربطك بتقارير موثقة ومباشرة من حسابك الرسمي في Google Search Console و Google Analytics 4 توضح لك بدقة: الكلمات التي ارتفع ترتيبها، عدد النقرات ومرات الظهور، نمو الزيارات العضوية، والأعمال التقنية والمحتوى والروابط التي تم إنجازها خلال الشهر.",
  },
  {
    id: "sfaq-6",
    category: "التطوير البرمجي",
    question: "هل تقومون بتنفيذ التعديلات التقنية والبرمجية داخل الموقع بأنفسكم؟",
    answer:
      "نعم! على عكس شركات السيو التقليدية التي ترسل لك ملف ملاحظات وتطلب منك البحث عن مبرمج لتنفيذه، نحن في Unique نمتلك فريق تطوير كامل متمرس في Next.js و WordPress و Shopify و Salla و Zid، ونتولى تنفيذ كافة التحسينات التقنية وتحسين السرعة والأكواد بأنفسنا.",
  },
  {
    id: "sfaq-7",
    category: "الفحص المجاني والبدء",
    question: "كيف أحصل على فحص سيو مجاني لموقعي أو متجري قبل الاشتراك؟",
    answer:
      "الأمر بسيط جداً: اضغط على أي زر واتساب في هذه الصفحة للتحدث معنا مباشرة على الرقم 01270506511 وأرسل رابط موقعك أو متجرك، وسيقوم فريقنا بإجراء فحص شامل وتزويدك بتقرير يوضح نقاط الضعف والفرص الذهبية المتاحة لتصدر مجالك في السعودية مجاناً.",
  },
];

// ============================================================================
// 5. JSON-LD STRUCTURED DATA SCHEMAS FOR GOOGLE SAUDI ARABIA (AR-SA)
// ============================================================================
const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://marketing-beta-gold-30.vercel.app/saudi-seo#agency",
    name: "Unique Digital Agency - شركة سيو في السعودية",
    alternateName: "يونيك أفضل شركة تحسين محركات البحث SEO في السعودية والرياض وجدة",
    url: "https://marketing-beta-gold-30.vercel.app/saudi-seo",
    telephone: "+201270506511",
    description:
      "أفضل شركة سيو في السعودية متخصصة في تحسين محركات البحث SEO للشركات والمتاجر الإلكترونية (سلة، زد، شوبيفاي، ووردبريس، Next.js) في الرياض وجدة والدمام وكافة مدن المملكة.",
    areaServed: [
      { "@type": "City", name: "Riyadh" },
      { "@type": "City", name: "Jeddah" },
      { "@type": "City", name: "Dammam" },
      { "@type": "City", name: "Khobar" },
      { "@type": "City", name: "Makkah" },
      { "@type": "City", name: "Madinah" },
      { "@type": "Country", name: "Saudi Arabia" },
    ],
    priceRange: "SAR 1850 - SAR 5500",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+201270506511",
      contactType: "sales and SEO consultation",
      areaServed: "SA",
      availableLanguage: ["Arabic", "English"],
    },
    knowsAbout: [
      "شركة سيو في السعودية",
      "تحسين محركات البحث في الرياض وجدة",
      "سيو متاجر سلة Salla SEO",
      "سيو متاجر زد Zid SEO",
      "سيو شوبيفاي Shopify SEO",
      "السيو التقني Technical SEO",
      "السيو المحلي Local SEO Saudi Arabia",
      "AI Search Optimization GEO",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "خدمات تحسين محركات البحث SEO في المملكة العربية السعودية",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://marketing-beta-gold-30.vercel.app",
      telephone: "+201270506511",
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "باقات السيو وتحسين محركات البحث في السعودية",
      itemListElement: SAUDI_SEO_PACKAGES_SAR.map((pkg) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: pkg.packageName,
          description: pkg.idealFor,
        },
        priceCurrency: "SAR",
        price: pkg.priceSAR.replace(/,/g, ""),
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SAUDI_SEO_FAQS.map((faq) => ({
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
        item: "https://marketing-beta-gold-30.vercel.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "شركة سيو في السعودية",
        item: "https://marketing-beta-gold-30.vercel.app/saudi-seo",
      },
    ],
  },
];

// ============================================================================
// 6. REUSABLE UI SUB-COMPONENTS (SERVER-SAFE, ZERO RED ACCENTS)
// ============================================================================

function SectionHeader({
  badge,
  title,
  highlightedWord,
  subtitle,
  align = "center",
}: {
  badge: string;
  title: string;
  highlightedWord?: string;
  subtitle: string;
  align?: "center" | "right";
}) {
  return (
    <div
      className={`mb-14 ${
        align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl text-right"
      }`}
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold tracking-wide text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.15)] ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <Sparkles className="h-3.5 w-3.5 text-amber-400" />
        <span>{badge}</span>
      </div>
      <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}{" "}
        {highlightedWord && (
          <span className="bg-gradient-to-l from-emerald-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
            {highlightedWord}
          </span>
        )}
      </h2>
      <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}

// ============================================================================
// 7. MAIN PAGE COMPONENT (SAUDI ARABIA SEO AGENCY LANDING PAGE)
// ============================================================================
export default function SaudiSeoPage() {
  const mainWhatsAppLink = getWhatsAppUrl(
    "مرحباً شركة Unique، أرغب في الحصول على استشارة وفحص سيو مجاني لموقعي / متجري في السعودية."
  );

  return (
    <main
      dir="rtl"
      lang="ar"
      className="relative min-h-screen bg-[#000000] text-white selection:bg-blue-600 selection:text-white overflow-x-hidden"
    >
      {/* Structured Data JSON-LD for Google.com.sa Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />

      {/* Ambient Background Glow Effects (Emerald, Cyan, Blue, Gold - Strictly No Red) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-48 -right-48 h-[520px] w-[520px] rounded-full bg-emerald-600/12 blur-[150px]" />
        <div className="absolute top-1/3 -left-48 h-[460px] w-[460px] rounded-full bg-blue-600/12 blur-[150px]" />
        <div className="absolute bottom-10 right-1/4 h-[420px] w-[420px] rounded-full bg-amber-500/8 blur-[160px]" />
      </div>

      {/* Floating Direct WhatsApp Action Button (Fixed Bottom Left) */}
      <a
        href={mainWhatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب 01270506511"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full border border-emerald-400/40 bg-gradient-to-l from-emerald-600 to-teal-500 px-5 py-3.5 text-xs font-black text-white shadow-[0_0_35px_rgba(16,185,129,0.45)] transition-all hover:scale-105"
      >
        <MessageSquare className="h-5 w-5" />
        <span className="hidden sm:inline">فحص سيو مجاني عبر واتساب:</span>
        <span dir="ltr" className="font-mono text-sm">
          {WHATSAPP_NUMBER_DISPLAY}
        </span>
      </a>

      {/* =====================================================================
          SECTION 1: TOP STICKY NAVIGATION BAR
      ===================================================================== */}
      <nav
        aria-label="التنقل السريع داخل صفحة سيو السعودية"
        className="sticky top-0 z-40 border-b border-white/10 bg-[#000000]/85 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 font-black text-black shadow-lg shadow-emerald-500/25">
              U
            </span>
            <div>
              <p className="text-xs font-bold text-emerald-400">UNIQUE SEO AGENCY KSA</p>
              <p className="text-[11px] text-slate-400">
                أفضل شركة سيو في السعودية (الرياض • جدة • الدمام)
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-5 text-xs font-bold text-slate-300 lg:flex">
            <a href="#seo-services-ksa" className="transition-colors hover:text-emerald-400">
              خدمات السيو الشاملة
            </a>
            <a href="#ecommerce-seo-ksa" className="transition-colors hover:text-emerald-400">
              سيو متاجر سلة وزد وشوبيفاي
            </a>
            <a href="#gsc-results" className="transition-colors hover:text-emerald-400">
              نتائج Search Console
            </a>
            <a href="#ai-geo-seo" className="transition-colors hover:text-cyan-400">
              سيو الذكاء الاصطناعي (GEO)
            </a>
            <a href="#saudi-cities" className="transition-colors hover:text-emerald-400">
              الرياض وجدة والمدن
            </a>
            <a href="#pricing-sar" className="transition-colors hover:text-amber-400">
              الباقات بالريال (SAR)
            </a>
            <a href="#faq-ksa" className="transition-colors hover:text-emerald-400">
              الأسئلة الشائعة
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={mainWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-l from-emerald-500 to-cyan-500 px-4 py-2 text-xs font-black text-black shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>فحص مجاني:</span>
              <span dir="ltr" className="font-mono">
                {WHATSAPP_NUMBER_DISPLAY}
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* =====================================================================
          SECTION 2: CREATIVE HERO SECTION WITH LIVE GSC & SERP #1 SIMULATOR
      ===================================================================== */}
      <header className="relative z-10 overflow-hidden border-b border-white/10 pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Background Video Layer */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-25">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/globe.svg"
            className="h-full w-full object-cover"
          >
            <source src="/vedio1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000]/85 to-[#000000]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-xs text-slate-400"
          >
            <Link href="/" className="transition-colors hover:text-emerald-400">
              الرئيسية
            </Link>
            <ChevronLeft className="h-3.5 w-3.5 text-slate-600" />
            <span className="text-slate-300">خدمات المملكة العربية السعودية</span>
            <ChevronLeft className="h-3.5 w-3.5 text-slate-600" />
            <span className="font-bold text-emerald-400">
              شركة سيو في السعودية
            </span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Right Column: Primary Commercial SEO Pitch */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-300">
                <Award className="h-4 w-4 text-amber-400" />
                <span>
                  الشريك الأول لتصدر نتائج جوجل في الرياض، جدة، الدمام، وكافة مناطق المملكة
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-black leading-[1.22] tracking-tight text-white sm:text-5xl lg:text-6xl">
                شركة سيو في السعودية{" "}
                <span className="bg-gradient-to-l from-emerald-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
                  تضعك في النتيجة الأولى وتضاعف مبيعاتك
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
                في السوق السعودي اليوم، الظهور في الصفحة الأولى من جوجل عندما يبحث
                عميلك عن خدماتك أو منتجاتك ليس رفاهية؛ بل هو الفارق الحقيقي بين
                شركة تضاعف أرباحها مجاناً كل شهر، وشركة تستنزف ميزانيتها يومياً في
                الإعلانات الممولة. في وكالة{" "}
                <strong className="font-bold text-white">UNIQUE Digital Agency</strong>،
                نجمع بين{" "}
                <strong className="text-emerald-300">
                  الهندسة البرمجية المتقدمة، المحتوى البيعي، والروابط الموثوقة
                </strong>{" "}
                لنحول موقعك أو متجرك على{" "}
                <strong className="text-cyan-300">
                  (سلة، زد، شوبيفاي، ووردبريس، أو Next.js)
                </strong>{" "}
                إلى ماكينة مبيعات عضوية مستدامة.
              </p>

              {/* 4 Trust Badges Grid */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm font-medium text-slate-200">
                    نتائج حقيقية وموثقة من Google Search Console
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-sm font-medium text-slate-200">
                    تخصص عميق في سيو متاجر سلة (Salla) وزد (Zid) وشوبيفاي
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-sm font-medium text-slate-200">
                    فريق برمجي ينفذ كافة تعديلات السيو التقني والسرعة بنفسه
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-400" />
                  <span className="text-sm font-medium text-slate-200">
                    استراتيجيات White-Hat آمنة 100% + تصدر بحث الذكاء الاصطناعي
                  </span>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={mainWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-l from-emerald-500 via-teal-500 to-cyan-500 px-8 py-4 text-base font-black text-black shadow-[0_0_35px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>اطلب فحص سيو مجاني لموقعك الآن</span>
                  <ArrowUpLeft className="h-5 w-5" />
                </a>
                <a
                  href="#gsc-results"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-slate-200 backdrop-blur-md transition-all hover:border-emerald-400/50 hover:bg-white/10 hover:text-white"
                >
                  <TrendingUp className="h-5 w-5 text-emerald-400" />
                  <span>شاهد نتائج عملائنا في السعودية</span>
                </a>
              </div>
            </div>

            {/* Left Column: Creative Live Google Search Console & SERP #1 Simulator */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-emerald-500/35 bg-gradient-to-b from-[#07191e]/95 to-[#040811]/95 p-6 shadow-[0_0_65px_rgba(16,185,129,0.2)] backdrop-blur-2xl sm:p-7">
                {/* Top Header of GSC Simulator */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-cyan-400" />
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1 text-[11px] font-mono text-emerald-300 border border-emerald-500/25">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Google Search Console • KSA Property</span>
                  </div>
                </div>

                {/* 4 GSC Metric Boxes */}
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-2xl border border-blue-500/30 bg-blue-600/15 p-3">
                    <p className="text-[10px] text-blue-200">إجمالي النقرات</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      42.8K
                    </p>
                    <span className="text-[10px] font-bold text-emerald-400">
                      +340% نمو
                    </span>
                  </div>
                  <div className="rounded-2xl border border-cyan-500/30 bg-cyan-600/15 p-3">
                    <p className="text-[10px] text-cyan-200">مرات الظهور</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      510K
                    </p>
                    <span className="text-[10px] font-bold text-emerald-400">
                      +415% نمو
                    </span>
                  </div>
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-600/15 p-3">
                    <p className="text-[10px] text-emerald-200">نسبة النقر CTR</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      8.4%
                    </p>
                    <span className="text-[10px] font-bold text-emerald-400">
                      أعلى من المعدل
                    </span>
                  </div>
                  <div className="rounded-2xl border border-amber-500/30 bg-amber-500/15 p-3">
                    <p className="text-[10px] text-amber-200">متوسط الترتيب</p>
                    <p className="mt-1 font-mono text-lg font-black text-amber-300">
                      #1.4
                    </p>
                    <span className="text-[10px] font-bold text-amber-300">
                      الصفحة الأولى
                    </span>
                  </div>
                </div>

                {/* Visual SVG Growth Curve Inside Card */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/60 p-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-slate-300">
                      منحنى تصاعد الزيارات العضوية (90 يوماً)
                    </span>
                    <span className="font-mono text-[11px] text-emerald-400">
                      Google.com.sa Organic Traffic
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 400 100"
                    className="h-24 w-full overflow-visible"
                    aria-label="منحنى صعود الزيارات"
                  >
                    <defs>
                      <linearGradient id="gscGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 90 Q 80 85, 140 68 T 260 35 T 400 8 L 400 100 L 0 100 Z"
                      fill="url(#gscGrad)"
                    />
                    <path
                      d="M 0 90 Q 80 85, 140 68 T 260 35 T 400 8"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <circle cx="140" cy="68" r="4" fill="#38bdf8" />
                    <circle cx="260" cy="35" r="4" fill="#38bdf8" />
                    <circle cx="395" cy="9" r="5.5" fill="#fbbf24" />
                  </svg>
                </div>

                {/* Simulated #1 Google Saudi Search Result Preview */}
                <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-[#07111e] p-4">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-bold text-emerald-400">
                      🏆 النتيجة رقم #1 في بحث جوجل السعودية
                    </span>
                    <span className="rounded bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                      Rich Snippet مفعل
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-cyan-300">
                    موقعك أو متجرك في الصدارة | الرياض وجدة والمملكة
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-amber-400">
                    <span>★★★★★</span>
                    <span className="text-[11px] text-slate-300">
                      تقييم 4.9 (480+ مراجعة موثقة) • متوفر بالريال السعودي SAR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Hero KPI Cards */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_KPIS.map((kpi) => {
              const borderMap = {
                emerald: "border-emerald-500/30 hover:border-emerald-400/60",
                cyan: "border-cyan-500/30 hover:border-cyan-400/60",
                blue: "border-blue-500/30 hover:border-blue-400/60",
                amber: "border-amber-500/30 hover:border-amber-400/60",
              }[kpi.accent];

              const textMap = {
                emerald: "text-emerald-400",
                cyan: "text-cyan-400",
                blue: "text-blue-400",
                amber: "text-amber-400",
              }[kpi.accent];

              return (
                <div
                  key={kpi.id}
                  className={`rounded-2xl border bg-[#060b18]/90 p-6 transition-all duration-300 ${borderMap}`}
                >
                  <p className={`text-2xl font-black sm:text-3xl ${textMap}`}>
                    {kpi.value}
                  </p>
                  <h2 className="mt-2 text-base font-bold text-white">
                    {kpi.title}
                  </h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {kpi.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </header>

      {/* =====================================================================
          SECTION 3: 7 CORE SEO SERVICES IN SAUDI ARABIA
      ===================================================================== */}
      <section
        id="seo-services-ksa"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="منظومة خدمات السيو الشاملة في المملكة العربية السعودية"
            title="خدمات شركة تحسين محركات البحث (SEO)"
            highlightedWord="للشركات والمتاجر في السعودية"
            subtitle="نغطي كافة أركان السيو السبعة تحت سقف واحد: من الهندسة التقنية وسرعة الكود إلى سيو متاجر سلة وزد وشوبيفاي، المحتوى البيعي، السيو المحلي، والروابط الخلفية الآمنة."
          />

          <div className="space-y-10">
            {CORE_SEO_SERVICES_KSA.map((srv) => (
              <article
                key={srv.id}
                className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#081224] to-[#03060d] p-6 shadow-2xl sm:p-10"
              >
                <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-6 lg:flex-row lg:items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-300">
                      <span>الركيزة رقم {srv.number}</span>
                      <span>•</span>
                      <span>{srv.badge}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                      {srv.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-cyan-400">
                      {srv.englishName}
                    </p>
                  </div>

                  <a
                    href={getWhatsAppUrl(srv.whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start rounded-2xl bg-gradient-to-l from-emerald-500 to-cyan-500 px-6 py-3.5 text-xs font-black text-black shadow-lg transition-transform hover:scale-[1.02] lg:self-auto"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>اطلب هذه الخدمة عبر واتساب</span>
                  </a>
                </div>

                <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-8">
                    <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                      {srv.summary}
                    </p>

                    <h4 className="mt-6 text-sm font-black text-cyan-300">
                      المهام التنفيذية الدقيقة التي نقوم بها:
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {srv.executionChecklist.map((task, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-black/40 p-3.5 text-xs text-slate-200"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-white/10 bg-black/50 p-6">
                    <div>
                      <p className="text-xs font-bold text-amber-300 mb-2">
                        الأثر المباشر على أعمالك في السعودية:
                      </p>
                      <p className="text-xs leading-relaxed text-slate-300">
                        {srv.businessImpactInKSA}
                      </p>

                      <p className="mt-6 text-xs font-bold text-emerald-300 mb-3">
                        مخرجات الخدمة الملموسة:
                      </p>
                      <ul className="space-y-2 text-xs text-slate-200">
                        {srv.deliverables.map((deliv, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <Check className="h-4 w-4 shrink-0 text-cyan-400" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 border-t border-white/10 pt-4">
                      <a
                        href={getWhatsAppUrl(srv.whatsappText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 py-3 text-xs font-bold text-cyan-300 transition-colors hover:bg-cyan-400 hover:text-black"
                      >
                        <PhoneCall className="h-3.5 w-3.5" />
                        <span>استفسر الآن: {WHATSAPP_NUMBER_DISPLAY}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: SAUDI E-COMMERCE SEO (SALLA, ZID, SHOPIFY)
      ===================================================================== */}
      <section
        id="ecommerce-seo-ksa"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="تخصص استثنائي في مضاعفة مبيعات المتاجر السعودية"
            title="سيو المتاجر الإلكترونية في السعودية:"
            highlightedWord="سلة (Salla)، زد (Zid)، وشوبيفاي (Shopify)"
            subtitle="إذا كان متجرك يعتمد 100% على الإعلانات الممولة، فأنت تدفع إيجاراً يومياً مقابل كل طلب. نحن نبني لمتجرك أصولاً رقمية تتصدر البحث الشرائي في السعودية وتجلب لك طلبات مجانية على مدار الساعة."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {ECOMMERCE_SEO_PLATFORMS_KSA.map((plat) => (
              <div
                key={plat.id}
                className="flex flex-col justify-between rounded-3xl border border-white/15 bg-gradient-to-b from-[#091528] to-[#040812] p-7 shadow-xl"
              >
                <div>
                  <span className="inline-block rounded-full bg-emerald-500/15 px-3.5 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30">
                    {plat.marketShareTag}
                  </span>
                  <h3 className="mt-4 text-2xl font-black text-white">
                    {plat.platformName}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-cyan-300">
                    {plat.title}
                  </p>

                  <div className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3.5 text-xs text-slate-300">
                    <strong className="text-amber-300 block mb-1">
                      التحدي الذي نحله لمتجرك:
                    </strong>
                    {plat.painPointSolved}
                  </div>

                  <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-4 text-xs text-slate-200">
                    {plat.technicalSolutions.map((sol, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-xs font-bold text-emerald-400 mb-4">
                    النتيجة المتوقعة: {plat.expectedGrowth}
                  </p>
                  <a
                    href={getWhatsAppUrl(plat.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-emerald-500 to-cyan-500 py-3.5 text-xs font-black text-black transition-transform hover:scale-[1.01]"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>اطلب خطة سيو لمتجرك الآن</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: DOCUMENTED GOOGLE SEARCH CONSOLE (GSC) RESULTS IN KSA
      ===================================================================== */}
      <section
        id="gsc-results"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="لا نبيع وعوداً نظرية — بل نتحدث بلغة الأرقام الموثقة"
            title="نتائج حقيقية من حسابات Google Search Console"
            highlightedWord="لعملائنا في المملكة العربية السعودية"
            subtitle="شاهد كيف تحولت المتاجر والشركات التي وثقت في وكالة Unique من مئات النقرات المحدودة إلى عشرات الآلاف من الزيارات الشرائية المستهدفة شهرياً في الرياض وجدة والدمام."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {GSC_DOCUMENTED_RESULTS.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-[#071922] to-[#030710] p-7 shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="rounded-lg bg-emerald-500/15 px-3 py-1 font-bold text-emerald-300">
                      {item.sector}
                    </span>
                    <span className="font-mono text-slate-400">{item.city}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-black text-white">
                    {item.projectTitle}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-cyan-400">
                    المنصة: {item.platform} • المدة: {item.timeframe}
                  </p>

                  {/* Before / After GSC Metrics Box */}
                  <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-black/60 p-4">
                    <div>
                      <p className="text-[11px] text-slate-400">النقرات قبل العمل</p>
                      <p className="mt-1 text-sm font-bold text-slate-300 line-through">
                        {item.clicksBefore}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] text-emerald-300">
                        النقرات بعد السيو
                      </p>
                      <p className="mt-1 text-base font-black text-emerald-400">
                        {item.clicksAfter}
                      </p>
                    </div>
                    <div className="col-span-2 border-t border-white/10 pt-2.5 flex items-center justify-between text-xs">
                      <span className="text-slate-400">إجمالي الظهور الشهري:</span>
                      <span className="font-bold text-cyan-300">
                        {item.impressionsAfter}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-slate-300">
                    {item.summary}
                  </p>

                  <div className="mt-4">
                    <p className="text-[11px] font-bold text-amber-300 mb-2">
                      أبرز الكلمات التي تصدرت النتيجة #1:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.topKeywordsRanked.map((kw) => (
                        <span
                          key={kw}
                          className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-white border border-white/10"
                        >
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-emerald-500/15 p-3 text-center text-xs font-black text-emerald-300 border border-emerald-500/30">
                  {item.revenueGrowth}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: AI SEARCH & GENERATIVE ENGINE OPTIMIZATION (GEO) IN KSA
      ===================================================================== */}
      <section
        id="ai-geo-seo"
        className="relative z-10 border-b border-white/10 bg-[#03060f] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-cyan-500/35 bg-gradient-to-l from-blue-950/60 via-[#061226] to-emerald-950/40 p-8 sm:p-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-4 py-1 text-xs font-bold text-cyan-300 border border-cyan-500/30">
                  <Cpu className="h-4 w-4" />
                  <span>الجيل الجديد من السيو في السعودية (AI SEO & GEO)</span>
                </div>
                <h2 className="mt-4 text-2xl font-black text-white sm:text-4xl">
                  اجعل شركتك أو متجرك الخيار رقم #1 في إجابات{" "}
                  <span className="text-cyan-300">
                    Google AI Overviews و ChatGPT
                  </span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
                  آلاف العملاء في الرياض وجدة اليوم يسألون الذكاء الاصطناعي مباشرة:
                  «ما هي أفضل شركة... في السعودية؟» أو «أين أشتري أفضل... في
                  الرياض؟». بينما لا تزال شركات السيو التقليدية تعمل بأساليب قديمة،
                  نطبق في <strong className="text-white">Unique</strong> تقنيات{" "}
                  <strong className="text-emerald-300">
                    Generative Engine Optimization (GEO)
                  </strong>{" "}
                  وهندسة الكيانات الدلالية (Entity SEO & JSON-LD Schema) لتظهر
                  علامتك التجارية كإجابة موثوقة وموصى بها في جوجل ومحركات الذكاء
                  الاصطناعي معاً.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2.5 rounded-xl bg-black/50 p-3.5 border border-white/10">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span>بناء الكيانات الدلالية (Brand Entity Recognition)</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-black/50 p-3.5 border border-white/10">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400" />
                    <span>هيكلة الإجابات المباشرة والجداول المقارنة لـ AI Overviews</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-black/50 p-3.5 border border-white/10">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-400" />
                    <span>توثيق الموثوقية والخبرة (Google E-E-A-T Signals)</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-black/50 p-3.5 border border-white/10">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                    <span>أكواد Schema.org مترابطة تقرأها نماذج الذكاء الاصطناعي</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-black/75 p-6">
                <p className="text-xs font-bold text-amber-300 mb-3">
                  مقارنة العائد الاستثماري: السيو الاحترافي مقابل الإعلانات
                </p>
                <div className="space-y-3">
                  {SEO_VS_ADS_COMPARISON.slice(0, 3).map((row) => (
                    <div
                      key={row.criterion}
                      className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 text-xs"
                    >
                      <p className="font-bold text-white mb-1">{row.criterion}</p>
                      <p className="text-emerald-300">
                        <strong>مع Unique SEO: </strong>
                        {row.uniqueSeo}
                      </p>
                      <p className="mt-1 text-slate-400">
                        <strong>الإعلانات الممولة: </strong>
                        {row.paidAds}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: LOCAL SEO COVERAGE ACROSS SAUDI CITIES
      ===================================================================== */}
      <section
        id="saudi-cities"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="تغطية جغرافية شاملة لجميع مدن ومناطق المملكة"
            title="خدمات شركة سيو في الرياض، جدة،"
            highlightedWord="الدمام، الخبر، وكافة مدن السعودية"
            subtitle="نصمم استراتيجيات سيو محلي ووطني مخصصة لطبيعة المنافسة وسلوك الباحثين في كل منطقة من مناطق المملكة العربية السعودية."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {SAUDI_CITIES_ZONES.map((zone) => (
              <div
                key={zone.id}
                className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#091326] to-[#040812] p-7 sm:p-8"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      شركة سيو في {zone.cityName}
                    </h3>
                    <p className="font-mono text-xs text-cyan-400">
                      {zone.englishName}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-slate-300">
                  {zone.commercialImportance}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {zone.highDemandSectors.map((sec) => (
                    <span
                      key={sec}
                      className="rounded-lg bg-white/5 px-3 py-1 text-xs font-semibold text-amber-300 border border-white/10"
                    >
                      {sec}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-200">
                  {zone.localSeoStrategy.map((st, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{st}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                  {zone.sampleKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded bg-emerald-500/10 px-2.5 py-1 text-[11px] text-emerald-200 border border-emerald-500/20"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: 90-DAY SCIENTIFIC EXECUTION ROADMAP
      ===================================================================== */}
      <section className="relative z-10 border-b border-white/10 bg-[#03060e] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="خطة عمل واضحة وموثقة خطوة بخطوة"
            title="منهجية Unique العلمية للتصدر في"
            highlightedWord="الصفحة الأولى لجوجل خلال 90 يوماً"
            subtitle="نعمل وفق خارطة طريق هندسية وتسويقية مقسمة إلى 5 مراحل دقيقة تضمن تحقيق نتائج سريعة ومستدامة."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {NINETY_DAY_ROADMAP.map((phase) => (
              <div
                key={phase.phaseNum}
                className="flex flex-col justify-between rounded-3xl border border-white/12 bg-[#070f20] p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 font-mono text-sm font-black text-black">
                      {phase.phaseNum}
                    </span>
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-bold text-amber-300">
                      {phase.timeframe}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-black text-white">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {phase.description}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3 text-[11px] text-slate-200">
                    {phase.tasks.map((t) => (
                      <li key={t} className="flex items-center gap-1.5">
                        <Check className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-xl bg-black/50 p-3 text-[11px] font-bold text-emerald-300 border border-white/10">
                  المخرج: {phase.milestoneOutput}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: TRANSPARENT SEO PACKAGES IN SAUDI RIYALS (SAR)
      ===================================================================== */}
      <section
        id="pricing-sar"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="استثمار شفاف وعائد مضاعف بدون رسوم خفية"
            title="باقات وأسعار السيو في السعودية"
            highlightedWord="بالريال السعودي (SAR)"
            subtitle="اختر الباقة المناسبة لحجم موقعك أو متجرك الإلكتروني وتواصل معنا عبر واتساب لبدء العمل فوراً."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {SAUDI_SEO_PACKAGES_SAR.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all ${
                  pkg.isPopular
                    ? "border-2 border-emerald-400 bg-gradient-to-b from-[#071f24] to-[#040914] shadow-[0_0_55px_rgba(16,185,129,0.22)] lg:-translate-y-3"
                    : "border border-white/15 bg-[#060c1a]"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 right-8 rounded-full bg-gradient-to-l from-amber-400 to-yellow-500 px-4 py-1 text-xs font-black text-black shadow-lg">
                    الأكثر طلباً للمتاجر والشركات في السعودية
                  </div>
                )}

                <div>
                  <span className="text-xs font-bold text-emerald-400">
                    {pkg.badgeText}
                  </span>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    {pkg.packageName}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {pkg.idealFor}
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 p-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-emerald-400">
                        {pkg.priceSAR}
                      </span>
                      <span className="text-sm font-bold text-amber-300">
                        ريال سعودي / شهرياً
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] font-bold text-cyan-300">
                      {pkg.keywordsCount}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-2.5 text-xs text-slate-200">
                    {pkg.includedServices.map((srv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-xs font-bold text-cyan-300 mb-2">
                      مزايا تقنية وتسويقية إضافية:
                    </p>
                    <ul className="space-y-2 text-xs text-slate-200">
                      {pkg.technicalAndContentFeatures.map((tf, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                          <span>{tf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 rounded-xl bg-amber-500/10 p-3 text-xs font-bold text-amber-300 border border-amber-500/20">
                    {pkg.reportingAndSupport}
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(pkg.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-black transition-all ${
                    pkg.isPopular
                      ? "bg-gradient-to-l from-emerald-500 to-cyan-500 text-black shadow-lg shadow-emerald-500/25 hover:scale-[1.01]"
                      : "border border-white/20 bg-white/5 text-white hover:bg-emerald-500 hover:text-black"
                  }`}
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>اشترك الآن عبر واتساب ({WHATSAPP_NUMBER_DISPLAY})</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 10: SAUDI SEO FAQ ACCORDION SECTION
      ===================================================================== */}
      <section
        id="faq-ksa"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="إجابات شاملة وشفافة"
            title="الأسئلة الشائعة حول خدمات السيو"
            highlightedWord="وتحسين محركات البحث في السعودية"
            subtitle="كل ما تحتاج معرفته قبل بدء حملة تحسين محركات البحث لموقعك أو متجرك الإلكتروني في المملكة."
          />

          <div className="space-y-4">
            {SAUDI_SEO_FAQS.map((faq, idx) => (
              <details
                key={faq.id}
                open={idx === 0}
                className="group rounded-2xl border border-white/12 bg-[#060c1a] p-6 transition-all open:border-emerald-500/40 open:bg-[#071522]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-right">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-emerald-500/15 px-2.5 py-1 text-xs font-bold text-emerald-300">
                      {faq.category}
                    </span>
                    <h3 className="text-base font-black text-white sm:text-lg group-open:text-emerald-300">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-emerald-400 transition-transform group-open:rotate-180">
                    <ChevronLeft className="h-4 w-4 -rotate-90" />
                  </span>
                </summary>
                <div className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-300">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 11: FINAL FREE SEO AUDIT & WHATSAPP CTA BANNER
      ===================================================================== */}
      <section className="relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-[#071f29] via-[#05101e] to-[#02050b] p-8 shadow-[0_0_80px_rgba(16,185,129,0.2)] sm:p-12 lg:p-16 text-center">
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300">
                <Sparkles className="h-4 w-4" />
                <span>احصل على تقرير فحص سيو شامل ومجاني 100%</span>
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                أرسل رابط موقعك أو متجرك الآن واكتشف كيف تتصدر جوجل في السعودية
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                سواء كنت تمتلك متجراً على{" "}
                <strong className="text-emerald-300">سلة أو زد أو شوبيفاي</strong>،
                أو موقع شركة على{" "}
                <strong className="text-cyan-300">ووردبريس أو Next.js</strong>؛
                تواصل معنا عبر واتساب وسنرسل لك تحليلاً مفصلاً للأخطاء التقنية
                والكلمات المفتاحية الرابحة في مجالك.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={mainWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-l from-emerald-500 to-cyan-500 px-8 py-4 text-base font-black text-black shadow-[0_0_35px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.03]"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>اطلب الفحص المجاني عبر واتساب:</span>
                  <span dir="ltr" className="font-mono text-lg">
                    {WHATSAPP_NUMBER_DISPLAY}
                  </span>
                </a>

                <Link
                  href="/uae-web-design"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  <span>خدمات تصميم المواقع والمتاجر</span>
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}