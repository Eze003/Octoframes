import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import { BlogPost } from "@/entities/BlogPost";

export async function GET() {
  try {
    const db = await getDbConnection();
    const repo = db.getRepository(BlogPost);
    const posts = await repo.find({
      where: { published: true },
      order: { createdAt: "DESC" },
    });
    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return NextResponse.json({ posts: [] }, { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const db = await getDbConnection();
    const repo = db.getRepository(BlogPost);
    const body = await request.json();

    const post = repo.create(body);
    await repo.save(post);

    return NextResponse.json(post);
  } catch (error) {
    console.error("Failed to create blog post:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
