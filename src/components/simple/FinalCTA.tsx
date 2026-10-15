import { BUSINESS } from "@/data/site";

type FinalCTAProps = {
  heading?: string;
  sub?: string;
  bookHref?: string;
  bookLabel?: string;
};

export default function FinalCTA({
  heading = "Ready to see where your next customers are coming from?",
  sub = "Book a free growth audit. We'll show you the quickest wins for your business — no pressure, no obligation.",
  bookHref = "/#book",
  bookLabel = "Book My Free Audit",
}: FinalCTAProps) {
  return (
    <div className="bg-simple-purple text-white">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-[22px] px-6 py-20 text-center">
        <h2 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,4vw,3.2rem)]">
          {heading}
        </h2>
        <p className="m-0 max-w-[640px] text-[19px]">{sub}</p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a
            href={bookHref}
            className="rounded-xl bg-simple-lime px-[30px] py-[17px] text-[17px] font-extrabold text-simple-ink no-underline transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105"
          >
            {bookLabel}
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="rounded-xl border-[1.5px] border-white px-[30px] py-[17px] text-[17px] font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:text-white"
          >
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
