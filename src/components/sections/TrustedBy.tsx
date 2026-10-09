"use client";

import { SITE_STATS, MARKETS_SERVED, formatStat } from "@/data/site-stats";

const LOGOS = [
  "M2M Pro Cleaners",
  "Cobb Church",
  "A1 Furnished",
  "Global Pardon",
  "Bariis Pizza",
  "Corner Store",
  "Toronto Notary",
  "JMG Auto",
  "Dollar Customs",
  "Lupin Project",
  "FairSafe",
  "Haven Tint & Tire",
  "Horizon Driving",
  "Wavy",
  "3Ray Mobiles",
];

export default function TrustedBy() {
  return (
    <section className="relative py-10">
      <div className="section">
        <div className="flex flex-col items-center gap-6 rounded-2xl glass px-6 py-6 md:flex-row md:gap-10">
          <p className="shrink-0 text-xs font-medium uppercase tracking-widest text-ink/45">Trusted by {formatStat(SITE_STATS.businessesServed)} businesses across {MARKETS_SERVED.short}</p>
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-12">
              {[...LOGOS, ...LOGOS].map((l, i) => (
                <span key={i} aria-hidden={i >= LOGOS.length ? "true" : undefined} className="font-display text-base font-bold text-ink/35 transition-colors hover:text-ink/70 whitespace-nowrap">{l}</span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0c14] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0c14] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}