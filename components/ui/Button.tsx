import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline-dark" | "outline-light" | "ghost-dark" | "ghost-light";
  showArrow?: boolean;
  icon?: React.ReactNode;
};

const variantClasses: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary: "bg-accent text-white hover:bg-accent/90",
  "outline-dark": "border border-line-dark text-ink-foreground hover:border-ink-foreground/60",
  "outline-light": "border border-line-light text-paper-foreground hover:border-paper-foreground/60",
  "ghost-dark": "text-ink-foreground hover:text-accent",
  "ghost-light": "text-paper-foreground hover:text-accent",
};

const base =
  "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 min-h-11 justify-center";

export function Button({
  children,
  className,
  variant = "primary",
  showArrow = true,
  icon,
  href,
  ...rest
}: CommonProps &
  (
    | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">)
    | ({ href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">)
  )) {
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      )}
    </>
  );

  const classes = cn(base, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} data-cursor="link" className={classes} {...(rest as Omit<React.ComponentProps<typeof Link>, "href">)}>
        {content}
      </Link>
    );
  }

  return (
    <button data-cursor="link" className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
