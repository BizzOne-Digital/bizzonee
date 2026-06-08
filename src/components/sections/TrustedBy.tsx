"use client";

const LOGOS = ["flowdesk", "bloop.", "cloudforce", "CLOUDCHERRY", "airwave", "DUCTFLOW", "Northwind", "Vertex"];

export default function TrustedBy() {
  return (
    <section className="relative py-10">
      <div className="section">
        <div className="flex flex-col items-center gap-6 rounded-2xl glass px-6 py-6 md:flex-row md:gap-10">
          <p className="shrink-0 text-xs font-medium uppercase tracking-widest text-white/45">Trusted by 100+ amazing companies</p>
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-12">
              {[...LOGOS, ...LOGOS].map((l, i) => (
                <span key={i} className="font-display text-lg font-bold text-white/35 transition-colors hover:text-white/70">{l}</span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0c14] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0c14] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
