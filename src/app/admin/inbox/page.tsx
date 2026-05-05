"use client";

import {
  useMessages,
  useMarkMessageRead,
  useDeleteMessage,
} from "@/hooks/useAdminData";
import InboxTab from "@/components/admin/inbox/InboxTab";

export default function AdminInboxPage() {
  const { data: messages = [], isLoading } = useMessages();
  const markReadMutation = useMarkMessageRead();
  const deleteMessageMutation = useDeleteMessage();

  return (
    <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <InboxTab
            messages={messages}
            loading={isLoading}
            onMarkRead={(msg) => markReadMutation.mutate(msg.id)}
            onDelete={(id) => deleteMessageMutation.mutate(id)}
          />
        </div>
      </main>
    </div>
  );
}
