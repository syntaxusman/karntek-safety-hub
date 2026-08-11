export function LogoSlider({ items, label }: { items: string[]; label: string }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-6" aria-label={label}>
      <div className="animate-marquee flex w-max gap-4">
        {doubled.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="heading flex h-20 w-52 shrink-0 items-center justify-center border border-border bg-card text-sm tracking-[0.2em] text-muted-foreground"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}