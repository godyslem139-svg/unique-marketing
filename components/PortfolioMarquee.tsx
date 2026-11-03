'use client';

import Image from "next/image";
import { usePathname } from "next/navigation";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export default function PortfolioMarquee() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith('/en');
  const locale = isEnglish ? 'en' : 'ar';

  const t: any = locale === "ar" ? ar : en;
  
  const rawProjects = t.PortfolioProjects || [];
  const projects = rawProjects.filter((p: any) => p && p.image && p.image.trim() !== "");

  return (
    <section className="relative w-full py-24 bg-[#000000] overflow-hidden" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/80 border border-blue-500/50 text-blue-400 text-sm font-bold mb-6 shadow-[0_0_20px_rgba(30,58,138,0.4)]">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
          {locale === 'ar' ? 'سجل إنجازاتنا الرقمية' : 'Our Digital Achievements'}
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
          {locale === 'ar' ? 'معرض الأعمال والمشاريع المميزة' : 'Our Featured Portfolio & Projects'}
        </h2>

        <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-10 max-w-4xl mx-auto">
          {locale === 'ar' 
            ? 'استعرض نخبة مشاريعنا الناجحة التي قمنا بتطويرها بأحدث التقنيات وتحقيق أعلى عائد بحثي ورهان رقمي لعملائنا.' 
            : 'Explore our selection of successful projects developed with cutting-edge technologies to achieve maximum digital impact.'}
        </p>

        <div className="w-32 h-1 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)] mb-6"></div>

        <h3 className="text-xl md:text-2xl font-bold text-blue-400">
          {locale === 'ar' ? 'نخبة مشاريعنا الناجحة' : 'Successful Projects Showcase'}
        </h3>
      </div>

      <div className="relative z-10 w-full overflow-hidden py-6">
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className={`flex w-max gap-8 hover:[animation-play-state:paused] ${locale === 'ar' ? 'animate-marquee-rtl' : 'animate-marquee'}`}>
          {[...projects, ...projects, ...projects].map((project: any, index: number) => (
            <div
              key={index}
              className="group relative w-[320px] sm:w-[350px] bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl transition-all duration-500 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:-translate-y-2 flex flex-col justify-between flex-shrink-0"
            >
              <div className="relative w-full h-[380px] bg-black flex items-center justify-center p-2">
                <Image
                  src={project.image}
                  alt={`صورة مشروع ${project.title || 'مشروع'}`}
                  title={project.title}
                  fill
                  sizes="350px"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
                
                {project.category && (
                  <span className="absolute top-4 start-4 bg-blue-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg z-10">
                    {project.category}
                  </span>
                )}
              </div>

              <div className="p-6 bg-neutral-900 border-t border-neutral-800 flex flex-col justify-between">
                <h4 className="text-lg font-bold text-white mb-4 group-hover:text-blue-400 transition-colors text-start truncate">
                  {project.title}
                </h4>
                
                <a
                  href={project.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`زيارة موقع ${project.title}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-300 shadow-lg"
                >
                  <span>{locale === 'ar' ? 'زيارة الموقع' : 'Visit Website'}</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333% - 0.66rem)); }
        }
        @keyframes marqueeRtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(33.333% + 0.66rem)); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 45s linear infinite;
        }
        .animate-marquee-rtl {
          display: flex;
          width: max-content;
          animation: marqueeRtl 45s linear infinite;
        }
      `}</style>

    </section>
  );
}