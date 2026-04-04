"use client";

import { useState } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const whatsappUrl = getWhatsAppUrl("quotation");

  return (
    <header
      className="sticky top-0 z-50 bg-primary/60 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5"
      style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}
    >
      <nav className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0"
        >
          <Image 
            src="/logo.png" 
            alt="SivaxTech Logo" 
            width={180} 
            height={48} 
            className="w-auto h-8 md:h-9 object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-muted hover:text-white text-sm font-medium px-3.5 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button href={whatsappUrl} size="sm">
            Get Quotation
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text-muted hover:text-white transition-colors p-1"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden bg-primary/95 backdrop-blur-xl px-6 pb-6 pt-2"
          style={{ borderTop: "1px solid rgba(51, 65, 85, 0.5)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-text-muted hover:text-white text-sm font-medium py-3 transition-colors"
              style={{ borderBottom: "1px solid rgba(51, 65, 85, 0.3)" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4">
              <Button href={whatsappUrl} size="md" className="w-full mt-4">
                Get Quotation
              </Button>
          </div>
        </div>
      )}
    </header>
  );
}
