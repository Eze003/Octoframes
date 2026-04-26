"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-black overflow-hidden flex justify-center items-center">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-[32px] px-6 py-8 md:px-12 lg:px-24 lg:py-12 overflow-hidden border border-[#222] bg-[#050505] shadow-[0_0_120px_rgba(88,37,216,0.15)] text-center flex flex-col items-center justify-center group"
        >
          {/* Ambient Top Corner Light Splashes - Solid Color */}
          <motion.div 
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ backgroundColor: "#5825d8" }}
            className="absolute -top-20 -left-[10%] w-96 h-96 blur-[120px] pointer-events-none" 
          />
          <motion.div 
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ 
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{ backgroundColor: "#5825d8" }}
            className="absolute -top-20 -right-[10%] w-96 h-96 blur-[120px] pointer-events-none" 
          />

          {/* Image-based Light Beam - Static Glow */}
          <motion.div
            animate={{ 
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-full h-[160%] pointer-events-none mix-blend-screen origin-top z-10"
            style={{
              backgroundImage: "url('/beam.png')",
              backgroundSize: "100% 100%",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
              WebkitMaskImage:
                "radial-gradient(ellipse at top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
            }}
          />

          {/* Distinct Dotted Texture Background */}
          <div
            className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:14px_14px] opacity-100 pointer-events-none"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 90%)",
            }}
          />

          {/* Depth gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none opacity-80" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center backdrop-blur-xl bg-white/[0.05] gap-2 px-3 py-1.5 border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] rounded-full mb-8"
            >
              <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-gray-300 text-sm font-medium pr-1">
                Become a Part of Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.2] tracking-tight mb-6"
            >
              <span className="text-white text-[54px] block">
                Ready to Elevate Your Brand
              </span>
              <span className="text-gray-400 text-[54px] block">
                with Next-Gen Innovation?
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[17px] text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              Ready to take the next step? Join us now and start transforming
              your <br className="hidden sm:block" />
              vision into reality with expert support.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button variant="primary" size="lg">
                Book an Appointment
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
