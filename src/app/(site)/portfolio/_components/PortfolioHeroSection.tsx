"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function PortfolioHeroSection() {
  return (
    <section className="relative flex flex-col items-center pt-8 md:pt-16 pb-8 md:pb-12 bg-black overflow-hidden">
      {/* Volumetric splashes to match Hero Section */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-primary-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-primary-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-500/15 blur-[120px] rounded-[100%]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badge: "2025 Browse Our Work" */}
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
            Browse Our Work
          </span>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-tight max-w-5xl"
        >
          Explore Our Most <br className="hidden md:block" />
          Remarkable Projects.
        </motion.h1>

        {/* Hero Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            We craft customized solutions that empower both startups and
            established brands, driving success and delivering real impact.
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
            Build Your Product
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
