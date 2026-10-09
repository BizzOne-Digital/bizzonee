import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock3, Handshake, Search, Megaphone, Share2, Code2, Bot, Palette, Quote } from "lucide-react";
import PageShell from "@/components/content/PageShell";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import ContactDetails from "@/components/content/ContactDetails";
import CtaBanner from "@/components/content/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import NeonButton from "@/components/ui/NeonButton";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { BUSINESS } from "@/data/site";

const PATH = "/digital-marketing-mississauga";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing Agency in Mississauga | BizzOne Digital",
  description:
    "Mississauga-based digital marketing agency offering SEO, Google and Meta ads, social media, websites and AI automation for local businesses. Book a call.",
  path: PATH,
});

const WHY_LOCAL = [
  { icon: MapPin, title: "Based in Mississauga", body: `Our office is at ${BUSINESS.address.streetAddress}, Mississauga. You work with a Canadian team, not an anonymous overseas outsourcer.` },
  { icon: Clock3, title: "Same time zone, fast replies", body: "We work Eastern Time, Monday to Saturday, so questions and changes are handled during your business day." },
  { icon: Handshake, title: "We know the GTA market", body: "Mississauga businesses compete with the whole GTA for attention. We plan campaigns and SEO with that competition in mind." },
];

const SERVICES = [
  { icon: Search, title: "SEO & local SEO", href: "/service/seo", body: "Rank in Google and the Maps results when people in Mississauga search for what you do." },
  { icon: Megaphone, title: "Google, Meta & TikTok ads", href: "/service/paid-advertising", body: "Targeted campaigns by neighbourhood, radius or audience, with weekly cost-per-lead reporting." },
  { icon: Share2, title: "Social media management", href: "/service/social-media-management", body: "Consistent, on-brand content that keeps your business visible to local customers." },
  { icon: Code2, title: "Website design & development", href: "/web-development", body: "Fast, mobile-friendly websites with SEO setup, bookings and payments." },
  { icon: Bot, title: "AI & CRM automation", href: "/service/ai-automation", body: "Instant lead follow-up, reminders and review requests that run 24/7." },
  { icon: Palette, title: "Logo design & branding", href: "/service/design-and-branding", body: "A brand identity that looks professional on your sign, vehicle, website and socials." },
];

// Authentic Google reviews already displayed on this site (see TrustReviews).
const REVIEWS = [
  { name: "Hob Boutilier", text: "Extremely happy with BizzOne. I wanted to give my business to a Canadian company and I am really glad I found them. The team is professional, fast, and truly cares about the results." },
  { name: "Horizon Driving School", text: "I love their work. They're very honest, quick, easy, and professional. At first I thought this was an outsourced company working for another country, but they're actually a Canadian-based business." },
];

const FAQS = [
  {
    q: "Where is BizzOne Digital located?",
    a: `Our office is at ${BUSINESS.addressLine}. We're open ${BUSINESS.hours.display.replace(":", "")}.`,
  },
  {
    q: "Do you only work with Mississauga businesses?",
    a: "No. We're based in Mississauga and work with businesses across the GTA, Canada and the United States. Local campaigns and local SEO are tailored to each area you serve.",
  },
  {
    q: "How much does digital marketing cost for a small business?",
    a: "It depends on the services and scope. Website packages start from $79, and marketing services are quoted after a free strategy call so you only pay for what your business needs.",
  },
];

const AREAS = ["Port Credit", "Streetsville", "Meadowvale", "Erin Mills", "Churchill Meadows", "Cooksville", "Malton", "City Centre"];

