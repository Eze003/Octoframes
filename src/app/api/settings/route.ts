import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import { Setting } from "@/entities/Setting";

export async function GET() {
  try {
    const db = await getDbConnection();
    const repo = db.getRepository(Setting);
    const settings = await repo.find();

    // Transform to key-value object for easier frontend use
    const config = settings.reduce(
      (acc, s) => ({ ...acc, [s.key]: s.value }),
      {},
    );

    return NextResponse.json({ settings: config });
  } catch (error) {
    console.error("Failed to fetch settings:", error);
    return NextResponse.json({ settings: {} });
  }
}

export async function PATCH(request: Request) {
  try {
    const db = await getDbConnection();
    const repo = db.getRepository(Setting);
    const { key, value } = await request.json();

    if (!key) {
      return NextResponse.json({ error: "Key is required" }, { status: 400 });
    }

    let setting = await repo.findOneBy({ key });
    if (setting) {
      setting.value = value;
    } else {
      setting = repo.create({ key, value });
    }

    await repo.save(setting);

    return NextResponse.json({ success: true, setting });
  } catch (error) {
    console.error("Failed to update setting:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
