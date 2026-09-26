import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Quote } from "lucide-react";
import PageShell from "@/components/content/PageShell";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import CtaBanner from "@/components/content/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { CASE_STUDIES, getCaseStudy } from "@/data/case-studies";
import { getService, serviceHref } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Case Study Not Found", robots: { index: false } };
  return buildMetadata({
    title: cs.seoTitle,
    description: cs.seoDescription,
    path: `/case-studies/${cs.slug}`,
    image: { url: cs.images[0].src, width: cs.images[0].width, height: cs.images[0].height, alt: cs.images[0].alt },
  });
}

const serviceLink = (slug: string) => {
  if (slug === "web-development") return { href: "/web-development", label: "Web Development" };
  const s = getService(slug);
  return s ? { href: serviceHref(s), label: s.title } : null;
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();
  const path = `/case-studies/${cs.slug}`;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: cs.client, path }];
  const services = cs.services.map(serviceLink).filter((s): s is { href: string; label: string } => !!s);

  return (
    <PageShell>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <article className="section py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs items={crumbs} />
          <header className="mt-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-mint">Case Study · {cs.industry}</span>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">{cs.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{cs.summary}</p>
          </header>

          <div className={`mt-10 grid gap-4 ${cs.images.length > 1 ? "sm:grid-cols-3" : ""}`}>
            {cs.images.map((img, i) => (
              <div key={img.src} className={`overflow-hidden rounded-2xl border border-white/10 ${cs.images.length === 1 ? "mx-auto max-w-md" : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading={i === 0 ? "eager" : "lazy"} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <section className="rounded-2xl glass p-6">
              <h2 className="font-display text-xl font-bold text-white">The Client &amp; the Brief</h2>
              <p className="mt-2 text-sm font-semibold text-white/80">{cs.client}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{cs.brief}</p>
            </section>
            <section className="rounded-2xl glass p-6">
              <h2 className="font-display text-xl font-bold text-white">What We Did</h2>
              <ul className="mt-3 space-y-2.5">
                {cs.work.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-sm text-white/75">
                    <Check size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-mint" /> {w}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {cs.results.length > 0 && (
            <section className="mt-8 rounded-2xl neon-border p-6">
              <h2 className="font-display text-xl font-bold text-white">Results</h2>
              <dl className="mt-4 grid gap-4 sm:grid-cols-3">
                {cs.results.map((r) => (
                  <div key={r.label}>
                    <dt className="text-xs uppercase tracking-wider text-white/45">{r.label}</dt>
                    <dd className="font-display text-2xl font-extrabold text-brand-mint">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {cs.quote && (
            <figure className="mt-8 rounded-2xl glass-strong p-8">
              <Quote size={22} aria-hidden="true" className="text-brand-mint" />
              <blockquote className="mt-3 text-lg leading-relaxed text-white/85">&ldquo;{cs.quote.text}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-bold text-white">
                {cs.quote.author} <span className="font-normal text-white/45">· {cs.quote.source}</span>
              </figcaption>
            </figure>
          )}

          <section className="mt-10">
            <h2 className="font-display text-xl font-bold text-white">Services Used</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="inline-flex items-center gap-1.5 rounded-full border border-brand-mint/40 bg-brand-mint/10 px-4 py-2 text-sm font-semibold text-brand-mint hover:bg-brand-mint/20">
                  {s.label} <ArrowRight size={13} aria-hidden="true" />
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/55">
              See more of our work in the <Link href="/our-work" className="font-semibold text-brand-mint underline-offset-4 hover:underline">BizzOne Digital portfolio</Link> or{" "}
              <Link href="/case-studies" className="font-semibold text-brand-mint underline-offset-4 hover:underline">read other case studies</Link>.
            </p>
          </section>
        </div>
      </article>
      <CtaBanner title="Let's Build Your" accent="Success Story" />
    </PageShell>
  );
}
