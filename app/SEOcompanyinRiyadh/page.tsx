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
    "شركة سيو في الرياض | أفضل شركة تحسين محركات البحث SEO وتصدر قوقل بالرياض | Unique",
  description:
    "أفضل شركة سيو في الرياض لتصدر نتائج بحث قوقل وجوجل ونتائج الذكاء الاصطناعي AI Search. نضاعف زيارات ومبيعات الشركات، المصانع، العيادات، العقارات، ومتاجر سلة وزد وشوبيفاي في الرياض بخطة 90 يوماً موثقة في Google Search Console.",
  keywords: [
    "شركة سيو في الرياض",
    "أفضل شركة سيو في الرياض",
    "شركة تحسين محركات البحث في الرياض",
    "خبير سيو بالرياض",
    "خدمات سيو الرياض",
    "سيو المتاجر الإلكترونية في الرياض",
    "سيو متاجر سلة الرياض",
    "سيو متاجر زد الرياض",
    "سيو شوبيفاي الرياض",
    "السيو المحلي في الرياض",
    "تصدر خرائط قوقل الرياض",
    "شركة سيو للشركات والمصانع في الرياض",
    "أسعار السيو في الرياض",
    "تحسين الظهور في نتائج الذكاء الاصطناعي الرياض",
    "SEO Company Riyadh",
    "Best SEO Agency in Riyadh",
    "Local SEO Services Riyadh",
    "UNIQUE Digital Agency",
  ],
  authors: [{ name: "UNIQUE Digital Agency" }],
  publisher: "UNIQUE",
  metadataBase: new URL("https://www.uniquee-ws.com"),
  alternates: {
    canonical: "/riyadh-seo",
    languages: {
      "ar-SA": "/riyadh-seo",
      "en-SA": "/en/riyadh-seo",
      ar: "/riyadh-seo",
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
      "شركة سيو في الرياض | تصدر الصفحة الأولى في قوقل ونتائج AI Search | Unique",
    description:
      "شريكك الاستراتيجي في الرياض لتصدر نتائج البحث وخرائط جوجل ومضاعفة المبيعات. خدمات سيو تقني ومحتوى وباك لينك آمن للشركات، المصانع، العيادات، العقارات، ومتاجر سلة وزد وشوبيفاي في الرياض.",
    url: "https://www.uniquee-ws.com/riyadh-seo",
    siteName: "Unique Agency",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة سيو في الرياض | أفضل شركة تحسين محركات البحث SEO بالرياض | Unique",
    description:
      "نتائج موثقة من Google Search Console لمضاعفة الزيارات والمبيعات العضوية للشركات والمصانع والمتاجر في العاصمة الرياض.",
  },
};

// ============================================================================
// 3. TYPESCRIPT INTERFACES FOR RIYADH SEO PAGE
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
  businessImpactInRiyadh: string;
  executionChecklist: string[];
  deliverables: string[];
  whatsappText: string;
}

