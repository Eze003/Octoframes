"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface InfiniteCarouselProps {
  children: ReactNode[];
  gap?: string;
  duration?: number;
}

export default function InfiniteCarousel({ 
  children, 
  gap = "gap-8", 
  duration = 20 
}: InfiniteCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate children to create seamless loop
  const duplicatedChildren = [...children, ...children];

  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div
        className={`flex items-center ${gap} whitespace-nowrap`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {duplicatedChildren}
      </motion.div>
    </div>
  );
}
