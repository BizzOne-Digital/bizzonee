import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Footer from "@/components/simple/Footer";
import FinalCTA from "@/components/simple/FinalCTA";
import { BUSINESS } from "@/data/site";
import { SITE_STATS, formatStat } from "@/data/site-stats";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About BizzOne Digital | Digital Marketing & Automation Agency",
  description:
    "Meet BizzOne Digital, a Mississauga digital marketing and AI automation agency helping small and mid-sized businesses grow with ads, websites and CRM.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PromoBar />
      <NavBar active="About" />
      <main className="bg-white text-simple-ink">
        <section className="border-b border-simple-border bg-simple-surface-alt">
          <div className="mx-auto max-w-[1240px] px-6 py-16 sm:py-20">
            <div className="max-w-2xl">
              <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">Our Story</div>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                From a small team to a growing agency
              </h1>
              <p className="mt-5 text-lg text-simple-ink-soft">
                BizzOne Digital started with a simple belief: every business, no matter how small,
                deserves a premium digital presence that actually drives results.
              </p>
              <p className="mt-4 text-lg text-simple-ink-soft">
                So we built a team focused on performance, design and real business outcomes,
                helping businesses scale with websites, advertising, social media, SEO and AI
                automation.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-simple-border bg-simple-surface-alt p-6 text-center">
              <div className="font-display text-[28px] font-extrabold">{formatStat(SITE_STATS.businessesServed)}</div>
              <div className="text-sm font-semibold text-simple-ink-soft">Businesses served</div>
            </div>
            <div className="rounded-2xl border border-simple-border bg-simple-surface-alt p-6 text-center">
              <div className="font-display text-[28px] font-extrabold">{formatStat(SITE_STATS.teamMembers)}</div>
              <div className="text-sm font-semibold text-simple-ink-soft">Dedicated team members</div>
            </div>
            <div className="rounded-2xl border border-simple-border bg-simple-surface-alt p-6 text-center">
              <div className="font-display text-[28px] font-extrabold">{formatStat(SITE_STATS.clientRevenue)}</div>
              <div className="text-sm font-semibold text-simple-ink-soft">Client revenue generated</div>
            </div>
            <div className="rounded-2xl border border-simple-border bg-simple-surface-alt p-6 text-center">
              <div className="font-display text-[28px] font-extrabold">{formatStat(SITE_STATS.clientRetention)}</div>
              <div className="text-sm font-semibold text-simple-ink-soft">Client retention</div>
            </div>
          </div>

          <div className="mt-12 max-w-2xl text-lg text-simple-ink-soft">
            <p>
              Our mission is simple: turn your digital presence into real revenue. Based in{" "}
              {BUSINESS.address.addressLocality}, {BUSINESS.address.addressRegion}, working with
              businesses across {BUSINESS.areaServed.join(" and ")}.
            </p>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
