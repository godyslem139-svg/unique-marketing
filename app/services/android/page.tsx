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
// NEXT.JS METADATA — MOBILE APP DEVELOPMENT SERVICE PAGE (ARABIC RTL)
// ============================================================================

export const metadata: Metadata = {
  title:
    "تصميم وتطوير تطبيقات الجوال (Android & iOS) | Flutter & Native — UNIQUE",
  description:
    "شركة تصميم وبرمجة تطبيقات الجوال (أندرويد وآيفون) في مصر والسعودية والإمارات والكويت. تطوير بتقنيات Flutter وReact Native وNative، لوحة تحكم سحابية، ربط بوابات الدفع (مدى، Apple Pay، Paymob، فوري)، ملكية 100% للسورس كود ورفع كامل على Google Play وApp Store.",
  keywords: [
    "تصميم وتطوير تطبيقات الجوال",
    "شركة برمجة تطبيقات جوال",
    "تصميم تطبيقات اندرويد وايفون",
    "برمجة تطبيقات Flutter",
    "برمجة تطبيقات React Native",
    "اسعار تصميم تطبيقات الجوال",
    "تصميم تطبيق متجر الكتروني",
    "تصميم تطبيق توصيل وحجز",
    "تحسين ظهور التطبيقات ASO",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/services/android",
    languages: {
      ar: "https://www.uniquee-ws.com/services/android",
      en: "https://www.uniquee-ws.com/en/services/android",
      "x-default": "https://www.uniquee-ws.com/services/android",
    },
  },
  openGraph: {
    title: "تصميم وتطوير تطبيقات الجوال (Android & iOS) — UNIQUE Digital Agency",
    description:
      "حوّل فكرتك أو متجرك إلى تطبيق جوال فائق السرعة على أندرويد وآيفون مع لوحة تحكم شاملة، ملكية كاملة للكود، ونشر معتمد على المتاجر.",
    url: "https://www.uniquee-ws.com/services/android",
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

interface AppSolution {
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
// DATA ARRAYS — MOBILE APP DESIGN & DEVELOPMENT
// ============================================================================

const HERO_KPIS: HeroKpi[] = [
  {
    id: "fps",
    value: "60 FPS",
    title: "أداء سلس يشبه الـ Native",
    subtitle: "تطبيقات سريعة الاستجابة بدون تعليق على جميع هواتف أندرويد وآيفون.",
    accent: "emerald",
  },
  {
    id: "savings",
    value: "45% توفير",
    title: "كود موحد للنظامين (Flutter)",
    subtitle: "إطلاق متزامن على Google Play وApp Store بتكلفة ووقت أقل مع جودة عالية.",
    accent: "cyan",
  },
  {
    id: "ownership",
    value: "100%",
    title: "ملكية كاملة للسورس كود",
    subtitle: "تستلم كامل الكود البرمجي وقواعد البيانات وحسابات المتاجر باسم شركتك.",
    accent: "blue",
  },
  {
    id: "pricing",
    value: "تبدأ من $950",
    title: "باقات شفافة بدفعات مرحلية",
    subtitle: "نطاق عمل مكتوب وواضح من الـ MVP حتى تطبيقات المؤسسات متعددة الأدوار.",
    accent: "amber",
  },
];

const SIX_APP_SOLUTIONS: AppSolution[] = [
  {
    id: "ecommerce-apps",
    number: "01",
    badge: "التجارة الإلكترونية",
    title: "تطبيقات المتاجر الإلكترونية والبيع المباشر",
    enTitle: "E-Commerce & Omnichannel Mobile Apps",
    summary:
      "حوّل متجرك الإلكتروني على WooCommerce أو Shopify أو سلة أو زد — أو ابنِ متجراً مخصصاً — إلى تطبيق جوال يضاعف تكرار الشراء عبر الإشعارات الذكية وتجربة الدفع السريع.",
    impact: "يرفع معدل إعادة الشراء بنسبة تصل إلى 3 أضعاف مقارنة بمتصفح الموبايل.",
    features: [
      "مزامنة لحظية للمنتجات والمخزون والطلبات مع موقعك الحالي عبر REST/GraphQL API",
      "دفع بنقرة واحدة عبر مدى، Apple Pay، STC Pay، Paymob، وفوري",
      "إشعارات Push مستهدفة للسلات المتروكة والعروض الفورية",
      "دعم كامل للعربية (RTL) والإنجليزية وتعدد العملات",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تصميم وتطوير تطبيق متجر إلكتروني لأندرويد وآيفون.",
  },
  {
    id: "ondemand-delivery",
    number: "02",
    badge: "التوصيل والخدمات الفورية",
    title: "تطبيقات التوصيل والخدمات عند الطلب (On-Demand)",
    enTitle: "Delivery, Logistics & Multi-Role Apps",
    summary:
      "منظومة متكاملة تشمل تطبيق العميل، تطبيق المندوب أو مقدم الخدمة، ولوحة تحكم التاجر والإدارة مع تتبع حي عبر الخرائط وتوزيع آلي للطلبات.",
    impact: "أتمتة كاملة لدورة الطلب من الحجز حتى التسليم بتكلفة تشغيل أقل.",
    features: [
      "تتبع حي للمندوب على خرائط Google Maps مع حساب زمن الوصول ETA",
      "نظام محفظة إلكترونية، كوبونات، وعمولات تلقائية لمقدمي الخدمة",
      "محادثة فورية داخل التطبيق (In-App Chat) وتنبيهات حالة الطلب",
      "لوحة تحكم مركزية لمتابعة الأسطول والتقارير المالية لحظياً",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تطوير تطبيق توصيل أو خدمات عند الطلب (عميل + مندوب + إدارة).",
  },
  {
    id: "booking-medical",
    number: "03",
    badge: "العيادات والحجوزات",
    title: "تطبيقات الحجز، العيادات، العقارات والخدمات",
    enTitle: "Booking, Healthcare & Real Estate Apps",
    summary:
      "تطبيقات مخصصة للمراكز الطبية، العيادات، شركات العقارات، الصالونات، والمطاعم لتنظيم المواعيد، عرض الوحدات أو الخدمات، وتحصيل العربون إلكترونياً.",
    impact: "يقلل المواعيد الفائتة (No-Shows) بالتذكيرات التلقائية ويبني ولاء العملاء.",
    features: [
      "جدولة ذكية للمواعيد مع تذكيرات تلقائية عبر الإشعارات وواتساب",
      "ملفات عملاء وسجل زيارات وفواتير رقمية مشفّرة وآمنة",
      "فلاتر بحث متقدمة بالخريطة والموقع الجغرافي والتقييمات",
      "نظام نقاط ولاء وباقات اشتراك شهرية متكررة",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تصميم تطبيق حجز مواعيد أو عيادات أو عقارات.",
  },
  {
    id: "edtech-lms",
    number: "04",
    badge: "التعليم الإلكتروني",
    title: "تطبيقات التعليم الإلكتروني والأكاديميات (EdTech)",
    enTitle: "E-Learning & Protected Video LMS Apps",
    summary:
      "منصات تعليمية محمية للأكاديميات والمدرسين ومراكز التدريب مع بث فيديو مشفّر ضد التسجيل، اختبارات تفاعلية، ومتابعة دقيقة لتقدم الطلاب.",
    impact: "يحمي محتواك التعليمي من التسريب ويتيح بيع الكورسات بسهولة على الجوال.",
    features: [
      "حماية الفيديوهات (DRM / Watermark ومنع تصوير الشاشة)",
      "بنك أسئلة، اختبارات مؤقتة، وإصدار شهادات إتمام تلقائية",
      "أكواد تفعيل، اشتراكات، وربط ببوابات الدفع المحلية والخليجية",
      "تحميل الدروس للمشاهدة بدون إنترنت (Offline Mode المشفّر)",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد برمجة تطبيق تعليمي محمي للأكاديمية أو الكورسات.",
  },
  {
    id: "enterprise-crm",
    number: "05",
    badge: "تطبيقات الشركات والأنظمة",
    title: "تطبيقات الشركات والمندوبين والأنظمة الداخلية",
    enTitle: "Enterprise, ERP/CRM & Field Operations",
    summary:
      "تطبيقات مخصصة لفرق المبيعات الميدانية، الصيانة، إدارة المخازن، والموارد البشرية مرتبطة مباشرة بأنظمة شركتك الحالية (ERP / CRM / Odoo / SAP).",
    impact: "يرفع إنتاجية الفريق الميداني ويمنح الإدارة تقارير حية ودقيقة لحظة بلحظة.",
    features: [
      "عمل أوفلاين مع مزامنة تلقائية فور عودة الاتصال بالإنترنت",
      "صلاحيات مستخدمين متقدمة (RBAC) وتسجيل حضور بالموقع الجغرافي",
      "قراءة الباركود وQR Code وإصدار فواتير إلكترونية فورية",
      "تشفير كامل للبيانات واتصال آمن عبر APIs معتمدة",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد تطوير تطبيق داخلي لشركتنا وربطه بنظام الإدارة.",
  },
  {
    id: "mvp-ai-apps",
    number: "06",
    badge: "الشركات الناشئة والذكاء الاصطناعي",
    title: "تطبيقات الـ MVP والذكاء الاصطناعي للشركات الناشئة",
    enTitle: "Startup MVPs & AI-Powered Mobile Apps",
    summary:
      "إطلاق سريع لنسخة أولية قوية (MVP) خلال 4 إلى 6 أسابيع لاختبار السوق وجذب المستثمرين، مع إمكانية دمج مساعد ذكاء اصطناعي وتوصيات ذكية داخل التطبيق.",
    impact: "تصل للسوق بأسرع وقت وبأقل مخاطرة مالية مع بنية قابلة للتوسع لملايين المستخدمين.",
    features: [
      "تصميم Figma تفاعلي قابل للعرض على المستثمرين قبل بدء البرمجة",
      "دمج قدرات الذكاء الاصطناعي (شات ذكي، بحث دلالي، وتوصيات مخصصة)",
      "بنية كود نظيفة (Clean Architecture) تسمح بإضافة المراحل التالية بسهولة",
      "تهيئة كاملة لصفحة التطبيق في المتاجر (ASO) لرفع التحميلات العضوية",
    ],
    whatsappMsg: "مرحباً UNIQUE، لدي فكرة تطبيق ناشئ (MVP) وأريد خطة وتكلفة التنفيذ.",
  },
];

const TECH_STACK_CARDS: TechStackCard[] = [
  {
    name: "Flutter (Dart)",
    tag: "الأفضل سرعةً وتكلفةً",
    bestFor: "تطبيقات Android وiOS معاً بكود موحد وأداء 60 FPS.",
    points: [
      "يوفر حتى 45% من تكلفة وزمن التطوير والصيانة",
      "واجهات مخصصة فائقة السلاسة بتصميم متطابق على النظامين",
      "مدعوم مباشرة من Google ومثالي للمتاجر والخدمات والـ MVP",
    ],
  },
  {
    name: "React Native",
    tag: "تكامل سلس مع Next.js",
    bestFor: "المشاريع المرتبطة بمواقع وتطبيقات ويب مبنية بـ React/Next.js.",
    points: [
      "مشاركة المنطق البرمجي وواجهات API مع موقعك بسهولة",
      "تحديثات سريعة وأداء قوي لتطبيقات المحتوى والتجارة",
      "مجتمع ضخم ومكتبات جاهزة للتكاملات المتقدمة",
    ],
  },
  {
    name: "Native (Swift & Kotlin)",
    tag: "للتطبيقات المعقدة جداً",
    bestFor: "التطبيقات المعتمدة بشدة على العتاد، البلوتوث، أو المعالجة الفورية.",
    points: [
      "استفادة 100% من قدرات معالج وكاميرا ومستشعرات الجهاز",
      "مثالي لتطبيقات البنوك، البث الحي المتقدم، وإنترنت الأشياء IoT",
      "أقصى درجات الأمان والالتزام الصارم بمعايير Apple وGoogle",
    ],
  },
  {
    name: "Backend & Admin Panel",
    tag: "السيرفر ولوحة التحكم",
    bestFor: "إدارة التطبيق والعملاء والطلبات والإشعارات بسهولة تامة.",
    points: [
      "Node.js / NestJS / Laravel APIs سريعة وقابلة للتوسع السحابي",
      "لوحة تحكم ويب عربي/إنجليزي بتقارير فورية وإدارة صلاحيات",
      "استضافة سحابية آمنة (AWS / DigitalOcean / Firebase) بنسخ احتياطي يومي",
    ],
  },
];

const ECOSYSTEM_INTEGRATIONS: IntegrationGroup[] = [
  {
    category: "بوابات الدفع (مصر والخليج)",
    badge: "دفع آمن وسلس",
    items: ["مدى (Mada) وApple Pay", "STC Pay وتابي وتمارا", "Paymob وفوري وإنستاباي", "Stripe وPayTabs وMyFatoorah"],
  },
  {
    category: "الخرائط والشحن واللوجستيات",
    badge: "ربط API مباشر",
    items: ["خرائط Google Maps والتتبع الحي", "أرامكس (Aramex) وسمسا (SMSA)", "بوسطة (Bosta) وشركات الشحن المحلية", "حساب تكلفة التوصيل تلقائياً بالمسافة"],
  },
  {
    category: "الإشعارات والتحليلات والنمو",
    badge: "قياس وتحويل",
    items: ["Firebase Cloud Messaging وOneSignal", "Google Analytics 4 وتقارير Crashlytics", "تسجيل الدخول بواتساب OTP وجوجل وأبل", "تحسين متجر التطبيقات (ASO) للتحميلات العضوية"],
  },
];

const UNIQUE_4_APP_GUARANTEES: GuaranteeTable[] = [
  {
    id: "g-uiux",
    title: "1. تجربة مستخدم (UI/UX) ترفع التحويل",
    badge: "Figma Prototype",
    items: [
      "رسم رحلة المستخدم (User Flow) وتقليل خطوات إتمام الطلب",
      "تصميم شاشات احترافية متوافقة تماماً مع العربية RTL والإنجليزية LTR",
      "نموذج تفاعلي (Clickable Prototype) لمراجعته واعتماده قبل البرمجة",
      "تصميم أيقونة ولقطات متجر (Screenshots) احترافية ترفع نسبة التحميل",
    ],
  },
  {
    id: "g-code",
    title: "2. هندسة برمجية نظيفة وملكية كاملة",
    badge: "100% Ownership",
    items: [
      "كود منظم وموثّق (Clean Architecture) قابل للتوسع والتطوير المستقبلي",
      "تسليم كامل السورس كود (Git Repository) وقواعد البيانات باسمك",
      "حماية ضد الاختراق وتشفير اتصالات الـ APIs وبيانات المستخدمين",
      "اختبارات QA شاملة على أجهزة أندرويد وآيفون حقيقية قبل الإطلاق",
    ],
  },
  {
    id: "g-store",
    title: "3. النشر المعتمد على المتاجر + ASO",
    badge: "Play & App Store",
    items: [
      "تجهيز ورفع التطبيق على حساباتك الرسمية في Google Play وApp Store",
      "معالجة ملاحظات مراجعة Apple وGoogle حتى الموافقة والنشر الفعلي",
      "تحسين عنوان ووصف وكلمات التطبيق (ASO) لتصدر البحث داخل المتجر",
      "إعداد سياسة الخصوصية وشروط الاستخدام المتوافقة مع سياسات المتاجر",
    ],
  },
  {
    id: "g-support",
    title: "4. الدعم الفني والتطوير بعد الإطلاق",
    badge: "SLA & Scaling",
    items: [
      "ضمان فني مجاني بعد الإطلاق لإصلاح أي أعطال برمجية طارئة",
      "مراقبة الأداء والاستقرار عبر Firebase Crashlytics",
      "تدريب فريقك على استخدام لوحة التحكم وإدارة المحتوى والطلبات",
      "خطط صيانة وتحديث مرنة لمواكبة إصدارات Android وiOS الجديدة",
    ],
  },
];

const DELIVERY_ROADMAP: DeliveryPhase[] = [
  {
    num: "01",
    timeframe: "الأسبوع 1",
    title: "التحليل، نطاق العمل والـ Wireframes",
    desc: "نحدد أهداف التطبيق، الأدوار، الشاشات، والربط المطلوب في وثيقة نطاق واضحة مع جدول زمني وميزانية محددة.",
    output: "وثيقة متطلبات SRS + خريطة الشاشات",
  },
  {
    num: "02",
    timeframe: "الأسبوع 2 – 3",
    title: "تصميم واجهات UI/UX التفاعلية",
    desc: "نصمم كامل شاشات التطبيق على Figma بهوية علامتك التجارية ونسلمك نموذجاً تفاعلياً لتجربته على هاتفك قبل كتابة سطر كود.",
    output: "تصميم Figma كامل ومعتمد",
  },
  {
    num: "03",
    timeframe: "الأسبوع 4 – 7",
    title: "البرمجة، الـ Backend ولوحة التحكم",
    desc: "تطوير التطبيق (Flutter / React Native / Native) بالتوازي مع بناء الـ APIs، ربط بوابات الدفع، ولوحة التحكم الإدارية.",
    output: "نسخة تجريبية أسبوعية (TestFlight / APK)",
  },
  {
    num: "04",
    timeframe: "الأسبوع 8",
    title: "اختبارات QA، الأمان والنشر + ASO",
    desc: "فحص شامل للأداء والأمان على مختلف الشاشات، رفع التطبيق على Google Play وApp Store، وتسليم السورس كود والتدريب.",
    output: "تطبيق حي على المتجرين + السورس كود الكامل",
  },
];

const APP_PACKAGES_USD: AppPackageUSD[] = [
  {
    id: "app-mvp",
    name: "باقة الانطلاق (MVP / تطبيق متجر)",
    badge: "للمتاجر والشركات الناشئة",
    price: "950",
    cycle: "تبدأ من / دولار",
    idealFor: "مثالية لتحويل متجرك الحالي إلى تطبيق أو إطلاق نسخة MVP سريعة على أندرويد وآيفون.",
    timeline: "4 – 5 أسابيع",
    features: [
      "تطبيق أندرويد وآيفون بكود موحد (Flutter)",
      "تصميم UI/UX عصري عربي وإنجليزي (حتى 15 شاشة)",
      "ربط بموقعك الحالي أو لوحة تحكم سحابية أساسية",
      "إشعارات Push فورية + ربط بوابة دفع إلكتروني واحدة",
      "رفع التطبيق على Google Play وApp Store + ضمان فني 3 أشهر",
    ],
    whatsappMsg: "مرحباً UNIQUE، أرغب في الاستفسار عن باقة الانطلاق لتطبيقات الجوال (تبدأ من $950).",
  },
  {
    id: "app-business",
    name: "باقة الأعمال الاحترافية (Business App)",
    badge: "الأكثر طلباً",
    price: "1,850",
    cycle: "تبدأ من / دولار",
    idealFor: "للشركات، العيادات، المتاجر المتقدمة، وتطبيقات الحجز والخدمات بتخصيص كامل.",
    isPopular: true,
    timeline: "6 – 8 أسابيع",
    features: [
      "تطبيق Android & iOS مخصص بالكامل مع تصميم Figma تفاعلي",
      "لوحة تحكم ويب متقدمة + Backend API سريع وقابل للتوسع",
      "ربط متعدد لبوابات الدفع (مدى، Apple Pay، Paymob، فوري) والشحن",
      "تسجيل دخول OTP، خرائط، تقييمات، وكوبونات خصم",
      "تحسين متجر التطبيقات (ASO) + ملكية 100% للسورس كود",
      "ضمان فني وتدريب للفريق لمدة 6 أشهر بعد الإطلاق",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد عرض سعر تفصيلي لباقة الأعمال الاحترافية لتصميم تطبيق جوال ($1,850+).",
  },
  {
    id: "app-enterprise",
    name: "باقة الأنظمة المتكاملة (Multi-Role / AI)",
    badge: "توصيل ومؤسسات كبرى",
    price: "3,200",
    cycle: "تبدأ من / دولار",
    idealFor: "لمنصات التوصيل متعددة التطبيقات (عميل + مندوب + تاجر)، التعليم المحمي، أو التكامل مع ERP وAI.",
    timeline: "8 – 12 أسبوعاً",
    features: [
      "منظومة تطبيقات متعددة الأدوار (عميل + مقدم خدمة/مندوب + لوحة إدارة)",
      "تتبع حي GPS، محادثة داخلية، محفظة، ونظام عمولات تلقائي",
      "دمج ميزات الذكاء الاصطناعي أو حماية DRM للفيديوهات التعليمية",
      "بنية سحابية عالية التحمل (High Availability) وأمان متقدم",
      "نشر كامل + ASO + عقد دعم وتطوير مستمر",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد مناقشة مشروع تطبيق متكامل متعدد الأدوار (باقة الأنظمة $3,200+).",
  },
];

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "التقنية والتكلفة",
    question: "هل تنصحون بـ Flutter أم برمجة Native منفصلة لأندرويد وآيفون؟",
    answer:
      "في أكثر من 85% من المشاريع التجارية والمتاجر وتطبيقات الحجز والتوصيل، يُعد Flutter الخيار الأذكى لأنه يمنحك أداءً سلساً (60 FPS) على أندرويد وآيفون من كود موحد مع توفير يصل إلى 45% من التكلفة ووقت التنفيذ. أما Native (Swift/Kotlin) فنوصي به للتطبيقات المعتمدة بشدة على عتاد الجهاز أو المعالجة المتخصصة جداً.",
  },
  {
    id: "faq-2",
    category: "ملكية الكود",
    question: "هل أمتلك السورس كود الكامل وحسابات المتاجر بعد التسليم؟",
    answer:
      "نعم بنسبة 100%. يتم رفع التطبيق على حساباتك الرسمية في Google Play وApple App Store، وتستلم كامل السورس كود (تطبيق الجوال + الـ Backend + لوحة التحكم) عبر Git Repository مع توثيق فني واضح بدون أي قيود.",
  },
  {
    id: "faq-3",
    category: "النشر على المتاجر",
    question: "هل تتولون رفع التطبيق ومتابعة موافقة Apple وGoogle؟",
    answer:
      "بالتأكيد. نجهز جميع ملفات المتجر ولقطات الشاشة وسياسة الخصوصية، ونرفع التطبيق على المتجرين ونتابع أي ملاحظات من فرق مراجعة Apple أو Google حتى يتم قبول التطبيق ونشره رسمياً.",
  },
  {
    id: "faq-4",
    category: "الربط بالموقع الحالي",
    question: "لدي موقع أو متجر إلكتروني حالياً، هل يمكن ربط التطبيق به؟",
    answer:
      "نعم، نربط تطبيق الجوال مباشرة بمتجرك على WooCommerce أو Shopify أو سلة أو زد أو موقعك المخصص عبر APIs، بحيث تتزامن المنتجات والأسعار والمخزون والطلبات في مكان واحد تلقائياً.",
  },
  {
    id: "faq-5",
    category: "نظام الدفعات",
    question: "كيف يتم تحديد السعر النهائي وطريقة السداد؟",
    answer:
      "بعد جلسة تحليل مجانية لفكرتك نرسل عرضاً فنياً ومالياً مكتوباً يحدد كل الشاشات والميزات والجدول الزمني، ويتم السداد على دفعات مرحلية مرتبطة بمخرجات ملموسة (التصميم، النسخة التجريبية، ثم النشر والتسليم).",
  },
  {
    id: "faq-6",
    category: "ما بعد الإطلاق",
    question: "ماذا يحدث بعد إطلاق التطبيق؟ وهل تقدمون تسويقاً وASO؟",
    answer:
      "نقدم ضماناً فنياً مجانياً بعد الإطلاق لمعالجة أي أعطال، كما نجهز التطبيق بمعايير تحسين متجر التطبيقات (ASO) لزيادة التحميلات العضوية، ويمكنك الاستفادة من خدماتنا في السيو وإدارة السوشيال ميديا لإطلاق حملة نمو متكاملة.",
  },
];

const SEMANTIC_KEYWORDS: string[] = [
  "تصميم وتطوير تطبيقات الجوال",
  "برمجة تطبيقات أندرويد وآيفون",
  "شركة برمجة تطبيقات Flutter",
  "تطوير تطبيقات React Native",
  "تصميم واجهات تطبيقات UI/UX",
  "تطبيق متجر إلكتروني مربوط بموقعك",
  "تطبيقات التوصيل والحجز والعيادات",
  "ربط مدى وApple Pay وPaymob",
  "رفع التطبيقات على Google Play وApp Store",
  "تحسين ظهور التطبيقات في المتاجر ASO",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD — Service + OfferCatalog USD + FAQPage + Breadcrumb)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمة تصميم وتطوير تطبيقات الجوال (Android & iOS) — UNIQUE Digital Agency",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://www.uniquee-ws.com",
      telephone: "+201270506511",
    },
    serviceType: "Mobile Application Design & Development (Flutter, React Native, iOS, Android)",
    areaServed: ["EG", "SA", "AE", "KW"],
    url: "https://www.uniquee-ws.com/services/android",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "باقات تصميم وتطوير تطبيقات الجوال (USD)",
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
        name: "الرئيسية",
        item: "https://www.uniquee-ws.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "تصميم وتطوير تطبيقات الجوال",
        item: "https://www.uniquee-ws.com/services/android",
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
// MAIN PAGE COMPONENT — MOBILE APP DEVELOPMENT SERVICE PAGE (ARABIC RTL)
// ============================================================================

export default function MobileAppsServicePage() {
  const heroConsultWhatsapp = getWhatsAppUrl(
    "مرحباً UNIQUE Digital Agency! لدي فكرة تطبيق جوال (Android & iOS) وأريد استشارة مجانية وتقديراً للتكلفة ومدة التنفيذ."
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
                UNIQUE <span className="text-blue-400">Apps</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">
                تصميم وتطوير تطبيقات الجوال
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#solutions" className="hover:text-cyan-300 transition">
              أنواع التطبيقات
            </a>
            <a href="#tech" className="hover:text-cyan-300 transition">
              التقنيات
            </a>
            <a href="#integrations" className="hover:text-cyan-300 transition">
              الدفع والربط
            </a>
            <a href="#roadmap" className="hover:text-cyan-300 transition">
              مراحل التنفيذ
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
              href="/en/services/android"
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
              <span>استشارة مجانية</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION + MOBILE ARCHITECTURE & TELEMETRY CARD
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
            <span className="text-cyan-300 font-semibold">تصميم وتطوير تطبيقات الجوال</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Android &amp; iOS • Flutter • React Native • Native</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">مصر والسعودية والإمارات</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.18] mb-6">
                تصميم وتطوير{" "}
                <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  تطبيقات الجوال
                </span>{" "}
                بأداء فائق وتجربة مستخدم تضاعف مبيعاتك
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                في <strong className="text-white">UNIQUE Digital Agency</strong> نحول فكرتك أو
                متجرك إلى تطبيق أندرويد وآيفون متكامل — بتصميم{" "}
                <strong className="text-cyan-300">UI/UX احترافي، لوحة تحكم سحابية، ربط بوابات الدفع</strong>{" "}
                وملكية 100% للسورس كود مع نشر معتمد على Google Play وApp Store.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "كود موحد Flutter/React Native يوفّر حتى 45%",
                  "ربط مدى، Apple Pay، STC Pay، Paymob وفوري",
                  "ملكية 100% للسورس كود وحسابات المتاجر باسمك",
                  "رفع كامل على Play & App Store مع تحسين ASO",
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
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>ناقش فكرة تطبيقك واحصل على عرض سعر</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <span>تصفح باقات التطبيقات</span>
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
                  دفعات مرحلية آمنة • ضمان فني بعد الإطلاق
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
                      معمارية التطبيق — Mobile Engineering Suite
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    iOS + Android
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">سرعة الإطارات</div>
                    <div className="text-xl font-black text-blue-400" dir="ltr">60 FPS</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">سلاسة فائقة</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">استقرار الجلسات</div>
                    <div className="text-xl font-black text-cyan-300" dir="ltr">99.9%</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">Crash-Free</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">ملكية الكود</div>
                    <div className="text-xl font-black text-amber-300" dir="ltr">100%</div>
                    <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">Git Full Repo</div>
                  </div>
                </div>

                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-neutral-200 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      خط إنتاج التطبيق المتكامل في UNIQUE
                    </span>
                    <span className="text-[11px] text-emerald-400 font-bold">End-to-End</span>
                  </div>
                  {[
                    { step: "1. تصميم UI/UX تفاعلي على Figma (RTL & LTR)", tag: "معتمد" },
                    { step: "2. تطوير Flutter / React Native / Native", tag: "60 FPS" },
                    { step: "3. Backend APIs + لوحة تحكم + بوابات دفع", tag: "مشفر" },
                    { step: "4. النشر على Google Play وApp Store + ASO", tag: "مضمون" },
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
            badge="حلول تطبيقات لكل قطاع"
            title="6 أنواع من تطبيقات الجوال نصممها"
            highlight="بأعلى معايير الجودة والأمان"
            subtitle="سواء كنت تبني متجراً، منصة توصيل، تطبيق عيادات، أكاديمية تعليمية، أو فكرة MVP جديدة — نبنيها لتنمو معك."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {SIX_APP_SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800/90 hover:border-blue-500/40 p-7 sm:p-8 flex flex-col justify-between transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-3xl font-black bg-gradient-to-l from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      {sol.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300">
                      {sol.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-1">{sol.title}</h3>
                  <div className="text-xs font-semibold text-blue-400 mb-4" dir="ltr">
                    {sol.enTitle}
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-5">{sol.summary}</p>

                  <div className="rounded-2xl bg-emerald-500/8 border border-emerald-500/25 p-3.5 mb-5">
                    <div className="text-[11px] font-extrabold text-emerald-300 mb-0.5">
                      العائد التجاري المباشر:
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
                  <span>اطلب عرض سعر لهذا النوع عبر واتساب</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. TECH STACK + EGYPT & GCC PAYMENT/SHIPPING INTEGRATIONS
      ==================================================================== */}
      <section id="tech" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="اختيار التقنية الأنسب لمشروعك"
            title="نطور تطبيقك بأقوى التقنيات"
            highlight="Flutter وReact Native وNative"
            subtitle="نرشح لك التقنية الأنسب لميزانيتك وخطتك التوسعية بشفافية هندسية كاملة."
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
              badge="جاهز للأسواق العربية والخليجية"
              title="ربط كامل مع بوابات الدفع"
              highlight="والشحن والخرائط والإشعارات"
              subtitle="تطبيقك ينطلق جاهزاً للبيع والتشغيل الفوري في مصر والسعودية والإمارات والكويت."
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
            badge="ضمانات التنفيذ في UNIQUE"
            title="4 التزامات هندسية تحمي"
            highlight="استثمارك في تطبيق الجوال"
            subtitle="وضوح كامل في التصميم، الكود، النشر على المتاجر، والدعم الفني بعد الإطلاق."
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
            badge="رحلة التنفيذ Agile"
            title="من الفكرة إلى النشر على المتجرين"
            highlight="في 4 مراحل واضحة"
            subtitle="تتابع تقدم تطبيقك أسبوعياً بنسخ تجريبية حقيقية على هاتفك حتى يوم الإطلاق."
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
                      المرحلة {ph.num}
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
          6. TRANSPARENT STARTING PACKAGES IN USD
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="باقات شفافة بدفعات مرحلية"
            title="باقات تصميم وتطوير تطبيقات الجوال"
            highlight="بالدولار الأمريكي ($)"
            subtitle="أسعار ابتدائية واضحة تساعدك على التخطيط، ونرسل لك عرضاً فنياً دقيقاً بعد مراجعة تفاصيل مشروعك."
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
                  <span>اطلب تفاصيل {pkg.name}</span>
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
            highlight="برمجة تطبيق الجوال الخاص بك"
            subtitle="إجابات واضحة حول Flutter مقابل Native، ملكية السورس كود، الرفع على المتاجر، والدفعات."
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
                <span>التغطية الدلالية لخدمات تطبيقات الجوال في UNIQUE</span>
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
              <span>جلسة تحليل مجانية لفكرة تطبيقك + تقدير التكلفة خلال 24 ساعة</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              جاهز لإطلاق تطبيقك على{" "}
              <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Google Play وApp Store؟
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              شاركنا تفاصيل فكرتك أو رابط متجرك على واتساب الآن، وسنجهز لك تصوراً فنياً واضحاً
              يشمل التقنية الأنسب، الجدول الزمني، والتكلفة الإجمالية بشفافية تامة.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroConsultWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>احجز استشارة لتطبيقك عبر واتساب</span>
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
              © {new Date().getFullYear()} UNIQUE Digital Agency — تصميم وتطوير تطبيقات الجوال (Android &amp; iOS).
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/en/services/android" className="hover:text-cyan-300 transition">
                Mobile Apps (EN)
              </Link>
              <Link href="/services/wordpress-nextjs" className="hover:text-cyan-300 transition">
                WordPress &amp; Next.js
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