import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export async function saveContactSubmission(data: {
  name: string; email: string; phone: string; service: string; message: string;
}): Promise<void> {
  try {
    const db = await getDb();
    await db.collection("contactSubmissions").insertOne({
      ...data,
      createdAt: new Date().toISOString(),
      read: false,
    });
  } catch (err) {
    console.error("Failed to save contact submission:", err);
  }
}

export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  try {
    const db = await getDb();
    const docs = await db.collection("contactSubmissions").find({}).sort({ createdAt: -1 }).toArray();
    return docs.map((d) => ({
      id: String(d._id),
      name: d.name || "",
      email: d.email || "",
      phone: d.phone || "",
      service: d.service || "",
      message: d.message || "",
      createdAt: d.createdAt || "",
      read: !!d.read,
    }));
  } catch {
    return [];
  }
}

export async function markSubmissionRead(id: string, read: boolean): Promise<void> {
  const db = await getDb();
  await db.collection("contactSubmissions").updateOne({ _id: new ObjectId(id) }, { $set: { read } });
}

export async function deleteSubmission(id: string): Promise<void> {
  const db = await getDb();
  await db.collection("contactSubmissions").deleteOne({ _id: new ObjectId(id) });
}
