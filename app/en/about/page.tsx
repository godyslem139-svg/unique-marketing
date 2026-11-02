'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AboutPageEn() {
  const [currentVideo, setCurrentVideo] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'seo' | 'web' | 'social'>('web');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videos = ['/about.mp4', '/aboutus.mp4'];

  // Auto-replay video when switching between the two showcases
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Bypass autoplay restrictions if any
      });
    }
  }, [currentVideo]);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  // Company Statistics
  const stats = [
    {
      number: '+15',
      label: 'Years of Experience & Leadership',
      desc: 'A track record of digital success since 2011',
    },
    {
      number: '+850',
      label: 'Completed Web Projects',
      desc: 'Corporate sites, e-commerce stores & custom platforms',
    },
    {
      number: '+1,200',
      label: 'Top Ranked Keywords',
      desc: 'Dominating first-page Google search results',
    },
    {
      number: '99%',
      label: 'Client Retention & Satisfaction',
      desc: 'Long-term strategic partnerships & 24/7 support',
    },
  ];

  // Core Pillars & Specializations
  const pillars = {
    web: {
      badge: 'Web & E-Commerce Development',
      title: 'Modern Software Engineering & Conversion-Focused Design',
      description:
        'At UNIQUE, we do not just build standard web pages; we engineer ultra-fast, secure digital assets. Utilizing cutting-edge technologies like Next.js, React, TypeScript, and Headless E-Commerce alongside custom WordPress and Shopify solutions, we ensure your platform outperforms competitors in speed and UX.',
      points: [
        'Ultra-fast loading speeds passing Core Web Vitals at 100%',
        'Fully responsive Mobile-First UI with native RTL/LTR bilingual support',
        'Clean, secure code architecture with seamless payment & shipping integrations',
        'Intuitive dashboards for effortless content, inventory, and order management',
      ],
    },
    seo: {
      badge: 'Search Engine Optimization (SEO)',
      title: 'Dominating Google First Page & Multiplying Targeted Traffic',
      description:
        'Our 15+ years of deep expertise in search engine algorithms gives our clients an unfair competitive advantage. We execute holistic SEO strategies covering deep Technical SEO audits, Schema Markup, high-intent keyword mapping, and authoritative backlink acquisition.',
      points: [
        'Comprehensive competitor analysis and market gap exploitation',
        'Precision On-Page & Technical SEO optimization',
        'E-E-A-T compliant SEO content writing that converts readers into buyers',
        'Transparent monthly reporting tracking clicks, impressions, and keyword ranks',
      ],
    },
    social: {
      badge: 'Social Media & Content Management',
      title: 'Crafting Powerful Digital Presence & Authentic Brand Loyalty',
      description:
        'We transform your social media channels into active 24/7 sales and engagement engines. Our creative team handles strategic planning, copywriting, graphic design, viral Reels production, and high-ROAS paid advertising campaigns.',
      points: [
        'Tailored monthly content calendars for Egyptian and GCC audiences',
        'Eye-catching visual designs and high-retention Reels videos',
        'Proactive community management turning followers into paying customers',
        'Data-driven ad campaign management across Meta, TikTok, Snapchat & Google',
      ],
    },
  };

  // Company Timeline (15+ Years)
  const timeline = [
    {
      year: '2011',
      title: 'Founding of UNIQUE Digital Agency',
      desc: 'Founded with a clear vision to deliver professional web development and reliable hosting solutions for emerging businesses.',
    },
    {
      year: '2015',
      title: 'Expansion into SEO & Digital Marketing',
      desc: 'Launched a dedicated SEO and Social Media division after achieving record-breaking organic growth for hundreds of clients.',
    },
    {
      year: '2019',
      title: 'Regional Expansion Across GCC Markets',
      desc: 'Established strong partnerships and delivered major projects across Saudi Arabia, Kuwait, and the UAE in tourism, real estate, and construction.',
    },
    {
      year: '2023',
      title: 'Adopting Next-Gen Web Stacks (Next.js & Headless)',
      desc: 'Full transition to engineering ultra-fast web applications and headless e-commerce stores using modern global architectures.',
    },
    {
      year: '2026',
      title: '15+ Years of Leadership & Continuous Innovation',
      desc: 'Continuing our leadership as a premier full-service digital agency, integrating AI-driven workflows and advanced SEO/GEO strategies.',
    },
  ];

  // Execution Workflow
  const workflow = [
    {
      step: '01',
      title: 'Discovery & Strategic Analysis',
      desc: 'We analyze your business model, target audience, and competitors to formulate a precise, data-backed action plan.',
    },
    {
      step: '02',
      title: 'Wireframing & UI/UX Architecture',
      desc: 'We craft modern interfaces and intuitive user journeys that maximize engagement and drive conversion actions.',
    },
    {
      step: '03',
      title: 'Development & Full SEO Integration',
      desc: 'Writing clean, scalable code while embedding Technical and On-Page SEO best practices from day one.',
    },
    {
      step: '04',
      title: 'Launch, Management & Scaling',
      desc: 'Post-launch, we drive continuous growth through active social media management, link building, and performance scaling.',
    },
  ];

  // Core Values
  const coreValues = [
    {
      title: 'Absolute Transparency',
      desc: 'We treat clients as partners, providing crystal-clear reports and real metrics without unrealistic promises.',
    },
    {
      title: 'Uncompromising Quality',
      desc: 'We obsess over every detail—from code cleanliness and site speed to visual polish and keyword precision.',
    },
    {
      title: 'ROI-Driven Execution',
      desc: 'Our ultimate goal is not just delivering a pretty website, but generating leads, sales, and measurable ROI.',
    },
    {
      title: 'Timely Delivery & 24/7 Support',
      desc: 'We respect deadlines and provide dedicated technical support ready to assist you whenever needed.',
    },
    {
      title: 'Continuous Technological Innovation',
      desc: 'We constantly upgrade our stack to stay ahead of Google algorithm updates and modern web standards.',
    },
    {
      title: 'Tailored Industry Solutions',
      desc: 'No cookie-cutter templates; every strategy and platform is custom-engineered for your specific industry.',
    },
  ];

  // Industries We Serve
  const industries = [
    {
      name: 'Tourism, Travel & Diving',
      examples: 'Tour booking platforms, hotels & diving centers',
    },
    {
      name: 'Real Estate & Construction',
      examples: 'Property developers, steel structures & contracting firms',
    },
    {
      name: 'E-Commerce & Retail',
      examples: 'Fashion boutiques, electronics & home appliances stores',
    },
    {
      name: 'Medical & Pharmaceutical',
      examples: 'Medical portals, clinics & healthcare directories',
    },
    {
      name: 'Logistics & Transportation',
      examples: 'Moving companies, freight & taxi booking services',
    },
    {
      name: 'Education & E-Learning',
      examples: 'Online academies, LMS platforms & niche blogs',
    },
  ];

  // FAQs
  const faqs = [
    {
      q: 'What sets UNIQUE apart from other web and marketing agencies?',
      a: 'We combine 15+ years of market experience with modern software engineering (Next.js), deep Technical SEO mastery, and creative social media management—giving you a complete digital growth ecosystem under one roof.',
    },
    {
      q: 'Are the websites you build SEO-optimized from the ground up?',
      a: 'Absolutely 100%. SEO is baked into our code architecture from day one—covering ultra-fast load times, semantic heading structures, full image/link attributes, sitemaps, and mobile-first indexing.',
    },
    {
      q: 'Do you serve clients outside of Egypt?',
      a: 'Yes, we proudly serve hundreds of clients across Egypt, Saudi Arabia, Kuwait, the UAE, and globally, offering flexible communication and payment options.',
    },
    {
      q: 'How are your projects showcased on this page?',
      a: 'We feature a continuous dual-video showcase right in the hero section highlighting live projects we have built, and you can also visit our full Portfolio page to explore each live website.',
    },
  ];

  return (
    <main
      className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white overflow-x-hidden"
      dir="ltr"
    >
      {/* ==================== 1. Hero Section with Dual Video Showcase ==================== */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-28 px-4 sm:px-6 lg:px-8 border-b border-blue-900/40 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/15 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-400 text-xs sm:text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(37,99,235,0.25)]">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span>Over 15 Years of Digital Industry Excellence</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">UNIQUE</span>.. The Force Behind Top Websites & Brands
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
                UNIQUE is one of the strongest pioneering agencies specialized in advanced web design & development, Search Engine Optimization (SEO), and professional social media management. For over 15 years, we have transformed hundreds of businesses across Egypt and the GCC into dominant digital success stories.
              </p>

              {/* Quick Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-neutral-900/90 border border-blue-500/30 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-100">Custom Web Design</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-neutral-900/90 border border-blue-500/30 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-100">Top Google SEO</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-neutral-900/90 border border-blue-500/30 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-100">Social Media Growth</span>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/en/portfolio"
                  title="Explore Our Portfolio"
                  aria-label="Explore Our Portfolio"
                  className="px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] flex items-center gap-2"
                >
                  <span>Explore Our Portfolio</span>
                  <span>→</span>
                </Link>

                <Link
                  href="/en/pricing"
                  title="View Pricing Packages"
                  aria-label="View Pricing Packages"
                  className="px-7 py-4 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-blue-400 border border-blue-500/40 font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2"
                >
                  <span>Pricing & Packages</span>
                </Link>
              </div>
            </div>

            {/* Video Player */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden bg-neutral-950 border-2 border-blue-500/50 shadow-[0_0_50px_rgba(37,99,235,0.3)] group">
                <div className="bg-neutral-900/95 border-b border-neutral-800 px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="w-3 h-3 rounded-full bg-cyan-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    Live Projects Showcase
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
                    title="UNIQUE Agency Projects Showcase Video"
                    aria-label="UNIQUE Agency Projects Showcase Video"
                    className="w-full h-full object-contain bg-black"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="bg-neutral-900/95 border-t border-neutral-800 p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setCurrentVideo(0)}
                      title="Play Showcase 1 (about.mp4)"
                      aria-label="Play Showcase 1"
                      className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        currentVideo === 0
                          ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)]'
                          : 'bg-black text-zinc-400 border border-neutral-800 hover:border-blue-500/50 hover:text-white'
                      }`}
                    >
                      Showcase 1
                    </button>

                    <button
                      type="button"
                      onClick={() => setCurrentVideo(1)}
                      title="Play Showcase 2 (aboutus.mp4)"
                      aria-label="Play Showcase 2"
                      className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        currentVideo === 1
                          ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)]'
                          : 'bg-black text-zinc-400 border border-neutral-800 hover:border-blue-500/50 hover:text-white'
                      }`}
                    >
                      Showcase 2
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 2. Statistics ==================== */}
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

      {/* ==================== 3. Who We Are & Vision ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase tracking-wider">
              Who We Are & What We Do
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Your Full-Stack Technical & Marketing Partner For 15+ Years
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Combining software engineering power, marketing mastery, and consumer psychology to build market-leading digital ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-blue-500/50 transition-all shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-black text-xl mb-6">
                  01
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">Our Story & 15-Year Legacy</h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  UNIQUE began its journey over 15 years ago with a single mission: delivering world-class web and digital marketing solutions. Having evolved alongside the internet and search engines, we continuously refine our methodologies to keep our clients at the very top.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-blue-400 font-bold">
                Over a decade and a half of proven trust
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-blue-500/40 hover:border-blue-400 transition-all shadow-[0_0_35px_rgba(37,99,235,0.15)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl mb-6 shadow-lg">
                  02
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">Our Vision</h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  To be the premier strategic partner for businesses across the Middle East seeking complete digital transformation, market dominance, ultra-fast web platforms, and unbeatable search & social visibility.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-cyan-400 font-bold">
                Leading digital transformation in MENA
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-blue-500/50 transition-all shadow-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-black text-xl mb-6">
                  03
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-4">Our Mission & Commitment</h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Empowering business owners to multiply their revenue through data-driven engineering and marketing solutions, with an unwavering commitment to speed, security, and measurable ROI.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-blue-400 font-bold">
                Real, measurable, and scalable results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. Core Specializations ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase">
              Our Core Specializations
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              The Digital Success Trilogy at UNIQUE
            </h2>
            <p className="text-zinc-400 text-base">
              Select each specialization to discover how we create a competitive edge for your business:
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              type="button"
              onClick={() => setActiveTab('web')}
              title="Web Design & Development"
              className={`px-6 py-4 rounded-2xl font-extrabold text-sm sm:text-base transition-all ${
                activeTab === 'web'
                  ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)]'
                  : 'bg-black text-zinc-400 border border-neutral-800 hover:border-blue-500/40 hover:text-white'
              }`}
            >
              1. Web Design & Development
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('seo')}
              title="Search Engine Optimization (SEO)"
              className={`px-6 py-4 rounded-2xl font-extrabold text-sm sm:text-base transition-all ${
                activeTab === 'seo'
                  ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)]'
                  : 'bg-black text-zinc-400 border border-neutral-800 hover:border-blue-500/40 hover:text-white'
              }`}
            >
              2. Search Engine Optimization (SEO)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('social')}
              title="Social Media Management"
              className={`px-6 py-4 rounded-2xl font-extrabold text-sm sm:text-base transition-all ${
                activeTab === 'social'
                  ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.5)]'
                  : 'bg-black text-zinc-400 border border-neutral-800 hover:border-blue-500/40 hover:text-white'
              }`}
            >
              3. Social Media Management
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
                    href="/en/contact"
                    title="Request a Free Consultation"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg"
                  >
                    <span>Consult Our Experts in This Division</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 space-y-4">
                <h4 className="text-lg font-extrabold text-blue-400 border-b border-neutral-800 pb-3">
                  What Do We Guarantee?
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

      {/* ==================== 5. Journey & Milestones ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase">
              Our Journey & Milestones
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              15+ Years of Relentless Evolution
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

      {/* ==================== 6. How We Work ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Our Proven 4-Step Execution Methodology
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

      {/* ==================== 7. Core Values ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase">
              Why Choose UNIQUE?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Core Values That Guarantee Your Digital Edge
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

      {/* ==================== 8. Industries ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase">
              Cross-Industry Expertise
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Industries We Have Scaled & Dominated
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

      {/* ==================== 9. FAQs ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Everything You Need to Know About UNIQUE
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

      {/* ==================== 10. CTA Section ==================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-950 via-neutral-900 to-blue-950 border border-blue-500/40 p-10 sm:p-16 text-center relative overflow-hidden shadow-[0_0_60px_rgba(37,99,235,0.25)]">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Ready to Build Your Website & Dominate Search Results with UNIQUE?
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg">
              Contact us today for a free consultation and a tailored action plan to scale your website, SEO, and social media.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/201270506511"
                target="_blank"
                rel="noopener noreferrer"
                title="Contact via WhatsApp Now"
                aria-label="Contact via WhatsApp Now"
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base transition-all shadow-xl"
              >
                Chat on WhatsApp Now ↗
              </a>
              <Link
                href="/en/contact"
                title="Contact Us Page"
                aria-label="Contact Us Page"
                className="px-8 py-4 rounded-2xl bg-black hover:bg-neutral-900 text-white border border-neutral-700 font-bold text-sm sm:text-base transition-all"
              >
                Send Project Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}