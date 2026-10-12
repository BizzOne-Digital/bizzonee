"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import type { CaseStudy } from "@/data/case-studies";

export default function FeaturedWork({ caseStudies }: { caseStudies: CaseStudy[] }) {
  if (caseStudies.length === 0) return null;

  return (
    <section id="featured-work" className="scroll-mt-24 py-16 sm:py-20">
      <div className="section">
        <Reveal className="mb-12 max-w-2xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-mint">Featured Work</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Real Clients. <span className="text-gradient">Real Results.</span>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-16">
          {caseStudies.map((c, i) => {
            const img = c.images[0];
            const reversed = i % 2 === 1;
            return (
              <Reveal key={c.slug} delay={i * 0.08}>
                <div className={`grid items-center gap-8 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden rounded-3xl border border-ink/10 shadow-glow-purple"
                  >
                    {img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={img.src} alt={img.alt} className="h-full w-full object-cover" style={{ aspectRatio: "16/10" }} />
                    ) : (
                      <div className="grid aspect-[16/10] place-items-center bg-ink/5 text-sm text-ink/40">Preview coming soon</div>
                    )}
                  </motion.div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-purple-light">{c.industry}</span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">{c.client}</h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70 sm:text-base">{c.summary}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {c.work.slice(0, 3).map((w) => (
                        <li key={w} className="rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1.5 text-xs font-medium text-ink/70">{w}</li>
                      ))}
                    </ul>
                    <Link
                      href={`/case-studies/${c.slug}`}
                      className="group mt-7 inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-6 py-3 text-sm font-bold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:text-white"
                    >
                      View Project <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
