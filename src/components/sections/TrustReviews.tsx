"use client";

import { useEffect, useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const TRUSTINDEX_SRC = "https://cdn.trustindex.io/loader.js?a6cbda97390f954f2876dfb8feb";

export default function TrustReviews() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.querySelector("script")) return;
    const script = document.createElement("script");
    script.src = TRUSTINDEX_SRC;
    script.defer = true;
    script.async = true;
    ref.current.appendChild(script);
  }, []);

  return (
    <section className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-brand-mint/8 blur-[120px]" />
      <div className="section">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Google Reviews</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
        </Reveal>
        <div ref={ref} className="mx-auto mt-10 max-w-5xl" />
      </div>
    </section>
  );
}