export default function MississaugaPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          serviceSchema({
            name: "Digital Marketing Services in Mississauga",
            serviceType: "Digital marketing",
            path: PATH,
            description:
              "SEO, paid advertising, social media management, website design and AI automation for businesses in Mississauga, Ontario.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Digital Marketing in Mississauga", path: PATH },
          ]),
          faqSchema(FAQS),
        ]}
      />

      {/* HERO */}
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute hidden sm:block -top-10 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[130px]" />
        <div className="section">
          <Reveal>
            <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Digital Marketing in Mississauga", path: PATH }]} />
          </Reveal>
          <Reveal className="mt-8 max-w-3xl">
            <SectionLabel>Mississauga, Ontario</SectionLabel>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Digital Marketing Agency in <span className="text-gradient">Mississauga, Ontario</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
              BizzOne Digital helps Mississauga businesses get found, get leads and follow up automatically, with SEO, paid ads, social media, websites and AI automation from one local team.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <NeonButton href="/contact" variant="primary">Book Free Strategy Call <ArrowRight size={16} /></NeonButton>
              <NeonButton href="/our-work" variant="ghost">See Our Work</NeonButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY LOCAL */}
      <section className="relative py-12">
        <div className="section">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">Why Work With a <span className="text-gradient">Mississauga Agency</span></h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
            {WHY_LOCAL.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl glass p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-mint/10 text-brand-mint"><w.icon size={18} aria-hidden="true" /></span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-12">
        <div className="section">
          <Reveal className="text-center">
            <SectionLabel>Services</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-ink sm:text-4xl">Marketing Services for <span className="text-gradient">Mississauga Businesses</span></h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-ink/55">Pick one service or combine them into a complete growth system.</p>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.href} delay={i * 0.05}>
                <Link href={s.href} className="group block h-full rounded-2xl glass p-6 transition-shadow duration-300 hover:shadow-glow-purple">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-mint/10 text-brand-mint"><s.icon size={18} aria-hidden="true" /></span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink group-hover:text-brand-mint">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-mint">Learn more <ArrowRight size={13} aria-hidden="true" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="relative py-12">
        <div className="section">
          <Reveal className="mx-auto max-w-3xl rounded-3xl glass p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Be the Business People Find <span className="text-gradient">Near Them</span></h2>
            <p className="mt-4 text-base leading-relaxed text-ink/65">
              Mississauga customers search with local intent: &ldquo;near me&rdquo;, a neighbourhood name or a nearby landmark. Whether your business serves {AREAS.slice(0, -1).join(", ")} or the {AREAS[AREAS.length - 1]}, we build your visibility where those searches happen: your Google Business Profile, your service pages and your ads.
            </p>
            <p className="mt-4 text-sm text-ink/55">
              Get started with our{" "}
              <Link href="/blog/local-seo-checklist-for-mississauga-businesses" className="font-semibold text-brand-mint underline-offset-4 hover:underline">local SEO checklist for Mississauga businesses</Link>{" "}
              or learn about our{" "}
              <Link href="/service/seo" className="font-semibold text-brand-mint underline-offset-4 hover:underline">SEO services in Mississauga</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative py-12">
        <div className="section">
          <Reveal className="text-center">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">A <span className="text-gradient">Canadian Team</span> Clients Trust</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink/55">From our public Google reviews.</p>
          </Reveal>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-2">
            {REVIEWS.map((r) => (
              <Reveal key={r.name}>
                <figure className="h-full rounded-2xl glass p-6">
                  <Quote size={20} aria-hidden="true" className="text-brand-mint" />
                  <blockquote className="mt-3 text-sm leading-relaxed text-ink/75">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-sm font-bold text-ink">{r.name} <span className="font-normal text-ink/45">· Google review</span></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center">
            <a href={BUSINESS.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-mint underline-offset-4 hover:underline">
              Read all our Google reviews
            </a>
          </p>
        </div>
      </section>

      {/* VISIT / CONTACT */}
      <section className="relative py-12">
        <div className="section">
          <Reveal className="mb-8 text-center">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Find Us in <span className="text-gradient">Mississauga</span></h2>
          </Reveal>
          <Reveal delay={0.05}>
            <ContactDetails mapTitle="Map of BizzOne Digital's office in Mississauga, Ontario" />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-12">
        <div className="section">
          <Reveal className="text-center">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Frequently Asked <span className="text-gradient">Questions</span></h2>
          </Reveal>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-2xl glass p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-ink">
                  <h3 className="text-base font-semibold">{f.q}</h3>
                  <span aria-hidden="true" className="text-brand-mint transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Grow Your Mississauga Business" accent="With Us" />
    </PageShell>
  );
}
