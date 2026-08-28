import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";

export interface SiteContent {
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroSubtext: string;
  freeHostingEnabled: boolean;
  freeHostingDeadline: string; // e.g. "August 31, 2026"
}

export interface IndustryImage {
  url: string;
  publicId?: string;
  siteUrl: string;
  name: string;
}

export interface Industry {
  id: string;
  slug: string;
  label: string;
  color: string;
  icon: string;
  order: number;
  images: IndustryImage[];
}

export interface Pkg {
  id: string;
  name: string;
  price: string;
  tagline: string;
  popular: boolean;
  contact: boolean;
  paymentLink: string;
  includes: string[];
  order: number;
}

export const DEFAULT_CONTENT: SiteContent = {
  heroTitleLine1: "Your Website. Live in 24–48 Hours.",
  heroTitleLine2: "No Surprises.",
  heroSubtext: "Pay once, and our team starts today. You'll get a confirmation within minutes, a kickoff message within hours, and a live website within 48 hours, or your money back. Over 120 businesses have launched with us.",
  freeHostingEnabled: true,
  freeHostingDeadline: "August 31, 2026",
};

export const DEFAULT_INDUSTRIES: Omit<Industry, "id">[] = [
  { slug: "construction", label: "Construction & Renovation", color: "#F59E0B", icon: "Building2", order: 0, images: [] },
  { slug: "restaurant", label: "Restaurant & Food Services", color: "#EF4444", icon: "UtensilsCrossed", order: 1, images: [] },
  { slug: "professional", label: "Professional Services", color: "#10B981", icon: "Briefcase", order: 2, images: [] },
  { slug: "ecommerce", label: "E-commerce & Retail", color: "#C8F31D", icon: "ShoppingBag", order: 3, images: [] },
  { slug: "hospitality", label: "Travel & Hospitality", color: "#06B6D4", icon: "Plane", order: 4, images: [] },
  { slug: "health", label: "Health & Wellness", color: "#EC4899", icon: "Heart", order: 5, images: [] },
  { slug: "automotive", label: "Automotive Services", color: "#3B82F6", icon: "Car", order: 6, images: [] },
  { slug: "nonprofit", label: "Non-Profit & Community", color: "#8B5CF6", icon: "Users", order: 7, images: [] },
];

export const DEFAULT_PACKAGES: Omit<Pkg, "id">[] = [
  { name: "Standard", price: "$79", tagline: "Clean, professional website to get online fast.", popular: false, contact: false, paymentLink: "https://link.fastpaydirect.com/payment-link/6a18e979c3ea3a19f0bd90ee", includes: ["Up to 5 pages", "Contact form", "Stock photos", "Mobile responsive", "Basic on-page SEO"], order: 0 },
  { name: "Premium", price: "$149", tagline: "More pages and essential integrations for growing businesses.", popular: true, contact: false, paymentLink: "https://link.fastpaydirect.com/payment-link/6a18e118f4e3f699673a6464", includes: ["Up to 12 pages", "Contact form", "Admin Portal", "Booking / appointment form", "Payment integration setup", "Gallery management", "Mobile responsive + SEO setup"], order: 1 },
  { name: "Advanced", price: "$299", tagline: "Custom eCommerce website with products, payments, and business features.", popular: false, contact: false, paymentLink: "https://link.fastpaydirect.com/payment-link/6a1498033f4eb69bef72fc9a", includes: ["Up to 15 pages", "eCommerce ready", "Upload up to 50+ products", "Custom website design", "Payment gateway integration", "Order management setup", "Admin dashboard", "Basic automation features"], order: 2 },
  { name: "Custom", price: "Contact Us", tagline: "Advanced custom website with premium design, 3D visuals, and full business systems.", popular: false, contact: true, paymentLink: "", includes: ["Up to 20 pages", "Advanced custom 3D design", "eCommerce with 100+ products", "Full admin dashboard", "Payment, shipping & order management", "Customer portal", "Multi-language support", "Advanced integrations & automation"], order: 3 },
];

