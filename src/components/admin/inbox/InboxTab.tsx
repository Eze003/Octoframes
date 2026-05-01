"use client";

import { useState } from "react";
import { Message } from "@/components/admin/types";
import MessageListItem from "@/components/admin/inbox/MessageListItem";
import MessageDetail from "@/components/admin/inbox/MessageDetail";
import InboxSkeleton from "@/components/admin/inbox/skeletons/InboxSkeleton";

interface InboxTabProps {
  messages: Message[];
  loading: boolean;
  onMarkRead: (msg: Message) => void;
  onDelete: (id: number) => void;
}

export default function InboxTab({
  messages,
  loading,
  onMarkRead,
  onDelete,
}: InboxTabProps) {
  const [selectedMsg, setSelectedMsg] = useState<Message | null>(null);

  const handleSelect = (msg: Message) => {
    onMarkRead(msg);
    setSelectedMsg({ ...msg, isRead: true });
  };

  const handleDelete = (id: number) => {
    onDelete(id);
    if (selectedMsg?.id === id) setSelectedMsg(null);
  };

  if (loading && messages.length === 0) return <div className="p-4"><InboxSkeleton /></div>;

  return (
    <div className="flex flex-col md:flex-row gap-0 h-[calc(100vh-240px)] overflow-hidden rounded-[24px]">
      {/* Inbox Sidebar List */}
      <div className="w-full md:w-[380px] flex-shrink-0 flex flex-col border-r border-white/[0.06] bg-black/20">
        <div className="p-6 border-b border-white/[0.04] bg-white/[0.02] flex items-center justify-between">
          <h2 className="text-sm font-bold text-white tracking-tight">Recent Messages</h2>
          <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{messages.length} Total</span>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center px-4">
               <div className="w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center mb-4 text-xl">✉️</div>
               <p className="text-white/20 text-xs font-bold uppercase tracking-widest leading-relaxed">Your inbox is currently empty</p>
            </div>
          )}

          {messages.map((msg) => (
            <MessageListItem
              key={msg.id}
              message={msg}
              isSelected={selectedMsg?.id === msg.id}
              onClick={() => handleSelect(msg)}
            />
          ))}
        </div>
      </div>

      {/* Message Reader Panel */}
      <div className="flex-1 overflow-y-auto bg-black/40 relative custom-scrollbar">
        <div className="h-full p-4 md:p-8">
           <MessageDetail message={selectedMsg} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
