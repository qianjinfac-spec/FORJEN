import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { NewsCard } from "@/components/news/NewsCard";
import { newsPosts } from "@/data/news";

export function NewsPreview() {
  const [featured, ...rest] = newsPosts;

  return (
    <section className="bg-ink py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel index="10" label="News and Insights" className="mb-6" />
            <h2 className="max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-foreground md:text-5xl">
              Updates from our plants and global projects.
            </h2>
          </div>
          <Button href="/news" variant="outline-dark" className="shrink-0">
            All News
          </Button>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          {featured && (
            <RevealOnScroll className="md:col-span-7">
              <NewsCard post={featured} featured />
            </RevealOnScroll>
          )}
          <div className="grid gap-10 md:col-span-5 md:grid-cols-1">
            {rest.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={0.1 * (i + 1)}>
                <NewsCard post={post} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
