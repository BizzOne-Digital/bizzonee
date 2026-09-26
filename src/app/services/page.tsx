import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import PageShell from "@/components/content/PageShell";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import CtaBanner from "@/components/content/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { SERVICES, serviceHref } from "@/lib/services";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing & Web Services | BizzOne Digital",
  description:
    "Explore BizzOne Digital's services: SEO, paid ads, branding, video, content strategy, social media, AI automation, web design and app development.",
  path: "/services",
});

const ALL = [
  ...SERVICES.map((s) => ({ key: s.slug, title: s.title, href: serviceHref(s), icon: s.icon, short: s.short })),
  { key: "web-development", title: "Web Development", href: "/web-development", icon: Code2, short: "Fast, mobile-friendly websites with SEO setup, booking and payments, built for small businesses." },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute hidden sm:block -top-10 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[130px]" />
        <div className="section">
          <Reveal>
            <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
          </Reveal>
          <Reveal className="mx-auto mt-8 max-w-3xl text-center">
            <SectionLabel>Our Services</SectionLabel>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Digital Marketing, Web &amp; <span className="text-gradient">AI Automation Services</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              Everything you need to attract, engage and convert customers, from one team. Choose a single service or combine them into a complete growth system.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ALL.map((s, i) => (
              <Reveal key={s.key} delay={i * 0.04}>
                <Link href={s.href} className="group flex h-full flex-col rounded-2xl glass p-6 transition-shadow duration-300 hover:shadow-glow-purple">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-mint/10 text-brand-mint"><s.icon size={20} aria-hidden="true" /></span>
                  <h2 className="mt-4 font-display text-lg font-bold text-white group-hover:text-brand-mint">{s.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-mint">
                    Explore {s.title} <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="Not Sure Where to" accent="Start?" text="Book a free strategy call and we'll recommend the services that will move your numbers fastest." />
    </PageShell>
  );
}
