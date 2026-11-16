// ... existing code ...
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import type { Metadata, Viewport } from "next";
import Link from "next/link";

// ============================================================================
// ملف الكلاينت التفاعلي الشامل: SEOCompanyUAEClient.tsx
// متوافق مع Next.js App Router ويتضمن كافة الأقسام، السلايدرات، حاسبة العائد، وفيديوهات الهيرو واللوجو
// ============================================================================

export const UAE_PAGE_META = {
  title: "شركة سيو في الإمارات ودبي | خدمات تحسين محركات البحث SEO | Unique",
  description:
    "أقوى شركة سيو في الإمارات ودبي وأبوظبي لتصدر نتائج جوجل و ChatGPT. نقدم السيو التقني، السيو المحلي GMB، سيو المتاجر والعقارات والعيادات بعائد استثمار مضاعف.",
  canonicalUrl: "https://marketing-beta-gold-30.vercel.app/seo-company-uae",
  canonicalPath: "/seo-company-uae",
  siteName: "Unique Agency",
  locale: "ar_AE",
  keywords:
    "شركة سيو في الامارات, شركة سيو في دبي, شركة سيو في ابوظبي, خدمات تحسين محركات البحث في الامارات, افضل شركة سيو في الامارات, خبير سيو في دبي, سيو المتاجر الالكترونية في الامارات, السيو المحلي الامارات, SEO Agency Dubai, SEO Company UAE, Unique Digital Agency",
};

// ----------------------------------------------------------------------------
// واجهات البيانات (TypeScript Interfaces)
// ----------------------------------------------------------------------------

interface CompetitorGapItem {
  id: string;
  criterion: string;
  traditionalAgencies: string;
  freelancers: string;
  uniqueAgency: string;
  impactBadge: string;
}

interface CaseStudySlide {
  id: string;
  clientCategory: string;
  emirate: string;
  projectTitle: string;
  challenge: string;
  solution: string;
  timeframe: string;
  metrics: {
    trafficGrowth: string;
    keywordsTop3: string;
    conversionLift: string;
    roiMultiplier: string;
  };
  beforeStats: {
    monthlyVisits: string;
    monthlyLeads: string;
    pageSpeed: string;
    domainAuthority: string;
  };
  afterStats: {
    monthlyVisits: string;
    monthlyLeads: string;
    pageSpeed: string;
    domainAuthority: string;
  };
  tags: string[];
  accentColor: string;
}

interface ServicePillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  deliverables: string[];
  toolsUsed: string[];
  kpiTarget: string;
  iconPath: string;
}

interface EmirateLocalStrategy {
  id: string;
  nameAr: string;
  nameEn: string;
  commercialHubs: string[];
  topSectors: string[];
  arabicSearchShare: number;
  englishSearchShare: number;
  searchBehaviorInsight: string;
  keyStrategyPoints: string[];
  sampleKeywordsAr: string[];
  sampleKeywordsEn: string[];
  avgCpcSavedAed: string;
}

interface IndustryPlaybook {
  id: string;
  title: string;
  iconLabel: string;
  marketSizeNote: string;
  buyerJourney: string;
  coreChallenges: string[];
  uniqueSolutions: string[];
  highIntentKeywords: string[];
  expectedTimeframe: string;
  avgLeadValueAed: string;
}

interface RoadmapMonth {
  monthNumber: string;
  monthTitle: string;
  phaseBadge: string;
  summary: string;
  technicalTasks: string[];
  contentTasks: string[];
  authorityTasks: string[];
  expectedOutcome: string;
  completionDeliverable: string;
}

interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  category: "sme" | "enterprise";
  monthlyPriceAed: string;
  vatNote: string;
  popular?: boolean;
  targetAudience: string;
  keywordsCount: string;
  pagesOptimized: string;
  monthlyArticles: string;
  backlinksQuota: string;
  features: {
    text: string;
    included: boolean;
    highlight?: boolean;
  }[];
  ctaText: string;
}

interface TestimonialSlide {
  id: string;
  authorName: string;
  role: string;
  companySector: string;
  emirate: string;
  rating: number;
  reviewDate: string;
  quote: string;
  verifiedMetric: string;
}

interface FaqItem {
  id: string;
  category: "general" | "pricing" | "technical" | "local" | "ai";
  question: string;
  answer: string;
  keyTakeaway: string;
}

interface MonthlyReportKeywordRow {
  keyword: string;
  language: "AR" | "EN";
  intent: string;
  searchVolumeUae: number;
  previousRank: number;
  currentRank: number;
  estClicks: number;
  targetCity: string;
}

// ----------------------------------------------------------------------------
// البيانات والشارات الشاملة للسوق الإماراتي
// ----------------------------------------------------------------------------

const HERO_TRUST_BADGES = [
  { label: "معمارية سيو متوافقة مع جوجل الإمارات (.ae)", value: "100% White-Hat" },
  { label: "تحسين محركات البحث التوليدية (ChatGPT & Gemini)", value: "GEO + AEO Ready" },
  { label: "استهداف ثنائي اللغة (عربي / إنجليزي)", value: "Hreflang Architecture" },
  { label: "سرعة فائقة ومؤشرات Core Web Vitals", value: "99/100 Performance" },
];

const QUICK_SUMMARY_FACTS = [
  {
    title: "نطاق التغطية الجغرافية",
    value: "دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، أم القيوين",
    sub: "استراتيجيات Local SEO مخصصة لكل إمارة ومنطقة حرة",
  },
  {
    title: "منظومة الخدمات المتكاملة",
    value: "سيو تقني + سيو داخلي + سيو محلي (GBP) + باك لينك إماراتي + GEO/AEO",
    sub: "بناء سلطة رقمية كاملة وتحسين معدل التحويل (CRO)",
  },
  {
    title: "الإطار الزمني للنتائج الملموسة",
    value: "من 3 إلى 6 أشهر للقفزات التنافسية",
    sub: "مع تحسينات فورية في الفهرسة والسرعة خلال أول 30 يوماً",
  },
  {
    title: "نموذج التقارير والمتابعة",
    value: "لوحة تحكم مباشرة 24/7 عبر Looker Studio + GA4",
    sub: "ربط مباشر بالمكالمات، رسائل الواتساب، والحجوزات الفعلية",
  },
];

const MARQUEE_ITEMS_ROW_1 = [
  "شركة سيو في الإمارات",
  "تحسين محركات البحث في دبي",
  "خبير سيو في أبوظبي",
  "السيو المحلي وخرائط جوجل GMB",
  "تحسين الظهور في ChatGPT و Google AI Overviews",
  "سيو المتاجر الإلكترونية في الإمارات",
  "سيو الشركات العقارية في دبي",
  "سيو العيادات والمراكز الطبية",
  "بناء باك لينك إماراتي وخليجي موثوق",
  "تسريع المواقع وتحسين Core Web Vitals",
];

const MARQUEE_ITEMS_ROW_2 = [
  "Technical SEO Audit UAE",
  "Bilingual Arabic & English SEO",
  "Generative Engine Optimization (GEO)",
  "Answer Engine Optimization (AEO)",
  "Next.js & Headless CMS SEO",
  "Schema.org JSON-LD Architecture",
  "E-Commerce SEO Shopify & WooCommerce",
  "Google Business Profile Optimization Dubai",
  "Conversion Rate Optimization (CRO)",
  "Looker Studio & GA4 Revenue Tracking",
];

const CASE_STUDIES_SLIDES: CaseStudySlide[] = [
  {
    id: "case-dubai-realestate",
    clientCategory: "قطاع العقارات الفاخرة والاستثمار العقاري",
    emirate: "دبي - الخليج التجاري (Business Bay)",
    projectTitle: "مجموعة تطوير ووساطة عقارية للمشاريع على الخارطة (Off-Plan)",
    challenge:
      "اعتماد كامل على إعلانات جوجل المدفوعة بتكلفة نقرة تجاوزت 48 درهماً إماراتياً للكلمات العقارية التنافسية باللغتين العربية والإنجليزية، مع ضعف أرشفة صفحات المشاريع الجديدة وبطء شديد في تحميل صور المجمعات السكنية.",
    solution:
      "إعادة هيكلة شاملة لبنية الروابط حسب مناطق دبي (Downtown, Marina, Palm Jumeirah, Creek Harbour)، تطبيق Hreflang دقيق للعربية والإنجليزية، بناء صفحات مقارنة استثمارية تجيب عن عائد الإيجار (ROI)، وتحقيق سرعة 98% على الجوال.",
    timeframe: "6 أشهر",
    metrics: { trafficGrowth: "+340%", keywordsTop3: "84 كلمة", conversionLift: "+195%", roiMultiplier: "6.8x" },
    beforeStats: { monthlyVisits: "2,150 زيارة/شهر", monthlyLeads: "18 طلب استشارة", pageSpeed: "46 / 100", domainAuthority: "DR 19" },
    afterStats: { monthlyVisits: "9,460 زيارة/شهر", monthlyLeads: "112 طلب استشارة مؤهل", pageSpeed: "98 / 100", domainAuthority: "DR 48" },
    tags: ["سيو عقاري دبي", "Bilingual SEO", "Next.js Speed", "GEO AI Citations"],
    accentColor: "from-blue-600 to-cyan-500",
  },
  {
    id: "case-abudhabi-clinic",
    clientCategory: "قطاع الرعاية الصحية وعيادات الأسنان والتجميل",
    emirate: "أبوظبي - جزيرة المارية والكورنيش",
    projectTitle: "مجمع عيادات تخصصية لطب الأسنان والجلدية والليزر",
    challenge:
      "ظهور ضعيف في نتائج خرائط جوجل (Local Pack) عند البحث عن خدمات الأسنان والليزر في أبوظبي، وافتقار صفحات الخدمات لمعايير الموثوقية الطبية (E-E-A-T) وبيانات الأطباء المهيكلة.",
    solution:
      "تحسين شامل لملف Google Business Profile مع أتمتة جمع التقييمات الموثقة، إنشاء صفحات خدمات طبية مفصلة بإشراف الأطباء مع Physician & MedicalClinic Schema، وربط نظام الحجز المباشر والواتساب بأحداث Google Analytics 4.",
    timeframe: "5 أشهر",
    metrics: { trafficGrowth: "+275%", keywordsTop3: "62 كلمة", conversionLift: "+168%", roiMultiplier: "5.4x" },
    beforeStats: { monthlyVisits: "1,400 زيارة/شهر", monthlyLeads: "35 حجز موعد", pageSpeed: "58 / 100", domainAuthority: "DR 14" },
    afterStats: { monthlyVisits: "5,250 زيارة/شهر", monthlyLeads: "148 حجز موعد ومكالمة", pageSpeed: "96 / 100", domainAuthority: "DR 39" },
    tags: ["السيو المحلي أبوظبي", "Medical E-E-A-T", "خرائط جوجل GMB", "تحويل الحجوزات"],
    accentColor: "from-emerald-600 to-teal-500",
  },
  {
    id: "case-uae-ecommerce",
    clientCategory: "قطاع التجارة الإلكترونية والعطور الفاخرة",
    emirate: "الإمارات بالكامل (دبي، الشارقة، أبوظبي)",
    projectTitle: "متجر إلكتروني للعطور الشرقية والهدايا الفاخرة",
    challenge:
      "تضخم في الفهرسة (Index Bloat) بسبب روابط الفلاتر والتصنيفات المكررة (أكثر من 14,000 رابط غير مفيد)، وتراجع ترتيب صفحات الفئات الرئيسية أمام المنصات الكبرى في مواسم العروض.",
    solution:
      "ضبط Canonical Tags و Robots.txt لمنع هدر ميزانية الزحف (Crawl Budget)، كتابة محتوى بيعي غني لصفحات التصنيفات والمنتجات، تفعيل Product & Offer Schema بالدرهم الإماراتي (AED) مع حالة التوفر والتقييمات.",
    timeframe: "4 أشهر",
    metrics: { trafficGrowth: "+410%", keywordsTop3: "115 كلمة", conversionLift: "+230%", roiMultiplier: "8.2x" },
    beforeStats: { monthlyVisits: "3,800 زيارة/شهر", monthlyLeads: "95 طلب شراء عضوي", pageSpeed: "51 / 100", domainAuthority: "DR 24" },
    afterStats: { monthlyVisits: "19,380 زيارة/شهر", monthlyLeads: "410 طلب شراء عضوي", pageSpeed: "95 / 100", domainAuthority: "DR 51" },
    tags: ["سيو المتاجر الإمارات", "Product Schema AED", "Crawl Budget", "نمو المبيعات"],
    accentColor: "from-amber-500 to-blue-600",
  },
  {
    id: "case-dubai-b2b-legal",
    clientCategory: "قطاع تأسيس الشركات والاستشارات القانونية B2B",
    emirate: "دبي - مركز دبي المالي العالمي (DIFC) وأبراج بحيرات جميرا (JLT)",
    projectTitle: "مكتب استشارات قانونية وتأسيس شركات في المناطق الحرة والبر الرئيسي",
    challenge:
      "منافسة شرسة للغاية من شركات عالمية على كلمات تأسيس الأعمال والإقامة الذهبية والضرائب، مع وجود مقالات عامة في المدونة تجلب زيارات معلوماتية من خارج الإمارات دون تحويلات حقيقية.",
    solution:
      "إعادة بناء العنقود الموضوعي (Topical Authority) حول قوانين الشركات في الإمارات، الضريبة على الشركات، والمقارنة بين المناطق الحرة (Freezone vs Mainland)، مع إضافة حاسبات تفاعلية لتكلفة الرخصة التجارية.",
    timeframe: "6 أشهر",
    metrics: { trafficGrowth: "+290%", keywordsTop3: "49 كلمة", conversionLift: "+210%", roiMultiplier: "7.5x" },
    beforeStats: { monthlyVisits: "950 زيارة/شهر", monthlyLeads: "9 طلبات شركات", pageSpeed: "62 / 100", domainAuthority: "DR 21" },
    afterStats: { monthlyVisits: "3,705 زيارة/شهر", monthlyLeads: "64 طلب تأسيس واستشارة", pageSpeed: "99 / 100", domainAuthority: "DR 45" },
    tags: ["سيو B2B الإمارات", "Topical Authority", "AI Overviews", "عائد استثمار مرتفع"],
    accentColor: "from-indigo-600 to-blue-500",
  },
];

