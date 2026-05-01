"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioGridSection() {
  const [portfolios, setPortfolios] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPortfolios() {
      try {
        const res = await fetch("/api/portfolio");
        const data = await res.json();
        setPortfolios(data.portfolios || []);
      } catch (err) {
        console.error("Failed to fetch portfolios:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPortfolios();
  }, []);

  return (
    <>
      <section className="relative w-full bg-black pb-12">
        {/* Volumetric splashes to match Hero Section */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[10%] left-[-10%] w-[50%] h-[40%] bg-primary-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[40%] bg-primary-500/10 blur-[120px] rounded-full" />
          
          {/* Subtle center-top beam to bridge from Hero */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-primary-500/30 to-transparent blur-[60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {loading ? (
              Array(6)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="relative w-full aspect-[4/3] p-[6px] md:p-2 rounded-[2rem] md:rounded-[2.25rem] bg-black border border-white/[0.04] shadow-2xl"
                  >
                    <div className="w-full h-full bg-black rounded-[1.6rem] md:rounded-[1.85rem] border border-primary-500/30 animate-pulse" />
                  </div>
                ))
            ) : portfolios.length > 0 ? (
              portfolios.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/portfolio/${item.id}`}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="relative w-full aspect-[4/3] p-[6px] md:p-2 rounded-md bg-black border border-white/[0.04] shadow-2xl transition-transform duration-500 group cursor-pointer hover:-translate-y-1"
                  >
                    <div className="relative w-full h-full bg-black rounded-md md:rounded-md border border-primary-500/30 shadow-[inset_0_0_40px_rgba(234,116,54,0.15),0_0_20px_rgba(234,116,54,0.1)] group-hover:border-primary-500/50 group-hover:shadow-[inset_0_0_60px_rgba(234,116,54,0.25),0_0_30px_rgba(234,116,54,0.2)] transition-all duration-500 overflow-hidden">
                      {/* Card Ambient Glow */}
                      <div className="absolute -inset-px bg-gradient-to-br from-primary-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                      {/* Image Background */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* The Hover Reveal Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                      {/* Details Content (Translates UP on Hover) */}
                      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
                        <h3 className="text-base md:text-lg font-bold text-white mb-1.5 leading-tight text-shadow-sm">
                          {item.title}
                        </h3>

                        <div className="flex items-center justify-between">
                          {/* Author / Client */}
                          <p className="text-white/90 text-sm md:text-[14px] font-medium">
                            {item.client}
                          </p>

                          {/* Likes and Views Metrics */}
                          <div className="flex items-center gap-3 text-white font-bold text-xs">
                            <span className="flex items-center gap-1">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M1 21H5V9H1V21ZM23 10C23 8.9 22.1 8 21 8H14.68L15.64 3.43L15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.59 7.59C7.22 7.95 7 8.45 7 9V19C7 20.1 7.9 21 9 21H18.28C19.13 21 19.86 20.48 20.18 19.71L22.86 13.47C22.95 13.22 23 12.96 23 12.69V10Z" />
                              </svg>
                              0
                            </span>
                            <span className="flex items-center gap-1">
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" />
                              </svg>
                              13
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-white/20 font-bold uppercase tracking-widest">
                  No Projects Found
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
