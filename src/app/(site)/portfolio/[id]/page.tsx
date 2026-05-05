"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { PortfolioVideoPlayer } from "@/components/ui/PortfolioVideoPlayer";

export default function PortfolioDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();
  const [project, setProject] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        const res = await fetch(`/api/portfolio/${id}`);
        const data = await res.json();
        if (data.portfolio) {
          setProject(data.portfolio);
        } else {
          router.push("/portfolio");
        }
      } catch (err) {
        console.error("Failed to fetch portfolio:", err);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchProject();
  }, [id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!project) return null;

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 overflow-x-hidden relative">
      {/* 🔥 Framer-style Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0c] to-black" />

        {/* Glow blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12 md:gap-8">
            {/* Left Section */}
            <div className="flex flex-col md:w-[55%] relative group">
              <div className="inline-flex items-center gap-3 px-1 py-1 rounded-full bg-[#111] border border-white/5 w-fit mb-8 relative overflow-hidden shadow-[0_0_30px_-10px_rgba(234,116,54,0.3)]">
                {/* Gradient Overlay from HTML */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                  background: 'conic-gradient(rgba(255, 255, 255, 0.15) 0deg, rgba(255, 255, 255, 0) 72deg, rgba(234, 116, 54, 0.2) 171.892deg, rgba(255, 255, 255, 0) 270deg, rgba(255, 255, 255, 0.15) 360deg)'
                }} />
                
                <span className="relative z-10 px-3 py-1 rounded-full bg-gradient-to-b from-primary-500 to-primary-700 text-[10px] font-bold text-white uppercase tracking-wider shadow-[inset_0_1px_rgba(255,255,255,0.2)]">
                  DATE
                </span>
                <span className="relative z-10 text-sm font-medium text-white/80 pr-4">
                  {project.createdAt
                    ? new Date(project.createdAt).toLocaleDateString("en-GB")
                    : "16/09/2024"}
                </span>
              </div>

              <h1 className="text-5xl md:text-[5.5rem] font-medium mb-6 leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
                {project.title}
              </h1>

              <p className="text-white/60 text-base md:text-[17px] max-w-lg leading-relaxed">
                {project.description ||
                  `${project.title} is a cutting-edge creative agency that brings innovative designs and strategic solutions to life.`}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <div className="relative px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[15px] text-white/80 overflow-hidden hover:bg-white/10 transition-colors backdrop-blur-sm shadow-[0_0_25px_-10px_rgba(234,116,54,0.2)]">
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    background: 'conic-gradient(rgba(255, 255, 255, 0.15) 0deg, rgba(255, 255, 255, 0) 72deg, rgba(234, 116, 54, 0.2) 171.892deg, rgba(255, 255, 255, 0) 270deg, rgba(255, 255, 255, 0.15) 360deg)'
                  }} />
                  {project.category}
                </div>
                <div className="relative px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[15px] text-white/80 overflow-hidden hover:bg-white/10 transition-colors backdrop-blur-sm shadow-[0_0_25px_-10px_rgba(234,116,54,0.2)]">
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    background: 'conic-gradient(rgba(255, 255, 255, 0.15) 0deg, rgba(255, 255, 255, 0) 72deg, rgba(234, 116, 54, 0.2) 171.892deg, rgba(255, 255, 255, 0) 270deg, rgba(255, 255, 255, 0.15) 360deg)'
                  }} />
                  Portfolio
                </div>
              </div>
            </div>

            {/* Right Section (Glass Card) */}
            <div className="hidden md:flex md:w-[40%] justify-end relative group">
              {/* Card Backlight Glows */}
              <div className="absolute -inset-4 bg-primary-500/10 blur-[60px] rounded-full opacity-60 -z-10" />
              {/* Atmospheric glow spanning from below to bottom-left */}
              <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] bg-primary-500/15 blur-[100px] rounded-full pointer-events-none -z-10" />
              
              <div className="w-full max-w-[420px] rounded-[16px] border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10 hover:bg-white/10 transition-colors duration-500 relative z-10 overflow-hidden">
                {/* Conic Gradient Overlay from HTML */}
                <div className="absolute inset-0 opacity-20 pointer-events-none z-0" style={{
                  background: 'conic-gradient(rgba(255, 255, 255, 0.15) 0deg, rgba(255, 255, 255, 0) 72deg, rgba(234, 116, 54, 0.2) 171.892deg, rgba(255, 255, 255, 0) 270deg, rgba(255, 255, 255, 0.15) 360deg)'
                }} />
                <div className="flex flex-col">
                  {/* Services */}
                  <div className="relative pb-6 mb-6 after:absolute after:bottom-0 after:left-0 after:w-2/3 after:h-[1px] after:bg-gradient-to-r after:from-white/10 after:to-transparent">
                    <h4 className="text-[14px] text-white/50 mb-2 font-medium">
                      Services
                    </h4>
                    <p className="text-white font-medium text-[17px]">
                      {project.services || "Web design & Web development"}
                    </p>
                  </div>

                  {/* Category */}
                  <div className="relative pb-6 mb-6 after:absolute after:bottom-0 after:left-0 after:w-2/3 after:h-[1px] after:bg-gradient-to-r after:from-white/10 after:to-transparent">
                    <h4 className="text-[14px] text-white/50 mb-2 font-medium">
                      Category
                    </h4>
                    <p className="text-white font-medium text-[17px]">
                      {project.category}
                    </p>
                  </div>

                  {/* Client */}
                  <div>
                    <h4 className="text-[14px] text-white/50 mb-2 font-medium">
                      Client
                    </h4>
                    <p className="text-white font-medium text-[17px]">
                      {project.client}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Collage / Media Reel */}
        <div className="w-full relative">
          {/* Thicker layered atmospheric glows spanning from media up to header */}
          <div className="absolute -top-[500px] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-primary-500/15 blur-[220px] rounded-[100%] pointer-events-none -z-10" />
          <div className="absolute -top-64 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-500/20 blur-[160px] rounded-[100%] pointer-events-none -z-10" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary-500/25 blur-[100px] rounded-[100%] pointer-events-none -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 w-full">
            {project.content?.map((media: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.05 }}
                style={{
                  gridColumn:
                    typeof window !== "undefined" && window.innerWidth > 768
                      ? `span ${media.span || 12}`
                      : "span 12",
                }}
                className="group relative"
              >
                {/* Constant Backlight Glow */}
                <div className="absolute -inset-4 bg-primary-500/15 blur-[40px] rounded-xl opacity-100" />
                
                <div className={`relative w-full h-full overflow-hidden rounded-md border border-white/10 bg-[#0a0a0c] shadow-[0_0_40px_-12px_rgba(234,116,54,0.2)] ${
                  (media.span || 12) === 12
                    ? "aspect-video"
                    : (media.span || 12) >= 6
                      ? "aspect-[4/3]"
                      : "aspect-square"
                }`}>
                  {/* Subtle Conic Gradient Overlay */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none z-10" style={{
                    background: 'conic-gradient(rgba(255, 255, 255, 0.1) 0deg, rgba(255, 255, 255, 0) 72deg, rgba(234, 116, 54, 0.1) 171.892deg, rgba(255, 255, 255, 0) 270deg, rgba(255, 255, 255, 0.1) 360deg)'
                  }} />

                  {media.type === "video" ? (
                    <PortfolioVideoPlayer
                      src={media.src}
                      className="w-full h-full"
                    />
                  ) : (
                    <Image
                      src={media.src}
                      alt={`Project Media ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes={
                        media.span === 12
                          ? "1200px"
                          : media.span === 6
                            ? "800px"
                            : "400px"
                      }
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
