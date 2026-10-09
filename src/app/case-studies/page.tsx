import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/content/PageShell";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import CtaBanner from "@/components/content/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { CASE_STUDIES } from "@/data/case-studies";

export const metadata: Metadata = buildMetadata({
  title: "Client Case Studies | BizzOne Digital",
  description:
    "See how BizzOne Digital helps real businesses with branding, websites, Google Ads, social media and video content. Read our client case studies.",
  path: "/case-studies",
});

export default function CaseStudiesIndex() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }])} />
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute hidden sm:block -top-10 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[130px]" />
        <div className="section">
          <Reveal>
            <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }]} />
          </Reveal>
          <Reveal className="mx-auto mt-8 max-w-3xl text-center">
            <SectionLabel>Case Studies</SectionLabel>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Client <span className="text-gradient">Case Studies</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">
              The brief, the work and what our clients say about it. Browse more examples in{" "}
              <Link href="/our-work" className="font-semibold text-brand-mint underline-offset-4 hover:underline">our portfolio</Link>.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
            {CASE_STUDIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link href={`/case-studies/${c.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl glass transition-shadow duration-300 hover:shadow-glow-purple">
                  <div className="aspect-[16/10] overflow-hidden bg-ink/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.images[0].src} alt={c.images[0].alt} width={c.images[0].width} height={c.images[0].height} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-mint">{c.industry}</span>
                    <h2 className="mt-2 font-display text-lg font-bold text-ink group-hover:text-brand-mint">{c.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{c.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-mint">
                      Read case study <ArrowRight size={13} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="Want Results Like" accent="These?" />
    </PageShell>
  );
}
