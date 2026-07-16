import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import type { NewsPost } from "@/data/types";
import { cn } from "@/lib/utils";

export function NewsCard({ post, featured = false }: { post: NewsPost; featured?: boolean }) {
  return (
    <Link href={`/news/${post.slug}`} data-cursor="link" className="group flex h-full flex-col">
      <div className={cn("overflow-hidden", featured ? "aspect-[16/10]" : "aspect-[4/3]")}>
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
          <PlaceholderMedia media={post.media} icon={Newspaper} />
        </div>
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{post.category}</p>
        <h3
          className={cn(
            "mt-3 font-display font-bold leading-snug text-ink-foreground",
            featured ? "text-2xl md:text-3xl" : "text-lg",
          )}
        >
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-foreground/60">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.15em] text-ink-foreground/40">
          <span>
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })} ·{" "}
            {post.readTime}
          </span>
          <ArrowUpRight className="size-4 text-ink-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" aria-hidden />
        </div>
      </div>
    </Link>
  );
}
