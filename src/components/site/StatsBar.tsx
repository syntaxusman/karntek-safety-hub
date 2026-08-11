import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type Stat = { value: number; prefix?: string; suffix?: string; label: string };

function useCounter(target: number, run: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setValue(Math.round(target * progress));
      if (frame >= total) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [target, run]);
  return value;
}

function StatItem({ stat, run }: { stat: Stat; run: boolean }) {
  const value = useCounter(stat.value, run);
  return (
    <div className="px-4 py-8 text-center">
      <p className="heading text-3xl text-primary md:text-5xl">
        {stat.prefix}
        {value.toLocaleString("en-GB")}
        {stat.suffix}
      </p>
      <p className="heading mt-3 text-xs tracking-[0.2em] text-muted-foreground">{stat.label}</p>
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
    <div ref={ref} className={cn("border-y border-border bg-muted px-6", className)}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 md:grid-cols-4 md:divide-x">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} run={run} />
        ))}
      </div>
    </div>
  );
}