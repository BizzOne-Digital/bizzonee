"use client";

import Link from "next/link";
import { type ReactNode } from "react";

export default function NeonButton({
  href, children, variant = "primary", className = "",
}: { href: string; children: ReactNode; variant?: "primary" | "ghost"; className?: string }) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 will-change-transform hover:-translate-y-0.5";
  if (variant === "primary") {
    return (
      <Link href={href} className={`${base} text-ink shadow-glow-mint ${className}`}
        style={{ background: "linear-gradient(100deg, var(--brand-mint), var(--brand-purple-light))" }}>
        {children}
      </Link>
    );
  }
  return (
    <Link href={href}
      className={`${base} text-white neon-border hover:shadow-glow-purple ${className}`}>
      {children}
    </Link>
  );
}
