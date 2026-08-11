import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Section, SectionHeading } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import heroService from "@/assets/hero-service.jpg";

const description = "Contact Karntek for independent fire and building safety advice on your residential portfolio.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Karntek Fire & Building Safety" },
      { name: "description", content: description },
      { property: "og:title", content: "Contact Us | Karntek" },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Hero eyebrow="Contact" title="GET IN TOUCH" subtitle="Tell us about your buildings and we'll come back with a clear, fixed-fee proposal." image={heroService} priority />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading eyebrow="Talk to us" title="How to reach Karntek" intro="Our team responds to all enquiries within one working day." />
            <ul className="mt-8 space-y-5 text-muted-foreground">
              <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-primary" />Unit 4, Sample Business Park, London, EC1A 1BB</li>
              <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-primary" />0800 000 0000</li>
              <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-primary" />hello@karntek.co.uk</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
