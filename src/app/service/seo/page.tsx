import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Search, FileSearch, KeyRound, FileCode2, Wrench, PenLine, MapPin, BarChart3 } from "lucide-react";
import PageShell from "@/components/content/PageShell";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import CtaBanner from "@/components/content/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import NeonButton from "@/components/ui/NeonButton";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

const PATH = "/service/seo";

export const metadata: Metadata = buildMetadata({
  title: "SEO Services in Mississauga | BizzOne Digital",
  description:
    "Local SEO, technical fixes, on-page optimisation and content that get your business found on Google. Book a free strategy call with BizzOne Digital.",
  path: PATH,
});

const INCLUDED = [
  { icon: FileSearch, title: "SEO audit", body: "A full review of your website, Google Business Profile and competitors, with a prioritised list of what to fix first." },
  { icon: KeyRound, title: "Keyword research", body: "We find the searches your customers actually use, by service and by area, and map each one to the right page." },
  { icon: FileCode2, title: "On-page SEO fixes", body: "Unique titles and meta descriptions, one clear H1 per page, internal links, image alt text and descriptive filenames." },
  { icon: Wrench, title: "Technical SEO fixes", body: "Canonical URLs, XML sitemap, robots.txt, redirects, structured data, mobile usability and page speed." },
  { icon: PenLine, title: "Content", body: "Service pages, location pages and blog articles written for people first and structured for search." },
  { icon: MapPin, title: "Local SEO", body: "Google Business Profile optimization, consistent NAP across directories, review strategy and local citations." },
  { icon: BarChart3, title: "Monthly reporting", body: "Clear reports on rankings, organic traffic, calls and leads, plus what we did and what comes next." },
];

const PROCESS = [
  { n: "01", title: "Audit & benchmark", body: "We record where you rank today, crawl your site for technical issues and review your Google Business Profile." },
  { n: "02", title: "Strategy & keyword map", body: "We agree the services and areas that matter most to your revenue and assign target keywords to each page." },
  { n: "03", title: "Fix the foundations", body: "Technical and on-page fixes come first, because content cannot rank on a site Google struggles to crawl." },
  { n: "04", title: "Build content & local signals", body: "New and improved pages, blog content, citations and a steady flow of genuine reviews." },
  { n: "05", title: "Report & refine", body: "Monthly reporting on what moved, what didn't and where we focus next." },
];

const LOCAL_POINTS = [
  "Show up in the Google Maps results for searches near you",
  "Turn your Google Business Profile into a steady source of calls and direction requests",
  "Keep your business name, address and phone number identical everywhere",
  "Earn more genuine reviews and respond to them professionally",
  "Create useful service and location pages instead of thin copy-paste pages",
];

const FAQS = [
  {
    q: "How long does SEO take to work?",
    a: "Technical and on-page fixes can be picked up by Google within weeks, but meaningful ranking and traffic growth usually builds over several months. Competitive keywords take longer. We report progress monthly so you can see what is moving.",
  },
  {
    q: "Do you guarantee first-page rankings?",
    a: "No. Nobody controls Google's rankings, and any agency that guarantees a position should be treated with caution. We guarantee the work: a clear plan, best-practice implementation and transparent reporting.",
  },
  {
    q: "What is local SEO?",
    a: "Local SEO helps your business appear when people nearby search for your services, including the Google Maps results. It focuses on your Google Business Profile, consistent business details across the web, reviews and locally relevant content.",
  },
  {
    q: "Do you only work with businesses in Mississauga?",
    a: "No. We are based in Mississauga and work with businesses across Canada and the United States. Local SEO is tailored to each area you serve.",
  },
  {
    q: "Can you do SEO on a website you did not build?",
    a: "Yes. We audit your existing site first. If the platform allows the necessary changes we optimise it as-is; if not, we explain the options, including a rebuild.",
  },
  {
    q: "What do I need to provide?",
    a: "Access to your website, Google Business Profile, Google Search Console and analytics if you have them, plus a short call about your services, customers and priorities.",
  },
];

