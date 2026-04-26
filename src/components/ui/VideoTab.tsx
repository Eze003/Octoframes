"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function VideoTab() {
  const [text, setText] = useState("");
  const fullText = "Get started for free";

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        // Optional: Reset or stay
        // setTimeout(() => {
        //   currentText = "";
        //   currentIndex = 0;
        //   setText("");
        // }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      {/* Primary Color Light Around (Background Glow) - Focused on Top/Sides */}
      {/* Wide base glow for the video frame */}
      <div className="absolute -top-[10%] md:-top-[15%] -inset-x-10 md:-inset-x-20 h-[80%] bg-primary-600/50 blur-[140px] rounded-[60px] opacity-80 animate-pulse pointer-events-none" />
      <div className="absolute top-0 -inset-x-2 md:-inset-x-6 h-[40%] bg-primary-500/40 blur-[80px] rounded-[40px] opacity-90 pointer-events-none" />

      {/* Focused, narrower glow extending UP to the buttons ONLY in the center */}
      <div className="absolute -top-[20%] md:-top-[30%] left-1/2 -translate-x-1/2 w-[60%] md:w-[40%] h-[50%] bg-primary-500/60 blur-[120px] rounded-full opacity-100 pointer-events-none" />

      {/* Main Container (The Tab/Video Frame) */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          transform: "perspective(1200px) rotateX(20deg) scale(0.95)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          transform: "perspective(1200px) rotateX(10deg) scale(1.02)",
        }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
        style={{ transformOrigin: "center bottom" }}
        className="relative aspect-video w-full rounded-[32px] p-2 md:p-3 border border-[#222] bg-black shadow-[0_0_100px_rgba(88,37,216,0.4)] group"
      >
        {/* Inner Border Container */}
        <div className="relative w-full h-full rounded-3xl border border-[#333] bg-[#050505] overflow-hidden shadow-[inset_0_0_40px_rgba(88,37,216,0.15)]">
          
          {/* Border Bloom - perfectly inner-aligned */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary-500/30 pointer-events-none z-20" />

          {/* Video Player */}
          <div className="absolute inset-0 z-10 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/hero-videoj.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Subtle Overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none z-20" />
          <div className="absolute inset-0 bg-white/[0.01] pointer-events-none z-20" />
        </div>
      </motion.div>
    </div>
  );
}
