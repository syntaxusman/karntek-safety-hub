import { useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const ratio = Math.min(Math.max(-rect.top / (rect.height || 1), 0), 1);
        setProgress(ratio);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-ink">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading={priority ? "eager" : "lazy"}
        style={{ transform: `scale(${1 + progress * 0.05}) translateY(${progress * 24}px)` }}
        className="duotone absolute inset-0 h-full w-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-ink/72" />
      <div
        className={cn(
          "relative mx-auto flex max-w-6xl flex-col justify-end px-6",
          size === "lg" ? "min-h-[86vh] py-32 md:py-40" : "min-h-[56vh] py-28",
        )}
      >
        <div className="max-w-3xl">
          {eyebrow ? (
            <p
              className="heading animate-rise mb-6 text-[0.65rem] tracking-[0.4em] text-ink-foreground/60"
              style={{ animationDelay: "60ms" }}
            >
              {eyebrow}
            </p>
          ) : null}
          <span
            className="animate-rise mb-8 block h-px w-16 bg-primary"
            style={{ animationDelay: "120ms" }}
          />
          <h1
            className={cn(
              "heading animate-rise text-ink-foreground",
              size === "lg"
                ? "text-[2.1rem] leading-[1.1] md:text-6xl"
                : "text-[1.7rem] md:text-5xl",
            )}
            style={{ animationDelay: "200ms" }}
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              className="animate-rise mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/70 md:text-lg"
              style={{ animationDelay: "380ms" }}
            >
              {subtitle}
            </p>
          ) : null}
          {ctaLabel && ctaTo ? (
            <Link
              to={ctaTo}
              className="heading animate-rise mt-12 inline-flex items-center rounded-[2px] bg-primary px-8 py-4 text-xs tracking-[0.2em] text-primary-foreground transition-colors duration-500 hover:bg-forest hover:text-forest-foreground"
              style={{ animationDelay: "560ms" }}
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}