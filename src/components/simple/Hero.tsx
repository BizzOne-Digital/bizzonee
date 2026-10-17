"use client";

import { motion } from "framer-motion";
import { BUSINESS } from "@/data/site";
import { SITE_STATS, MARKETS_SERVED, formatStat } from "@/data/site-stats";
import Reveal from "./Reveal";
import LeadForm from "./LeadForm";

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Hero() {
  return (
    <div id="top" className="border-b border-simple-border bg-simple-surface-alt">
      <Reveal className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-14 px-6 pb-20 pt-[72px]">
        <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-2.5 text-[15px] font-medium text-simple-ink-soft"
          >
            <span>{formatStat(SITE_STATS.businessesServed)} businesses across {MARKETS_SERVED.short}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -160 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 11, mass: 1 }}
            className="m-0 font-display font-extrabold leading-[1.05] tracking-tight text-[clamp(2.5rem,5vw,4.1rem)]"
          >
            More leads. More customers. <span className="text-simple-purple">One team</span> that runs it all.
          </motion.h1>

          <p className="m-0 max-w-[560px] text-xl text-simple-ink-soft">
            Ads, content, websites and CRM follow-up — handled by one agency, tracked in one place,
            so you always know what each dollar brings back.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2.5 rounded-xl bg-simple-purple px-7 py-[17px] text-[17px] font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:brightness-105"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
              </svg>
              Call Us Now
            </a>
          </div>

          <div className="flex flex-wrap gap-7 pt-2 text-[15px] text-simple-ink-soft">
            <div className="flex items-center gap-2">
              <Check /> Meta, Google &amp; TikTok Ads
            </div>
            <div className="flex items-center gap-2">
              <Check /> Clear monthly reporting
            </div>
          </div>
        </div>

        <LeadForm />
      </Reveal>
    </div>
  );
}
