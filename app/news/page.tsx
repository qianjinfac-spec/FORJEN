import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PageHero } from "@/components/layout/PageHero";
import { NewsListing } from "@/components/news/NewsListing";
import { newsPosts } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description: "Company news, manufacturing updates and global project stories from FORJEN.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="News" title={["News and", "Insights."]} />
      <section className="bg-ink pb-28">
        <Container>
          <SectionLabel index="02" label="All Articles" className="mb-10" />
          <NewsListing posts={newsPosts} />
        </Container>
      </section>
    </>
  );
}
