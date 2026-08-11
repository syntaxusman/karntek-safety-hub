import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, HeartHandshake, ShieldCheck, Sparkle } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, Section, SectionHeading } from "@/components/site/Reveal";
import { StatsBar } from "@/components/site/StatsBar";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Timeline } from "@/components/site/Timeline";
import { homeStats } from "@/lib/site-data";
import heroAbout from "@/assets/hero-about.jpg";

const description = "Who Karntek is, where we work and how we became a trusted fire and building safety partner.";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About Us | Karntek Fire & Building Safety" },
      { name: "description", content: description },
      { property: "og:title", content: "About Us | Karntek" },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

const values = [
  { icon: ShieldCheck, title: "Independence", text: "We give the advice the evidence supports, never the advice that wins us more work." },
  { icon: Compass, title: "Clarity", text: "Plain-English reporting that boards, residents and regulators can all follow." },
  { icon: HeartHandshake, title: "Partnership", text: "Long-term relationships with clients, not transactional instructions." },
  { icon: Sparkle, title: "Competence", text: "Continuous professional development and quality review on every deliverable." },
];

function Page() {
  return (
    <>
      <Hero eyebrow="About" title="WHERE WE ARE, WHAT WE DO" subtitle="An independent Fire & Building Safety consultancy built around UK residential property." image={heroAbout} priority />
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <SectionHeading eyebrow="Our Story" title="Built for residential property managers" />
          <Reveal delay={100}>
            <p className="text-lg text-muted-foreground">
              Karntek was founded to fix a simple problem: property managers were being handed fire
              safety reports they could not act on, by consultants who also wanted to sell them the
              remedy. We do the opposite — rigorous assessment, honest findings, and a prioritised
              plan you own.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today we operate nationwide from regional bases, supporting managing agents,
              freeholders, resident management companies and local authorities across the UK.
            </p>
          </Reveal>
        </div>
      </Section>
      <Section className="bg-muted">
        <SectionHeading eyebrow="Timeline" title="Our journey so far" intro="Scroll through the milestones that shaped Karntek." />
        <Timeline />
        <Reveal>
          <Link to="/about/timeline" className="heading mt-8 inline-flex items-center gap-2 text-sm text-primary hover:gap-3">
            View the full timeline <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>
      <Section>
        <SectionHeading eyebrow="Our People" title="Meet the team" intro="Chartered engineers, assessors and surveyors with decades of combined residential experience." />
        <Reveal>
          <Link to="/about/team" className="heading mt-8 inline-flex items-center gap-2 text-sm text-primary hover:gap-3">
            Meet the team <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>
      <Section className="bg-muted">
        <SectionHeading eyebrow="Values" title="What we stand for" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 70}>
              <div className="h-full border-t-2 border-primary bg-card p-7">
                <value.icon className="h-8 w-8 text-primary" />
                <h3 className="heading mt-5 text-base">{value.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <StatsBar stats={homeStats} />
      <CtaBanner variant="green" title="WORK WITH AN INDEPENDENT PARTNER" ctaLabel="Contact Us" />
    </>
  );
}
