import { NextResponse } from "next/server";
import { getPackages, createPackage } from "@/lib/webdevData";

export const runtime = "nodejs";

export async function GET() {
  const packages = await getPackages();
  return NextResponse.json(packages);
}

export async function POST(req: Request) {
  const body = await req.json();
  const id = await createPackage({
    name: String(body.name || "").trim(),
    price: String(body.price || "").trim(),
    tagline: String(body.tagline || "").trim(),
    popular: !!body.popular,
    contact: !!body.contact,
    paymentLink: String(body.paymentLink || "").trim(),
    includes: Array.isArray(body.includes) ? body.includes.map(String) : [],
    order: Number(body.order ?? 99),
  });
  return NextResponse.json({ ok: true, id });
}
