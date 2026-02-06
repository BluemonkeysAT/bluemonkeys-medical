"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Websites", href: "#" },
    { label: "SEO", href: "#" },
    { label: "Google Ads", href: "#" },
    { label: "Branding", href: "#" },
    { label: "KI-Assistenten", href: "#" },
  ],
  company: [
    { label: "Über uns", href: "#about" },
    { label: "Case Studies", href: "#cases" },
    { label: "Kontakt", href: "#contact" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "AGB", href: "/agb" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-bm-dark border-t border-bm-border">
      <div className="container px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bm-blue to-bm-purple flex items-center justify-center">
                <span className="text-white font-bold text-lg">BM</span>
              </div>
              <div>
                <span className="font-semibold text-white">Blue Monkeys</span>
                <span className="text-bm-blue font-medium ml-1">Medical</span>
              </div>
            </div>
            <p className="text-bm-gray-400 text-sm mb-6 max-w-xs">
              Full-Service Digital-Agentur für Arztpraxen und Zahnarztpraxen.
              Mehr Patienten. Bessere Patienten.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/bluemonkeys"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-bm-card border border-bm-border flex items-center justify-center hover:border-bm-blue hover:text-bm-blue transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/bluemonkeys.at"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-bm-card border border-bm-border flex items-center justify-center hover:border-bm-blue hover:text-bm-blue transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Leistungen</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-bm-gray-400 hover:text-bm-blue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Unternehmen</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-bm-gray-400 hover:text-bm-blue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-white mb-4 mt-8">Rechtliches</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-bm-gray-400 hover:text-bm-blue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:medical@bluemonkeys.at" className="flex items-center gap-3 text-sm text-bm-gray-400 hover:text-bm-blue transition-colors">
                  <Mail className="w-4 h-4 text-bm-blue" />
                  medical@bluemonkeys.at
                </a>
              </li>
              <li>
                <a href="tel:+4315555555" className="flex items-center gap-3 text-sm text-bm-gray-400 hover:text-bm-blue transition-colors">
                  <Phone className="w-4 h-4 text-bm-blue" />
                  +43 1 555 55 55
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-bm-gray-400">
                <MapPin className="w-4 h-4 text-bm-blue shrink-0 mt-0.5" />
                <span>Musterstraße 1<br />1010 Wien, Österreich</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-bm-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-bm-gray-500">
            © {new Date().getFullYear()} Blue Monkeys. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-bm-gray-500 flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> in Vienna
          </p>
        </div>
      </div>
    </footer>
  );
}
