import Link from "next/link";
import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Footer from "@/components/simple/Footer";
import FinalCTA from "@/components/simple/FinalCTA";
import { SERVICES, serviceHref } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Digital Marketing & Web Services | BizzOne Digital",
  description:
    "Explore BizzOne Digital's services: Meta & Google Ads, SEO, branding, video, content strategy, social media, AI automation, web and app development.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PromoBar />
      <NavBar active="Services" />
      <main className="bg-white text-simple-ink">
        <section className="border-b border-simple-border bg-simple-surface-alt">
          <div className="mx-auto max-w-[1240px] px-6 py-16 sm:py-20">
            <div className="max-w-2xl">
              <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">Our Services</div>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                Everything you need to grow, managed by <span className="text-simple-purple">one team</span>
              </h1>
              <p className="mt-5 text-lg text-simple-ink-soft">
                Pick one service or let us run the whole system — ads, SEO, content, websites and
                CRM follow-up all connect.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.slug} className="flex flex-col gap-3 rounded-2xl border border-simple-border bg-white p-[30px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]">
                  <Icon size={32} color="#8C00FF" strokeWidth={2} aria-hidden="true" />
                  <div className="font-display text-[22px] font-bold">{s.title}</div>
                  <div className="flex-grow text-base text-simple-ink-soft">{s.short}</div>
                  <Link href={serviceHref(s)} className="py-2 font-bold text-simple-purple no-underline">Learn more →</Link>
                </div>
              );
            })}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
