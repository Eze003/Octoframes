"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

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
      {/* Softened Background Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[80%] h-[700px] bg-[#EA7436]/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 z-0 mix-blend-screen" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[600px] bg-[#d45e22]/10 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12 md:gap-8">
            {/* Left Section */}
            <div className="flex flex-col md:w-[55%]">
              <div className="inline-flex items-center gap-3 px-1 py-1 rounded-full bg-[#111] border border-white/5 w-fit mb-4">
                <span className="px-3 py-1 rounded-full bg-[#EA7436] text-[10px] font-bold text-white uppercase tracking-wider">
                  DATE
                </span>
                <span className="text-sm font-medium text-white/60 pr-4">
                  {project.createdAt
                    ? new Date(project.createdAt).toLocaleDateString("en-GB")
                    : "16/09/2024"}
                </span>
              </div>

              <h1 className="text-5xl md:text-[5.5rem] font-medium text-white mb-6 leading-[1.1] tracking-tight">
                {project.title}
              </h1>

              <p className="text-white/60 text-base md:text-[17px] max-w-lg leading-relaxed">
                {project.title} is a cutting-edge creative agency that brings
                innovative designs and strategic solutions to life.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[15px] text-white/80 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[15px] text-white/80 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Portfolio
                </span>
              </div>
            </div>

            {/* Right Section (Glass Card) */}
            <div className="w-full md:w-[40%] flex justify-end">
              <div className="w-full max-w-[420px] rounded-[16px] border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(234,116,54,0.1)] hover:bg-white/10 transition-colors duration-500">
                <div className="flex flex-col">
                  {/* Services */}
                  <div className="relative pb-6 mb-6 after:absolute after:bottom-0 after:left-0 after:w-2/3 after:h-[1px] after:bg-gradient-to-r after:from-white/10 after:to-transparent">
                    <h4 className="text-[14px] text-white/50 mb-2 font-medium">
                      Services
                    </h4>
                    <p className="text-white font-medium text-[17px]">
                      Web design & Web development
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
        <div className="w-full">
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
                className={`relative w-full overflow-hidden rounded-md border border-white/10 bg-[#0a0a0c] ${
                  (media.span || 12) === 12
                    ? "aspect-video"
                    : (media.span || 12) >= 6
                      ? "aspect-[4/3]"
                      : "aspect-square"
                }`}
              >
                {media.type === "video" ? (
                  <video
                    src={media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
