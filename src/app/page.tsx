import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import MotionSection from "@/components/sections/MotionSection";
import BrandsSection from "@/components/sections/BrandsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <Header />
      <HeroSection />
      <MotionSection />
      <BrandsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
}
