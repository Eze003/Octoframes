"use client";

import { Testimonial } from "@/components/admin/types";
import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
  onEdit: () => void;
  onDelete: () => void;
}

export default function TestimonialCard({ testimonial, onEdit, onDelete }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 hover:border-primary-500/50 transition-all duration-500"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 overflow-hidden relative">
          {testimonial.avatar ? (
            <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/20 font-black text-lg">
              {testimonial.name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-white text-[13px] tracking-tight">{testimonial.name}</h4>
          <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">{testimonial.role}</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          {Array(5).fill(0).map((_, i) => (
            <span key={i} className={`text-[9px] ${i < testimonial.rating ? "text-primary-500" : "text-white/10"}`}>★</span>
          ))}
        </div>
      </div>

      <p className="text-white/60 text-[11px] leading-relaxed italic mb-5">
        "{testimonial.content}"
      </p>


      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={onEdit}
          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase text-white/60 hover:text-white hover:bg-white/10 transition-all"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-[10px] font-bold uppercase text-red-500/60 hover:text-red-500 hover:bg-red-500/20 transition-all"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
}
