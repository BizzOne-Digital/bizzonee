"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Globe2, Palette, Share2, Film, Bot, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const FILTERS = [
  { label: "All", href: "/our-work", icon: Globe2 },
  { label: "Web Design", href: "/our-work#web", icon: Globe2 },
  { label: "Branding", href: "/our-work#logo", icon: Palette },
  { label: "Social Media", href: "/our-work#social", icon: Share2 },
  { label: "Content Creation", href: "/our-work#content", icon: Film },
];

const FEATURED = {
  pill: "WEBSITE • DESIGN CONCEPT",
  name: "Silken Beauty",
  nameAccent: "& Wellness",
  image: "/project-previews/silken-beauty-website.png",
  description: "An example of the premium, elegant website experience we design for beauty and wellness brands.",
  highlights: ["Custom luxury design", "Online booking flow", "Mobile-first build"],
};

const CARDS = [
  {
    label: "BRANDING",
    project: "Hands That Heal",
    sub: "Brand Identity & Visual System",
    image: "/portfolio/logo/logo-design-hands-that-heal.webp",
    href: "/our-work#logo",
    icon: Palette,
  },
  {
    label: "SOCIAL MEDIA",
    project: "BizzOne Digital",
    sub: "Social Media Campaigns",
    image: "/project-previews/bizzone-social-media.png",
    href: "/our-work#social",
    icon: Share2,
  },
  {
    label: "AI & AUTOMATION",
    project: "Smart Workflows",
    sub: "CRM & Lead Automation",
    image: "/project-previews/business-automation.png",
    href: "/service/ai-automation",
    icon: Bot,
  },
  {
    label: "CONTENT CREATION",
    project: "Restaurant Content Series",
    sub: "Video Editing & Content Creation",
    image: "/project-previews/restaurant-content.png",
    href: "/our-work#content",
    icon: Film,
  },
];

export default function PortfolioShowcase() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* decorative glow + grid */}
      <div className="pointer-events-none absolute hidden sm:block -right-20 top-10 h-96 w-96 rounded-full bg-brand-purple/10 blur-[150px]" />
      <div className="pointer-events-none absolute hidden sm:block left-0 bottom-0 h-64 w-64 rounded-full bg-brand-mint/10 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,15,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(12,15,26,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 30%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 30%, black, transparent)",
        }}
      />

      <div className="section relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Projects We&apos;re <span className="text-gradient">Proud Of</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/70">
            Real work delivered for real businesses. Explore websites, branding, social media and content crafted to drive measurable growth.
          </p>
        </Reveal>

        {/* category filters */}
        <Reveal delay={0.08} className="mt-8 flex flex-wrap justify-center gap-2.5">
          {FILTERS.map((f, i) => (
            <Link
              key={f.label}
              href={f.href}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                i === 0
                  ? "border-transparent bg-ink text-white shadow-glow-purple"
                  : "border-ink/10 bg-white text-ink/70 hover:border-ink/25 hover:text-ink"
              }`}
            >
              <f.icon size={14} />
              {f.label}
            </Link>
          ))}
        </Reveal>

        {/* asymmetric grid */}
        <Reveal delay={0.15} className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* featured large card */}
          <Link
            href="/our-work#web"
            className="group relative flex flex-col justify-end overflow-hidden rounded-[26px] border border-ink/10 bg-ink shadow-2xl transition-transform duration-300 hover:-translate-y-1.5"
            style={{ minHeight: 440 }}
          >
            <Image
              src={FEATURED.image}
              alt={`${FEATURED.name} ${FEATURED.nameAccent} website preview`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-brand-purple/30 blur-3xl" />

            <div className="relative p-7 sm:p-9">
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                {FEATURED.pill}
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                {FEATURED.name} <span className="text-brand-mint-bright">{FEATURED.nameAccent}</span>
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">{FEATURED.description}</p>

              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-mint-bright px-6 py-3 text-sm font-bold text-ink shadow-glow-mint transition-transform group-hover:translate-x-1">
                View Project <ArrowRight size={15} />
              </span>

              <div className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {FEATURED.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur-sm">
                    <CheckCircle2 size={14} className="shrink-0 text-brand-mint-bright" />
                    <span className="text-xs font-medium text-white/80">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </Link>

          {/* 2x2 small cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {CARDS.map((c) => (
              <Link
                key={c.project}
                href={c.href}
                className="group relative flex min-h-[210px] flex-col justify-end overflow-hidden rounded-[22px] border border-ink/10 bg-ink shadow-lg transition-transform duration-300 hover:-translate-y-1.5"
              >
                {c.image ? (
                  <>
                    <Image
                      src={c.image}
                      alt={`${c.project} preview`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/90 to-ink" />
                )}

                <div className="relative p-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-mint-bright">{c.label}</span>
                  <h4 className="mt-1.5 font-display text-base font-bold text-white">{c.project}</h4>
                  <p className="mt-0.5 text-xs text-white/60">{c.sub}</p>
                </div>

                <span className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-brand-mint-bright/50 text-brand-mint-bright transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <Link
            href="/our-work"
            className="group inline-flex items-center gap-2 rounded-full border-[1.5px] border-brand-mint-bright/60 bg-white px-7 py-3.5 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-brand-mint-bright/10"
          >
            View All Projects <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
