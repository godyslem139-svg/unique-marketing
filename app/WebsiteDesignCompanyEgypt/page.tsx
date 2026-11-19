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

function CreditCard({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
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
// NEXT.JS METADATA — EGYPT WEB DESIGN COMPANY (ARABIC RTL)
// ============================================================================

export const metadata: Metadata = {
  title:
    "شركة تصميم مواقع الكترونية في مصر | مواقع Next.js وووردبريس ومتاجر احترافية — UNIQUE",
  description:
    "أفضل شركة تصميم مواقع الكترونية في مصر بتقنيات Next.js وWordPress ومتاجر WooCommerce وShopify وEasyOrder. سرعة +98 في جوجل، ربط باي موب وفوري وإنستاباي وبوسطة، وباقات شفافة تبدأ من 8,500 جنيه مصري.",
  keywords: [
    "شركة تصميم مواقع الكترونية في مصر",
    "افضل شركة تصميم مواقع في مصر",
    "اسعار تصميم المواقع في مصر",
    "شركة تصميم متاجر الكترونية في مصر",
    "شركة برمجة مواقع في القاهرة",
    "تصميم مواقع شركات في مصر",
    "شركة تصميم مواقع في الاسكندرية",
    "تصميم موقع Next.js في مصر",
    "شركة تصميم مواقع ووردبريس في مصر",
    "تكلفة انشاء موقع الكتروني في مصر 2026",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/egypt-web-design",
    languages: {
      "ar-EG": "https://www.uniquee-ws.com/egypt-web-design",
      "en-EG": "https://www.uniquee-ws.com/en/egypt-web-design",
      "x-default": "https://www.uniquee-ws.com/egypt-web-design",
    },
  },
  openGraph: {
    title: "شركة تصميم مواقع الكترونية في مصر — UNIQUE Digital Agency",
    description:
      "مواقع شركات ومتاجر إلكترونية مصممة للسرعة والتحويل وتصدر جوجل في مصر، مع ربط بوابات الدفع المصرية وملكية كاملة 100%.",
    url: "https://www.uniquee-ws.com/egypt-web-design",
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

interface TechStackRow {
  criterion: string;
  nextjsStack: string;
  wordpressStack: string;
  ecommercePlatforms: string;
}

interface WebServicePillar {
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

interface EgyptGatewayItem {
  id: string;
  category: "بوابات الدفع المصرية" | "شركات الشحن واللوجستيات";
  name: string;
  tag: string;
  details: string;
  features: string[];
}

interface EgyptHubZone {
  id: string;
  zoneTitle: string;
  badgeTag: string;
  commercialCharacter: string;
  targetBusinesses: string[];
  webActions: string[];
  localKeywords: string[];
}

interface EgyptSectorItem {
  id: string;
  sectorName: string;
  deliveryTime: string;
  highlightMetric: string;
  description: string;
  keyFeatures: string[];
  whatsappMsg: string;
}

interface QualityTableGroup {
  id: string;
  tableTitle: string;
  tableBadge: string;
  items: string[];
}

interface ExecutionStep {
  stepNum: string;
  timeframe: string;
  title: string;
  description: string;
  tasks: string[];
  milestoneOutput: string;
}

interface EgyptWebPackageEGP {
  id: string;
  packageName: string;
  badgeText: string;
  priceEGP: string;
  billingCycle: string;
  idealFor: string;
  isPopular: boolean;
  deliveryBadge: string;
  includedFeatures: string[];
  technicalSpecs: string[];
  ownershipAndSupport: string;
  whatsappMsg: string;
}

interface ChatGptClientQuestion {
  tag: string;
  q: string;
  a: string;
}

interface EgyptWebFaq {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// DATA ARRAYS — EGYPT WEB DESIGN MARKET (2026)
// ============================================================================

const HERO_KPIS: HeroKpiCard[] = [
  {
    id: "speed",
    value: "98+",
    title: "تقييم سرعة Google Lighthouse",
    subtitle: "تحميل فائق السرعة أقل من 1.2 ثانية على شبكات الموبايل المصرية 4G لضمان عدم هروب العميل.",
    accent: "emerald",
  },
  {
    id: "ownership",
    value: "100%",
    title: "ملكية كاملة للدومين والكود",
    subtitle: "نسلمك الدومين باسمك، لوحة التحكم الكاملة، وملفات المشروع دون أي قيود أو احتكار.",
    accent: "cyan",
  },
  {
    id: "seo",
    value: "SEO-First",
    title: "جاهزية كاملة لتصدر جوجل وAI",
    subtitle: "بنية برمجية نظيفة، Schema Markup، وروابط متوافقة مع محركات البحث من اليوم الأول للإطلاق.",
    accent: "blue",
  },
  {
    id: "egp",
    value: "8,500 ج.م",
    title: "باقات شفافة بالجنيه المصري",
    subtitle: "أسعار واضحة ومعلنة لمواقع الشركات والمتاجر مع ربط باي موب وفوري وإنستاباي وبوسطة.",
    accent: "amber",
  },
];

const TECH_STACK_COMPARISON_EGYPT: TechStackRow[] = [
  {
    criterion: "الأنسب لمن في السوق المصري؟",
    nextjsStack: "الشركات الكبرى، العقارات، السياحة، والمنصات التي تستهدف أقصى سرعة وتصدر جوجل",
    wordpressStack: "مواقع الشركات التعريفية، العيادات، المدونات، والمتاجر المتوسطة عبر WooCommerce",
    ecommercePlatforms: "البراندات المحلية (Local Brands) وحملات ميتا وتيك توك السريعة (Shopify / EasyOrder)",
  },
  {
    criterion: "سرعة التحميل (Core Web Vitals)",
    nextjsStack: "أعلى سرعة ممكنة (0.6 – 1.1 ثانية) وتقييم +98 على الموبايل",
    wordpressStack: "سريعة جداً (1.4 – 1.9 ثانية) عند بنائها بكود نظيف بدون إضافات ثقيلة",
    ecommercePlatforms: "سريعة ومستقرة على سيرفرات سحابية جاهزة لضغط الإعلانات الممولة",
  },
  {
    criterion: "قوة التهيئة للسيو (SEO & GEO)",
    nextjsStack: "استثنائية — Server-Side Rendering + JSON-LD مخصص لكل صفحة",
    wordpressStack: "ممتازة مع ضبط Schema وSitemap وهيكلة العناوين والروابط الداخلية",
    ecommercePlatforms: "قوية جداً في Shopify مع تحسين صفحات المجموعات والمنتجات",
  },
  {
    criterion: "الربط مع الدفع والشحن في مصر",
    nextjsStack: "ربط API مباشر مع Paymob، فوري، إنستاباي، بوسطة، وERP",
    wordpressStack: "ربط فوري ومستقر مع Paymob، فوري، فاليو، فودافون كاش، وبوسطة",
    ecommercePlatforms: "تكامل جاهز وسريع مع باي موب، الدفع عند الاستلام COD، وشركات الشحن",
  },
  {
    criterion: "سهولة إدارة المحتوى والمنتجات",
    nextjsStack: "لوحة تحكم Sanity CMS عربية/إنجليزية عصرية وسهلة للغاية",
    wordpressStack: "لوحة تحكم ووردبريس الشهيرة لتعديل النصوص والصور بسهولة",
    ecommercePlatforms: "لوحة إدارة طلبات ومخزون مخصصة للتجارة الإلكترونية اليومية",
  },
  {
    criterion: "مدة التنفيذ المتوقعة",
    nextjsStack: "من 14 إلى 21 يوم عمل حسب حجم الصفحات والتكاملات",
    wordpressStack: "من 7 إلى 12 يوم عمل لمواقع الشركات والمتاجر القياسية",
    ecommercePlatforms: "من 5 إلى 10 أيام عمل لإطلاق المتجر وربط بوابات الدفع",
  },
];

const CORE_WEB_SERVICES_EGYPT: WebServicePillar[] = [
  {
    id: "corporate-websites",
    number: "01",
    badge: "مواقع الشركات والمؤسسات",
    title: "تصميم مواقع الشركات الاحترافية في مصر",
    enSubtitle: "Corporate & Enterprise Web Design",
    summary:
      "نصمم موقعاً يعكس مكانة شركتك الحقيقية أمام العملاء في مصر والخليج، بهوية بصرية مخصصة بالكامل (UI/UX) بدون قوالب مكررة، مع هيكلة صفحات ترفع معدل التحويل وتحوّل الزائر إلى عميل يتواصل عبر واتساب أو نموذج عرض السعر.",
    businessImpactInEgypt:
      "يعزز مصداقية شركتك في المناقصات والاجتماعات مع العملاء الكبار، ويمنحك أصلاً رقمياً دائماً يعمل كمندوب مبيعات 24 ساعة يومياً.",
    executionChecklist: [
      "تصميم واجهة مستخدم UI/UX مخصصة تعكس هوية وألوان علامتك التجارية",
      "صفحات متكاملة (الرئيسية، من نحن، الخدمات، سابقة الأعمال، المدونة، اتصل بنا)",
      "توافق تام مع الموبايل (Mobile-First) والشاشات المختلفة بسرعة فائقة",
      "ربط مباشر بواتساب، نماذج طلب عروض الأسعار، وخرائط جوجل",
      "إعداد بريد إلكتروني رسمي باسم نطاق الشركة (info@yourcompany.com)",
    ],
    deliverables: [
      "ملكية كاملة للدومين والاستضافة",
      "لوحة تحكم سهلة الإدارة",
      "شهادة أمان SSL",
      "تجهيز أساسي للسيو",
    ],
    whatsappText: "مرحباً UNIQUE، أريد تصميم موقع إلكتروني احترافي لشركتي في مصر ومعرفة التفاصيل والأسعار.",
  },
  {
    id: "ecommerce-egypt",
    number: "02",
    badge: "التجارة الإلكترونية",
    title: "تصميم المتاجر الإلكترونية (WooCommerce • Shopify • EasyOrder)",
    enSubtitle: "High-Converting E-Commerce Stores",
    summary:
      "نبني متجراً إلكترونياً جاهزاً للبيع الفوري في السوق المصري ومُحسّناً لتحمل ضغط إعلانات فيسبوك وإنستجرام وتيك توك، مع تجربة شراء سريعة من خطوة واحدة (One-Page Checkout) لتقليل السلات المتروكة.",
    businessImpactInEgypt:
      "يرفع معدل إتمام الطلبات بنسبة تصل إلى 40% عبر تسهيل الدفع عند الاستلام (COD) أو الدفع الإلكتروني عبر باي موب وفوري وفاليو.",
    executionChecklist: [
      "صفحات منتجات احترافية تعرض المقاسات والألوان وتقييمات العملاء بوضوح",
      "ربط كامل ببوابات الدفع المصرية (Paymob، Fawry، ValU، InstaPay، فودافون كاش)",
      "ربط تلقائي بشركات الشحن (بوسطة، أرامكس، مايلرز) مع حساب الشحن حسب المحافظة",
      "ربط بيكسل ميتا (Meta CAPI) وتيك توك وسناب شات وجوجل أناليتكس GA4 بدقة",
      "نظام كوبونات خصم، عروض Upsell/Cross-sell، واسترجاع السلات المتروكة عبر واتساب",
    ],
    deliverables: [
      "متجر جاهز للبيع الفوري",
      "ربط الدفع والشحن",
      "تدريب على إدارة الطلبات",
      "بيكسل تتبع التحويلات",
    ],
    whatsappText: "مرحباً UNIQUE، أريد تصميم متجر إلكتروني احترافي في مصر وربطه ببوابات الدفع والشحن.",
  },
  {
    id: "nextjs-custom",
    number: "03",
    badge: "السرعة القصوى والبرمجة الحديثة",
    title: "تطوير مواقع ومنصات Next.js & React + Sanity CMS",
    enSubtitle: "Ultra-Fast Headless & Custom Web Apps",
    summary:
      "عندما تحتاج شركتك إلى موقع يتفوق تقنياً على كل المنافسين في مصر، نستخدم أحدث معمارية عالمية (Next.js App Router + Sanity CMS) لنقدم لك سرعة تحميل لحظية، أماناً غير قابل للاختراق التقليدي، وتفوقاً كاسحاً في نتائج بحث جوجل.",
    businessImpactInEgypt:
      "مثالي لشركات العقارات، المجمعات الطبية، شركات السياحة، والمنصات التي تستهدف تصدر كلمات بحث عالية المنافسة بدون بطء الإضافات التقليدية.",
    executionChecklist: [
      "أداء +98 في Google PageSpeed Insights مع Server-Side Rendering",
      "لوحة تحكم Sanity CMS مرنة وسريعة لإضافة المقالات والمشاريع واللغات",
      "دعم كامل لتعدد اللغات (عربي RTL / إنجليزي LTR / لغات أوروبية) مع Hreflang دقيق",
      "توليد تلقائي لخرائط الموقع Sitemap وبيانات Schema JSON-LD لكل صفحة",
      "قابلية توسع غير محدودة لربط أنظمة CRM وERP وبوابات الحجز والذكاء الاصطناعي",
    ],
    deliverables: [
      "كود نظيف 100% TypeScript",
      "استضافة سحابية فائقة السرعة",
      "لوحة Sanity CMS",
      "ضمان Core Web Vitals",
    ],
    whatsappText: "مرحباً UNIQUE، أرغب في بناء موقع احترافي سريع بتقنية Next.js لمشروعي في مصر.",
  },
  {
    id: "landing-pages-cro",
    number: "04",
    badge: "مضاعفة عائد الإعلانات",
    title: "تصميم صفحات الهبوط عالية التحويل (Landing Pages)",
    enSubtitle: "Conversion-Focused Ad Landing Pages",
    summary:
      "إعلاناتك الممولة على جوجل وميتا وتيك توك تفقد نصف ميزانيتها إذا أرسلت العميل لصفحة بطيئة أو مشتتة. نصمم صفحات هبوط مقنعة بكتابة تسويقية احترافية (Copywriting) وتدفق بصري يدفع الزائر للتسجيل أو الشراء فوراً.",
    businessImpactInEgypt:
      "يخفض تكلفة العميل المحتمل (CPL / CPA) بشكل ملموس ويرفع جودة العملاء المتواصلين مع فريق المبيعات.",
    executionChecklist: [
      "كتابة محتوى بيعي احترافي يخاطب احتياج العميل المصري ويعالج اعتراضاته",
      "تحميل فوري في أقل من ثانية لتقليل معدل الارتداد (Bounce Rate) من الإعلانات",
      "أزرار تواصل واضحة وذكية (واتساب مبرمج برسالة جاهزة + نموذج سريع)",
      "تتبع دقيق لكل ضغطة وتحويل عبر Google Tag Manager وMeta Conversions API",
      "تصميم متجاوب 100% لمستخدمي الهواتف (أكثر من 85% من زيارات مصر)",
    ],
    deliverables: [
      "صفحة هبوط كاملة",
      "كتابة المحتوى البيعي",
      "ربط التتبع والبيكسل",
      "تسليم خلال 3-5 أيام",
    ],
    whatsappText: "مرحباً UNIQUE، أحتاج تصميم صفحة هبوط عالية التحويل لحملاتي الإعلانية في مصر.",
  },
  {
    id: "website-redesign",
    number: "05",
    badge: "التطوير وإعادة البناء",
    title: "تطوير وإعادة تصميم المواقع القديمة مع حفظ ترتيب SEO",
    enSubtitle: "Safe Redesign & Performance Rescue",
    summary:
      "إذا كان موقعك الحالي بطيئاً أو ذا تصميم قديم يضر بصورة شركتك ولا يحقق مبيعات، نعيد بناءه بالكامل بواجهة عصرية وسرعة فائقة مع خطة ترحيل آمنة (301 Redirects) تحفظ كل الروابط المؤرشفة وترفع ترتيبك في جوجل.",
    businessImpactInEgypt:
      "يجدد واجهة علامتك التجارية ويضاعف التحويلات دون خسارة زائر واحد من زوارك الحاليين في محركات البحث.",
    executionChecklist: [
      "فحص شامل للموقع القديم واستخراج أقوى الصفحات والروابط الخلفية",
      "إعداد خريطة تحويلات 301 Redirects دقيقة لحماية الأرشفة الحالية",
      "إعادة تصميم UI/UX حديثة متوافقة مع الهواتف وسريعة الاستجابة",
      "تنظيف الكود، ضغط الصور بصيغة WebP/AVIF، وإزالة الثغرات الأمنية",
      "تحديث البيانات المنظمة وإعادة فحص الموقع في Google Search Console",
    ],
    deliverables: [
      "تقرير فحص الموقع القديم",
      "خريطة Redirects آمنة",
      "تصميم عصري جديد",
      "تحسن فوري في السرعة",
    ],
    whatsappText: "مرحباً UNIQUE، لدي موقع إلكتروني قديم وأريد تطويره وإعادة تصميمه بدون فقدان ترتيبه في جوجل.",
  },
  {
    id: "multilingual-portals",
    number: "06",
    badge: "التوسع الإقليمي والتصدير",
    title: "تصميم المواقع متعددة اللغات للتصدير والسياحة والشركات الدولية",
    enSubtitle: "Multilingual & International Web Portals",
    summary:
      "للمصانع المصرية المصدّرة، شركات السياحة والغوص، ومكاتب الاستشارات التي تخاطب أسواق الخليج وأوروبا، نبني مواقع متعددة اللغات (عربي، إنجليزي، ألماني، فرنسي، وغيرها) مع ضبط كامل لاتجاه القراءة RTL/LTR وتوافق SEO لكل دولة.",
    businessImpactInEgypt:
      "يفتح لشركتك أسواقاً دولية وعقود تصدير بالعملة الصعبة عبر ظهور احترافي بلغة العميل المستهدف.",
    executionChecklist: [
      "تصميم متقن يدعم التبديل السلس بين RTL العربي وLTR للغات الأجنبية",
      "هيكلة روابط منفصلة ونظيفة لكل لغة (/ar/، /en/، /de/) مع وسوم Hreflang",
      "إدارة سهلة لجميع اللغات من لوحة تحكم واحدة موحدة",
      "تهيئة نماذج طلبات التصدير (RFQ) وحجوزات السياحة متعددة العملات",
      "سرعة تحميل عالمية عبر شبكات توزيع المحتوى CDN في أوروبا والخليج ومصر",
    ],
    deliverables: [
      "بنية متعددة اللغات",
      "ضبط Hreflang دولي",
      "نماذج RFQ / حجز",
      "تغطية CDN عالمية",
    ],
    whatsappText: "مرحباً UNIQUE، أريد تصميم موقع متعدد اللغات لشركتي في مصر للتصدير أو السياحة.",
  },
];

const EGYPT_PAYMENT_SHIPPING_GATEWAYS: EgyptGatewayItem[] = [
  {
    id: "paymob",
    category: "بوابات الدفع المصرية",
    name: "Paymob (باي موب)",
    tag: "فيزا • ماستركارد • ميزة • محافظ",
    details: "البوابة الأكثر انتشاراً واعتماداً للمتاجر الإلكترونية في مصر بربط API مباشر وآمن.",
    features: [
      "قبول بطاقات Visa وMastercard وبطاقة ميزة المصرية",
      "دعم المحافظ الإلكترونية (فودافون كاش، أورانج كاش، اتصالات كاش)",
      "تقسيط مباشر عبر فاليو (ValU) والبنوك المصرية من داخل صفحة الدفع",
    ],
  },
  {
    id: "fawry-instapay",
    category: "بوابات الدفع المصرية",
    name: "Fawry & InstaPay (فوري وإنستاباي)",
    tag: "دفع فوري وثقة عالية في مصر",
    details: "توفير خيارات الدفع المفضلة لشريحة واسعة من العملاء في جميع محافظات مصر.",
    features: [
      "إصدار كود دفع فوري (Fawry Pay) للدفع من أي منفذ أو تطبيق",
      "تأكيد وتسهيل التحويل اللحظي عبر InstaPay مع إشعارات واتساب",
      "خيار الدفع عند الاستلام (COD) مع تأكيد تلقائي للطلب لتقليل المرتجعات",
    ],
  },
  {
    id: "bosta-aramex",
    category: "شركات الشحن واللوجستيات",
    name: "Bosta & Mylerz (بوسطة ومايلرز)",
    tag: "شحن داخلي لجميع المحافظات",
    details: "ربط تلقائي بين متجرك وشركات الشحن المصرية لإصدار البوليصات وتتبع الشحنات آلياً.",
    features: [
      "حساب تلقائي لتكلفة الشحن حسب المحافظة والمنطقة (القاهرة، الإسكندرية، الدلتا، الصعيد)",
      "إنشاء بوليصة الشحن بضغطة زر من لوحة تحكم المتجر بدون إدخال يدوي",
      "تحديث حالة الطلب للعميل تلقائياً حتى التسليم وتحصيل COD",
    ],
  },
  {
    id: "aramex-dhl",
    category: "شركات الشحن واللوجستيات",
    name: "Aramex & DHL (الشحن الدولي)",
    tag: "تصدير وشحن للخليج وأوروبا",
    details: "للبراندات المصرية التي تبيع في السعودية والإمارات والكويت وأوروبا.",
    features: [
      "حساب مصاريف الشحن الدولي والوزن تلقائياً داخل سلة المشتريات",
      "دعم تعدد العملات (جنيه مصري EGP، ريال سعودي SAR، دولار USD)",
      "تتبع لحظي للشحنات الدولية وتقارير مبيعات مفصلة لكل دولة",
    ],
  },
];

const EGYPT_COMMERCIAL_HUBS: EgyptHubZone[] = [
  {
    id: "new-cairo-capital",
    zoneTitle: "القاهرة الجديدة، التجمع الخامس والعاصمة الإدارية",
    badgeTag: "مقر الشركات والمطورين العقاريين",
    commercialCharacter:
      "أكبر تجمع لشركات التطوير العقاري، الشركات القابضة، العيادات التخصصية الفاخرة، ومكاتب الاستشارات الهندسية والقانونية في مصر.",
    targetBusinesses: [
      "شركات التطوير والتسويق العقاري",
      "العيادات التجميلية والطبية الكبرى",
      "شركات الاستشارات والهندسة",
      "الشركات الناشئة والتكنولوجيا",
    ],
    webActions: [
      "بناء مواقع عقارية بفلترة ذكية للمشروعات والكمبوندات وربط مباشر بـ CRM",
      "واجهات فاخرة سريعة الاستجابة تعكس قوة العلامة التجارية وتزيد حجوزات المبيعات",
      "ضبط خرائط جوجل وبيانات LocalBusiness لمنطقة التجمع الخامس والعاصمة الإدارية",
    ],
    localKeywords: [
      "شركة تصميم مواقع في التجمع الخامس",
      "تصميم موقع عقاري القاهرة الجديدة",
      "شركة برمجة مواقع العاصمة الإدارية",
    ],
  },
  {
    id: "zayed-october-mohandessin",
    zoneTitle: "الشيخ زايد، 6 أكتوبر، المهندسين والمعادي",
    badgeTag: "المراكز التجارية والخدمات المتخصصة",
    commercialCharacter:
      "بيئة نشطة للبراندات المحلية (Local Brands)، المراكز الطبية، الأكاديميات التعليمية، شركات الديكور والتشطيبات، ومكاتب الخدمات.",
    targetBusinesses: [
      "البراندات المحلية ومتاجر الأزياء",
      "شركات الديكور والتشطيبات",
      "المراكز الطبية ومعامل التحاليل",
      "الأكاديميات ومراكز التدريب",
    ],
    webActions: [
      "تصميم متاجر إلكترونية سريعة مربوطة بباي موب وبوسطة لخدمة غرب وجنوب القاهرة",
      "معارض أعمال تفاعلية عالية الدقة لشركات الديكور والتشطيبات بدون إبطاء الموقع",
      "صفحات هبوط مخصصة لحملات ميتا وتيك توك وجوجل بأعلى معدل تحويل",
    ],
    localKeywords: [
      "شركة تصميم مواقع في الشيخ زايد",
      "تصميم متجر الكتروني 6 اكتوبر",
      "شركة تصميم مواقع في المعادي",
    ],
  },
  {
    id: "alexandria-north-coast",
    zoneTitle: "الإسكندرية، الساحل الشمالي وقطاع السياحة واللوجستيات",
    badgeTag: "الموانئ والسياحة والخدمات الإقليمية",
    commercialCharacter:
      "مركز رئيسي لشركات الشحن البحري والتخليص الجمركي، الاستيراد والتصدير، شركات السياحة والفنادق، والمنشآت الطبية والتجارية الكبرى.",
    targetBusinesses: [
      "شركات الشحن واللوجستيات والملاحة",
      "شركات الاستيراد والتصدير",
      "الفنادق وشركات السياحة والغوص",
      "الشركات التجارية والمطاعم الكبرى",
    ],
    webActions: [
      "بوابات متعددة اللغات (عربي / إنجليزي / أوروبي) لشركات الشحن والسياحة",
      "أنظمة حجز واستعلام شحنات ونماذج طلب تسعير دولية سريعة الاستجابة",
      "تهيئة كاملة للسيو المحلي في الإسكندرية والسيو الدولي لعملاء الخارج",
    ],
    localKeywords: [
      "شركة تصميم مواقع في الاسكندرية",
      "تصميم موقع شركة شحن ولوجستيات",
      "تصميم موقع سياحي متعدد اللغات مصر",
    ],
  },
  {
    id: "industrial-cities",
    zoneTitle: "المدن الصناعية (العاشر من رمضان، العبور، السادات، برج العرب)",
    badgeTag: "المصانع وقطاع B2B والتصدير",
    commercialCharacter:
      "القلب الصناعي لمصر الذي يضم آلاف المصانع في الصناعات الغذائية، الهندسية، الكيماويات، الملابس، والأثاث الساعية لتوسيع مبيعات الجملة والتصدير.",
    targetBusinesses: [
      "مصانع التصدير والمنتجات الغذائية",
      "مصانع البلاستيك والتغليف والكيماويات",
      "شركات التوريدات والمعدات الصناعية",
      "مصانع الأثاث والمنسوجات",
    ],
    webActions: [
      "كتالوج منتجات صناعي منظم بالمواصفات الفنية وملفات PDF القابلة للتحميل",
      "صفحات تعريفية بالشهادات (ISO، الجودة، خطوط الإنتاج) لرفع ثقة المستوردين",
      "نماذج طلب عروض أسعار جملة وتصدير (B2B RFQ) باللغتين العربية والإنجليزية",
    ],
    localKeywords: [
      "تصميم موقع لمصنع في مصر",
      "تصميم موقع شركة استيراد وتصدير",
      "تصميم كتالوج منتجات B2B مصر",
    ],
  },
];

const EGYPT_8_SECTORS: EgyptSectorItem[] = [
  {
    id: "real-estate",
    sectorName: "العقارات والمطورين العقاريين",
    deliveryTime: "12 – 18 يوم",
    highlightMetric: "بحث وفلترة وحدات فورية",
    description:
      "مواقع عقارية احترافية لعرض الكمبوندات والمشروعات والوحدات بفلترة حسب المنطقة والسعر والمساحة، مع ربط مباشر بنظام CRM وواتساب.",
    keyFeatures: [
      "صفحات مخصصة لكل مشروع وكمبوند ومطور",
      "حاسبة أقساط ومقدمات مدمجة",
      "تكامل مباشر مع واتساب ومبيعات العقارات",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تصميم موقع عقاري احترافي في مصر.",
  },
  {
    id: "medical-clinics",
    sectorName: "العيادات والمراكز الطبية",
    deliveryTime: "7 – 12 يوم",
    highlightMetric: "حجز مواعيد أونلاين",
    description:
      "مواقع طبية موثوقة للأطباء والمستشفيات ومراكز الأسنان والتجميل، مصممة لبناء الثقة الطبية وتسهيل حجز الكشوفات عبر الموقع.",
    keyFeatures: [
      "ملفات تعريفية للأطباء والتخصصات والحالات",
      "نظام حجز مواعيد وربط بخرائط جوجل",
      "مدونة طبية مهيأة لتصدر أسئلة المرضى في جوجل",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تصميم موقع طبي لعيادة أو مركز طبي في مصر.",
  },
  {
    id: "factories-export",
    sectorName: "المصانع وشركات الاستيراد والتصدير",
    deliveryTime: "10 – 15 يوم",
    highlightMetric: "كتالوج B2B + عربي/إنجليزي",
    description:
      "بوابات صناعية وتجارية تعرض خطوط الإنتاج، الشهادات، والكتالوجات الفنية بشكل مقنع يجذب المستوردين من الخليج وأوروبا وأفريقيا.",
    keyFeatures: [
      "كتالوج منتجات مفصل بالمواصفات وملفات PDF",
      "نسختان عربية وإنجليزية مهيأتان للبحث الدولي",
      "نماذج طلب عروض أسعار جملة وتصدير RFQ",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تصميم موقع لمصنع أو شركة استيراد وتصدير في مصر.",
  },
  {
    id: "local-brands-ecom",
    sectorName: "المتاجر والبراندات المحلية (Local Brands)",
    deliveryTime: "7 – 12 يوم",
    highlightMetric: "جاهز لحملات ميتا وتيك توك",
    description:
      "متاجر أزياء، عطور، مستحضرات تجميل، وإلكترونيات مصممة لتحويل زيارات السوشيال ميديا إلى طلبات فورية بأقل نسبة سلات متروكة.",
    keyFeatures: [
      "دفع عبر باي موب، فوري، فاليو، والدفع عند الاستلام",
      "ربط مباشر ببوسطة وشركات الشحن المصرية",
      "بيكسل ميتا CAPI وتيك توك وسرعة موبايل فائقة",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تصميم متجر إلكتروني لبراند محلي في مصر.",
  },
  {
    id: "tourism-diving",
    sectorName: "السياحة والفنادق والرحلات والغوص",
    deliveryTime: "12 – 20 يوم",
    highlightMetric: "حجوزات متعددة اللغات",
    description:
      "مواقع سياحية مبهرة بصرياً وسريعة التحميل لعرض البرامج السياحية، رحلات البحر الأحمر وشرم الشيخ والغردقة والأقصر وأسوان بـ 2 إلى 7 لغات.",
    keyFeatures: [
      "برامج رحلات تفاعلية بالأسعار والمواعيد",
      "تعدد لغات وعملات (دولار، يورو، جنيه)",
      "حجز فوري وتأكيد تلقائي عبر البريد وواتساب",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تصميم موقع لشركة سياحة أو رحلات في مصر.",
  },
  {
    id: "contracting-decor",
    sectorName: "شركات المقاولات والديكور والتشطيبات",
    deliveryTime: "8 – 14 يوم",
    highlightMetric: "معرض أعمال عالي الدقة",
    description:
      "تصميم مواقع هندسية راقية تبرز المشروعات المنفذة (قبل وبعد) والباقات التشطيبية بطريقة ترفع ثقة العملاء وتضاعف طلبات المعاينة.",
    keyFeatures: [
      "معرض صور وفيديو سريع بدون إبطاء الصفحة",
      "عرض واضح لباقات التشطيب والمواصفات",
      "نماذج حجز معاينة هندسية مجانية",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تصميم موقع لشركة مقاولات أو ديكور وتشطيبات في مصر.",
  },
  {
    id: "education-courses",
    sectorName: "المنصات التعليمية والأكاديميات",
    deliveryTime: "12 – 21 يوم",
    highlightMetric: "نظام LMS وحماية محتوى",
    description:
      "منصات تعليمية للدورات الأونلاين والمدرسين والأكاديميات مع حسابات طلاب، حماية للفيديوهات، واختبارات إلكترونية وشهادات.",
    keyFeatures: [
      "إدارة الدورات، الدروس، والاختبارات بسهولة",
      "تفعيل اشتراكات عبر فوري وباي موب وفودافون كاش",
      "لوحة متابعة للطلاب وإصدار شهادات إتمام",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تصميم منصة تعليمية أو موقع لأكاديمية في مصر.",
  },
  {
    id: "consulting-legal",
    sectorName: "المكاتب الاستشارية والمحاماة والمحاسبة",
    deliveryTime: "7 – 10 أيام",
    highlightMetric: "هوية مؤسسية موثوقة",
    description:
      "مواقع رسمية رصينة تعكس الخبرة والاحترافية لمكاتب المحاماة، المحاسبة، والاستشارات المالية والإدارية في مصر والشرق الأوسط.",
    keyFeatures: [
      "عرض واضح للتخصصات والخبرات والشركاء",
      "نظام حجز استشارات أونلاين أو بمقر المكتب",
      "مدونة مقالات قانونية/مالية لتصدر جوجل",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تصميم موقع لمكتب استشارات أو محاماة في مصر.",
  },
];

const UNIQUE_4_QUALITY_TABLES_EGYPT: QualityTableGroup[] = [
  {
    id: "perf-table",
    tableTitle: "1. معايير السرعة والأداء (Core Web Vitals)",
    tableBadge: "PageSpeed 98+",
    items: [
      "سرعة تحميل LCP أقل من 1.2 ثانية على الموبايل",
      "تحويل تلقائي للصور إلى WebP / AVIF مع Lazy Loading",
      "تصميم Mobile-First متجاوب مع كل مقاسات الشاشات",
      "أكواد نظيفة خالية من الإضافات الثقيلة والملفات غير المستخدمة",
      "تفعيل التخزين المؤقت (Caching) وشبكة CDN لتسريع التصفح",
    ],
  },
  {
    id: "seo-table",
    tableTitle: "2. التجهيز التقني للسيو (SEO & AI Ready)",
    tableBadge: "Google Ready",
    items: [
      "بنية عناوين H1–H3 سليمة وروابط URL نظيفة وصديقة لجوجل",
      "بيانات منظمة JSON-LD (LocalBusiness، Service، Product، FAQ)",
      "ملفات XML Sitemap وRobots.txt مضبوطة بدقة",
      "ربط كامل مع Google Search Console وGoogle Analytics GA4",
      "ضبط وسوم OpenGraph للمشاركة الاحترافية على واتساب وفيسبوك",
    ],
  },
  {
    id: "security-table",
    tableTitle: "3. الأمان والملكية الكاملة 100%",
    tableBadge: "Zero Lock-In",
    items: [
      "تسجيل الدومين والاستضافة ببياناتك وصلاحياتك الكاملة",
      "تفعيل شهادة الأمان HTTPS / SSL وحماية نماذج التواصل",
      "نسخ احتياطي دوري تلقائي (Automated Backups) لملفاتك وبياناتك",
      "تسليم كامل لكود المشروع ولوحة التحكم مع فيديو تدريبي لإدارته",
      "دعم فني وصيانة مجانية بعد الإطلاق لضمان استقرار التشغيل",
    ],
  },
  {
    id: "cro-table",
    tableTitle: "4. تجربة المستخدم ومضاعفة التحويل (UX/CRO)",
    tableBadge: "High Conversion",
    items: [
      "تصميم UI/UX مخصص يناسب هوية علامتك التجارية لا قوالب مكررة",
      "مسار زائر واضح يقوده للتواصل أو الشراء في أقل من 3 ضغطات",
      "أزرار واتساب ذكية مبرمجة برسالة ترحيب مخصصة لكل خدمة",
      "توافق عالي مع خطوط عربية عصرية مريحة للقراءة على الموبايل",
      "اختبار شامل لكل النماذج والروابط وبوابات الدفع قبل التسليم",
    ],
  },
];

const UNIQUE_PORTFOLIO_PROJECTS: { name: string; category: string }[] = [
  { name: "ذا لايت هاوس (The Light House)", category: "بوابة سياحة وغوص — 7 لغات (Next.js)" },
  { name: "موقع رنين التجاري (Raneen)", category: "متجر إلكتروني متكامل عالي السرعة" },
  { name: "بوابة الرياض للدليل والخدمات", category: "دليل ومنصة خدمات متصدرة لجوجل" },
  { name: "مؤسسة المملكة للمقاولات والخدمات", category: "موقع شركات ومقاولات — الخليج" },
  { name: "البدر للعقارات والاستثمار", category: "منصة تطوير وتسويق عقاري" },
  { name: "تعقيم للتنظيف والصيانة", category: "موقع خدمات منزلية وتجارية" },
  { name: "لمسات للتصميم والوكالات", category: "موقع وكالة إبداعية ومعرض أعمال" },
  { name: "منصة قرآني للتعليم", category: "منصة تعليمية تفاعلية متكاملة" },
];

const EXECUTION_ROADMAP_EGYPT: ExecutionStep[] = [
  {
    stepNum: "01",
    timeframe: "اليوم 1 – 3",
    title: "دراسة النشاط وتخطيط الهيكل (Discovery & UX)",
    description:
      "نفهم نموذج عملك وجمهورك المستهدف في مصر، ونحدد التقنية الأنسب (Next.js أو WordPress أو متجر إلكتروني) مع رسم خريطة الصفحات ومسار التحويل.",
    tasks: [
      "جلسة تحليل متطلبات المشروع وتحديد الصفحات والأهداف البيعية",
      "اختيار الكلمات المفتاحية الأساسية لهيكلة صفحات الموقع للسيو",
      "تحديد بوابات الدفع والشحن والتكاملات المطلوبة (CRM / WhatsApp)",
    ],
    milestoneOutput: "وثيقة نطاق العمل + خريطة الموقع (Sitemap) المعتمدة",
  },
  {
    stepNum: "02",
    timeframe: "اليوم 4 – 8",
    title: "تصميم الواجهات وتجربة المستخدم (UI/UX Design)",
    description:
      "نصمم واجهة عصرية مخصصة لهوية علامتك التجارية مع التركيز على تجربة الموبايل وسهولة القراءة ووضوح أزرار اتخاذ القرار.",
    tasks: [
      "تصميم الصفحة الرئيسية والصفحات الداخلية بهوية بصرية متناسقة",
      "مراجعة التصميم معك وتنفيذ جولات التعديل حتى الاعتماد الكامل",
      "تجهيز الأيقونات والصور المضغوطة والنصوص التسويقية المقنعة",
    ],
    milestoneOutput: "تصميم UI/UX معتمد جاهز للبرمجة",
  },
  {
    stepNum: "03",
    timeframe: "اليوم 9 – 15",
    title: "البرمجة، لوحة التحكم والتكاملات (Development)",
    description:
      "نحوّل التصميم إلى موقع حقيقي فائق السرعة مع بناء لوحة تحكم سهلة، ربط بوابات الدفع والشحن المصرية، وتطبيق كل معايير SEO التقني.",
    tasks: [
      "برمجة نظيفة متوافقة مع Core Web Vitals وجميع المتصفحات",
      "ربط Paymob / Fawry / Bosta وبيكسل الإعلانات وGoogle Analytics",
      "إعداد بيانات Schema JSON-LD وملفات الفهرسة والأمان SSL",
    ],
    milestoneOutput: "نسخة تجريبية حية (Staging Link) للمراجعة الشاملة",
  },
  {
    stepNum: "04",
    timeframe: "اليوم 16 – 21",
    title: "الاختبار، الإطلاق والتدريب (QA & Launch)",
    description:
      "نختبر كل زر ونموذج وبوابة دفع على أجهزة متعددة، ثم نطلق الموقع على الدومين الرسمي ونسلمك كامل الصلاحيات والتدريب.",
    tasks: [
      "اختبار سرعة PageSpeed وتوافق الموبايل وفحص الأمان الشامل",
      "الإطلاق الرسمي وربط Google Search Console لإرسال خريطة الموقع",
      "تسليم كامل بيانات الملكية + جلسة تدريب لإدارة الموقع + دعم فني",
    ],
    milestoneOutput: "موقعك الإلكتروني حي ومؤرشف بملكية 100%",
  },
];

const EGYPT_WEB_PACKAGES_EGP: EgyptWebPackageEGP[] = [
  {
    id: "starter-corporate",
    packageName: "باقة البداية (مواقع الشركات)",
    badgeText: "للشركات الناشئة والمكاتب",
    priceEGP: "8,500",
    billingCycle: "جنيه مصري / تدفع مرة واحدة",
    idealFor:
      "مثالية للشركات التعريفية، العيادات، المكاتب الاستشارية، وشركات الخدمات التي تحتاج واجهة احترافية سريعة ومهيأة لجوجل.",
    isPopular: false,
    deliveryBadge: "تسليم خلال 7 – 10 أيام",
    includedFeatures: [
      "تصميم مخصص متجاوب مع الموبايل (حتى 6 صفحات احترافية)",
      "لوحة تحكم سهلة باللغة العربية لتعديل النصوص والصور",
      "دومين رسمي (.com) + استضافة سريعة + شهادة SSL للسنة الأولى",
      "بريد إلكتروني رسمي باسم شركتك (info@company.com)",
      "ربط مباشر بزر واتساب الذكي وخرائط جوجل ونموذج تواصل",
    ],
    technicalSpecs: [
      "تجهيز أساسي للسيو (Sitemap + Meta Tags + Schema)",
      "سرعة تحميل عالية وتوافق كامل مع Google Mobile-Friendly",
      "ربط Google Analytics GA4 وGoogle Search Console",
    ],
    ownershipAndSupport: "ملكية كاملة 100% + دعم فني وصيانة مجانية لمدة 3 أشهر.",
    whatsappMsg: "مرحباً UNIQUE، أرغب في الاستفسار عن باقة البداية لتصميم موقع شركة (8,500 جنيه مصري).",
  },
  {
    id: "growth-store-pro",
    packageName: "باقة النمو (متجر إلكتروني / موقع متطور)",
    badgeText: "الأكثر طلباً في مصر",
    priceEGP: "18,500",
    billingCycle: "جنيه مصري / تدفع مرة واحدة",
    idealFor:
      "الأفضل للمتاجر الإلكترونية والبراندات المحلية أو الشركات المتوسطة التي تحتاج موقعاً بلغتين (عربي/إنجليزي) وأداءً قوياً للإعلانات والسيو.",
    isPopular: true,
    deliveryBadge: "تسليم خلال 10 – 15 يوم",
    includedFeatures: [
      "متجر إلكتروني متكامل (WooCommerce / Shopify) أو موقع شركة ثنائي اللغة",
      "ربط بوابات الدفع المصرية (Paymob، فوري، فاليو، فودافون كاش، COD)",
      "ربط شركات الشحن (بوسطة / أرامكس) وحساب الشحن حسب المحافظة",
      "تصميم UI/UX مخصص يركز على رفع معدل التحويل والمبيعات",
      "ربط بيكسل ميتا CAPI وتيك توك وجوجل تاج مانجر بدقة",
    ],
    technicalSpecs: [
      "بنية SEO متقدمة (Product / LocalBusiness Schema + سرعة فائقة)",
      "نظام كوبونات خصم، تقييمات منتجات، واسترجاع السلات المتروكة",
      "دومين + استضافة عالية الأداء + SSL + بريد رسمي للسنة الأولى",
    ],
    ownershipAndSupport: "ملكية كاملة 100% + تدريب شامل للفريق + دعم فني مجاني 6 أشهر.",
    whatsappMsg: "مرحباً UNIQUE، أرغب في حجز باقة النمو لتصميم متجر إلكتروني أو موقع متطور (18,500 جنيه مصري).",
  },
  {
    id: "enterprise-nextjs",
    packageName: "باقة المؤسسات والبرمجة الخاصة (Next.js)",
    badgeText: "للشركات الكبرى والعقارات والمنصات",
    priceEGP: "35,000",
    billingCycle: "جنيه مصري / تبدأ من",
    idealFor:
      "مصممة لشركات التطوير العقاري، المصانع المصدّرة، شركات السياحة متعددة اللغات، والمنصات التي تطلب أعلى سرعة وأمان بتقنية Next.js + Sanity.",
    isPopular: false,
    deliveryBadge: "تسليم خلال 15 – 21 يوم",
    includedFeatures: [
      "برمجة خاصة بأحدث تقنيات Next.js App Router + TypeScript",
      "لوحة تحكم Sanity CMS فائقة السهولة + دعم تعدد اللغات (حتى 7 لغات)",
      "سرعة تحميل +98 في Google Lighthouse وأداء فوري على الموبايل",
      "أنظمة مخصصة (فلترة عقارات، كتالوج B2B، حجز سياحي، أو ربط CRM/ERP)",
      "هيكلة سيو تقني متقدمة وجاهزية كاملة لمحركات البحث بالذكاء الاصطناعي (GEO)",
    ],
    technicalSpecs: [
      "توليد تلقائي لـ JSON-LD Schema وHreflang الدولي وDynamic Sitemaps",
      "استضافة سحابية عالمية (Edge CDN) وحماية متقدمة ضد الهجمات",
      "تكامل APIs مخصص مع بوابات الدفع المحلية والدولية وأنظمة الشركة",
    ],
    ownershipAndSupport: "تسليم كامل للكود (GitHub Repo) + دعم فني وأولوية صيانة لمدة عام كامل.",
    whatsappMsg: "مرحباً UNIQUE، أرغب في مناقشة مشروع برمجة خاصة Next.js (باقة المؤسسات 35,000 جنيه).",
  },
];

const EGYPT_CHATGPT_QUESTIONS: ChatGptClientQuestion[] = [
  {
    tag: "أسعار السوق المصري",
    q: "كم تكلفة تصميم موقع إلكتروني احترافي في مصر عام 2026؟",
    a: "تتراوح تكلفة تصميم موقع شركة احترافي في مصر عادة بين 8,500 و18,000 جنيه مصري للمواقع التعريفية ومتعددة اللغات، ومن 15,000 إلى 35,000 جنيه للمتاجر الإلكترونية المربوطة بباي موب وبوسطة، بينما تبدأ المنصات المبرمجة خصيصاً بتقنية Next.js والأنظمة العقارية والسياحية من 35,000 جنيه حسب عدد اللغات والتكاملات.",
  },
  {
    tag: "اختيار التقنية",
    q: "أيهما أفضل لمشروعي في مصر: WordPress أم Next.js أم Shopify؟",
    a: "إذا كنت تطلق براند محلي سريع وتعتمد على إعلانات ميتا وتيك توك فإن Shopify أو WooCommerce خيار عملي ممتاز؛ وإذا كنت شركة تعريفية بميزانية متوسطة فإن WordPress المنفذ باحترافية يفي بالغرض؛ أما إذا كنت تستهدف تصدر جوجل في قطاعات تنافسية مثل العقارات والسياحة والخدمات الطبية بأقصى سرعة وأمان، فإن Next.js هو الاختيار الأقوى والأطول عمراً.",
  },
  {
    tag: "الدفع والشحن في مصر",
    q: "هل يمكن ربط المتجر الإلكتروني ببوابات الدفع والشحن داخل مصر؟",
    a: "نعم، في UNIQUE نربط متجرك بشكل كامل وآمن مع Paymob (فيزا وماستركارد وميزة والمحافظ الإلكترونية وتقسيط فاليو)، وفوري، وإنستاباي، والدفع عند الاستلام (COD)، مع ربط آلي بشركات الشحن مثل بوسطة (Bosta) ومايلرز وأرامكس لحساب مصاريف الشحن لكل محافظة وإصدار البوليصات تلقائياً.",
  },
  {
    tag: "ضمان الملكية والسيو",
    q: "كيف أضمن أن موقعي سيظهر في جوجل وأنني أمتلكه بالكامل؟",
    a: "نضمن ذلك عبر شرطين أساسيين في التعاقد: أولاً تسجيل الدومين والاستضافة باسمك وتسليمك كامل صلاحيات الكود ولوحة التحكم، وثانياً بناء الموقع وفق معايير SEO التقني (سرعة +98، بيانات Schema JSON-LD، خريطة موقع Sitemap، وربط Search Console) من اليوم الأول للإطلاق.",
  },
];

const EGYPT_WEB_FAQS: EgyptWebFaq[] = [
  {
    id: "faq-1",
    category: "الأسعار والتعاقد",
    question: "هل الأسعار المعلنة تشمل الدومين والاستضافة وشهادة الأمان؟",
    answer:
      "نعم، باقات تصميم المواقع في UNIQUE تشمل حجز الدومين الرسمي (.com)، استضافة سريعة ومستقرة، شهادة أمان SSL (HTTPS)، وبريد إلكتروني رسمي باسم شركتك للسنة الأولى، مع توضيح تكلفة التجديد السنوي بشفافية كاملة قبل التعاقد.",
  },
  {
    id: "faq-2",
    category: "مدة التنفيذ",
    question: "كم يستغرق تصميم وتسليم الموقع الإلكتروني أو المتجر؟",
    answer:
      "تستغرق مواقع الشركات التعريفية وصفحات الهبوط من 5 إلى 10 أيام عمل، والمتاجر الإلكترونية المتكاملة من 10 إلى 15 يوم عمل، بينما تستغرق منصات Next.js المخصصة والمواقع متعددة اللغات من 15 إلى 21 يوم عمل حسب حجم المحتوى والتكاملات.",
  },
  {
    id: "faq-3",
    category: "إدارة الموقع",
    question: "هل أستطيع تعديل النصوص والصور وإضافة المنتجات بنفسي بعد التسليم؟",
    answer:
      "بالتأكيد. نسلمك لوحة تحكم عربية/إنجليزية سهلة الاستخدام (سواء WordPress أو Sanity CMS أو Shopify) تتيح لك تعديل الأسعار وإضافة المنتجات والمقالات بسهولة تامة، بالإضافة إلى فيديو تدريبي وجلسة شرح مباشرة لفريقك.",
  },
  {
    id: "faq-4",
    category: "السيو وجوجل",
    question: "هل الموقع المصمم يكون جاهزاً للتصدر في نتائج بحث جوجل؟",
    answer:
      "نعم، جميع مواقعنا تُبنى بمنهجية SEO-First: سرعة فائقة على الموبايل، بنية عناوين منظمة، روابط نظيفة، بيانات منظمة JSON-LD Schema، وربط فوري بـ Google Search Console. كما نقدم باقات سيو شهرية متخصصة إذا رغبت في استراتيجية تصدر مستمرة للكلمات عالية المنافسة.",
  },
  {
    id: "faq-5",
    category: "الدفع والملكية",
    question: "ما هي طريقة الدفع المتبعة وهل أمتلك حقوق الموقع بالكامل؟",
    answer:
      "يتم الدفع على دفعتين أو ثلاث دفعات مرتبطة بمراحل الإنجاز (دفعة بدء العمل، دفعة بعد اعتماد التصميم، ودفعة نهائية عند الإطلاق والتسليم). وبمجرد التسليم تمتلك 100% من الدومين والكود وقاعدة البيانات وصلاحيات الإدارة.",
  },
  {
    id: "faq-6",
    category: "الدعم الفني",
    question: "ماذا يحدث بعد إطلاق الموقع؟ هل يوجد دعم فني وصيانة؟",
    answer:
      "نوفر لك دعماً فنياً وصيانة مجانية تتراوح بين 3 إلى 12 شهراً حسب الباقة المختارة، تشمل التأكد من استقرار الموقع، التحديثات الأمنية، النسخ الاحتياطي، وحل أي استفسار تقني عبر واتساب بسرعة.",
  },
];

const EGYPT_SEMANTIC_KEYWORDS_AR: string[] = [
  "شركة تصميم مواقع الكترونية في مصر",
  "أفضل شركة تصميم مواقع في مصر",
  "اسعار تصميم المواقع في مصر 2026",
  "شركة تصميم متاجر الكترونية في مصر",
  "تصميم موقع الكتروني للشركات القاهرة",
  "شركة تصميم مواقع في الاسكندرية",
  "تصميم مواقع التجمع الخامس والعاصمة الإدارية",
  "تصميم موقع Next.js في مصر",
  "شركة تصميم مواقع ووردبريس مصر",
  "ربط باي موب وفوري وبوسطة للمتاجر",
  "تصميم موقع عقاري في مصر",
  "تصميم موقع لمصنع وشركة تصدير",
  "تصميم صفحة هبوط عالية التحويل",
  "تطوير وإعادة تصميم المواقع القديمة",
  "تصميم مواقع متعددة اللغات في مصر",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD WITH CAIRO/EGYPT GEOCOORDINATES 30.0444, 31.2357)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "UNIQUE Digital Agency — شركة تصميم مواقع الكترونية في مصر",
    url: "https://www.uniquee-ws.com/egypt-web-design",
    telephone: "+201270506511",
    email: "godyslem139@gmail.com",
    priceRange: "8,500 EGP - 35,000+ EGP",
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
      name: "باقات تصميم المواقع والمتاجر الإلكترونية في مصر",
      itemListElement: EGYPT_WEB_PACKAGES_EGP.map((pkg) => ({
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
    mainEntity: EGYPT_WEB_FAQS.map((faq) => ({
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
        name: "شركة تصميم مواقع الكترونية في مصر",
        item: "https://www.uniquee-ws.com/egypt-web-design",
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
// MAIN PAGE COMPONENT — EGYPT WEB DESIGN COMPANY (ARABIC RTL)
// ============================================================================

export default function EgyptWebDesignPage() {
  const heroConsultWhatsapp = getWhatsAppUrl(
    "مرحباً UNIQUE Digital Agency! أريد استشارة مجانية وعرض سعر لتصميم موقع إلكتروني / متجر إلكتروني في مصر."
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
                UNIQUE <span className="text-blue-400">WEB</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">
                تصميم وبرمجة المواقع في مصر
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#services" className="hover:text-cyan-300 transition">
              الخدمات
            </a>
            <a href="#tech-stack" className="hover:text-cyan-300 transition">
              مقارنة التقنيات
            </a>
            <a href="#gateways" className="hover:text-cyan-300 transition">
              الدفع والشحن
            </a>
            <a href="#hubs" className="hover:text-cyan-300 transition">
              مناطق مصر
            </a>
            <a href="#quality" className="hover:text-cyan-300 transition">
              معايير التسليم
            </a>
            <a href="#packages" className="hover:text-cyan-300 transition">
              الأسعار بالجنيه
            </a>
            <a href="#faq" className="hover:text-cyan-300 transition">
              الأسئلة الشائعة
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/en/egypt-web-design"
              className="px-3.5 py-2 rounded-xl border border-neutral-800 bg-neutral-950 hover:border-cyan-500/50 text-xs font-bold text-neutral-200 hover:text-cyan-300 transition"
            >
              English
            </Link>
            <a
              href={heroConsultWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-l from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>اطلب عرض سعر</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION — EGYPT WEB DESIGN + LIVE LIGHTHOUSE SIMULATOR
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
            <span className="text-cyan-300 font-semibold">شركة تصميم مواقع الكترونية في مصر</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Right Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>القاهرة • الإسكندرية • جميع محافظات مصر</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">Next.js • WordPress • متاجر إلكترونية</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.18] mb-6">
                أقوى{" "}
                <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  شركة تصميم مواقع الكترونية في مصر
                </span>{" "}
                لبناء مواقع سريعة تبيع وتتصدر جوجل
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                في <strong className="text-white">UNIQUE Digital Agency</strong> لا نصمم لك مجرد
                واجهة شكلية — بل نبني لك موقع شركة أو متجراً إلكترونياً هندسياً فائق السرعة
                بتقنيات <strong className="text-cyan-300">Next.js وWordPress وShopify</strong>،
                مربوطاً ببوابات الدفع والشحن المصرية ومجهزاً لتصدر محركات البحث من اليوم الأول.
              </p>

              {/* Key Trust Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "سرعة تحميل +98 في Google Lighthouse",
                  "ربط باي موب، فوري، إنستاباي، فاليو وبوسطة",
                  "بنية SEO تقني + JSON-LD جاهزة لتصدر جوجل",
                  "ملكية كاملة 100% للدومين والكود ولوحة التحكم",
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
                  href={heroConsultWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>احصل على عرض سعر مجاني الآن</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <span>تصفح الباقات بالجنيه المصري</span>
                  <ArrowLeft className="w-4 h-4 text-cyan-400" />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  واتساب مباشر: <strong className="text-neutral-200" dir="ltr">{WHATSAPP_NUMBER_DISPLAY}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  تعاقد واضح + تسليم في الموعد + دعم فني بعد الإطلاق
                </span>
              </div>
            </div>

            {/* Hero Left Visual: Live Core Web Vitals & Egypt Stack Simulator */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-cyan-300">
                      مؤشر الأداء والسرعة — UNIQUE Standard
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    Mobile-First 99/100
                  </span>
                </div>

                {/* 4 Lighthouse Score Circles */}
                <div className="grid grid-cols-4 gap-2.5 text-center">
                  {[
                    { label: "السرعة", score: "99", color: "border-emerald-400 text-emerald-400" },
                    { label: "السيو SEO", score: "100", color: "border-cyan-400 text-cyan-300" },
                    { label: "المعايير", score: "100", color: "border-blue-400 text-blue-300" },
                    { label: "الإتاحة", score: "98", color: "border-amber-400 text-amber-300" },
                  ].map((m, i) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3 flex flex-col items-center"
                    >
                      <div
                        className={`w-12 h-12 rounded-full border-2 ${m.color} flex items-center justify-center font-black text-base mb-1.5`}
                      >
                        {m.score}
                      </div>
                      <span className="text-[11px] text-neutral-300 font-semibold">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Core Web Vitals Metrics */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      اختبار الشبكة المصرية (4G Mobile)
                    </span>
                    <span className="text-emerald-400 font-bold">ممتاز ✓</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2.5">
                      <div className="text-[10px] text-neutral-500">LCP</div>
                      <div className="text-sm font-black text-emerald-400">0.9s</div>
                    </div>
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2.5">
                      <div className="text-[10px] text-neutral-500">INP</div>
                      <div className="text-sm font-black text-cyan-300">38ms</div>
                    </div>
                    <div className="rounded-xl bg-black/70 border border-neutral-800 p-2.5">
                      <div className="text-[10px] text-neutral-500">CLS</div>
                      <div className="text-sm font-black text-blue-400">0.00</div>
                    </div>
                  </div>
                </div>

                {/* Ready Integrations Snapshot */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      التكاملات الجاهزة للسوق المصري
                    </span>
                    <span className="text-[11px] text-blue-300">API مباشر</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Paymob",
                      "Fawry",
                      "InstaPay",
                      "ValU",
                      "Bosta",
                      "Aramex",
                      "WhatsApp API",
                      "Meta CAPI",
                      "GA4 + GSC",
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
          3. TECH STACK COMPARISON TABLE (NEXT.JS VS WORDPRESS VS SHOPIFY/EASYORDER)
      ==================================================================== */}
      <section id="tech-stack" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="اختر التقنية الصحيحة لمشروعك"
            title="مقارنة شاملة بين تقنيات"
            highlight="تصميم المواقع والمتاجر في مصر"
            subtitle="نساعدك في اختيار البنية البرمجية التي تحقق أعلى عائد لاستثمارك—بدون بيع تقنية غير مناسبة لطبيعة نشاطك."
          />

          <div className="overflow-x-auto rounded-3xl border border-neutral-800 bg-[#060911]">
            <table className="w-full text-right border-collapse min-w-[780px]">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-950/90">
                  <th className="py-5 px-6 text-xs font-extrabold text-neutral-400">
                    معيار المقارنة
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold text-cyan-300 bg-blue-500/10">
                    Next.js + Sanity CMS (البرمجة الحديثة)
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold text-emerald-300">
                    WordPress / WooCommerce
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold text-amber-300">
                    Shopify &amp; EasyOrder (للمتاجر السريعة)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80 text-sm">
                {TECH_STACK_COMPARISON_EGYPT.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/40 transition">
                    <td className="py-4 px-6 font-bold text-white">{row.criterion}</td>
                    <td className="py-4 px-6 text-cyan-100 font-medium bg-blue-500/[0.04]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{row.nextjsStack}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-neutral-300">{row.wordpressStack}</td>
                    <td className="py-4 px-6 text-neutral-300">{row.ecommercePlatforms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. 6 CORE WEB DESIGN SERVICES IN EGYPT
      ==================================================================== */}
      <section id="services" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="خدماتنا الهندسية المتكاملة"
            title="6 خدمات رئيسية لتصميم وتطوير"
            highlight="المواقع والمتاجر الإلكترونية في مصر"
            subtitle="من المواقع التعريفية للشركات إلى المتاجر الإلكترونية والمنصات المبرمجة خصيصاً—كل مشروع يُبنى للسرعة والتحويل وتصدر جوجل."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {CORE_WEB_SERVICES_EGYPT.map((service) => (
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
                      الأثر التجاري على نشاطك في مصر
                    </div>
                    <p className="text-xs text-neutral-200 leading-relaxed">
                      {service.businessImpactInEgypt}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-bold text-neutral-400 mb-3">
                      ما الذي نقوم بتنفيذه فعلياً:
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
                  <span>اطلب استشارة لهذه الخدمة عبر واتساب</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. EGYPT PAYMENT & SHIPPING GATEWAYS INTEGRATION
      ==================================================================== */}
      <section id="gateways" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="جاهزية كاملة للتجارة المصرية"
            title="ربط مباشر ببوابات الدفع"
            highlight="وشركات الشحن في مصر"
            subtitle="نجعل عملية الشراء والدفع والشحن في متجرك تلقائية بالكامل لتقليل المرتجعات ورفع معدل إتمام الطلبات."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {EGYPT_PAYMENT_SHIPPING_GATEWAYS.map((gw) => (
              <div
                key={gw.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-cyan-500/40 p-7 transition"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400">
                    {gw.category === "بوابات الدفع المصرية" ? (
                      <CreditCard className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <ShoppingBag className="w-4 h-4 text-amber-400" />
                    )}
                    <span>{gw.category}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-blue-300">
                    {gw.tag}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-2">{gw.name}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-5">{gw.details}</p>

                <ul className="space-y-2.5">
                  {gw.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. EGYPT COMMERCIAL & INDUSTRIAL HUBS (4 ZONES)
      ==================================================================== */}
      <section id="hubs" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="تغطية جغرافية شاملة لمصر"
            title="نخدم الشركات والمصانع في"
            highlight="أبرز المراكز التجارية والصناعية بمصر"
            subtitle="سواء كان مقرك في التجمع الخامس أو الشيخ زايد أو الإسكندرية أو العاشر من رمضان—نصمم موقعك بما يلائم طبيعة سوقك المحلي والدولي."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {EGYPT_COMMERCIAL_HUBS.map((hub) => (
              <div
                key={hub.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-blue-500/40 p-7 transition"
              >
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{hub.badgeTag}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                  {hub.zoneTitle}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                  {hub.commercialCharacter}
                </p>

                <div className="mb-5">
                  <div className="text-xs font-bold text-blue-300 mb-2">أبرز الأنشطة التي نخدمها:</div>
                  <div className="flex flex-wrap gap-2">
                    {hub.targetBusinesses.map((biz, i) => (
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
                  {hub.webActions.map((act, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
                  {hub.localKeywords.map((kw, i) => (
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
          7. 8 HIGH-DEMAND EGYPTIAN SECTORS
      ==================================================================== */}
      <section className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="حلول مخصصة حسب القطاع"
            title="تصميم مواقع إلكترونية مخصصة لـ"
            highlight="8 قطاعات رئيسية في السوق المصري"
            subtitle="كل قطاع له هيكل صفحات ووظائف وتجربة مستخدم خاصة تحقق أعلى ثقة ومبيعات."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EGYPT_8_SECTORS.map((sec) => (
              <div
                key={sec.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-amber-300">{sec.deliveryTime}</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-bold text-emerald-300">
                      {sec.highlightMetric}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2.5">{sec.sectorName}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {sec.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {sec.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-200">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
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
                  <span>اطلب تصميم لمجالك</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. UNIQUE'S 4 QUALITY TABLES + LIVE TERMINAL + REAL PORTFOLIO
      ==================================================================== */}
      <section id="quality" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="معيار التسليم الهندسي في UNIQUE"
            title="4 قوائم فحص جودة نلتزم بها"
            highlight="قبل تسليم أي موقع إلكتروني"
            subtitle="نضمن لك السرعة، جاهزية السيو، الأمان، والملكية الكاملة بوثيقة تسليم واضحة قابلة للاختبار."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {UNIQUE_4_QUALITY_TABLES_EGYPT.map((table) => (
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

          {/* Live Build Terminal + Real Portfolio */}
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
                      unique-build-check — Egypt Web Engineering
                    </span>
                  </div>
                  <span className="text-emerald-400">PASSED</span>
                </div>
                <div className="space-y-2.5 text-neutral-300 leading-relaxed">
                  <div>
                    <span className="text-cyan-400">$</span> unique-deploy --region=&quot;egypt-eg&quot; --domain=&quot;uniquee-ws.com&quot;
                  </div>
                  <div className="text-emerald-400">
                    ✓ [Lighthouse Mobile] Performance: 99 | SEO: 100 | Best Practices: 100
                  </div>
                  <div className="text-emerald-400">
                    ✓ [Egypt Gateways] Paymob + Fawry + InstaPay + Bosta Webhooks Active
                  </div>
                  <div className="text-emerald-400">
                    ✓ [Ownership] Client Domain + SSL + Full Source Code Handover Verified
                  </div>
                  <div className="text-blue-300">
                    ✓ [Schema JSON-LD] ProfessionalService + OfferCatalog (EGP) + FAQ Valid
                  </div>
                  <div className="text-amber-300">
                    ✓ [Multilingual] ar-EG (RTL) &lt;-&gt; en-EG (LTR) Ready
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between font-sans">
                <span className="text-neutral-400 text-xs">Official Website: www.uniquee-ws.com</span>
                <a
                  href={heroConsultWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-white font-bold text-xs inline-flex items-center gap-1"
                >
                  <span>Start Your Build</span>
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
                    مواقع ومنصات نفّذناها لعملائنا في مصر والخليج
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
          9. 4-STEP EXECUTION & DELIVERY ROADMAP
      ==================================================================== */}
      <section className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="خطة عمل منظمة وواضحة"
            title="كيف نُصمم ونُطلق موقعك في"
            highlight="4 مراحل دقيقة وموثّقة"
            subtitle="تتابع معنا تقدم مشروعك خطوة بخطوة حتى الإطلاق والتسليم في الموعد المتفق عليه بدون مفاجآت."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXECUTION_ROADMAP_EGYPT.map((step) => (
              <div
                key={step.stepNum}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-extrabold text-cyan-300">
                      المرحلة {step.stepNum}
                    </span>
                    <span className="text-xs font-bold text-amber-300">{step.timeframe}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2.5">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {step.tasks.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-3">
                  <div className="text-[10px] font-bold text-emerald-300 mb-0.5">المخرج النهائي:</div>
                  <div className="text-xs font-bold text-white">{step.milestoneOutput}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          10. TRANSPARENT EGP PACKAGES
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="أسعار شفافة بدون مصاريف خفية"
            title="باقات وأسعار تصميم المواقع"
            highlight="في مصر بالجنيه المصري (EGP)"
            subtitle="اختر الباقة المناسبة لحجم مشروعك، أو تواصل معنا لتفصيل عرض سعر مخصص حسب متطلباتك."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {EGYPT_WEB_PACKAGES_EGP.map((pkg) => (
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
                    <span className="text-xs font-bold text-amber-300">{pkg.deliveryBadge}</span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2">{pkg.packageName}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">{pkg.idealFor}</p>

                  <div className="flex items-baseline gap-2 pb-6 mb-6 border-b border-neutral-800">
                    <span className="text-4xl font-black text-white">{pkg.priceEGP}</span>
                    <span className="text-xs font-bold text-cyan-300">{pkg.billingCycle}</span>
                  </div>

                  <div className="mb-5">
                    <div className="text-xs font-bold text-neutral-400 mb-3">
                      مميزات الباقة الأساسية:
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.includedFeatures.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-bold text-neutral-400 mb-3">
                      المواصفات التقنية والسيو:
                    </div>
                    <ul className="space-y-2">
                      {pkg.technicalSpecs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-3 text-xs text-neutral-300 mb-6">
                    <strong className="text-blue-300">الملكية والدعم:</strong>{" "}
                    {pkg.ownershipAndSupport}
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
                  <span>احجز {pkg.packageName}</span>
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
            title="أهم الأسئلة التي يبحث عنها"
            highlight="أصحاب الشركات في مصر قبل التعاقد"
            subtitle="إجابات مباشرة وشفافة حول التكلفة، اختيار التقنية، ربط الدفع والشحن، وضمان الملكية."
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
            highlight="تصميم المواقع الإلكترونية في مصر"
            subtitle="تفاصيل الدومين والاستضافة، مدة التنفيذ، تعديل المحتوى، والدعم الفني بعد الإطلاق."
          />

          <div className="max-w-4xl mx-auto space-y-4 mb-20">
            {EGYPT_WEB_FAQS.map((faq) => (
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
              التغطية الدلالية لخدماتنا في مصر
            </div>
            <h3 className="text-lg font-extrabold text-white mb-5">
              خدمات تصميم وبرمجة المواقع والمتاجر التي ننفذها لعملائنا في مصر
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
          12. FINAL FREE CONSULTATION CTA & FOOTER
      ==================================================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B1730] via-[#070D1A] to-[#051418] border border-blue-500/35 p-8 sm:p-12 lg:p-14 text-center shadow-2xl shadow-blue-950/50">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>استشارة فنية مجانية + عرض سعر مفصّل خلال 24 ساعة</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              جاهز لإطلاق موقعك الإلكتروني الاحترافي في{" "}
              <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                مصر؟
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              أرسل لنا تفاصيل نشاطك أو فكرة مشروعك عبر واتساب الآن، وسيقترح عليك فريقنا الهندسي
              أفضل تقنية (Next.js أو WordPress أو متجر إلكتروني) مع خطة تنفيذ وتسعير واضح بالجنيه المصري.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroConsultWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>تواصل معنا عبر واتساب الآن</span>
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
              © {new Date().getFullYear()} UNIQUE Digital Agency — شركة تصميم مواقع الكترونية في مصر.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/en/egypt-web-design" className="hover:text-cyan-300 transition">
                Web Design Egypt (EN)
              </Link>
              <Link href="/saudi-seo" className="hover:text-cyan-300 transition">
                شركة سيو في السعودية
              </Link>
              <Link href="/riyadh-seo" className="hover:text-cyan-300 transition">
                شركة سيو في الرياض
              </Link>
              <Link href="/jeddah-seo" className="hover:text-cyan-300 transition">
                شركة سيو في جدة
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}