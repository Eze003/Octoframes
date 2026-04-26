import Header from "@/components/layout/Header";
import ContactHeroSection from "@/components/sections/ContactHeroSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Octoframes Studio",
  description:
    "Have any doubts? Reach out to Octoframes Studio. We're ready to help with your motion design, animation, and video editing projects.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <Header />
      <ContactHeroSection />
      {/* ContactFormSection is now rendered internally by ContactHeroSection */}
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

