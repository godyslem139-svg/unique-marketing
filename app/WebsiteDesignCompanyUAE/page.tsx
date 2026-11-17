import type { Metadata } from "next";
import Link from "next/link";

// ============================================================================
// 0. BUILT-IN ZERO-DEPENDENCY SVG ICONS (WORKS OUT OF THE BOX IN NEXT.JS)
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

function Lock({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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
    "شركة تصميم مواقع إلكترونية في الإمارات | ووردبريس و Next.js ومتاجر شوبيفاي وسلة وإيزي أوردر | Unique",
  description:
    "أفضل شركة تصميم مواقع إلكترونية في الإمارات (دبي، أبوظبي، الشارقة). نصمم مواقع ووردبريس، نبرمج منصات Next.js فائقة السرعة، نصمم صفحات هبوط إعلانية، وننشئ متاجر شوبيفاي وسلة وإيزي أوردر متوافقة 100% مع السيو SEO.",
  keywords: [
    "شركة تصميم مواقع إلكترونية في الإمارات",
    "شركة تصميم مواقع في دبي",
    "شركة تصميم مواقع في أبوظبي",
    "تصميم مواقع الشارقة",
    "تصميم مواقع ووردبريس في الإمارات",
    "برمجة مواقع Next.js في الإمارات",
    "تصميم صفحات هبوط في الإمارات",
    "تصميم متجر شوبيفاي في الإمارات",
    "تصميم متجر سلة في الإمارات",
    "تصميم متجر إيزي أوردر في الإمارات",
    "تصميم متاجر إلكترونية في دبي",
    "أفضل شركة تصميم مواقع في الإمارات",
    "أسعار تصميم المواقع في الإمارات",
    "تصميم مواقع متوافقة مع السيو",
    "Web Design Company UAE",
    "WordPress Development Dubai",
    "Next.js Agency UAE",
    "Shopify Store Design UAE",
    "Landing Page Design Dubai",
    "UNIQUE Digital Agency",
  ],
  authors: [{ name: "UNIQUE Digital Agency" }],
  publisher: "UNIQUE",
  metadataBase: new URL("https://marketing-beta-gold-30.vercel.app"),
  alternates: {
    canonical: "/uae-web-design",
    languages: {
      "ar-AE": "/uae-web-design",
      ar: "/uae-web-design",
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
      "شركة تصميم مواقع إلكترونية في الإمارات | ووردبريس، Next.js، شوبيفاي، سلة، إيزي أوردر | Unique",
    description:
      "نحول فكرتك إلى موقع إلكتروني أو متجر احترافي فائق السرعة في الإمارات. تصميم مواقع ووردبريس و Next.js وصفحات هبوط ومتاجر شوبيفاي وسلة وإيزي أوردر مهيأة لتصدر جوجل ومضاعفة المبيعات.",
    url: "https://marketing-beta-gold-30.vercel.app/uae-web-design",
    siteName: "Unique Agency",
    locale: "ar_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة تصميم مواقع إلكترونية في الإمارات | Unique Digital Agency",
    description:
      "تصميم مواقع ووردبريس و Next.js وصفحات هبوط ومتاجر شوبيفاي وسلة وإيزي أوردر في دبي وأبوظبي والشارقة بسرعة 99/100 وتوافق كامل مع السيو.",
  },
};

// ============================================================================
// 3. TYPESCRIPT INTERFACES FOR SERVICES, PLATFORMS, PACKAGES & CONTENT
// ============================================================================
interface HeroStatItem {
  id: string;
  number: string;
  title: string;
  description: string;
  accent: "emerald" | "cyan" | "blue" | "amber";
}

interface CorePlatformService {
  id: string;
  badge: string;
  title: string;
  englishSubtitle: string;
  summary: string;
  whyBusinessesChooseIt: string;
  keyDeliverables: string[];
  technicalSpecs: string[];
  idealSectors: string[];
  deliveryTime: string;
  startingPriceAED: string;
  whatsappMsg: string;
}

interface PlatformComparisonRow {
  feature: string;
  nextjs: string;
  wordpress: string;
  shopify: string;
  salla: string;
  easyorder: string;
  landingPage: string;
}

interface LandingPagePillar {
  id: string;
  stepNum: string;
  title: string;
  description: string;
  adPlatformsSupported: string[];
  conversionResult: string;
}

interface IndustrySolutionCard {
  id: string;
  industryTitle: string;
  recommendedPlatform: string;
  description: string;
  essentialFeatures: string[];
  seoKeywordsTargeted: string[];
  whatsappQuery: string;
}

interface EmirateServiceZone {
  id: string;
  emirateName: string;
  englishName: string;
  businessEnvironment: string;
  whatWeBuildHere: string[];
  popularPlatforms: string[];
  seoKeywords: string[];
}

interface WhyUniqueAdvantage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  measurableBenefit: string;
}

interface ExecutionStep {
  step: string;
  title: string;
  timeframe: string;
  details: string;
  clientReceives: string[];
}

interface PricingPackageAED {
  id: string;
  name: string;
  platformTag: string;
  priceAED: string;
  subtitle: string;
  isFeatured: boolean;
  features: string[];
  seoAndSpeedIncluded: string[];
  bonusIncluded: string;
  whatsappOrderMsg: string;
}

interface ClientCaseStudy {
  id: string;
  category: string;
  platformUsed: string;
  title: string;
  summary: string;
  results: {
    metricName: string;
    value: string;
    detail: string;
  }[];
}

interface ClientFaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// 4. CUSTOMER-FACING DATA ARRAYS (WORDPRESS, NEXT.JS, LANDING PAGES, SHOPIFY, SALLA, EASYORDER)
// ============================================================================

const HERO_STATS: HeroStatItem[] = [
  {
    id: "stat-speed",
    number: "99/100",
    title: "سرعة فائقة على Google PageSpeed",
    description: "مواقع ومتاجر تفتح في أقل من 0.8 ثانية على شبكات الجوال في الإمارات لضمان عدم خسارة أي عميل.",
    accent: "emerald",
  },
  {
    id: "stat-platforms",
    number: "6 منصات",
    title: "تغطية شاملة لكافة تقنيات الويب والتجارة",
    description: "نبرمج ونصمم على Next.js، ووردبريس، صفحات الهبوط، شوبيفاي، سلة، وإيزي أوردر باحترافية كاملة.",
    accent: "cyan",
  },
  {
    id: "stat-seo",
    number: "100%",
    title: "تهيئة كاملة لمحركات البحث (SEO)",
    description: "بنية برمجية متوافقة مع خوارزميات جوجل الإمارات لتصدر النتائج الأولى وزيادة المبيعات العضوية.",
    accent: "blue",
  },
  {
    id: "stat-conversion",
    number: "+320%",
    title: "مضاعفة معدلات التحويل والمبيعات",
    description: "تصاميم مبنية على سيكولوجية المشتري في دبي وأبوظبي مع ربط مباشر للدفع والشحن والواتساب.",
    accent: "amber",
  },
];

const CORE_PLATFORM_SERVICES: CorePlatformService[] = [
  {
    id: "service-wordpress",
    badge: "الخيار الأول للشركات والقطاعات الخدمية",
    title: "تصميم مواقع ووردبريس احترافية (WordPress & Elementor Pro)",
    englishSubtitle: "Custom High-Speed WordPress & Elementor Pro Websites",
    summary:
      "نصمم مواقع ووردبريس مخصصة بالكامل للشركات، العيادات، مكاتب الاستشارات، وشركات المقاولات في الإمارات. نبتعد تماماً عن القوالب الجاهزة المكررة أو البطيئة، ونبني لك موقعاً بهوية بصرية فاخرة، لوحة تحكم عربية وإنجليزية سهلة جداً، وسرعة تحميل فائقة متوافقة مع معايير جوجل.",
    whyBusinessesChooseIt:
      "يمنحك مرونة كاملة في إدارة الصفحات، إضافة الخدمات، ونشر المقالات في المدونة بسهولة تامة، مع تكلفة تطوير مثالية وقابلية توسع ممتازة.",
    keyDeliverables: [
      "تصميم واجهات مخصصة 100% باستخدام Elementor Pro المرخص وأكواد CSS حديثة بدون إضافات ثقيلة",
      "تهيئة شاملة لسرعة الموقع والكاش السحابي عبر Cloudflare و WP Rocket لتحقيق أداء 95+ على PageSpeed",
      "إعداد كامل للسيو الداخلي والتقني (RankMath Pro، خريطة الموقع XML، البيانات المنظمة Schema، والـ Canonical)",
      "دعم كامل للغتين العربية والإنجليزية (أو أكثر) مع تنسيق احترافي للخطوط واتجاه الصفحة RTL/LTR",
      "ربط مباشر بنماذج الطلبات، خرائط جوجل، وأزرار التواصل الفوري عبر واتساب",
      "حماية أمنية متقدمة لجدار الحماية، إخفاء مسارات الدخول، وشهادة SSL مجانية",
    ],
    technicalSpecs: ["WordPress CMS", "Elementor Pro", "Custom Theme Styling", "RankMath SEO", "Cloudflare CDN", "WebP Image Optimization"],
    idealSectors: ["مواقع الشركات والمؤسسات", "العيادات والمراكز الطبية", "شركات المقاولات والصيانة", "مكاتب المحاماة والاستشارات", "المدونات والمجلات الرقمية"],
    deliveryTime: "7 إلى 12 يوم عمل",
    startingPriceAED: "3,500 درهم إماراتي",
    whatsappMsg: "مرحباً شركة Unique، أرغب في الاستفسار عن تصميم موقع ووردبريس احترافي لشركتي في الإمارات.",
  },
  {
    id: "service-nextjs",
    badge: "أقوى تكنولوجيا للمنصات الكبرى والسرعة الخارقة",
    title: "تطوير وبرمجة مواقع Next.js المخصصة فائقة السرعة",
    englishSubtitle: "Enterprise Next.js 16, TypeScript, Tailwind CSS & Sanity CMS",
    summary:
      "للباحثين عن القمة المطلقة في الأداء والأمان وتصدر محركات البحث في الإمارات؛ نبرمج مواقع ومنصات مخصصة بالكامل باستخدام تقنية Next.js 16 و TypeScript و Tailwind CSS مع لوحة تحكم Sanity CMS السحابية. تفتح هذه المواقع في أقل من نصف ثانية وتتفوق برمجياً على أي موقع تقليدي في السوق.",
    whyBusinessesChooseIt:
      "توفر سرعة 99/100 مضمونة على Google PageSpeed، وحماية مطلقة ضد الاختراق، ودعماً احترافياً لتعدد اللغات يصل إلى 7 لغات عالمية عبر next-intl مع تحديث فوري للمحتوى والمقالات.",
    keyDeliverables: [
      "بنية برمجية حديثة بمعيار Server-Side Rendering (SSR) لضمان أرشفة فورية في جوجل الإمارات",
      "لوحة تحكم Sanity CMS مرنة وسريعة لإدارة الخدمات، المشاريع، والمدونة مع ظهور التعديلات في نفس اللحظة",
      "دعم تعدد اللغات الاحترافي (عربي، إنجليزي، روسي، صيني، فرنسي، ألماني، إسباني) لخدمة مجتمع الإمارات الدولي",
      "تصفير مشاكل الشبكة (Zero Network Bloat) وضغط الفيديوهات والصور تلقائياً بصيغ AVIF/WebP",
      "بنية ميتا ديناميكية (Dynamic Metadata & Canonicals) وأكواد Schema.org JSON-LD مخصصة لكل صفحة",
      "استضافة سحابية عالمية على Vercel Edge و Cloudflare مع تسليم الكود المصدري كاملاً على GitHub",
    ],
    technicalSpecs: ["Next.js 16 (App Router)", "TypeScript", "Tailwind CSS", "Sanity CMS v3", "next-intl (7 Languages)", "Vercel Edge Network"],
    idealSectors: ["شركات التطوير والوساطة العقارية", "شركات السياحة واليخوت والسفاري", "الشركات القابضة والعلامات الكبرى", "المنصات الخدمية والتطبيقات السحابية"],
    deliveryTime: "10 إلى 20 يوم عمل",
    startingPriceAED: "5,900 درهم إماراتي",
    whatsappMsg: "مرحباً شركة Unique، أرغب في تطوير موقع إلكتروني مخصص بتقنية Next.js فائق السرعة ومتوافق مع السيو في الإمارات.",
  },
  {
    id: "service-landing-pages",
    badge: "مضاعفة مبيعات الحملات الإعلانية الممولة",
    title: "تصميم صفحات الهبوط الإعلانية عالية التحويل (Landing Pages)",
    englishSubtitle: "High-Converting CRO Landing Pages for Google, Snapchat, TikTok & Meta Ads",
    summary:
      "إذا كنت تطلق إعلانات ممولة في الإمارات على جوجل، سناب شات، تيك توك، أو إنستجرام، فإن إرسال الزائر لصفحة عادية أو بطيئة يهدر ميزانيتك الإعلانية. نصمم صفحات هبوط بيعية صاروخية السرعة مبنية على قواعد هندسة التحويل (CRO) لإقناع الزائر وإتمام الطلب أو التواصل عبر واتساب خلال ثوانٍ.",
    whyBusinessesChooseIt:
      "تخفض تكلفة النقرة والاستحواذ على العميل (CPA) وترفع نسبة تحول الزوار إلى مشترين فعليين بفضل سرعتها الفائقة على الجوال وتسلسلها الإقناعي المدروس.",
    keyDeliverables: [
      "تصميم بيعي مخصص يركز على هدف واحد واضح (شراء منتج، حجز موعد، طلب عرض سعر، أو تواصل واتساب)",
      "سرعة تحميل فورية (< 0.6 ثانية) تمنع تسرب الزوار القادمين من إعلانات الجوال السريعة",
      "كتابة وتنسيق المحتوى البيعي (Copywriting): العنوان الخاطف، المزايا، الضمانات، التقييمات، والندرة",
      "ربط دقيق لكافة أكواد التتبع والبيكسل (TikTok Pixel, Snap Pixel, Meta Pixel, Google Ads Conversion API)",
      "نماذج طلب سريعة (One-Step Lead Form) مربوطة مباشرة مع واتساب المبيعات أو Google Sheets أو CRM",
      "قابلية عمل اختبارات A/B Testing للعناوين والعروض للوصول لأعلى عائد على الإنفاق الإعلاني (ROAS)",
    ],
    technicalSpecs: ["Ultra-Fast Next.js / HTML5 / Elementor", "Server-Side Pixel Tracking", "CRO Funnel Layout", "Direct WhatsApp API", "Mobile-First UI"],
    idealSectors: ["الحملات الإعلانية للمنتجات والعروض", "عيادات التجميل والأسنان والليزر", "حملات العقارات ومشاريع الخارطة", "خدمات الصيانة والتنظيف والسيارات"],
    deliveryTime: "3 إلى 5 أيام عمل",
    startingPriceAED: "1,500 درهم إماراتي",
    whatsappMsg: "مرحباً شركة Unique، أرغب في تصميم صفحة هبوط إعلانية (Landing Page) عالية التحويل لحملاتي في الإمارات.",
  },
  {
    id: "service-shopify",
    badge: "المنصة العالمية الأولى للتجارة الإلكترونية والبراندات",
    title: "تصميم وتطوير متاجر شوبيفاي الاحترافية (Shopify & Headless Shopify)",
    englishSubtitle: "Custom Shopify Store Design, Theme Customization & UAE Gateways",
    summary:
      "نبني متاجر شوبيفاي متكاملة للعلامات التجارية والتجار في الإمارات، سواء عبر تخصيص ثيمات شوبيفاي الاحترافية بلمسة فاخرة أو بناء واجهات Headless Shopify بـ Next.js. نجهز متجرك بالكامل من الألف إلى الياء ليكون جاهزاً لاستقبال الطلبات والمدفوعات محلياً ودولياً.",
    whyBusinessesChooseIt:
      "تمنحك أقوى بنية تجارة إلكترونية في العالم مع استقرار تام وقت الذروة والخصومات، وسهولة إدارة المنتجات والمخزون وتكامل سلس مع بوابات الدفع والشحن في الإمارات.",
    keyDeliverables: [
      "تصميم وتخصيص واجهة متجر شوبيفاي بهوية عصرية فاخرة متوافقة مع الذوق الإماراتي والخليجي",
      "تعريب كامل واحترافي للقوالب أو ضبط ازدواجية اللغة (عربي / إنجليزي) والعملات (درهم، ريال، دولار)",
      "ربط بوابات الدفع المعتمدة في الإمارات (Stripe UAE, Paymob, Tabby, Tamara, Apple Pay, Network)",
      "ربط شركات الشحن والتوصيل في الإمارات (Aramex, DHL, Emirates Post, Quiqup) وإعداد مناطق وأسعار الشحن",
      "تهيئة سيو متاجر شوبيفاي (تحسين عناوين المنتجات، المجموعات، سرعة القالب، وبيانات Product Schema)",
      "إعداد تطبيقات زيادة المبيعات (Upsell, Cross-sell، استرداد السلات المتروكة عبر واتساب والإيميل)",
    ],
    technicalSpecs: ["Shopify Liquid / OS 2.0", "Headless Next.js Storefront", "Tabby & Tamara Integration", "Stripe UAE & Paymob", "Shopify SEO"],
    idealSectors: ["براندات العطور والبخور والتجميل", "متاجر الأزياء والعبايات والمجوهرات", "الإلكترونيات والإكسسوارات", "المتاجر المستهدفة للسوق الإماراتي والعالمي"],
    deliveryTime: "7 إلى 14 يوم عمل",
    startingPriceAED: "3,900 درهم إماراتي",
    whatsappMsg: "مرحباً شركة Unique، أرغب في إنشاء وتصميم متجر شوبيفاي (Shopify) احترافي متكامل في الإمارات.",
  },
  {
    id: "service-salla",
    badge: "الحل المفضل للتجارة الإلكترونية في الخليج والإمارات",
    title: "تصميم وتخصيص متاجر سلة الاحترافية (Salla Stores)",
    englishSubtitle: "Custom Salla Theme Design (CSS/JS), SEO & Full Store Setup",
    summary:
      "نحول متجرك على منصة سلة (Salla) من الشكل التقليدي المعتاد إلى متجر ذي تصميم حصري فاخر يجذب المتسوقين في الإمارات والخليج. نقوم بكتابة أكواد CSS و JavaScript مخصصة لتطوير المظهر البصري، مع ضبط كافة إعدادات الدفع والشحن والسيو ورفع المنتجات.",
    whyBusinessesChooseIt:
      "تجمع منصة سلة بين سهولة الإدارة باللغة العربية والتكامل الجاهز والسريع مع شركات الشحن وبوابات الدفع والتقسيط في منطقة الخليج والإمارات.",
    keyDeliverables: [
      "تخصيص شامل لتصميم ثيم سلة عبر أكواد Custom CSS & JS ليظهر متجرك بهوية فريدة ومميزة عن باقي المتاجر",
      "تصميم البنرات الإعلانية الاحترافية، أيقونات الأقسام، وتنسيق صفحات المنتجات لرفع معدل الإضافة للسلة",
      "تفعيل وربط وسائل الدفع الإلكتروني والتقسيط (مدى، فيزا، ماستركارد، Apple Pay، تابي Tabby، تمارا Tamara)",
      "ربط شركات الشحن المحلية والدولية وضبط سياسات الشحن المجاني وكوبونات الخصم والعروض الترويجية",
      "تحسين محركات البحث (SEO) لمتجر سلة: كتابة أوصاف المنتجات والأقسام بالكلمات المفتاحية المستهدفة في الإمارات",
      "ربط Google Analytics 4 و Google Tag Manager وبيكسل سناب شات وتيك توك وميتا لتتبع المبيعات بدقة",
    ],
    technicalSpecs: ["Salla Twilight Engine", "Custom CSS3 & JS Styling", "Tabby & Tamara Ready", "GCC Shipping Sync", "Salla SEO Optimization"],
    idealSectors: ["التجار ورواد الأعمال في الإمارات والخليج", "متاجر الهدايا والمنتجات المتنوعة", "متاجر القهوة والتمور والمواد الغذائية", "المنتجات الرقمية والبطاقات"],
    deliveryTime: "5 إلى 10 أيام عمل",
    startingPriceAED: "2,400 درهم إماراتي",
    whatsappMsg: "مرحباً شركة Unique، أرغب في تصميم وتخصيص متجر احترافي على منصة سلة (Salla) في الإمارات.",
  },
  {
    id: "service-easyorder",
    badge: "الأقوى لمبيعات الدفع عند الاستلام (COD) والتسويق بالأداء",
    title: "تصميم وتجهيز متاجر إيزي أوردر (EasyOrder Stores)",
    englishSubtitle: "High-Speed EasyOrder Stores & One-Page COD Checkout Funnels",
    summary:
      "إذا كان نموذج عملك في الإمارات يعتمد على الإعلانات المباشرة والدفع عند الاستلام (COD) أو الشراء السريع من نفس صفحة المنتج، فإننا نصمم ونجهز لك متجر إيزي أوردر (EasyOrder) بتصميم احترافي يضاعف عدد الطلبات اليومية ويقلل نسبة السلات المتروكة إلى الحد الأدنى.",
    whyBusinessesChooseIt:
      "يتيح للعميل إتمام الطلب مباشرًة من داخل صفحة المنتج عبر نموذج شراء سريع (الاسم، الرقم، الإمارة، العنوان) بدون تعقيد التسجيل أو خطوات الدفع الطويلة.",
    keyDeliverables: [
      "تصميم واجهة متجر إيزي أوردر وصفحات منتجات بيعية عالية الإقناع ومصممة خصيصاً لمستخدمي الهاتف",
      "تخصيص نموذج الشراء السريع (Direct Checkout Form) ليتناسب مع مدن وإمارات الدولة (دبي، أبوظبي، الشارقة...)",
      "إعداد عروض الكميات والخصومات التدرجية (اشترِ 1 واحصل على الثاني بخصم، أو عروض الباقات Bundles) لرفع قيمة السلة",
      "ربط كامل ودقيق مع TikTok Pixel و Snapchat Pixel و Facebook Conversion API لتغذية خوارزميات الإعلانات",
      "ربط تلقائي للطلبات مع Google Sheets وأنظمة شركات الشحن والتوصيل في الإمارات لتسهيل التأكيد والتسليم",
      "تجهيز بنرات وصور المنتجات بجودة عالية وحجم خفيف جداً لضمان فتح المتجر فوراً من إعلانات تيك توك وسناب",
    ],
    technicalSpecs: ["EasyOrder Platform", "One-Page COD Funnel", "Bundle & Upsell Rules", "CAPI & Pixels Integration", "Google Sheets & Courier Sync"],
    idealSectors: ["تجار الدفع عند الاستلام (COD) في الإمارات", "المسوقون بالأداء وDropshipping", "منتجات الترند والأجهزة المنزلية والتجميل", "العروض السريعة والباقات الترويجية"],
    deliveryTime: "3 إلى 7 أيام عمل",
    startingPriceAED: "1,800 درهم إماراتي",
    whatsappMsg: "مرحباً شركة Unique، أرغب في تصميم وتجهيز متجر إيزي أوردر (EasyOrder) احترافي للبيع في الإمارات.",
  },
];

const PLATFORM_COMPARISON_TABLE: PlatformComparisonRow[] = [
  {
    feature: "الاستخدام الأمثل في سوق الإمارات",
    nextjs: "الشركات الكبرى، العقارات، السياحة، والمنصات المخصصة",
    wordpress: "مواقع الشركات، العيادات، المقاولات، والمدونات",
    shopify: "المتاجر الإلكترونية والبراندات المحلية والعالمية",
    salla: "المتاجر الخليجية والإماراتية السريعة والمتكاملة",
    easyorder: "متاجر الدفع عند الاستلام (COD) وحملات تيك توك وسناب",
    landingPage: "الحملات الإعلانية الممولة واستقطاب العملاء الفوري",
  },
  {
    feature: "سرعة التحميل على الجوال (PageSpeed)",
    nextjs: "99 - 100 / 100 (الأسرع عالمياً < 0.7 ثانية)",
    wordpress: "92 - 98 / 100 (مع تهيئة الكاش الخاصة بنا)",
    shopify: "90 - 97 / 100 (أداء سحابي مستقر وعالي)",
    salla: "90 - 95 / 100 (سريع ومستضاف سحابياً)",
    easyorder: "95+ / 100 (خفيف جداً وموجه للشراء الفوري)",
    landingPage: "98 - 100 / 100 (مصممة للفتح اللحظي من الإعلان)",
  },
  {
    feature: "قوة السيو وتصدر محركات البحث (Google SEO)",
    nextjs: "ممتازة جداً (تحكم كامل 100% بالـ SSR والـ Schema)",
    wordpress: "ممتازة جداً (الأقوى في إدارة المقالات والصفحات الخدمية)",
    shopify: "قوية جداً للمنتجات والأقسام التجارية",
    salla: "جيدة جداً للكلمات التجارية المحلية والخليجية",
    easyorder: "موجهة أكثر للإعلانات الممولة والبيع المباشر",
    landingPage: "مهيأة لمعدل الجودة الإعلاني (Quality Score) والتحويل",
  },
  {
    feature: "آلية الشراء أو تحويل العميل",
    nextjs: "مخصصة بالكامل (حجز، دفع، واتساب، أو نظام خاص)",
    wordpress: "نماذج طلب عرض سعر، حجز مواعيد، واتساب، أو WooCommerce",
    shopify: "سلة شراء عالمية + دفع إلكتروني وتقسيط Tabby/Tamara",
    salla: "سلة شراء متكاملة + دفع إلكتروني وتقسيط وشحن آلي",
    easyorder: "نموذج شراء مباشر داخل نفس صفحة المنتج (One-Page COD)",
    landingPage: "زر تواصل واتساب مباشر أو نموذج تسجيل سريع",
  },
  {
    feature: "دعم تعدد اللغات والعملات",
    nextjs: "يدعم حتى 7 لغات ببنية دولية احترافية (next-intl)",
    wordpress: "ثنائي أو متعدد اللغات (عربي / إنجليزي وأكثر)",
    shopify: "تعدد لغات وعملات عالمي كامل",
    salla: "يدعم العربية والإنجليزية وتعدد العملات الخليجية",
    easyorder: "مخصص بالدرهم الإماراتي وعملة الدولة المستهدفة",
    landingPage: "تصمم باللغة المستهدفة للحملة الإعلانية (عربي أو إنجليزي)",
  },
  {
    feature: "مدة التنفيذ والتسليم في Unique",
    nextjs: "10 - 20 يوم عمل",
    wordpress: "7 - 12 يوم عمل",
    shopify: "7 - 14 يوم عمل",
    salla: "5 - 10 أيام عمل",
    easyorder: "3 - 7 أيام عمل",
    landingPage: "3 - 5 أيام عمل",
  },
];

const WHY_UNIQUE_ADVANTAGES: WhyUniqueAdvantage[] = [
  {
    id: "adv-speed",
    title: "سرعة تحميل فائقة (99/100) وتصفير ثقل الشبكة",
    subtitle: "Core Web Vitals & Zero Network Bloat",
    description:
      "ندرك أن العميل في الإمارات يتصفح من هاتفه المحمول ولا ينتظر المواقع البطيئة. لذلك نضغط كافة الصور والفيديوهات، ونقسم الكود البرمجي بحيث يفتح موقعك أو متجرك في أقل من 0.8 ثانية دون أي تحذيرات في PageSpeed.",
    measurableBenefit: "حماية ميزانيتك الإعلانية وخفض معدل ارتداد الزوار لأقل من 18%.",
  },
  {
    id: "adv-seo-builtin",
    title: "السيو التقني مدمج من السطر الأول في البرمجة",
    subtitle: "Built-In Technical SEO, Canonical & Schema",
    description:
      "بصفتنا شركة متخصصة في السيو وتطوير المواقع معاً، لا نسلمك موقعاً جميلاً فقط؛ بل نضبط الميتا تايتل، الميتا ديسكربشن، الروابط القانونية Canonical الصحيحة، وأكواد Schema.org JSON-LD ليتصدر موقعك جوجل الإمارات.",
    measurableBenefit: "أرشفة فورية وسليمة 100% في Google Search Console بدون أخطاء تقنية.",
  },
  {
    id: "adv-all-platforms",
    title: "خبرة حقيقية تحت سقف واحد في كل المنصات",
    subtitle: "Next.js, WordPress, Shopify, Salla, EasyOrder & Landing Pages",
    description:
      "لا نفرض عليك منصة واحدة؛ بل ندرس مشروعك وميزانيتك ونوجهك للحل الأنسب: سواء كان موقع شركة بووردبريس، منصة عقارية أو سياحية بـ Next.js، متجر براند على شوبيفاي أو سلة، أو متجر بيع مباشر على إيزي أوردر.",
    measurableBenefit: "اختيار المنصة الصحيحة يوفر عليك آلاف الدراهم ويضاعف سرعة نموك.",
  },
  {
    id: "adv-uae-ecosystem",
    title: "ربط كامل مع بوابات الدفع والشحن في الإمارات",
    subtitle: "Tabby, Tamara, Stripe UAE, Paymob & Local Couriers",
    description:
      "نجهز موقعك أو متجرك ليعمل بسلاسة داخل السوق الإماراتي، بداية من تفعيل الدفع بالتقسيط عبر تابي وتمارا وبطاقات الدفع و Apple Pay، وصولاً للربط الآلي مع أرامكس و DHL وبريد الإمارات وشركات التوصيل السريع.",
    measurableBenefit: "زيادة معدل إتمام الشراء بنسبة تصل إلى 45% بفضل خيارات الدفع المرنة.",
  },
  {
    id: "adv-cro-whatsapp",
    title: "تصميم يركز على البيع والتحويل المباشر (CRO)",
    subtitle: "Conversion-Engineered UI/UX & Smart WhatsApp Funnels",
    description:
      "كل قسم، زر، ولون في صفحاتنا مصمم لدفع الزائر نحو اتخاذ قرار الشراء أو التواصل معك. نربط أزرار الموقع بنظام رسائل واتساب ذكي يحدد الخدمة أو المنتج الذي يطلبه العميل بدقة.",
    measurableBenefit: "تحويل الزيارات العادية إلى رسائل واتساب وطلبات مبيعات حقيقية يومياً.",
  },
  {
    id: "adv-ownership-support",
    title: "ملكية كاملة 100% للكود والدومين ودعم فني مستمر",
    subtitle: "Full Source Code Ownership & Dedicated Support",
    description:
      "مع Unique، أنت المالك الوحيد والحصري لدومين موقعك، استضافتك، حسابات متجرك، والكود المصدري بالكامل، مع تدريب مصور لفريقك ودعم فني حقيقي يرافقك بعد الإطلاق.",
    measurableBenefit: "أمان واستقلالية تامة لشركتك بدون أي رسوم احتكار سنوية مبالغ فيها.",
  },
];

const LANDING_PAGE_PILLARS: LandingPagePillar[] = [
  {
    id: "lp-1",
    stepNum: "01",
    title: "خطاف بصري وعنوان بيعي يخاطب العميل الإماراتي في 3 ثوانٍ",
    description:
      "نصمم الجزء العلوي (Hero Section) بعرض واضح ومباشر للميزة التنافسية أو العرض الحصري مع فيديو أو صورة عالية الدقة تفتح لحظياً دون أي تأخير.",
    adPlatformsSupported: ["Google Search Ads", "TikTok Spark Ads"],
    conversionResult: "جذب انتباه الزائر فوراً ومنعه من الخروج السريع",
  },
  {
    id: "lp-2",
    stepNum: "02",
    title: "بناء الثقة الاجتماعية واستعراض النتائج والضمانات",
    description:
      "ندمج شهادات العملاء، صور وفيديوهات حقيقية للخدمة أو المنتج، أرقام الإنجازات، وضمانات الجودة لبناء مصداقية فورية لدى المشتري في دبي وأبوظبي.",
    adPlatformsSupported: ["Instagram & Facebook Ads", "Snapchat Ads"],
    conversionResult: "إزالة التردد ومضاعفة ثقة العميل في علامتك التجارية",
  },
  {
    id: "lp-3",
    stepNum: "03",
    title: "نموذج طلب من خطوة واحدة أو تحويل فوري للواتساب",
    description:
      "بدلاً من النماذج المعقدة الطويلة، نصمم نموذج طلب سريع أو زر واتساب ذكي يرسل رسالة جاهزة باسم العرض المطلوب، مع تتبع التحويل بالبيكسل و CAPI.",
    adPlatformsSupported: ["WhatsApp Click-to-Chat", "Conversion API (CAPI)"],
    conversionResult: "رفع معدل التحويل (Conversion Rate) من 1.5% إلى أكثر من 6.8%",
  },
];

const INDUSTRY_SOLUTIONS: IndustrySolutionCard[] = [
  {
    id: "ind-realestate",
    industryTitle: "شركات العقارات والمطورين العقاريين في دبي وأبوظبي",
    recommendedPlatform: "Next.js 16 (متعدد اللغات) + صفحات هبوط للمشاريع",
    description:
      "بوابات عقارية فاخرة لعرض مشاريع الخارطة (Off-Plan) والعقارات الجاهزة مع فلترة فورية حسب المنطقة والمطور، حاسبة خطط الدفع، ودعم حتى 7 لغات للمستثمرين الأجانب.",
    essentialFeatures: [
      "صفحات هبوط مخصصة لكل مشروع عقاري جديد لحملات Google و Meta",
      "تحميل بروشور المشروع (PDF) ومخططات الطوابق عبر التسجيل أو واتساب",
      "دعم اللغات العربية، الإنجليزية، الروسية، الصينية، والفرنسية بـ next-intl",
    ],
    seoKeywordsTargeted: ["عقارات دبي", "مشاريع قيد الإنشاء دبي", "شقق للبيع في أبوظبي"],
    whatsappQuery: "مرحباً Unique، أرغب في تصميم موقع عقاري / صفحة هبوط عقارية في الإمارات.",
  },
  {
    id: "ind-perfumes-fashion",
    industryTitle: "براندات العطور، العبايات، الأزياء، والتجميل في الإمارات",
    recommendedPlatform: "Shopify / سلة (Salla) / إيزي أوردر (EasyOrder)",
    description:
      "متاجر إلكترونية ذات طابع فخم يبرز جمال زجاجات العطور وتفاصيل الأزياء، مع تجربة شراء سلسة وتفعيل التقسيط عبر تابي وتمارا وعروض الباقات (Bundles).",
    essentialFeatures: [
      "تصميم فاخر يعكس هوية البراند الإماراتي والخليجي",
      "تفعيل عروض (اشترِ عطرين واحصل على الثالث مجاناً) لرفع متوسط السلة",
      "ربط الدفع عند الاستلام والدفع الإلكتروني وتابي وتمارا وأرامكس",
    ],
    seoKeywordsTargeted: ["متجر عطور في الإمارات", "عبايات دبي أونلاين", "تسوق أزياء الإمارات"],
    whatsappQuery: "مرحباً Unique، أرغب في إنشاء متجر إلكتروني لبراند عطور / أزياء في الإمارات.",
  },
  {
    id: "ind-medical-clinics",
    industryTitle: "العيادات الطبية، مراكز الأسنان، التجميل، والجلدية",
    recommendedPlatform: "WordPress Pro / Next.js + صفحات هبوط للعروض الطبية",
    description:
      "مواقع طبية موثوقة تستعرض الكادر الطبي، الأجهزة الحديثة، وحالات قبل وبعد، مع نظام حجز مواعيد سريع مربوط مباشرة مع واتساب الاستقبال في العيادة.",
    essentialFeatures: [
      "صفحات مستقلة لكل خدمة علاجية أو تجميلية لتصدر بحث جوجل المحلي",
      "صفحات هبوط مخصصة لعروض هوليوود سمايل، الليزر، والفيلر",
      "توافق كامل مع معايير جوجل للمواقع الطبية (E-E-A-T) وسرعة الجوال",
    ],
    seoKeywordsTargeted: ["أفضل عيادة أسنان في دبي", "عيادة تجميل في أبوظبي", "مركز جلدية الشارقة"],
    whatsappQuery: "مرحباً Unique، أرغب في تصميم موقع إلكتروني لعيادة / مركز طبي في الإمارات.",
  },
  {
    id: "ind-tourism-yachts",
    industryTitle: "شركات السياحة، تأجير اليخوت، السيارات الفارهة، والسفاري",
    recommendedPlatform: "Next.js متعدد اللغات (7 لغات) / WordPress Booking",
    description:
      "منصات حجز سياحي بصرية ساحرة تخاطب السياح والمقيمين في الإمارات، مع استعراض الفيديوهات والباقات والأسعار بالدرهم والدولار واليورو وحجز فوري عبر واتساب أو الدفع الإلكتروني.",
    essentialFeatures: [
      "معارض صور وفيديو عالية الدقة ومضغوطة تفتح في أجزاء من الثانية",
      "نظام طلب حجز بالتاريخ وعدد الساعات أو الأفراد مع تأكيد فوري",
      "تهيئة سيو دولي لاستقطاب السياح قبل وصولهم إلى دبي وأبوظبي",
    ],
    seoKeywordsTargeted: ["تأجير يخوت في دبي", "تأجير سيارات فارهة دبي", "رحلات سفاري الإمارات"],
    whatsappQuery: "مرحباً Unique، أرغب في تصميم موقع سياحي / تأجير يخوت أو سيارات في الإمارات.",
  },
  {
    id: "ind-construction-b2b",
    industryTitle: "شركات المقاولات، الديكور، الصيانة، والخدمات الصناعية",
    recommendedPlatform: "WordPress & Elementor Pro / Next.js Corporate",
    description:
      "مواقع شركات قوية تبرز سابقة الأعمال والمشاريع المنفذة والتراخيص، وتسهل على الشركات والأفراد طلب معاينة أو عرض سعر (RFQ) أو التواصل الهاتفي المباشر.",
    essentialFeatures: [
      "معرض مشاريع تفاعلي مصنف حسب نوع الخدمة والمنطقة",
      "تحميل بروفايل الشركة (Company Profile PDF) بضغطة زر",
      "استهداف الكلمات المفتاحية الخدمية في دبي، أبوظبي، والشارقة",
    ],
    seoKeywordsTargeted: ["شركة مقاولات في الإمارات", "شركة تصميم داخلي دبي", "شركة صيانة عامة أبوظبي"],
    whatsappQuery: "مرحباً Unique، أرغب في تصميم موقع لشركة مقاولات / ديكور / خدمات في الإمارات.",
  },
  {
    id: "ind-cod-ecommerce",
    industryTitle: "تجار الدفع عند الاستلام (COD) والمسوقون بالأداء",
    recommendedPlatform: "إيزي أوردر (EasyOrder) + صفحات هبوط للمنتجات",
    description:
      "بنية تجارة إلكترونية سريعة ومباشرة مصممة لتحقيق أعلى عدد طلبات يومية من إعلانات TikTok و Snapchat مع نموذج شراء مباشر داخل صفحة المنتج وربط مع شيتات جوجل وشركات التوصيل.",
    essentialFeatures: [
      "نموذج طلب من خطوة واحدة (الاسم، رقم الجوال الإماراتي، الإمارة، العنوان)",
      "عروض الكميات التلقائية (1 قطعة، 2 قطعة بخصم، 3 قطع بشحن مجاني)",
      "ربط دقيق للبيكسل و Conversion API لتقليل تكلفة الطلب في الإعلانات",
    ],
    seoKeywordsTargeted: ["تصميم متجر إيزي أوردر الإمارات", "متجر دفع عند الاستلام دبي"],
    whatsappQuery: "مرحباً Unique، أرغب في تصميم متجر إيزي أوردر (EasyOrder) للبيع في الإمارات.",
  },
];

const EMIRATES_SERVICE_ZONES: EmirateServiceZone[] = [
  {
    id: "zone-dubai",
    emirateName: "دبي",
    englishName: "Dubai",
    businessEnvironment:
      "العاصمة التجارية والسياحية والتقنية الأبرز في المنطقة، حيث يبحث العملاء عن الفخامة البصرية، السرعة الفائقة، وتعدد اللغات.",
    whatWeBuildHere: [
      "تطوير منصات Next.js فائقة السرعة لشركات العقارات والسياحة والاستثمار في دبي",
      "تصميم متاجر شوبيفاي وسلة للبراندات الفاخرة مع ربط تابي وتمارا والتوصيل السريع",
      "تصميم صفحات هبوط عالية التحويل لحملات Google Ads و TikTok و Snapchat في دبي",
    ],
    popularPlatforms: ["Next.js 16", "Shopify", "WordPress Pro", "Landing Pages"],
    seoKeywords: ["شركة تصميم مواقع في دبي", "تصميم متجر إلكتروني دبي", "تطوير مواقع دبي"],
  },
  {
    id: "zone-abudhabi",
    emirateName: "أبوظبي والعين",
    englishName: "Abu Dhabi & Al Ain",
    businessEnvironment:
      "مركز المؤسسات الكبرى، الشركات الخدمية والهندسية، المراكز الطبية، والمشاريع التجارية عالية الموثوقية.",
    whatWeBuildHere: [
      "تصميم مواقع شركات ومؤسسات احترافية بووردبريس و Next.js تعكس الرصانة والقوة المؤسسية",
      "بناء مواقع العيادات والمجمعات الطبية ومكاتب المحاماة والاستشارات في أبوظبي والعين",
      "إنشاء متاجر إلكترونية متكاملة مربوطة ببوابات الدفع والشحن المعتمدة في العاصمة",
    ],
    popularPlatforms: ["WordPress & Elementor Pro", "Next.js", "Salla", "Shopify"],
    seoKeywords: ["شركة تصميم مواقع في أبوظبي", "تصميم مواقع شركات أبوظبي", "تصميم مواقع العين"],
  },
  {
    id: "zone-sharjah",
    emirateName: "الشارقة وعجمان",
    englishName: "Sharjah & Ajman",
    businessEnvironment:
      "القلب الصناعي والتجاري والتعليمي النشط، ومركز آلاف المصانع، شركات التوريد، والتجار عبر الإنترنت.",
    whatWeBuildHere: [
      "تصميم مواقع كتالوجات المصانع وشركات المقاولات والتوريدات B2B المتوافقة مع السيو",
      "تجهيز متاجر سلة وإيزي أوردر وشوبيفاي للتجار وأصحاب المشاريع لتغطية كافة الإمارات",
      "بناء صفحات هبوط ترويجية للخدمات المنزلية، التعليمية، والتجارية",
    ],
    popularPlatforms: ["WordPress Pro", "Salla (سلة)", "EasyOrder (إيزي أوردر)", "Shopify"],
    seoKeywords: ["شركة تصميم مواقع في الشارقة", "تصميم مواقع عجمان", "تصميم متجر إلكتروني الشارقة"],
  },
  {
    id: "zone-northern-emirates",
    emirateName: "رأس الخيمة، الفجيرة، وأم القيوين",
    englishName: "Ras Al Khaimah, Fujairah & UAQ",
    businessEnvironment:
      "نمو سياحي وعقاري ولوجستي متسارع مع فرص ذهبية للشركات للسيطرة على نتائج البحث المحلية والوطنية.",
    whatWeBuildHere: [
      "مواقع المنتجعات، الأنشطة السياحية، والشركات العقارية والخدمية في رأس الخيمة والفجيرة",
      "مواقع شركات الشحن والخدمات اللوجستية والتجارية في المناطق الحرة",
      "متاجر إلكترونية تمكن تجار الإمارات الشمالية من البيع والشحن لدبي وأبوظبي وكل الدولة",
    ],
    popularPlatforms: ["WordPress Pro", "Next.js", "Salla", "EasyOrder"],
    seoKeywords: ["تصميم مواقع رأس الخيمة", "شركة تصميم مواقع الفجيرة", "تصميم مواقع الإمارات"],
  },
];

const EXECUTION_STEPS: ExecutionStep[] = [
  {
    step: "01",
    title: "جلسة الاستشارة وتحديد المنصة الأنسب",
    timeframe: "اليوم الأول",
    details:
      "نتواصل معك عبر واتساب أو اجتماع أونلاين لفهم نشاطك التجاري في الإمارات، جمهورك المستهدف، وميزانيتك، ونرشح لك المنصة المثالية (Next.js أو WordPress أو Shopify أو سلة أو إيزي أوردر أو صفحة هبوط).",
    clientReceives: ["خطة عمل واضحة", "تحديد المنصة والمواصفات", "جدول زمني دقيق للتسليم"],
  },
  {
    step: "02",
    title: "دراسة السوق وهيكلة الصفحات والكلمات المفتاحية",
    timeframe: "اليوم 2 - 3",
    details:
      "نحلل طبيعة البحث في مجالك داخل الإمارات لنبني هيكلة صفحات وأقسام تتفوق في جوجل وتجذب العميل المستهدف، مع تجهيز المحتوى التسويقي والبيعي.",
    clientReceives: ["خريطة صفحات الموقع أو المتجر", "توزيع الكلمات المفتاحية للسيو", "صياغة العناوين البيعية"],
  },
  {
    step: "03",
    title: "تصميم الواجهات وتجربة المستخدم (UI/UX)",
    timeframe: "اليوم 4 - 7",
    details:
      "نصمم واجهة عصرية فخمة متناسقة مع ألوان علامتك التجارية، مع التركيز الكامل على سهولة التصفح والشراء من الجوال (Mobile-First Design).",
    clientReceives: ["تصميم احترافي متجاوب مع كل الشاشات", "توزيع مدروس لأزرار الشراء والواتساب"],
  },
  {
    step: "04",
    title: "التطوير البرمجي وربط الدفع والشحن والبيكسل",
    timeframe: "اليوم 7 - 14",
    details:
      "ننفذ البرمجة أو تخصيص المتجر بأعلى جودة، ونربط بوابات الدفع (تابي، تمارا، Stripe، Paymob)، شركات الشحن، وأكواد التتبع الإعلاني والواتساب.",
    clientReceives: ["موقع أو متجر متكامل وجاهز للعمل", "ربط كامل للدفع والشحن والنماذج"],
  },
  {
    step: "05",
    title: "تحسين السرعة (PageSpeed 99%) والسيو التقني",
    timeframe: "قبل التسليم",
    details:
      "نضغط كافة الصور والفيديوهات، نفعل أكواد Schema.org، نضبط الميتا تايتل والـ Canonical، ونختبر سرعة الموقع على Google PageSpeed Insights.",
    clientReceives: ["تقرير سرعة وأداء باللون الأخضر", "ربط Google Search Console و Analytics"],
  },
  {
    step: "06",
    title: "الإطلاق الرسمي، التسليم، والتدريب والدعم",
    timeframe: "يوم الإطلاق وما بعده",
    details:
      "نطلق الموقع على الدومين الرسمي مع شهادة الحماية SSL، ونسلمك كافة بيانات الدخول مع فيديو تدريبي مبسط لإدارة موقعك أو متجرك بمرونة، مع دعم فني مستمر.",
    clientReceives: ["ملكية كاملة 100% للموقع والحسابات", "شرح فيديو للوحة التحكم", "دعم فني مجاني"],
  },
];

const PRICING_PACKAGES_AED: PricingPackageAED[] = [
  {
    id: "pkg-landing-easyorder",
    name: "باقة صفحات الهبوط ومتاجر البيع السريع (Landing Page / EasyOrder)",
    platformTag: "Landing Pages & EasyOrder COD",
    priceAED: "1,650",
    subtitle: "الحل الأسرع والأقوى لإطلاق حملاتك الإعلانية على تيك توك وسناب شات وجوجل في الإمارات ومضاعفة الطلبات اليومية.",
    isFeatured: false,
    features: [
      "تصميم صفحة هبوط إعلانية عالية التحويل أو متجر إيزي أوردر (EasyOrder) متكامل",
      "تصميم مخصص للجوال يفتح في أقل من 0.6 ثانية لمنع تسرب الزوار من الإعلانات",
      "نموذج شراء مباشر من خطوة واحدة (الدفع عند الاستلام COD) أو تحويل فوري للواتساب",
      "إعداد عروض الكميات والخصومات التدرجية (Bundles & Upsells) لرفع قيمة الطلب",
      "ربط كامل لبيكسل TikTok و Snapchat و Meta و Google Ads و Google Sheets",
      "كتابة وتنسيق المحتوى البيعي والبنرات الاحترافية للمنتج أو الخدمة",
    ],
    seoAndSpeedIncluded: [
      "سرعة فائقة 98+ على Google PageSpeed لرفع جودة الإعلان وتقليل تكلفة النقرة",
      "ضبط كامل للـ Meta Tags و OpenGraph للمشاركة الاحترافية",
    ],
    bonusIncluded: "دعم فني مجاني لمدة شهرين + تعديلات مرنة لتحسين أداء الحملة",
    whatsappOrderMsg: "مرحباً شركة Unique، أرغب في طلب (باقة صفحات الهبوط / متجر إيزي أوردر) بسعر 1,650 درهم.",
  },
  {
    id: "pkg-wordpress-salla",
    name: "باقة مواقع الشركات ومتاجر سلة (WordPress Pro / Salla)",
    platformTag: "WordPress & Elementor Pro / Salla Store",
    priceAED: "3,400",
    subtitle: "مثالية للشركات الخدمية والعيادات والمقاولات (ووردبريس) أو التجار الباحثين عن متجر سلة مخصص بالكامل في الإمارات.",
    isFeatured: false,
    features: [
      "تصميم موقع شركة متكامل بـ WordPress & Elementor Pro (حتى 8 صفحات) أو متجر سلة بتخصيص CSS/JS حصري",
      "تصميم مخصص 100% يعكس هوية شركتك بدون قوالب مكررة مع دعم اللغتين العربية والإنجليزية",
      "لوحة تحكم سهلة جداً لإضافة الخدمات، المنتجات، أو مقالات المدونة بدون خبرة تقنية",
      "تفعيل بوابات الدفع في الإمارات (Tabby, Tamara, Stripe, Paymob) وشركات الشحن للمتاجر",
      "ربط مباشر مع واتساب للأعمال، خرائط جوجل، ونماذج طلب عروض الأسعار أو الحجز",
      "شهادة أمان SSL وحماية Cloudflare CDN وإعداد البريد الإلكتروني الرسمي للشركة",
    ],
    seoAndSpeedIncluded: [
      "تهيئة كاملة للسيو الداخلي (Meta Title, Description, Canonical, Sitemap XML)",
      "ضغط الصور وتهيئة الكاش لتحقيق سرعة 95+ على الهواتف وسطح المكتب",
    ],
    bonusIncluded: "دعم فني مجاني لمدة 3 أشهر + فيديو شرح كامل لإدارة الموقع أو المتجر",
    whatsappOrderMsg: "مرحباً شركة Unique، أرغب في طلب (باقة موقع ووردبريس / متجر سلة الاحترافية) بسعر 3,400 درهم.",
  },
  {
    id: "pkg-nextjs-shopify-pro",
    name: "باقة القمة: مواقع Next.js المخصصة ومتاجر شوبيفاي (Next.js / Shopify Pro)",
    platformTag: "Next.js 16 Custom / Full Shopify Store + Advanced SEO",
    priceAED: "5,900",
    subtitle: "الاختيار الأول للشركات الطموحة والبراندات في دبي وأبوظبي الباحثة عن أقصى سرعة (99/100)، فخامة التصميم، وتصدر نتائج جوجل.",
    isFeatured: true,
    features: [
      "برمجة موقع مخصص بـ Next.js 16 + TypeScript + Sanity CMS أو بناء متجر Shopify احترافي متكامل",
      "حتى 16 صفحة مخصصة تشمل صفحات الخدمات التفصيلية، المشاريع، المدونة، وصفحات مدن الإمارات",
      "دعم تعدد اللغات الاحترافي (عربي + إنجليزي مع قابلية التوسع حتى 7 لغات بـ next-intl)",
      "تصميم UI/UX فاخر مع سلايدرات تفاعلية، فيديوهات مضغوطة، وتجربة مستخدم عالمية",
      "ربط شامل لبوابات الدفع والتقسيط (Tabby, Tamara, Stripe UAE, Apple Pay) وشركات الشحن",
      "تحديث فوري للمقالات والمنتجات (Instant Revalidation) وربط ذكي مع واتساب المبيعات",
    ],
    seoAndSpeedIncluded: [
      "سرعة مضمونة 98 - 100 / 100 على Google PageSpeed واجتياز Core Web Vitals بالكامل",
      "بنية سيو تقني متقدمة: Dynamic Canonicals + Schema.org JSON-LD + فحص Screaming Frog شامل",
      "تهيئة المحتوى والترويسات (H1-H3) لتصدر الكلمات المفتاحية التنافسية في الإمارات",
    ],
    bonusIncluded: "دعم فني مجاني لمدة 6 أشهر + ملكية كاملة 100% للكود المصدري والحسابات",
    whatsappOrderMsg: "مرحباً شركة Unique، أرغب في حجز (باقة القمة: موقع Next.js / متجر شوبيفاي المتكامل) بسعر 5,900 درهم.",
  },
];

const CLIENT_CASE_STUDIES: ClientCaseStudy[] = [
  {
    id: "study-nextjs-tourism",
    category: "منصة سياحة وحجوزات دولية",
    platformUsed: "Next.js 16 + Sanity CMS + 7 Languages",
    title: "تطوير منصة سياحية متعددة اللغات بسرعة 99/100",
    summary:
      "بناء موقع سياحي متكامل يستهدف السياح القادمين من أوروبا وآسيا والخليج بـ 7 لغات مع نظام عرض باقات وحجز فوري عبر واتساب وأداء قياسي في محركات البحث.",
    results: [
      { metricName: "سرعة Google PageSpeed", value: "99/100", detail: "تحميل في 0.7 ثانية على الجوال" },
      { metricName: "الزيارات العضوية من جوجل", value: "+310%", detail: "نمو مستمر بفضل السيو متعدد اللغات" },
      { metricName: "معدل طلبات الحجز", value: "+245%", detail: "عبر مسار الحجز السريع والواتساب" },
    ],
  },
  {
    id: "study-shopify-salla",
    category: "متجر عطور ومنتجات فاخرة في الإمارات",
    platformUsed: "Shopify + Tabby & Tamara + Custom UI",
    title: "تصميم متجر إلكتروني فاخر وربط التقسيط والشحن الآلي",
    summary:
      "تصميم واجهة متجر فاخرة باللون الأسود والذهبي، مع تفعيل الدفع عبر تابي وتمارا و Apple Pay، وإضافة عروض الباقات وتهيئة سيو المنتجات لتصدر البحث التجاري.",
    results: [
      { metricName: "متوسط قيمة السلة (AOV)", value: "+65%", detail: "بعد تفعيل عروض الباقات وتابي وتمارا" },
      { metricName: "معدل التحويل (Conversion Rate)", value: "4.8%", detail: "مقارنة بـ 1.6% في المتجر القديم" },
      { metricName: "سرعة تصفح المنتجات", value: "96/100", detail: "تصفح سلس بدون أي بطء" },
    ],
  },
  {
    id: "study-wordpress-easyorder",
    category: "مواقع شركات + متاجر إيزي أوردر وصفحات هبوط",
    platformUsed: "WordPress Pro & EasyOrder Landing Funnels",
    title: "مضاعفة مبيعات الحملات الإعلانية وتصدر البحث المحلي",
    summary:
      "إعادة تصميم موقع الشركة بووردبريس سريع متوافق مع السيو، مع بناء صفحات هبوط ومتجر إيزي أوردر لحملات تيك توك وسناب شات وجوجل في الإمارات.",
    results: [
      { metricName: "تكلفة الطلب الإعلاني (CPA)", value: "-48%", detail: "انخفاض تكلفة الحملة بفضل سرعة الصفحة" },
      { metricName: "درجة السيو التقني", value: "100/100", detail: "أرشفة كاملة وتصدر في الكلمات الخدمية" },
      { metricName: "طلبات الواتساب والـ COD", value: "3.5X", detail: "مضاعفة الطلبات اليومية الفعلية" },
    ],
  },
];

const CLIENT_FAQS: ClientFaqItem[] = [
  {
    id: "cfaq-1",
    category: "اختيار المنصة",
    question: "كيف أختار بين ووردبريس و Next.js لموقع شركتي في الإمارات؟",
    answer:
      "إذا كنت تبحث عن موقع تعريفي أو خدمي احترافي بلوحة تحكم تقليدية مألوفة وتكلفة اقتصادية وسرعة ممتازة، فإن تصميم ووردبريس المخصص (WordPress & Elementor Pro) خيار رائع جداً. أما إذا كنت تطمح لأقصى سرعة ممكنة عالمياً (99/100)، أمان مطلق، تعدد لغات متقدم (حتى 7 لغات)، وتفوق كاسح في السيو والمنصات المخصصة، فإن برمجة Next.js مع Sanity CMS هي الخيار الأقوى على الإطلاق.",
  },
  {
    id: "cfaq-2",
    category: "المتاجر الإلكترونية",
    question: "أيهما أفضل لمتجري في الإمارات: شوبيفاي (Shopify) أم سلة (Salla) أم إيزي أوردر (EasyOrder)؟",
    answer:
      "يعتمد ذلك على نموذج مبيعاتك: شوبيفاي (Shopify) هو الأفضل للبراندات الطموحة التي تستهدف الإمارات والعالم وتريد توسعاً غير محدود. منصة سلة (Salla) ممتازة جداً للتجار في الإمارات والخليج الذين يفضلون لوحة تحكم عربية جاهزة الربط مع شركات الشحن والدفع الخليجية. أما إيزي أوردر (EasyOrder) فهو الخيار رقم 1 إذا كنت تعتمد على إعلانات تيك توك وسناب شات والبيع بنظام الدفع عند الاستلام (COD) عبر نموذج شراء فوري داخل نفس صفحة المنتج.",
  },
  {
    id: "cfaq-3",
    category: "صفحات الهبوط",
    question: "لماذا أحتاج إلى تصميم صفحة هبوط (Landing Page) مخصصة لحملاتي الإعلانية؟",
    answer:
      "عندما يضغط العميل على إعلانك في جوجل أو سناب شات أو تيك توك، فإنه يبحث عن عرض محدد وسريع. إرساله للصفحة الرئيسية العادية يشتت انتباهه ويضيع ميزانية الإعلان. صفحة الهبوط المصممة في Unique تفتح في أقل من 0.6 ثانية، وتركز 100% على إقناع الزائر بالعرض ودفعه للشراء أو مراسلتك على واتساب فوراً، مما يضاعف مبيعاتك بنفس ميزانية الإعلان.",
  },
  {
    id: "cfaq-4",
    category: "السيو وتصدر جوجل",
    question: "هل جميع المواقع والمتاجر التي تصممونها متوافقة مع السيو (SEO) في الإمارات؟",
    answer:
      "نعم بنسبة 100%. نحن وكالة متخصصة في السيو وتطوير المواقع معاً؛ لذلك كل موقع أو متجر نصممه يخرج مضبوطاً بالكامل من حيث Meta Title و Meta Description، الروابط القانونية Canonical السليمة، البيانات المنظمة Schema.org JSON-LD، ترويسات H1-H3، خريطة الموقع XML، وسرعة Core Web Vitals باللون الأخضر ليتصدر نتائج جوجل الإمارات.",
  },
  {
    id: "cfaq-5",
    category: "الدفع والشحن في الإمارات",
    question: "هل تقومون بربط تابي (Tabby) وتمارا (Tamara) وبوابات الدفع وشركات الشحن؟",
    answer:
      "بكل تأكيد. نتولى الربط التقني الكامل لمتجرك مع بوابات الدفع في الإمارات مثل Stripe UAE، Paymob، Telr، Network International، Apple Pay، بالإضافة إلى تفعيل التقسيط عبر تابي وتمارا، والربط مع شركات الشحن مثل أرامكس Aramex، DHL، بريد الإمارات، و Quiqup.",
  },
  {
    id: "cfaq-6",
    category: "الأسعار والملكية",
    question: "هل الأسعار المعلنة شاملة وهل أمتلك الموقع والمتجر بالكامل؟",
    answer:
      "نعم، أسعارنا واضحة وشفافة وتدفع لمرة واحدة مقابل التصميم والتطوير بدون أي رسوم خفية أو احتكار. كما أن الدومين، الاستضافة، الكود المصدري، وحسابات المتجر تكون مسجلة باسمك وتحت ملكيتك الكاملة 100% من اليوم الأول.",
  },
  {
    id: "cfaq-7",
    category: "التواصل والدعم",
    question: "كيف يمكنني البدء معكم أو طلب استشارة مجانية لمشروعي؟",
    answer:
      "يمكنك الضغط على أي زر واتساب في هذه الصفحة للتواصل المباشر مع فريقنا على الرقم 01270506511، وسنقوم بمراجعة متطلبات مشروعك وتقديم استشارة مجانية وخطة تنفيذ واضحة فوراً.",
  },
];

// ============================================================================
// 5. JSON-LD STRUCTURED DATA SCHEMAS (FOR GOOGLE UAE RICH RESULTS)
// ============================================================================
const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://marketing-beta-gold-30.vercel.app/uae-web-design#agency",
    name: "Unique Digital Agency - شركة تصميم مواقع إلكترونية في الإمارات",
    alternateName: "يونيك لتصميم المواقع والمتاجر الإلكترونية والسيو في الإمارات",
    url: "https://marketing-beta-gold-30.vercel.app/uae-web-design",
    telephone: "+201270506511",
    description:
      "شركة رائدة في تصميم وتطوير المواقع الإلكترونية في الإمارات (دبي، أبوظبي، الشارقة): تصميم مواقع ووردبريس، برمجة مواقع Next.js، تصميم صفحات هبوط، وإنشاء متاجر شوبيفاي وسلة وإيزي أوردر متوافقة مع السيو.",
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ajman" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Fujairah" },
      { "@type": "City", name: "Umm Al Quwain" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    priceRange: "AED 1500 - AED 15000",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+201270506511",
      contactType: "sales and customer support",
      areaServed: "AE",
      availableLanguage: ["Arabic", "English"],
    },
    knowsAbout: [
      "تصميم مواقع إلكترونية في الإمارات",
      "تصميم مواقع ووردبريس دبي",
      "برمجة مواقع Next.js الإمارات",
      "تصميم صفحات هبوط",
      "تصميم متاجر شوبيفاي Shopify",
      "تصميم متاجر سلة Salla",
      "تصميم متاجر إيزي أوردر EasyOrder",
      "تحسين محركات البحث SEO",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "تصميم وتطوير المواقع والمتاجر الإلكترونية في الإمارات",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://marketing-beta-gold-30.vercel.app",
      telephone: "+201270506511",
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات وباقات تصميم المواقع والمتاجر في الإمارات",
      itemListElement: CORE_PLATFORM_SERVICES.map((srv) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: srv.title,
          description: srv.summary,
        },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CLIENT_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
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
        name: "شركة تصميم مواقع إلكترونية في الإمارات",
        item: "https://marketing-beta-gold-30.vercel.app/uae-web-design",
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
// 7. MAIN PAGE COMPONENT (UAE WEB DESIGN & E-COMMERCE AGENCY PAGE)
// ============================================================================
export default function UaeWebDesignPage() {
  const mainWhatsAppLink = getWhatsAppUrl(
    "مرحباً شركة Unique، أرغب في الاستفسار عن خدمات تصميم المواقع والمتاجر الإلكترونية في الإمارات."
  );

  return (
    <main
      dir="rtl"
      lang="ar"
      className="relative min-h-screen bg-[#000000] text-white selection:bg-blue-600 selection:text-white overflow-x-hidden"
    >
      {/* Structured Data JSON-LD for Google UAE Search & Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />

      {/* Ambient Background Glow Effects (Blue, Cyan, Gold - Zero Red) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-48 -right-48 h-[520px] w-[520px] rounded-full bg-blue-600/12 blur-[150px]" />
        <div className="absolute top-1/3 -left-48 h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />
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
        <span className="hidden sm:inline">تواصل واتساب مباشر:</span>
        <span dir="ltr" className="font-mono text-sm">
          {WHATSAPP_NUMBER_DISPLAY}
        </span>
      </a>

      {/* =====================================================================
          SECTION 1: TOP STICKY QUICK-JUMP NAVIGATION BAR
      ===================================================================== */}
      <nav
        aria-label="التنقل السريع داخل الصفحة"
        className="sticky top-0 z-40 border-b border-white/10 bg-[#000000]/85 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 font-black text-white shadow-lg shadow-blue-600/25">
              U
            </span>
            <div>
              <p className="text-xs font-bold text-cyan-400">UNIQUE DIGITAL AGENCY</p>
              <p className="text-[11px] text-slate-400">
                شركة تصميم مواقع ومتاجر إلكترونية في الإمارات
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-5 text-xs font-bold text-slate-300 lg:flex">
            <a href="#core-services" className="transition-colors hover:text-cyan-400">
              خدماتنا والمنصات
            </a>
            <a href="#ecommerce-platforms" className="transition-colors hover:text-cyan-400">
              متاجر شوبيفاي وسلة وإيزي أوردر
            </a>
            <a href="#landing-pages-section" className="transition-colors hover:text-cyan-400">
              صفحات الهبوط الإعلانية
            </a>
            <a href="#platform-comparison" className="transition-colors hover:text-cyan-400">
              مقارنة المنصات
            </a>
            <a href="#emirates-zones" className="transition-colors hover:text-cyan-400">
              تغطية مدن الإمارات
            </a>
            <a href="#pricing-section" className="transition-colors hover:text-amber-400">
              الباقات والأسعار (AED)
            </a>
            <a href="#faq-section" className="transition-colors hover:text-cyan-400">
              الأسئلة الشائعة
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={mainWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-l from-blue-600 to-cyan-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] hover:shadow-cyan-500/30"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>واتساب:</span>
              <span dir="ltr" className="font-mono">
                {WHATSAPP_NUMBER_DISPLAY}
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* =====================================================================
          SECTION 2: HERO SECTION WITH VIDEO & PLATFORM PILLS
      ===================================================================== */}
      <header className="relative z-10 overflow-hidden border-b border-white/10 pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Background Video Layer with Dark Gradient Overlay */}
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
          {/* Breadcrumb Navigation for SEO */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-xs text-slate-400"
          >
            <Link href="/" className="transition-colors hover:text-cyan-400">
              الرئيسية
            </Link>
            <ChevronLeft className="h-3.5 w-3.5 text-slate-600" />
            <span className="text-slate-300">خدمات الإمارات</span>
            <ChevronLeft className="h-3.5 w-3.5 text-slate-600" />
            <span className="font-bold text-cyan-400">
              شركة تصميم مواقع إلكترونية في الإمارات
            </span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Right Column: Primary Commercial Headline & CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300">
                <Award className="h-4 w-4 text-amber-400" />
                <span>
                  الشريك التقني والتسويقي الأول للشركات والمتاجر في دبي وأبوظبي والشارقة
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-black leading-[1.22] tracking-tight text-white sm:text-5xl lg:text-6xl">
                شركة تصميم مواقع إلكترونية في الإمارات{" "}
                <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
                  تصنع حضورك وتضاعف مبيعاتك
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
                في وكالة <strong className="font-bold text-white">UNIQUE Digital Agency</strong>،
                نصمم ونبرمج مواقع إلكترونية ومتاجر احترافية فائقة السرعة متوافقة
                100% مع محركات البحث <strong className="text-cyan-300">(SEO)</strong>.
                سواء كنت تبحث عن{" "}
                <strong className="text-white">
                  موقع شركة بووردبريس، منصة مخصصة بـ Next.js، صفحة هبوط إعلانية، أو
                  متجر إلكتروني على شوبيفاي (Shopify) أو سلة (Salla) أو إيزي أوردر
                  (EasyOrder)
                </strong>
                ؛ نحن نسلمك مشروعاً متكاملاً يفتح في أجزاء من الثانية ويحول الزوار
                إلى عملاء دائمين.
              </p>

              {/* 6 Platform Badges Grid */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { title: "مواقع ووردبريس", sub: "WordPress & Elementor Pro" },
                  { title: "برمجة Next.js 16", sub: "Custom SSR & Sanity CMS" },
                  { title: "صفحات هبوط إعلانية", sub: "High-CRO Landing Pages" },
                  { title: "متاجر شوبيفاي", sub: "Shopify & Headless Stores" },
                  { title: "متاجر سلة", sub: "Salla Custom CSS/JS" },
                  { title: "متاجر إيزي أوردر", sub: "EasyOrder COD Funnels" },
                ].map((plat) => (
                  <div
                    key={plat.title}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-cyan-400/40"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400" />
                      <span className="text-sm font-bold text-white">
                        {plat.title}
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] font-mono text-slate-400">
                      {plat.sub}
                    </p>
                  </div>
                ))}
              </div>

              {/* Primary WhatsApp CTA & Secondary Explore CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={mainWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-l from-blue-600 via-blue-500 to-cyan-500 px-8 py-4 text-base font-black text-white shadow-[0_0_35px_rgba(37,99,235,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(6,182,212,0.5)]"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>اطلب موقعك الآن عبر واتساب:</span>
                  <span dir="ltr" className="font-mono">
                    {WHATSAPP_NUMBER_DISPLAY}
                  </span>
                </a>
                <a
                  href="#core-services"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-slate-200 backdrop-blur-md transition-all hover:border-cyan-400/50 hover:bg-white/10 hover:text-white"
                >
                  <span>استكشف خدماتنا والمنصات</span>
                  <ArrowLeft className="h-5 w-5 text-cyan-400" />
                </a>
              </div>
            </div>

            {/* Left Column: Performance, Platforms & UAE Readiness Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-blue-500/30 bg-gradient-to-b from-[#0b1329]/95 to-[#050811]/95 p-6 shadow-[0_0_60px_rgba(37,99,235,0.2)] backdrop-blur-2xl sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-cyan-400" />
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1 text-[11px] font-mono text-cyan-300 border border-white/10">
                    <Lock className="h-3 w-3 text-emerald-400" />
                    <span>UNIQUE UAE WEB STANDARDS</span>
                  </div>
                </div>

                {/* PageSpeed 4-Circle Scoreboard */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-slate-300">
                      معايير الأداء والسيو المضمونة في مشاريعنا:
                    </p>
                    <span className="rounded-full bg-emerald-500/15 px-3 py-0.5 text-[11px] font-bold text-emerald-400 border border-emerald-500/30">
                      Core Web Vitals: 99%
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      { score: "99", title: "سرعة الأداء", en: "Performance" },
                      { score: "100", title: "تهيئة السيو", en: "SEO Ready" },
                      { score: "100", title: "أفضل المعايير", en: "Best Practices" },
                      { score: "99", title: "توافق الجوال", en: "Mobile UX" },
                    ].map((gauge) => (
                      <div
                        key={gauge.en}
                        className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/25 bg-black/50 p-3 text-center"
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-emerald-400 bg-emerald-500/10 text-lg font-black text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                          {gauge.score}
                        </div>
                        <p className="mt-2 text-xs font-bold text-white">
                          {gauge.title}
                        </p>
                        <p className="text-[10px] text-slate-400">{gauge.en}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* UAE Ecosystem Ready Box */}
                <div className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="text-xs font-bold text-amber-300">
                    جاهزية تامة للسوق الإماراتي والخليجي:
                  </p>
                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                      <span className="block font-bold text-cyan-300">بوابات الدفع</span>
                      <span className="text-[11px] text-slate-400">
                        Tabby, Tamara, Stripe, Paymob, Apple Pay
                      </span>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                      <span className="block font-bold text-cyan-300">شركات الشحن</span>
                      <span className="text-[11px] text-slate-400">
                        Aramex, DHL, Emirates Post, Quiqup
                      </span>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                      <span className="block font-bold text-cyan-300">ربط الإعلانات</span>
                      <span className="text-[11px] text-slate-400">
                        TikTok, Snap, Meta Pixel & CAPI, Google Ads
                      </span>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
                      <span className="block font-bold text-cyan-300">تعدد اللغات</span>
                      <span className="text-[11px] text-slate-400">
                        عربي + إنجليزي (وحتى 7 لغات دولية)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Strip inside Hero Card */}
                <div className="mt-5 flex items-center justify-between rounded-2xl border border-blue-500/30 bg-blue-950/30 px-4 py-3">
                  <div>
                    <p className="text-[11px] text-slate-300">
                      استشارة مجانية وتحديد المنصة الأنسب لمشروعك
                    </p>
                    <p dir="ltr" className="font-mono text-sm font-black text-cyan-300">
                      +20 12 70506511
                    </p>
                  </div>
                  <a
                    href={mainWhatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-emerald-500 px-4 py-2 text-xs font-black text-black transition-transform hover:scale-105"
                  >
                    راسلنا الآن
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Card Hero Metrics Row */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat) => {
              const borderStyles = {
                emerald: "border-emerald-500/30 hover:border-emerald-400/60",
                cyan: "border-cyan-500/30 hover:border-cyan-400/60",
                blue: "border-blue-500/30 hover:border-blue-400/60",
                amber: "border-amber-500/30 hover:border-amber-400/60",
              }[stat.accent];

              const valueStyles = {
                emerald: "text-emerald-400",
                cyan: "text-cyan-400",
                blue: "text-blue-400",
                amber: "text-amber-400",
              }[stat.accent];

              return (
                <div
                  key={stat.id}
                  className={`rounded-2xl border bg-[#060b18]/90 p-6 transition-all duration-300 ${borderStyles}`}
                >
                  <p className={`text-3xl font-black sm:text-4xl ${valueStyles}`}>
                    {stat.number}
                  </p>
                  <h2 className="mt-2 text-base font-bold text-white">
                    {stat.title}
                  </h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </header>

      {/* =====================================================================
          SECTION 3: WHY CHOOSE UNIQUE DIGITAL AGENCY IN THE UAE
      ===================================================================== */}
      <section className="relative z-10 border-b border-white/10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="القيمة الحقيقية التي نقدمها لعملائنا في دولة الإمارات"
            title="لماذا تختار الشركات والمتاجر في الإمارات"
            highlightedWord="وكالة Unique لتصميم مواقعها؟"
            subtitle="نحن لا نصمم مجرد واجهة شكلية، بل نبني لك منظومة بيع وتسويق متكاملة تجمع بين السرعة الفائقة، التوافق الكامل مع محركات البحث جوجل، وسهولة الشراء والتواصل من الهواتف الذكية."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {WHY_UNIQUE_ADVANTAGES.map((adv, idx) => (
              <div
                key={adv.id}
                className="flex flex-col justify-between rounded-3xl border border-white/12 bg-gradient-to-b from-[#091326] to-[#040812] p-7 shadow-xl transition-all hover:border-cyan-400/50"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600/20 font-mono text-base font-black text-cyan-300 border border-blue-500/30">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {adv.subtitle}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-black text-white">
                    {adv.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {adv.description}
                  </p>
                </div>

                <div className="mt-6 rounded-xl border border-emerald-500/25 bg-emerald-950/15 p-3.5 text-xs font-bold text-emerald-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{adv.measurableBenefit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: CORE 6 SERVICES & PLATFORMS (WORDPRESS, NEXT.JS, LANDING PAGES, SHOPIFY, SALLA, EASYORDER)
      ===================================================================== */}
      <section
        id="core-services"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="خدماتنا المتكاملة في تطوير الويب والتجارة الإلكترونية"
            title="تصميم مواقع ووردبريس و Next.js وصفحات هبوط"
            highlightedWord="ومتاجر شوبيفاي وسلة وإيزي أوردر في الإمارات"
            subtitle="نقدم لك الحل التقني والتسويقي المفصل بدقة على مقاس مشروعك؛ استعرض تفاصيل كل منصة ومميزاتها واختر الخدمة التي تناسب أهدافك التجارية في الإمارات."
          />

          <div className="space-y-12">
            {CORE_PLATFORM_SERVICES.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24 rounded-3xl border border-white/15 bg-gradient-to-b from-[#081124] to-[#03060d] p-6 shadow-2xl sm:p-10"
              >
                {/* Service Top Header */}
                <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-7 lg:flex-row lg:items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-300">
                      <span>الخدمة الأساسية 0{index + 1}</span>
                      <span>•</span>
                      <span>{service.badge}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-blue-400">
                      {service.englishSubtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-2.5">
                      <p className="text-[11px] text-slate-400">مدة التنفيذ</p>
                      <p className="text-xs font-black text-emerald-400">
                        {service.deliveryTime}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/60 px-4 py-2.5">
                      <p className="text-[11px] text-slate-400">تبدأ التكلفة من</p>
                      <p className="text-xs font-black text-amber-300">
                        {service.startingPriceAED}
                      </p>
                    </div>
                    <a
                      href={getWhatsAppUrl(service.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-l from-blue-600 to-cyan-500 px-5 py-3.5 text-xs font-black text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02]"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>اطلب هذه الخدمة عبر واتساب</span>
                    </a>
                  </div>
                </div>

                {/* Service Body Content */}
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
                  {/* Right 7 Cols: Description & Key Deliverables */}
                  <div className="lg:col-span-7">
                    <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                      {service.summary}
                    </p>

                    <div className="mt-5 rounded-2xl border border-blue-500/25 bg-blue-950/20 p-4">
                      <p className="text-xs font-bold text-cyan-300 mb-1">
                        لماذا يفضل أصحاب الأعمال في الإمارات هذه الخدمة؟
                      </p>
                      <p className="text-xs leading-relaxed text-slate-300">
                        {service.whyBusinessesChooseIt}
                      </p>
                    </div>

                    <h4 className="mt-6 text-sm font-black text-white">
                      ماذا تستلم فعلياً عند طلب {service.title}؟
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {service.keyDeliverables.map((item, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-black/40 p-3.5 text-xs text-slate-200"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Left 5 Cols: Ideal Sectors & Technical Specs */}
                  <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/10 bg-black/50 p-6">
                    <div>
                      <h4 className="text-sm font-black text-amber-300">
                        القطاعات والمشاريع الأنسب لهذه المنصة:
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {service.idealSectors.map((sec) => (
                          <span
                            key={sec}
                            className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white"
                          >
                            {sec}
                          </span>
                        ))}
                      </div>

                      <h4 className="mt-6 text-sm font-black text-cyan-300">
                        المواصفات والأدوات التقنية المعتمدة:
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {service.technicalSpecs.map((spec) => (
                          <span
                            key={spec}
                            className="rounded-lg border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-mono text-cyan-200"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 border-t border-white/10 pt-5">
                      <p className="text-xs text-slate-300 mb-3">
                        تحدث مباشرة مع مهندس المشاريع لمناقشة تفاصيل موقعك:
                      </p>
                      <a
                        href={getWhatsAppUrl(service.whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 py-3 text-xs font-black text-emerald-300 transition-colors hover:bg-emerald-500 hover:text-black"
                      >
                        <PhoneCall className="h-4 w-4" />
                        <span>استشارة مجانية عبر واتساب ({WHATSAPP_NUMBER_DISPLAY})</span>
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
          SECTION 5: E-COMMERCE PLATFORMS DEEP DIVE (SHOPIFY, SALLA, EASYORDER)
      ===================================================================== */}
      <section
        id="ecommerce-platforms"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="حلول التجارة الإلكترونية المتكاملة في الإمارات والخليج"
            title="إنشاء وتصميم المتاجر الإلكترونية:"
            highlightedWord="شوبيفاي (Shopify)، سلة (Salla)، وإيزي أوردر (EasyOrder)"
            subtitle="نساعدك على إطلاق متجرك الإلكتروني الجاهز للبيع الفوري في الإمارات مع ربط بوابات الدفع بالتقسيط (تابي وتمارا)، الدفع الإلكتروني، الدفع عند الاستلام، وشركات الشحن المحلية والدولية."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Shopify Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-[#071a18] to-[#03080c] p-7">
              <div>
                <span className="inline-block rounded-full bg-emerald-500/15 px-3.5 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30">
                  Shopify & Shopify Plus
                </span>
                <h3 className="mt-4 text-2xl font-black text-white">
                  متاجر شوبيفاي للبراندات والتوسع العالمي
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  المنصة رقم 1 عالمياً للعلامات التجارية في دبي وأبوظبي. نصمم لك ثيماً
                  فخماً مخصصاً بالكامل، أو نبني واجهة Headless Shopify بـ Next.js لسرعة
                  خارقة، مع ضبط تعدد اللغات والعملات وتطبيقات رفع المبيعات.
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-4 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>تخصيص كامل لقوالب Shopify OS 2.0 باللغتين العربية والإنجليزية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>ربط Tabby و Tamara و Stripe UAE و Paymob و Apple Pay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>تهيئة سيو المنتجات والمجموعات لتصدر بحث جوجل التسويقي</span>
                  </li>
                </ul>
              </div>
              <a
                href={getWhatsAppUrl("مرحباً Unique، أرغب في تصميم متجر شوبيفاي احترافي في الإمارات.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-xs font-black text-black transition-transform hover:scale-[1.01]"
              >
                <span>اطلب متجر شوبيفاي الآن</span>
                <ArrowUpLeft className="h-4 w-4" />
              </a>
            </div>

            {/* Salla Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#071927] to-[#03080c] p-7">
              <div>
                <span className="inline-block rounded-full bg-cyan-500/15 px-3.5 py-1 text-xs font-bold text-cyan-300 border border-cyan-500/30">
                  Salla Custom Design
                </span>
                <h3 className="mt-4 text-2xl font-black text-white">
                  متاجر سلة بتخصيص CSS/JS حصري وفاخر
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  نمنح متجرك على منصة سلة مظهراً احترافياً يميزك تماماً عن القوالب
                  التقليدية، من خلال أكواد تنسيق CSS و JavaScript مخصصة، تصميم بنرات
                  إعلانية جذابة، وتهيئة المتجر للبيع في الإمارات والسعودية والخليج.
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-4 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    <span>تعديل شامل لواجهة المتجر وألوانه وخطوطه بأكواد CSS خاصة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    <span>تفعيل بوابات الدفع، تابي وتمارا، وشركات الشحن الخليجية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    <span>ضبط السيو الداخلي لمتجر سلة وربط البيكسل و Google Analytics</span>
                  </li>
                </ul>
              </div>
              <a
                href={getWhatsAppUrl("مرحباً Unique، أرغب في تصميم وتخصيص متجر سلة احترافي في الإمارات.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-xs font-black text-black transition-transform hover:scale-[1.01]"
              >
                <span>اطلب متجر سلة الآن</span>
                <ArrowUpLeft className="h-4 w-4" />
              </a>
            </div>

            {/* EasyOrder Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-amber-500/30 bg-gradient-to-b from-[#1c1607] to-[#03080c] p-7">
              <div>
                <span className="inline-block rounded-full bg-amber-500/15 px-3.5 py-1 text-xs font-bold text-amber-300 border border-amber-500/30">
                  EasyOrder COD Funnels
                </span>
                <h3 className="mt-4 text-2xl font-black text-white">
                  متاجر إيزي أوردر للبيع المباشر و COD
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  الخيار الأسرع والأعلى تحويلاً لتجار الدفع عند الاستلام (COD) والمسوقين
                  على تيك توك وسناب شات في الإمارات. يشتري العميل مباشرة من داخل صفحة
                  المنتج في ثوانٍ بدون خطوات سلة معقدة.
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-4 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span>نموذج طلب مباشر (الاسم، الهاتف، الإمارة، العنوان) في نفس الصفحة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span>إعداد عروض الكميات (اشترِ 2 بخصم خاص) لمضاعفة قيمة الطلب</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span>ربط مباشر مع TikTok/Snap/Meta Pixel و Google Sheets وشركات التوصيل</span>
                  </li>
                </ul>
              </div>
              <a
                href={getWhatsAppUrl("مرحباً Unique، أرغب في تصميم متجر إيزي أوردر احترافي للبيع في الإمارات.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-amber-400 py-3 text-xs font-black text-black transition-transform hover:scale-[1.01]"
              >
                <span>اطلب متجر إيزي أوردر الآن</span>
                <ArrowUpLeft className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: HIGH-CONVERTING LANDING PAGES SECTION
      ===================================================================== */}
      <section
        id="landing-pages-section"
        className="relative z-10 border-b border-white/10 bg-[#03060f] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="هندسة صفحات الهبوط الإعلانية (CRO Landing Pages)"
            title="تصميم صفحات هبوط في الإمارات تضاعف"
            highlightedWord="مبيعات وعائد حملاتك الإعلانية (ROAS)"
            subtitle="لا تترك زوار إعلاناتك الممولة يغادرون بدون شراء. نصمم صفحات هبوط فائقة السرعة ومكتوبة بلغة بيعية مقنعة تحول نقرات Google Ads و TikTok و Snapchat و Instagram إلى طلبات ورسائل واتساب فورية."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {LANDING_PAGE_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="flex flex-col justify-between rounded-3xl border border-white/12 bg-[#070f20] p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-black text-cyan-400">
                      {pillar.stepNum}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.adPlatformsSupported.map((ad) => (
                        <span
                          key={ad}
                          className="rounded-lg bg-blue-500/15 px-2.5 py-1 text-[10px] font-mono text-cyan-300"
                        >
                          {ad}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="mt-5 text-xl font-black text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-3.5 text-xs font-bold text-emerald-300">
                  النتيجة: {pillar.conversionResult}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: PLATFORM COMPARISON TABLE (HELPING CLIENT CHOOSE)
      ===================================================================== */}
      <section
        id="platform-comparison"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="دليل المقارنة الشامل لاختيار المنصة المثالية لمشروعك"
            title="مقارنة بين Next.js و WordPress و Shopify"
            highlightedWord="وسلة وإيزي أوردر وصفحات الهبوط"
            subtitle="نوفر لك كافة هذه التقنيات تحت سقف واحد في وكالة Unique، وهذا الجدول يساعدك على معرفة الفروق الجوهرية بينها لاختيار الأنسب لطبيعة نشاطك التجاري في الإمارات."
          />

          <div className="overflow-hidden rounded-3xl border border-white/15 bg-[#050a15] shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1050px] border-collapse text-right text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/15 bg-[#0a1328]">
                    <th className="p-4 font-black text-white">المعيار</th>
                    <th className="p-4 font-black text-cyan-300 bg-blue-600/10">
                      Next.js 16 المخصص
                    </th>
                    <th className="p-4 font-black text-blue-300">
                      WordPress Pro
                    </th>
                    <th className="p-4 font-black text-emerald-300">
                      متاجر Shopify
                    </th>
                    <th className="p-4 font-black text-cyan-200">
                      متاجر سلة (Salla)
                    </th>
                    <th className="p-4 font-black text-amber-300">
                      إيزي أوردر (EasyOrder)
                    </th>
                    <th className="p-4 font-black text-white">
                      صفحات الهبوط (Landing)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {PLATFORM_COMPARISON_TABLE.map((row) => (
                    <tr
                      key={row.feature}
                      className="transition-colors hover:bg-white/[0.02]"
                    >
                      <td className="p-4 font-bold text-white bg-black/40">
                        {row.feature}
                      </td>
                      <td className="p-4 text-cyan-200 bg-blue-600/[0.05] font-medium">
                        {row.nextjs}
                      </td>
                      <td className="p-4 text-slate-200">{row.wordpress}</td>
                      <td className="p-4 text-emerald-200">{row.shopify}</td>
                      <td className="p-4 text-slate-200">{row.salla}</td>
                      <td className="p-4 text-amber-200">{row.easyorder}</td>
                      <td className="p-4 text-slate-300">{row.landingPage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 8: INDUSTRY SOLUTIONS IN THE UAE
      ===================================================================== */}
      <section className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="حلول مصممة خصيصاً لأهم القطاعات التجارية في الإمارات"
            title="نصمم المواقع والمتاجر وفق متطلبات"
            highlightedWord="كل قطاع اقتصادي في دبي وأبوظبي"
            subtitle="لكل مجال تجاري في الإمارات رحلة عميل خاصة به؛ تعرف على المواصفات التي نوصي بها وننفذها لقطاع أعمالك."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_SOLUTIONS.map((ind) => (
              <div
                key={ind.id}
                className="flex flex-col justify-between rounded-3xl border border-white/12 bg-gradient-to-b from-[#091224] to-[#040811] p-7"
              >
                <div>
                  <span className="inline-block rounded-lg bg-blue-500/15 px-3 py-1 text-[11px] font-bold text-cyan-300 border border-blue-500/25">
                    المنصة الموصى بها: {ind.recommendedPlatform}
                  </span>
                  <h3 className="mt-4 text-xl font-black text-white">
                    {ind.industryTitle}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    {ind.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-200">
                    {ind.essentialFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {ind.seoKeywordsTargeted.map((kw) => (
                      <span
                        key={kw}
                        className="rounded bg-white/5 px-2 py-0.5 text-[10px] text-slate-400"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                  <a
                    href={getWhatsAppUrl(ind.whatsappQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 py-2.5 text-xs font-bold text-cyan-300 transition-colors hover:bg-cyan-500 hover:text-black"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>اطلب عرض سعر لهذا القطاع</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 9: COVERAGE ACROSS ALL 7 EMIRATES
      ===================================================================== */}
      <section
        id="emirates-zones"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="خدماتنا تغطي كافة إمارات ومناطق الدولة"
            title="شركة تصميم مواقع إلكترونية في"
            highlightedWord="دبي، أبوظبي، الشارقة، وكافة الإمارات"
            subtitle="نهيئ موقعك أو متجرك الإلكتروني ليتصدر نتائج البحث المحلية في الإمارة التي تستهدفها، مع دعم كامل للشحن والدفع والتسويق في جميع أنحاء الدولة."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {EMIRATES_SERVICE_ZONES.map((zone) => (
              <div
                key={zone.id}
                className="rounded-3xl border border-white/12 bg-[#060c1a] p-7 sm:p-8"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 text-cyan-400 border border-blue-500/30">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      تصميم مواقع في {zone.emirateName}
                    </h3>
                    <p className="font-mono text-xs text-cyan-400">
                      {zone.englishName}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-slate-300">
                  {zone.businessEnvironment}
                </p>

                <ul className="mt-5 space-y-2.5 text-xs text-slate-200">
                  {zone.whatWeBuildHere.map((w, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                  {zone.popularPlatforms.map((p) => (
                    <span
                      key={p}
                      className="rounded-lg bg-blue-500/10 px-2.5 py-1 text-[11px] font-bold text-amber-300 border border-blue-500/20"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 10: 6-STEP EXECUTION PROCESS & CASE STUDIES
      ===================================================================== */}
      <section className="relative z-10 border-b border-white/10 bg-[#03060e] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="خطوات عمل واضحة وسريعة"
            title="كيف نبدأ وننفذ موقعك أو متجرك"
            highlightedWord="في 6 خطوات منظمة؟"
            subtitle="منذ لحظة تواصلك معنا عبر واتساب وحتى إطلاق موقعك وتصدره في جوجل، نعمل معك وفق خطة زمنية دقيقة وشفافة."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {EXECUTION_STEPS.map((st) => (
              <div
                key={st.step}
                className="flex flex-col justify-between rounded-3xl border border-white/12 bg-[#070f20] p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 font-mono text-base font-black text-white">
                      {st.step}
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-bold text-amber-300">
                      {st.timeframe}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-black text-white">
                    {st.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                    {st.details}
                  </p>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-[11px] font-bold text-cyan-300 mb-2">
                    مخرجات المرحلة:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {st.clientReceives.map((rec) => (
                      <span
                        key={rec}
                        className="rounded-md bg-black/50 px-2.5 py-1 text-[11px] text-slate-200 border border-white/10"
                      >
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Success Stories Row */}
          <div className="mt-20">
            <h3 className="text-center text-2xl font-black text-white sm:text-3xl mb-10">
              نماذج من نتائج وأرقام مشاريعنا في الإمارات والخليج
            </h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {CLIENT_CASE_STUDIES.map((cs) => (
                <div
                  key={cs.id}
                  className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#0a1428] to-[#040812] p-7"
                >
                  <span className="text-xs font-bold text-cyan-400">
                    {cs.category}
                  </span>
                  <h4 className="mt-2 text-xl font-black text-white">
                    {cs.title}
                  </h4>
                  <p className="mt-1 font-mono text-[11px] text-amber-300">
                    {cs.platformUsed}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">
                    {cs.summary}
                  </p>
                  <div className="mt-5 space-y-2.5 border-t border-white/10 pt-4">
                    {cs.results.map((r) => (
                      <div
                        key={r.metricName}
                        className="flex items-center justify-between rounded-xl bg-black/50 px-3.5 py-2.5 text-xs border border-white/5"
                      >
                        <span className="text-slate-300">{r.metricName}</span>
                        <span className="font-black text-emerald-400">
                          {r.value} ({r.detail})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 11: TRANSPARENT PRICING PACKAGES IN AED
      ===================================================================== */}
      <section
        id="pricing-section"
        className="relative z-10 border-b border-white/10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="باقات استثمارية واضحة وشاملة بالدرهم الإماراتي"
            title="أسعار وباقات تصميم المواقع والمتاجر"
            highlightedWord="وصفحات الهبوط في الإمارات"
            subtitle="اختر الباقة المناسبة لمشروعك وتواصل معنا مباشرة عبر واتساب للبدء فوراً. جميع الباقات تشمل تهيئة السيو، التوافق مع الجوال، والملكية الكاملة."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {PRICING_PACKAGES_AED.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all ${
                  pkg.isFeatured
                    ? "border-2 border-cyan-400 bg-gradient-to-b from-[#0b1936] to-[#050b18] shadow-[0_0_50px_rgba(6,182,212,0.2)] lg:-translate-y-3"
                    : "border border-white/15 bg-[#060c1a]"
                }`}
              >
                {pkg.isFeatured && (
                  <div className="absolute -top-4 right-8 rounded-full bg-gradient-to-l from-amber-400 to-yellow-500 px-4 py-1 text-xs font-black text-black shadow-lg">
                    الأكثر طلباً للشركات والبراندات في الإمارات
                  </div>
                )}

                <div>
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    {pkg.platformTag}
                  </span>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {pkg.subtitle}
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 p-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm text-slate-400">تبدأ من</span>
                      <span className="text-4xl font-black text-cyan-300">
                        {pkg.priceAED}
                      </span>
                      <span className="text-sm font-bold text-amber-300">
                        درهم إماراتي
                      </span>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2.5 text-xs text-slate-200">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-xs font-bold text-emerald-300 mb-2">
                      تجهيزات السيو والسرعة المشمولة:
                    </p>
                    <ul className="space-y-2 text-xs text-slate-200">
                      {pkg.seoAndSpeedIncluded.map((s, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 rounded-xl bg-amber-500/10 p-3 text-xs font-bold text-amber-300 border border-amber-500/20">
                    {pkg.bonusIncluded}
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(pkg.whatsappOrderMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-black transition-all ${
                    pkg.isFeatured
                      ? "bg-gradient-to-l from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 hover:scale-[1.01]"
                      : "border border-white/20 bg-white/5 text-white hover:bg-blue-600"
                  }`}
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>اطلب الباقة عبر واتساب ({WHATSAPP_NUMBER_DISPLAY})</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 12: CLIENT FAQ ACCORDION SECTION
      ===================================================================== */}
      <section
        id="faq-section"
        className="relative z-10 border-b border-white/10 bg-[#030712] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="إجابات واضحة على كافة استفساراتك"
            title="الأسئلة الشائعة حول تصميم المواقع والمتاجر"
            highlightedWord="في دولة الإمارات"
            subtitle="كل ما تحتاج معرفته حول تصميم مواقع ووردبريس، Next.js، صفحات الهبوط، ومتاجر شوبيفاي وسلة وإيزي أوردر."
          />

          <div className="space-y-4">
            {CLIENT_FAQS.map((faq, idx) => (
              <details
                key={faq.id}
                open={idx === 0}
                className="group rounded-2xl border border-white/12 bg-[#060c1a] p-6 transition-all open:border-cyan-500/40 open:bg-[#081226]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-right">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-blue-500/15 px-2.5 py-1 text-xs font-bold text-cyan-300">
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
        </div>
      </section>

      {/* =====================================================================
          SECTION 13: FINAL DIRECT WHATSAPP & PROJECT START CTA
      ===================================================================== */}
      <section className="relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-blue-500/40 bg-gradient-to-b from-[#0a1631] via-[#060d1d] to-[#02050b] p-8 shadow-[0_0_80px_rgba(37,99,235,0.2)] sm:p-12 lg:p-16 text-center">
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300">
                <Sparkles className="h-4 w-4" />
                <span>ابدأ مشروعك اليوم مع وكالة Unique Digital Agency</span>
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                جاهز لتصميم موقعك أو متجرك الإلكتروني الاحترافي في الإمارات؟
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                تواصل معنا الآن مباشرة عبر واتساب للحصول على استشارة مجانية،
                تحديد المنصة الأنسب لمشروعك{" "}
                <strong className="text-cyan-300">
                  (WordPress, Next.js, Landing Page, Shopify, Salla, EasyOrder)
                </strong>
                ، واستلام عرض سعر فوري وخطة عمل واضحة.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={mainWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-l from-emerald-500 to-teal-500 px-8 py-4 text-base font-black text-black shadow-[0_0_35px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.03]"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>تواصل عبر واتساب الآن:</span>
                  <span dir="ltr" className="font-mono text-lg">
                    {WHATSAPP_NUMBER_DISPLAY}
                  </span>
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  <span>تصفح خدمات السيو (SEO) في الإمارات</span>
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











      