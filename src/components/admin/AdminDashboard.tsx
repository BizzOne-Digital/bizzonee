"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Save, Plus, Trash2, Upload, Loader2, ExternalLink, Star } from "lucide-react";
import { ICON_NAMES, getIcon } from "@/lib/iconRegistry";
import type { SiteContent, Industry, Pkg, IndustryImage } from "@/lib/webdevData";

type Tab = "content" | "industries" | "packages";

async function apiGet<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json();
}

export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("content");
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<SiteContent | null>(null);
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [packages, setPackages] = useState<Pkg[]>([]);

  const loadAll = async () => {
    setLoading(true);
    const data = await apiGet<{ content: SiteContent; industries: Industry[]; packages: Pkg[] }>("/api/webdev-content");
    setContent(data.content);
    setIndustries(data.industries);
    setPackages(data.packages);
    setLoading(false);
  };

  useEffect(() => { loadAll(); }, []);

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  if (loading || !content) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink text-white/60">
        <Loader2 className="animate-spin" size={22} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink pb-24 text-white">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <h1 className="font-display text-lg font-bold">Web Dev Admin Panel</h1>
          <button onClick={logout} className="flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/70 hover:bg-white/5">
            <LogOut size={14} /> Log Out
          </button>
        </div>
        <div className="mx-auto flex max-w-6xl gap-2 px-5 pb-3">
          {([
            ["content", "Hero & Offer"],
            ["industries", "Industries"],
            ["packages", "Packages"],
          ] as [Tab, string][]).map(([id, label]) => (
            <button key={id} onClick={() => setTab(id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${tab === id ? "bg-brand-mint text-ink" : "bg-white/5 text-white/60 hover:bg-white/10"}`}>
              {label}
            </button>
          ))}
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-8">
        {tab === "content" && <ContentTab content={content} setContent={setContent} />}
        {tab === "industries" && <IndustriesTab industries={industries} reload={loadAll} />}
        {tab === "packages" && <PackagesTab packages={packages} reload={loadAll} />}
      </div>
    </div>
  );
}

/* ───────────────────── HERO & OFFER ───────────────────── */
function ContentTab({ content, setContent }: { content: SiteContent; setContent: (c: SiteContent) => void }) {
  const [form, setForm] = useState(content);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const set = <K extends keyof SiteContent>(k: K, v: SiteContent[K]) => setForm((p) => ({ ...p, [k]: v }));

  const save = async () => {
    setSaving(true); setSaved(false);
    await fetch("/api/admin/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setContent(form);
    setSaving(false); setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const field = "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none focus:border-brand-mint/60";
  const label = "mb-1.5 block text-sm font-medium text-white/80";

  return (
    <div className="max-w-2xl space-y-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="font-display text-lg font-bold">Hero Text</h2>
      <div>
        <label className={label}>Headline — line 1</label>
        <input className={field} value={form.heroTitleLine1} onChange={(e) => set("heroTitleLine1", e.target.value)} />
      </div>
      <div>
        <label className={label}>Headline — line 2 (accent color)</label>
        <input className={field} value={form.heroTitleLine2} onChange={(e) => set("heroTitleLine2", e.target.value)} />
      </div>
      <div>
        <label className={label}>Subtext paragraph</label>
        <textarea className={`${field} min-h-[100px] resize-y`} value={form.heroSubtext} onChange={(e) => set("heroSubtext", e.target.value)} />
      </div>

      <div className="h-px bg-white/10" />

      <h2 className="font-display text-lg font-bold">Free Hosting Offer</h2>
      <label className="flex items-center gap-2.5 text-sm text-white/80">
        <input type="checkbox" checked={form.freeHostingEnabled} onChange={(e) => set("freeHostingEnabled", e.target.checked)}
          className="h-4 w-4 accent-brand-mint" />
        Show the free hosting offer on the site
      </label>
      <div>
        <label className={label}>Offer deadline (shown everywhere automatically)</label>
        <input className={field} value={form.freeHostingDeadline} onChange={(e) => set("freeHostingDeadline", e.target.value)} placeholder="e.g. August 31, 2026" />
        <p className="mt-1.5 text-xs text-white/40">Update this once — it updates the hero line, badges, package cards and urgency banner across the whole Web Development page.</p>
      </div>

      <button onClick={save} disabled={saving}
        className="inline-flex items-center gap-2 rounded-full bg-brand-mint px-6 py-3 text-sm font-bold text-ink hover:brightness-110 disabled:opacity-60">
        <Save size={15} /> {saving ? "Saving..." : "Save Changes"}
      </button>
      {saved && <span className="ml-3 text-sm font-semibold text-brand-mint">Saved!</span>}
    </div>
  );
}

/* ───────────────────── INDUSTRIES ───────────────────── */
function IndustriesTab({ industries, reload }: { industries: Industry[]; reload: () => void }) {
  const [creating, setCreating] = useState(false);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-bold">Industries</h2>
        <button onClick={() => setCreating(true)} className="flex items-center gap-1.5 rounded-full bg-brand-mint px-4 py-2 text-xs font-bold text-ink hover:brightness-110">
          <Plus size={14} /> Add Industry
        </button>
      </div>

      {creating && <IndustryEditor onDone={() => { setCreating(false); reload(); }} onCancel={() => setCreating(false)} />}

      <div className="grid gap-4 lg:grid-cols-2">
        {industries.map((ind) => (
          <IndustryCard key={ind.id} industry={ind} reload={reload} />
        ))}
      </div>
    </div>
  );
}

function IndustryCard({ industry, reload }: { industry: Industry; reload: () => void }) {
  const [editing, setEditing] = useState(false);
  const Icon = getIcon(industry.icon);

  const remove = async () => {
    if (!confirm(`Delete "${industry.label}"? This removes all its images too.`)) return;
    await fetch(`/api/admin/industries/${industry.id}`, { method: "DELETE" });
    reload();
  };

  if (editing) {
    return <IndustryEditor industry={industry} onDone={() => { setEditing(false); reload(); }} onCancel={() => setEditing(false)} />;
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full" style={{ background: `${industry.color}22`, color: industry.color }}>
            <Icon size={18} />
          </span>
          <div>
            <div className="font-bold text-white">{industry.label}</div>
            <div className="text-xs text-white/40">{industry.images.length} website{industry.images.length === 1 ? "" : "s"}</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setEditing(true)} className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/70 hover:bg-white/5">Edit</button>
          <button onClick={remove} className="rounded-full border border-red-400/30 px-3 py-1.5 text-xs font-semibold text-red-300 hover:bg-red-400/10"><Trash2 size={13} /></button>
        </div>
      </div>
      {industry.images.length > 0 && (
        <div className="mt-4 grid grid-cols-4 gap-2">
          {industry.images.map((img, i) => (
            <div key={i} className="aspect-video overflow-hidden rounded-lg border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.url} alt={img.name} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function IndustryEditor({ industry, onDone, onCancel }: { industry?: Industry; onDone: () => void; onCancel: () => void }) {
  const [form, setForm] = useState({
    slug: industry?.slug || "",
    label: industry?.label || "",
    color: industry?.color || "#C8F31D",
    icon: industry?.icon || "Briefcase",
    order: industry?.order ?? 99,
  });
  const [images, setImages] = useState<IndustryImage[]>(industry?.images || []);
  const [uploading, setUploading] = useState(false);
  const [newImg, setNewImg] = useState({ name: "", siteUrl: "" });
  const [saving, setSaving] = useState(false);

  const field = "w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none focus:border-brand-mint/60";

  const uploadFile = async (file: File) => {
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (res.ok) {
        setImages((p) => [...p, { url: data.url, publicId: data.publicId, name: newImg.name || "Website", siteUrl: newImg.siteUrl }]);
        setNewImg({ name: "", siteUrl: "" });
      } else {
        alert(data.error || "Upload failed.");
      }
    } catch {
      alert("Upload failed. Check your connection.");
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (i: number) => setImages((p) => p.filter((_, idx) => idx !== i));

  const save = async () => {
    setSaving(true);
    const payload = { ...form, images };
    if (industry) {
      await fetch(`/api/admin/industries/${industry.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    } else {
      await fetch("/api/admin/industries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    }
    setSaving(false);
    onDone();
  };

  return (
    <div className="rounded-2xl border border-brand-mint/30 bg-white/[0.04] p-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold text-white/60">Category Name</label>
          <input className={field} value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} placeholder="e.g. Construction & Renovation" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-white/60">Slug (used in links)</label>
          <input className={field} value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value.toLowerCase().replace(/\s+/g, "-") })} placeholder="construction" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-white/60">Color</label>
          <input type="color" className="h-10 w-full rounded-xl border border-white/10 bg-white/[0.04]" value={form.color} onChange={(e) => setForm({ ...form, color: e.target.value })} />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-white/60">Icon</label>
          <select className={field} value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })}>
            {ICON_NAMES.map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </div>

      <div className="mt-5 h-px bg-white/10" />

      <h4 className="mt-4 text-sm font-bold text-white">Website Images</h4>
      <div className="mt-3 grid gap-2 sm:grid-cols-4">
        {images.map((img, i) => (
          <div key={i} className="relative">
            <div className="aspect-video overflow-hidden rounded-lg border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.url} alt={img.name} className="h-full w-full object-cover" />
            </div>
            <div className="mt-1 truncate text-[10px] text-white/50">{img.name}</div>
            <button onClick={() => removeImage(i)} className="absolute right-1 top-1 grid h-6 w-6 place-items-center rounded-full bg-black/70 text-white hover:bg-red-500">
              <Trash2 size={11} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <input className={field} placeholder="Website name" value={newImg.name} onChange={(e) => setNewImg({ ...newImg, name: e.target.value })} />
        <input className={field} placeholder="Live site URL (https://...)" value={newImg.siteUrl} onChange={(e) => setNewImg({ ...newImg, siteUrl: e.target.value })} />
        <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 px-3 py-2.5 text-sm font-semibold text-white/70 hover:bg-white/5">
          {uploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
          {uploading ? "Uploading..." : "Upload Image"}
          <input type="file" accept="image/*" className="hidden" disabled={uploading}
            onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadFile(f); }} />
        </label>
      </div>

      <div className="mt-5 flex gap-2">
        <button onClick={save} disabled={saving || !form.label || !form.slug}
          className="inline-flex items-center gap-2 rounded-full bg-brand-mint px-5 py-2.5 text-sm font-bold text-ink hover:brightness-110 disabled:opacity-50">
          <Save size={14} /> {saving ? "Saving..." : "Save Industry"}
        </button>
        <button onClick={onCancel} className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-white/70 hover:bg-white/5">Cancel</button>
      </div>
    </div>
  );
}

/* ───────────────────── PACKAGES ───────────────────── */
function PackagesTab({ packages, reload }: { packages: Pkg[]; reload: () => void }) {
  const [creating, setCreating] = useState(false);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-bold">Packages</h2>
        <button onClick={() => setCreating(true)} className="flex items-center gap-1.5 rounded-full bg-brand-mint px-4 py-2 text-xs font-bold text-ink hover:brightness-110">
          <Plus size={14} /> Add Package
        </button>
      </div>

      {creating && <PackageEditor onDone={() => { setCreating(false); reload(); }} onCancel={() => setCreating(false)} />}

      <div className="grid gap-4 lg:grid-cols-2">
        {packages.map((p) => <PackageCard key={p.id} pkg={p} reload={reload} />)}
      </div>
    </div>
  );
}

