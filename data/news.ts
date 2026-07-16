import type { NewsPost } from "./types";

/** TODO: replace with real news content — structured here so it can move to a CMS later without changing page code. */
export const newsPosts: NewsPost[] = [
  {
    slug: "forjen-expands-north-manufacturing-base",
    category: "Company News",
    title: "FORJEN Expands North Manufacturing Base",
    excerpt:
      "TODO — summary of the expansion, added capacity and what it means for customers.",
    date: "2026-05-12",
    readTime: "3 min read",
    body: [
      "TODO — full article body. Replace this placeholder copy with the final approved announcement text.",
      "TODO — additional paragraph covering timeline, investment scope and next steps.",
    ],
    media: { id: "news-north-expansion", alt: "Construction progress at the North Manufacturing Base expansion" },
  },
  {
    slug: "new-robotic-welding-cell-commissioned",
    category: "Manufacturing Updates",
    title: "New Robotic Welding Cell Commissioned",
    excerpt:
      "TODO — summary describing the new welding cell and its impact on throughput and consistency.",
    date: "2026-03-28",
    readTime: "2 min read",
    body: [
      "TODO — full article body describing the equipment, capability and quality benefits.",
    ],
    media: { id: "news-welding-cell", alt: "Newly commissioned robotic welding cell on the production floor" },
  },
  {
    slug: "distributor-partnership-southeast-asia",
    category: "Global Projects",
    title: "New Distributor Partnership in Southeast Asia",
    excerpt:
      "TODO — summary describing the new distributor partnership and target markets.",
    date: "2026-01-15",
    readTime: "2 min read",
    body: [
      "TODO — full article body describing the partnership, coverage area and product focus.",
    ],
    media: { id: "news-distributor-sea", alt: "Signing ceremony for a new distributor partnership" },
  },
];
