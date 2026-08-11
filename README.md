# Karntek Safety Hub

Lovable Build Prompt — Karntek Website

Copy everything below the line into Lovable as your build prompt.

Build a modern, professional multi-page marketing website for Karntek, a Fire & Building Safety consultancy that works with residential property managers in the UK. The site should feel authoritative, trustworthy, and safety-focused — not corporate-generic. Use a clean, confident layout with strong typography and generous whitespace.

Brand identity

Colours:

Primary green: #8DC63F

Secondary grey: #6D6E71

Use black-and-white / desaturated photography as the dominant visual style, with the green used sparingly as an accent (buttons, links, highlights, icons) — avoid making the homepage feel dominated by green.

Typography:

Use a font as close to Calibri as possible (or a clean, modern sans-serif like Inter or Source Sans Pro as a substitute) — bold weight throughout body and headings.

All headings and titles in UPPERCASE.

Imagery style: black-and-white architectural/building photography as hero backgrounds, with a dark transparent overlay/banner so white text is legible on top.

Site structure

Build the following pages/routes:

/ — Homepage (fully detailed — see below)

/about — About Us

/about/timeline — Company Timeline

/about/careers — Career Opportunities

/about/team — Meet the Team

/services — Services overview (list linking to all service pages)

/services/building-safety — Building Safety (parent page, links to 6 sub-pages below)

/services/building-safety/building-safety-cases

/services/building-safety/fraew

/services/building-safety/structural-risk-assessments

/services/building-safety/retrospective-fire-strategies

/services/building-safety/resident-engagement-strategies

/services/building-safety/high-rise-building-registration

/services/fire-risk-assessments

/services/fire-safety-plans

/services/rpeeps

/services/wayfinding-signage

/services/fire-compartmentation-surveys

/services/fire-door-inspections

/services/fire-door-inspections/resident-liaison

/services/measured-building-height-surveys

/services/project-management

/sectors — Sectors overview (list linking to sector pages; use placeholder sectors like Residential, Education, Commercial, Local Authority)

/sectors/[sector] — Sector template page (build one live example, e.g. Residential)

/case-studies — Case Studies / Testimonials

/resources — Resources (CPD training sessions, past speeches, useful links)

/industry-updates — Blog / Industry Updates listing page

/blindspot-calculator — Interactive calculator (see below)

/book-cpd-session — Booking form

/contact — Contact page with general enquiry form

Use a sticky top navigation with a mega-menu or dropdown for Services (nested, matching structure above) and a simpler dropdown for About and Sectors. Include a footer with sitemap links, contact details, accreditation logos placeholder, and social links.

Homepage — detailed spec

Build the homepage with these sections in order:

Hero: Full-width black-and-white background photo of a residential building, dark transparent overlay banner on top. Large uppercase headline: "YOU'RE IN SAFE HANDS". Subheading: "We are a trusted partner in Fire & Building Safety for residential property managers." Primary CTA button ("Get in Touch" or "Request a Consultation") in the brand green.

Stats bar: Four large animated/counter-style stats in a horizontal row: "£10 MILLION PI INSURANCE", "10,000 SITES WORKED ON", "500 CLIENTS", "10 YEARS IN THE SECTOR". Grey or white background, green accent numbers.

About Us teaser: Short paragraph introducing Karntek, with a "Learn More" link to /about.

Why Choose Us: 3–4 column layout with icons, each highlighting a USP: "No Conflict of Interest", "Fully Accredited & Insured", "Expert Team", "Nationwide Coverage" (use placeholder icons).

Testimonials: Carousel/slider of 3–4 client testimonial cards with quote, name, and company.

Sectors We Work In: Grid of sector cards (icon or image + name) linking to /sectors/[sector] — include Residential, Education, Commercial, Local Authority as placeholders.

Our Services: Grid of service category cards (Building Safety, Fire Risk Assessments, Fire Safety Plans, etc.) linking to their respective service pages.

Client logo slider: Horizontal auto-scrolling strip of placeholder client logos.

Accreditations slider: Similar horizontal strip for accreditation/certification badges (placeholder icons).

Closing CTA banner: Full-width green or dark banner with a strong closing message and a "Contact Us" button.

Service page template (apply to all service pages)

Each service page should include, in order:

Hero: black-and-white background photo + transparent banner with the service name and a one-sentence description of the service.

"What This Service Is" — descriptive section.

"Why You Need It" — explains the risk/compliance case.

"Why Use Us" — Karntek's differentiators (accreditation, quote process, presentations).

Key stats relevant to the service (placeholder numbers).

CTA banner.

FAQs (accordion component, 4–5 placeholder Q&As).

Sector page template (apply to all sector pages)

Each sector page should include, in order:

Hero: black-and-white background photo + transparent banner with sector name and one-sentence description.

"Recent Changes in This Sector."

"Hot Topics" relevant to that sector (e.g. FRAEWs for residential, Fire Compartmentation Surveys for schools).

"Our Experience in This Sector."

CTA banner.

Testimonials specific to that sector.

Client logo banner.

"Why Use Us" section.

Key stats.

CTA banner.

FAQs.

About Us page

"Where we are, what we do" intro section.

Interactive horizontal timeline component showing Karntek's company history/milestones (visual style: clean line/dot timeline with year markers and short descriptions — similar in spirit to a professional consulting-firm timeline, not literal copy of any existing site).

Link to Meet the Team page (photo grid with name + title under each).

Company values section (icon + short description grid, 3–4 values).

Blindspot Calculator page

Build an interactive multi-step calculator/quiz tool: a short series of yes/no or multiple-choice questions about a building's fire/building safety compliance (e.g. "Does the building have a current Fire Risk Assessment?", "Is there a Building Safety Case in place?", "Has an FRAEW been conducted?"). At the end, show a results summary highlighting potential "blindspots" (gaps in compliance) with a CTA to book a consultation. Use a progress bar and clean card-based UI.

Forms

AI chatbot: Add a floating chat widget (bottom-right) with a placeholder greeting message — doesn't need real AI logic, just the UI shell.

Book a CPD Session form: name, email, company, phone, preferred date, message.

General contact form: name, email, phone, company, message, service interested in (dropdown).

Blindspot calculator: as above.

Resources & Industry Updates pages

Resources: card grid listing CPD training sessions, past speeches, and useful external links — each card with title, short description, and link/download placeholder.

Industry Updates: blog-style listing page with card grid (image, title, excerpt, date) linking to individual post template pages.

General requirements

Fully responsive (mobile, tablet, desktop).

Smooth scroll and subtle fade/slide-in animations on scroll for section reveals.

Consistent header/footer across all pages.

Use placeholder stock-style black-and-white building photography throughout (to be replaced with real Karntek imagery later).

Use placeholder logo text "KARNTEK" in the header if no logo file is provided.

Keep the codebase clean and componentized so individual sections (hero, stats bar, CTA banner, testimonial card, service template) are reusable across pages.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9f35b39e-430e-49cf-ba6b-f0ab7580f941).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
