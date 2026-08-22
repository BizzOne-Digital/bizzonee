"use client";

import { useState } from "react";
import { ArrowRight, Check, Layers, Gauge, Globe, Send, CheckCircle2, Star, ShieldCheck, Apple, Smartphone, Layout, Boxes, Building2, UtensilsCrossed, Briefcase, ShoppingBag, Plane, Heart, Car, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import NeonButton from "@/components/ui/NeonButton";
import AppProcess from "@/components/sections/AppProcess";
import TrustReviews from "@/components/sections/TrustReviews";

const STATS = [
  { icon: Layers, value: "120+", label: "Projects launched" },
  { icon: Gauge, value: "99%", label: "Client retention" },
  { icon: Globe, value: "iOS + Android", label: "Every platform" },
];

const WHAT_WE_BUILD = [
  { icon: Apple, label: "iOS Apps", desc: "Native iPhone & iPad apps built with Apple's guidelines and performance in mind." },
  { icon: Smartphone, label: "Android Apps", desc: "Fast, reliable Android apps that feel native across every device." },
  { icon: Boxes, label: "Cross-Platform Apps", desc: "One codebase, both platforms — built for speed without compromising quality." },
  { icon: Layout, label: "MVPs & Startup Apps", desc: "Launch-ready MVPs to validate your idea and get to market fast." },
];

const INDUSTRIES = [
  { id: "construction", label: "Construction & Renovation", color: "#F59E0B", icon: Building2 },
  { id: "restaurant",   label: "Restaurant & Food Services", color: "#EF4444", icon: UtensilsCrossed },
  { id: "professional", label: "Professional Services", color: "#10B981", icon: Briefcase },
  { id: "ecommerce",    label: "E-commerce & Retail", color: "#C8F31D", icon: ShoppingBag },
  { id: "hospitality",  label: "Travel & Hospitality", color: "#06B6D4", icon: Plane },
  { id: "health",       label: "Health & Wellness", color: "#EC4899", icon: Heart },
  { id: "automotive",   label: "Automotive Services", color: "#3B82F6", icon: Car },
  { id: "nonprofit",    label: "Non-Profit & Community", color: "#8B5CF6", icon: Users },
];

function IndustryPill({ ind }: { ind: typeof INDUSTRIES[0] }) {
  return (
    <div
      className="flex items-center gap-4 rounded-full border py-3 pl-3 pr-5"
      style={{ background: `${ind.color}0d`, borderColor: `${ind.color}40`, boxShadow: `0 0 24px ${ind.color}1f` }}
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full" style={{ background: `${ind.color}1f`, color: ind.color, boxShadow: `0 0 16px ${ind.color}33 inset` }}>
        <ind.icon size={22} />
      </span>
      <span className="flex-1 text-[15px] font-bold leading-snug text-white">{ind.label}</span>
    </div>
  );
}

type Tier = { name: string; tagline: string; popular?: boolean; includes: string[] };
const TIERS: Tier[] = [
  { name: "MVP App", tagline: "Validate your idea fast with a lean, launch-ready app.", includes: ["Single platform (iOS or Android)", "Core feature set", "Clean, modern UI/UX", "Basic backend & API setup", "App Store / Play Store submission"] },
  { name: "Growth App", tagline: "A full-featured app built to scale with your business.", popular: true, includes: ["iOS & Android (cross-platform)", "Custom UI/UX design", "User accounts & authentication", "Payment / booking integration", "Admin dashboard", "Push notifications"] },
  { name: "Enterprise App", tagline: "Advanced, custom-built systems for complex business needs.", includes: ["iOS & Android, fully native or cross-platform", "Advanced integrations & APIs", "Multi-role admin systems", "Scalable cloud backend", "Ongoing maintenance & support", "Dedicated project team"] },
];

/* ── shared badges ── */
function GoogleRatingBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 ${className}`}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <span className="text-[11px] font-semibold text-white/80">5.0 rating <span className="text-white/50">on Google</span></span>
    </div>
  );
}

/* ── hero highlight card (no pricing) ── */
function HeroHighlightCard() {
  return (
    <div className="relative mx-auto max-w-md rounded-3xl neon-border p-6 shadow-glow-purple sm:p-7">
      <span className="absolute -top-3 left-6 rounded-full bg-brand-mint px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink shadow-glow-mint">
        Custom Built
      </span>

      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold uppercase tracking-wide text-brand-mint">Growth App</div>
        <GoogleRatingBadge />
      </div>

      <p className="mt-3 text-sm leading-snug text-white/80">A full-featured app built to scale with your business.</p>

      <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
        {TIERS[1].includes.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-white/75">
            <Check size={14} className="mt-0.5 shrink-0 text-brand-mint" /> {it}
          </li>
        ))}
        <li className="flex items-start gap-2 text-sm font-semibold text-brand-mint">
          <ShieldCheck size={14} className="mt-0.5 shrink-0" /> Free Consultation Before You Commit
        </li>
      </ul>

      <a href="#app-contact"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-mint px-7 py-4 text-base font-bold text-ink shadow-glow-mint transition-all hover:-translate-y-0.5 hover:brightness-110">
        Request a Quote <ArrowRight size={17} />
      </a>
      <button onClick={() => document.getElementById("app-tiers")?.scrollIntoView({ behavior: "smooth" })}
        className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white/80 transition-all hover:bg-white/[0.08] hover:text-white">
        See all tiers <ArrowRight size={13} />
      </button>
    </div>
  );
}

export default function AppDevelopment() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative py-16 sm:py-24">
        <div className="pointer-events-none absolute hidden sm:block -top-10 left-1/2 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[140px]" />
        <div className="section">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="text-center lg:text-left">
              <div className="mx-auto lg:mx-0" style={{ maxWidth: "36rem" }}>
                <SectionLabel>App Development</SectionLabel>
                <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Your App. Built to <span className="text-gradient">Launch & Scale.</span>
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white sm:text-lg lg:mx-0">
                  From idea to App Store, we design and build iOS, Android and cross-platform apps that are fast, reliable and built around real users. Over 120 projects delivered for businesses across every industry.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <NeonButton href="#app-contact" variant="primary" className="px-9 py-4 text-base">Request a Quote <ArrowRight size={18} /></NeonButton>
                  <NeonButton href="#app-contact" variant="ghost">Talk To Us First</NeonButton>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                  <GoogleRatingBadge />
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-mint/30 bg-brand-mint/10 px-3 py-1.5 text-[11px] font-semibold text-brand-mint">
                    <ShieldCheck size={13} /> Free Consultation
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-white/70">
                    <ShieldCheck size={13} className="text-brand-mint" /> Post-Launch Support
                  </span>
                </div>
                <div className="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start">
                  {STATS.map((s) => (
                    <div key={s.label} className="flex items-center gap-2.5">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-mint/10 text-brand-mint"><s.icon size={16} /></span>
                      <div className="text-left">
                        <div className="font-display text-base font-bold text-white">{s.value}</div>
                        <div className="text-[11px] text-white/90">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <HeroHighlightCard />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute hidden sm:block right-0 top-1/3 h-72 w-72 rounded-full bg-brand-mint/8 blur-[120px]" />
        <div className="section">
          <Reveal className="mb-12 text-center">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Apps For <span className="text-gradient">Every Platform</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
              Whatever your idea, we build the right app for it — native, cross-platform, or a lean MVP to test the market.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_WE_BUILD.map((w) => (
              <div key={w.label} className="rounded-2xl glass p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-mint/10 text-brand-mint">
                  <w.icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{w.label}</h3>
                <p className="mt-2 text-sm leading-snug text-white/70">{w.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── BY INDUSTRY ── */}
      <section className="relative py-16 sm:py-20">
        <div className="section">
          <Reveal className="mb-12 text-center">
            <SectionLabel>Browse by Industry</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              We Build Apps for <span className="text-gradient">Every Business</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
              Custom mobile apps tailored to your industry, your customers and your workflow.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((ind) => (
              <IndustryPill key={ind.id} ind={ind} />
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-10 text-center">
            <p className="text-sm text-white/60">Don&apos;t see your industry? We build for businesses everywhere.</p>
            <NeonButton href="#app-contact" variant="ghost" className="mt-4">Let&apos;s Talk About Your App</NeonButton>
          </Reveal>
        </div>
      </section>

      <TrustReviews />
      <AppProcess />

      {/* ── TIERS (no pricing) ── */}
      <section id="app-tiers" className="relative py-16 sm:py-20">
        <div className="section">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full neon-border px-5 py-2 text-xs font-bold uppercase tracking-[0.22em]">
              <span className="text-brand-purple-light">Build</span><span className="text-brand-mint">Tiers</span>
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Find The Right <span className="text-gradient">Fit For Your App</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/90">
              Every app is scoped and quoted around your exact requirements. Tell us about your project and we&apos;ll send a tailored proposal.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
            {TIERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.07}>
                <div className={`relative flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 ${t.popular ? "neon-border shadow-glow-purple" : "glass hover:shadow-glow-purple"}`}>
                  {t.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-mint px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink shadow-glow-mint">Most Popular</span>}
                  <div className="text-sm font-semibold uppercase tracking-wide text-brand-mint">{t.name}</div>
                  <p className="mt-2 text-sm leading-snug text-white/90">{t.tagline}</p>
                  <ul className="mt-5 flex-1 space-y-3 border-t border-white/10 pt-5">
                    {t.includes.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-white/75"><Check size={14} className="mt-0.5 shrink-0 text-brand-mint" /> {it}</li>
                    ))}
                  </ul>
                  <button onClick={() => document.getElementById("app-contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-mint px-5 py-3 text-sm font-bold text-ink shadow-glow-mint transition-all hover:-translate-y-0.5 hover:brightness-110">
                    Request a Quote <ArrowRight size={15} />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-white/90">Every quote is free, no obligation. Tell us about your app and we&apos;ll get back to you within 24–48 hours.</p>
        </div>
      </section>

      {/* ── GET IN TOUCH ── */}
      <section id="app-contact" className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute hidden sm:block bottom-0 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand-mint/10 blur-[130px]" />
        <div className="section">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl neon-border px-6 py-12 sm:px-12 sm:py-14">
              <div className="pointer-events-none absolute hidden sm:block -left-20 top-0 h-72 w-72 rounded-full bg-brand-purple/30 blur-[100px]" />
              <div className="pointer-events-none absolute hidden sm:block -right-10 bottom-0 h-72 w-72 rounded-full bg-brand-mint/20 blur-[100px]" />
              <div className="relative grid items-start gap-10 lg:grid-cols-2">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-brand-mint">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-mint shadow-glow-mint" /> Get In Touch
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                    Let&apos;s Build Your <span className="text-gradient">App</span>
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90">
                    Send us a quick message and our team will reach out within 24–48 hours with a tailored quote.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {[{ label: "Reply within 24–48 hours" }, { label: "Free strategy consultation" }, { label: "No spam, ever" }].map((t) => (
                      <li key={t.label} className="flex items-center gap-3 text-sm text-white/70">
                        <span className="h-2 w-2 rounded-full bg-brand-mint shadow-glow-mint" />
                        {t.label}
                      </li>
                    ))}
                  </ul>
                </div>
                <AppContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function AppContactForm() {
  const fieldCls = "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-brand-mint/60";
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const set = (k: string, v: string) => { setForm((p) => ({ ...p, [k]: v })); if (status === "error") setStatus("idle"); };

  const submit = async () => {
    if (!form.name || !form.email) { setStatus("error"); setErrorMsg("Please fill in your name and email."); return; }
    setStatus("sending"); setErrorMsg("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, service: "App Development" }) });
      const data = await res.json().catch(() => ({}));
      if (res.ok) setStatus("sent");
      else { setStatus("error"); setErrorMsg(data.error || "Something went wrong."); }
    } catch { setStatus("error"); setErrorMsg("Network error. Please try again."); }
  };

  if (status === "sent") {
    return (
      <div className="flex min-h-[340px] flex-col items-center justify-center rounded-3xl glass-strong p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-mint/15 text-brand-mint shadow-glow-mint"><CheckCircle2 size={34} /></span>
        <h3 className="mt-5 font-display text-2xl font-bold text-white">Message sent!</h3>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/90">Thanks {form.name.split(" ")[0] || "there"}, we&apos;ll be in touch within 24–48 hours.</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl glass-strong p-6 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/80">Full Name <span className="text-brand-mint">*</span></label>
          <input className={fieldCls} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/80">Phone</label>
          <input type="tel" className={fieldCls} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+1 (___) ___-____" />
        </div>
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-white/80">Email <span className="text-brand-mint">*</span></label>
        <input type="email" className={fieldCls} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@business.com" />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-white/80">Business Name</label>
        <input className={fieldCls} value={form.business} onChange={(e) => set("business", e.target.value)} placeholder="ABC Company" />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-white/80">Tell us about your app</label>
        <textarea className={`${fieldCls} min-h-[110px] resize-y leading-relaxed`} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="What does your app do? iOS, Android, or both? Any key features?" />
      </div>
      {status === "error" && <p className="mt-4 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-2.5 text-sm text-red-300">{errorMsg}</p>}
      <button onClick={submit} disabled={status === "sending"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-mint px-7 py-3.5 text-sm font-bold text-ink shadow-glow-mint transition-all hover:-translate-y-0.5 hover:brightness-110 disabled:opacity-60">
        <Send size={16} /> {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </div>
  );
}
