"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Code2, Layers, Gauge, Globe } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import NeonButton from "@/components/ui/NeonButton";
import WebPortfolio from "@/components/sections/WebPortfolio";
import WebProcess from "@/components/sections/WebProcess";
import OnboardForm from "@/components/sections/OnboardForm";

type Pkg = { name: string; price: string; tagline: string; popular?: boolean; includes: string[] };
const PACKAGES: Pkg[] = [
  { name: "Starter", price: "$79", tagline: "Perfect for a clean first website.", includes: ["Up to 5 pages", "Contact form", "Stock photos", "Mobile responsive", "Basic on-page SEO"] },
  { name: "Standard", price: "$149", tagline: "For growing businesses that need more.", includes: ["Up to 7 pages", "Contact form", "Admin portal", "Gallery management", "Mobile responsive"] },
  { name: "Advanced", price: "$399", tagline: "Conversion-focused with portals & payments.", popular: true, includes: ["Up to 7 pages", "Basic admin portal", "Basic customer portal", "Payment integration", "SEO setup"] },
  { name: "Premium", price: "$499", tagline: "Everything, fully custom & eCommerce ready.", includes: ["Up to 10 pages", "All integrations", "eCommerce ready", "Fully custom design", "Multi-language"] },
];

const STATS = [
  { icon: Layers, value: "120+", label: "Sites launched" },
  { icon: Gauge, value: "98%", label: "Avg. performance" },
  { icon: Globe, value: "24–48h", label: "Kickoff time" },
];

const scrollToOnboard = () => document.getElementById("onboard")?.scrollIntoView({ behavior: "smooth" });

export default function WebDevelopment() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute -top-10 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[130px]" />
        <div className="section grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Web Development</SectionLabel>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              High-Performance Websites Built To <span className="text-gradient">Grow Your Business</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/65">
              We design and develop visually stunning, fully optimized and modern websites that turn visitors into customers — fast, responsive and built to scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <NeonButton href="#onboard" variant="primary">Start Your Project <ArrowRight size={16} /></NeonButton>
              <NeonButton href="#packages" variant="ghost">View Packages</NeonButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-mint/10 text-brand-mint"><s.icon size={18} /></span>
                  <div>
                    <div className="font-display text-lg font-bold text-white">{s.value}</div>
                    <div className="text-xs text-white/50">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto grid aspect-square w-full max-w-md place-items-center overflow-hidden rounded-3xl glass-strong p-10">
              <span className="absolute inset-0 m-auto h-44 w-44 rounded-full bg-brand-purple/30 blur-3xl" />
              <span className="absolute inset-0 m-auto h-52 w-52 animate-spin-slow rounded-full opacity-50 blur-md" style={{ background: "conic-gradient(from 0deg, transparent, rgba(200,243,29,0.5), transparent 40%, rgba(140,0,255,0.5), transparent 80%)" }} />
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative">
                <Code2 className="text-brand-mint drop-shadow-[0_0_18px_rgba(200,243,29,0.8)]" size={104} strokeWidth={1.3} />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── PACKAGES ───────── */}
      <section id="packages" className="relative py-16 sm:py-20">
        <div className="section">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full neon-border px-5 py-2 text-xs font-bold uppercase tracking-[0.22em]">
              <span className="text-brand-purple-light">Our</span><span className="text-brand-mint">Packages</span>
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Choose The <span className="text-gradient">Perfect Plan</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55">
              Transparent pricing. Pick a package and complete onboarding — we handle the rest.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.07}>
                <div className={`relative flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 ${p.popular ? "neon-border shadow-glow-purple" : "glass hover:shadow-glow-purple"}`}>
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-mint px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink shadow-glow-mint">
                      Most Popular
                    </span>
                  )}
                  <div className="text-sm font-semibold uppercase tracking-wide text-brand-mint">{p.name}</div>
                  <div className="mt-2 flex items-end gap-1">
                    <span className="font-display text-4xl font-extrabold text-white">{p.price}</span>
                    <span className="mb-1 text-xs text-white/45">one-time</span>
                  </div>
                  <p className="mt-2 text-sm leading-snug text-white/55">{p.tagline}</p>
                  <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
                    {p.includes.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-sm text-white/75">
                        <Check size={16} className="mt-0.5 shrink-0 text-brand-mint" /> {it}
                      </li>
                    ))}
                  </ul>
                  <button onClick={scrollToOnboard}
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all ${p.popular ? "bg-brand-mint text-ink shadow-glow-mint hover:-translate-y-0.5" : "neon-border text-white hover:shadow-glow-purple"}`}>
                    Get Started <ArrowRight size={15} />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-white/40">Need something custom or larger? Mention it in the onboarding form and we&apos;ll send a tailored quote.</p>
        </div>
      </section>

      {/* ───────── PORTFOLIO (live previews) ───────── */}
      <WebPortfolio />

      {/* ───────── PROCESS ───────── */}
      <WebProcess />

      {/* ───────── ONBOARDING (our themed form → ClickUp on send) ───────── */}
      <section id="onboard" className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand-mint/10 blur-[130px]" />
        <div className="section">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full neon-border px-5 py-2 text-xs font-bold uppercase tracking-[0.22em]">
              <span className="text-brand-purple-light">Start</span><span className="text-brand-mint">Onboarding</span>
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s Build Your <span className="text-gradient">Website</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55">
              Fill in the details below and hit send. Our team will reach out within <span className="font-semibold text-white">24–48 hours</span>.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <OnboardForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}