import type { Metadata } from "next";
import BlogHeroSection from "@/app/(site)/blog/_components/BlogHeroSection";
import BlogGridSection from "@/app/(site)/blog/_components/BlogGridSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Motion design insights, behind-the-scenes stories, and creative tips from the Octoframes studio team.",
  alternates: { canonical: "https://octoframes.com/blog" },
  openGraph: {
    url: "https://octoframes.com/blog",
    title: "Octoframes Blog — Motion Design Insights",
    description: "Motion design insights, behind-the-scenes stories, and creative tips from the Octoframes studio team.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full font-sans">
      <BlogHeroSection />
      <BlogGridSection />
      <CTASection />
    </div>
  );
}
