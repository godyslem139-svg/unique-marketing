"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export default function AboutSeoSection() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");
  const locale = isEnglish ? "en" : "ar";

  const t: any = locale === "ar" ? ar : en;

  return (
    <section className="relative w-full py-16 px-4 md:px-8 flex items-center justify-center bg-[#000000] overflow-hidden">
      
      <div className="relative w-full max-w-[92rem] rounded-3xl bg-[#0a0a0a] border border-blue-500/40 shadow-[0_0_80px_rgba(30,58,138,0.2)] p-8 md:p-14 overflow-hidden">
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f60a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f60a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className={`w-full lg:w-[58%] flex flex-col ${locale === 'ar' ? 'items-start text-right' : 'items-start text-left'}`}>
            
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/80 border border-blue-500/60 text-blue-400 text-sm md:text-base font-bold mb-6 shadow-[0_0_20px_rgba(30,58,138,0.4)]">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
              {t.AboutSeo?.badge}
            </div>

            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-6 font-normal">
              {t.AboutSeo?.p1}
            </p>

            <div className={`flex items-start gap-4 p-4 rounded-xl bg-black/60 border border-blue-500/30 mb-8 ${locale === 'ar' ? 'border-r-4 border-r-blue-500' : 'border-l-4 border-l-blue-500'}`}>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium">
                {t.AboutSeo?.highlight}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href={isEnglish ? "/en/contact" : "/contact"}
                title={t.AboutSeo?.btnConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-base shadow-[0_0_25px_rgba(30,58,138,0.6)] hover:bg-blue-500 hover:scale-105 transition-all text-center border border-blue-500"
              >
                {t.AboutSeo?.btnConsultation}
              </Link>

              <Link
                href={isEnglish ? "/en/portfolio" : "/portfolio"}
                title={t.AboutSeo?.btnPortfolio}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black/60 border-2 border-blue-500/60 text-blue-400 font-bold text-base hover:bg-blue-600/20 hover:border-blue-500 transition-all text-center backdrop-blur-md shadow-[0_0_15px_rgba(30,58,138,0.3)]"
              >
                {t.AboutSeo?.btnPortfolio}
              </Link>
            </div>

          </div>

          <div className="w-full lg:w-[38%] flex items-center justify-center">
            <div className="relative w-full h-[320px] md:h-[380px] rounded-2xl overflow-hidden border border-blue-500/40 bg-black/80 shadow-[0_0_30px_rgba(30,58,138,0.25)] group flex items-center justify-center">
              <Image
                src="/AboutSeoSection.webp"
                alt="About SEO Section"
                title="About SEO Section"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                priority
              />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}