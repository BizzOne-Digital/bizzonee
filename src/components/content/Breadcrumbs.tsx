import Link from "next/link";

/** Visible breadcrumb trail; pair with breadcrumbSchema() using the same paths. */
export default function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-white/50">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-white/75">{it.name}</span>
              ) : (
                <>
                  <Link href={it.path} className="transition-colors hover:text-brand-mint">{it.name}</Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
