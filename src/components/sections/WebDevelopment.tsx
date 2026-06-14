"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronLeft, ChevronRight, ExternalLink, Layers, Gauge, Globe } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import NeonButton from "@/components/ui/NeonButton";
import WebProcess from "@/components/sections/WebProcess";
import TrustReviews from "@/components/sections/TrustReviews";
import OnboardForm from "@/components/sections/OnboardForm";

interface Project { name: string; category: string; description: string; url: string }
const PROJECTS: Project[] = [
  { name: "M2M Pro", category: "Business Platform", description: "Conversion-focused business platform with a bold, modern interface.", url: "https://www.m2mprocleaners.ca" },
  { name: "Cobb Church", category: "Community", description: "Warm community website with events, media and easy navigation.", url: "https://www.cobbchurchnetwork.org" },
  { name: "A1 Furnished", category: "Real Estate", description: "Premium furnished-rentals site with rich listings.", url: "https://www.a1furnished.ca" },
  { name: "Global Paradon", category: "Corporate", description: "Professional corporate site built to win clients.", url: "https://www.globalpardonwaivers.com" },
  { name: "AEM Quality ISO", category: "Quality Consulting", description: "Clean, credible site for quality consulting that builds instant trust.", url: "https://www.aemqualityiso.com" },
  { name: "Bariis Pizza", category: "Restaurant", description: "Appetizing restaurant site with a smooth ordering experience.", url: "https://www.bariishalalpizza.com" },
  { name: "Corner Store", category: "Retail", description: "Neon-styled retail storefront with slick product browsing.", url: "https://www.cornerstoreatlinwood.com" },
  { name: "Toronto Notary", category: "Local Business", description: "Modern local-business site that converts.", url: "https://www.torontonotaryoffice.ca" },
];

function MiniFrame({ url, name }: { url: string; name: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#120c20] shadow-2xl">
      <div className="flex items-center gap-1 border-b border-white/5 px-2.5 py-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-green-400/70" />
        <span className="ml-2 hidden truncate text-[8px] text-white/30 sm:block">{url.replace("https://www.", "")}</span>
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#0d0820] to-[#05030a]">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="h-2 w-24 rounded-full bg-white/10" />
          <div className="h-2 w-32 rounded-full bg-white/7" />
          <div className="h-2 w-20 rounded-full bg-white/5" />
          <div className="mt-4 text-xs font-semibold text-white/40">{url.replace("https://www.", "")}</div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-purple/10 via-transparent to-brand-mint/5" />
      </div>
    </div>
  );
}

type Pkg = { name: string; price: string; tagline: string; popular?: boolean; includes: string[] };
const PACKAGES: Pkg[] = [
  { name: "Starter", price: "$79", tagline: "Clean, professional website to get online fast.", includes: ["Up to 5 pages", "Contact form", "Stock photos", "Mobile responsive", "Basic on-page SEO"] },
  { name: "Standard", price: "$149", tagline: "Everything you need to grow and convert.", includes: ["Up to 7 pages", "Contact form", "Admin portal", "Gallery management", "Mobile responsive"] },
  { name: "Advanced", price: "$399", tagline: "Conversion-focused with portals & payments.", popular: true, includes: ["Up to 7 pages", "Basic admin portal", "Basic customer portal", "Payment integration", "SEO setup"] },
  { name: "Premium", price: "$499", tagline: "Everything, fully custom & eCommerce ready.", includes: ["Up to 10 pages", "All integrations", "eCommerce ready", "Fully custom design", "Multi-language"] },
];

const STATS = [
  { icon: Layers, value: "120+", label: "Sites launched" },
  { icon: Gauge, value: "98%", label: "Performance" },
  { icon: Globe, value: "24–48h", label: "Kickoff" },
];

const scrollToOnboard = () => document.getElementById("onboard")?.scrollIntoView({ behavior: "smooth" });

export default function WebDevelopment() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = PROJECTS.length;
  const go = (dir: number) => setActive((a) => (a + dir + n) % n);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), 3500);
    return () => clearInterval(id);
  }, [paused, n]);

  const cur = PROJECTS[active];

  return (
    <>
      <section className="relative py-14 sm:py-18">
        <div className="pointer-events-none absolute -top-10 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[130px]" />
        <div className="section grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Web Development</SectionLabel>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              High-Performance Websites Built To <span className="text-gradient">Grow Your Business</span>
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65">
              Visually stunning, fully optimized and modern websites that turn visitors into customers — fast, responsive and built to scale.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <NeonButton href="#onboard" variant="primary">Start Your Project <ArrowRight size={16} /></NeonButton>
              <NeonButton href="#packages" variant="ghost">View Packages</NeonButton>
            </div>
            <div className="mt-8 flex flex-wrap gap-5">
              {STATS.map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-mint/10 text-brand-mint"><s.icon size={16} /></span>
                  <div>
                    <div className="font-display text-base font-bold text-white">{s.value}</div>
                    <div className="text-[11px] text-white/50">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
                  <MiniFrame url={cur.url} name={cur.name} />
                </motion.div>
              </AnimatePresence>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-mint">{cur.category}</span>
                  <h3 className="font-display text-sm font-bold text-white">{cur.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <a href={cur.url} target="_blank" rel="noreferrer" className="grid h-8 w-8 place-items-center rounded-full glass text-white/60 transition hover:text-brand-mint"><ExternalLink size={13} /></a>
                  <button onClick={() => go(-1)} className="grid h-8 w-8 place-items-center rounded-full glass text-white/60 transition hover:text-brand-mint"><ChevronLeft size={14} /></button>
                  <button onClick={() => go(1)} className="grid h-8 w-8 place-items-center rounded-full glass text-white/60 transition hover:text-brand-mint"><ChevronRight size={14} /></button>
                </div>
              </div>
              <div className="mt-2 flex gap-1.5">
                {PROJECTS.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} className={`h-1.5 rounded-full transition-all ${i === active ? "w-5 bg-brand-mint" : "w-1.5 bg-white/20"}`} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <TrustReviews />
      <WebProcess />

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
                  {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-mint px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink shadow-glow-mint">Most Popular</span>}
                  <div className="text-sm font-semibold uppercase tracking-wide text-brand-mint">{p.name}</div>
                  <div className="mt-2">
                    {(p.name === "Starter" || p.name === "Standard") ? (
                      <div className="flex items-end gap-1">
                        <span className="font-display text-4xl font-extrabold text-white">{p.price}</span>
                        <span className="mb-1 text-xs text-white/45">one-time</span>
                      </div>
                    ) : (
                      <span className="inline-block rounded-full border border-brand-mint/30 bg-brand-mint/10 px-3 py-1 text-xs font-semibold text-brand-mint">Contact for pricing</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-snug text-white/55">{p.tagline}</p>
                  <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
                    {p.includes.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-sm text-white/75"><Check size={16} className="mt-0.5 shrink-0 text-brand-mint" /> {it}</li>
                    ))}
                  </ul>
                  {/* solid button */}
                  <button onClick={scrollToOnboard}
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 hover:brightness-110 ${p.popular ? "bg-brand-mint text-ink shadow-glow-mint" : "bg-brand-mint text-ink shadow-glow-mint"}`}>
                    Get Started <ArrowRight size={15} />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-white/40">Need something custom? Mention it in the form and we&apos;ll send a tailored quote.</p>
        </div>
      </section>

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
              Fill in the details below and hit submit. Our team will reach out within <span className="font-semibold text-white">24–48 hours</span>.
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