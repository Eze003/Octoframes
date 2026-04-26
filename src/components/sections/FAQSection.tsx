"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What do I need to get started?",
    answer:
      "Simply reach out to us with your project details, objectives, and any existing assets. We'll set up an initial consultation to discuss your vision and outline the next steps.",
  },
  {
    question: "What kind of customization is available?",
    answer:
      "We offer fully tailored motion design, animation, and video editing services. Every detail from style, pacing, colors, to sound design is customized to match your brand identity.",
  },
  {
    question: "How easy is it to edit for beginners?",
    answer:
      "Once we deliver the final asset, we can also provide properly structured source files (like After Effects or Premiere Pro projects) upon request, organized clearly so you or your team can make minor tweaks easily.",
  },
  {
    question: "Let me know more about moneyback guarantee?",
    answer:
      "We ensure complete alignment during the storyboarding and animatic phases before moving to final render. If we fail to deliver the agreed-upon vision as stated in our contract, we have a structured refund policy in place to protect your investment.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Not at all! We handle the entire creative and production technical process. You only need to provide the creative direction and review the milestones we share with you.",
  },
  {
    question: "What will I get after purchasing the template?",
    answer:
      "When working with us on a custom project, you receive the final rendered high-quality videos in your requested formats, along with any agreed-upon source files, licenses, and documentation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          {/* Left Column: Heading & Info */}
          <div className="flex flex-col items-start">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full mb-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80" />
              </div>
              <span className="text-gray-300 text-sm font-medium pr-1">
                FAQ
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight mb-6"
            >
              <span className="text-white block">Frequently</span>
              <span className="text-gray-500 block">Asked Questions</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[15px] text-gray-400 leading-relaxed max-w-sm"
            >
              Have questions? Our FAQ section has you covered with quick answers
              to the most common inquiries.
            </motion.p>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`group relative rounded-xl transition-all duration-500 overflow-hidden ${
                    isOpen
                      ? "glass shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(88,37,216,0.1)] border-primary-500/30"
                      : "bg-[#08080a] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.12]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-6 py-7 text-left focus:outline-none"
                  >
                    <span className="text-[15px] text-gray-200 font-normal pr-8">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 text-gray-400 group-hover:text-white transition-colors duration-200">
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "anticipate" }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 pt-1 text-[14.5px] text-gray-400 leading-relaxed border-t border-white/[0.03]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subtle background glow behind the accordion area */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40%] h-[60%] bg-primary-600/10 blur-[130px] rounded-full pointer-events-none z-0" />
    </section>
  );
}
