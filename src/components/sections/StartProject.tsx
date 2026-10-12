"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Palette, Share2, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const OPTIONS = [
  { id: "website", label: "Website", icon: Globe, href: "/web-development" },
  { id: "branding", label: "Branding", icon: Palette, href: "/service/design-and-branding" },
  { id: "social", label: "Social Media", icon: Share2, href: "/service/social-media-management" },
] as const;

export default function StartProject() {
  const [selected, setSelected] = useState<(typeof OPTIONS)[number]["id"] | null>(null);
  const option = OPTIONS.find((o) => o.id === selected);

  return (
    <section className="relative py-20 sm:py-28">
      <div className="section">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            What Are You <span className="text-gradient">Looking To Build?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-ink/70">
            Pick a starting point — we&apos;ll point you to the right package and team.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {OPTIONS.map((o) => {
            const active = selected === o.id;
            return (
              <button
                key={o.id}
                onClick={() => setSelected(o.id)}
                className={`flex items-center gap-2.5 rounded-full border-[1.5px] px-6 py-3.5 text-sm font-bold transition-all duration-200 ${
                  active
                    ? "border-ink bg-ink text-white"
                    : "border-ink/15 bg-white text-ink hover:border-ink/40"
                }`}
              >
                <o.icon size={17} />
                {o.label}
              </button>
            );
          })}
        </Reveal>

        <Reveal delay={0.15} className="mt-8 flex justify-center">
          {option ? (
            <Link
              href={option.href}
              className="group inline-flex items-center gap-2 rounded-full bg-brand-mint-bright px-8 py-4 text-sm font-bold text-ink shadow-glow-mint transition-all hover:-translate-y-0.5 hover:brightness-105"
            >
              Start My {option.label} Project <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <span className="text-sm text-ink/40">Select an option above to continue</span>
          )}
        </Reveal>
      </div>
    </section>
  );
}
