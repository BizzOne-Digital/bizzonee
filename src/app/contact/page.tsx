import type { Metadata } from "next";
import PageShell from "@/components/content/PageShell";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import ContactDetails from "@/components/content/ContactDetails";
import FinalCTA from "@/components/sections/FinalCTA";
import JsonLd from "@/components/seo/JsonLd";
import H1Label from "@/components/ui/H1Label";
import Reveal from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, contactPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Contact BizzOne Digital | Free Strategy Call",
  description:
    "Contact BizzOne Digital, a digital marketing agency in Mississauga. Call, email, WhatsApp or send us a message to book your free strategy call.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <JsonLd data={[contactPageSchema(), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]} />

      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute hidden sm:block -top-10 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[130px]" />
        <div className="section">
          <Reveal>
            <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
          </Reveal>
          <Reveal className="mt-8 max-w-3xl">
            <H1Label>Contact Our Digital Marketing Agency in Mississauga</H1Label>
            <p className="mt-6 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Let&apos;s Talk About <span className="text-gradient">Growing Your Business</span>
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">
              Book a free strategy call, ask about a project or just say hello. Call, WhatsApp, email or use the form below and our team will get back to you within 24–48 hours.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <ContactDetails />
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </PageShell>
  );
}
