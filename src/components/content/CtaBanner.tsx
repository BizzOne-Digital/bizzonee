import { ArrowRight } from "lucide-react";
import NeonButton from "@/components/ui/NeonButton";
import Reveal from "@/components/ui/Reveal";

/** The site's standard neon CTA block (same design as service/about pages). */
export default function CtaBanner({
  title,
  accent,
  text = "Book a free strategy call and let's build your growth engine together.",
  href = "/contact",
  button = "Book Free Strategy Call",
}: {
  title: string;
  accent?: string;
  text?: string;
  href?: string;
  button?: string;
}) {
  return (
    <section className="relative py-16">
      <div className="section">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl neon-border px-8 py-12 text-center sm:px-14">
            <div className="pointer-events-none absolute hidden sm:block -left-16 top-0 h-64 w-64 rounded-full bg-brand-purple/30 blur-[100px]" />
            <div className="pointer-events-none absolute hidden sm:block -right-10 bottom-0 h-64 w-64 rounded-full bg-brand-mint/15 blur-[100px]" />
            <h2 className="relative font-display text-3xl font-extrabold text-white sm:text-4xl">
              {title} {accent && <span className="text-gradient">{accent}</span>}
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-base text-white/65">{text}</p>
            <div className="relative mt-8 flex justify-center">
              <NeonButton href={href} variant="primary">{button} <ArrowRight size={16} /></NeonButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