interface RiyadhDistrictZone {
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
  districtInRiyadh: string;
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

interface RiyadhSectorItem {
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

interface RiyadhSeoPackageSAR {
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

interface RiyadhSeoFaq {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// 4. COMPREHENSIVE RIYADH SEO DATA ARRAYS (HYPER-LOCALIZED FOR RIYADH)
// ============================================================================

const HERO_KPIS: HeroKpiCard[] = [
  {
    id: "kpi-riyadh-clicks",
    value: "+420%",
    title: "متوسط نمو الزيارات العضوية في الرياض",
    subtitle: "قفزة موثقة بالأرقام الفعلية من داخل حسابات Google Search Console لعملائنا في العاصمة الرياض",
    accent: "emerald",
  },
  {
    id: "kpi-riyadh-maps",
    value: "Top #3",
    title: "السيطرة على خرائط قوقل الرياض (Local Pack)",
    subtitle: "تصدر نتائج البحث الجغرافي في شمال الرياض، الملقا، العليا، الياسمين، طريق الملك فهد، و KAFD",
    accent: "cyan",
  },
  {
    id: "kpi-riyadh-stores",
    value: "سلة • زد • شوبيفاي",
    title: "سيو المتاجر والمصانع والشركات بالرياض",
    subtitle: "تحويل موقعك أو متجرك إلى مصدر عملاء وعقود وطلبات مستمرة 24/7 بدون استنزاف الإعلانات",
    accent: "amber",
  },
  {
    id: "kpi-riyadh-ai",
    value: "Google + AI",
    title: "تصدر قوقل وإجابات ChatGPT (GEO)",
    subtitle: "تهيئة مزدوجة للظهور في النتيجة الأولى بجوجل وفي ترشيحات الذكاء الاصطناعي التوليدي",
    accent: "blue",
  },
];

const CORE_SEO_SERVICES_RIYADH: SeoServicePillar[] = [
  {
    id: "ryd-seo-technical",
    number: "01",
    badge: "البنية الهندسية للتصدر في عاصمة الأعمال",
    title: "الفحص الهندسي الشامل والسيو التقني المتقدم (Technical SEO & Core Web Vitals)",
    englishName: "Deep Technical SEO Audit, Speed & Indexation Engineering",
    summary:
      "في سوق الرياض شديد التنافسية، الأخطاء البرمجية الصامتة تمنع تصدر موقعك مهما أنفقت على المحتوى. يبدأ مهندسونا بفحص موقعك عبر Screaming Frog و Google Search Console لإصلاح مشاكل عدم الأرشفة، أخطاء الـ Canonical، وتقليص حمولات الشبكة لتحقيق سرعة 99/100.",
    businessImpactInRiyadh:
      "يرفع كفاءة الزحف والأرشفة بنسبة 165% خلال الأسابيع الأولى ويقلل معدل ارتداد زوار الجوال في الرياض لأقل من 18%.",
    executionChecklist: [
      "إصلاح روابط Non-Indexable Canonical الخاطئة، صفحات الخطأ 404، سلاسل التحويلات 301، وهدر ميزانية الزحف",
      "تحسين مؤشرات Core Web Vitals (سرعة LCP < 0.8s، استقرار CLS = 0.00، واستجابة INP) على شبكات الجوال",
      "برمجة وتفعيل أكواد Schema.org JSON-LD المخصصة لمدينة الرياض (GeoCoordinates 24.7136, 46.6753، LocalBusiness، Product SAR)",
      "ضبط خريطة الموقع الذكية (Dynamic XML Sitemap) وملف Robots.txt والتحديث الفوري للمقالات والمنتجات",
      "تنفيذ كافة الإصلاحات البرمجية مباشرة بأيدي فريقنا على Next.js 16، WordPress، سلة، زد، وشوبيفاي",
    ],
    deliverables: [
      "تقرير فحص تقني شامل قبل وبعد الإصلاح",
      "أداء PageSpeed باللون الأخضر (95-100)",
      "تفعيل Schema.org وحل كافة أخطاء Search Console",
    ],
    whatsappText: "مرحباً شركة Unique، أرغب في طلب فحص وخدمة السيو التقني (Technical SEO) لموقعي في الرياض.",
  },
  {
    id: "ryd-seo-local-maps",
    number: "02",
    badge: "الاستحواذ على عملاء أحياء الرياض المباشرين",
    title: "السيو المحلي وتصدر خرائط قوقل في أحياء الرياض (Riyadh Local SEO & GBP)",
    englishName: "Riyadh Local Pack Domination & Google Business Profile Optimization",
    summary:
      "آلاف العملاء يومياً في الرياض يبحثون بعبارات جغرافية دقيقة مثل «أفضل عيادة في الملقا»، «شركة محاماة بالعليا»، «مقاول هناجر بالرياض»، أو «متجر قريب مني شمال الرياض». نضع نشاطك التجاري في المراكز الثلاثة الأولى على خرائط قوقل (Local 3-Pack).",
    businessImpactInRiyadh:
      "مضاعفة المكالمات الهاتفية المباشرة، نقرات الواتساب، وزيارات الفروع والمقرات في الرياض بنسبة تتجاوز +330%.",
    executionChecklist: [
      "توثيق وتحسين ملف نشاطك التجاري على Google Business Profile بالكلمات المفتاحية المحلية وإحداثيات الرياض",
      "إنشاء صفحات هبوط محلية مخصصة لمحاور وأحياء الرياض الكبرى (شمال الرياض، العليا، الدرعية، الصناعية) بدون أي تكرار",
      "توحيد بيانات النشاط التجاري (NAP: الاسم، العنوان، رقم الهاتف) عبر الأدلة التجارية السعودية الموثوقة",
      "تطبيق استراتيجية احترافية لزيادة التقييمات الإيجابية والرد عليها بكلمات دلالية تعزز الصدارة في الخرائط",
    ],
    deliverables: [
      "تطوير شامل لملف خرائط جوجل (GBP) بالرياض",
      "صفحات استهداف محلي لمحاور وأحياء الرياض",
      "تصدر المراكز الثلاثة الأولى في البحث الجغرافي",
    ],
    whatsappText: "مرحباً شركة Unique، أرغب في خدمة السيو المحلي وتصدر خرائط قوقل لنشاطي التجاري في الرياض.",
  },
  {
    id: "ryd-seo-ecommerce",
    number: "03",
    badge: "مضاعفة مبيعات متاجر الرياض 24/7",
    title: "سيو المتاجر الإلكترونية في الرياض (سلة، زد، شوبيفاي، ووكومرس، إيزي أوردر)",
    englishName: "Riyadh E-Commerce SEO for Salla, Zid, Shopify & WooCommerce",
    summary:
      "نحرر تجار وبراندات الرياض من الارتفاع الجنوني في تكلفة إعلانات سناب شات وتيك توك وجوجل. نعيد هيكلة أقسام وتصنيفات ومنتجات متجرك لتتصدر الكلمات الشرائية المباشرة وتجلب لك مبيعات عضوية صافية على مدار الساعة.",
    businessImpactInRiyadh:
      "خفض تكلفة الاستحواذ على العميل (CAC) بنسبة 65% وبناء قناة مبيعات عضوية متنامية طوال العام ومواسم الرياض.",
    executionChecklist: [
      "إعادة هيكلة شجرة التصنيفات والأقسام الفرعية في سلة وزد وشوبيفاي وفق الكلمات الأكثر بحثاً وشراءً في الرياض والسعودية",
      "كتابة عناوين وأوصاف منتجات بيعية فريدة باللغتين العربية والإنجليزية تقنع العميل بإتمام الطلب فوراً",
      "تفعيل Product Schema لإظهار السعر بالريال السعودي (ر.س)، التقييمات بالنجوم، وتوفر التوصيل السريع داخل الرياض",
      "معالجة مشاكل تكرار الروابط الناتجة عن الفلترة والترتيب التي تضعف أرشفة المتاجر الكبرى",
      "بناء عناقيد مقالات شرائية (Buying Guides) تجلب المشترين في مرحلة المقارنة وتحولهم مباشرة لصفحة الدفع",
    ],
    deliverables: [
      "هيكلة كاملة لتصنيفات المتجر والكلمات الشرائية",
      "تحسين صفحات المنتجات والمجموعات الأعلى ربحية",
      "تفعيل المقتطفات الغنية للمنتجات (Rich Snippets)",
    ],
    whatsappText: "مرحباً شركة Unique، أمتلك متجراً إلكترونياً في الرياض وأرغب في خدمة سيو المتاجر لزيادة المبيعات.",
  },
  {
    id: "ryd-seo-b2b-factories",
    number: "04",
    badge: "تخصص فريد للشركات والمصانع والمقاولات في الرياض",
    title: "سيو الشركات الكبرى والمصانع وقطاع الأعمال B2B في الرياض",
    englishName: "B2B Corporate, Industrial & Real Estate SEO in Riyadh",
    summary:
      "تضم الرياض آلاف المصانع، شركات المقاولات، المطورين العقاريين، وشركات التوريد والتقنية ضمن مشاريع رؤية 2030. نصمم استراتيجية سيو B2B تستهدف مديري المشتريات وصناع القرار لجلب عقود ومناقصات وطلبات عروض أسعار (RFQ) عالية القيمة.",
    businessImpactInRiyadh:
      "استقطاب عملاء مؤسسيين وعقود شركات كبرى في الرياض بقيمة مبيعات مضاعفة مقارنة بالبحث الاستهلاكي العادي.",
    executionChecklist: [
      "استهداف الكلمات المفتاحية التجارية والصناعية والهندسية الدقيقة باللغتين العربية والإنجليزية",
      "بناء صفحات خدمات وكتالوجات مواصفات فنية شاملة تقنع مديري المشتريات والمهندسين",
      "ربط صفحات الخدمات بنماذج طلب عروض الأسعار (RFQ) وأزرار التواصل المباشر عبر واتساب المبيعات",
      "بناء سلطة مرجعية (B2B Authority) عبر تقارير قطاعية ومقالات متخصصة ترفع ثقة الجهات والمؤسسات",
    ],
    deliverables: [
      "خطة كلمات مفتاحية B2B وصناعية مخصصة للرياض",
      "صفحات خدمات وكتالوجات عالية التحويل",
      "تصدر نتائج البحث للشركات والمصانع والمقاولات",
    ],
    whatsappText: "مرحباً شركة Unique، أرغب في خدمة سيو الشركات والمصانع وقطاع B2B في الرياض.",
  },
  {
    id: "ryd-seo-ai-geo",
    number: "05",
    badge: "الريادة في محركات البحث الذكية 2026",
    title: "تحسين الظهور في نتائج الذكاء الاصطناعي (AI SEO / GEO & ChatGPT)",
    englishName: "Generative Engine Optimization (GEO) for ChatGPT & Google AI Overviews",
    summary:
      "صناع القرار والعملاء في الرياض يسألون اليوم ChatGPT و Google AI Overviews مباشرة عن أفضل شركة أو عيادة أو متجر في الرياض. نهيئ موقعك دلالياً وتقنياً ليكون المصدر الأول الذي يقتبس منه الذكاء الاصطناعي ويرشحه للعميل.",
    businessImpactInRiyadh:
      "السبق التنافسي في الاستحواذ على عملاء البحث الذكي والظهور في المقتطفات الفورية (AI Overviews & Featured Snippets).",
    executionChecklist: [
      "صياغة المحتوى بهيكلة الإجابات المباشرة (Answer Engine Optimization - AEO) والجداول المقارنة الدقيقة",
      "توثيق الكيان الرقمي لشركتك في الرياض (Brand Entity & Knowledge Graph Signals)",
      "ترابط بيانات Schema.org JSON-LD لتفهم نماذج الذكاء الاصطناعي خدماتك، أسعارك، ومناطق تغطيتك بالرياض",
      "رفع نسبة النقر (CTR) عبر عناوين بيعية محفزة ونتائج غنية بالنجوم والأسئلة الشائعة",
    ],
    deliverables: [
      "تهيئة شاملة لمعايير GEO و AEO الحديثة",
      "تحسين عناوين الـ CTR والـ Rich Snippets",
      "تعزيز ظهور العلامة في ChatGPT و Google AI Overviews",
    ],
    whatsappText: "مرحباً شركة Unique، أرغب في تهيئة موقعي بالرياض للظهور في جوجل ونتائج الذكاء الاصطناعي (AI SEO).",
  },
  {
    id: "ryd-seo-content-links",
    number: "06",
    badge: "قوة الدومين بطرق White-Hat آمنة 100%",
    title: "بناء السلطة الموضوعية والباك لينك السعودي الموثوق (Content & Digital PR)",
    englishName: "Topical Authority Content Clusters & White-Hat Saudi Backlinks",
    summary:
      "في الرياض، المنافسة على الكلمات الكبرى تحتاج إلى سلطة دومين حقيقية وليست روابط عشوائية رخيصة. نبني لموقعك عناقيد محتوى بيعي وموسوعي مدعومة بروابط خلفية (Guest Posts & Digital PR) من مواقع سعودية وعربية موثوقة تضمن تصدراً دائماً وآمناً.",
    businessImpactInRiyadh:
      "رفع قوة الدومين (Domain Rating / DR) وتثبيت موقعك في المراكز الثلاثة الأولى ضد أقوى المنافسين في العاصمة.",
    executionChecklist: [
      "إعداد خطة محتوى مبنية على العناقيد الموضوعية تغطي كافة الأسئلة الشرائية لجمهور الرياض والسعودية",
      "نشر مقالات استضافية (Guest Posts) بروابط Dofollow سياقية في مواقع وصحف عربية وخليجية ذات زيارات حقيقية",
      "توزيع طبيعي وآمن للنصوص الرابطة (Anchor Texts) يحمي دومين موقعك من أي تحديثات خوارزمية",
      "فحص دوري وتنظيف لملف الروابط الخلفية والتنصل من أي روابط ضارة أو سبام (Disavow)",
    ],
    deliverables: [
      "محتوى سيو احترافي وحصري شهرياً",
      "روابط خلفية White-Hat عالية الموثوقية",
      "تقرير شهري شفاف بكافة الروابط ونمو الترتيب",
    ],
    whatsappText: "مرحباً شركة Unique، أرغب في خطة محتوى وبناء باك لينك آمن لرفع ترتيب موقعي في الرياض.",
  },
];

const RIYADH_DISTRICTS_ZONES: RiyadhDistrictZone[] = [
  {
    id: "dist-north-riyadh-kafd",
    districtTitle: "محور شمال الرياض (الملقا، الياسمين، حطين، النرجس، و KAFD)",
    englishTag: "North Riyadh, Al Malqa, Al Yasmin, Hittin, Al Narjis & KAFD",
    commercialCharacter:
      "أسرع مناطق الرياض نمواً وتوسعاً؛ تضم مركز الملك عبدالله المالي (KAFD)، أرقى المجمعات السكنية والتجارية، العيادات التجميلية، الشركات التقنية، والمطاعم والكافيهات الفاخرة.",
    targetBusinesses: ["الشركات العقارية والمشاريع السكنية", "عيادات التجميل والأسنان والجلدية", "شركات التقنية والاستشارات المالية", "المطاعم والكافيهات والبراندات الفاخرة"],
    localSeoActions: [
      "استهداف الكلمات المقترنة بشمال الرياض (الملقا، حطين، الياسمين، النرجس، KAFD) في صفحات الخدمات وخرائط قوقل",
      "السيطرة على نتائج البحث السريع عبر الجوال للعملاء ذوي القوة الشرائية العالية في شمال الرياض",
      "تفعيل المقتطفات الغنية للتقييمات والمواعيد والأسعار لرفع معدل الحجز والتواصل المباشر",
    ],
    localKeywords: ["أفضل عيادة أسنان شمال الرياض", "شركة تطوير عقاري الملقا الرياض", "شركة تصميم داخلي حطين والياسمين"],
  },
  {
    id: "dist-olaya-kingfahd-tahlia",
    districtTitle: "محور العليا، طريق الملك فهد، التحلية، والسليمانية",
    englishTag: "Al Olaya, King Fahd Rd, Tahlia St & Al Sulimaniyah",
    commercialCharacter:
      "القلب التجاري والإداري العريق للعاصمة الرياض؛ يجمع مقرات الشركات الكبرى، مكاتب المحاماة، الفنادق العالمية، المراكز الطبية التخصصية، وشركات الأعمال.",
    targetBusinesses: ["مكاتب المحاماة والاستشارات القانونية", "المستشفيات والمجمعات الطبية الكبرى", "الشركات القابضة وشركات الأعمال B2B", "الفنادق والضيافة وتأجير السيارات"],
    localSeoActions: [
      "بناء صفحات خدمات مؤسسية باللغتين العربية والإنجليزية تعكس الرصانة وتتصدر بحث صناع القرار",
      "تحسين ملف Google Business Profile لتصدر خرائط قوقل في قلب الرياض وطريق الملك فهد",
      "بناء روابط مرجعية وسلطة موضوعية تتفوق على شدة المنافسة في وسط الرياض",
    ],
    localKeywords: ["أفضل مكتب محاماة في الرياض العليا", "شركة سيو في الرياض", "شركة تسويق وتطوير مواقع الرياض"],
  },
  {
    id: "dist-diriyah-dq-west",
    districtTitle: "محور الدرعية، حي السفارات، عرقة، وغرب الرياض",
    englishTag: "Diriyah, Diplomatic Quarter (DQ), Irqah & West Riyadh",
    commercialCharacter:
      "وجهة السياحة العالمية الفاخرة (بوابة الدرعية)، الفعاليات الدولية، الجهات الدبلوماسية، والخدمات الراقية التي تتطلب حضوراً رقمياً عالمي المستوى ومتعدد اللغات.",
    targetBusinesses: ["شركات السياحة والضيافة وتنظيم الفعاليات", "المطاعم والمنتجعات التراثية والفاخرة", "العقارات الراقية والخدمات الاستشارية", "الخدمات المنزلية والصيانة الراقية"],
    localSeoActions: [
      "تطبيق السيو متعدد اللغات (عربي وإنجليزي وحتى 7 لغات عبر next-intl) لجذب الزوار والمستثمرين الدوليين",
      "تحقيق سرعة تحميل 99/100 على الهواتف لعرض التجارب السياحية والخدمات الفاخرة بأعلى جودة",
      "تهيئة الظهور في إجابات ChatGPT و Google AI Overviews للباحثين عن خدمات ومشاريع الدرعية والرياض",
    ],
    localKeywords: ["شركة تنظيم فعاليات الرياض الدرعية", "أفضل خدمات ضيافة وسياحة بالرياض", "تصميم مواقع وسيو متعدد اللغات الرياض"],
  },
  {
    id: "dist-industrial-sulay-east",
    districtTitle: "المدينة الصناعية الثانية والثالثة، السلي، وشرق وجنوب الرياض",
    englishTag: "Riyadh 2nd & 3rd Industrial Cities, Al Sulay & East Riyadh",
    commercialCharacter:
      "العصب الصناعي واللوجستي الأكبر في المملكة؛ يضم آلاف المصانع، المستودعات والهناجر، شركات المقاولات والإنشاءات المعدنية، والنقل والتوريدات التجارية.",
    targetBusinesses: ["المصانع وخطوط الإنتاج والتوريدات B2B", "شركات المقاولات، الهناجر، الساندوتش بانل، والمظلات", "شركات الشحن واللوجستيات والمستودعات", "تجار الجملة ومواد البناء والمعدات"],
    localSeoActions: [
      "استهداف الكلمات الصناعية والتجارية عالية القيمة (B2B Industrial SEO) لجلب طلبات التسعير والمناقصات",
      "تصدر كلمات إنشاء المستودعات والهناجر والمظلات والخدمات اللوجستية في السلي والمدن الصناعية",
      "تحسين صفحات الكتالوجات الفنية وتسهيل تحميل ملفات البروفايل وطلبات الـ RFQ عبر واتساب",
    ],
    localKeywords: ["مقاول هناجر ومستودعات بالرياض", "تركيب ساندوتش بانل الرياض", "شركة توريدات ومصانع الصناعية الثانية الرياض"],
  },
];

const ECOMMERCE_SEO_PLATFORMS_RIYADH: EcommerceSeoPlatform[] = [
  {
    id: "ryd-ecom-salla",
    platformName: "سيو متاجر سلة بالرياض (Salla SEO)",
    marketShareTag: "المنصة رقم #1 لتجار الرياض والمملكة",
    title: "مضاعفة الطلبات العضوية لمتاجر سلة في الرياض بدون إعلانات",
    painPointSolved:
      "ارتفاع تكلفة النقرة في إعلانات سناب شات وتيك توك بالرياض يلتهم هامش ربح المتاجر، بينما تظل منتجاتها وتصنيفاتها غائبة عن الصفحة الأولى في قوقل.",
    technicalSolutions: [
      "ضبط إعدادات السيو المتقدمة في سلة، ملف robots.txt، وربط Google Search Console و GA4",
      "إعادة كتابة عناوين وأوصاف الأقسام والمنتجات بالكلمات الشرائية الأكثر بحثاً في الرياض والسعودية",
      "تخصيص تصميم متجر سلة بأكواد CSS لرفع سرعة التصفح ومعدل الإضافة للسلة على الجوال",
      "بناء مدونة متجر شرائية تجلب الباحثين عن المنتجات والهدايا وتحولهم مباشرة لإتمام الطلب",
    ],
    expectedGrowth: "+280% إلى +450% زيادة في الزيارات والمبيعات غير الإعلانية خلال 90 يوماً",
    whatsappMsg: "مرحباً Unique، أمتلك متجر سلة في الرياض وأرغب في تحسين السيو ومضاعفة المبيعات من قوقل.",
  },
  {
    id: "ryd-ecom-zid",
    platformName: "سيو متاجر زد بالرياض (Zid SEO)",
    marketShareTag: "نمو متسارع لقطاع التجزئة السعودي",
    title: "تصدر النتائج الشرائية الأولى لمتاجر زد في العاصمة الرياض",
    painPointSolved:
      "عدم تنظيم شجرة التصنيفات وغياب النصوص الدلالية في صفحات الأقسام يمنع متاجر زد من اقتناص الكلمات التجارية الكبرى.",
    technicalSolutions: [
      "هندسة شجرة تصنيفات وأقسام فرعية ذكية تغطي كافة كلمات البحث الشرائي في الرياض والمملكة",
      "ضغط صور المنتجات والبنرات لتحقيق سرعة فتح لحظية على شبكات الجوال",
      "إضافة أوصاف دلالية غنية بالكلمات المفتاحية في صفحات التصنيفات لرفع سلطتها لدى جوجل",
      "تفعيل Product Schema بالريال السعودي وبناء روابط خلفية قوية للأقسام الأعلى ربحية",
    ],
    expectedGrowth: "تصدر مستدام في الصفحة الأولى وخفض جذري في تكلفة الاستحواذ على العميل",
    whatsappMsg: "مرحباً Unique، أمتلك متجر زد في الرياض وأرغب في خطة سيو متكاملة.",
  },
  {
    id: "ryd-ecom-shopify-woo",
    platformName: "سيو شوبيفاي وووكومرس وإيزي أوردر",
    marketShareTag: "للبراندات الكبرى والمتاجر المخصصة",
    title: "هندسة سيو احترافية لمتاجر Shopify و WooCommerce في الرياض",
    painPointSolved:
      "تكرار روابط المنتجات داخل المجموعات في شوبيفاي وثقل إضافات ووكومرس يضعفان مؤشرات Core Web Vitals ويؤخران الأرشفة.",
    technicalSolutions: [
      "إصلاح الروابط القانونية (Canonicals) في شوبيفاي لمنع تكرار الصفحات وهدر ميزانية الزحف",
      "تسريع الكود البرمجي لتحقيق 95+ على PageSpeed وتفعيل نجوم التقييم والأسعار بالريال في قوقل",
      "تهيئة المتجر باللغتين العربية والإنجليزية لمخاطبة كافة الشرائح والمقيمين في الرياض",
      "تحسين تجربة الدفع والشراء عبر تابي وتمارا و Apple Pay لرفع معدل التحويل (CRO)",
    ],
    expectedGrowth: "سيطرة كاملة على كلمات البراند والمنتجات في قوقل الرياض والسعودية",
    whatsappMsg: "مرحباً Unique، أمتلك متجر شوبيفاي / ووكومرس في الرياض وأريد تطوير السيو والمبيعات.",
  },
];

const GSC_DOCUMENTED_RESULTS_RIYADH: GscCaseStudy[] = [
  {
    id: "ryd-gsc-1",
    sector: "مجمع عيادات أسنان وجلدية وتجميل",
    districtInRiyadh: "شمال الرياض - حي الملقا والعليا",
    platform: "WordPress & Elementor Pro",
    projectTitle: "القفز من الصفحة الخامسة إلى النتيجة #1 بالرياض وزيادة حجوزات المرضى +320%",
    timeframe: "خلال 90 يوماً",
    clicksBefore: "1,650 نقرة/شهر",
    clicksAfter: "38,400 نقرة/شهر",
    impressionsAfter: "495,000+ ظهور لباحثين في الرياض",
    revenueGrowth: "+320% نمو في حجوزات العيادة الشهرية عبر واتساب",
    topKeywordsRanked: ["أفضل عيادة أسنان في الرياض", "ابتسامة هوليوود شمال الرياض", "عيادة تجميل وليزر الملقا"],
    summary:
      "تطوير صفحات متخصصة لكل إجراء طبي وطبيب وفق معايير جوجل الطبية E-E-A-T وتطوير ملف خرائط قوقل للسيطرة على الـ Local 3-Pack في شمال ووسط الرياض.",
  },
  {
    id: "ryd-gsc-2",
    sector: "شركة تطوير عقاري ومقاولات وهناجر ومظلات",
    districtInRiyadh: "الرياض - السلي والملقا",
    platform: "Next.js 16 + Sanity CMS",
    projectTitle: "تصدر أكثر من 70 كلمة عقارية وإنشائية عالية القيمة في سوق الرياض",
    timeframe: "خلال 75 يوماً",
    clicksBefore: "740 نقرة/شهر",
    clicksAfter: "31,200 نقرة/شهر",
    impressionsAfter: "380,000+ ظهور لعملاء ومستثمرين بالرياض",
    revenueGrowth: "+440% زيادة في اتصالات وطلبات عروض الأسعار (RFQ)",
    topKeywordsRanked: ["مقاول هناجر ومستودعات الرياض", "تركيب ساندوتش بانل الرياض", "شركة تطوير عقاري شمال الرياض"],
    summary:
      "بناء صفحات خدمات ومشاريع فائقة السرعة (99/100 PageSpeed) مع معارض أعمال مضغوطة وتطبيق LocalBusiness & Service Schema مخصصة للرياض.",
  },
  {
    id: "ryd-gsc-3",
    sector: "متجر عود وبخور وعطور فاخرة",
    districtInRiyadh: "الرياض (توصيل فوري ولكافة المملكة)",
    platform: "متجر سلة (Salla)",
    projectTitle: "الوصول إلى 46,500+ نقرة شرائية شهرياً من قوقل وخفض ميزانية الإعلانات 60%",
    timeframe: "خلال 4 أشهر",
    clicksBefore: "1,400 نقرة/شهر",
    clicksAfter: "46,500 نقرة/شهر",
    impressionsAfter: "560,000+ ظهور تجاري في قوقل السعودية",
    revenueGrowth: "+375% نمو في المبيعات العضوية الصافية بالريال",
    topKeywordsRanked: ["أفضل متجر عود في الرياض", "بخور ملكي فاخر السعودية", "عطور نيش فخمة بالرياض"],
    summary:
      "إعادة هيكلة 22 قسماً و 210 منتجات على سلة، تفعيل Product Schema بالريال السعودي، وبناء عناقيد محتوى وروابط خلفية آمنة عالية السلطة.",
  },
];

const SEO_VS_ADS_COMPARISON_RIYADH: SeoVsAdsRow[] = [
  {
    criterion: "استمرارية العملاء والمبيعات في الرياض",
    uniqueSeo: "أصل رقمي مملوك لك يجلب عملاء ومبيعات مجانية 24/7 لسنوات متواصلة",
    paidAds: "تتوقف المبيعات والاتصالات فوراً في اللحظة التي يتوقف فيها شحن الميزانية",
    traditionalOrCheapSeo: "وعود شكلية بدون خطة تقنية أو ارتفاع مؤقت يعقبه عقاب من جوجل",
  },
  {
    criterion: "التكلفة والعائد المالي (ROI)",
    uniqueSeo: "لا تدفع مقابل كل نقرة؛ تكلفة العميل تنخفض شهرياً وعائدك الصافي يتضاعف",
    paidAds: "أعلى أسعار نقرات (CPC) في المملكة بسبب شراسة المزايدة في سوق الرياض",
    traditionalOrCheapSeo: "إهدار للمال في مقالات منسوخة وباك لينك سبام يضر بسمعة الدومين",
  },
  {
    criterion: "ثقة العميل وصانع القرار في العاصمة",
    uniqueSeo: "تصدر النتائج العضوية الأولى وخرائط قوقل يمنحك ثقة تفوق الإعلان بـ 4 أضعاف",
    paidAds: "نسبة كبيرة من الباحثين والشركات يتجاهلون الروابط المكتوب عليها (إعلان)",
    traditionalOrCheapSeo: "مواقع بطيئة وأخطاء أرشفة تنفّر العميل السعودي الاحترافي",
  },
  {
    criterion: "الهندسة التقنية والظهور في الذكاء الاصطناعي",
    uniqueSeo: "تطوير سرعة 99/100، إصلاح الـ Canonical، وتصدر إجابات ChatGPT و AI Overviews",
    paidAds: "لا يصلح أي عيب تقني في موقعك ولا يبني لك حضوراً في محركات الذكاء الاصطناعي",
    traditionalOrCheapSeo: "غياب تام للخبرة البرمجية في Next.js و WordPress وسلة وزد وتقنيات GEO",
  },
];

const RIYADH_6_SECTORS: RiyadhSectorItem[] = [
  {
    id: "rsec-clinics",
    sectorName: "العيادات الطبية، الأسنان، التجميل، والجلدية بالرياض",
    projectsCount: "+80 عيادة ومجمع",
    avgGrowth: "+320% حجوزات مواعيد",
    description: "تصدر بحث المرضى في الملقا، العليا، الياسمين، والتحلية عن إجراءات الأسنان، الليزر، والجلدية.",
    keySeoFocus: ["صفحات الأطباء والخدمات", "خرائط قوقل الرياض", "معايير E-E-A-T الطبية"],
    whatsappMsg: "مرحباً Unique، أرغب في خطة سيو لعيادة / مركز طبي في الرياض.",
  },
  {
    id: "rsec-realestate-contracting",
    sectorName: "العقارات، المقاولات، الهناجر، الساندوتش بانل، والمظلات",
    projectsCount: "+90 شركة ومطور",
    avgGrowth: "+440% اتصالات وعروض أسعار",
    description: "السيطرة على كلمات الشقق والفلل في شمال الرياض، وكلمات المقاولات والمستودعات بالصناعية والسلي.",
    keySeoFocus: ["صفحات أحياء الرياض", "معارض مشاريع سريعة", "كلمات B2B والمناقصات"],
    whatsappMsg: "مرحباً Unique، أرغب في خطة سيو لشركة عقارات / مقاولات في الرياض.",
  },
  {
    id: "rsec-ecommerce",
    sectorName: "المتاجر الإلكترونية في الرياض (سلة، زد، شوبيفاي)",
    projectsCount: "+120 متجر وبراند",
    avgGrowth: "+375% مبيعات عضوية",
    description: "مضاعفة الطلبات اليومية من قوقل للعطور، العود، العبايات، الأثاث، القهوة المختصة، والإلكترونيات.",
    keySeoFocus: ["Product Schema بالريال", "هيكلة التصنيفات", "معالجة تكرار الفلاتر"],
    whatsappMsg: "مرحباً Unique، أرغب في خطة سيو لمتجر إلكتروني في الرياض.",
  },
  {
    id: "rsec-factories-b2b",
    sectorName: "المصانع، التوريدات الصناعية، والشركات اللوجستية بالرياض",
    projectsCount: "+55 مصنع وشركة",
    avgGrowth: "+310% عقود B2B",
    description: "استقطاب مديري المشتريات والشركات الباحثين عن مصانع وموردين في المدينة الصناعية الثانية والثالثة.",
    keySeoFocus: ["كتالوجات فنية B2B", "نماذج RFQ سريعة", "سلطة دومين عالية"],
    whatsappMsg: "مرحباً Unique، أرغب في خطة سيو لمصنع / شركة توريدات B2B في الرياض.",
  },
  {
    id: "rsec-law-finance",
    sectorName: "مكاتب المحاماة، الاستشارات المالية، وتأسيس الشركات",
    projectsCount: "+50 مكتب وشركة",
    avgGrowth: "+285% استشارات وعقود",
    description: "بناء مرجعية قانونية واستشارية تتصدر بحث المستثمرين والشركات في العليا ومركز الملك عبدالله المالي KAFD.",
    keySeoFocus: ["محتوى قانوني ومالي موثوق", "عناقيد موضوعية", "استهداف المستثمرين"],
    whatsappMsg: "مرحباً Unique، أرغب في خطة سيو لمكتب محاماة / استشارات في الرياض.",
  },
  {
    id: "rsec-hospitality-events",
    sectorName: "المطاعم، الكافيهات، الفنادق، وتنظيم الفعاليات بالرياض",
    projectsCount: "+65 علامة وجهة",
    avgGrowth: "+340% حجوزات وزيارات",
    description: "تصدر خرائط قوقل وبحث الفعاليات والضيافة والسياحة في مواسم الرياض والدرعية وشمال الرياض.",
    keySeoFocus: ["خرائط قوقل للفروع", "سيو متعدد اللغات", "سرعة جوال 99/100"],
    whatsappMsg: "مرحباً Unique، أرغب في خطة سيو لمطعم / كافيه / شركة فعاليات في الرياض.",
  },
];

const UNIQUE_4_SEO_TABLES_RIYADH: SeoAuditTableGroup[] = [
  {
    id: "ryd-table-audit",
    tableTitle: "1. فحص وتدقيق الموقع الشامل (Riyadh SEO Audit)",
    tableBadge: "المرحلة التأسيسية",
    items: [
      "إجراء تدقيق هندسي شامل لأداء الموقع عبر Screaming Frog قبل بدء استراتيجية السيو بالرياض",
      "تحليل ظهور الموقع الحالي في نتائج بحث قوقل السعودية (SERP) وخرائط جوجل الرياض",
      "دراسة وتحليل أقوى 10 منافسين متصدرين في الرياض في نفس قطاعك التجاري أو الصناعي",
      "تحليل أداء الصفحات الحالية وتحديد فرص التحسين السريع (Quick Wins) لرفع الترتيب",
      "البحث عن الكلمات المفتاحية الرئيسية والفرعية والمحلية لأحياء الرياض (الملقا، العليا، السلي...)",
      "اكتشاف الصفحات والمحتوى المكرر وأخطاء الـ Canonical ومعالجة المشكلات المرتبطة بها جذرياً",
      "تحليل ملف الروابط الخلفية (Backlink Profile) واكتشاف الروابط الضارة والتنصل منها",
      "فحص مؤشرات Core Web Vitals على الجوال وتصفير أسباب بطء التحميل وحمولات الشبكة",
    ],
  },
  {
    id: "ryd-table-onpage-technical",
    tableTitle: "2. تحسين الموقع داخلياً وتقنياً (On-Page & Technical SEO)",
    tableBadge: "هندسة الصفحات والكود",
    items: [
      "مراجعة وإعادة هيكلة العناوين الرئيسية والترويسات الفرعية (H1, H2, H3) وفق نية البحث في الرياض",
      "كتابة وتحسين Meta Title و Meta Description بمحفزات نقر ترفع نسبة الـ CTR في قوقل",
      "ضغط الصور بصيغ WebP/AVIF الحديثة وإضافة النصوص البديلة الوصفية (Alt Text)",
      "تحسين وتطوير المحتوى البيعي لصفحات الخدمات وأقسام ومنتجات متاجر سلة وزد وشوبيفاي",
      "تحسين بنية عناوين الروابط الدائمة (Permalinks / URLs) ومعالجة أخطاء 404 والتحويلات 301",
      "إنشاء وتحديث ملف Robots.txt وخريطة الموقع الذكية (Dynamic XML Sitemap)",
      "تطوير استراتيجية الربط الداخلي العنقودية (Internal Linking Silos) لتمرير القوة لصفحات البيع",
      "ربط وتهيئة Google Search Console و GA4 وتفعيل البيانات المنظمة Schema.org JSON-LD",
    ],
  },
  {
    id: "ryd-table-offpage-local",
    tableTitle: "3. تحسين الظهور الخارجي والمحلي (Off-Page & Riyadh Local SEO)",
    tableBadge: "السلطة والخرائط",
    items: [
      "إنشاء وتوثيق وتحسين ملف النشاط التجاري على Google Business Profile لتصدر خرائط قوقل الرياض",
      "توحيد بيانات النشاط التجاري (الاسم، العنوان بالرياض، أرقام التواصل) في الأدلة التجارية السعودية",
      "نشر مقالات استضافية (Guest Posts) بروابط Dofollow طبيعية في مواقع وصحف سعودية وعربية موثوقة",
      "تحسين جودة وتنوع النصوص الرابطة (Anchor Text Profile) لضمان الأمان التام ضد تحديثات جوجل",
      "تهيئة المحتوى والكيانات الرقمية للظهور في إجابات الذكاء الاصطناعي (ChatGPT & Google AI Overviews)",
      "استراتيجية احترافية لزيادة التقييمات الإيجابية على خرائط جوجل في أحياء الرياض",
    ],
  },
  {
    id: "ryd-table-reporting",
    tableTitle: "4. التقارير الشفافة والمتابعة الشهرية المستمرة",
    tableBadge: "شفافية مطلقة بالأرقام",
    items: [
      "تقرير شهري مفصل لأداء الموقع في محركات البحث مستخرج مباشرة من Google Search Console",
      "تقرير تطور ترتيب وظهور الكلمات المفتاحية المستهدفة في الرياض والمملكة العربية السعودية",
      "تحليل نمو الزيارات العضوية، الاتصالات الهاتفية، نقرات الواتساب، ومبيعات المتجر الإلكتروني",
      "تقرير كامل بأعمال On-Page و Technical SEO والمحتوى المنشور والروابط المكتسبة خلال الشهر",
      "تحديد أهم فرص التوسع والخطوات الاستراتيجية المقترحة للشهر التالي لضمان استمرار الصدارة",
    ],
  },
];

const UNIQUE_PORTFOLIO_PROJECTS: { name: string; category: string }[] = [
  { name: "بوابة الرياض للدليل والخدمات", category: "دليل وخدمات محلية - الرياض" },
  { name: "مؤسسة المملكة للمقاولات والخدمات", category: "شركات ومؤسسات - السعودية" },
  { name: "البدر للعقارات والاستثمار", category: "عقارات وتطوير" },
  { name: "تعقيم للتنظيف والخدمات", category: "خدمات وصيانة" },
  { name: "ذا لايت هاوس (الغوص والسياحة)", category: "سياحة وحجوزات دولية (7 لغات)" },
  { name: "موقع رنين التجاري", category: "متجر إلكتروني متكامل" },
  { name: "لمسات للتصميم والوكالات", category: "تصميم وهوية رقمية" },
  { name: "منصة قرآني للتعليم", category: "منصة تعليمية" },
];

const NINETY_DAY_ROADMAP_RIYADH: NinetyDayPhase[] = [
  {
    phaseNum: "01",
    timeframe: "الأسبوع 1 - 2",
    title: "تحليل Search Console والإصلاح التقني الشامل",
    description:
      "نفحص موقعك بالكامل عبر Screaming Frog، نصلح أخطاء الأرشفة والـ Canonical، ونرفع سرعة الموقع على الجوال إلى 99/100.",
    tasks: ["فحص تقني شامل", "ضبط Canonical & Sitemap", "تحسين Core Web Vitals", "تركيب Schema الرياض"],
    milestoneOutput: "موقع سليم برمجياً 100% وجاهز للأرشفة الفورية في قوقل الرياض",
  },
  {
    phaseNum: "02",
    timeframe: "الأسبوع 2 - 3",
    title: "دراسة منافسي الرياض وخريطة الكلمات المفتاحية",
    description:
      "نحلل أقوى المنافسين في الرياض ونستخرج الكلمات الشرائية والخدمية و B2B الأعلى عائداً، ونوزعها بدقة على صفحات موقعك.",
    tasks: ["بحث كلمات الرياض وأحيائها", "تحليل فجوة المنافسين", "هيكلة شجرة الصفحات", "منع التنافس الداخلي"],
    milestoneOutput: "خطة كلمات مفتاحية وهيكلة صفحات معتمدة وموجهة نحو البيع",
  },
  {
    phaseNum: "03",
    timeframe: "الأسبوع 4 - 6",
    title: "إعادة بناء صفحات الخدمات والسيو الداخلي (On-Page & CTR)",
    description:
      "نطور عناوين الميتا لرفع نسبة النقر (CTR)، ونعيد صياغة صفحات الخدمات والمنتجات والربط الداخلي وأزرار التحويل للواتساب.",
    tasks: ["عناوين ترفع الـ CTR", "تطوير صفحات الخدمات", "بناء الربط الداخلي", "تحسين الصور WebP"],
    milestoneOutput: "ارتفاع واضح في مرات الظهور والترتيب الأولي للكلمات في الرياض",
  },
  {
    phaseNum: "04",
    timeframe: "الأسبوع 6 - 10",
    title: "السيو المحلي لخرائط الرياض وتصدر الذكاء الاصطناعي (AI SEO)",
    description:
      "نطور ملف Google Business Profile لتصدر خرائط الرياض، وننشر عناقيد محتوى متخصصة ونهيئ الظهور في ChatGPT و AI Overviews.",
    tasks: ["تصدر خرائط قوقل الرياض", "محتوى العناقيد الموضوعية", "تهيئة AI Search (GEO)", "إدارة التقييمات"],
    milestoneOutput: "دخول الكلمات الرئيسية للصفحة الأولى وتدفق الاتصالات والطلبات",
  },
  {
    phaseNum: "05",
    timeframe: "الأسبوع 8 - 12+",
    title: "بناء الروابط الموثوقة وتثبيت الصدارة (White-Hat Authority)",
    description:
      "نعزز سلطة موقعك بروابط خلفية آمنة (Dofollow Guest Posts) من مواقع سعودية وعربية موثوقة مع تقارير شهرية شفافة.",
    tasks: ["روابط Guest Posts قوية", "متابعة أسبوعية في GSC", "رفع معدل التحويل CRO", "تقارير أداء ومبيعات"],
    milestoneOutput: "استقرار في المراكز الثلاثة الأولى بجوجل الرياض ونمو متضاعف في الإيرادات",
  },
];

const RIYADH_SEO_PACKAGES_SAR: RiyadhSeoPackageSAR[] = [
  {
    id: "ryd-pkg-starter",
    packageName: "باقة الرياض المحلية والانطلاق (Riyadh Local & Starter SEO)",
    badgeText: "مثالية للعيادات، المكاتب، والشركات الخدمية في الرياض",
    priceSAR: "1,850",
    billingCycle: "ريال سعودي / شهرياً (بدون عقود إلزامية طويلة)",
    idealFor: "الشركات الخدمية، العيادات، مكاتب المحاماة، والمطاعم المستهدفة لمدينة الرياض",
    isPopular: false,
    keywordsCount: "استهداف حتى 20 كلمة مفتاحية محلية وشرائية في الرياض",
    includedServices: [
      "فحص وإصلاح كامل لأخطاء السيو التقني والأرشفة في Google Search Console",
      "تحسين سرعة الموقع ومؤشرات Core Web Vitals على الجوال",
      "تحسين السيو الداخلي (On-Page SEO) لعدد 10 صفحات رئيسية وخدمية",
      "إعداد وتطوير ملف خرائط قوقل (Google Business Profile) لتصدر البحث المحلي في الرياض",
      "كتابة 6 مقالات أو صفحات هبوط محلية شهرياً متوافقة مع نية البحث في الرياض",
      "بناء روابط خلفية آمنة وعالية الجودة (White-Hat Backlinks) لرفع سلطة الموقع",
    ],
    technicalAndContentFeatures: [
      "ضبط كامل للـ Meta Titles, Descriptions, Dynamic Canonicals & Riyadh Local Schema",
      "بناء خطة الربط الداخلي وتحسين الصور بصيغ WebP السريعة",
    ],
    reportingAndSupport: "تقرير أداء شهري مفصل من Google Search Console + دعم مباشر عبر واتساب",
    whatsappMsg: "مرحباً شركة Unique، أرغب في الاشتراك في (باقة الرياض المحلية والانطلاق للسيو - 1,850 ر.س).",
  },
  {
    id: "ryd-pkg-pro",
    packageName: "باقة السيطرة في الرياض والمتاجر (Riyadh Pro & E-Commerce SEO)",
    badgeText: "الأكثر طلباً للشركات التنافسية والمصانع ومتاجر سلة وزد وشوبيفاي بالرياض",
    priceSAR: "3,200",
    billingCycle: "ريال سعودي / شهرياً (خطة شاملة لتصدر الرياض والمملكة)",
    idealFor: "المتاجر الإلكترونية (سلة، زد، شوبيفاي)، شركات المقاولات والعقارات والمصانع، والمجمعات الطبية بالرياض",
    isPopular: true,
    keywordsCount: "استهداف حتى 45 كلمة مفتاحية تنافسية وشرائية في الرياض والسعودية",
    includedServices: [
      "كل مزايا باقة الانطلاق + فحص هندسي متعمق عبر Screaming Frog وإصلاح كافة الثغرات البرمجية",
      "تهيئة شاملة لسيو المتاجر والمواقع (الأقسام، الفلاتر، Product Schema، وتحسين 30+ صفحة/منتج شهرياً)",
      "خطة بناء سلطة موضوعية مع كتابة 12 مقالاً أو صفحة بيعية متخصصة شهرياً",
      "استهداف شامل لمحاور الرياض (شمال الرياض، العليا، الدرعية، الصناعية) وتصدر الخرائط (Local 3-Pack)",
      "حملة بناء باك لينك وجيست بوست قوية وآمنة 100% من مواقع سعودية وعربية موثوقة",
      "تهيئة الموقع للظهور في إجابات الذكاء الاصطناعي (Google AI Overviews & ChatGPT Search)",
    ],
    technicalAndContentFeatures: [
      "تحسين معدل التحويل (CRO) ومسارات الشراء والتواصل عبر واتساب لمضاعفة المبيعات",
      "تحليل شهري لتحركات المنافسين في الرياض واقتناص الفرص البحثية الجديدة",
    ],
    reportingAndSupport: "تقارير أداء نصف شهرية وشهرية موثقة من GSC & GA4 + مدير مشروع مخصص على واتساب",
    whatsappMsg: "مرحباً شركة Unique، أرغب في الاشتراك في (باقة السيطرة في الرياض والمتاجر للسيو - 3,200 ر.س).",
  },
  {
    id: "ryd-pkg-enterprise",
    packageName: "باقة الهيمنة والمؤسسات الكبرى (Enterprise & National KSA)",
    badgeText: "للمتاجر الضخمة، المطورين العقاريين، المصانع، والشركات متعددة الفروع",
    priceSAR: "5,500",
    billingCycle: "ريال سعودي / شهرياً (حلول مخصصة للعلامات الرائدة)",
    idealFor: "المتاجر الكبرى، شركات التطوير العقاري والصناعي، والمؤسسات التي تستهدف الرياض وكافة مناطق المملكة",
    isPopular: false,
    keywordsCount: "استهداف مفتوح (80+ كلمة مفتاحية وعناقيد بحثية كاملة)",
    includedServices: [
      "إدارة سيو تقني وهندسي مستمر للمنصات الكبيرة (Next.js, WordPress, Shopify Plus, Salla/Zid)",
      "تحسين شامل ومستمر لمئات المنتجات والتصنيفات وصفحات الفروع والمدن في الرياض والمملكة",
      "إنتاج 20+ قطعة محتوى بيعي وموسوعي شهرياً باللغتين العربية والإنجليزية",
      "حملة علاقات عامة رقمية (Digital PR) وبناء روابط مرجعية عالية السلطة",
      "تطوير برمجي مستمر لسرعة الموقع، البنية التحتية، ومعدلات التحويل البيعية (CRO)",
      "تهيئة السيو الدولي ومتعدد اللغات للشركات المستهدفة للسعودية والخليج والمستثمرين الأجانب",
    ],
    technicalAndContentFeatures: [
      "أولوية قصوى في التنفيذ والتطوير البرمجي مع فريق هندسي وتسويقي متكامل",
      "لوحة تحكم وتقارير لحظية لمتابعة نمو الزيارات، الترتيب، والعائد على الاستثمار (ROI)",
    ],
    reportingAndSupport: "اجتماعات وتقارير أسبوعية مباشرة + دعم فني واستشاري VIP على مدار الساعة",
    whatsappMsg: "مرحباً شركة Unique، أرغب في الاستفسار عن (باقة الهيمنة والمؤسسات الكبرى للسيو في الرياض - 5,500 ر.س).",
  },
];

const RIYADH_CHATGPT_QUESTIONS: ChatGptClientQuestion[] = [
  {
    tag: "الظهور في ChatGPT و AI Overviews بالرياض",
    q: "كيف تضمنون ظهور شركتي أو متجري بالرياض في إجابات ChatGPT وملخصات جوجل بالذكاء الاصطناعي؟",
    a: "تعتمد محركات الذكاء الاصطناعي التوليدي (ChatGPT Search و Google AI Overviews) على استخلاص توصياتها من المواقع التي تمتلك سلطة موضوعية حقيقية، وإجابات مباشرة واضحة، وبيانات منظمة (Schema.org JSON-LD)، وسمعة رقمية موثقة. نحن في Unique نطبق هندسة GEO & AEO ليقرأ الذكاء الاصطناعي تخصص شركتك في الرياض ويرشحك للعميل مباشرة.",
  },
  {
    tag: "شدة المنافسة في العاصمة الرياض",
    q: "المنافسة في الرياض شرسة جداً؛ كيف تتفوقون على الشركات والمواقع القديمة المتصدرة؟",
    a: "أغلب المواقع القديمة المتصدرة في الرياض تعاني من بطء شديد على الجوال، ومحتوى تقليدي متقادم، وغياب تام لتهيئة AI Search أو تقسيم أحياء الرياض. نحن نستغل هذه الثغرات عبر الجمع بين سرعة برمجية فائقة (99/100)، محتوى بيعي أعمق وأحدث، وسيو محلي دقيق لأحياء الرياض مع روابط White-Hat عالية الجودة.",
  },
  {
    tag: "الميزة الهندسية لوكالة Unique",
    q: "ما الذي يميز وكالة Unique عن باقي شركات ومؤسسات السيو في الرياض؟",
    a: "نحن لا نرسل لك مجرد ملف PDF بملاحظات تقنية ونتركك تبحث عن مبرمج لتنفيذها؛ بل نمتلك فريق تطوير برمجيات متكامل (Next.js, WordPress, Shopify, Salla, Zid) ينفذ كافة التعديلات التقنية والسرعة والـ Schema بأيديه، ويربط كل ذلك بتقارير شفافة 100% من Google Search Console.",
  },
  {
    tag: "سيو الشركات والمصانع B2B في الرياض",
    q: "هل السيو فعال للمصانع وشركات المقاولات وقطاع الأعمال B2B في الرياض؟",
    a: "بكل تأكيد! بل يُعد السيو القناة رقم #1 لجلب عقود الشركات والمناقصات في الرياض؛ لأن مديري المشتريات والمهندسين يبحثون مباشرة في جوجل عن الموردين والمصانع والمقاولين المعتمدين، وظهورك في النتيجة الأولى يختصر أشهر من التسويق الميداني التقليدي.",
  },
];

const RIYADH_SEO_FAQS: RiyadhSeoFaq[] = [
  {
    id: "rfaq-1",
    category: "الأسعار والتكلفة",
    question: "كم تكلفة وأسعار خدمات السيو في الرياض؟",
    answer:
      "تبدأ باقات السيو الشهرية في الرياض لدى وكالة Unique من 1,850 ريال سعودي شهرياً لباقة الانطلاق والسيو المحلي، و3,200 ريال سعودي شهرياً لباقة السيطرة والمتاجر الإلكترونية (سلة، زد، شوبيفاي) والشركات التنافسية، و5,500 ريال لباقة المؤسسات والمنصات الكبرى. أسعارنا شفافة وشاملة للتنفيذ التقني والمحتوى والروابط والتقارير بدون أي رسوم خفية.",
  },
  {
    id: "rfaq-2",
    category: "المدة الزمنية للنتائج",
    question: "متى تبدأ نتائج السيو في الظهور لموقعي في الرياض؟",
    answer:
      "تبدأ نتائج الإصلاح التقني، سرعة الأرشفة، وارتفاع مرات الظهور في Google Search Console خلال أول 2 إلى 4 أسابيع. أما الوصول للصفحة الأولى والمراكز المتقدمة في الكلمات التنافسية بالرياض وتحقيق قفزة واضحة في الاتصالات والمبيعات فيتم ضمن خطة الـ 60 إلى 90 يوماً الأولى.",
  },
  {
    id: "rfaq-3",
    category: "المتاجر الإلكترونية",
    question: "هل تقدمون خدمة سيو متخصصة لمتاجر سلة وزد وشوبيفاي في الرياض؟",
    answer:
      "نعم، نحن متخصصون بعمق في سيو المتاجر السعودية على سلة (Salla) وزد (Zid) وشوبيفاي (Shopify) وووكومرس. نعيد هيكلة الأقسام والمنتجات، نفعل Product Schema بالريال السعودي، ونبني مدونة شرائية تجلب لك طلبات يومية مجانية من الرياض وكافة مناطق المملكة.",
  },
  {
    id: "rfaq-4",
    category: "خرائط قوقل بالرياض",
    question: "هل يمكنكم رفع ترتيب شركتي أو عيادتي في خرائط قوقل الرياض (Google Maps)؟",
    answer:
      "بكل تأكيد! نقوم بتحسين وتوثيق ملف نشاطك التجاري على Google Business Profile، وتوحيد بياناتك المحلية (NAP)، وبناء صفحات مستهدفة لأحياء الرياض (مثل الملقا، العليا، الياسمين، السلي...) لتتصدر المراكز الثلاثة الأولى في خرائط قوقل.",
  },
  {
    id: "rfaq-5",
    category: "الفحص المجاني والبدء",
    question: "ما المطلوب للبدء والحصول على فحص سيو مجاني لموقعي في الرياض؟",
    answer:
      "فقط اضغط على أي زر واتساب في هذه الصفحة للتواصل المباشر معنا على الرقم 01270506511 وأرسل رابط موقعك أو متجرك، وسنرسل لك خلال 24 ساعة تقرير فحص مجاني يكشف الأخطاء التقنية، فرص الكلمات المفتاحية في الرياض، وخطة العمل المقترحة للتصدر.",
  },
];

const RIYADH_SEMANTIC_KEYWORDS: string[] = [
  "شركة سيو في الرياض",
  "أفضل شركة سيو في الرياض",
  "خبير سيو بالرياض",
  "شركة تحسين محركات البحث بالرياض",
  "سيو المتاجر الإلكترونية في الرياض",
  "سيو متاجر سلة الرياض",
  "سيو متاجر زد الرياض",
  "سيو شوبيفاي الرياض",
  "تصدر خرائط قوقل الرياض",
  "السيو المحلي في شمال الرياض والعليا",
  "شركة سيو للشركات والمصانع بالرياض",
  "تحسين الظهور في نتائج الذكاء الاصطناعي AI SEO",
  "أسعار السيو في الرياض",
  "تصدر نتائج بحث قوقل السعودية",
  "بناء باك لينك وجيست بوست سعودي",
  "السيو التقني Technical SEO الرياض",
];

// ============================================================================
// 5. JSON-LD STRUCTURED DATA SCHEMAS FOR RIYADH, SAUDI ARABIA (AR-SA)
// ============================================================================
const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.uniquee-ws.com/riyadh-seo#agency",
    name: "Unique Digital Agency - شركة سيو في الرياض",
    alternateName: "يونيك أفضل شركة تحسين محركات البحث SEO في الرياض",
    url: "https://www.uniquee-ws.com/riyadh-seo",
    telephone: "+201270506511",
    description:
      "أفضل شركة سيو في الرياض متخصصة في تحسين محركات البحث SEO وتصدر قوقل ونتائج الذكاء الاصطناعي AI Search للشركات، المصانع، العيادات، العقارات، ومتاجر سلة وزد وشوبيفاي في الرياض.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.7136,
      longitude: 46.6753,
    },
    areaServed: [
      { "@type": "City", name: "Riyadh" },
      { "@type": "City", name: "Diriyah" },
      { "@type": "AdministrativeArea", name: "Riyadh Province" },
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
    serviceType: "خدمات تحسين محركات البحث SEO في الرياض",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://www.uniquee-ws.com",
      telephone: "+201270506511",
    },
    areaServed: {
      "@type": "City",
      name: "Riyadh",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "باقات السيو وتحسين محركات البحث في الرياض (SAR)",
      itemListElement: RIYADH_SEO_PACKAGES_SAR.map((pkg) => ({
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
    mainEntity: RIYADH_SEO_FAQS.map((faq) => ({
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
        item: "https://www.uniquee-ws.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "شركة سيو في السعودية",
        item: "https://www.uniquee-ws.com/saudi-seo",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "شركة سيو في الرياض",
        item: "https://www.uniquee-ws.com/riyadh-seo",
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
        className={`inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold tracking-wide text-cyan-300 shadow-[0_0_25px_rgba(59,130,246,0.15)] ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <Sparkles className="h-3.5 w-3.5 text-amber-400" />
        <span>{badge}</span>
      </div>
      <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}{" "}
        {highlightedWord && (
          <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
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
// 7. MAIN PAGE COMPONENT (RIYADH SEO COMPANY LANDING PAGE)
// ============================================================================
export default function RiyadhSeoPage() {
  const mainWhatsAppLink = getWhatsAppUrl(
    "مرحباً شركة Unique، أرغب في الحصول على استشارة وفحص سيو مجاني لموقعي / متجري في الرياض."
  );

  return (
    <main
      dir="rtl"
      lang="ar"
      className="relative min-h-screen bg-[#000000] text-white selection:bg-blue-600 selection:text-white overflow-x-hidden"
    >
      {/* Structured Data JSON-LD for Google.com.sa (Riyadh Geo-Targeted) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />

      {/* Ambient Background Glow Effects (Blue, Cyan, Emerald, Gold - Strictly No Red) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-48 -right-48 h-[520px] w-[520px] rounded-full bg-blue-600/12 blur-[150px]" />
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
        <span className="hidden sm:inline">فحص سيو الرياض مجاناً:</span>
        <span dir="ltr" className="font-mono text-sm">
          {WHATSAPP_NUMBER_DISPLAY}
        </span>
      </a>

      {/* =====================================================================
          SECTION 1: TOP STICKY NAVIGATION BAR
      ===================================================================== */}
      <nav
        aria-label="التنقل السريع داخل صفحة شركة سيو في الرياض"
        className="sticky top-0 z-40 border-b border-white/10 bg-[#000000]/85 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 font-black text-white shadow-lg shadow-blue-600/25">
              U
            </span>
            <div>
              <p className="text-xs font-bold text-cyan-400">UNIQUE SEO AGENCY RIYADH</p>
              <p className="text-[11px] text-slate-400">
                أفضل شركة سيو في الرياض (الملقا • العليا • KAFD • الصناعية)
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-5 text-xs font-bold text-slate-300 lg:flex">
            <a href="#riyadh-seo-services" className="transition-colors hover:text-cyan-400">
              خدمات السيو بالرياض
            </a>
            <a href="#riyadh-districts" className="transition-colors hover:text-cyan-400">
              أحياء ومحاور الرياض
            </a>
            <a href="#riyadh-ecommerce-seo" className="transition-colors hover:text-cyan-400">
              سيو متاجر سلة وزد
            </a>
            <a href="#riyadh-gsc-results" className="transition-colors hover:text-emerald-400">
              نتائج Search Console
            </a>
            <a href="#riyadh-audit-tables" className="transition-colors hover:text-cyan-400">
              جداول الفحص والمهام
            </a>
            <a href="#riyadh-pricing" className="transition-colors hover:text-amber-400">
              الباقات بالريال (SAR)
            </a>
            <a href="#riyadh-faq" className="transition-colors hover:text-cyan-400">
              الأسئلة الشائعة
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={mainWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-l from-blue-600 to-cyan-500 px-4 py-2 text-xs font-black text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02]"
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
          SECTION 2: CREATIVE RIYADH HERO SECTION WITH GSC & LOCAL MAP PACK SIMULATOR
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
              شركة سيو في الرياض
            </span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Right Column: Primary Commercial Riyadh SEO Pitch */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300">
                <Award className="h-4 w-4 text-amber-400" />
                <span>
                  الشريك الهندسي والتسويقي الأول لتصدر قوقل وخرائط جوجل في العاصمة الرياض
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-black leading-[1.22] tracking-tight text-white sm:text-5xl lg:text-6xl">
                شركة سيو في الرياض{" "}
                <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
                  تضعك في النتيجة #1 وتضاعف عملاءك ومبيعاتك
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
                في العاصمة الرياض — القلب الاقتصادي والتجاري لمشاريع رؤية 2030 —
                تصل تكلفة النقرة الإعلانية إلى مستويات قياسية. في وكالة{" "}
                <strong className="font-bold text-white">UNIQUE Digital Agency</strong>،
                نضع موقعك أو متجرك في{" "}
                <strong className="text-emerald-300">
                  المركز رقم #1 على قوقل وخرائط جوجل ونتائج الذكاء الاصطناعي AI Search
                </strong>{" "}
                لجذب عملاء وعقود مجانية مستمرة 24/7 في الملقا، العليا، الياسمين،
                KAFD، والمدينة الصناعية عبر{" "}
                <strong className="text-cyan-300">
                  السيو التقني (99/100)، سيو متاجر سلة وزد وشوبيفاي، وسيو الشركات والمصانع B2B
                </strong>
                .
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
                    تصدر خرائط قوقل (Local 3-Pack) في أحياء الرياض
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-sm font-medium text-slate-200">
                    سيو متاجر سلة وزد وشوبيفاي + سيو المصانع والشركات B2B
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-400" />
                  <span className="text-sm font-medium text-slate-200">
                    تهيئة متقدمة للظهور في إجابات ChatGPT و Google AI Overviews
                  </span>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={mainWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-l from-blue-600 via-blue-500 to-cyan-500 px-8 py-4 text-base font-black text-white shadow-[0_0_35px_rgba(37,99,235,0.4)] transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>اطلب فحص سيو مجاني لموقعك في الرياض</span>
                  <ArrowUpLeft className="h-5 w-5" />
                </a>
                <a
                  href="#riyadh-gsc-results"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-slate-200 backdrop-blur-md transition-all hover:border-cyan-400/50 hover:bg-white/10 hover:text-white"
                >
                  <TrendingUp className="h-5 w-5 text-cyan-400" />
                  <span>شاهد نتائج عملائنا بالرياض</span>
                </a>
              </div>
            </div>

            {/* Left Column: Creative Live Riyadh GSC & Google Maps Local Pack Simulator */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-blue-500/35 bg-gradient-to-b from-[#0b1329]/95 to-[#040811]/95 p-6 shadow-[0_0_65px_rgba(37,99,235,0.22)] backdrop-blur-2xl sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-cyan-400" />
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1 text-[11px] font-mono text-cyan-300 border border-blue-500/25">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Riyadh SEO & Local Pack Telemetry</span>
                  </div>
                </div>

                {/* 4 GSC Metric Boxes */}
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-2xl border border-blue-500/30 bg-blue-600/15 p-3">
                    <p className="text-[10px] text-blue-200">نقرات الرياض</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      46.5K
                    </p>
                    <span className="text-[10px] font-bold text-emerald-400">
                      +375% نمو
                    </span>
                  </div>
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-600/15 p-3">
                    <p className="text-[10px] text-emerald-200">مرات الظهور</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      560K
                    </p>
                    <span className="text-[10px] font-bold text-emerald-400">
                      +430% نمو
                    </span>
                  </div>
                  <div className="rounded-2xl border border-cyan-500/30 bg-cyan-600/15 p-3">
                    <p className="text-[10px] text-cyan-200">نسبة النقر CTR</p>
                    <p className="mt-1 font-mono text-lg font-black text-white">
                      9.2%
                    </p>
                    <span className="text-[10px] font-bold text-cyan-300">
                      Rich Schema
                    </span>
                  </div>
                  <div className="rounded-2xl border border-amber-500/30 bg-amber-500/15 p-3">
                    <p className="text-[10px] text-amber-200">ترتيب الرياض</p>
                    <p className="mt-1 font-mono text-lg font-black text-amber-300">
                      #1.0
                    </p>
                    <span className="text-[10px] font-bold text-amber-300">
                      المركز الأول
                    </span>
                  </div>
                </div>

                {/* Simulated Google Maps Riyadh Local 3-Pack */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/60 p-4">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-cyan-300">
                      📍 نتائج خرائط قوقل الرياض (Google Maps Local Pack)
                    </span>
                    <span className="rounded bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                      المركز #1 بالرياض
                    </span>
                  </div>

                  <div className="rounded-xl border border-emerald-500/30 bg-[#071520] p-3.5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-black text-white">
                        1. علامتك التجارية — الرياض (الملقا / طريق الملك فهد)
                      </p>
                      <span className="text-[11px] font-bold text-amber-400">
                        ★★★★★ 4.9 (490)
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-slate-300">
                      مفتوح الآن • يخدم كافة أحياء الرياض والمملكة • اتصال مباشر وواتساب
                    </p>
                  </div>

                  <div className="mt-2 rounded-xl border border-white/5 bg-white/[0.02] p-2.5 opacity-60">
                    <p className="text-[11px] text-slate-400">
                      2. منافس محلي تقليدي في الرياض — ★★★★☆ 4.0
                    </p>
                  </div>
                </div>

                {/* Direct Audit Strip */}
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-blue-500/30 bg-blue-950/30 px-4 py-3">
                  <div>
                    <p className="text-[11px] text-slate-300">
                      احصل على تحليل شامل لموقعك ومنافسيك في الرياض
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
          SECTION 3: RIYADH SEO VS PAID ADS COMPARISON TABLE
      ===================================================================== */}
      <section className="relative z-10 border-b border-white/10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="استثمار ذكي يضعك في صدارة السوق الاقتصادي بالعاصمة"
            title="لماذا تُعد الاستعانة بشركة سيو في الرياض"
            highlightedWord="الاستثمار الأعلى عائداً مقارنة بالإعلانات الممولة؟"
            subtitle="المنافسة في الرياض شرسة وأسعار الإعلانات في ارتفاع مستمر. قارن بين بناء أصولك الرقمية بالسيو الاحترافي مع Unique وبين الاعتماد الكلي على الإعلانات المدفوعة أو السيو العشوائي."
          />

          <div className="overflow-hidden rounded-3xl border border-white/15 bg-[#050a15] shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-right text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/15 bg-[#0a1328]">
                    <th className="p-5 font-black text-white w-[25%]">
                      وجه المقارنة في سوق الرياض
                    </th>
                    <th className="p-5 font-black text-emerald-300 bg-emerald-600/15 border-x border-emerald-500/30 w-[30%]">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-amber-400" />
                        <span>السيو الاحترافي مع وكالة Unique بالرياض</span>
                      </div>
                    </th>
                    <th className="p-5 font-bold text-slate-300 w-[23%]">
                      الإعلانات المدفوعة فقط (Google / Snap / TikTok Ads)
                    </th>
                    <th className="p-5 font-bold text-slate-400 w-[22%]">
                      التسويق التقليدي أو السيو العشوائي الرخيص
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {SEO_VS_ADS_COMPARISON_RIYADH.map((row) => (
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
          SECTION 4: 6 CORE SEO SERVICES IN RIYADH
      ===================================================================== */}
      <section
        id="riyadh-seo-services"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="خدمات تحسين محركات البحث المتكاملة في العاصمة الرياض"
            title="ماذا تقدم لك وكالة Unique كأفضل"
            highlightedWord="شركة سيو في الرياض؟"
            subtitle="نغطي كافة أركان السيو الستة تحت سقف واحد: من الهندسة التقنية وسرعة الكود إلى تصدر خرائط قوقل الرياض، سيو متاجر سلة وزد وشوبيفاي، سيو المصانع و B2B، وتصدر الذكاء الاصطناعي AI Search."
          />

          <div className="space-y-10">
            {CORE_SEO_SERVICES_RIYADH.map((srv) => (
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
                    className="inline-flex items-center gap-2 self-start rounded-2xl bg-gradient-to-l from-blue-600 to-cyan-500 px-6 py-3.5 text-xs font-black text-white shadow-lg transition-transform hover:scale-[1.02] lg:self-auto"
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
                      المهام التنفيذية الدقيقة التي نقوم بها لموقعك في الرياض:
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
                        الأثر المباشر على أعمالك في الرياض:
                      </p>
                      <p className="text-xs leading-relaxed text-slate-300">
                        {srv.businessImpactInRiyadh}
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
          SECTION 5: RIYADH COMMERCIAL CORRIDORS & DISTRICTS LOCAL SEO
      ===================================================================== */}
      <section
        id="riyadh-districts"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="تغطية جغرافية دقيقة لأهم الأحياء والمحاور الاقتصادية في الرياض"
            title="خدمات السيو المحلي وتصدر خرائط قوقل في"
            highlightedWord="شمال الرياض، العليا، KAFD، الدرعية، والصناعية"
            subtitle="لا نكتفي باستهداف اسم الرياض بشكل عام؛ بل نبني لك حضوراً محلياً يتصدر عمليات البحث الجغرافي في أهم المحاور التجارية والسكنية والصناعية بالعاصمة."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {RIYADH_DISTRICTS_ZONES.map((dist) => (
              <div
                key={dist.id}
                className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#091326] to-[#040812] p-7 sm:p-8"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-cyan-400 border border-blue-500/30">
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
                      className="rounded bg-blue-500/10 px-2.5 py-1 text-[11px] text-cyan-200 border border-blue-500/20"
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
          SECTION 6: RIYADH E-COMMERCE SEO (SALLA, ZID, SHOPIFY)
      ===================================================================== */}
      <section
        id="riyadh-ecommerce-seo"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="مضاعفة مبيعات المتاجر الإلكترونية في الرياض بدون إعلانات"
            title="خدمات سيو المتاجر الإلكترونية في الرياض:"
            highlightedWord="سلة (Salla)، زد (Zid)، وشوبيفاي (Shopify)"
            subtitle="نحول متجرك الإلكتروني في الرياض إلى ماكينة طلبات عضوية يومية تتصدر نتائج قوقل في العاصمة وكافة مناطق المملكة."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {ECOMMERCE_SEO_PLATFORMS_RIYADH.map((plat) => (
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
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-blue-600 to-cyan-500 py-3.5 text-xs font-black text-white transition-transform hover:scale-[1.01]"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>اطلب خطة سيو لمتجرك في الرياض</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: DOCUMENTED GSC RESULTS IN RIYADH + 6 SECTORS
      ===================================================================== */}
      <section
        id="riyadh-gsc-results"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="أرقام موثقة من حسابات Google Search Console لعملائنا"
            title="قصص نجاح ونتائج حقيقية لشركات ومتاجر"
            highlightedWord="في العاصمة الرياض"
            subtitle="شاهد كيف تضاعفت الزيارات والاتصالات والمبيعات العضوية لشركائنا في الرياض خلال 60 إلى 90 يوماً."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {GSC_DOCUMENTED_RESULTS_RIYADH.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#071928] to-[#030710] p-7 shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="rounded-lg bg-cyan-500/15 px-3 py-1 font-bold text-cyan-300">
                      {item.sector}
                    </span>
                    <span className="font-mono text-slate-400">
                      {item.districtInRiyadh}
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
                      أبرز الكلمات المتصدرة في الرياض:
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

          {/* 6 Riyadh Economic Sectors Grid */}
          <div className="mt-20">
            <h3 className="text-center text-2xl font-black text-white sm:text-3xl mb-10">
              القطاعات الاقتصادية الأعلى نمواً التي نخدمها في الرياض
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {RIYADH_6_SECTORS.map((sec) => (
                <div
                  key={sec.id}
                  className="flex flex-col justify-between rounded-3xl border border-white/12 bg-[#071020] p-6 transition-all hover:border-cyan-400/50"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="rounded-lg bg-blue-500/15 px-3 py-1 font-bold text-cyan-300">
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
                    <span>اطلب خطة سيو لهذا القطاع بالرياض</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: UNIQUE'S 4 COMPREHENSIVE SEO CHECKLIST TABLES + LIVE TERMINAL
      ===================================================================== */}
      <section
        id="riyadh-audit-tables"
        className="relative z-10 border-b border-white/10 bg-[#040812] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="قائمة المهام الهندسية والتسويقية الشاملة في عقدك"
            title="جدول مهام خدمات تحسين محركات البحث (SEO)"
            highlightedWord="التي ننفذها لموقعك في الرياض"
            subtitle="شفافية مطلقة في كل خطوة؛ إليك قائمة الفحوصات والتحسينات الداخلية والخارجية والتقارير التي ينفذها فريق Unique Digital Agency لضمان تصدرك في قوقل الرياض."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {UNIQUE_4_SEO_TABLES_RIYADH.map((group) => (
              <div
                key={group.id}
                className="overflow-hidden rounded-3xl border border-white/15 bg-[#070d1b] shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-white/10 bg-[#0b152b] px-6 py-4">
                  <h3 className="text-base font-black text-white sm:text-lg">
                    {group.tableTitle}
                  </h3>
                  <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-[11px] font-bold text-cyan-300 border border-cyan-500/30">
                    {group.tableBadge}
                  </span>
                </div>

                <div className="divide-y divide-white/10">
                  {group.items.map((itemText, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-4 px-6 py-3.5 text-xs text-slate-200 transition-colors hover:bg-white/[0.02]"
                    >
                      <span>{itemText}</span>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-bold text-emerald-400">
                        ✓
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Live SEO Engineering Terminal & Portfolio Showcase */}
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6 rounded-3xl border border-cyan-500/30 bg-black/80 p-6 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-bold text-cyan-400">
                  Live SEO Tools / Next.js & WordPress Sync
                </span>
                <span className="rounded bg-emerald-500/15 px-2.5 py-0.5 text-[10px] text-emerald-300">
                  ONLINE • uniquee-ws.com
                </span>
              </div>
              <div dir="ltr" className="mt-4 space-y-2 text-left text-[11px]">
                <p className="text-emerald-400">
                  [SUCCESS] Google Search Console API verified for Riyadh property.
                </p>
                <p className="text-cyan-300">
                  [API] Screaming Frog crawler connected: 0 Broken Links, 100% Indexable.
                </p>
                <p className="text-slate-300">
                  [INFO] Checking Dynamic Canonical URLs... 100% self-referencing matched.
                </p>
                <p className="text-emerald-400">
                  [PERF] Core Web Vitals passed: LCP 0.7s | CLS 0.00 | Mobile Score 99/100.
                </p>
                <p className="text-amber-300">
                  [SCHEMA] LocalBusiness (Riyadh 24.7136, 46.6753) & Product SAR JSON-LD active.
                </p>
                <p className="text-cyan-300">
                  [AI-SEO] Generative Engine Optimization (GEO) entities synced for ChatGPT.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-3xl border border-white/15 bg-[#070f20] p-6">
              <h3 className="text-lg font-black text-white">
                من سجل إنجازات ومشاريع وكالة Unique الرقمية
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                نماذج من المشاريع والمنصات التي طورناها وحققنا لها أعلى عائد بحثي ورقمي:
              </p>
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {UNIQUE_PORTFOLIO_PROJECTS.map((proj) => (
                  <div
                    key={proj.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-black/50 px-3.5 py-2.5 text-xs"
                  >
                    <span className="font-bold text-white">{proj.name}</span>
                    <span className="text-[10px] text-cyan-300">{proj.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: 90-DAY ROADMAP FOR RIYADH BUSINESSES
      ===================================================================== */}
      <section className="relative z-10 border-b border-white/10 bg-[#03060e] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="خطة 90 يوماً واضحة وموثقة خطوة بخطوة"
            title="كيف نضع موقعك في صدارة نتائج بحث الرياض"
            highlightedWord="خلال 90 يوماً؟"
            subtitle="منهجية عملية تبدأ بإصلاح البنية التقنية في الأسبوع الأول وتنتهي بالسيطرة على الكلمات الشرائية وخرائط قوقل الرياض."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {NINETY_DAY_ROADMAP_RIYADH.map((phase) => (
              <div
                key={phase.phaseNum}
                className="flex flex-col justify-between rounded-3xl border border-white/12 bg-[#070f20] p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-mono text-sm font-black text-white">
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
          SECTION 10: TRANSPARENT RIYADH SEO PACKAGES IN SAR
      ===================================================================== */}
      <section
        id="riyadh-pricing"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="باقات شفافة بالريال السعودي وعائد مضاعف"
            title="باقات وأسعار شركة سيو في الرياض"
            highlightedWord="بالريال السعودي (SAR)"
            subtitle="اختر الباقة المناسبة لشركتك أو مصنعك أو متجرك الإلكتروني في الرياض وابدأ رحلة التصدر معنا اليوم."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {RIYADH_SEO_PACKAGES_SAR.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all ${
                  pkg.isPopular
                    ? "border-2 border-cyan-400 bg-gradient-to-b from-[#0b1936] to-[#040914] shadow-[0_0_55px_rgba(6,182,212,0.22)] lg:-translate-y-3"
                    : "border border-white/15 bg-[#060c1a]"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 right-8 rounded-full bg-gradient-to-l from-amber-400 to-yellow-500 px-4 py-1 text-xs font-black text-black shadow-lg">
                    الأكثر طلباً للشركات والمتاجر في الرياض
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
                      ? "bg-gradient-to-l from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 hover:scale-[1.01]"
                      : "border border-white/20 bg-white/5 text-white hover:bg-blue-600"
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
          SECTION 11: CHATGPT / AI QUESTIONS + RIYADH FAQ ACCORDION
      ===================================================================== */}
      <section
        id="riyadh-faq"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="إجابات شافية ومباشرة لعملائنا في الرياض"
            title="أسئلة جوهرية حول خدمات السيو والذكاء الاصطناعي"
            highlightedWord="وتصدر نتائج قوقل في الرياض"
            subtitle="إجابات دقيقة على أكثر الأسئلة التي يطرحها أصحاب الشركات والمصانع والمتاجر في الرياض قبل بدء حملة السيو."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-14">
            {RIYADH_CHATGPT_QUESTIONS.map((item, idx) => (
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
            {RIYADH_SEO_FAQS.map((faq, idx) => (
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

          {/* Riyadh Semantic Keywords Cloud */}
          <div className="mt-14 rounded-3xl border border-white/10 bg-black/50 p-7 text-center">
            <h3 className="text-base font-black text-white">
              أهم عمليات البحث والكلمات المفتاحية المستهدفة في العاصمة الرياض
            </h3>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {RIYADH_SEMANTIC_KEYWORDS.map((kw) => (
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
          SECTION 12: FINAL FREE RIYADH SEO AUDIT & WHATSAPP CTA BANNER
      ===================================================================== */}
      <section className="relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-blue-500/40 bg-gradient-to-b from-[#081b33] via-[#05101e] to-[#02050b] p-8 shadow-[0_0_80px_rgba(37,99,235,0.22)] sm:p-12 lg:p-16 text-center">
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300">
                <Sparkles className="h-4 w-4" />
                <span>احصل على تقرير فحص سيو شامل ومجاني 100% لنشاطك في الرياض</span>
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                أرسل رابط موقعك أو متجرك الآن وتصدر نتائج بحث الرياض خلال 90 يوماً
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                سواء كنت تمتلك شركة أو مصنعاً في الرياض، عيادة في الملقا والعليا،
                أو متجراً إلكترونياً على{" "}
                <strong className="text-emerald-300">سلة أو زد أو شوبيفاي</strong>؛
                تواصل معنا عبر واتساب وسنرسل لك تحليلاً مفصلاً للأخطاء التقنية
                والكلمات المفتاحية الرابحة في الرياض مجاناً.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={mainWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-l from-emerald-500 to-teal-500 px-8 py-4 text-base font-black text-black shadow-[0_0_35px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.03]"
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