"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const TIERS = [
  {
    name: "Website",
    price: "$79",
    unit: "starting",
    desc: "A professional, mobile-ready website, live in 24–48 hours. Premium and Advanced options available for growing businesses.",
    href: "/web-development",
    cta: "Get My Website",
    style: "outline" as const,
  },
  {
    name: "App Development",
    price: "Custom",
    unit: "quote",
    desc: "iOS, Android and cross-platform apps, from a lean MVP to a full-featured product — scoped and quoted around your exact needs.",
    href: "/app-development",
    cta: "Get My App Quote",
    style: "outline" as const,
  },
  {
    name: "All-in-One Growth",
    price: "Custom",
    unit: "monthly plan",
    desc: "Ads, content, video, website and automation — one team, one monthly plan, built around your goals.",
    href: "/contact",
    cta: "Get My Custom Quote",
    style: "solid" as const,
    popular: true,
  },
];

const PARTNERS = [
  { label: "Google Partner", color: "#4285F4" },
  { label: "Meta Business Partner", color: "#0866FF" },
];

export default function Packages() {
  return (
    <section id="packages" className="relative py-20 sm:py-24">
      <div className="section">
        <Reveal from="right" className="mx-auto max-w-2xl text-center">
          <SectionLabel>Simple Starting Points</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Start Small Or <span className="text-gradient">Go All-In</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/70">
            Transparent packages for every stage of growth — no surprises, no long contracts.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid gap-5 lg:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col gap-3.5 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                t.style === "solid"
                  ? "bg-ink text-white shadow-glow-purple"
                  : "glass hover:shadow-glow-purple"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-mint-bright px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink shadow-glow-mint">
                  Most Popular
                </span>
              )}
              <div className="font-bold text-lg">{t.name}</div>
              <div className="font-display text-4xl font-extrabold leading-none">
                {t.price}
                <span className={`text-sm font-medium ${t.style === "solid" ? "text-white/60" : "text-ink/50"}`}> {t.unit}</span>
              </div>
              <p className={`flex-1 text-sm leading-relaxed ${t.style === "solid" ? "text-white/70" : "text-ink/70"}`}>
                {t.desc}
              </p>
              <Link
                href={t.href}
                className={`inline-flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 ${
                  t.style === "solid"
                    ? "bg-brand-mint-bright text-ink hover:brightness-105"
                    : "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white"
                }`}
              >
                {t.cta} <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {PARTNERS.map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-bold text-ink/80 shadow-sm"
            >
              <BadgeCheck size={15} style={{ color: p.color }} />
              {p.label}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