export default function SeoServicePage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          serviceSchema({
            name: "SEO Services",
            serviceType: "Search engine optimization",
            path: PATH,
            description:
              "Local SEO, technical SEO audits and fixes, on-page optimisation, keyword research, content and monthly reporting for businesses in Mississauga and across Canada.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "SEO", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute hidden sm:block -top-10 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[130px]" />
        <div className="section">
          <Reveal>
            <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "SEO", path: PATH }]} />
          </Reveal>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full neon-border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-mint">
                Our Services
              </span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                <span className="text-gradient">SEO Services</span> for Businesses in Mississauga and Across Canada
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/65">
                Get found on Google by the customers already searching for what you sell. We combine local SEO, technical fixes, on-page optimisation and content into one clear monthly plan.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <NeonButton href="/contact" variant="primary">Book Free Strategy Call <ArrowRight size={16} /></NeonButton>
                <NeonButton href="#whats-included" variant="ghost">What&apos;s Included</NeonButton>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative mx-auto grid aspect-square w-full max-w-sm place-items-center overflow-hidden rounded-3xl glass-strong p-10">
                <span className="absolute right-5 top-5 rounded-xl border border-brand-mint/30 bg-brand-mint/5 px-4 py-1.5 text-center leading-tight">
                  <span className="block text-[9px] font-medium uppercase tracking-wide text-white/45">Focus</span>
                  <span className="block text-sm font-bold text-brand-mint">Local + Technical</span>
                </span>
                <span className="absolute inset-0 m-auto h-40 w-40 rounded-full bg-brand-purple/30 blur-3xl" />
                <span className="absolute inset-0 m-auto h-48 w-48 animate-spin-slow rounded-full opacity-50 blur-md" style={{ background: "conic-gradient(from 0deg, transparent, rgba(200,243,29,0.5), transparent 40%, rgba(140,0,255,0.5), transparent 80%)" }} />
                <Search aria-hidden="true" className="relative text-brand-mint drop-shadow-[0_0_18px_rgba(200,243,29,0.8)]" size={92} strokeWidth={1.4} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section id="whats-included" className="relative scroll-mt-24 py-12">
        <div className="section">
          <Reveal className="text-center">
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl">Everything Your Site Needs to <span className="text-gradient">Rank</span></h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-white/55">From the first audit to monthly reporting, one team handles every part of your SEO.</p>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl glass p-6 transition-shadow duration-300 hover:shadow-glow-mint">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-mint/10 text-brand-mint"><it.icon size={18} aria-hidden="true" /></span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{it.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-16">
        <div className="section">
          <Reveal className="text-center">
            <SectionLabel>Our SEO Process</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl">A Clear Plan, <span className="text-gradient">Step by Step</span></h2>
          </Reveal>
          <ol className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-5">
            {PROCESS.map((p, i) => (
              <li key={p.n} className="list-none">
                <Reveal delay={i * 0.06} className="h-full rounded-2xl glass-strong p-5">
                  <span className="font-display text-2xl font-extrabold text-gradient">{p.n}</span>
                  <h3 className="mt-2 text-sm font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">{p.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="relative py-12">
        <div className="section">
          <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-3xl glass p-8 sm:p-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">SEO for <span className="text-gradient">Local Businesses</span></h2>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                Most small businesses win or lose customers in local search. When someone nearby searches for your service, local SEO decides whether they see you or a competitor. We help Mississauga businesses and service-area businesses across the GTA and Canada:
              </p>
              <p className="mt-4 text-sm text-white/55">
                Start with our free{" "}
                <Link href="/blog/local-seo-checklist-for-mississauga-businesses" className="font-semibold text-brand-mint underline-offset-4 hover:underline">local SEO checklist for Mississauga businesses</Link>.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-3">
                {LOCAL_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-brand-mint/40 text-brand-mint"><Check size={13} aria-hidden="true" /></span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RESULTS & REPORTING */}
      <section className="relative py-12">
        <div className="section">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">How We Measure <span className="text-gradient">Results</span></h2>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Rankings are only useful if they bring customers. Every monthly report tracks keyword positions, organic traffic, Google Business Profile calls and direction requests, and the leads that came from search, so you can see the return on your investment. We never promise guaranteed rankings.
            </p>
            <p className="mt-4 text-sm text-white/55">
              See how we work with clients in our{" "}
              <Link href="/case-studies" className="font-semibold text-brand-mint underline-offset-4 hover:underline">client case studies</Link>, and pair SEO with a{" "}
              <Link href="/web-development" className="font-semibold text-brand-mint underline-offset-4 hover:underline">fast, SEO-ready website</Link> or{" "}
              <Link href="/service/content-strategy" className="font-semibold text-brand-mint underline-offset-4 hover:underline">content strategy</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-12">
        <div className="section">
          <Reveal className="text-center">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">SEO <span className="text-gradient">FAQs</span></h2>
          </Reveal>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl glass p-5 open:shadow-glow-mint">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white">
                  <h3 className="text-base font-semibold">{f.q}</h3>
                  <span aria-hidden="true" className="text-brand-mint transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Ready to Get Found" accent="on Google?" text="Book a free strategy call. We'll review your site and Google Business Profile and show you the quickest wins." />
    </PageShell>
  );
}
