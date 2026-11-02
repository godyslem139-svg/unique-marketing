import Image from 'next/image';

export default function EnPricingPage() {
  const packages = [
    {
      title: 'Basic Package',
      subtitle: 'Professional management for your presence & sales',
      image: '/price.webp',
      price: '6,000',
      oldPrice: '10,000',
      discount: '40%',
      features: [
        'Social Media Management',
        '8 Creative Designs',
        '4 Creative Videos',
        'Content Scheduling & Publishing',
        'Audience Interaction Management',
        'Detailed Monthly Report'
      ],
      badge: '40% OFF'
    },
    {
      title: 'Professional Package',
      subtitle: 'Professional management for your presence & sales',
      image: '/pricee.webp',
      price: '9,000',
      oldPrice: '12,000',
      discount: '25%',
      features: [
        'Social Media Management',
        '12 Creative Designs',
        '6 Featured Creative Videos',
        'Content Scheduling & Publishing',
        'Audience Interaction Management',
        'Custom Marketing Strategy'
      ],
      badge: '25% OFF'
    },
    {
      title: 'Elite Package',
      subtitle: 'Elite package for ultimate presence',
      image: '/priceee.webp',
      price: '11,000',
      oldPrice: '15,000',
      discount: '27%',
      features: [
        'Social Media Management',
        '16 Creative Designs',
        '8 Featured Creative Videos',
        'Content Scheduling & Publishing',
        'Audience Interaction Management',
        'Custom Marketing Strategy'
      ],
      badge: '27% OFF'
    },
  ];

  const reelsPackages = [
    { title: 'Single Reel', price: '75', old: '', save: '' },
    { title: '10 Reels Package', price: '700', old: '750', save: 'Save 50 EGP' },
    { title: '20 Reels Package', price: '1200', old: '1500', save: 'Save 300 EGP' },
    { title: '30 Reels Package', price: '1500', old: '2250', save: 'Save 750 EGP' },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-28 px-6" dir="ltr">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold tracking-wider uppercase">
            Pricing & Packages
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Choose The Right Package For Your Business
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Packages designed to fit your needs, ensure constant presence, and boost your sales.
          </p>
        </div>

        {/* Packages Grid */}
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
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg z-10">
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
                    <span className="text-sm text-zinc-400">EGP / Month</span>
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
                  <span>Book Package Now</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reels Packages Section */}
        <div className="bg-gradient-to-b from-neutral-950 to-neutral-900 border border-blue-600/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          
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
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                Reels Offers
              </span>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold tracking-wider uppercase">
                  Professional Reels
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Reels Packages
                </h2>
                <p className="text-zinc-300 text-sm md:text-base mb-6">
                  Professional content, stronger presence, and higher engagement. Packages designed to fit your needs.
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
                        <span className="text-xs text-zinc-400 font-normal">EGP</span>
                      </div>
                      {reel.old && (
                        <div className="text-xs text-zinc-500 line-through mt-0.5">
                          {reel.old} EGP
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
                      Order Now
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