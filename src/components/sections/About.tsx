"use client";

import { SITE_STATS, MARKETS_SERVED, formatStat } from "@/data/site-stats";

import { motion } from "framer-motion";
import { Target, Eye, Award, Rocket } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import LaptopFrame from "@/components/ui/LaptopFrame";

const panels = [
  { icon: Target, title: "Our Mission", body: "To empower businesses with technology that is beautiful, fast and built to scale, turning digital presence into real revenue." },
  { icon: Eye, title: "Our Vision", body: "To be the go-to digital partner for ambitious brands worldwide, setting the standard for premium, results-driven work." },
];

const achievements = [
  { icon: Award, label: "Award-Winning Design", sub: "Recognized craft & detail" },
  { icon: Rocket, label: "Growth-First Delivery", sub: "Built around your KPIs" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="section">
        <Reveal className="max-w-3xl">
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            A Technology Partner <span className="text-gradient">Built for Growth</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/90">
            BizzOne Digital blends design, engineering and marketing under one roof. We don&apos;t just deliver projects, we build digital ecosystems that compound your results over time.
          </p>
        </Reveal>

        {/* intro + laptop playing our showreel */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="max-w-md text-lg leading-relaxed text-ink/75">
              Since day one, we&apos;ve helped <span className="text-brand-mint">{formatStat(SITE_STATS.businessesServed)} brands</span> launch, grow and modernize. From startups to enterprises, our team ships work that feels premium and performs even better.
            </p>
            <div className="mt-7 grid max-w-md grid-cols-2 gap-4">
              {achievements.map((a, i) => {
                const Icon = a.icon;
                return (
                  <motion.div key={a.label} animate={{ y: [0, -8, 0] }} transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-2xl glass-strong p-4">
                    <Icon className="mb-2 h-5 w-5 text-brand-mint" />
                    <div className="text-sm font-semibold text-ink">{a.label}</div>
                    <div className="text-xs text-ink/90">{a.sub}</div>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <span className="mb-4 block text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink/90 lg:text-right">
              Our Work in Motion
            </span>
            <LaptopFrame />
          </Reveal>
        </div>

        {/* mission / vision */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {panels.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group flex h-full items-start gap-5 rounded-3xl glass p-7 transition-shadow duration-300 hover:shadow-glow-mint">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl neon-border text-brand-mint">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="mb-1.5 font-display text-xl font-bold text-ink">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-ink/90">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}