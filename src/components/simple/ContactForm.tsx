"use client";

import { useState, type FormEvent } from "react";
import { SERVICES } from "@/lib/services";

const SERVICE_OPTIONS = ["General inquiry", ...SERVICES.map((s) => s.title), "Other"];
const fieldCls = "px-3.5 py-[13px] border-[1.5px] border-simple-border-soft rounded-[10px] text-base font-normal text-simple-ink";

function TrustBullet({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-simple-ink-faint">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" />
      </svg>
      {text}
    </div>
  );
}

/**
 * Contact page form. Submits to the real `/api/contact` endpoint (saves the
 * lead to the admin panel and emails the team) — same backend the existing
 * dark-theme FinalCTA form already uses.
 */
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "General inquiry", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k: string, v: string) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (status === "error") setStatus("idle");
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email and message.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
    <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4 rounded-[18px] border border-simple-border bg-white p-8 shadow-[0_18px_44px_rgba(15,10,26,0.08)]">
      {status === "sent" ? (
        <div className="flex flex-col gap-2 py-6 text-center">
          <div className="font-display text-2xl font-extrabold">Thanks — got it!</div>
          <p className="text-[15px] text-simple-ink-soft">We&apos;ll be in touch within 24–48 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="font-display text-2xl font-extrabold">Ready to scale your business with us?</div>
          <div className="-mt-1.5 text-[15px] text-simple-ink-soft">Tell us what you need and our team will reach out.</div>
          <div className="flex flex-wrap gap-4">
            <TrustBullet text="Reply within 24–48 hours" />
            <TrustBullet text="Free strategy consultation" />
            <TrustBullet text="No spam, ever" />
          </div>

          <label className="flex flex-col gap-1.5 text-sm font-bold">
            Full name *
            <input type="text" required placeholder="Your name" className={fieldCls} value={form.name} onChange={(e) => set("name", e.target.value)} />
          </label>

          <div className="flex flex-wrap gap-3">
            <label className="flex flex-[1_1_160px] flex-col gap-1.5 text-sm font-bold">
              Phone
              <input type="tel" placeholder="(000) 000-0000" className={fieldCls} value={form.phone} onChange={(e) => set("phone", e.target.value)} />
            </label>
            <label className="flex flex-[1_1_160px] flex-col gap-1.5 text-sm font-bold">
              Email *
              <input type="email" required placeholder="you@business.com" className={fieldCls} value={form.email} onChange={(e) => set("email", e.target.value)} />
            </label>
          </div>

          <label className="flex flex-col gap-1.5 text-sm font-bold">
            Service you&rsquo;re interested in
            <select className={`${fieldCls} bg-white`} value={form.service} onChange={(e) => set("service", e.target.value)}>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-bold">
            Message *
            <textarea
              required
              rows={4}
              placeholder="Tell us a bit about your business and goals"
              className={`${fieldCls} resize-y`}
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
            />
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
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
