import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Footer from "@/components/simple/Footer";
import Reveal from "@/components/simple/Reveal";
import { BUSINESS } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions | BizzOne Digital",
  description: "The terms that govern using our website and BizzOne Digital's services.",
  path: "/terms-and-conditions",
});

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className={n === 1 ? "" : "mt-10"}>
      <h2 className="mb-3 font-display text-xl font-extrabold">
        {n}. {title}
      </h2>
      <div className="flex flex-col gap-3 text-base leading-[1.7] text-simple-ink-faint">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <PromoBar />
      <NavBar />
      <main className="bg-white text-simple-ink">
        <div className="border-b border-simple-border bg-simple-surface-alt">
          <Reveal className="mx-auto flex max-w-[760px] flex-col gap-3 px-6 pb-11 pt-14">
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">Legal</div>
            <h1 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,3.6vw,2.8rem)]">
              Terms &amp; Conditions
            </h1>
            <p className="m-0 text-base text-simple-ink-soft">Last updated: October 2026</p>
          </Reveal>
        </div>

        <Reveal className="mx-auto max-w-[760px] px-6 py-12">
          <p className="text-base leading-[1.7] text-simple-ink-faint">
            These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of our website and any services
            provided by {BUSINESS.legalName} (&quot;BizzOne,&quot; &quot;we,&quot; &quot;us&quot; or
            &quot;our&quot;). By using our Site or engaging our services, you agree to these Terms.
          </p>

          <Section n={1} title="Our Services">
            <p>
              BizzOne provides digital marketing and related services, including websites, paid advertising
              (Meta, Google, TikTok), SEO, content and social media management, video editing, design, app
              development, and AI automation and CRM setup. The specific scope, deliverables and price for your
              project are confirmed with you before work begins.
            </p>
          </Section>

          <Section n={2} title="Pricing & Payment">
            <ul className="flex list-disc flex-col gap-1.5 pl-6">
              <li>Website packages are a one-time fee, due before work begins unless otherwise agreed.</li>
              <li>
                Monthly services (ads management, SEO, content, video, automation) are billed month-to-month.
                There is no long-term contract — you can cancel anytime, effective at the end of the current
                billing period.
              </li>
              <li>
                Advertising spend for Meta, Google or TikTok campaigns is billed directly by those platforms and
                is separate from our service fee. We never mark up ad spend.
              </li>
              <li>
                Website packages come with a 30-day money-back guarantee. Monthly services can be cancelled
                anytime; fees already paid for the current period are not refunded.
              </li>
            </ul>
          </Section>

          <Section n={3} title="Client Responsibilities">
            <p>
              To deliver your project on time, we rely on you to provide necessary content, approvals, access
              and feedback within a reasonable timeframe. Delays on your end may delay delivery.
            </p>
          </Section>

          <Section n={4} title="Intellectual Property">
            <p>
              Once a project is paid in full, ownership of the final deliverables (such as your website or
              designed assets) transfers to you. BizzOne retains the right to showcase completed work in our
              portfolio and marketing, unless you ask us not to in writing.
            </p>
          </Section>

          <Section n={5} title="Advertising Accounts">
            <p>
              For ad management services, campaigns typically run through your own Meta, Google or TikTok ad
              accounts. You remain the account owner and are responsible for complying with each platform&apos;s
              own advertising policies.
            </p>
          </Section>

          <Section n={6} title="Limitation of Liability">
            <p>
              We work to deliver real results, but we can&apos;t guarantee specific outcomes (such as a set
              number of leads or sales), since results depend on factors outside our control, including your
              market, offer and ad platform policies. To the extent permitted by law, BizzOne&apos;s liability
              for any claim relating to our services is limited to the amount you paid us for that service in
              the 3 months before the claim.
            </p>
          </Section>

          <Section n={7} title="Termination">
            <p>
              Either party may end a monthly service agreement at any time, effective at the end of the current
              billing period. We reserve the right to pause or end services if payment is not received.
            </p>
          </Section>

          <Section n={8} title="Governing Law">
            <p>
              These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada
              applicable in Ontario.
            </p>
          </Section>

          <Section n={9} title="Changes to These Terms">
            <p>
              We may update these Terms from time to time. The &quot;Last updated&quot; date at the top of this
              page reflects the most recent changes. Continuing to use our services after changes take effect
              means you accept the updated Terms.
            </p>
          </Section>

          <Section n={10} title="Contact Us">
            <p>Questions about these Terms?</p>
            <ul className="flex list-disc flex-col gap-1.5 pl-6">
              <li>
                Email:{" "}
                <a href={`mailto:${BUSINESS.email}`} className="underline">
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href={BUSINESS.phoneHref} className="underline">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>Mail: {BUSINESS.addressLine}</li>
            </ul>
          </Section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
