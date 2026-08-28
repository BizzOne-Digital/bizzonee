import { NextResponse } from "next/server";
import { getSiteContent, getIndustries, getPackages } from "@/lib/webdevData";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const [content, industries, packages] = await Promise.all([
    getSiteContent(),
    getIndustries(),
    getPackages(),
  ]);
  return NextResponse.json({ content, industries, packages });
}
