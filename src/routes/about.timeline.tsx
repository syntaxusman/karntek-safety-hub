import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Section, SectionHeading } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Timeline } from "@/components/site/Timeline";
import heroAbout from "@/assets/hero-about.jpg";

const description = "Key milestones in Karntek's growth as a fire and building safety consultancy.";

export const Route = createFileRoute("/about/timeline")({
  head: () => ({
    meta: [
      { title: "Company Timeline | Karntek" },
      { name: "description", content: description },
      { property: "og:title", content: "Company Timeline | Karntek" },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Hero eyebrow="About" title="COMPANY TIMELINE" subtitle="A decade of growth in fire and building safety." image={heroAbout} priority />
      <Section>
        <SectionHeading eyebrow="Milestones" title="Our journey" intro="Drag or scroll the timeline horizontally to explore each milestone." />
        <Timeline />
      </Section>
      <CtaBanner />
    </>
  );
}
