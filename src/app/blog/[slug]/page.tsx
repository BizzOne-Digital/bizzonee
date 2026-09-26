import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageShell from "@/components/content/PageShell";
import Breadcrumbs from "@/components/content/Breadcrumbs";
import CtaBanner from "@/components/content/CtaBanner";
import InlineText from "@/components/content/InlineText";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { PUBLISHED_POSTS, getPost, type BlogBlock } from "@/data/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return PUBLISHED_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found", robots: { index: false } };
  return buildMetadata({
    title: post.seoTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
  });
}

const fmt = (d: string) => new Date(`${d}T12:00:00Z`).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });

function Block({ b }: { b: BlogBlock }) {
  switch (b.type) {
    case "h2":
      return <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">{b.text}</h2>;
    case "h3":
      return <h3 className="mt-7 font-display text-lg font-bold text-white">{b.text}</h3>;
    case "ul":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-white/70 marker:text-brand-mint">
          {b.items.map((it) => <li key={it}><InlineText text={it} /></li>)}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-relaxed text-white/70 marker:font-bold marker:text-brand-mint">
          {b.items.map((it) => <li key={it}><InlineText text={it} /></li>)}
        </ol>
      );
    case "callout":
      return (
        <p className="mt-6 rounded-2xl border border-brand-mint/30 bg-brand-mint/5 p-5 text-base leading-relaxed text-white/80">
          <InlineText text={b.text} />
        </p>
      );
    default:
      return <p className="mt-4 text-base leading-relaxed text-white/70"><InlineText text={b.text} /></p>;
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const path = `/blog/${post.slug}`;
  const more = PUBLISHED_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const crumbs = [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path }];

  return (
    <PageShell>
      <JsonLd
        data={[
          articleSchema({ title: post.title, description: post.description, path, datePublished: post.date, dateModified: post.updated }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <article className="section py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs items={crumbs} />
          <header className="mt-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-mint">{post.category}</span>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">{post.title}</h1>
            <p className="mt-4 text-sm text-white/45">
              By BizzOne Digital · <time dateTime={post.date}>{fmt(post.date)}</time> · {post.readingMinutes} min read
            </p>
          </header>
          <div className="mt-8 border-t border-white/10 pt-4">
            {post.body.map((b, i) => <Block key={i} b={b} />)}
          </div>
          <aside className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl glass p-6 sm:flex-row sm:items-center">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-white/45">Related service</span>
              <Link href={post.relatedService.href} className="mt-1 block font-display text-lg font-bold text-white hover:text-brand-mint">{post.relatedService.label}</Link>
            </div>
            <Link href={post.relatedService.href} className="inline-flex items-center gap-2 rounded-full bg-brand-mint px-5 py-2.5 text-sm font-bold text-ink shadow-glow-mint">
              Learn more <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </aside>
          <Link href="/blog" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-brand-mint">
            <ArrowLeft size={15} aria-hidden="true" /> All articles
          </Link>
        </div>
      </article>

      {more.length > 0 && (
        <section className="section pb-8">
          <h2 className="mx-auto max-w-6xl font-display text-2xl font-bold text-white">More <span className="text-gradient">Guides</span></h2>
          <div className="mx-auto mt-6 grid max-w-6xl gap-4 md:grid-cols-3">
            {more.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block rounded-2xl glass p-6 transition-shadow hover:shadow-glow-purple">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-mint">{p.category}</span>
                <span className="mt-2 block font-display text-base font-bold text-white group-hover:text-brand-mint">{p.title}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaBanner title="Ready to Grow" accent="Your Business?" />
    </PageShell>
  );
}