const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "pillar-technical",
    number: "01",
    title: "السيو التقني المتقدم وهندسة الأداء (Technical SEO & Core Web Vitals)",
    subtitle: "نبني أساساً برمجياً صلباً يجعل عناكب جوجل وأنظمة الذكاء الاصطناعي تزحف لموقعك وتفهرسه في ثوانٍ",
    badge: "الأساس البرمجي",
    description:
      "كثير من المواقع في الإمارات تنفق آلاف الدراهم على كتابة المحتوى بينما يعاني الموقع من مشاكل خفية في الزحف، بطء استجابة الخادم (TTFB)، أو أخطاء JavaScript Rendering. بصفتنا شركة تجمع بين البرمجة المتقدمة (Next.js / React / WordPress) وهندسة السيو، نعالج الجذور التقنية بالكامل.",
    deliverables: [
      "فحص شامل لميزانية الزحف (Crawl Budget) وإصلاح الصفحات اليتيمة (Orphan Pages) وأخطاء 404/301",
      "تحسين مؤشرات Core Web Vitals (LCP, INP, CLS) للوصول إلى 95+ على الهاتف المحمول",
      "بناء وتخصيص حزم البيانات المهيكلة المتقدمة (JSON-LD Schema Graph) للخدمات والأسئلة والمراجعات والعملة (AED)",
      "إعداد بنية المواقع ثنائية اللغة (العربية والإنجليزية) باستخدام وسوم Hreflang القياسية دون تضارب محتوى",
      "تأمين البنية التحتية عبر Cloudflare Edge وملفات Sitemap ديناميكية و Robots.txt محكم",
    ],
    toolsUsed: ["Google Search Console", "Screaming Frog", "Cloudflare Edge", "PageSpeed Insights", "Next.js Analytics"],
    kpiTarget: "أرشفة 100% للصفحات الربحية وسرعة تحميل أقل من 1.2 ثانية",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    id: "pillar-onpage",
    number: "02",
    title: "السيو الداخلي وهندسة صفحات القرار (On-Page SEO & Commercial Intent)",
    subtitle: "نحوّل صفحات الخدمات والمنتجات من نصوص تعريفية جامدة إلى صفحات بيعية تتصدر وتُقنع العميل الإماراتي",
    badge: "تحويل الزيارات لعملاء",
    description:
      "في سوق الإمارات عالي التنافسية، العميل يقارن بين 3 إلى 5 شركات قبل التواصل. نعيد هندسة صفحات الهبوط والخدمات لتطابق نية البحث التجارية (Commercial & Transactional Intent) مع توزيع دلالي للكلمات المفتاحية والكيانات (Entities).",
    deliverables: [
      "تحليل فجوة الكلمات المفتاحية (Keyword Gap) أمام المتصدرين في جوجل الإمارات (.ae) بالعربية والإنجليزية",
      "صياغة عناوين الميتا (Meta Titles & Descriptions) المحفزة للنقر لرفع معدل النقر إلى الظهور (CTR)",
      "هيكلة تراتبية العناوين (H1-H4) وتضمين الكيانات الدلالية (NLP Entities) ومرادفات السوق الخليجي",
      "هندسة شبكة الروابط الداخلية (Internal Linking Silos) لتمرير قوة النطاق نحو الصفحات الأعلى ربحية",
      "تحسين تجربة المستخدم ومسار التحويل (CRO) مع أزرار تواصل ذكية ونماذج سريعة الاستجابة",
    ],
    toolsUsed: ["Ahrefs", "Semrush", "Surfer SEO", "Google Keyword Planner UAE", "Microsoft Clarity"],
    kpiTarget: "مضاعفة معدل النقر (CTR) ورفع معدل التحويل من الزيارات العضوية بنسبة +120%",
    iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    id: "pillar-local",
    number: "03",
    title: "السيو المحلي والسيطرة على خرائط جوجل (Local SEO & Google Maps UAE)",
    subtitle: "اضمن ظهور شركتك أو عيادتك في المراكز الثلاثة الأولى (Local 3-Pack) في دبي وأبوظبي والشارقة",
    badge: "استحواذ جغرافي محلي",
    description:
      "أكثر من 68% من عمليات البحث الخدمية في الإمارات تتضمن موقعاً جغرافياً (مثل: في دبي، قريب مني، في أبوظبي، Business Bay). نبني حضوراً محلياً مهيماً يربط ملف نشاطك التجاري على جوجل بصفحات المدن والمناطق داخل موقعك.",
    deliverables: [
      "تهيئة وتحسين ملف Google Business Profile بالكامل (التصنيفات الدقيقة، الخدمات، المنتجات، والأسئلة الشائعة)",
      "توحيد بيانات النشاط التجاري (NAP Consistency: الاسم، العنوان، الهاتف +971) عبر الأدلة الإماراتية الموثوقة",
      "إنشاء صفحات استهداف جغرافي مخصصة لكل إمارة ومنطقة (Landing Pages for Dubai, Abu Dhabi, Sharjah)",
      "استراتيجية نشر دورية على ملف جوجل التجاري مع صور موثقة جغرافياً وإدارة احترافية للتقييمات",
      "تطبيق LocalBusiness Schema مع الإحداثيات الجغرافية (GeoCoordinates) وساعات العمل الرسمية",
    ],
    toolsUsed: ["Google Business Profile Manager", "BrightLocal", "Geo-Grid Rank Tracker", "Google Maps API"],
    kpiTarget: "الظهور في Top 3 على خرائط جوجل وزيادة المكالمات وطلبات الاتجاهات بنسبة +200%",
    iconPath: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    id: "pillar-geo-ai",
    number: "04",
    title: "تحسين محركات البحث التوليدية والإجابة (GEO & AEO for AI Search)",
    subtitle: "اجعل علامتك التجارية الإجابة الأولى في Google AI Overviews و ChatGPT و Perplexity و Gemini",
    badge: "مستقبل البحث 2026",
    description:
      "لم يعد قرار العميل في الإمارات يقتصر على الروابط العشرة الزرقاء؛ صناع القرار يسألون ChatGPT و Gemini و Google AI Overviews عن «أفضل شركة في دبي» أو «مقارنة الأسعار في الإمارات». نهيئ محتواك وبياناتك المهيكلة ليتم اقتباسها كمصدر موثوق.",
    deliverables: [
      "صياغة فقرات إجابة مباشرة (Direct Answer Blocks) في مطلع الصفحات لاستقطاب Featured Snippets و AI Overviews",
      "بناء مصفوفات مقارنة وجداول بيانات واضحة تفضلها نماذج اللغة الكبيرة (LLMs) عند توليد التوصيات",
      "تعزيز معايير الخبرة والتجربة والموثوقية (E-E-A-T) بربط المقالات بملفات مؤلفين وخبراء معتمدين",
      "تحسين الكيانات الرقمية للعلامة التجارية (Brand Entity Graph) عبر الويب لرفع ثقة خوارزميات الذكاء الاصطناعي",
      "مراقبة دورية لظهور اسم شركتك في إجابات ChatGPT Search و Perplexity و Gemini داخل السوق الإماراتي",
    ],
    toolsUsed: ["Google AI Overviews Tracker", "Schema Markup Validator", "Entity Knowledge Graph", "Perplexity & OpenAI Search Audit"],
    kpiTarget: "اقتباس مباشر لعلامتك التجارية في ملخصات الذكاء الاصطناعي وأجوبة البحث الصوتي",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: "pillar-offpage",
    number: "05",
    title: "السيو الخارجي وبناء السلطة الرقمية (Authority Link Building & PR)",
    subtitle: "روابط خلفية (Backlinks) آمنة وطبيعية من مواقع إماراتية وخليجية وعالمية عالية الموثوقية",
    badge: "سلطة النطاق DR",
    description:
      "نتجنب تماماً الروابط العشوائية أو المزارع الضارة (Spam Links) التي تعرض موقعك لعقوبات جوجل. نبني ملف روابط خلفية نظيفاً وقوياً يعكس مكانة شركتك في السوق الإماراتي ويرفع ثقة النطاق (Domain Rating) بصورة مستدامة.",
    deliverables: [
      "حملات نشر مقالات ضيف (Guest Posts) وعلاقات عامة رقمية (Digital PR) في مواقع ذات صلة بقطاعك",
      "بناء إشارات مرجعية محلية وإقليمية (UAE & GCC Citations) في منصات الأعمال والغرف التجارية والأدلة المتخصصة",
      "تدقيق شامل لملف الروابط الحالي وتنصل (Disavow) من أي روابط سامة أو هجمات سيو سلبي (Negative SEO)",
      "تحليل مصادر روابط المنافسين المتصدرين في دبي وأبوظبي واستقطاب فرص الربط عالية القيمة (Link Intersect)",
      "توزيع طبيعي ومدروس للنصوص الرابطة (Anchor Text Ratio) باللغتين العربية والإنجليزية لحماية الموقع",
    ],
    toolsUsed: ["Ahrefs Site Explorer", "Majestic SEO", "Google Disavow Tool", "Digital PR Outreach UAE"],
    kpiTarget: "رفع Domain Rating بمعدل مستدام وتفوق واضح في سلطة الصفحات التنافسية",
    iconPath: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
  {
    id: "pillar-content",
    number: "06",
    title: "صناعة المحتوى الاستراتيجي والعناقيد الموضوعية (Topical Authority Content)",
    subtitle: "محتوى تخصصي مكتوب بعقلية المستثمر والمستهلك في الإمارات يغطي رحلة الشراء من الوعي إلى القرار",
    badge: "السلطة الموضوعية",
    description:
      "كتابة مقالات عامة لمجرد زيادة عدد الكلمات لم تعد تجدي نفعاً. نبني خرائط محتوى مترابطة (Topic Clusters) تغطي أسئلة ما قبل الشراء، مقارنات الأسعار بالدرهم الإماراتي، والأدلة الشاملة التي تحول القارئ إلى عميل محتمل.",
    deliverables: [
      "إعداد خطة محتوى ربع سنوية مبنية على فجوات السوق الإماراتي والاتجاهات الموسمية في دبي وأبوظبي",
      "كتابة صفحات ركيزة (Pillar Pages) ومقالات داعمة مترابطة داخلياً لبناء Topical Authority كامل في مجالك",
      "صياغة محتوى ثنائي اللغة أصيل (غير مترجم حرفياً) يراعي المصطلحات المتداولة في مجتمع الأعمال الإماراتي",
      "تطوير أوصاف فئات ومنتجات فريدة للمتاجر الإلكترونية تقضي على مشكلة المحتوى المكرر وتزيد المبيعات",
      "تحديث المحتوى القديم (Content Refresh) للصفحات التي تحقق ظهوراً عالياً دون نقرات كافية في GSC",
    ],
    toolsUsed: ["Google Trends UAE", "AlsoAsked", "Clearscope / Surfer", "GSC Query Analyzer"],
    kpiTarget: "تغطية 100% من استفسارات قرار الشراء في قطاعك وتحويل المدونة لقناة مبيعات",
    iconPath: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
];

const EMIRATES_LOCAL_STRATEGIES: EmirateLocalStrategy[] = [
  {
    id: "dubai",
    nameAr: "إمارة دبي",
    nameEn: "Dubai",
    commercialHubs: [
      "الخليج التجاري (Business Bay)",
      "مركز دبي المالي العالمي (DIFC)",
      "دبي مارينا و JLT",
      "وسط مدينة دبي (Downtown)",
      "القوز ودبي هيلز",
      "المنطقة الحرة بمطار دبي (DAFZA)",
    ],
    topSectors: ["العقارات الفاخرة", "تأسيس الشركات", "عيادات التجميل والأسنان", "التجارة الإلكترونية", "الضيافة وتأجير اليخوت والسيارات"],
    arabicSearchShare: 45,
    englishSearchShare: 55,
    searchBehaviorInsight:
      "يمتاز سوق دبي بتنوع ديموغرافي هائل وقوة شرائية عالية؛ يبحث العملاء باللغتين العربية والإنجليزية مع تركيز شديد على السرعة، التقييمات الموثقة، والظهور في AI Overviews وخرائط جوجل حسب الحي السكني أو التجاري.",
    keyStrategyPoints: [
      "بناء صفحات هبوط محلية للأحياء الحيوية (مثل Business Bay و Marina و Downtown) وعدم الاكتفاء بكلمة «دبي» فقط",
      "تطبيق استراتيجية سيو مزدوجة اللغة (AR + EN) بنطاقات فرعية أو مجلدات `/ar/` و `/en/` مع Hreflang",
      "تحسين الظهور في خرائط جوجل للكلمات الفورية عالية التحويل مع ربط مباشر بالحجز والواتساب",
    ],
    sampleKeywordsAr: ["أفضل شركة سيو في دبي", "عيادة أسنان في جميرا دبي", "تأسيس شركة في المنطقة الحرة دبي", "شراء شقة في الخليج التجاري"],
    sampleKeywordsEn: ["Best SEO Agency in Dubai", "Luxury Real Estate Business Bay", "Business Setup Dubai Freezone", "Dental Clinic Dubai Marina"],
    avgCpcSavedAed: "28 - 65 د.إ للنقرة",
  },
  {
    id: "abudhabi",
    nameAr: "إمارة أبوظبي",
    nameEn: "Abu Dhabi",
    commercialHubs: [
      "جزيرة المارية (ADGM)",
      "جزيرة الريم",
      "جزيرة ياس والسعديات",
      "شارع الكورنيش والخالدية",
      "منطقة مصفح الصناعية",
      "مدينة خليفة والعين",
    ],
    topSectors: ["الاستشارات القانونية والمالية", "الرعاية الصحية والمستشفيات", "المقاولات والطاقة", "التعليم والجامعات", "العقارات السكنية"],
    arabicSearchShare: 58,
    englishSearchShare: 42,
    searchBehaviorInsight:
      "في أبوظبي والعين، ترتفع نسبة البحث باللغة العربية مقارنة بدبي، ويهتم أصحاب القرار والمؤسسات الحكومية والخاصة بمعايير الموثوقية الرسمية، التراخيص، وسابقة الأعمال الموثقة داخل العاصمة.",
    keyStrategyPoints: [
      "التركيز على المحتوى العربي الفصيح والرصين إلى جانب النسخة الإنجليزية للمستثمرين والشركات الدولية",
      "استهداف الكلمات المرتبطة بالمناطق الجغرافية الجديدة (جزيرة الريم، ياس، السعديات، مدينة خليفة)",
      "إبراز الشهادات، الاعتمادات الرسمية، ودراسات الحالة المؤسسية لرفع معدل التحويل لعملاء B2B و B2G",
    ],
    sampleKeywordsAr: ["شركة سيو في أبوظبي", "مكتب محاماة في أبوظبي", "شركة مقاولات في مصفح", "عيادة جلدية في جزيرة الريم"],
    sampleKeywordsEn: ["SEO Company Abu Dhabi", "Corporate Law Firm ADGM", "Real Estate Saadiyat Island", "Medical Center Khalifa City"],
    avgCpcSavedAed: "22 - 52 د.إ للنقرة",
  },
  {
    id: "sharjah",
    nameAr: "إمارة الشارقة",
    nameEn: "Sharjah",
    commercialHubs: [
      "المجاز والخان",
      "مويلح والمدينة الجامعية",
      "المنطقة الحرة بمطار الشارقة (SAIF Zone)",
      "المنطقة الصناعية الصجعة",
      "النهدة والتعاون",
    ],
    topSectors: ["الصناعة والتوريد B2B", "التعليم والمراكز التدريبية", "الخدمات المنزلية والصيانة", "المتاجر الإلكترونية", "العيادات العائلية"],
    arabicSearchShare: 68,
    englishSearchShare: 32,
    searchBehaviorInsight:
      "الشارقة مركز عائلي وصناعي وتعليمي ضخم؛ يهيمن البحث باللغة العربية على قطاع الخدمات العائلية، التعليم، والخدمات المنزلية، بينما يبرز البحث التقني والتجاري في المناطق الحرة والصناعية.",
    keyStrategyPoints: [
      "استهداف الكلمات الخدمية المحلية عالية النية في مناطق المجاز، مويلح، والنهدة لالتقاط العملاء السريعين",
      "بناء صفحات B2B قوية للشركات الصناعية والمصانع في الصجعة والمنطقة الحرة بمطار الشارقة",
      "تحسين صفحات الأسعار والباقات الواضحة التي تسرّع قرار الشراء لدى الأسر والشركات الصغيرة والمتوسطة",
    ],
    sampleKeywordsAr: ["شركة تسويق وسيو في الشارقة", "شركة صيانة وتكييف في الشارقة", "تأسيس شركة في مطار الشارقة", "مركز تدريب في مويلح"],
    sampleKeywordsEn: ["SEO Services Sharjah", "SAIF Zone Business Setup", "Industrial Suppliers Sharjah", "Packaging Factory UAE"],
    avgCpcSavedAed: "15 - 38 د.إ للنقرة",
  },
  {
    id: "northern-emirates",
    nameAr: "عجمان، رأس الخيمة، الفجيرة، وأم القيوين",
    nameEn: "Ajman, RAK, Fujairah & UAQ",
    commercialHubs: [
      "منطقة عجمان الحرة وكورنيش عجمان",
      "جزيرة المرجان ومنطقة رأس الخيمة الاقتصادية (RAKEZ)",
      "ميناء الفجيرة والمنطقة الحرة",
      "منطقة أم القيوين للتجارة الحرة",
    ],
    topSectors: ["السياحة والمنتجعات (جزيرة المرجان)", "تأسيس الشركات بتكلفة اقتصادية", "الخدمات اللوجستية والشحن البحري", "المقاولات والإنشاءات"],
    arabicSearchShare: 62,
    englishSearchShare: 38,
    searchBehaviorInsight:
      "تشهد الإمارات الشمالية (خاصة رأس الخيمة وعجمان) طفرة استثمارية وسياحية وعقارية كبرى مع انخفاض حدة المنافسة في السيو مقارنة بدبي، ما يمنح الشركات فرصة ذهبية للسيطرة السريعة على الصفحة الأولى.",
    keyStrategyPoints: [
      "استثمار فجوة المنافسة المنخفضة لتصدر نتائج جوجل خلال 60 إلى 90 يوماً في كلمات العقارات والسياحة والخدمات",
      "بناء صفحات مخصصة للمستثمرين الباحثين عن مزايا RAKEZ ومنطقة عجمان الحرة والفرص العقارية في جزيرة المرجان",
      "ربط الفروع المحلية بخرائط جوجل لاكتساب الزيارات المحلية ومكالمات الطوارئ والخدمات اليومية",
    ],
    sampleKeywordsAr: ["شركة سيو في عجمان", "استثمار عقاري في جزيرة المرجان رأس الخيمة", "شركة شحن في الفجيرة", "تأسيس شركة في راكز RAKEZ"],
    sampleKeywordsEn: ["Al Marjan Island Real Estate", "RAKEZ Business Setup Cost", "Logistics Company Fujairah", "SEO Agency Ajman"],
    avgCpcSavedAed: "12 - 30 د.إ للنقرة",
  },
];

const COMPETITOR_GAP_MATRIX: CompetitorGapItem[] = [
  {
    id: "gap-1",
    criterion: "الأساس البرمجي وسرعة الموقع (Core Web Vitals)",
    traditionalAgencies: "قوالب ووردبريس تقليدية ثقيلة وإضافات جاهزة تبطئ الموقع",
    freelancers: "تعديلات سطحية على العناوين دون المساس بالكود أو السيرفر",
    uniqueAgency: "هندسة برمجية متقدمة (Next.js / React / Custom WP) بسرعة 98+ وتهيئة Cloudflare Edge",
    impactBadge: "تفوق تقني حاسم",
  },
  {
    id: "gap-2",
    criterion: "الظهور في الذكاء الاصطناعي (GEO & AEO - ChatGPT / Gemini)",
    traditionalAgencies: "تركيز تقليدي على الكلمات المفتاحية القديمة فقط",
    freelancers: "غير متوفر؛ غياب تام لهندسة الكيانات والبيانات المهيكلة",
    uniqueAgency: "تهيئة كاملة لملخصات Google AI Overviews و ChatGPT و Perplexity عبر Entity & Schema Graph",
    impactBadge: "جاهزية 2026",
  },
  {
    id: "gap-3",
    criterion: "استراتيجية السيو ثنائي اللغة (العربية + الإنجليزية)",
    traditionalAgencies: "ترجمة آلية حرفية تضعف جودة الصفحة وتسبب تضارب Hreflang",
    freelancers: "العمل على لغة واحدة فقط وإهمال نصف السوق الإماراتي",
    uniqueAgency: "بحث كلمات مستقل وصياغة بيعية أصيلة لكل لغة مع ضبط Hreflang معماري سليم",
    impactBadge: "تغطية 100% للسوق",
  },
  {
    id: "gap-4",
    criterion: "ربط السيو بالمبيعات الفعلية وعائد الاستثمار (ROI)",
    traditionalAgencies: "تقارير PDF شهرية تركز على الظهور العام دون ربط بالمبيعات",
    freelancers: "تقارير ترتيب كلمات يدوية غير متصلة بـ Google Analytics 4",
    uniqueAgency: "لوحة Looker Studio حية 24/7 تتبع المكالمات، الواتساب، النماذج، والإيراد بالدرهم الإماراتي",
    impactBadge: "شفافية مطلقة",
  },
  {
    id: "gap-5",
    criterion: "الاستهداف الجغرافي الدقيق داخل الإمارات (Hyper-Local SEO)",
    traditionalAgencies: "صفحة واحدة عامة تستهدف الإمارات بدون تخصيص للمدن",
    freelancers: "حشو أسماء المدن نصياً داخل المقالات بطريقة تضر الموقع",
    uniqueAgency: "صفحات هبوط مخصصة لكل إمارة ومنطقة تجارية + تحسين شامل لخرائط جوجل (GBP)",
    impactBadge: "سيطرة محلية",
  },
  {
    id: "gap-6",
    criterion: "جودة الروابط الخلفية (Backlinks & Digital PR)",
    traditionalAgencies: "باقات روابط ثابتة بطيئة التنفيذ وبتكاليف مبالغ فيها",
    freelancers: "روابط سبام رخيصة (PBNs) تعرض الموقع لعقوبات جوجل",
    uniqueAgency: "روابط White-Hat طبيعية من مواقع إماراتية وخليجية وعالمية ذات سلطة حقيقية وارتباط موضوعي",
    impactBadge: "أمان وموثوقية",
  },
];

