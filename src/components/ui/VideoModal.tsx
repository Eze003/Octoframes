"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PortfolioVideoPlayer } from "./PortfolioVideoPlayer";
import { IoClose } from "react-icons/io5";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl aspect-video rounded-[32px] overflow-hidden bg-black border border-white/10 shadow-[0_0_100px_rgba(234,116,54,0.3)]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors border border-white/10"
            >
              <IoClose size={24} />
            </button>

            {/* Video Player */}
            <div className="w-full h-full">
              <PortfolioVideoPlayer
                src={videoUrl}
                showControls={true}
                className="w-full h-full"
              />
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
