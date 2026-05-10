import "reflect-metadata";
import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import { Testimonial } from "@/entities/Testimonial";

export async function GET() {
  try {
    const dataSource = await getDbConnection();
    const testimonialRepository = dataSource.getRepository(Testimonial);

    const testimonials = await testimonialRepository.find({
      order: { createdAt: "DESC" },
    });

    return NextResponse.json({ testimonials });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, role, content, avatar, rating } = body;

    if (!name || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const dataSource = await getDbConnection();
    const testimonialRepository = dataSource.getRepository(Testimonial);

    const testimonial = testimonialRepository.create({
      name,
      role,
      content,
      avatar,
      rating: rating || 5,
    });

    await testimonialRepository.save(testimonial);

    return NextResponse.json({ success: true, testimonial }, { status: 201 });
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
