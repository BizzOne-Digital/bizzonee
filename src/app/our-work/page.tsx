import Image from "next/image";
import Link from "next/link";
import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Footer from "@/components/simple/Footer";
import FinalCTA from "@/components/simple/FinalCTA";
import { PORTFOLIO } from "@/data/portfolio";
import { CASE_STUDIES } from "@/data/case-studies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Work: Web Design, Logos & Social Media | BizzOne Digital",
  description:
    "Explore BizzOne Digital's portfolio of websites, logo design, brand identity, social media and video content created for businesses across Canada and the US.",
  path: "/our-work",
});

export default function OurWorkPage() {
  return (
    <>
      <PromoBar />
      <NavBar active="Our Work" />
      <main className="bg-white text-simple-ink">
        <section className="border-b border-simple-border bg-simple-surface-alt">
          <div className="mx-auto max-w-[1240px] px-6 py-16 sm:py-20">
            <div className="max-w-2xl">
              <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">Our Work</div>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                Real work for real businesses
              </h1>
              <p className="mt-5 text-lg text-simple-ink-soft">
                A sample of websites, logos, social content and case studies we&apos;ve delivered.
              </p>
            </div>
          </div>
        </section>

        {CASE_STUDIES.length > 0 && (
          <section className="mx-auto max-w-[1240px] px-6 py-16">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Case Studies</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CASE_STUDIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/case-studies/${c.slug}`}
                  className="flex flex-col gap-2 rounded-2xl border border-simple-border bg-white p-[30px] no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]"
                >
                  <div className="text-sm font-bold uppercase tracking-[0.1em] text-simple-purple-deep">{c.industry}</div>
                  <div className="font-display text-xl font-bold text-simple-ink">{c.client}</div>
                  <div className="text-base text-simple-ink-soft">{c.summary}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {PORTFOLIO.map((cat) => (
          <section key={cat.id} className="mx-auto max-w-[1240px] px-6 py-12">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="font-display text-2xl font-extrabold sm:text-3xl">{cat.title}</h2>
                <p className="text-base text-simple-ink-soft">{cat.sub}</p>
              </div>
              <Link href={cat.serviceHref} className="font-bold text-simple-purple no-underline">
                Related service →
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {cat.images.slice(0, 8).map((img) => (
                <div key={img.src} className="overflow-hidden rounded-xl border border-simple-border bg-simple-surface-alt">
                  <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </section>
        ))}

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
