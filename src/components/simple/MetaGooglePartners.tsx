import Image from "next/image";
import Link from "next/link";
import { SITE_STATS, MARKETS_SERVED, formatStat } from "@/data/site-stats";
import Reveal from "./Reveal";

function VerifiedBadge() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-label="Verified" className="flex-none">
      <circle cx="12" cy="12" r="11" fill="#0095F6" />
      <path d="M7.5 12.5l3 3 6-6.5" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-none" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function MetaGooglePartners() {
  return (
    <>
      <div className="border-b border-simple-border bg-simple-surface-alt">
        <Reveal from="right" className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-16">
          <div className="flex max-w-[680px] flex-col gap-2.5">
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">
              Certified on the platforms that drive leads
            </div>
            <h2 className="m-0 font-display font-extrabold leading-[1.15] tracking-tight text-[clamp(1.8rem,3.2vw,2.4rem)]">
              Verified on Meta and Google, built for small business budgets
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-3.5 rounded-[18px] border border-simple-border bg-white p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <svg width="30" height="20" viewBox="0 0 28 18" aria-hidden="true" className="flex-none">
                    <path d="M3 9c0-4 2.5-7 6-7 2.5 0 4.2 1.8 5.5 4 1.3-2.2 3-4 5.5-4 3.5 0 6 3 6 7s-2.5 7-6 7c-2.5 0-4.2-1.8-5.5-4-1.3 2.2-3 4-5.5 4-3.5 0-6-3-6-7z" fill="none" stroke="#0081FB" strokeWidth="3" />
                  </svg>
                  <div className="flex items-center gap-1.5">
                    <div className="font-display text-lg font-bold">Meta Verified</div>
                    <VerifiedBadge />
                  </div>
                </div>
                <span className="whitespace-nowrap rounded-full bg-simple-chip-bg px-2.5 py-1 text-xs font-bold text-simple-chip-text">
                  Meta Ads Certified
                </span>
              </div>
              <p className="m-0 text-base text-simple-ink-faint">
                We manage Facebook and Instagram campaigns built for small business budgets, where
                every dollar has to work.
              </p>
              <div className="font-display text-[34px] font-extrabold">
                $99<span className="text-sm font-medium text-simple-ink-soft"> /month</span>
              </div>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                <li className="flex gap-2 text-[15px] text-simple-ink-soft"><Check />1 ad campaign, optimized weekly</li>
                <li className="flex gap-2 text-[15px] text-simple-ink-soft"><Check />2 ad creatives included</li>
                <li className="flex gap-2 text-[15px] text-simple-ink-soft"><Check />Weekly monitoring and optimization</li>
              </ul>
              <Link href="/#book" className="mt-1 rounded-[10px] bg-simple-purple px-5 py-[13px] text-center text-[15px] font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:brightness-105">
                Get More Leads on Meta →
              </Link>
            </div>

            <div className="flex flex-col gap-3.5 rounded-[18px] border border-simple-border bg-white p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <svg width="26" height="26" viewBox="0 0 48 48" aria-hidden="true" className="flex-none">
                    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z" />
                    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.5 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                    <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.4 35.1 26.8 36 24 36c-5.2 0-9.6-3.3-11.2-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                    <path fill="#1976D2" d="M43.6 20.5H24v8h11.3c-0.8 2.3-2.2 4.2-4 5.6l6.3 5.3C40.5 36.9 44 31 44 24c0-1.3-.1-2.7-.4-3.5z" />
                  </svg>
                  <div className="flex items-center gap-1.5">
                    <div className="font-display text-lg font-bold">Google Verified</div>
                    <VerifiedBadge />
                  </div>
                </div>
                <span className="whitespace-nowrap rounded-full bg-simple-chip-bg px-2.5 py-1 text-xs font-bold text-simple-chip-text">
                  Google Ads Certified
                </span>
              </div>
              <p className="m-0 text-base text-simple-ink-faint">
                We run Google Ads campaigns across Search, Maps and YouTube, putting your business
                in front of people the moment they&apos;re searching for what you sell.
              </p>
              <div className="font-display text-[34px] font-extrabold">
                $99<span className="text-sm font-medium text-simple-ink-soft"> /month</span>
              </div>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                <li className="flex gap-2 text-[15px] text-simple-ink-soft"><Check />1 ad campaign, optimized weekly</li>
                <li className="flex gap-2 text-[15px] text-simple-ink-soft"><Check />Search, Maps &amp; YouTube placements</li>
                <li className="flex gap-2 text-[15px] text-simple-ink-soft"><Check />Creatives not included — ask about adding them</li>
              </ul>
              <Link href="/#book" className="mt-1 rounded-[10px] bg-simple-purple px-5 py-[13px] text-center text-[15px] font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:brightness-105">
                Get Found on Google →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-b border-simple-border bg-simple-surface-alt">
        <Reveal from="left" className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-12 px-6 py-20">
          <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-4">
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">Our Story</div>
            <h2 className="m-0 font-display font-extrabold leading-[1.15] tracking-tight text-[clamp(1.8rem,3.2vw,2.6rem)]">
              From a small team to a growing agency
            </h2>
            <p className="m-0 text-[17px] text-simple-ink-soft">
              BizzOne Digital started with a simple belief: every business, no matter how small,
              deserves a premium digital presence that actually drives results.
            </p>
            <p className="m-0 text-[17px] text-simple-ink-soft">
              So we built a team focused on performance, design and real business outcomes,
              helping businesses scale with websites, advertising, social media, SEO and AI
              automation.
            </p>
          </div>
          <div className="grid min-w-0 flex-[1_1_320px] grid-cols-2 gap-4">
            <div className="col-span-2 rounded-2xl border border-simple-border bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1">
              <div className="font-display text-[28px] font-extrabold">{formatStat(SITE_STATS.teamMembers)}</div>
              <div className="text-sm font-semibold text-simple-ink-soft">Dedicated team members</div>
            </div>
            <div className="rounded-2xl border border-simple-border bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1">
              <div className="font-display text-[22px] font-extrabold">{MARKETS_SERVED.short}</div>
              <div className="text-sm font-semibold text-simple-ink-soft">Markets served</div>
            </div>
            <div className="rounded-2xl border border-simple-border bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1">
              <div className="font-display text-[22px] font-extrabold">{formatStat(SITE_STATS.clientRevenue)}</div>
              <div className="text-sm font-semibold text-simple-ink-soft">Client revenue generated</div>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-6 pb-16">
          <div className="flex items-center gap-2.5 rounded-xl bg-simple-ink px-5 py-3.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8F31D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-none" aria-hidden="true">
              <path d="M12 2v20" /><path d="M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span className="text-[15px] font-bold text-white">
              Ad spend billed directly by Meta/Google — <span className="text-simple-lime">never marked up</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5 border-t border-simple-border pt-2">
            <div className="flex flex-wrap gap-5 text-sm font-semibold text-simple-ink-soft">
              <span>{formatStat(SITE_STATS.businessesServed)} brands scaled</span>
            </div>
            <a href="https://www.instagram.com/bizzonedigital" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-inherit no-underline">
              <Image src="/fav.png" alt="BizzOne Digital logo" width={28} height={28} className="h-7 w-7 rounded-md object-contain" />
              <span className="font-display text-[15px] font-bold text-simple-ink">@bizzonedigital</span>
              <VerifiedBadge />
              <span className="text-sm text-simple-ink-soft">Follow us</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
