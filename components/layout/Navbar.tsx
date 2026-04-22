"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = isScrolled
    ? "bg-white shadow-[0_1px_6px_rgba(0,0,0,0.08)]"
    : "bg-transparent";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${navbarClasses}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 md:px-16 lg:px-24">
        <div className="flex items-center justify-between">
          <Link href="/" className="leading-tight">
            <div className="font-display text-xl font-bold text-charcoal">
              Visionary Finsultants
            </div>
            <div className="font-body text-xs text-gold">
              A Road Map To All Your Financial Goals
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`border-b-2 pb-1 font-body text-sm text-charcoal transition-colors hover:text-gold ${
                      isActive
                        ? "border-gold"
                        : "border-transparent hover:border-gold/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              className="rounded bg-gold px-4 py-2 font-body text-sm font-medium text-white transition hover:bg-gold-muted"
            >
              Get in Touch
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-charcoal md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="w-full border-t border-black/5 bg-white px-6 pb-4 md:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 font-body text-sm text-charcoal transition-colors hover:text-gold ${
                  pathname === link.href ? "text-gold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
