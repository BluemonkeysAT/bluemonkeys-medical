"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  AlertTriangle, X, TrendingDown, Clock, UserX, Search,
  ArrowRight, CheckCircle2, MoveDownRight,
} from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

const problems = [
  {
    icon: Search,
    title: "Unsichtbar bei Google",
    pain: "Patienten suchen nach 'Zahnarzt Wien' — aber Sie tauchen nicht auf. Ihre Konkurrenz kassiert stattdessen.",
    cost: "~15 verlorene Patienten/Monat",
    costValue: "€4.500",
  },
  {
    icon: TrendingDown,
    title: "Veraltete Website",
    pain: "Ihre Website sieht aus wie 2015. Patienten klicken weg — direkt zur Konkurrenz, die moderner wirkt.",
    cost: "60% höhere Absprungrate",
    costValue: "€3.000",
  },
  {
    icon: Clock,
    title: "Keine Zeit für Marketing",
    pain: "Sie sind Arzt, kein Marketer. Ohne System verlieren Sie jeden Tag wertvolle Anfragen an die Konkurrenz.",
    cost: "Stagnation statt Wachstum",
    costValue: "€10.000+",
  },
  {
    icon: UserX,
    title: "Falsche Patienten",
    pain: "Kassenpatienten füllen den Kalender, während Privatpatienten mit höheren Margen zur Konkurrenz gehen.",
    cost: "Niedrigere Gewinnmargen",
    costValue: "€8.000",
  },
];

const withoutUs = [
  "Keine Sichtbarkeit bei Google",
  "Veraltete, unprofessionelle Website",
  "Keine Strategie, kein System",
  "Abhängigkeit von Empfehlungen",
  "Stagnation bei Patientenzahlen",
  "Konkurrenz überholt Sie täglich",
];

const withUs = [
  "Top 3 bei Google für Ihre Keywords",
  "Premium-Website die konvertiert",
  "Klare Strategie, messbare Ergebnisse",
  "Konstanter Strom an Neupatienten",
  "Mehr Privatpatienten, höhere Margen",
  "Marktführer in Ihrer Region",
];

export function LossV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#f8f8f8] py-20 lg:py-32" id="problems">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center max-w-xl mx-auto mb-12 lg:mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 text-[13px] font-bold uppercase tracking-[0.1em] mb-6"
            style={RIFT}
          >
            <AlertTriangle className="w-4 h-4" />
            Die unbequeme Wahrheit
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="uppercase leading-[0.95] tracking-tight text-[#1c1d1f] mb-5"
            style={{ ...RIFT, fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            JEDEN TAG VERLIEREN SIE
            <br />
            <span className="text-red-500">€500+ AN IHRE KONKURRENZ</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-[#666]">
            Während Sie Patienten behandeln, gewinnt Ihre Konkurrenz die Online-Suche.{" "}
            <strong className="text-[#1c1d1f]">Das kostet Sie echtes Geld.</strong>
          </motion.p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 gap-[1px] bg-[#e5e5e5] mb-[1px]">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              className="group bg-white p-7 lg:p-8 hover:bg-red-50/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09 }}
            >
              {/* Top: icon + title + pain */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors mt-0.5">
                  <p.icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3
                    className="uppercase text-[#1c1d1f] font-bold text-lg mb-1"
                    style={RIFT}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[#888] text-[15px] leading-relaxed">{p.pain}</p>
                </div>
              </div>

              {/* Divider + single bottom row */}
              <div className="border-t border-[#efefef] mt-5 pt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[#bbb] text-xs min-w-0">
                  <MoveDownRight className="w-3 h-3 text-red-300 shrink-0" />
                  <span className="truncate">{p.cost}</span>
                </div>
                <div
                  className="text-red-500 font-bold leading-none whitespace-nowrap shrink-0"
                  style={{ ...RIFT, fontSize: "1.15rem" }}
                >
                  −{p.costValue}/Mo
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total loss box */}
        <motion.div
          className="bg-[#1c1d1f] text-white p-8 lg:p-12 text-center mb-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45 }}
        >
          {/* Red left accent */}
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-red-500" />

          <h3
            className="uppercase text-white font-bold mb-4"
            style={{ ...RIFT, fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)" }}
          >
            DAS SIND{" "}
            <span className="text-red-400">€25.500</span>{" "}
            VERLUST — PRO MONAT
          </h3>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto text-sm lg:text-base leading-relaxed">
            Jeder Monat ohne professionelles Online-Marketing kostet Sie mehr als unsere
            Jahresgebühr. Die Frage ist nicht ob Sie investieren sollten — sondern wie viel Sie
            noch verlieren wollen.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#6798df] text-[#1c1d1f] font-bold text-sm uppercase tracking-[0.05em] hover:bg-white transition-colors"
            style={RIFT}
          >
            Verluste stoppen — Jetzt Analyse anfordern
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Comparison — Ohne vs Mit */}
        <motion.div
          className="grid md:grid-cols-2 gap-[1px] bg-[#e5e5e5]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
        >
          {/* Without */}
          <div className="bg-white p-7 lg:p-8 border-t-[3px] border-red-400">
            <div className="flex items-center gap-2 text-red-500 font-bold mb-6 text-lg uppercase tracking-[0.08em]" style={RIFT}>
              <X className="w-5 h-5" />
              Ohne Blue Monkeys
            </div>
            <ul className="space-y-3">
              {withoutUs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#888] text-sm">
                  <X className="w-4 h-4 text-red-300 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With */}
          <div className="bg-white p-7 lg:p-8 border-t-[3px] border-[#6798df] relative">
            <div
              className="absolute -top-3 -right-3 bg-[#6798df] text-[#1c1d1f] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em]"
              style={RIFT}
            >
              Empfohlen
            </div>
            <div className="flex items-center gap-2 text-[#6798df] font-bold mb-6 text-lg uppercase tracking-[0.08em]" style={RIFT}>
              <CheckCircle2 className="w-5 h-5" />
              Mit Blue Monkeys
            </div>
            <ul className="space-y-3">
              {withUs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#333] text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#6798df] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
