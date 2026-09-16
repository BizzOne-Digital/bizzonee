import { NextResponse } from "next/server";
import { markSubmissionRead, deleteSubmission } from "@/lib/contactData";

export const runtime = "nodejs";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  await markSubmissionRead(id, !!body.read);
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await deleteSubmission(id);
  return NextResponse.json({ ok: true });
}
