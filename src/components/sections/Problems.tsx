"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle, X, TrendingDown, Clock, UserX, Search, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const problems = [
  {
    icon: Search,
    title: "Unsichtbar bei Google",
    pain: "Patienten suchen nach 'Zahnarzt Wien' — aber Sie tauchen nicht auf",
    cost: "~15 verlorene Patienten/Monat",
    costValue: "€4.500",
  },
  {
    icon: TrendingDown,
    title: "Veraltete Website",
    pain: "Ihre Website sieht aus wie 2015. Patienten klicken weg.",
    cost: "60% höhere Absprungrate",
    costValue: "€3.000",
  },
  {
    icon: Clock,
    title: "Keine Zeit für Marketing",
    pain: "Sie sind Arzt, kein Marketer. Aber ohne Marketing keine Neupatienten.",
    cost: "Stagnation statt Wachstum",
    costValue: "€10.000+",
  },
  {
    icon: UserX,
    title: "Falsche Patienten",
    pain: "Schmerzpatienten statt Privatpatienten. Kassenfälle statt Selbstzahler.",
    cost: "Niedrigere Gewinnmargen",
    costValue: "€8.000",
  },
];

export function Problems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#fafafa]" id="problems">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" />
            Die unbequeme Wahrheit
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
            JEDEN TAG VERLIEREN SIE
            <br />
            <span className="text-red-500">€500+ AN IHRE KONKURRENZ</span>
          </h2>
          
          <p className="text-xl text-[#666]">
            Während Sie Patienten behandeln, gewinnt Ihre Konkurrenz die Online-Suche. 
            <strong className="text-black"> Das kostet Sie echtes Geld.</strong>
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              className="group bg-white p-8 border border-[#eee] hover:border-red-200 hover:shadow-lg transition-all relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              {/* Cost Badge */}
              <div className="absolute top-4 right-4 bg-red-50 text-red-600 px-3 py-1 text-sm font-bold rounded">
                -{problem.costValue}/Monat
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-50 text-red-500 rounded-lg group-hover:bg-red-100 transition-colors">
                  <problem.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">{problem.title}</h3>
                  <p className="text-[#666] mb-4">{problem.pain}</p>
                  <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
                    <X className="w-4 h-4" />
                    {problem.cost}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Calculator Box */}
        <motion.div
          className="bg-black text-white p-8 lg:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
            DAS SIND <span className="text-red-400">€25.500</span> VERLUST — PRO MONAT
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Jeder Monat ohne professionelles Online-Marketing kostet Sie mehr als unsere Jahresgebühr. 
            Die Frage ist nicht ob Sie investieren sollten — sondern wie viel Sie noch verlieren wollen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact" 
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#5fdafb] text-black font-bold hover:bg-white transition-all"
            >
              Verluste stoppen — Jetzt Analyse anfordern
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Comparison */}
        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          {/* Without Us */}
          <div className="bg-white border-2 border-red-200 p-8">
            <div className="flex items-center gap-2 text-red-500 font-bold mb-6">
              <X className="w-5 h-5" />
              OHNE BLUE MONKEYS
            </div>
            <ul className="space-y-4">
              {[
                "Keine Sichtbarkeit bei Google",
                "Veraltete, unprofessionelle Website",
                "Keine Strategie, kein System",
                "Abhängigkeit von Empfehlungen",
                "Stagnation bei Patientenzahlen",
                "Konkurrenz überholt Sie",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#666]">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With Us */}
          <div className="bg-white border-2 border-[#5fdafb] p-8 relative">
            <div className="absolute -top-3 -right-3 bg-[#5fdafb] text-black px-3 py-1 text-xs font-bold">
              EMPFOHLEN
            </div>
            <div className="flex items-center gap-2 text-[#5fdafb] font-bold mb-6">
              <CheckCircle2 className="w-5 h-5" />
              MIT BLUE MONKEYS
            </div>
            <ul className="space-y-4">
              {[
                "Top 3 bei Google für Ihre Keywords",
                "Premium-Website die konvertiert",
                "Klare Strategie, messbare Ergebnisse",
                "Konstanter Strom an Neupatienten",
                "Mehr Privatpatienten, höhere Margen",
                "Marktführer in Ihrer Region",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#222]">
                  <CheckCircle2 className="w-5 h-5 text-[#5fdafb] shrink-0 mt-0.5" />
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
