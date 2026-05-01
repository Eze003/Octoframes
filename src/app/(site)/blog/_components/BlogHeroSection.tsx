"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function BlogHeroSection() {
  return (
    <section className="relative flex flex-col items-center pt-8 md:pt-16 pb-8 md:pb-12 bg-black overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-500/20 blur-[40px] rounded-[100%] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-3 py-1.5 glass rounded-full mb-8 shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          <div className="px-3 py-1 rounded-full bg-primary-600 text-white text-[12px] font-bold tracking-wider">
            2025
          </div>
          <span className="text-gray-300 text-sm font-medium pr-2">
            Studio Insights
          </span>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-tight max-w-5xl"
        >
          Insights, Tips &<br className="hidden md:block" />
          Creative Stories.
        </motion.h1>

        {/* Hero Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Motion design tips, behind-the-scenes stories, and creative insights
            from the Octoframes studio team.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative z-10 flex flex-row gap-4 justify-center items-center"
        >
          <Button variant="primary" size="lg">
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
