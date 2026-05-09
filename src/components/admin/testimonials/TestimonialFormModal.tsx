"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Testimonial } from "@/components/admin/types";
import MediaUpload from "@/components/admin/MediaUpload";
import Image from "next/image";

interface TestimonialFormModalProps {
  editTarget: Testimonial | null;
  onClose: () => void;
  onSaved: () => void;
}

export default function TestimonialFormModal({
  editTarget,
  onClose,
  onSaved,
}: TestimonialFormModalProps) {
  const [form, setForm] = useState({
    name: editTarget?.name ?? "",
    role: editTarget?.role ?? "",
    content: editTarget?.content ?? "",
    avatar: editTarget?.avatar ?? "",
    rating: editTarget?.rating ?? 5,
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const url = editTarget ? `/api/testimonials/${editTarget.id}` : "/api/testimonials";
      const method = editTarget ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      onSaved();
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-xl bg-[#050505] border border-white/10 rounded-[32px] p-8"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-black text-white uppercase tracking-tighter">
            {editTarget ? "Edit Testimonial" : "New Testimonial"}
          </h2>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-2">Name *</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-primary-500/50"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-2">Role/Company</label>
              <input
                value={form.role}
                onChange={(e) => setForm(p => ({ ...p, role: e.target.value }))}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-primary-500/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-2">Feedback *</label>
            <textarea
              required
              rows={4}
              value={form.content}
              onChange={(e) => setForm(p => ({ ...p, content: e.target.value }))}
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-primary-500/50 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-2">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(r => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setForm(p => ({ ...p, rating: r }))}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black transition-all ${
                      form.rating >= r ? "bg-primary-500 text-white" : "bg-white/5 text-white/20"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-2">Avatar</label>
              {form.avatar ? (
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 group">
                  <Image src={form.avatar} alt="Avatar" fill className="object-cover" />
                  <button 
                    type="button"
                    onClick={() => setForm(p => ({ ...p, avatar: "" }))}
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[8px] text-white font-bold"
                  >
                    Clear
                  </button>
                </div>
              ) : (
                <MediaUpload onUpload={(url) => setForm(p => ({ ...p, avatar: url }))} label="Upload" />
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full py-4 rounded-xl bg-gradient-to-b from-primary-500 to-primary-700 text-white font-black text-xs uppercase tracking-widest shadow-[0_0_24px_rgba(234,116,54,0.4)] disabled:opacity-50"
          >
            {saving ? "Transmitting..." : editTarget ? "Update Testimonial" : "Post Testimonial"}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