function PackageCard({ pkg, reload }: { pkg: Pkg; reload: () => void }) {
  const [editing, setEditing] = useState(false);

  const remove = async () => {
    if (!confirm(`Delete "${pkg.name}" package?`)) return;
    await fetch(`/api/admin/packages/${pkg.id}`, { method: "DELETE" });
    reload();
  };

  if (editing) return <PackageEditor pkg={pkg} onDone={() => { setEditing(false); reload(); }} onCancel={() => setEditing(false)} />;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">{pkg.name}</span>
            {pkg.popular && <Star size={13} className="fill-brand-mint text-brand-mint" />}
          </div>
          <div className="mt-0.5 text-lg font-extrabold text-brand-mint">{pkg.price}</div>
          <p className="mt-1 max-w-sm text-xs text-white/60">{pkg.tagline}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setEditing(true)} className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/70 hover:bg-white/5">Edit</button>
          <button onClick={remove} className="rounded-full border border-red-400/30 px-3 py-1.5 text-xs font-semibold text-red-300 hover:bg-red-400/10"><Trash2 size={13} /></button>
        </div>
      </div>
      <ul className="mt-3 space-y-1">
        {pkg.includes.map((it, i) => <li key={i} className="text-xs text-white/60">• {it}</li>)}
      </ul>
      {pkg.paymentLink && (
        <a href={pkg.paymentLink} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs text-brand-mint hover:underline">
          Payment link <ExternalLink size={11} />
        </a>
      )}
    </div>
  );
}

