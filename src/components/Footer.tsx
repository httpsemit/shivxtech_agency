import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "Web Development", href: "/services" },
  { label: "E-Commerce", href: "/services" },
  { label: "Landing Pages", href: "/services" },
  { label: "SEO Optimization", href: "/services" },
  { label: "Website Redesign", href: "/services" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8 section-divider">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-1">
              <Image 
                src="/logo.png" 
                alt="SivaxTech Logo" 
                width={160} 
                height={40} 
                className="w-auto h-8 object-contain"
              />
            </Link>
            <p className="text-text-faint text-sm mt-3 leading-relaxed max-w-[260px]">
              We build fast, modern websites that help businesses grow online.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://instagram.com/shivxtech.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-faint hover:text-accent text-xs font-medium transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-text-faint hover:text-text-muted text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-text-faint hover:text-text-muted text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-text-faint">
              <li>
                <a
                  href="mailto:hello@shivxtech.com"
                  className="hover:text-text-muted transition-colors"
                >
                  hello@shivxtech.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917739262522"
                  className="hover:text-text-muted transition-colors"
                >
                  +91 77392 62522
                </a>
              </li>
              <li>Cloud-Based · India 🇮🇳</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2"
          style={{ borderTop: "1px solid rgba(51, 65, 85, 0.5)" }}
        >
          <p className="text-text-disabled text-xs">
            &copy; {new Date().getFullYear()} ShivxTech. All rights reserved.
          </p>
          <p className="text-text-disabled text-xs">
            Built with ♥ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
