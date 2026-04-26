"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { NAVIGATION_ITEMS } from "@/constants/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clamp scroll progress 0→1 over first 120px of scroll
  const progress = Math.min(scrollY / 120, 1);

  const blurPx = 8 + progress * 32;           // 8px → 40px
  const bgAlpha = 0.01 + progress * 0.55;     // nearly transparent → frosted
  const borderAlpha = 0.04 + progress * 0.1;  // subtle → visible
  const shadowAlpha = progress * 0.7;

  return (
    <motion.header
      className="sticky top-0 z-50 w-full transition-shadow duration-300"
      style={{
        backdropFilter: `blur(${blurPx}px) saturate(180%)`,
        WebkitBackdropFilter: `blur(${blurPx}px) saturate(180%)`,
        background: `rgba(5, 5, 10, ${bgAlpha})`,
        borderBottom: `1px solid rgba(255, 255, 255, ${borderAlpha})`,
        boxShadow: `0 2px 40px rgba(0, 0, 0, ${shadowAlpha})`,
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[88px]">
          <span className="text-white font-bold text-lg">
            OCTO<span className="text-primary-400">FRAMES</span>
          </span>
          <motion.nav
            className="hidden md:flex items-center space-x-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-base"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.nav>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button variant="primary" size="md">
              Let&apos;s Talk
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
