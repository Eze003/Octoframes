"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black pt-16 pb-6 overflow-hidden border-t-2 border-white/[0.08]">
      {/* 1. The 'Straight' Vertical Source Core - Balanced */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[60%] pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(140,80,255,1) 0%, rgba(88,37,216,0.8) 40%, transparent 100%)",
          filter: "blur(8px)",
        }}
      />

      {/* 1.1 Symmetrical 'Shadow' Rays flanking the straight core */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[80%] pointer-events-none z-0 overflow-hidden"
        style={{
          background: `
            conic-gradient(
              from 0deg at 50% 0%, 
              transparent 170deg, 
              rgba(20,10,60,0.6) 176deg, 
              transparent 178deg,
              transparent 182deg,
              rgba(20,10,60,0.6) 184deg, 
              transparent 190deg
            )
          `,
          filter: "blur(15px)",
        }}
      />

      {/* 2. The Spreading Atmospheric Beam - Balanced Spread */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 overflow-hidden"
        style={{
          background: `
            conic-gradient(
              from 0deg at 50% 0%, 
              transparent 130deg, 
              rgba(88,37,216,0.45) 180deg, 
              transparent 230deg
            )
          `,
          filter: "blur(80px)",
        }}
      />

      {/* Intense Bottom Corner Spread - Wide Reach */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[85%] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(88,37,216,0.25) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-20">
          {/* Brand Column */}
          <div className="space-y-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center shadow-[0_0_20px_rgba(88,37,216,0.5)]">
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
                Made remotely with <span className="text-primary-500">💜</span>{" "}
                and passion
              </p>
              <p className="text-white text-[13px] font-medium">
                — Octoframes Studio.
              </p>
            </div>
          </div>

          {/* Template Pages Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-medium mb-8 text-[18px]">
              Template Pages
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Portfolio", "Contact", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-[16px]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-medium mb-8 text-[18px]">Social</h4>
            <ul className="space-y-4">
              {["Twitter (X)", "Instagram", "Youtube", "Framer"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-[16px]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Form Column */}
          <div className="flex flex-col">
            <h4 className="text-white font-medium mb-8 text-[18px]">
              Subscribe Form
            </h4>
            <div className="w-full">
              <div className="flex items-center p-1 rounded-full bg-white/[0.03] border border-white/[0.08] group-focus-within:border-primary-500 transition-all">
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  className="bg-transparent border-none focus:ring-0 text-[14px] px-5 w-full text-white placeholder:text-gray-600 h-10"
                />
                <button className="relative bg-gradient-to-b from-primary-500 to-primary-700 text-white text-[12px] font-bold px-6 h-10 rounded-full border border-white/20 shadow-[0_4px_15px_rgba(88,37,216,0.3)] hover:shadow-[0_4px_25px_rgba(88,37,216,0.5)] transition-all after:absolute after:inset-0 after:border-t after:border-white/30 after:rounded-full after:pointer-events-none whitespace-nowrap">
                  Subscribe Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
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
