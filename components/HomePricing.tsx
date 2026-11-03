'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ar from '@/messages/ar.json';
import en from '@/messages/en.json';

export default function HomePricing() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith('/en');
  const locale = isEnglish ? 'en' : 'ar';

  const t: any = locale === 'ar' ? ar : en;
  const pText = t.Pricing || {};

  const packages = [
    {
      title: pText.basicTitle || 'الباقة الأساسية',
      subtitle: pText.basicSub || 'إدارة احترافية لحضورك وزيادة مبيعاتك',
      image: '/price.webp',
      price: '6,000',
      oldPrice: '10,000',
      badge: pText.badgeDiscount40 || 'خصم 40%',
      features: [
        locale === 'ar' ? 'إدارة السوشيال ميديا' : 'Social Media Management',
        locale === 'ar' ? '8 تصميمات إبداعية' : '8 Creative Designs',
        locale === 'ar' ? '4 فيديوهات إبداعية' : '4 Creative Videos',
        locale === 'ar' ? 'جدول ونشر المحتوى' : 'Content Scheduling & Publishing',
      ]
    },
    {
      title: pText.proTitle || 'الباقة الاحترافية',
      subtitle: pText.proSub || 'إدارة احترافية لحضورك وزيادة مبيعاتك',
      image: '/pricee.webp',
      price: '9,000',
      oldPrice: '12,000',
      badge: pText.badgeDiscount25 || 'خصم 25%',
      features: [
        locale === 'ar' ? 'إدارة السوشيال ميديا' : 'Social Media Management',
        locale === 'ar' ? '12 تصميم إبداعي' : '12 Creative Designs',
        locale === 'ar' ? '6 فيديوهات إبداعية مميزة' : '6 Featured Creative Videos',
        locale === 'ar' ? 'استراتيجية تسويقية مخصصة' : 'Custom Marketing Strategy',
      ]
    },
    {
      title: pText.eliteTitle || 'باقة النخبة',
      subtitle: pText.eliteSub || 'باقة النخبة لأقوى حضور وتفاعل',
      image: '/priceee.webp',
      price: '11,000',
      oldPrice: '15,000',
      badge: pText.badgeDiscount27 || 'خصم 27%',
      features: [
        locale === 'ar' ? 'إدارة السوشيال ميديا' : 'Social Media Management',
        locale === 'ar' ? '16 تصميم إبداعي' : '16 Creative Designs',
        locale === 'ar' ? '8 فيديوهات إبداعية مميزة' : '8 Featured Creative Videos',
        locale === 'ar' ? 'استراتيجية تسويقية مخصصة' : 'Custom Marketing Strategy',
      ]
    },
    {
      title: pText.reelsTitle || 'باقات الريلز',
      subtitle: pText.reelsSub || 'محتوى احترافي وجودة عالية وتفاعل أكبر',
      image: '/priceeee.webp',
      price: '75 - 1500',
      oldPrice: '',
      badge: pText.badgeReels || 'عروض الريلز',
      features: [
        locale === 'ar' ? 'ريلز واحد (75 جنيه)' : 'Single Reel (75 EGP)',
        locale === 'ar' ? 'باقة 10 ريلز (700 جنيه - وفر 50ج)' : '10 Reels (700 EGP - Save 50)',
        locale === 'ar' ? 'باقة 20 ريلز (1200 جنيه - وفر 300ج)' : '20 Reels (1200 EGP - Save 300)',
        locale === 'ar' ? 'باقة 30 ريلز (1500 جنيه - وفر 750ج)' : '30 Reels (1500 EGP - Save 750)',
      ]
    },
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold tracking-wider uppercase">
            {pText.badge || 'باقات الأسعار والعروض المميزة'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {pText.title || 'استثمر في نمو مبيعاتك اليوم'}
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-light">
            {pText.subtitle || 'باقات متكاملة ومصممة خصيصاً لتلبي احتياجات عملك وتضمن لك حضوراً قوياً ومستمراً.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="group relative bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl transition-all duration-500 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:-translate-y-2 flex flex-col justify-between text-start"
            >
              <div className="relative w-full h-[400px] bg-black flex items-center justify-center p-3">
                <Image
                  src={pkg.image}
                  alt={`${pkg.title} - The Light House`}
                  title={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className={`absolute top-4 ${locale === 'ar' ? 'start-4' : 'start-4'} bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10`}>
                  {pkg.badge}
                </span>
              </div>

              <div className="p-6 bg-neutral-900 border-t border-neutral-800 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-zinc-400 text-xs mb-4 leading-relaxed">{pkg.subtitle}</p>
                  
                  <div className={`flex items-baseline gap-2 mb-4 bg-black/40 p-3 rounded-xl border border-neutral-800 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <span className="text-2xl font-black text-blue-400">{pkg.price}</span>
                    <span className="text-xs text-zinc-400">{locale === 'ar' ? 'جنيه' : 'EGP'}</span>
                    {pkg.oldPrice && <span className={`text-xs text-red-400 line-through ${locale === 'ar' ? 'mr-auto' : 'ml-auto'}`}>{pkg.oldPrice}</span>}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-zinc-300 text-xs flex items-center gap-2">
                        <span className="text-blue-500 font-bold">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://wa.me/201273327311"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Order Package via WhatsApp"
                  aria-label="Order Package"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all duration-300 shadow-lg"
                >
                  <span>{pText.bookNow || 'احجز الباقة الآن'}</span>
                  <span>{locale === 'ar' ? '←' : '→'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}