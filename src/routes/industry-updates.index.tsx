import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, Section, SectionHeading } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import { posts } from "@/lib/posts";
import heroSector from "@/assets/hero-sector.jpg";

const description = "Fire and building safety news, regulation updates and practical guidance from the Karntek team.";

export const Route = createFileRoute("/industry-updates/")({
  head: () => ({
    meta: [
      { title: "Industry Updates | Karntek" },
      { name: "description", content: description },
      { property: "og:title", content: "Industry Updates | Karntek" },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Hero eyebrow="Insights" title="INDUSTRY UPDATES" subtitle="Regulation, guidance and practical commentary for residential property professionals." image={heroSector} priority />
      <Section>
        <SectionHeading eyebrow="Latest" title="From the Karntek team" />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 60}>
              <article className="flex h-full flex-col border border-border">
                <img src={heroSector} alt="" aria-hidden="true" loading="lazy" className="h-44 w-full object-cover grayscale" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {post.date}
                  </p>
                  <h3 className="heading mt-3 text-base">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                  <Link to="/industry-updates/$slug" params={{ slug: post.slug }} className="heading mt-6 inline-flex items-center gap-2 text-xs text-primary hover:gap-3">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
