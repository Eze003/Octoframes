"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg";

  const variants = {
    primary:
      "relative bg-gradient-to-b from-primary-500 to-primary-700 text-white rounded-xl border-[1.5px] border-white/20 shadow-[0_0_20px_rgba(234,116,54,0.3)] transition-all after:absolute after:inset-0 after:border-t after:border-white/40 after:rounded-[inherit] hover:shadow-[0_0_30px_rgba(234,116,54,0.5)]",
    secondary:
      "relative backdrop-blur-xl bg-white/[0.06] text-white rounded-xl border border-white/[0.12] hover:bg-white/[0.12] hover:border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.3)]",
    outline:
      "relative backdrop-blur-md bg-primary-500/10 text-white border border-primary-500/40 hover:bg-primary-500/20 shadow-[0_0_15px_rgba(234,116,54,0.15)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const isFullWidth = className.includes("w-full");
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <motion.span
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={isFullWidth ? "w-full" : "inline-block"}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={isFullWidth ? "w-full" : "inline-block"}>
      {content}
    </button>
  );
}
