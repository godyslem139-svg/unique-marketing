import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/blog/أفضل-شركة-سيو',
        destination: '/SEOCompanyEgypt',
        permanent: true,
      },
      {
        source: '/blog/أفضل-شركة-سيو-بالسعودية',
        destination: '/SEOCompanySaudiArabia',
        permanent: true,
      },
      {
        source: '/blog/افضل-شركة-سيو',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/افضل-شركة-سيو-فى-الامارات',
        destination: '/SEOCompanyUAE',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;