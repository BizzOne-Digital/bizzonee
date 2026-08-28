import { NextResponse } from "next/server";
import { getIndustries, createIndustry } from "@/lib/webdevData";

export const runtime = "nodejs";

export async function GET() {
  const industries = await getIndustries();
  return NextResponse.json(industries);
}

export async function POST(req: Request) {
  const body = await req.json();
  const id = await createIndustry({
    slug: String(body.slug || "").trim(),
    label: String(body.label || "").trim(),
    color: String(body.color || "#C8F31D"),
    icon: String(body.icon || "Briefcase"),
    order: Number(body.order ?? 99),
    images: Array.isArray(body.images) ? body.images : [],
  });
  return NextResponse.json({ ok: true, id });
}
