"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import TextReveal from "../ui/TextReveal";

export default function AboutSection() {
  return (
    <section className="relative pt-8 mb-24 bg-black overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 glass rounded-full mb-8 shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(88,37,216,0.6)]"></span>
          <span className="text-gray-300 text-sm font-medium">About MotionGads</span>
        </motion.div>

        {/* Ambient Corner Glow background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60%] bg-primary-500/5 blur-[120px] pointer-events-none -z-10" />

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[44px] font-normal text-white mb-4 leading-[56px]"
        >
          Built on creativity, collaboration, and top
          <br />
          excellence, <span className="">SYNC</span> is a dynamic team of
          industry
          <br />
          experts committed to achieving exceptional
          <br />
          <TextReveal className="text-gray-500">great results...</TextReveal>
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button variant="primary" size="md">
            Book an Appointment
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
