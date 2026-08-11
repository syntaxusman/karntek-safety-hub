import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Download, ExternalLink, Mic } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, Section, SectionHeading } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import heroService from "@/assets/hero-service.jpg";

const description = "CPD training sessions, past speeches and useful fire and building safety links from Karntek.";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources | Karntek Fire & Building Safety" },
      { name: "description", content: description },
      { property: "og:title", content: "Resources | Karntek" },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

const groups = [
  {
    heading: "CPD Training Sessions",
    icon: BookOpen,
    items: [
      { title: "Understanding PAS 9980", text: "A 45-minute accredited CPD session for property management teams.", cta: "Book Session" },
      { title: "Building Safety Act Essentials", text: "What accountable persons must evidence, and when.", cta: "Book Session" },
      { title: "Fire Doors in Practice", text: "Inspection frequencies, common defects and record keeping.", cta: "Book Session" },
    ],
  },
  {
    heading: "Past Speeches",
    icon: Mic,
    items: [
      { title: "ARMA Conference — Remediation Realities", text: "Placeholder recording and slide deck.", cta: "Download" },
      { title: "Fire Safety Matters Live", text: "Panel session on resident engagement.", cta: "Download" },
      { title: "Housing Safety Summit", text: "Keynote on portfolio-level risk prioritisation.", cta: "Download" },
    ],
  },
  {
    heading: "Useful Links",
    icon: ExternalLink,
    items: [
      { title: "Building Safety Regulator", text: "Official guidance for higher-risk buildings.", cta: "Visit" },
      { title: "Fire Safety (England) Regulations 2022", text: "Full text of the regulations.", cta: "Visit" },
      { title: "PAS 9980 Overview", text: "Background on external wall appraisal methodology.", cta: "Visit" },
    ],
  },
];

function Page() {
  return (
    <>
      <Hero eyebrow="Knowledge" title="RESOURCES" subtitle="Training, talks and reference material to help your team stay ahead of the regulations." image={heroService} priority />
      {groups.map((group, groupIndex) => (
        <Section key={group.heading} className={groupIndex % 2 === 1 ? "bg-muted" : ""}>
          <SectionHeading eyebrow="Resources" title={group.heading} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {group.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <div className="flex h-full flex-col border border-border bg-card p-7">
                  <group.icon className="h-7 w-7 text-primary" />
                  <h3 className="heading mt-5 text-base">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{item.text}</p>
                  <Link to="/book-cpd-session" className="heading mt-6 inline-flex items-center gap-2 text-xs text-primary hover:gap-3">
                    <Download className="h-4 w-4" /> {item.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}
      <CtaBanner title="BOOK A CPD SESSION FOR YOUR TEAM" text="Delivered in person or online, tailored to your portfolio." ctaLabel="Book a Session" ctaTo="/book-cpd-session" />
    </>
  );
}
