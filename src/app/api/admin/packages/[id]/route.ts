import { NextResponse } from "next/server";
import { updatePackage, deletePackage } from "@/lib/webdevData";

export const runtime = "nodejs";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  await updatePackage(id, body);
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await deletePackage(id);
  return NextResponse.json({ ok: true });
}
