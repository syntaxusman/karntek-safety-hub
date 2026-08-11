import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  company: z.string().trim().min(1, "Please enter your company").max(120),
  phone: z.string().trim().max(30).optional(),
  date: z.string().trim().max(20).optional(),
  message: z.string().trim().max(1000).optional(),
});

const fieldClass =
  "h-12 w-full border border-input bg-background px-4 text-sm outline-none focus:border-primary";

export function CpdForm() {
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
    toast.success("Thanks — we'll confirm your CPD session shortly.");
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
          <span className="heading text-xs tracking-[0.15em]">Company*</span>
          <input name="company" maxLength={120} className={`mt-2 ${fieldClass}`} />
          {errors["company"] ? <span className="mt-1 block text-xs text-destructive">{errors["company"]}</span> : null}
        </label>
        <label className="block">
          <span className="heading text-xs tracking-[0.15em]">Phone</span>
          <input name="phone" maxLength={30} className={`mt-2 ${fieldClass}`} />
        </label>
        <label className="block sm:col-span-2">
          <span className="heading text-xs tracking-[0.15em]">Preferred Date</span>
          <input name="date" type="date" className={`mt-2 ${fieldClass}`} />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="heading text-xs tracking-[0.15em]">Message</span>
        <textarea name="message" rows={5} maxLength={1000} className="mt-2 w-full border border-input bg-background p-4 text-sm outline-none focus:border-primary" />
      </label>
      <button type="submit" className="heading mt-6 w-full bg-primary px-8 py-4 text-sm text-primary-foreground transition-colors hover:bg-primary/85 sm:w-auto">
        Request Session
      </button>
    </form>
  );
}