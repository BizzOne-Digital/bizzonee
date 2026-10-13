"use client";

import { SITE_STATS, MARKETS_SERVED, formatStat } from "@/data/site-stats";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { SERVICES, serviceHref, type Service } from "@/lib/services";

const MARQUEE_CARDS = [...SERVICES, ...SERVICES];

function Pedestal({ icon: Icon, i }: { icon: LucideIcon; i: number }) {
  return (
    <div className="relative mx-auto mb-5 flex h-36 w-full items-center justify-center">
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3 + (i % 5) * 0.4, repeat: Infinity, ease: "easeInOut" }}
        className="grid h-20 w-20 place-items-center rounded-2xl bg-brand-mint/10">
        <Icon className="text-brand-mint" size={36} />
      </motion.div>
    </div>
  );
}

function ServiceCard({ c, i, hidden = false }: { c: Service; i: number; hidden?: boolean }) {
  return (
    <Link href={serviceHref(c)} className="block h-full" tabIndex={hidden ? -1 : undefined}>
      <motion.div
        whileHover={{ y: -12 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
        className="group relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-3xl glass p-6 transition-shadow duration-300 hover:shadow-glow-purple"
      >
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-mint to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute -inset-y-2 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-ink/8 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

        <div className="mb-2 flex justify-center">
          <span className="rounded-xl border border-brand-mint/30 bg-brand-mint/5 px-4 py-1.5 text-center leading-tight">
            <span className="block text-[9px] font-medium uppercase tracking-wide text-ink/45">{c.badgeLabel}</span>
            <span className="block text-sm font-bold text-brand-mint">{c.badgeValue}</span>
          </span>
        </div>

        <Pedestal icon={c.icon} i={i % 5} />

        <h3 className="text-center font-display text-lg font-bold text-ink">{c.title}</h3>
        <p className="mx-auto mt-3 max-w-[15rem] text-center text-sm leading-relaxed text-ink/90">{c.short}</p>

        <div className="mt-auto flex items-center justify-center gap-2 pt-6 text-xs font-bold uppercase tracking-wide text-brand-mint">
          Learn More
          <motion.span animate={{ y: [0, -4, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: (i % 5) * 0.15 }}
            className="grid h-9 w-9 place-items-center rounded-full border border-brand-mint/40 transition-all duration-300 group-hover:bg-brand-mint group-hover:text-ink group-hover:shadow-glow-mint">
            <ArrowRight size={16} />
          </motion.span>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <style>{`
        @keyframes marquee-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-track { display: flex; gap: 20px; width: max-content; animation: marquee-scroll 45s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="section">
        <Reveal from="left" className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full neon-border px-5 py-2 text-xs font-bold uppercase tracking-[0.22em]">
            <span className="text-brand-purple-light">Our</span><span className="text-brand-mint">Services</span>
          </span>
          <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            End-to-End <span className="text-gradient">Digital Solutions</span><br className="hidden sm:block" /> To Grow Your Business
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/80">
            We combine creativity, technology, and data to deliver powerful digital experiences that drive real results.
          </p>
        </Reveal>

      </div>

      {/* Full-bleed marquee — outside the section container */}
      <div className="mt-14 overflow-hidden py-8 w-full">
        <div className="marquee-track">
          {MARQUEE_CARDS.map((c, i) => (
            <div
              key={i}
              className="w-[280px] shrink-0 sm:w-[300px]"
              aria-hidden={i >= SERVICES.length ? "true" : undefined}
            >
              <ServiceCard c={c} i={i} hidden={i >= SERVICES.length} />
            </div>
          ))}
        </div>
      </div>

      <div className="section">

        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-5 rounded-2xl glass-strong px-6 py-5 sm:flex-row sm:gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {["#8C00FF", "#C8F31D", "#B47BFF"].map((col, i) => (
                  <span key={i} className="h-10 w-10 rounded-full border-2 border-ink" style={{ background: `linear-gradient(135deg, ${col}, #0b0e18)` }} />
                ))}
              </div>
              <p className="text-sm leading-snug text-ink/70">Trusted by <span className="font-bold text-ink">{formatStat(SITE_STATS.businessesServed)} businesses</span> across {MARKETS_SERVED.short}<br className="hidden sm:block" /> to grow smarter and faster.</p>
            </div>
            <span className="hidden h-10 w-px bg-ink/10 sm:block" />
            <Link href="/services" className="group inline-flex items-center gap-2 rounded-full neon-border px-6 py-3 text-sm font-bold text-ink transition-all hover:shadow-glow-purple sm:ml-auto">
              <span><span className="text-brand-purple-light">Explore</span> All Services</span>
              <ArrowRight size={16} className="text-brand-mint transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}