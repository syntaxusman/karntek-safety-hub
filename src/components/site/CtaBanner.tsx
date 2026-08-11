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
  variant?: "dark" | "green";
}) {
  return (
    <section
      className={cn("px-6 py-16", variant === "dark" ? "bg-ink" : "bg-primary")}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2
            className={cn(
              "heading text-2xl md:text-4xl",
              variant === "dark" ? "text-ink-foreground" : "text-brand-foreground",
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "mt-3 text-base",
              variant === "dark" ? "text-ink-foreground/75" : "text-brand-foreground/80",
            )}
          >
            {text}
          </p>
        </div>
        <Link
          to={ctaTo}
          className={cn(
            "heading shrink-0 px-8 py-4 text-sm transition-opacity hover:opacity-85",
            variant === "dark"
              ? "bg-primary text-primary-foreground"
              : "bg-ink text-ink-foreground",
          )}
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}