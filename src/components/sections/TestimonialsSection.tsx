"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch("/api/testimonials");
        const data = await res.json();
        setTestimonials(data.testimonials || []);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTestimonials();
  }, []);

  if (!loading && testimonials.length === 0) return null;

  return (
    <section className="relative w-full bg-black py-16 md:py-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-500 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4 block"
          >
            Client Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
          >
            Trusted by global <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">visionaries.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {loading ? (
             Array(3).fill(0).map((_, i) => (
                <div key={i} className="h-64 rounded-[32px] bg-white/[0.02] border border-white/5 animate-pulse" />
             ))
          ) : (
            testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative p-4 md:p-5 rounded-[20px] bg-white/[0.02] border border-white/[0.06] hover:border-primary-500/30 transition-all duration-500 hover:bg-white/[0.04] flex flex-col h-full justify-between"
              >
                <p className="text-white/80 text-[13px] md:text-sm leading-tight mb-4 font-medium italic">
                  "{t.content}"
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full border border-white/10 overflow-hidden relative flex-shrink-0">
                      {t.avatar ? (
                        <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full bg-primary-500/10 flex items-center justify-center text-primary-500 font-black text-xs">
                          {t.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-[11px] tracking-tight leading-none mb-1">{t.name}</h4>
                      <p className="text-white/40 text-[8px] font-bold uppercase tracking-widest leading-none">{t.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-0.5">
                    {Array(t.rating).fill(0).map((_, starIdx) => (
                      <span key={starIdx} className="text-primary-500 text-[9px]">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
