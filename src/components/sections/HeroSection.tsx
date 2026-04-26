"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Button from "../ui/Button";
import InfiniteCarousel from "../ui/InfiniteCarousel";
import VideoTab from "../ui/VideoTab";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-88px)] flex flex-col items-center pt-20 pb-16 bg-black overflow-hidden">
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-3 py-1.5 glass rounded-full mb-8 shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-[12px] font-bold tracking-wider">
            {new Date().getFullYear()}
          </span>
          <span className="text-gray-300 text-sm font-medium pr-2">Creative Motion Studio</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-tight"
        >
          WE MAKE THINGS <br />
          <span className="text-primary-400">MOVE.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-2 mb-12 max-w-3xl mx-auto"
        >
          <p className="text-[16px] md:text-md text-gray-300">
            2D animation, motion graphics, and video editing for startups,{" "}
          </p>
          <p className="text-[16px] md:text-md text-gray-300">
            agencies, and content creators who want work that feels alive.{" "}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Button variant="secondary" size="lg">
            See Our Work
          </Button>
          <Button variant="primary" size="lg">
            Get a Quote
          </Button>
        </motion.div>

      </div>

      {/* VideoTab - matched exactly to Header width */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <VideoTab />
      </div>

      {/* Decorative background elements (Simplified) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-primary-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-primary-500/10 blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
