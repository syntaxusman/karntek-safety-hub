export type NavChild = { title: string; to: string; children?: NavChild[] };

export const buildingSafetyChildren: NavChild[] = [
  { title: "Building Safety Cases", to: "/services/building-safety/building-safety-cases" },
  { title: "FRAEW", to: "/services/building-safety/fraew" },
  {
    title: "Structural Risk Assessments",
    to: "/services/building-safety/structural-risk-assessments",
  },
  {
    title: "Retrospective Fire Strategies",
    to: "/services/building-safety/retrospective-fire-strategies",
  },
  {
    title: "Resident Engagement Strategies",
    to: "/services/building-safety/resident-engagement-strategies",
  },
  {
    title: "High-Rise Building Registration",
    to: "/services/building-safety/high-rise-building-registration",
  },
];

export const services: NavChild[] = [
  { title: "Building Safety", to: "/services/building-safety", children: buildingSafetyChildren },
  { title: "Fire Risk Assessments", to: "/services/fire-risk-assessments" },
  { title: "Fire Safety Plans", to: "/services/fire-safety-plans" },
  { title: "RPEEPs", to: "/services/rpeeps" },
  { title: "Wayfinding Signage", to: "/services/wayfinding-signage" },
  { title: "Fire Compartmentation Surveys", to: "/services/fire-compartmentation-surveys" },
  {
    title: "Fire Door Inspections",
    to: "/services/fire-door-inspections",
    children: [
      { title: "Resident Liaison", to: "/services/fire-door-inspections/resident-liaison" },
    ],
  },
  { title: "Measured Building Height Surveys", to: "/services/measured-building-height-surveys" },
  { title: "Project Management", to: "/services/project-management" },
];

export const sectors = [
  { title: "Residential", slug: "residential" },
  { title: "Education", slug: "education" },
  { title: "Commercial", slug: "commercial" },
  { title: "Local Authority", slug: "local-authority" },
];

export const aboutLinks: NavChild[] = [
  { title: "About Us", to: "/about" },
  { title: "Company Timeline", to: "/about/timeline" },
  { title: "Meet the Team", to: "/about/team" },
  { title: "Career Opportunities", to: "/about/careers" },
];

export const testimonials = [
  {
    quote:
      "Karntek gave us a clear, prioritised plan across 40 blocks. Their reports are the only ones our board reads cover to cover.",
    name: "Sarah Whitfield",
    company: "Head of Compliance, Meridian Property Group",
  },
  {
    quote:
      "Genuinely independent advice. No upsell to remedial works, just an honest assessment of the risk and what to do next.",
    name: "David Okafor",
    company: "Director, Halstead Block Management",
  },
  {
    quote:
      "Their resident engagement work turned a hostile consultation into a constructive one. Invaluable on a high-rise portfolio.",
    name: "Priya Raman",
    company: "Asset Manager, Northgate Housing",
  },
  {
    quote:
      "Fast turnaround on FRAEWs without cutting corners. We now use Karntek as our default building safety partner.",
    name: "Tom Ellery",
    company: "Operations Lead, Castlefield Estates",
  },
];

export const homeStats = [
  { value: 10, prefix: "£", suffix: " MILLION", label: "PI Insurance" },
  { value: 10000, suffix: "", label: "Sites Worked On" },
  { value: 500, suffix: "", label: "Clients" },
  { value: 10, suffix: "", label: "Years in the Sector" },
];

export const clientLogos = [
  "MERIDIAN",
  "HALSTEAD",
  "NORTHGATE",
  "CASTLEFIELD",
  "BRIDGEWELL",
  "ASHDOWN",
  "KINGSMERE",
  "LARKFIELD",
];

export const accreditations = [
  "IFE",
  "IFSM",
  "RICS",
  "CHAS",
  "SAFEcontractor",
  "ISO 9001",
  "ISO 14001",
  "BAFE",
];

export const defaultFaqs = [
  {
    q: "How quickly can you attend site?",
    a: "Placeholder: for most instructions we can attend within 5–10 working days, with an emergency response option for urgent risks.",
  },
  {
    q: "Are your consultants accredited?",
    a: "Placeholder: all consultants hold relevant professional accreditation and work to a documented competency framework.",
  },
  {
    q: "What does a typical report include?",
    a: "Placeholder: an executive summary, risk-rated findings, photographic evidence, prioritised actions and indicative timescales.",
  },
  {
    q: "Do you carry out the remedial works you recommend?",
    a: "Placeholder: no. We are entirely independent, which removes any conflict of interest from our recommendations.",
  },
  {
    q: "How is pricing structured?",
    a: "Placeholder: fixed-fee quotations per building or portfolio, issued after a short scoping call.",
  },
];