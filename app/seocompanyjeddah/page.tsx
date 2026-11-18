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
    "شركة سيو في جدة | أفضل شركة تحسين محركات البحث SEO وتصدر قوقل بجدة | Unique",
  description:
    "أفضل شركة سيو في جدة لتصدر نتائج بحث قوقل وجوجل ونتائج الذكاء الاصطناعي AI Search. نضاعف زيارات ومبيعات الشركات، العيادات، المقاولات، ومتاجر سلة وزد وشوبيفاي في جدة بخطة 90 يوماً موثقة في Google Search Console.",
  keywords: [
    "شركة سيو في جدة",
    "أفضل شركة سيو في جدة",
    "شركة تحسين محركات البحث في جدة",
    "خبير سيو في جدة",
    "خدمات سيو جدة",
    "سيو المتاجر الإلكترونية في جدة",
    "سيو متاجر سلة جدة",
    "سيو متاجر زد جدة",
    "سيو شوبيفاي جدة",
    "السيو المحلي في جدة",
    "تصدر خرائط قوقل جدة",
    "أسعار السيو في جدة",
    "تحسين الظهور في نتائج الذكاء الاصطناعي جدة",
    "SEO Company Jeddah",
    "Best SEO Agency in Jeddah",
    "Local SEO Services Jeddah",
    "UNIQUE Digital Agency",
  ],
  authors: [{ name: "UNIQUE Digital Agency" }],
  publisher: "UNIQUE",
  metadataBase: new URL("https://marketing-beta-gold-30.vercel.app"),
  alternates: {
    canonical: "/jeddah-seo",
    languages: {
      "ar-SA": "/jeddah-seo",
      "en-SA": "/en/jeddah-seo",
      ar: "/jeddah-seo",
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
      "شركة سيو في جدة | تصدر الصفحة الأولى في قوقل ونتائج AI Search | Unique",
    description:
      "شريكك الاستراتيجي في جدة لتصدر نتائج البحث وخرائط جوجل ومضاعفة المبيعات. خدمات سيو تقني ومحتوى وباك لينك آمن للشركات والعيادات والمقاولات ومتاجر سلة وزد وشوبيفاي في جدة.",
    url: "https://marketing-beta-gold-30.vercel.app/jeddah-seo",
    siteName: "Unique Agency",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة سيو في جدة | أفضل شركة تحسين محركات البحث SEO بجدة | Unique",
    description:
      "نتائج موثقة من Google Search Console لمضاعفة الزيارات والمبيعات العضوية للشركات والمتاجر في جدة ومنطقة مكة المكرمة.",
  },
};

// ============================================================================
// 3. TYPESCRIPT INTERFACES FOR JEDDAH SEO PAGE
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
  businessImpactInJeddah: string;
  executionChecklist: string[];
  deliverables: string[];
  whatsappText: string;
}

