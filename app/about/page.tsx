'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AboutPageAr() {
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'seo' | 'web' | 'social'>('web');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videos = ['/about.mp4', '/aboutus.mp4'];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
      });
    }
  }, [currentVideo]);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const stats = [
    {
      number: '+15',
      label: 'سنة من الخبرة والريادة',
      desc: 'مسيرة حافلة بالنجاحات الرقمية منذ عام 2011',
    },
    {
      number: '+850',
      label: 'مشروع وموقع مكتمل',
      desc: 'مواقع شركات، متاجر إلكترونية، ومنصات مخصصة',
    },
    {
      number: '+1,200',
      label: 'كلمة مفتاحية في الصدارة',
      desc: 'تصدر نتائج البحث الأولى في جوجل لعملائنا',
    },
    {
      number: '99%',
      label: 'نسبة رضا واستمرار العملاء',
      desc: 'شراكات استراتيجية طويلة الأمد ودعم فني متواصل',
    },
  ];

  const pillars = {
    web: {
      badge: 'تطوير المواقع والمتاجر',
      title: 'هندسة برمجية حديثة وتصميمات تركز على التحويل',
      description:
        'في شركة UNIQUE، لا نقوم مجرد بتصميم صفحات ويب تقليدية، بل نبني أصولاً رقمية فائقة السرعة والأمان. نعتمد على أحدث التقنيات العالمية مثل Next.js و React و TypeScript وتكامل الأنظمة (Headless E-Commerce) إلى جانب حلول WordPress و Shopify المخصصة، لنضمن لك موقعاً يتفوق على منافسيك في الأداء وتجربة المستخدم.',
      points: [
        'سرعة تحميل فائقة واجتياز مؤشرات Core Web Vitals بنسبة 100%',
        'تصميم متجاوب بالكامل (Mobile-First) يدعم اللغتين العربية والإنجليزية',
        'بنية برمجية نظيفة ومؤمنة بالكامل مع ربط بوابات الدفع والشحن',
        'لوحات تحكم مرنة وسهلة الاستخدام لإدارة المحتوى والمنتجات والطلبات',
      ],
    },
    seo: {
      badge: 'تحسين محركات البحث (SEO)',
      title: 'السيطرة على النتائج الأولى في جوجل ومضاعفة الزيارات المستهدفة',
      description:
        'خبرتنا الممتدة لأكثر من 15 عاماً في خوارزميات محركات البحث تمنح عملاءنا ميزة تنافسية غير عادية. نقوم ببناء استراتيجيات سيو شاملة تبدأ من الفحص التقني العميق (Technical SEO) وهيكلة البيانات (Schema Markup)، مروراً بدراسة الكلمات المفتاحية الشرائية، وصولاً إلى بناء الروابط الخلفية القوية (High-Authority Backlinks).',
      points: [
        'تحليل شامل للمنافسين واقتناص الفرص البيعية في السوق المستهدف',
        'تحسين السيو الداخلي والتقني (On-Page & Technical SEO) بأدق المعايير',
        'كتابة محتوى تسويقي متوافق مع معايير E-E-A-T ومحبب لمحركات البحث',
        'تقارير شهرية شفافة توضح نمو النقرات والظهور وترتيب الكلمات',
      ],
    },
    social: {
      badge: 'إدارة السوشيال ميديا والمحتوى',
      title: 'صناعة حضور رقمي قوي وبناء ولاء حقيقي للعلامة التجارية',
      description:
        'نحول حسابات التواصل الاجتماعي الخاصة بشركتك إلى قنوات بيع وتفاعل نشطة على مدار الساعة. فريقنا الإبداعي يتولى كل شيء من التخطيط الاستراتيجي، كتابة المحتوى الإبداعي، التصميم الجرافيكي الاحترافي، وإنتاج فيديوهات الريلز (Reels) الجذابة، وصولاً إلى إدارة الحملات الإعلانية الممولة بأعلى عائد على الاستثمار (ROAS).',
      points: [
        'خطط محتوى شهرية مدروسة تناسب طبيعة جمهورك في مصر والخليج',
        'تصميمات بصرية مبتكرة وفيديوهات Reels احترافية تزيد من التفاعل',
        'إدارة احترافية للتفاعلات والرسائل لتحويل المتابعين إلى عملاء فعليين',
        'إدارة وتحسين الحملات الإعلانية على Meta و TikTok و Snapchat و Google',
      ],
    },
  };

  const timeline = [
    {
      year: '2011',
      title: 'انطلاق شركة UNIQUE للحلول الرقمية',
      desc: 'تأسست الشركة برؤية واضحة تهدف إلى تقديم خدمات تطوير مواقع احترافية وحلول استضافة موثوقة للشركات الناشئة والمتوسطة.',
    },
    {
      year: '2015',
      title: 'التوسع في خدمات الـ SEO والتسويق الرقمي',
      desc: 'إطلاق قسم متخصص بالكامل في تحسين محركات البحث (SEO) وإدارة منصات التواصل الاجتماعي بعد تحقيق نتائج قياسية لمئات العملاء.',
    },
    {
      year: '2019',
      title: 'التوسع الإقليمي في أسواق الخليج العربي',
      desc: 'بناء شراكات واسعة وتنفيذ مشاريع كبرى في المملكة العربية السعودية، الكويت، والإمارات العربية المتحدة في قطاعات السياحة، العقارات، والمقاولات.',
    },
    {
      year: '2023',
      title: 'تبني تقنيات الجيل الجديد (Next.js & Headless)',
      desc: 'الانتقال الكامل لبناء تطبيقات الويب فائقة السرعة والمتاجر الإلكترونية المتطورة باستخدام أحدث معماريات البرمجة العالمية.',
    },
    {
      year: '2026',
      title: 'أكثر من 15 عاماً من الريادة والابتكار المستمر',
      desc: 'نواصل اليوم ريادتنا كواحدة من أقوى الوكالات الرقمية المتكاملة، مع دمج تقنيات الذكاء الاصطناعي وأحدث استراتيجيات الـ GEO والـ SEO.',
    },
  ];

  const workflow = [
    {
      step: '01',
      title: 'الدراسة والتحليل الاستراتيجي',
      desc: 'ندرس نشاطك التجاري، جمهورك المستهدف، ونقاط القوة والضعف لدى منافسيك لنضع خطة عمل دقيقة مبنية على البيانات.',
    },
    {
      step: '02',
      title: 'التخطيط وتصميم تجربة المستخدم',
      desc: 'نصمم واجهات مستخدم عصرية ومسارات تصفح ذكية تضمن بقاء الزائر أطول فترة ممكنة وتحفزه على اتخاذ قرار الشراء أو التواصل.',
    },
    {
      step: '03',
      title: 'التنفيذ البرمجي والتهيئة لمحركات البحث',
      desc: 'كتابة كود برمجي نظيف وسريع مع تطبيق كافة معايير السيو التقني والداخلي من اللحظة الأولى لبناء المشروع.',
    },
    {
      step: '04',
      title: 'الإطلاق، الإدارة، والنمو المستمر',
      desc: 'بعد الاختبار الشامل والإطلاق، نبدأ رحلة إدارة المحتوى والسوشيال ميديا وبناء الروابط لضمان تصدرك ونمو مبيعاتك باستمرار.',
    },
  ];

  const coreValues = [
    {
      title: 'الشفافية المطلقة',
      desc: 'نؤمن بأن العميل شريك في النجاح؛ لذلك نقدم تقارير واضحة وأرقاماً حقيقية بدون أي وعود وهمية.',
    },
    {
      title: 'الجودة وعدم التنازل عن التفاصيل',
      desc: 'نهتم بأدق التفاصيل في الكود البرمجي، سرعة الموقع، جودة التصميم، ودقة استهداف الكلمات المفتاحية.',
    },
    {
      title: 'التركيز على العائد الاستثماري (ROI)',
      desc: 'هدفنا النهائي ليس مجرد تسليم موقع جميل، بل زيادة عملائك ومبيعاتك وتحقيق عائد ملموس يفوق تكلفة استثمارك.',
    },
    {
      title: 'الالتزام بالمواعيد والدعم المتواصل',
      desc: 'نحترم وقت عملائنا ونلتزم بالجداول الزمنية المتفق عليها، مع توفير فريق دعم فني جاهز للتدخل الفوري في أي وقت.',
    },
    {
      title: 'مواكبة أحدث التقنيات العالمية',
      desc: 'نطور أدواتنا باستمرار لنواكب تحديثات جوجل المتلاحقة وأحدث أطر العمل البرمجية وتقنيات التجارة الإلكترونية.',
    },
    {
      title: 'حلول مخصصة لكل قطاع',
      desc: 'لا نستخدم قوالب مكررة؛ كل مشروع يتم تفصيله بالكامل ليتناسب مع طبيعة السوق والجمهور الخاص بنشاطك.',
    },
  ];

  // القطاعات التي نخدمها
  const industries = [
    {
      name: 'السياحة والسفر والغوص',
      examples: 'منصات حجز الرحلات، الفنادق، ومراكز الغوص',
    },
    {
      name: 'العقارات والمقاولات والإنشاءات',
      examples: 'شركات التطوير العقاري، المظلات، الهناجر، والتشطيبات',
    },
    {
      name: 'المتاجر الإلكترونية والبيع بالتجزئة',
      examples: 'متاجر الأزياء، الإلكترونيات، والأجهزة المنزلية',
    },
    {
      name: 'القطاع الطبي والصيدلاني',
      examples: 'البوابات الطبية، العيادات، ومراكز الرعاية الصحية',
    },
    {
      name: 'الخدمات اللوجستية والنقل',
      examples: 'شركات الشحن، نقل العفش، وخدمات التاكسي والتوصيل',
    },
    {
      name: 'المنصات التعليمية والأكاديميات',
      examples: 'منصات التعليم عن بعد، الأكاديميات، والمدونات المتخصصة',
    },
  ];

  // الأسئلة الشائعة
  const faqs = [
    {
      q: 'ما الذي يميز شركة UNIQUE عن غيرها من شركات التصميم والتسويق؟',
      a: 'نحن نجمع بين الخبرة الطويلة التي تتجاوز 15 عاماً وبين إتقان أحدث التقنيات البرمجية (مثل Next.js) وفهم عميق لخوارزميات محركات البحث (SEO) وإدارة السوشيال ميديا. هذا التكامل يجعلنا نبني لك منظومة رقمية متكاملة تحت سقف واحد دون الحاجة للتشتت بين عدة شركات.',
    },
    {
      q: 'هل المواقع التي تصممونها تكون مهيأة لمحركات البحث (SEO) من البداية؟',
      a: 'بالتأكيد 100%. نحن نعتبر السيو جزءاً أساسياً من هندسة الموقع وليس مجرد إضافة لاحقة. نهتم بسرعة التحميل، هيكلة العناوين (H1-H6)، خصائص الصور والروابط (Alt & Title attributes)، ملفات السايت ماب، وتوافق الموقع التام مع الجوال.',
    },
    {
      q: 'هل تقدمون خدماتكم للعملاء خارج مصر؟',
      a: 'نعم، نفخر بخدمة مئات العملاء والشركات في مصر والمملكة العربية السعودية والكويت والإمارات ومختلف الدول العربية والأوروبية، مع توفير حلول دفع وتواصل مرنة تناسب الجميع.',
    },
    {
      q: 'كيف يتم عرض المشاريع في هذه الصفحة؟',
      a: 'قمنا بتجهيز عرض مرئي متتابع في أعلى الصفحة (Hero Video) يعرض لقطات حية لمجموعة من أقوى المشاريع والمنصات التي قمنا بتنفيذها، كما يمكنك تصفح معرض الأعمال الكامل لزيارة كل موقع بنفسك.',
    },
  ];

  return (
    <main
      className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white overflow-x-hidden"
      dir="rtl"
    >
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-28 px-4 sm:px-6 lg:px-8 border-b border-blue-900/40 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/15 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* النص التعريفي في الهيرو */}
            <div className="lg:col-span-6 space-y-6 text-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-400 text-xs sm:text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(37,99,235,0.25)]">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span>خبرة أكثر من 15 عاماً في الصناعة الرقمية</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                نحن <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">UNIQUE</span>.. القوة الدافعة وراء أنجح المواقع والعلامات التجارية
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
                شركة UNIQUE هي واحدة من أقوى الشركات الرائدة والمتخصصة في تصميم وتطوير المواقع الإلكترونية المتقدمة، تحسين محركات البحث (SEO) وتصدر النتائج الأولى، وإدارة حسابات السوشيال ميديا الاحترافية. على مدار أكثر من 15 سنة، حولنا مئات الأفكار والشركات في مصر والخليج إلى قصص نجاح رقمية تضاعف مبيعاتها يومياً.
              </p>

              {/* نقاط سريعة */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-neutral-900/90 border border-blue-500/30 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-100">تصميم مواقع احترافية</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-neutral-900/90 border border-blue-500/30 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-100">تصدر نتائج البحث SEO</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-neutral-900/90 border border-blue-500/30 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-100">إدارة سوشيال ميديا</span>
                </div>
              </div>

              {/* أزرار الدعوة لاتخاذ إجراء */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/portfolio"
                  title="تصفح سابقة أعمالنا"
                  aria-label="تصفح سابقة أعمالنا"
                  className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] flex items-center gap-2"
                >
                  <span>تصفح سابقة أعمالنا</span>
                  <span>←</span>
                </Link>

                <Link
                  href="/pricing"
                  title="استكشف باقات الأسعار"
                  aria-label="استكشف باقات الأسعار"
                  className="px-7 py-4 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-blue-400 border border-blue-500/40 font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2"
                >
                  <span>باقات الأسعار والعروض</span>
                </Link>
              </div>
            </div>

            {/* مشغل الفيديو */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden bg-neutral-950 border-2 border-blue-500/50 shadow-[0_0_50px_rgba(37,99,235,0.3)] group">
                <div className="bg-neutral-900/95 border-b border-neutral-800 px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="w-3 h-3 rounded-full bg-cyan-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    عرض حي للمشاريع
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
                    title="فيديو استعراض مشاريع شركة يونيك"
                    aria-label="فيديو استعراض مشاريع شركة يونيك"
                    className="w-full h-full object-contain bg-black"
                  >
                    متصفحك لا يدعم تشغيل الفيديو.
                  </video>
                </div>

                <div className="bg-neutral-900/95 border-t border-neutral-800 p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setCurrentVideo(0)}
                      title="تشغيل العرض الأول (about.mp4)"
                      aria-label="تشغيل العرض الأول"
                      className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        currentVideo === 0
                          ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)]'
                          : 'bg-black text-zinc-400 border border-neutral-800 hover:border-blue-500/50 hover:text-white'
                      }`}
                    >
                      العرض الأول
                    </button>

                    <button
                      type="button"
                      onClick={() => setCurrentVideo(1)}
                      title="تشغيل العرض الثاني (aboutus.mp4)"
                      aria-label="تشغيل العرض الثاني"
                      className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        currentVideo === 1
                          ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)]'
                          : 'bg-black text-zinc-400 border border-neutral-800 hover:border-blue-500/50 hover:text-white'
                      }`}
                    >
                      العرض الثاني
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
              من نحن وماذا نقدم؟
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              شريكك التقني والتسويقي المتكامل منذ أكثر من 15 عاماً
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              نجمع بين القوة البرمجية، الخبرة التسويقية، والفهم العميق لسلوك المستهلك لبناء منظومات رقمية تقود السوق.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-blue-500/50 transition-all shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-black text-xl mb-6">
                  01
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">قصتنا وخبرتنا الممتدة</h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  بدأت شركة UNIQUE رحلتها منذ أكثر من 15 عاماً بهدف واحد: تقديم حلول ويب وتسويق رقمي بمعايير عالمية حقيقية. عاصرنا كافة مراحل تطور الإنترنت ومحركات البحث، وطورنا منهجياتنا باستمرار لنضمن لعملائنا الصدارة الدائمة سواء في تصميم المواقع أو الـ SEO أو إدارة السوشيال ميديا.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-blue-400 font-bold">
                أكثر من عقد ونصف من الثقة والنجاح
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-blue-500/40 hover:border-blue-400 transition-all shadow-[0_0_35px_rgba(37,99,235,0.15)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl mb-6 shadow-lg">
                  02
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">رؤيتنا المستقبلية</h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  أن نكون الخيار الأول والشريك الاستراتيجي الموثوق لكل شركة ومؤسسة في الشرق الأوسط تطمح للتحول الرقمي الشامل، والسيطرة على حصتها السوقية عبر مواقع إلكترونية فائقة الأداء وحضور تسويقي لا يقبل المنافسة.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-cyan-400 font-bold">
                نقود التحول الرقمي في مصر والخليج
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-blue-500/50 transition-all shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-black text-xl mb-6">
                  03
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">رسالتنا والتزامنا</h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  تمكين أصحاب الأعمال من مضاعفة أرباحهم ومبيعاتهم عبر حلول تقنية وتسويقية مبنية على البيانات والدراسة الفعلية للسوق، مع الالتزام الكامل بالجودة، السرعة، والأمان في كل سطر كود وكل حملة إعلانية.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-blue-400 font-bold">
                نتائج حقيقية قابلة للقياس والنمو
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase">
              تخصصاتنا الأساسية
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              ثلاثية النجاح الرقمي في شركة UNIQUE
            </h2>
            <p className="text-zinc-400 text-base">
              اضغط على كل تخصص لتتعرف على كيف نصنع الفارق لمشروعك:
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              type="button"
              onClick={() => setActiveTab('web')}
              title="تصميم وتطوير المواقع"
              className={`px-6 py-4 rounded-2xl font-extrabold text-sm sm:text-base transition-all ${
                activeTab === 'web'
                  ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)]'
                  : 'bg-black text-zinc-400 border border-neutral-800 hover:border-blue-500/40 hover:text-white'
              }`}
            >
              1. تصميم وتطوير المواقع الإلكترونية
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('seo')}
              title="تحسين محركات البحث SEO"
              className={`px-6 py-4 rounded-2xl font-extrabold text-sm sm:text-base transition-all ${
                activeTab === 'seo'
                  ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)]'
                  : 'bg-black text-zinc-400 border border-neutral-800 hover:border-blue-500/40 hover:text-white'
              }`}
            >
              2. تحسين محركات البحث (SEO)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('social')}
              title="إدارة السوشيال ميديا"
              className={`px-6 py-4 rounded-2xl font-extrabold text-sm sm:text-base transition-all ${
                activeTab === 'social'
                  ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)]'
                  : 'bg-black text-zinc-400 border border-neutral-800 hover:border-blue-500/40 hover:text-white'
              }`}
            >
              3. إدارة السوشيال ميديا والمحتوى
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
                    title="اطلب استشارة مجانية الآن"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg"
                  >
                    <span>تحدث مع خبرائنا في هذا القسم</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 space-y-4">
                <h4 className="text-lg font-extrabold text-blue-400 border-b border-neutral-800 pb-3">
                  ماذا نضمن لك في هذه الخدمة؟
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
              تاريخنا ومحطات النجاح
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              أكثر من 15 عاماً من التطور المستمر
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
              كيف نعمل؟
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              منهجية هندسية وتسويقية مدروسة
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
              لماذا تختار UNIQUE؟
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              معايير صارمة تضمن تفوقك الرقمي
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
              خبرة متعددة القطاعات
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              قطاعات نجحنا في تطويرها وتصدرها
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
              أسئلة متكررة
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              كل ما تود معرفته عن شركة UNIQUE
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
              هل أنت مستعد لبناء موقعك وتصدر محركات البحث مع UNIQUE؟
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg">
              تواصل معنا اليوم واحصل على استشارة مجانية وخطة عمل مفصلة لتطوير موقعك أو متجرك الإلكتروني ومضاعفة مبيعاتك.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/201270506511"
                target="_blank"
                rel="noopener noreferrer"
                title="تواصل عبر واتساب الآن"
                aria-label="تواصل عبر واتساب الآن"
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base transition-all shadow-xl"
              >
                تواصل معنا عبر واتساب ↗
              </a>
              <Link
                href="/contact"
                title="صفحة اتصل بنا"
                aria-label="صفحة اتصل بنا"
                className="px-8 py-4 rounded-2xl bg-black hover:bg-neutral-900 text-white border border-neutral-700 font-bold text-sm sm:text-base transition-all"
              >
                أرسل تفاصيل مشروعك
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}