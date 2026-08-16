"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

interface Project {
  name: string;
  category: string;
  industry: string;
  src: string;
  url: string;
}

/* industry ids must match INDUSTRIES in WebDevelopment.tsx */
export const INDUSTRY_FILTERS = [
  { id: "all", label: "All Industries", color: "#C8F31D" },
  { id: "construction", label: "Construction & Renovation", color: "#F59E0B" },
  { id: "restaurant", label: "Restaurant & Food Services", color: "#EF4444" },
  { id: "professional", label: "Professional Services", color: "#10B981" },
  { id: "ecommerce", label: "E-commerce & Retail", color: "#C8F31D" },
  { id: "hospitality", label: "Travel & Hospitality", color: "#06B6D4" },
  { id: "health", label: "Health & Wellness", color: "#EC4899" },
  { id: "automotive", label: "Automotive Services", color: "#3B82F6" },
  { id: "nonprofit", label: "Non-Profit & Community", color: "#8B5CF6" },
];

/* Add new projects here as more screenshots come in — just add the next web{N}.png to /public and a row below. */
const PROJECTS: Project[] = [
  { name: "From Mom to Magic", category: "Restaurant & Food Services", industry: "restaurant", src: "/web1.png", url: "https://www.m2mprocleaners.ca/" },
  { name: "Hope Community Network", category: "Non-Profit & Community", industry: "nonprofit", src: "/web2.png", url: "https://www.cobbchurchnetwork.org/" },
  { name: "Stride Hockey", category: "E-commerce & Retail", industry: "ecommerce", src: "/web3.png", url: "https://www.strideshockeysales.com/" },
  { name: "TowPro Towing", category: "Automotive Services", industry: "automotive", src: "/web4.png", url: "https://www.jmgallautorecycling.com/" },
  { name: "Lumina Medi Spa", category: "Health & Wellness", industry: "health", src: "/web5.png", url: "https://www.luminamedispa.ca/" },
  { name: "Express Glass", category: "Construction & Renovation", industry: "construction", src: "/web6.png", url: "https://www.expressglassriverside.com/" },
  { name: "Everprint", category: "E-commerce & Retail", industry: "ecommerce", src: "/web7.png", url: "https://www.everprints.ca/" },
];

function findColor(industry: string) {
  return INDUSTRY_FILTERS.find((f) => f.id === industry)?.color ?? "#C8F31D";
}

export default function WebPortfolio() {
  const [industry, setIndustry] = useState("all");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("industry");
    if (q && INDUSTRY_FILTERS.some((f) => f.id === q)) setIndustry(q);
  }, []);

  const filtered = industry === "all" ? PROJECTS : PROJECTS.filter((p) => p.industry === industry);

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
          {INDUSTRY_FILTERS.map((f) => {
            const on = industry === f.id;
            return (
              <button key={f.id} onClick={() => setIndustry(f.id)}
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

        {filtered.length === 0 ? (
          <div className="mx-auto mt-14 max-w-md rounded-2xl border border-white/10 bg-white/[0.03] py-14 text-center">
            <p className="text-base font-semibold text-white/80">More real client examples for this industry are on the way.</p>
            <p className="mt-2 text-sm text-white/50">Browse another industry above, or reach out and we&apos;ll show you similar work.</p>
          </div>
        ) : (
          <Reveal delay={0.1} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map(({ name, category, src, url, industry: ind }) => {
              const color = findColor(ind);
              return (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block rounded-[1.75rem] border bg-[#0a0814] p-2 shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
                  style={{ borderColor: `${color}40`, boxShadow: `0 0 30px ${color}1a` }}
                >
                  <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: "16/10" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl px-3 py-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg" style={{ background: `${color}1f`, color }}>
                      <ArrowRight size={13} className="-rotate-45" />
                    </span>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-bold text-white">{name}</div>
                      <div className="truncate text-[11px] font-bold uppercase tracking-wide" style={{ color }}>{category}</div>
                    </div>
                  </div>
                </a>
              );
            })}
          </Reveal>
        )}
      </div>
    </section>
  );
}
