import Reveal from "./Reveal";

const ITEMS = [
  {
    title: "One point of contact",
    desc: "A dedicated account lead — no chasing five different freelancers.",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
      </>
    ),
  },
  {
    title: "Reports you can actually read",
    desc: "Spend, leads and cost per lead — explained in plain language.",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 15 4-4 3 3 5-6" />
      </>
    ),
  },
  {
    title: "Packages that grow with you",
    desc: "Start with one service, add more as the leads come in.",
    icon: (
      <>
        <path d="M12 2v20" />
        <path d="M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    ),
  },
];

export default function PromiseStrip() {
  return (
    <Reveal from="right" className="mx-auto grid max-w-[1240px] grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
      {ITEMS.map((item) => (
        <div key={item.title} className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-simple-chip-bg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {item.icon}
            </svg>
          </div>
          <div>
            <div className="text-lg font-bold text-simple-ink">{item.title}</div>
            <div className="text-[15px] text-simple-ink-soft">{item.desc}</div>
          </div>
        </div>
      ))}
    </Reveal>
  );
}