const INDUSTRY_PLAYBOOKS: IndustryPlaybook[] = [
  {
    id: "ind-realestate",
    title: "العقارات والمطورون والوساطة العقارية (Real Estate Dubai & Abu Dhabi)",
    iconLabel: "🏢 قطاع العقارات",
    marketSizeNote: "أعلى القطاعات تنافسية وعائداً في دبي وأبوظبي ورأس الخيمة",
    buyerJourney:
      "يبدأ المستثمر بالبحث عن مناطق الاستثمار أو مشاريع الخارطة (Off-Plan) ومقارنة العائد الإيجاري (ROI)، ثم يبحث عن المطور أو الوسيط المعتمد قبل طلب الكتيب (Brochure) أو حجز جولة عقارية.",
    coreChallenges: [
      "ارتفاع تكلفة النقرة الإعلانية في Google Ads إلى مستويات قياسية (35 - 80 د.إ للنقرة)",
      "منافسة المنصات العقارية الكبرى (Property Finder, Bayut) على الكلمات العامة",
      "تعدد اللغات والجنسيات المستهدفة (العربية، الإنجليزية، الروسية، الأوروبية)",
    ],
    uniqueSolutions: [
      "بناء صفحات مجتمعات ومشاريع عقارية متخصصة (Community & Project Guides) تتفوق في الكلمات الطويلة والفرعية",
      "إضافة جداول خطط الدفع (Payment Plans) وحاسبات العائد الاستثماري التي تجذب المستثمر الجاد",
      "تهيئة صفحات المشاريع للظهور في إجابات الذكاء الاصطناعي عند السؤال عن أفضل مناطق الاستثمار العقاري في دبي",
    ],
    highIntentKeywords: [
      "شقق للبيع في دبي بالتقسيط",
      "أفضل استثمار عقاري في دبي 2026",
      "مشاريع عقارية قيد الإنشاء في أبوظبي",
      "Off plan properties Dubai high ROI",
    ],
    expectedTimeframe: "3 - 6 أشهر",
    avgLeadValueAed: "15,000 - 120,000+ د.إ عمولة صفقة",
  },
  {
    id: "ind-healthcare",
    title: "العيادات والمراكز الطبية والتجميل (Healthcare, Dental & Aesthetics)",
    iconLabel: "🏥 القطاع الطبي والتجميلي",
    marketSizeNote: "طلب يومي متسارع في جميرا، الخالدية، المجاز، وكافة مدن الإمارات",
    buyerJourney:
      "يبحث المريض أو المراجع عن إجراء محدد (مثل زراعة الأسنان، ابتسامة هوليوود، ليزر، فيلر، أو طبيب مختص) ويقارن التقييمات، صور قبل وبعد، وخبرة الأطباء وموقع العيادة على الخريطة.",
    coreChallenges: [
      "تشدد خوارزميات جوجل في مواقع الصحة والطب (YMYL - Your Money Your Life)",
      "شدة المنافسة في خرائط جوجل (Local Pack) داخل المناطق الراقية",
      "ضعف الثقة في المحتوى الطبي العام غير المنسوب لأطباء مرخصين (DHA / DOH / MOHAP)",
    ],
    uniqueSolutions: [
      "بناء صفحات ملفات أطباء موثقة مع أرقام تراخيص هيئة الصحة بدبي (DHA) أو دائرة الصحة أبوظبي (DOH)",
      "تطبيق MedicalWebPage و Physician Schema لرفع موثوقية العيادة (E-E-A-T) في جوجل",
      "تحسين مكثف لملف Google Business Profile لزيادة المكالمات المباشرة وحجوزات الواتساب الفورية",
    ],
    highIntentKeywords: [
      "أفضل عيادة أسنان في دبي",
      "زراعة الأسنان في أبوظبي",
      "عيادة جلدية وليزر في الشارقة",
      "Best Hollywood Smile Clinic Dubai",
    ],
    expectedTimeframe: "2 - 5 أشهر",
    avgLeadValueAed: "1,500 - 25,000 د.إ للمراجع",
  },
  {
    id: "ind-ecommerce",
    title: "المتاجر الإلكترونية والعلامات التجارية (E-Commerce & Retail UAE)",
    iconLabel: "🛍️ التجارة الإلكترونية",
    marketSizeNote: "سوق تجارة إلكترونية يتجاوز 35 مليار درهم مع نمو الشراء عبر الجوال",
    buyerJourney:
      "يبحث المتسوق عن منتج محدد أو مقارنة أسعار أو كود خصم أو توصيل سريع في نفس اليوم داخل الإمارات، ويتخذ قرار الشراء خلال دقائق إذا كانت الصفحة سريعة وموثوقة.",
    coreChallenges: [
      "مشاكل الفهرسة التقنية الناتجة عن تصفية المنتجات (Faceted Navigation) وتكرار الصفحات",
      "ضعف المحتوى النصي في صفحات التصنيفات (Category Pages) والمنتجات",
      "بطء المتاجر المبنية على قوالب ثقيلة وضياع العملاء في خطوة الدفع (Checkout)",
    ],
    uniqueSolutions: [
      "هيكلة شجرية ذكية للتصنيفات والصفحات الفرعية تستهدف كلمات الشراء المباشر بالدرهم الإماراتي",
      "تفعيل Rich Snippets للمنتجات (السعر بالدرهم، التقييم بالنجوم، التوفر في المخزون، وشروط الشحن)",
      "ربط المتجر بمنظومة Google Merchant Center المجانية والمدفوعة لتعزيز الظهور البيعي",
    ],
    highIntentKeywords: [
      "شراء عطور فاخرة أونلاين الإمارات",
      "متجر هدايا توصيل نفس اليوم دبي",
      "أفضل متجر إلكترونيات في الإمارات",
      "Buy Niche Perfumes Online UAE",
    ],
    expectedTimeframe: "3 - 5 أشهر",
    avgLeadValueAed: "350 - 4,500 د.إ متوسط سلة الشراء",
  },
  {
    id: "ind-b2b-corporate",
    title: "تأسيس الشركات، القانون، والخدمات اللوجستية (B2B, Legal & Setup)",
    iconLabel: "⚖️ قطاع الأعمال B2B والقانون",
    marketSizeNote: "وجهة الأعمال الأولى في الشرق الأوسط لرواد الأعمال والشركات العالمية",
    buyerJourney:
      "يبحث رائد الأعمال أو المدير التنفيذي عن إجراءات قانونية، تكلفة رخصة تجارية، ضريبة الشركات في الإمارات، أو مورد معتمد، ويحتاج إلى شريك يثبت خبرته القانونية والتنفيذية.",
    coreChallenges: [
      "طول دورة اتخاذ القرار في قطاع B2B والحاجة إلى نقاط تماس متعددة لبناء الثقة",
      "ازدحام النتائج بمقالات سطحية لا تجيب بدقة عن القوانين والرسوم المحدثة في الإمارات",
      "الحاجة إلى استهداف صناع القرار داخل الإمارات والمستثمرين الدوليين في آن واحد",
    ],
    uniqueSolutions: [
      "إنشاء أدلة مرجعية معمقة ومقارنات دقيقة بين المناطق الحرة (DMCC, DIFC, ADGM, Meydan, RAKEZ) والبر الرئيسي",
      "تصميم أدوات تفاعلية داخل الصفحات (مثل حاسبة تكلفة تأسيس شركة في دبي) لمضاعفة معدل التحويل",
      "بناء روابط خلفية وعلاقات عامة رقمية في منصات الأعمال والاقتصاد لتعزيز سلطة العلامة التجارية",
    ],
    highIntentKeywords: [
      "تكلفة تأسيس شركة في دبي",
      "مكتب محاماة واستشارات قانونية في دبي",
      "مستشار ضريبي معتمد في الإمارات",
      "Business Setup Consultants Dubai",
    ],
    expectedTimeframe: "3 - 6 أشهر",
    avgLeadValueAed: "8,000 - 65,000 د.إ للعقد",
  },
];

const ROADMAP_MONTHS: RoadmapMonth[] = [
  {
    monthNumber: "الشهر 01",
    monthTitle: "التشخيص الهندسي، إصلاح الأساس التقني، وخريطة الفرص السريعة",
    phaseBadge: "مرحلة التأسيس والـ Quick Wins",
    summary:
      "لا نضيع الشهر الأول في اجتماعات نظرية؛ ننفذ فحصاً شاملاً للموقع والمنافسين في الإمارات، نصلح أعطال الزحف والفهرسة والسرعة، ونحسن الصفحات القريبة من الصفحة الأولى (المراكز 5 إلى 15) لتحقيق مكاسب سريعة.",
    technicalTasks: [
      "فحص تقني شامل (200+ نقطة فحص) عبر Screaming Frog و Google Search Console",
      "إصلاح أخطاء الأرشفة، الروابط المعطلة (404)، سلاسل إعادة التوجيه، وضبط ملفات Sitemap و Robots.txt",
      "تحسين مؤشرات Core Web Vitals وتسريع تحميل الصفحات على الجوال والكمبيوتر",
    ],
    contentTasks: [
      "إعداد مصفوفة الكلمات المفتاحية للسوق الإماراتي (عربي + إنجليزي) مقسمة حسب نية البحث",
      "تحسين صفحات الخدمات/الفئات الأساسية (Quick-Win Pages) التي تمتلك ظهوراً حالياً",
    ],
    authorityTasks: [
      "تدقيق ملف Google Business Profile وضبط التصنيفات والبيانات الجغرافية",
      "إعداد لوحة القياس المرجعية (Baseline Dashboard) في GA4 و Looker Studio",
    ],
    expectedOutcome: "فهرسة نظيفة 100%، ارتفاع ملحوظ في سرعة الموقع، وتحرك أولي للكلمات القريبة من الصفحة الأولى.",
    completionDeliverable: "تقرير التدقيق التقني + مصفوفة الكلمات المفتاحية + لوحة القياس الحية",
  },
  {
    monthNumber: "الشهر 02",
    monthTitle: "إعادة هندسة صفحات القرار وتفعيل البيانات المهيكلة (Schema & On-Page)",
    phaseBadge: "مرحلة التحسين الداخلي والمحلي",
    summary:
      "نركز على تحويل صفحات موقعك الرئيسية إلى صفحات قادرة على التفوق على المنافسين في دبي وأبوظبي، مع زرع أكواد Schema المتقدمة وإطلاق صفحات الاستهداف الجغرافي للمدن الإماراتية.",
    technicalTasks: [
      "تطبيق حزم JSON-LD Schema (Service, LocalBusiness, FAQPage, Product, Breadcrumb)",
      "ضبط بنية Hreflang للم المواقع ثنائية اللغة ومعالجة أي تضارب في الكلمات (Keyword Cannibalization)",
    ],
    contentTasks: [
      "كتابة وتطوير صفحات الهبوط التجارية للخدمات الأساسية بصياغة بيعية مقنعة (CRO-Focused)",
      "إنشاء صفحات المدن والمناطق المستهدفة (دبي، أبوظبي، الشارقة) بمحتوى مخصص غير مكرر",
    ],
    authorityTasks: [
      "توحيد بيانات النشاط التجاري (NAP Citations) في أهم الأدلة الإماراتية والخليجية",
      "بدء الدفعة الأولى من الروابط الخلفية الآمنة عالية الصلة بمجال موقعك",
    ],
    expectedOutcome: "ظهور المقتطفات الغنية (Rich Snippets) في جوجل، وتقدم واضح في نتائج البحث المحلية والخرائط.",
    completionDeliverable: "تقرير تحسين الصفحات الداخلي + توثيق Schema + تقرير citations المحلية",
  },
  {
    monthNumber: "الشهر 03",
    monthTitle: "بناء العناقيد الموضوعية والتهيئة لمحركات الذكاء الاصطناعي (GEO & AEO)",
    phaseBadge: "مرحلة السلطة الموضوعية والذكاء الاصطناعي",
    summary:
      "نبدأ بتوسيع السيطرة على أسئلة ما قبل الشراء والمقارنات التجارية في قطاعك، مع هيكلة المحتوى ليتم اقتباسه في Google AI Overviews و ChatGPT و Perplexity.",
    technicalTasks: [
      "هندسة شبكة الروابط الداخلية (Internal Linking Silos) لدعم صفحات الربح الرئيسية",
      "تحسين الصور والوسائط المتعددة والفيديوهات مع VideoObject Schema",
    ],
    contentTasks: [
      "نشر مقالات وأدلة مقارنة شاملة تجيب عن أسئلة الأسعار وأفضل الخيارات في الإمارات",
      "إضافة صناديق الإجابة المباشرة (Direct Answer Blocks) وجداول المقارنة المهيكلة للذكاء الاصطناعي",
    ],
    authorityTasks: [
      "تنفيذ حملة بناء روابط خارجية (Guest Posts & Editorial Links) في مواقع ذات موثوقية عالية",
      "تنشيط التفاعل والتحديثات الأسبوعية على ملف Google Business Profile",
    ],
    expectedOutcome: "دخول مجموعة واسعة من الكلمات التنافسية إلى الصفحة الأولى وبدء تدفق الاستفسارات العضوية المستقرة.",
    completionDeliverable: "تقرير نمو الشهر الثالث + خريطة العناقيد الموضوعية المنفذة",
  },
  {
    monthNumber: "الشهر 04",
    monthTitle: "توسيع الاستحواذ السوقي ومضاعفة معدل التحويل (CRO & Scaling)",
    phaseBadge: "مرحلة التوسع وتعظيم العائد",
    summary:
      "مع ارتفاع الزيارات العضوية، نحلل سلوك الزوار داخل الموقع باستخدام خرائط الحرارة وبيانات GA4 لتحويل أكبر نسبة ممكنة من الزوار إلى مكالمات وطلبات أسعار ومبيعات.",
    technicalTasks: [
      "تحليل سجل الزحف (Crawl Depth) والتأكد من وصول عناكب البحث لكل الصفحات الجديدة بكفاءة",
      "تحسين تجربة المستخدم على الجوال وأزرار التواصل السريع (Sticky WhatsApp & Call CTA)",
    ],
    contentTasks: [
      "استهداف الكلمات المفتاحية عالية القيمة (High-Ticket Keywords) ذات العائد التجاري الأعلى",
      "تحديث وتقوية الصفحات التي وصلت للمراكز 4–8 لدفعها نحو المراكز الثلاثة الأولى (Top 3)",
    ],
    authorityTasks: [
      "تعزيز سلطة النطاق بروابط PR ومقالات مرجعية ترفع ثقة جوجل في العلامة التجارية",
      "مراقبة تحركات المنافسين في السوق الإماراتي وسد أي فجوات محتوى جديدة",
    ],
    expectedOutcome: "قفزة ملموسة في عدد المكالمات والطلبات الشهرية وتراجع الاعتماد على الإعلانات المدفوعة.",
    completionDeliverable: "تقرير تحسين معدل التحويل (CRO) + تقرير أداء الكلمات المتصدرة",
  },
  {
    monthNumber: "الشهر 05 - 06",
    monthTitle: "الهيمنة على المراكز الأولى وترسيخ النمو المركب المستدام",
    phaseBadge: "مرحلة الصدارة والاستدامة",
    summary:
      "نحول موقعك إلى المرجع الأول في قطاعه داخل الإمارات، مع حماية المراكز الأولى المكتسبة أمام تحديثات خوارزميات جوجل وتوسيع الاستهداف نحو خطوط خدمات أو إمارات إضافية.",
    technicalTasks: [
      "مراجعة دورية شاملة للأداء الأمني والتقني والتوافق مع أحدث تحديثات Google Core Updates",
      "تحسين مستمر لسرعة التفاعل (INP) واستقرار العناصر البصرية (CLS)",
    ],
    contentTasks: [
      "إطلاق محتوى ريادي (Thought Leadership & Case Studies) يعزز معايير E-E-A-T",
      "التوسع في كلمات الذيل الطويل (Long-Tail Commercial Queries) عالية التحويل",
    ],
    authorityTasks: [
      "استمرار بناء الروابط النوعية والحفاظ على نمو طبيعي وآمن لملف Backlinks",
      "مراجعة ربع ونصف سنوية شاملة للعائد على الاستثمار (ROI) وخطة التوسع للمرحلة القادمة",
    ],
    expectedOutcome: "استقرار في المراكز الثلاثة الأولى لأهم كلمات الربح، ونمو عضوي متراكم يخفض تكلفة اكتساب العميل (CAC) لأدنى مستوى.",
    completionDeliverable: "التقرير الاستراتيجي النصف سنوي لعائد الاستثمار (SEO ROI Master Report)",
  },
];

