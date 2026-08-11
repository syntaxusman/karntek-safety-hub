import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/templates/ServicePage";

const title = "FRAEW";
const strapline = "A Fire Risk Appraisal of External Walls carried out to PAS 9980 by accredited assessors.";

export const Route = createFileRoute("/services/building-safety/fraew")({
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
        "Placeholder overview: A Fire Risk Appraisal of External Walls carried out to PAS 9980 by accredited assessors.",
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
