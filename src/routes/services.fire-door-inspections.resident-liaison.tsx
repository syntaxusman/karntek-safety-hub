import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/templates/ServicePage";

const title = "RESIDENT LIAISON";
const strapline = "Dedicated liaison support to secure access to private dwellings and keep inspection programmes on track.";

export const Route = createFileRoute("/services/fire-door-inspections/resident-liaison")({
  head: () => ({
    meta: [
      { title: `${title} | Karntek Fire & Building Safety` },
      { name: "description", content: strapline },
      { property: "og:title", content: `${title} | Karntek` },
      { property: "og:description", content: strapline },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      title={title}
      strapline={strapline}
      what={[
        "Placeholder overview: Dedicated liaison support to secure access to private dwellings and keep inspection programmes on track.",
        "Our consultants assess the building against current guidance and legislation, record the evidence, and set out a prioritised, costed route to compliance.",
        "Every instruction is delivered by an accredited consultant and quality-reviewed before issue.",
      ]}
      why={[
        "Duty holders must be able to evidence that risks are identified and actively managed.",
        "Insurers, lenders and regulators increasingly ask for documentation of this type before proceeding.",
        "Gaps in this area are one of the most common findings in enforcement activity.",
        "Residents expect transparency on how safety in their building is being managed.",
      ]}
    />
  );
}
