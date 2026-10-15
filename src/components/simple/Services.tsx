import Link from "next/link";
import { SERVICES, serviceHref } from "@/lib/services";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <div id="services" className="border-y border-simple-border bg-simple-surface-alt">
      <Reveal from="left" className="mx-auto flex max-w-[1240px] flex-col gap-12 px-6 py-[88px]">
        <div className="flex max-w-[720px] flex-col gap-3.5">
          <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">
            Everything under one roof
          </div>
          <h2 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,3.6vw,3rem)]">
            Every service you need to grow — managed by one team.
          </h2>
          <p className="m-0 text-lg text-simple-ink-soft">
            Pick one service or let us run the whole system. Either way, it all connects.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.slug}
                className="flex flex-col gap-3 rounded-2xl border border-simple-border bg-white p-[30px] transition-all duration-300 hover:-translate-y-1 hover:border-simple-purple-light/40 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]"
              >
                <Icon size={32} color="#8C00FF" strokeWidth={2} aria-hidden="true" />
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="font-display text-[22px] font-bold">{s.title}</div>
                </div>
                <div className="flex-grow text-base text-simple-ink-soft">{s.short}</div>
                <Link href={serviceHref(s)} className="py-2 font-bold no-underline text-simple-purple">
                  Learn more →
                </Link>
              </div>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}
