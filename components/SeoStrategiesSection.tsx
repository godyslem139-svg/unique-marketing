'use client';

import { usePathname } from "next/navigation";
import ar from "@/messages/ar.json";
import en from "@/messages/en.json";

export default function SeoTasksSection() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");
  const locale = isEnglish ? "en" : "ar";

  const t: any = locale === "ar" ? ar : en;
  const data = t.SeoTasks;

  if (!data || !data.tasks) {
    return (
      <div className="py-20 text-center text-blue-400 font-bold bg-black w-full min-h-[50vh] flex items-center justify-center">
        جاري تحميل الترجمة... (تأكد من إضافة نصوص SeoTasks في ملفي ar.json و en.json)
      </div>
    );
  }

  const taskIcons = ["🔑", "📝", "⚙️", "🎯", "💡", "🧩", "🖼️", "🔗", "🕸️"];

  return (
    <section className="relative w-full bg-[#000000] py-24 px-4 md:px-8">
      
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/80 border border-blue-500/50 text-blue-400 text-sm font-bold mb-6 shadow-[0_0_20px_rgba(30,58,138,0.4)]">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
          {data.subtitle}
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
          {data.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-600 drop-shadow-[0_0_15px_rgba(30,58,138,0.5)]">{data.titleHighlight}</span>{data.title2}
        </h2>
        
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
          {data.desc1}
        </p>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {data.desc2}
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative pb-32">
        {data.tasks.map((task: any, index: number) => (
          <div
            key={task.id}
            className="sticky top-[100px] w-full min-h-[60vh] md:min-h-[50vh] flex flex-col justify-center rounded-3xl bg-[#0a0a0a] border-t-2 border-blue-500 shadow-[0_-20px_40px_rgba(0,0,0,0.9)] overflow-hidden mb-12 transform transition-all duration-500 hover:scale-[1.01]"
            style={{ zIndex: index + 1 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none"></div>
            
            <div className={`absolute bottom-[-10%] ${locale === 'ar' ? 'left-[-5%]' : 'right-[-5%]' } text-[180px] md:text-[250px] font-black text-white/[0.02] pointer-events-none leading-none select-none`}>
              {task.id}
            </div>

            <div className={`relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-16 ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
              
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-2xl bg-black border border-blue-500/40 flex items-center justify-center text-5xl md:text-6xl shadow-[0_0_30px_rgba(30,58,138,0.2)]">
                {taskIcons[index]}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xl font-black text-blue-400">{task.id}</span>
                  <div className={`w-12 h-[2px] bg-blue-500/50 ${locale === 'ar' ? '' : 'rotate-180'}`}></div>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
                  {task.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-lg leading-relaxed md:leading-loose">
                  {task.desc}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center mt-8 p-8 md:p-12 rounded-3xl bg-black/60 border border-blue-500/30 shadow-[0_0_50px_rgba(30,58,138,0.1)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600/5 pointer-events-none"></div>
        <p className="relative z-10 text-gray-200 text-base md:text-xl leading-relaxed font-medium">
          {data.conclusion1}<span className="text-blue-400 font-bold">{data.conclusionHighlight}</span>{data.conclusion2}
          <br /><br />
          {data.conclusion3}
        </p>
      </div>

    </section>
  );
}