const PRICING_TIERS: PricingTier[] = [
  {
    id: "tier-growth-sme",
    name: "باقة الانطلاق المحلي (Local & SME Starter)",
    tagline: "مثالية للشركات الناشئة والأنشطة الخدمية في إمارة محددة (مثل دبي أو أبوظبي)",
    category: "sme",
    monthlyPriceAed: "3,200",
    vatNote: "درهم إماراتي / شهرياً",
    popular: false,
    targetAudience: "العيادات الفردية، مكاتب الخدمات المحلية، والشركات الناشئة",
    keywordsCount: "حتى 30 كلمة مفتاحية تجارية",
    pagesOptimized: "تحسين حتى 12 صفحة أساسية",
    monthlyArticles: "4 مقالات/صفحات سيو تخصصية شهرياً",
    backlinksQuota: "6 روابط خلفية آمنة + 15 إشارة محلية إماراتية",
    features: [
      { text: "فحص وإصلاح تقني شامل (Technical SEO & Speed Optimization)", included: true },
      { text: "بحث كلمات مفتاحية مخصص للسوق الإماراتي (عربي أو إنجليزي)", included: true },
      { text: "تهيئة وتحسين ملف Google Business Profile وخرائط جوجل", included: true, highlight: true },
      { text: "تطبيق أكواد Schema الأساسية (LocalBusiness & FAQ)", included: true },
      { text: "إعداد تتبع التحويلات والمكالمات في Google Analytics 4", included: true },
      { text: "تقرير أداء شهري واضح مع خطة عمل الشهر التالي", included: true },
      { text: "تحسين ثنائي اللغة كامل (العربية + الإنجليزية معاً)", included: false },
      { text: "تهيئة متقدمة لمحركات الذكاء الاصطناعي (GEO & AEO)", included: false },
    ],
    ctaText: "ابدأ باقة الانطلاق المحلي",
  },
  {
    id: "tier-business-pro",
    name: "باقة النمو التنافسي (UAE Business Pro)",
    tagline: "الباقة الأكثر طلباً للشركات والمتاجر الطامحة للسيطرة على البحث في دبي والإمارات",
    category: "sme",
    monthlyPriceAed: "5,500",
    vatNote: "درهم إماراتي / شهرياً",
    popular: true,
    targetAudience: "شركات الخدمات، العيادات الطبية، المتاجر المتوسطة، وشركات B2B",
    keywordsCount: "حتى 70 كلمة مفتاحية (عربي + إنجليزي)",
    pagesOptimized: "تحسين حتى 25 صفحة خدمة/فئة",
    monthlyArticles: "8 مقالات وصفحات عناقيد موضوعية شهرياً",
    backlinksQuota: "12 رابطاً خلفياً عالي السلطة (White-Hat) + Citations",
    features: [
      { text: "هندسة سيو تقني متقدمة ورفع Core Web Vitals إلى +95", included: true, highlight: true },
      { text: "استراتيجية سيو ثنائي اللغة (العربية + الإنجليزية) مع ضبط Hreflang", included: true, highlight: true },
      { text: "تحسين الظهور في ChatGPT و Google AI Overviews (GEO & AEO)", included: true, highlight: true },
      { text: "سيطرة محلية شاملة على خرائط جوجل في دبي وأبوظبي والشارقة", included: true },
      { text: "هندسة البيانات المهيكلة الكاملة (Full JSON-LD Schema Graph)", included: true },
      { text: "تحسين معدل التحويل (CRO) ومسارات الواتساب ونماذج الطلب", included: true },
      { text: "لوحة تحكم حية 24/7 على Looker Studio + مدير حساب مخصص", included: true },
      { text: "اجتماع مراجعة استراتيجي شهري عبر Zoom / Google Meet", included: true },
    ],
    ctaText: "احجز باقة النمو التنافسي الآن",
  },
  {
    id: "tier-enterprise-dominance",
    name: "باقة الهيمنة المؤسسية (Enterprise & E-Commerce Scale)",
    tagline: "حلول سيو وبرمجة متكاملة للقطاعات شديدة المنافسة (العقارات، المتاجر الكبرى، والمؤسسات)",
    category: "enterprise",
    monthlyPriceAed: "9,500",
    vatNote: "درهم إماراتي / شهرياً",
    popular: false,
    targetAudience: "شركات التطوير العقاري، المتاجر الإلكترونية الكبرى، والمجموعات الطبية",
    keywordsCount: "150+ كلمة مفتاحية استراتيجية",
    pagesOptimized: "مفتوح (حسب هيكل الموقع والمتجر)",
    monthlyArticles: "16 صفحة/مقالاً استراتيجياً ودراسات سوق شهرياً",
    backlinksQuota: "20+ رابطاً تحريرياً و Digital PR من منصات موثوقة",
    features: [
      { text: "فريق سيو وتطوير برمجي مخصص (Next.js / WordPress / Shopify)", included: true, highlight: true },
      { text: "استحواذ كامل على الكلمات عالية القيمة في كافة إمارات الدولة السبع", included: true, highlight: true },
      { text: "استراتيجية GEO & Entity Authority متقدمة لتصدر إجابات الذكاء الاصطناعي", included: true, highlight: true },
      { text: "إدارة شاملة لميزانية الزحف (Crawl Budget) للمواقع الضخمة (+10,000 صفحة)", included: true },
      { text: "بناء صفحات هبوط برمجية ديناميكية للمناطق والمشاريع والمنتجات", included: true },
      { text: "حملات Digital PR وبناء روابط خلفية من مواقع ذات DR 50+", included: true },
      { text: "اختبارات A/B مستمرة لرفع معدل التحويل وقيمة العميل (LTV)", included: true },
      { text: "دعم فني واستشاري مباشر عبر قناة خاصة مع الإدارة التنفيذية", included: true },
    ],
    ctaText: "اطلب عرض الهيمنة المؤسسية",
  },
];

const TESTIMONIALS_SLIDES: TestimonialSlide[] = [
  {
    id: "test-1",
    authorName: "م. راشد المنصوري",
    role: "المدير التنفيذي للتطوير العقاري",
    companySector: "شركة وساطة واستثمار عقاري - دبي",
    emirate: "دبي",
    rating: 5,
    reviewDate: "أكتوبر 2026",
    quote:
      "تعاملنا سابقاً مع أكثر من وكالة في دبي وكانت التقارير مجرد أرقام زيارات بدون عملاء حقيقيين. مع فريق Unique تغير الوضع جذرياً؛ أعادوا هيكلة الموقع برمجياً باللغتين العربية والإنجليزية، وخلال 5 أشهر أصبحت صفحات مشاريعنا في الخليج التجاري ودبي مارينا تتصدر جوجل وتجلب لنا مستثمرين مباشرين يومياً بتكلفة أقل بـ 70% من الإعلانات.",
    verifiedMetric: "+340% نمو الزيارات العقارية المؤهلة",
  },
  {
    id: "test-2",
    authorName: "د. سارة الهاشمي",
    role: "المدير الطبي والمؤسس",
    companySector: "مركز تخصصي لطب الأسنان والتجميل",
    emirate: "أبوظبي",
    rating: 5,
    reviewDate: "سبتمبر 2026",
    quote:
      "أكثر ما أبهرني في شركة Unique هو فهمهم العميق للسيو الطبي ومعايير الثقة في أبوظبي. لم يكتفوا بكتابة مقالات، بل طوروا صفحات الأطباء والخدمات وربطوها بخرائط جوجل. اليوم عيادتنا في المراكز الثلاثة الأولى على Google Maps، وأغلب حجوزات الواتساب تأتي من البحث العضوي.",
    verifiedMetric: "+168% زيادة في حجوزات العيادة الشهرية",
  },
  {
    id: "test-3",
    authorName: "أ. طارق العتيبي",
    role: "مدير التجارة الإلكترونية والنمو",
    companySector: "علامة تجارية للعطور والهدايا الفاخرة",
    emirate: "دبي والشارقة",
    rating: 5,
    reviewDate: "أغسطس 2026",
    quote:
      "كان متجرنا يعاني من بطء شديد وآلاف الصفحات المكررة التي تمنع أرشفة المنتجات الجديدة. الفريق البرمجي والسيو في Unique عالج المشكلة من الجذور، وفعلوا ظهور الأسعار بالدرهم والتقييمات في نتائج جوجل. المبيعات العضوية تضاعفت أكثر من 4 مرات في أقل من نصف عام.",
    verifiedMetric: "8.2x عائد على الاستثمار من القناة العضوية",
  },
  {
    id: "test-4",
    authorName: "أ. خالد السويدي",
    role: "الشريك الإداري",
    companySector: "مكتب تأسيس شركات واستشارات قانونية",
    emirate: "دبي - DIFC",
    rating: 5,
    reviewDate: "نوفمبر 2026",
    quote:
      "المنافسة في قطاع تأسيس الشركات في دبي شرسة للغاية. استراتيجية العناقيد الموضوعية والـ GEO التي نفذتها Unique جعلت موقعنا يظهر ليس فقط في الصفحة الأولى لجوجل، بل حتى عندما يسأل المستثمرون ChatGPT عن تأسيس الشركات في المناطق الحرة. احترافية وشفافية عالية جداً في التقارير.",
    verifiedMetric: "49 كلمة تجارية في المراكز الثلاثة الأولى",
  },
];

const MONTHLY_REPORT_KEYWORDS: MonthlyReportKeywordRow[] = [
  {
    keyword: "شركة سيو في الإمارات",
    language: "AR",
    intent: "تجاري (Commercial)",
    searchVolumeUae: 1900,
    previousRank: 19,
    currentRank: 1,
    estClicks: 640,
    targetCity: "الإمارات بالكامل",
  },
  {
    keyword: "أفضل شركة سيو في دبي",
    language: "AR",
    intent: "قرار شراء (Transactional)",
    searchVolumeUae: 1600,
    previousRank: 24,
    currentRank: 2,
    estClicks: 495,
    targetCity: "دبي",
  },
  {
    keyword: "SEO Agency Dubai",
    language: "EN",
    intent: "Commercial High-Intent",
    searchVolumeUae: 5400,
    previousRank: 31,
    currentRank: 3,
    estClicks: 1120,
    targetCity: "Dubai",
  },
  {
    keyword: "خدمات تحسين محركات البحث أبوظبي",
    language: "AR",
    intent: "تجاري محلي (Local)",
    searchVolumeUae: 880,
    previousRank: 15,
    currentRank: 1,
    estClicks: 310,
    targetCity: "أبوظبي",
  },
  {
    keyword: "سيو المتاجر الإلكترونية في الإمارات",
    language: "AR",
    intent: "تجاري متخصص",
    searchVolumeUae: 720,
    previousRank: 28,
    currentRank: 2,
    estClicks: 245,
    targetCity: "دبي والشارقة",
  },
  {
    keyword: "Local SEO Services UAE",
    language: "EN",
    intent: "Transactional",
    searchVolumeUae: 1300,
    previousRank: 22,
    currentRank: 2,
    estClicks: 390,
    targetCity: "UAE",
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    category: "general",
    question: "ما الذي يجعل شركة Unique أفضل شركة سيو في الإمارات مقارنة بالوكالات التقليدية؟",
    answer:
      "الفرق الجوهري يكمن في دمج الهندسة البرمجية المتقدمة (Next.js, React, Core Web Vitals) مع استراتيجيات السيو التجاري وتهيئة الذكاء الاصطناعي (GEO/AEO). بينما تكتفي الوكالات التقليدية بكتابة مقالات عامة وإرسال تقارير PDF جامدة، نبدأ نحن من إصلاح البنية البرمجية لموقعك، بناء صفحات قرار ثنائية اللغة (عربي/إنجليزي) تطابق نية المشتري الإماراتي، وربط كل خطوة بلوحة Looker Studio حية تقيس المكالمات، محادثات الواتساب، والمبيعات الفعلية بالدرهم الإماراتي.",
    keyTakeaway: "دمج البرمجة السريعة + السيو ثنائي اللغة + GEO + تتبع العائد الفعلي.",
  },
  {
    id: "faq-2",
    category: "pricing",
    question: "كم تبلغ تكلفة خدمات السيو (SEO) في دبي والإمارات شهرياً؟",
    answer:
      "تتراوح تكلفة خدمات تحسين محركات البحث الاحترافية في السوق الإماراتي عادةً بين 3,200 درهم و 9,500+ درهم إماراتي شهرياً بحسب حجم الموقع، شدة المنافسة في القطاع (مثل العقارات أو التجميل أو التجارة الإلكترونية)، وعدد اللغات والمدن المستهدفة. في Unique نعتمد تسعيراً شفافاً ومعلناً بدون رسوم خفية، مع تحديد دقيق لمخرجات كل شهر من الصفحات المحسنة، المقالات، والروابط الخلفية قبل البدء.",
    keyTakeaway: "باقات واضحة تبدأ من 3,200 د.إ شهرياً بمخرجات محددة وعقود مرنة.",
  },
  {
    id: "faq-3",
    category: "general",
    question: "كم يستغرق ظهور نتائج السيو في جوجل الإمارات؟",
    answer:
      "تبدأ المؤشرات الأولية والتحسينات التقنية (مثل سرعة الموقع، حل مشاكل الفهرسة، وتحرك الكلمات القريبة من الصفحة الأولى Quick Wins) في الظهور خلال أول 30 إلى 45 يوماً. أما النتائج التنافسية القوية واستقرار الكلمات الربحية في المراكز الثلاثة الأولى وتضاعف الاستفسارات العضوية، فتتحقق عادةً ما بين الشهر الثالث والشهر السادس من العمل التراكمي المنظم.",
    keyTakeaway: "مكاسب تقنية وأولية في الشهر الأول، ونمو تنافسي قوي خلال 3 إلى 6 أشهر.",
  },
  {
    id: "faq-4",
    category: "local",
    question: "هل نحتاج إلى استهداف اللغة العربية أم الإنجليزية في السوق الإماراتي؟",
    answer:
      "السوق الإماراتي فريد من نوعه؛ الإحصائيات الفعلية تُظهر أن الاكتفاء بلغة واحدة يفقدك ما بين 40% إلى 55% من حجم السوق. المواطنون والمقيمون العرب يبحثون بكثافة باللغة العربية في قطاعات العيادات، القانون، العقارات، والتجارة الإلكترونية، بينما يبحث المقيمون الأجانب والشركات الدولية بالإنجليزية. لذلك نطبق في Unique بنية Hreflang معمارية تضمن تصدر موقعك باللغتين دون أي تضارب أو تكرار.",
    keyTakeaway: "الاستهداف ثنائي اللغة (AR + EN) يضاعف حصتك السوقية في الإمارات.",
  },
  {
    id: "faq-5",
    category: "ai",
    question: "ما هو تحسين محركات البحث التوليدية (GEO) وكيف يجعل شركتي تظهر في ChatGPT و Gemini؟",
    answer:
      "تحسين محركات البحث التوليدية (Generative Engine Optimization - GEO) هو الجيل الجديد من السيو الذي يهيئ موقعك ليكون المصدر المقتبس عندما يسأل المستخدمون في الإمارات أدوات الذكاء الاصطناعي (مثل ChatGPT Search و Google AI Overviews و Perplexity و Gemini) عن «أفضل شركة في دبي» أو «تكلفة خدمة في أبوظبي». نحقق ذلك عبر بناء Entity Graph قوي لعلامتك التجارية، صياغة إجابات مباشرة مهيكلة، وتطبيق JSON-LD Schema المتقدم.",
    keyTakeaway: "نضمن حضور علامتك التجارية في إجابات الذكاء الاصطناعي إلى جانب بحث جوجل التقليدي.",
  },
  {
    id: "faq-6",
    category: "local",
    question: "كيف تساعدون نشاطي التجاري على تصدر خرائط جوجل (Google Maps) في دبي وأبوظبي؟",
    answer:
      "ننفذ استراتيجية Local SEO متكاملة تشمل: التدقيق والتحسين الكامل لملف Google Business Profile، اختيار التصنيفات الأساسية والفرعية بدقة، توحيد بيانات NAP (الاسم، العنوان، رقم الهاتف الإماراتي) في الأدلة المحلية، نشر تحديثات وعروض منتظمة، تحسين الصور جغرافياً، وبناء صفحات هبوط محلية داخل الموقع مرتبطة بالخريطة لرفع ترتيبك ضمن المراكز الثلاثة الأولى (Local 3-Pack).",
    keyTakeaway: "تهيئة شاملة لملف جوجل التجاري وربطه بصفحات المدن والأحياء لزيادة المكالمات.",
  },
  {
    id: "faq-7",
    category: "technical",
    question: "موقعنا مبني على ووردبريس أو شوبيفاي أو Next.js، هل تتعاملون مع جميع المنصات؟",
    answer:
      "نعم بكل تأكيد. فريقنا يضم مهندسي برمجيات ومطوري Full-Stack إلى جانب خبراء السيو. نتعامل باحترافية كاملة مع المواقع البرمجية الحديثة (Next.js, React, Sanity CMS, Nuxt)، ومنصات إدارة المحتوى والمتاجر (WordPress, WooCommerce, Shopify, Magento, Salla, Zid)، ونقوم بتنفيذ التعديلات التقنية والبرمجية مباشرة دون إلقاء العبء على فريقك.",
    keyTakeaway: "فريقنا ينفذ التعديلات البرمجية والتقنية مباشرة على أي منصة يعمل عليها موقعك.",
  },
  {
    id: "faq-8",
    category: "general",
    question: "هل تضمنون الوصول إلى المركز الأول (#1) في جوجل خلال أيام؟",
    answer:
      "نحن نلتزم بالشفافية المهنية المطلقة وفق إرشادات جوجل الرسمية: أي جهة تعدك بضمان المركز الأول خلال أيام أو أسابيع إما تستخدم أساليب تحايل (Black-Hat) تعرض موقعك للحظر، أو تستهدف كلمات وهمية لا يبحث عنها أحد. ما نضمنه في Unique هو تنفيذ منهجية هندسية موثقة، استهداف كلمات ذات نية شرائية حقيقية، وتحقيق نمو مستمر وقابل للقياس في الترتيب والزيارات العضوية والتحويلات.",
    keyTakeaway: "عمل أبيض 100% (White-Hat) يحمي أصولك الرقمية ويحقق صدارة مستدامة.",
  },
  {
    id: "faq-9",
    category: "pricing",
    question: "أيهما أفضل لشركتي في الإمارات: السيو (SEO) أم إعلانات جوجل المدفوعة (Google Ads)؟",
    answer:
      "الإعلانات المدفوعة تمنحك ظهوراً فورياً لكنه يتوقف في اللحظة التي تتوقف فيها عن الدفع، كما أن تكلفة النقرة (CPC) في الإمارات مرتفعة جداً في قطاعات مثل العقارات والطب والخدمات. أما السيو فيبني أصلاً رقمياً مملوكاً لشركتك يجلب زيارات وعملاء على مدار الساعة بتكلفة اكتساب تتناقص شهراً بعد شهر. الاستراتيجية الأذكى هي البدء بالسيو لبناء النمو المستدام مع استخدام الإعلانات بشكل انتقائي.",
    keyTakeaway: "السيو يخفض تكلفة اكتساب العميل (CAC) بنسبة تصل إلى 70% على المدى المتوسط والطويل.",
  },
  {
    id: "faq-10",
    category: "technical",
    question: "كيف أتابع نتائج الحملة وما الذي يتضمنه التقرير الشهري؟",
    answer:
      "لا تنتظر لنهاية الشهر لتعرف ماذا حدث؛ نوفر لك لوحة تحكم تفاعلية مباشرة (Live Looker Studio Dashboard) متصلة بـ Google Search Console و Google Analytics 4 على مدار الساعة. وفي نهاية كل شهر تتسلم تقريراً تنفيذياً يوضح: المهام التقنية والمحتوى والروابط التي نُفذت، تطور ترتيب الكلمات المستهدفة، نمو الزيارات العضوية، عدد المكالمات وطلبات الواتساب والنماذج الناتجة عن السيو، وخطة عمل الشهر القادم.",
    keyTakeaway: "لوحة بيانات حية 24/7 + تقرير شهري يربط السيو بالمكالمات والمبيعات.",
  },
];

