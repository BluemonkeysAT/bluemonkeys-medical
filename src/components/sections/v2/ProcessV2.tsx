"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PhoneCall, BarChart2, Rocket, TrendingUp } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

const steps = [
  {
    num: "01", icon: PhoneCall,
    title: "Kostenlose Analyse",
    desc: "In einem 30-minütigen Gespräch analysieren wir Ihre aktuelle Online-Präsenz, Ihre Mitbewerber und Ihr Potenzial. Kostenlos, unverbindlich, konkret.",
    duration: "30 Min.",
  },
  {
    num: "02", icon: BarChart2,
    title: "Strategie & Roadmap",
    desc: "Wir entwickeln eine maßgeschneiderte Strategie für Ihre Praxis. Keine Templates — jede Praxis ist einzigartig. Sie bekommen einen klaren Plan.",
    duration: "5-7 Tage",
  },
  {
    num: "03", icon: Rocket,
    title: "Umsetzung & Launch",
    desc: "Unser Team setzt alles um — Sie kümmern sich um Ihre Patienten. Alle Tools, alle Kanäle, alle Maßnahmen. Sie müssen nichts tun.",
    duration: "2-4 Wochen",
  },
  {
    num: "04", icon: TrendingUp,
    title: "Wachstum & Optimierung",
    desc: "Wir messen, optimieren und skalieren kontinuierlich. Monatliche Reports, transparentes Tracking — Sie sehen immer genau, was Ihr Geld bringt.",
    duration: "Laufend",
  },
];

export function ProcessV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="process" className="bg-[#f8f8f8] py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-2xl mb-14 lg:mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center bg-[#e8f0fb] text-[#6798df] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.1em] mb-6"
            style={RIFT}
          >
            So funktioniert es
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="uppercase leading-[0.95] tracking-tight text-[#1c1d1f] mb-5"
            style={{ ...RIFT, fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            VON DER ANALYSE
            <br />
            <span className="text-[#6798df]">ZU DEN ERGEBNISSEN</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#666] text-lg leading-relaxed">
            Kein Rattenschwanz, keine Überraschungen. In 4 Schritten von der kostenlosen Analyse
            zu messbaren Ergebnissen — während Sie Patienten behandeln.
          </motion.p>
        </motion.div>

        {/* Steps — desktop: horizontal, mobile: vertical */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[22px] left-[22px] right-[calc(25%-22px)] h-[2px] bg-[#e5e5e5] z-0">
            <motion.div
              className="absolute inset-y-0 left-0 bg-[#6798df]"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex lg:flex-col gap-6 lg:gap-0"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
              >
                {/* Number circle */}
                <div className="shrink-0 flex lg:mb-8">
                  <div className="w-[44px] h-[44px] bg-[#1c1d1f] flex items-center justify-center relative">
                    <span
                      className="text-white font-bold text-lg leading-none"
                      style={RIFT}
                    >
                      {step.num}
                    </span>
                    {/* Connecting line (mobile) */}
                    {i < steps.length - 1 && (
                      <div className="lg:hidden absolute top-[44px] left-1/2 -translate-x-1/2 w-[2px] h-8 bg-[#e5e5e5]" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-0 lg:pt-0">
                  {/* Icon */}
                  <div className="hidden lg:flex w-10 h-10 bg-[#e8f0fb] items-center justify-center mb-4">
                    <step.icon className="w-5 h-5 text-[#6798df]" />
                  </div>

                  <div className="flex items-center gap-2 mb-1 lg:mb-2">
                    <step.icon className="w-4 h-4 text-[#6798df] lg:hidden" />
                    <h3
                      className="uppercase text-[#1c1d1f] font-bold text-base lg:text-lg leading-tight"
                      style={RIFT}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-[#888] text-xs font-bold uppercase tracking-[0.08em] mb-3" style={RIFT}>
                    ⏱ {step.duration}
                  </p>

                  <p className="text-[#666] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-14 lg:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-white border border-[#e5e5e5]"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="w-10 h-10 bg-[#6798df] flex items-center justify-center shrink-0">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-[#1c1d1f] font-semibold text-sm">
              Erste Ergebnisse bereits in{" "}
              <span className="text-[#6798df] font-bold">2–4 Wochen</span> — garantiert.
            </p>
            <p className="text-[#888] text-xs mt-0.5">
              Wenn wir nach 90 Tagen keine messbaren Ergebnisse liefern, bekommen Sie Ihr Geld
              zurück.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 text-xs font-bold text-[#6798df] uppercase tracking-[0.06em] hover:underline"
            style={RIFT}
          >
            Jetzt starten →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
