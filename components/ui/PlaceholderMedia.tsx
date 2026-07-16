import type { LucideIcon } from "lucide-react";
import { ImageOff } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MediaSlot } from "@/data/types";

/**
 * Stand-in visual used everywhere a real photograph/video is expected.
 * Once a MediaSlot gets a real `path`, this renders it via next/image instead of the
 * placeholder graphic — every call site is centralised through this component so
 * dropping in real assets only ever touches the relevant entry in /data.
 */
export function PlaceholderMedia({
  media,
  icon: Icon = ImageOff,
  tone = "neutral",
  className,
  index,
}: {
  media: MediaSlot;
  icon?: LucideIcon;
  tone?: "neutral" | "accent";
  className?: string;
  index?: string;
}) {
  if (media.path) {
    return (
      <div className={cn("relative isolate h-full w-full overflow-hidden bg-ink-soft", className)}>
        <Image src={media.path} alt={media.alt} fill className="object-cover" sizes="100vw" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative isolate flex h-full w-full items-end overflow-hidden bg-ink-soft",
        className,
      )}
      role="img"
      aria-label={media.alt}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(245,245,242,0.06) 0px, rgba(245,245,242,0.06) 1px, transparent 1px, transparent 28px)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            tone === "accent"
              ? "radial-gradient(120% 90% at 100% 0%, rgba(36,87,255,0.28), transparent 60%), radial-gradient(120% 90% at 0% 100%, rgba(0,0,0,0.5), transparent 60%)"
              : "radial-gradient(120% 90% at 100% 0%, rgba(154,160,166,0.16), transparent 60%), radial-gradient(120% 90% at 0% 100%, rgba(0,0,0,0.55), transparent 60%)",
        }}
        aria-hidden
      />
      {index && (
        <span className="absolute right-4 top-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-foreground/40">
          {index}
        </span>
      )}
      <span className="absolute right-4 bottom-4 flex items-center gap-1.5 rounded-full border border-line-dark bg-ink/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-foreground/50 backdrop-blur-sm">
        <ImageOff className="size-3" aria-hidden />
        Image Pending
      </span>
      <div className="relative z-10 flex w-full items-center justify-between gap-3 p-5">
        <Icon className="size-6 text-ink-foreground/30" aria-hidden strokeWidth={1.25} />
      </div>
    </div>
  );
}
