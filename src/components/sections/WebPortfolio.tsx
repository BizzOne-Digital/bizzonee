"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Industry } from "@/lib/webdevData";

export default function WebPortfolio() {
  const [industries, setIndustries] = useState<Industry[] | null>(null);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("industry");
    if (q) setSelected(q);

    fetch("/api/webdev-content")
      .then((r) => r.json())
      .then((data) => setIndustries(data.industries))
      .catch(() => setIndustries([]));
  }, []);

  if (!industries) {
    return (
      <section id="websites" className="relative py-20 sm:py-28">
        <div className="section flex justify-center">
          <Loader2 className="animate-spin text-brand-mint" size={28} />
        </div>
      </section>
    );
  }

  const withWork = industries.filter((i) => i.images.length > 0);
  const filters = [{ slug: "all", label: "All Industries", color: "#C8F31D" }, ...withWork];
  const selectedIndustry = withWork.find((i) => i.slug === selected);
  const items = selected === "all"
    ? withWork.flatMap((ind) => ind.images.map((img) => ({ ...img, color: ind.color, category: ind.label })))
    : selectedIndustry
      ? selectedIndustry.images.map((img) => ({ ...img, color: selectedIndustry.color, category: selectedIndustry.label }))
      : [];

  return (
    <section id="websites" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute hidden sm:block left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-purple/15 blur-[130px]" />
      <div className="section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Websites We&apos;re <span className="text-gradient">Proud Of</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55">
            Real websites we&apos;ve designed and built — browse by industry.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => {
            const on = selected === f.slug;
            return (
              <button key={f.slug} onClick={() => setSelected(f.slug)}
                className="rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all"
                style={{
                  background: on ? `${f.color}22` : "transparent",
                  borderColor: on ? `${f.color}60` : "rgba(255,255,255,0.12)",
                  color: on ? f.color : "rgba(255,255,255,0.55)",
                }}>
                {f.label}
              </button>
            );
          })}
        </Reveal>

        {items.length === 0 ? (
          <div className="mx-auto mt-14 max-w-md rounded-2xl border border-white/10 bg-white/[0.03] py-14 text-center">
            <p className="text-base font-semibold text-white/80">More real client examples for this industry are on the way.</p>
            <p className="mt-2 text-sm text-white/50">Browse another industry above, or reach out and we&apos;ll show you similar work.</p>
          </div>
        ) : (
          <Reveal delay={0.1} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((img, i) => (
              <a
                key={i}
                href={img.siteUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="group relative block rounded-[1.75rem] border bg-[#0a0814] p-2 shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
                style={{ borderColor: `${img.color}40`, boxShadow: `0 0 30px ${img.color}1a` }}
              >
                <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: "16/10" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.url} alt={img.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex items-center gap-2.5 rounded-xl px-3 py-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg" style={{ background: `${img.color}1f`, color: img.color }}>
                    <ArrowRight size={13} className="-rotate-45" />
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold text-white">{img.name}</div>
                    <div className="truncate text-[11px] font-bold uppercase tracking-wide" style={{ color: img.color }}>{img.category}</div>
                  </div>
                </div>
              </a>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
