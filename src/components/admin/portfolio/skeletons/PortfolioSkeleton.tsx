"use client";

import SkeletonBlock from "@/components/admin/skeletons/SkeletonBlock";

/** Skeleton for a single portfolio card in the grid */
function PortfolioCardSkeleton() {
  return (
    <div className="rounded-md border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden">
      {/* Thumbnail */}
      <div className="aspect-video relative overflow-hidden">
        <SkeletonBlock className="absolute inset-0 rounded-none" />
        {/* Subtle inner glow to give depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 to-transparent pointer-events-none" />
      </div>

      {/* Info rows */}
      <div className="p-4 space-y-2.5">
        <SkeletonBlock className="h-3.5 w-3/4" />
        <SkeletonBlock className="h-2.5 w-1/2" />
        <SkeletonBlock className="h-2 w-1/3" />
      </div>
    </div>
  );
}

/** Full portfolio tab skeleton: header bar + 6-card grid */
export default function PortfolioSkeleton() {
  return (
    <div>
      {/* Header row */}
      <div className="flex items-center justify-between mb-6">
        <SkeletonBlock className="h-5 w-36" />
        <SkeletonBlock className="h-9 w-32 rounded-md" />
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <PortfolioCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
