import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, Section, SectionHeading } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import { services } from "@/lib/site-data";

const description =
  "Explore Karntek's full range of fire and building safety services for UK residential property managers.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Karntek Fire & Building Safety" },
      { name: "description", content: description },
      { property: "og:title", content: "Services | Karntek" },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="OUR SERVICES"
        subtitle="Independent fire and building safety services, delivered end to end by accredited specialists."
        priority
      />
      <Section>
        <SectionHeading eyebrow="Overview" title="Everything you need in one place" intro="Each service is delivered as a standalone instruction or as part of a managed portfolio programme." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.to} delay={index * 50}>
              <div className="h-full border border-border p-7 transition-colors hover:border-primary">
                <Link to={service.to as never} className="heading flex items-center gap-2 text-base hover:text-primary">
                  {service.title} <ArrowRight className="h-4 w-4 text-primary" />
                </Link>
                {service.children ? (
                  <ul className="mt-4 space-y-2">
                    {service.children.map((child) => (
                      <li key={child.to}>
                        <Link to={child.to as never} className="text-sm text-muted-foreground hover:text-primary">
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
