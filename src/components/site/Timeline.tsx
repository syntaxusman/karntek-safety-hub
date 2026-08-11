import { useEffect, useRef, useState } from "react";

const milestones = [
  { year: "2016", title: "Karntek Founded", text: "Launched with two consultants and a commitment to conflict-free fire safety advice." },
  { year: "2017", title: "First Portfolio Client", text: "Appointed across a 200-block managing agent portfolio in the South East." },
  { year: "2019", title: "Compartmentation Division", text: "Added intrusive survey capability and in-house CAD reporting." },
  { year: "2021", title: "Nationwide Coverage", text: "Regional teams established in the Midlands, North West and Scotland." },
  { year: "2022", title: "Building Safety Act", text: "Dedicated higher-risk building team formed ahead of the new regime." },
  { year: "2024", title: "10,000 Sites", text: "Passed 10,000 sites assessed across the UK residential sector." },
  { year: "2026", title: "CPD Programme", text: "Launched an accredited CPD programme for property management teams." },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
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
        const viewCentre = window.innerHeight * 0.65;
        const ratio = (viewCentre - rect.top) / (rect.height || 1);
        setProgress(Math.min(Math.max(ratio, 0), 1));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="relative mt-20 pl-10 md:pl-0">
      <div className="absolute top-0 bottom-0 left-[3px] w-px bg-border md:left-[calc(14rem+3px)]" />
      <div
        className="absolute top-0 left-[3px] w-px origin-top bg-primary transition-[height] duration-300 ease-out md:left-[calc(14rem+3px)]"
        style={{ height: `${progress * 100}%` }}
        aria-hidden="true"
      />

      <ol className="space-y-24 md:space-y-32">
        {milestones.map((milestone, index) => {
          const reached = progress * milestones.length >= index + 0.25;
          return (
            <li key={milestone.year} className="relative md:grid md:grid-cols-[14rem_1fr] md:gap-16">
              <span
                className="absolute top-3 -left-10 block h-[7px] w-[7px] rounded-full transition-colors duration-700 md:left-[14rem]"
                style={{ backgroundColor: reached ? "var(--primary)" : "var(--hairline)" }}
                aria-hidden="true"
              />
              <div className="md:pr-16 md:text-right">
                <p className="display-serif text-5xl leading-none text-foreground md:text-6xl">
                  {milestone.year}
                </p>
              </div>
              <div className="mt-5 md:mt-2 md:pl-16">
                <h3 className="heading text-sm tracking-[0.2em]">{milestone.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {milestone.text}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}