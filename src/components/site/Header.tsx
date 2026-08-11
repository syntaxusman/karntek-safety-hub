import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { aboutLinks, sectors, services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const linkBase =
  "heading text-xs tracking-[0.15em] text-foreground transition-colors hover:text-primary";

function MegaMenu() {
  return (
    <div className="invisible absolute top-full left-0 w-screen max-w-5xl -translate-x-8 border border-border bg-card p-8 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <Link
            to="/services/building-safety"
            className="heading text-xs tracking-[0.2em] text-primary"
          >
            Building Safety
          </Link>
          <ul className="mt-4 space-y-2">
            {services[0]?.children?.map((child) => (
              <li key={child.to}>
                <Link
                  to={child.to as never}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {child.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2">
          <p className="heading text-xs tracking-[0.2em] text-primary">All Services</p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {services.slice(1).map((service) => (
              <li key={service.to}>
                <Link
                  to={service.to as never}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {service.title}
                </Link>
                {service.children ? (
                  <ul className="mt-1 ml-3 space-y-1">
                    {service.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to as never}
                          className="text-xs text-muted-foreground hover:text-primary"
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Dropdown({ items }: { items: { title: string; to: string }[] }) {
  return (
    <div className="invisible absolute top-full left-0 w-64 border border-border bg-card p-4 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to as never}
              className="text-sm text-muted-foreground hover:text-primary"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  const mobileLinks = [
    { title: "Home", to: "/" },
    ...aboutLinks,
    { title: "Services", to: "/services" },
    ...services,
    { title: "Sectors", to: "/sectors" },
    ...sectors.map((s) => ({ title: s.title, to: `/sectors/${s.slug}` })),
    { title: "Case Studies", to: "/case-studies" },
    { title: "Resources", to: "/resources" },
    { title: "Industry Updates", to: "/industry-updates" },
    { title: "Blindspot Calculator", to: "/blindspot-calculator" },
    { title: "Book a CPD Session", to: "/book-cpd-session" },
    { title: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="block">
          <img src="/logo.png" alt="Karntek Complete Compliance" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <div className="group relative">
            <Link to="/about" className={cn(linkBase, "flex items-center gap-1")}>
              About <ChevronDown className="h-3 w-3" />
            </Link>
            <Dropdown items={aboutLinks} />
          </div>
          <div className="group relative">
            <Link to="/services" className={cn(linkBase, "flex items-center gap-1")}>
              Services <ChevronDown className="h-3 w-3" />
            </Link>
            <MegaMenu />
          </div>
          <div className="group relative">
            <Link to="/sectors" className={cn(linkBase, "flex items-center gap-1")}>
              Sectors <ChevronDown className="h-3 w-3" />
            </Link>
            <Dropdown items={sectors.map((s) => ({ title: s.title, to: `/sectors/${s.slug}` }))} />
          </div>
          <Link to="/case-studies" className={linkBase}>
            Case Studies
          </Link>
          <Link to="/resources" className={linkBase}>
            Resources
          </Link>
          <Link to="/industry-updates" className={linkBase}>
            Insights
          </Link>
          <Link to="/blindspot-calculator" className={linkBase}>
            Blindspot Tool
          </Link>
          <Link
            to="/contact"
            className="heading bg-primary px-5 py-3 text-xs tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="max-h-[75vh] overflow-y-auto border-t border-border bg-background px-6 py-4 lg:hidden">
          <ul className="space-y-3">
            {mobileLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to as never}
                  onClick={() => setOpen(false)}
                  className="heading block text-xs tracking-[0.15em] text-muted-foreground hover:text-primary"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
