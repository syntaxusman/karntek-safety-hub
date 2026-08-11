import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function CtaBanner({
  title = "TALK TO A BUILDING SAFETY SPECIALIST",
  text = "Tell us about your portfolio and we'll tell you exactly where you stand — no obligation, no sales pitch.",
  ctaLabel = "Contact Us",
  ctaTo = "/contact",
  variant = "dark",
}: {
  title?: string;
  text?: string;
  ctaLabel?: string;
  ctaTo?: string;
  variant?: "dark" | "light" | "green";
}) {
  return (
    <section
      className={cn(
        "px-6 py-28 md:py-36",
        variant === "dark" ? "bg-ink" : "border-y border-border bg-muted",
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="mb-8 block h-px w-16 bg-primary" />
          <h2
            className={cn(
              "heading text-2xl md:text-4xl",
              variant === "dark" ? "text-ink-foreground" : "text-foreground",
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed",
              variant === "dark" ? "text-ink-foreground/70" : "text-muted-foreground",
            )}
          >
            {text}
          </p>
        </div>
        <Link
          to={ctaTo}
          className={cn(
            "heading shrink-0 rounded-[2px] px-8 py-4 text-xs tracking-[0.2em] transition-colors duration-500",
            variant === "dark"
              ? "bg-primary text-primary-foreground hover:bg-forest hover:text-forest-foreground"
              : "bg-ink text-ink-foreground hover:bg-forest",
          )}
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}