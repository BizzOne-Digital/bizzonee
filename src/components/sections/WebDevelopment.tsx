"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Layers, Gauge, Globe, Send, CheckCircle2, Star, ShieldCheck, Clock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import NeonButton from "@/components/ui/NeonButton";
import WebProcess from "@/components/sections/WebProcess";
import TrustReviews from "@/components/sections/TrustReviews";


const INDUSTRIES = [
  { id: "construction", label: "Construction & Renovation",       color: "#F59E0B", emoji: "🏗️" },
  { id: "restaurant",   label: "Restaurant & Food Services",      color: "#EF4444", emoji: "🍴" },
  { id: "professional", label: "Professional Services",           color: "#10B981", emoji: "💼" },
  { id: "ecommerce",    label: "E-commerce & Retail",             color: "#C8F31D", emoji: "🛍️" },
  { id: "hospitality",  label: "Travel & Hospitality",            color: "#06B6D4", emoji: "✈️" },
  { id: "health",       label: "Health & Wellness",               color: "#EC4899", emoji: "❤️" },
  { id: "automotive",   label: "Automotive Services",             color: "#3B82F6", emoji: "🚗" },
  { id: "nonprofit",    label: "Non-Profit & Community",          color: "#8B5CF6", emoji: "🤝" },
];

/* ── industry tag pill ── */
function IndustryPill({ ind }: { ind: typeof INDUSTRIES[0] }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all hover:-translate-y-0.5"
      style={{ background: `${ind.color}12`, borderColor: `${ind.color}40`, color: ind.color }}>
      <span className="text-base">{ind.emoji}</span>
      {ind.label}
    </span>
  );
}

/* ── coverflow showcase: center elevated, sides scaled + blurred ── */
const SHOWCASE = [
  { src: "/web1.png", url: "https://www.m2mprocleaners.ca/" },
  { src: "/web2.png", url: "https://www.cobbchurchnetwork.org/" },
  { src: "/web3.png", url: "https://www.strideshockeysales.com/" },
  { src: "/web4.png", url: "https://www.jmgallautorecycling.com/" },
];

