'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");
  const locale = isEnglish ? "en" : "ar";

  const t: any = locale === "ar" ? ar : en;
  const data = t.Footer;

  if (!data) return null;

  return (
    <footer className="relative w-full bg-[#000000] pt-20 pb-10 px-4 md:px-8 border-t border-blue-600/30 font-sans overflow-hidden" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-16 border-b border-white/10">
          
          <div className="flex items-center gap-5 max-w-lg">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-[#000000] flex items-center justify-center shadow-[0_0_25px_rgba(30,58,138,0.7)] shrink-0 border border-blue-500/40">
              <Image
                src="/logo.webp"
                alt="Unique Agency Logo"
                title="Unique Agency Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wider mb-1">
                {data.agencyName} <span className="text-blue-500">.</span>
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {data.agencyDesc}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            
            <a 
              href={`mailto:${data.email}`}
              className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#050505] border border-white/10 hover:border-blue-500 text-gray-300 hover:text-white text-xs sm:text-sm transition-all shadow-lg"
            >
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span>{data.email}</span>
            </a>

            <a 
              href="https://wa.me/201270506511" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#050505] border border-white/10 hover:border-blue-500 text-gray-300 hover:text-white text-xs sm:text-sm transition-all shadow-lg font-mono dir-ltr"
            >
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <span>{data.phone}</span>
            </a>

            <div className="flex items-center gap-2.5">
              <a href="https://www.facebook.com/uniquews" target="_blank" rel="noopener noreferrer" title="Facebook" 
                 className="w-11 h-11 rounded-2xl bg-[#050505] border border-white/10 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-blue-400 flex items-center justify-center transition-all shadow-lg">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="http://linkedin.com/in/ghada-salem-51b146153" target="_blank" rel="noopener noreferrer" title="LinkedIn" 
                 className="w-11 h-11 rounded-2xl bg-[#050505] border border-white/10 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-blue-400 flex items-center justify-center transition-all shadow-lg">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://www.youtube.com/@alwaleedhost3388" target="_blank" rel="noopener noreferrer" title="YouTube" 
                 className="w-11 h-11 rounded-2xl bg-[#050505] border border-white/10 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-blue-400 flex items-center justify-center transition-all shadow-lg">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z"></path><path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"></path></svg>
              </a>
            </div>

          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-16">
          
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              {data.quickLinksTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href={isEnglish ? "/en" : "/"} className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md">
                {data.aboutUs}
              </Link>
              <Link href={isEnglish ? "/en/blog" : "/blog"} className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md">
                {data.services}
              </Link>
              <Link href={isEnglish ? "/en/portfolio" : "/portfolio"} className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md">
                {data.portfolio}
              </Link>
              <Link href={isEnglish ? "/en/contact" : "/contact"} className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md">
                {data.contactUs}
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              {data.servicesTitle}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 text-gray-300 text-center font-medium shadow-md">
                {data.seoService}
              </div>
              <div className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 text-gray-300 text-center font-medium shadow-md">
                {data.backlinks}
              </div>
              <div className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 text-gray-300 text-center font-medium shadow-md">
                {data.webDesign}
              </div>
              <div className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 text-gray-300 text-center font-medium shadow-md">
                {data.ecommerce}
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          {data.rights}
        </div>

      </div>
    </footer>
  );
}