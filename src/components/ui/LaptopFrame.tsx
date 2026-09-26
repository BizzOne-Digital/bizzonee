"use client";

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
      <div className="relative rounded-2xl border border-white/10 glass-strong p-2.5 shadow-glass">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-ink">
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
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/8 to-transparent" />
          {label && (
            <span className="absolute bottom-3 right-3 rounded-full glass-strong px-3 py-1.5 text-xs font-semibold text-white">{label}</span>
          )}
        </div>
      </div>
      {/* base */}
      <div className="mx-auto h-3 w-[112%] -translate-x-[5.4%] rounded-b-2xl bg-gradient-to-b from-white/15 to-white/5" />
      <div className="mx-auto -mt-1 h-1.5 w-24 rounded-full bg-white/10" />
      {transcript && (
        <figcaption className="relative mt-4 text-center">
          <details className="group inline-block text-left">
            <summary className="cursor-pointer list-none text-xs font-medium text-white/45 transition-colors hover:text-brand-mint">
              Video description <span aria-hidden="true" className="inline-block transition-transform group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-white/55">{transcript}</p>
          </details>
        </figcaption>
      )}
    </figure>
  );
}
