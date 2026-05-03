import "reflect-metadata";
import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import { ContactMessage } from "@/entities/ContactMessage";

export async function PATCH(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const dataSource = await getDbConnection();
    const messageRepository = dataSource.getRepository(ContactMessage);

    const message = await messageRepository.findOneBy({ id: parseInt(id) });
    if (!message) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 });
    }

    message.isRead = true;
    await messageRepository.save(message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error marking as read:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const dataSource = await getDbConnection();
    const messageRepository = dataSource.getRepository(ContactMessage);

    await messageRepository.delete({ id: parseInt(id) });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
