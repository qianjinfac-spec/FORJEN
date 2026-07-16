import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  label,
  className,
  tone = "dark",
}: {
  index?: string;
  label: string;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em]",
        tone === "dark" ? "text-ink-foreground/60" : "text-paper-foreground/60",
        className,
      )}
    >
      {index && (
        <span className={cn("text-accent")} aria-hidden>
          {index}
        </span>
      )}
      <span className="h-px w-8" style={{ background: "currentColor", opacity: 0.4 }} aria-hidden />
      {label}
    </div>
  );
}
