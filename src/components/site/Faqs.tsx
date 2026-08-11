import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { defaultFaqs } from "@/lib/site-data";

export function Faqs({ items = defaultFaqs }: { items?: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="mt-10 border-t border-border">
      {items.map((item) => (
        <AccordionItem key={item.q} value={item.q}>
          <AccordionTrigger className="heading text-left text-sm md:text-base">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}