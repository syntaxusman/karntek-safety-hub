import { Reveal } from "@/components/site/Reveal";

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
  return (
    <div className="mt-12 -mx-6 overflow-x-auto px-6 pb-6">
      <div className="relative flex min-w-max gap-8">
        <div className="absolute top-3 right-0 left-0 h-px bg-border" />
        {milestones.map((milestone, index) => (
          <Reveal key={milestone.year} delay={index * 70} className="relative w-64 shrink-0">
            <span className="relative z-10 block h-6 w-6 rounded-full border-4 border-background bg-primary" />
            <p className="heading mt-6 text-2xl text-primary">{milestone.year}</p>
            <h3 className="heading mt-2 text-sm">{milestone.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{milestone.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}