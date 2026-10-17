"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const NEEDS = [
  "More leads from ads (Meta / Google / TikTok)",
  "SEO — rank higher on Google",
  "Content, social media & video",
  "Design & branding",
  "A new website or app",
  "AI automation & CRM",
  "The full all-in-one package",
];

const fieldCls = "px-3.5 py-[13px] border-[1.5px] border-simple-border-soft rounded-[10px] text-base font-normal text-simple-ink";

/**
 * Homepage hero lead form. Submits to the same real `/api/contact` endpoint
 * used by the existing dark-theme site (src/app/api/contact/route.ts), which
 * saves the lead to the admin panel and emails the team — no fake stub.
 */
export default function LeadForm() {
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "", need: NEEDS[0] });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k: string, v: string) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (status === "error") setStatus("idle");
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.email) {
      setStatus("error");
      setErrorMsg("Please fill in your name and email.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.need,
          message: `Free growth audit request${form.business ? ` — business: ${form.business}` : ""}.`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) setStatus("sent");
      else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <div
      id="book"
      className="flex min-w-0 flex-[1_1_380px] max-w-[460px] flex-col gap-4 rounded-[18px] border border-simple-border bg-white p-8 text-simple-ink shadow-[0_18px_44px_rgba(15,10,26,0.10)] transition-transform duration-300 hover:-translate-y-1"
    >
      {status === "sent" ? (
        <div className="flex flex-col gap-2 py-6 text-center">
          <div className="font-display text-2xl font-extrabold">Thanks — got it!</div>
          <p className="text-[15px] text-simple-ink-soft">
            We&apos;ll be in touch within 24–48 hours with your free growth audit.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="font-display text-[26px] font-extrabold leading-tight">Get your free growth audit</div>
          <div className="-mt-1.5 text-[15px] text-simple-ink-soft">
            We review your ads, website and follow-up — and show you the fastest wins. No obligation.
          </div>

          <label className="flex flex-col gap-1.5 text-sm font-bold">
            Full name
            <input type="text" required placeholder="Your name" className={fieldCls} value={form.name} onChange={(e) => set("name", e.target.value)} />
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-bold">
            Business name
            <input type="text" placeholder="Your business" className={fieldCls} value={form.business} onChange={(e) => set("business", e.target.value)} />
          </label>

          <div className="flex flex-wrap gap-3">
            <label className="flex flex-[1_1_160px] flex-col gap-1.5 text-sm font-bold">
              Phone
              <input type="tel" placeholder="(000) 000-0000" className={fieldCls} value={form.phone} onChange={(e) => set("phone", e.target.value)} />
            </label>
            <label className="flex flex-[1_1_160px] flex-col gap-1.5 text-sm font-bold">
              Email
              <input type="email" required placeholder="you@business.com" className={fieldCls} value={form.email} onChange={(e) => set("email", e.target.value)} />
            </label>
          </div>

          <label className="flex flex-col gap-1.5 text-sm font-bold">
            What do you need most?
            <select className={`${fieldCls} bg-white`} value={form.need} onChange={(e) => set("need", e.target.value)}>
              {NEEDS.map((need) => (
                <option key={need}>{need}</option>
              ))}
            </select>
          </label>

          {status === "error" && (
            <p role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-2.5 text-sm text-red-600">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="cursor-pointer rounded-xl border-0 bg-simple-purple py-[17px] text-[17px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Book My Free Audit"}
          </button>

          <div className="text-center text-[13px] text-simple-ink-soft">
            We reply within 24–48 hours. No spam, ever. By submitting, you consent to BizzOne Digital
            contacting you by phone, email or text about your request. See our{" "}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
            .
          </div>
        </form>
      )}
    </div>
  );
}
