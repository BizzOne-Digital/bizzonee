import { BUSINESS } from "@/data/site";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "What does “all-in-one” actually include?",
    a: "Your ads, SEO, content, video, website and CRM follow-up are planned and managed by one team. You can also start with just one service.",
  },
  {
    q: "Do I need a big budget to get started?",
    a: "No. Websites start at $79 and video editing at $99 a month. On your free call, we'll recommend a plan that fits your budget.",
  },
  {
    q: "How fast can my website go live?",
    a: "Most websites go live in 24–48 hours once we have your content and approval.",
  },
  {
    q: "How will I know if it's working?",
    a: "You get regular reports showing spend, leads, cost per lead and what we're changing next — in plain language.",
  },
  {
    q: "Which areas do you serve?",
    a: `We're based in ${BUSINESS.address.addressLocality}, ${BUSINESS.address.addressRegion}, and work with businesses across ${BUSINESS.areaServed.join(" and ")}.`,
  },
];

export default function FAQ() {
  return (
    <div id="faq" className="border-t border-simple-border bg-simple-surface-alt text-simple-ink">
      <Reveal from="right" className="mx-auto flex max-w-[880px] flex-col gap-8 px-6 pb-[88px] pt-20">
        <h2 className="m-0 text-center font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,3.6vw,3rem)]">
          Common questions
        </h2>
        <div className="flex flex-col gap-3">
          {FAQS.map((item) => (
            <details key={item.q} className="rounded-2xl border border-simple-border bg-white px-6 py-5">
              <summary className="cursor-pointer text-lg font-bold">{item.q}</summary>
              <p className="mb-0 mt-3 text-simple-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
