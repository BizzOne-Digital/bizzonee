import { NextResponse } from "next/server";
import { getSiteContent, saveSiteContent, type SiteContent } from "@/lib/webdevData";

export const runtime = "nodejs";

export async function GET() {
  const content = await getSiteContent();
  return NextResponse.json(content);
}

export async function PUT(req: Request) {
  const body = (await req.json()) as SiteContent;
  await saveSiteContent(body);
  return NextResponse.json({ ok: true });
}
