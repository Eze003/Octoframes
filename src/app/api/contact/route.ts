import "reflect-metadata";
import { NextResponse } from "next/server";
import { getDbConnection } from "@/lib/db";
import { ContactMessage } from "@/entities/ContactMessage";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, country, companyType, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const dataSource = await getDbConnection();
    
    const messageRepository = dataSource.getRepository(ContactMessage);
    
    const newMessage = messageRepository.create({
      firstName,
      lastName,
      email,
      country,
      companyType,
      message,
    });

    await messageRepository.save(newMessage);

    return NextResponse.json({ success: true, id: newMessage.id }, { status: 201 });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const dataSource = await getDbConnection();
    const messageRepository = dataSource.getRepository(ContactMessage);
    
    const messages = await messageRepository.find({
      order: { createdAt: "DESC" },
    });

    return NextResponse.json({ messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
