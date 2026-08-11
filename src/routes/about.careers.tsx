import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, MapPin } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, Section, SectionHeading } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import heroAbout from "@/assets/hero-about.jpg";

const description = "Career opportunities at Karntek for fire and building safety professionals across the UK.";

export const Route = createFileRoute("/about/careers")({
  head: () => ({
    meta: [
      { title: "Career Opportunities | Karntek" },
      { name: "description", content: description },
      { property: "og:title", content: "Career Opportunities | Karntek" },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

const roles = [
  { title: "Fire Risk Assessor", location: "London / Hybrid", type: "Full time" },
  { title: "Building Safety Consultant", location: "Manchester", type: "Full time" },
  { title: "Compartmentation Surveyor", location: "Nationwide", type: "Full time" },
  { title: "Resident Liaison Officer", location: "Birmingham", type: "Full time" },
];

function Page() {
  return (
    <>
      <Hero eyebrow="Careers" title="CAREER OPPORTUNITIES" subtitle="Build your career with an independent consultancy that puts competence first." image={heroAbout} priority />
      <Section>
        <SectionHeading eyebrow="Open Roles" title="Current vacancies" intro="Placeholder roles — send a CV even if nothing listed matches your experience." />
        <div className="mt-12 space-y-4">
          {roles.map((role, index) => (
            <Reveal key={role.title} delay={index * 60}>
              <div className="flex flex-col gap-3 border border-border p-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="heading text-base">{role.title}</h3>
                  <p className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{role.location}</span>
                    <span className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-primary" />{role.type}</span>
                  </p>
                </div>
                <a href="mailto:careers@karntek.co.uk" className="heading bg-primary px-6 py-3 text-xs text-primary-foreground hover:bg-primary/85">
                  Apply Now
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBanner variant="green" title="SPECULATIVE APPLICATIONS WELCOME" text="Email careers@karntek.co.uk with your CV and area of expertise." ctaLabel="Contact Us" />
    </>
  );
}
