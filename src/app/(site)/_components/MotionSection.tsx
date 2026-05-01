"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";

const services = [
  {
    id: "01",
    title: "2D Animation",
    description:
      "Character-driven stories, brand narratives, and short-form animated content crafted with frame-by-frame care and cultural depth.",
    tags: ["Character design", "Storytelling", "Brand films"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon
          points="10 8 16 12 10 16 10 8"
          fill="currentColor"
          fillOpacity="0.2"
        />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Explainer Videos",
    description:
      "60-90 second animated explainers that break down your product, service, or idea with clarity, personality, and impact.",
    tags: ["Startups", "SaaS", "Product launches"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M22 2L11 13" />
        <path
          d="M22 2L15 22L11 13L2 9L22 2Z"
          fill="currentColor"
          fillOpacity="0.2"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Motion Graphics",
    description:
      "Data visualisations, title sequences, UI animations, and social content designed to stop the scroll and land the message.",
    tags: ["After Effects", "Data viz", "Titles"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Social Media Packages",
    description:
      "Monthly retainer content — animated reels, story graphics, and posts built for consistent engagement across every platform.",
    tags: ["Instagram", "TikTok", "YouTube"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
];

export default function MotionSection() {
  return (
    <section className="relative py-8 md:py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-sm font-bold tracking-[0.3em] text-primary-400 uppercase mb-2 md:mb-4 block"
          >
            What we do
          </motion.span>
          
          <TextReveal className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-6 tracking-tight">
            Eight arms, four crafts.
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Every service built to move your brand forward.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="relative p-[6px] md:p-2 rounded-[2rem] md:rounded-[2.25rem] bg-[#0a0a0c] border border-white/[0.04] shadow-2xl transition-transform duration-500 group"
            >
              <div className="relative h-full bg-[#050505] rounded-[1.6rem] md:rounded-[1.85rem] border border-white/10 shadow-sm group-hover:border-primary-500/50 group-hover:shadow-[inset_0_0_60px_rgba(234,116,54,0.25),0_0_30px_rgba(234,116,54,0.2)] transition-all duration-500 p-6 md:p-8 overflow-hidden">
                {/* Card Ambient Glow */}
                <div className="absolute -inset-px bg-gradient-to-br from-primary-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Bar: Icon and Pill */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 rounded-[14px] bg-[#111] border border-white/10 flex items-center justify-center text-primary-500 transition-all duration-500 group-hover:border-primary-500/60 group-hover:shadow-[0_0_20px_rgba(234,116,54,0.4)]">
                      {service.icon}
                    </div>
                    <div className="px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-[13px] font-medium text-gray-300 tracking-wide">
                      {service.id}
                    </div>
                  </div>

                  {/* Content: Title & Description */}
                  <div className="mb-auto">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-primary-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#88888b] text-base md:text-[17px] leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Tags */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-5 py-2 rounded-full border border-white/[0.05] bg-white/[0.02] text-sm font-medium text-[#aaaaac] group-hover:border-white/[0.1] transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