const CONTENT_ID = "webdev";

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const db = await getDb();
    const doc = await db.collection("siteContent").findOne({ _id: CONTENT_ID as unknown as ObjectId });
    if (!doc) return DEFAULT_CONTENT;
    const { _id, ...rest } = doc;
    return { ...DEFAULT_CONTENT, ...rest } as SiteContent;
  } catch {
    return DEFAULT_CONTENT;
  }
}

export async function saveSiteContent(content: SiteContent): Promise<void> {
  const db = await getDb();
  await db.collection("siteContent").updateOne(
    { _id: CONTENT_ID as unknown as ObjectId },
    { $set: content },
    { upsert: true }
  );
}

export async function getIndustries(): Promise<Industry[]> {
  try {
    const db = await getDb();
    const docs = await db.collection("industries").find({}).sort({ order: 1 }).toArray();
    if (!docs.length) {
      return DEFAULT_INDUSTRIES.map((d, i) => ({ ...d, id: `default-${i}` }));
    }
    return docs.map((d) => ({
      id: String(d._id),
      slug: d.slug,
      label: d.label,
      color: d.color,
      icon: d.icon,
      order: d.order ?? 0,
      images: d.images || [],
    }));
  } catch {
    return DEFAULT_INDUSTRIES.map((d, i) => ({ ...d, id: `default-${i}` }));
  }
}

export async function seedIndustriesIfEmpty(): Promise<void> {
  const db = await getDb();
  const count = await db.collection("industries").countDocuments();
  if (count === 0) {
    await db.collection("industries").insertMany(DEFAULT_INDUSTRIES.map((d) => ({ ...d })));
  }
}

export async function createIndustry(data: Omit<Industry, "id">): Promise<string> {
  const db = await getDb();
  await seedIndustriesIfEmpty();
  const res = await db.collection("industries").insertOne({ ...data });
  return String(res.insertedId);
}

export async function updateIndustry(id: string, data: Partial<Omit<Industry, "id">>): Promise<void> {
  const db = await getDb();
  await seedIndustriesIfEmpty();
  await db.collection("industries").updateOne({ _id: new ObjectId(id) }, { $set: data });
}

export async function deleteIndustry(id: string): Promise<void> {
  const db = await getDb();
  await db.collection("industries").deleteOne({ _id: new ObjectId(id) });
}

export async function getPackages(): Promise<Pkg[]> {
  try {
    const db = await getDb();
    const docs = await db.collection("packages").find({}).sort({ order: 1 }).toArray();
    if (!docs.length) {
      return DEFAULT_PACKAGES.map((d, i) => ({ ...d, id: `default-${i}` }));
    }
    return docs.map((d) => ({
      id: String(d._id),
      name: d.name,
      price: d.price,
      tagline: d.tagline,
      popular: !!d.popular,
      contact: !!d.contact,
      paymentLink: d.paymentLink || "",
      includes: d.includes || [],
      order: d.order ?? 0,
    }));
  } catch {
    return DEFAULT_PACKAGES.map((d, i) => ({ ...d, id: `default-${i}` }));
  }
}

export async function seedPackagesIfEmpty(): Promise<void> {
  const db = await getDb();
  const count = await db.collection("packages").countDocuments();
  if (count === 0) {
    await db.collection("packages").insertMany(DEFAULT_PACKAGES.map((d) => ({ ...d })));
  }
}

export async function createPackage(data: Omit<Pkg, "id">): Promise<string> {
  const db = await getDb();
  await seedPackagesIfEmpty();
  const res = await db.collection("packages").insertOne({ ...data });
  return String(res.insertedId);
}

export async function updatePackage(id: string, data: Partial<Omit<Pkg, "id">>): Promise<void> {
  const db = await getDb();
  await seedPackagesIfEmpty();
  await db.collection("packages").updateOne({ _id: new ObjectId(id) }, { $set: data });
}

export async function deletePackage(id: string): Promise<void> {
  const db = await getDb();
  await db.collection("packages").deleteOne({ _id: new ObjectId(id) });
}
