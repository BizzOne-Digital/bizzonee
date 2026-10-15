import { BUSINESS } from "@/data/site";
import Reveal from "./Reveal";

// Real testimonials already published on the live site's Google review carousel
// (src/components/sections/TrustReviews.tsx) — reused here verbatim, not invented.
const TESTIMONIALS = [
  {
    quote:
      "I can not say enough to express my complete satisfaction with how our website was designed and completed in such a professional and knowledgeable manner. Being someone who has little or no expertise on website design, I was very surprised.",
    name: "Gary Harding",
  },
  {
    quote:
      "Working with BizzOne Digital for creating my website was an absolute pleasure. Amazing customer service went above and beyond to make sure I received exactly what I wanted, even when it was outside of the scope of my promotion.",
    name: "FireChildVibes",
  },
  {
    quote: "It was a pleasure working with the BizzOne team.",
    name: "Obi I.",
  },
];

export default function Results() {
  return (
    <div id="results" className="border-y border-simple-border bg-simple-surface-alt">
      <Reveal from="left" className="mx-auto flex max-w-[1240px] flex-col gap-11 px-6 py-[88px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-[680px] flex-col gap-3.5">
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">
              Client results · 5.0 on Google
            </div>
            <h2 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,3.6vw,3rem)]">
              Business owners who stopped guessing
            </h2>
          </div>
          <a
            href={BUSINESS.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[10px] border-[1.5px] border-simple-ink px-[22px] py-[13px] font-bold text-simple-ink no-underline transition-all duration-200 hover:-translate-y-0.5"
          >
            Read Our Google Reviews ↗
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-[18px] rounded-2xl border border-simple-border bg-white p-[30px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]"
            >
              <div className="tracking-[2px] text-[#FBBC05]" aria-label="5 out of 5 stars">★★★★★</div>
              <div className="flex-grow text-[17px]">&ldquo;{t.quote}&rdquo;</div>
              <div>
                <div className="font-bold text-simple-ink">{t.name}</div>
                <div className="text-sm text-simple-ink-soft">Google Review</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