function PackageEditor({ pkg, onDone, onCancel }: { pkg?: Pkg; onDone: () => void; onCancel: () => void }) {
  const [form, setForm] = useState({
    name: pkg?.name || "",
    price: pkg?.price || "",
    tagline: pkg?.tagline || "",
    popular: pkg?.popular || false,
    contact: pkg?.contact || false,
    paymentLink: pkg?.paymentLink || "",
    order: pkg?.order ?? 99,
  });
  const [includes, setIncludes] = useState<string[]>(pkg?.includes || []);
  const [newFeature, setNewFeature] = useState("");
  const [saving, setSaving] = useState(false);

  const field = "w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white outline-none focus:border-brand-mint/60";

  const addFeature = () => {
    if (!newFeature.trim()) return;
    setIncludes((p) => [...p, newFeature.trim()]);
    setNewFeature("");
  };
  const removeFeature = (i: number) => setIncludes((p) => p.filter((_, idx) => idx !== i));

  const save = async () => {
    setSaving(true);
    const payload = { ...form, includes };
    if (pkg) {
      await fetch(`/api/admin/packages/${pkg.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    } else {
      await fetch("/api/admin/packages", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    }
    setSaving(false);
    onDone();
  };

  return (
    <div className="rounded-2xl border border-brand-mint/30 bg-white/[0.04] p-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold text-white/60">Package Name</label>
          <input className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Standard" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-white/60">Price (or "Contact Us")</label>
          <input className={field} value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="$79" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-xs font-semibold text-white/60">Tagline</label>
          <input className={field} value={form.tagline} onChange={(e) => setForm({ ...form, tagline: e.target.value })} />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-xs font-semibold text-white/60">Payment Link</label>
          <input className={field} value={form.paymentLink} onChange={(e) => setForm({ ...form, paymentLink: e.target.value })} placeholder="https://..." />
        </div>
        <label className="flex items-center gap-2 text-sm text-white/80">
          <input type="checkbox" checked={form.popular} onChange={(e) => setForm({ ...form, popular: e.target.checked })} className="h-4 w-4 accent-brand-mint" />
          Mark as &quot;Most Popular&quot;
        </label>
        <label className="flex items-center gap-2 text-sm text-white/80">
          <input type="checkbox" checked={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.checked })} className="h-4 w-4 accent-brand-mint" />
          Contact-us only (no direct payment button)
        </label>
      </div>

      <div className="mt-5 h-px bg-white/10" />
      <h4 className="mt-4 text-sm font-bold text-white">Features</h4>
      <ul className="mt-2 space-y-1.5">
        {includes.map((it, i) => (
          <li key={i} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-1.5 text-sm text-white/80">
            {it}
            <button onClick={() => removeFeature(i)} className="text-red-300 hover:text-red-200"><Trash2 size={13} /></button>
          </li>
        ))}
      </ul>
      <div className="mt-2 flex gap-2">
        <input className={field} placeholder="Add a feature..." value={newFeature}
          onChange={(e) => setNewFeature(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addFeature(); } }} />
        <button onClick={addFeature} className="shrink-0 rounded-xl border border-white/10 px-4 text-sm font-semibold text-white/70 hover:bg-white/5">Add</button>
      </div>

      <div className="mt-5 flex gap-2">
        <button onClick={save} disabled={saving || !form.name}
          className="inline-flex items-center gap-2 rounded-full bg-brand-mint px-5 py-2.5 text-sm font-bold text-ink hover:brightness-110 disabled:opacity-50">
          <Save size={14} /> {saving ? "Saving..." : "Save Package"}
        </button>
        <button onClick={onCancel} className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-white/70 hover:bg-white/5">Cancel</button>
      </div>
    </div>
  );
}
