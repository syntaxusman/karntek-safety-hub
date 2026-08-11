import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/CtaBanner";
import { posts } from "@/lib/posts";
import heroSector from "@/assets/hero-sector.jpg";

export const Route = createFileRoute("/industry-updates/$slug")({
  loader: ({ params }) => {
    const post = posts.find((item) => item.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article unavailable | Karntek" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${loaderData.post.title} | Karntek` },
        { name: "description", content: loaderData.post.excerpt },
        { property: "og:title", content: loaderData.post.title },
        { property: "og:description", content: loaderData.post.excerpt },
      ],
    };
  },
  component: Page,
});

function Page() {
  const { post } = Route.useLoaderData();
  return (
    <>
      <Hero eyebrow="Industry Update" title={post.title.toUpperCase()} subtitle={post.excerpt} image={heroSector} priority />
      <Section>
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5 text-primary" /> {post.date}
        </p>
        <div className="mt-8 max-w-3xl space-y-5 text-muted-foreground">
          {post.body.map((paragraph: string) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link to="/industry-updates" className="heading mt-10 inline-flex items-center gap-2 text-xs text-primary hover:gap-3">
          <ArrowLeft className="h-4 w-4" /> All Industry Updates
        </Link>
      </Section>
      <CtaBanner />
    </>
  );
}
