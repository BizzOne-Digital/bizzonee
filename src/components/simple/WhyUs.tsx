import Link from "next/link";
import { SITE_STATS, formatStat } from "@/data/site-stats";
import { BUSINESS } from "@/data/site";
import Reveal from "./Reveal";

const STEPS = [
  { n: 1, title: "Book your free call", desc: "Tell us about your business and your goals. Takes 15 minutes." },
  { n: 2, title: "Get your growth plan", desc: "We audit what you have now and show you a clear plan and price." },
  { n: 3, title: "We launch and optimize", desc: "Your team goes live, and we improve results every month." },
];

export default function WhyUs() {
  return (
    <Reveal from="right" className="mx-auto flex max-w-[1240px] flex-wrap gap-16 px-6 py-[88px]">
      <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-[18px]">
        <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">
          Why BizzOne Digital
        </div>
        <h2 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,3.6vw,3rem)]">
          Built for small and mid-sized businesses
        </h2>
        <p className="m-0 text-lg text-simple-ink-soft">
          We know you don&apos;t have time to manage marketing. Our {formatStat(SITE_STATS.teamMembers)} team of ad
          specialists, designers, editors, developers and automation experts does the work — and
          keeps you updated without the jargon.
        </p>
        <p className="m-0 text-lg text-simple-ink-soft">
          Our mission is simple: turn your digital presence into real revenue. Based in
          {" "}{BUSINESS.address.addressLocality}, working with businesses across {BUSINESS.areaServed.join(" and ")}.
        </p>
        <Link href="/#book" className="self-start py-2 text-[17px] font-bold no-underline text-simple-purple">
          Talk to Our Team →
        </Link>
      </div>

      <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-6 rounded-[18px] border border-simple-border bg-simple-surface-alt p-9 transition-all duration-300 hover:-translate-y-1">
        <div className="font-display text-[28px] font-extrabold">Getting started is easy</div>
        {STEPS.map((s) => (
          <div key={s.n} className="flex items-start gap-[18px]">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-simple-purple font-extrabold text-white">
              {s.n}
            </div>
            <div>
              <div className="text-lg font-bold">{s.title}</div>
              <div className="text-base text-simple-ink-soft">{s.desc}</div>
            </div>
          </div>
        ))}
        <Link
          href="/#book"
          className="rounded-xl bg-simple-purple px-7 py-[17px] text-center text-[17px] font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:brightness-105"
        >
          Get Started Today
        </Link>
      </div>
    </Reveal>
  );
}
