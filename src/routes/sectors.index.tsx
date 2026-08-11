import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Factory, GraduationCap, Landmark } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, Section, SectionHeading } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import { sectors } from "@/lib/site-data";
import heroSector from "@/assets/hero-sector.jpg";

const description = "The sectors Karntek supports with fire and building safety consultancy across the UK.";
const icons = [Building2, GraduationCap, Factory, Landmark];

export const Route = createFileRoute("/sectors/")({
  head: () => ({
    meta: [
      { title: "Sectors | Karntek Fire & Building Safety" },
      { name: "description", content: description },
      { property: "og:title", content: "Sectors | Karntek" },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Hero eyebrow="Sectors" title="SECTORS WE WORK IN" subtitle="Specialist knowledge of the buildings, budgets and regulators specific to your sector." image={heroSector} priority />
      <Section>
        <SectionHeading eyebrow="Overview" title="Where we work" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {sectors.map((sector, index) => {
            const Icon = icons[index] ?? Building2;
            return (
              <Reveal key={sector.slug} delay={index * 70}>
                <Link to="/sectors/$sector" params={{ sector: sector.slug }} className="group flex h-full flex-col justify-between border border-border p-8 hover:border-primary hover:bg-muted">
                  <Icon className="h-8 w-8 text-primary" />
                  <span className="heading mt-10 flex items-center gap-2 text-base">
                    {sector.title}
                    <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
