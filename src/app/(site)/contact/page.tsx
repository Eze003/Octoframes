import ContactHeroSection from "@/app/(site)/contact/_components/ContactHeroSection";
import ContactFormSection from "@/app/(site)/contact/_components/ContactFormSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have a project in mind? Reach out to Octoframes Studio. We're ready to help with your motion design, animation, and video production needs.",
  alternates: { canonical: "https://octoframes.com/contact" },
  openGraph: {
    url: "https://octoframes.com/contact",
    title: "Contact Octoframes Studio",
    description: "Get in touch with Octoframes — premium motion design and video production.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full font-sans">
      <ContactHeroSection />
      {/* ContactFormSection is now rendered internally by ContactHeroSection */}
      <FAQSection />
      <CTASection />
    </div>
  );
}

