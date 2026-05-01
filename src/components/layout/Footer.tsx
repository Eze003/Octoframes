"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import Button from "@/components/ui/Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative pt-24 pb-10 overflow-hidden border-t border-gray-800"
      style={{
        background:
          "conic-gradient(at 50% 0%, rgb(0, 0, 0) 90deg, rgba(234, 116, 54, 0.4) 181.299deg, rgb(0, 0, 0) 270deg)",
      }}
    >
      {/* Faint Bottom Ambient Glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(234,116,54,0.08) 0%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 50%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1.8fr] gap-8 lg:gap-16 mb-12">
          {/* Brand Column */}
          <div className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center shadow-[0_0_20px_rgba(234,116,54,0.5)]">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">
                Octoframes
              </span>
            </div>

            <div className="space-y-2 text-gray-400">
              <p className="text-[13px] leading-relaxed">
                Made remotely with <span className="text-primary-500">🧡</span>{" "}
                and passion
              </p>
              <p className="text-white text-[13px] font-medium">
                — Octoframes Studio.
              </p>
            </div>
          </div>

          {/* Template Pages Column */}
          <div className="flex flex-col md:pl-12 lg:pl-20">
            <h4 className="text-white font-medium mb-5 text-[18px] whitespace-nowrap">
              Template Pages
            </h4>
            <ul className="space-y-2.5">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-[16px] whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#faq"
                  className="text-gray-400 hover:text-white transition-colors text-[14px] whitespace-nowrap"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-gray-400 hover:text-white transition-colors text-[14px] whitespace-nowrap"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="flex flex-col md:pl-20 lg:pl-32">
            <h4 className="text-white font-medium mb-5 text-[18px] whitespace-nowrap">
              Social
            </h4>
            <ul className="space-y-2.5">
              {["Twitter (X)", "Instagram", "Youtube", "Framer"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-[14px] whitespace-nowrap"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Form Column */}
          <div className="flex flex-col md:pl-8 lg:pl-12">
            <h4 className="text-white font-medium mb-5 text-[18px] whitespace-nowrap">
              Subscribe Form
            </h4>
            <div className="w-full">
              <div className="flex items-center p-1 rounded-full bg-white/[0.03] border border-white/[0.08] focus-within:border-primary-500 focus-within:ring-4 focus-within:ring-primary-500/10 transition-all duration-300">
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  className="bg-transparent border-none focus:ring-0 outline-none text-[14px] px-5 w-full text-white placeholder:text-gray-600 h-10"
                />
                <button className="relative bg-gradient-to-b from-primary-500 to-primary-700 text-white text-[12px] font-bold px-8 h-10 rounded-full border border-white/20 shadow-[0_4px_15px_rgba(234,116,54,0.3)] hover:shadow-[0_4px_25px_rgba(234,116,54,0.5)] transition-all after:absolute after:inset-0 after:border-t after:border-white/30 after:rounded-full after:pointer-events-none whitespace-nowrap">
                  Subscribe Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[16px]">
            © {currentYear} Octoframes Studio. All rights reserved.
          </p>
          <div className="flex gap-10">
            <a
              href="#"
              className="text-gray-500 hover:text-white text-[16px] transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-[16px] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
