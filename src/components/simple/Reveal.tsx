"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps a section so it animates into view the first time it scrolls into
 * the viewport. Used only by the "simple" design (src/components/simple).
 */
export default function Reveal({
  children,
  className = "",
  id,
  from = "up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  from?: "up" | "left" | "right";
  delay?: number;
}) {
  const offset =
    from === "left" ? { x: -60, y: 0 } : from === "right" ? { x: 60, y: 0 } : { x: 0, y: 30 };

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, ...offset, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
