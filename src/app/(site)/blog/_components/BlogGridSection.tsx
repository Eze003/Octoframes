"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/components/admin/types";

const CATEGORIES = [
  "All",
  "Motion Design",
  "Animation",
  "Behind the Scenes",
  "Tips & Tricks",
  "Industry",
];

export default function BlogGridSection() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/blog");
        const data = await res.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error("Failed to fetch blog posts:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="relative w-full bg-black pb-24">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-primary-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary-600 text-white shadow-[0_0_15px_rgba(234,116,54,0.4)]"
                  : "bg-white/[0.04] text-gray-400 border border-white/[0.06] hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Posts Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-[#0a0a0c] border border-white/[0.04] overflow-hidden"
                >
                  <div className="w-full aspect-[16/9] bg-white/[0.03] animate-pulse" />
                  <div className="p-6 space-y-3">
                    <div className="h-3 w-20 bg-white/[0.05] rounded animate-pulse" />
                    <div className="h-5 w-3/4 bg-white/[0.05] rounded animate-pulse" />
                    <div className="h-4 w-full bg-white/[0.05] rounded animate-pulse" />
                    <div className="h-4 w-2/3 bg-white/[0.05] rounded animate-pulse" />
                  </div>
                </div>
              ))}
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filtered.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative w-full aspect-[4/3] p-[6px] md:p-2 rounded-md bg-[#0a0a0c] border border-white/[0.04] shadow-2xl transition-transform duration-500 group cursor-pointer hover:-translate-y-1"
                >
                  <div className="relative w-full h-full bg-[#050505] rounded-md md:rounded-md border border-primary-500/30 shadow-[inset_0_0_40px_rgba(234,116,54,0.15),0_0_20px_rgba(234,116,54,0.1)] group-hover:border-primary-500/50 group-hover:shadow-[inset_0_0_60px_rgba(234,116,54,0.25),0_0_30px_rgba(234,116,54,0.2)] transition-all duration-500 overflow-hidden">
                    {/* Card Ambient Glow */}
                    <div className="absolute -inset-px bg-gradient-to-br from-primary-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                    {/* Image Background */}
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/5 flex items-center justify-center">
                        <span className="text-white/10 font-bold uppercase tracking-widest text-[10px]">
                          No Image
                        </span>
                      </div>
                    )}

                    {/* The Hover Reveal Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                    {/* Details Content (Translates UP on Hover) */}
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
                      <div className="text-[10px] font-black text-primary-400 uppercase tracking-widest mb-1.5">
                        {post.category}
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-tight text-shadow-sm">
                        {post.title}
                      </h3>

                      <div className="flex items-center justify-between">
                        {/* Author */}
                        <p className="text-white/60 text-xs md:text-[13px] font-medium">
                          By {post.author || "Octoframes"}
                        </p>

                        {/* Read Time */}
                        <div className="flex items-center gap-2 text-white/40 font-black text-[10px] uppercase tracking-widest">
                          {post.readTime}
                        </div>
                      </div>
                    </div>

                    {/* Date Badge (Always visible on hover or similar) */}
                    <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-black text-white/70 uppercase tracking-widest">
                        {formatDate(post.createdAt)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-16 h-16 rounded-full bg-primary-600/10 border border-primary-500/20 flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-primary-500/40"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
            </div>
            <p className="text-white/20 font-bold uppercase tracking-widest text-sm mb-2">
              No Posts Yet
            </p>
            <p className="text-gray-600 text-sm">
              Check back soon — we're working on something great.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
