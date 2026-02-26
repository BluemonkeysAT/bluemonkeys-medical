"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

const faqs = [
  {
    q: "Was kostet eine Zusammenarbeit mit Blue Monkeys Medical?",
    a: "Wir haben keine Einheitstarife — jede Praxis ist anders. Ein Website-Projekt startet ab €4.900, monatliche SEO ab €990/Monat, Ads-Management ab €690/Monat. Im ersten kostenlosen Gespräch erstellen wir ein individuelles Angebot, das auf Ihre spezifische Situation und Ihr Budget zugeschnitten ist.",
  },
  {
    q: "Wir haben schon eine Agentur versucht, die nichts gebracht hat. Warum sollte das jetzt anders sein?",
    a: "Das hören wir oft — und es liegt meist daran, dass Generalistenagenturen das Medizingeschäft schlicht nicht verstehen. Wir arbeiten ausschließlich mit Ärzten und Zahnärzten. Das bedeutet: Wir kennen Ihre Zielgruppe, Ihre rechtlichen Rahmenbedingungen (DSGVO, Heilmittelwerbegesetz) und was bei Patienten wirklich wirkt. 98% unserer Kunden empfehlen uns aktiv weiter — das spricht für sich.",
  },
  {
    q: "Wie lange dauert es, bis ich Ergebnisse sehe?",
    a: "Erste messbare Ergebnisse sehen unsere Kunden typischerweise nach 2–4 Wochen (bei Ads sogar früher). SEO braucht 3–6 Monate für volle Wirkung, aber die ersten Positionsverbesserungen zeigen sich oft schon nach wenigen Wochen. Wir tracken alle KPIs transparent und liefern monatliche Reports — Sie sehen immer genau, was Ihr Investment bringt.",
  },
  {
    q: "Ich habe keine Zeit für Marketing — wie viel Aufwand bedeutet das für mich?",
    a: "Nahezu keinen. Wir brauchen von Ihnen nur ein 30-minütiges Onboarding-Gespräch zu Beginn und monatlich 15 Minuten für ein Update. Den Rest erledigen wir komplett selbstständig. Sie bekommen einen monatlichen Report und können jederzeit anrufen — aber Sie müssen sich um nichts kümmern.",
  },
  {
    q: "Was macht Blue Monkeys Medical konkret anders als andere Agenturen?",
    a: "Drei Dinge: Erstens arbeiten wir ausschließlich für Ärzte und Zahnärzte — kein Maler, kein Restaurant, keine Ablenkung. Zweitens liefern wir messbare Ergebnisse mit monatlichem ROI-Report, keine vagen Versprechen. Drittens sind wir ein eingespieltes Team aus drei Gründern, das Sie persönlich betreut — kein anonymer Account-Manager. In 5 Jahren haben wir über 50 Praxen in DACH auf Wachstumskurs gebracht.",
  },
  {
    q: "Arbeitet ihr auch mit meiner bestehenden Website oder muss ich eine neue bauen?",
    a: "Beides ist möglich. Für SEO und Ads können wir oft mit Ihrer bestehenden Website arbeiten. Falls diese zu alt oder technisch limitiert ist, empfehlen wir eine neue — aber das entscheiden Sie. Im ersten Gespräch analysieren wir Ihre aktuelle Situation und geben eine ehrliche Einschätzung.",
  },
  {
    q: "Wie läuft eine Kündigung ab? Bin ich lange gebunden?",
    a: "Monatliche Leistungen (SEO, Ads, KI-Assistent) haben eine Mindestlaufzeit von 3 Monaten, danach jederzeit mit 4 Wochen Kündigungsfrist. Website-Projekte und Branding sind Einmalzahlungen ohne laufende Bindung. Wir wollen Kunden, die bleiben weil sie Ergebnisse sehen — nicht weil sie müssen.",
  },
];

export function FAQV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} id="faq" className="bg-white py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[340px_1fr] gap-14 lg:gap-20">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="lg:sticky lg:top-[100px] self-start"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center bg-[#e8f0fb] text-[#6798df] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.1em] mb-6"
              style={RIFT}
            >
              FAQ
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="uppercase leading-[0.95] tracking-tight text-[#1c1d1f] mb-6"
              style={{ ...RIFT, fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
            >
              HÄUFIGE
              <br />
              <span className="text-[#6798df]">FRAGEN</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#666] text-base leading-relaxed mb-8">
              Sie haben eine Frage, die hier nicht beantwortet wird? Sprechen Sie uns direkt an
              — wir antworten immer persönlich.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#6798df] uppercase tracking-[0.06em] hover:underline"
                style={RIFT}
              >
                Direkt fragen →
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="divide-y divide-[#e5e5e5] border-t border-[#e5e5e5]"
          >
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-5 lg:py-6 text-left group"
                >
                  <span
                    className={`font-semibold text-sm lg:text-base leading-snug transition-colors duration-200 ${
                      open === i ? "text-[#6798df]" : "text-[#1c1d1f] group-hover:text-[#6798df]"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-7 h-7 bg-[#f5f5f5] group-hover:bg-[#e8f0fb] flex items-center justify-center transition-colors duration-200 mt-0.5">
                    {open === i ? (
                      <Minus className="w-4 h-4 text-[#6798df]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#999] group-hover:text-[#6798df]" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#666] text-sm leading-relaxed pb-6">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
