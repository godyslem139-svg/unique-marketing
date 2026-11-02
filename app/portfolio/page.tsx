import Image from 'next/image';

export default function PortfolioPage() {
  const projects = [
    {
      title: 'وكالة الإعلانات والتسويق',
      image: '/ads.webp',
      link: 'https://www.adsagencymarketing.com/',
      category: 'تسويق وإعلانات'
    },
    {
      title: 'شركة أحمد مصر للسياحة',
      image: '/ahmtegypttravel.webp',
      link: 'https://www.ahmtegypttravel.com/',
      category: 'سياحة وسفر'
    },
    {
      title: 'مدونة كويت مارت',
      image: '/blog-ar.kuwaitmart.com.webp',
      link: 'https://blog-ar.kuwaitmart.com/',
      category: 'متجر ومدونة'
    },
    {
      title: 'البدر للعقارات',
      image: '/elbadrrealestate.com.webp',
      link: 'https://www.elbadrrealestate.com/',
      category: 'عقارات'
    },
    {
      title: 'مؤسسة المملكة',
      image: '/elmamlaka.com.webp',
      link: 'https://www.elmamlaka.com/',
      category: 'شركات ومؤسسات'
    },
    {
      title: 'فاست موف الكويت',
      image: '/fastmovekw.com.webp',
      link: 'https://fastmovekw.com/',
      category: 'خدمات وشحن'
    },
    {
      title: 'جولدن شيلد السعودية',
      image: '/goldshield-sa.com.webp',
      link: 'https://goldshield-sa.com/',
      category: 'خدمات وحماية'
    },
    {
      title: 'حفلوري للمقاولات والخدمات',
      image: '/haflorry.com.webp',
      link: 'https://haflorry.com/',
      category: 'نقل وخدمات'
    },
    {
      title: 'موقع هالة سليم',
      image: '/halaselim.com.webp',
      link: 'https://www.halaselim.com/',
      category: 'موقع شخصي'
    },
    {
      title: 'مؤسسة السبيعي للإنشاءات',
      image: '/httpselsubaie.com.webp',
      link: 'http://elsubaie.com/',
      category: 'مقاولات وإنشاءات'
    },
    {
      title: 'جنان للسياحة والسفر',
      image: '/jinantravels.com.webp',
      link: 'https://jinantravels.com/',
      category: 'سياحة وسفر'
    },
    {
      title: 'لمسات للتصميم',
      image: '/lmsatt.com.webp',
      link: 'https://lmsatt.com/',
      category: 'تصميم ووكالات'
    },
    {
      title: 'منصة قرآني للتعليم',
      image: '/quraaany.com.webp',
      link: 'https://quraaany.com/en',
      category: 'منصة تعليمية'
    },
    {
      title: 'رحال للعلاقات والسفر',
      image: '/rahalar.com.webp',
      link: 'https://rahalar.com/',
      category: 'سياحة وسفر'
    },
    {
      title: 'بوابة الرياض',
      image: '/riyadhgateway.com.webp',
      link: 'https://riyadhgateway.com/',
      category: 'دليل وخدمات'
    },
    {
      title: 'تعقيم لتنظيف والخدمات',
      image: '/taatim.com.webp',
      link: 'https://taatim.com/',
      category: 'تنظيف وخدمات'
    },
    {
      title: 'تاكسي 24 الكويت',
      image: '/taxi24-kw.com.webp',
      link: 'https://taxi24-kw.com/',
      category: 'نقل وتوصيل'
    },
    {
      title: 'ذا لايت هاوس (الغوص والسياحة)',
      image: '/thelighthousee.webp',
      link: 'https://www.thelighthousee.com/en',
      category: 'سياحة وغوص'
    },
    {
      title: 'موقع رنين التجاري',
      image: '/www.raneen.comar.webp',
      link: 'https://www.raneen.com/ar/',
      category: 'متجر إلكتروني'
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-28 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold tracking-wider uppercase">
            معرض الأعمال الاحترافي
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            مشاريع نعتز بإنجازها
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            نخبة من أحدث المتاجر الإلكترونية، مواقع الشركات، ومنصات الويب المتكاملة التي صممت وبرمجت بعناية فائقة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative w-full bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl transition-all duration-500 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.3)] hover:-translate-y-2 flex flex-col justify-between"
            >
              <div className="relative w-full h-[420px] bg-black flex items-center justify-center p-3">
                <Image
                  src={project.image}
                  alt={`${project.title} - Preview`}
                  title={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 start-4 bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg z-10">
                  {project.category}
                </span>
              </div>

              <div className="p-6 bg-neutral-900 border-t border-neutral-800 flex flex-col justify-between">
                <h3 className="text-white font-bold text-xl mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`زيارة ${project.title}`}
                  aria-label={`زيارة ${project.title}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg"
                >
                  <span>زيارة الموقع</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}