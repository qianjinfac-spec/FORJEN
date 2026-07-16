"use client";

import { useMemo, useState } from "react";
import { NewsCard } from "@/components/news/NewsCard";
import type { NewsPost } from "@/data/types";
import { cn } from "@/lib/utils";

const categories = ["All", "Company News", "Manufacturing Updates", "Global Projects"] as const;

export function NewsListing({ posts }: { posts: NewsPost[] }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (category === "All" ? posts : posts.filter((p) => p.category === category)),
    [posts, category],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            data-cursor="link"
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors",
              category === c
                ? "border-accent bg-accent text-white"
                : "border-line-dark text-ink-foreground/60 hover:border-ink-foreground/40 hover:text-ink-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <NewsCard key={post.slug} post={post} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-sm text-ink-foreground/50">No articles in this category yet.</p>
        )}
      </div>
    </div>
  );
}
