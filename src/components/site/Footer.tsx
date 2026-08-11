import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { aboutLinks, accreditations, sectors, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-ink px-6 pt-16 pb-8 text-ink-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <img src="/logo.png" alt="Karntek Complete Compliance" className="h-10 w-auto" />
            <p className="mt-4 text-sm text-ink-foreground/70">
              Independent Fire &amp; Building Safety consultancy for UK residential property
              managers.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com"
                aria-label="LinkedIn"
                className="border border-ink-foreground/20 p-2 hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com"
                aria-label="X"
                className="border border-ink-foreground/20 p-2 hover:border-primary hover:text-primary"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="heading text-xs tracking-[0.2em] text-primary">Services</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
              {services.map((service) => (
                <li key={service.to}>
                  <Link to={service.to as never} className="hover:text-primary">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="heading text-xs tracking-[0.2em] text-primary">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
              {aboutLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to as never} className="hover:text-primary">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/case-studies" className="hover:text-primary">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-primary">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/industry-updates" className="hover:text-primary">
                  Industry Updates
                </Link>
              </li>
              <li>
                <Link to="/book-cpd-session" className="hover:text-primary">
                  Book a CPD Session
                </Link>
              </li>
            </ul>
            <p className="heading mt-6 text-xs tracking-[0.2em] text-primary">Sectors</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
              {sectors.map((sector) => (
                <li key={sector.slug}>
                  <Link
                    to="/sectors/$sector"
                    params={{ sector: sector.slug }}
                    className="hover:text-primary"
                  >
                    {sector.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="heading text-xs tracking-[0.2em] text-primary">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-ink-foreground/70">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                Unit 4, Sample Business Park, London, EC1A 1BB
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                0800 000 0000
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                hello@karntek.co.uk
              </li>
            </ul>
            <p className="heading mt-6 text-xs tracking-[0.2em] text-primary">Accreditations</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {accreditations.slice(0, 6).map((item) => (
                <div
                  key={item}
                  className="heading border border-ink-foreground/15 px-2 py-3 text-center text-[10px] tracking-[0.15em] text-ink-foreground/60"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-foreground/15 pt-6 text-xs text-ink-foreground/50 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Karntek Ltd. All rights reserved.</p>
          <p>Registered in England &amp; Wales. Placeholder company details.</p>
        </div>
      </div>
    </footer>
  );
}
