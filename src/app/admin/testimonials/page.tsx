"use client";

import { useTestimonials, useDeleteTestimonial } from "@/hooks/useAdminData";
import { useState } from "react";
import TestimonialCard from "@/components/admin/testimonials/TestimonialCard";
import TestimonialFormModal from "@/components/admin/testimonials/TestimonialFormModal";
import { Testimonial } from "@/components/admin/types";

export default function AdminTestimonialsPage() {
  const { data: testimonials = [], isLoading, refetch } = useTestimonials();
  const deleteTestimonialMutation = useDeleteTestimonial();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<Testimonial | null>(null);

  const handleEdit = (testimonial: Testimonial) => {
    setEditTarget(testimonial);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditTarget(null);
    setIsModalOpen(true);
  };

  return (
    <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
      <header className="p-6 border-b border-white/[0.06] bg-[#050505] flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black text-white uppercase tracking-tighter">Testimonials</h1>
          <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mt-1">Manage client feedback</p>
        </div>
        <button 
          onClick={handleAdd}
          className="px-6 py-2.5 rounded-full bg-primary-500 text-white text-xs font-black uppercase tracking-widest hover:bg-primary-400 transition-all shadow-[0_0_20px_rgba(234,116,54,0.3)] active:scale-95"
        >
          + Add Testimonial
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-48 rounded-2xl bg-white/[0.02] border border-white/[0.06]" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <TestimonialCard 
                  key={t.id} 
                  testimonial={t} 
                  onEdit={() => handleEdit(t)}
                  onDelete={() => deleteTestimonialMutation.mutate(t.id)}
                />
              ))}
            </div>
          )}
          
          {!isLoading && testimonials.length === 0 && (
            <div className="py-20 text-center border-2 border-dashed border-white/[0.03] rounded-[32px]">
              <p className="text-white/20 text-xs font-black uppercase tracking-widest">No testimonials found</p>
            </div>
          )}
        </div>
      </main>

      {isModalOpen && (
        <TestimonialFormModal 
          editTarget={editTarget}
          onClose={() => setIsModalOpen(false)}
          onSaved={() => {
            refetch();
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
