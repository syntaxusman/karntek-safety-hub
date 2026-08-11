import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Section, SectionHeading } from "@/components/site/Reveal";
import { BlindspotCalculator } from "@/components/site/BlindspotCalculator";
import heroResidential from "@/assets/hero-residential.jpg";

const description = "Answer a few questions about your building and see where your fire and building safety blindspots are.";

export const Route = createFileRoute("/blindspot-calculator")({
  head: () => ({
    meta: [
      { title: "Blindspot Calculator | Karntek" },
      { name: "description", content: description },
      { property: "og:title", content: "Blindspot Calculator | Karntek" },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Hero eyebrow="Tool" title="BLINDSPOT CALCULATOR" subtitle="A two-minute check on where your building's compliance evidence may be incomplete." image={heroResidential} priority />
      <Section>
        <SectionHeading eyebrow="Assessment" title="Find your blindspots" intro="Answer each question as accurately as you can. Nothing is stored or submitted." align="center" />
        <BlindspotCalculator />
      </Section>
    </>
  );
}
