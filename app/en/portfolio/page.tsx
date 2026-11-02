import Image from 'next/image';

export default function EnPortfolioPage() {
  const projects = [
    {
      title: 'Ads Marketing Agency',
      image: '/ads.webp',
      link: 'https://www.adsagencymarketing.com/',
      category: 'Marketing & Agency'
    },
    {
      title: 'Ahmt Egypt Travel',
      image: '/ahmtegypttravel.webp',
      link: 'https://www.ahmtegypttravel.com/',
      category: 'Tourism & Travel'
    },
    {
      title: 'Kuwait Mart Blog',
      image: '/blog-ar.kuwaitmart.com.webp',
      link: 'https://blog-ar.kuwaitmart.com/',
      category: 'E-Commerce & Blog'
    },
    {
      title: 'Elbadr Real Estate',
      image: '/elbadrrealestate.com.webp',
      link: 'https://www.elbadrrealestate.com/',
      category: 'Real Estate'
    },
    {
      title: 'Elmamlaka Foundation',
      image: '/elmamlaka.com.webp',
      link: 'https://www.elmamlaka.com/',
      category: 'Corporate'
    },
    {
      title: 'Fast Move Kuwait',
      image: '/fastmovekw.com.webp',
      link: 'https://fastmovekw.com/',
      category: 'Services & Logistics'
    },
    {
      title: 'Gold Shield SA',
      image: '/goldshield-sa.com.webp',
      link: 'https://goldshield-sa.com/',
      category: 'Security & Services'
    },
    {
      title: 'Haf Lorry',
      image: '/haflorry.com.webp',
      link: 'https://haflorry.com/',
      category: 'Transport & Services'
    },
    {
      title: 'Hala Selim',
      image: '/halaselim.com.webp',
      link: 'https://www.halaselim.com/',
      category: 'Personal Portfolio'
    },
    {
      title: 'Alsubaie Establishment',
      image: '/httpselsubaie.com.webp',
      link: 'http://elsubaie.com/',
      category: 'Construction & Industry'
    },
    {
      title: 'Jinan Travels',
      image: '/jinantravels.com.webp',
      link: 'https://jinantravels.com/',
      category: 'Tourism & Travel'
    },
    {
      title: 'Lmsatt Design',
      image: '/lmsatt.com.webp',
      link: 'https://lmsatt.com/',
      category: 'Design & Agency'
    },
    {
      title: 'Quraaany Platform',
      image: '/quraaany.com.webp',
      link: 'https://quraaany.com/en',
      category: 'Education'
    },
    {
      title: 'Rahal Travel',
      image: '/rahalar.com.webp',
      link: 'https://rahalar.com/',
      category: 'Tourism & Travel'
    },
    {
      title: 'Riyadh Gateway',
      image: '/riyadhgateway.com.webp',
      link: 'https://riyadhgateway.com/',
      category: 'Directory & Services'
    },
    {
      title: 'Taatim Services',
      image: '/taatim.com.webp',
      link: 'https://taatim.com/',
      category: 'Cleaning & Services'
    },
    {
      title: 'Taxi 24 Kuwait',
      image: '/taxi24-kw.com.webp',
      link: 'https://taxi24-kw.com/',
      category: 'Transportation'
    },
    {
      title: 'The Light House',
      image: '/thelighthousee.webp',
      link: 'https://www.thelighthousee.com/en',
      category: 'Tourism & Diving'
    },
    {
      title: 'Raneen Store',
      image: '/www.raneen.comar.webp',
      link: 'https://www.raneen.com/ar/',
      category: 'E-Commerce'
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-28 px-6" dir="ltr">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold tracking-wider uppercase">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Projects We Are Proud Of
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            A showcase of our latest e-commerce stores, corporate websites, and integrated web platforms designed and engineered with extreme precision.
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
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg z-10">
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
                  title={`Visit ${project.title}`}
                  aria-label={`Visit ${project.title}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg"
                >
                  <span>Visit Website</span>
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