"use client";

import { useState } from "react";
import { Blog } from "@/components/admin/types";
import BlogCard from "@/components/admin/blog/BlogCard";
import BlogFormModal from "@/components/admin/blog/BlogFormModal";
import PortfolioSkeleton from "@/components/admin/portfolio/skeletons/PortfolioSkeleton"; // Reusing the same skeleton pattern
import Image from "next/image";
import DeleteModal from "@/components/admin/DeleteModal";

interface BlogTabProps {
  blogs: Blog[];
  loading: boolean;
  onDelete: (id: number) => void;
  onRefresh: () => void;
}

export default function BlogTab({
  blogs,
  loading,
  onDelete,
  onRefresh,
}: BlogTabProps) {
  const [showForm, setShowForm] = useState(false);
  const [editTarget, setEditTarget] = useState<Blog | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const openNew = () => {
    setEditTarget(null);
    setShowForm(true);
  };

  const openEdit = (b: Blog) => {
    setEditTarget(b);
    setShowForm(true);
  };

  if (loading && blogs.length === 0) {
    return (
      <div className="p-8">
        <PortfolioSkeleton />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 md:gap-0">
        <div>
          <div className="text-[10px] font-black text-primary-400 uppercase tracking-[0.3em] mb-2 leading-none">
            Studio Management
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">
            Blog Editorial
          </h2>
        </div>

        <button
          onClick={openNew}
          className="group relative flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-primary-500 hover:text-white transition-all cursor-pointer w-full md:w-auto"
        >
          <span className="text-lg leading-none">+</span>
          Create New Post
        </button>
      </div>

      {/* Grid of Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {blogs.map((b) => (
          <BlogCard key={b.id} blog={b} onEdit={openEdit} onDelete={(id) => setDeleteId(id)} />
        ))}

        {blogs.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-32 border-2 border-dashed border-white/[0.05] rounded-[32px] bg-white/[0.01]">
            <div className="w-16 h-16 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-2xl">
              📝
            </div>
            <p className="text-white font-bold text-xl mb-2">
              No blog posts found
            </p>
            <p className="text-white/30 text-sm max-w-xs text-center leading-relaxed">
              Share your thoughts, industry news, or studio updates with the
              world.
            </p>
            <button
              onClick={openNew}
              className="mt-8 text-primary-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors underline underline-offset-8 decoration-primary-500/40 cursor-pointer z-10"
            >
              Create Your First Post
            </button>
          </div>
        )}
      </div>

      {showForm && (
        <BlogFormModal
          editTarget={editTarget}
          onClose={() => setShowForm(false)}
          onSaved={onRefresh}
        />
      )}

      <DeleteModal 
        isOpen={deleteId !== null}
        onClose={() => setDeleteId(null)}
        onConfirm={() => deleteId && onDelete(deleteId)}
        title="Delete Post"
        message="Are you sure you want to permanently remove this blog post from the studio archive?"
      />
    </div>
  );
}
