"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { getService } from "@/lib/services";
import type { CaseStudy } from "@/data/case-studies";

function serviceLabel(slug: string): string {
  return getService(slug)?.title ?? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ProjectExplorer({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [active, setActive] = useState(0);
  if (caseStudies.length === 0) return null;

  const n = caseStudies.length;
  const current = caseStudies[active];
  const img = current.images[0];
  const go = (dir: number) => setActive((a) => (a + dir + n) % n);

  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-20">
      <div className="section">
        <Reveal className="mb-10 max-w-2xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-mint">Explore Projects</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Browse Our <span className="text-gradient">Case Studies</span>
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="grid gap-6 lg:grid-cols-[0.3fr_0.7fr]">
          {/* left — numbered list */}
          <div className="flex flex-col gap-1">
            {caseStudies.map((c, i) => {
              const on = i === active;
              return (
                <button
                  key={c.slug}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-4 rounded-xl border-l-[3px] px-4 py-4 text-left transition-all duration-200 ${
                    on
                      ? "border-brand-purple bg-brand-purple/5"
                      : "border-transparent hover:bg-ink/[0.03]"
                  }`}
                >
                  <span className={`font-display text-sm font-bold ${on ? "text-brand-purple" : "text-ink/30"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className={`truncate font-display text-base font-bold ${on ? "text-ink" : "text-ink/70"}`}>{c.client}</div>
                    <div className="truncate text-xs text-ink/45">{c.industry}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* right — preview + details */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {/* browser-chrome framed preview */}
                <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-glow-purple">
                  <div className="flex items-center gap-1.5 border-b border-ink/8 bg-ink/[0.02] px-3 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                    <span className="ml-3 hidden h-4 flex-1 items-center truncate rounded-full bg-ink/5 px-3 text-[10px] text-ink/40 sm:flex">
                      {current.client.toLowerCase().replace(/\s+/g, "")}.com
                    </span>
                  </div>
                  <div className="grid place-items-center bg-ink/[0.02]" style={{ aspectRatio: "16/9" }}>
                    {img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={img.src} alt={img.alt} className="h-full w-full object-contain p-8" />
                    ) : (
                      <span className="text-sm text-ink/40">Preview coming soon</span>
                    )}
                  </div>
                </div>

                {/* detail row */}
                <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="font-display text-lg font-bold text-ink">{current.client}</div>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {current.services.map((s) => (
                        <span key={s} className="rounded-full border border-ink/10 bg-ink/[0.03] px-2.5 py-1 text-[11px] font-medium text-ink/60">
                          {serviceLabel(s)}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/case-studies/${current.slug}`}
                    className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-brand-purple hover:underline"
                  >
                    View project <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* prev/next */}
            <div className="mt-6 flex items-center justify-end gap-2">
              <button aria-label="Previous project" onClick={() => go(-1)}
                className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-ink/50 transition-colors hover:border-ink/30 hover:text-ink">
                <ChevronLeft size={16} />
              </button>
              <button aria-label="Next project" onClick={() => go(1)}
                className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 text-ink/50 transition-colors hover:border-ink/30 hover:text-ink">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
