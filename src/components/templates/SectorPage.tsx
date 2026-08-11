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
        <ul className="mt-16 space-y-8">
          {recentChanges.map((item, index) => (
            <Reveal key={item} delay={index * 60}>
              <li className="flex gap-5 border-t border-border pt-8">
                <TrendingUp className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={1.25} />
                <span className="leading-[1.7] text-muted-foreground">{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="border-y border-border bg-muted">
        <SectionHeading eyebrow="Priorities" title="Hot topics" />
        <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-3">
          {hotTopics.map((topic, index) => (
            <Reveal key={topic.title} delay={index * 80}>
              <div className="h-full border-t border-border pt-8">
                <Flame className="h-5 w-5 text-primary" strokeWidth={1.25} />
                <h3 className="heading mt-6 text-xs tracking-[0.25em]">{topic.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{topic.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Track Record" title="Our experience in this sector" />
        <div className="mt-8 space-y-5 leading-[1.7] text-muted-foreground">
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
        <div className="mt-16 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {[
            "No conflict of interest — we never tender for the works we specify.",
            "Consultants with direct operational experience in this sector.",
            "Portfolio-level reporting that boards and funders accept first time.",
            "Nationwide coverage with regional teams and consistent methodology.",
          ].map((item, index) => (
            <Reveal key={item} delay={index * 60}>
              <div className="h-full border-t border-border pt-8 leading-relaxed text-muted-foreground">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <StatsBar stats={stats} />

      <CtaBanner variant="light" title="LET'S REVIEW YOUR PORTFOLIO" ctaLabel="Get in Touch" />

      <Section>
        <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
        <Faqs items={faqs} />
      </Section>
    </>
  );
}