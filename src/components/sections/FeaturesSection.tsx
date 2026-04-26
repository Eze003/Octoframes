"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

const features = [
  { id: 1, image: "/api/placeholder/200/200" },
  { id: 2, image: "/api/placeholder/200/200" },
  { id: 3, image: "/api/placeholder/200/200" },
  { id: 4, image: "/api/placeholder/200/200" },
  { id: 5, image: "/api/placeholder/200/200" },
  { id: 6, image: "/api/placeholder/200/200" },
  { id: 7, image: "/api/placeholder/200/200" },
  { id: 8, image: "/api/placeholder/200/200" },
];

export default function FeaturesSection() {
  return (
    <section className="relative mt-20 pb-32 bg-gray-100/10 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Rotating feature cards */}
        <div className="relative h-[600px] mb-12 overflow-hidden">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: [0, 180, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          >
            {features.map((feature, index) => {
              const angle = (index * 180) / (features.length - 1) - 90; // Semi-circle from left to right
              const radius = 400;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={feature.id}
                  className="absolute w-24 h-24 glass-card rounded-xl overflow-hidden shadow-2xl transition-all duration-300"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  whileHover={{ scale: 1.15, rotate: 5, borderColor: "rgba(133, 107, 255, 0.5)" }}
                >
                  <img
                    src={feature.image}
                    alt={`Feature ${feature.id}`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black/50 backdrop-blur-md border border-white/20 rounded-full"
            >
              <svg
                className="w-5 h-5 text-primary-400"
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
              <span className="text-white font-medium">Features</span>
            </motion.div>
          </div>
        </div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Packed with Innovation.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Nubien is packed with cutting-edge features designed to elevate your
          agency or portfolio.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button variant="primary" size="lg">
            Book an Appointment
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
