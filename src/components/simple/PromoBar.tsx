import Link from "next/link";

export default function PromoBar({ href = "/#book" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="flex flex-wrap items-center justify-center gap-2.5 bg-simple-ink px-5 py-3 text-center text-[15px] font-medium text-white hover:text-white"
    >
      <span>Free Growth Audit — see exactly where your marketing is leaking leads</span>
      <span className="font-bold text-simple-lime">Claim yours →</span>
    </Link>
  );
}
