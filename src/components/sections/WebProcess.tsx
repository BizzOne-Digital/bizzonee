"use client";

import { motion } from "framer-motion";
import { ClipboardList, Code2, CheckCircle, CreditCard, Rocket } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const STEPS = [
  { icon: ClipboardList, title: "Fill out this form", time: "5 min" },
  { icon: Code2, title: "We build your site", time: "24–48 hrs" },
  { icon: CheckCircle, title: "You review and approve", time: "Same day" },
  { icon: CreditCard, title: "Pay once you're happy", time: "Secure link" },
  { icon: Rocket, title: "Your site goes live", time: "Within hours" },
];

export default function WebProcess() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Our Process</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            How It <span className="text-gradient">Works</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 max-w-2xl">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.div whileHover={{ x: 4 }} className={`flex items-center gap-5 px-2 py-5 ${i < STEPS.length - 1 ? "border-b border-white/8" : ""}`}>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-mint/15 font-display text-sm font-bold text-brand-mint shadow-[0_0_20px_-4px_rgba(200,243,29,0.3)]">
                  {i + 1}
                </span>
                <span className="flex-1 font-display text-base font-bold text-white sm:text-lg">{s.title}</span>
                <span className="text-sm font-medium italic text-white/40">{s.time}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}