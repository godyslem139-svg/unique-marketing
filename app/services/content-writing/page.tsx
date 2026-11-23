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

function PenTool({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 19 7-7 3 3-7 7-3-3z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="m2 2 7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
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
// NEXT.JS METADATA — CONTENT WRITING SERVICE PAGE (ARABIC RTL)
// ============================================================================

export const metadata: Metadata = {
  title:
    "كتابة محتوى المواقع الإلكترونية والسوشيال ميديا | SEO & Copywriting — UNIQUE",
  description:
    "خدمة كتابة محتوى المواقع الإلكترونية، مقالات السيو المتوافقة مع جوجل والذكاء الاصطناعي (GEO)، وصف منتجات المتاجر، وخطط محتوى السوشيال ميديا وسكريبتات الريلز بالعربية (فصحى، خليجي، مصري) والإنجليزية بباقات تبدأ من $120 شهرياً.",
  keywords: [
    "كتابة محتوى المواقع الالكترونية",
    "كتابة محتوى السوشيال ميديا",
    "شركة كتابة محتوى تسويقي",
    "كتابة مقالات متوافقة مع السيو SEO",
    "كتابة وصف منتجات المتاجر الالكترونية",
    "كتابة سكريبتات ريلز وتيك توك",
    "كتابة محتوى صفحات الهبوط Copywriting",
    "اسعار كتابة المحتوى التسويقي",
    "كتابة محتوى عربي وانجليزي",
  ],
  alternates: {
    canonical: "https://www.uniquee-ws.com/services/content-writing",
    languages: {
      ar: "https://www.uniquee-ws.com/services/content-writing",
      en: "https://www.uniquee-ws.com/en/services/content-writing",
      "x-default": "https://www.uniquee-ws.com/services/content-writing",
    },
  },
  openGraph: {
    title: "كتابة محتوى المواقع الإلكترونية والسوشيال ميديا — UNIQUE Digital Agency",
    description:
      "محتوى بشري أصلي 100% يجمع بين تصدر جوجل وAI Overviews وإقناع العميل بالشراء عبر موقعك وحسابات السوشيال ميديا.",
    url: "https://www.uniquee-ws.com/services/content-writing",
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

interface ContentPillar {
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

interface ToneVoiceCard {
  name: string;
  tag: string;
  bestFor: string;
  points: string[];
}

interface EditorialChecklist {
  id: string;
  title: string;
  badge: string;
  items: string[];
}

interface WorkflowPhase {
  num: string;
  timeframe: string;
  title: string;
  desc: string;
  output: string;
}

interface ContentPackageUSD {
  id: string;
  name: string;
  badge: string;
  price: string;
  cycle: string;
  idealFor: string;
  isPopular?: boolean;
  volume: string;
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
// DATA ARRAYS — WEBSITE & SOCIAL MEDIA CONTENT WRITING
// ============================================================================

const HERO_KPIS: HeroKpi[] = [
  {
    id: "human",
    value: "100% بشري",
    title: "أصلي بدون حشو ذكاء اصطناعي",
    subtitle: "نصوص حقيقية مفحوصة ضد الانتحال تعبّر عن خبرتك وتتوافق مع معايير Google E-E-A-T.",
    accent: "emerald",
  },
  {
    id: "seo-geo",
    value: "SEO + GEO",
    title: "مهيأ لجوجل وChatGPT معاً",
    subtitle: "هيكلة دلالية واضحة، عناوين H1–H3، وإجابات مركّزة تقتبسها محركات AI.",
    accent: "cyan",
  },
  {
    id: "dialects",
    value: "4 لهجات ولغتان",
    title: "فصحى، خليجي، مصري وإنجليزي",
    subtitle: "نخاطب جمهورك بلغته الحقيقية التي يشعر بها ويثق فيها في مصر والخليج.",
    accent: "blue",
  },
  {
    id: "pricing",
    value: "تبدأ من $120",
    title: "باقات مرنة للمواقع والسوشيال",
    subtitle: "خطة محتوى شهرية منظمة وجاهزة للنشر الفوري مع تعديلات حتى رضاك التام.",
    accent: "amber",
  },
];

const SIX_CONTENT_PILLARS: ContentPillar[] = [
  {
    id: "seo-articles",
    number: "01",
    badge: "الزيارات العضوية والسيو",
    title: "كتابة مقالات السيو الدلالي وتصدر جوجل (SEO & GEO)",
    enTitle: "Topical Authority Blog & Pillar Articles",
    summary:
      "مقالات بحثية عميقة مبنية على تحليل الكلمات المفتاحية ونية الباحث، منسّقة بعناوين فرعية دقيقة، جداول مقارنة، وروابط داخلية تدفع موقعك للصفحة الأولى وإجابات AI Overviews.",
    impact: "تحوّل مدونتك إلى أصل رقمي يجلب عملاء مجانيين لسنوات دون توقف.",
    features: [
      "بحث كلمات مفتاحية تجارية ومعلوماتية وتحليل فجوة المنافسين",
      "تسليم المقال جاهزاً للنشر (H1–H3، Meta Title، Meta Description، Alt Images)",
      "توزيع طبيعي للكلمات الدلالية (LSI) وربط داخلي بصفحات خدماتك البيعية",
      "صياغة فقرات إجابة مباشرة ترفع فرص الظهور في Featured Snippets وChatGPT",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد خدمة كتابة مقالات سيو احترافية لتصدر جوجل.",
  },
  {
    id: "website-copy",
    number: "02",
    badge: "الإقناع ورفع التحويل",
    title: "كتابة محتوى صفحات المواقع وصفحات الهبوط البيعية",
    enTitle: "Website & High-Converting Landing Page Copy",
    summary:
      "صياغة نصوص الصفحة الرئيسية، من نحن، وصفحات الخدمات وصفحات الهبوط الإعلانية وفق أطر الإقناع العالمية (AIDA وPAS) لإبراز قيمتك التنافسية ودفع الزائر للتواصل فوراً.",
    impact: "يضاعف نسبة تحويل زوار الموقع والإعلانات إلى رسائل واتساب ومكالمات بيع.",
    features: [
      "عناوين جذابة (Hooks) تلخص الفائدة المباشرة للعميل خلال أول 3 ثوانٍ",
      "معالجة اعتراضات العميل قبل الشراء بأرقام وضمانات واضحة",
      "صياغة أزرار دعوة لاتخاذ إجراء (CTAs) دقيقة ومقنعة في كل قسم",
      "توافق تام بين النص وتصميم الـ UX لتسهيل القراءة السريعة على الموبايل",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد كتابة محتوى بيعي لموقعي الإلكتروني أو صفحات الهبوط.",
  },
  {
    id: "social-content",
    number: "03",
    badge: "التفاعل وبناء المجتمع",
    title: "كتابة محتوى السوشيال ميديا وخطط النشر الشهرية",
    enTitle: "Social Media Content Calendars & Captions",
    summary:
      "خطة محتوى شهرية متكاملة (Content Calendar) لمنصات فيسبوك، إنستجرام، لينكدإن، إكس، وتيك توك — تمزج بين المحتوى التوعوي، التفاعلي، والبيعي بنبرة صوت ثابتة لعلامتك.",
    impact: "يحافظ على حضور قوي ومستمر يحول المتابعين إلى عملاء فعليين لا مجرد لايكات.",
    features: [
      "جدول نشر شهري كامل مقسم حسب الأهداف (وعي، ثقة، تفاعل، ومبيعات)",
      "كتابة النص التصميمي (Visual Text) + الكابشن البيعي + الهاشتاجات المستهدفة",
      "تكييف النبرة حسب كل منصة (مهنية لـ LinkedIn، تفاعلية لإنستجرام وفيسبوك)",
      "إمكانية الدمج المباشر مع باقات إدارة السوشيال ميديا والتصاميم في UNIQUE",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد خطة وكتابة محتوى سوشيال ميديا شهرية لنشاطي.",
  },
  {
    id: "reels-ad-scripts",
    number: "04",
    badge: "الانتشار والإعلانات الممولة",
    title: "كتابة سكريبتات الريلز والفيديوهات ونصوص الإعلانات",
    enTitle: "Reels, TikTok & Paid Ad Copywriting",
    summary:
      "سكريبتات فيديوهات قصيرة (Reels & TikTok) ونصوص إعلانات ممولة (Ad Copy) تبدأ بخطاف بصري وكلامي قوي يوقف التمرير (Scroll-Stopper) ويقود المشاهد نحو الشراء أو الرسالة.",
    impact: "يرفع نسبة المشاهدة الكاملة ويخفض تكلفة النقرة والرسالة في حملاتك الإعلانية.",
    features: [
      "كتابة 3 خطافات (Hooks) مختلفة للاختبار A/B في الإعلانات والريلز",
      "توجيه المشاهد البصرية (Visual Cues) والنص الصوتي بدقة لكل ثانية",
      "نصوص إعلانات ممولة متوافقة مع سياسات Meta وTikTok وGoogle Ads",
      "تخصيص كامل للربط مع باقات إنتاج الريلز في UNIQUE",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد كتابة سكريبتات ريلز ونصوص إعلانات ممولة لعلامتي.",
  },
  {
    id: "product-descriptions",
    number: "05",
    badge: "مبيعات المتاجر الإلكترونية",
    title: "كتابة وصف المنتجات والأقسام للمتاجر الإلكترونية",
    enTitle: "E-Commerce Product & Category Copy",
    summary:
      "حوّل مواصفات منتجاتك الجافة إلى أوصاف بيعية مقنعة تشرح الفائدة للعميل، تجيب على أسئلته حول المقاس والاستخدام والضمان، وتتصدر نتائج بحث جوجل في سلة وزد وشوبيفاي وووكومرس.",
    impact: "يرفع نسبة الإضافة للسلة ويقلل أسئلة العملاء المتكررة ومعدل المرتجعات.",
    features: [
      "أوصاف فريدة 100% خالية من النسخ المتكرر الذي يضر بأرشفة المتجر",
      "نقاط سريعة قابلة للمسح البصري (Bullet Benefits) تبرز مميزات المنتج",
      "تضمين طبيعي للكلمات الشرائية التي يبحث بها عملاؤك في مصر والخليج",
      "كتابة محتوى صفحات التصنيفات (Category Hubs) لتصدر الكلمات العامة",
    ],
    whatsappMsg: "مرحباً UNIQUE، لدي متجر إلكتروني وأريد كتابة أوصاف منتجات احترافية متوافقة مع السيو.",
  },
  {
    id: "profiles-bilingual",
    number: "06",
    badge: "الهوية المؤسسية والترجمة",
    title: "الملفات التعريفية للشركات والكتابة ثنائية اللغة (AR/EN)",
    enTitle: "Company Profiles & Bilingual Transcreation",
    summary:
      "إعداد البروفايل التعريفي للشركات (Company Profile)، العروض التجارية، النشرات البريدية، والتعريب الإبداعي (Transcreation) بين العربية والإنجليزية بمستوى مؤسسي رفيع.",
    impact: "يمنح شركتك حضوراً احترافياً مقنعاً أمام العملاء الكبار والجهات والشركاء.",
    features: [
      "صياغة الرؤية، الرسالة، القيم، وسابقة الأعمال بأسلوب مؤسسي متماسك",
      "تعريب تسويقي يحافظ على روح الإعلان والرسالة بعيداً عن الترجمة الحرفية",
      "كتابة سلاسل البريد الإلكتروني (Email Sequences) ورسائل واتساب التسويقية",
      "توحيد دليل نبرة الصوت (Brand Tone of Voice) لجميع قنواتك",
    ],
    whatsappMsg: "مرحباً UNIQUE، أريد كتابة بروفايل تعريفي للشركة أو محتوى ثنائي اللغة عربي وإنجليزي.",
  },
];

const TONE_VOICE_CARDS: ToneVoiceCard[] = [
  {
    name: "العربية الفصحى العصرية",
    tag: "للشركات والسيو",
    bestFor: "المواقع الرسمية، المقالات المتخصصة، الشركات الاستشارية والـ B2B.",
    points: [
      "لغة سلسة وواضحة بعيدة عن الجمود والتعقيد الأكاديمي",
      "مثالية لمقالات السيو والملفات التعريفية وLinkedIn",
      "تدقيق نحوي وإملائي دقيق 100% قبل التسليم",
    ],
  },
  {
    name: "اللهجة الخليجية والسعودية",
    tag: "لأسواق السعودية والإمارات",
    bestFor: "متاجر سلة وزد، العيادات، المطاعم، وحملات السوشيال في الخليج.",
    points: [
      "مفردات طبيعية قريبة من العميل السعودي والخليجي دون تكلّف",
      "مناسبة جداً لسكريبتات الريلز وإعلانات سناب شات وتيك توك",
      "تحترم ذوق وثقافة السوق الخليجي وتبني ألفة سريعة",
    ],
  },
  {
    name: "اللهجة المصرية البيضاء",
    tag: "للتفاعل السريع في مصر",
    bestFor: "العلامات التجارية في مصر، المتاجر، الريلز، وإعلانات فيسبوك وإنستجرام.",
    points: [
      "أسلوب ذكي وخفيف يوقف التمرير ويشجع التعليقات والمشاركات",
      "مثالية للمحتوى البيعي المباشر والرد على اعتراضات العميل",
      "تحافظ على احترافية العلامة التجارية دون مبالغة أو ابتذال",
    ],
  },
  {
    name: "الإنجليزية التجارية (EN)",
    tag: "للتوسع الإقليمي والعالمي",
    bestFor: "المواقع ثنائية اللغة، الشركات المصدّرة، وعلامات دبي والـ SaaS.",
    points: [
      "صياغة إنجليزية طبيعية ومقنعة موجهة للتحويل (Native-Grade Copy)",
      "متوافقة مع معايير السيو الإنجليزي وAI Overviews",
      "توحيد كامل للرسالة التسويقية بين نسختك العربية والإنجليزية",
    ],
  },
];

const UNIQUE_4_CONTENT_STANDARDS: EditorialChecklist[] = [
  {
    id: "st-original",
    title: "1. أصالة بشرية 100% وبدون حشو",
    badge: "Zero Fluff",
    items: [
      "كتابة وتحرير بشري متخصص مع فحص كامل ضد النسخ والانتحال",
      "معلومات دقيقة ومفيدة فعلياً للقارئ بعيداً عن التكرار الممل",
      "الالتزام الكامل بنبرة صوت علامتك التجارية وجمهورك المستهدف",
      "حقوق ملكية فكرية 100% لكافة النصوص والمقالات المسلمة",
    ],
  },
  {
    id: "st-seo",
    title: "2. هندسة السيو والذكاء الاصطناعي",
    badge: "SEO + GEO",
    items: [
      "بحث كلمات مفتاحية مدروس قبل كتابة أي مقال أو صفحة موقع",
      "توزيع احترافي للعناوين H1–H3 والفقرات القصيرة سهلة المسح",
      "تضمين Meta Title & Description وجاهزية كاملة للأرشفة",
      "هيكلة إجابات واضحة تزيد اقتباس محتواك في Google AI وChatGPT",
    ],
  },
  {
    id: "st-cro",
    title: "3. صياغة بيعية موجهة للتحويل",
    badge: "Copywriting",
    items: [
      "التركيز على الفوائد التي تهم العميل لا مجرد سرد مميزات جافة",
      "دعوات واضحة لاتخاذ إجراء (CTAs) تقود للواتساب أو الشراء",
      "ربط ذكي بين المحتوى التوعوي وعروضك وخدماتك المدفوعة",
      "اختبار خطافات (Hooks) متعددة للبوستات والريلز والإعلانات",
    ],
  },
  {
    id: "st-delivery",
    title: "4. التزام بالمواعيد ومراجعة مرنة",
    badge: "On-Time",
    items: [
      "تسليم منظم عبر Google Docs أو خطط نشر جاهزة للرفع مباشرة",
      "مراجعة لغوية وتحريرية قبل وصول أي ملف إليك",
      "جولتا تعديل مجانيتان على كل قطعة محتوى حتى رضاك التام",
      "إمكانية الرفع والنشر المباشر على موقعك أو حساباتك عند الطلب",
    ],
  },
];

const WORKFLOW_PHASES: WorkflowPhase[] = [
  {
    num: "01",
    timeframe: "اليوم 1 – 2",
    title: "فهم النشاط ونبرة الصوت (Brief)",
    desc: "ندرس خدماتك، منافسيك، شريحة عملائك، واللهجة الأنسب لبناء دليل نبرة صوت واضح ومخصص لعلامتك.",
    output: "وثيقة نبرة الصوت وأهداف المحتوى",
  },
  {
    num: "02",
    timeframe: "اليوم 3 – 4",
    title: "بحث الكلمات وخطة المحتوى",
    desc: "نستخرج أهم الكلمات البحثية للموقع ونعد جدول نشر شهري متكامل لعناوين المقالات وبوستات السوشيال والريلز لاعتماده.",
    output: "خطة محتوى شهرية معتمدة",
  },
  {
    num: "03",
    timeframe: "التنفيذ الأسبوعي",
    title: "الكتابة، التهيئة للسيو والمراجعة",
    desc: "فريقنا المتخصص يكتب النصوص والمقالات والسكريبتات، ثم تمر بمرحلة تدقيق لغوي وفحص سيو وتحويل قبل التسليم.",
    output: "دفعات محتوى جاهزة للنشر أسبوعياً",
  },
  {
    num: "04",
    timeframe: "المتابعة الشهرية",
    title: "التحسين المستمر بناءً على النتائج",
    desc: "نراجع أعلى المقالات والبوستات تفاعلاً وجلباً للعملاء لنضاعف ما يحقق مبيعات حقيقية في الشهر التالي.",
    output: "تطوير مستمر لعائد المحتوى",
  },
];

const CONTENT_PACKAGES_USD: ContentPackageUSD[] = [
  {
    id: "content-seo",
    name: "باقة محتوى السيو للمواقع",
    badge: "للمدونات وتصدر جوجل",
    price: "120",
    cycle: "دولار / شهرياً",
    idealFor: "مثالية للمواقع والمتاجر الساعية لبناء سلطة موضوعية وجلب زيارات مجانية مستدامة من جوجل.",
    volume: "8 مقالات سيو احترافية",
    features: [
      "8 مقالات سيو عميقة (1,000 – 1,500 كلمة لكل مقال) أصلية 100%",
      "بحث كلمات مفتاحية ونية الباحث وخطة عناوين قبل الكتابة",
      "تسليم جاهز للنشر مع Meta Tags وH1–H3 واقتراح الروابط الداخلية",
      "مهيأة للظهور في جوجل ومحركات الذكاء الاصطناعي (GEO)",
      "تدقيق لغوي شامل + تعديلات مجانية حتى الاعتماد",
    ],
    whatsappMsg: "مرحباً UNIQUE، أرغب في الاشتراك في باقة محتوى السيو للمواقع ($120 شهرياً).",
  },
  {
    id: "content-social",
    name: "باقة محتوى السوشيال والريلز",
    badge: "الأكثر طلباً",
    price: "165",
    cycle: "دولار / شهرياً",
    idealFor: "الأنسب للعلامات التجارية التي تريد خطة محتوى سوشيال ميديا وسكريبتات ريلز وإعلانات ترفع التفاعل والمبيعات.",
    isPopular: true,
    volume: "خطة سوشيال + سكريبتات ريلز",
    features: [
      "خطة محتوى شهرية كاملة (16 بوست احترافي: نص تصميم + كابشن + هاشتاج)",
      "كتابة 6 سكريبتات ريلز/تيك توك بخطافات قوية (Hooks) ودعوة للشراء",
      "كتابة 4 نصوص إعلانات ممولة (Ad Copy) جاهزة لحملات Meta وتيك توك",
      "اختيار اللهجة الأنسب لسوقك (خليجي، مصري، فصحى، أو إنجليزي)",
      "متوافقة للترقية المباشرة مع باقات إدارة السوشيال ميديا الكاملة",
    ],
    whatsappMsg: "مرحباً UNIQUE، أرغب في حجز باقة محتوى السوشيال ميديا والريلز ($165 شهرياً).",
  },
  {
    id: "content-360",
    name: "باقة المحتوى المتكامل 360°",
    badge: "مواقع + سوشيال + متاجر",
    price: "280",
    cycle: "دولار / شهرياً",
    idealFor: "للشركات والمتاجر النشطة التي تريد توحيد رسالتها التسويقية في الموقع والمدونة والسوشيال ميديا معاً.",
    volume: "محتوى شامل عربي أو ثنائي اللغة",
    features: [
      "12 مقال سيو أو صفحة هبوط/خدمة بيعية شهرياً",
      "خطة سوشيال ميديا كاملة (20 بوست) + 10 سكريبتات ريلز وإعلانات",
      "كتابة أو تحسين وصف حتى 25 منتجاً لمتجرك الإلكتروني شهرياً",
      "إمكانية التوزيع بين العربية والإنجليزية مع دليل نبرة صوت موحد",
      "رفع مباشر على WordPress / Sanity / سلة عند الطلب + تقرير أداء",
    ],
    whatsappMsg: "مرحباً UNIQUE، أرغب في الاشتراك في باقة المحتوى المتكامل 360° ($280 شهرياً).",
  },
];

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "الأصالة والجودة",
    question: "هل المحتوى مكتوب بشرياً أم منسوخ من أدوات الذكاء الاصطناعي؟",
    answer:
      "جميع النصوص والمقالات والسكريبتات يتم إعدادها وتحريرها بشرياً بواسطة كتّاب محتوى وتسويق متخصصين لتعكس هوية نشاطك بدقة وتجتاز معايير Google E-E-A-T بدون أي حشو أو عبارات آلية مكررة.",
  },
  {
    id: "faq-2",
    category: "اللهجات واللغات",
    question: "هل تكتبون باللهجة السعودية/الخليجية والمصرية بجانب الفصحى والإنجليزية؟",
    answer:
      "نعم، نختار اللهجة واللغة المناسبة لجمهورك ومنصتك؛ الفصحى العصرية للمواقع والسيو، الخليجية أو المصرية البيضاء للسوشيال والريلز، والإنجليزية التجارية للأسواق الدولية والثنائية اللغة.",
  },
  {
    id: "faq-3",
    category: "التعديلات والاعتماد",
    question: "ماذا لو أردت تعديل نص أو زاوية تسويقية في المقال أو البوست؟",
    answer:
      "تشمل جميع باقاتنا جولتي تعديل مجانيتين على كل محتوى حتى يكون متطابقاً 100% مع رؤيتك ونبرة علامتك التجارية قبل النشر.",
  },
  {
    id: "faq-4",
    category: "المشاريع بالقطعة",
    question: "هل يمكن طلب كتابة محتوى موقع كامل أو بروفايل شركة لمرة واحدة بدون اشتراك شهري؟",
    answer:
      "بالتأكيد. نقدم خدمات كتابة محتوى المواقع الجديدة، صفحات الهبوط، البروفايل التعريفي، وأوصاف المنتجات بنظام الدفعة الواحدة حسب عدد الصفحات أو المنتجات.",
  },
  {
    id: "faq-5",
    category: "التكامل مع التصميم والإدارة",
    question: "هل يمكن دمج كتابة المحتوى مع التصاميم وإدارة السوشيال ميديا أو السيو؟",
    answer:
      "نعم، يمكنك الاطلاع على صفحة الباقات والأسعار للجمع بين كتابة المحتوى وإدارة السوشيال ميديا (تبدأ من $110) وإنتاج الريلز وباقات السيو المتكاملة تحت سقف واحد.",
  },
];

const SEMANTIC_KEYWORDS: string[] = [
  "كتابة محتوى المواقع الإلكترونية",
  "كتابة محتوى السوشيال ميديا",
  "كتابة مقالات متوافقة مع السيو SEO",
  "كتابة محتوى مهيأ للذكاء الاصطناعي GEO",
  "كتابة صفحات الهبوط Copywriting",
  "كتابة سكريبتات ريلز وتيك توك",
  "كتابة وصف منتجات سلة وزد وشوبيفاي",
  "إعداد خطة محتوى شهرية Content Calendar",
  "كتابة محتوى عربي وإنجليزي للشركات",
  "إعداد بروفايل تعريفي للشركات",
];

// ============================================================================
// STRUCTURED DATA (JSON-LD — Service + OfferCatalog USD + FAQPage + Breadcrumb)
// ============================================================================

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمة كتابة محتوى المواقع الإلكترونية والسوشيال ميديا — UNIQUE Digital Agency",
    provider: {
      "@type": "Organization",
      name: "UNIQUE Digital Agency",
      url: "https://www.uniquee-ws.com",
      telephone: "+201270506511",
    },
    serviceType: "Website Content Writing, SEO Copywriting & Social Media Content Creation",
    areaServed: ["EG", "SA", "AE", "KW"],
    url: "https://www.uniquee-ws.com/services/content-writing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "باقات كتابة المحتوى الشهرية (USD)",
      itemListElement: CONTENT_PACKAGES_USD.map((pkg) => ({
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
        name: "كتابة محتوى المواقع والسوشيال ميديا",
        item: "https://www.uniquee-ws.com/services/content-writing",
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
// MAIN PAGE COMPONENT — CONTENT WRITING SERVICE PAGE (ARABIC RTL)
// ============================================================================

export default function ContentWritingServicePage() {
  const heroContentWhatsapp = getWhatsAppUrl(
    "مرحباً UNIQUE Digital Agency! أريد الاستفسار عن خدمة كتابة محتوى المواقع الإلكترونية والسوشيال ميديا لنشاطي."
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
                UNIQUE <span className="text-blue-400">Content</span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium">
                كتابة محتوى المواقع والسوشيال ميديا
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#pillars" className="hover:text-cyan-300 transition">
              أنواع المحتوى
            </a>
            <a href="#tones" className="hover:text-cyan-300 transition">
              اللهجات واللغات
            </a>
            <a href="#standards" className="hover:text-cyan-300 transition">
              معايير الجودة
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
              href="/en/services/content-writing"
              className="px-3.5 py-2 rounded-xl border border-neutral-800 bg-neutral-950 hover:border-cyan-500/50 text-xs font-bold text-neutral-200 hover:text-cyan-300 transition"
            >
              English
            </Link>
            <a
              href={heroContentWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-l from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>اطلب عينة وخطة مجانية</span>
            </a>
          </div>
        </div>
      </header>

      {/* ====================================================================
          2. HERO SECTION + EDITORIAL PERFORMANCE & CONVERSION CARD
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
            <span className="text-cyan-300 font-semibold">كتابة محتوى المواقع والسوشيال ميديا</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-blue-300 mb-6">
                <PenTool className="w-3.5 h-3.5 text-emerald-400" />
                <span>SEO Articles • Website Copy • Social Media • Reels Scripts</span>
                <span className="text-neutral-600">•</span>
                <span className="text-cyan-300">عربي وإنجليزي</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.18] mb-6">
                كتابة{" "}
                <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  محتوى المواقع والسوشيال ميديا
                </span>{" "}
                الذي يتصدر جوجل ويُقنع عميلك بالشراء
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                في <strong className="text-white">UNIQUE Digital Agency</strong> نكتب لك كلمات
                تبيع وتبني ثقة حقيقية — من{" "}
                <strong className="text-cyan-300">
                  مقالات السيو الدلالي وصفحات الهبوط وأوصاف المنتجات حتى خطط السوشيال وسكريبتات الريلز
                </strong>{" "}
                بصياغة بشرية أصيلة تناسب جمهورك في مصر والخليج.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
                {[
                  "محتوى بشري أصلي 100% متوافق مع E-E-A-T وGEO",
                  "خطط سوشيال ميديا وسكريبتات ريلز وإعلانات ممولة",
                  "كتابة بالفصحى والخليجي والمصري والإنجليزية التجارية",
                  "تسليم منظم وجاهز للنشر مع تعديلات حتى رضاك التام",
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
                  href={heroContentWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>اطلب خطة محتوى مخصصة لنشاطك</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>

                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-neutral-700 hover:border-cyan-400/60 bg-neutral-950 text-white font-bold text-base transition"
                >
                  <span>تصفح باقات كتابة المحتوى</span>
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
                  خالي من الانتحال 100% • ملكية كاملة للمحتوى
                </span>
              </div>
            </div>

            {/* Hero Visual: Editorial Quality & Conversion Scorecard */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#070B14] border border-blue-500/25 p-5 sm:p-6 shadow-2xl shadow-blue-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-cyan-300">
                      معمل المحتوى — Editorial &amp; SEO Scorecard
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-300">
                    100% أصلي ✓
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">درجة السيو</div>
                    <div className="text-xl font-black text-blue-400" dir="ltr">96/100</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">SEO + GEO</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">الأصالة</div>
                    <div className="text-xl font-black text-cyan-300" dir="ltr">100%</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">بشري بالكامل</div>
                  </div>
                  <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-3.5">
                    <div className="text-[11px] text-neutral-400 mb-1">نسبة التحويل</div>
                    <div className="text-xl font-black text-amber-300" dir="ltr">+2.4x</div>
                    <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">نصوص بيعية</div>
                  </div>
                </div>

                <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-neutral-200 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      قنوات المحتوى التي نغطيها لك
                    </span>
                    <span className="text-[11px] text-cyan-300 font-bold">AR &amp; EN</span>
                  </div>
                  {[
                    { ch: "مقالات سيو دلالي + صفحات خدمات وهبوط بيعية", tag: "SEO ✓" },
                    { ch: "خطط سوشيال ميديا شهرية (بوستات + كابشن)", tag: "تفاعل ✓" },
                    { ch: "سكريبتات ريلز وتيك توك + نصوص إعلانات ممولة", tag: "تحويل ✓" },
                    { ch: "أوصاف منتجات سلة وزد وشوبيفاي وووكومرس", tag: "مبيعات ✓" },
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
          3. 6 CORE CONTENT WRITING SERVICES
      ==================================================================== */}
      <section id="pillars" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="تغطية تحريرية شاملة 360°"
            title="6 خدمات متخصصة في"
            highlight="كتابة المحتوى التسويقي والسيو"
            subtitle="سواء كنت تبني مدونة تتصدر جوجل، متجراً يبيع يومياً، أو حسابات سوشيال ميديا نشطة — نكتب لك كل كلمة بهدف واضح."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {SIX_CONTENT_PILLARS.map((p) => (
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
                      الأثر التسويقي المباشر:
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
                  <span>اطلب هذه الخدمة عبر واتساب</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. DIALECTS & TONE OF VOICE + EDITORIAL STANDARDS
      ==================================================================== */}
      <section id="tones" className="py-20 lg:py-24 border-b border-neutral-900 bg-[#03050A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="نبرة صوت تخاطب جمهورك بدقة"
            title="نكتب باللغة واللهجة التي"
            highlight="يثق بها عملاؤك في كل سوق"
            subtitle="اختيار النبرة الصحيحة يصنع الفارق بين نص عابر ورسالة تحفّز العميل على التواصل."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {TONE_VOICE_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#070B14] border border-neutral-800 hover:border-cyan-500/40 p-6 transition"
              >
                <span className="inline-block px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] font-bold text-amber-300 mb-3">
                  {card.tag}
                </span>
                <h3 className="text-lg font-extrabold text-white mb-2">{card.name}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">{card.bestFor}</p>
                <ul className="space-y-2">
                  {card.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div id="standards">
            <SectionHeader
              badge="معيار الجودة في UNIQUE"
              title="4 ضمانات تحريرية في كل"
              highlight="مقال وبوست وسكريبت نسلمه لك"
              subtitle="كل قطعة محتوى تمر بمراجعة تسويقية ولغوية وفحص سيو قبل أن تصل إليك."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {UNIQUE_4_CONTENT_STANDARDS.map((tbl) => (
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
              badge="آلية عمل منظمة"
              title="كيف نصنع محتوى متكامل"
              highlight="في 4 خطوات واضحة"
              subtitle="تستلم خطة المحتوى مقدماً وتراجع كل دفعة قبل نشرها بكل سهولة."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {WORKFLOW_PHASES.map((ph) => (
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
        </div>
      </section>

      {/* ====================================================================
          5. TRANSPARENT MONTHLY USD PACKAGES ($120 / $165 / $280)
      ==================================================================== */}
      <section id="packages" className="py-20 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="باقات مرنة بدون التزام سنوي"
            title="باقات كتابة المحتوى التسويقي"
            highlight="بالدولار الأمريكي ($)"
            subtitle="اختر الباقة المناسبة لموقعك أو حساباتك، أو اطلب تسعيراً مخصصاً لمشروع لمرة واحدة."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {CONTENT_PACKAGES_USD.map((pkg) => (
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
                    <span className="text-xs font-bold text-amber-300">{pkg.volume}</span>
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
                  <span>اشترك في {pkg.name}</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>
              </div>
            ))}
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
            title="إجابات واضحة حول"
            highlight="خدمة كتابة المحتوى في UNIQUE"
            subtitle="كل ما يهمك معرفته حول الأصالة، اللهجات، التعديلات، والمشاريع بالقطعة."
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
                <span>التغطية الدلالية لخدمات كتابة المحتوى في UNIQUE</span>
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
              <span>خطة محتوى أولية مجانية + نماذج أعمال سابقة في مجالك</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              جاهز لتحويل كلمات علامتك إلى{" "}
              <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                زيارات ومبيعات يومية؟
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-9">
              أرسل لنا رابط موقعك أو حسابك على واتساب الآن، وسنجهّز لك مقترح خطة محتوى مخصصة
              للشهر الأول تشمل الكلمات المستهدفة وأفكار المقالات والريلز.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={heroContentWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-l from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-black text-base shadow-xl shadow-blue-600/30 transition"
              >
                <MessageSquare className="w-5 h-5" />
                <span>ابدأ خطة محتوى نشاطك الآن</span>
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
              © {new Date().getFullYear()} UNIQUE Digital Agency — كتابة محتوى المواقع الإلكترونية والسوشيال ميديا.
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/en/services/content-writing" className="hover:text-cyan-300 transition">
                Content Writing (EN)
              </Link>
              <Link href="/services/seo" className="hover:text-cyan-300 transition">
                تحسين محركات البحث
              </Link>
              <Link href="/services/e-commerce" className="hover:text-cyan-300 transition">
                المتاجر الإلكترونية
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