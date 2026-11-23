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

function Link2({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
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

function TrendingUp({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function Crown({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
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
// NEXT.JS METADATA — BACKLINKS SERVICE PAGE (ARABIC RTL)
// ============================================================================

export const metadata: Metadata = {
  title:
    "خدمة بناء باك لينكس قوي وآمن (White-Hat Backlinks) | باقات تبدأ من $5 — UNIQUE",
  description:
    "ارفع قوة الدومين (DA/DR) وتصدر نتائج جوجل مع خدمة بناء الباك لينكس المتنوعة واليدوية من UNIQUE. 20 نوع منصة عالمية وعربية (Web 2.0، جست بست، جوجل سايت، نوشن، ميديم، ويكي، Quora) وتقرير تسليم كامل بباقات تبدأ من 5 دولار.",
  keywords: [
    "خدمة بناء باك لينكس",
    "شراء باك لينك قوي وآمن",
    "باقات باك لينكس",
    "شركة بناء روابط خلفية",
    "رفع الدومين اثورتي DA DR",
    "باك لينك يدوي وايت هات",
    "جيست بوست وويب 2.0",
    "تحسين السيو الخارجي Off-Page SEO",
    "افضل خدمة باك لينك في مصر والسعودية",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/services/backlinks",
    languages: {
      ar: "https://www.uniquee-ws.com/services/backlinks",
      en: "https://www.uniquee-ws.com/en/services/backlinks",
      "x-default": "https://www.uniquee-ws.com/services/backlinks",
    },
  },
  openGraph: {
    title: "خدمة بناء الباك لينكس القوية والآمنة — UNIQUE Digital Agency",
    description:
      "باقات باك لينكس متنوعة ومضمونة الأمان (100 إلى 500 رابط خلفي عبر 20 منصة عالمية) لرفع ترتيب موقعك في جوجل وتقوية سلطته الرقمية.",
    url: "https://www.uniquee-ws.com/services/backlinks",
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

interface ComparisonRow {
  criterion: string;
  uniqueBacklinks: string;
  spamBacklinks: string;
  noBacklinks: string;
}

interface BacklinkCategoryGroup {
  id: string;
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  seoBenefit: string;
  platforms: { name: string; role: string }[];
}

interface BacklinkPackageItem {
  id: string;
  tierEn: string;
  title: string;
  totalLinks: string;
  perTypeCount: string;
  idealFor: string;
  image: string;
  price: string;
  badge: string;
  isPopular?: boolean;
  isSummit?: boolean;
  highlights: string[];
}

interface SafetyChecklistGroup {
  id: string;
  title: string;
  badge: string;
  items: string[];
}

interface WorkflowStep {
  num: string;
  timeframe: string;
  title: string;
  description: string;
  deliverable: string;
}

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

// ============================================================================
// DATA ARRAYS — UNIQUE BACKLINKS ENGINEERING
// ============================================================================

const HERO_KPIS: HeroKpi[] = [
  {
    id: "platforms",
    value: "20 منصة",
    title: "تنوع طبيعي في مصادر الروابط",
    subtitle: "نوزّع روابطك على 20 نوعاً مختلفاً (Web 2.0، جست بست، جوجل سايت، ميديم، ويكي، Github، Quora).",
    accent: "cyan",
  },
  {
    id: "safety",
    value: "100%",
    title: "تنفيذ يدوي آمن (White-Hat)",
    subtitle: "بدون برامج سبام آلية أو شبكات مخالفة — مع توزيع متوازن للـ Anchor Text وDofollow/Nofollow.",
    accent: "emerald",
  },
  {
    id: "report",
    value: "تقرير حي",
    title: "ملف تسليم كامل لكل رابط",
    subtitle: "تستلم شيت مفصّل يحتوي على كل رابط منشور، نوع المنصة، الكلمة المفتاحية، وحالة الأرشفة.",
    accent: "blue",
  },
  {
    id: "price",
    value: "تبدأ من $5",
    title: "باقات مرنة من 100 إلى 500 رابط",
    subtitle: "اختر الحجم المناسب لعمر موقعك ومستوى المنافسة في مجالك دون أي اشتراكات إجبارية.",
    accent: "amber",
  },
];

const BACKLINKS_COMPARISON: ComparisonRow[] = [
  {
    criterion: "أمان الدومين ضد تحديثات جوجل (Spam Updates)",
    uniqueBacklinks: "آمن 100% — بناء يدوي متنوع بتوزيع Anchor Text طبيعي يحمي الدومين",
    spamBacklinks: "خطر عقوبة فورية وهبوط مفاجئ في الترتيب بسبب الروابط الآلية المتكررة",
    noBacklinks: "بطء شديد في الصعود وعجز عن تجاوز المنافسين أصحاب الدومين القوي",
  },
  {
    criterion: "تنوع أنواع الروابط والمنصات",
    uniqueBacklinks: "20 نوعاً متنوعاً (Web 2.0، مقالات، ويكي، جوجل سايت، سوشيال، بروفايل)",
    spamBacklinks: "آلاف الروابط المكررة من نفس النوع (تعليقات سبام غير ذات صلة)",
    noBacklinks: "اعتماد على المحتوى وحده مع ضعف إشارات الثقة الخارجية (Off-Page)",
  },
  {
    criterion: "رفع قوة الدومين (DA / DR) والأرشفة",
    uniqueBacklinks: "ارتفاع تدريجي ومستقر في DA/DR وسرعة فهرسة الصفحات الجديدة",
    spamBacklinks: "ارتفاع وهمي مؤقت يتبعه تصفير أو تجاهل كامل من جوجل",
    noBacklinks: "ثبات الدومين عند مستويات ضعيفة لشهور طويلة",
  },
  {
    criterion: "الظهور في ChatGPT وAI Overviews (GEO)",
    uniqueBacklinks: "يعزز إشارات العلامة التجارية (Brand Mentions) في منصات موثوقة يقرأها AI",
    spamBacklinks: "لا يضيف أي مصداقية للكيان الرقمي أمام محركات الذكاء الاصطناعي",
    noBacklinks: "ضعف الإشارات الخارجية يقلل فرص ترشيح علامتك في إجابات AI",
  },
  {
    criterion: "الشفافية وتقرير التسليم",
    uniqueBacklinks: "ملف Excel كامل بكل رابط فعلي منشور وتصنيفه وتاريخ إضافته",
    spamBacklinks: "ملفات غير مفهومة بروابط مكسورة أو محذوفة خلال أيام",
    noBacklinks: "لا يوجد",
  },
];

const BACKLINK_4_CATEGORIES: BacklinkCategoryGroup[] = [
  {
    id: "cat-editorial",
    number: "01",
    badge: "سلطة المحتوى والمقالات",
    title: "روابط المقالات ومنصات Web 2.0 القوية",
    subtitle: "روابط سياقية (Contextual Links) داخل محتوى ذي صلة مباشرة بكلماتك المفتاحية.",
    seoBenefit: "أقوى إشارة لجوجل لفهم تخصص موقعك ورفع ترتيب صفحات الخدمات والمقالات.",
    platforms: [
      { name: "جست بست (Guest Posts)", role: "مقالات متخصصة تمنحك ثقة وسلطة عالية" },
      { name: "ويب 2.0 (Web 2.0)", role: "مدونات مصغّرة قوية بمحتوى فريد وروابط سياقية" },
      { name: "ميديم (Medium)", role: "منصة نشر عالمية عالية الموثوقية والأرشفة السريعة" },
      { name: "بلوج سبوت (Blogspot)", role: "منصة جوجل التدوينية السريعة في الزحف والفهرسة" },
      { name: "تمبلر (Tumblr)", role: "تدوين مصغّر يعزز التنوع والإشارات الاجتماعية" },
    ],
  },
  {
    id: "cat-tech-authority",
    number: "02",
    badge: "منصات جوجل والتقنية",
    title: "روابط المنصات العالمية ذات الدومين الخارق (DA 90+)",
    subtitle: "استغلال قوة دومينات عالمية يثق بها جوجل بنسبة 100% لبناء شبكة ثقة حول علامتك.",
    seoBenefit: "يرفع مصداقية الكيان الرقمي (Entity Trust) ويسرّع أرشفة صفحاتك الجديدة.",
    platforms: [
      { name: "جوجل سايت (Google Sites)", role: "موقع مصغّر مستضاف على نطاق جوجل نفسه (DA 95+)" },
      { name: "نوشن (Notion)", role: "صفحات تعريفية منظمة عالية السلطة وسريعة الأرشفة" },
      { name: "جيت هب (GitHub)", role: "منصة تقنية عالمية فائقة الثقة ومؤثرة في GEO" },
      { name: "إيفرنوت (Evernote)", role: "ملاحظات عامة مفهرسة تعزز تنوع المصادر" },
      { name: "سلايد شير (SlideShare)", role: "منصة عروض تقديمية عالمية تمنحك روابط ثقة قوية" },
    ],
  },
  {
    id: "cat-knowledge",
    number: "03",
    badge: "المعرفة والذكاء الاصطناعي",
    title: "روابط الويكي، المعرفة والمنصات التفاعلية",
    subtitle: "إشارات وروابط من منصات الأسئلة والمعرفة التي تعتمد عليها محركات AI وجوجل.",
    seoBenefit: "تقوّي Brand Mentions وتساعد على ترشيح اسم شركتك في ChatGPT وPerplexity.",
    platforms: [
      { name: "ويكي (Wiki Backlinks)", role: "روابط معرفية مرجعية ترفع ثقة محركات البحث" },
      { name: "كورا (Quora — باقة القمة)", role: "منصة أسئلة وأجوبة مرجعية يعتمد عليها جوجل وAI" },
      { name: "سب ستاك (Substack — باقة القمة)", role: "منصة نشرات ومقالات ذات سلطة تحريرية عالية" },
      { name: "بنترست (Pinterest)", role: "إشارات بصرية قوية وزيارات إضافية مستمرة" },
      { name: "لايف جورنال (LiveJournal)", role: "منصة تدوين تاريخية عالية العمر والثقة" },
    ],
  },
  {
    id: "cat-local-signals",
    number: "04",
    badge: "التنوع الطبيعي والإشارات",
    title: "الأدلة، البروفايلات، البوك مارك والمجتمعات",
    subtitle: "إكمال البروفايل الطبيعي للروابط الخلفية (Natural Link Profile) وتقوية السيو المحلي.",
    seoBenefit: "يحقق التوازن المثالي بين Dofollow وNofollow ويدعم تصدر خرائط جوجل.",
    platforms: [
      { name: "دلائل الأعمال (Directories)", role: "إشارات محلية وتوثيق NAP يعزز السيو المحلي" },
      { name: "بوك مارك (Social Bookmarks)", role: "تسريع الأرشفة ونشر الروابط في منصات الإشارات" },
      { name: "بروفايل (High-DA Profiles)", role: "توثيق هوية العلامة التجارية عبر مواقع كبرى" },
      { name: "جروبات جوجل وتلجراف", role: "نشر مجتمعي وإشارات فورية عالية التفاعل" },
      { name: "منتديات وحراج", role: "تنوع طبيعي وزيارات مهتمة من مجتمعات عربية حقيقية" },
    ],
  },
];

const BACKLINK_PACKAGES: BacklinkPackageItem[] = [
  {
    id: "bl-100",
    tierEn: "RANK START-UP 100 BACKLINK",
    title: "باقة رانك الانطلاق الـ 100",
    totalLinks: "100 باك لينك",
    perTypeCount: "5 روابط من كل نوع (20 منصة متنوعة)",
    idealFor: "المواقع الجديدة وصفحات الهبوط التي تحتاج دفعة أرشفة وبداية آمنة.",
    image: "/backlinke.webp",
    price: "5",
    badge: "100 Backlink",
    highlights: [
      "5 دلائل + 5 بوك مارك + 5 ويب 2.0 + 5 بروفايل + 5 ويكي",
      "5 جروبات جوجل + 5 تلجراف + 5 جست بست + 5 تمبلر + 5 جوجل سايت",
      "5 نوشن + 5 ميديم + 5 بلوج سبوت + 5 لايف جورنال + 5 منتديات",
      "5 حراج + 5 Evernote + 5 Slideshare + 5 Pinterest + 5 Github",
    ],
  },
  {
    id: "bl-200",
    tierEn: "RANK EXCELLENCE 200 BACKLINK",
    title: "باقة رانك التميز الـ 200",
    totalLinks: "200 باك لينك",
    perTypeCount: "10 روابط من كل نوع (20 منصة متنوعة)",
    idealFor: "المواقع الخدمية والمدونات التي تستهدف كلمات متوسطة المنافسة.",
    image: "/backlinkss.webp",
    price: "10",
    badge: "200 Backlink",
    highlights: [
      "10 دلائل + 10 بوك مارك + 10 ويب 2.0 + 10 بروفايل + 10 ويكي",
      "10 جروبات جوجل + 10 تلجراف + 10 جست بست + 10 تمبلر + 10 جوجل سايت",
      "10 نوشن + 10 ميديم + 10 بلوج سبوت + 10 لايف جورنال + 10 منتديات",
      "10 حراج + 10 Evernote + 10 Slideshare + 10 Pinterest + 10 Github",
    ],
  },
  {
    id: "bl-300",
    tierEn: "RANK GROWTH 300 BACKLINK",
    title: "باقة رانك النمو الـ 300",
    totalLinks: "300 باك لينك",
    perTypeCount: "15 رابط من كل نوع (20 منصة متنوعة)",
    idealFor: "الأكثر طلباً للمتاجر الإلكترونية ومواقع الشركات الساعية للصفحة الأولى.",
    image: "/backlin.webp",
    price: "15",
    badge: "الأكثر طلباً • 300 Backlink",
    isPopular: true,
    highlights: [
      "15 دلائل + 15 بوك مارك + 15 ويب 2.0 + 15 بروفايل + 15 ويكي",
      "15 جروبات جوجل + 15 تلجراف + 15 جست بست + 15 تمبلر + 15 جوجل سايت",
      "15 نوشن + 15 ميديم + 15 بلوج سبوت + 15 لايف جورنال + 15 منتديات",
      "15 حراج + 15 Evernote + 15 Slideshare + 15 Pinterest + 15 Github",
    ],
  },
  {
    id: "bl-400",
    tierEn: "RANK LEADERSHIP 400 BACKLINK",
    title: "باقة رانك الريادة الـ 400",
    totalLinks: "400 باك لينك",
    perTypeCount: "20 رابط من كل نوع (20 منصة متنوعة)",
    idealFor: "المتاجر الكبرى والقطاعات التنافسية (عقارات، عيادات، شركات خدمات).",
    image: "/backlinks.webp",
    price: "20",
    badge: "400 Backlink",
    highlights: [
      "20 دلائل + 20 بوك مارك + 20 ويب 2.0 + 20 بروفايل + 20 ويكي",
      "20 جروبات جوجل + 20 تلجراف + 20 جست بست + 20 تمبلر + 20 جوجل سايت",
      "20 نوشن + 20 ميديم + 20 بلوج سبوت + 20 لايف جورنال + 20 منتديات",
      "20 حراج + 20 Evernote + 20 Slideshare + 20 Pinterest + 20 Github",
    ],
  },
  {
    id: "bl-500",
    tierEn: "RANK SUMMIT 500 BACKLINK",
    title: "باقة رانك القمة الـ 500",
    totalLinks: "500 باك لينك",
    perTypeCount: "أقوى تغطية شاملة + Substack & Quora",
    idealFor: "المواقع الكبيرة وحملات تصدر الكلمات عالية الربحية في مصر والخليج.",
    image: "/backlink.webp",
    price: "25",
    badge: "القمة • 500 Backlink",
    isSummit: true,
    highlights: [
      "تغطية شاملة لـ 20 منصة عالمية وعربية بإجمالي 500 رابط خلفي متنوع",
      "تتضمن منصات عالية السلطة مثل Substack وQuora وMedium وNotion",
      "توزيع استراتيجي للـ Anchor Text على عدة صفحات وكلمات مفتاحية",
      "أولوية في التنفيذ + تقرير Excel مفصّل + متابعة فهرسة الروابط",
    ],
  },
];

const SAFETY_4_TABLES: SafetyChecklistGroup[] = [
  {
    id: "anchor-safety",
    title: "1. هندسة النصوص الرابطة (Anchor Text Ratio)",
    badge: "ضد Over-Optimization",
    items: [
      "توزيع متوازن بين اسم البراند (Brand Anchors) والرابط المباشر (Naked URL)",
      "استخدام ذكي للكلمات المفتاحية الرئيسية والمرادفات الدلالية (LSI)",
      "تجنب التكرار المفرط لنفس الكلمة المفتاحية لحماية الموقع من فلاتر جوجل",
      "إمكانية توزيع الباقة على أكثر من صفحة داخل موقعك لتحقيق نمو متوازن",
    ],
  },
  {
    id: "quality-mix",
    title: "2. تنوع الروابط والمنصات (Natural Link Profile)",
    badge: "20 مصدر مختلف",
    items: [
      "مزيج طبيعي بين روابط Dofollow لنقل القوة وNofollow لإثبات المصداقية",
      "الجمع بين الروابط السياقية (Contextual) وروابط البروفايل والويكي والدلائل",
      "الاعتماد على منصات عالمية عالية الدومين (DA 70–95+) ومواقع عربية حقيقية",
      "توافق تام مع جميع المواقع (WordPress، Next.js، Shopify، سلة، زد)",
    ],
  },
  {
    id: "execution-std",
    title: "3. التنفيذ اليدوي والأرشفة السليمة",
    badge: "100% Manual",
    items: [
      "إنشاء الروابط يدوياً بدون أدوات سبام آلية ضارة بالدومين",
      "صياغة أوصاف ومقتطفات نظيفة ومتوافقة مع مجال نشاط موقعك",
      "تطبيق أسلوب الإدخال التدريجي (Drip-Feed) ليبدو النمو طبيعياً أمام جوجل",
      "مراجعة كل رابط قبل التسليم للتأكد من أنه فعّال (Live 200 OK)",
    ],
  },
  {
    id: "delivery-report",
    title: "4. تقرير التسليم والشفافية الكاملة",
    badge: "Excel Report",
    items: [
      "ملف Excel / Google Sheet منظم يحتوي على كل رابط تم بناؤه بالتفصيل",
      "تصنيف الروابط حسب نوع المنصة والصفحة المستهدفة والـ Anchor Text",
      "استشارة مجانية لاختيار أفضل الصفحات والكلمات قبل بدء التنفيذ",
      "دعم فني مباشر عبر واتساب للإجابة على أي استفسار بعد التسليم",
    ],
  },
];

const WORKFLOW_4_STEPS: WorkflowStep[] = [
  {
    num: "01",
    timeframe: "اليوم الأول",
    title: "تحليل موقعك واختيار الكلمات والصفحات",
    description:
      "ترسل لنا رابط موقعك (وحتى 3–5 كلمات مفتاحية مستهدفة)، ونفحص وضع الباك لينكس الحالي لضبط أفضل خطة توزيع للـ Anchor Text.",
    deliverable: "خطة توزيع الروابط والـ Anchor Text المعتمدة",
  },
  {
    num: "02",
    timeframe: "أثناء التنفيذ",
    title: "بناء الروابط يدوياً عبر الـ 20 منصة",
    description:
      "ينفذ فريق السيو الخارجي في UNIQUE بناء الروابط يدوياً على المنصات الـ 20 المتنوعة (Web 2.0، جست بست، جوجل سايت، ميديم، نوشن، ويكي...).",
    deliverable: "بناء منظم ومتدرج يحاكي النمو الطبيعي",
  },
  {
    num: "03",
    timeframe: "قبل التسليم",
    title: "فحص الجودة والتأكد من فاعلية كل رابط",
    description:
      "نراجع كل رابط للتأكد من ظهوره الصحيح وعدم وجود روابط مكسورة، ونحفّز فهرستها لتظهر في Google Search Console بأسرع وقت.",
    deliverable: "روابط حيّة ومفحوصة بنسبة 100%",
  },
  {
    num: "04",
    timeframe: "عند التسليم",
    title: "استلام التقرير الكامل ومتابعة النتائج",
    description:
      "تستلم شيت التسليم الكامل بكل الروابط مع توصياتنا للخطوة التالية لمضاعفة أثر الباك لينكس على ترتيبك ومبيعاتك.",
    deliverable: "تقرير Excel كامل + توصيات تصدر مخصصة",
  },
];

const BACKLINKS_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "الأمان وجوجل",
    question: "هل خدمة الباك لينكس آمنة على موقعي ولا تسبب عقوبة من جوجل؟",
    answer:
      "نعم، جميع الباقات تُنفذ يدوياً بنسبة 100% وفق منهجية White-Hat مع تنوع كبير عبر 20 نوعاً مختلفاً من المنصات العالمية والعربية وتوزيع طبيعي للـ Anchor Text، ما يجعل ملف الروابط يبدو طبيعياً وآمناً تماماً أمام تحديثات جوجل.",
  },
  {
    id: "faq-2",
    category: "اختيار الباقة",
    question: "ما هي الباقة الأنسب لموقعي: 100 أم 300 أم 500 باك لينك؟",
    answer:
      "للمواقع الجديدة أو صفحات الهبوط الجديدة ننصح بباقة 100 أو 200 باك لينك كبداية طبيعية. أما للمتاجر الإلكترونية ومواقع الشركات التي تنافس على كلمات تجارية في مصر أو الخليج فإن باقة النمو 300 أو القمة 500 تحقق أسرع وأقوى دفعة في قوة الدومين والترتيب.",
  },
  {
    id: "faq-3",
    category: "عدد الكلمات والروابط",
    question: "هل يمكنني استهداف أكثر من صفحة وأكثر من كلمة مفتاحية في نفس الباقة؟",
    answer:
      "نعم بالتأكيد! نفضل توزيع الباقة على الصفحة الرئيسية وصفحتين إلى 4 صفحات خدمات/تصنيفات مع تنويع الكلمات المفتاحية (عربي أو إنجليزي) لأن هذا التوزيع أقوى وأكثر أماناً في السيو.",
  },
  {
    id: "faq-4",
    category: "مدة التنفيذ",
    question: "كم يستغرق تنفيذ الباقة وتسليم التقرير؟",
    answer:
      "تستغرق باقات 100 و200 باك لينك من 3 إلى 5 أيام عمل، وباقات 300 إلى 500 باك لينك من 5 إلى 10 أيام عمل لضمان التنفيذ اليدوي التدريجي الآمن وتسليم تقرير مفصّل بكل رابط.",
  },
  {
    id: "faq-5",
    category: "ظهور النتائج",
    question: "متى تظهر الروابط في Google Search Console وAhrefs ويبدأ تحسن الترتيب؟",
    answer:
      "تبدأ الروابط بالظهور والأرشفة تدريجياً خلال أسبوعين إلى 4 أسابيع من التسليم، وتنعكس قوتها على تحسن ترتيب الكلمات وارتفاع DA/DR خلال 30 إلى 60 يوماً خاصة عند دمجها مع محتوى جيد وسيو داخلي سليم.",
  },
  {
    id: "faq-6",
    category: "اللغات والمنصات",
    question: "هل تدعم الخدمة المواقع العربية والإنجليزية ومتاجر سلة وزد وشوبيفاي؟",
    answer:
      "نعم، ننفذ حملات الباك لينكس لجميع المواقع العربية والإنجليزية، وسواء كان موقعك مبنياً على Next.js أو WordPress أو WooCommerce أو Shopify أو سلة أو زد.",
  },
];

const SEMANTIC_KEYWORDS: string[] = [
  "خدمة بناء باك لينكس قوي وآمن",
  "شراء باك لينك يدوي White-Hat",
  "باقات الباك لينك 2026",
  "رفع الدومين اثورتي DA وDR",
  "باك لينك Web 2.0 وجست بست",
  "باك لينك جوجل سايت وميديم ونوشن",
  "باك لينك ويكي وQuora وSubstack",
  "تحسين السيو الخارجي Off-Page SEO",
  "تقرير باك لينكس شامل Excel",
  "تسريع أرشفة وتصدر جوجل",
  "باك لينك للمتاجر الإلكترونية سلة وزد وشوبيفاي",
  "شركة بناء روابط خلفية في مصر والسعودية",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD — Service + OfferCatalog USD + FAQPage + Breadcrumb)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمة بناء الباك لينكس القوية والآمنة — UNIQUE Digital Agency",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://www.uniquee-ws.com",
      telephone: "+201270506511",
    },
    serviceType: "Off-Page SEO & White-Hat Link Building",
    areaServed: ["EG", "SA", "AE", "KW"],
    url: "https://www.uniquee-ws.com/services/backlinks",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "باقات الباك لينكس المتنوعة (Rank Backlinks)",
      itemListElement: BACKLINK_PACKAGES.map((pkg) => ({
        "@type": "Offer",
        name: pkg.title,
        price: pkg.price,
        priceCurrency: "USD",
        description: `${pkg.totalLinks} — ${pkg.perTypeCount}`,
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BACKLINKS_FAQS.map((faq) => ({
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
        name: "خدمة الباك لينكس",
        item: "https://www.uniquee-ws.com/services/backlinks",
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
// MAIN PAGE COMPONENT — BACKLINKS SERVICE PAGE (ARABIC RTL)
// ============================================================================

export default function BacklinksServicePage() {
  const heroWhatsapp = getWhatsAppUrl(
    "مرحباً UNIQUE Digital Agency! أريد استشارة مجانية لاختيار أنسب باقة باك لينكس لموقعي."
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
                UNIQUE <span className="text-blue-400">BACKLINKS</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">
                بناء الروابط الخلفية والسلطة الرقمية
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#comparison" className="hover:text-cyan-300 transition">
              لماذا UNIQUE؟
            </a>
            <a href="#platforms" className="hover:text-cyan-300 transition">
              الـ 20 منصة
            </a>
            <a href="#packages" className="hover:text-cyan-300 transition">
              الباقات والأسعار
            </a>
            <a href="#safety" className="hover:text-cyan-300 transition">
              معايير الأمان
            </a>
            <a href="#workflow" className="hover:text-cyan-300 transition">
              آلية التنفيذ
            </a>
            <a href="#faq" className="hover:text-cyan-300 transition">
              الأسئلة الشائعة
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/en/services/backlinks"
              className="px-3.5 py-2 rounded-xl border border-neutral-800 bg-neutral-950 hover:border-cyan-500/50 text-xs font-bold text-neutral-200 hover:text-cyan-300 transition"
            >
              English
            </Link>
            <a
              href={heroWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-l from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>اطلب باقتك الآن</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION + LIVE DOMAIN AUTHORITY (DR/DA) SIMULATOR
      ==================================================================== */}
      <section className="relative overflow-hidden pt-14 pb-20 lg:pt-24 lg:pb-28 border-b border-neutral-900">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-1/4 w-[540px] h-[540px] rounded-full bg-blue-600/12 blur-[150px]" />
          <div className="absolute top-20 left-1/4 w-[460px] h-[460px] rounded-full bg-cyan-500/10 blur-[150px]" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[560px] h-[300px] rounded-full bg-emerald-500/8 blur-[130px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link href="/" className="hover:text-cyan-300 transition">
              الرئيسية
            </Link>
            <ChevronLeft className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-cyan-300 font-semibold">خدمة بناء الباك لينكس</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <Link2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>White-Hat Off-Page SEO</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">20 نوع منصة عالمية وعربية</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.18] mb-6">
                ارفع قوة موقعك وتصدر جوجل مع{" "}
                <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  خدمة الباك لينكس القوية والآمنة
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                الروابط الخلفية (Backlinks) هي بمثابة <strong className="text-white">أصوات ثقة</strong>{" "}
                يعتمد عليها جوجل لترتيب موقعك فوق منافسيك. في{" "}
                <strong className="text-cyan-300">UNIQUE Digital Agency</strong> نبني لك ملف
                باك لينكس يدوياً ومتنوعاً عبر 20 منصة عالية السلطة (Web 2.0، جست بست، جوجل سايت،
                ميديم، نوشن، ويكي، Quora) بأمان تام وبتقارير تسليم كاملة تبدأ من{" "}
                <strong className="text-amber-300">5 دولار فقط</strong>.
              </p>

              {/* Trust Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "تنفيذ يدوي 100% آمن ضد تحديثات جوجل",
                  "تنوع طبيعي عبر 20 نوعاً من المنصات القوية",
                  "تقرير Excel كامل وموثّق بكل رابط منشور",
                  "مناسب للمواقع العربية والإنجليزية والمتاجر",
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

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <span>تصفح باقات الباك لينكس ($5 – $25)</span>
                  <ArrowLeft className="w-4 h-4" />
                </a>

                <a
                  href={heroWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>استشارة مجانية لموقعك</span>
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
                  توزيع طبيعي للـ Anchor Text • بدون سبام
                </span>
              </div>
            </div>

            {/* Hero Visual: Live Authority & Backlink Health Dashboard */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-cyan-300">
                      مؤشر قوة الدومين والروابط — Authority Monitor
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    Spam Score: 1% آمن
                  </span>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Domain Rating</div>
                    <div className="text-xl font-black text-emerald-400" dir="ltr">14 → 48</div>
                    <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">نمو تدريجي</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">Referring Domains</div>
                    <div className="text-xl font-black text-cyan-300" dir="ltr">+340</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">20 فئة منصة</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">الزيارات العضوية</div>
                    <div className="text-xl font-black text-amber-300" dir="ltr">+290%</div>
                    <div className="text-[10px] text-blue-300 font-semibold mt-0.5">أثر تراكمي</div>
                  </div>
                </div>

                {/* Growth Chart */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      مسار ارتفاع الثقة وترتيب الكلمات بعد الحملة
                    </span>
                    <span className="text-[11px] text-neutral-500">White-Hat</span>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-24 pt-2" dir="ltr">
                    {[15, 22, 34, 48, 60, 74, 88, 100].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <div
                          style={{ height: `${h}%` }}
                          className={`w-full rounded-t-md ${
                            i >= 6
                              ? "bg-gradient-to-t from-blue-600 via-cyan-400 to-emerald-400"
                              : "bg-gradient-to-t from-blue-950 to-blue-500/80"
                          }`}
                        />
                        <span className="text-[10px] text-neutral-500">W{i + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Anchor Text Balance Preview */}
                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">توزيع الـ Anchor Text الآمن</span>
                    <span className="text-[11px] text-emerald-400 font-bold">متوازن 100%</span>
                  </div>
                  {[
                    { label: "اسم البراند والرابط المباشر (Brand & URL)", pct: "50%", w: "w-[50%]", color: "bg-emerald-400" },
                    { label: "مرادفات وكلمات دلالية طويلة (LSI / Partial)", pct: "35%", w: "w-[35%]", color: "bg-cyan-400" },
                    { label: "كلمات مفتاحية رئيسية دقيقة (Exact Match)", pct: "15%", w: "w-[15%]", color: "bg-amber-400" },
                  ].map((bar, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] text-neutral-300">
                        <span>{bar.label}</span>
                        <span className="font-bold text-white" dir="ltr">{bar.pct}</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden">
                        <div className={`h-full rounded-full ${bar.w} ${bar.color}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4 Hero KPIs */}
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
          3. COMPARISON TABLE — UNIQUE BACKLINKS VS SPAM VS NONE
      ==================================================================== */}
      <section id="comparison" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="الفرق الجوهري في النتائج والأمان"
            title="لماذا يختار أصحاب المواقع"
            highlight="باك لينك UNIQUE اليدوي المتنوع؟"
            subtitle="الفارق بين باك لينك يرفع موقعك للصفحة الأولى وبين باك لينك عشوائي يضر الدومين يكمن في التنوع، اليدوية، وهندسة الروابط."
          />

          <div className="overflow-x-auto rounded-3xl border border-neutral-800 bg-[#060911]">
            <table className="w-full text-right border-collapse min-w-[780px]">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-950/90">
                  <th className="py-5 px-6 text-xs font-extrabold text-neutral-400">معيار المقارنة</th>
                  <th className="py-5 px-6 text-xs font-extrabold text-cyan-300 bg-blue-500/10">
                    باك لينك UNIQUE (يدوي 20 منصة)
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold text-amber-300">
                    باك لينك السبام الآلي الرخيص
                  </th>
                  <th className="py-5 px-6 text-xs font-extrabold text-neutral-400">
                    عدم بناء روابط خلفية
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80 text-sm">
                {BACKLINKS_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/40 transition">
                    <td className="py-4 px-6 font-bold text-white">{row.criterion}</td>
                    <td className="py-4 px-6 text-emerald-300 font-semibold bg-blue-500/[0.04]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.uniqueBacklinks}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-neutral-300">{row.spamBacklinks}</td>
                    <td className="py-4 px-6 text-neutral-400">{row.noBacklinks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. THE 20 BACKLINK PLATFORMS EXPLAINED (4 ENGINEERING CATEGORIES)
      ==================================================================== */}
      <section id="platforms" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="تنوع استراتيجي يحاكي النمو الطبيعي"
            title="تعرّف على الـ 20 نوعاً من الروابط"
            highlight="التي نبنيها لتقوية دومين موقعك"
            subtitle="كل باقة تمنحك مزيجاً هندسياً من أقوى منصات الويب العالمية والعربية لرفع الثقة والترتيب بأعلى أمان."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {BACKLINK_4_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-blue-500/40 p-7 sm:p-8 transition"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-3xl font-black bg-gradient-to-l from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {cat.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300">
                    {cat.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-5">{cat.subtitle}</p>

                <div className="rounded-2xl bg-emerald-500/8 border border-emerald-500/25 p-3.5 mb-5">
                  <div className="text-[11px] font-extrabold text-emerald-300 mb-0.5">
                    أثره على السيو في جوجل:
                  </div>
                  <p className="text-xs text-neutral-200">{cat.seoBenefit}</p>
                </div>

                <div className="space-y-2.5">
                  {cat.platforms.map((pl, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800/80"
                    >
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-white">{pl.name}: </span>
                        <span className="text-xs text-neutral-400">{pl.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. OFFICIAL 5 BACKLINK PACKAGES ($5 / $10 / $15 / $20 / $25)
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="باقات Rank Backlinks الرسمية"
            title="باقات وأسعار الباك لينكس"
            highlight="من 100 إلى 500 رابط خلفي متنوع"
            subtitle="أسعار واضحة بالدولار الأمريكي مع تسليم تقرير Excel كامل بكل رابط منشور."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {BACKLINK_PACKAGES.map((pkg) => {
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
                  {/* Poster Image */}
                  <div className="relative w-full h-[360px] bg-black flex items-center justify-center p-2 overflow-hidden">
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
                      {pkg.isSummit && <Crown className="w-3.5 h-3.5" />}
                      <span>{pkg.badge}</span>
                    </span>
                  </div>

                  {/* Card Body */}
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
                      <p className="text-xs text-neutral-400 mb-5 leading-relaxed">{pkg.idealFor}</p>

                      {/* Price Box */}
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
                        <div className="mt-2 pt-2 border-t border-neutral-800/80 text-[11px] text-neutral-300">
                          {pkg.perTypeCount}
                        </div>
                      </div>

                      <ul className="space-y-2.5 mb-7">
                        {pkg.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-neutral-200 text-xs flex items-start gap-2.5 leading-relaxed"
                          >
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                pkg.isSummit
                                  ? "bg-amber-500/15 border border-amber-400/40 text-amber-300"
                                  : "bg-emerald-500/15 border border-emerald-500/35 text-emerald-400"
                              }`}
                            >
                              <Check className="w-3 h-3" />
                            </span>
                            <span>{h}</span>
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
                      <MessageSquare className="w-4 h-4" />
                      <span>اطلب الباقة الآن</span>
                      <ArrowUpLeft className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. SAFETY STANDARDS (4 TABLES) + LIVE BACKLINK AUDIT TERMINAL
      ==================================================================== */}
      <section id="safety" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="بروتوكول الأمان في UNIQUE"
            title="4 معايير صارمة تحمي موقعك"
            highlight="وتضاعف قوة الباك لينكس"
            subtitle="نلتزم بقواعد Google Spam Policies لنضمن لك ارتفاعاً مستقراً وآمناً في الترتيب."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {SAFETY_4_TABLES.map((tbl) => (
              <div
                key={tbl.id}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 p-6 sm:p-7"
              >
                <div className="flex items-center justify-between gap-3 border-b border-neutral-800 pb-4 mb-5">
                  <h3 className="text-lg font-extrabold text-white">{tbl.title}</h3>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/25 text-[11px] font-bold text-cyan-300">
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

          {/* Live Backlink Quality Terminal */}
          <div
            dir="ltr"
            className="max-w-4xl mx-auto rounded-3xl bg-[#050811] border border-cyan-500/30 p-6 font-mono text-xs text-left"
          >
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span className="ml-2 text-neutral-400 font-sans font-bold">
                  unique-backlink-verifier — Off-Page Quality Gate
                </span>
              </div>
              <span className="text-emerald-400">VERIFIED</span>
            </div>
            <div className="space-y-2 text-neutral-300 leading-relaxed">
              <div>
                <span className="text-cyan-400">$</span> unique-links --verify --package=&quot;rank-summit-500&quot;
              </div>
              <div className="text-emerald-400">
                ✓ [Placement] 100% Manual White-Hat Execution Across 20 Distinct Platforms
              </div>
              <div className="text-emerald-400">
                ✓ [Anchor Diversity] 50% Brand/URL | 35% Partial/LSI | 15% Target Keyword
              </div>
              <div className="text-blue-300">
                ✓ [Authority Sources] Google Sites • Medium • Notion • GitHub • Quora • Substack • Web 2.0
              </div>
              <div className="text-amber-300">
                ✓ [Deliverable] Live Verified Excel Report Ready for Client Handover
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. 4-STEP WORKFLOW
      ==================================================================== */}
      <section id="workflow" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="خطوات منظمة وشفافة"
            title="كيف ننفّذ حملة الباك لينكس"
            highlight="في 4 خطوات دقيقة؟"
            subtitle="من استلام رابط موقعك حتى استلام شيت الروابط الحيّة بكل شفافية."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_4_STEPS.map((st) => (
              <div
                key={st.num}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-extrabold text-cyan-300">
                      الخطوة {st.num}
                    </span>
                    <span className="text-xs font-bold text-amber-300">{st.timeframe}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-2.5">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                    {st.description}
                  </p>
                </div>
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/25 p-3">
                  <div className="text-[10px] font-bold text-emerald-300 mb-0.5">المخرج:</div>
                  <div className="text-xs font-bold text-white">{st.deliverable}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. FAQ ACCORDION + SEMANTIC KEYWORDS CLOUD
      ==================================================================== */}
      <section id="faq" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="إجابات واضحة وشفافة"
            title="الأسئلة الشائعة حول"
            highlight="خدمة بناء الباك لينكس"
            subtitle="كل ما تريد معرفته عن الأمان، اختيار الباقة، مدة التسليم، وظهور النتائج في Search Console."
          />

          <div className="max-w-4xl mx-auto space-y-4 mb-16">
            {BACKLINKS_FAQS.map((faq) => (
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

          {/* Semantic Cloud */}
          <div className="rounded-3xl bg-[#070B14] border border-neutral-800 p-7 sm:p-8">
            <div className="text-xs font-bold text-blue-400 mb-2">
              التغطية الدلالية لخدمة السيو الخارجي
            </div>
            <h3 className="text-lg font-extrabold text-white mb-5">
              خدمات بناء الروابط الخلفية وتقوية الدومين في UNIQUE
            </h3>
            <div className="flex flex-wrap gap-2">
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
      </section>

      {/* ====================================================================
          9. FINAL CTA & FOOTER
      ==================================================================== */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B1730] via-[#070D1A] to-[#051418] border border-blue-500/35 p-8 sm:p-12 lg:p-14 text-center shadow-2xl shadow-blue-950/50">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ابدأ تقوية موقعك اليوم بباقات تبدأ من $5 فقط</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              جاهز لرفع قوة الدومين وتجاوز منافسيك في{" "}
              <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                جوجل؟
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              أرسل لنا رابط موقعك عبر واتساب الآن وسنساعدك مجاناً في اختيار أنسب باقة باك لينكس
              وأفضل توزيع للكلمات المفتاحية لتحقيق أسرع صعود آمن.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>اطلب باقة الباك لينكس عبر واتساب</span>
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
              © {new Date().getFullYear()} UNIQUE Digital Agency — خدمة بناء الباك لينكس والسيو الخارجي.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/en/services/backlinks" className="hover:text-cyan-300 transition">
                Backlinks Service (EN)
              </Link>
              <Link href="/egypt-seo" className="hover:text-cyan-300 transition">
                شركة سيو في مصر
              </Link>
              <Link href="/riyadh-seo" className="hover:text-cyan-300 transition">
                شركة سيو في الرياض
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