"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "Startups",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    name: "SaaS brands",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17.5 19l-5-5-5 5" />
        <path d="M17.5 14l-5-5-5 5" />
        <path d="M17.5 9l-5-5-5 5" />
      </svg>
    ),
  },
  {
    name: "Creative agencies",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.5 1.5" />
        <path d="M14.5 3.5l-11 11" />
      </svg>
    ),
  },
  {
    name: "Content creators",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 3v1" />
        <path d="M12 20v1" />
        <path d="M3 12h1" />
        <path d="M20 12h1" />
        <path d="M18.364 5.636l-.707.707" />
        <path d="M6.343 17.657l-.707.707" />
        <path d="M5.636 5.636l.707.707" />
        <path d="M17.657 17.657l.707.707" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: "YouTubers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
  {
    name: "Fintech",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    name: "Healthcare",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    name: "E-commerce",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    name: "Education",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

export default function PartnersSection() {
  return (
    <section className="relative py-8 md:py-32 bg-black overflow-hidden border-t border-white/[0.05]">
      {/* Background Lighting - Subtle Volumetric Beam */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full pointer-events-none z-0"
        style={{ 
          background: "linear-gradient(to bottom, rgba(236,146,82,0.4) 0%, rgba(234,116,54,0) 100%)",
          filter: "blur(40px)"
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
        {/* Cinematic Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <span className="w-1 h-1 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              Partnership Spectrum
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            Built for the <span className="text-primary-500">visionaries.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed">
            From agile startups to global content engines, we partner with teams 
            that value motion as a core language of their brand.
          </p>
        </motion.div>

        {/* Premium Interactive Category Cloud */}
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.04,
                ease: [0.23, 1, 0.32, 1]
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 blur-xl transition-all duration-300 rounded-full" />
              <div className="relative px-6 py-4 rounded-full bg-white/[0.03] border border-white/[0.08] group-hover:border-primary-500/50 backdrop-blur-md transition-all duration-300 flex items-center gap-4">
                <div className="text-primary-500 group-hover:text-primary-400 transition-colors duration-300">
                  {partner.icon}
                </div>
                <span className="text-base md:text-lg font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Atmospheric Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50%] bg-primary-900/5 blur-[40px] pointer-events-none -z-10" />
      </div>
    </section>
  );
}
