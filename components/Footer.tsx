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
              <a href="https://www.facebook.com/uniquews?locale=ar_AR" target="_blank" rel="noopener noreferrer" title="Facebook" 
                 className="w-11 h-11 rounded-2xl bg-[#050505] border border-white/10 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-blue-400 flex items-center justify-center transition-all shadow-lg">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/unique.ws_" target="_blank" rel="noopener noreferrer" title="Instagram" 
                 className="w-11 h-11 rounded-2xl bg-[#050505] border border-white/10 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-blue-400 flex items-center justify-center transition-all shadow-lg">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@unique.ws" target="_blank" rel="noopener noreferrer" title="TikTok" 
                 className="w-11 h-11 rounded-2xl bg-[#050505] border border-white/10 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-blue-400 flex items-center justify-center transition-all shadow-lg">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/unique-company-51b146153/" target="_blank" rel="noopener noreferrer" title="LinkedIn" 
                 className="w-11 h-11 rounded-2xl bg-[#050505] border border-white/10 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-blue-400 flex items-center justify-center transition-all shadow-lg">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://www.youtube.com/@unique_ws/shorts" target="_blank" rel="noopener noreferrer" title="YouTube" 
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
              <Link href={isEnglish ? "/en/about" : "/about"} className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md">
                {data.aboutUs}
              </Link>
              <Link href={isEnglish ? "/en/pricing" : "/pricing"} className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md">
                {isEnglish ? "Pricing & Packages" : "الباقات والأسعار"}
              </Link>
              <Link href={isEnglish ? "/en/blog" : "/blog"} className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md">
                {data.blog}
              </Link>
              <Link href={isEnglish ? "/en/portfolio" : "/portfolio"} className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md">
                {data.portfolio}
              </Link>
              <Link href={isEnglish ? "/en/media" : "/media"} className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md">
                {data.media}
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
              <Link href={isEnglish ? "/en/services/seo" : "/services/seo"} className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md block">
                {data.seoService}
              </Link>
              <Link href={isEnglish ? "/en/services/backlinks" : "/services/backlinks"} className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md block">
                {data.backlinks}
              </Link>
              <Link href={isEnglish ? "/en/services/wordpress-nextjs" : "/services/wordpress-nextjs"} className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md block">
                {data.webDesign}
              </Link>
              <Link href={isEnglish ? "/en/services/e-commerce" : "/services/e-commerce"} className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md block">
                {data.ecommerce}
              </Link>
              <Link href={isEnglish ? "/en/services/social-media" : "/services/social-media"} className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md block">
                {data.socialMedia || data["social media"] || (isEnglish ? "Social Media Marketing" : "إدارة وسائل التواصل الاجتماعي")}
              </Link>
              <Link href={isEnglish ? "/en/services/content-writing" : "/services/content-writing"} className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md block">
                {data.contentMarketing || (isEnglish ? "Content Marketing" : "كتابة المحتوى التسويقي")}
              </Link>
              <Link href={isEnglish ? "/en/services/android" : "/services/android"} className="px-6 py-4 rounded-2xl bg-[#050505] border border-white/5 hover:border-blue-500 hover:bg-blue-600/10 text-gray-300 hover:text-white text-center font-medium transition-all shadow-md block sm:col-span-2">
                {data.mobileApps || (isEnglish ? "Mobile Apps Development (Android & iOS)" : "تصميم وتطوير تطبيقات الجوال")}
              </Link>
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