"use client";

import { motion } from "framer-motion";

const partners = [
  "Startups",
  "SaaS brands",
  "Creative agencies",
  "Content creators",
  "YouTubers",
  "Fintech",
  "Healthcare",
  "E-commerce",
  "Education",
];

export default function PartnersSection() {
  return (
    <section className="relative py-32 bg-black overflow-hidden border-t border-white/[0.05]">
      {/* Background Lighting - Subtle Volumetric Beam */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full pointer-events-none z-0"
        style={{ 
          background: "linear-gradient(to bottom, rgba(140,80,255,0.4) 0%, rgba(88,37,216,0) 100%)",
          filter: "blur(40px)"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
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
              key={partner}
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
              <div className="relative px-8 py-4 rounded-full bg-white/[0.03] border border-white/[0.08] group-hover:border-primary-500/50 backdrop-blur-md transition-all duration-300 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary-400 shadow-[0_0_10px_transparent] group-hover:shadow-[0_0_10px_rgba(168,85,247,0.4)] transition-all" />
                <span className="text-base md:text-lg font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                  {partner}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Atmospheric Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50%] bg-primary-900/5 blur-[120px] pointer-events-none -z-10" />
      </div>
    </section>
  );
}
