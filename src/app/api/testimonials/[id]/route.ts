import "reflect-metadata";
import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import { Testimonial } from "@/entities/Testimonial";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const dataSource = await getDbConnection();
    const testimonialRepository = dataSource.getRepository(Testimonial);

    const testimonial = await testimonialRepository.findOne({ where: { id: Number(id) } });
    if (!testimonial) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 });
    }

    return NextResponse.json({ testimonial });
  } catch (error) {
    console.error("Error fetching testimonial:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const dataSource = await getDbConnection();
    const testimonialRepository = dataSource.getRepository(Testimonial);

    const testimonial = await testimonialRepository.findOneBy({ id: parseInt(id) } as any);
    if (!testimonial) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 });
    }

    Object.assign(testimonial, body);
    await testimonialRepository.save(testimonial);

    return NextResponse.json({ success: true, testimonial });
  } catch (error) {
    console.error("Error updating testimonial:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const dataSource = await getDbConnection();
    const testimonialRepository = dataSource.getRepository(Testimonial);

    await testimonialRepository.delete({ id: parseInt(id) });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
