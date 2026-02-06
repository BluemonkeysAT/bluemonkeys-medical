"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Praxis-Websites", href: "#" },
    { label: "SEO", href: "#" },
    { label: "Google Ads", href: "#" },
    { label: "Branding", href: "#" },
    { label: "KI-Assistenten", href: "#" },
  ],
  company: [
    { label: "Über uns", href: "#about" },
    { label: "Referenzen", href: "#cases" },
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
    <footer className="bg-bm-black text-white py-16 md:py-24">
      <motion.div
        className="container-lg px-4 md:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-bm-blue rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">BM</span>
              </div>
              <div>
                <span className="font-bold">Blue Monkeys</span>
                <span className="text-bm-blue font-semibold ml-1">Medical</span>
              </div>
            </div>
            <p className="text-white/60 mb-6 max-w-sm">
              Full-Service Digital-Agentur für Arztpraxen und Zahnarztpraxen. 
              Mehr Patienten. Bessere Patienten.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/bluemonkeys"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-bm-blue transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/bluemonkeys.at"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-bm-blue transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold text-lg mb-4">Leistungen</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-bm-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold text-lg mb-4">Unternehmen</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-bm-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-bold text-lg mb-4 mt-8">Rechtliches</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-bm-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:medical@bluemonkeys.at"
                  className="flex items-center gap-3 text-white/60 hover:text-bm-blue transition-colors"
                >
                  <Mail className="w-5 h-5 text-bm-blue" />
                  medical@bluemonkeys.at
                </a>
              </li>
              <li>
                <a
                  href="tel:+4315555555"
                  className="flex items-center gap-3 text-white/60 hover:text-bm-blue transition-colors"
                >
                  <Phone className="w-5 h-5 text-bm-blue" />
                  +43 1 555 55 55
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-bm-blue shrink-0 mt-0.5" />
                <span>
                  Musterstraße 1<br />
                  1010 Wien, Österreich
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeUp}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Blue Monkeys. Alle Rechte vorbehalten.
          </p>
          <p className="text-white/40 text-sm">
            Made with 💙 in Vienna
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
