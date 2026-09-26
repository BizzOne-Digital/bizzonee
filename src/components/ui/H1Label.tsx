import { type ReactNode } from "react";

/**
 * The page's single, keyword-accurate H1, styled like the existing SectionLabel
 * pill so the visual design is unchanged. The large slogan below it stays as
 * display text (a <p>), preserving the original look.
 */
export default function H1Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h1
      className={`inline-flex items-center gap-2 rounded-2xl glass px-4 py-1.5 text-left text-xs font-semibold uppercase leading-relaxed tracking-[0.18em] text-brand-mint ${className}`}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-mint shadow-glow-mint" />
      <span>{children}</span>
    </h1>
  );
}
