import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials as defaultTestimonials } from "@/lib/site-data";

export type Testimonial = { quote: string; name: string; company: string };

export function Testimonials({ items = defaultTestimonials }: { items?: Testimonial[] }) {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="mt-12">
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.name} className="md:basis-1/2">
            <figure className="flex h-full flex-col border border-border bg-card p-8">
              <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed">
                "{item.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <span className="heading block text-sm">{item.name}</span>
                <span className="block text-sm text-muted-foreground">{item.company}</span>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-8 flex gap-3">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  );
}