import "reflect-metadata";
import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import { Portfolio } from "@/entities/Portfolio";

export async function GET() {
  try {
    const dataSource = await getDbConnection();
    const portfolioRepository = dataSource.getRepository("Portfolio");

    const portfolios = await portfolioRepository.find({
      order: { createdAt: "DESC" },
    });

    return NextResponse.json({ portfolios });
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, category, client, year, image, content, description, services } = body;

    if (!title || !category || !client) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const dataSource = await getDbConnection();
    const portfolioRepository = dataSource.getRepository("Portfolio");

    const portfolio = portfolioRepository.create({
      title,
      category,
      client,
      year,
      image,
      description,
      services,
      content: content || [],
    });

    await portfolioRepository.save(portfolio);

    return NextResponse.json({ success: true, portfolio }, { status: 201 });
  } catch (error) {
    console.error("Error creating portfolio:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
