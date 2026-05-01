"use client";

import { motion } from "framer-motion";
import { BsPatchCheck } from "react-icons/bs";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative py-8 md:py-24 bg-black overflow-hidden flex justify-center items-center">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-[32px] px-6 py-8 md:px-12 lg:px-24 lg:py-12 overflow-hidden border border-[#222] bg-[#050505] text-center flex flex-col items-center justify-center group"
        >
          {/* Image-based Light Beam - Seamless Wave Animation */}
          <motion.div
            initial={{ x: "-50%", y: 0 }}
            animate={{
              x: ["-51%", "-49%", "-51%"],
              rotate: [-1, 1, -1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-1/2 w-[160%] h-[160%] pointer-events-none mix-blend-screen z-0"
            style={{
              backgroundImage: "url('/beam.png')",
              backgroundSize: "100% 100%",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              filter:
                "sepia(1) saturate(20) hue-rotate(-15deg) brightness(1.8)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 75%)",
              maskImage:
                "radial-gradient(ellipse at center top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 75%)",
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
              <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center">
                <BsPatchCheck className="w-3.5 h-3.5 text-white" />
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
