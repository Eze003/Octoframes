import type { Metadata } from "next";
import PortfolioHeroSection from "@/components/sections/PortfolioHeroSection";
import PortfolioGridSection from "@/components/sections/PortfolioGridSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Portfolio — Octoframes Studio",
  description:
    "Explore our most remarkable projects. We craft customized solutions that empower both startups and established brands.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full font-sans">
      <PortfolioHeroSection />
      <PortfolioGridSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
