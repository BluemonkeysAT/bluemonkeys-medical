"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const services = [
  { label: "Websites", href: "#services" },
  { label: "SEO", href: "#services" },
  { label: "Google Ads", href: "#services" },
  { label: "Branding", href: "#services" },
  { label: "KI-Assistenten", href: "#services" },
];

const company = [
  { label: "Über uns", href: "#about" },
  { label: "Case Studies", href: "#cases" },
  { label: "Kontakt", href: "#contact" },
];

const legal = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#5fdafb] flex items-center justify-center">
                <span className="text-black font-bold text-lg">BM</span>
              </div>
              <div>
                <span className="font-bold text-white">Blue Monkeys</span>
                <span className="text-[#5fdafb] font-bold ml-1">Medical</span>
              </div>
            </div>
            <p className="text-[#888] text-sm mb-6 max-w-xs">
              Full-Service Digital-Agentur für Arztpraxen und Zahnarztpraxen. 
              Mehr Patienten. Bessere Patienten.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/bluemonkeys"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#333] flex items-center justify-center hover:border-[#5fdafb] hover:text-[#5fdafb] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/bluemonkeys.at"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#333] flex items-center justify-center hover:border-[#5fdafb] hover:text-[#5fdafb] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">
              Leistungen
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#888] hover:text-[#5fdafb] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">
              Unternehmen
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#888] hover:text-[#5fdafb] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="font-bold text-white mb-4 mt-8 uppercase text-sm tracking-wider">
              Rechtliches
            </h4>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#888] hover:text-[#5fdafb] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:medical@bluemonkeys.at"
                  className="flex items-center gap-3 text-sm text-[#888] hover:text-[#5fdafb] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#5fdafb]" />
                  medical@bluemonkeys.at
                </a>
              </li>
              <li>
                <a
                  href="tel:+4315555555"
                  className="flex items-center gap-3 text-sm text-[#888] hover:text-[#5fdafb] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#5fdafb]" />
                  +43 1 555 55 55
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#888]">
                <MapPin className="w-4 h-4 text-[#5fdafb] flex-shrink-0 mt-0.5" />
                <span>
                  Musterstraße 1<br />
                  1010 Wien, Österreich
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#666]">
            © {new Date().getFullYear()} Blue Monkeys. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-[#666]">
            Made with ❤️ in Vienna
          </p>
        </div>
      </div>
    </footer>
  );
}
