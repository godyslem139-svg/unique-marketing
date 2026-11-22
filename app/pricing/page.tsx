"use client";

import { useState } from "react";
import Image from "next/image";

// ============================================================================
// BUILT-IN ZERO-DEPENDENCY SVG ICONS
// ============================================================================

interface IconProps {
  className?: string;
}

function SparklesIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

function CheckIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowUpLeftIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 17 7 7" />
      <path d="M7 17V7h10" />
    </svg>
  );
}

function ZoomInIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="11" x2="11" y1="8" y2="14" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </svg>
  );
}

function CloseIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function CrownIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  );
}

function LinkChainIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function PhoneIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// ============================================================================
// WHATSAPP HELPER
// ============================================================================

const WHATSAPP_INTL = "201270506511";

function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(message)}`;
}

// ============================================================================
// SCALABLE CATEGORIES CONFIG
// لإضافة خدمة جديدة مستقبلاً أضف عنصراً جديداً في هذه المصفوفة فقط
// ============================================================================

type CategoryId = "all" | "social" | "web" | "backlinks";

interface CategoryTab {
  id: CategoryId;
  label: string;
  subtitle: string;
  countBadge: string;
}

const CATEGORY_TABS: CategoryTab[] = [
  {
    id: "all",
    label: "الكل",
    subtitle: "جميع باقات وعروض UNIQUE",
    countBadge: "11 باقة + الريلز",
  },
  {
    id: "social",
    label: "إدارة السوشيال ميديا",
    subtitle: "إدارة الحسابات، التصميمات والريلز",
    countBadge: "3 باقات + الريلز",
  },
  {
    id: "web",
    label: "تصميم المواقع الإلكترونية",
    subtitle: "مواقع الشركات والمتاجر الاحترافية",
    countBadge: "3 باقات",
  },
  {
    id: "backlinks",
    label: "باقات الباك لينكس",
    subtitle: "تقوية الدومين وتصدر نتائج جوجل",
    countBadge: "5 باقات",
  },
];

// ============================================================================
// 1. SOCIAL MEDIA & REELS DATA (USD)
// ============================================================================

interface SocialPackage {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  price: string;
  oldPrice: string;
  badge: string;
  isPopular?: boolean;
  features: string[];
}

const SOCIAL_PACKAGES: SocialPackage[] = [
  {
    id: "social-basic",
    title: "الباقة الأساسية",
    subtitle: "إدارة احترافية لحضورك وزيادة مبيعاتك",
    image: "/price.webp",
    price: "110",
    oldPrice: "180",
    badge: "خصم 40%",
    features: [
      "إدارة السوشيال ميديا",
      "8 تصميمات إبداعية",
      "4 فيديوهات إبداعية",
      "جدولة ونشر المحتوى",
      "إدارة التفاعلات مع الجمهور",
      "تقرير شهري مفصل",
    ],
  },
  {
    id: "social-pro",
    title: "الباقة الاحترافية",
    subtitle: "إدارة احترافية لحضورك وزيادة مبيعاتك",
    image: "/pricee.webp",
    price: "165",
    oldPrice: "220",
    badge: "الأكثر طلباً • خصم 25%",
    isPopular: true,
    features: [
      "إدارة السوشيال ميديا",
      "12 تصميم إبداعي",
      "6 فيديوهات إبداعية مميزة",
      "جدولة ونشر المحتوى",
      "إدارة التفاعلات مع الجمهور",
      "استراتيجية تسويقية مخصصة",
    ],
  },
  {
    id: "social-elite",
    title: "باقة النخبة",
    subtitle: "باقة النخبة لأقوى حضور وتفاعل",
    image: "/priceee.webp",
    price: "200",
    oldPrice: "275",
    badge: "خصم 27%",
    features: [
      "إدارة السوشيال ميديا",
      "16 تصميم إبداعي",
      "8 فيديوهات إبداعية مميزة",
      "جدولة ونشر المحتوى",
      "إدارة التفاعلات مع الجمهور",
      "استراتيجية تسويقية مخصصة",
    ],
  },
];

const REELS_PACKAGES = [
  { title: "ريلز واحد", price: "1.5", old: "", save: "" },
  { title: "باقة 10 ريلز", price: "12", old: "15", save: "وفر $3" },
  { title: "باقة 20 ريلز", price: "22", old: "30", save: "وفر $8" },
  { title: "باقة 30 ريلز", price: "27", old: "45", save: "وفر $18" },
];

// ============================================================================
// 2. WEB DESIGN PACKAGES DATA (USD — $220 / $290 / $365)
// ============================================================================

interface WebPackage {
  id: string;
  tierEn: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  price: string;
  oldPrice: string;
  billingLabel: string;
  accent: "blue" | "cyan" | "amber";
  isPopular?: boolean;
  isPremium?: boolean;
  features: string[];
}

const WEB_DESIGN_PACKAGES: WebPackage[] = [
  {
    id: "web-basic",
    tierEn: "STARTER WEBSITE PACKAGE",
    title: "الباقة الأساسية لتصميم المواقع",
    subtitle: "انطلاقتك الرقمية تبدأ من هنا — مثالية للشركات الناشئة والمكاتب",
    image: "/basic.webp",
    badge: "Starter • حتى 5 صفحات",
    price: "220",
    oldPrice: "290",
    billingLabel: "دولار / تدفع مرة واحدة",
    accent: "blue",
    features: [
      "حجز الدومين والاستضافة",
      "تصميم موقع إلكتروني احترافي",
      "تصميم متوافق مع الهواتف والأجهزة اللوحية والكمبيوتر",
      "إنشاء حتى 5 صفحات رئيسية",
      "تصميم صفحة رئيسية جذابة (Homepage)",
      "صفحة من نحن + صفحة الخدمات أو المنتجات + صفحة اتصل بنا",
      "نموذج تواصل مباشر + ربط الموقع بواتساب",
      "ربط حسابات السوشيال ميديا",
      "شهادة الأمان SSL وإعدادات SEO الأساسية",
      "ربط الموقع بـ Google Search Console",
      "إضافة خريطة Google Maps",
      "لوحة تحكم لإدارة محتوى الموقع",
    ],
  },
  {
    id: "web-professional",
    tierEn: "BUSINESS PACKAGE",
    title: "الباقة الاحترافية لتصميم المواقع",
    subtitle: "موقع متكامل .. لنجاح أكبر — للشركات الساعية للنمو والسيو",
    image: "/professional.webp",
    badge: "الأكثر طلباً • حتى 12 صفحة",
    price: "290",
    oldPrice: "380",
    billingLabel: "دولار / تدفع مرة واحدة",
    accent: "cyan",
    isPopular: true,
    features: [
      "جميع مميزات الباقة الأساسية",
      "تصميم مخصص يتناسب مع الهوية البصرية للشركة",
      "إنشاء حتى 12 صفحة داخل الموقع + واجهات UI/UX احترافية",
      "إنشاء قسم للمقالات والأخبار (Blog)",
      "إنشاء معرض أعمال ومشروعات (Portfolio)",
      "كتابة أو تهيئة المحتوى الأساسي لصفحات الموقع",
      "تحسين SEO الداخلي لجميع الصفحات (On-Page SEO)",
      "تهيئة العناوين والوصف والكلمات المفتاحية",
      "تحسين سرعة تحميل الموقع وتحسين الصور وضغطها",
      "ربط Google Analytics 4 وإعداد وتتبع نماذج التواصل",
      "إنشاء صفحات هبوط تسويقية (Landing Pages)",
      "إضافة أزرار ووسائل التواصل المباشر",
      "إعداد حماية الموقع والنسخ الاحتياطي",
      "تدريب العميل على إدارة الموقع وتعديل المحتوى + دعم فني بعد التسليم",
    ],
  },
  {
    id: "web-premium",
    tierEn: "PREMIUM PACKAGE",
    title: "الباقة المتقدمة لتصميم المواقع",
    subtitle: "حلول مؤسسية متكاملة، متاجر إلكترونية، تعدد لغات وربط APIs",
    image: "/Premium.webp",
    badge: "Premium • حتى 25+ صفحة",
    price: "365",
    oldPrice: "490",
    billingLabel: "دولار / تدفع مرة واحدة",
    accent: "amber",
    isPremium: true,
    features: [
      "تصميم UI/UX مخصص بالكامل وفقاً لطبيعة النشاط",
      "إنشاء حتى 25 صفحة أو أكثر حسب الاتفاق",
      "تطوير وظائف وخصائص مخصصة حسب احتياجات النشاط",
      "إمكانية إنشاء متجر إلكتروني متكامل + إدارة المنتجات وتصنيفاتها",
      "ربط بوابات الدفع الإلكتروني + إعداد خيارات الشحن والتوصيل",
      "دعم تعدد اللغات",
      "تحسين SEO التقني المتقدم (Technical SEO) وتطبيق Schema Markup",
      "تحسين Core Web Vitals وأداء الموقع واستراتيجية الربط الداخلي",
      "إنشاء مدونة احترافية متكاملة",
      "ربط الموقع بأنظمة CRM أو أدوات التسويق المتاحة",
      "إمكانية ربط أنظمة خارجية وواجهات API وأنظمة الحجز",
      "إعداد Google Analytics وتقارير الأداء",
      "إعداد النسخ الاحتياطي الدوري والحماية المتقدمة",
      "اختبار شامل قبل الإطلاق + تدريب شامل + أولوية في الدعم الفني والصيانة",
    ],
  },
];

// ============================================================================
// 3. BACKLINKS PACKAGES DATA (USD — $5 / $10 / $15 / $20 / $25)
// مطابقة 100% لأسماء الصور المرفوعة
// ============================================================================

interface BacklinkPackage {
  id: string;
  tierEn: string;
  title: string;
  totalLinks: string;
  perTypeCount: string;
  image: string;
  price: string;
  badge: string;
  isPopular?: boolean;
  isSummit?: boolean;
  platforms: string[];
}

const COMMON_BACKLINK_PLATFORMS = [
  "دلائل وبوك مارك (Bookmark)",
  "ويب 2.0 (Web 2.0) وبروفايل وويكي",
  "جروبات جوجل وتلجراف وجست بست",
  "تمبلر وجوجل سايت ونوشن وميديم",
  "بلوج سبوت ولايف جورنال ومنتديات وحراج",
  "Evernote وSlideshare وPinterest وGithub",
];

const SUMMIT_BACKLINK_PLATFORMS = [
  "دلائل وبوك مارك (Bookmark)",
  "ويب 2.0 (Web 2.0) وبروفايل وويكي",
  "جروبات جوجل وتلجراف وجست بست",
  "تمبلر وجوجل سايت ونوشن وميديم",
  "بلوج سبوت ولايف جورنال ومنتديات وحراج",
  "Evernote وSlideshare وSubstack وQuora",
];

const BACKLINKS_PACKAGES: BacklinkPackage[] = [
  {
    id: "bl-100",
    tierEn: "RANK START-UP 100 BACKLINK",
    title: "باقة رانك الانطلاق الـ 100",
    totalLinks: "100 باك لينك متنوع",
    perTypeCount: "5 روابط من كل نوع (20 منصة)",
    image: "/backlinke.webp",
    price: "5",
    badge: "100 Backlink",
    platforms: COMMON_BACKLINK_PLATFORMS,
  },
  {
    id: "bl-200",
    tierEn: "RANK EXCELLENCE 200 BACKLINK",
    title: "باقة رانك التميز الـ 200",
    totalLinks: "200 باك لينك متنوع",
    perTypeCount: "10 روابط من كل نوع (20 منصة)",
    image: "/backlinkss.webp",
    price: "10",
    badge: "200 Backlink",
    platforms: COMMON_BACKLINK_PLATFORMS,
  },
  {
    id: "bl-300",
    tierEn: "RANK GROWTH 300 BACKLINK",
    title: "باقة رانك النمو الـ 300",
    totalLinks: "300 باك لينك متنوع",
    perTypeCount: "15 رابط من كل نوع (20 منصة)",
    image: "/backlin.webp",
    price: "15",
    badge: "الأكثر طلباً • 300 Backlink",
    isPopular: true,
    platforms: COMMON_BACKLINK_PLATFORMS,
  },
  {
    id: "bl-400",
    tierEn: "RANK LEADERSHIP 400 BACKLINK",
    title: "باقة رانك الريادة الـ 400",
    totalLinks: "400 باك لينك متنوع",
    perTypeCount: "20 رابط من كل نوع (20 منصة)",
    image: "/backlinks.webp",
    price: "20",
    badge: "400 Backlink",
    platforms: COMMON_BACKLINK_PLATFORMS,
  },
  {
    id: "bl-500",
    tierEn: "RANK SUMMIT 500 BACKLINK",
    title: "باقة رانك القمة الـ 500",
    totalLinks: "500 باك لينك قوي ومتنوع",
    perTypeCount: "تغطية شاملة لـ 20 منصة + Substack & Quora",
    image: "/backlink.webp",
    price: "25",
    badge: "القمة • 500 Backlink",
    isSummit: true,
    platforms: SUMMIT_BACKLINK_PLATFORMS,
  },
];

// ============================================================================
// MAIN PRICING PAGE COMPONENT
// ============================================================================

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<CategoryId>("all");
  const [expandedWebCards, setExpandedWebCards] = useState<Record<string, boolean>>({});
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const toggleWebFeatures = (id: string) => {
    setExpandedWebCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const showSocial = activeTab === "all" || activeTab === "social";
  const showWeb = activeTab === "all" || activeTab === "web";
  const showBacklinks = activeTab === "all" || activeTab === "backlinks";

  return (
    <main
      className="relative min-h-screen bg-[#000000] text-white py-24 sm:py-28 px-4 sm:px-6 overflow-hidden"
      dir="rtl"
    >
      {/* إضاءات خلفية فخمة (أزرق / سماوي / زمردي فقط بدون أي أحمر) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[520px] h-[520px] rounded-full bg-blue-600/12 blur-[150px]" />
        <div className="absolute top-1/3 left-1/4 w-[460px] h-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[360px] rounded-full bg-emerald-500/8 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ================================================================
            1. HERO HEADER
        ================================================================ */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-300 text-xs font-bold">
            <SparklesIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>باقات الأسعار والعروض الرسمية بالدولار — UNIQUE Digital Agency</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.18] mb-5">
            اختر الباقة المناسبة{" "}
            <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              لنمو ونجاح علامتك التجارية
            </span>
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            تنقّل بسهولة بين باقات إدارة السوشيال ميديا والريلز، تصميم المواقع
            الإلكترونية، وباقات الباك لينكس، واضغط على أي بوستر لتكبيره ومشاهدة كامل التفاصيل.
          </p>
        </div>

        {/* ================================================================
            2. INTERACTIVE CATEGORY FILTER TABS (4 مستطيلات تفاعلية)
        ================================================================ */}
        <div className="mb-16">
          <div
            role="tablist"
            aria-label="تصنيفات الباقات والخدمات"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-6xl mx-auto p-2.5 rounded-3xl bg-[#070B14]/90 border border-neutral-800/90 shadow-2xl backdrop-blur-xl"
          >
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative rounded-2xl px-4 py-4 text-right transition-all duration-300 border ${
                    isActive
                      ? "bg-gradient-to-l from-blue-600/25 via-cyan-500/15 to-blue-600/10 border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.18)]"
                      : "bg-neutral-950/70 border-neutral-800/80 hover:border-blue-500/40 hover:bg-neutral-900/60"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span
                      className={`text-sm sm:text-base font-black transition-colors ${
                        isActive ? "text-white" : "text-neutral-200 group-hover:text-cyan-300"
                      }`}
                    >
                      {tab.label}
                    </span>
                    <span
                      className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                        isActive
                          ? "bg-cyan-400/20 text-cyan-200 border border-cyan-400/40"
                          : "bg-neutral-900 text-neutral-400 border border-neutral-800"
                      }`}
                    >
                      {tab.countBadge}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 line-clamp-1">{tab.subtitle}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================
            3. SECTION A: SOCIAL MEDIA MANAGEMENT + REELS PACKAGES
        ================================================================ */}
        {showSocial && (
          <section className="mb-24" aria-label="باقات إدارة السوشيال ميديا">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-5 border-b border-neutral-900">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 mb-2">
                  <SparklesIcon className="w-3.5 h-3.5" />
                  <span>قسم إدارة حسابات التواصل والمحتوى</span>
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white">
                  باقات إدارة السوشيال ميديا والريلز
                </h2>
              </div>
              <p className="text-sm text-neutral-400 max-w-md">
                حضور يومي مستمر، تصميمات وفيديوهات إبداعية، وإدارة تفاعلات تزيد مبيعاتك.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
              {SOCIAL_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${
                    pkg.isPopular
                      ? "bg-[#081020] border-2 border-cyan-400/60 shadow-[0_0_50px_rgba(37,99,235,0.22)]"
                      : "bg-[#070B14] border border-neutral-800/90 hover:border-blue-500/60 shadow-2xl"
                  }`}
                >
                  <div
                    onClick={() => setLightboxImage({ src: pkg.image, title: pkg.title })}
                    className="relative w-full h-[430px] bg-black flex items-center justify-center p-3 cursor-zoom-in overflow-hidden"
                  >
                    <Image
                      src={pkg.image}
                      alt={`${pkg.title} - Unique Agency`}
                      title={pkg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105 p-2"
                    />
                    <span
                      className={`absolute top-4 start-4 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg z-10 ${
                        pkg.isPopular
                          ? "bg-gradient-to-l from-blue-600 to-cyan-500 text-white"
                          : "bg-blue-600/90 text-white"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                    <span className="absolute bottom-3 end-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 border border-neutral-700 text-[11px] font-bold text-neutral-200 opacity-90 group-hover:border-cyan-400 group-hover:text-cyan-300 transition">
                      <ZoomInIcon className="w-3.5 h-3.5" />
                      <span>تكبير الصورة</span>
                    </span>
                  </div>

                  <div className="p-7 bg-[#090E1A] border-t border-neutral-800/80 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="text-neutral-400 text-sm mb-5">{pkg.subtitle}</p>

                      <div className="flex items-baseline gap-2.5 mb-6 bg-black/50 p-4 rounded-2xl border border-neutral-800">
                        <span dir="ltr" className="text-3xl font-black text-cyan-300">
                          ${pkg.price}
                        </span>
                        <span className="text-xs text-neutral-400 font-semibold">
                          دولار / شهرياً
                        </span>
                        <span dir="ltr" className="text-sm text-neutral-500 line-through ms-auto">
                          ${pkg.oldPrice}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-7">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-neutral-200 text-sm flex items-center gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center shrink-0">
                              <CheckIcon className="w-3 h-3 text-emerald-400" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={getWhatsAppUrl(
                        `مرحباً UNIQUE، أرغب في حجز ${pkg.title} لإدارة السوشيال ميديا ($${pkg.price} شهرياً).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl font-extrabold text-sm transition-all duration-300 shadow-lg ${
                        pkg.isPopular
                          ? "bg-gradient-to-l from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-blue-600/30"
                          : "bg-blue-600 hover:bg-blue-500 text-white"
                      }`}
                    >
                      <span>احجز الباقة الآن</span>
                      <ArrowUpLeftIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* سكشن باقات الريلز */}
            <div className="bg-gradient-to-b from-[#080E1B] to-[#050811] border border-blue-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "/priceeee.webp",
                      title: "باقات الريلز (Reels Packages)",
                    })
                  }
                  className="lg:col-span-5 relative w-full h-[420px] bg-black rounded-2xl overflow-hidden border border-neutral-800 flex items-center justify-center p-3 cursor-zoom-in group"
                >
                  <Image
                    src="/priceeee.webp"
                    alt="Reels Packages - Unique Agency"
                    title="Reels Packages"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105 p-2"
                  />
                  <span className="absolute top-4 start-4 bg-gradient-to-l from-blue-600 to-cyan-500 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg z-10">
                    عروض الريلز
                  </span>
                  <span className="absolute bottom-3 end-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 border border-neutral-700 text-[11px] font-bold text-neutral-200 group-hover:border-cyan-400 group-hover:text-cyan-300 transition">
                    <ZoomInIcon className="w-3.5 h-3.5" />
                    <span>تكبير الصورة</span>
                  </span>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3.5 py-1.5 mb-3 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-bold">
                      محتوى احترافي وجودة عالية
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                      باقات الريلز (Reels Packages)
                    </h3>
                    <p className="text-neutral-300 text-sm md:text-base mb-6 leading-relaxed">
                      محتوى احترافي.. وجود أقوى.. تفاعل أكبر! باقات مرنة تناسب احتياجك
                      وتساعدك تكون موجود باستمرار بأعلى جودة مونتاج.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {REELS_PACKAGES.map((reel, rIdx) => (
                      <div
                        key={rIdx}
                        className="bg-black/75 border border-neutral-800 p-5 rounded-2xl flex flex-col justify-between text-center hover:border-cyan-500/50 transition-all shadow-xl"
                      >
                        <div>
                          <h4 className="text-base font-extrabold text-white mb-1.5">
                            {reel.title}
                          </h4>
                          {reel.save && (
                            <span className="inline-block bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-2">
                              {reel.save}
                            </span>
                          )}
                        </div>

                        <div className="my-2">
                          <div className="text-2xl font-black text-white">
                            <span dir="ltr">${reel.price}</span>{" "}
                            <span className="text-xs text-neutral-400 font-normal">دولار</span>
                          </div>
                          {reel.old && (
                            <div dir="ltr" className="text-xs text-neutral-500 line-through mt-0.5">
                              ${reel.old}
                            </div>
                          )}
                        </div>

                        <a
                          href={getWhatsAppUrl(
                            `مرحباً UNIQUE، أرغب في طلب ${reel.title} ($${reel.price}).`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-cyan-300 hover:text-white border border-blue-500/35 text-xs font-extrabold transition-all"
                        >
                          <span>اطلب الآن</span>
                          <ArrowUpLeftIcon className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================
            4. SECTION B: WEB DESIGN PACKAGES ($220 / $290 / $365)
        ================================================================ */}
        {showWeb && (
          <section className="mb-24" aria-label="باقات تصميم المواقع الإلكترونية">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-5 border-b border-neutral-900">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-2">
                  <SparklesIcon className="w-3.5 h-3.5" />
                  <span>قسم برمجة وتصميم المواقع والمتاجر</span>
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white">
                  باقات تصميم المواقع الإلكترونية
                </h2>
              </div>
              <p className="text-sm text-neutral-400 max-w-md">
                مواقع سريعة متوافقة مع الهواتف ومهيأة للسيو (SEO &amp; Core Web Vitals) من اليوم الأول.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {WEB_DESIGN_PACKAGES.map((pkg) => {
                const isExpanded = !!expandedWebCards[pkg.id];
                const visibleFeatures = isExpanded
                  ? pkg.features
                  : pkg.features.slice(0, 7);

                const borderStyle = pkg.isPremium
                  ? "bg-gradient-to-b from-[#131008] via-[#090D18] to-[#070B14] border-2 border-amber-400/60 shadow-[0_0_55px_rgba(251,191,36,0.16)]"
                  : pkg.isPopular
                  ? "bg-gradient-to-b from-[#091529] to-[#070B14] border-2 border-cyan-400/60 shadow-[0_0_50px_rgba(6,182,212,0.18)]"
                  : "bg-[#070B14] border border-neutral-800/90 hover:border-blue-500/60 shadow-2xl";

                return (
                  <div
                    key={pkg.id}
                    className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${borderStyle}`}
                  >
                    <div
                      onClick={() => setLightboxImage({ src: pkg.image, title: pkg.title })}
                      className="relative w-full h-[460px] bg-black flex items-center justify-center p-2 cursor-zoom-in overflow-hidden"
                    >
                      <Image
                        src={pkg.image}
                        alt={`${pkg.title} - UNIQUE Digital Agency`}
                        title={pkg.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105 p-1.5"
                      />
                      <span
                        className={`absolute top-4 start-4 inline-flex items-center gap-1.5 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg z-10 ${
                          pkg.isPremium
                            ? "bg-gradient-to-l from-amber-500 to-yellow-400 text-black"
                            : pkg.isPopular
                            ? "bg-gradient-to-l from-blue-600 to-cyan-500 text-white"
                            : "bg-blue-600/90 text-white"
                        }`}
                      >
                        {pkg.isPremium && <CrownIcon className="w-3.5 h-3.5" />}
                        <span>{pkg.badge}</span>
                      </span>
                      <span className="absolute bottom-3 end-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/85 border border-neutral-700 text-[11px] font-bold text-neutral-200 opacity-90 group-hover:border-cyan-400 group-hover:text-cyan-300 transition">
                        <ZoomInIcon className="w-3.5 h-3.5" />
                        <span>تكبير البوستر</span>
                      </span>
                    </div>

                    <div className="p-7 bg-[#090E1A]/95 border-t border-neutral-800/80 flex flex-col justify-between flex-grow">
                      <div>
                        <div
                          dir="ltr"
                          className={`text-[11px] font-black tracking-widest uppercase mb-1.5 text-right ${
                            pkg.isPremium
                              ? "text-amber-300"
                              : pkg.isPopular
                              ? "text-cyan-300"
                              : "text-blue-400"
                          }`}
                        >
                          {pkg.tierEn}
                        </div>

                        <h3 className="text-2xl font-black text-white mb-2">{pkg.title}</h3>
                        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-5">
                          {pkg.subtitle}
                        </p>

                        <div
                          className={`mb-6 bg-black/55 p-4 rounded-2xl border ${
                            pkg.isPremium
                              ? "border-amber-400/35"
                              : pkg.isPopular
                              ? "border-cyan-400/35"
                              : "border-neutral-800"
                          }`}
                        >
                          <div className="flex items-baseline gap-2.5">
                            <span
                              dir="ltr"
                              className={`text-3xl font-black ${
                                pkg.isPremium ? "text-amber-300" : "text-cyan-300"
                              }`}
                            >
                              ${pkg.price}
                            </span>
                            <span className="text-xs text-neutral-400 font-semibold">
                              {pkg.billingLabel}
                            </span>
                            <span
                              dir="ltr"
                              className="text-sm text-neutral-500 line-through ms-auto"
                            >
                              ${pkg.oldPrice}
                            </span>
                          </div>
                          <div className="mt-2 pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px]">
                            <span className="text-emerald-400 font-bold">
                              ✓ دومين + استضافة + شهادة SSL
                            </span>
                            <span className="text-neutral-400">ملكية 100%</span>
                          </div>
                        </div>

                        <ul className="space-y-2.5 mb-4">
                          {visibleFeatures.map((feat, fIdx) => (
                            <li
                              key={fIdx}
                              className="text-neutral-200 text-xs sm:text-sm flex items-start gap-2.5 leading-relaxed"
                            >
                              <span
                                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                  pkg.isPremium
                                    ? "bg-amber-500/15 border border-amber-400/40 text-amber-300"
                                    : "bg-emerald-500/15 border border-emerald-500/35 text-emerald-400"
                                }`}
                              >
                                <CheckIcon className="w-3 h-3" />
                              </span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>

                        {pkg.features.length > 7 && (
                          <button
                            type="button"
                            onClick={() => toggleWebFeatures(pkg.id)}
                            className="mb-6 text-xs font-extrabold text-cyan-400 hover:text-cyan-200 underline underline-offset-4 transition"
                          >
                            {isExpanded
                              ? "إخفاء المميزات الإضافية ▲"
                              : `عرض كل المميزات (${pkg.features.length} ميزة) ▼`}
                          </button>
                        )}
                      </div>

                      <a
                        href={getWhatsAppUrl(
                          `مرحباً UNIQUE، أرغب في حجز ${pkg.title} (${pkg.tierEn}) بسعر $${pkg.price}.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl font-extrabold text-sm transition-all duration-300 shadow-lg ${
                          pkg.isPremium
                            ? "bg-gradient-to-l from-amber-500 via-yellow-400 to-amber-400 hover:from-amber-400 hover:to-yellow-300 text-black shadow-amber-500/25"
                            : pkg.isPopular
                            ? "bg-gradient-to-l from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-blue-600/30"
                            : "bg-blue-600 hover:bg-blue-500 text-white"
                        }`}
                      >
                        <span>اطلب الباقة عبر واتساب</span>
                        <ArrowUpLeftIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ================================================================
            5. SECTION C: BACKLINKS PACKAGES ($5 / $10 / $15 / $20 / $25)
        ================================================================ */}
        {showBacklinks && (
          <section className="mb-24" aria-label="باقات الباك لينكس">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-5 border-b border-neutral-900">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 mb-2">
                  <LinkChainIcon className="w-3.5 h-3.5" />
                  <span>قسم تقوية الدومين والروابط الخلفية (Off-Page SEO)</span>
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white">
                  باقات الباك لينكس المتنوعة (Rank Backlinks)
                </h2>
              </div>
              <p className="text-sm text-neutral-400 max-w-md">
                روابط خلفية متنوعة موزعة على 20 منصة عالمية وعربية لرفع قوة الدومين وتسريع تصدر موقعك في جوجل.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {BACKLINKS_PACKAGES.map((pkg) => {
                const cardStyle = pkg.isSummit
                  ? "bg-gradient-to-b from-[#131008] via-[#090D18] to-[#070B14] border-2 border-amber-400/60 shadow-[0_0_55px_rgba(251,191,36,0.16)]"
                  : pkg.isPopular
                  ? "bg-gradient-to-b from-[#091529] to-[#070B14] border-2 border-cyan-400/60 shadow-[0_0_50px_rgba(6,182,212,0.18)]"
                  : "bg-[#070B14] border border-neutral-800/90 hover:border-blue-500/60 shadow-2xl";

                return (
                  <div
                    key={pkg.id}
                    className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${cardStyle}`}
                  >
                    {/* بوستر الباقة */}
                    <div
                      onClick={() => setLightboxImage({ src: pkg.image, title: pkg.title })}
                      className="relative w-full h-[360px] bg-black flex items-center justify-center p-2 cursor-zoom-in overflow-hidden"
                    >
                      <Image
                        src={pkg.image}
                        alt={`${pkg.title} - UNIQUE Digital Agency`}
                        title={pkg.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105 p-1"
                      />
                      <span
                        className={`absolute top-4 start-4 inline-flex items-center gap-1.5 text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg z-10 ${
                          pkg.isSummit
                            ? "bg-gradient-to-l from-amber-500 to-yellow-400 text-black"
                            : pkg.isPopular
                            ? "bg-gradient-to-l from-blue-600 to-cyan-500 text-white"
                            : "bg-blue-600/90 text-white"
                        }`}
                      >
                        {pkg.isSummit && <CrownIcon className="w-3.5 h-3.5" />}
                        <span>{pkg.badge}</span>
                      </span>
                      <span className="absolute bottom-3 end-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/85 border border-neutral-700 text-[11px] font-bold text-neutral-200 opacity-90 group-hover:border-cyan-400 group-hover:text-cyan-300 transition">
                        <ZoomInIcon className="w-3.5 h-3.5" />
                        <span>تكبير الجدول</span>
                      </span>
                    </div>

                    {/* تفاصيل باقة الباك لينكس */}
                    <div className="p-7 bg-[#090E1A]/95 border-t border-neutral-800/80 flex flex-col justify-between flex-grow">
                      <div>
                        <div
                          dir="ltr"
                          className={`text-[11px] font-black tracking-wider uppercase mb-1.5 text-right ${
                            pkg.isSummit
                              ? "text-amber-300"
                              : pkg.isPopular
                              ? "text-cyan-300"
                              : "text-blue-400"
                          }`}
                        >
                          {pkg.tierEn}
                        </div>

                        <h3 className="text-2xl font-black text-white mb-1.5">{pkg.title}</h3>
                        <p className="text-neutral-400 text-xs mb-5">{pkg.perTypeCount}</p>

                        {/* صندوق السعر الشيك */}
                        <div
                          className={`mb-6 bg-black/55 p-4 rounded-2xl border ${
                            pkg.isSummit
                              ? "border-amber-400/35"
                              : pkg.isPopular
                              ? "border-cyan-400/35"
                              : "border-neutral-800"
                          }`}
                        >
                          <div className="flex items-baseline gap-2.5">
                            <span
                              dir="ltr"
                              className={`text-3xl font-black ${
                                pkg.isSummit ? "text-amber-300" : "text-cyan-300"
                              }`}
                            >
                              ${pkg.price}
                            </span>
                            <span className="text-xs text-neutral-400 font-semibold">
                              دولار / للباقة كاملة
                            </span>
                            <span className="text-[11px] font-bold text-emerald-400 ms-auto">
                              {pkg.totalLinks}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-2.5 mb-7">
                          {pkg.platforms.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-neutral-200 text-xs sm:text-sm flex items-start gap-2.5 leading-relaxed"
                            >
                              <span
                                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                  pkg.isSummit
                                    ? "bg-amber-500/15 border border-amber-400/40 text-amber-300"
                                    : "bg-emerald-500/15 border border-emerald-500/35 text-emerald-400"
                                }`}
                              >
                                <CheckIcon className="w-3 h-3" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={getWhatsAppUrl(
                          `مرحباً UNIQUE، أرغب في طلب ${pkg.title} (${pkg.totalLinks}) بسعر $${pkg.price}.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl font-extrabold text-sm transition-all duration-300 shadow-lg ${
                          pkg.isSummit
                            ? "bg-gradient-to-l from-amber-500 via-yellow-400 to-amber-400 hover:from-amber-400 hover:to-yellow-300 text-black shadow-amber-500/25"
                            : pkg.isPopular
                            ? "bg-gradient-to-l from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-blue-600/30"
                            : "bg-blue-600 hover:bg-blue-500 text-white"
                        }`}
                      >
                        <span>اطلب الباقة الآن</span>
                        <ArrowUpLeftIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ================================================================
            6. CUSTOM PACKAGE CTA BANNER
        ================================================================ */}
        <section className="rounded-[2rem] bg-gradient-to-br from-[#0B1730] via-[#070D1A] to-[#051418] border border-blue-500/35 p-8 sm:p-12 text-center shadow-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300 mb-5">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>باقة مخصصة حسب احتياج شركتك</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">
            محتاج باقة مدمجة (موقع إلكتروني + سوشيال ميديا + باك لينكس وSEO)؟
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            تواصل مع فريق مبيعات <strong className="text-white">UNIQUE</strong> مباشرة
            وسنصمم لك عرض سعر متكامل بخصم خاص يناسب أهدافك وميزانيتك.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(
                "مرحباً UNIQUE، أرغب في تفصيل باقة مخصصة لمشروعي ومعرفة الأسعار."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-sm sm:text-base shadow-xl shadow-blue-600/25 transition"
            >
              <span>تواصل معنا عبر واتساب الآن</span>
              <ArrowUpLeftIcon className="w-4 h-4" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-neutral-300 bg-black/60 border border-neutral-800 px-5 py-3.5 rounded-2xl">
              <PhoneIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span dir="ltr" className="font-mono font-bold text-white">
                01270506511
              </span>
              <span className="text-neutral-600">•</span>
              <span dir="ltr" className="font-mono font-bold text-cyan-300">
                01202987700
              </span>
              <span className="text-neutral-600">•</span>
              <span dir="ltr" className="font-mono font-semibold text-neutral-400">
                035488069
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* ================================================================
          7. FULL-SCREEN POSTER LIGHTBOX MODAL
      ================================================================ */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.title}
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] rounded-3xl bg-[#070B14] border border-cyan-500/40 p-3 sm:p-4 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between gap-3 px-2 pb-3 border-b border-neutral-800">
              <span className="text-sm font-extrabold text-white truncate">
                {lightboxImage.title}
              </span>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                aria-label="إغلاق"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-300 hover:border-cyan-400 hover:text-white transition"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full h-[75vh] mt-3">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}