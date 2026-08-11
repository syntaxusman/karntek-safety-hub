import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  Factory,
  GraduationCap,
  Landmark,
  MapPinned,
  ScaleIcon,
  Users,
} from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, Section, SectionHeading } from "@/components/site/Reveal";
import { StatsBar } from "@/components/site/StatsBar";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Testimonials } from "@/components/site/Testimonials";
import { LogoSlider } from "@/components/site/LogoSlider";
import { accreditations, clientLogos, homeStats, sectors, services } from "@/lib/site-data";
import heroResidential from "@/assets/hero-residential.jpg";

const description =
  "Karntek is an independent Fire & Building Safety consultancy supporting UK residential property managers with fire risk assessments, FRAEWs and building safety cases.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karntek | Fire & Building Safety Consultancy" },
      { name: "description", content: description },
      { property: "og:title", content: "Karntek | Fire & Building Safety Consultancy" },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

const usps = [
  {
    icon: ScaleIcon,
    title: "No Conflict of Interest",
    text: "We never tender for the remedial works we recommend, so our advice is yours alone.",
  },
  {
    icon: Award,
    title: "Fully Accredited & Insured",
    text: "£10m professional indemnity cover and accreditation across every discipline we deliver.",
  },
  {
    icon: Users,
    title: "Expert Team",
    text: "Chartered engineers, assessors and surveyors with deep residential sector experience.",
  },
  {
    icon: MapPinned,
    title: "Nationwide Coverage",
    text: "Regional teams across the UK working to one consistent methodology and report format.",
  },
];

const sectorIcons = [Building2, GraduationCap, Factory, Landmark];

function Index() {
  return (
    <>
      <Hero
        title="YOU'RE IN SAFE HANDS"
        subtitle="We are a trusted partner in Fire & Building Safety for residential property managers."
        image={heroResidential}
        ctaLabel="Request a Consultation"
        ctaTo="/contact"
        size="lg"
        priority
      />

      <StatsBar stats={homeStats} />

      <Section>
        <div className="grid items-start gap-16 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-24">
          <SectionHeading eyebrow="About Karntek" title="Independent fire &amp; building safety expertise" />
          <Reveal delay={100}>
            <p className="text-lg leading-[1.7] text-muted-foreground">
              Karntek works alongside managing agents, freeholders and resident management companies
              to make complex fire and building safety obligations manageable. From a single block to
              a national portfolio, we assess the risk, evidence it properly, and give you a
              prioritised plan you can act on and defend.
            </p>
            <Link
              to="/about"
              className="heading group mt-10 inline-flex items-center gap-3 border-b border-transparent pb-1 text-xs tracking-[0.25em] text-foreground transition-colors duration-500 hover:border-primary hover:text-forest"
            >
              Learn More <ArrowRight className="h-4 w-4 text-primary" />
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section className="border-y border-border bg-muted">
        <SectionHeading eyebrow="Why Karntek" title="Why choose us" />
        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp, index) => (
            <Reveal key={usp.title} delay={index * 80} className="bg-muted">
              <div className="h-full px-2 py-10 sm:px-8">
                <usp.icon className="h-6 w-6 text-primary" strokeWidth={1.25} />
                <h3 className="heading mt-8 text-xs tracking-[0.25em]">{usp.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{usp.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Testimonials" title="Trusted by property professionals" />
        <Testimonials />
      </Section>

      <Section className="bg-ink text-ink-foreground">
        <Reveal className="max-w-3xl">
          <p className="heading mb-5 flex items-center gap-4 text-[0.65rem] tracking-[0.4em] text-ink-foreground/55">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            Sectors
          </p>
          <h2 className="heading text-2xl md:text-4xl">Sectors we work in</h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, index) => {
            const Icon = sectorIcons[index] ?? Building2;
            return (
              <Reveal key={sector.slug} delay={index * 80}>
                <Link
                  to="/sectors/$sector"
                  params={{ sector: sector.slug }}
                  className="group flex h-full flex-col justify-between border-t border-ink-foreground/15 py-10 pr-8 transition-colors duration-500 hover:border-primary"
                >
                  <Icon className="h-6 w-6 text-ink-foreground/70" strokeWidth={1.25} />
                  <span className="heading mt-16 flex items-center gap-3 text-xs tracking-[0.2em]">
                    {sector.title}
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our Services"
          title="What we do"
          intro="A complete fire and building safety offering, delivered by accredited specialists."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.to} delay={index * 50}>
              <Link
                to={service.to as never}
                className="group flex h-full flex-col justify-between border-t border-border py-10 pr-10 transition-colors duration-500 hover:border-primary"
              >
                <h3 className="heading text-sm tracking-[0.2em]">{service.title}</h3>
                <span className="heading mt-12 flex items-center gap-3 text-[0.65rem] tracking-[0.3em] text-muted-foreground transition-colors duration-500 group-hover:text-forest">
                  View Service
                  <ArrowRight className="h-4 w-4 text-primary" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="border-y border-border bg-muted py-8">
        <div className="mx-auto max-w-6xl px-6 pt-8">
          <p className="heading text-center text-[0.65rem] tracking-[0.4em] text-muted-foreground">
            Trusted by leading property managers
          </p>
        </div>
        <LogoSlider items={clientLogos} label="Client logos" />
        <div className="mx-auto max-w-6xl px-6 pt-8">
          <p className="heading text-center text-[0.65rem] tracking-[0.4em] text-muted-foreground">
            Accreditations
          </p>
        </div>
        <LogoSlider items={accreditations} label="Accreditation badges" />
      </div>

      <CtaBanner
        variant="dark"
        title="SAFETY YOU CAN EVIDENCE"
        text="Book a no-obligation consultation and find out exactly where your buildings stand."
        ctaLabel="Contact Us"
      />
    </>
  );
}
