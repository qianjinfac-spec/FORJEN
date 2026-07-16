import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-ink pt-24">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="mt-4 max-w-xl text-balance font-display text-5xl font-black leading-[0.98] tracking-tight text-ink-foreground sm:text-6xl">
          Page not found.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-foreground/60">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-10">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
