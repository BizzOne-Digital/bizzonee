import Link from "next/link";
import { Fragment } from "react";

/** Renders text with inline [anchor text](/path) links as Next.js links. */
export default function InlineText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(<Fragment key={i++}>{text.slice(last, m.index)}</Fragment>);
    const [, label, href] = m;
    const external = /^https?:\/\//.test(href);
    parts.push(
      external ? (
        <a key={i++} href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-mint underline-offset-4 hover:underline">{label}</a>
      ) : (
        <Link key={i++} href={href} className="font-semibold text-brand-mint underline-offset-4 hover:underline">{label}</Link>
      )
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(<Fragment key={i++}>{text.slice(last)}</Fragment>);
  return <>{parts}</>;
}
