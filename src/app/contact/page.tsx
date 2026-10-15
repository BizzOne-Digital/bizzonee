import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Footer from "@/components/simple/Footer";
import ContactForm from "@/components/simple/ContactForm";
import { BUSINESS } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, contactPageSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Contact BizzOne Digital | Free Strategy Call",
  description:
    "Contact BizzOne Digital, a digital marketing agency in Mississauga. Call, email or send us a message to book your free strategy call.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[contactPageSchema(), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]} />
      <PromoBar />
      <NavBar active="Contact" />
      <main className="bg-white text-simple-ink">
        <section className="border-b border-simple-border bg-simple-surface-alt">
          <div className="mx-auto flex max-w-[1240px] flex-wrap gap-14 px-6 py-16 sm:py-20">
            <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
              <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">Contact Us</div>
              <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                Let&apos;s talk about <span className="text-simple-purple">growing your business</span>
              </h1>
              <p className="max-w-xl text-lg text-simple-ink-soft">
                Book a free strategy call, ask about a project or just say hello. Call, email or
                use the form and our team will get back to you within 24–48 hours.
              </p>
              <div className="mt-2 flex flex-col gap-2 text-base text-simple-ink-soft">
                <a href={BUSINESS.phoneHref} className="font-bold text-simple-ink no-underline hover:text-simple-purple">{BUSINESS.phoneDisplay}</a>
                <a href={`mailto:${BUSINESS.email}`} className="font-bold text-simple-ink no-underline hover:text-simple-purple">{BUSINESS.email}</a>
                <div>{BUSINESS.addressLine}</div>
                <div>{BUSINESS.hours.display}</div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
