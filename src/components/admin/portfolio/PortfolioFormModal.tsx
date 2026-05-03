"use client";

import { useState } from "react";
import { motion, Reorder } from "framer-motion";
import { Portfolio, ContentItem } from "@/components/admin/types";
import MediaUpload from "@/components/admin/MediaUpload";
import Image from "next/image";

interface PortfolioFormModalProps {
  editTarget: Portfolio | null;
  onClose: () => void;
  onSaved: () => void;
}

export default function PortfolioFormModal({
  editTarget,
  onClose,
  onSaved,
}: PortfolioFormModalProps) {
  const [pform, setPform] = useState({
    title: editTarget?.title ?? "",
    category: editTarget?.category ?? "",
    client: editTarget?.client ?? "",
    year: editTarget?.year ?? new Date().getFullYear().toString(),
    image: editTarget?.image ?? "",
    description: editTarget?.description ?? "",
    services: editTarget?.services ?? "",
  });
  const [contentItems, setContentItems] = useState<
    (ContentItem & { id: string })[]
  >(
    editTarget?.content?.map((item, idx) => ({
      ...item,
      id: Math.random().toString(36).substring(7) + idx,
    })) ?? [],
  );
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const addContentItem = () => {
    setContentItems((prev) => [
      ...prev,
      {
        type: "image",
        src: "",
        id: Math.random().toString(36).substring(7),
        span: 12,
      },
    ]);
  };

  const updateContentItem = (index: number, updates: Partial<ContentItem>) => {
    setContentItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, ...updates } : item)),
    );
  };

  const removeContentItem = (index: number) =>
    setContentItems((prev) => prev.filter((_, i) => i !== index));

  const moveItemUp = (index: number) => {
    if (index === 0) return;
    setContentItems((prev) => {
      const next = [...prev];
      [next[index], next[index - 1]] = [next[index - 1], next[index]];
      return next;
    });
  };

  const moveItemDown = (index: number) => {
    if (index === contentItems.length - 1) return;
    setContentItems((prev) => {
      const next = [...prev];
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaveStatus("idle");
    try {
      // Filter out empty items
      const cleanedContent = contentItems
        .filter((item) => item.src.trim() !== "")
        .map(({ id, ...rest }) => rest);
      const payload = { ...pform, content: cleanedContent };
      const url = editTarget
        ? `/api/portfolio/${editTarget.id}`
        : "/api/portfolio";
      const method = editTarget ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
        className="w-full max-w-5xl rounded-[28px] p-2 border border-[#222] bg-black shadow-[0_0_80px_rgba(234,116,54,0.4)]"
      >
        <div className="rounded-2xl border border-primary-500/30 bg-[#050505] shadow-[inset_0_0_30px_rgba(234,116,54,0.1)] p-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Side: Form Controls */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
                  {editTarget ? "Edit Project" : "New Project"}
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
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1.5 pl-1">
                      Title *
                    </label>
                    <input
                      required
                      value={pform.title}
                      onChange={(e) =>
                        setPform((p) => ({ ...p, title: e.target.value }))
                      }
                      placeholder="Project Title"
                      className="w-full px-3 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-white placeholder-gray-700 text-sm focus:outline-none focus:border-primary-500/50 transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1.5 pl-1">
                      Category *
                    </label>
                    <input
                      required
                      value={pform.category}
                      onChange={(e) =>
                        setPform((p) => ({ ...p, category: e.target.value }))
                      }
                      placeholder="e.g. Motion Graphics"
                      className="w-full px-3 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-white placeholder-gray-700 text-sm focus:outline-none focus:border-primary-500/50 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1.5 pl-1">
                      Client *
                    </label>
                    <input
                      required
                      value={pform.client}
                      onChange={(e) =>
                        setPform((p) => ({ ...p, client: e.target.value }))
                      }
                      placeholder="Client Name"
                      className="w-full px-3 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-white placeholder-gray-700 text-sm focus:outline-none focus:border-primary-500/50 transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1.5 pl-1">
                      Year
                    </label>
                    <input
                      value={pform.year}
                      onChange={(e) =>
                        setPform((p) => ({ ...p, year: e.target.value }))
                      }
                      placeholder="2025"
                      className="w-full px-3 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-white placeholder-gray-700 text-sm focus:outline-none focus:border-primary-500/50 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1.5 pl-1">
                    Services *
                  </label>
                  <input
                    required
                    value={pform.services}
                    onChange={(e) =>
                      setPform((p) => ({ ...p, services: e.target.value }))
                    }
                    placeholder="e.g. Web Design & Development"
                    className="w-full px-3 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-white placeholder-gray-700 text-sm focus:outline-none focus:border-primary-500/50 transition-all font-medium"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1.5 pl-1">
                    Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={pform.description}
                    onChange={(e) =>
                      setPform((p) => ({ ...p, description: e.target.value }))
                    }
                    placeholder="Project description..."
                    className="w-full px-3 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-white placeholder-gray-700 text-sm focus:outline-none focus:border-primary-500/50 transition-all font-medium resize-none"
                  />
                </div>

                {/* Hero image */}
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-1.5 pl-1">
                    Hero Image
                  </label>
                  {pform.image ? (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-3 border border-white/10 group">
                      <Image
                        src={pform.image}
                        alt="Cover Preview"
                        fill
                        className="object-cover"
                        sizes="600px"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <button
                          type="button"
                          onClick={() => setPform((p) => ({ ...p, image: "" }))}
                          className="px-4 py-2 bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <MediaUpload
                      label="Upload Hero Image"
                      onUpload={(url) =>
                        setPform((p) => ({ ...p, image: url }))
                      }
                    />
                  )}
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={saving}
                    className="w-full py-4 rounded-md bg-gradient-to-b from-primary-500 to-primary-700 text-white font-bold text-sm border border-white/20 shadow-[0_0_24px_rgba(234,116,54,0.4)] hover:shadow-[0_0_40px_rgba(234,116,54,0.6)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
                  >
                    {saving
                      ? "Transmitting..."
                      : editTarget
                        ? "Commit Changes"
                        : "Deploy Project"}
                  </button>
                </div>

                {saveStatus === "success" && (
                  <p className="text-center text-green-400 text-xs font-bold uppercase tracking-widest animate-pulse mt-4">
                    ✓ Mission Accomplished!
                  </p>
                )}
                {saveStatus === "error" && (
                  <p className="text-center text-red-500 text-xs font-bold uppercase tracking-widest mt-4">
                    ✕ Transmission Interrupted. Try again.
                  </p>
                )}
              </form>
            </div>

            {/* Right Side: Media Arrangement (The Drag & Drop Zone) */}
            <div className="w-full lg:w-[400px] border-t lg:border-t-0 lg:border-l border-white/10 pt-10 lg:pt-0 lg:pl-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-widest">
                    Collage Layout
                  </h3>
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mt-1">
                    Drag to reorder sequence
                  </p>
                </div>
                <button
                  type="button"
                  onClick={addContentItem}
                  className="px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-[10px] font-black text-primary-400 uppercase tracking-widest hover:bg-primary-500 hover:text-white transition-all"
                >
                  + Add Media
                </button>
              </div>

              {/* REAL-TIME COLLAGE PREVIEW */}
              <div className="mb-8 p-4 rounded-[24px] bg-white/[0.02] border border-white/[0.05]">
                <label className="block text-[10px] uppercase font-black tracking-widest text-primary-400 mb-4 pl-1">
                  Live Custom Collage Preview
                </label>

                <div className="grid grid-cols-12 gap-2 w-full">
                  {contentItems.map((item, i) => (
                    <div
                      key={item.id}
                      style={{ gridColumn: `span ${item.span || 12}` }}
                      className={`relative rounded-lg overflow-hidden border border-white/10 bg-black min-h-[50px] ${
                        (item.span || 12) === 12
                          ? "aspect-video"
                          : (item.span || 12) >= 6
                            ? "aspect-[4/3]"
                            : "aspect-square"
                      }`}
                    >
                      {item.src ? (
                        item.type === "video" ? (
                          <div className="w-full h-full flex items-center justify-center text-[8px] font-bold text-white/20 uppercase bg-primary-500/5">
                            Video
                          </div>
                        ) : (
                          <Image
                            src={item.src}
                            alt="Preview"
                            fill
                            className="object-cover opacity-60"
                            sizes="200px"
                          />
                        )
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[8px] font-bold text-white/5 uppercase">
                          Slot {i + 1}
                        </div>
                      )}
                      <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/60 text-[6px] text-white/40 font-black">
                        {(item.span || 12) === 12
                          ? "FULL"
                          : (item.span || 12) === 6
                            ? "1/2"
                            : (item.span || 12) === 4
                              ? "1/3"
                              : "1/4"}
                      </div>
                    </div>
                  ))}
                  {contentItems.length === 0 && (
                    <div className="col-span-full h-40 flex items-center justify-center border border-dashed border-white/10 rounded-xl">
                      <span className="text-[10px] text-white/10 font-bold uppercase tracking-widest">
                        No Media Uploaded
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <Reorder.Group
                axis="y"
                values={contentItems}
                onReorder={setContentItems}
                className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar"
              >
                {contentItems.map((item, i) => (
                  <Reorder.Item
                    key={item.id}
                    value={item}
                    className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 cursor-grab active:cursor-grabbing hover:border-primary-500/30 transition-colors"
                  >
                    <div className="flex gap-4 items-center">
                      {/* Preview Thumbnail */}
                      <div className="w-16 h-16 rounded-xl bg-black border border-white/10 overflow-hidden relative shrink-0">
                        {item.src ? (
                          item.type === "video" ? (
                            <div className="w-full h-full flex items-center justify-center text-[10px] text-white/40 font-bold uppercase">
                              Video
                            </div>
                          ) : (
                            <Image
                              src={item.src}
                              alt="Reorder preview"
                              fill
                              className="object-cover"
                              sizes="100px"
                            />
                          )
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[10px] text-white/10 font-bold uppercase">
                            Empty
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <select
                            value={item.type}
                            onChange={(e) =>
                              updateContentItem(i, {
                                type: e.target.value as any,
                              })
                            }
                            className="bg-transparent text-[10px] font-black text-primary-400 uppercase tracking-widest focus:outline-none cursor-pointer"
                          >
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                            <option value="gif">GIF</option>
                          </select>
                          <span className="text-[10px] text-white/10">•</span>
                          <div className="flex items-center gap-1">
                            {[
                              { val: 3, label: "1/4" },
                              { val: 4, label: "1/3" },
                              { val: 6, label: "1/2" },
                              { val: 12, label: "FULL" },
                            ].map((s) => (
                              <button
                                key={s.val}
                                type="button"
                                onClick={() =>
                                  updateContentItem(i, { span: s.val })
                                }
                                className={`px-1.5 h-5 flex items-center justify-center rounded text-[7px] font-black transition-all ${
                                  (item.span || 12) === s.val
                                    ? "bg-primary-500 text-white shadow-sm"
                                    : "bg-white/[0.03] text-white/30 hover:bg-white/10"
                                }`}
                              >
                                {s.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {!item.src ? (
                          <MediaUpload
                            label="Upload"
                            type={item.type as "image" | "video" | "gif"}
                            onUpload={(url) =>
                              updateContentItem(i, { src: url })
                            }
                          />
                        ) : (
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => updateContentItem(i, { src: "" })}
                              className="text-[9px] font-black uppercase text-white/40 hover:text-white transition-colors tracking-widest"
                            >
                              Replace
                            </button>
                            <button
                              type="button"
                              onClick={() => removeContentItem(i)}
                              className="text-[9px] font-black uppercase text-red-500/40 hover:text-red-500 transition-colors tracking-widest"
                            >
                              Remove
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Drag Handle Icon */}
                      <div className="text-white/10 group-hover:text-white/30 transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="8" y1="9" x2="16" y2="9" />
                          <line x1="8" y1="15" x2="16" y2="15" />
                        </svg>
                      </div>
                    </div>
                  </Reorder.Item>
                ))}
              </Reorder.Group>

              {contentItems.length === 0 && (
                <div className="py-20 border-2 border-dashed border-white/[0.03] rounded-[32px] flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white/[0.02] flex items-center justify-center mb-4 text-xl">
                    🎞️
                  </div>
                  <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">
                    No media items in collage
                  </p>
                  <button
                    type="button"
                    onClick={addContentItem}
                    className="mt-4 text-primary-400 text-[10px] font-black uppercase tracking-widest hover:text-white transition-all underline underline-offset-4"
                  >
                    Add Your First Item
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
