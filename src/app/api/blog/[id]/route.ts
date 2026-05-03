import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import { BlogPost } from "@/entities/BlogPost";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const db = await getDbConnection();
    const repo = db.getRepository(BlogPost);

    const post = await repo.findOneBy({ id: parseInt(id) });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ post });
  } catch (error: any) {
    console.error("Failed to fetch blog post:", error);
    return NextResponse.json({ error: "Internal Server Error", message: error.message, stack: error.stack }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const db = await getDbConnection();
    const repo = db.getRepository(BlogPost);
    const body = await request.json();

    const post = await repo.findOneBy({ id: parseInt(id) });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    repo.merge(post, body);
    await repo.save(post);

    return NextResponse.json(post);
  } catch (error) {
    console.error("Failed to update blog post:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const db = await getDbConnection();
    const repo = db.getRepository(BlogPost);

    const post = await repo.findOneBy({ id: parseInt(id) });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    await repo.remove(post);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete blog post:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
