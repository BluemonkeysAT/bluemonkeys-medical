"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, WifiOff, PhoneOff, UserX, TrendingDown, Clock } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

const problems = [
  {
    icon: WifiOff,
    num: "01",
    headline: "Unsichtbar bei Google",
    text: "Wenn Patienten nach einem Arzt suchen, finden sie Ihre Konkurrenz — nicht Sie. Jede Seite weiter hinten kostet Sie täglich neue Patienten.",
  },
  {
    icon: PhoneOff,
    num: "02",
    headline: "Anrufe werden verpasst",
    text: "Während Sie behandeln, klingelt das Telefon ins Leere. Patienten rufen nicht zweimal an — sie wählen die nächste Praxis.",
  },
  {
    icon: UserX,
    num: "03",
    headline: "Zu viele Kassenpatienten",
    text: "Ihr Terminkalender ist voll, aber der Umsatz stimmt nicht. Privatpatienten und Selbstzahler gehen zu Praxen mit besserem Online-Auftritt.",
  },
  {
    icon: TrendingDown,
    num: "04",
    headline: "Marketing ohne Ergebnisse",
    text: "Sie haben schon eine Agentur versucht — viel Geld, keine messbaren Resultate. Eine Generalagentur versteht das Medizingeschäft nicht.",
  },
  {
    icon: Clock,
    num: "05",
    headline: "Keine Zeit für Marketing",
    text: "Sie sind Arzt, kein Marketer. Zwischen Patienten, Verwaltung und Fortbildungen bleibt für Marketing schlicht keine Zeit.",
  },
];

export function ProblemsV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#1c1d1f] text-white py-20 lg:py-32 overflow-hidden">
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
            className="inline-flex items-center bg-[#6798df]/10 text-[#6798df] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.1em] mb-6"
            style={RIFT}
          >
            Das Problem
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="uppercase leading-[0.95] tracking-tight text-white mb-6"
            style={{ ...RIFT, fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            WÄHREND SIE BEHANDELN,
            <br />
            <span className="text-[#6798df]">VERLIEREN SIE PATIENTEN.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg leading-relaxed">
            Ohne eine starke digitale Präsenz verliert Ihre Praxis täglich Neupatienten — still,
            unsichtbar, teuer. Die Gute Nachricht: Das lässt sich ändern.
          </motion.p>
        </motion.div>

        {/* Problems grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {problems.map((p, i) => (
            <motion.div
              key={p.num}
              className="bg-[#1c1d1f] p-7 lg:p-8 group hover:bg-[#242526] transition-colors duration-300 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              {/* Blue left accent on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#6798df] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <div className="w-11 h-11 bg-white/[0.06] group-hover:bg-[#6798df] flex items-center justify-center transition-colors duration-300">
                    <p.icon className="w-5 h-5 text-[#6798df] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <span
                    className="text-white/20 font-bold text-xs tracking-[0.1em] block mb-2"
                    style={RIFT}
                  >
                    {p.num}
                  </span>
                  <h3
                    className="text-white font-bold uppercase text-base lg:text-lg leading-tight mb-2"
                    style={RIFT}
                  >
                    {p.headline}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">{p.text}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA cell */}
          <motion.div
            className="bg-[#6798df] p-7 lg:p-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div>
              <p
                className="text-[#1c1d1f] font-bold uppercase text-xl lg:text-2xl leading-tight mb-4"
                style={RIFT}
              >
                DAS MUSS NICHT SO SEIN.
              </p>
              <p className="text-[#1c1d1f]/70 text-sm leading-relaxed">
                150+ Praxen haben das Problem bereits gelöst. Ihre Praxis kann die nächste sein.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#1c1d1f] text-white font-bold text-sm uppercase tracking-[0.05em] hover:bg-white hover:text-[#1c1d1f] transition-all self-start"
              style={RIFT}
            >
              Jetzt lösen
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
