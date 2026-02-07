"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Wie schnell sehe ich Ergebnisse?",
    answer: "Bei Google Ads sehen Sie oft schon in der ersten Woche erste Anfragen. Bei SEO dauert es typischerweise 2-4 Monate bis zu signifikanten Ranking-Verbesserungen. Eine neue Website kann innerhalb von 2-4 Wochen live gehen und sofort besser konvertieren."
  },
  {
    question: "Was unterscheidet Blue Monkeys von anderen Agenturen?",
    answer: "Wir sind zu 100% auf den medizinischen Bereich spezialisiert. Wir verstehen die Herausforderungen von Arztpraxen, kennen die rechtlichen Anforderungen (Heilmittelwerbegesetz, DSGVO) und wissen was Patienten erwarten. Keine generischen Lösungen — nur maßgeschneidertes Medical Marketing."
  },
  {
    question: "Was kostet das?",
    answer: "Das hängt von Ihren Zielen ab. Eine professionelle Website beginnt bei €4.900, laufendes SEO ab €990/Monat, Ads-Management ab €690/Monat + Werbebudget. In einem kostenlosen Erstgespräch erstellen wir ein individuelles Angebot basierend auf Ihren Bedürfnissen."
  },
  {
    question: "Gibt es eine Mindestvertragslaufzeit?",
    answer: "Für laufende Services (SEO, Ads, KI-Telefonassistent) empfehlen wir mindestens 6 Monate, da effektives Marketing Zeit braucht. Einmalige Projekte wie Website-Erstellung haben keine Laufzeit. Wir sind von der Qualität unserer Arbeit überzeugt — wenn Sie nach 3 Monaten nicht zufrieden sind, können Sie kündigen."
  },
  {
    question: "Wie viel Zeit muss ich investieren?",
    answer: "Minimal. Nach dem Onboarding brauchen wir ca. 1-2 Stunden pro Monat für Abstimmungen und Freigaben. Unser Ziel ist es, Ihnen Arbeit abzunehmen, nicht zusätzliche zu schaffen. Sie konzentrieren sich auf Ihre Patienten — wir kümmern uns um Ihr Marketing."
  },
  {
    question: "Funktioniert das auch für meine Fachrichtung?",
    answer: "Ja. Wir haben Erfahrung mit Zahnärzten, Dermatologen, Kieferorthopäden, Augenärzten, Orthopäden, Internisten, Plastischen Chirurgen und vielen weiteren Fachrichtungen. Die Grundprinzipien sind ähnlich — die Umsetzung passen wir an Ihre Spezialisierung an."
  },
  {
    question: "Was ist mit Datenschutz und rechtlichen Anforderungen?",
    answer: "Alle unsere Lösungen sind DSGVO-konform und berücksichtigen das Heilmittelwerbegesetz. Wir hosten bevorzugt auf europäischen Servern und implementieren alle notwendigen Datenschutz-Features (Cookie-Banner, Datenschutzerklärung, sichere Formulare)."
  },
  {
    question: "Kann ich auch nur einzelne Leistungen buchen?",
    answer: "Absolut. Sie können mit einem einzigen Service starten (z.B. nur SEO oder nur eine neue Website) und später erweitern. Viele Kunden starten klein und bauen aus, wenn sie die ersten Ergebnisse sehen."
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="text-[#5fdafb] font-bold text-sm uppercase tracking-widest mb-4">
              Häufige Fragen
            </p>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
              SIE FRAGEN,
              <br />
              <span className="text-[#5fdafb]">WIR ANTWORTEN</span>
            </h2>
            
            <p className="text-xl text-[#666] mb-8">
              Die wichtigsten Fragen, die uns Ärzte stellen — direkt und ehrlich beantwortet.
            </p>

            <div className="bg-[#f8f8f8] p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#5fdafb]/10 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-[#5fdafb]" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">Noch Fragen?</h4>
                  <p className="text-[#666] text-sm mb-4">
                    Kontaktieren Sie uns direkt. Wir antworten innerhalb von 24 Stunden.
                  </p>
                  <Link 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-[#5fdafb] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Frage stellen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className={`border-2 transition-colors ${
                    openIndex === i ? 'border-[#5fdafb] bg-[#5fdafb]/5' : 'border-[#eee] hover:border-[#5fdafb]/30'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    className="w-full p-6 text-left flex items-start gap-4"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span className="text-[#5fdafb] font-bold text-sm shrink-0 mt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 font-bold text-black text-lg pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-[#5fdafb] shrink-0 transition-transform ${
                        openIndex === i ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-16">
                          <p className="text-[#666] leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