interface JeddahDistrictZone {
  id: string;
  districtTitle: string;
  englishTag: string;
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
  districtInJeddah: string;
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

interface SeoVsAdsRow {
  criterion: string;
  uniqueSeo: string;
  paidAds: string;
  traditionalOrCheapSeo: string;
}

interface JeddahSectorItem {
  id: string;
  sectorName: string;
  projectsCount: string;
  avgGrowth: string;
  description: string;
  keySeoFocus: string[];
  whatsappMsg: string;
}

interface NinetyDayPhase {
  phaseNum: string;
  timeframe: string;
  title: string;
  description: string;
  tasks: string[];
  milestoneOutput: string;
}

interface JeddahSeoPackageSAR {
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

interface ChatGptClientQuestion {
  tag: string;
  q: string;
  a: string;
}

interface JeddahSeoFaq {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// 4. COMPREHENSIVE JEDDAH SEO DATA ARRAYS (HYPER-LOCALIZED FOR JEDDAH)
// ============================================================================

const HERO_KPIS: HeroKpiCard[] = [
  {
    id: "kpi-jeddah-clicks",
    value: "+390%",
    title: "متوسط نمو الزيارات العضوية في جدة",
    subtitle: "قفزة موثقة بالأرقام الفعلية من داخل حسابات Google Search Console لعملائنا في جدة ومكة",
    accent: "emerald",
  },
  {
    id: "kpi-jeddah-maps",
    value: "Top #3",
    title: "السيطرة على خرائط قوقل جدة (Local Pack)",
    subtitle: "تصدر نتائج البحث الجغرافي في التحلية، الروضة، أبحر، السلامة، وطريق الملك عبدالعزيز",
    accent: "cyan",
  },
  {
    id: "kpi-jeddah-stores",
    value: "سلة • زد • شوبيفاي",
    title: "سيو المتاجر الإلكترونية في جدة",
    subtitle: "تحويل متجرك إلى مصدر طلبات عضوية مستدامة على مدار الساعة بدون استنزاف ميزانية الإعلانات",
    accent: "amber",
  },
  {
    id: "kpi-jeddah-ai",
    value: "Google + AI",
    title: "تصدر بحث قوقل وإجابات ChatGPT (GEO)",
    subtitle: "تهيئة مزدوجة للظهور في الصفحة الأولى لجوجل وفي ترشيحات الذكاء الاصطناعي التوليدي",
    accent: "blue",
  },
];

const CORE_SEO_SERVICES_JEDDAH: SeoServicePillar[] = [
  {
    id: "jed-seo-technical",
    number: "01",
    badge: "البنية الهندسية للتصدر السريع في جدة",
    title: "الفحص الشامل والسيو التقني المتقدم (Technical SEO & Core Web Vitals)",
    englishName: "Deep Technical SEO Audit, Speed & Indexation Engineering",
    summary:
      "نبدأ بفحص موقعك أو متجرك في جدة عبر أدوات الفحص الهندسي (Screaming Frog و Google Search Console) لاكتشاف وإصلاح كافة الأخطاء البرمجية ومشاكل عدم الأرشفة (Non-Indexable Canonicals) التي تعيق ظهور صفحاتك في قوقل السعودية.",
    businessImpactInJeddah:
      "مضاعفة سرعة أرشفة صفحات الخدمات والمنتجات وتحقيق سرعة 99/100 على شبكات الجوال في جدة خلال أول أسبوعين.",
    executionChecklist: [
      "إصلاح روابط Canonical الخاطئة، صفحات الخطأ 404، سلاسل التحويلات 301، وحل مشاكل الفهرسة في Search Console",
      "تحسين مؤشرات Core Web Vitals (سرعة LCP < 0.8s، استقرار CLS، واستجابة INP) وتصفير حمولات الشبكة الضخمة",
      "تركيب أكواد Schema.org JSON-LD المخصصة لمدينة جدة (LocalBusiness, MedicalClinic, Product SAR, FAQPage)",
      "ضبط خريطة الموقع الذكية (XML Sitemap) وملف Robots.txt وتوجيه ميزانية الزحف نحو صفحات البيع عالية الربحية",
      "تنفيذ التعديلات البرمجية مباشرة بأيدي مهندسينا على مواقع Next.js و WordPress ومتاجر سلة وزد وشوبيفاي",
    ],
    deliverables: [
      "تقرير فحص تقني شامل قبل وبعد الإصلاح",
      "أداء PageSpeed باللون الأخضر (95-100)",
      "تفعيل Schema.org وحل كافة أخطاء الأرشفة",
    ],
    whatsappText: "مرحباً شركة Unique، أرغب في طلب فحص وخدمة السيو التقني (Technical SEO) لموقعي في جدة.",
  },
  {
    id: "jed-seo-local-maps",
    number: "02",
    badge: "الاستحواذ على عملاء جدة المباشرين",
    title: "السيو المحلي وتصدر خرائط قوقل في أحياء جدة (Jeddah Local SEO & GBP)",
    englishName: "Jeddah Local Pack Domination & Google Business Profile Optimization",
    summary:
      "غالبية الباحثين في جدة يكتبون عبارات محلية مثل «أفضل عيادة أسنان بجدة»، «شركة مقاولات في جدة»، أو «مطعم قريب مني في التحلية/أبحر». نضمن ظهور نشاطك التجاري في المراكز الثلاثة الأولى على خرائط قوقل (Local 3-Pack) وفي النتائج العضوية المحلية.",
    businessImpactInJeddah:
      "زيادة المكالمات الهاتفية المباشرة وطلبات الاتجاهات لزيارة مقرك أو عيادتك أو معرضك في جدة بنسبة تتجاوز +310%.",
    executionChecklist: [
      "تحسين وتوثيق ملف نشاطك التجاري على Google Business Profile بكلمات مفتاحية محلية وصور عالية الجودة وإحداثيات جدة",
      "بناء صفحات هبوط محلية مخصصة لأحياء ومناطق جدة ومكة المكرمة بمحتوى فريد 100% خالٍ من التكرار",
      "توحيد بيانات النشاط (NAP: الاسم، العنوان، الهاتف) في الأدلة التجارية السعودية والمنصات المحلية",
      "إدارة المراجعات والتقييمات باحترافية والرد عليها بكلمات دلالية تعزز ثقة العميل الجداوي وترتيب الخرائط",
    ],
    deliverables: [
      "تطوير شامل لملف خرائط جوجل (GBP) في جدة",
      "صفحات استهداف محلي لأحياء جدة ومحور مكة",
      "تصدر المراكز الثلاثة الأولى في البحث الجغرافي",
    ],
    whatsappText: "مرحباً شركة Unique، أرغب في خدمة السيو المحلي وتصدر خرائط قوقل لنشاطي التجاري في جدة.",
  },
  {
    id: "jed-seo-ecommerce",
    number: "03",
    badge: "مضاعفة مبيعات متاجر جدة 24/7",
    title: "سيو المتاجر الإلكترونية في جدة (سلة، زد، شوبيفاي، ووكومرس، إيزي أوردر)",
    englishName: "Jeddah E-Commerce SEO for Salla, Zid, Shopify & WooCommerce",
    summary:
      "نساعد تجار وبراندات جدة على التحرر من الإدمان المكلف على إعلانات سناب شات وتيك توك. نعيد هيكلة أقسام ومنتجات متجرك ليتصدر قوقل في الكلمات الشرائية المباشرة ويجلب لك طلبات يومية مجانية من جدة وكافة مناطق المملكة.",
    businessImpactInJeddah:
      "خفض تكلفة اكتساب العميل (CAC) بنسبة 60% ورفع المبيعات العضوية المستمرة طوال العام وفي مواسم الذروة.",
    executionChecklist: [
      "إعادة هيكلة شجرة التصنيفات والأقسام الفرعية في متاجر سلة وزد وشوبيفاي وفق الكلمات الأكثر بحثاً وشراءً",
      "كتابة عناوين وأوصاف منتجات بيعية فريدة تتفوق على المنافسين وتقنع المتسوق بإتمام الطلب",
      "تفعيل Product Schema لإظهار سعر المنتج بالريال السعودي (ر.س)، التقييمات بالنجوم، وتوفر الشحن السريع في جدة",
      "معالجة مشاكل تكرار روابط الفلترة والترتيب التي تهدر ميزانية الزحف في المتاجر الإلكترونية",
      "بناء عناقيد مقالات شرائية (Buying Guides) تجلب الباحثين عن أفضل المنتجات وتحولهم مباشرة لسلة الشراء",
    ],
    deliverables: [
      "هيكلة كاملة لتصنيفات المتجر والكلمات الشرائية",
      "تحسين صفحات المنتجات والمجموعات الرئيسية",
      "تفعيل المقتطفات الغنية للمنتجات (Rich Snippets)",
    ],
    whatsappText: "مرحباً شركة Unique، أمتلك متجراً إلكترونياً في جدة وأرغب في خدمة سيو المتاجر لزيادة المبيعات.",
  },
  {
    id: "jed-seo-onpage-ctr",
    number: "04",
    badge: "تحويل الظهور إلى نقرات وعملاء فعليين",
    title: "تحسين السيو الداخلي ورفع نسبة النقر والتحويل (On-Page SEO & CRO)",
    englishName: "On-Page Optimization, Rich CTR Titles & WhatsApp Funnel Engineering",
    summary:
      "نحسن كل عنصر داخل صفحات موقعك ليتوافق مع خوارزميات جوجل ويخاطب طبيعة المشتري في جدة. نصيغ عناوين ميتا جذابة ترفع نسبة النقر (CTR)، وننظم الترويسات والربط الداخلي ومسارات التحويل المباشر للواتساب.",
    businessImpactInJeddah:
      "مضاعفة عدد النقرات من نفس الترتيب في جوجل ورفع معدل تحول الزوار إلى اتصالات وطلبات عبر واتساب.",
    executionChecklist: [
      "صياغة Meta Titles و Meta Descriptions بمحفزات نفسية وبيعية تخطف عين الباحث في جدة",
      "هيكلة الترويسات (H1, H2, H3) وتطعيم المحتوى بالكيانات الدلالية (NLP Entities) واللهجة البحثية المحلية",
      "بناء شبكة ربط داخلي عنقودية (Internal Linking Silos) تمرر القوة إلى صفحات الخدمات والمنتجات الرئيسية",
      "تحسين الصور بصيغ WebP/AVIF الخفيفة وإضافة وسوم Alt الوصفية مع تطبيق معايير الثقة والمصداقية E-E-A-T",
    ],
    deliverables: [
      "تحسين شامل لصفحات الخدمات والمنتجات الرئيسية",
      "خريطة ربط داخلي ذكية تعزز الصفحات البيعية",
      "تطوير مسارات التحويل وأزرار التواصل (CRO)",
    ],
    whatsappText: "مرحباً شركة Unique، أرغب في تحسين السيو الداخلي ومعدل التحويل لموقعي في جدة.",
  },
  {
    id: "jed-seo-ai-geo",
    number: "05",
    badge: "الريادة في مستقبل البحث الذكي 2026",
    title: "تحسين الظهور في نتائج الذكاء الاصطناعي (AI SEO / GEO & ChatGPT)",
    englishName: "Generative Engine Optimization (GEO) for ChatGPT & Google AI Overviews",
    summary:
      "لم يعد البحث مقتصراً على الروابط التقليدية؛ بل يسأل الآلاف من سكان جدة اليوم ChatGPT وملخصات Google AI Overviews عن أفضل الشركات والعيادات والمتاجر. نهيئ موقعك تقنياً ودلالياً ليظهر كإجابة أولى ومصدر موثوق في نتائج الذكاء الاصطناعي.",
    businessImpactInJeddah:
      "الاستحواذ المبكر على شريحة العملاء الذين يعتمدون على ترشيحات الذكاء الاصطناعي لاتخاذ قرار الشراء في جدة.",
    executionChecklist: [
      "بناء محتوى مهيكل بصيغة الإجابات المباشرة (Answer Engine Optimization - AEO) والجداول المقارنة الواضحة",
      "توثيق الكيانات الرقمية لعلامتك التجارية في جدة (Brand Entity & Knowledge Graph Signals)",
      "ربط البيانات المنظمة المتقدمة (JSON-LD) بحيث تفهم نماذج الذكاء الاصطناعي تخصصك وأسعارك ومناطق خدمتك",
      "نشر أدلة شاملة ودراسات حالة موثقة تجعل الذكاء الاصطناعي يستشهد بموقعك كمرجع أول في مجالك",
    ],
    deliverables: [
      "تهيئة شاملة لمعايير GEO و AEO الحديثة",
      "هيكلة فقرات الإجابات المباشرة للـ Featured Snippets",
      "تعزيز حضور العلامة في ChatGPT و Google AI Overviews",
    ],
    whatsappText: "مرحباً شركة Unique، أرغب في تهيئة موقعي في جدة للظهور في نتائج جوجل والذكاء الاصطناعي (AI SEO).",
  },
  {
    id: "jed-seo-content-links",
    number: "06",
    badge: "سلطة دومين عالية وأمان تام 100%",
    title: "المحتوى الاستراتيجي وبناء الباك لينك الموثوق (Content & White-Hat Links)",
    englishName: "Topical Authority Content & Safe White-Hat Saudi Backlinks",
    summary:
      "نبني لموقعك في جدة سلطة موضوعية كاملة عبر مقالات وصفحات بيعية مكتوبة بأيدي خبراء، مدعومة بروابط خلفية (Backlinks & Guest Posts) قوية وطبيعية من مواقع وصحف عربية وسعودية موثوقة ترفع ترتيبك بأمان تام.",
    businessImpactInJeddah:
      "رفع قوة الدومين (Domain Authority / DR) والتفوق المستدام على المنافسين في أصعب الكلمات المفتاحية بجدة.",
    executionChecklist: [
      "إعداد خطة محتوى مبنية على نية البحث في جدة ومكة تغطي كافة الأسئلة الشرائية والخدمية لعملائك",
      "نشر مقالات استضافية (Guest Posts) بروابط Dofollow سياقية في مواقع إخبارية وتخصصية ذات زيارات حقيقية",
      "توزيع طبيعي وآمن للنصوص الرابطة (Anchor Texts) يحمي موقعك من أي تحديثات أو عقوبات",
      "فحص دوري لملف الروابط الخلفية والتنصل من أي روابط عشوائية أو ضارة (Disavow Toxic Links)",
    ],
    deliverables: [
      "محتوى سيو حصري ومقنع شهرياً",
      "روابط خلفية White-Hat عالية الموثوقية",
      "تقرير شهري شفاف بالروابط ونمو الترتيب",
    ],
    whatsappText: "مرحباً شركة Unique، أرغب في خطة محتوى وبناء باك لينك آمن لرفع ترتيب موقعي في جدة.",
  },
];

const JEDDAH_DISTRICTS_ZONES: JeddahDistrictZone[] = [
  {
    id: "dist-tahlia-rawdah",
    districtTitle: "محور التحلية، الروضة، الخالدية، والزهراء",
    englishTag: "Tahlia St, Al Rawdah, Al Khalidiyah & Al Zahra",
    commercialCharacter:
      "القلب النابض للعيادات التجميلية ومراكز الأسنان، البراندات الفاخرة، المطاعم والكافيهات الراقية، والمكاتب الاستشارية في جدة.",
    targetBusinesses: ["عيادات الأسنان والتجميل والجلدية", "براندات العطور والأزياء والمجوهرات", "المطاعم والكافيهات المختصة", "شركات التصميم الداخلي والديكور"],
    localSeoActions: [
      "استهداف الكلمات المقترنة بـ (التحلية، الروضة، الخالدية، الزهراء) في صفحات الهبوط وخرائط قوقل",
      "تصدر نتائج البحث المحلي السريع عبر الجوال للباحثين عن خدمات فورية قريبة",
      "تفعيل المقتطفات الغنية للتقييمات والمواعيد والأسعار لرفع معدل الحجز المباشر",
    ],
    localKeywords: ["عيادة أسنان بجدة التحلية", "أفضل عيادة تجميل في جدة الروضة", "شركة تصميم داخلي جدة"],
  },
  {
    id: "dist-obhur-corniche-kingroad",
    districtTitle: "محور طريق الملك عبدالعزيز، الشاطئ، وأبحر الشمالية والجنوبية",
    englishTag: "King Abdulaziz Rd, Al Shati, Corniche & Obhur",
    commercialImportance: "",
    commercialCharacter:
      "وجهة المشاريع العقارية الكبرى، الأبراج التجارية، المنتجعات والشاليهات البحرية، الفنادق، وتأجير اليخوت والسيارات الفارهة.",
    targetBusinesses: ["شركات التطوير والوساطة العقارية", "المنتجعات والشاليهات والسياحة البحرية", "مقرات الشركات القابضة والتمويل", "تأجير السيارات واليخوت في جدة"],
    localSeoActions: [
      "بناء صفحات مشاريع وعقارات وسياحة متوافقة مع السيو باللغتين العربية والإنجليزية",
      "استهداف المستثمرين والسياح الباحثين عن عقارات ومنتجعات أبحر والكورنيش",
      "تحقيق سرعة تحميل 99/100 لعرض الصور والفيديوهات عالية الدقة بدون أي بطء",
    ],
    localKeywords: ["شركة تطوير عقاري جدة", "شقق تمليك أبحر الشمالية", "منتجعات جدة البحرية"],
  } as JeddahDistrictZone,
  {
    id: "dist-salamah-hamra-central",
    districtTitle: "محور السلامة، الحمراء، النعيم، والفيصلية",
    englishTag: "Al Salamah, Al Hamra, Al Naeem & Al Faisaliyah",
    commercialCharacter:
      "تجمع ضخم للشركات الخدمية، المراكز الطبية، الأكاديميات التعليمية، مكاتب المحاماة، والمتاجر المتخصصة.",
    targetBusinesses: ["مكاتب المحاماة والاستشارات القانونية", "المراكز الطبية والمختبرات", "شركات البرمجيات والتسويق والأعمال", "الأكاديميات ومراكز التدريب"],
    localSeoActions: [
      "بناء سلطة موضوعية (Topical Authority) تجعل شركتك المرجع الأول في وسط وشمال جدة",
      "ربط الفروع المحلية بصفحات خدمات مفصلة تتصدر بحث قوقل وخرائط جوجل",
      "تحسين معدل التحويل عبر نماذج حجز الاستشارات وأزرار واتساب الفورية",
    ],
    localKeywords: ["أفضل مكتب محاماة في جدة", "شركة سيو في جدة", "مركز تدريب معتمد بجدة"],
  },
  {
    id: "dist-industrial-port-makkah",
    districtTitle: "المنطقة الصناعية، ميناء جدة الإسلامي، ومحور جدة - مكة",
    englishTag: "Jeddah Industrial City, Islamic Port & Makkah Corridor",
    commercialCharacter:
      "شريان الصناعة، المقاولات الكبرى، المستودعات والهناجر، الشحن والتخليص الجمركي، وخدمات الحج والعمرة والنقل بين جدة ومكة.",
    targetBusinesses: ["شركات المقاولات والهناجر والمظلات والساندوتش بانل", "شركات الشحن والتخليص الجمركي واللوجستيات", "المصانع والتوريدات التجارية B2B", "شركات النقل وخدمات المعتمرين والحجاج"],
    localSeoActions: [
      "استهداف كلمات العقود والمناقصات وطلبات عروض الأسعار (B2B SEO) في جدة ومكة",
      "تصدر كلمات الإنشاءات المعدنية، المستودعات، المظلات، والخدمات اللوجستية",
      "تغطية مزدوجة تخدم عملاء جدة ومكة المكرمة والطائف بخطة سيو إقليمية متكاملة",
    ],
    localKeywords: ["شركة مقاولات في جدة", "تركيب هناجر ومستودعات جدة", "شركة تخليص جمركي ميناء جدة"],
  },
];

const ECOMMERCE_SEO_PLATFORMS_JEDDAH: EcommerceSeoPlatform[] = [
  {
    id: "jed-ecom-salla",
    platformName: "سيو متاجر سلة في جدة (Salla SEO)",
    marketShareTag: "المنصة المفضلة لتجار جدة",
    title: "مضاعفة المبيعات العضوية لمتاجر سلة في جدة والمملكة",
    painPointSolved:
      "الكثير من متاجر سلة في جدة تمتلك منتجات ممتازة لكنها تعتمد كلياً على إعلانات سناب وتيك توك، وبمجرد توقف الحملة تتوقف المبيعات بسبب غياب التهيئة لمحركات البحث.",
    technicalSolutions: [
      "ضبط إعدادات السيو المتقدمة في متجر سلة وربط Search Console و Analytics",
      "إعادة كتابة عناوين وأوصاف التصنيفات والمنتجات بالكلمات الشرائية عالية البحث في جدة والسعودية",
      "تخصيص واجهة متجر سلة بـ Custom CSS لرفع سرعة التصفح ومعدل الإضافة للسلة",
      "بناء مدونة تسويقية داخل المتجر تجلب الباحثين عن الهدايا، العطور، الأزياء، والمنتجات مباشرة لمتجرك",
    ],
    expectedGrowth: "+260% إلى +420% زيادة في الزيارات والطلبات غير الإعلانية خلال 90 يوماً",
    whatsappMsg: "مرحباً Unique، أمتلك متجر سلة في جدة وأرغب في تحسين السيو ومضاعفة المبيعات من قوقل.",
  },
  {
    id: "jed-ecom-zid",
    platformName: "سيو متاجر زد في جدة (Zid SEO)",
    marketShareTag: "نمو متسارع لقطاع التجزئة",
    title: "تصدر النتائج الشرائية الأولى لمتاجر زد في جدة",
    painPointSolved:
      "غياب الهيكلة الهرمية للتصنيفات وضعف المحتوى النصي في صفحات الأقسام يمنع متاجر زد من المنافسة في الكلمات العامة الكبرى.",
    technicalSolutions: [
      "بناء شجرة أقسام وتصنيفات فرعية ذكية تغطي كافة كلمات البحث التجاري في جدة والمملكة",
      "ضغط الصور وتحسين سرعة تحميل صفحات المنتجات على الجوال",
      "إضافة محتوى دلالي غني في صفحات التصنيفات لتعزيز صلتها الموضوعية لدى جوجل",
      "تفعيل بيانات Product Schema بالريال السعودي وبناء روابط خلفية قوية للأقسام الرئيسية",
    ],
    expectedGrowth: "تصدر مستدام في الصفحة الأولى للكلمات التجارية وخفض تكلفة التسويق",
    whatsappMsg: "مرحباً Unique، أمتلك متجر زد في جدة وأرغب في خطة سيو متكاملة.",
  },
  {
    id: "jed-ecom-shopify-woo",
    platformName: "سيو شوبيفاي وووكومرس وإيزي أوردر",
    marketShareTag: "للبراندات والمتاجر المخصصة",
    title: "هندسة سيو احترافية لمتاجر Shopify و WooCommerce في جدة",
    painPointSolved:
      "مشاكل تكرار الروابط في شوبيفاي وثقل الإضافات في ووكومرس التي تبطئ المتجر وتمنع أرشفة المجموعات بشكل سليم.",
    technicalSolutions: [
      "إصلاح بنية الروابط القانونية (Canonicals) في شوبيفاي لمنع تكرار صفحات المنتجات داخل المجموعات",
      "تسريع الكود البرمجي وتحقيق 95+ على PageSpeed مع تفعيل تقييمات النجوم والأسعار في قوقل",
      "تهيئة المتجر باللغتين العربية والإنجليزية لمخاطبة كافة سكان وزوار مدينة جدة",
      "تحسين مسار سلة الشراء والدفع (تابي، تمارا، Apple Pay) لرفع معدل التحويل (CRO)",
    ],
    expectedGrowth: "هيمنة شاملة على كلمات البراند والمنتجات في جدة وجميع مناطق السعودية",
    whatsappMsg: "مرحباً Unique، أمتلك متجر شوبيفاي / ووكومرس في جدة وأريد تطوير السيو والمبيعات.",
  },
];

const GSC_DOCUMENTED_RESULTS_JEDDAH: GscCaseStudy[] = [
  {
    id: "jed-gsc-1",
    sector: "مجمع عيادات أسنان وتجميل وجلدية",
    districtInJeddah: "جدة - حي الروضة والتحلية",
    platform: "WordPress & Elementor Pro",
    projectTitle: "الانتقال من الصفحة الرابعة إلى النتيجة #1 في جدة ومضاعفة حجوزات العيادة",
    timeframe: "خلال 75 يوماً",
    clicksBefore: "1,380 نقرة/شهر",
    clicksAfter: "29,600 نقرة/شهر",
    impressionsAfter: "390,000+ ظهور لباحثين في جدة",
    revenueGrowth: "+295% زيادة في حجوزات المواعيد عبر واتساب والهاتف",
    topKeywordsRanked: ["أفضل عيادة أسنان بجدة", "ابتسامة هوليوود جدة", "عيادة ليزر وتجميل جدة"],
    summary:
      "بناء صفحات مستقلة لكل خدمة علاجية وطبيب مع تطبيق معايير جوجل الطبية E-E-A-T وتطوير ملف خرائط قوقل للسيطرة على الـ Local 3-Pack في جدة.",
  },
  {
    id: "jed-gsc-2",
    sector: "شركة مقاولات عامة ومظلات وساندوتش بانل وهناجر",
    districtInJeddah: "جدة ومكة المكرمة",
    platform: "Next.js 16 + Sanity CMS",
    projectTitle: "تصدر أكثر من 55 كلمة خدمية عالية العائد في قطاع المقاولات بجدة",
    timeframe: "خلال 60 يوماً",
    clicksBefore: "490 نقرة/شهر",
    clicksAfter: "24,300 نقرة/شهر",
    impressionsAfter: "310,000+ ظهور لعملاء وشركات",
    revenueGrowth: "+430% نمو في طلبات المعاينة وعروض الأسعار (RFQ)",
    topKeywordsRanked: ["مظلات وسواتر جدة", "تركيب ساندوتش بانل جدة", "مقاول هناجر ومستودعات بجدة"],
    summary:
      "تطوير صفحات خدمات فائقة السرعة (99/100 PageSpeed) مدعومة بمعارض أعمال وفيديوهات مضغوطة وأكواد LocalBusiness Schema مخصصة لجدة.",
  },
  {
    id: "jed-gsc-3",
    sector: "براند عطور وبخور وهدايا فاخرة",
    districtInJeddah: "جدة (شحن لكافة مناطق المملكة)",
    platform: "متجر سلة (Salla)",
    projectTitle: "تحقيق 36,400+ نقرة شرائية شهرياً من قوقل دون الاعتماد على إعلانات سناب",
    timeframe: "خلال 90 يوماً",
    clicksBefore: "1,120 نقرة/شهر",
    clicksAfter: "36,400 نقرة/شهر",
    impressionsAfter: "445,000+ ظهور تجاري في قوقل السعودية",
    revenueGrowth: "+350% نمو في المبيعات العضوية الصافية",
    topKeywordsRanked: ["متجر عطور في جدة", "أفضل بخور وعود ملكي", "هدايا عطور فخمة جدة"],
    summary:
      "إعادة هيكلة تصنيفات المتجر، كتابة أوصاف حسية مقنعة لـ 160 منتجاً، تفعيل Product Schema بالريال السعودي، وبناء روابط خلفية آمنة.",
  },
];

const SEO_VS_ADS_COMPARISON_JEDDAH: SeoVsAdsRow[] = [
  {
    criterion: "استمرارية الزيارات والعملاء في جدة",
    uniqueSeo: "نتائج طويلة الأمد ومستدامة تجلب لك عملاء مجاناً 24/7 حتى بعد انتهاء الحملة",
    paidAds: "نتائج فورية مؤقتة تتوقف في نفس اللحظة التي ينتهي فيها رصيد الإعلان",
    traditionalOrCheapSeo: "وصول محدود أو ارتفاع مؤقت يعقبه عقاب من جوجل بسبب الروابط العشوائية",
  },
  {
    criterion: "التكلفة والعائد على الاستثمار (ROI)",
    uniqueSeo: "لا تدفع مقابل كل نقرة؛ تكلفة العميل الواحد تنخفض شهرياً وعائد الاستثمار يتضاعف",
    paidAds: "تدفع مقابل كل نقرة (CPC مرتفع جداً في جدة) وتزداد التكلفة مع شراسة المنافسة",
    traditionalOrCheapSeo: "هدر للميزانية والوقت في محتوى منسوخ لا يحقق أي مبيعات فعلية",
  },
  {
    criterion: "ثقة ومصداقية العلامة التجارية لدى العميل الجداوي",
    uniqueSeo: "ثقة عالية جداً؛ تصدر نتائج البحث الطبيعية وخرائط قوقل يمنحك مكانة الشركة رقم #1",
    paidAds: "كثير من المستخدمين في جدة يتجاوزون النتائج المكتوب عليها (إعلان / Sponsored)",
    traditionalOrCheapSeo: "أخطاء تقنية وبطء في الموقع يضعفان انطباع العميل عن شركتك",
  },
  {
    criterion: "تحسين الموقع وتجربة المستخدم والذكاء الاصطناعي",
    uniqueSeo: "يرفع سرعة الموقع (99/100)، يحسن تجربة الجوال، ويضعك في إجابات ChatGPT و AI Overviews",
    paidAds: "يركز على الظهور الإعلاني فقط ولا يصلح عيوب موقعك أو يبني له سلطة رقمية",
    traditionalOrCheapSeo: "يفتقر للخبرة البرمجية في Next.js و WordPress وسلة وزد وتقنيات AI SEO",
  },
];

const JEDDAH_12_SECTORS: JeddahSectorItem[] = [
  {
    id: "jsec-clinics",
    sectorName: "العيادات الطبية، الأسنان، الجلدية والتجميل في جدة",
    projectsCount: "+65 عيادة ومجمع",
    avgGrowth: "+295% حجوزات مواعيد",
    description: "تصدر بحث المرضى في التحلية، الروضة، والسلامة عن خدمات الأسنان، الليزر، الفيلر، والجلدية.",
    keySeoFocus: ["صفحات الأطباء والخدمات", "خرائط قوقل جدة", "معايير E-E-A-T الطبية"],
    whatsappMsg: "مرحباً Unique، أرغب في خطة سيو لعيادة / مركز طبي في جدة.",
  },
  {
    id: "jsec-contracting",
    sectorName: "شركات المقاولات، المظلات، السواتر، الساندوتش بانل والهناجر",
    projectsCount: "+75 شركة ومؤسسة",
    avgGrowth: "+420% اتصالات وطلبات تسعير",
    description: "السيطرة على كلمات الإنشاءات، المظلات، الساندوتش بانل، والمستودعات في جدة ومكة.",
    keySeoFocus: ["صفحات خدمات محلية", "معارض أعمال وفيديو", "سرعة جوال 99/100"],
    whatsappMsg: "مرحباً Unique، أرغب في خطة سيو لشركة مقاولات / مظلات وهناجر في جدة.",
  },
  {
    id: "jsec-ecommerce",
    sectorName: "المتاجر الإلكترونية في جدة (سلة، زد، شوبيفاي)",
    projectsCount: "+95 متجر إلكتروني",
    avgGrowth: "+350% مبيعات عضوية",
    description: "مضاعفة الطلبات اليومية من جوجل للعطور، الأزياء، العبايات، الإلكترونيات، والهدايا.",
    keySeoFocus: ["Product Schema بالريال", "هيكلة الأقسام", "معالجة تكرار الفلاتر"],
    whatsappMsg: "مرحباً Unique، أرغب في خطة سيو لمتجر إلكتروني في جدة.",
  },
  {
    id: "jsec-realestate",
    sectorName: "التطوير العقاري، شقق التمليك، والتصميم الداخلي بجدة",
    projectsCount: "+50 شركة عقارية",
    avgGrowth: "+310% عملاء ومستثمرون",
    description: "تصدر كلمات شراء الشقق والفلل في أبحر، الشاطئ، وشمال جدة بالإضافة لشركات الديكور والتشطيب.",
    keySeoFocus: ["صفحات أحياء جدة", "كتالوجات المشاريع", "استهداف كلمات التمليك"],
    whatsappMsg: "مرحباً Unique، أرغب في خطة سيو لشركة عقارية / تصميم داخلي في جدة.",
  },
  {
    id: "jsec-tourism-yachts",
    sectorName: "المنتجعات البحرية، الفنادق، تأجير اليخوت والسيارات، والعمرة",
    projectsCount: "+45 شركة ومنتجع",
    avgGrowth: "+340% حجوزات مباشرة",
    description: "استقطاب السياح والزوار والمعتمرين عبر سيو محلي ودولي متعدد اللغات في جدة ومكة.",
    keySeoFocus: ["سيو متعدد اللغات", "خرائط الكورنيش وأبحر", "سرعة الحجز الفوري"],
    whatsappMsg: "مرحباً Unique، أرغب في خطة سيو لشركة سياحة / منتجع / تأجير سيارات في جدة.",
  },
  {
    id: "jsec-logistics",
    sectorName: "شركات الشحن، التخليص الجمركي، والخدمات اللوجستية",
    projectsCount: "+35 شركة لوجستية",
    avgGrowth: "+280% عقود شركات B2B",
    description: "تصدر بحث التجار والمستوردين الباحثين عن تخليص جمركي وشحن ومستودعات في ميناء جدة الإسلامي.",
    keySeoFocus: ["كلمات B2B الصناعية", "نماذج طلب عروض أسعار", "سلطة دومين عالية"],
    whatsappMsg: "مرحباً Unique، أرغب في خطة سيو لشركة شحن وتخليص جمركي في جدة.",
  },
];

const NINETY_DAY_ROADMAP_JEDDAH: NinetyDayPhase[] = [
  {
    phaseNum: "01",
    timeframe: "الأسبوع 1 - 2",
    title: "تحليل Search Console والإصلاح التقني الشامل",
    description:
      "نفحص موقعك بالكامل عبر Screaming Frog، نصلح أخطاء الأرشفة والـ Canonical، ونرفع سرعة الموقع على الجوال إلى 99/100.",
    tasks: ["فحص تقني شامل", "ضبط Canonical & Sitemap", "تحسين Core Web Vitals", "تركيب Schema جدة"],
    milestoneOutput: "موقع سليم برمجياً 100% وجاهز للأرشفة الفورية في قوقل جدة",
  },
  {
    phaseNum: "02",
    timeframe: "الأسبوع 2 - 3",
    title: "دراسة منافسي جدة وخريطة الكلمات المفتاحية",
    description:
      "نحلل أقوى المنافسين في جدة ونستخرج الكلمات الشرائية والخدمية والمحلية الأعلى عائداً، ونوزعها على صفحات موقعك.",
    tasks: ["بحث كلمات جدة ومكة", "تحليل فجوة المنافسين", "هيكلة شجرة الصفحات", "منع التنافس الداخلي"],
    milestoneOutput: "خطة كلمات مفتاحية وهيكلة صفحات معتمدة وموجهة نحو البيع",
  },
  {
    phaseNum: "03",
    timeframe: "الأسبوع 4 - 6",
    title: "إعادة بناء صفحات الخدمات والسيو الداخلي (On-Page & CTR)",
    description:
      "نطور عناوين الميتا لرفع نسبة النقر (CTR)، ونعيد صياغة صفحات الخدمات والمنتجات والربط الداخلي وأزرار التحويل للواتساب.",
    tasks: ["عناوين ترفع الـ CTR", "تطوير صفحات الخدمات", "بناء الربط الداخلي", "تحسين الصور WebP"],
    milestoneOutput: "ارتفاع واضح في مرات الظهور والترتيب الأولي للكلمات في جدة",
  },
  {
    phaseNum: "04",
    timeframe: "الأسبوع 6 - 10",
    title: "السيو المحلي لخرائط جدة وتصدر الذكاء الاصطناعي (AI SEO)",
    description:
      "نطور ملف Google Business Profile لتصدر خرائط جدة، وننشر مقالات محلية ونهيئ المحتوى للظهور في ChatGPT و AI Overviews.",
    tasks: ["تصدر خرائط قوقل جدة", "مقالات محلية لجدة ومكة", "تهيئة AI Search (GEO)", "إدارة التقييمات"],
    milestoneOutput: "دخول الكلمات الرئيسية للصفحة الأولى وتدفق الاتصالات والطلبات",
  },
  {
    phaseNum: "05",
    timeframe: "الأسبوع 8 - 12+",
    title: "بناء الروابط الموثوقة وتثبيت الصدارة (White-Hat Authority)",
    description:
      "نعزز سلطة موقعك بروابط خلفية آمنة (Dofollow Guest Posts) من مواقع سعودية وعربية موثوقة مع تقارير شهرية شفافة.",
    tasks: ["روابط Guest Posts قوية", "متابعة أسبوعية في GSC", "رفع معدل التحويل CRO", "تقارير أداء ومبيعات"],
    milestoneOutput: "استقرار في المراكز الثلاثة الأولى بجوجل جدة ونمو متضاعف في الإيرادات",
  },
];

const JEDDAH_SEO_PACKAGES_SAR: JeddahSeoPackageSAR[] = [
  {
    id: "jed-pkg-starter",
    packageName: "باقة جدة المحلية والانطلاق (Local & Starter SEO)",
    badgeText: "مثالية للعيادات، المكاتب، والشركات الخدمية في جدة",
    priceSAR: "1,850",
    billingCycle: "ريال سعودي / شهرياً (بدون عقود إلزامية طويلة)",
    idealFor: "الشركات الخدمية، العيادات، المطاعم، والمشاريع الناشئة المستهدفة لمدينة جدة",
    isPopular: false,
    keywordsCount: "استهداف حتى 20 كلمة مفتاحية محلية وشرائية في جدة",
    includedServices: [
      "فحص وإصلاح كامل لأخطاء السيو التقني والأرشفة في Google Search Console",
      "تحسين سرعة الموقع ومؤشرات Core Web Vitals على الجوال",
      "تحسين السيو الداخلي (On-Page SEO) لعدد 10 صفحات رئيسية وخدمية",
      "إعداد وتطوير ملف خرائط قوقل (Google Business Profile) لتصدر البحث المحلي في جدة",
      "كتابة 6 مقالات أو صفحات هبوط محلية شهرياً متوافقة مع نية البحث في جدة",
      "بناء روابط خلفية آمنة وعالية الجودة (White-Hat Backlinks) لرفع سلطة الموقع",
    ],
    technicalAndContentFeatures: [
      "ضبط كامل للـ Meta Titles, Descriptions, Dynamic Canonicals & Local Schema",
      "بناء خطة الربط الداخلي وتحسين الصور بصيغ WebP السريعة",
    ],
    reportingAndSupport: "تقرير أداء شهري مفصل من Google Search Console + دعم مباشر عبر واتساب",
    whatsappMsg: "مرحباً شركة Unique، أرغب في الاشتراك في (باقة جدة المحلية والانطلاق للسيو - 1,850 ر.س).",
  },
  {
    id: "jed-pkg-pro",
    packageName: "باقة السيطرة في جدة والمتاجر (Jeddah Pro & E-Commerce SEO)",
    badgeText: "الأكثر طلباً للشركات الطموحة ومتاجر سلة وزد وشوبيفاي في جدة",
    priceSAR: "3,200",
    billingCycle: "ريال سعودي / شهرياً (خطة شاملة لتصدر جدة والمملكة)",
    idealFor: "المتاجر الإلكترونية (سلة، زد، شوبيفاي)، شركات المقاولات والعقارات، والمجمعات الطبية في جدة",
    isPopular: true,
    keywordsCount: "استهداف حتى 45 كلمة مفتاحية تنافسية وشرائية في جدة والسعودية",
    includedServices: [
      "كل مزايا باقة الانطلاق + فحص هندسي متعمق عبر Screaming Frog وإصلاح كافة الثغرات البرمجية",
      "تهيئة شاملة لسيو المتاجر والمواقع (الأقسام، الفلاتر، Product Schema، وتحسين 30+ صفحة/منتج شهرياً)",
      "خطة بناء سلطة موضوعية مع كتابة 12 مقالاً أو صفحة بيعية متخصصة شهرياً",
      "استهداف شامل لأحياء جدة ومحور مكة المكرمة وتصدر نتائج الخرائط (Local 3-Pack)",
      "حملة بناء باك لينك وجيست بوست قوية وآمنة 100% من مواقع سعودية وعربية موثوقة",
      "تهيئة الموقع للظهور في إجابات الذكاء الاصطناعي (Google AI Overviews & ChatGPT Search)",
    ],
    technicalAndContentFeatures: [
      "تحسين معدل التحويل (CRO) ومسارات الشراء والتواصل عبر واتساب لمضاعفة المبيعات",
      "تحليل شهري لتحركات المنافسين في جدة واقتناص الفرص البحثية الجديدة",
    ],
    reportingAndSupport: "تقارير أداء نصف شهرية وشهرية موثقة من GSC & GA4 + مدير مشروع مخصص على واتساب",
    whatsappMsg: "مرحباً شركة Unique، أرغب في الاشتراك في (باقة السيطرة في جدة والمتاجر للسيو - 3,200 ر.س).",
  },
  {
    id: "jed-pkg-enterprise",
    packageName: "باقة الهيمنة الشاملة والمؤسسات (Enterprise & National KSA)",
    badgeText: "للمتاجر الكبرى والمنصات العقارية والسياحية والشركات متعددة الفروع",
    priceSAR: "5,500",
    billingCycle: "ريال سعودي / شهرياً (حلول مخصصة للعلامات الرائدة)",
    idealFor: "المتاجر الضخمة، شركات التطوير العقاري والسياحة، والشركات التي تستهدف جدة والرياض وكافة مناطق المملكة",
    isPopular: false,
    keywordsCount: "استهداف مفتوح (80+ كلمة مفتاحية وعناقيد بحثية كاملة)",
    includedServices: [
      "إدارة سيو تقني وهندسي مستمر للمنصات الكبيرة (Next.js, WordPress, Shopify Plus, Salla/Zid)",
      "تحسين شامل ومستمر لمئات المنتجات والتصنيفات وصفحات الفروع والمدن في جدة والمملكة",
      "إنتاج 20+ قطعة محتوى بيعي وموسوعي شهرياً باللغتين العربية والإنجليزية",
      "حملة علاقات عامة رقمية (Digital PR) وبناء روابط مرجعية عالية السلطة",
      "تطوير برمجي مستمر لسرعة الموقع، البنية التحتية، ومعدلات التحويل البيعية (CRO)",
      "تهيئة السيو الدولي ومتعدد اللغات لقطاعات السياحة، الفنادق، والعقارات في جدة",
    ],
    technicalAndContentFeatures: [
      "أولوية قصوى في التنفيذ والتطوير البرمجي مع فريق هندسي وتسويقي متكامل",
      "لوحة تحكم وتقارير لحظية لمتابعة نمو الزيارات، الترتيب، والعائد على الاستثمار (ROI)",
    ],
    reportingAndSupport: "اجتماعات وتقارير أسبوعية مباشرة + دعم فني واستشاري VIP على مدار الساعة",
    whatsappMsg: "مرحباً شركة Unique، أرغب في الاستفسار عن (باقة الهيمنة الشاملة والمؤسسات للسيو في جدة - 5,500 ر.س).",
  },
];

const JEDDAH_CHATGPT_QUESTIONS: ChatGptClientQuestion[] = [
  {
    tag: "الظهور في ChatGPT و AI Search بجدة",
    q: "كيف تساعدني شركة سيو في جدة على الظهور في إجابات ChatGPT وملخصات Google AI Overviews؟",
    a: "عندما يسأل عميل في جدة الذكاء الاصطناعي: «ما هي أفضل عيادة / شركة مقاولات / متجر في جدة؟»، فإن نماذج الذكاء الاصطناعي تبحث عن المواقع التي تمتلك محتوى موثوقاً ومهيكلاً بوضوح، وبيانات منظمة (Schema.org)، وإشارات ثقة محلية قوية. نحن نطبق تقنيات AI Visibility Optimization (GEO & AEO) ليفهم الذكاء الاصطناعي تخصص نشاطك في جدة ويرشحك في صدارة إجاباته.",
  },
  {
    tag: "المنافسة المحلية في أحياء جدة",
    q: "لماذا أحتاج إلى استراتيجية سيو مخصصة لمدينة جدة وليس مجرد سيو عام؟",
    a: "سلوك المستهلك في جدة له طابع خاص؛ فالباحث يقرن طلبه باسم المدينة أو الحي (مثل: عيادة في التحلية، شقق في أبحر، مقاول في جدة، أو شحن من ميناء جدة). تخصيص صفحات موقعك وملف خرائط قوقل (Google Business Profile) لاستهداف هذه الكلمات الجغرافية يمنحك عملاء محليين جاهزين للشراء والزيارة الفورية بمعدل تحويل أعلى بـ 3 أضعاف من البحث العام.",
  },
  {
    tag: "الميزة الهندسية لوكالة Unique",
    q: "ما الذي يميز وكالة Unique عن باقي شركات وخبراء السيو في جدة؟",
    a: "أغلب مكاتب السيو تكتفي بإرسال نصائح نظرية أو بناء روابط عشوائية دون المساس بالكود البرمجي للموقع. في Unique، نحن شركة تطوير برمجيات (Next.js, WordPress, Shopify, Salla, Zid) ووكالة سيو في آنٍ واحد؛ أي أننا نصلح مشاكل السرعة، الـ Canonical، والـ Schema برمجياً بأيدينا، ونكتب المحتوى البيعي، ونربط كل ذلك بتقارير شفافة من Google Search Console.",
  },
  {
    tag: "مضاعفة نسبة النقر CTR",
    q: "كيف تضمنون أن العميل في جدة سينقر على موقعي أنا وليس على مواقع المنافسين في الصفحة الأولى؟",
    a: "نحن لا نتوقف عند رفع الترتيب فقط، بل نطبق هندسة رفع نسبة النقر (CTR Optimization): نكتب عناوين ميتا تتضمن عروضاً ومحفزات نفسية قوية، ونفعل المقتطفات الغنية (Rich Snippets) لإظهار التقييمات (★★★★★ 5.0) والأسعار بالريال السعودي تحت رابط موقعك في قوقل، مما يجعلك الخيار الأكثر جاذبية وموثوقية في صفحة النتائج.",
  },
];

const JEDDAH_SEO_FAQS: JeddahSeoFaq[] = [
  {
    id: "jfaq-1",
    category: "الأسعار والتكلفة",
    question: "كم تكلفة خدمات السيو في جدة؟",
    answer:
      "تبدأ باقات خدمات السيو الاحترافية في جدة لدى وكالة Unique من 1,850 ريال سعودي شهرياً لباقة الانطلاق والسيو المحلي، و3,200 ريال سعودي شهرياً لباقة السيطرة والمتاجر الإلكترونية (سلة، زد، شوبيفاي) والشركات التنافسية، وتصل إلى 5,500 ريال للمؤسسات والمنصات الكبرى. جميع باقاتنا شاملة للسيو التقني، المحتوى، والروابط الآمنة بدون أي رسوم خفية.",
  },
  {
    id: "jfaq-2",
    category: "المدة الزمنية للنتائج",
    question: "كم يستغرق السيو لتحقيق النتائج وتصدر الصفحة الأولى في جوجل جدة؟",
    answer:
      "تظهر نتائج الإصلاح التقني وتحسن الأرشفة وارتفاع مرات الظهور في Google Search Console خلال أول أسبوعين إلى 4 أسابيع. أما الوصول للصفحة الأولى في الكلمات التنافسية والمحلية في جدة وتحقيق نمو ملموس في الاتصالات والمبيعات فيتم عادةً ضمن خطة الـ 60 إلى 90 يوماً الأولى، ويزداد رسوخاً وتضاعفاً كل شهر.",
  },
  {
    id: "jfaq-3",
    category: "المتاجر الإلكترونية",
    question: "هل السيو مناسب للمتاجر الإلكترونية على سلة وزد وشوبيفاي في جدة؟",
    answer:
      "نعم، ويُعد السيو القناة التسويقية الأعلى ربحية واستدامة للمتاجر الإلكترونية في جدة والمملكة. فهو يخلصك من الاعتماد الكامل على الإعلانات المدفوعة المكلفة، ويجعل منتجاتك وتصنيفاتك تظهر مجاناً أمام المتسوقين الباحثين عنها في قوقل على مدار 24 ساعة.",
  },
  {
    id: "jfaq-4",
    category: "خرائط قوقل والسيو المحلي",
    question: "هل يمكن تصدر نتائج جوجل محلياً وخرائط Google Maps في أحياء جدة؟",
    answer:
      "بكل تأكيد! السيو المحلي في جدة هو أحد أقوى تخصصاتنا. نقوم بتحسين ملف نشاطك التجاري على Google Business Profile، وبناء صفحات مستهدفة لجدة وأحيائها، وتوحيد الاقتباسات المحلية (Local Citations) لتظهر في المراكز الثلاثة الأولى (Local 3-Pack) عندما يبحث العملاء في جدة عن خدماتك.",
  },
  {
    id: "jfaq-5",
    category: "الفحص المجاني والبدء",
    question: "كيف أحصل على فحص سيو مجاني لموقعي أو متجري في جدة؟",
    answer:
      "اضغط على أي زر واتساب في هذه الصفحة للتواصل المباشر معنا على الرقم 01270506511 وأرسل رابط موقعك أو متجرك، وسنوافيك خلال 24 ساعة بتقرير فحص مجاني يكشف الأخطاء التقنية، فرص الكلمات المفتاحية في جدة، وخطة العمل المقترحة للتصدر.",
  },
];

const JEDDAH_SEMANTIC_KEYWORDS: string[] = [
  "شركة سيو في جدة",
  "أفضل شركة سيو في جدة",
  "خبير سيو في جدة",
  "شركة تحسين محركات البحث بجدة",
  "سيو المتاجر الإلكترونية في جدة",
  "سيو متاجر سلة جدة",
  "سيو متاجر زد جدة",
  "سيو شوبيفاي جدة",
  "تصدر خرائط قوقل جدة",
  "السيو المحلي في جدة ومكة",
  "تحسين الظهور في نتائج الذكاء الاصطناعي AI SEO",
  "أسعار السيو في جدة",
  "شركة تسويق وسيو بجدة",
  "تصدر نتائج بحث قوقل السعودية",
  "بناء باك لينك وجيست بوست سعودي",
  "السيو التقني Technical SEO جدة",
];

// ============================================================================
// 5. JSON-LD STRUCTURED DATA SCHEMAS FOR JEDDAH, SAUDI ARABIA (AR-SA)
// ============================================================================
const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://marketing-beta-gold-30.vercel.app/jeddah-seo#agency",
    name: "Unique Digital Agency - شركة سيو في جدة",
    alternateName: "يونيك أفضل شركة تحسين محركات البحث SEO في جدة ومكة",
    url: "https://marketing-beta-gold-30.vercel.app/jeddah-seo",
    telephone: "+201270506511",
    description:
      "أفضل شركة سيو في جدة متخصصة في تحسين محركات البحث SEO وتصدر قوقل ونتائج الذكاء الاصطناعي AI Search للشركات، العيادات، المقاولات، ومتاجر سلة وزد وشوبيفاي في جدة.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.5433,
      longitude: 39.1728,
    },
    areaServed: [
      { "@type": "City", name: "Jeddah" },
      { "@type": "City", name: "Makkah" },
      { "@type": "AdministrativeArea", name: "Makkah Province" },
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
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "خدمات تحسين محركات البحث SEO في جدة",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://marketing-beta-gold-30.vercel.app",
      telephone: "+201270506511",
    },
    areaServed: {
      "@type": "City",
      name: "Jeddah",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "باقات السيو وتحسين محركات البحث في جدة (SAR)",
      itemListElement: JEDDAH_SEO_PACKAGES_SAR.map((pkg) => ({
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
    mainEntity: JEDDAH_SEO_FAQS.map((faq) => ({
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
      {
        "@type": "ListItem",
        position: 3,
        name: "شركة سيو في جدة",
        item: "https://marketing-beta-gold-30.vercel.app/jeddah-seo",
      },
    ],
  },
];

// ============================================================================
// 6. REUSABLE UI SUB-COMPONENTS (SERVER-SAFE, RTL, ZERO RED ACCENTS)
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
        className={`inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold tracking-wide text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.15)] ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <Sparkles className="h-3.5 w-3.5 text-amber-400" />
        <span>{badge}</span>
      </div>
      <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}{" "}
        {highlightedWord && (
          <span className="bg-gradient-to-l from-cyan-400 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
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
// 7. MAIN PAGE COMPONENT (JEDDAH SEO COMPANY LANDING PAGE)
// ============================================================================
export default function JeddahSeoPage() {
  const mainWhatsAppLink = getWhatsAppUrl(
    "مرحباً شركة Unique، أرغب في الحصول على استشارة وفحص سيو مجاني لموقعي / متجري في جدة."
  );

  return (
    <main
      dir="rtl"
      lang="ar"
      className="relative min-h-screen bg-[#000000] text-white selection:bg-blue-600 selection:text-white overflow-x-hidden"
    >
      {/* Structured Data JSON-LD for Google.com.sa (Jeddah Geo-Targeted) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />

      {/* Ambient Background Glow Effects (Cyan, Emerald, Blue, Gold - Zero Red) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-48 -right-48 h-[520px] w-[520px] rounded-full bg-cyan-600/12 blur-[150px]" />
        <div className="absolute top-1/3 -left-48 h-[460px] w-[460px] rounded-full bg-emerald-600/10 blur-[150px]" />
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
        <span className="hidden sm:inline">فحص سيو جدة مجاناً:</span>
        <span dir="ltr" className="font-mono text-sm">
          {WHATSAPP_NUMBER_DISPLAY}
        </span>
      </a>

      {/* =====================================================================
          SECTION 1: TOP STICKY NAVIGATION BAR
      ===================================================================== */}
      <nav
        aria-label="التنقل السريع داخل صفحة شركة سيو في جدة"
        className="sticky top-0 z-40 border-b border-white/10 bg-[#000000]/85 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 font-black text-black shadow-lg shadow-cyan-500/25">
              U
            </span>
            <div>
              <p className="text-xs font-bold text-cyan-400">UNIQUE SEO AGENCY JEDDAH</p>
              <p className="text-[11px] text-slate-400">
                أفضل شركة سيو في جدة (التحلية • الروضة • أبحر • السلامة)
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-5 text-xs font-bold text-slate-300 lg:flex">
            <a href="#jeddah-seo-services" className="transition-colors hover:text-cyan-400">
              خدمات السيو في جدة
            </a>
            <a href="#jeddah-districts" className="transition-colors hover:text-cyan-400">
              أحياء ومناطق جدة
            </a>
            <a href="#jeddah-ecommerce-seo" className="transition-colors hover:text-cyan-400">
              سيو متاجر سلة وزد
            </a>
            <a href="#jeddah-gsc-results" className="transition-colors hover:text-emerald-400">
              نتائج Search Console
            </a>
            <a href="#jeddah-sectors" className="transition-colors hover:text-cyan-400">
              القطاعات المستهدفة
            </a>
            <a href="#jeddah-pricing" className="transition-colors hover:text-amber-400">
              الباقات بالريال (SAR)
            </a>
            <a href="#jeddah-faq" className="transition-colors hover:text-cyan-400">
              الأسئلة الشائعة
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={mainWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-l from-cyan-500 to-emerald-500 px-4 py-2 text-xs font-black text-black shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
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
          SECTION 2: CREATIVE JEDDAH HERO SECTION WITH GSC & LOCAL MAP PACK SIMULATOR
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
            <Link href="/" className="transition-colors hover:text-cyan-400">
              الرئيسية
            </Link>
            <ChevronLeft className="h-3.5 w-3.5 text-slate-600" />
            <Link href="/saudi-seo" className="transition-colors hover:text-cyan-400">
              شركة سيو في السعودية
            </Link>
            <ChevronLeft className="h-3.5 w-3.5 text-slate-600" />
            <span className="font-bold text-cyan-400">
              شركة سيو في جدة
            </span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Right Column: Primary Commercial Jeddah SEO Pitch */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-300">
                <Award className="h-4 w-4 text-amber-400" />
                <span>
                  الشريك الاستراتيجي الأول لتصدر نتائج قوقل وخرائط جوجل في عروس البحر الأحمر - جدة
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-black leading-[1.22] tracking-tight text-white sm:text-5xl lg:text-6xl">
                شركة سيو في جدة{" "}
                <span className="bg-gradient-to-l from-cyan-400 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
                  تتصدر بك قوقل ونتائج AI Search وتضاعف مبيعاتك
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
                في المشهد التجاري والسياحي المتسارع لمدينة جدة، لم يعد مجرد امتلاك
                موقع أو متجر كافياً لجلب العملاء؛ بل الفوز الحقيقي هو أن يظهر اسمك
                في <strong className="text-emerald-300">النتيجة رقم #1 على قوقل وخرائط جوجل</strong>{" "}
                لحظة بحث العميل في التحلية، الروضة، أبحر، أو السلامة عن خدمتك أو
                منتجك. في وكالة{" "}
                <strong className="font-bold text-white">UNIQUE Digital Agency</strong>،
                ننفذ خطة 90 يوماً هندسية وتسويقية تجمع{" "}
                <strong className="text-cyan-300">
                  السيو التقني، السيو المحلي لجدة ومكة، سيو متاجر سلة وزد وشوبيفاي،
                  وتهيئة الظهور في ChatGPT و AI Overviews
                </strong>{" "}
                بنتائج موثقة في Google Search Console.
              </p>

              {/* 4 Trust Badges Grid */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="text-sm font-medium text-slate-200">
                    خطة 90 يوماً موثقة في Google Search Console
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="text-sm font-medium text-slate-200">
                    تصدر خرائط قوقل (Local 3-Pack) في كافة أحياء جدة
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-sm font-medium text-slate-200">
                    تخصص عميق في سيو متاجر سلة وزد وشوبيفاي وووردبريس و Next.js
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-400" />
                  <span className="text-sm font-medium text-slate-200">
                    تهيئة متقدمة للظهور في إجابات ChatGPT و Google AI Search
                  </span>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={mainWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-l from-cyan-500 via-teal-500 to-emerald-500 px-8 py-4 text-base font-black text-black shadow-[0_0_35px_rgba(6,182,212,0.4)] transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>اطلب فحص سيو مجاني لموقعك في جدة</span>
                  <ArrowUpLeft className="h-5 w-5" />
                </a>
                <a
                  href="#jeddah-gsc-results"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-slate-200 backdrop-blur-md transition-all hover:border-cyan-400/50 hover:bg-white/10 hover:text-white"
                >
                  <TrendingUp className="h-5 w-5 text-cyan-400" />
                  <span>شاهد نتائج عملائنا في جدة</span>
                </a>
              </div>
            </div>

            {/* Left Column: Creative Live Jeddah GSC & Google Maps Local Pack Simulator */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-cyan-500/35 bg-gradient-to-b from-[#071a26]/95 to-[#040811]/95 p-6 shadow-[0_0_65px_rgba(6,182,212,0.2)] backdrop-blur-2xl sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-cyan-400" />
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1 text-[11px] font-mono text-cyan-300 border border-cyan-500/25">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Jeddah SEO & Local Pack Telemetry</span>
                  </div>
                </div>

                {/* 4 GSC Metric Boxes */}
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-2xl border border-cyan-500/30 bg-cyan-600/15 p-3">
                    <p className="text-[10px] text-cyan-200">نقرات جدة</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      36.4K
                    </p>
                    <span className="text-[10px] font-bold text-emerald-400">
                      +350% نمو
                    </span>
                  </div>
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-600/15 p-3">
                    <p className="text-[10px] text-emerald-200">مرات الظهور</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      445K
                    </p>
                    <span className="text-[10px] font-bold text-emerald-400">
                      +410% نمو
                    </span>
                  </div>
                  <div className="rounded-2xl border border-blue-500/30 bg-blue-600/15 p-3">
                    <p className="text-[10px] text-blue-200">نسبة النقر CTR</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      8.9%
                    </p>
                    <span className="text-[10px] font-bold text-cyan-300">
                      Rich Schema
                    </span>
                  </div>
                  <div className="rounded-2xl border border-amber-500/30 bg-amber-500/15 p-3">
                    <p className="text-[10px] text-amber-200">ترتيب جدة</p>
                    <p className="mt-1 font-mono text-lg font-black text-amber-300">
                      #1.1
                    </p>
                    <span className="text-[10px] font-bold text-amber-300">
                      النتيجة الأولى
                    </span>
                  </div>
                </div>

                {/* Simulated Google Maps Jeddah Local 3-Pack */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/60 p-4">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-cyan-300">
                      📍 نتائج خرائط قوقل جدة (Google Maps Local Pack)
                    </span>
                    <span className="rounded bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                      المركز #1 في جدة
                    </span>
                  </div>

                  <div className="rounded-xl border border-emerald-500/30 bg-[#071520] p-3.5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-black text-white">
                        1. علامتك التجارية — جدة (التحلية / طريق الملك)
                      </p>
                      <span className="text-[11px] font-bold text-amber-400">
                        ★★★★★ 4.9 (380)
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-300">
                      مفتوح الآن • يخدم جدة ومكة المكرمة • اتصال مباشر وواتساب
                    </p>
                  </div>

                  <div className="mt-2 rounded-xl border border-white/5 bg-white/[0.02] p-2.5 opacity-60">
                    <p className="text-[11px] text-slate-400">
                      2. منافس محلي تقليدي في جدة — ★★★★☆ 4.1
                    </p>
                  </div>
                </div>

                {/* Direct Audit Strip */}
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-cyan-500/30 bg-cyan-950/30 px-4 py-3">
                  <div>
                    <p className="text-[11px] text-slate-300">
                      احصل على تحليل شامل لموقعك ومنافسيك في جدة
                    </p>
                    <p dir="ltr" className="font-mono text-sm font-black text-emerald-400">
                      +20 12 70506511
                    </p>
                  </div>
                  <a
                    href={mainWhatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-emerald-500 px-4 py-2 text-xs font-black text-black transition-transform hover:scale-105"
                  >
                    ابدأ الآن
                  </a>
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
          SECTION 3: WHY JEDDAH BUSINESSES NEED SPECIALIZED SEO + COMPARISON TABLE
      ===================================================================== */}
      <section className="relative z-10 border-b border-white/10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="استثمار استراتيجي يضعك في صدارة السوق التجاري بجدة"
            title="لماذا تُعد الاستعانة بشركة سيو في جدة"
            highlightedWord="الفارق بين النمو المستدام واستنزاف الإعلانات؟"
            subtitle="تتميز جدة بكونها البوابة التجارية والسياحية الكبرى على البحر الأحمر؛ حيث تشتد المنافسة بين الشركات والعيادات والمتاجر. إليك المقارنة الحاسمة بين بناء أصولك الرقمية بالسيو الاحترافي مع Unique وبين الاعتماد على الإعلانات الممولة أو السيو العشوائي."
          />

          <div className="overflow-hidden rounded-3xl border border-white/15 bg-[#050a15] shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-right text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/15 bg-[#0a1328]">
                    <th className="p-5 font-black text-white w-[25%]">
                      وجه المقارنة في سوق جدة
                    </th>
                    <th className="p-5 font-black text-emerald-300 bg-emerald-600/15 border-x border-emerald-500/30 w-[30%]">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-amber-400" />
                        <span>السيو الاحترافي مع وكالة Unique في جدة</span>
                      </div>
                    </th>
                    <th className="p-5 font-bold text-slate-300 w-[23%]">
                      الإعلانات المدفوعة فقط (PPC / Snap / Google Ads)
                    </th>
                    <th className="p-5 font-bold text-slate-400 w-[22%]">
                      التسويق التقليدي أو السيو العشوائي الرخيص
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {SEO_VS_ADS_COMPARISON_JEDDAH.map((row) => (
                    <tr
                      key={row.criterion}
                      className="transition-colors hover:bg-white/[0.02]"
                    >
                      <td className="p-4 sm:p-5 font-bold text-white bg-black/40">
                        {row.criterion}
                      </td>
                      <td className="p-4 sm:p-5 bg-emerald-600/[0.06] border-x border-emerald-500/25 font-bold text-emerald-300">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                          <span>{row.uniqueSeo}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-300">
                        {row.paidAds}
                      </td>
                      <td className="p-4 sm:p-5 text-amber-200/80">
                        {row.traditionalOrCheapSeo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: 6 CORE SEO SERVICES IN JEDDAH
      ===================================================================== */}
      <section
        id="jeddah-seo-services"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="خدمات تحسين محركات البحث المتكاملة في جدة"
            title="ماذا تقدم لك وكالة Unique كأفضل"
            highlightedWord="شركة سيو في جدة؟"
            subtitle="من الفحص الهندسي وإصلاح الكود البرمجي إلى السيطرة على خرائط قوقل جدة، سيو متاجر سلة وزد وشوبيفاي، وتصدر نتائج الذكاء الاصطناعي AI Search."
          />

          <div className="space-y-10">
            {CORE_SEO_SERVICES_JEDDAH.map((srv) => (
              <article
                key={srv.id}
                className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#081224] to-[#03060d] p-6 shadow-2xl sm:p-10"
              >
                <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-6 lg:flex-row lg:items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-300">
                      <span>الخدمة الأساسية {srv.number}</span>
                      <span>•</span>
                      <span>{srv.badge}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                      {srv.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-emerald-400">
                      {srv.englishName}
                    </p>
                  </div>

                  <a
                    href={getWhatsAppUrl(srv.whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start rounded-2xl bg-gradient-to-l from-cyan-500 to-emerald-500 px-6 py-3.5 text-xs font-black text-black shadow-lg transition-transform hover:scale-[1.02] lg:self-auto"
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
                      المهام التنفيذية الدقيقة التي نقوم بها لموقعك في جدة:
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
                        الأثر المباشر على أعمالك في جدة:
                      </p>
                      <p className="text-xs leading-relaxed text-slate-300">
                        {srv.businessImpactInJeddah}
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
                        <span>تواصل مباشر: {WHATSAPP_NUMBER_DISPLAY}</span>
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
          SECTION 5: JEDDAH COMMERCIAL DISTRICTS LOCAL SEO COVERAGE
      ===================================================================== */}
      <section
        id="jeddah-districts"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="تغطية جغرافية دقيقة لأهم المحاور والأحياء التجارية في جدة"
            title="خدمات السيو المحلي وتصدر خرائط قوقل في"
            highlightedWord="التحلية، الروضة، أبحر، السلامة، وميناء جدة"
            subtitle="لا نكتفي باستهداف اسم مدينة جدة بشكل عام؛ بل نبني لك حضوراً محلياً يسيطر على عمليات البحث داخل الأحياء والمناطق التجارية الأكثر حيوية في جدة ومحور مكة المكرمة."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {JEDDAH_DISTRICTS_ZONES.map((dist) => (
              <div
                key={dist.id}
                className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#091326] to-[#040812] p-7 sm:p-8"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white sm:text-2xl">
                      {dist.districtTitle}
                    </h3>
                    <p className="font-mono text-xs text-emerald-400">
                      {dist.englishTag}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-slate-300">
                  {dist.commercialCharacter}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {dist.targetBusinesses.map((tb) => (
                    <span
                      key={tb}
                      className="rounded-lg bg-white/5 px-3 py-1 text-xs font-semibold text-amber-300 border border-white/10"
                    >
                      {tb}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-200">
                  {dist.localSeoActions.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                  {dist.localKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded bg-cyan-500/10 px-2.5 py-1 text-[11px] text-cyan-200 border border-cyan-500/20"
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
          SECTION 6: JEDDAH E-COMMERCE SEO (SALLA, ZID, SHOPIFY)
      ===================================================================== */}
      <section
        id="jeddah-ecommerce-seo"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="الحل الأمثل لمضاعفة مبيعات متاجر جدة بدون إعلانات"
            title="خدمات سيو المتاجر الإلكترونية في جدة:"
            highlightedWord="سلة (Salla)، زد (Zid)، وشوبيفاي (Shopify)"
            subtitle="نحول متجرك الإلكتروني في جدة إلى قناة مبيعات عضوية مستمرة تتصدر البحث الشرائي في جدة وكافة مدن المملكة."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {ECOMMERCE_SEO_PLATFORMS_JEDDAH.map((plat) => (
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
                      المشكلة التي نحلها لمتجرك:
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
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-cyan-500 to-emerald-500 py-3.5 text-xs font-black text-black transition-transform hover:scale-[1.01]"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>اطلب خطة سيو لمتجرك في جدة</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: DOCUMENTED GSC RESULTS IN JEDDAH + 6 SECTORS
      ===================================================================== */}
      <section
        id="jeddah-gsc-results"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="أرقام موثقة من حسابات Google Search Console لعملائنا"
            title="قصص نجاح ونتائج حقيقية لشركات ومتاجر"
            highlightedWord="في مدينة جدة ومنطقة مكة المكرمة"
            subtitle="شاهد كيف تضاعفت الزيارات والاتصالات والمبيعات العضوية لشركائنا في جدة خلال 60 إلى 90 يوماً."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {GSC_DOCUMENTED_RESULTS_JEDDAH.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#071924] to-[#030710] p-7 shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="rounded-lg bg-cyan-500/15 px-3 py-1 font-bold text-cyan-300">
                      {item.sector}
                    </span>
                    <span className="font-mono text-slate-400">
                      {item.districtInJeddah}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-black text-white">
                    {item.projectTitle}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-emerald-400">
                    المنصة: {item.platform} • المدة: {item.timeframe}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-black/60 p-4">
                    <div>
                      <p className="text-[11px] text-slate-400">النقرات قبل السيو</p>
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
                      أبرز الكلمات المتصدرة في جدة:
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

          {/* 6 Jeddah Economic Sectors Grid */}
          <div id="jeddah-sectors" className="mt-20 scroll-mt-24">
            <h3 className="text-center text-2xl font-black text-white sm:text-3xl mb-10">
              القطاعات الاقتصادية الأكثر نمواً التي نخدمها في جدة
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {JEDDAH_12_SECTORS.map((sec) => (
                <div
                  key={sec.id}
                  className="flex flex-col justify-between rounded-3xl border border-white/12 bg-[#071020] p-6 transition-all hover:border-cyan-400/50"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="rounded-lg bg-cyan-500/15 px-3 py-1 font-bold text-cyan-300">
                        {sec.projectsCount}
                      </span>
                      <span className="font-bold text-emerald-400">
                        {sec.avgGrowth}
                      </span>
                    </div>
                    <h4 className="mt-4 text-lg font-black text-white">
                      {sec.sectorName}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      {sec.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/10 pt-3">
                      {sec.keySeoFocus.map((f) => (
                        <span
                          key={f}
                          className="rounded bg-white/5 px-2.5 py-1 text-[11px] text-amber-300"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={getWhatsAppUrl(sec.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 py-2.5 text-xs font-bold text-cyan-300 transition-colors hover:bg-cyan-400 hover:text-black"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>اطلب خطة سيو لهذا القطاع في جدة</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: 90-DAY ROADMAP FOR JEDDAH BUSINESSES
      ===================================================================== */}
      <section className="relative z-10 border-b border-white/10 bg-[#03060e] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="خطة 90 يوماً واضحة وموثقة خطوة بخطوة"
            title="كيف نضع موقعك في صدارة نتائج بحث جدة"
            highlightedWord="خلال 90 يوماً؟"
            subtitle="منهجية عملية تبدأ بإصلاح البنية التقنية في الأسبوع الأول وتنتهي بالسيطرة على الكلمات الشرائية وخرائط قوقل جدة."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {NINETY_DAY_ROADMAP_JEDDAH.map((phase) => (
              <div
                key={phase.phaseNum}
                className="flex flex-col justify-between rounded-3xl border border-white/12 bg-[#070f20] p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 font-mono text-sm font-black text-black">
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
                        <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-xl bg-black/50 p-3 text-[11px] font-bold text-cyan-300 border border-white/10">
                  المخرج: {phase.milestoneOutput}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: TRANSPARENT JEDDAH SEO PACKAGES IN SAR
      ===================================================================== */}
      <section
        id="jeddah-pricing"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="باقات شفافة بالريال السعودي وعائد مضاعف"
            title="باقات وأسعار شركة سيو في جدة"
            highlightedWord="بالريال السعودي (SAR)"
            subtitle="اختر الباقة المناسبة لنشاطك التجاري أو متجرك الإلكتروني في جدة وابدأ رحلة التصدر معنا اليوم."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {JEDDAH_SEO_PACKAGES_SAR.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all ${
                  pkg.isPopular
                    ? "border-2 border-cyan-400 bg-gradient-to-b from-[#071f29] to-[#040914] shadow-[0_0_55px_rgba(6,182,212,0.22)] lg:-translate-y-3"
                    : "border border-white/15 bg-[#060c1a]"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 right-8 rounded-full bg-gradient-to-l from-amber-400 to-yellow-500 px-4 py-1 text-xs font-black text-black shadow-lg">
                    الأكثر طلباً للشركات والمتاجر في جدة
                  </div>
                )}

                <div>
                  <span className="text-xs font-bold text-cyan-400">
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
                      <span className="text-4xl font-black text-cyan-300">
                        {pkg.priceSAR}
                      </span>
                      <span className="text-sm font-bold text-amber-300">
                        ريال سعودي / شهرياً
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] font-bold text-emerald-300">
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
                      ? "bg-gradient-to-l from-cyan-500 to-emerald-500 text-black shadow-lg shadow-cyan-500/25 hover:scale-[1.01]"
                      : "border border-white/20 bg-white/5 text-white hover:bg-cyan-500 hover:text-black"
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
          SECTION 10: CHATGPT / AI QUESTIONS + JEDDAH FAQ ACCORDION
      ===================================================================== */}
      <section
        id="jeddah-faq"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="إجابات شافية ومباشرة لعملائنا في جدة"
            title="أسئلة جوهرية حول خدمات السيو والذكاء الاصطناعي"
            highlightedWord="وتصدر نتائج قوقل في جدة"
            subtitle="إجابات دقيقة على أكثر الأسئلة التي يطرحها أصحاب الشركات والمتاجر في جدة قبل بدء حملة السيو."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-14">
            {JEDDAH_CHATGPT_QUESTIONS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/12 bg-[#070f20] p-7"
              >
                <span className="inline-block rounded-lg bg-cyan-500/15 px-3 py-1 text-xs font-bold text-cyan-300 border border-cyan-500/25">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-lg font-black text-white">
                  {item.q}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {JEDDAH_SEO_FAQS.map((faq, idx) => (
              <details
                key={faq.id}
                open={idx === 0}
                className="group rounded-2xl border border-white/12 bg-[#060c1a] p-6 transition-all open:border-cyan-500/40 open:bg-[#071524]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-right">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-cyan-500/15 px-2.5 py-1 text-xs font-bold text-cyan-300">
                      {faq.category}
                    </span>
                    <h3 className="text-base font-black text-white sm:text-lg group-open:text-cyan-300">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-400 transition-transform group-open:rotate-180">
                    <ChevronLeft className="h-4 w-4 -rotate-90" />
                  </span>
                </summary>
                <div className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-300">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          {/* Jeddah Semantic Keywords Cloud */}
          <div className="mt-14 rounded-3xl border border-white/10 bg-black/50 p-7 text-center">
            <h3 className="text-base font-black text-white">
              أهم عمليات البحث والكلمات المفتاحية المستهدفة في جدة ومنطقة مكة المكرمة
            </h3>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {JEDDAH_SEMANTIC_KEYWORDS.map((kw) => (
                <span
                  key={kw}
                  className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-3.5 py-1.5 text-xs font-semibold text-cyan-300"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 11: FINAL FREE JEDDAH SEO AUDIT & WHATSAPP CTA BANNER
      ===================================================================== */}
      <section className="relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-[#071f29] via-[#05101e] to-[#02050b] p-8 shadow-[0_0_80px_rgba(6,182,212,0.2)] sm:p-12 lg:p-16 text-center">
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300">
                <Sparkles className="h-4 w-4" />
                <span>احصل على تقرير فحص سيو شامل ومجاني 100% لنشاطك في جدة</span>
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                أرسل رابط موقعك أو متجرك الآن وتصدر نتائج بحث جدة خلال 90 يوماً
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                سواء كنت تمتلك عيادة في التحلية، شركة مقاولات أو عقارات في جدة،
                أو متجراً إلكترونياً على{" "}
                <strong className="text-emerald-300">سلة أو زد أو شوبيفاي</strong>؛
                تواصل معنا عبر واتساب وسنرسل لك تحليلاً مفصلاً للأخطاء التقنية
                والكلمات المفتاحية الرابحة في جدة مجاناً.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={mainWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-l from-cyan-500 to-emerald-500 px-8 py-4 text-base font-black text-black shadow-[0_0_35px_rgba(6,182,212,0.4)] transition-all hover:scale-[1.03]"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>اطلب الفحص المجاني عبر واتساب:</span>
                  <span dir="ltr" className="font-mono text-lg">
                    {WHATSAPP_NUMBER_DISPLAY}
                  </span>
                </a>

                <Link
                  href="/saudi-seo"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  <span>شركة سيو في السعودية (الصفحة الرئيسية)</span>
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