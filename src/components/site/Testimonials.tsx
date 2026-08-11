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
    <Carousel opts={{ align: "start", loop: true }} className="mt-16">
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.name} className="md:basis-1/2">
            <figure className="flex h-full flex-col border-t border-border pt-8 pr-6">
              <span className="mb-8 block h-px w-8 bg-primary" aria-hidden="true" />
              <blockquote className="display-serif flex-1 text-2xl leading-[1.5] md:text-[1.7rem]">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-10">
                <span className="heading block text-[0.7rem] tracking-[0.25em]">{item.name}</span>
                <span className="mt-2 block text-sm text-muted-foreground">{item.company}</span>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-12 flex gap-3">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  );
}