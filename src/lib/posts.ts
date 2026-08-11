export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

const filler = [
  "Placeholder article content. This section will carry Karntek's commentary on what the change means in practice for managing agents and freeholders.",
  "We set out the practical steps duty holders should take now, the evidence they should be gathering, and the common pitfalls we see on site.",
  "If you would like this reviewed against your own portfolio, our team can carry out a short gap analysis and set out a prioritised action plan.",
];

export const posts: Post[] = [
  {
    slug: "pas-9980-what-changed",
    title: "PAS 9980: What Has Actually Changed On Site",
    date: "12 May 2026",
    excerpt: "How external wall appraisals are being interpreted two years on, and what assessors now expect to see.",
    body: filler,
  },
  {
    slug: "safety-case-common-gaps",
    title: "The Five Most Common Safety Case Gaps",
    date: "28 April 2026",
    excerpt: "Recurring weaknesses we find when reviewing safety case reports for higher-risk buildings.",
    body: filler,
  },
  {
    slug: "fire-door-inspection-frequencies",
    title: "Fire Door Inspection Frequencies Explained",
    date: "3 April 2026",
    excerpt: "Quarterly, annual, and everything in between — what the regulations actually require.",
    body: filler,
  },
  {
    slug: "rpeeps-getting-started",
    title: "RPEEPs: Getting Started Without Overwhelming Your Team",
    date: "19 March 2026",
    excerpt: "A pragmatic route to person-centred evacuation planning across a residential portfolio.",
    body: filler,
  },
  {
    slug: "resident-engagement-that-works",
    title: "Resident Engagement Strategies That Actually Work",
    date: "2 March 2026",
    excerpt: "Moving beyond a newsletter: building engagement your regulator and residents both accept.",
    body: filler,
  },
  {
    slug: "measuring-building-height",
    title: "Why Building Height Measurement Keeps Catching People Out",
    date: "14 February 2026",
    excerpt: "Small measurement differences decide which regime a building falls under. Here's how to get it right.",
    body: filler,
  },
];