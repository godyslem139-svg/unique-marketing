'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'seo' | 'web' | 'social'>('web');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videos = ['/about.mp4', '/aboutus.mp4'];

  // مزامنة اللغة لحظياً مع الهيدر ووسم الـ HTML
  useEffect(() => {
    const syncLanguage = () => {
      const htmlLang = document.documentElement.lang;
      const htmlDir = document.documentElement.dir;
      if (htmlLang === 'en' || htmlDir === 'ltr') {
        setLang('en');
      } else {
        setLang('ar');
      }
    };

    syncLanguage();
    window.addEventListener('languagechange', syncLanguage);

    const observer = new MutationObserver(syncLanguage);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang', 'dir'],
    });

    return () => {
      window.removeEventListener('languagechange', syncLanguage);
      observer.disconnect();
    };
  }, []);

  // إعادة تشغيل الفيديو تلقائياً عند الانتقال بين الفيديوهين
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // تجاوز حظر التشغيل التلقائي إن وجد
      });
    }
  }, [currentVideo]);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  // إحصائيات الشركة
  const stats = [
    {
      number: '+15',
      label: lang === 'ar' ? 'سنة من الخبرة والريادة' : 'Years of Experience & Leadership',
      desc: lang === 'ar' ? 'مسيرة حافلة بالنجاحات الرقمية منذ عام 2011' : 'A track record of digital success since 2011',
    },
    {
      number: '+850',
      label: lang === 'ar' ? 'مشروع وموقع مكتمل' : 'Completed Web Projects',
      desc: lang === 'ar' ? 'مواقع شركات، متاجر إلكترونية، ومنصات مخصصة' : 'Corporate sites, e-commerce stores & custom platforms',
    },
    {
      number: '+1,200',
      label: lang === 'ar' ? 'كلمة مفتاحية في الصدارة' : 'Top Ranked Keywords',
      desc: lang === 'ar' ? 'تصدر نتائج البحث الأولى في جوجل لعملائنا' : 'Dominating first-page Google search results',
    },
    {
      number: '99%',
      label: lang === 'ar' ? 'نسبة رضا واستمرار العملاء' : 'Client Retention & Satisfaction',
      desc: lang === 'ar' ? 'شراكات استراتيجية طويلة الأمد ودعم فني متواصل' : 'Long-term strategic partnerships & 24/7 support',
    },
  ];

  // الركائز والاختصاصات الأساسية
  const pillars = {
    web: {
      badge: lang === 'ar' ? 'تطوير المواقع والمتاجر' : 'Web & E-Commerce Development',
      title: lang === 'ar' ? 'هندسة برمجية حديثة وتصميمات تركز على التحويل' : 'Modern Software Engineering & Conversion-Focused Design',
      description:
        lang === 'ar'
          ? 'في شركة UNIQUE، لا نقوم مجرد بتصميم صفحات ويب تقليدية، بل نبني أصولاً رقمية فائقة السرعة والأمان. نعتمد على أحدث التقنيات العالمية مثل Next.js و React و TypeScript وتكامل الأنظمة (Headless E-Commerce) إلى جانب حلول WordPress و Shopify المخصصة، لنضمن لك موقعاً يتفوق على منافسيك في الأداء وتجربة المستخدم.'
          : 'At UNIQUE, we do not just build standard web pages; we engineer ultra-fast, secure digital assets. Utilizing cutting-edge technologies like Next.js, React, TypeScript, and Headless E-Commerce alongside custom WordPress and Shopify solutions, we ensure your platform outperforms competitors in speed and UX.',
      points: [
        lang === 'ar' ? 'سرعة تحميل فائقة واجتياز مؤشرات Core Web Vitals بنسبة 100%' : 'Ultra-fast loading speeds passing Core Web Vitals at 100%',
        lang === 'ar' ? 'تصميم متجاوب بالكامل (Mobile-First) يدعم اللغتين العربية والإنجليزية' : 'Fully responsive Mobile-First UI with native RTL/LTR bilingual support',
        lang === 'ar' ? 'بنية برمجية نظيفة ومؤمنة بالكامل مع ربط بوابات الدفع والشحن' : 'Clean, secure code architecture with seamless payment & shipping integrations',
        lang === 'ar' ? 'لوحات تحكم مرنة وسهلة الاستخدام لإدارة المحتوى والمنتجات والطلبات' : 'Intuitive dashboards for effortless content, inventory, and order management',
      ],
    },
    seo: {
      badge: lang === 'ar' ? 'تحسين محركات البحث (SEO)' : 'Search Engine Optimization (SEO)',
      title: lang === 'ar' ? 'السيطرة على النتائج الأولى في جوجل ومضاعفة الزيارات المستهدفة' : 'Dominating Google First Page & Multiplying Targeted Traffic',
      description:
        lang === 'ar'
          ? 'خبرتنا الممتدة لأكثر من 15 عاماً في خوارزميات محركات البحث تمنح عملاءنا ميزة تنافسية غير عادية. نقوم ببناء استراتيجيات سيو شاملة تبدأ من الفحص التقني العميق (Technical SEO) وهيكلة البيانات (Schema Markup)، مروراً بدراسة الكلمات المفتاحية الشرائية، وصولاً إلى بناء الروابط الخلفية القوية (High-Authority Backlinks).'
          : 'Our 15+ years of deep expertise in search engine algorithms gives our clients an unfair competitive advantage. We execute holistic SEO strategies covering deep Technical SEO audits, Schema Markup, high-intent keyword mapping, and authoritative backlink acquisition.',
      points: [
        lang === 'ar' ? 'تحليل شامل للمنافسين واقتناص الفرص البيعية في السوق المستهدف' : 'Comprehensive competitor analysis and market gap exploitation',
        lang === 'ar' ? 'تحسين السيو الداخلي والتقني (On-Page & Technical SEO) بأدق المعايير' : 'Precision On-Page & Technical SEO optimization',
        lang === 'ar' ? 'كتابة محتوى تسويقي متوافق مع معايير E-E-A-T ومحبب لمحركات البحث' : 'E-E-A-T compliant SEO content writing that converts readers into buyers',
        lang === 'ar' ? 'تقارير شهرية شفافة توضح نمو النقرات والظهور وترتيب الكلمات' : 'Transparent monthly reporting tracking clicks, impressions, and keyword ranks',
      ],
    },
    social: {
      badge: lang === 'ar' ? 'إدارة السوشيال ميديا والمحتوى' : 'Social Media & Content Management',
      title: lang === 'ar' ? 'صناعة حضور رقمي قوي وبناء ولاء حقيقي للعلامة التجارية' : 'Crafting Powerful Digital Presence & Authentic Brand Loyalty',
      description:
        lang === 'ar'
          ? 'نحول حسابات التواصل الاجتماعي الخاصة بشركتك إلى قنوات بيع وتفاعل نشطة على مدار الساعة. فريقنا الإبداعي يتولى كل شيء من التخطيط الاستراتيجي، كتابة المحتوى الإبداعي، التصميم الجرافيكي الاحترافي، وإنتاج فيديوهات الريلز (Reels) الجذابة، وصولاً إلى إدارة الحملات الإعلانية الممولة بأعلى عائد على الاستثمار (ROAS).'
          : 'We transform your social media channels into active 24/7 sales and engagement engines. Our creative team handles strategic planning, copywriting, graphic design, viral Reels production, and high-ROAS paid advertising campaigns.',
      points: [
        lang === 'ar' ? 'خطط محتوى شهرية مدروسة تناسب طبيعة جمهورك في مصر والخليج' : 'Tailored monthly content calendars for Egyptian and GCC audiences',
        lang === 'ar' ? 'تصميمات بصرية مبتكرة وفيديوهات Reels احترافية تزيد من التفاعل' : 'Eye-catching visual designs and high-retention Reels videos',
        lang === 'ar' ? 'إدارة احترافية للتفاعلات والرسائل لتحويل المتابعين إلى عملاء فعليين' : 'Proactive community management turning followers into paying customers',
        lang === 'ar' ? 'إدارة وتحسين الحملات الإعلانية على Meta و TikTok و Snapchat و Google' : 'Data-driven ad campaign management across Meta, TikTok, Snapchat & Google',
      ],
    },
  };

  // المحطات التاريخية للشركة (15+ عاماً)
  const timeline = [
    {
      year: '2011',
      title: lang === 'ar' ? 'انطلاق شركة UNIQUE للحلول الرقمية' : 'Founding of UNIQUE Digital Agency',
      desc:
        lang === 'ar'
          ? 'تأسست الشركة برؤية واضحة تهدف إلى تقديم خدمات تطوير مواقع احترافية وحلول استضافة موثوقة للشركات الناشئة والمتوسطة.'
          : 'Founded with a clear vision to deliver professional web development and reliable hosting solutions for emerging businesses.',
    },
    {
      year: '2015',
      title: lang === 'ar' ? 'التوسع في خدمات الـ SEO والتسويق الرقمي' : 'Expansion into SEO & Digital Marketing',
      desc:
        lang === 'ar'
          ? 'إطلاق قسم متخصص بالكامل في تحسين محركات البحث (SEO) وإدارة منصات التواصل الاجتماعي بعد تحقيق نتائج قياسية لمئات العملاء.'
          : 'Launched a dedicated SEO and Social Media division after achieving record-breaking organic growth for hundreds of clients.',
    },
    {
      year: '2019',
      title: lang === 'ar' ? 'التوسع الإقليمي في أسواق الخليج العربي' : 'Regional Expansion Across GCC Markets',
      desc:
        lang === 'ar'
          ? 'بناء شراكات واسعة وتنفيذ مشاريع كبرى في المملكة العربية السعودية، الكويت، والإمارات العربية المتحدة في قطاعات السياحة، العقارات، والمقاولات.'
          : 'Established strong partnerships and delivered major projects across Saudi Arabia, Kuwait, and the UAE in tourism, real estate, and construction.',
    },
    {
      year: '2023',
      title: lang === 'ar' ? 'تبني تقنيات الجيل الجديد (Next.js & Headless)' : 'Adopting Next-Gen Web Stacks (Next.js & Headless)',
      desc:
        lang === 'ar'
          ? 'الانتقال الكامل لبناء تطبيقات الويب فائقة السرعة والمتاجر الإلكترونية المتطورة باستخدام أحدث معماريات البرمجة العالمية.'
          : 'Full transition to engineering ultra-fast web applications and headless e-commerce stores using modern global architectures.',
    },
    {
      year: '2026',
      title: lang === 'ar' ? 'أكثر من 15 عاماً من الريادة والابتكار المستمر' : '15+ Years of Leadership & Continuous Innovation',
      desc:
        lang === 'ar'
          ? 'نواصل اليوم ريادتنا كواحدة من أقوى الوكالات الرقمية المتكاملة، مع دمج تقنيات الذكاء الاصطناعي وأحدث استراتيجيات الـ GEO والـ SEO.'
          : 'Continuing our leadership as a premier full-service digital agency, integrating AI-driven workflows and advanced SEO/GEO strategies.',
    },
  ];

  // منهجية العمل
  const workflow = [
    {
      step: '01',
      title: lang === 'ar' ? 'الدراسة والتحليل الاستراتيجي' : 'Discovery & Strategic Analysis',
      desc:
        lang === 'ar'
          ? 'ندرس نشاطك التجاري، جمهورك المستهدف، ونقاط القوة والضعف لدى منافسيك لنضع خطة عمل دقيقة مبنية على البيانات.'
          : 'We analyze your business model, target audience, and competitors to formulate a precise, data-backed action plan.',
    },
    {
      step: '02',
      title: lang === 'ar' ? 'التخطيط وتصميم تجربة المستخدم' : 'Wireframing & UI/UX Architecture',
      desc:
        lang === 'ar'
          ? 'نصمم واجهات مستخدم عصرية ومسارات تصفح ذكية تضمن بقاء الزائر أطول فترة ممكنة وتحفزه على اتخاذ قرار الشراء أو التواصل.'
          : 'We craft modern interfaces and intuitive user journeys that maximize engagement and drive conversion actions.',
    },
    {
      step: '03',
      title: lang === 'ar' ? 'التنفيذ البرمجي والتهيئة لمحركات البحث' : 'Development & Full SEO Integration',
      desc:
        lang === 'ar'
          ? 'كتابة كود برمجي نظيف وسريع مع تطبيق كافة معايير السيو التقني والداخلي من اللحظة الأولى لبناء المشروع.'
          : 'Writing clean, scalable code while embedding Technical and On-Page SEO best practices from day one.',
    },
    {
      step: '04',
      title: lang === 'ar' ? 'الإطلاق، الإدارة، والنمو المستمر' : 'Launch, Management & Scaling',
      desc:
        lang === 'ar'
          ? 'بعد الاختبار الشامل والإطلاق، نبدأ رحلة إدارة المحتوى والسوشيال ميديا وبناء الروابط لضمان تصدرك ونمو مبيعاتك باستمرار.'
          : 'Post-launch, we drive continuous growth through active social media management, link building, and performance scaling.',
    },
  ];

  // القيم الجوهرية
  const coreValues = [
    {
      title: lang === 'ar' ? 'الشفافية المطلقة' : 'Absolute Transparency',
      desc:
        lang === 'ar'
          ? 'نؤمن بأن العميل شريك في النجاح؛ لذلك نقدم تقارير واضحة وأرقاماً حقيقية بدون أي وعود وهمية.'
          : 'We treat clients as partners, providing crystal-clear reports and real metrics without unrealistic promises.',
    },
    {
      title: lang === 'ar' ? 'الجودة وعدم التنازل عن التفاصيل' : 'Uncompromising Quality',
      desc:
        lang === 'ar'
          ? 'نهتم بأدق التفاصيل في الكود البرمجي، سرعة الموقع، جودة التصميم، ودقة استهداف الكلمات المفتاحية.'
          : 'We obsess over every detail—from code cleanliness and site speed to visual polish and keyword precision.',
    },
    {
      title: lang === 'ar' ? 'التركيز على العائد الاستثماري (ROI)' : 'ROI-Driven Execution',
      desc:
        lang === 'ar'
          ? 'هدفنا النهائي ليس مجرد تسليم موقع جميل، بل زيادة عملائك ومبيعاتك وتحقيق عائد ملموس يفوق تكلفة استثمارك.'
          : 'Our ultimate goal is not just delivering a pretty website, but generating leads, sales, and measurable ROI.',
    },
    {
      title: lang === 'ar' ? 'الالتزام بالمواعيد والدعم المتواصل' : 'Timely Delivery & 24/7 Support',
      desc:
        lang === 'ar'
          ? 'نحترم وقت عملائنا ونلتزم بالجداول الزمنية المتفق عليها، مع توفير فريق دعم فني جاهز للتدخل الفوري في أي وقت.'
          : 'We respect deadlines and provide dedicated technical support ready to assist you whenever needed.',
    },
    {
      title: lang === 'ar' ? 'مواكبة أحدث التقنيات العالمية' : 'Continuous Technological Innovation',
      desc:
        lang === 'ar'
          ? 'نطور أدواتنا باستمرار لنواكب تحديثات جوجل المتلاحقة وأحدث أطر العمل البرمجية وتقنيات التجارة الإلكترونية.'
          : 'We constantly upgrade our stack to stay ahead of Google algorithm updates and modern web standards.',
    },
    {
      title: lang === 'ar' ? 'حلول مخصصة لكل قطاع' : 'Tailored Industry Solutions',
      desc:
        lang === 'ar'
          ? 'لا نستخدم قوالب مكررة؛ كل مشروع يتم تفصيله بالكامل ليتناسب مع طبيعة السوق والجمهور الخاص بنشاطك.'
          : 'No cookie-cutter templates; every strategy and platform is custom-engineered for your specific industry.',
    },
  ];

  // القطاعات التي نخدمها
  const industries = [
    {
      name: lang === 'ar' ? 'السياحة والسفر والغوص' : 'Tourism, Travel & Diving',
      examples: lang === 'ar' ? 'منصات حجز الرحلات، الفنادق، ومراكز الغوص' : 'Tour booking platforms, hotels & diving centers',
    },
    {
      name: lang === 'ar' ? 'العقارات والمقاولات والإنشاءات' : 'Real Estate & Construction',
      examples: lang === 'ar' ? 'شركات التطوير العقاري، المظلات، الهناجر، والتشطيبات' : 'Property developers, steel structures & contracting firms',
    },
    {
      name: lang === 'ar' ? 'المتاجر الإلكترونية والبيع بالتجزئة' : 'E-Commerce & Retail',
      examples: lang === 'ar' ? 'متاجر الأزياء، الإلكترونيات، والأجهزة المنزلية' : 'Fashion boutiques, electronics & home appliances stores',
    },
    {
      name: lang === 'ar' ? 'القطاع الطبي والصيدلاني' : 'Medical & Pharmaceutical',
      examples: lang === 'ar' ? 'البوابات الطبية، العيادات، ومراكز الرعاية الصحية' : 'Medical portals, clinics & healthcare directories',
    },
    {
      name: lang === 'ar' ? 'الخدمات اللوجستية والنقل' : 'Logistics & Transportation',
      examples: lang === 'ar' ? 'شركات الشحن، نقل العفش، وخدمات التاكسي والتوصيل' : 'Moving companies, freight & taxi booking services',
    },
    {
      name: lang === 'ar' ? 'المنصات التعليمية والأكاديميات' : 'Education & E-Learning',
      examples: lang === 'ar' ? 'منصات التعليم عن بعد، الأكاديميات، والمدونات المتخصصة' : 'Online academies, LMS platforms & niche blogs',
    },
  ];

  // الأسئلة الشائعة
  const faqs = [
    {
      q: lang === 'ar' ? 'ما الذي يميز شركة UNIQUE عن غيرها من شركات التصميم والتسويق؟' : 'What sets UNIQUE apart from other web and marketing agencies?',
      a:
        lang === 'ar'
          ? 'نحن نجمع بين الخبرة الطويلة التي تتجاوز 15 عاماً وبين إتقان أحدث التقنيات البرمجية (مثل Next.js) وفهم عميق لخوارزميات محركات البحث (SEO) وإدارة السوشيال ميديا. هذا التكامل يجعلنا نبني لك منظومة رقمية متكاملة تحت سقف واحد دون الحاجة للتشتت بين عدة شركات.'
          : 'We combine 15+ years of market experience with modern software engineering (Next.js), deep Technical SEO mastery, and creative social media management—giving you a complete digital growth ecosystem under one roof.',
    },
    {
      q: lang === 'ar' ? 'هل المواقع التي تصممونها تكون مهيأة لمحركات البحث (SEO) من البداية؟' : 'Are the websites you build SEO-optimized from the ground up?',
      a:
        lang === 'ar'
          ? 'بالتأكيد 100%. نحن نعتبر السيو جزءاً أساسياً من هندسة الموقع وليس مجرد إضافة لاحقة. نهتم بسرعة التحميل، هيكلة العناوين (H1-H6)، خصائص الصور والروابط (Alt & Title attributes)، ملفات السايت ماب، وتوافق الموقع التام مع الجوال.'
          : 'Absolutely 100%. SEO is baked into our code architecture from day one—covering ultra-fast load times, semantic heading structures, full image/link attributes, sitemaps, and mobile-first indexing.',
    },
    {
      q: lang === 'ar' ? 'هل تقدمون خدماتكم للعملاء خارج مصر؟' : 'Do you serve clients outside of Egypt?',
      a:
        lang === 'ar'
          ? 'نعم، نفخر بخدمة مئات العملاء والشركات في مصر والمملكة العربية السعودية والكويت والإمارات ومختلف الدول العربية والأوروبية، مع توفير حلول دفع وتواصل مرنة تناسب الجميع.'
          : 'Yes, we proudly serve hundreds of clients across Egypt, Saudi Arabia, Kuwait, the UAE, and globally, offering flexible communication and payment options.',
    },
    {
      q: lang === 'ar' ? 'كيف يتم عرض المشاريع في هذه الصفحة؟' : 'How are your projects showcased on this page?',
      a:
        lang === 'ar'
          ? 'قمنا بتجهيز عرض مرئي متتابع في أعلى الصفحة (Hero Video) يعرض لقطات حية لمجموعة من أقوى المشاريع والمنصات التي قمنا بتنفيذها، كما يمكنك تصفح معرض الأعمال الكامل لزيارة كل موقع بنفسك.'
          : 'We feature a continuous dual-video showcase right in the hero section highlighting live projects we have built, and you can also visit our full Portfolio page to explore each live website.',
    },
  ];

  return (
    <main
      className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white overflow-x-hidden"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* ==================== 1. قسم الهيرو مع تتابع الفيديوهين (about.mp4 & aboutus.mp4) ==================== */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-28 px-4 sm:px-6 lg:px-8 border-b border-blue-900/40 overflow-hidden">
        {/* إضاءة خلفية */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/15 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* النص التعريفي في الهيرو */}
            <div className="lg:col-span-6 space-y-6 text-right" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-400 text-xs sm:text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(37,99,235,0.25)]">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span>
                  {lang === 'ar'
                    ? 'خبرة أكثر من 15 عاماً في الصناعة الرقمية'
                    : 'Over 15 Years of Digital Industry Excellence'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                {lang === 'ar' ? (
                  <>
                    نحن <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">UNIQUE</span>.. القوة الدافعة وراء أنجح المواقع والعلامات التجارية
                  </>
                ) : (
                  <>
                    We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">UNIQUE</span>.. The Force Behind Top Websites & Brands
                  </>
                )}
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
                {lang === 'ar'
                  ? 'شركة UNIQUE هي واحدة من أقوى الشركات الرائدة والمتخصصة في تصميم وتطوير المواقع الإلكترونية المتقدمة، تحسين محركات البحث (SEO) وتصدر النتائج الأولى، وإدارة حسابات السوشيال ميديا الاحترافية. على مدار أكثر من 15 سنة، حولنا مئات الأفكار والشركات في مصر والخليج إلى قصص نجاح رقمية تضاعف مبيعاتها يومياً.'
                  : 'UNIQUE is one of the strongest pioneering agencies specialized in advanced web design & development, Search Engine Optimization (SEO), and professional social media management. For over 15 years, we have transformed hundreds of businesses across Egypt and the GCC into dominant digital success stories.'}
              </p>

              {/* نقاط سريعة */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-neutral-900/90 border border-blue-500/30 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-100">
                    {lang === 'ar' ? 'تصميم مواقع احترافية' : 'Custom Web Design'}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-neutral-900/90 border border-blue-500/30 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-100">
                    {lang === 'ar' ? 'تصدر نتائج البحث SEO' : 'Top Google SEO'}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-neutral-900/90 border border-blue-500/30 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-100">
                    {lang === 'ar' ? 'إدارة سوشيال ميديا' : 'Social Media Growth'}
                  </span>
                </div>
              </div>

              {/* أزرار الدعوة لاتخاذ إجراء */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/portfolio"
                  title={lang === 'ar' ? 'تصفح سابقة أعمالنا' : 'Explore Our Portfolio'}
                  aria-label={lang === 'ar' ? 'تصفح سابقة أعمالنا' : 'Explore Our Portfolio'}
                  className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] flex items-center gap-2"
                >
                  <span>{lang === 'ar' ? 'تصفح سابقة أعمالنا' : 'Explore Our Portfolio'}</span>
                  <span>{lang === 'ar' ? '←' : '→'}</span>
                </Link>

                <Link
                  href="/pricing"
                  title={lang === 'ar' ? 'استكشف باقات الأسعار' : 'View Pricing Packages'}
                  aria-label={lang === 'ar' ? 'استكشف باقات الأسعار' : 'View Pricing Packages'}
                  className="px-7 py-4 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-blue-400 border border-blue-500/40 font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2"
                >
                  <span>{lang === 'ar' ? 'باقات الأسعار والعروض' : 'Pricing & Packages'}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden bg-neutral-950 border-2 border-blue-500/50 shadow-[0_0_50px_rgba(37,99,235,0.3)] group">
                
                <div className="bg-neutral-900/95 border-b border-neutral-800 px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="w-3 h-3 rounded-full bg-cyan-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-bold text-zinc-300 ms-2">
                    
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  </span>
                </div>

                <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                  <video
                    ref={videoRef}
                    key={videos[currentVideo]}
                    src={videos[currentVideo]}
                    autoPlay
                    muted
                    playsInline
                    controls
                    onEnded={handleVideoEnd}
                    title={lang === 'ar' ? 'فيديو استعراض مشاريع شركة يونيك' : 'UNIQUE Agency Projects Showcase Video'}
                    aria-label={lang === 'ar' ? 'فيديو استعراض مشاريع شركة يونيك' : 'UNIQUE Agency Projects Showcase Video'}
                    className="w-full h-full object-contain bg-black"
                  >
                    {lang === 'ar'
                      ? 'متصفحك لا يدعم تشغيل الفيديو.'
                      : 'Your browser does not support the video tag.'}
                  </video>
                </div>

                <div className="bg-neutral-900/95 border-t border-neutral-800 p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setCurrentVideo(0)}
                      title={lang === 'ar' ? 'تشغيل العرض الأول (about.mp4)' : 'Play Showcase 1 (about.mp4)'}
                      aria-label={lang === 'ar' ? 'تشغيل العرض الأول' : 'Play Showcase 1'}
                      className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        currentVideo === 0
                          ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)]'
                          : 'bg-black text-zinc-400 border border-neutral-800 hover:border-blue-500/50 hover:text-white'
                      }`}
                    >
                    </button>

                    <button
                      type="button"
                      onClick={() => setCurrentVideo(1)}
                      title={lang === 'ar' ? 'تشغيل العرض الثاني (aboutus.mp4)' : 'Play Showcase 2 (aboutus.mp4)'}
                      aria-label={lang === 'ar' ? 'تشغيل العرض الثاني' : 'Play Showcase 2'}
                      className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        currentVideo === 1
                          ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)]'
                          : 'bg-black text-zinc-400 border border-neutral-800 hover:border-blue-500/50 hover:text-white'
                      }`}
                    >
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-black border border-neutral-800 hover:border-blue-500/60 transition-all duration-300 shadow-xl group text-center"
              >
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-3 group-hover:scale-105 transition-transform">
                  {stat.number}
                </div>
                <h2 className="text-lg font-extrabold text-white mb-2">{stat.label}</h2>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase tracking-wider">
              {lang === 'ar' ? 'من نحن وماذا نقدم؟' : 'Who We Are & What We Do'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              {lang === 'ar'
                ? 'شريكك التقني والتسويقي المتكامل منذ أكثر من 15 عاماً'
                : 'Your Full-Stack Technical & Marketing Partner For 15+ Years'}
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              {lang === 'ar'
                ? 'نجمع بين القوة البرمجية، الخبرة التسويقية، والفهم العميق لسلوك المستهلك لبناء منظومات رقمية تقود السوق.'
                : 'Combining software engineering power, marketing mastery, and consumer psychology to build market-leading digital ecosystems.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-blue-500/50 transition-all shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-black text-xl mb-6">
                  01
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">
                  {lang === 'ar' ? 'قصتنا وخبرتنا الممتدة' : 'Our Story & 15-Year Legacy'}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {lang === 'ar'
                    ? 'بدأت شركة UNIQUE رحلتها منذ أكثر من 15 عاماً بهدف واحد: تقديم حلول ويب وتسويق رقمي بمعايير عالمية حقيقية. عاصرنا كافة مراحل تطور الإنترنت ومحركات البحث، وطورنا منهجياتنا باستمرار لنضمن لعملائنا الصدارة الدائمة سواء في تصميم المواقع أو الـ SEO أو إدارة السوشيال ميديا.'
                    : 'UNIQUE began its journey over 15 years ago with a single mission: delivering world-class web and digital marketing solutions. Having evolved alongside the internet and search engines, we continuously refine our methodologies to keep our clients at the very top.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-blue-400 font-bold">
                {lang === 'ar' ? 'أكثر من عقد ونصف من الثقة والنجاح' : 'Over a decade and a half of proven trust'}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-blue-500/40 hover:border-blue-400 transition-all shadow-[0_0_35px_rgba(37,99,235,0.15)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl mb-6 shadow-lg">
                  02
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">
                  {lang === 'ar' ? 'رؤيتنا المستقبلية' : 'Our Vision'}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {lang === 'ar'
                    ? 'أن نكون الخيار الأول والشريك الاستراتيجي الموثوق لكل شركة ومؤسسة في الشرق الأوسط تطمح للتحول الرقمي الشامل، والسيطرة على حصتها السوقية عبر مواقع إلكترونية فائقة الأداء وحضور تسويقي لا يقبل المنافسة.'
                    : 'To be the premier strategic partner for businesses across the Middle East seeking complete digital transformation, market dominance, ultra-fast web platforms, and unbeatable search & social visibility.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-cyan-400 font-bold">
                {lang === 'ar' ? 'نقود التحول الرقمي في مصر والخليج' : 'Leading digital transformation in MENA'}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-blue-500/50 transition-all shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-black text-xl mb-6">
                  03
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">
                  {lang === 'ar' ? 'رسالتنا والتزامنا' : 'Our Mission & Commitment'}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {lang === 'ar'
                    ? 'تمكين أصحاب الأعمال من مضاعفة أرباحهم ومبيعاتهم عبر حلول تقنية وتسويقية مبنية على البيانات والدراسة الفعلية للسوق، مع الالتزام الكامل بالجودة، السرعة، والأمان في كل سطر كود وكل حملة إعلانية.'
                    : 'Empowering business owners to multiply their revenue through data-driven engineering and marketing solutions, with an unwavering commitment to speed, security, and measurable ROI.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-blue-400 font-bold">
                {lang === 'ar' ? 'نتائج حقيقية قابلة للقياس والنمو' : 'Real, measurable, and scalable results'}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase">
              {lang === 'ar' ? 'تخصصاتنا الأساسية' : 'Our Core Specializations'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              {lang === 'ar'
                ? 'ثلاثية النجاح الرقمي في شركة UNIQUE'
                : 'The Digital Success Trilogy at UNIQUE'}
            </h2>
            <p className="text-zinc-400 text-base">
              {lang === 'ar'
                ? 'اضغط على كل تخصص لتتعرف على كيف نصنع الفارق لمشروعك:'
                : 'Select each specialization to discover how we create a competitive edge for your business:'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              type="button"
              onClick={() => setActiveTab('web')}
              title={lang === 'ar' ? 'تصميم وتطوير المواقع' : 'Web Design & Development'}
              className={`px-6 py-4 rounded-2xl font-extrabold text-sm sm:text-base transition-all ${
                activeTab === 'web'
                  ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)]'
                  : 'bg-black text-zinc-400 border border-neutral-800 hover:border-blue-500/40 hover:text-white'
              }`}
            >
              {lang === 'ar' ? '1. تصميم وتطوير المواقع الإلكترونية' : '1. Web Design & Development'}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('seo')}
              title={lang === 'ar' ? 'تحسين محركات البحث SEO' : 'Search Engine Optimization (SEO)'}
              className={`px-6 py-4 rounded-2xl font-extrabold text-sm sm:text-base transition-all ${
                activeTab === 'seo'
                  ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)]'
                  : 'bg-black text-zinc-400 border border-neutral-800 hover:border-blue-500/40 hover:text-white'
              }`}
            >
              {lang === 'ar' ? '2. تحسين محركات البحث (SEO)' : '2. Search Engine Optimization (SEO)'}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('social')}
              title={lang === 'ar' ? 'إدارة السوشيال ميديا' : 'Social Media Management'}
              className={`px-6 py-4 rounded-2xl font-extrabold text-sm sm:text-base transition-all ${
                activeTab === 'social'
                  ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)]'
                  : 'bg-black text-zinc-400 border border-neutral-800 hover:border-blue-500/40 hover:text-white'
              }`}
            >
              {lang === 'ar' ? '3. إدارة السوشيال ميديا والمحتوى' : '3. Social Media Management'}
            </button>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-black border border-blue-500/40 shadow-[0_0_45px_rgba(37,99,235,0.15)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block px-3.5 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold">
                  {pillars[activeTab].badge}
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-white leading-snug">
                  {pillars[activeTab].title}
                </h3>
                <p className="text-zinc-300 text-base leading-relaxed">
                  {pillars[activeTab].description}
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    title={lang === 'ar' ? 'اطلب استشارة مجانية الآن' : 'Request a Free Consultation'}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg"
                  >
                    <span>{lang === 'ar' ? 'تحدث مع خبرائنا في هذا القسم' : 'Consult Our Experts in This Division'}</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 space-y-4">
                <h4 className="text-lg font-extrabold text-blue-400 border-b border-neutral-800 pb-3">
                  {lang === 'ar' ? 'ماذا نضمن لك في هذه الخدمة؟' : 'What Do We Guarantee?'}
                </h4>
                <ul className="space-y-4">
                  {pillars[activeTab].points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-200 leading-relaxed">
                      <span className="w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase">
              {lang === 'ar' ? 'تاريخنا ومحطات النجاح' : 'Our Journey & Milestones'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              {lang === 'ar' ? 'أكثر من 15 عاماً من التطور المستمر' : '15+ Years of Relentless Evolution'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="inline-block px-3.5 py-1 rounded-xl bg-blue-600 text-white font-black text-sm mb-4 shadow-md">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-extrabold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-blue-500 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase">
              {lang === 'ar' ? 'كيف نعمل؟' : 'How We Work'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              {lang === 'ar' ? 'منهجية هندسية وتسويقية مدروسة' : 'Our Proven 4-Step Execution Methodology'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((wf, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-black border border-neutral-800 hover:border-blue-500/60 transition-all shadow-xl relative overflow-hidden group"
              >
                <span className="text-5xl font-black text-blue-500/20 group-hover:text-blue-500/40 transition-colors block mb-4">
                  {wf.step}
                </span>
                <h3 className="text-xl font-extrabold text-white mb-3">{wf.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase">
              {lang === 'ar' ? 'لماذا تختار UNIQUE؟' : 'Why Choose UNIQUE?'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              {lang === 'ar' ? 'معايير صارمة تضمن تفوقك الرقمي' : 'Core Values That Guarantee Your Digital Edge'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-blue-500/50 transition-all shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-black mb-5">
                  ★
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3">{val.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase">
              {lang === 'ar' ? 'خبرة متعددة القطاعات' : 'Cross-Industry Expertise'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              {lang === 'ar' ? 'قطاعات نجحنا في تطويرها وتصدرها' : 'Industries We Have Scaled & Dominated'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-black border border-neutral-800 hover:border-blue-500/50 transition-all flex items-start gap-4"
              >
                <span className="w-3 h-3 rounded-full bg-blue-500 mt-2 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{ind.name}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400">{ind.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase">
              {lang === 'ar' ? 'أسئلة متكررة' : 'Frequently Asked Questions'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              {lang === 'ar' ? 'كل ما تود معرفته عن شركة UNIQUE' : 'Everything You Need to Know About UNIQUE'}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  title={faq.q}
                  className="w-full p-6 text-start flex items-center justify-between gap-4 font-bold text-white hover:text-blue-400 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-neutral-900 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-950 via-neutral-900 to-blue-950 border border-blue-500/40 p-10 sm:p-16 text-center relative overflow-hidden shadow-[0_0_60px_rgba(37,99,235,0.25)]">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              {lang === 'ar'
                ? 'هل أنت مستعد لبناء موقعك وتصدر محركات البحث مع UNIQUE؟'
                : 'Ready to Build Your Website & Dominate Search Results with UNIQUE?'}
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg">
              {lang === 'ar'
                ? 'تواصل معنا اليوم واحصل على استشارة مجانية وخطة عمل مفصلة لتطوير موقعك أو متجرك الإلكتروني ومضاعفة مبيعاتك.'
                : 'Contact us today for a free consultation and a tailored action plan to scale your website, SEO, and social media.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/201270506511"
                target="_blank"
                rel="noopener noreferrer"
                title={lang === 'ar' ? 'تواصل عبر واتساب الآن' : 'Contact via WhatsApp Now'}
                aria-label={lang === 'ar' ? 'تواصل عبر واتساب الآن' : 'Contact via WhatsApp Now'}
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base transition-all shadow-xl"
              >
                {lang === 'ar' ? 'تواصل معنا عبر واتساب ↗' : 'Chat on WhatsApp Now ↗'}
              </a>
              <Link
                href="/contact"
                title={lang === 'ar' ? 'صفحة اتصل بنا' : 'Contact Us Page'}
                aria-label={lang === 'ar' ? 'صفحة اتصل بنا' : 'Contact Us Page'}
                className="px-8 py-4 rounded-2xl bg-black hover:bg-neutral-900 text-white border border-neutral-700 font-bold text-sm sm:text-base transition-all"
              >
                {lang === 'ar' ? 'أرسل تفاصيل مشروعك' : 'Send Project Details'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}