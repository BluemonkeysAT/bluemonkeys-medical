"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Euro, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

const cases = [
  {
    id: 1,
    type: "Zahnarztpraxis",
    name: "Dr. Thomas Weber",
    location: "Wien Döbling",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=640&h=480&fit=crop&q=80",
    challenge:
      "Keine Online-Präsenz, nur Empfehlungen. Website von 2014. Zu viele Kassenpatienten, zu wenige Privatpatienten.",
    solution:
      "Neue Premium-Website, lokale SEO-Strategie, Google Ads speziell für Implantate und Ästhetik.",
    results: [
      { label: "Mehr Patientenanfragen", value: "+340%", icon: Users },
      { label: "Privatpatienten-Anteil", value: "20% → 55%", icon: TrendingUp },
      { label: "Zusatzumsatz/Jahr", value: "+€127.000", icon: Euro },
    ],
    quote:
      "Ich habe in 20 Jahren Praxis noch nie so viele Anfragen bekommen. Und die Qualität der Patienten ist eine andere.",
    timeline: "6 Monate",
  },
  {
    id: 2,
    type: "Hautarztpraxis",
    name: "Dr. Lisa Berger",
    location: "Wien Innere Stadt",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=640&h=480&fit=crop&q=80",
    challenge:
      "Starke Konkurrenz in zentraler Lage. Voller Kalender mit Kassenpatienten, wenig ästhetische Behandlungen.",
    solution:
      "Rebranding, spezialisierte Landing Pages für Botox/Filler, Instagram Marketing, KI-Telefonassistent.",
    results: [
      { label: "Ästhetik-Anfragen", value: "+520%", icon: TrendingUp },
      { label: "Telefonannahme", value: "67% → 100%", icon: Users },
      { label: "Zusatzumsatz/Jahr", value: "+€89.000", icon: Euro },
    ],
    quote:
      "Der KI-Telefonassistent war ein Game-Changer. Wir verpassen keinen Anruf mehr und ich habe wieder Zeit für meine Patienten.",
    timeline: "4 Monate",
  },
  {
    id: 3,
    type: "Kieferorthopädie",
    name: "Dr. Michael Steiner",
    location: "Salzburg",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=640&h=480&fit=crop&q=80",
    challenge:
      "Neu gegründete Praxis, kein Bekanntheitsgrad, keine Empfehlungen, volle Konkurrenz.",
    solution:
      "Full-Service Paket: Branding, Website, SEO, Google Ads, Social Media Aufbau.",
    results: [
      { label: "Google Position", value: "#1 in Salzburg", icon: TrendingUp },
      { label: "Erstberatungen/Mo", value: "8 → 47", icon: Users },
      { label: "ROI im 1. Jahr", value: "847%", icon: Euro },
    ],
    quote:
      "Blue Monkeys hat mir als Neugründer einen Vorsprung von 5 Jahren gegenüber etablierten Kollegen verschafft.",
    timeline: "12 Monate",
  },
];

export function CaseStudiesV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const c = cases[active];
  const prev = () => setActive((n) => (n - 1 + cases.length) % cases.length);
  const next = () => setActive((n) => (n + 1) % cases.length);

  return (
    <section ref={ref} id="cases" className="bg-[#1c1d1f] text-white py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16"
        >
          <div>
            <div
              className="inline-flex items-center bg-[#6798df]/10 text-[#6798df] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.1em] mb-6"
              style={RIFT}
            >
              Erfolgsgeschichten
            </div>
            <h2
              className="uppercase leading-[0.95] tracking-tight text-white"
              style={{ ...RIFT, fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
            >
              ECHTE ERGEBNISSE.
              <br />
              <span className="text-[#6798df]">ECHTE PRAXEN.</span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs lg:text-right">
            Keine Hochglanzbroschüre — echte Zahlen von echten Ärzten, die wir betreuen.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex gap-[1px] bg-white/[0.08] mb-[1px]"
        >
          {cases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className={`flex-1 px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] transition-all text-left ${
                i === active
                  ? "bg-[#6798df] text-[#1c1d1f]"
                  : "bg-[#242526] text-white/40 hover:text-white/70 hover:bg-white/5"
              }`}
              style={RIFT}
            >
              <span className="hidden sm:inline">{c.type} · </span>
              {c.name}
            </button>
          ))}
        </motion.div>

        {/* Case content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-[400px_1fr] gap-[1px] bg-white/[0.08]"
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-[#242526]">
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto min-h-[280px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1d1f]/90 via-transparent to-transparent" />
              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-[0.1em] px-2 py-1 bg-[#6798df] text-[#1c1d1f] mb-3"
                  style={RIFT}
                >
                  {c.timeline}
                </span>
                <p className="text-[#6798df] text-sm font-bold" style={RIFT}>{c.type}</p>
                <p className="text-white font-bold text-xl" style={RIFT}>{c.name}</p>
                <p className="text-white/50 text-sm">{c.location}</p>
              </div>
            </div>

            {/* Details */}
            <div className="bg-[#242526] p-7 lg:p-10">
              {/* Challenge + Solution */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <p
                    className="text-[#6798df] font-bold text-[10px] uppercase tracking-[0.12em] mb-2"
                    style={RIFT}
                  >
                    Die Herausforderung
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p
                    className="text-[#6798df] font-bold text-[10px] uppercase tracking-[0.12em] mb-2"
                    style={RIFT}
                  >
                    Unsere Lösung
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">{c.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-[1px] bg-white/[0.08] mb-8">
                {c.results.map((r) => (
                  <div key={r.label} className="bg-[#1c1d1f] p-4">
                    <r.icon className="w-4 h-4 text-[#6798df] mb-2" />
                    <div
                      className="text-[#6798df] font-bold text-xl lg:text-2xl leading-none mb-1"
                      style={RIFT}
                    >
                      {r.value}
                    </div>
                    <div className="text-white/40 text-[11px]">{r.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="border-l-2 border-[#6798df] pl-5">
                <Quote className="w-6 h-6 text-[#6798df] mb-3" />
                <p className="text-white/70 italic text-sm leading-relaxed mb-3">
                  "{c.quote}"
                </p>
                <p className="text-[#6798df] font-semibold text-sm">— {c.name}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-8">
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#6798df] hover:text-[#6798df] text-white/60 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#6798df] hover:text-[#6798df] text-white/60 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1.5 ml-2">
              {cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1 transition-all duration-300 ${
                    i === active ? "w-8 bg-[#6798df]" : "w-3 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#6798df] text-[#1c1d1f] font-bold text-sm uppercase tracking-[0.05em] hover:bg-white transition-colors"
            style={RIFT}
          >
            Die nächste Erfolgsgeschichte? Ihre Praxis.
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
