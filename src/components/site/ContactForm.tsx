import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { services } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional(),
  company: z.string().trim().max(120).optional(),
  service: z.string().trim().min(1, "Please choose a service").max(120),
  message: z.string().trim().min(1, "Please add a message").max(1000),
});

const fieldClass =
  "h-12 w-full border border-input bg-background px-4 text-sm outline-none focus:border-primary";

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    toast.success("Thanks — your enquiry has been received. We'll be in touch within one working day.");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-border bg-card p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="heading text-xs tracking-[0.15em]">Name*</span>
          <input name="name" maxLength={100} className={`mt-2 ${fieldClass}`} />
          {errors["name"] ? <span className="mt-1 block text-xs text-destructive">{errors["name"]}</span> : null}
        </label>
        <label className="block">
          <span className="heading text-xs tracking-[0.15em]">Email*</span>
          <input name="email" type="email" maxLength={255} className={`mt-2 ${fieldClass}`} />
          {errors["email"] ? <span className="mt-1 block text-xs text-destructive">{errors["email"]}</span> : null}
        </label>
        <label className="block">
          <span className="heading text-xs tracking-[0.15em]">Phone</span>
          <input name="phone" maxLength={30} className={`mt-2 ${fieldClass}`} />
        </label>
        <label className="block">
          <span className="heading text-xs tracking-[0.15em]">Company</span>
          <input name="company" maxLength={120} className={`mt-2 ${fieldClass}`} />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="heading text-xs tracking-[0.15em]">Service Interested In*</span>
        <select name="service" defaultValue="" className={`mt-2 ${fieldClass}`}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.to} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Other">Other / Not sure</option>
        </select>
        {errors["service"] ? <span className="mt-1 block text-xs text-destructive">{errors["service"]}</span> : null}
      </label>
      <label className="mt-5 block">
        <span className="heading text-xs tracking-[0.15em]">Message*</span>
        <textarea name="message" rows={5} maxLength={1000} className="mt-2 w-full border border-input bg-background p-4 text-sm outline-none focus:border-primary" />
        {errors["message"] ? <span className="mt-1 block text-xs text-destructive">{errors["message"]}</span> : null}
      </label>
      <button type="submit" className="heading mt-6 w-full bg-primary px-8 py-4 text-sm text-primary-foreground transition-colors hover:bg-primary/85 sm:w-auto">
        Send Enquiry
      </button>
    </form>
  );
}