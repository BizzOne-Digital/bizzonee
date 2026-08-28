import { NextResponse } from "next/server";
import { updateIndustry, deleteIndustry } from "@/lib/webdevData";

export const runtime = "nodejs";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  await updateIndustry(id, body);
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await deleteIndustry(id);
  return NextResponse.json({ ok: true });
}
