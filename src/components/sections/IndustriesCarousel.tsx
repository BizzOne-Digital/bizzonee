"use client";

import { useRef, useState } from "react";
import { Home, UtensilsCrossed, ShoppingBag, Leaf, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const INDUSTRIES = [
  { label: "Home Services", icon: Home, gradient: "linear-gradient(160deg, #F59E0B, #7c4a03)" },
  { label: "Restaurants & Food", icon: UtensilsCrossed, gradient: "linear-gradient(160deg, #EF4444, #7a1414)" },
  { label: "E-commerce & Retail", icon: ShoppingBag, gradient: "linear-gradient(160deg, #8C00FF, #3a0066)", highlight: true },
  { label: "Healthcare & Wellness", icon: Leaf, gradient: "linear-gradient(160deg, #10B981, #064e3b)" },
  { label: "Real Estate", icon: Building2, gradient: "linear-gradient(160deg, #06B6D4, #0c3e47)" },
];

export default function IndustriesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const n = INDUSTRIES.length;

  const scrollToIndex = (i: number) => {
    const clamped = (i + n) % n;
    setActive(clamped);
    const track = trackRef.current;
    const card = track?.children[clamped] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* decorative glow + grid */}
      <div className="pointer-events-none absolute hidden sm:block -left-20 top-10 h-96 w-96 rounded-full bg-brand-purple/10 blur-[140px]" />
      <div className="pointer-events-none absolute hidden sm:block right-0 bottom-0 h-64 w-64 rounded-full bg-brand-mint/10 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,15,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(12,15,26,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 30% 20%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 30% 20%, black, transparent)",
        }}
      />

      <div className="section relative">
        <Reveal from="left" className="max-w-2xl">
          <SectionLabel>Industries We Serve</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Digital Solutions For <br /><span className="text-gradient">Every Industry</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70">
            We work with businesses of all sizes across multiple industries, delivering customized digital solutions that drive real results.
          </p>
        </Reveal>

        <div className="relative mt-12">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {INDUSTRIES.map((ind, i) => (
              <div
                key={ind.label}
                className={`relative flex h-80 w-56 shrink-0 snap-center flex-col justify-end overflow-hidden rounded-[20px] p-5 shadow-lg transition-transform duration-300 sm:w-64 ${
                  ind.highlight ? "ring-2 ring-brand-purple shadow-glow-purple" : ""
                }`}
                style={{ background: ind.gradient }}
              >
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="relative mb-auto grid h-11 w-11 place-items-center rounded-full bg-white/90 text-brand-purple shadow-md">
                  <ind.icon size={20} />
                </span>
                <span className="relative font-display text-lg font-bold text-white">{ind.label}</span>
              </div>
            ))}
          </div>

          {/* nav arrows */}
          <button
            aria-label="Previous industry"
            onClick={() => scrollToIndex(active - 1)}
            className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ink shadow-md transition-transform hover:scale-105 sm:grid"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next industry"
            onClick={() => scrollToIndex(active + 1)}
            className="absolute right-0 top-1/2 hidden translate-x-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ink shadow-md transition-transform hover:scale-105 sm:grid"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* pagination dots */}
        <div className="mt-6 flex justify-center gap-2">
          {INDUSTRIES.map((ind, i) => (
            <button
              key={ind.label}
              aria-label={`Go to ${ind.label}`}
              onClick={() => scrollToIndex(i)}
              className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-brand-purple" : "w-2 bg-ink/15"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
