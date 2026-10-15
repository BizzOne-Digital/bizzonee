import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Footer from "@/components/simple/Footer";
import Pricing from "@/components/simple/Pricing";
import FAQ from "@/components/simple/FAQ";
import FinalCTA from "@/components/simple/FinalCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing | BizzOne Digital",
  description:
    "Simple, transparent pricing for websites, ads, SEO, video editing, social media management and AI automation & CRM. Start small or go all-in.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PromoBar />
      <NavBar active="Pricing" />
      <main className="bg-white text-simple-ink">
        <section className="border-b border-simple-border bg-simple-surface-alt">
          <div className="mx-auto max-w-[1240px] px-6 py-16 sm:py-20">
            <div className="max-w-2xl">
              <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">Pricing</div>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                Simple, transparent pricing
              </h1>
              <p className="mt-5 text-lg text-simple-ink-soft">
                No hidden fees. Start with one service or go all-in with the Premium package.
              </p>
            </div>
          </div>
        </section>
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
