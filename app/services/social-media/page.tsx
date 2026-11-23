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

function Share2({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
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

function Video({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
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
// NEXT.JS METADATA — SOCIAL MEDIA MANAGEMENT SERVICE PAGE (ARABIC RTL)
// ============================================================================

export const metadata: Metadata = {
  title:
    "إدارة حسابات السوشيال ميديا | تصميمات، ريلز وإعلانات ممولة تبدأ من $110 — UNIQUE",
  description:
    "خدمة إدارة حسابات السوشيال ميديا الاحترافية للشركات والمتاجر في مصر والسعودية والإمارات والكويت. تصميمات إبداعية، فيديوهات ريلز، خطة محتوى، جدولة ونشر، إدارة التفاعلات، وتقارير شهرية بباقات تبدأ من $110 شهرياً.",
  keywords: [
    "ادارة حسابات السوشيال ميديا",
    "شركة ادارة سوشيال ميديا",
    "باقات ادارة السوشيال ميديا",
    "تصميم بوستات وفيديوهات ريلز",
    "ادارة صفحات فيسبوك وانستجرام وتيك توك",
    "اسعار ادارة السوشيال ميديا بالدولار",
    "ادارة حملات اعلانية ممولة",
    "تسويق عبر منصات التواصل الاجتماعي",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/services/social-media",
    languages: {
      ar: "https://www.uniquee-ws.com/services/social-media",
      en: "https://www.uniquee-ws.com/en/services/social-media",
      "x-default": "https://www.uniquee-ws.com/services/social-media",
    },
  },
  openGraph: {
    title: "إدارة حسابات السوشيال ميديا والريلز — UNIQUE Digital Agency",
    description:
      "حوّل حساباتك على إنستجرام وفيسبوك وتيك توك وسناب شات إلى قناة مبيعات مستمرة بباقات شاملة تبدأ من $110 شهرياً.",
    url: "https://www.uniquee-ws.com/services/social-media",
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

interface SocialPillar {
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

interface PlatformPlaybook {
  name: string;
  tag: string;
  bestFor: string;
  points: string[];
}

interface SocialGuarantee {
  id: string;
  title: string;
  badge: string;
  items: string[];
}

interface MonthlyStep {
  num: string;
  timeframe: string;
  title: string;
  desc: string;
  output: string;
}

interface SocialPackageUSD {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  badge: string;
  price: string;
  oldPrice: string;
  isPopular?: boolean;
  features: string[];
  whatsappMsg: string;
}

interface ReelsTier {
  title: string;
  price: string;
  old: string;
  save: string;
  whatsappMsg: string;
}

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// DATA ARRAYS — SOCIAL MEDIA MANAGEMENT & REELS (OFFICIAL USD PRICING)
// ============================================================================

const HERO_KPIS: HeroKpi[] = [
  {
    id: "reach",
    value: "+410%",
    title: "متوسط نمو الوصول العضوي",
    subtitle: "انتشار حقيقي عبر الريلز والتصميمات الإبداعية الموجهة لجمهورك الشرائي.",
    accent: "emerald",
  },
  {
    id: "all-in-one",
    value: "فريق متكامل",
    title: "محتوى + تصميم + فيديو + نشر",
    subtitle: "فريق كامل (كاتب، مصمم، مونتير، ومدير حساب) بتكلفة أقل من موظف واحد.",
    accent: "cyan",
  },
  {
    id: "social-price",
    value: "تبدأ من $110",
    title: "باقات إدارة سوشيال شهرية",
    subtitle: "تشمل التصميمات والفيديوهات والجدولة وإدارة التفاعلات والتقرير الشهري.",
    accent: "blue",
  },
  {
    id: "reels-price",
    value: "$1.5 / ريلز",
    title: "باقات ريلز منفردة ومجمّعة",
    subtitle: "إنتاج احترافي سريع للريلز بباقات 10 و20 و30 ريلز بخصومات فورية.",
    accent: "amber",
  },
];

const SIX_SOCIAL_PILLARS: SocialPillar[] = [
  {
    id: "strategy-calendar",
    number: "01",
    badge: "التخطيط والاستراتيجية",
    title: "استراتيجية تسويقية وخطة محتوى شهرية (Content Calendar)",
    enTitle: "Data-Driven Social Strategy & Monthly Calendar",
    summary:
      "نبدأ بتحليل جمهورك ومنافسيك ونضع جدول نشر شهرياً متكاملاً يوازن بين المحتوى البيعي والتوعوي والتفاعلي ومواسم العروض في مصر والخليج.",
    impact: "ينهي النشر العشوائي ويمنح حساباتك شخصية تجارية واضحة ومقنعة.",
    features: [
      "تحديد الشريحة المستهدفة، نبرة الصوت، والزوايا التسويقية الأقوى",
      "خطة نشر شهرية كاملة تُعتمد منك مقدماً قبل التصميم والإنتاج",
      "استغلال المواسم (رمضان، الأعياد، اليوم الوطني، الجمعة البيضاء)",
      "تقسيم ذكي بين بوستات الثقة، العروض المباشرة، وقصص العملاء",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد خطة استراتيجية وإدارة شهرية لحسابات السوشيال ميديا.",
  },
  {
    id: "creative-design",
    number: "02",
    badge: "الهوية البصرية",
    title: "تصميمات إبداعية وبناء واجهة حساب احترافية",
    enTitle: "Scroll-Stopping Visuals & Brand Grid",
    summary:
      "تصميم بوستات، كاروسيل تفاعلي، وستوريز بهوية بصرية متناسقة تجعل العميل يتعرف على علامتك التجارية من أول لمحة ويرفع ثقته الفورية بمنتجك.",
    impact: "يحوّل صفحة حسابك إلى واجهة بيع احترافية تشجع الزائر على المتابعة والطلب.",
    features: [
      "تصميمات متوافقة مع مقاسات كل منصة (Instagram، Facebook، LinkedIn، X)",
      "كاروسيل تعليمي وبيعي يرفع وقت البقاء ومعدل الحفظ والمشاركة",
      "توحيد الألوان والخطوط وتحديث البايو والهايلايتس (Highlights)",
      "تصميم عروض موسمية وبانرات إعلانية عالية الجذب",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد رفع مستوى التصميمات والهوية البصرية لحساباتي.",
  },
  {
    id: "reels-video",
    number: "03",
    badge: "محرك الانتشار الأول",
    title: "إنتاج الريلز والفيديوهات القصيرة (Reels & TikTok)",
    enTitle: "Short-Form Video & Reels Production",
    summary:
      "الريلز اليوم هو أسرع طريق للوصول لمئات الآلاف مجاناً. نكتب السكريبت، نختار الخطاف البصري (Hook)، وننفذ مونتاجاً عصرياً بترجمة نصية ومؤثرات تشد الانتباه.",
    impact: "يضاعف الوصول العضوي ويجلب عملاء جدداً يومياً دون الاعتماد الكامل على الإعلانات.",
    features: [
      "فيديوهات قصيرة مدمجة داخل كل باقة إدارة شهرية (4 إلى 8 فيديوهات)",
      "إمكانية إضافة باقات ريلز منفردة (10، 20، أو 30 ريلز) بأسعار تنافسية",
      "مونتاج ديناميكي سريع، نصوص واضحة على الشاشة، ودعوة صريحة للشراء",
      "متوافقة للنشر المتزامن على Instagram Reels وTikTok وYouTube Shorts",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد إنتاج فيديوهات ريلز احترافية لحساباتي.",
  },
  {
    id: "scheduling-community",
    number: "04",
    badge: "الانتظام والتفاعل",
    title: "الجدولة الاحترافية وإدارة التفاعلات مع الجمهور",
    enTitle: "Smart Publishing & Community Management",
    summary:
      "نشر منتظم في أوقات ذروة تواجد جمهورك، متابعة التعليقات والرسائل بأسلوب احترافي وسريع، وتوجيه العملاء المهتمين مباشرة للواتساب أو إتمام الطلب.",
    impact: "يرفع معدل الرد السريع ويمنع ضياع العملاء المهتمين داخل التعليقات والرسائل.",
    features: [
      "جدولة النشر في أفضل أوقات التفاعل حسب تحليلات كل منصة",
      "ردود سريعة ومهذبة على التعليقات والاستفسارات المتكررة",
      "تنظيم ردود تلقائية ذكية لتحويل المهتمين فوراً لقناة البيع",
      "متابعة مستمرة للتفاعل وحماية سمعة الحساب من التعليقات المزعجة",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد إدارة النشر والردود والتفاعل على صفحات شركتي.",
  },
  {
    id: "paid-ads-ready",
    number: "05",
    badge: "مضاعفة المبيعات",
    title: "تكامل سلس مع الحملات الإعلانية الممولة (Paid Ads)",
    enTitle: "Meta, TikTok & Snapchat Ad Synergy",
    summary:
      "نجهّز محتوى حسابك وتصميماته ليكون جاهزاً للإعلانات الممولة (Creative Testing) مع ربط البيكسل وتوجيه الزوار لصفحات الهبوط أو رسائل واتساب بأقل تكلفة.",
    impact: "يرفع العائد على الإنفاق الإعلاني (ROAS) ويخفض تكلفة الرسالة والطلب.",
    features: [
      "تجهيز تصميمات وفيديوهات مخصصة للإعلانات الممولة بنسب تحويل عالية",
      "تنسيق كامل بين المحتوى العضوي وحملات إعادة الاستهداف (Retargeting)",
      "توجيه واضح للعميل نحو واتساب أو متجرك الإلكتروني بخطوة واحدة",
      "اختبار رسائل وعروض متعددة للوصول لأعلى إعلان مربح",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد إدارة السوشيال ميديا مع دعم الحملات الإعلانية الممولة.",
  },
  {
    id: "monthly-reports",
    number: "06",
    badge: "القياس والتطوير",
    title: "تقارير أداء شهرية شفافة وتطوير مستمر",
    enTitle: "Monthly Analytics & Growth Insights",
    summary:
      "في نهاية كل شهر تستلم تقريراً واضحاً بالأرقام يوضح نمو الوصول، التفاعل، أكثر البوستات والريلز نجاحاً، وخطتنا لتطوير النتائج في الشهر التالي.",
    impact: "تتابع عائد استثمارك بالبيانات الحقيقية لا بالتخمين.",
    features: [
      "قياس دقيق للوصول (Reach)، التفاعل، نمو المتابعين، والنقرات",
      "تحليل أفضل أنواع المحتوى التي جلبت أكبر عدد من الرسائل والاستفسارات",
      "توصيات عملية واضحة لزيادة المبيعات في دورة الشهر الجديد",
      "تواصل مباشر ومستمر مع مدير حسابك عبر واتساب",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد التعرف على نظام التقارير الشهرية وإدارة الحسابات لديكم.",
  },
];

const PLATFORM_PLAYBOOKS: PlatformPlaybook[] = [
  {
    name: "Instagram & Facebook",
    tag: "البيع والتفاعل اليومي",
    bestFor: "المتاجر الإلكترونية، العيادات، المطاعم، والخدمات في مصر والخليج.",
    points: [
      "بناء جريد (Grid) جذاب + ريلز يومية + ستوريز تفاعلية",
      "تحويل التعليقات والرسائل مباشرة إلى طلبات واتساب ومبيعات",
      "ربط متجر إنستجرام وفيسبوك مع متجرك الإلكتروني",
    ],
  },
  {
    name: "TikTok & Reels",
    tag: "أعلى انتشار عضوي",
    bestFor: "البراندات الساعية لوصول ضخم ومبيعات سريعة بتكلفة أقل.",
    points: [
      "سكريبتات قصيرة بخطافات قوية في أول 3 ثوانٍ",
      "متابعة الترندات المناسبة لهوية نشاطك بأسلوب احترافي",
      "تحويل المشاهدات إلى نقرات على البايو ورسائل شراء",
    ],
  },
  {
    name: "Snapchat & X (Twitter)",
    tag: "السوق السعودي والخليجي",
    bestFor: "الشركات والمتاجر والمشاريع المستهدفة للسعودية والإمارات والكويت.",
    points: [
      "محتوى سريع ومباشر باللهجة الخليجية القريبة من العميل",
      "إبراز العروض السريعة والتغطيات والردود الفورية على X",
      "تصميمات عمودية (9:16) جاهزة لقصص وإعلانات سناب شات",
    ],
  },
  {
    name: "LinkedIn",
    tag: "الشركات والـ B2B",
    bestFor: "الشركات الاستشارية، المصانع، المطورين العقاريين، وشركات التقنية.",
    points: [
      "محتوى قيادي (Thought Leadership) يبني ثقة صناع القرار",
      "كاروسيل احترافي يعرض دراسات الحالة وسابقة الأعمال",
      "استقطاب شراكات وصفقات B2B عالية القيمة",
    ],
  },
];

const UNIQUE_4_SOCIAL_GUARANTEES: SocialGuarantee[] = [
  {
    id: "sg-team",
    title: "1. فريق إبداعي متكامل لحسابك",
    badge: "Full Team",
    items: [
      "كاتب محتوى تسويقي + مصمم جرافيك + مونتير فيديو + مدير حساب",
      "تواصل مباشر وسريع مع فريقك عبر مجموعة واتساب مخصصة",
      "فهم عميق لسوق مصر والسعودية والإمارات والكويت",
      "التزام تام بهوية وألوان ونبرة صوت علامتك التجارية",
    ],
  },
  {
    id: "sg-approval",
    title: "2. اعتماد مسبق قبل النشر 100%",
    badge: "Zero Surprises",
    items: [
      "تراجع خطة المحتوى والتصميمات والفيديوهات قبل نزولها للحساب",
      "تعديلات مرنة وسريعة لضمان مطابقة كل بوست لتوقعاتك",
      "جدولة دقيقة بدون انقطاع أو تأخير في أيام النشر المتفق عليها",
      "حفظ كامل لملفات التصميم والمحتوى باسم علامتك التجارية",
    ],
  },
  {
    id: "sg-sales",
    title: "3. محتوى مصمم للمبيعات لا للزينة",
    badge: "ROI Focus",
    items: [
      "التركيز على إبراز عروضك ومميزاتك التنافسية ومعالجة اعتراضات العميل",
      "دعوات واضحة للتواصل عبر واتساب أو الشراء من متجرك في كل حملة",
      "دمج الريلز والتصميمات التفاعلية لرفع الوصول العضوي وتقليل تكلفة الإعلان",
      "تكامل كامل مع خدمات السيو وتصميم المواقع لدينا عند الحاجة",
    ],
  },
  {
    id: "sg-flex",
    title: "4. باقات شهرية مرنة وتقارير واضحة",
    badge: "No Lock-In",
    items: [
      "أسعار شفافة بالدولار تبدأ من $110 شهرياً بدون عقود سنوية إجبارية",
      "إمكانية الترقية أو إضافة باقات ريلز منفردة في أي وقت",
      "تقرير شهري مفصل بالأرقام يوضح نمو الحساب والخطوة القادمة",
      "ملكية كاملة 100% لجميع حساباتك الإعلانية وصفحاتك",
    ],
  },
];

const MONTHLY_WORKFLOW: MonthlyStep[] = [
  {
    num: "01",
    timeframe: "الأيام 1 – 3",
    title: "فحص الحسابات وبناء الاستراتيجية",
    desc: "نراجع حساباتك الحالية، نحسّن البايو والهايلايتس، ونبني خطة المحتوى الشهرية وأفكار الريلز.",
    output: "خطة شهرية كاملة للاعتماد",
  },
  {
    num: "02",
    timeframe: "الأيام 4 – 8",
    title: "التصميم وإنتاج الفيديوهات",
    desc: "ننفّذ التصميمات الإبداعية ومونتاج الفيديوهات والريلز بهوية علامتك ونرسلها لك للمراجعة والاعتماد.",
    output: "مكتبة تصميمات وريلز معتمدة",
  },
  {
    num: "03",
    timeframe: "طوال الشهر",
    title: "الجدولة، النشر وإدارة التفاعلات",
    desc: "نشر منتظم في أوقات الذروة مع متابعة التفاعلات والتعليقات وتوجيه العملاء المهتمين للشراء.",
    output: "حضور نشط وتفاعل يومي متواصل",
  },
  {
    num: "04",
    timeframe: "نهاية الشهر",
    title: "التقرير الشهري وخطة النمو التالية",
    desc: "نسلمك تقريراً مفصلاً بالنتائج والأرقام ونضبط استراتيجية الشهر الجديد لمضاعفة النمو.",
    output: "تقرير أداء + خطة الشهر القادم",
  },
];

const SOCIAL_PACKAGES_USD: SocialPackageUSD[] = [
  {
    id: "social-basic",
    name: "الباقة الأساسية",
    subtitle: "إدارة احترافية لحضورك وزيادة مبيعاتك",
    image: "/price.webp",
    badge: "خصم 40%",
    price: "110",
    oldPrice: "180",
    features: [
      "إدارة السوشيال ميديا بشكل متكامل",
      "8 تصميمات إبداعية بهوية علامتك",
      "4 فيديوهات إبداعية (ريلز)",
      "جدولة ونشر المحتوى في أوقات الذروة",
      "إدارة التفاعلات مع الجمهور",
      "تقرير شهري مفصل بالأرقام",
    ],
    whatsappMsg: "مرحباً UNIQUE، أرغب في الاشتراك في الباقة الأساسية لإدارة السوشيال ميديا ($110 شهرياً).",
  },
  {
    id: "social-pro",
    name: "الباقة الاحترافية",
    subtitle: "الأقوى لنمو التفاعل والمبيعات للشركات والمتاجر",
    image: "/pricee.webp",
    badge: "الأكثر طلباً • خصم 25%",
    price: "165",
    oldPrice: "220",
    isPopular: true,
    features: [
      "إدارة السوشيال ميديا بشكل متكامل",
      "12 تصميم إبداعي بهوية علامتك",
      "6 فيديوهات إبداعية مميزة (ريلز)",
      "جدولة ونشر المحتوى في أوقات الذروة",
      "إدارة التفاعلات مع الجمهور",
      "استراتيجية تسويقية مخصصة + تقرير شهري",
    ],
    whatsappMsg: "مرحباً UNIQUE، أرغب في الاشتراك في الباقة الاحترافية لإدارة السوشيال ميديا ($165 شهرياً).",
  },
  {
    id: "social-elite",
    name: "باقة النخبة",
    subtitle: "أقوى حضور وتفاعل وسيطرة على منصات التواصل",
    image: "/priceee.webp",
    badge: "خصم 27%",
    price: "200",
    oldPrice: "275",
    features: [
      "إدارة السوشيال ميديا الشاملة",
      "16 تصميم إبداعي احترافي",
      "8 فيديوهات إبداعية مميزة (ريلز)",
      "جدولة ونشر المحتوى باحترافية",
      "إدارة التفاعلات والرسائل مع الجمهور",
      "استراتيجية تسويقية مخصصة + تقرير شهري",
    ],
    whatsappMsg: "مرحباً UNIQUE، أرغب في الاشتراك في باقة النخبة لإدارة السوشيال ميديا ($200 شهرياً).",
  },
];

const REELS_PACKAGES_USD: ReelsTier[] = [
  {
    title: "ريلز واحد",
    price: "1.5",
    old: "",
    save: "للتجربة السريعة",
    whatsappMsg: "مرحباً UNIQUE، أريد طلب ريلز واحد ($1.5).",
  },
  {
    title: "باقة 10 ريلز",
    price: "12",
    old: "15",
    save: "وفر $3",
    whatsappMsg: "مرحباً UNIQUE، أريد حجز باقة 10 ريلز ($12).",
  },
  {
    title: "باقة 20 ريلز",
    price: "22",
    old: "30",
    save: "وفر $8",
    whatsappMsg: "مرحباً UNIQUE، أريد حجز باقة 20 ريلز ($22).",
  },
  {
    title: "باقة 30 ريلز",
    price: "27",
    old: "45",
    save: "وفر $18",
    whatsappMsg: "مرحباً UNIQUE، أريد حجز باقة 30 ريلز ($27).",
  },
];

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "ما تشمله الباقات",
    question: "هل تشمل باقات إدارة السوشيال ميديا كتابة المحتوى والتصميم والمونتاج معاً؟",
    answer:
      "نعم، كل باقة شاملة بالكامل لكتابة المحتوى، التصميم الإبداعي، إنتاج الفيديوهات القصيرة، الجدولة والنشر، إدارة التفاعلات، والتقرير الشهري بدون أي مصاريف إضافية مخفية.",
  },
  {
    id: "faq-2",
    category: "ميزانية الإعلانات",
    question: "هل أسعار الباقات الشهرية تشمل ميزانية الإعلانات الممولة؟",
    answer:
      "أسعار الباقات تغطي الإدارة والإنتاج الإبداعي الكامل (التصميمات، الفيديوهات، المحتوى، والنشر)، بينما ميزانية الإعلانات الممولة تُدفع مباشرة للمنصات (Meta / TikTok / Snapchat) حسب الميزانية التي تحددها لحملاتك.",
  },
  {
    id: "faq-3",
    category: "المنصات المدعومة",
    question: "ما هي المنصات التي يمكنكم إدارتها ضمن الباقة؟",
    answer:
      "ندير حسابات فيسبوك، إنستجرام، تيك توك، سناب شات، إكس (تويتر)، ولينكدإن، وننشر المحتوى بالتنسيق والمقاس المثالي لكل منصة.",
  },
  {
    id: "faq-4",
    category: "باقات الريلز",
    question: "هل يمكنني طلب باقة ريلز فقط بدون الاشتراك في باقة الإدارة الشهرية؟",
    answer:
      "نعم بالتأكيد! نوفر باقات ريلز مستقلة تبدأ من $1.5 للريلز الواحد وحتى $27 لباقة 30 ريلز، ويمكنك طلبها وحدها أو إضافتها فوق باقة الإدارة الشهرية.",
  },
  {
    id: "faq-5",
    category: "المرونة والعقود",
    question: "هل الاشتراك الشهري مرن أم يوجد التزام سنوي؟",
    answer:
      "الاشتراك شهري مرن بالكامل بدون أي عقود احتكارية، وتملك 100% من حساباتك وصفحاتك ومحتواك منذ اليوم الأول.",
  },
];

const SEMANTIC_KEYWORDS: string[] = [
  "إدارة حسابات السوشيال ميديا",
  "باقات إدارة السوشيال ميديا بالدولار",
  "شركة سوشيال ميديا في مصر والسعودية",
  "إنتاج فيديوهات ريلز وتيك توك",
  "تصميم بوستات سوشيال ميديا احترافية",
  "إدارة صفحات إنستجرام وفيسبوك",
  "إدارة حسابات سناب شات وإكس للخليج",
  "كتابة خطط محتوى سوشيال ميديا",
  "إدارة التفاعلات وتحويل الرسائل لمبيعات",
  "تقارير أداء السوشيال ميديا الشهرية",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD — Service + OfferCatalog USD + FAQPage + Breadcrumb)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمة إدارة حسابات السوشيال ميديا وإنتاج الريلز — UNIQUE Digital Agency",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://www.uniquee-ws.com",
      telephone: "+201270506511",
    },
    serviceType: "Social Media Account Management & Reels Production",
    areaServed: ["EG", "SA", "AE", "KW"],
    url: "https://www.uniquee-ws.com/services/social-media",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "باقات إدارة السوشيال ميديا الشهرية (USD)",
      itemListElement: SOCIAL_PACKAGES_USD.map((pkg) => ({
        "@type": "Offer",
        name: pkg.name,
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
        name: "إدارة حسابات السوشيال ميديا",
        item: "https://www.uniquee-ws.com/services/social-media",
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
// MAIN PAGE COMPONENT — SOCIAL MEDIA MANAGEMENT SERVICE PAGE (ARABIC RTL)
// ============================================================================

export default function SocialMediaServicePage() {
  const heroSocialWhatsapp = getWhatsAppUrl(
    "مرحباً UNIQUE Digital Agency! أريد الاستفسار عن باقات إدارة حسابات السوشيال ميديا والريلز لعلامتي التجارية."
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
                UNIQUE <span className="text-blue-400">Social</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">
                إدارة حسابات السوشيال ميديا والريلز
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#pillars" className="hover:text-cyan-300 transition">
              خدمات الإدارة
            </a>
            <a href="#platforms" className="hover:text-cyan-300 transition">
              المنصات
            </a>
            <a href="#packages" className="hover:text-cyan-300 transition">
              الباقات
            </a>
            <a href="#reels" className="hover:text-cyan-300 transition">
              باقات الريلز
            </a>
            <a href="#faq" className="hover:text-cyan-300 transition">
              الأسئلة الشائعة
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/en/services/social-media"
              className="px-3.5 py-2 rounded-xl border border-neutral-800 bg-neutral-950 hover:border-cyan-500/50 text-xs font-bold text-neutral-200 hover:text-cyan-300 transition"
            >
              English
            </Link>
            <a
              href={heroSocialWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-l from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>ابدأ إدارة حساباتك</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION + SOCIAL GROWTH & REELS TELEMETRY CARD
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
            <span className="text-cyan-300 font-semibold">إدارة حسابات السوشيال ميديا</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instagram • Facebook • TikTok • Snapchat • LinkedIn</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">باقات تبدأ من $110</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.18] mb-6">
                خدمة{" "}
                <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  إدارة حسابات السوشيال ميديا
                </span>{" "}
                لبناء علامة قوية وتحويل المتابعين إلى مبيعات
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                في <strong className="text-white">UNIQUE Digital Agency</strong> نتولى إدارة
                حساباتك بالكامل عبر فريق متكامل يصنع{" "}
                <strong className="text-cyan-300">
                  التصميمات الإبداعية، فيديوهات الريلز، خطة المحتوى، الجدولة وإدارة التفاعلات
                </strong>{" "}
                بباقات شهرية مرنة تبدأ من $110 فقط.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "8 إلى 16 تصميماً إبداعياً + 4 إلى 8 فيديوهات شهرياً",
                  "استراتيجية محتوى مخصصة لجمهور مصر والخليج",
                  "جدولة منتظمة + إدارة التفاعلات والرسائل",
                  "باقات ريلز إضافية تبدأ من $1.5 فقط للريلز",
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
                  href={heroSocialWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>احجز باقة إدارة السوشيال ميديا</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <span>تصفح الباقات والأسعار</span>
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
                  خصومات حتى 40% • بدون عقود سنوية
                </span>
              </div>
            </div>

            {/* Hero Visual: Social Media Growth Telemetry */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-cyan-300">
                      مؤشر نمو الحسابات — Social Growth Console
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    +410% وصول
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">مشاهدات ريلز</div>
                    <div className="text-xl font-black text-blue-400" dir="ltr">1.2M+</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">↑ عضوي نشط</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">معدل التفاعل</div>
                    <div className="text-xl font-black text-cyan-300" dir="ltr">+285%</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">رسائل وحفظ</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">تبدأ من</div>
                    <div className="text-xl font-black text-amber-300" dir="ltr">$110</div>
                    <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">شهرياً</div>
                  </div>
                </div>

                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-neutral-200 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      ما ينفّذه فريقك في UNIQUE شهرياً
                    </span>
                    <span className="text-[11px] text-cyan-300 font-bold">شامل بالكامل</span>
                  </div>
                  {[
                    { ch: "تصميمات بوستات وكاروسيل بهوية متناسقة", tag: "8–16 شهرياً" },
                    { ch: "فيديوهات ريلز إبداعية سريعة الانتشار", tag: "4–8 شهرياً" },
                    { ch: "جدولة النشر وإدارة التفاعلات والرسائل", tag: "يومياً ✓" },
                    { ch: "استراتيجية تسويقية وتقرير أداء شهري", tag: "مضمون ✓" },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-blue-500/8 border border-blue-500/20 text-xs"
                    >
                      <span className="text-neutral-200 font-medium">{row.ch}</span>
                      <span className="text-emerald-400 font-bold shrink-0">{row.tag}</span>
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
          3. 6 CORE SOCIAL MEDIA MANAGEMENT PILLARS
      ==================================================================== */}
      <section id="pillars" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="إدارة شاملة 360° لحساباتك"
            title="6 ركائز ننفّذها في خدمة"
            highlight="إدارة حسابات السوشيال ميديا"
            subtitle="من التخطيط والتصميم وإنتاج الريلز حتى الجدولة والردود والتقارير — فريق واحد يبني حضورك ومبيعاتك."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {SIX_SOCIAL_PILLARS.map((p) => (
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
                      العائد المباشر لعلامتك:
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
                  <span>استفسر عن هذه الركيزة عبر واتساب</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. PLATFORMS + GUARANTEES + MONTHLY WORKFLOW
      ==================================================================== */}
      <section id="platforms" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="استراتيجية مخصصة لكل منصة"
            title="ندير حساباتك باحترافية على"
            highlight="كافة منصات التواصل الاجتماعي"
            subtitle="لكل منصة خوارزميتها وجمهورها — نكيّف المحتوى والتصميم والريلز ليناسب كل قناة."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {PLATFORM_PLAYBOOKS.map((pl, idx) => (
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

          <SectionHeader
            badge="ضمانات العمل في UNIQUE"
            title="4 التزامات تضمن لك"
            highlight="إدارة احترافية بدون عشوائية"
            subtitle="شفافية كاملة في الاعتماد، المواعيد، الملكية، وقياس الأداء الشهري."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {UNIQUE_4_SOCIAL_GUARANTEES.map((tbl) => (
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
            badge="دورة العمل الشهرية"
            title="كيف ندير حساباتك شهرياً"
            highlight="في 4 خطوات منظمة"
            subtitle="من استلام الحساب حتى التقرير الشهري — كل خطوة واضحة ومعتمدة منك."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MONTHLY_WORKFLOW.map((ph) => (
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
          5. OFFICIAL SOCIAL MEDIA PACKAGES ($110 / $165 / $200) + REELS
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="باقات إدارة السوشيال ميديا الرسمية"
            title="باقات وأسعار إدارة السوشيال ميديا"
            highlight="بالدولار الأمريكي ($)"
            subtitle="باقات شاملة للتصميمات والفيديوهات والجدولة وإدارة التفاعلات بخصومات حصرية."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch mb-16">
            {SOCIAL_PACKAGES_USD.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl overflow-hidden flex flex-col justify-between transition ${
                  pkg.isPopular
                    ? "bg-gradient-to-b from-[#0A1428] to-[#070B14] border-2 border-cyan-400/60 shadow-2xl shadow-blue-600/20"
                    : "bg-[#070B14] border border-neutral-800 hover:border-blue-500/40"
                }`}
              >
                <div>
                  <div className="relative aspect-[4/3] w-full bg-neutral-950 border-b border-neutral-800 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={`${pkg.name} — إدارة السوشيال ميديا UNIQUE`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-extrabold backdrop-blur-md ${
                        pkg.isPopular
                          ? "bg-cyan-500/90 text-black"
                          : "bg-black/80 text-cyan-300 border border-cyan-500/40"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <div className="p-7 sm:p-8">
                    <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-5">{pkg.subtitle}</p>

                    <div className="flex items-baseline gap-3 pb-6 mb-6 border-b border-neutral-800">
                      <span dir="ltr" className="text-4xl font-black text-white">
                        ${pkg.price}
                      </span>
                      <span dir="ltr" className="text-base text-neutral-500 line-through font-bold">
                        ${pkg.oldPrice}
                      </span>
                      <span className="text-xs font-bold text-cyan-300">/ شهرياً</span>
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
                </div>

                <div className="px-7 pb-7 sm:px-8 sm:pb-8">
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
                    <span>اشترك في {pkg.name}</span>
                    <ArrowUpLeft className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Reels Packages Showcase */}
          <div
            id="reels"
            className="rounded-3xl bg-[#070B14] border border-cyan-500/30 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
                <Image
                  src="/priceeee.webp"
                  alt="باقات إنتاج فيديوهات الريلز — UNIQUE Digital Agency"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-4">
                <Video className="w-3.5 h-3.5" />
                <span>باقات الريلز الإضافية والمستقلة</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                ضاعف انتشارك مع{" "}
                <span className="bg-gradient-to-l from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  باقات فيديوهات الريلز الاحترافية
                </span>
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                اطلب فيديوهات ريلز إضافية لحساباتك على إنستجرام وتيك توك وسناب شات بأعلى جودة وأقل تكلفة للقطعة.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {REELS_PACKAGES_USD.map((r, idx) => (
                  <a
                    key={idx}
                    href={getWhatsAppUrl(r.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-cyan-400/60 p-4 flex items-center justify-between gap-3 transition"
                  >
                    <div>
                      <div className="text-sm font-extrabold text-white group-hover:text-cyan-300 transition">
                        {r.title}
                      </div>
                      <span className="text-[11px] font-bold text-emerald-400">{r.save}</span>
                    </div>
                    <div className="text-left">
                      <div dir="ltr" className="text-2xl font-black text-white">
                        ${r.price}
                      </div>
                      {r.old && (
                        <div dir="ltr" className="text-xs text-neutral-500 line-through">
                          ${r.old}
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. FAQ ACCORDION + SEMANTIC CLOUD
      ==================================================================== */}
      <section id="faq" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="الأسئلة الشائعة"
            title="كل ما تحتاج معرفته عن"
            highlight="إدارة السوشيال ميديا في UNIQUE"
            subtitle="إجابات واضحة حول الباقات، ميزانية الإعلانات، المنصات، وباقات الريلز."
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
                <span>التغطية الدلالية لخدمات السوشيال ميديا في UNIQUE</span>
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
          7. FINAL CTA & FOOTER
      ==================================================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B1730] via-[#070D1A] to-[#051418] border border-blue-500/35 p-8 sm:p-12 lg:p-14 text-center shadow-2xl shadow-blue-950/50">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>مراجعة مجانية لحساباتك الحالية + اقتراح الباقة الأنسب</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              جاهز لنقل حساباتك على السوشيال ميديا{" "}
              <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                لمستوى احترافي يضاعف مبيعاتك؟
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              أرسل لنا روابط حساباتك عبر واتساب الآن وسنشاركك تقييماً سريعاً وخطة الانطلاق
              للشهر الأول بأفضل باقة تناسب ميزانيتك.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroSocialWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>ابدأ إدارة حساباتك عبر واتساب</span>
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
              © {new Date().getFullYear()} UNIQUE Digital Agency — إدارة حسابات السوشيال ميديا والريلز.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/en/services/social-media" className="hover:text-cyan-300 transition">
                Social Media (EN)
              </Link>
              <Link href="/services/content-writing" className="hover:text-cyan-300 transition">
                كتابة المحتوى
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