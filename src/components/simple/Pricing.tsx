import Link from "next/link";
import Reveal from "./Reveal";

function Check({ color = "#8C00FF" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-none">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

// Pricing figures supplied by the business owner (not fabricated for this
// design). Review before publishing — see final report for a "confirm before
// launch" note.
export default function Pricing() {
  return (
    <div id="pricing" className="bg-white text-simple-ink">
      <Reveal from="left" className="mx-auto flex max-w-[1240px] flex-col gap-11 px-6 py-[88px]">
        <div className="flex max-w-[720px] flex-col gap-3.5">
          <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-accent">
            Simple starting points
          </div>
          <h2 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,3.6vw,3rem)]">
            Start small or go all-in
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-3.5 rounded-2xl border border-simple-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]">
            <div className="text-lg font-bold">Website</div>
            <div className="font-display text-[44px] font-extrabold leading-none">
              $79<span className="text-base font-medium text-simple-ink-soft"> starting</span>
            </div>
            <div className="flex-grow text-base text-simple-ink-soft">
              A professional, mobile-ready website, live in 24–48 hours. Premium ($149) and
              Advanced ($299) options available.
            </div>
            <Link href="/#book" className="rounded-xl border-[1.5px] border-simple-ink py-3.5 text-center font-bold text-simple-ink no-underline transition-all duration-200 hover:-translate-y-0.5">
              Get My Website
            </Link>
          </div>

          <div className="flex flex-col gap-3.5 rounded-2xl border border-simple-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]">
            <div className="text-lg font-bold">Video Editing</div>
            <div className="font-display text-[44px] font-extrabold leading-none">
              $99<span className="text-base font-medium text-simple-ink-soft"> /month</span>
            </div>
            <div className="flex-grow text-base text-simple-ink-soft">
              7 edited reels every month. Bigger packages for 15 reels ($299) or 20 reels ($599).
            </div>
            <Link href="/#book" className="rounded-xl border-[1.5px] border-simple-ink py-3.5 text-center font-bold text-simple-ink no-underline transition-all duration-200 hover:-translate-y-0.5">
              Start My Reels
            </Link>
          </div>

          <div className="flex flex-col gap-3.5 rounded-2xl bg-simple-ink p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]">
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <div className="text-lg font-bold">Premium</div>
              <span className="rounded-full bg-simple-lime px-2.5 py-1 text-[13px] font-bold text-simple-ink">
                Most popular
              </span>
            </div>
            <div className="font-display text-[44px] font-extrabold leading-none">
              $699<span className="text-base font-medium text-[#CFCAE0]"> /month</span>
            </div>
            <ul className="m-0 flex flex-grow list-none flex-col gap-2 p-0">
              <li className="flex gap-2 text-[15px] text-[#CFCAE0]"><Check color="#C8F31D" />Standard website &amp; Google Business Profile setup — free</li>
              <li className="flex gap-2 text-[15px] text-[#CFCAE0]"><Check color="#C8F31D" />Meta Ads (1 campaign, 2 creatives) &amp; Google Ads (1 campaign)</li>
              <li className="flex gap-2 text-[15px] text-[#CFCAE0]"><Check color="#C8F31D" />SEO, managed monthly</li>
              <li className="flex gap-2 text-[15px] text-[#CFCAE0]"><Check color="#C8F31D" />Social media management: 5–7 reels + up to 8 image creatives a month</li>
            </ul>
            <Link href="/#book" className="rounded-xl bg-simple-purple py-3.5 text-center font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:brightness-105">
              Get Started
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Meta Ads", price: "$99", period: "/month" },
            { title: "Google Ads", price: "$99", period: "/month" },
            { title: "SEO", price: "$99", period: "/month" },
            { title: "Social Media Mgmt", price: "$99", period: "/month" },
          ].map((p) => (
            <div key={p.title} className="rounded-2xl border border-simple-border bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1">
              <div className="font-bold">{p.title}</div>
              <div className="font-display text-2xl font-extrabold">
                {p.price}<span className="text-sm font-medium text-simple-ink-soft"> {p.period}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-simple-border bg-simple-surface-alt p-6 text-center text-base text-simple-ink-soft">
          AI Automation &amp; CRM: <strong className="text-simple-ink">$299/mo</strong> + $499 one-time setup
        </div>

        <div className="flex justify-center">
          <Link href="/pricing" className="flex items-center gap-2 text-[15px] font-bold text-simple-purple no-underline">
            See every price &amp; compare all plans
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
