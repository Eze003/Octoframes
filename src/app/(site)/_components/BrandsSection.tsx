"use client";

import { motion } from "framer-motion";

const traits = [
  {
    label: "Friendly",
    description: "no jargon, just collaboration",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    label: "Creative",
    description: "unexpected angles every time",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
        <path d="M8.5 8.5v.01"></path>
        <path d="M16 15.5v.01"></path>
        <path d="M12 12v.01"></path>
        <path d="M11 17v.01"></path>
        <path d="M7 14v.01"></path>
      </svg>
    ),
  },
  {
    label: "Confident",
    description: "we know our craft",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
  {
    label: "Playful",
    description: "wit and warmth in everything",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
  },
];

export default function BrandsSection() {
  return (
    <section className="relative py-8 md:py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] mix-blend-overlay">
        <h2 className="text-[25vw] font-black whitespace-nowrap text-white leading-none">
          OCTO
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-xl bg-primary-500/10 border border-primary-500/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
              <span className="text-sm font-bold tracking-[0.2em] text-primary-400 uppercase">
                London / Studio
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-[1.1] tracking-tight">
              Built for brands <br />
              that want <span className="text-primary-400">to stand out.</span>
            </h2>

            <div className="space-y-8 max-w-xl">
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
                We&apos;re a London-based motion studio with eight arms reaching
                across every kind of creative challenge. From a startup&apos;s
                first explainer to a full campaign content suite — we bring
                visual energy and craft to every project.
              </p>

              <div className="glass-card relative p-6 rounded-2xl overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-500" />
                <p className="text-lg md:text-xl text-gray-200 font-bold italic">
                  &ldquo;Friendly to work with. <br />
                  <span className="text-primary-400">
                    Serious about the work.&rdquo;
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Traits Cards */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-primary-500/5 blur-[40px] pointer-events-none" />

            <div className="relative grid grid-cols-1 gap-6">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="relative p-1.5 rounded-lg bg-[#0a0a0c] border border-white/[0.04] shadow-2xl transition-all duration-300 flex items-stretch gap-1.5 group"
                >
                  {/* Left Icon Block (Replaces Portrait Image) */}
                  <div className="w-[72px] h-[72px] md:w-[88px] md:h-[88px] flex-shrink-0 rounded-[1.5rem] bg-[#121217] border border-white/[0.05] overflow-hidden flex items-center justify-center text-primary-500 group-hover:text-primary-400 group-hover:bg-[#18181f] transition-all duration-500 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                    <div className="scale-75 md:scale-90 transition-transform duration-300">
                      {trait.icon}
                    </div>
                  </div>

                  {/* Right Content Block (Inner Border + Primary Shadow) */}
                  <div className="flex-1 rounded-[1.5rem] bg-[#050505] border border-white/10 shadow-sm group-hover:border-primary-500/50 group-hover:shadow-[inset_0_0_40px_rgba(234,116,54,0.25),0_0_20px_rgba(234,116,54,0.2)] transition-all duration-500 p-4 lg:px-6 flex flex-col justify-center sm:flex-row sm:items-center sm:justify-between relative overflow-hidden">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white tracking-tight mb-0.5 group-hover:text-primary-400 transition-colors duration-300">
                        {trait.label}
                      </h3>
                      <p className="text-gray-500 text-xs md:text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
                        {trait.description}
                      </p>
                    </div>

                    {/* Action Button (The Purple 'X' from Reference) */}
                    <div className="hidden sm:flex flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#EA7436] shadow-[0_4px_15px_rgba(234,116,54,0.4)] items-center justify-center text-white ml-4 group-hover:scale-105 transition-transform duration-300 border border-white/10">
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
