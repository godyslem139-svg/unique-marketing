"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface ContactAgent {
  id: string;
  displayPhone: string;
  intlPhone: string;
  titleAr: string;
  titleEn: string;
  roleAr: string;
  roleEn: string;
  badgeAr: string;
  badgeEn: string;
}

const WHATSAPP_AGENTS: ContactAgent[] = [
  {
    id: "sales-primary",
    displayPhone: "01270506511",
    intlPhone: "201270506511",
    titleAr: "فريق المبيعات والاستشارات",
    titleEn: "Sales & Strategy Team",
    roleAr: "عروض الأسعار • خطط السيو • تصميم المواقع",
    roleEn: "Quotes • SEO Plans • Web Development",
    badgeAr: "متاح الآن",
    badgeEn: "Online",
  },
  {
    id: "support-secondary",
    displayPhone: "01202987700",
    intlPhone: "201202987700",
    titleAr: "خدمة العملاء ومتابعة المشاريع",
    titleEn: "Client Success & Support",
    roleAr: "استفسارات سريعة • فحص مجاني • دعم فني",
    roleEn: "Quick Inquiries • Free Audit • Support",
    badgeAr: "رد سريع",
    badgeEn: "Fast Reply",
  },
];

const QUICK_TOPICS = [
  {
    id: "seo",
    labelAr: "خدمات السيو (SEO)",
    labelEn: "SEO Services",
    msgAr: "مرحباً UNIQUE، أريد الاستفسار عن خدمات تحسين محركات البحث (SEO).",
    msgEn: "Hello UNIQUE, I would like to inquire about your SEO services.",
  },
  {
    id: "web",
    labelAr: "تصميم موقع / متجر",
    labelEn: "Web / Store Design",
    msgAr: "مرحباً UNIQUE، أريد عرض سعر لتصميم موقع أو متجر إلكتروني.",
    msgEn: "Hello UNIQUE, I would like a quote for a website or e-commerce store.",
  },
  {
    id: "audit",
    labelAr: "فحص مجاني لموقعي",
    labelEn: "Free Site Audit",
    msgAr: "مرحباً UNIQUE، أرغب في الحصول على فحص مجاني لموقعي الإلكتروني.",
    msgEn: "Hello UNIQUE, I would like a free audit for my website.",
  },
];

function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.004 3.2C8.938 3.2 3.2 8.938 3.2 16.004c0 2.256.589 4.458 1.707 6.398L3.1 28.9l6.663-1.747a12.75 12.75 0 0 0 6.24 1.635h.005c7.063 0 12.802-5.74 12.802-12.784 0-3.416-1.33-6.628-3.744-9.043A12.72 12.72 0 0 0 16.004 3.2Zm0 23.428h-.004a10.61 10.61 0 0 1-5.411-1.482l-.388-.23-3.954 1.037 1.055-3.854-.253-.402a10.576 10.576 0 0 1-1.622-5.663c0-5.853 4.763-10.616 10.621-10.616 2.836 0 5.502 1.105 7.506 3.11a10.553 10.553 0 0 1 3.106 7.51c0 5.855-4.764 10.61-10.656 10.61Zm5.826-7.953c-.32-.16-1.889-.932-2.182-1.038-.293-.107-.506-.16-.719.16-.213.32-.825 1.038-1.012 1.251-.186.213-.373.24-.692.08-.32-.16-1.348-.497-2.568-1.585-.949-.846-1.59-1.891-1.776-2.211-.187-.32-.02-.493.14-.652.144-.143.32-.373.479-.559.16-.187.213-.32.32-.533.106-.213.053-.4-.027-.56-.08-.16-.719-1.732-.985-2.371-.26-.623-.523-.538-.719-.548l-.613-.011c-.213 0-.559.08-.852.4-.293.32-1.118 1.092-1.118 2.664s1.145 3.09 1.305 3.303c.16.213 2.253 3.44 5.458 4.823.762.329 1.357.526 1.821.673.765.243 1.462.209 2.012.127.614-.092 1.889-.772 2.156-1.518.266-.746.266-1.385.186-1.518-.08-.133-.293-.213-.612-.373Z" />
    </svg>
  );
}

function CloseIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function SendArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const pathname = usePathname() || "/";
  const isEn = pathname.startsWith("/en");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState<string>("seo");
  const [showHint, setShowHint] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const currentTopic =
    QUICK_TOPICS.find((t) => t.id === selectedTopicId) || QUICK_TOPICS[0];

  const buildWhatsAppLink = (intlPhone: string) => {
    const baseMsg = isEn ? currentTopic.msgEn : currentTopic.msgAr;
    const pageTag = isEn
      ? `\n(Page: https://www.uniquee-ws.com${pathname})`
      : `\n(من صفحة: https://www.uniquee-ws.com${pathname})`;
    return `https://wa.me/${intlPhone}?text=${encodeURIComponent(
      `${baseMsg}${pageTag}`
    )}`;
  };

  return (
    <div
      dir={isEn ? "ltr" : "rtl"}
      className={`fixed bottom-5 sm:bottom-6 z-[9999] flex flex-col ${
        isEn ? "right-5 sm:right-6 items-end" : "left-5 sm:left-6 items-start"
      }`}
    >
      {isOpen && (
        <div
          role="dialog"
          aria-label={isEn ? "WhatsApp Concierge" : "تواصل معنا عبر واتساب"}
          className="mb-3.5 w-[320px] sm:w-[355px] overflow-hidden rounded-3xl border border-emerald-500/30 bg-[#060A13]/95 shadow-[0_20px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(16,185,129,0.14)] backdrop-blur-xl transition-all"
        >
          <div className="relative bg-gradient-to-br from-[#071A17] via-[#07131D] to-[#060B16] px-5 py-4 border-b border-neutral-800/90">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25">
                  <WhatsAppIcon className="w-6 h-6" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#07131D] bg-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-black text-white tracking-tight">
                    UNIQUE <span className="text-emerald-400">WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-300 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>
                      {isEn
                        ? "Online now • Replies in minutes"
                        : "متاحون الآن • نرد خلال دقائق"}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label={isEn ? "Close" : "إغلاق"}
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-800 bg-black/40 text-neutral-400 hover:border-cyan-500/40 hover:text-white transition"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="px-4 pt-4 pb-2">
            <div className="text-[11px] font-bold text-neutral-400 mb-2">
              {isEn ? "What can we help you with?" : "كيف يمكننا مساعدتك اليوم؟"}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {QUICK_TOPICS.map((topic) => {
                const active = topic.id === selectedTopicId;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => setSelectedTopicId(topic.id)}
                    className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold border transition ${
                      active
                        ? "bg-emerald-500/15 border-emerald-400/50 text-emerald-300"
                        : "bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200"
                    }`}
                  >
                    {isEn ? topic.labelEn : topic.labelAr}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 space-y-2.5">
            {WHATSAPP_AGENTS.map((agent) => (
              <a
                key={agent.id}
                href={buildWhatsAppLink(agent.intlPhone)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-2xl border border-neutral-800/90 bg-neutral-950/90 p-3.5 hover:border-emerald-500/50 hover:bg-[#081617] transition"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/12 border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold text-white truncate">
                        {isEn ? agent.titleEn : agent.titleAr}
                      </span>
                      <span className="shrink-0 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                        {isEn ? agent.badgeEn : agent.badgeAr}
                      </span>
                    </div>
                    <div className="text-[11px] text-neutral-400 truncate mt-0.5">
                      {isEn ? agent.roleEn : agent.roleAr}
                    </div>
                    <div
                      dir="ltr"
                      className="text-xs font-mono font-bold text-cyan-300 mt-1"
                    >
                      {agent.displayPhone}
                    </div>
                  </div>
                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:border-emerald-400/50 group-hover:text-emerald-300 transition">
                  <SendArrowIcon className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>

          <div className="border-t border-neutral-900 bg-black/50 px-4 py-2.5 text-center text-[10px] text-neutral-500">
            {isEn
              ? "Direct encrypted chat via official WhatsApp"
              : "تواصل مباشر وسريع عبر واتساب الرسمي لـ UNIQUE"}
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        {!isOpen && showHint && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-[#070D17]/95 px-4 py-2.5 text-xs font-bold text-white shadow-xl shadow-black/60 backdrop-blur-md hover:border-emerald-400/60 transition"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {isEn ? "Chat on WhatsApp" : "تواصل معنا عبر واتساب"}
            </span>
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isEn ? "Open WhatsApp Chat" : "فتح محادثة واتساب"}
          className="group relative flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 text-white shadow-[0_10px_35px_rgba(16,185,129,0.45)] hover:scale-105 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
        >
          {!isOpen && (
            <span className="pointer-events-none absolute inset-0 rounded-full bg-emerald-400/35 animate-ping" />
          )}

          <span className="relative z-10 flex items-center justify-center">
            {isOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <WhatsAppIcon className="w-7 h-7" />
            )}
          </span>

          {!isOpen && (
            <span className="absolute top-0.5 right-0.5 z-20 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}