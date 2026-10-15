import { SITE_STATS, MARKETS_SERVED, formatStat } from "@/data/site-stats";
import Reveal from "./Reveal";

// Same real client list already published on the live site's TrustedBy
// section (src/components/sections/TrustedBy.tsx) — not fabricated for this design.
const CLIENTS = [
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

function Chip({ name }: { name: string }) {
  const mono = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="inline-flex flex-none items-center gap-2.5 whitespace-nowrap rounded-xl border border-simple-border bg-white px-[18px] py-2.5">
      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-simple-chip-bg font-display text-xs font-extrabold text-simple-purple">
        {mono}
      </div>
      <span className="font-display text-[15px] font-semibold text-simple-ink-faint">{name}</span>
    </div>
  );
}

export default function TrustedLogos() {
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <div className="border-b border-simple-border bg-white">
      <Reveal from="left" className="mx-auto flex max-w-[1240px] flex-col items-center gap-5 py-10">
        <div className="px-6 text-center text-[13px] font-bold uppercase tracking-[0.14em] text-[#6B6580]">
          Trusted by {formatStat(SITE_STATS.businessesServed)} businesses across {MARKETS_SERVED.short}
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-4">
            {track.map((name, i) => (
              <Chip key={`${name}-${i}`} name={name} />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
        </div>
      </Reveal>
    </div>
  );
}
