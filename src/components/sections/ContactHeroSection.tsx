"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import ContactFormSection from "./ContactFormSection";

export default function ContactHeroSection() {
  const handleScroll = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[calc(100vh-88px)] flex flex-col items-center pt-20 pb-16 bg-black overflow-hidden">
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center backdrop-blur-xl bg-white/[0.05] gap-3 px-3 py-1.5 border border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] rounded-full mb-8"
        >
          <span className="px-3 py-1 bg-primary-500 text-white rounded-full text-sm font-medium">
            24/7
          </span>
          <span className="text-gray-300 text-sm">Collaborate With Us</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-tight"
        >
          Have Any Doubts? We <br />
          are <span className="text-primary-400">Ready to Help.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-2 mb-12 max-w-3xl mx-auto"
        >
          <p className="text-[16px] md:text-md text-gray-300">
            Whether you need guidance, support,
          </p>
          <p className="text-[16px] md:text-md text-gray-300">
            or a fresh start, our team is ready to assist you.
          </p>
        </motion.div>

        {/* Single CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative z-10 flex justify-center items-center mb-8"
        >
          <Button variant="primary" size="lg" onClick={handleScroll}>
            Fill The Form Out!
          </Button>
        </motion.div>

      </div>

      {/* Form Section - matched exactly to Header width */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactFormSection />
      </div>

      {/* Side ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-primary-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-primary-500/10 blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
