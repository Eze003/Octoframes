"use client";

import { useBlogs, useDeleteBlog } from "@/hooks/useAdminData";
import BlogTab from "@/components/admin/blog/BlogTab";

export default function AdminBlogPage() {
  const { data: blogs = [], isLoading, refetch } = useBlogs();
  const deleteBlogMutation = useDeleteBlog();

  return (
    <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <BlogTab
            blogs={blogs}
            loading={isLoading}
            onDelete={(id) => deleteBlogMutation.mutate(id)}
            onRefresh={() => refetch()}
          />
        </div>
      </main>
    </div>
  );
}
