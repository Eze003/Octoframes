"use client";

import { Message } from "@/components/admin/types";
import { motion } from "framer-motion";

interface MessageListItemProps {
  message: Message;
  isSelected: boolean;
  onClick: () => void;
}

export default function MessageListItem({
  message,
  isSelected,
  onClick,
}: MessageListItemProps) {
  return (
    <motion.button
      whileHover={{ x: 4 }}
      onClick={onClick}
      className={`relative w-full text-left p-4 rounded-xl border transition-all duration-300 group ${
        isSelected
          ? "bg-primary-500/10 border-primary-500/50 shadow-[0_0_20px_rgba(234,116,54,0.1)]"
          : message.isRead
          ? "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04]"
          : "bg-white/[0.06] border-primary-500/10 hover:border-primary-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
      }`}
    >
      {/* Selection Glow Bar */}
      {isSelected && (
        <div className="absolute left-0 top-3 bottom-3 w-1 bg-primary-500 rounded-r-full shadow-[0_0_12px_rgba(234,116,54,0.8)]" />
      )}

      <div className="pl-2">
        <div className="flex items-center justify-between mb-1.5">
          <span
            className={`text-sm font-bold tracking-tight transition-colors ${
              isSelected ? "text-primary-400" : message.isRead ? "text-white/60" : "text-white"
            }`}
          >
            {message.firstName} {message.lastName}
          </span>
          {!message.isRead && (
            <div className="flex items-center gap-1.5">
               <span className="text-[9px] font-black text-primary-400 uppercase bg-primary-500/10 px-1.5 py-0.5 rounded border border-primary-500/20">New</span>
               <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse shadow-[0_0_8px_rgba(234,116,54,0.6)]" />
            </div>
          )}
        </div>
        
        <p className="text-[11px] text-white/30 font-medium truncate mb-2">
          {message.email}
        </p>
        
        <p className={`text-xs leading-relaxed line-clamp-1 transition-colors ${
          isSelected ? "text-white/70" : "text-white/30"
        }`}>
          {message.message}
        </p>
        
        <div className="mt-3 flex items-center justify-between">
           <span className="text-[9px] font-bold text-white/20 uppercase tracking-wider">
            {new Date(message.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
           </span>
           <span className="text-[9px] font-bold text-white/10 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            Select to read ↵
           </span>
        </div>
      </div>
    </motion.button>
  );
}
