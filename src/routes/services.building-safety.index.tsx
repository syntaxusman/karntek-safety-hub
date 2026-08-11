import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, Section, SectionHeading } from "@/components/site/Reveal";
import { StatsBar } from "@/components/site/StatsBar";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Faqs } from "@/components/site/Faqs";
import { buildingSafetyChildren } from "@/lib/site-data";

const description =
  "Building Safety Act compliance for higher-risk residential buildings: safety cases, FRAEWs, structural risk and resident engagement.";

export const Route = createFileRoute("/services/building-safety/")({
  head: () => ({
    meta: [
      { title: "Building Safety | Karntek" },
      { name: "description", content: description },
      { property: "og:title", content: "Building Safety | Karntek" },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Hero
        eyebrow="Service"
        title="BUILDING SAFETY"
        subtitle="Complete Building Safety Act support for higher-risk residential buildings, from registration to safety case submission."
        ctaLabel="Request a Quote"
        ctaTo="/contact"
        priority
      />
      <Section>
        <SectionHeading eyebrow="Overview" title="What this service is" intro="A single accountable partner for every duty placed on you by the Building Safety Act 2022 and its supporting regulations." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {buildingSafetyChildren.map((child, index) => (
            <Reveal key={child.to} delay={index * 60}>
              <Link to={child.to as never} className="group flex h-full flex-col justify-between border border-border p-7 hover:border-primary hover:bg-muted">
                <h3 className="heading text-base">{child.title}</h3>
                <span className="heading mt-8 flex items-center gap-2 text-xs text-primary">
                  View <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section className="bg-muted">
        <SectionHeading eyebrow="The Risk" title="Why you need it" />
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            "Principal Accountable Persons must evidence how building safety risks are assessed and managed.",
            "The Building Safety Regulator can request a safety case report at short notice.",
            "Gateway and registration failures stall sales, refinancing and remediation funding.",
            "Residents have statutory rights to information about safety in their building.",
          ].map((item) => (
            <li key={item} className="border-l-2 border-primary bg-card p-6 text-muted-foreground">{item}</li>
          ))}
        </ul>
      </Section>
      <StatsBar stats={[{ value: 640, label: "Higher-Risk Buildings" }, { value: 210, label: "Safety Cases Produced" }, { value: 100, suffix: "%", label: "Registration Success" }, { value: 24, label: "Building Safety Specialists" }]} />
      <CtaBanner title="GET YOUR BUILDING SAFETY CASE MOVING" ctaLabel="Request a Consultation" />
      <Section>
        <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
        <Faqs />
      </Section>
    </>
  );
}
