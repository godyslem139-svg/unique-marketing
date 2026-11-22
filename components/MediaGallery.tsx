"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface VideoItem {
  id: string;
  title: string;
  published?: string;
  views?: string;
  thumbnail: string;
}

const FALLBACK_VIDEOS: VideoItem[] = [
  {
    id: "dQw4w9WgXcQ", 
    title: "كيف تتصدر نتائج البحث في جوجل (SEO) وتحقق مبيعات مضاعفة؟",
    views: "1.2K",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  },
];

export default function MediaGallery() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");
  const locale = isEnglish ? "en" : "ar";

  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [isShortMode, setIsShortMode] = useState(true); // لعرض الـ Shorts بالطول أو بالعرض
  const content = {
    ar: {
      badge: "مكتبة الميديا والفيديوهات",
      title: "شاهد كواليس النجاح ونصائح",
      titleHighlight: "السيو والبرمجة",
      subtitle:
        "مقاطع قصيرة (Shorts) وشروحات عملية من قناة Unique Agency لمساعدتك على تطوير موقعك وتصدر نتائج البحث الأولى.",
      channelBtn: "زيارة قناتنا على يوتيوب",
      watchNow: "تشغيل الفيديو",
      closeBtn: "إغلاق النافذة",
      switchAspect: isShortMode ? "تبديل للوضع العريض (16:9)" : "تبديل لوضع الشورتس (9:16)",
      openInYoutube: "مشاهدة على يوتيوب",
      loadingText: "جاري سحب أحدث الفيديوهات من القناة...",
      emptyText: "لا توجد فيديوهات متاحة حالياً، تفضل بزيارة قناتنا مباشرة.",
      viewsLabel: "مشاهدة",
    },
    en: {
      badge: "Media & Video Hub",
      title: "Watch Our Success Insights &",
      titleHighlight: "SEO & Dev Tips",
      subtitle:
        "Exclusive YouTube Shorts and practical tutorials from Unique Agency to help you scale your website and dominate search rankings.",
      channelBtn: "Visit Our YouTube Channel",
      watchNow: "Play Video",
      closeBtn: "Close Player",
      switchAspect: isShortMode ? "Switch to Widescreen (16:9)" : "Switch to Shorts Mode (9:16)",
      openInYoutube: "Watch on YouTube",
      loadingText: "Fetching latest videos from our channel...",
      emptyText: "No videos available right now. Visit our YouTube channel directly.",
      viewsLabel: "Views",
    },
  }[locale];

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/youtube");
        const data = await res.json();
        if (data.videos && data.videos.length > 0) {
          setVideos(data.videos);
        } else {
          setVideos(FALLBACK_VIDEOS);
        }
      } catch (err) {
        setVideos(FALLBACK_VIDEOS);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      className="relative min-h-screen w-full bg-[#000000] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/40 text-blue-400 text-xs sm:text-sm font-bold mb-6 shadow-[0_0_20px_rgba(30,58,138,0.4)]">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <span>{content.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
            {content.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              {content.titleHighlight}
            </span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
            {content.subtitle}
          </p>

          <a
            href="https://www.youtube.com/@unique_ws/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)]"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z" />
              <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" fill="#000" />
            </svg>
            <span>{content.channelBtn}</span>
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="aspect-[9/16] rounded-3xl bg-[#070b14] border border-blue-500/20 animate-pulse flex flex-col justify-end p-5"
              >
                <div className="w-3/4 h-4 bg-blue-900/30 rounded mb-2" />
                <div className="w-1/2 h-3 bg-blue-900/20 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group cursor-pointer relative aspect-[9/14] rounded-3xl overflow-hidden bg-[#050811] border border-blue-500/30 hover:border-blue-400 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_35px_rgba(37,99,235,0.4)] hover:-translate-y-1.5"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-blue-500/40 text-blue-400 text-xs font-bold">
                    Shorts
                  </span>
                  {video.views && video.views !== "0" && (
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-gray-300 text-xs">
                      {video.views} {content.viewsLabel}
                    </span>
                  )}
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600/90 group-hover:bg-blue-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.8)] group-hover:scale-110 transition-all duration-300 border border-white/20">
                    <svg className="w-7 h-7 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5">
                  <h3 className="text-white font-bold text-sm sm:text-base line-clamp-2 group-hover:text-blue-300 transition-colors">
                    {video.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-semibold mt-2">
                    <span>{content.watchNow}</span>
                    <span>{locale === "ar" ? "←" : "→"}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-4 animate-fadeIn"
          onClick={() => setActiveVideo(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full ${
              isShortMode ? "max-w-[420px]" : "max-w-4xl"
            } bg-[#050811] border-2 border-blue-500/60 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(37,99,235,0.45)] transition-all duration-300`}
          >
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#020409] border-b border-blue-500/30">
              <div className="flex items-center gap-2 truncate">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
                <h4 className="text-white font-bold text-xs sm:text-sm truncate">
                  {activeVideo.title}
                </h4>
              </div>

              <button
                onClick={() => setActiveVideo(null)}
                aria-label={content.closeBtn}
                className="px-3 py-1.5 rounded-xl bg-blue-950/60 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/40 text-xs font-bold transition shrink-0"
              >
                ✕ {content.closeBtn}
              </button>
            </div>

            <div className={`relative w-full ${isShortMode ? "aspect-[9/16]" : "aspect-video"} bg-black`}>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3.5 bg-[#020409] border-t border-blue-500/30 text-xs">
              <button
                onClick={() => setIsShortMode(!isShortMode)}
                className="text-gray-300 hover:text-blue-400 font-semibold transition flex items-center gap-1.5"
              >
                <span>⇄</span>
                <span>{content.switchAspect}</span>
              </button>

              <a
                href={`https://www.youtube.com/shorts/${activeVideo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1"
              >
                <span>{content.openInYoutube}</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}