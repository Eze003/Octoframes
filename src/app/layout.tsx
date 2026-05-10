import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import MouseFollower from "@/components/ui/MouseFollower";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://octoframes.com"),
  title: {
    default: "Octoframes — Premium Motion Design & Video Production Studio",
    template: "%s | Octoframes",
  },
  description:
    "Octoframes is a premium motion design and video production studio crafting cinematic brand visuals, product animations, and creative campaigns that move audiences.",
  keywords: [
    "motion design",
    "video production",
    "animation studio",
    "brand visuals",
    "product animation",
    "creative agency",
    "octoframes",
    "motion graphics",
    "2D animation",
    "3D animation",
    "explainer videos",
  ],
  authors: [{ name: "Motiongads", url: "https://motiongads.com" }],
  creator: "Motiongads",
  publisher: "Motiongads",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://octoframes.com",
    siteName: "Octoframes",
    title: "Octoframes — Premium Motion Design & Video Production Studio",
    description:
      "Cinematic brand visuals, product animations, and creative campaigns — crafted by Octoframes Studio.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Octoframes — Premium Motion Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Octoframes — Premium Motion Design & Video Production Studio",
    description:
      "Cinematic brand visuals, product animations, and creative campaigns — crafted by Octoframes Studio.",
    images: ["/og-image.png"],
    creator: "@octoframes",
    site: "@octoframes",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black">
        <MouseFollower />
        {children}
      </body>
    </html>
  );
}
