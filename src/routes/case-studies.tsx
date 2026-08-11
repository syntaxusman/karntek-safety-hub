import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Reveal, Section, SectionHeading } from "@/components/site/Reveal";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { StatsBar } from "@/components/site/StatsBar";
import heroService from "@/assets/hero-service.jpg";

const description = "Case studies and client testimonials from Karntek's fire and building safety work across the UK.";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies & Testimonials | Karntek" },
      { name: "description", content: description },
      { property: "og:title", content: "Case Studies & Testimonials | Karntek" },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

const caseStudies = [
  { title: "42-Block Portfolio FRAEW Programme", sector: "Residential", text: "Placeholder: delivered PAS 9980 appraisals across 42 blocks in 14 weeks, unlocking three stalled remediation funding applications." },
  { title: "High-Rise Safety Case Submission", sector: "Residential", text: "Placeholder: assembled key building information and safety case report for a 26-storey tower, accepted first time." },
  { title: "Academy Trust Compartmentation Survey", sector: "Education", text: "Placeholder: surveyed 18 school buildings during term-time with zero disruption to teaching." },
  { title: "Council Fire Door Programme", sector: "Local Authority", text: "Placeholder: 4,800 flat entrance door inspections with 92% first-visit access via dedicated resident liaison." },
  { title: "Mixed-Use Retrospective Fire Strategy", sector: "Commercial", text: "Placeholder: reconstructed the fire strategy for a 1980s mixed-use scheme with no surviving design data." },
  { title: "Nationwide RPEEP Rollout", sector: "Residential", text: "Placeholder: person-centred evacuation planning implemented across 1,100 supported living units." },
];

function Page() {
  return (
    <>
      <Hero eyebrow="Evidence" title="CASE STUDIES & TESTIMONIALS" subtitle="Real outcomes from real portfolios — placeholder content pending client sign-off." image={heroService} priority />
      <Section>
        <SectionHeading eyebrow="Case Studies" title="Selected work" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <article className="h-full border border-border p-7">
                <p className="heading text-xs tracking-[0.2em] text-primary">{item.sector}</p>
                <h3 className="heading mt-4 text-base">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section className="bg-muted">
        <SectionHeading eyebrow="Testimonials" title="In our clients' words" />
        <Testimonials />
      </Section>
      <StatsBar stats={[{ value: 10000, label: "Sites Worked On" }, { value: 500, label: "Clients" }, { value: 98, suffix: "%", label: "Client Retention" }, { value: 10, label: "Years in the Sector" }]} />
      <CtaBanner variant="green" title="COULD YOUR PORTFOLIO BE NEXT?" ctaLabel="Contact Us" />
    </>
  );
}
