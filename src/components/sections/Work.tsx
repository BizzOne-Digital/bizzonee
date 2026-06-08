"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-28">
      <div className="section">
        <Reveal>
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Featured Projects That Drive <span className="text-gradient">Real Results</span>.
          </h2>
        </Reveal>

        <div className="mt-14 flex snap-x gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:overflow-visible">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="min-w-[78%] snap-center sm:min-w-[42%] lg:min-w-0">
              <motion.div
                whileHover={{ scale: 1.03, rotateX: 4, rotateY: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                style={{ transformPerspective: 900 }}
                className="group relative h-full overflow-hidden rounded-2xl glass-strong p-1.5 hover:shadow-glow-purple"
              >
                {/* holographic screen */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0f1322] to-[#070910] p-5">
                  <div className="mb-4 flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-purple/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-mint/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                  <div className={`mb-3 h-28 rounded-lg ${p.accent === "mint" ? "bg-brand-mint/10" : "bg-brand-purple/15"} relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)", backgroundSize: "20px 20px" }} />
                    <div className={`absolute bottom-0 left-0 right-0 h-2/3 ${p.accent === "mint" ? "bg-gradient-to-t from-brand-mint/40" : "bg-gradient-to-t from-brand-purple/50"} to-transparent`} style={{ clipPath: "polygon(0 100%,15% 60%,35% 75%,55% 35%,75% 55%,100% 20%,100% 100%)" }} />
                  </div>
                  <span className={`text-xs font-bold ${p.accent === "mint" ? "text-brand-mint" : "text-brand-purple-light"}`}>{p.metric}</span>
                  <h3 className="mt-1 font-display text-lg font-bold text-white">{p.name}</h3>
                  <p className="mt-1.5 text-sm text-white/55">{p.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-white/70 transition-colors group-hover:text-brand-mint">
                    View Case Study <ArrowUpRight size={14} />
                  </span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
