import { NextResponse } from "next/server";
import { getCloudinary, isCloudinaryConfigured } from "@/lib/cloudinary";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!isCloudinaryConfigured()) {
    return NextResponse.json({ error: "Cloudinary is not configured yet." }, { status: 500 });
  }

  const formData = await req.formData();
  const file = formData.get("file");
  if (!file || !(file instanceof Blob)) {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const cloudinary = getCloudinary();

  const result = await new Promise<{ secure_url: string; public_id: string }>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "bizzone-webdev" },
      (err, res) => {
        if (err || !res) return reject(err);
        resolve({ secure_url: res.secure_url, public_id: res.public_id });
      }
    );
    stream.end(bytes);
  });

  return NextResponse.json({ url: result.secure_url, publicId: result.public_id });
}
