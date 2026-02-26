"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe, Search, Megaphone, Bot, Palette, UserPlus,
  ArrowRight, TrendingUp, Users, Phone, Zap, Eye, CheckCircle2,
} from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

const services = [
  {
    id: "website", icon: Globe, tag: "Conversion",
    title: "Praxis-Websites", subtitle: "Die konvertieren",
    desc: "Maßgeschneiderte Websites, die aus Besuchern Patienten machen. Schnell, mobil, DSGVO-konform.",
    features: ["Conversion-optimiert", "Terminbuchung integriert", "DSGVO-konform"],
    result: "+89% mehr Anfragen", resultIcon: TrendingUp,
    span: "normal",
  },
  {
    id: "seo", icon: Search, tag: "⭐ Beliebt",
    title: "SEO für Ärzte", subtitle: "Platz 1 bei Google",
    desc: "Werden Sie gefunden, wenn Patienten suchen. Lokale SEO, Medical Content, Google Business.",
    features: ["Lokale SEO", "Medical Content", "Google Business"],
    result: "3× mehr Besucher", resultIcon: Users,
    span: "wide",
  },
  {
    id: "ads", icon: Megaphone, tag: "Schnell",
    title: "Google & Meta Ads", subtitle: "Sofort mehr Patienten",
    desc: "Bezahlte Werbung mit messbarem ROI. Google, Facebook, Instagram — nur für Ärzte optimiert.",
    features: ["Google Ads", "Meta Ads", "A/B Testing"],
    result: "4.2× ROAS", resultIcon: TrendingUp,
    span: "normal",
  },
  {
    id: "ki", icon: Bot, tag: "⭐ Beliebt",
    title: "KI-Implementierungen", subtitle: "Praxis der Zukunft",
    desc: "Von KI-Telefonassistenz bis zu intelligenter Automatisierung — wir bringen KI in Ihre Praxis, wo sie wirklich hilft.",
    features: ["KI-Telefonassistent", "Workflow-Automatisierung", "Praxissoftware-Integration"],
    result: "+35% mehr Effizienz", resultIcon: Phone,
    span: "tall",
  },
  {
    id: "branding", icon: Palette, tag: "Branding",
    title: "Praxis Branding", subtitle: "Der erste Eindruck",
    desc: "Vom Logo bis zur Visitenkarte. Konsistenter Auftritt, der Vertrauen schafft.",
    features: ["Logo Design", "Corporate Design", "Print & Digital"],
    result: "+40% Wiedererkennung", resultIcon: Zap,
    span: "normal",
  },
  {
    id: "recruiting", icon: UserPlus, tag: "Neu",
    title: "Recruiting", subtitle: "Top-Personal finden",
    desc: "Ärzte und medizinisches Fachpersonal gezielt rekrutieren — mit Employer Branding und digitalen Stellenausschreibungen, die wirken.",
    features: ["Arzt-Recruiting", "MFA & Assistenz", "Employer Branding"],
    result: "Planstellen schneller besetzen", resultIcon: Users,
    span: "normal",
  },
];

export function ServicesV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToContact = (serviceId: string) => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(new CustomEvent("selectService", { detail: serviceId }));
    }
  };

  return (
    <section ref={ref} id="services" className="bg-white py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center bg-[#e8f0fb] text-[#6798df] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.1em] mb-6"
            style={RIFT}
          >
            Unsere Leistungen
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="uppercase leading-[0.95] tracking-tight text-[#1c1d1f] mb-5"
            style={{ ...RIFT, fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            ALLES FÜR IHREN
            <br />
            <span className="text-[#6798df]">PRAXIS-ERFOLG</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#666] text-lg leading-relaxed max-w-sm">
            Von der Website bis zum KI-Assistenten — alles aus einer Hand,
            <strong className="text-[#1c1d1f] font-semibold"> speziell für Ärzte entwickelt</strong>.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#e5e5e5] border border-[#e5e5e5]">
          {services.map((s, i) => (
            <motion.button
              key={s.id}
              className={`group bg-white p-7 lg:p-8 text-left hover:bg-[#f8f8f8] transition-all duration-300 relative overflow-hidden cursor-pointer ${
                s.span === "wide" ? "md:col-span-2 lg:col-span-1" : ""
              } ${s.span === "tall" ? "md:row-span-2" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              onClick={() => scrollToContact(s.id)}
              whileTap={{ scale: 0.99 }}
            >
              {/* Blue top accent — reveals on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#6798df] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />


              {/* Icon */}
              <div className="w-11 h-11 bg-[#f0f0f0] group-hover:bg-[#6798df] flex items-center justify-center mb-5 transition-colors duration-300">
                <s.icon className="w-5 h-5 text-[#999] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3
                className="uppercase text-[#1c1d1f] font-bold leading-tight mb-1 text-lg"
                style={RIFT}
              >
                {s.title}
              </h3>
              <p className="text-[#6798df] text-xs font-semibold uppercase tracking-[0.05em] mb-3" style={RIFT}>
                {s.subtitle}
              </p>
              <p className="text-[#666] text-sm leading-relaxed mb-5">{s.desc}</p>

              {/* Features */}
              <ul className="flex flex-wrap gap-2 mb-5">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-1 text-[11px] font-medium text-[#555] bg-[#f5f5f5] px-2.5 py-1.5"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#6798df]" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Result */}
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-2 mb-5 text-xs font-bold">
                <s.resultIcon className="w-3.5 h-3.5" />
                {s.result}
              </div>

              {/* CTA row */}
              <div className="flex items-center justify-between pt-4 border-t border-[#f0f0f0]">
                <span className="text-xs text-[#bbb] font-medium">Preis auf Anfrage</span>
                <span className="flex items-center gap-1 text-xs font-bold text-[#1c1d1f] group-hover:text-[#6798df] transition-colors">
                  <Eye className="w-3.5 h-3.5" />
                  Mehr erfahren
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-[1px] bg-[#1c1d1f] p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <div>
            <h3
              className="uppercase text-white font-bold text-xl lg:text-2xl leading-tight mb-2"
              style={RIFT}
            >
              NICHT SICHER WAS SIE BRAUCHEN?
            </h3>
            <p className="text-white/50 text-sm max-w-lg">
              Wir analysieren Ihre Situation kostenlos und empfehlen genau das, was für Ihre
              Praxis am meisten Sinn macht.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-4 bg-[#6798df] text-[#1c1d1f] font-bold text-sm uppercase tracking-[0.05em] hover:bg-white transition-colors"
            style={RIFT}
          >
            Kostenlose Analyse
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
