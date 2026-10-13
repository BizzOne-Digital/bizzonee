"use client";

import { motion } from "framer-motion";

/** Default showreel: 1080p re-encode of the original 4K file (~9 MB instead of 64 MB). */
export const SHOWREEL = {
  src: "/bizzone-digital-showreel.mp4",
  poster: "/bizzone-digital-showreel-poster.jpg",
  title: "BizzOne Digital agency showreel",
  transcript:
    "On-screen text: BizzOne Digital. All-in-one digital agency with ROI-first solutions for service providers, sales-focused marketing, customised strategies for every market. Automotive and car businesses, e-commerce and retail brands, restaurant and food businesses, healthcare and wellness services across Canada. Video editing with a true vision. Stay smart and grow fast. BizzOne Digital.",
};

export default function LaptopFrame({
  videoSrc = SHOWREEL.src,
  poster = SHOWREEL.poster,
  title = SHOWREEL.title,
  transcript = SHOWREEL.transcript,
  label,
}: {
  videoSrc?: string;
  poster?: string;
  title?: string;
  transcript?: string;
  label?: string;
}) {
  return (
    <figure className="relative mx-auto w-full max-w-xl">
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-brand-purple/20 blur-3xl" />
      {/* lid + screen */}
      <div className="relative rounded-2xl border border-ink/10 glass-strong p-2.5 shadow-glass" style={{ perspective: 1400 }}>
        <motion.div
          initial={{ rotateX: -92, opacity: 0.4 }}
          whileInView={{ rotateX: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "bottom center", transformStyle: "preserve-3d" }}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-ink"
        >
          <video
            src={videoSrc}
            poster={poster}
            title={title}
            aria-label={title}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* subtle screen sheen + glow */}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/5" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-ink/8 to-transparent" />
          {label && (
            <span className="absolute bottom-3 right-3 rounded-full glass-strong px-3 py-1.5 text-xs font-semibold text-ink">{label}</span>
          )}
        </motion.div>
      </div>
      {/* base */}
      <div className="mx-auto h-3 w-[112%] -translate-x-[5.4%] rounded-b-2xl bg-gradient-to-b from-ink/15 to-ink/5" />
      <div className="mx-auto -mt-1 h-1.5 w-24 rounded-full bg-ink/10" />
      {transcript && (
        <figcaption className="relative mt-4 text-center">
          <details className="group inline-block text-left">
            <summary className="cursor-pointer list-none text-xs font-medium text-ink/45 transition-colors hover:text-brand-mint">
              Video description <span aria-hidden="true" className="inline-block transition-transform group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-ink/55">{transcript}</p>
          </details>
        </figcaption>
      )}
    </figure>
  );
}
