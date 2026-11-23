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

function ShoppingBag({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
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
// NEXT.JS METADATA — E-COMMERCE STORE DESIGN SERVICE PAGE (ARABIC RTL)
// ============================================================================

export const metadata: Metadata = {
  title:
    "تصميم متجر إلكتروني احترافي | WooCommerce وShopify وسلة وزد وNext.js — UNIQUE",
  description:
    "خدمة تصميم وإنشاء متجر إلكتروني احترافي جاهز للبيع من اليوم الأول في مصر والسعودية والإمارات والكويت. ربط بوابات الدفع (مدى، Apple Pay، تابي وتمارا، Paymob، فوري) وشركات الشحن، تتبع البيكسل وGA4، وتهيئة سيو المنتجات بباقات تبدأ من $290.",
  keywords: [
    "تصميم متجر الكتروني احترافي",
    "شركة تصميم متاجر الكترونية",
    "انشاء متجر الكتروني سلة وزد",
    "تصميم متجر شوبيفاي Shopify",
    "تصميم متجر ووكومرس WooCommerce",
    "برمجة متجر الكتروني Next.js",
    "ربط بوابات الدفع مدى وPaymob",
    "اسعار تصميم متجر الكتروني",
    "تحسين معدل التحويل للمتاجر CRO",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/services/e-commerce",
    languages: {
      ar: "https://www.uniquee-ws.com/services/e-commerce",
      en: "https://www.uniquee-ws.com/en/services/e-commerce",
      "x-default": "https://www.uniquee-ws.com/services/e-commerce",
    },
  },
  openGraph: {
    title: "تصميم متجر إلكتروني احترافي — UNIQUE Digital Agency",
    description:
      "متجر إلكتروني فائق السرعة ومهيأ للتحويل والإعلانات والسيو على WooCommerce أو Shopify أو سلة/زد أو Next.js مع ربط الدفع والشحن بالكامل.",
    url: "https://www.uniquee-ws.com/services/e-commerce",
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

interface StorePillar {
  id: string;
  number: string;
  badge: string;
  title: string;
  enTitle: string;
  summary: string;
  impact: string;
  features: string[];
  whatsappMsg: string;
}

interface PlatformChoice {
  name: string;
  tag: string;
  bestFor: string;
  points: string[];
}

interface IntegrationBlock {
  category: string;
  badge: string;
  items: string[];
}

interface StoreChecklist {
  id: string;
  title: string;
  badge: string;
  items: string[];
}

interface LaunchPhase {
  num: string;
  timeframe: string;
  title: string;
  desc: string;
  output: string;
}

interface StorePackageUSD {
  id: string;
  name: string;
  badge: string;
  price: string;
  cycle: string;
  idealFor: string;
  isPopular?: boolean;
  delivery: string;
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
// DATA ARRAYS — E-COMMERCE STORE DESIGN & DEVELOPMENT
// ============================================================================

const HERO_KPIS: HeroKpi[] = [
  {
    id: "speed",
    value: "< 1.2s",
    title: "سرعة تحميل فائقة للموبايل",
    subtitle: "كل ثانية تأخير تكلّفك مبيعات — متاجرنا محسّنة لسرعة فورية وتجربة تصفح سلسة.",
    accent: "emerald",
  },
  {
    id: "cro",
    value: "إتمام في خطوة",
    title: "صفحة دفع ترفع التحويل (CRO)",
    subtitle: "تقليل خطوات الشراء، تفعيل Apple Pay ومدى والدفع عند الاستلام، واسترجاع السلات.",
    accent: "cyan",
  },
  {
    id: "tracking",
    value: "CAPI + GA4",
    title: "جاهز للإعلانات الممولة فوراً",
    subtitle: "ربط دقيق لـ Meta Pixel وTikTok وSnapchat وGoogle Ads لتقليل تكلفة الطلب.",
    accent: "blue",
  },
  {
    id: "pricing",
    value: "تبدأ من $290",
    title: "باقات واضحة بدون عمولات خفية",
    subtitle: "متجر متكامل بربط الدفع والشحن والسيو والتدريب الكامل على الإدارة.",
    accent: "amber",
  },
];

const SIX_STORE_PILLARS: StorePillar[] = [
  {
    id: "cro-ux",
    number: "01",
    badge: "تجربة الشراء والتحويل",
    title: "تصميم واجهة متجر تبيع من أول شاشة (UI/UX)",
    enTitle: "Mobile-First Conversion Storefront",
    summary:
      "أكثر من 85% من مشتري مصر والخليج يتصفحون من الجوال. نصمم واجهة نظيفة بهوية علامتك، شريط بحث ذكي، وصفحة منتج مقنعة تُظهر المزايا والتقييمات وزر الشراء بوضوح تام.",
    impact: "يرفع نسبة تحويل الزائر إلى مشترٍ ويقلل معدل الارتداد من الحملات الإعلانية.",
    features: [
      "تصميم Mobile-First متجاوب بالكامل للعربية RTL والإنجليزية LTR",
      "عرض ذكي للخيارات (الألوان، المقاسات، الباقات، والعروض الترويجية)",
      "صفحة إتمام طلب مختصرة (One-Page Checkout) لتقليل ترك السلة",
      "أزرار شراء سريع وإضافات رفع قيمة السلة (Upsell & Cross-Sell)",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تصميم متجر إلكتروني احترافي يرفع معدل التحويل والمبيعات.",
  },
  {
    id: "payments-shipping",
    number: "02",
    badge: "الدفع والشحن الآلي",
    title: "ربط كامل لبوابات الدفع والتقسيط والشحن",
    enTitle: "Local & GCC Payments + Automated Shipping",
    summary:
      "نسلّمك متجرك مربوطاً وجاهزاً لاستقبال المدفوعات وإصدار بوالص الشحن تلقائياً بدون إدخال يدوي، مع دعم كامل لخيارات التقسيط والدفع عند الاستلام.",
    impact: "يلغي احتكاك الدفع ويوفر ساعات يومية من متابعة البوالص والشحن.",
    features: [
      "السعودية والخليج: مدى، Apple Pay، STC Pay، وتقسيط تابي وتمارا",
      "مصر: Paymob، فوري، محافظ إلكترونية، إنستاباي، والدفع عند الاستلام",
      "ربط مباشر مع بوسطة (Bosta)، أرامكس، سمسا، وشركات الشحن المحلية",
      "حساب آلي لتكلفة الشحن حسب المدينة والوزن مع شحن مجاني للطلبات فوق حد معين",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد متجراً مربوطاً ببوابات الدفع وشركات الشحن في مصر أو الخليج.",
  },
  {
    id: "pixels-tracking",
    number: "03",
    badge: "جاهزية الإعلانات الممولة",
    title: "تجهيز البيكسل وConversions API وتتبع المبيعات",
    enTitle: "Meta CAPI • TikTok • Snapchat • GA4",
    summary:
      "المتجر بدون تتبع دقيق يهدر ميزانية إعلاناتك. نضبط لك كامل أحداث التجارة الإلكترونية (ViewContent، AddToCart، InitiateCheckout، Purchase) بدقة 100%.",
    impact: "يغذّي خوارزميات الإعلانات ببيانات شراء حقيقية ويخفض تكلفة الاستحواذ CPA.",
    features: [
      "ربط Meta Pixel + Conversions API (CAPI) لتجاوز قيود iOS",
      "تفعيل TikTok Pixel وSnapchat Pixel وGoogle Ads Conversion Tracking",
      "إعداد Google Analytics 4 (Enhanced E-Commerce) وربط Merchant Center",
      "تفعيل رسائل استرجاع السلات المتروكة تلقائياً عبر واتساب والإيميل",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تجهيز متجري بالإعلانات والبيكسل وتتبع المبيعات بدقة.",
  },
  {
    id: "ecommerce-seo",
    number: "04",
    badge: "مبيعات مجانية من جوجل",
    title: "بنية سيو متكاملة للمنتجات والتصنيفات (SEO-Ready)",
    enTitle: "Product Schema • Category Hubs • Core Web Vitals",
    summary:
      "نبني متجرك من اليوم الأول ليكون جاهزاً لتصدر نتائج بحث جوجل على أسماء منتجاتك وتصنيفاتك، حتى تحصل على طلبات مجانية مستدامة بجانب الإعلانات.",
    impact: "يبني قناة مبيعات عضوية مجانية تنمو شهراً بعد شهر وتقلل اعتمادك على الإعلانات.",
    features: [
      "تطبيق Product + Offer + Price + Rating Schema لإظهار السعر والنجوم في جوجل",
      "هيكلة روابط نظيفة للأقسام والمنتجات مع ضغط تلقائي للصور بصيغة WebP",
      "ربط Google Search Console وXML Sitemap للمنتجات والأقسام",
      "إزالة مشاكل تكرار الفلاتر والـ Canonical لضمان أرشفة سليمة",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تصميم متجر إلكتروني مهيأ للسيو وتصدر جوجل.",
  },
  {
    id: "inventory-erp",
    number: "05",
    badge: "إدارة المخزون والفواتير",
    title: "لوحة تحكم عربية سهلة + فواتير إلكترونية وتقارير",
    enTitle: "Smart Inventory, Coupons & Invoicing",
    summary:
      "إدارة متكاملة للمنتجات، المخزون، الكوبونات، والعملاء من لوحة تحكم واحدة تعمل على الكمبيوتر والجوال مع تنبيهات فورية لكل طلب جديد.",
    impact: "يمنحك سيطرة كاملة على أرباحك ومخزونك بدون تعقيد تقني.",
    features: [
      "إدارة سهلة للمنتجات المتعددة (مقاسات وألوان) والخصومات المؤقتة",
      "تنبيهات انخفاض المخزون وإصدار فواتير ضريبية PDF تلقائياً (متوافقة مع ZATCA عند الطلب)",
      "نظام كوبونات خصم، تسويق بالعمولة (Affiliate)، ونقاط ولاء",
      "إمكانية الربط مع أنظمة الكاشير والمحاسبة (ERP / Odoo / قيود)",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد متجراً بلوحة تحكم سهلة وإدارة مخزون وفواتير احترافية.",
  },
  {
    id: "scalable-headless",
    number: "06",
    badge: "المتاجر الكبرى والسرعة القصوى",
    title: "متاجر Next.js الخاصة والربط بتطبيق الجوال",
    enTitle: "Custom Headless Commerce & Mobile App Ready",
    summary:
      "للعلامات التجارية الطموحة والمتاجر متعددة البائعين التي تبحث عن سرعة فائقة، تخصيص غير محدود، وتكامل مباشر مع تطبيق Android & iOS.",
    impact: "أداء فائق يتحمل آلاف الزوار في مواسم التخفيضات (الجمعة البيضاء ورمضان) دون توقف.",
    features: [
      "واجهات Next.js فائقة السرعة مع لوحة إدارة Sanity أو Headless API",
      "دعم كامل لتعدد العملات واللغات وتعدد المستودعات والفروع",
      "جاهزية فورية للربط مع تطبيق جوال Flutter بنفس قاعدة البيانات",
      "ملكية 100% للكود مع حماية أمان متقدمة ونسخ احتياطي يومي",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد برمجة متجر إلكتروني خاص بـ Next.js أو متجر متعدد البائعين.",
  },
];

const PLATFORM_CHOICES: PlatformChoice[] = [
  {
    name: "WooCommerce (WordPress)",
    tag: "الأكثر مرونة وملكية كاملة",
    bestFor: "للشركات في مصر والخليج التي تريد ملكية كاملة بدون عمولة على المبيعات.",
    points: [
      "صفر عمولة شهرية على المبيعات + تحكم كامل في الكود والاستضافة",
      "الأقوى للسيو والمدونة والتخصيص الكامل لبوابات الدفع المحلية",
      "مناسب للمتاجر الصغيرة والمتوسطة حتى آلاف المنتجات",
    ],
  },
  {
    name: "سلة وزد (Salla & Zid)",
    tag: "الأسرع للسوق السعودي",
    bestFor: "للتجار في السعودية والخليج الباحثين عن انطلاق سريع وربط محلي جاهز.",
    points: [
      "تخصيص ثيم احترافي بهويتك يميزك عن القوالب التقليدية المتكررة",
      "ربط فوري مع مدى، Apple Pay، تابي، تمارا، أرامكس، وسمسا",
      "تهيئة كاملة لسيو الأقسام والمنتجات والبيكسل الإعلاني",
    ],
  },
  {
    name: "Shopify",
    tag: "للبراندات والبيع العالمي",
    bestFor: "للعلامات التجارية (D2C) المستهدفة لعدة دول وتحتاج منظومة تطبيقات قوية.",
    points: [
      "ثبات سحابي عالٍ جداً في مواسم الذروة والإعلانات المكثفة",
      "تجربة دفع عالمية سلسة وتكامل فوري مع Meta وTikTok وGoogle",
      "تخصيص قوالب عربية RTL احترافية بأعلى سرعة",
    ],
  },
  {
    name: "Next.js (برمجة خاصة)",
    tag: "أداء استثنائي وتوسع غير محدود",
    bestFor: "للمتاجر الضخمة، منصات Multi-Vendor، أو المتاجر المرتبطة بأنظمة ERP.",
    points: [
      "سرعة تحميل أقل من ثانية ودرجة 95+ على PageSpeed للموبايل",
      "تخصيص 100% لتجربة الشراء وتكامل مباشر مع تطبيقات الجوال",
      "جاهزية كاملة لـ SEO وGEO وWebMCP للظهور في محركات الذكاء الاصطناعي",
    ],
  },
];

const STORE_INTEGRATIONS: IntegrationBlock[] = [
  {
    category: "بوابات الدفع والتقسيط",
    badge: "مصر والسعودية والخليج",
    items: ["مدى (Mada)، Apple Pay وSTC Pay", "تقسيط تابي (Tabby) وتمارا (Tamara)", "Paymob، فوري، إنستاباي، وڤودافون كاش", "الدفع عند الاستلام + Stripe وPayTabs"],
  },
  {
    category: "الشحن والتوصيل الآلي",
    badge: "بوالص تلقائية",
    items: ["بوسطة (Bosta) وأرامكس (Aramex)", "سمسا (SMSA) وDHL وFedEx", "تسعير تلقائي للشحن حسب المحافظة والوزن", "تتبع حالة الشحنة وإشعارات واتساب للعميل"],
  },
  {
    category: "التسويق والبيكسل والتحويل",
    badge: "نمو المبيعات",
    items: ["Meta Pixel + Conversions API (CAPI)", "TikTok & Snapchat Pixel + Google Ads", "استرجاع السلات المتروكة عبر واتساب", "Google Analytics 4 وGoogle Merchant Center"],
  },
];

const UNIQUE_4_STORE_CHECKLISTS: StoreChecklist[] = [
  {
    id: "c-design",
    title: "1. الهوية والتصميم البيعي",
    badge: "UI/UX & CRO",
    items: [
      "تصميم رئيسية وأقسام وصفحات منتجات بهوية علامتك التجارية",
      "توافق تام مع جميع شاشات الهواتف والتابلت والكمبيوتر",
      "تصميم بانرات عروض احترافية وتنظيم واضح لقوائم التصفح",
      "زر واتساب عائم ذكي للاستفسار السريع ورفع الثقة",
    ],
  },
  {
    id: "c-tech",
    title: "2. الدفع والشحن والأمان",
    badge: "Ready to Sell",
    items: [
      "تفعيل شهادة الأمان SSL وحماية ضد الهجمات والاختراق",
      "ربط واختبار بوابات الدفع الإلكترونية والدفع عند الاستلام",
      "ضبط مناطق وأسعار الشحن وإصدار الفواتير التلقائي",
      "نسخ احتياطي تلقائي لحماية بيانات منتجاتك وعملائك",
    ],
  },
  {
    id: "c-growth",
    title: "3. الإعلانات والسيو المدمج",
    badge: "SEO + Pixels",
    items: [
      "تفعيل Meta وTikTok وGoogle Pixels والتحقق من حدث الشراء",
      "تطبيق Product Schema وضغط الصور بصيغة WebP لسرعة فائقة",
      "إعداد كوبونات الخصم، عروض الكميات، والسلات المتروكة",
      "ربط Google Search Console وGoogle Analytics 4",
    ],
  },
  {
    id: "c-handover",
    title: "4. التسليم والتدريب والدعم",
    badge: "Full Control",
    items: [
      "إدخال دفعة منتجات أولية مجاناً لضبط شكل المتجر بالكامل",
      "فيديوهات تدريبية واضحة لفريقك على إضافة المنتجات وإدارة الطلبات",
      "ملكية 100% للدومين والمتجر وكافة الحسابات المرتبطة به",
      "دعم فني مجاني بعد الإطلاق لضمان انطلاقة مستقرة بدون أعطال",
    ],
  },
];

const LAUNCH_ROADMAP: LaunchPhase[] = [
  {
    num: "01",
    timeframe: "اليوم 1 – 2",
    title: "اختيار المنصة وهيكلة الأقسام",
    desc: "نحدد المنصة الأنسب لمنتجاتك وسوقك (WooCommerce / سلة / زد / Shopify / Next.js) ونرتب الأقسام ورحلة الشراء.",
    output: "خطة المنصة وهيكلة المتجر",
  },
  {
    num: "02",
    timeframe: "اليوم 3 – 7",
    title: "التصميم البصري وبناء الصفحات",
    desc: "تصميم الواجهة الرئيسية وصفحات الأقسام والمنتجات وصفحة الدفع المختصرة بهوية متجرك مع مراجعتك وتعديلاتك.",
    output: "تصميم متجر متكامل ومتجاوب",
  },
  {
    num: "03",
    timeframe: "اليوم 8 – 11",
    title: "ربط الدفع، الشحن، البيكسل والسيو",
    desc: "تفعيل بوابات الدفع وشركات الشحن، ضبط Meta/TikTok/GA4 Pixels، تفعيل Product Schema، ورفع المنتجات الأولية.",
    output: "اختبار طلب شراء حقيقي من البداية للنهاية",
  },
  {
    num: "04",
    timeframe: "اليوم 12 – 14",
    title: "فحص السرعة، الإطلاق والتدريب",
    desc: "اختبار السرعة والأمان على الموبايل، الإطلاق الرسمي على دومينك، وتسليمك دليل التدريب مع فترة الدعم الفني.",
    output: "متجر حي جاهز لاستقبال الطلبات فوراً",
  },
];

const STORE_PACKAGES_USD: StorePackageUSD[] = [
  {
    id: "store-starter",
    name: "باقة الانطلاق للمتجر الإلكتروني",
    badge: "للمتاجر الجديدة وسلة/زد",
    price: "290",
    cycle: "دولار / دفعة واحدة",
    idealFor: "مثالية لإطلاق متجرك الأول بسرعة واحترافية على سلة أو زد أو WooCommerce أو EasyOrder.",
    delivery: "7 – 10 أيام عمل",
    features: [
      "تصميم وتخصيص متجر احترافي متجاوب 100% مع الجوال",
      "ربط بوابة دفع إلكتروني واحدة + الدفع عند الاستلام",
      "ضبط الشحن والمدن وإضافة حتى 25 منتجاً كبداية",
      "ربط Meta Pixel وGoogle Analytics 4 وزر واتساب",
      "تهيئة سيو أساسية + تدريب كامل على إدارة الطلبات",
    ],
    whatsappMsg: "مرحباً UNIQUE، أرغب في حجز باقة الانطلاق لتصميم متجر إلكتروني ($290).",
  },
  {
    id: "store-pro",
    name: "باقة المتجر الاحترافي للنمو",
    badge: "الأكثر طلباً",
    price: "365",
    cycle: "دولار / دفعة واحدة",
    idealFor: "الأنسب للبراندات والمتاجر الطموحة على WooCommerce أو Shopify أو سلة برو بملكية كاملة وتجهيز إعلاني شامل.",
    isPopular: true,
    delivery: "10 – 14 يوم عمل",
    features: [
      "متجر ثنائي اللغة (عربي/إنجليزي) بتصميم بيعي مخصص (CRO)",
      "ربط متعدد للدفع (مدى، Apple Pay، تابي/تمارا، Paymob، فوري) والشحن الآلي",
      "إعداد Meta CAPI + TikTok + Snapchat + Google Ads + استرجاع السلات",
      "تهيئة سيو متقدمة + Product Schema + تسريع Core Web Vitals",
      "إدخال حتى 50 منتجاً + كوبونات خصم وعروض كميات + فواتير PDF",
      "دعم فني مجاني بعد الإطلاق + ضمان استقرار كامل",
    ],
    whatsappMsg: "مرحباً UNIQUE، أرغب في حجز باقة المتجر الاحترافي للنمو ($365).",
  },
  {
    id: "store-custom",
    name: "باقة المتجر الخاص (Next.js / Multi-Vendor)",
    badge: "للمتاجر الكبرى والأنظمة",
    price: "750",
    cycle: "تبدأ من / دولار",
    idealFor: "للمتاجر عالية الزيارات، منصات تعدد التجار، أو المتاجر المرتبطة بأنظمة ERP وتطبيقات الجوال.",
    delivery: "3 – 5 أسابيع",
    features: [
      "برمجة خاصة فائقة السرعة بـ Next.js أو منظومة Multi-Vendor متكاملة",
      "تعدد عملات، تعدد مستودعات، وربط مباشر بأنظمة المحاسبة ERP",
      "جاهزية كاملة للربط مع تطبيق Android & iOS بنفس قاعدة البيانات",
      "بنية SEO + GEO + WebMCP للظهور في جوجل ومحركات الذكاء الاصطناعي",
      "ملكية 100% للسورس كود + دعم هندسي وتدريب شامل للفريق",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد عرض سعر لباقة المتجر الخاص بـ Next.js أو متعدد التجار ($750+).",
  },
];

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "اختيار المنصة",
    question: "أيهما أفضل لمتجري: WooCommerce أم Shopify أم سلة وزد؟",
    answer:
      "يعتمد الاختيار على سوقك وميزانيتك: سلة وزد ممتازتان للانطلاق السريع داخل السعودية، وShopify قوي للبراندات متعددة الأسواق، بينما WooCommerce يمنحك ملكية كاملة بدون عمولة على المبيعات وأقوى مرونة للسيو والتخصيص. في الجلسة المجانية نرشح لك الخيار الأنسب لطبيعة منتجاتك.",
  },
  {
    id: "faq-2",
    category: "بوابات الدفع والشحن",
    question: "هل تساعدونني في تفعيل بوابات الدفع (مدى، تابي، Paymob) وشركات الشحن؟",
    answer:
      "نعم، نوجهك خطوة بخطوة في تقديم الأوراق المطلوبة لبوابة الدفع أو شركة الشحن، ونتولى بالكامل الربط البرمجي وإجراء اختبار شراء فعلي للتأكد من عمل الدفع وبوالص الشحن بسلاسة.",
  },
  {
    id: "faq-3",
    category: "الاستضافة والدومين",
    question: "هل الأسعار تشمل اشتراكات المنصات مثل سلة أو Shopify أو الاستضافة؟",
    answer:
      "أتعاب التصميم والتطوير والربط تُدفع مرة واحدة لنا كما هو موضح في الباقات، بينما اشتراك الدومين والاستضافة (في WooCommerce) أو اشتراك المنصة الشهري (في سلة/زد/Shopify) يُدفع مباشرة باسمك للمنصة لتضمن ملكية كاملة 100% لمتجرك.",
  },
  {
    id: "faq-4",
    category: "مدة التسليم",
    question: "كم يستغرق تصميم وتسليم متجر إلكتروني جاهز للبيع؟",
    answer:
      "يتم تسليم متاجر الانطلاق والاحترافية خلال 7 إلى 14 يوم عمل بعد استلام الهوية وبيانات المنتجات، بينما تستغرق المتاجر المخصصة بالكامل بـ Next.js أو متعددة البائعين من 3 إلى 5 أسابيع.",
  },
  {
    id: "faq-5",
    category: "السيو والتسويق",
    question: "هل المتجر يكون جاهزاً لإطلاق الإعلانات الممولة وتصدر جوجل فوراً؟",
    answer:
      "بالتأكيد. كل متجر نطلقه يأتي مجهزاً بـ Meta Pixel وTikTok وGoogle Analytics 4 لتتبع المبيعات بدقة، بالإضافة إلى بنية سيو نظيفة وProduct Schema، كما يمكنك دمج خطة سيو شهرية معنا لمضاعفة المبيعات العضوية.",
  },
];

const SEMANTIC_KEYWORDS: string[] = [
  "تصميم متجر إلكتروني احترافي",
  "إنشاء متجر سلة وزد",
  "تصميم متجر شوبيفاي Shopify",
  "تصميم متجر ووكومرس WooCommerce",
  "برمجة متجر إلكتروني Next.js",
  "ربط مدى وApple Pay وتابي وتمارا",
  "ربط Paymob وفوري وبوسطة في مصر",
  "تفعيل Meta CAPI وTikTok Pixel",
  "تحسين معدل التحويل للمتاجر CRO",
  "سيو المتاجر الإلكترونية Product Schema",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD — Service + OfferCatalog USD + FAQPage + Breadcrumb)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمة تصميم متجر إلكتروني احترافي — UNIQUE Digital Agency",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://www.uniquee-ws.com",
      telephone: "+201270506511",
    },
    serviceType: "E-Commerce Store Design & Development (WooCommerce, Shopify, Salla, Zid, Next.js)",
    areaServed: ["EG", "SA", "AE", "KW"],
    url: "https://www.uniquee-ws.com/services/e-commerce",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "باقات تصميم المتاجر الإلكترونية (USD)",
      itemListElement: STORE_PACKAGES_USD.map((pkg) => ({
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
        name: "تصميم متجر إلكتروني احترافي",
        item: "https://www.uniquee-ws.com/services/e-commerce",
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
// MAIN PAGE COMPONENT — E-COMMERCE STORE SERVICE PAGE (ARABIC RTL)
// ============================================================================

export default function EcommerceServicePage() {
  const heroStoreWhatsapp = getWhatsAppUrl(
    "مرحباً UNIQUE Digital Agency! أريد تصميم متجر إلكتروني احترافي ومعرفة المنصة والباقة الأنسب لنشاطي."
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
                UNIQUE <span className="text-blue-400">Commerce</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">
                تصميم وتطوير المتاجر الإلكترونية
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#pillars" className="hover:text-cyan-300 transition">
              مميزات المتجر
            </a>
            <a href="#platforms" className="hover:text-cyan-300 transition">
              المنصات
            </a>
            <a href="#integrations" className="hover:text-cyan-300 transition">
              الدفع والشحن
            </a>
            <a href="#roadmap" className="hover:text-cyan-300 transition">
              خطوات الإطلاق
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
              href="/en/services/e-commerce"
              className="px-3.5 py-2 rounded-xl border border-neutral-800 bg-neutral-950 hover:border-cyan-500/50 text-xs font-bold text-neutral-200 hover:text-cyan-300 transition"
            >
              English
            </Link>
            <a
              href={heroStoreWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-l from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>ابدأ متجرك الآن</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION + CONVERSION & STORE TELEMETRY CARD
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
            <span className="text-cyan-300 font-semibold">تصميم متجر إلكتروني احترافي</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                <span>WooCommerce • Shopify • سلة • زد • Next.js</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">جاهز للبيع من اليوم الأول</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.18] mb-6">
                تصميم{" "}
                <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  متجر إلكتروني احترافي
                </span>{" "}
                سريع ومهيأ لمضاعفة مبيعاتك من أول يوم
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                في <strong className="text-white">UNIQUE Digital Agency</strong> لا نبني مجرد واجهة
                جميلة؛ بل نُهندس متجراً متكاملاً يجمع بين{" "}
                <strong className="text-cyan-300">
                  سرعة الجوال، صفحة دفع مختصرة، ربط بوابات الدفع والشحن، وتجهيز البيكسل والسيو
                </strong>{" "}
                ليتحول كل زائر من إعلاناتك أو جوجل إلى عميل يشتري بثقة.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "ربط مدى، Apple Pay، تابي/تمارا، Paymob وفوري",
                  "ربط الشحن الآلي مع بوسطة وأرامكس وسمسا",
                  "تجهيز Meta CAPI وTikTok Pixel وGA4 للإعلانات",
                  "بنية سيو متقدمة مع Product Schema وسرعة فائقة",
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
                  href={heroStoreWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>اطلب تصميم متجرك الإلكتروني الآن</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <span>تصفح باقات المتاجر</span>
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
                  تسليم خلال 7–14 يوماً • ملكية كاملة 100%
                </span>
              </div>
            </div>

            {/* Hero Visual: Store Conversion & Readiness Dashboard */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-cyan-300">
                      مؤشر جاهزية المتجر — Commerce CRO Suite
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    جاهز للبيع ✓
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">سرعة الجوال</div>
                    <div className="text-xl font-black text-blue-400" dir="ltr">0.9s</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">LCP فائق</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">معدل التحويل</div>
                    <div className="text-xl font-black text-cyan-300" dir="ltr">+48%</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">دفع مختصر</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">دقة البيكسل</div>
                    <div className="text-xl font-black text-amber-300" dir="ltr">100%</div>
                    <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">CAPI + GA4</div>
                  </div>
                </div>

                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-neutral-200 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      ما تستلمه مفعّلاً داخل متجرك
                    </span>
                    <span className="text-[11px] text-cyan-300 font-bold">مُختبر فعلياً</span>
                  </div>
                  {[
                    { step: "بوابات الدفع والتقسيط (مدى، Apple Pay، Paymob)", tag: "مربوط ✓" },
                    { step: "بوالص الشحن الآلية (بوسطة، أرامكس، سمسا)", tag: "مربوط ✓" },
                    { step: "تتبع الإعلانات (Meta CAPI + TikTok + GA4)", tag: "نشط ✓" },
                    { step: "سيو المنتجات + Product Schema + سلات متروكة", tag: "نشط ✓" },
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
          3. 6 CORE E-COMMERCE PILLARS
      ==================================================================== */}
      <section id="pillars" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="متجر متكامل للبيع والنمو"
            title="6 ركائز نُجهّز بها كل"
            highlight="متجر إلكتروني احترافي في UNIQUE"
            subtitle="نهتم بكل تفصيلة تؤثر على مبيعاتك: من أول نظرة للعميل على الموبايل حتى إتمام الدفع واسترجاع السلات المتروكة."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {SIX_STORE_PILLARS.map((p) => (
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
                      الأثر المباشر على المبيعات:
                    </div>
                    <p className="text-xs text-neutral-200">{p.impact}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
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
                  <span>استفسر عن هذه الميزة عبر واتساب</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. PLATFORM COMPARISON + PAYMENT/SHIPPING/MARKETING INTEGRATIONS
      ==================================================================== */}
      <section id="platforms" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="نرشح لك المنصة الأنسب"
            title="نصمم متجرك على أقوى منصات"
            highlight="التجارة الإلكترونية العالمية والعربية"
            subtitle="مقارنة عملية تساعدك على اختيار المنصة الصحيحة حسب حجم منتجاتك وسوقك المستهدف."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {PLATFORM_CHOICES.map((pl, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-cyan-500/40 p-6 transition"
              >
                <span className="inline-block px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] font-bold text-amber-300 mb-3">
                  {pl.tag}
                </span>
                <h3 className="text-lg font-extrabold text-white mb-2">{pl.name}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">{pl.bestFor}</p>
                <ul className="space-y-2">
                  {pl.points.map((pt, i) => (
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
              badge="منظومة بيع متكاملة"
              title="ربط كامل مع بوابات الدفع"
              highlight="والشحن والبيكسل الإعلاني"
              subtitle="كل أدوات البيع والتسويق التي يحتاجها متجرك في مصر والسعودية والإمارات جاهزة من اليوم الأول."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {STORE_INTEGRATIONS.map((grp, idx) => (
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
          5. 4 QUALITY CHECKLISTS + 4-STEP LAUNCH ROADMAP
      ==================================================================== */}
      <section id="roadmap" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="معيار التسليم في UNIQUE"
            title="4 قوائم فحص نطبقها قبل"
            highlight="إطلاق متجرك الإلكتروني"
            subtitle="نختبر كل زر، عملية دفع، بوليصة شحن، وحدث بيكسل قبل تسليمك المفتاح."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {UNIQUE_4_STORE_CHECKLISTS.map((tbl) => (
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
            badge="خطة إطلاق سريعة"
            title="متجرك جاهز لاستقبال الطلبات"
            highlight="خلال 7 إلى 14 يوماً"
            subtitle="أربع خطوات واضحة ومنظمة تنقلك من الفكرة إلى أول طلب شراء فعلي."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LAUNCH_ROADMAP.map((ph) => (
              <div
                key={ph.num}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-extrabold text-cyan-300">
                      الخطوة {ph.num}
                    </span>
                    <span className="text-xs font-bold text-amber-300">{ph.timeframe}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-3">{ph.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">{ph.desc}</p>
                </div>
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-3.5">
                  <div className="text-[10px] font-bold text-emerald-300 mb-0.5">المخرج المسلم:</div>
                  <div className="text-xs font-bold text-white">{ph.output}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. TRANSPARENT USD PACKAGES ($290 / $365 / $750+)
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="أسعار واضحة بدون عمولات خفية"
            title="باقات تصميم المتاجر الإلكترونية"
            highlight="بالدولار الأمريكي ($)"
            subtitle="اختر الباقة الأنسب لحجم منتجاتك ومنصتك — مع ملكية كاملة 100% لمتجرك."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {STORE_PACKAGES_USD.map((pkg) => (
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
                    <span className="text-xs font-bold text-amber-300">{pkg.delivery}</span>
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
                  <span>احجز {pkg.name}</span>
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
            title="كل ما تحتاج معرفته قبل"
            highlight="إنشاء متجرك الإلكتروني"
            subtitle="إجابات واضحة حول اختيار المنصة، بوابات الدفع والشحن، المدة الزمنية، والسيو."
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
                <span>التغطية الدلالية لخدمات المتاجر الإلكترونية في UNIQUE</span>
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
              <span>استشارة مجانية لاختيار المنصة الأنسب + خطة إطلاق متجرك</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              جاهز لإطلاق متجرك الإلكتروني{" "}
              <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                وبدء استقبال الطلبات فوراً؟
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              تواصل معنا عبر واتساب الآن، شاركنا نوع منتجاتك وسوقك المستهدف، وسنجهّز لك
              خطة واضحة تشمل المنصة الأنسب وربط الدفع والشحن وتكلفة التنفيذ بدقة.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroStoreWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>ابدأ تصميم متجرك عبر واتساب</span>
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
              © {new Date().getFullYear()} UNIQUE Digital Agency — تصميم وتطوير المتاجر الإلكترونية.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/en/services/e-commerce" className="hover:text-cyan-300 transition">
                E-Commerce (EN)
              </Link>
              <Link href="/services/mobile-apps" className="hover:text-cyan-300 transition">
                تطبيقات الجوال
              </Link>
              <Link href="/services/seo" className="hover:text-cyan-300 transition">
                تحسين محركات البحث
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