import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Our Team", href: "/team" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-bold text-gold">
              Visionary Finsultants
            </h3>
            <p className="mt-1 font-body text-xs text-gray-400">
              A Road Map To All Your Financial Goals
            </p>
            <p className="mt-3 font-body text-xs text-gray-500">
              Established in 2018 · Thane, Maharashtra
            </p>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
              Quick Links
            </h4>
            <nav className="mt-4 flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-gray-400 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-widest text-gold">
              Contact Us
            </h4>
            <div className="mt-4 flex flex-col gap-3 font-body text-sm text-gray-400">
              <a
                href="tel:+919870249018"
                className="flex items-start gap-2 transition-colors hover:text-gold"
              >
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>Rupali — 9870 249 018</span>
              </a>
              <a
                href="tel:+919930949018"
                className="flex items-start gap-2 transition-colors hover:text-gold"
              >
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>Mohil — 9930 949 018</span>
              </a>
              <a
                href="mailto:visionaryfinsultants@gmail.com"
                className="flex items-start gap-2 transition-colors hover:text-gold"
              >
                <Mail size={16} className="mt-0.5 shrink-0" />
                <span>visionaryfinsultants@gmail.com</span>
              </a>
              <a
                href="https://www.visionaryfinsultants.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 transition-colors hover:text-gold"
              >
                <Globe size={16} className="mt-0.5 shrink-0" />
                <span>www.visionaryfinsultants.in</span>
              </a>
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  Office No G67, Ground Floor, Wonder Mall, Kapurbawdi,
                  Ghodbunder Road, Thane West – 400607
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
          <p className="font-body text-xs text-gray-600">
            © 2026 Visionary Finsultants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
