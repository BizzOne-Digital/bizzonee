import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Footer from "@/components/simple/Footer";
import Reveal from "@/components/simple/Reveal";
import { BUSINESS, SITE_URL } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | BizzOne Digital",
  description: "How BizzOne Digital collects, uses and protects your personal information.",
  path: "/privacy-policy",
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <PromoBar />
      <NavBar />
      <main className="bg-white text-simple-ink">
        <div className="border-b border-simple-border bg-simple-surface-alt">
          <Reveal className="mx-auto flex max-w-[760px] flex-col gap-3 px-6 pb-11 pt-14">
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">Legal</div>
            <h1 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,3.6vw,2.8rem)]">
              Privacy Policy
            </h1>
            <p className="m-0 text-base text-simple-ink-soft">Last updated: October 2026</p>
          </Reveal>
        </div>

        <Reveal className="mx-auto max-w-[760px] px-6 py-12">
          <p className="text-base leading-[1.7] text-simple-ink-faint">
            {BUSINESS.legalName} (&quot;BizzOne,&quot; &quot;we,&quot; &quot;us&quot; or &quot;our&quot;) operates{" "}
            {new URL(SITE_URL).host}. This Privacy Policy explains what personal information we collect through
            our website (the &quot;Site&quot;) and our services, how we use it, and the choices you have. It&apos;s
            written to meet our obligations under Canada&apos;s Personal Information Protection and Electronic
            Documents Act (PIPEDA).
          </p>

          <Section n={1} title="Information We Collect">
            <p>We collect information you give us directly, such as when you fill out a form, book a call, or email us:</p>
            <ul className="flex list-disc flex-col gap-1.5 pl-6">
              <li>Name, business name, email address and phone number</li>
              <li>Details you share about your business, goals or project</li>
              <li>Billing and account information if you become a client</li>
            </ul>
            <p>
              We also automatically collect some technical information when you visit the Site, such as your IP
              address, browser type, pages viewed and referring site, typically through cookies and analytics
              tools.
            </p>
          </Section>

          <Section n={2} title="How We Use Your Information">
            <ul className="flex list-disc flex-col gap-1.5 pl-6">
              <li>To respond to your inquiry and provide the services you request</li>
              <li>To send you marketing communications by phone, email or text, where you&apos;ve consented to that contact</li>
              <li>To manage ad campaigns, websites or other services on your behalf as a client</li>
              <li>To improve our Site and understand how it&apos;s used</li>
              <li>To meet legal, accounting or regulatory requirements</li>
            </ul>
          </Section>

          <Section n={3} title="Cookies & Analytics">
            <p>
              We use cookies and similar tools (such as analytics and ad-platform pixels from Meta and Google) to
              understand Site traffic and measure ad performance for our clients. You can control or disable
              cookies through your browser settings; some parts of the Site may not work as intended if you do.
            </p>
          </Section>

          <Section n={4} title="Sharing Your Information">
            <p>We don&apos;t sell your personal information. We share it only with:</p>
            <ul className="flex list-disc flex-col gap-1.5 pl-6">
              <li>Service providers who help us run our business (for example, hosting, email and CRM tools), under agreements that limit their use of your data</li>
              <li>Advertising platforms (Meta, Google, TikTok) when running ad campaigns for a client, as required to operate those campaigns</li>
              <li>Authorities, where required by law</li>
            </ul>
          </Section>

          <Section n={5} title="Data Retention">
            <p>
              We keep personal information only as long as needed for the purposes described here, or as
              required by law (for example, financial records for tax purposes).
            </p>
          </Section>

          <Section n={6} title="Your Rights">
            <p>
              Under PIPEDA, you can ask to access, correct or withdraw consent for the personal information we
              hold about you. To make a request, contact us using the details below. If you&apos;re not satisfied
              with our response, you may contact the Office of the Privacy Commissioner of Canada.
            </p>
          </Section>

          <Section n={7} title="Security">
            <p>
              We take reasonable technical and organizational steps to protect your information, but no method
              of storage or transmission is 100% secure.
            </p>
          </Section>

          <Section n={8} title="Children's Privacy">
            <p>
              Our Site and services are directed at businesses and are not intended for children. We don&apos;t
              knowingly collect personal information from children.
            </p>
          </Section>

          <Section n={9} title="Changes to This Policy">
            <p>
              We may update this Policy from time to time. The &quot;Last updated&quot; date at the top of this
              page will reflect the most recent changes.
            </p>
          </Section>

          <Section n={10} title="Contact Us">
            <p>Questions about this Policy or your personal information?</p>
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
