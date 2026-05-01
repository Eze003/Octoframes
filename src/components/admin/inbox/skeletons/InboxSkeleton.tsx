"use client";

import SkeletonBlock from "@/components/admin/skeletons/SkeletonBlock";

/** Skeleton for a single message list item in the inbox sidebar */
function MessageItemSkeleton() {
  return (
    <div className="p-4 rounded-md border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm space-y-2">
      <div className="flex items-center justify-between">
        <SkeletonBlock className="h-3.5 w-28" />
        <SkeletonBlock className="w-2 h-2 rounded-full" />
      </div>
      <SkeletonBlock className="h-2.5 w-40" />
      <SkeletonBlock className="h-2.5 w-full" />
      <SkeletonBlock className="h-2 w-16 mt-1" />
    </div>
  );
}

/** Skeleton for the message detail panel on the right */
function MessageDetailSkeleton() {
  return (
    <div className="rounded-[20px] p-1.5 border border-white/[0.06] bg-black/60 backdrop-blur-xl shadow-[0_0_40px_rgba(234,116,54,0.08)]">
      <div className="rounded-2xl border border-white/[0.06] bg-[#050505]/80 backdrop-blur-md p-8 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <SkeletonBlock className="h-5 w-48" />
            <SkeletonBlock className="h-3.5 w-36" />
          </div>
          <SkeletonBlock className="h-7 w-16 rounded-md" />
        </div>

        {/* Meta grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/[0.02] rounded-md p-3 border border-white/[0.06] space-y-2">
            <SkeletonBlock className="h-2.5 w-12" />
            <SkeletonBlock className="h-3.5 w-24" />
          </div>
          <div className="bg-white/[0.02] rounded-md p-3 border border-white/[0.06] space-y-2">
            <SkeletonBlock className="h-2.5 w-20" />
            <SkeletonBlock className="h-3.5 w-28" />
          </div>
        </div>

        {/* Message body */}
        <div className="bg-white/[0.02] rounded-md p-4 border border-white/[0.06] space-y-2.5">
          <SkeletonBlock className="h-2.5 w-16 mb-1" />
          <SkeletonBlock className="h-3 w-full" />
          <SkeletonBlock className="h-3 w-full" />
          <SkeletonBlock className="h-3 w-3/4" />
          <SkeletonBlock className="h-3 w-5/6" />
          <SkeletonBlock className="h-3 w-2/3" />
        </div>

        <SkeletonBlock className="h-2.5 w-48" />
      </div>
    </div>
  );
}

/** Full inbox skeleton: sidebar list + detail panel */
export default function InboxSkeleton() {
  return (
    <div className="flex gap-6 h-[calc(100vh-160px)]">
      {/* Sidebar skeleton */}
      <div className="w-80 flex-shrink-0 flex flex-col gap-2 overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <SkeletonBlock className="h-5 w-12" />
          <SkeletonBlock className="h-3 w-20" />
        </div>
        {Array.from({ length: 6 }).map((_, i) => (
          <MessageItemSkeleton key={i} />
        ))}
      </div>

      {/* Detail panel skeleton */}
      <div className="flex-1 overflow-hidden">
        <MessageDetailSkeleton />
      </div>
    </div>
  );
}
