import { NextRequest, NextResponse } from "next/server";
// @ts-ignore
import { Vimeo } from "@vimeo/vimeo";

const client = new Vimeo(
  process.env.VIMEO_CLIENT_ID!,
  process.env.VIMEO_CLIENT_SECRET!,
  process.env.VIMEO_ACCESS_TOKEN!
);

export async function POST(req: NextRequest) {
  try {
    const { fileName, fileSize, title, description } = await req.json();

    return new Promise<NextResponse>((resolve) => {
      client.request(
        {
          method: "POST",
          path: "/me/videos",
          query: {
            upload: {
              approach: "tus",
              size: fileSize,
            },
            name: title || fileName || "Untitled Project",
            description: description || "Uploaded from Octoframes Admin",
            privacy: {
              view: "anybody", // You can change this to 'disable' or 'anybody'
              embed: "public",
            },
          },
        },
        (error: any, body: any, statusCode: number, headers: any) => {
          if (error) {
            console.error("Vimeo API Error:", error);
            return resolve(
              NextResponse.json({ error: "Vimeo setup failed" }, { status: 500 })
            );
          }

          // body contains 'upload.upload_link' and 'uri'
          resolve(
            NextResponse.json({
              uploadLink: body.upload.upload_link,
              videoUri: body.uri,
              videoId: body.uri.split("/").pop(),
            })
          );
        }
      );
    });
  } catch (error) {
    console.error("Vimeo Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
