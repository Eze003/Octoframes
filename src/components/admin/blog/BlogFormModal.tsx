"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Blog } from "@/components/admin/types";
import MediaUpload from "@/components/admin/MediaUpload";
import Image from "next/image";

interface BlogFormModalProps {
  editTarget: Blog | null;
  onClose: () => void;
  onSaved: () => void;
}

export default function BlogFormModal({
  editTarget,
  onClose,
  onSaved,
}: BlogFormModalProps) {
  const [bform, setBform] = useState({
    title: editTarget?.title ?? "",
    category: editTarget?.category ?? "Motion Design",
    excerpt: editTarget?.excerpt ?? "",
    content: editTarget?.content ?? "",
    coverImage: editTarget?.coverImage ?? "",
    author: editTarget?.author ?? "Octoframes Studio",
    readTime: editTarget?.readTime ?? "5 min",
    published: editTarget?.published ?? true,
  });
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaveStatus("idle");
    try {
      const url = editTarget ? `/api/blog/${editTarget.id}` : "/api/blog";
      const method = editTarget ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bform),
      });
      if (!res.ok) throw new Error("Failed");
      setSaveStatus("success");
      onSaved();
      setTimeout(() => onClose(), 900);
    } catch {
      setSaveStatus("error");
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-xl flex items-start justify-center overflow-y-auto py-10 px-4"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-4xl rounded-[28px] p-2 border border-[#222] bg-black shadow-[0_0_80px_rgba(234,116,54,0.4)]"
      >
        <div className="rounded-2xl border border-primary-500/30 bg-[#050505] shadow-[inset_0_0_30px_rgba(234,116,54,0.1)] p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
              {editTarget ? "Edit Post" : "New Editorial"}
            </h2>
            <button
              onClick={onClose}
              type="button"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white text-lg transition-all border border-white/10 hover:border-white/20"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1.5 pl-1">Title *</label>
                  <input
                    required
                    value={bform.title}
                    onChange={(e) => setBform((p) => ({ ...p, title: e.target.value }))}
                    placeholder="Blog Post Title"
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-gray-700 text-sm focus:outline-none focus:border-primary-500/50 transition-all font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1.5 pl-1">Category</label>
                    <input
                      required
                      value={bform.category}
                      onChange={(e) => setBform((p) => ({ ...p, category: e.target.value }))}
                      placeholder="e.g. Tips & Tricks"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-gray-700 text-sm focus:outline-none focus:border-primary-500/50 transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1.5 pl-1">Read Time</label>
                    <input
                      value={bform.readTime}
                      onChange={(e) => setBform((p) => ({ ...p, readTime: e.target.value }))}
                      placeholder="5 min"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-gray-700 text-sm focus:outline-none focus:border-primary-500/50 transition-all font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1.5 pl-1">Excerpt</label>
                  <textarea
                    required
                    rows={3}
                    value={bform.excerpt}
                    onChange={(e) => setBform((p) => ({ ...p, excerpt: e.target.value }))}
                    placeholder="Short summary for the grid card..."
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-gray-700 text-sm focus:outline-none focus:border-primary-500/50 transition-all font-medium resize-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1.5 pl-1">Status</label>
                  <div className="flex items-center gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setBform(p => ({ ...p, published: true }))}
                      className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${bform.published ? 'bg-green-500 text-white' : 'bg-white/5 text-white/20'}`}
                    >
                      Published
                    </button>
                    <button
                      type="button"
                      onClick={() => setBform(p => ({ ...p, published: false }))}
                      className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${!bform.published ? 'bg-yellow-500 text-white' : 'bg-white/5 text-white/20'}`}
                    >
                      Draft
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1.5 pl-1">Cover Image</label>
                  {bform.coverImage ? (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-3 border border-white/10 group">
                      <Image src={bform.coverImage} alt="Cover Preview" fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button 
                          type="button"
                          onClick={() => setBform(p => ({ ...p, coverImage: "" }))}
                          className="px-4 py-2 bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <MediaUpload onUpload={(url) => setBform(p => ({ ...p, coverImage: url }))} />
                  )}
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1.5 pl-1">Author</label>
                  <input
                    required
                    value={bform.author}
                    onChange={(e) => setBform((p) => ({ ...p, author: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-gray-700 text-sm focus:outline-none focus:border-primary-500/50 transition-all font-medium"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1.5 pl-1">Full Content (Markdown Supported)</label>
              <textarea
                required
                rows={12}
                value={bform.content}
                onChange={(e) => setBform((p) => ({ ...p, content: e.target.value }))}
                placeholder="Write your story here..."
                className="w-full px-4 py-4 bg-white/[0.04] border border-white/[0.08] rounded-2xl text-white placeholder-gray-700 text-sm focus:outline-none focus:border-primary-500/50 transition-all font-medium leading-relaxed"
              />
            </div>

            <div className="pt-4 flex gap-4">
               <button
                type="submit"
                disabled={saving}
                className="flex-1 py-4 rounded-xl bg-gradient-to-b from-primary-500 to-primary-700 text-white font-black text-xs uppercase tracking-widest border border-white/20 shadow-[0_0_24px_rgba(234,116,54,0.4)] hover:shadow-[0_0_40px_rgba(234,116,54,0.6)] transition-all duration-300 disabled:opacity-60 active:scale-[0.98]"
              >
                {saving ? "Transmitting..." : editTarget ? "Update Post" : "Publish Post"}
              </button>
            </div>

            {saveStatus === "success" && (
              <p className="text-center text-green-400 text-[10px] font-black uppercase tracking-widest animate-pulse">✓ Mission Accomplished!</p>
            )}
            {saveStatus === "error" && (
              <p className="text-center text-red-500 text-[10px] font-black uppercase tracking-widest">✕ Transmission Failed.</p>
            )}
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
