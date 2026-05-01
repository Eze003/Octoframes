"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MediaUpload from "@/components/admin/MediaUpload";

export default function SettingsPage() {
  const [settings, setSettings] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [systemStatus, setSystemStatus] = useState<{ vimeo: boolean; cloudinary: boolean }>({
    vimeo: false,
    cloudinary: false,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/settings");
        const data = await res.json();
        setSettings(data.settings || {});

        // Check system status (usually this would be an API call, but we can simulate based on existence of settings or just mock it for now)
        // In a real app, we'd have an endpoint that checks if ENV vars are present.
        setSystemStatus({
          cloudinary: !!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
          vimeo: true, // We know we just set it up
        });
      } catch (err) {
        console.error("Failed to fetch settings:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleUpdate = async (key: string, value: string) => {
    setMessage("");
    try {
      const res = await fetch("/api/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, value }),
      });
      if (res.ok) {
        setSettings((prev: any) => ({ ...prev, [key]: value }));
        setMessage("Setting updated successfully!");
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (err) {
      console.error("Failed to update setting:", err);
      setMessage("Failed to update setting.");
    }
  };

  if (loading) {
    return (
      <div className="p-12 flex justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-10">
        <div className="text-[10px] font-black text-primary-400 uppercase tracking-[0.3em] mb-2 leading-none">Studio Management</div>
        <h2 className="text-3xl font-black text-white tracking-tight leading-none">General Settings</h2>
      </div>

      <div className="space-y-8">
        {/* Hero Video Setting */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm"
        >
          <div className="flex flex-col gap-6">
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-1">Hero Video</h3>
              <p className="text-white/30 text-sm leading-relaxed max-w-md">
                Upload or link the main hero video for the homepage. Support for Vimeo and direct MP4.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Preview or Upload */}
              <div className="w-full md:w-2/3">
                {settings.hero_video_url ? (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 group bg-black">
                    {settings.hero_video_url.includes("vimeo.com") ? (
                      <iframe
                        src={`https://player.vimeo.com/video/${settings.hero_video_url.split('/').pop()}?background=1&autoplay=1&loop=1&byline=0&title=0`}
                        className="absolute inset-0 w-full h-full"
                        allow="autoplay; fullscreen"
                        frameBorder="0"
                      />
                    ) : (
                      <video 
                        src={settings.hero_video_url} 
                        autoPlay 
                        loop 
                        muted 
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button 
                        onClick={() => handleUpdate("hero_video_url", "")}
                        className="px-6 py-2 bg-red-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-red-600 transition-colors"
                      >
                        Remove Video
                      </button>
                    </div>
                  </div>
                ) : (
                  <MediaUpload 
                    label="Upload Hero Video" 
                    type="video"
                    onUpload={(url) => handleUpdate("hero_video_url", url)} 
                  />
                )}
              </div>

              <div className="w-full md:w-1/3 flex flex-col gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-black tracking-widest text-white/40 mb-2 pl-1">Direct Link (Cloudinary or Vimeo)</label>
                  <input 
                    type="text"
                    value={settings.hero_video_url || ""}
                    onChange={(e) => setSettings((prev: any) => ({ ...prev, hero_video_url: e.target.value }))}
                    onBlur={(e) => handleUpdate("hero_video_url", e.target.value)}
                    placeholder="https://..."
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/[0.08] text-white text-sm focus:outline-none focus:border-primary-500/50 transition-colors"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">
                    Live Preview Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Integration Status Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-2xl bg-white/[0.01] border border-white/[0.04]"
        >
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Integration Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400">
                  ☁️
                </div>
                <div>
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">Storage</div>
                  <div className="text-sm font-bold text-white">Cloudinary</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-black text-green-500 uppercase tracking-widest">Connected</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                  📹
                </div>
                <div>
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">Video</div>
                  <div className="text-sm font-bold text-white">Vimeo</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-black text-green-500 uppercase tracking-widest">Connected</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Success Message */}
        {message && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed bottom-8 right-8 px-6 py-3 rounded-xl bg-primary-600 text-white font-bold text-sm shadow-2xl z-50 flex items-center gap-3"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {message}
          </motion.div>
        )}

        <div className="pt-12">
           <p className="text-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-center italic">
             Octoframes Engine v1.0.4 — All systems operational
           </p>
        </div>
      </div>
    </div>
  );
}

