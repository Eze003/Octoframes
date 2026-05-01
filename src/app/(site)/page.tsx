import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import MotionSection from "@/components/sections/MotionSection";
import BrandsSection from "@/components/sections/BrandsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Octoframes — Premium Motion Design & Video Production Studio",
  description:
    "Octoframes is a premium motion design and video production studio crafting cinematic brand visuals, product animations, and creative campaigns that move audiences.",
  alternates: {
    canonical: "https://octoframes.com",
  },
  openGraph: {
    url: "https://octoframes.com",
    title: "Octoframes — Premium Motion Design & Video Production Studio",
    description:
      "Cinematic brand visuals, product animations, and creative campaigns — crafted by Octoframes Studio.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full font-sans">
      <HeroSection />
      <MotionSection />
      <BrandsSection />
      <PartnersSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
