import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import HeroSection from "@/components/Hero";
import AboutSeoSection from "@/components/AboutSeoSection";
import PortfolioMarquee from "@/components/PortfolioMarquee";
export const metadata: Metadata = {
  title: "SEO Services & Search Engine Optimization Agency | Unique",
  description: "Specialized SEO agency helping you improve your Google rankings, drive targeted traffic, and acquire new customers.",
  alternates: {
    canonical: "https://www.uniquee-ws.com/en",
  },
};
const SeoStrategiesSection = dynamic(() => import("@/components/SeoStrategiesSection"));
const WhySeoSection = dynamic(() => import("@/components/WhySeoSection"));
const HomePricing = dynamic(() => import("@/components/HomePricing"));
const LiveDashboardSection = dynamic(() => import("@/components/LiveDashboardSection"));
const HowToChooseSeoSection = dynamic(() => import("@/components/owToChooseSeoSection"));
const HowWeOptimizeSection = dynamic(() => import("@/components/HowWeOptimizeSection"));
const SeoBenefitsSection = dynamic(() => import("@/components/SeoBenefitsSection"));
const CommonMistakesSection = dynamic(() => import("@/components/CommonMistakesSection"));
const SeoTipsSection = dynamic(() => import("@/components/SeoTipsSection"));
const ExpertVsAgencySection = dynamic(() => import("@/components/ExpertVsAgencySection"));
const SeoCostSection = dynamic(() => import("@/components/SeoCostSection"));
const SeoServicesTableSection = dynamic(() => import("@/components/SeoServicesTableSection"));
const FaqSection = dynamic(() => import("@/components/FaqSection"));
const GeoKeywordsSection = dynamic(() => import("@/components/GeoKeywordsSection"));

export default function EnHomePage() {
  return (
    <main dir="ltr">
      <HeroSection />
      <AboutSeoSection />
      <PortfolioMarquee />
      <SeoStrategiesSection />
      <WhySeoSection />
      <HomePricing />
      <LiveDashboardSection />
      <HowToChooseSeoSection />
      <HowWeOptimizeSection />
      <SeoBenefitsSection />
      <CommonMistakesSection />
      <SeoTipsSection />
      <ExpertVsAgencySection />
      <SeoCostSection />
      <SeoServicesTableSection />
      <FaqSection />
      <GeoKeywordsSection />
    </main>
  );
}