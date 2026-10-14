"use client";

import { useMemo, useState } from "react";
import { Target, Zap, Phone, Calendar as CalendarIcon, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const BENEFITS = [
  { icon: Target, label: "Personalized Strategy" },
  { icon: Zap, label: "Actionable Insights" },
  { icon: Phone, label: "Quick Response (24–48h)" },
];

const TIME_SLOTS = ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function BookingCalendar() {
  const today = useMemo(() => new Date(), []);
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const [selectedSlot, setSelectedSlot] = useState("11:00 AM");

  const monthLabel = today.toLocaleString("en-US", { month: "long", year: "numeric" });
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = new Date(year, month, 1).getDay();
  const cells = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  // a couple of "available" day highlights besides the selected one, for visual interest
  const availableDays = [today.getDate() + 2, today.getDate() + 7].filter((d) => d <= daysInMonth);

  return (
    <div className="relative mx-auto max-w-sm lg:mx-0" style={{ perspective: 1200 }}>
      <div className="pointer-events-none absolute -inset-10 rounded-[2rem] bg-brand-purple/15 blur-3xl" />

      {/* floating 3D calendar icon */}
      <div className="absolute -right-4 -top-6 z-10 grid h-14 w-14 rotate-6 place-items-center rounded-2xl bg-brand-purple text-white shadow-glow-purple">
        <CalendarIcon size={24} />
      </div>

      <div
        className="relative rounded-3xl border border-ink/10 bg-white p-6 shadow-2xl"
        style={{ transform: "rotate(-2deg)" }}
      >
        <h3 className="font-display text-lg font-bold text-ink">Book a Strategy Call</h3>
        <p className="mt-1 text-xs text-ink/55">Choose a date and time that works for you.</p>

        <div className="mt-5 flex items-center justify-between">
          <button aria-label="Previous month" className="grid h-7 w-7 place-items-center rounded-full border border-ink/10 text-ink/40">
            <ChevronLeft size={14} />
          </button>
          <span className="text-sm font-bold text-ink">{monthLabel}</span>
          <button aria-label="Next month" className="grid h-7 w-7 place-items-center rounded-full border border-ink/10 text-ink/40">
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-y-1.5 text-center">
          {WEEKDAYS.map((d, i) => (
            <span key={i} className="text-[10px] font-semibold uppercase text-ink/35">{d}</span>
          ))}
          {cells.map((day, i) => {
            if (!day) return <span key={i} />;
            const isSelected = day === selectedDay;
            const isAvailable = availableDays.includes(day) && !isSelected;
            return (
              <button
                key={i}
                onClick={() => setSelectedDay(day)}
                className={`mx-auto grid h-7 w-7 place-items-center rounded-full text-xs font-semibold transition-colors ${
                  isSelected
                    ? "bg-brand-purple text-white"
                    : isAvailable
                      ? "bg-brand-mint-bright/30 text-ink"
                      : "text-ink/60 hover:bg-ink/5"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                slot === selectedSlot
                  ? "border-brand-purple bg-brand-purple text-white"
                  : "border-ink/10 text-ink/60 hover:border-ink/25"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BookCallCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute hidden sm:block -left-24 top-1/4 h-96 w-96 rounded-full bg-brand-purple/10 blur-[150px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,15,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(12,15,26,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 60% 70% at 70% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 70% 50%, black, transparent)",
        }}
      />

      <div className="section relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal from="left">
          <SectionLabel>Get A Free Consultation</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something <br /><span className="text-gradient">Great Together</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
            Talk to our experts and get a customized strategy for your business. No obligation, just real insights.
          </p>

          <ul className="mt-7 space-y-3">
            {BENEFITS.map((b) => (
              <li key={b.label} className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-purple/10 text-brand-purple">
                  <b.icon size={16} />
                </span>
                <span className="text-sm font-semibold text-ink/80">{b.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-brand-mint-bright px-6 py-3.5 text-sm font-bold text-ink shadow-glow-mint transition-all hover:-translate-y-0.5 hover:brightness-105">
              <Phone size={15} /> Book Strategy Call <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-brand-mint-bright/60 bg-white px-6 py-3.5 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-brand-mint-bright/10">
              <CalendarIcon size={15} /> Schedule a Meeting
            </a>
          </div>
        </Reveal>

        <Reveal from="right" delay={0.1}>
          <BookingCalendar />
        </Reveal>
      </div>
    </section>
  );
}