function WebShowcaseCoverflow() {
  const [active, setActive] = useState(0);
  const n = SHOWCASE.length;

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % n), 4000);
    return () => clearInterval(id);
  }, [n]);

  return (
    <div className="relative">
      <div className="flex items-center justify-center gap-3 sm:gap-5 py-6">
        {SHOWCASE.map(({ src, url }, i) => {
          const offset = i - active;
          const isCenter = offset === 0;
          return (
            <motion.div
              key={src}
              onClick={() => (isCenter ? undefined : setActive(i))}
              animate={{
                scale: isCenter ? 1 : 0.82,
                y: isCenter ? -16 : 12,
                opacity: isCenter ? 1 : 0.55,
                filter: isCenter ? "blur(0px)" : "blur(2px)",
                zIndex: isCenter ? 10 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-[42%] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0a0814] shadow-2xl sm:w-[24%]"
              style={{ aspectRatio: "16/10" }}>
              {isCenter ? (
                <a href={url} target="_blank" rel="noreferrer" aria-label={`Visit ${url}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Website showcase ${i + 1}`} className="h-full w-full object-cover object-top" />
                </a>
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={src} alt={`Website showcase ${i + 1}`} className="h-full w-full object-cover object-top" />
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-2 flex justify-center gap-1.5">
        {SHOWCASE.map((_, i) => (
          <button key={i} onClick={() => setActive(i)}
            className="h-1.5 rounded-full transition-all"
            style={{ width: i === active ? 20 : 6, background: i === active ? "#C8F31D" : "rgba(255,255,255,0.2)" }} />
        ))}
      </div>
    </div>
  );
}


type Pkg = { name: string; price: string; tagline: string; popular?: boolean; contact?: boolean; paymentLink?: string; includes: string[] };
const PACKAGES: Pkg[] = [
  { name: "Standard", price: "$79", tagline: "Clean, professional website to get online fast.", paymentLink: "https://link.fastpaydirect.com/payment-link/6a18e979c3ea3a19f0bd90ee", includes: ["Up to 5 pages", "Contact form", "Stock photos", "Mobile responsive", "Basic on-page SEO", "Free hosting (offer valid until August 15, 2026)"] },
  { name: "Premium", price: "$149", tagline: "More pages and essential integrations for growing businesses.", popular: true, paymentLink: "https://link.fastpaydirect.com/payment-link/6a18e118f4e3f699673a6464", includes: ["Up to 12 pages", "Contact form", "Admin Portal", "Booking / appointment form", "Payment integration setup", "Gallery management", "Mobile responsive + SEO setup", "Free hosting (offer valid until August 15, 2026)"] },
  { name: "Advanced", price: "$299", tagline: "Custom eCommerce website with products, payments, and business features.", paymentLink: "https://link.fastpaydirect.com/payment-link/6a1498033f4eb69bef72fc9a", includes: ["Up to 15 pages", "eCommerce ready", "Upload up to 50+ products", "Custom website design", "Payment gateway integration", "Order management setup", "Admin dashboard", "Basic automation features", "Free hosting (offer valid until August 15, 2026)"] },
  { name: "Custom", contact: true, price: "Contact Us", tagline: "Advanced custom website with premium design, 3D visuals, and full business systems.", includes: ["Up to 20 pages", "Advanced custom 3D design", "eCommerce with 100+ products", "Full admin dashboard", "Payment, shipping & order management", "Customer portal", "Multi-language support", "Advanced integrations & automation", "Free hosting (offer valid until August 15, 2026)"] },
];

const STATS = [
  { icon: Layers, value: "120+", label: "Sites launched" },
  { icon: Gauge, value: "98%", label: "Performance" },
  { icon: Globe, value: "24–48h", label: "Kickoff" },
];

/* ── Stripe logo ── */
function StripeLogo({ className = "" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/stripe.png" alt="Stripe" className={className} />;
}

function SecurePaymentBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-white/70">
        <ShieldCheck size={13} className="text-brand-mint" /> Secure Payment by Stripe
      </span>
      <StripeLogo className="h-4 w-auto text-white/50" />
    </div>
  );
}

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


/* ── hero package showcase card ── */
function HeroPackageCard() {
  const pkg = PACKAGES.find((p) => p.name === "Standard")!;
  return (
    <div className="relative mx-auto max-w-md rounded-3xl neon-border p-6 shadow-glow-purple sm:p-7">
      <span className="absolute -top-3 left-6 rounded-full bg-brand-mint px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink shadow-glow-mint">
        Best Value
      </span>

      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold uppercase tracking-wide text-brand-mint">{pkg.name} Package</div>
        <GoogleRatingBadge />
      </div>

      <div className="mt-3 flex items-end gap-1">
        <span className="font-display text-4xl font-extrabold text-white">{pkg.price}</span>
        <span className="mb-1 text-xs text-white/70">one-time</span>
      </div>
      <p className="mt-2 text-sm leading-snug text-white/80">{pkg.tagline}</p>

      <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
        {pkg.includes.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-white/75">
            <Check size={14} className="mt-0.5 shrink-0 text-brand-mint" /> {it}
          </li>
        ))}
        <li className="flex items-start gap-2 text-sm font-semibold text-brand-mint">
          <ShieldCheck size={14} className="mt-0.5 shrink-0" /> 30-Day Money-Back Guarantee
        </li>
      </ul>

      <a href={pkg.paymentLink} target="_blank" rel="noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-mint px-7 py-4 text-base font-bold text-ink shadow-glow-mint transition-all hover:-translate-y-0.5 hover:brightness-110">
        Get Started <ArrowRight size={17} />
      </a>
      <button onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
        className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white/80 transition-all hover:bg-white/[0.08] hover:text-white">
        View all packages <ArrowRight size={13} />
      </button>

      <SecurePaymentBadge className="mt-5 justify-center" />
    </div>
  );
}

export default function WebDevelopment() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative py-16 sm:py-24">
        <div className="pointer-events-none absolute hidden sm:block -top-10 left-1/2 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[140px]" />
        <div className="section">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* left — heading */}
            <Reveal className="text-center lg:text-left">
              <div className="mx-auto lg:mx-0" style={{ maxWidth: "36rem" }}>
                <SectionLabel>Web Development</SectionLabel>
                <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Your Website. Live in <br className="hidden sm:block" /><span className="whitespace-nowrap">24–48 Hours.</span> <span className="text-gradient">No Surprises.</span>
                </h1>
                <p className="mt-3 text-left text-base font-semibold text-brand-mint sm:text-lg">
                  Free hosting included with every website package — offer valid until August 15, 2026.
                </p>
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white sm:text-lg lg:mx-0">
                  Pay once, and our team starts today. You&apos;ll get a confirmation within minutes, a kickoff message within hours, and a live website within 48 hours, or your money back. Over 120 businesses have launched with us.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <NeonButton href="#packages" variant="primary" className="px-9 py-4 text-base">Get Started – $79 <ArrowRight size={18} /></NeonButton>
                  <NeonButton href="#onboard" variant="ghost">Talk To Us First</NeonButton>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                  <GoogleRatingBadge />
                  <SecurePaymentBadge />
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-mint/30 bg-brand-mint/10 px-3 py-1.5 text-[11px] font-semibold text-brand-mint">
                    <ShieldCheck size={13} /> 30-Day Money-Back Guarantee
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-white/70">
                    <ShieldCheck size={13} className="text-brand-mint" /> Free Hosting — offer ends August 15, 2026
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

            {/* right — package showcase card */}
            <Reveal delay={0.1}>
              <HeroPackageCard />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── BY INDUSTRY — 2 columns ── */}
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute hidden sm:block right-0 top-1/3 h-72 w-72 rounded-full bg-brand-mint/8 blur-[120px]" />
        <div className="section">
          <Reveal className="mb-12 text-center">
            <SectionLabel>Browse by Industry</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              We Build for <span className="text-gradient">Every Business</span>
            </h2>
          </Reveal>

          <Reveal delay={0.05} className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((ind) => (
              <IndustryPill key={ind.id} ind={ind} />
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <WebShowcaseCoverflow />
          </Reveal>
        </div>
      </section>

      <TrustReviews />
      <WebProcess />

      {/* ── PACKAGES ── */}
      <section id="packages" className="relative py-16 sm:py-20">
        <div className="section">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full neon-border px-5 py-2 text-xs font-bold uppercase tracking-[0.22em]">
              <span className="text-brand-purple-light">Our</span><span className="text-brand-mint">Packages</span>
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Choose The <span className="text-gradient">Perfect Plan</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/90">
              Transparent pricing. Pick a package and complete onboarding, we handle the rest.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <SecurePaymentBadge />
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-mint/30 bg-brand-mint/10 px-3 py-1.5 text-[11px] font-semibold text-brand-mint">
                <ShieldCheck size={13} /> 30-Day Money-Back Guarantee
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-mint/30 bg-brand-mint/10 px-3 py-1.5 text-[11px] font-semibold text-brand-mint">
                <ShieldCheck size={13} /> Free Hosting — ends August 15, 2026
              </span>
            </div>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-amber-400 sm:text-sm">
              <Clock size={14} className="shrink-0" /> Claim free hosting before August 15 — offer ending soon!
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.07}>
                <div className={`relative flex h-full flex-col rounded-3xl p-4 xl:p-6 transition-all duration-300 hover:-translate-y-2 ${p.popular ? "neon-border shadow-glow-purple" : "glass hover:shadow-glow-purple"}`}>
                  {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-mint px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink shadow-glow-mint">Most Popular</span>}
                  <div className="text-sm font-semibold uppercase tracking-wide text-brand-mint">{p.name}</div>
                  <div className="mt-2">
                    {!p.contact ? (
                      <div className="flex items-end gap-1">
                        <span className="font-display text-3xl xl:text-4xl font-extrabold text-white">{p.price}</span>
                        <span className="mb-1 text-xs text-white/90">one-time</span>
                      </div>
                    ) : (
                      <span className="inline-block rounded-full border border-brand-mint/30 bg-brand-mint/10 px-3 py-1 text-xs font-semibold text-brand-mint">Contact Us</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-snug text-white/90">{p.tagline}</p>
                  <ul className="mt-5 flex-1 space-y-3 border-t border-white/10 pt-5">
                    {p.includes.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-xs xl:text-sm text-white/75"><Check size={14} className="mt-0.5 shrink-0 text-brand-mint" /> {it}</li>
                    ))}
                  </ul>
                  {p.paymentLink ? (
                    <a href={p.paymentLink} target="_blank" rel="noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-mint px-5 py-3 text-sm font-bold text-ink shadow-glow-mint transition-all hover:-translate-y-0.5 hover:brightness-110">
                      Get Started <ArrowRight size={15} />
                    </a>
                  ) : (
                    <button onClick={() => document.getElementById("onboard")?.scrollIntoView({ behavior: "smooth" })}
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-mint px-5 py-3 text-sm font-bold text-ink shadow-glow-mint transition-all hover:-translate-y-0.5 hover:brightness-110">
                      Get Started <ArrowRight size={15} />
                    </button>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-white/90">Need something custom? Mention it in the form and we&apos;ll send a tailored quote.</p>
        </div>
      </section>

      {/* ── GET IN TOUCH ── */}
      <section id="onboard" className="relative py-16 sm:py-20">
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
                    Let&apos;s Build Your <span className="text-gradient">Website</span>
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90">
                    Send us a quick message and our team will reach out within 24–48 hours to get started.
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
                <WebContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function WebContactForm() {
  const fieldCls = "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-brand-mint/60";
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const set = (k: string, v: string) => { setForm((p) => ({ ...p, [k]: v })); if (status === "error") setStatus("idle"); };

  const submit = async () => {
    if (!form.name || !form.email) { setStatus("error"); setErrorMsg("Please fill in your name and email."); return; }
    setStatus("sending"); setErrorMsg("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, service: "Web Development" }) });
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
        <label className="mb-1.5 block text-sm font-medium text-white/80">Message</label>
        <textarea className={`${fieldCls} min-h-[110px] resize-y leading-relaxed`} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Tell us about your project or goals..." />
      </div>
      {status === "error" && <p className="mt-4 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-2.5 text-sm text-red-300">{errorMsg}</p>}
      <button onClick={submit} disabled={status === "sending"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-mint px-7 py-3.5 text-sm font-bold text-ink shadow-glow-mint transition-all hover:-translate-y-0.5 hover:brightness-110 disabled:opacity-60">
        <Send size={16} /> {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </div>
  );
}