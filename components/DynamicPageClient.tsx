'use client'

import React, { useState, useEffect } from 'react'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'

// إعدادات التنسيق المخصصة مع محاذاة ديناميكية تبدأ من البداية (text-start) حسب اللغة
const portableTextComponents = {
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl md:text-5xl font-black text-white mt-10 mb-6 tracking-tight text-start">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-8 mb-4 tracking-tight border-b border-neutral-800 pb-3 text-start">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl md:text-2xl font-bold text-blue-400 mt-6 mb-3 text-start">{children}</h3>,
    normal: ({ children }: any) => <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 text-start">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside space-y-3 mb-6 text-gray-300 text-start ps-4">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-300 text-start ps-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-relaxed text-start"><span className="text-blue-400 font-bold ms-2 me-2">•</span>{children}</li>,
  },
}

export default function DynamicPageClient({ page }: { page: any }) {
  const [lang, setLang] = useState<'ar' | 'en'>('ar')

  useEffect(() => {
    const updateLangFromDOM = () => {
      const currentDir = document.documentElement.dir
      const currentLangAttr = document.documentElement.lang
      if (currentDir === 'ltr' || currentLangAttr === 'en') {
        setLang('en')
      } else {
        setLang('ar')
      }
    }

    updateLangFromDOM()

    window.addEventListener('languagechange', updateLangFromDOM)
    
    const observer = new MutationObserver(updateLangFromDOM)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang', 'dir'] })

    return () => {
      window.removeEventListener('languagechange', updateLangFromDOM)
      observer.disconnect()
    }
  }, [])

  return (
    <main className={`min-h-screen bg-black text-white ${lang === 'ar' ? 'rtl' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      <div className="w-full space-y-20 pb-24">
        {page.sections?.map((section: any, index: number) => {
          switch (section._type) {
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
                  className="relative w-full min-h-[550px] md:min-h-[650px] flex flex-col items-center justify-center px-4 md:px-12 py-20 text-center overflow-hidden bg-neutral-950 border-b border-neutral-800"
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
                      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-center">
                        {titleText}
                      </h1>
                    )}

                    {subtitleContent && (
                      <div className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 text-center">
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
              const layout = section.layout || 'imageRight'

              const ctaText = section.ctaText?.[lang] || section.ctaText?.en || section.ctaText?.ar
              const ctaUrl = section.ctaUrl?.[lang] || section.ctaUrl?.en || section.ctaUrl?.ar

              return (
                <section key={index} className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${layout === 'imageLeft' ? 'lg:grid-flow-dense' : ''}`}>
                    
                    <div className={`space-y-6 text-start ${layout === 'imageLeft' ? 'lg:col-start-2' : ''}`}>
                      {title && (
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-snug text-white text-start">
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
                <section key={index} className="w-full py-16 bg-neutral-950 border-y border-neutral-900 overflow-hidden">
                  {sectionTitle && (
                    <h3 className="text-2xl md:text-4xl font-extrabold mb-12 text-center text-white tracking-tight">
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
                        const slideText = slide.text?.[lang] || slide.text?.en || slide.text?.ar || slide.title?.[lang] || ''
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
                <section key={index} className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                  {sectionTitle && (
                    <h3 className="text-3xl font-extrabold mb-10 text-center text-white tracking-tight">
                      {sectionTitle}
                    </h3>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <section key={index} className="max-w-7xl mx-auto px-4 md:px-8 py-12">
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
                          href={`/${pSlug}`}
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
              return (
                <div key={index} className="max-w-7xl mx-auto px-4 text-gray-500 text-sm text-start">
                  [Section: {section._type}]
                </div>
              )
          }
        })}
      </div>
    </main>
  )
}