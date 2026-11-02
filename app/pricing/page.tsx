import Image from 'next/image';

export default function PricingPage() {
  const packages = [
    {
      title: 'الباقة الأساسية',
      subtitle: 'إدارة احترافية لحضورك وزيادة مبيعاتك',
      image: '/price.webp',
      price: '6,000',
      oldPrice: '10,000',
      discount: '40%',
      features: [
        'إدارة السوشيال ميديا',
        '8 تصميمات إبداعية',
        '4 فيديوهات إبداعية',
        'جدول ونشر المحتوى',
        'إدارة التفاعلات مع الجمهور',
        'تقرير شهري مفصل'
      ],
      badge: 'خصم 40%'
    },
    {
      title: 'الباقة الاحترافية',
      subtitle: 'إدارة احترافية لحضورك وزيادة مبيعاتك',
      image: '/pricee.webp',
      price: '9,000',
      oldPrice: '12,000',
      discount: '25%',
      features: [
        'إدارة السوشيال ميديا',
        '12 تصميم إبداعي',
        '6 فيديوهات إبداعية مميزة',
        'جدولة ونشر المحتوى',
        'إدارة التفاعلات مع الجمهور',
        'استراتيجية تسويقية مخصصة'
      ],
      badge: 'خصم 25%'
    },
    {
      title: 'باقة النخبة',
      subtitle: 'باقة النخبة لأقوى حضور وتفاعل',
      image: '/priceee.webp',
      price: '11,000',
      oldPrice: '15,000',
      discount: '27%',
      features: [
        'إدارة السوشيال ميديا',
        '16 تصميم إبداعي',
        '8 فيديوهات إبداعية مميزة',
        'جدولة ونشر المحتوى',
        'إدارة التفاعلات مع الجمهور',
        'استراتيجية تسويقية مخصصة'
      ],
      badge: 'خصم 27%'
    },
  ];

  const reelsPackages = [
    { title: 'ريلز واحد', price: '75', old: '', save: '' },
    { title: 'باقة 10 ريلز', price: '700', old: '750', save: 'وفر 50 جنيه' },
    { title: 'باقة 20 ريلز', price: '1200', old: '1500', save: 'وفر 300 جنيه' },
    { title: 'باقة 30 ريلز', price: '1500', old: '2250', save: 'وفر 750 جنيه' },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-28 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* رأس الصفحة */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold tracking-wider uppercase">
            باقات الأسعار والعروض
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            اختر الباقة المناسبة لنجاح عملك
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            باقات تناسب احتياجك وتساعدك تكون موجود باستمرار وتزيد من تفاعل جمهورك ومبيعاتك.
          </p>
        </div>

        {/* شبكة الباقات الأساسية والاحترافية والنخبة */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="group relative bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl transition-all duration-500 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:-translate-y-2 flex flex-col justify-between"
            >
              <div className="relative w-full h-[450px] bg-black flex items-center justify-center p-3">
                <Image
                  src={pkg.image}
                  alt={`${pkg.title} - Unique Agency`}
                  title={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 start-4 bg-blue-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg z-10">
                  {pkg.badge}
                </span>
              </div>

              <div className="p-8 bg-neutral-900 border-t border-neutral-800 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-6">{pkg.subtitle}</p>
                  
                  <div className="flex items-baseline gap-3 mb-6 bg-black/40 p-4 rounded-2xl border border-neutral-800">
                    <span className="text-3xl font-black text-blue-400">{pkg.price}</span>
                    <span className="text-sm text-zinc-400">جنيه / شهرياً</span>
                    <span className="text-sm text-zinc-500 line-through ms-auto">{pkg.oldPrice}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-zinc-300 text-sm flex items-center gap-2">
                        <span className="text-blue-500 font-bold">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://wa.me/201273327311"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Order ${pkg.title} via WhatsApp`}
                  aria-label={`Order ${pkg.title}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-300 shadow-lg"
                >
                  <span>احجز الباقة الآن</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* سكشن باقات الريلز */}
        <div className="bg-gradient-to-b from-neutral-950 to-neutral-900 border border-blue-600/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-5 relative w-full h-[450px] bg-black rounded-2xl overflow-hidden border border-neutral-800 flex items-center justify-center p-3">
              <Image
                src="/priceeee.webp"
                alt="Reels Packages - Unique Agency"
                title="Reels Packages"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute top-4 start-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                عروض الريلز
              </span>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold tracking-wider uppercase">
                  محتوى احترافي وجودة عالية
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  باقات الريلز (Reels Packages)
                </h2>
                <p className="text-zinc-300 text-sm md:text-base mb-6">
                  محتوى احترافي.. وجود أقوى.. تفاعل أكبر! باقات تناسب احتياجك وتساعدك تكون موجود باستمرار.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reelsPackages.map((reel, rIdx) => (
                  <div key={rIdx} className="bg-black/80 border border-neutral-800 p-4 rounded-2xl flex flex-col justify-between text-center hover:border-blue-500 transition-all shadow-xl">
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">{reel.title}</h4>
                      {reel.save && (
                        <span className="inline-block bg-blue-600/20 text-blue-400 text-[11px] font-semibold px-2 py-0.5 rounded-full mb-2">
                          {reel.save}
                        </span>
                      )}
                    </div>
                    
                    <div className="my-2">
                      <div className="text-2xl font-black text-white">
                        {reel.price}{' '}
                        <span className="text-xs text-zinc-400 font-normal">جنيه</span>
                      </div>
                      {reel.old && (
                        <div className="text-xs text-zinc-500 line-through mt-0.5">
                          {reel.old} جنيه
                        </div>
                      )}
                    </div>

                    <a
                      href="https://wa.me/201273327311"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Order ${reel.title} via WhatsApp`}
                      aria-label={`Order ${reel.title}`}
                      className="mt-2 w-full py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 text-xs font-bold transition-all"
                    >
                      اطلب الآن
                    </a>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
}