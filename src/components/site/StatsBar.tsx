import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type Stat = { value: number; prefix?: string; suffix?: string; label: string };

function useCounter(target: number, run: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    const duration = 2200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return value;
}

function StatItem({ stat, run }: { stat: Stat; run: boolean }) {
  const value = useCounter(stat.value, run);
  return (
    <div className="px-6 py-14">
      <span className="mb-6 block h-px w-8 bg-primary" />
      <p className="heading text-4xl tracking-[0.02em] text-foreground md:text-5xl">
        {stat.prefix}
        {value.toLocaleString("en-GB")}
        {stat.suffix}
      </p>
      <p className="heading mt-4 text-[0.65rem] tracking-[0.3em] text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
}

export function StatsBar({ stats, className }: { stats: Stat[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRun(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("border-y border-border px-6", className)}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-2 md:grid-cols-4 md:divide-y-0 md:divide-x">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} run={run} />
        ))}
      </div>
    </div>
  );
}