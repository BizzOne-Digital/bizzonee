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
import { PUBLISHED_POSTS } from "@/data/blog";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing Blog & Guides | BizzOne Digital",
  description:
    "Practical guides on websites, SEO, Google and Meta ads, social media, branding, app development and CRM automation for small and medium businesses.",
  path: "/blog",
});

const fmt = (d: string) => new Date(`${d}T12:00:00Z`).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });

export default function BlogIndex() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute hidden sm:block -top-10 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[130px]" />
        <div className="section">
          <Reveal>
            <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />
          </Reveal>
          <Reveal className="mx-auto mt-8 max-w-3xl text-center">
            <SectionLabel>Insights</SectionLabel>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Digital Marketing <span className="text-gradient">Guides &amp; Insights</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              Straightforward advice for small and medium businesses on websites, SEO, ads, social media and automation.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PUBLISHED_POSTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.04}>
                <article className="group relative flex h-full flex-col rounded-2xl glass p-6 transition-shadow duration-300 hover:shadow-glow-purple">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-mint">{p.category}</span>
                  <h2 className="mt-3 font-display text-lg font-bold leading-snug text-white">
                    <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0 group-hover:text-brand-mint">{p.title}</Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-white/45">
                    <time dateTime={p.date}>{fmt(p.date)}</time>
                    <span className="inline-flex items-center gap-1 font-bold uppercase tracking-wide text-brand-mint">
                      {p.readingMinutes} min read <ArrowRight size={12} aria-hidden="true" />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="Want Help Putting This" accent="Into Action?" />
    </PageShell>
  );
}
