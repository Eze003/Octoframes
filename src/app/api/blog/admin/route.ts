import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import { BlogPost } from "@/entities/BlogPost";

export async function GET() {
  try {
    const db = await getDbConnection();
    const repo = db.getRepository(BlogPost);
    const posts = await repo.find({
      order: { createdAt: "DESC" },
    });
    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Failed to fetch admin blog posts:", error);
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
}
