import Link from "next/link";
import Reveal from "./Reveal";

const STEPS = [
  {
    step: "STEP 01",
    title: "Attract",
    desc: "Meta Ads, Google Ads, SEO and content put you in front of the right local buyers.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.5" />
      </>
    ),
    dark: false,
  },
  {
    step: "STEP 02",
    title: "Convert",
    desc: "A fast website or landing page turns clicks into calls, bookings and form fills.",
    icon: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />,
    dark: false,
  },
  {
    step: "STEP 03",
    title: "Follow Up",
    desc: "Your CRM replies in seconds, sends reminders and books appointments automatically.",
    icon: <path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.6 8.6 0 0 1-3.6-.9L3 20l1.1-5.4A8.4 8.4 0 1 1 21 11.5z" />,
    dark: false,
  },
  {
    step: "STEP 04",
    title: "Report",
    desc: "You see spend, leads, cost per lead and booked jobs — all in one simple report.",
    icon: (
      <>
        <path d="M3 3v18h18" /><path d="m7 15 4-4 3 3 5-6" />
      </>
    ),
    dark: true,
  },
];

export default function GrowthSystem() {
  return (
    <Reveal id="system" from="right" className="mx-auto flex max-w-[1240px] flex-col gap-12 px-6 py-[88px]">
      <div className="flex max-w-[760px] flex-col gap-3.5">
        <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">
          The BizzOne Growth System
        </div>
        <h2 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,3.6vw,3rem)]">
          Why all-in-one beats hiring five different vendors
        </h2>
        <p className="m-0 text-lg text-simple-ink-soft">
          When your ads, website and follow-up are run by different people, leads fall through the
          cracks. We connect every step.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s) => (
          <div
            key={s.step}
            className={`flex flex-col gap-3.5 rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)] ${
              s.dark ? "border-simple-ink bg-simple-ink text-white" : "border-simple-border bg-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-[10px] ${s.dark ? "bg-simple-purple" : "bg-simple-chip-bg"}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={s.dark ? "#FFFFFF" : "#8C00FF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {s.icon}
                </svg>
              </div>
              <div className={`font-display text-[15px] font-extrabold ${s.dark ? "text-simple-lime" : "text-simple-muted"}`}>{s.step}</div>
            </div>
            <div className="text-xl font-bold">{s.title}</div>
            <div className={s.dark ? "text-base text-[#CFCAE0]" : "text-base text-simple-ink-soft"}>{s.desc}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3.5">
        <Link href="/#book" className="rounded-xl bg-simple-purple px-7 py-[17px] text-[17px] font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:brightness-105">
          See My Growth Plan
        </Link>
      </div>
    </Reveal>
  );
}
