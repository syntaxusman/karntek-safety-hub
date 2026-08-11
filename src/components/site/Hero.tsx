import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import heroDefault from "@/assets/hero-service.jpg";

export function Hero({
  eyebrow,
  title,
  subtitle,
  image = heroDefault,
  ctaLabel,
  ctaTo,
  size = "md",
  priority = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  ctaLabel?: string;
  ctaTo?: string;
  size?: "md" | "lg";
  priority?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading={priority ? "eager" : "lazy"}
        className="absolute inset-0 h-full w-full object-cover grayscale"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div
        className={cn(
          "relative mx-auto flex max-w-6xl flex-col justify-end px-6",
          size === "lg" ? "min-h-[78vh] py-24" : "min-h-[46vh] py-20",
        )}
      >
        <div className="max-w-3xl border-l-4 border-primary bg-ink/55 p-6 backdrop-blur-[2px] md:p-10">
          {eyebrow ? (
            <p className="heading mb-4 text-xs tracking-[0.3em] text-primary">{eyebrow}</p>
          ) : null}
          <h1
            className={cn(
              "heading text-ink-foreground",
              size === "lg" ? "text-4xl leading-[1.05] md:text-6xl" : "text-3xl md:text-5xl",
            )}
          >
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-2xl text-base text-ink-foreground/80 md:text-lg">{subtitle}</p>
          ) : null}
          {ctaLabel && ctaTo ? (
            <Link
              to={ctaTo}
              className="heading mt-8 inline-flex items-center bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-colors hover:bg-primary/85"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}