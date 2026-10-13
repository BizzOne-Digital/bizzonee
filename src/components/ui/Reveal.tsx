"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

export default function Reveal({
  children, delay = 0, y = 30, from = "up", className,
}: { children: ReactNode; delay?: number; y?: number; from?: "up" | "left" | "right"; className?: string }) {
  const offset =
    from === "left" ? { x: -60, y: 0 } : from === "right" ? { x: 60, y: 0 } : { x: 0, y };

  return (
    <motion.div
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
