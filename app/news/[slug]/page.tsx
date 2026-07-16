import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Newspaper, ArrowLeft, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { NewsCard } from "@/components/news/NewsCard";
import { newsPosts } from "@/data/news";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.date },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = newsPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const shareUrl = `${siteConfig.url}/news/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="bg-ink pb-16 pt-40 md:pb-20 md:pt-48">
        <Container className="max-w-3xl">
          <Link href="/news" data-cursor="link" className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-foreground/50 hover:text-ink-foreground">
            <ArrowLeft className="size-3.5" aria-hidden />
            All News
          </Link>
          <SectionLabel label={post.category} className="mb-6" />
          <h1 className="text-balance font-display text-4xl font-black leading-[1.05] tracking-tight text-ink-foreground sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-ink-foreground/40">
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {post.readTime}
          </p>
        </Container>
      </section>

      <Container className="max-w-3xl">
        <div className="aspect-[16/9] overflow-hidden">
          <PlaceholderMedia media={post.media} icon={Newspaper} tone="accent" />
        </div>

        <div className="mt-10 space-y-6">
          {post.body.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-ink-foreground/70">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4 border-t border-line-dark pt-8">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-foreground/40">Share</span>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            aria-label="Share on LinkedIn"
            className="flex size-9 items-center justify-center rounded-full border border-line-dark text-ink-foreground hover:border-accent hover:text-accent"
          >
            <span className="text-xs font-bold" aria-hidden>in</span>
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            aria-label="Share on X"
            className="flex size-9 items-center justify-center rounded-full border border-line-dark text-ink-foreground hover:border-accent hover:text-accent"
          >
            <span className="text-sm font-bold" aria-hidden>X</span>
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(shareUrl)}`}
            data-cursor="link"
            aria-label="Share by email"
            className="flex size-9 items-center justify-center rounded-full border border-line-dark text-ink-foreground hover:border-accent hover:text-accent"
          >
            <Mail className="size-4" aria-hidden />
          </a>
        </div>
      </Container>

      {related.length > 0 && (
        <section className="bg-ink py-24 md:py-28">
          <Container>
            <SectionLabel index="—" label="Related Articles" className="mb-10" />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <NewsCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
