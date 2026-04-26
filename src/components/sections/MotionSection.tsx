"use client";

import { motion } from "framer-motion";
import TextReveal from "../ui/TextReveal";

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
    <section className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.3em] text-primary-400 uppercase mb-4 block"
          >
            What we do
          </motion.span>
          
          <TextReveal className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Eight arms, four crafts.
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
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
              whileHover={{ y: -10 }}
              className="glass relative p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-primary-500/30 transition-all duration-500 group overflow-hidden"
            >
              {/* Card Ambient Glow */}
              <div className="absolute -inset-px bg-gradient-to-br from-primary-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Number Index */}
                <span className="text-xs font-bold tracking-widest text-primary-500/40 mb-8 block font-mono">
                  {service.id}
                </span>

                {/* Icon & Title */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:scale-110 group-hover:bg-primary-500/20 group-hover:border-primary-500/40 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed mb-10 min-h-[5rem]">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-white/[0.05]">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm font-medium text-gray-500 group-hover:text-gray-300 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
