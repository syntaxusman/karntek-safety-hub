import { CheckCircle2, ShieldCheck, Users } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, Section, SectionHeading } from "@/components/site/Reveal";
import { StatsBar, type Stat } from "@/components/site/StatsBar";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Faqs } from "@/components/site/Faqs";
import { defaultFaqs } from "@/lib/site-data";
import heroService from "@/assets/hero-service.jpg";

export type ServicePageProps = {
  title: string;
  strapline: string;
  what: string[];
  why: string[];
  whyUs?: string[];
  stats?: Stat[];
  faqs?: { q: string; a: string }[];
  image?: string;
};

const defaultWhyUs = [
  "Fully independent — we never quote for the remedial works we recommend.",
  "Accredited consultants working to a documented competency framework.",
  "Fixed-fee quotations issued within 48 hours of a scoping call.",
  "Board-ready presentations and resident-facing summaries included.",
];

const defaultStats: Stat[] = [
  { value: 1200, label: "Assessments Delivered" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 10, label: "Working Day Turnaround" },
  { value: 45, label: "Accredited Consultants" },
];

export function ServicePage({
  title,
  strapline,
  what,
  why,
  whyUs = defaultWhyUs,
  stats = defaultStats,
  faqs = defaultFaqs,
  image = heroService,
}: ServicePageProps) {
  return (
    <>
      <Hero
        eyebrow="Service"
        title={title}
        subtitle={strapline}
        image={image}
        ctaLabel="Request a Quote"
        ctaTo="/contact"
        priority
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Overview" title="What this service is" />
            <div className="mt-6 space-y-4 text-muted-foreground">
              {what.map((paragraph) => (
                <Reveal key={paragraph}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="The Risk" title="Why you need it" />
            <ul className="mt-6 space-y-4">
              {why.map((item, index) => (
                <Reveal key={item} delay={index * 60}>
                  <li className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <SectionHeading eyebrow="Our Difference" title="Why use us" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {whyUs.map((item, index) => (
            <Reveal key={item} delay={index * 60}>
              <div className="flex h-full gap-4 border border-border bg-card p-6">
                {index % 2 === 0 ? (
                  <ShieldCheck className="h-6 w-6 shrink-0 text-primary" />
                ) : (
                  <Users className="h-6 w-6 shrink-0 text-primary" />
                )}
                <p className="text-muted-foreground">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <StatsBar stats={stats} />

      <CtaBanner
        title={`NEED SUPPORT WITH ${title}?`}
        text="Send us your building details and we'll come back with a fixed-fee proposal."
        ctaLabel="Request a Consultation"
      />

      <Section>
        <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
        <Faqs items={faqs} />
      </Section>
    </>
  );
}