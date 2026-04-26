"use client";

import { motion } from "framer-motion";

const traits = [
  {
    label: "Friendly",
    description: "no jargon, just collaboration",
  },
  {
    label: "Creative",
    description: "unexpected angles every time",
  },
  {
    label: "Confident",
    description: "we know our craft",
  },
  {
    label: "Playful",
    description: "wit and warmth in everything",
  },
];

export default function BrandsSection() {
  return (
    <section className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] mix-blend-overlay">
        <h2 className="text-[25vw] font-black whitespace-nowrap text-white leading-none">
          OCTO
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <span className="text-primary-400">Serious about the work.&rdquo;</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Traits Cards */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-primary-500/5 blur-[100px] pointer-events-none" />

            <div className="relative grid grid-cols-1 gap-4">
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
                  className="glass-card flex items-center group p-6 rounded-2xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 mr-6">
                    <div className="relative w-4 h-4">
                      <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-20" />
                      <div className="relative w-full h-full rounded-full bg-primary-500 shadow-[0_0_15px_rgba(88,37,216,0.6)]" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5 group-hover:text-primary-400 transition-colors duration-300">
                      {trait.label}
                    </h3>
                    <p className="text-gray-500 text-base md:text-lg font-medium group-hover:text-gray-300 transition-colors duration-300">
                      {trait.description}
                    </p>
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
