import { Flame, TrendingUp } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, Section, SectionHeading } from "@/components/site/Reveal";
import { StatsBar, type Stat } from "@/components/site/StatsBar";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Faqs } from "@/components/site/Faqs";
import { LogoSlider } from "@/components/site/LogoSlider";
import { Testimonials, type Testimonial } from "@/components/site/Testimonials";
import { clientLogos, defaultFaqs, testimonials as defaultTestimonials } from "@/lib/site-data";
import heroSector from "@/assets/hero-sector.jpg";

export type SectorPageProps = {
  title: string;
  strapline: string;
  recentChanges: string[];
  hotTopics: { title: string; text: string }[];
  experience: string[];
  stats?: Stat[];
  testimonials?: Testimonial[];
  faqs?: { q: string; a: string }[];
};

const defaultStats: Stat[] = [
  { value: 3200, label: "Buildings Assessed" },
  { value: 180, label: "Active Clients" },
  { value: 96, suffix: "%", label: "Repeat Instructions" },
  { value: 12, label: "Regional Teams" },
];

export function SectorPage({
  title,
  strapline,
  recentChanges,
  hotTopics,
  experience,
  stats = defaultStats,
  testimonials = defaultTestimonials,
  faqs = defaultFaqs,
}: SectorPageProps) {
  return (
    <>
      <Hero
        eyebrow="Sector"
        title={title}
        subtitle={strapline}
        image={heroSector}
        ctaLabel="Speak to a Specialist"
        ctaTo="/contact"
        priority
      />

      <Section>
        <SectionHeading
          eyebrow="Regulation"
          title="Recent changes in this sector"
          intro="Placeholder summary of the legislative and regulatory shifts affecting duty holders right now."
        />
        <ul className="mt-10 space-y-5">
          {recentChanges.map((item, index) => (
            <Reveal key={item} delay={index * 60}>
              <li className="flex gap-4 border-l-2 border-primary bg-muted p-6">
                <TrendingUp className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="bg-muted">
        <SectionHeading eyebrow="Priorities" title="Hot topics" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {hotTopics.map((topic, index) => (
            <Reveal key={topic.title} delay={index * 80}>
              <div className="h-full border border-border bg-card p-6">
                <Flame className="h-6 w-6 text-primary" />
                <h3 className="heading mt-4 text-base">{topic.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{topic.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Track Record" title="Our experience in this sector" />
        <div className="mt-6 space-y-4 text-muted-foreground">
          {experience.map((paragraph) => (
            <Reveal key={paragraph}>
              <p className="max-w-3xl">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner
        title={`WORKING IN ${title}?`}
        text="We'll benchmark your portfolio against current regulatory expectations."
        ctaLabel="Request a Consultation"
      />

      <Section>
        <SectionHeading eyebrow="Testimonials" title="What clients in this sector say" />
        <Testimonials items={testimonials} />
      </Section>

      <div className="border-y border-border bg-muted">
        <LogoSlider items={clientLogos} label="Clients in this sector" />
      </div>

      <Section>
        <SectionHeading eyebrow="Our Difference" title="Why use us" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "No conflict of interest — we never tender for the works we specify.",
            "Consultants with direct operational experience in this sector.",
            "Portfolio-level reporting that boards and funders accept first time.",
            "Nationwide coverage with regional teams and consistent methodology.",
          ].map((item, index) => (
            <Reveal key={item} delay={index * 60}>
              <div className="h-full border border-border p-6 text-muted-foreground">{item}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      <StatsBar stats={stats} />

      <CtaBanner variant="green" title="LET'S REVIEW YOUR PORTFOLIO" ctaLabel="Get in Touch" />

      <Section>
        <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
        <Faqs items={faqs} />
      </Section>
    </>
  );
}