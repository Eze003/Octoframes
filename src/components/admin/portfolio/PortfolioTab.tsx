"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Portfolio } from "@/components/admin/types";
import PortfolioCard from "@/components/admin/portfolio/PortfolioCard";
import PortfolioFormModal from "@/components/admin/portfolio/PortfolioFormModal";
import PortfolioSkeleton from "@/components/admin/portfolio/skeletons/PortfolioSkeleton";

interface PortfolioTabProps {
  portfolios: Portfolio[];
  loading: boolean;
  onDelete: (id: number) => void;
  onRefresh: () => void;
}

export default function PortfolioTab({
  portfolios,
  loading,
  onDelete,
  onRefresh,
}: PortfolioTabProps) {
  const [showForm, setShowForm] = useState(false);
  const [editTarget, setEditTarget] = useState<Portfolio | null>(null);

  const openNew = () => {
    setEditTarget(null);
    setShowForm(true);
  };

  const openEdit = (p: Portfolio) => {
    setEditTarget(p);
    setShowForm(true);
  };

  // Only show skeleton on initial load (when portfolios is empty)
  // This prevents unmounting and losing state (like showForm) during refetches
  if (loading && portfolios.length === 0) {
    return <div className="p-8"><PortfolioSkeleton /></div>;
  }

  return (
    <div className="p-8">
      {/* Editorial Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
           <div className="text-[10px] font-black text-primary-400 uppercase tracking-[0.3em] mb-2 leading-none">Studio Management</div>
           <h2 className="text-3xl font-black text-white tracking-tight leading-none">Project Archive</h2>
        </div>
        
        <button
          onClick={openNew}
          className="group relative flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-primary-500 hover:text-white transition-all cursor-pointer"
        >
          <span className="text-lg leading-none">+</span>
          Create New Project
        </button>
      </div>

      {/* Grid of Cinematic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {portfolios.map((p) => (
          <PortfolioCard 
            key={p.id} 
            portfolio={p} 
            onEdit={openEdit} 
            onDelete={onDelete} 
          />
        ))}

        {portfolios.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-32 border-2 border-dashed border-white/[0.05] rounded-[32px] bg-white/[0.01]">
             <div className="w-16 h-16 rounded-full bg-white/[0.03] flex items-center justify-center mb-6 text-2xl">⚡️</div>
             <p className="text-white font-bold text-xl mb-2">No projects found</p>
             <p className="text-white/30 text-sm max-w-xs text-center leading-relaxed">Start by adding your first masterpiece to show off your agency&apos;s best work.</p>
             <button 
               onClick={openNew} 
               className="mt-8 text-primary-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors underline underline-offset-8 decoration-primary-500/40 cursor-pointer z-10"
             >
                Add First Project
             </button>
          </div>
        )}
      </div>

      {/* Standard Form Modal Overlay */}
      {showForm && (
        <PortfolioFormModal
          editTarget={editTarget}
          onClose={() => setShowForm(false)}
          onSaved={onRefresh}
        />
      )}
    </div>
  );
}
