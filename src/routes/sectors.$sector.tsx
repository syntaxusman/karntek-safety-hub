import { createFileRoute, notFound } from "@tanstack/react-router";
import { SectorPage } from "@/components/templates/SectorPage";
import { sectors } from "@/lib/site-data";

const content: Record<string, { recentChanges: string[]; hotTopics: { title: string; text: string }[]; experience: string[] }> = {
  residential: {
    recentChanges: [
      "The Building Safety Act has redistributed duties across accountable persons, with registration and safety case obligations now firmly enforced.",
      "PAS 9980 has become the reference point for appraising external wall construction on mid- and high-rise blocks.",
      "Fire Safety (England) Regulations 2022 introduced ongoing duties around doors, wayfinding signage and information sharing.",
    ],
    hotTopics: [
      { title: "FRAEWs", text: "External wall appraisals remain the single biggest driver of remediation decisions and funding applications." },
      { title: "RPEEPs", text: "Person-centred evacuation planning is now an expectation, not an optional extra." },
      { title: "Resident Engagement", text: "Demonstrating a working engagement strategy is central to a credible safety case." },
    ],
    experience: [
      "Placeholder: we support managing agents, freeholders and RMCs across thousands of residential blocks, from converted period buildings to 30-storey towers.",
      "Our residential team delivers consistent, portfolio-wide reporting that boards, insurers and lenders accept without rework.",
    ],
  },
  education: {
    recentChanges: [
      "Updated Building Bulletin guidance has tightened expectations around fire strategy documentation in schools and colleges.",
      "Estate condition funding increasingly requires evidenced compartmentation and fire door surveys.",
      "Multi-academy trusts are consolidating compliance reporting across estates.",
    ],
    hotTopics: [
      { title: "Compartmentation Surveys", text: "Concealed voids in older school buildings are a persistent source of undetected breaches." },
      { title: "Fire Door Inspections", text: "High-traffic doors degrade quickly and need a realistic inspection cycle." },
      { title: "Evacuation Planning", text: "Planning for pupils and staff with additional needs across large sites." },
    ],
    experience: [
      "Placeholder: we work with trusts, local authorities and independent schools to keep estates compliant around term-time constraints.",
      "Surveys are programmed to minimise disruption, with out-of-hours attendance where needed.",
    ],
  },
  commercial: {
    recentChanges: [
      "Insurers are applying closer scrutiny to fire strategy documentation at renewal.",
      "Mixed-use buildings face overlapping residential and commercial duties that are easily missed.",
      "Net-zero retrofit programmes are introducing new material and detailing risks.",
    ],
    hotTopics: [
      { title: "Mixed-Use Interfaces", text: "Where commercial and residential uses meet, responsibility often falls between parties." },
      { title: "Fire Strategies", text: "Retrospective strategies for buildings with incomplete design information." },
      { title: "Project Management", text: "Independent oversight of remediation across occupied commercial assets." },
    ],
    experience: [
      "Placeholder: we advise landlords, occupiers and asset managers on commercial and mixed-use portfolios nationwide.",
      "Our reporting is structured for asset-level decision making and investment committee review.",
    ],
  },
  "local-authority": {
    recentChanges: [
      "Regulator scrutiny of social landlords has increased alongside consumer standards reform.",
      "Housing stock condition data requirements now include fire safety evidence.",
      "Procurement frameworks are prioritising independent, conflict-free advisers.",
    ],
    hotTopics: [
      { title: "Portfolio Programmes", text: "Delivering thousands of assessments to a consistent, auditable standard." },
      { title: "Resident Access", text: "Liaison support to reach hard-to-access dwellings and keep programmes on schedule." },
      { title: "Data & Reporting", text: "Structured outputs that feed directly into asset management systems." },
    ],
    experience: [
      "Placeholder: we deliver large-scale programmes for councils and ALMOs, including access-constrained tenanted stock.",
      "Programme managers provide weekly progress reporting and single-point accountability.",
    ],
  },
};

export const Route = createFileRoute("/sectors/$sector")({
  loader: ({ params }) => {
    const sector = sectors.find((item) => item.slug === params.sector);
    if (!sector || !content[params.sector]) throw notFound();
    return { title: sector.title };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Sector not found | Karntek" }, { name: "robots", content: "noindex" }] };
    }
    const description = `Fire and building safety consultancy for the ${loaderData.title.toLowerCase()} sector.`;
    return {
      meta: [
        { title: `${loaderData.title} Sector | Karntek` },
        { name: "description", content: description },
        { property: "og:title", content: `${loaderData.title} Sector | Karntek` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: Page,
});

function Page() {
  const { sector } = Route.useParams();
  const { title } = Route.useLoaderData();
  const data = content[sector]!;

  return (
    <SectorPage
      title={title.toUpperCase()}
      strapline={`Fire and building safety consultancy tailored to the ${title.toLowerCase()} sector.`}
      recentChanges={data.recentChanges}
      hotTopics={data.hotTopics}
      experience={data.experience}
    />
  );
}
