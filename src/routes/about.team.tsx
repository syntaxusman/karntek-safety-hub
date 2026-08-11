import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, Section, SectionHeading } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import heroAbout from "@/assets/hero-about.jpg";

const description = "Meet the consultants, engineers and surveyors behind Karntek.";

export const Route = createFileRoute("/about/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team | Karntek" },
      { name: "description", content: description },
      { property: "og:title", content: "Meet the Team | Karntek" },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

const team = [
  { name: "Placeholder Name", role: "Managing Director" },
  { name: "Placeholder Name", role: "Technical Director" },
  { name: "Placeholder Name", role: "Head of Building Safety" },
  { name: "Placeholder Name", role: "Head of Fire Risk" },
  { name: "Placeholder Name", role: "Principal Fire Engineer" },
  { name: "Placeholder Name", role: "Compartmentation Lead" },
  { name: "Placeholder Name", role: "Resident Liaison Manager" },
  { name: "Placeholder Name", role: "Client Services Manager" },
];

function Page() {
  return (
    <>
      <Hero eyebrow="About" title="MEET THE TEAM" subtitle="The people who deliver every Karntek instruction." image={heroAbout} priority />
      <Section>
        <SectionHeading eyebrow="Our People" title="Expertise you can name" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Reveal key={`${member.role}`} delay={index * 60}>
              <div className="h-full border border-border">
                <div className="flex aspect-square items-center justify-center bg-muted">
                  <User className="h-14 w-14 text-muted-foreground/40" />
                </div>
                <div className="p-5">
                  <p className="heading text-sm">{member.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBanner title="WANT TO JOIN THE TEAM?" text="We're always interested in hearing from experienced fire and building safety professionals." ctaLabel="View Careers" ctaTo="/about/careers" />
    </>
  );
}
