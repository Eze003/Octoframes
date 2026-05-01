"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function VideoTab() {
  const [text, setText] = useState("");
  const [videoUrl, setVideoUrl] = useState("/hero-videoj.mp4");
  const fullText = "Get started for free";

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch("/api/settings");
        const data = await res.json();
        if (data.settings?.hero_video_url) {
          setVideoUrl(data.settings.hero_video_url);
        }
      } catch (err) {
        console.error("Failed to fetch video settings:", err);
      }
    }
    fetchSettings();
  }, []);

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
      {/* Sharp 'Neon' Backlight - Synchronized with Tab 3D Perspective */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          transform: "perspective(1200px) rotateX(20deg) scale(0.95)",
        }}
        animate={{
          opacity: 0.35,
          y: 0,
          transform: "perspective(1200px) rotateX(10deg) scale(1.02)",
        }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
        style={{ transformOrigin: "center bottom" }}
        className="absolute top-4 -inset-x-1.5 h-[75%] bg-primary-500 blur-[25px] rounded-[35px] pointer-events-none"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          transform: "perspective(1200px) rotateX(20deg) scale(0.95)",
        }}
        animate={{
          opacity: 0.2,
          y: 0,
          transform: "perspective(1200px) rotateX(10deg) scale(1.02)",
        }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
        style={{ transformOrigin: "center bottom" }}
        className="absolute top-6 -inset-x-1 h-[70%] bg-primary-400 blur-[15px] rounded-[32px] pointer-events-none"
      />

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
        style={{
          transformOrigin: "center bottom",
          maskImage: "linear-gradient(to bottom, black 70%, transparent 98%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 70%, transparent 98%)",
        }}
        className="relative aspect-video w-full rounded-[32px] p-2 md:p-3 border border-[#222] bg-black shadow-[0_-30px_80px_-20px_rgba(234,116,54,0.3)] group"
      >
        {/* Inner Border Container */}
        <div className="relative w-full h-full rounded-3xl border border-[#333] bg-[#050505] overflow-hidden shadow-[inset_0_0_40px_rgba(234,116,54,0.15)]">
          {/* Border Bloom - perfectly inner-aligned */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none z-20" />

          {/* Video Player */}
          <div className="absolute inset-0 z-10 overflow-hidden">
            <video
              key={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>

          {/* Subtle Overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10 pointer-events-none z-20" />
          <div className="absolute inset-0 bg-white/[0.01] pointer-events-none z-20" />
        </div>
      </motion.div>
    </div>
  );
}
