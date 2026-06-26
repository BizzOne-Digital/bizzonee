"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ExternalLink, ChevronLeft, ChevronRight, Layers, Gauge, Globe } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import NeonButton from "@/components/ui/NeonButton";
import WebProcess from "@/components/sections/WebProcess";
import TrustReviews from "@/components/sections/TrustReviews";
import OnboardForm from "@/components/sections/OnboardForm";

const BASE_W = 1440;

/* ── live iframe frame ── */
function LiveFrame({ url, name }: { url: string; name: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.25);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / BASE_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0814] shadow-xl">
      {/* browser bar */}
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-[#0f0a1e] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/60" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
        <span className="h-2 w-2 rounded-full bg-green-400/60" />
        <span className="ml-2 truncate text-[9px] text-white/25">{url.replace("https://www.", "").replace("https://", "")}</span>
      </div>
      {/* scaled iframe */}
      <div ref={ref} className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <iframe
          src={url}
          title={name}
          scrolling="no"
          loading="lazy"
          className="absolute left-0 top-0 origin-top-left border-0"
          style={{
            width: `${BASE_W}px`,
            height: `${BASE_W * (10 / 16)}px`,
            transform: `scale(${scale})`,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

/* ── all projects with industry tag ── */
const ALL_PROJECTS = [
  { name: "M2M Pro Cleaners",  industry: "construction", url: "https://www.m2mprocleaners.ca",        tag: "Construction" },
  { name: "Lupin Project",     industry: "construction", url: "https://lupinprojectgroup.com",         tag: "Construction" },
  { name: "Cobb Church",       industry: "nonprofit",    url: "https://www.cobbchurchnetwork.org",     tag: "Non-Profit" },
  { name: "Bariis Pizza",      industry: "restaurant",   url: "https://www.bariishalalpizza.com",      tag: "Restaurant" },
  { name: "JMG Auto",          industry: "automotive",   url: "https://www.jmgauto.ca",               tag: "Automotive" },
  { name: "AEM Quality ISO",   industry: "health",       url: "https://www.aemqualityiso.com",        tag: "Health" },
  { name: "Global Paradon",    industry: "professional", url: "https://www.globalpardonwaivers.com",  tag: "Professional" },
  { name: "Toronto Notary",    industry: "professional", url: "https://www.torontonotaryoffice.ca",   tag: "Professional" },
  { name: "A1 Furnished",      industry: "hospitality",  url: "https://www.a1furnished.ca",           tag: "Hospitality" },
  { name: "Corner Store",      industry: "ecommerce",    url: "https://www.cornerstoreatlinwood.com", tag: "E-commerce" },
];

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

/* ── industry slider card ── */
function IndustryCard({ ind }: { ind: typeof INDUSTRIES[0] }) {
  const projects = ALL_PROJECTS.filter((p) => p.industry === ind.id);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = projects.length;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    if (!n || paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), 4000);
    return () => clearInterval(id);
  }, [paused, n]);

  const cur = projects[active];

  return (
    <div className="glass rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${ind.color}25`; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>

      {/* header */}
      <div className="mb-3 flex items-center gap-2">
        <span className="text-xl">{ind.emoji}</span>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider" style={{ color: ind.color }}>{ind.label}</p>
        </div>
      </div>

      {/* slider */}
      <div>
        {n > 0 ? (
          <>
            <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              <AnimatePresence mode="wait">
                <motion.div key={active}
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}>
                  <LiveFrame url={cur.url} name={cur.name} />
                </motion.div>
              </AnimatePresence>

              {/* info row */}
              <div className="mt-2 flex items-center justify-between">
                <p className="text-xs font-semibold text-white/70">{cur.name}</p>
                <div className="flex items-center gap-1">
                  <a href={cur.url} target="_blank" rel="noreferrer"
                    className="grid h-6 w-6 place-items-center rounded-full bg-white/5 text-white/40 hover:text-white transition-colors">
                    <ExternalLink size={11} />
                  </a>
                  {n > 1 && (
                    <>
                      <button onClick={() => setActive((a) => (a - 1 + n) % n)}
                        className="grid h-6 w-6 place-items-center rounded-full bg-white/5 text-white/40 hover:text-white transition-colors">
                        <ChevronLeft size={12} />
                      </button>
                      <button onClick={() => setActive((a) => (a + 1) % n)}
                        className="grid h-6 w-6 place-items-center rounded-full bg-white/5 text-white/40 hover:text-white transition-colors">
                        <ChevronRight size={12} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {n > 1 && (
                <div className="mt-1.5 flex gap-1">
                  {projects.map((_, i) => (
                    <button key={i} onClick={() => setActive(i)}
                      className="h-1 rounded-full transition-all"
                      style={{ width: i === active ? 16 : 4, background: i === active ? ind.color : "rgba(255,255,255,0.2)" }} />
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex aspect-[16/10] items-center justify-center rounded-xl border border-white/8 bg-white/[0.02]">
            <p className="text-xs text-white/25">Coming soon</p>
          </div>
        )}
      </div>

      {/* CTA */}
      <button onClick={() => document.getElementById("onboard")?.scrollIntoView({ behavior: "smooth" })}
        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-all hover:opacity-90"
        style={{ background: `${ind.color}15`, border: `1px solid ${ind.color}35`, color: ind.color }}>
        Build mine <ArrowRight size={11} />
      </button>
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


export default function WebDevelopment() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative py-16 sm:py-24">
        <div className="pointer-events-none absolute -top-10 left-1/2 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[140px]" />
        <div className="section">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionLabel>Web Development</SectionLabel>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              High-Performance Websites Built To <span className="text-gradient">Grow Your Business</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Visually stunning, fully optimized and modern websites that turn visitors into customers  fast, responsive and built to scale.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <NeonButton href="#onboard" variant="primary">Start Your Project <ArrowRight size={16} /></NeonButton>
              <NeonButton href="#packages" variant="ghost">View Packages</NeonButton>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-mint/10 text-brand-mint"><s.icon size={16} /></span>
                  <div className="text-left">
                    <div className="font-display text-base font-bold text-white">{s.value}</div>
                    <div className="text-[11px] text-white/50">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BY INDUSTRY — 2 columns ── */}
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-brand-mint/8 blur-[120px]" />
        <div className="section">
          <Reveal className="mb-12 text-center">
            <SectionLabel>Browse by Industry</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
              We Build for <span className="text-gradient">Every Business</span>
            </h2>
            <p className="mt-3 text-base text-white/60">Real websites we&apos;ve built — see yours.</p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.id} delay={i * 0.06}>
                <IndustryCard ind={ind} />
              </Reveal>
            ))}
          </div>
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
                  <button onClick={() => document.getElementById("onboard")?.scrollIntoView({ behavior: "smooth" })}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-mint px-5 py-3 text-sm font-bold text-ink shadow-glow-mint transition-all hover:-translate-y-0.5 hover:brightness-110">
                    Get Started <ArrowRight size={15} />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-white/40">Need something custom? Mention it in the form and we&apos;ll send a tailored quote.</p>
        </div>
      </section>

      {/* ── ONBOARDING FORM ── */}
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
          <Reveal delay={0.1}><OnboardForm /></Reveal>
        </div>
      </section>
    </>
  );
}