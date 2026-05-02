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
          opacity: 0.2,
          y: 0,
          transform: "perspective(1200px) rotateX(10deg) scale(1.02)",
        }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
        style={{ transformOrigin: "center bottom" }}
        className="absolute top-4 -inset-x-1.5 h-[95%] bg-primary-500 blur-[25px] rounded-[35px] pointer-events-none z-0"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          transform: "perspective(1200px) rotateX(20deg) scale(0.95)",
        }}
        animate={{
          opacity: 0.1,
          y: 0,
          transform: "perspective(1200px) rotateX(10deg) scale(1.02)",
        }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
        style={{ transformOrigin: "center bottom" }}
        className="absolute top-6 -inset-x-1 h-[90%] bg-primary-400 blur-[15px] rounded-[32px] pointer-events-none z-0"
      />
      {/* Explicit Bottom Shadow Layer - Positioned Behind */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          transform: "perspective(1200px) rotateX(20deg) scale(0.95)",
        }}
        animate={{
          opacity: 0.5,
          y: 0,
          transform: "perspective(1200px) rotateX(10deg) scale(1.05)",
        }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
        style={{ transformOrigin: "center bottom" }}
        className="absolute inset-x-8 bottom-[-40px] h-[30%] bg-black/60 blur-[50px] rounded-full pointer-events-none z-0"
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
          maskImage: "linear-gradient(to bottom, black 95%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 95%, transparent 100%)",
        }}
        className="relative aspect-video w-full rounded-[32px] p-2 md:p-3 bg-black group z-10"
      >
        {/* Inner Border Container */}
        <div className="relative w-full h-full rounded-3xl bg-[#050505] overflow-hidden shadow-[inset_0_0_20px_rgba(234,116,54,0.1)]">
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
