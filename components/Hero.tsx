"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export default function HeroSection() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");
  const locale = isEnglish ? "en" : "ar";

  const t: any = locale === "ar" ? ar : en;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center px-4 md:px-8 py-12 overflow-hidden">
      
      <div className="relative w-full max-w-[95rem] mx-auto rounded-3xl overflow-hidden group shadow-[0_0_100px_rgba(30,58,138,0.3)]">
        
        <div className="relative w-full min-h-[720px] md:min-h-[800px] rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center justify-between p-6 md:p-16">
          
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover filter brightness-50"
          >
            <source src="/hero.mp4" type="video/mp4" />
            متصفحك لا يدعم عرض الفيديو.
          </video>
          
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>

          <div className={`relative z-10 w-full lg:w-[58%] flex flex-col ${locale === 'ar' ? 'items-start text-right' : 'items-start text-left'} mb-8 lg:mb-0`}>
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-blue-500/50 text-blue-400 text-xs md:text-sm font-semibold mb-6 shadow-[0_0_20px_rgba(30,58,138,0.4)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              {t.Hero?.badge}
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight drop-shadow-2xl">
              {t.Hero?.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-600">{t.Hero?.titleHighlight}</span> {t.Hero?.title2}
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-gray-200 max-w-2xl mb-8 font-normal leading-relaxed drop-shadow-xl">
              {t.Hero?.description}
            </p>

            <div className="flex flex-wrap justify-start gap-2 mb-8">
              {t.Hero?.tags?.map((tag: string, idx: number) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-black/60 border border-blue-500/30 text-gray-300 text-xs hover:border-blue-500 hover:text-blue-400 transition cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full">
              
              <Link
                href={isEnglish ? "/en/portfolio" : "/portfolio"}
                title={t.Hero?.exploreServices}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-base shadow-[0_0_25px_rgba(30,58,138,0.6)] hover:shadow-[0_0_35px_rgba(59,130,246,0.9)] hover:scale-105 transition-all duration-300 text-center border border-blue-500"
              >
                {t.Hero?.exploreServices}
              </Link>

              <Link
                href={isEnglish ? "/en/contact" : "/contact"}
                title={t.Hero?.freeConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black/60 border border-blue-500/60 text-blue-400 font-bold text-base hover:bg-blue-600/20 hover:border-blue-500 transition-all duration-300 text-center shadow-[0_0_15px_rgba(30,58,138,0.3)] backdrop-blur-md"
              >
                {t.Hero?.freeConsultation}
              </Link>

            </div>

          </div>

          <div className="relative z-10 w-full lg:w-[38%] flex flex-col gap-6">
            
            <div className="p-5 rounded-2xl bg-black/80 border border-blue-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(30,58,138,0.2)]">
              <div className={`flex justify-between items-center mb-3 ${locale === 'ar' ? '' : 'flex-row-reverse'}`}>
                <span className="text-xs text-blue-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  {t.Hero?.live}
                </span>
                <span className="text-xs text-gray-300">{t.Hero?.campaignPerformance}</span>
              </div>
              <div className={`text-3xl md:text-4xl font-black text-blue-400 mb-3 ${locale === 'ar' ? 'text-left' : 'text-right'}`}>+184%</div>
              <div className={`text-xs text-gray-400 mb-4 ${locale === 'ar' ? 'text-right' : 'text-left'}`}>{t.Hero?.organicGrowth}</div>
              
              <div className={`flex items-center gap-1.5 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`h-2 flex-1 rounded-full ${i < 7 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-black/80 border border-blue-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(30,58,138,0.2)] flex flex-col gap-4">
              <span className={`text-xs font-bold text-gray-300 border-b border-blue-500/20 pb-2 ${locale === 'ar' ? 'text-right' : 'text-left'}`}>{t.Hero?.coreServices}</span>
              
              <div className="flex flex-col gap-1.5">
                <div className={`flex justify-between text-xs text-gray-200 ${locale === 'ar' ? '' : 'flex-row-reverse'}`}>
                  <span className="text-blue-400 font-bold">92%</span>
                  <span>{t.Hero?.ads}</span>
                </div>
                <div className={`w-full h-2 bg-gray-800 rounded-full overflow-hidden flex ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className={`flex justify-between text-xs text-gray-200 ${locale === 'ar' ? '' : 'flex-row-reverse'}`}>
                  <span className="text-blue-400 font-bold">88%</span>
                  <span>{t.Hero?.webDesign}</span>
                </div>
                <div className={`w-full h-2 bg-gray-800 rounded-full overflow-hidden flex ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className={`flex justify-between text-xs text-gray-200 ${locale === 'ar' ? '' : 'flex-row-reverse'}`}>
                  <span className="text-blue-400 font-bold">95%</span>
                  <span>{t.Hero?.socialMedia}</span>
                </div>
                <div className={`w-full h-2 bg-gray-800 rounded-full overflow-hidden flex ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-2xl bg-black/80 border border-blue-500/40 backdrop-blur-md flex items-center justify-between shadow-[0_0_20px_rgba(30,58,138,0.2)] ${locale === 'ar' ? '' : 'flex-row-reverse'}`}>
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-400 text-xl">
                🏆
              </div>
              <div className={locale === 'ar' ? 'text-right' : 'text-left'}>
                <div className="text-2xl font-black text-white">+1,200</div>
                <div className="text-xs text-gray-400">{t.Hero?.completedProjects}</div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}