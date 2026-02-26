import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

const services = [
  { label: "Praxis-Websites", href: "#services" },
  { label: "SEO für Ärzte", href: "#services" },
  { label: "Google & Meta Ads", href: "#services" },
  { label: "KI-Implementierungen", href: "#services" },
  { label: "Praxis Branding", href: "#services" },
  { label: "Recruiting", href: "#services" },
];

const company = [
  { label: "Über uns", href: "#why" },
  { label: "Erfolgsgeschichten", href: "#cases" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#contact" },
];

const legal = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Cookie-Einstellungen", href: "#" },
];

export function FooterV2() {
  return (
    <footer className="bg-[#1c1d1f] text-white">
      {/* Top */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo_bm.svg" alt="Blue Monkeys" className="w-9 h-9 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-sm uppercase tracking-[0.05em]" style={RIFT}>
                  Blue Monkeys
                </span>
                <span className="text-[#6798df] font-bold text-sm uppercase tracking-[0.05em]" style={RIFT}>
                  Medical
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
              Andere machen Websites. Wir machen Ihre Praxis voll. Premium Digital-Marketing für Ärzte
              und Zahnärzte im DACH-Raum.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:medical@bluemonkeys.at"
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-[#6798df] transition-colors"
              >
                <Mail className="w-4 h-4" />
                medical@bluemonkeys.at
              </a>
              <a
                href="tel:+43123456789"
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-[#6798df] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +43 (0)1 234 567 89
              </a>
              <span className="flex items-center gap-2.5 text-sm text-white/50">
                <MapPin className="w-4 h-4 shrink-0" />
                Musterstraße 1, 1010 Wien, Austria
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.1em] mb-5" style={RIFT}>
              Leistungen
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-white/50 hover:text-[#6798df] text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.1em] mb-5" style={RIFT}>
              Unternehmen
            </h4>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-white/50 hover:text-[#6798df] text-sm transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.1em] mb-5" style={RIFT}>
              Jetzt starten
            </h4>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Kostenlose Praxis-Analyse — wir schauen uns gemeinsam Ihr Potenzial an.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#6798df] text-[#1c1d1f] font-bold text-sm uppercase tracking-[0.05em] hover:bg-white transition-colors"
              style={RIFT}
            >
              Analyse starten
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Blue Monkeys GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            {legal.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-white/30 hover:text-white/60 text-xs transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
