'use client'

import React from 'react'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { urlFor } from '@/sanity/lib/image'

const portableTextComponents = {
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl md:text-5xl font-black text-white mt-10 mb-6 tracking-tight text-start">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-8 mb-4 tracking-tight border-b border-neutral-800 pb-3 text-start">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl md:text-2xl font-bold text-blue-400 mt-6 mb-3 text-start">{children}</h3>,
    normal: ({ children }: any) => <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 text-start">{children}</p>,
  },
  marks: {
    code: ({ children }: any) => (
      <code dir="ltr" className="bg-neutral-800 text-blue-300 px-2 py-0.5 rounded-md font-mono text-sm mx-1 inline-block border border-neutral-700">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside space-y-3 mb-6 text-gray-300 text-start ps-4">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-300 text-start ps-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-relaxed text-start"><span className="text-blue-400 font-bold ms-2 me-2">•</span>{children}</li>,
  },
  types: {
    codeBlock: ({ value }: any) => {
      if (!value?.code) return null
      return (
        <div dir="ltr" className="my-8 rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl text-left">
          <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            <span className="text-xs font-mono uppercase text-blue-400 font-bold">
              {value.language || 'CODE'}
            </span>
          </div>
          <pre className="p-5 overflow-x-auto text-sm md:text-base font-mono text-gray-200 leading-relaxed">
            <code>{value.code}</code>
          </pre>
        </div>
      )
    },

    customTable: ({ value }: any) => {
      const headers = value?.headers || []
      const rows = value?.rows || []
      if (headers.length === 0 && rows.length === 0) return null

      return (
        <div className="my-8 overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-950/60 shadow-xl">
          <table className="w-full border-collapse text-start text-sm md:text-base">
            {headers.length > 0 && (
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-900/90 text-white">
                  {headers.map((header: string, i: number) => (
                    <th key={i} className="p-4 font-extrabold text-start whitespace-nowrap text-blue-400">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody className="divide-y divide-neutral-800/70">
              {rows.map((row: any, rIdx: number) => (
                <tr key={rIdx} className="hover:bg-neutral-900/40 transition">
                  {row.cells?.map((cell: string, cIdx: number) => (
                    <td key={cIdx} className={`p-4 text-gray-300 leading-relaxed align-top ${cIdx === 0 ? 'font-bold text-white' : ''}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default function DynamicPageClient({ page }: { page: any }) {
  const pathname = usePathname()
  const isEnglish = pathname?.startsWith('/en')
  const lang = isEnglish ? 'en' : 'ar'

  return (
    <div className={`w-full text-white ${lang === 'ar' ? 'rtl' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      <div className="w-full space-y-12 pb-16">
        {page.sections?.map((section: any, index: number) => {
          switch (section._type) {
            
            // 1. قسم كود HTML الحر (مع فلترة الاستايلات الخارجية وتوحيدها مع Dark Mode الموقع)
            case 'rawHtmlSection': {
              const hasEn = Boolean(section.htmlEn?.trim())
              const htmlContent = isEnglish ? (hasEn ? section.htmlEn : section.htmlAr) : (section.htmlAr || section.htmlEn)
              // إذا كنا في الصفحة الإنجليزية ولم يضع المستخدم كود إنجليزي بعد، نعرض الكود العربي باتجاه RTL حتى لا يتشقلب
              const contentDir = isEnglish && !hasEn ? 'rtl' : (lang === 'ar' ? 'rtl' : 'ltr')

              if (!htmlContent) return null

              // إزالة أي وسوم <style> خارجية داخل الـ HTML تسبب تدمير ألوان الموقع أو القائمة الجانبية
              const cleanHtml = htmlContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')

              return (
                <section key={index} dir={contentDir} className="w-full py-4">
                  <div 
                    className="unique-dark-article w-full text-start leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: cleanHtml }}
                  />
                  <style jsx global>{`
                    /* توحيد تصميم مقالات الـ HTML مع الهوية البصرية السوداء للموقع */
                    .unique-dark-article,
                    .unique-dark-article section,
                    .unique-dark-article article,
                    .unique-dark-article div {
                      background-color: transparent !important;
                      color: #e5e5e5 !important;
                    }
                    .unique-dark-article h1 {
                      font-size: 2rem;
                      font-weight: 900;
                      color: #ffffff !important;
                      margin: 2rem 0 1.25rem;
                      line-height: 1.3;
                    }
                    .unique-dark-article h2 {
                      font-size: 1.65rem;
                      font-weight: 800;
                      color: #ffffff !important;
                      margin: 2.5rem 0 1rem;
                      padding-bottom: 0.75rem;
                      border-bottom: 1px solid #262626 !important;
                    }
                    .unique-dark-article h3,
                    .unique-dark-article h4 {
                      font-size: 1.25rem;
                      font-weight: 700;
                      color: #60a5fa !important;
                      margin: 1.5rem 0 0.75rem;
                    }
                    .unique-dark-article p {
                      color: #d4d4d4 !important;
                      font-size: 1.05rem;
                      line-height: 1.85;
                      margin-bottom: 1.25rem;
                    }
                    .unique-dark-article ul,
                    .unique-dark-article ol {
                      margin: 1rem 0 1.5rem;
                      padding-inline-start: 1.5rem;
                      color: #d4d4d4 !important;
                    }
                    .unique-dark-article li {
                      margin-bottom: 0.75rem;
                      line-height: 1.8;
                      color: #d4d4d4 !important;
                    }
                    .unique-dark-article strong,
                    .unique-dark-article b {
                      color: #ffffff !important;
                      font-weight: 800;
                    }
                    .unique-dark-article a {
                      color: #60a5fa !important;
                      text-decoration: none;
                      transition: color 0.2s;
                    }
                    .unique-dark-article a:hover {
                      color: #93c5fd !important;
                      text-decoration: underline;
                    }
                    /* تنسيق الجداول الاحترافي في الوضع الليلي */
                    .unique-dark-article table {
                      width: 100%;
                      border-collapse: collapse;
                      margin: 2rem 0;
                      background-color: #0a0a0a !important;
                      border: 1px solid #262626 !important;
                      border-radius: 1rem;
                      overflow: hidden;
                    }
                    .unique-dark-article thead,
                    .unique-dark-article tr {
                      background-color: transparent !important;
                    }
                    .unique-dark-article th {
                      background-color: #141414 !important;
                      color: #60a5fa !important;
                      font-weight: 800;
                      padding: 1rem;
                      border-bottom: 1px solid #262626 !important;
                      text-align: start;
                    }
                    .unique-dark-article td {
                      background-color: #0a0a0a !important;
                      padding: 1rem;
                      border-bottom: 1px solid #1f1f1f !important;
                      color: #d4d4d4 !important;
                      vertical-align: top;
                      line-height: 1.7;
                    }
                    .unique-dark-article tr:nth-child(even) td {
                      background-color: #111111 !important;
                    }
                    .unique-dark-article tr:hover td {
                      background-color: #171717 !important;
                    }
                    /* تنسيق صناديق الأكواد البرمجية من اليسار لليمين */
                    .unique-dark-article pre {
                      direction: ltr !important;
                      text-align: left !important;
                      background-color: #0d0d0d !important;
                      border: 1px solid #262626 !important;
                      padding: 1.25rem !important;
                      border-radius: 1rem !important;
                      overflow-x: auto;
                      margin: 1.5rem 0;
                      font-family: monospace;
                      color: #e5e5e5 !important;
                    }
                    .unique-dark-article code {
                      direction: ltr !important;
                      display: inline-block;
                      background-color: #1e293b !important;
                      color: #93c5fd !important;
                      padding: 0.15rem 0.5rem !important;
                      border-radius: 0.375rem !important;
                      font-family: monospace;
                      font-size: 0.9em;
                      margin: 0 0.2rem;
                    }
                    .unique-dark-article pre code {
                      background-color: transparent !important;
                      padding: 0 !important;
                      color: #e5e5e5 !important;
                      margin: 0;
                    }
                  `}</style>
                </section>
              )
            }

            // 2. قسم الجداول المستقل (Table Section)
            case 'tableSection': {
              const sectionTitle = section.sectionTitle?.[lang] || section.sectionTitle?.en || section.sectionTitle?.ar
              const headers = isEnglish ? (section.headersEn || section.headersAr || []) : (section.headersAr || section.headersEn || [])
              const rows = section.rows || []

              return (
                <section key={index} className="w-full py-6">
                  {sectionTitle && (
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-start text-white tracking-tight">
                      {sectionTitle}
                    </h3>
                  )}
                  <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-950/60 shadow-xl">
                    <table className="w-full border-collapse text-start text-sm md:text-base">
                      {headers.length > 0 && (
                        <thead>
                          <tr className="border-b border-neutral-800 bg-neutral-900/90 text-white">
                            {headers.map((header: string, i: number) => (
                              <th key={i} className="p-4 font-extrabold text-start whitespace-nowrap text-blue-400">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                      )}
                      <tbody className="divide-y divide-neutral-800/70">
                        {rows.map((row: any, rIdx: number) => {
                          const cells = isEnglish ? (row.cellsEn || row.cellsAr || []) : (row.cellsAr || row.cellsEn || [])
                          return (
                            <tr key={rIdx} className="hover:bg-neutral-900/40 transition">
                              {cells.map((cell: string, cIdx: number) => (
                                <td key={cIdx} className={`p-4 text-gray-300 leading-relaxed align-top ${cIdx === 0 ? 'font-bold text-white' : ''}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </section>
              )
            }

            case 'heroSection': {
              const badgeText = section.badge?.[lang] || section.badge?.en || section.badge?.ar
              const titleText = section.title?.[lang] || section.title?.en || section.title?.ar
              const subtitleContent = section.subtitle?.[lang] || section.subtitle?.en || section.subtitle?.ar
              
              const ctaText = section.ctaText?.[lang] || section.ctaText?.en || section.ctaText?.ar
              const ctaUrl = section.ctaUrl?.[lang] || section.ctaUrl?.en || section.ctaUrl?.ar

              const bgVideoFileUrl = section.bgVideoFile?.asset?.url || section.bgVideoFileUrl
              const bgVideoUrl = section.bgVideoUrl

              return (
                <section 
                  key={index} 
                  className="relative w-full min-h-[450px] md:min-h-[550px] flex flex-col items-center justify-center px-4 md:px-10 py-16 text-center overflow-hidden bg-neutral-950 border border-neutral-800 rounded-3xl"
                >
                  {bgVideoFileUrl ? (
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                      <video 
                        src={bgVideoFileUrl} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-black/60" />
                    </div>
                  ) : bgVideoUrl ? (
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
                      <iframe 
                        src={bgVideoUrl.includes('youtube.com') || bgVideoUrl.includes('youtu.be') 
                          ? `${bgVideoUrl.includes('embed') ? bgVideoUrl : bgVideoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'www.youtube.com/embed/')}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=${bgVideoUrl.split('v=')[1] || ''}` 
                          : bgVideoUrl}
                        className="w-full h-full object-cover opacity-60 scale-125"
                        allow="autoplay; encrypted-media"
                      />
                      <div className="absolute inset-0 bg-black/60" />
                    </div>
                  ) : section.bgImageUrl ? (
                    <div className="absolute inset-0 w-full h-full z-0">
                      <img 
                        src={section.bgImageUrl} 
                        alt="Hero Background" 
                        className="w-full h-full object-cover opacity-50 scale-105 transform transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
                    </div>
                  ) : null}
                  
                  <div className="relative z-10 max-w-4xl mx-auto mt-6">
                    {badgeText && (
                      <span className="bg-blue-600/30 border border-blue-500/40 text-blue-400 text-xs md:text-sm font-semibold px-5 py-2 rounded-full inline-block mb-6 shadow-[0_0_15px_rgba(30,58,138,0.4)]">
                        {badgeText}
                      </span>
                    )}

                    {titleText && (
                      <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-center">
                        {titleText}
                      </h1>
                    )}

                    {subtitleContent && (
                      <div className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8 text-start">
                        {Array.isArray(subtitleContent) ? (
                          <PortableText value={subtitleContent} components={portableTextComponents} />
                        ) : (
                          <p>{subtitleContent}</p>
                        )}
                      </div>
                    )}

                    {ctaText && ctaUrl && (
                      <div className="mt-4 flex justify-center">
                        <Link
                          href={ctaUrl}
                          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-500 transition shadow-[0_0_20px_rgba(30,58,138,0.6)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]"
                        >
                          <span>{ctaText}</span>
                          <span>{lang === 'ar' ? '←' : '→'}</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </section>
              )
            }
            
            case 'splitSection': {
              const title = section.title?.[lang] || section.title?.en || section.title?.ar
              const description = section.description?.[lang] || section.description?.en || section.description?.ar
              const imageUrl = section.imageUrl || section.image?.asset?.url || (section.image ? urlFor(section.image).url() : null)
              const layout = section.layout || section.layoutDirection || 'imageRight'

              const ctaText = section.ctaText?.[lang] || section.ctaText?.en || section.ctaText?.ar
              const ctaUrl = section.ctaUrl?.[lang] || section.ctaUrl?.en || section.ctaUrl?.ar

              return (
                <section key={index} className="w-full py-8">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${layout === 'imageLeft' ? 'lg:grid-flow-dense' : ''}`}>
                    
                    <div className={`space-y-6 text-start ${layout === 'imageLeft' ? 'lg:col-start-2' : ''}`}>
                      {title && (
                        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug text-white text-start">
                          {title}
                        </h2>
                      )}

                      {description && (
                        <div className="text-gray-300 text-base md:text-lg leading-relaxed text-start">
                          {Array.isArray(description) ? (
                            <PortableText value={description} components={portableTextComponents} />
                          ) : (
                            <p>{description}</p>
                          )}
                        </div>
                      )}

                      {ctaText && ctaUrl && (
                        <div className="pt-4 text-start">
                          <Link
                            href={ctaUrl}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition shadow-[0_0_15px_rgba(30,58,138,0.5)]"
                          >
                            <span>{ctaText}</span>
                            <span>{lang === 'ar' ? '←' : '→'}</span>
                          </Link>
                        </div>
                      )}
                    </div>

                    <div className={`relative rounded-3xl overflow-hidden border border-blue-500/30 shadow-[0_0_30px_rgba(30,58,138,0.2)] group ${layout === 'imageLeft' ? 'lg:col-start-1' : ''}`}>
                      {imageUrl ? (
                        <img 
                          src={imageUrl} 
                          alt={title || "Split Section Image"} 
                          className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                        />
                      ) : (
                        <div className="w-full h-64 bg-neutral-900 flex items-center justify-center text-gray-500 text-sm">
                          [No Image Provided]
                        </div>
                      )}
                      <div className="absolute inset-0 bg-blue-600/10 pointer-events-none" />
                    </div>

                  </div>
                </section>
              )
            }

            case 'sliderSection': {
              const sectionTitle = section.sectionTitle?.[lang] || section.sectionTitle?.en || section.sectionTitle?.ar
              const slides = section.slides || []

              return (
                <section key={index} className="w-full py-12 bg-neutral-950 border-y border-neutral-900 overflow-hidden rounded-3xl">
                  {sectionTitle && (
                    <h3 className="text-2xl md:text-4xl font-extrabold mb-10 text-center text-white tracking-tight">
                      {sectionTitle}
                    </h3>
                  )}
                  
                  <div className="relative w-full overflow-hidden flex whitespace-nowrap">
                    <div 
                      className="flex gap-8 items-center py-4"
                      style={{
                        display: 'flex',
                        width: 'max-content',
                        animation: 'tickerSmooth 30s linear infinite'
                      }}
                    >
                      {[...slides, ...slides].map((slide: any, slideIdx: number) => {
                        const slideText = slide.caption?.[lang] || slide.caption?.en || slide.caption?.ar || slide.text?.[lang] || slide.title?.[lang] || ''
                        const slideImg = slide.imageUrl || slide.cardImg || slide.image?.asset?.url || (slide.image ? urlFor(slide.image).url() : null)

                        return (
                          <div 
                            key={slideIdx} 
                            className="inline-flex flex-col items-center justify-between bg-black border border-neutral-800 p-4 rounded-3xl shrink-0 shadow-2xl w-72 h-80 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_35px_rgba(30,58,138,0.4)]"
                          >
                            {slideImg ? (
                              <div className="w-full h-full relative rounded-2xl overflow-hidden flex items-center justify-center">
                                <img 
                                  src={slideImg} 
                                  alt="Slide Image" 
                                  className="w-full h-full object-cover rounded-xl"
                                />
                              </div>
                            ) : (
                              <div className="w-full h-full bg-neutral-900 rounded-2xl flex items-center justify-center text-gray-500 text-xs">
                                [No Image]
                              </div>
                            )}
                            {slideText && (
                              <span className="text-gray-200 font-bold text-sm text-center mt-2 truncate w-full">
                                {slideText}
                              </span>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    <style jsx>{`
                      @keyframes tickerSmooth {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                      }
                      div :global(.flex:hover) {
                        animation-play-state: paused;
                      }
                    `}</style>
                  </div>
                </section>
              )
            }

            case 'gridCardsSection': {
              const sectionTitle = section.sectionTitle?.[lang] || section.sectionTitle?.en || section.sectionTitle?.ar
              const cards = section.cards || []

              return (
                <section key={index} className="w-full py-8">
                  {sectionTitle && (
                    <h3 className="text-3xl font-extrabold mb-10 text-center text-white tracking-tight">
                      {sectionTitle}
                    </h3>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card: any, cardIdx: number) => {
                      const cardTitle = card.cardTitle?.[lang] || card.cardTitle?.en || card.cardTitle?.ar
                      const cardDesc = card.cardDesc?.[lang] || card.cardDesc?.en || card.cardDesc?.ar
                      const cardImg = card.imageUrl || card.cardImg || card.cardImage?.asset?.url || (card.cardImage ? urlFor(card.cardImage).url() : null) || (card.image ? urlFor(card.image).url() : null)

                      return (
                        <div key={cardIdx} className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden p-6 hover:border-blue-500/50 transition duration-300 shadow-xl flex flex-col justify-between text-start">
                          {cardImg ? (
                            <div className="w-full h-48 relative rounded-2xl overflow-hidden mb-6 bg-neutral-950">
                              <img 
                                src={cardImg} 
                                alt={cardTitle || "Card Image"} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-full h-32 bg-neutral-950 rounded-2xl flex items-center justify-center text-neutral-600 text-xs mb-6 border border-neutral-800">
                              [No Image Provided]
                            </div>
                          )}
                          <div className="text-start">
                            {cardTitle && <h4 className="text-xl font-bold mb-3 text-white text-start">{cardTitle}</h4>}
                            {cardDesc && (
                              <div className="text-gray-400 text-sm leading-relaxed text-start">
                                {Array.isArray(cardDesc) ? <PortableText value={cardDesc} components={portableTextComponents} /> : <p>{cardDesc}</p>}
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </section>
              )
            }

            case 'internalLinksSection': {
              const sectionTitle = section.sectionTitle?.[lang] || section.sectionTitle?.en || section.sectionTitle?.ar
              const pages = section.pages || []

              return (
                <section key={index} className="w-full py-8">
                  {sectionTitle && (
                    <h3 className="text-3xl font-extrabold mb-8 text-center text-white tracking-tight">
                      {sectionTitle}
                    </h3>
                  )}
                  <div className="flex flex-wrap justify-center gap-4">
                    {pages.map((p: any, pIdx: number) => {
                      const pTitle = p.pageTitle?.[lang] || p.pageTitle?.en || p.pageTitle?.ar
                      const pSlug = p.slug?.current

                      if (!pSlug) return null

                      return (
                        <Link 
                          key={pIdx}
                          href={isEnglish ? `/en/${pSlug}` : `/${pSlug}`}
                          className="px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-semibold hover:border-blue-500 hover:bg-neutral-800 transition shadow-lg"
                        >
                          {pTitle || pSlug}
                        </Link>
                      )
                    })}
                  </div>
                </section>
              )
            }

            default:
              return null
          }
        })}
      </div>
    </div>
  )
}