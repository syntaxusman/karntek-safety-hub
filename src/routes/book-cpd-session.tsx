import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Section, SectionHeading } from "@/components/site/Reveal";
import { CpdForm } from "@/components/site/CpdForm";
import heroAbout from "@/assets/hero-about.jpg";

const description = "Book an accredited CPD training session with Karntek for your property management team.";

export const Route = createFileRoute("/book-cpd-session")({
  head: () => ({
    meta: [
      { title: "Book a CPD Session | Karntek" },
      { name: "description", content: description },
      { property: "og:title", content: "Book a CPD Session | Karntek" },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

const includes = [
  "45–60 minute accredited session, in person or online",
  "Tailored to your portfolio and current compliance priorities",
  "Slides and a written summary issued afterwards",
  "Q&A with an accredited Karntek consultant",
];

function Page() {
  return (
    <>
      <Hero eyebrow="Training" title="BOOK A CPD SESSION" subtitle="Practical, accredited training for property management teams — delivered at your offices or online." image={heroAbout} priority />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading eyebrow="What's included" title="A session built around your team" />
            <ul className="mt-8 space-y-4">
              {includes.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{item}
                </li>
              ))}
            </ul>
          </div>
          <CpdForm />
        </div>
      </Section>
    </>
  );
}