// ----------------------------------------------------------------------------
// 3. البيانات المهيكلة لمحركات البحث والذكاء الاصطناعي (JSON-LD Schema Graph)
// ----------------------------------------------------------------------------

const UAE_SEO_SCHEMA_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://marketing-beta-gold-30.vercel.app/#organization",
      name: "Unique Digital Agency - شركة سيو في الإمارات ودبي",
      alternateName: "وكالة يونيك لتحسين محركات البحث وتطوير المواقع في الإمارات",
      url: "https://marketing-beta-gold-30.vercel.app",
      description:
        "شركة سيو متخصصة في تحسين محركات البحث SEO في الإمارات (دبي، أبوظبي، الشارقة)، نساعد الشركات والمتاجر والعيادات على تصدر نتائج جوجل ونتائج الذكاء الاصطناعي ChatGPT و Gemini وزيادة المبيعات العضوية.",
      priceRange: "3200 AED - 9500+ AED",
      currenciesAccepted: "AED, USD",
      areaServed: [
        { "@type": "City", name: "دبي - Dubai" },
        { "@type": "City", name: "أبوظبي - Abu Dhabi" },
        { "@type": "City", name: "الشارقة - Sharjah" },
        { "@type": "City", name: "عجمان - Ajman" },
        { "@type": "City", name: "رأس الخيمة - Ras Al Khaimah" },
        { "@type": "City", name: "الفجيرة - Fujairah" },
        { "@type": "City", name: "أم القيوين - Umm Al Quwain" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      knowsAbout: [
        "تحسين محركات البحث في الإمارات",
        "شركة سيو في دبي",
        "Technical SEO Next.js & WordPress",
        "Local SEO & Google Business Profile UAE",
        "Generative Engine Optimization (GEO)",
        "Answer Engine Optimization (AEO)",
        "E-Commerce SEO UAE",
      ],
    },
    {
      "@type": "Service",
      "@id": "https://marketing-beta-gold-30.vercel.app/#seo-service-uae",
      name: "خدمات تحسين محركات البحث (SEO) في الإمارات ودبي",
      provider: {
        "@id": "https://marketing-beta-gold-30.vercel.app/#organization",
      },
      serviceType: "Search Engine Optimization (SEO) & AI Search Optimization (GEO)",
      areaServed: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "باقات السيو الشهرية في الإمارات بالدرهم الإماراتي",
        itemListElement: PRICING_TIERS.map((tier) => ({
          "@type": "Offer",
          name: tier.name,
          description: tier.tagline,
          priceCurrency: "AED",
          price: tier.monthlyPriceAed.replace(/,/g, ""),
        })),
      },
    },
    {
      "@type": "VideoObject",
      name: "استراتيجية تصدر نتائج جوجل في الإمارات مع شركة Unique للسيو",
      description:
        "عرض مرئي لمنهجية شركة Unique في تحسين محركات البحث السيو التقني والمحلي وتهيئة الذكاء الاصطناعي للشركات والمتاجر في دبي والإمارات.",
      contentUrl: "https://marketing-beta-gold-30.vercel.app/vedio1.mp4",
      embedUrl: "https://marketing-beta-gold-30.vercel.app/vedio1.mp4",
      uploadDate: "2026-11-01T08:00:00+04:00",
      thumbnailUrl: "https://marketing-beta-gold-30.vercel.app/og-seo-uae.jpg",
    },
    {
      "@type": "VideoObject",
      name: "الهوية الرقمية لشركة Unique - وكالة السيو والبرمجة المتقدمة",
      description:
        "فيديو الهوية الاحترافية لشركة Unique Digital Agency المتخصصة في حلول السيو والبرمجة المتقدمة في الإمارات والخليج.",
      contentUrl: "https://marketing-beta-gold-30.vercel.app/video2.mp4",
      embedUrl: "https://marketing-beta-gold-30.vercel.app/video2.mp4",
      uploadDate: "2026-11-01T08:00:00+04:00",
      thumbnailUrl: "https://marketing-beta-gold-30.vercel.app/og-brand-unique.jpg",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

// ----------------------------------------------------------------------------
// 4. المكون الرئيسي لصفحة شركة سيو في الإمارات (Main Page Component)
// ----------------------------------------------------------------------------

export default function SEOCompanyUAEClient() {
  // حالات التحكم بالفيديوهات (Hero Video: vedio1.mp4 & Brand Logo Video: video2.mp4)
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const logoVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isHeroVideoMuted, setIsHeroVideoMuted] = useState<boolean>(true);
  const [isHeroVideoPlaying, setIsHeroVideoPlaying] = useState<boolean>(true);
  const [isLogoVideoMuted, setIsLogoVideoMuted] = useState<boolean>(true);
  const [isLogoVideoPlaying, setIsLogoVideoPlaying] = useState<boolean>(true);

  // حالات السلايدر الأول: سلايدر دراسات الحالة المتحرك (Case Studies Carousel Slider)
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [isCaseSliderPaused, setIsCaseSliderPaused] = useState<boolean>(false);

  // حالات السلايدر الثاني: سلايدر آراء العملاء (Testimonials Slider)
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState<number>(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState<boolean>(false);

  // حالات السلايدر الثالث: سلايدر مقارنة الموقع قبل وبعد السيو التقني (Before/After Interactive Slider)
  const [beforeAfterSliderPos, setBeforeAfterSliderPos] = useState<number>(52);

  // حالات السلايدر الرابع: سلايدر خارطة الطريق الشهرية (6-Month Roadmap Slider)
  const [activeRoadmapIndex, setActiveRoadmapIndex] = useState<number>(0);

  // حالات التبويبات التفاعلية (Emirates Local SEO, Industry Playbooks, Report Preview, FAQs)
  const [selectedEmirateId, setSelectedEmirateId] = useState<string>("dubai");
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>("ind-realestate");
  const [activeReportTab, setActiveReportTab] = useState<"keywords" | "traffic" | "technical">("keywords");
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>("all");
  const [openFaqId, setOpenFaqId] = useState<string>("faq-1");

  // حالات حاسبة العائد على الاستثمار في السيو بالدرهم الإماراتي (UAE SEO ROI Calculator)
  const [monthlySearchVolume, setMonthlySearchVolume] = useState<number>(12000);
  const [targetRankPosition, setTargetRankPosition] = useState<number>(1);
  const [conversionRatePct, setConversionRatePct] = useState<number>(3.5);
  const [avgDealValueAed, setAvgDealValueAed] = useState<number>(2500);

  // حالات نموذج طلب الفحص المجاني (Free UAE SEO Audit Lead Form)
  const [auditFormState, setAuditFormState] = useState({
    fullName: "",
    companyName: "",
    websiteUrl: "",
    phoneUae: "",
    targetEmirate: "دبي",
    primaryGoal: "زيادة المكالمات والمبيعات العضوية",
  });
  const [auditSubmitted, setAuditSubmitted] = useState<boolean>(false);

  // رقم الواتساب المباشر الخاص بك
  const whatsappNumber = "201270506511";
  const getWhatsappLink = (text = "مرحباً، أود الاستفسار عن خدمات السيو وتصدر نتائج جوجل في الإمارات.") =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  // تشغيل تلقائي لسلايدر دراسات الحالة
  useEffect(() => {
    if (isCaseSliderPaused) return;
    const timer = setInterval(() => {
      setActiveCaseIndex((prev) => (prev + 1) % CASE_STUDIES_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isCaseSliderPaused]);

  // تشغيل تلقائي لسلايدر آراء العملاء
  useEffect(() => {
    if (isTestimonialPaused) return;
    const timer = setInterval(() => {
      setActiveTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isTestimonialPaused]);

  // دوال التحكم بفيديو الهيرو (vedio1.mp4)
  const toggleHeroVideoPlay = () => {
    if (!heroVideoRef.current) return;
    if (heroVideoRef.current.paused) {
      heroVideoRef.current.play();
      setIsHeroVideoPlaying(true);
    } else {
      heroVideoRef.current.pause();
      setIsHeroVideoPlaying(false);
    }
  };

  const toggleHeroVideoMute = () => {
    if (!heroVideoRef.current) return;
    heroVideoRef.current.muted = !heroVideoRef.current.muted;
    setIsHeroVideoMuted(heroVideoRef.current.muted);
  };

  // دوال التحكم بفيديو اللوجو الاحترافي (video2.mp4)
  const toggleLogoVideoPlay = () => {
    if (!logoVideoRef.current) return;
    if (logoVideoRef.current.paused) {
      logoVideoRef.current.play();
      setIsLogoVideoPlaying(true);
    } else {
      logoVideoRef.current.pause();
      setIsLogoVideoPlaying(false);
    }
  };

  const toggleLogoVideoMute = () => {
    if (!logoVideoRef.current) return;
    logoVideoRef.current.muted = !logoVideoRef.current.muted;
    setIsLogoVideoMuted(logoVideoRef.current.muted);
  };

  // حسابات حاسبة العائد على الاستثمار في السيو الإماراتي (ROI Calculator Logic)
  const roiCalculations = useMemo(() => {
    // نسب النقر التقديرية حسب المركز في جوجل الإمارات (CTR by Rank)
    const ctrByRank: Record<number, number> = {
      1: 0.285,
      2: 0.158,
      3: 0.105,
      4: 0.072,
      5: 0.054,
    };
    const ctr = ctrByRank[targetRankPosition] || 0.15;
    const estimatedMonthlyVisits = Math.round(monthlySearchVolume * ctr);
    const estimatedMonthlyLeads = Math.max(
      1,
      Math.round(estimatedMonthlyVisits * (conversionRatePct / 100))
    );
    const closedDealsCount = Math.max(1, Math.round(estimatedMonthlyLeads * 0.25));
    const projectedMonthlyRevenueAed = closedDealsCount * avgDealValueAed;
    // قيمة النقرات لو تم شراؤها عبر Google Ads بمتوسط 18 درهماً للنقرة في الإمارات
    const equivalentGoogleAdsCostAed = estimatedMonthlyVisits * 18;

    return {
      ctrPercent: (ctr * 100).toFixed(1),
      estimatedMonthlyVisits,
      estimatedMonthlyLeads,
      closedDealsCount,
      projectedMonthlyRevenueAed,
      equivalentGoogleAdsCostAed,
    };
  }, [monthlySearchVolume, targetRankPosition, conversionRatePct, avgDealValueAed]);

  // استخراج بيانات الإمارة والقطاع النشطين حالياً
  const activeEmirateData =
    EMIRATES_LOCAL_STRATEGIES.find((item) => item.id === selectedEmirateId) ||
    EMIRATES_LOCAL_STRATEGIES[0];

  const activeIndustryData =
    INDUSTRY_PLAYBOOKS.find((item) => item.id === selectedIndustryId) ||
    INDUSTRY_PLAYBOOKS[0];

  const activeCaseStudy = CASE_STUDIES_SLIDES[activeCaseIndex];
  const activeRoadmapMonth = ROADMAP_MONTHS[activeRoadmapIndex];

  const filteredFaqs = useMemo(() => {
    if (selectedFaqCategory === "all") return FAQ_ITEMS;
    return FAQ_ITEMS.filter((f) => f.category === selectedFaqCategory);
  }, [selectedFaqCategory]);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuditSubmitted(true);
    const msg = `مرحباً، أود طلب فحص سيو مجاني لموقعي:\nالاسم: ${auditFormState.fullName}\nالهاتف: ${auditFormState.phoneUae}\nالرابط: ${auditFormState.websiteUrl}\nالإمارة: ${auditFormState.targetEmirate}`;
    window.open(getWhatsappLink(msg), "_blank");
  };

  return (
    <main className="h-full w-full overflow-y-auto bg-[#000000] text-white selection:bg-blue-600 selection:text-white relative">
      {/* حقن البيانات المهيكلة JSON-LD لمحركات البحث والذكاء الاصطناعي */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(UAE_SEO_SCHEMA_GRAPH) }}
      />

      {/* إضاءات خلفية محيطية فاخرة متوافقة مع الهوية السوداء والزرقاء */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-48 -right-48 h-[520px] w-[520px] rounded-full bg-blue-600/15 blur-[150px]" />
        <div className="absolute top-1/3 -left-48 h-[460px] w-[460px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[150px]" />
      </div>

      {/* =====================================================================
          شريط التنقل السريع الداخلي (Sticky Section Jump Bar)
      ===================================================================== */}
      <nav
        aria-label="التنقل السريع داخل صفحة خدمات السيو في الإمارات"
        className="sticky top-0 z-40 border-b border-white/10 bg-black/85 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6]" />
            <span className="text-sm font-black tracking-wide text-white">
              UNIQUE <span className="text-blue-500">UAE SEO</span>
            </span>
          </div>

          <div className="hidden items-center gap-6 text-xs font-bold text-zinc-300 lg:flex">
            <a href="#competitor-gap" className="transition hover:text-blue-400">
              لماذا نتفوق؟
            </a>
            <a href="#brand-showcase" className="transition hover:text-blue-400">
              هويتنا الرقمية
            </a>
            <a href="#services-pillars" className="transition hover:text-blue-400">
              منظومة السيو 360°
            </a>
            <a href="#case-studies-slider" className="transition hover:text-blue-400">
              دراسات الحالة
            </a>
            <a href="#emirates-local-seo" className="transition hover:text-blue-400">
              سيو الإمارات السبع
            </a>
            <a href="#roi-calculator" className="transition hover:text-blue-400">
              حاسبة العائد (AED)
            </a>
            <a href="#pricing-packages" className="transition hover:text-blue-400">
              الباقات والأسعار
            </a>
            <a href="#faq-section" className="transition hover:text-blue-400">
              الأسئلة الشائعة
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={getWhatsappLink("مرحباً، أود التواصل معكم بخصوص خدمات السيو في الإمارات.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.45)] transition hover:bg-emerald-500 flex items-center gap-1.5"
            >
              <span>💬 واتساب الشركة</span>
            </a>
          </div>
        </div>
      </nav>

      {/* =====================================================================
          1. قسم الهيرو الرئيسي + الفيديو الأول (Hero Section with vedio1.mp4)
      ===================================================================== */}
      <section className="relative z-10 pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs sm:text-sm font-bold text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-ping" />
              <span>الشريك الهندسي الأول لتصدر نتائج جوجل والذكاء الاصطناعي في الإمارات 🇦🇪</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 font-medium">
                دبي • أبوظبي • الشارقة • عجمان • رأس الخيمة
              </span>
              <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-bold text-emerald-300">
                تحديث خوارزميات 2026
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.2] tracking-tight text-white">
                أقوى <span className="bg-gradient-to-l from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">شركة سيو في الإمارات</span> تحوّل بحث جوجل و ChatGPT إلى{" "}
                <span className="underline decoration-blue-600 decoration-4 underline-offset-8">
                  عملاء ومبيعات حقيقية
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-300 font-normal">
                الظهور في جوجل الإمارات لم يعد مجرد كتابة مقالات عشوائية. في وكالة{" "}
                <strong className="text-white font-bold">Unique Digital Agency</strong> ندمج{" "}
                <span className="text-blue-400 font-semibold">الهندسة البرمجية الفائقة (Next.js & Core Web Vitals)</span>{" "}
                مع استراتيجيات السيو ثنائي اللغة (العربية والإنجليزية)، السيو المحلي لخرائط جوجل في دبي وأبوظبي، وتهيئة محركات البحث التوليدية{" "}
                <strong className="text-cyan-300 font-semibold">(GEO & AEO)</strong> لنسلمك صدارة مستدامة تضاعف عائد استثمارك بالدرهم الإماراتي.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {HERO_TRUST_BADGES.map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3 backdrop-blur-sm transition hover:border-blue-500/40"
                  >
                    <span className="text-xs sm:text-sm font-medium text-zinc-200">
                      {badge.label}
                    </span>
                    <span className="rounded-md bg-blue-600/20 border border-blue-500/30 px-2.5 py-1 text-[11px] font-black text-blue-300">
                      {badge.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={getWhatsappLink("مرحباً، أود الحصول على خطة وفحص SEO مجاني لموقعي.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-l from-emerald-600 to-teal-600 px-7 py-4 text-base font-black text-white shadow-[0_0_35px_rgba(16,185,129,0.5)] transition duration-300 hover:scale-[1.02]"
                >
                  <span>💬 تواصل معنا فوراً عبر واتساب</span>
                  <svg
                    className="h-5 w-5 transition-transform group-hover:-translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </a>

                <a
                  href="#case-studies-slider"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-bold text-white backdrop-blur-md transition hover:border-blue-400 hover:bg-white/10"
                >
                  <span>شاهد نتائجنا الموثقة في الإمارات</span>
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-blue-400">+340%</div>
                  <div className="text-xs text-zinc-400 mt-1">متوسط نمو الزيارات المؤهلة خلال 6 أشهر</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">98/100</div>
                  <div className="text-xs text-zinc-400 mt-1">مؤشر سرعة Core Web Vitals على الجوال</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-cyan-400">7 إمارات</div>
                  <div className="text-xs text-zinc-400 mt-1">تغطية محلية شاملة باللغتين العربية والإنجليزية</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-blue-500/30 bg-gradient-to-b from-zinc-900/90 to-black p-3 shadow-[0_0_60px_rgba(37,99,235,0.25)]">
                <div className="mb-3 flex items-center justify-between px-3 py-1.5">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="mr-2 text-xs font-bold text-zinc-300">
                      Unique SEO Engine — UAE Live Showcase
                    </span>
                  </div>
                  <span className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[10px] font-bold text-blue-300 border border-blue-500/30">
                    HD VIDEO
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 aspect-[16/10]">
                  <video
                    ref={heroVideoRef}
                    src="/vedio1.mp4"
                    autoPlay
                    loop
                    muted={isHeroVideoMuted}
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  >
                    متصفحك لا يدعم تشغيل الفيديو. يرجى التأكد من وجود الملف vedio1.mp4 في مجلد public.
                  </video>

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold text-blue-400">
                          رحلة الصدارة في جوجل الإمارات
                        </p>
                        <p className="text-sm font-black text-white">
                          من الفحص التقني إلى السيطرة على المراكز الأولى
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={toggleHeroVideoPlay}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition hover:border-blue-400 hover:bg-blue-600"
                          aria-label={isHeroVideoPlaying ? "إيقاف الفيديو مؤقتاً" : "تشغيل الفيديو"}
                        >
                          {isHeroVideoPlaying ? (
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                          ) : (
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={toggleHeroVideoMute}
                          className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-3 py-2 text-xs font-bold text-white backdrop-blur-md transition hover:border-blue-400 hover:bg-blue-600"
                        >
                          {isHeroVideoMuted ? "🔇 تشغيل الصوت" : "🔊 كتم الصوت"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-400">معدل النقر العضوي (CTR)</span>
                      <span className="text-xs font-bold text-emerald-400">+184% ↑</span>
                    </div>
                    <div className="mt-1 text-lg font-black text-white">
                      نتائج الصفحة الأولى (.ae)
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-400">ظهور الذكاء الاصطناعي</span>
                      <span className="text-xs font-bold text-cyan-400">GEO Active</span>
                    </div>
                    <div className="mt-1 text-lg font-black text-white">
                      ChatGPT & AI Overviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-3xl border border-blue-500/25 bg-gradient-to-r from-blue-950/30 via-zinc-900/80 to-blue-950/30 p-6 sm:p-8 backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  ملخص تنفيذي سريع (مُهيأ لـ Google AI Overviews وصناع القرار)
                </span>
                <h2 className="mt-1 text-xl sm:text-2xl font-black text-white">
                  لمحة سريعة عن خدمات تحسين محركات البحث (SEO) في الإمارات مع Unique
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-300">
                ✓ بيانات موثقة ومحدثة لعام 2026
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {QUICK_SUMMARY_FACTS.map((fact, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-black/50 p-5 transition hover:border-blue-500/40"
                >
                  <div className="text-xs font-bold text-blue-400">{fact.title}</div>
                  <div className="mt-2 text-base font-black text-white leading-snug">
                    {fact.value}
                  </div>
                  <div className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    {fact.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. شريط السلايدر المتحرك اللانهائي المزدوج (Dual Animated Marquee Slider)
      ===================================================================== */}
      <section
        aria-label="شريط تخصصات السيو والتقنيات في الإمارات"
        className="relative z-10 border-b border-white/10 bg-zinc-950/90 py-5 overflow-hidden"
      >
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-2 px-4">
          <div className="flex shrink-0 items-center gap-4 animate-pulse">
            {MARQUEE_ITEMS_ROW_1.map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-black px-5 py-2.5 text-xs sm:text-sm font-bold text-zinc-200 shadow-sm whitespace-nowrap hover:border-blue-500/50 hover:text-blue-400 transition"
              >
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2 flex items-center gap-4 overflow-x-auto no-scrollbar py-2 px-4">
          <div className="flex shrink-0 items-center gap-4">
            {MARQUEE_ITEMS_ROW_2.map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/20 bg-blue-950/20 px-5 py-2 text-xs font-semibold text-cyan-300 whitespace-nowrap hover:bg-blue-900/30 transition"
              >
                <span className="text-blue-400">★</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. قسم الهوية الرقمية والفيديو الثاني (Brand Authority Showcase - video2.mp4)
      ===================================================================== */}
      <section
        id="brand-showcase"
        className="relative z-10 py-20 lg:py-28 border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className=" -inset-2 rounded-[32px] bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-indigo-600/30 blur-2xl" />

                <div className="relative overflow-hidden rounded-[28px] border border-blue-500/40 bg-zinc-950 p-4 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs font-black text-blue-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-500 animate-ping" />
                      UNIQUE DIGITAL AGENCY — BRAND IDENTITY
                    </span>
                    <button
                      type="button"
                      onClick={toggleLogoVideoPlay}
                      className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold text-zinc-200 hover:border-blue-400 hover:text-white transition"
                    >
                      {isLogoVideoPlaying ? "إيقاف العرض" : "تشغيل العرض"}
                    </button>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black aspect-square sm:aspect-[4/3] flex items-center justify-center">
                    <video
                      ref={logoVideoRef}
                      src="/video2.mp4"
                      autoPlay
                      loop
                      muted={isLogoVideoMuted}
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    >
                      متصفحك لا يدعم تشغيل الفيديو. يرجى وضع فيديو اللوجو باسم video2.mp4 في مجلد public.
                    </video>

                    <button
                      type="button"
                      onClick={toggleLogoVideoMute}
                      className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/75 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md transition hover:border-blue-400"
                    >
                      {isLogoVideoMuted ? "🔇 تفعيل الصوت" : "🔊 صامت"}
                    </button>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-2.5">
                      <div className="text-xs font-black text-white">Next.js + SEO</div>
                      <div className="text-[10px] text-zinc-400">بنية برمجية حديثة</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-2.5">
                      <div className="text-xs font-black text-blue-400">UAE & GCC</div>
                      <div className="text-[10px] text-zinc-400">خبرة سوق الخليج</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-2.5">
                      <div className="text-xs font-black text-emerald-400">ROI Driven</div>
                      <div className="text-[10px] text-zinc-400">نمو مبيعات موثق</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400">
                <span>الهوية الهندسية لشركة Unique Digital Agency</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black leading-tight text-white">
                لماذا تفشل حملات السيو التقليدية في الإمارات؟ وكيف نصنع الفارق في{" "}
                <span className="text-blue-500">Unique</span>؟
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
                بعد تحليل عشرات المواقع المتصدرة والمتعثرة في دبي وأبوظبي والشارقة، وجدنا أن الفجوة الكبرى لدى معظم شركات التسويق هي فصل{" "}
                <strong className="text-white">«السيو»</strong> عن{" "}
                <strong className="text-white">«هندسة البرمجيات وتجربة التحويل»</strong>. كتابة المقالات وحدها لا تستطيع رفع موقع يعاني من بطء الاستجابة، تضخم الفهرسة، أو غياب بنية الكيانات الدلالية.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 hover:border-blue-500/40 transition">
                  <div className="text-lg font-black text-blue-400">
                    1. فهم عميق لنية المشتري الإماراتي
                  </div>
                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    العميل في الإمارات لا يبحث عن معلومات عامة؛ هو يبحث عن مقارنة واضحة، تسعير شفاف بالدرهم، سرعة تواصل عبر واتساب، ومؤشرات ثقة حقيقية قبل اتخاذ القرار.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 hover:border-blue-500/40 transition">
                  <div className="text-lg font-black text-cyan-400">
                    2. تفوق برمجي وتقني لا يقبل المنافسة
                  </div>
                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    سواء كان موقعك مبنياً على Next.js أو WordPress أو Shopify، يتدخل مهندسونا مباشرة لضبط الكود، تسريع التحميل، وبناء Schema Graph متكامل يفهمه جوجل فوراً.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 hover:border-blue-500/40 transition">
                  <div className="text-lg font-black text-emerald-400">
                    3. السيو للذكاء الاصطناعي (GEO & AEO)
                  </div>
                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    نؤهل صفحاتك لتكون المرجع الأول الذي تقتبسه نماذج ChatGPT و Gemini و Perplexity و Google AI Overviews عند ترشيح أفضل الشركات في الإمارات.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 hover:border-blue-500/40 transition">
                  <div className="text-lg font-black text-amber-400">
                    4. قياس الإيراد الفعلي لا الزيارات الوهمية
                  </div>
                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    نربط كل صفحة وكلمة مفتاحية بأحداث التحويل في GA4 لتعرف بدقة أي صفحة جلبت لك المكالمة الهاتفية أو رسالة الواتساب أو طلب الشراء.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. مصفوفة تحليل المنافسين والفجوات السوقية (Competitor Gap Matrix)
      ===================================================================== */}
      <section
        id="competitor-gap"
        className="relative z-10 py-20 lg:py-28 border-b border-white/10 bg-zinc-950/60"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400">
              مقارنة منهجية شاملة في السوق الإماراتي
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-black text-white">
              الفرق بين وكالات السيو التقليدية، المستقلين، ومنهجية{" "}
              <span className="text-blue-500">Unique الهندسية</span>
            </h2>
            <p className="mt-4 text-base text-zinc-400">
              قارن بنفسك كيف نعالج نقاط الضعف الشائعة لدى منافسي السيو في دبي وأبوظبي لنمنحك ميزة تنافسية يصعب تقليدها.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-3xl border border-white/10 bg-black shadow-2xl">
            <table className="w-full min-w-[850px] text-right border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-zinc-900/90 text-xs sm:text-sm font-black">
                  <th className="p-5 text-zinc-300">معيار المقارنة الجوهري</th>
                  <th className="p-5 text-zinc-400">الوكالات التقليدية</th>
                  <th className="p-5 text-zinc-400">المستقلون (Freelancers)</th>
                  <th className="p-5 bg-blue-950/40 text-blue-300 border-x border-blue-500/30">
                    وكالة Unique Digital Agency 🚀
                  </th>
                  <th className="p-5 text-center text-emerald-400">الأثر التجاري</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm">
                {COMPETITOR_GAP_MATRIX.map((row) => (
                  <tr key={row.id} className="transition hover:bg-white/[0.02]">
                    <td className="p-5 font-black text-white">{row.criterion}</td>
                    <td className="p-5 text-zinc-400 leading-relaxed">
                      <span className="text-red-400 ml-1">✕</span>
                      {row.traditionalAgencies}
                    </td>
                    <td className="p-5 text-zinc-400 leading-relaxed">
                      <span className="text-amber-400 ml-1">⚠</span>
                      {row.freelancers}
                    </td>
                    <td className="p-5 bg-blue-950/20 font-bold text-white border-x border-blue-500/20 leading-relaxed">
                      <span className="text-emerald-400 ml-1.5">✓</span>
                      {row.uniqueAgency}
                    </td>
                    <td className="p-5 text-center">
                      <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300 whitespace-nowrap">
                        {row.impactBadge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. منظومة خدمات السيو الشاملة 360° (6 Core SEO Pillars)
      ===================================================================== */}
      <section
        id="services-pillars"
        className="relative z-10 py-20 lg:py-28 border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400">
              منظومة تحسين محركات البحث المتكاملة 360°
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-black text-white">
              كل ما يحتاجه موقعك للهيمنة على{" "}
              <span className="text-blue-500">جوجل الإمارات</span> ونتائج الذكاء الاصطناعي
            </h2>
            <p className="mt-4 text-base text-zinc-400">
              لا نبيع مهام منفصلة؛ ننفذ 6 ركائز هندسية وتسويقية مترابطة تضمن صعود موقعك من الفحص التقني وحتى تحويل الزائر إلى عميل دائم.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {SERVICE_PILLARS.map((pillar) => (
              <article
                key={pillar.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/90 to-black p-6 sm:p-8 transition duration-300 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 border border-blue-500/30 text-lg font-black text-blue-400">
                        {pillar.number}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-cyan-300">
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={pillar.iconPath} />
                      </svg>
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl sm:text-2xl font-black text-white group-hover:text-blue-400 transition">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm font-bold text-blue-300/90">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                    {pillar.description}
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                    <div className="text-xs font-black uppercase tracking-wider text-zinc-400">
                      ماذا ننفذ عملياً داخل هذه الركيزة؟
                    </div>
                    {pillar.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-[10px] font-bold text-blue-400">
                          ✓
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4 space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-bold text-zinc-400 ml-1">الأدوات:</span>
                    {pillar.toolsUsed.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-md border border-white/10 bg-zinc-900 px-2.5 py-0.5 text-[11px] font-medium text-zinc-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-2.5 text-xs font-bold text-emerald-300">
                    🎯 الهدف القياسي: {pillar.kpiTarget}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. سلايدر المقارنة التفاعلي: الموقع قبل وبعد السيو الهندسي (Before/After Slider)
      ===================================================================== */}
      <section className="relative z-10 py-20 lg:py-28 border-b border-white/10 bg-zinc-950/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-300">
              سلايدر المحاكاة التقنية التفاعلي
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-black text-white">
              اسحب المؤشر لترى تحول موقعك{" "}
              <span className="text-red-400">قبل</span> و{" "}
              <span className="text-emerald-400">بعد</span> تدخل فريق Unique
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400">
              حرّك السلايدر التفاعلي لمقارنة حالة المواقع التقليدية قبل المعالجة مقابل المعمارية البرمجية والسيو التي نبنيها لعملائنا في الإمارات.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <div className="flex items-center justify-between text-xs font-bold mb-2">
              <span className="text-emerald-400">بعد هندسة Unique SEO (100%)</span>
              <span className="rounded-full bg-blue-600/20 border border-blue-500/30 px-3 py-0.5 text-blue-300">
                نسبة التحول المعروضة: {beforeAfterSliderPos}%
              </span>
              <span className="text-red-400">قبل التحسين (0%)</span>
            </div>
            <input
              type="range"
              min={15}
              max={85}
              value={beforeAfterSliderPos}
              onChange={(e) => setBeforeAfterSliderPos(Number(e.target.value))}
              aria-label="سلايدر مقارنة أداء الموقع قبل وبعد السيو"
              className="w-full accent-blue-500 cursor-pointer h-2.5 rounded-lg bg-zinc-800"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
            <div
              style={{ opacity: Math.max(0.45, (100 - beforeAfterSliderPos) / 65) }}
              className="lg:col-span-5 rounded-3xl border border-red-500/30 bg-gradient-to-b from-red-950/25 to-black p-6 sm:p-8 transition-all duration-200"
            >
              <div className="flex items-center justify-between border-b border-red-500/20 pb-4">
                <div>
                  <span className="text-xs font-bold text-red-400">الحالة الشائعة قبل تدخلنا</span>
                  <h3 className="text-xl font-black text-white mt-1">
                    موقع تقليدي يفقد العملاء لصالح المنافسين
                  </h3>
                </div>
                <span className="rounded-xl bg-red-500/20 px-3 py-1.5 text-sm font-black text-red-300">
                  48 / 100
                </span>
              </div>

              <ul className="mt-6 space-y-4 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-black">✕</span>
                  <span>
                    <strong className="text-white">بطء تحميل على الجوال (LCP &gt; 4.8s):</strong>{" "}
                    يؤدي لمغادرة 60% من زوار دبي وأبوظبي قبل فتح الصفحة.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-black">✕</span>
                  <span>
                    <strong className="text-white">تضخم فهرسة وصفحات يتيمة:</strong>{" "}
                    مئات الروابط المكررة تستهلك ميزانية الزحف وتمنع أرشفة صفحات الخدمات.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-black">✕</span>
                  <span>
                    <strong className="text-white">غياب Hreflang والبيانات المهيكلة:</strong>{" "}
                    تضارب بين النسخة العربية والإنجليزية وعدم ظهور الأسعار أو النجوم في البحث.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-black">✕</span>
                  <span>
                    <strong className="text-white">محتوى عام غير مقنع:</strong>{" "}
                    نصوص إنشائية لا تجيب عن أسئلة المشتري ولا تظهر في ChatGPT أو AI Overviews.
                  </span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2 flex flex-col items-center justify-center py-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-black shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                VS
              </div>
              <p className="mt-3 text-center text-xs font-bold text-blue-400">
                هندسة Unique الكاملة خلال 90 - 180 يوماً
              </p>
            </div>

            <div
              style={{ opacity: Math.max(0.55, beforeAfterSliderPos / 55) }}
              className="lg:col-span-5 rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-emerald-950/25 via-blue-950/20 to-black p-6 sm:p-8 shadow-[0_0_45px_rgba(16,185,129,0.12)] transition-all duration-200"
            >
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
                <div>
                  <span className="text-xs font-bold text-emerald-400">بعد تطبيق منظومة Unique SEO</span>
                  <h3 className="text-xl font-black text-white mt-1">
                    منصة بيعية سريعة تتصدر جوجل والذكاء الاصطناعي
                  </h3>
                </div>
                <span className="rounded-xl bg-emerald-500/20 border border-emerald-500/40 px-3 py-1.5 text-sm font-black text-emerald-300">
                  99 / 100
                </span>
              </div>

              <ul className="mt-6 space-y-4 text-sm text-zinc-200">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-black">✓</span>
                  <span>
                    <strong className="text-white">سرعة فائقة (LCP &lt; 1.1s):</strong>{" "}
                    أداء أخضر بالكامل في Core Web Vitals يرفع الترتيب ومعدل التحويل فوراً.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-black">✓</span>
                  <span>
                    <strong className="text-white">هيكلة Silo وأرشفة ذكية:</strong>{" "}
                    توجيه 100% من قوة النطاق والروابط نحو صفحات الربح والخدمات الأساسية.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-black">✓</span>
                  <span>
                    <strong className="text-white">تكامل JSON-LD Schema + Hreflang:</strong>{" "}
                    تصدر متزامن بالعربية والإنجليزية مع مقتطفات غنية (تقييمات، أسعار AED، أسئلة).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-black">✓</span>
                  <span>
                    <strong className="text-white">اقتباس مباشر في ChatGPT و Gemini:</strong>{" "}
                    بنية محتوى كيانية (Entity-First) تجعل شركتك الخيار الموصى به في الإمارات.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. سلايدر دراسات الحالة المتحرك (Animated Case Studies Carousel Slider)
      ===================================================================== */}
      <section
        id="case-studies-slider"
        className="relative z-10 py-20 lg:py-28 border-b border-white/10"
        onMouseEnter={() => setIsCaseSliderPaused(true)}
        onMouseLeave={() => setIsCaseSliderPaused(false)}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400">
                سلايدر قصص النجاح ودراسات الحالة الموثقة
              </span>
              <h2 className="mt-4 text-2xl sm:text-4xl font-black text-white">
                نتائج حقيقية وأرقام قابلة للقياس في{" "}
                <span className="text-blue-500">سوق الإمارات</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl">
                تصفح عبر السلايدر المتحرك نماذج من نتائج مشاريعنا في قطاعات العقارات، الطب، التجارة الإلكترونية، وخدمات B2B في دبي وأبوظبي والشارقة.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start lg:self-auto">
              <button
                type="button"
                onClick={() =>
                  setActiveCaseIndex(
                    (prev) => (prev - 1 + CASE_STUDIES_SLIDES.length) % CASE_STUDIES_SLIDES.length
                  )
                }
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-zinc-900 text-white transition hover:border-blue-500 hover:bg-blue-600"
                aria-label="دراسة الحالة السابقة"
              >
                →
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveCaseIndex((prev) => (prev + 1) % CASE_STUDIES_SLIDES.length)
                }
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-zinc-900 text-white transition hover:border-blue-500 hover:bg-blue-600"
                aria-label="دراسة الحالة التالية"
              >
                ←
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {CASE_STUDIES_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveCaseIndex(index)}
                className={`rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                  activeCaseIndex === index
                    ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                    : "border border-white/10 bg-zinc-900/80 text-zinc-400 hover:text-white"
                }`}
              >
                0{index + 1}. {slide.clientCategory}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-blue-500/30 bg-gradient-to-b from-zinc-900/90 to-black p-6 sm:p-10 shadow-[0_0_50px_rgba(37,99,235,0.12)]">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-600/20 border border-blue-500/30 px-3.5 py-1 text-xs font-bold text-blue-300">
                    📍 {activeCaseStudy.emirate}
                  </span>
                  <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 text-xs font-bold text-emerald-300">
                    ⏱ المدة: {activeCaseStudy.timeframe}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                  {activeCaseStudy.projectTitle}
                </h3>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
                    <div className="text-xs font-black text-red-400 uppercase">
                      التحدي قبل العمل مع Unique:
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {activeCaseStudy.challenge}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-500/25 bg-blue-950/15 p-5">
                    <div className="text-xs font-black text-blue-400 uppercase">
                      الحل الهندسي والاستراتيجي المنفذ:
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-200">
                      {activeCaseStudy.solution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {activeCaseStudy.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-cyan-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-zinc-950 p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                      {activeCaseStudy.metrics.trafficGrowth}
                    </div>
                    <div className="mt-1 text-xs text-zinc-400">نمو الزيارات العضوية</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-zinc-950 p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-blue-400">
                      {activeCaseStudy.metrics.keywordsTop3}
                    </div>
                    <div className="mt-1 text-xs text-zinc-400">كلمة في Top 3 بجوجل</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-zinc-950 p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-cyan-400">
                      {activeCaseStudy.metrics.conversionLift}
                    </div>
                    <div className="mt-1 text-xs text-zinc-400">نمو الاستفسارات والـ Leads</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-zinc-950 p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-black text-amber-400">
                      {activeCaseStudy.metrics.roiMultiplier}
                    </div>
                    <div className="mt-1 text-xs text-zinc-400">مضاعف العائد (ROI)</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/80 p-5">
                  <div className="text-xs font-black text-zinc-300 mb-4 border-b border-white/10 pb-2">
                    مقارنة الأداء الموثق (قبل الحملة vs بعد الحملة)
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">الزيارات الشهرية:</span>
                      <div>
                        <span className="text-zinc-500 line-through ml-2">
                          {activeCaseStudy.beforeStats.monthlyVisits}
                        </span>
                        <span className="font-black text-emerald-400">
                          {activeCaseStudy.afterStats.monthlyVisits}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">العملاء المحتملون / الطلبات:</span>
                      <div>
                        <span className="text-zinc-500 line-through ml-2">
                          {activeCaseStudy.beforeStats.monthlyLeads}
                        </span>
                        <span className="font-black text-blue-400">
                          {activeCaseStudy.afterStats.monthlyLeads}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">سرعة PageSpeed:</span>
                      <div>
                        <span className="text-zinc-500 line-through ml-2">
                          {activeCaseStudy.beforeStats.pageSpeed}
                        </span>
                        <span className="font-black text-cyan-400">
                          {activeCaseStudy.afterStats.pageSpeed}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">قوة النطاق (Authority):</span>
                      <div>
                        <span className="text-zinc-500 line-through ml-2">
                          {activeCaseStudy.beforeStats.domainAuthority}
                        </span>
                        <span className="font-black text-amber-400">
                          {activeCaseStudy.afterStats.domainAuthority}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. مستكشف السيو المحلي لإمارات الدولة السبع (UAE 7 Emirates Local SEO)
      ===================================================================== */}
      <section
        id="emirates-local-seo"
        className="relative z-10 py-20 lg:py-28 border-b border-white/10 bg-zinc-950/60"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400">
              استهداف جغرافي فائق الدقة (Hyper-Local SEO UAE)
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-black text-white">
              استراتيجية سيو مخصصة لكل إمارة ومنطقة تجارية في{" "}
              <span className="text-blue-500">الإمارات السبع</span>
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              سلوك الباحث في دبي مارينا أو الخليج التجاري يختلف عن الباحث في جزيرة المارية بأبوظبي أو المنطقة الصناعية بالشارقة. اختر الإمارة لتكتشف خطتنا المخصصة لها:
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {EMIRATES_LOCAL_STRATEGIES.map((emirate) => (
              <button
                key={emirate.id}
                type="button"
                onClick={() => setSelectedEmirateId(emirate.id)}
                className={`rounded-2xl px-5 py-3 text-xs sm:text-sm font-black transition ${
                  selectedEmirateId === emirate.id
                    ? "bg-gradient-to-l from-blue-600 to-cyan-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.45)]"
                    : "border border-white/10 bg-zinc-900 text-zinc-300 hover:border-blue-500/40 hover:text-white"
                }`}
              >
                {emirate.nameAr} ({emirate.nameEn})
              </button>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-black p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      استراتيجية السيو المحلي في {activeEmirateData.nameAr}
                    </h3>
                    <p className="text-xs text-blue-400 font-bold mt-1">
                      توفير إعلاني تقديري: {activeEmirateData.avgCpcSavedAed} في إعلانات البحث
                    </p>
                  </div>
                  <span className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-black text-blue-300">
                    Google Maps & Local Pack
                  </span>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                  {activeEmirateData.searchBehaviorInsight}
                </p>

                <div className="space-y-3">
                  <div className="text-xs font-black uppercase text-blue-400">
                    خطوات السيطرة المحلية في {activeEmirateData.nameAr}:
                  </div>
                  {activeEmirateData.keyStrategyPoints.map((pt, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-zinc-900/70 p-3.5 text-sm text-zinc-200"
                    >
                      <span className="text-blue-400 font-black">0{idx + 1}</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="text-xs font-bold text-zinc-400 mb-2.5">
                    أبرز المناطق والأحياء التجارية المستهدفة في {activeEmirateData.nameAr}:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeEmirateData.commercialHubs.map((hub, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs font-bold text-zinc-200"
                      >
                        📍 {hub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsappLink(`مرحباً، أود استشارة حول السيو المحلي وخرائط جوجل في ${activeEmirateData.nameAr}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 shadow-lg"
                  >
                    <span>💬 تواصل معنا عبر واتساب بخصوص {activeEmirateData.nameAr}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-5">
                  <div className="text-xs font-black text-white mb-3">
                    توزيع لغة البحث التجاري في {activeEmirateData.nameAr}
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold mb-2">
                    <span className="text-blue-400">
                      البحث بالعربية: {activeEmirateData.arabicSearchShare}%
                    </span>
                    <span className="text-cyan-400">
                      البحث بالإنجليزية: {activeEmirateData.englishSearchShare}%
                    </span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-zinc-800 flex">
                    <div
                      style={{ width: `${activeEmirateData.arabicSearchShare}%` }}
                      className="bg-blue-600 h-full transition-all duration-500"
                    />
                    <div
                      style={{ width: `${activeEmirateData.englishSearchShare}%` }}
                      className="bg-cyan-500 h-full transition-all duration-500"
                    />
                  </div>
                  <p className="mt-3 text-[11px] text-zinc-400">
                    * لذلك نطبق في Unique بنية صفحات مزدوجة تلتقط الشريحتين معاً دون تفويت أي عميل.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-5 space-y-4">
                  <div>
                    <div className="text-xs font-black text-blue-400 mb-2">
                      نماذج عبارات بحث عالية النية (بالعربية):
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeEmirateData.sampleKeywordsAr.map((kw, i) => (
                        <span
                          key={i}
                          className="rounded-lg border border-blue-500/25 bg-blue-950/30 px-2.5 py-1 text-xs text-blue-200"
                        >
                          🔍 {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <div className="text-xs font-black text-cyan-400 mb-2">
                      High-Intent English Queries:
                    </div>
                    <div className="flex flex-wrap gap-2" dir="ltr">
                      {activeEmirateData.sampleKeywordsEn.map((kw, i) => (
                        <span
                          key={i}
                          className="rounded-lg border border-cyan-500/25 bg-cyan-950/30 px-2.5 py-1 text-xs text-cyan-200"
                        >
                          🔍 {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. استراتيجيات السيو المخصصة حسب القطاع في الإمارات (Industry Playbooks)
      ===================================================================== */}
      <section className="relative z-10 py-20 lg:py-28 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400">
              خطط سيو مفصلة حسب طبيعة نشاطك التجاري
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-black text-white">
              لا نطبق خطة واحدة للجميع؛ اختر{" "}
              <span className="text-blue-500">قطاعك في الإمارات</span>
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              رحلة قرار مستثمر يشتري عقاراً في دبي تختلف تماماً عن مراجع يحجز موعداً في عيادة بأبوظبي أو متسوق يشتري من متجر إلكتروني.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRY_PLAYBOOKS.map((ind) => (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`rounded-2xl p-4 text-right transition ${
                  selectedIndustryId === ind.id
                    ? "border-2 border-blue-500 bg-blue-950/30 text-white shadow-[0_0_25px_rgba(37,99,235,0.3)]"
                    : "border border-white/10 bg-zinc-900/70 text-zinc-300 hover:border-white/25"
                }`}
              >
                <div className="text-sm font-black text-blue-400">{ind.iconLabel}</div>
                <div className="mt-1 text-xs font-bold text-white line-clamp-1">
                  {ind.title}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/90 to-black p-6 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-bold text-blue-400">
                  {activeIndustryData.marketSizeNote}
                </span>
                <h3 className="mt-1 text-xl sm:text-2xl font-black text-white">
                  {activeIndustryData.title}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-300">
                  💰 متوسط قيمة العميل: {activeIndustryData.avgLeadValueAed}
                </span>
                <span className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-bold text-zinc-300">
                  ⏱ الإطار الزمني: {activeIndustryData.expectedTimeframe}
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/50 p-4 text-sm text-zinc-300">
              <strong className="text-white">كيف يبحث العميل ويتخذ القرار في هذا القطاع؟ </strong>
              {activeIndustryData.buyerJourney}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-red-500/20 bg-red-950/10 p-5">
                <h4 className="text-sm font-black text-red-400 mb-3">
                  أبرز التحديات التي تواجه هذا القطاع في الإمارات:
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                  {activeIndustryData.coreChallenges.map((ch, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-500/25 bg-emerald-950/10 p-5">
                <h4 className="text-sm font-black text-emerald-400 mb-3">
                  كيف نحسم المنافسة لصالحك في Unique؟
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-200">
                  {activeIndustryData.uniqueSolutions.map((sol, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-zinc-400 ml-2">
                  أمثلة الكلمات الربحية المستهدفة:
                </span>
                {activeIndustryData.highIntentKeywords.map((kw, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-300"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              <a
                href={getWhatsappLink(`مرحباً، أود استشارة حول استراتيجية قطاع ${activeIndustryData.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 shadow-lg"
              >
                <span>💬 استشر خبير القطاع عبر واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. حاسبة العائد على الاستثمار في السيو بالدرهم الإماراتي (UAE SEO ROI Calculator)
      ===================================================================== */}
      <section
        id="roi-calculator"
        className="relative z-10 py-20 lg:py-28 border-b border-white/10 bg-zinc-950/75"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-300">
              أداة تفاعلية لحساب الجدوى الاقتصادية بالدرهم الإماراتي (AED)
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-black text-white">
              احسب عائد استثمارك المتوقع من{" "}
              <span className="text-blue-500">تصدر نتائج جوجل الإمارات</span>
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              حرّك المؤشرات أدناه حسب حجم البحث في مجالك ومتوسط قيمة الصفقة أو الطلب لديك لترى الإيراد الشهري المتوقع وقيمة التوفير مقارنة بإعلانات Google Ads.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 space-y-6 rounded-3xl border border-white/10 bg-black p-6 sm:p-8">
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-bold mb-2">
                  <span className="text-zinc-300">إجمالي حجم البحث الشهري لكلماتك في الإمارات:</span>
                  <span className="text-blue-400 font-black">
                    {monthlySearchVolume.toLocaleString()} عملية بحث / شهر
                  </span>
                </div>
                <input
                  type="range"
                  min={1500}
                  max={60000}
                  step={500}
                  value={monthlySearchVolume}
                  onChange={(e) => setMonthlySearchVolume(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-2 rounded-lg bg-zinc-800"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm font-bold mb-2">
                  <span className="text-zinc-300">المركز المستهدف في الصفحة الأولى لجوجل:</span>
                  <span className="text-cyan-400 font-black">
                    المركز #{targetRankPosition} (معدل النقر التقديري {roiCalculations.ctrPercent}%)
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((rank) => (
                    <button
                      key={rank}
                      type="button"
                      onClick={() => setTargetRankPosition(rank)}
                      className={`rounded-xl py-2.5 text-xs font-black transition ${
                        targetRankPosition === rank
                          ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                          : "border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white"
                      }`}
                    >
                      المركز #{rank}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm font-bold mb-2">
                  <span className="text-zinc-300">معدل تحويل الزوار إلى استفسارات أو طلبات (Conversion Rate):</span>
                  <span className="text-emerald-400 font-black">{conversionRatePct}%</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  step={0.5}
                  value={conversionRatePct}
                  onChange={(e) => setConversionRatePct(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-2 rounded-lg bg-zinc-800"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm font-bold mb-2">
                  <span className="text-zinc-300">متوسط ربح العميل أو قيمة الطلب (بالدرهم الإماراتي AED):</span>
                  <span className="text-amber-400 font-black">
                    {avgDealValueAed.toLocaleString()} د.إ
                  </span>
                </div>
                <input
                  type="range"
                  min={300}
                  max={25000}
                  step={100}
                  value={avgDealValueAed}
                  onChange={(e) => setAvgDealValueAed(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-2 rounded-lg bg-zinc-800"
                />
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl border border-blue-500/40 bg-gradient-to-b from-blue-950/30 via-zinc-900 to-black p-6 sm:p-8 shadow-[0_0_50px_rgba(37,99,235,0.2)] space-y-5">
              <div className="text-xs font-black uppercase tracking-wider text-blue-400">
                النتائج الشهرية المتوقعة عند الصدارة
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
                  <div className="text-xs text-zinc-400">الزيارات العضوية الشهرية</div>
                  <div className="mt-1 text-2xl font-black text-white">
                    {roiCalculations.estimatedMonthlyVisits.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-blue-400 mt-1">زائر مستهدف مجاناً</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
                  <div className="text-xs text-zinc-400">الاستفسارات والـ Leads</div>
                  <div className="mt-1 text-2xl font-black text-cyan-400">
                    {roiCalculations.estimatedMonthlyLeads.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-1">
                    (~{roiCalculations.closedDealsCount} صفقة مكتملة)
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5">
                <div className="text-xs font-bold text-emerald-300">
                  الإيراد الشهري التقديري من السيو (بالدرهم الإماراتي):
                </div>
                <div className="mt-2 text-3xl sm:text-4xl font-black text-emerald-400">
                  {roiCalculations.projectedMonthlyRevenueAed.toLocaleString()} د.إ / شهرياً
                </div>
              </div>

              <div className="rounded-2xl border border-amber-500/25 bg-amber-950/15 p-4">
                <div className="text-xs font-bold text-amber-300">
                  💡 قيمة النقرات التي توفرها شهرياً مقارنة بإعلانات Google Ads:
                </div>
                <div className="mt-1 text-xl font-black text-white">
                  {roiCalculations.equivalentGoogleAdsCostAed.toLocaleString()} درهم إماراتي / شهرياً
                </div>
              </div>

              <a
                href={getWhatsappLink(`مرحباً، حسبت الإيراد المتوقع بـ ${roiCalculations.projectedMonthlyRevenueAed.toLocaleString()} درهم عبر حاسبة الموقع وأود البدء.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-2xl bg-emerald-600 py-3.5 text-center text-sm font-black text-white transition hover:bg-emerald-500 shadow-lg"
              >
                💬 ابدأ تحقيق هذه النتائج عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          11. سلايدر خارطة الطريق الشهرية (6-Month Roadmap) + معاينة التقرير الشهري
      ===================================================================== */}
      <section className="relative z-10 py-20 lg:py-28 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400">
              منهجية تنفيذ واضحة بدون غموض
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-black text-white">
              ماذا نفعل كل شهر لتصدر{" "}
              <span className="text-blue-500">جوجل الإمارات</span>؟
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              تنقّل عبر سلايدر المراحل الزمنية لترى خطة العمل التفصيلية والمخرجات الملموسة التي تتسلمها شهراً بعد شهر.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {ROADMAP_MONTHS.map((rm, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveRoadmapIndex(idx)}
                className={`rounded-2xl px-5 py-3 text-xs sm:text-sm font-black transition ${
                  activeRoadmapIndex === idx
                    ? "bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.45)]"
                    : "border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white"
                }`}
              >
                {rm.monthNumber}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-900/70 p-6 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="text-xs font-black text-blue-400">
                  {activeRoadmapMonth.monthNumber} — {activeRoadmapMonth.phaseBadge}
                </span>
                <h3 className="mt-1 text-xl sm:text-2xl font-black text-white">
                  {activeRoadmapMonth.monthTitle}
                </h3>
              </div>
              <span className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-300">
                📦 المخرج الرئيسي: {activeRoadmapMonth.completionDeliverable}
              </span>
            </div>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-300">
              {activeRoadmapMonth.summary}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black p-5">
                <div className="text-xs font-black text-blue-400 mb-3">
                  ⚙️ المهام التقنية والبرمجية:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                  {activeRoadmapMonth.technicalTasks.map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black p-5">
                <div className="text-xs font-black text-cyan-400 mb-3">
                  📝 مهام الصفحات والمحتوى:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                  {activeRoadmapMonth.contentTasks.map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black p-5">
                <div className="text-xs font-black text-emerald-400 mb-3">
                  🔗 السلطة والسيو المحلي والقياس:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                  {activeRoadmapMonth.authorityTasks.map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-500/25 bg-blue-950/20 p-4 text-xs sm:text-sm font-bold text-blue-200">
              📈 النتيجة المتوقعة بنهاية هذه المرحلة: {activeRoadmapMonth.expectedOutcome}
            </div>
          </div>

          <div className="mt-16 rounded-3xl border border-white/15 bg-black p-6 sm:p-10 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-bold text-emerald-400">
                  ● LIVE LOOKER STUDIO & GSC REPORT PREVIEW
                </span>
                <h3 className="mt-1 text-xl sm:text-2xl font-black text-white">
                  نموذج تفاعلي للتقرير الشهري الذي تتسلمه مع Unique
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveReportTab("keywords")}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                    activeReportTab === "keywords"
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-900 text-zinc-400 hover:text-white"
                  }`}
                >
                  قفزات ترتيب الكلمات (.ae)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveReportTab("traffic")}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                    activeReportTab === "traffic"
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-900 text-zinc-400 hover:text-white"
                  }`}
                >
                  نمو الزيارات والمكالمات (GA4)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveReportTab("technical")}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                    activeReportTab === "technical"
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-900 text-zinc-400 hover:text-white"
                  }`}
                >
                  صحة الموقع Core Web Vitals
                </button>
              </div>
            </div>

            {activeReportTab === "keywords" && (
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[700px] text-right text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-zinc-400">
                      <th className="py-3 px-4">الكلمة المفتاحية المستهدفة</th>
                      <th className="py-3 px-4">اللغة</th>
                      <th className="py-3 px-4">نية البحث</th>
                      <th className="py-3 px-4">المدينة</th>
                      <th className="py-3 px-4">الترتيب السابق</th>
                      <th className="py-3 px-4">الترتيب الحالي</th>
                      <th className="py-3 px-4">الزيارات الشهرية</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {MONTHLY_REPORT_KEYWORDS.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="py-3.5 px-4 font-bold text-white">{row.keyword}</td>
                        <td className="py-3.5 px-4">
                          <span className="rounded bg-blue-500/20 px-2 py-0.5 text-[11px] font-bold text-blue-300">
                            {row.language}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-zinc-300">{row.intent}</td>
                        <td className="py-3.5 px-4 text-zinc-300">{row.targetCity}</td>
                        <td className="py-3.5 px-4 text-zinc-500">#{row.previousRank}</td>
                        <td className="py-3.5 px-4 font-black text-emerald-400">
                          #{row.currentRank} ↑
                        </td>
                        <td className="py-3.5 px-4 font-bold text-cyan-300">
                          +{row.estClicks} زيارة/شهر
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeReportTab === "traffic" && (
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5">
                  <div className="text-xs text-zinc-400">إجمالي النقرات العضوية (GSC)</div>
                  <div className="mt-2 text-3xl font-black text-emerald-400">14,820</div>
                  <div className="mt-1 text-xs text-emerald-300">+218% مقارنة بالربع السابق</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5">
                  <div className="text-xs text-zinc-400">مكالمات الهاتف + محادثات واتساب</div>
                  <div className="mt-2 text-3xl font-black text-blue-400">342</div>
                  <div className="mt-1 text-xs text-blue-300">تتبع مباشر عبر Google Tag Manager</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5">
                  <div className="text-xs text-zinc-400">الظهور في Google AI Overviews</div>
                  <div className="mt-2 text-3xl font-black text-cyan-400">41 كلمة</div>
                  <div className="mt-1 text-xs text-cyan-300">اقتباس مباشر كمصدر موثوق في الإمارات</div>
                </div>
              </div>
            )}

            {activeReportTab === "technical" && (
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-center">
                  <div className="text-2xl font-black text-emerald-400">0.9s</div>
                  <div className="mt-1 text-xs text-zinc-300">سرعة LCP (أخضر ممتاز)</div>
                </div>
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-center">
                  <div className="text-2xl font-black text-emerald-400">0.00</div>
                  <div className="mt-1 text-xs text-zinc-300">استقرار CLS البصري</div>
                </div>
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-center">
                  <div className="text-2xl font-black text-emerald-400">100%</div>
                  <div className="mt-1 text-xs text-zinc-300">أرشفة الصفحات الربحية</div>
                </div>
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-center">
                  <div className="text-2xl font-black text-emerald-400">Valid</div>
                  <div className="mt-1 text-xs text-zinc-300">JSON-LD Schema & Hreflang</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================================
          12. باقات السيو الشهرية في الإمارات بالدرهم (Transparent AED Packages)
      ===================================================================== */}
      <section
        id="pricing-packages"
        className="relative z-10 py-20 lg:py-28 border-b border-white/10 bg-zinc-950/60"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400">
              أسعار واضحة ومخرجات موثقة بالدرهم الإماراتي
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-black text-white">
              باقات تحسين محركات البحث (SEO) في{" "}
              <span className="text-blue-500">الإمارات</span>
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              اختر الباقة التي تناسب حجم موقعك ومستوى المنافسة في قطاعك، مع التزام كامل بالمخرجات الشهرية والتقارير الحية.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition ${
                  tier.popular
                    ? "border-2 border-blue-500 bg-gradient-to-b from-blue-950/40 via-zinc-900 to-black shadow-[0_0_55px_rgba(37,99,235,0.28)]"
                    : "border border-white/10 bg-black hover:border-white/25"
                }`}
              >
                {tier.popular && (
                  <div className=" -top-4 right-6 rounded-full bg-gradient-to-l from-blue-600 to-cyan-500 px-4 py-1 text-xs font-black text-white shadow-lg self-start mb-4">
                    ★ الأكثر طلباً للشركات في دبي والإمارات
                  </div>
                )}

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">{tier.name}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {tier.tagline}
                  </p>

                  <div className="mt-6 flex items-baseline gap-2 border-b border-white/10 pb-6">
                    <span className="text-4xl sm:text-5xl font-black text-white">
                      {tier.monthlyPriceAed}
                    </span>
                    <span className="text-xs font-bold text-blue-400">{tier.vatNote}</span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2.5 text-xs">
                    <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-3">
                      <div className="text-zinc-400">الكلمات المستهدفة</div>
                      <div className="font-black text-white mt-0.5">{tier.keywordsCount}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-3">
                      <div className="text-zinc-400">تحسين الصفحات</div>
                      <div className="font-black text-white mt-0.5">{tier.pagesOptimized}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-3">
                      <div className="text-zinc-400">المحتوى الشهري</div>
                      <div className="font-black text-cyan-300 mt-0.5">{tier.monthlyArticles}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-3">
                      <div className="text-zinc-400">الروابط والسلطة</div>
                      <div className="font-black text-emerald-300 mt-0.5">{tier.backlinksQuota}</div>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 text-xs sm:text-sm">
                    {tier.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2.5 ${
                          feat.included ? "text-zinc-200" : "text-zinc-600 line-through"
                        }`}
                      >
                        <span
                          className={`mt-0.5 font-black ${
                            feat.included ? "text-emerald-400" : "text-zinc-600"
                          }`}
                        >
                          {feat.included ? "✓" : "✕"}
                        </span>
                        <span className={feat.highlight ? "font-bold text-white" : ""}>
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <a
                    href={getWhatsappLink(`مرحباً، أرغب في حجز ${tier.name} بسعر ${tier.monthlyPriceAed} درهم شهرياً.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full rounded-2xl py-4 text-center text-sm font-black transition shadow-lg ${
                      tier.popular
                        ? "bg-emerald-600 text-white hover:bg-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.45)]"
                        : "border border-white/15 bg-zinc-900 text-white hover:bg-zinc-800"
                    }`}
                  >
                    💬 احجز الباقة عبر واتساب
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          13. سلايدر آراء وتجارب العملاء في الإمارات (Testimonials Slider)
      ===================================================================== */}
      <section
        className="relative z-10 py-20 lg:py-28 border-b border-white/10"
        onMouseEnter={() => setIsTestimonialPaused(true)}
        onMouseLeave={() => setIsTestimonialPaused(false)}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400">
                ثقة عملائنا في دبي وأبوظبي والشارقة
              </span>
              <h2 className="mt-4 text-2xl sm:text-4xl font-black text-white">
                ماذا يقول مديرو الشركات عن نتائج{" "}
                <span className="text-blue-500">Unique SEO</span>؟
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {TESTIMONIALS_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTestimonialIndex(idx)}
                  aria-label={`عرض التقييم رقم ${idx + 1}`}
                  className={`h-3 rounded-full transition-all ${
                    activeTestimonialIndex === idx
                      ? "w-10 bg-blue-500"
                      : "w-3 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              TESTIMONIALS_SLIDES[activeTestimonialIndex],
              TESTIMONIALS_SLIDES[(activeTestimonialIndex + 1) % TESTIMONIALS_SLIDES.length],
            ].map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/90 to-black p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1 text-amber-400 text-sm">
                      {"★★★★★"}
                    </div>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">
                      {item.verifiedMetric}
                    </span>
                  </div>

                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-200">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <div className="font-black text-white text-sm sm:text-base">
                      {item.authorName}
                    </div>
                    <div className="text-xs text-zinc-400">
                      {item.role} — {item.companySector}
                    </div>
                  </div>
                  <span className="rounded-lg bg-blue-600/20 border border-blue-500/30 px-3 py-1 text-xs font-bold text-blue-300">
                    📍 {item.emirate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          14. قسم الأسئلة الشائعة المفلتر والمربوط بـ FAQ Schema
      ===================================================================== */}
      <section
        id="faq-section"
        className="relative z-10 py-20 lg:py-28 border-b border-white/10 bg-zinc-950/60"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-blue-400">
              إجابات شاملة وشفافة (FAQ Schema Ready)
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-black text-white">
              الأسئلة الشائعة حول{" "}
              <span className="text-blue-500">خدمات السيو في الإمارات</span>
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: "all", label: "جميع الأسئلة" },
              { id: "general", label: "عن السيو والنتائج" },
              { id: "pricing", label: "التكلفة والعائد" },
              { id: "local", label: "السيو المحلي واللغات" },
              { id: "ai", label: "الذكاء الاصطناعي GEO" },
              { id: "technical", label: "البرمجة والتقارير" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedFaqCategory(cat.id)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                  selectedFaqCategory === cat.id
                    ? "bg-blue-600 text-white"
                    : "border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="mt-10 space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-white/10 bg-black overflow-hidden transition hover:border-blue-500/40"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? "" : faq.id)}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-right"
                  >
                    <span className="text-base sm:text-lg font-black text-white">
                      {faq.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-zinc-900 text-blue-400 font-black">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-5 pb-6 pt-4 sm:px-6 space-y-3">
                      <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                        {faq.answer}
                      </p>
                      <div className="rounded-xl border border-blue-500/25 bg-blue-950/20 px-4 py-2.5 text-xs font-bold text-blue-300">
                        💡 الخلاصة التنفيذية: {faq.keyTakeaway}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          15. نموذج طلب الفحص والخطة المجانية لموقعك في الإمارات (Final CTA & Form)
      ===================================================================== */}
      <section id="free-audit-form" className="relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-blue-500/40 bg-gradient-to-b from-blue-950/40 via-zinc-900/95 to-black p-6 sm:p-12 shadow-[0_0_70px_rgba(37,99,235,0.25)]">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-300">
                  خطوتك الأولى نحو صدارة جوجل الإمارات
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  احصل على تدقيق SEO تقني وتجاري مجاني لموقعك خلال 24 ساعة
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                  شاركنا رابط موقعك والمدينة أو القطاع الذي تستهدفه في الإمارات. سيقوم فريق المهندسين وخبراء السيو في{" "}
                  <strong className="text-white">Unique Digital Agency</strong> بمراجعة موقعك يدوياً وتزويدك بتقرير واضح يكشف:
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-zinc-200">
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      1
                    </span>
                    <span>الأخطاء التقنية وأسباب بطء أو ضعف أرشفة صفحاتك في جوجل (.ae)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      2
                    </span>
                    <span>الكلمات المفتاحية الربحية التي يستحوذ عليها منافسوك حالياً في دبي وأبوظبي</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      3
                    </span>
                    <span>خارطة طريق عملية لمدة 90 يوماً لمضاعفة الزيارات والمكالمات والمبيعات</span>
                  </li>
                </ul>

                <div className="pt-4">
                  <a
                    href={getWhatsappLink("مرحباً، أود التواصل المباشر معكم عبر واتساب لطلب الاستشارة الفورية.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-4 text-sm font-black text-white hover:bg-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition"
                  >
                    <span>💬 تواصل معنا مباشرة عبر واتساب (+20 12 70506511)</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                {auditSubmitted ? (
                  <div className="rounded-3xl border border-emerald-500/40 bg-emerald-950/20 p-8 text-center space-y-4">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-3xl text-emerald-400">
                      ✓
                    </div>
                    <h3 className="text-2xl font-black text-white">
                      تم تحويل طلبك للواتساب بنجاح!
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      شكراً لك {auditFormState.fullName}. تم فتح محادثة الواتساب مباشرة مع فريقنا الفني على الرقم (+201270506511) لمراجعة موقعك في أسرع وقت.
                    </p>
                    <a
                      href={getWhatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 shadow-lg"
                    >
                      💬 اضغط هنا لمتابعة المحادثة عبر واتساب
                    </a>
                  </div>
                ) : (
                  <form
                    onSubmit={handleAuditSubmit}
                    className="space-y-4 rounded-3xl border border-white/10 bg-black/80 p-6 sm:p-8"
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                          الاسم الكامل *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="مثال: راشد المهيري"
                          value={auditFormState.fullName}
                          onChange={(e) =>
                            setAuditFormState({ ...auditFormState, fullName: e.target.value })
                          }
                          className="w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                          رقم الهاتف / واتساب *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+971 50 XXX XXXX"
                          value={auditFormState.phoneUae}
                          onChange={(e) =>
                            setAuditFormState({ ...auditFormState, phoneUae: e.target.value })
                          }
                          className="w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                        رابط الموقع الإلكتروني أو المتجر *
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://yourcompany.ae"
                        value={auditFormState.websiteUrl}
                        onChange={(e) =>
                          setAuditFormState({ ...auditFormState, websiteUrl: e.target.value })
                        }
                        className="w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                          الإمارة المستهدفة رئيسياً
                        </label>
                        <select
                          value={auditFormState.targetEmirate}
                          onChange={(e) =>
                            setAuditFormState({
                              ...auditFormState,
                              targetEmirate: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none"
                        >
                          <option value="دبي">دبي (Dubai)</option>
                          <option value="أبوظبي">أبوظبي (Abu Dhabi)</option>
                          <option value="الشارقة">الشارقة (Sharjah)</option>
                          <option value="عجمان ورأس الخيمة">عجمان / رأس الخيمة / الفجيرة</option>
                          <option value="جميع إمارات الدولة">جميع إمارات الدولة</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                          الهدف التجاري الأهم
                        </label>
                        <select
                          value={auditFormState.primaryGoal}
                          onChange={(e) =>
                            setAuditFormState({
                              ...auditFormState,
                              primaryGoal: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none"
                        >
                          <option value="زيادة المكالمات والمبيعات العضوية">
                            زيادة المكالمات والمبيعات العضوية
                          </option>
                          <option value="تصدر خرائط جوجل Local SEO">
                            تصدر خرائط جوجل (Local Pack)
                          </option>
                          <option value="سيو متجر إلكتروني">
                            مضاعفة مبيعات متجر إلكتروني
                          </option>
                          <option value="الظهور في ChatGPT و AI Overviews">
                            الظهور في ChatGPT و AI Overviews
                          </option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-2xl bg-gradient-to-l from-emerald-600 to-teal-600 py-4 text-base font-black text-white shadow-[0_0_30px_rgba(16,185,129,0.5)] transition hover:opacity-95 flex items-center justify-center gap-2"
                    >
                      <span>💬 إرسال الطلب والتواصل الفوري عبر واتساب</span>
                    </button>

                    <p className="text-center text-[11px] text-zinc-400">
                      🔒 بياناتك وموقعك في سرية تامة — سيتم تحويلك مباشرة للاتصال بنا عبر واتساب (+201270506511).
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}