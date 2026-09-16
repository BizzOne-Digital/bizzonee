import { NextResponse } from "next/server";
import { getContactSubmissions } from "@/lib/contactData";

export const runtime = "nodejs";

export async function GET() {
  const messages = await getContactSubmissions();
  return NextResponse.json(messages);
}
