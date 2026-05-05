"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { NAVIGATION_ITEMS } from "@/constants/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollYState, setScrollYState] = useState(0);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrollYState(latest);
  });

  const progress = Math.min(scrollYState / 120, 1);

  const blurPx = progress * 40; // 0px → 40px
  const bgAlpha = progress * 0.6; // 0% → 60%
  const borderAlpha = 0.12; // Always show border
  const shadowAlpha = progress * 0.7;

  return (
    <>
      <motion.header
        className="sticky top-0 z-[100] w-full transition-shadow duration-300"
        style={{
          backdropFilter: isOpen ? "none" : `blur(${blurPx}px) saturate(180%)`,
          WebkitBackdropFilter: isOpen
            ? "none"
            : `blur(${blurPx}px) saturate(180%)`,
          background: isOpen ? "transparent" : `rgba(5, 5, 10, ${bgAlpha})`,
          borderBottom: isOpen
            ? "1px solid transparent"
            : `1px solid rgba(255, 255, 255, ${borderAlpha})`,
          boxShadow: isOpen ? "none" : `0 0 20px rgba(0, 0, 0, ${shadowAlpha})`,
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: hidden && !isOpen ? 0 : 1,
          y: hidden && !isOpen ? "-100%" : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[88px]">
            {/* Desktop Brand (Untouched) */}
            <div className="flex items-center gap-2.5">
              <span className="text-white font-bold text-lg">
                OCTO<span className="text-primary-400">FRAMES</span>
              </span>
            </div>

            {/* Desktop Nav - Untouched */}
            <motion.nav
              className="hidden md:flex items-center space-x-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {NAVIGATION_ITEMS.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block transition-colors duration-200 text-base ${
                        isActive
                          ? "text-primary-500 font-semibold"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            <div className="flex items-center gap-4">
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button variant="primary" size="md" href="/contact">
                  Let&apos;s Talk
                </Button>
              </motion.div>

              {/* Mobile Toggle Button (Visible when closed) */}
              {!isOpen && (
                <button
                  onClick={() => setIsOpen(true)}
                  className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.05] border border-white/10 text-white"
                  aria-label="Open menu"
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="w-5 h-0.5 bg-white rounded-full" />
                    <span className="w-5 h-0.5 bg-white rounded-full" />
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[110] md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 right-0 z-[120] bg-black/20 backdrop-blur-3xl border-b border-white/5 md:hidden overflow-hidden"
              style={{
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="max-w-7xl mx-auto px-6">
                {/* Header Content INSIDE the panel */}
                <div className="flex items-center justify-between h-[88px] border-b border-white/[0.12]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#EA7436] flex items-center justify-center shadow-[0_0_15px_rgba(234,116,54,0.4)]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight">
                      OCTOFRAMES
                    </span>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                    aria-label="Close menu"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col space-y-6 pt-6 pb-12">
                  {NAVIGATION_ITEMS.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index + 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`block text-md tracking-wide transition-colors ${
                            isActive
                              ? "text-primary-500 font-bold"
                              : "font-normal text-white/70 hover:text-white"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom CTA Button */}
                <div className="pb-10 w-full flex">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full flex"
                  >
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full text-base h-14 bg-gradient-to-r from-[#EA7436] to-[#d45e22] border-none shadow-[0_8px_20px_rgba(234,116,54,0.3)] hover:shadow-[0_8px_30px_rgba(234,116,54,0.5)] rounded-2xl"
                      onClick={() => setIsOpen(false)}
                      href="/contact"
                    >
                      Get In Touch
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
