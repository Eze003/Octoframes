"use client";

import { Blog } from "@/components/admin/types";
import { motion } from "framer-motion";
import Image from "next/image";

interface BlogCardProps {
  blog: Blog;
  onEdit: (b: Blog) => void;
  onDelete: (id: number) => void;
}

export default function BlogCard({
  blog,
  onEdit,
  onDelete,
}: BlogCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-primary-500/50 hover:shadow-[0_20px_50px_rgba(234,116,54,0.15)] backdrop-blur-md"
    >
      {/* Cinematic Thumbnail Wrapper */}
      <div className="aspect-[16/10] bg-black relative overflow-hidden">
        {blog.coverImage ? (
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
            <span className="text-white/5 text-6xl font-black">BLOG</span>
          </div>
        )}
        
        {/* Overlay gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
            <span className={`px-2 py-1 rounded-full text-[9px] font-black uppercase tracking-widest backdrop-blur-md border ${blog.published ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'}`}>
                {blog.published ? 'Published' : 'Draft'}
            </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <span className="text-[10px] font-bold text-primary-400 uppercase tracking-widest mb-1 block">
              {blog.category}
            </span>
            <h3 className="font-bold text-white text-lg tracking-tight mb-2 group-hover:text-primary-300 transition-colors line-clamp-1">
              {blog.title}
            </h3>
            <p className="text-white/40 text-[11px] font-medium line-clamp-2 leading-relaxed">
              {blog.excerpt}
            </p>
          </div>
          
          <div className="bg-white/[0.05] border border-white/[0.1] rounded-lg px-2 py-1.5 flex flex-col items-center justify-center min-w-[50px] shrink-0">
             <span className="text-white/20 text-[8px] font-black uppercase leading-none mb-1">Time</span>
             <span className="text-white font-bold text-[10px] leading-none whitespace-nowrap">{blog.readTime}</span>
          </div>
        </div>
      </div>

      {/* Premium Integrated Floating Actions */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto">
        <button
          onClick={(e) => { e.stopPropagation(); onEdit(blog); }}
          className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-lg shadow-primary-500/40 hover:bg-primary-400 hover:scale-110 transition-all active:scale-95"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
        
        <button
          onClick={(e) => { e.stopPropagation(); if(confirm('Delete this post?')) onDelete(blog.id); }}
          className="w-8 h-8 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all active:scale-95"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
