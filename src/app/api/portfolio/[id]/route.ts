import "reflect-metadata";
import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import { Portfolio } from "@/entities/Portfolio";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const dataSource = await getDbConnection();
    const portfolioRepository = dataSource.getRepository(Portfolio);

    const portfolio = await portfolioRepository.findOne({ where: { id: Number(id) } });
    if (!portfolio) {
      return NextResponse.json({ error: "Portfolio not found" }, { status: 404 });
    }

    return NextResponse.json({ portfolio });
  } catch (error: any) {
    require("fs").writeFileSync("error.log", error?.stack || String(error));
    console.error("Error fetching portfolio:", error?.stack || error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const dataSource = await getDbConnection();
    const portfolioRepository = dataSource.getRepository(Portfolio);

    const portfolio = await portfolioRepository.findOneBy({ id: parseInt(id) } as any);
    if (!portfolio) {
      return NextResponse.json({ error: "Portfolio not found" }, { status: 404 });
    }

    Object.assign(portfolio, body);
    await portfolioRepository.save(portfolio);

    return NextResponse.json({ success: true, portfolio });
  } catch (error) {
    console.error("Error updating portfolio:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const dataSource = await getDbConnection();
    const portfolioRepository = dataSource.getRepository(Portfolio);

    await portfolioRepository.delete({ id: parseInt(id) });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting portfolio:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
