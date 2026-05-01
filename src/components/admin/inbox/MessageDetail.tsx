"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Message } from "@/components/admin/types";

interface MessageDetailProps {
  message: Message | null;
  onDelete: (id: number) => void;
}

export default function MessageDetail({ message, onDelete }: MessageDetailProps) {
  if (!message) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 text-2xl">🔍</div>
        <h3 className="text-white font-bold text-lg mb-2 tracking-tight">Select a conversation</h3>
        <p className="text-white/40 text-xs max-w-[200px] leading-relaxed">Choose a message from the sidebar to view the full details and take action.</p>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={message.id}
        initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
        className="h-full flex flex-col"
      >
        {/* Header section with Meta */}
        <div className="mb-8 flex items-start justify-between">
          <div className="space-y-1">
             <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-black text-sm uppercase ring-4 ring-primary-500/10">
                  {message.firstName[0]}{message.lastName[0]}
                </div>
                <div>
                   <h3 className="text-2xl font-black text-white tracking-tight leading-none mb-1">
                    {message.firstName} {message.lastName}
                  </h3>
                  <p className="text-primary-400 text-[11px] font-bold uppercase tracking-wider">{message.email}</p>
                </div>
             </div>
          </div>
          
          <button
            onClick={() => onDelete(message.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/5 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest active:scale-95"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            Permanent Delete
          </button>
        </div>

        {/* Content Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
             <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] block mb-2">Origin Location</span>
             <p className="text-white font-bold text-sm">{message.country || "Not specified"}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
             <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] block mb-2">Company Type</span>
             <p className="text-white font-bold text-sm tracking-tight">{message.companyType || "Individual / Direct"}</p>
          </div>
        </div>

        {/* The Actual message "Card" */}
        <div className="flex-1 bg-white/[0.02] border border-white/[0.06] rounded-[24px] p-6 md:p-10 relative overflow-hidden group shadow-[inset_0_2px_20px_rgba(255,255,255,0.02)]">
          {/* Subtle decorative glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/10 blur-[30px] rounded-full group-hover:bg-primary-500/15 transition-all duration-700" />
          
          <span className="text-[9px] font-black text-primary-400/60 uppercase tracking-[0.3em] block mb-6">Subject Message Transcript</span>
          <p className="text-white/80 text-base leading-[1.8] font-medium whitespace-pre-line tracking-tight">
            {message.message}
          </p>
          
          <div className="mt-12 pt-8 border-t border-white/[0.04] flex items-center justify-between">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Verified Submission</span>
             </div>
             <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
              Received {new Date(message.createdAt).toLocaleString(undefined, { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
