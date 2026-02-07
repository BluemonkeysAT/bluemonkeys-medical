"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Search, 
  FileText, 
  Rocket, 
  TrendingUp, 
  ArrowRight,
  Phone,
  CheckCircle2,
  Calendar,
  Target,
  BarChart3
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Kostenloses Erstgespräch",
    description: "15 Minuten Video-Call. Wir lernen Ihre Praxis kennen und identifizieren Ihre größten Hebel für Wachstum.",
    duration: "15 min",
    deliverable: "Erstes Potenzial-Assessment",
  },
  {
    number: "02",
    icon: Search,
    title: "Tiefenanalyse",
    description: "Wir analysieren Ihre Online-Präsenz, Ihre Konkurrenz und Ihren Markt. Sie erhalten einen detaillierten Report.",
    duration: "3-5 Tage",
    deliverable: "30-seitiger Analyse-Report",
  },
  {
    number: "03",
    icon: FileText,
    title: "Strategie & Angebot",
    description: "Basierend auf der Analyse erstellen wir einen maßgeschneiderten Plan mit klaren Maßnahmen und Zielen.",
    duration: "1 Woche",
    deliverable: "Maßgeschneiderter Marketing-Plan",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Umsetzung",
    description: "Wir setzen um — schnell und effizient. Sie können sich auf Ihre Patienten konzentrieren.",
    duration: "2-8 Wochen",
    deliverable: "Fertige Assets & Kampagnen",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Optimierung & Wachstum",
    description: "Kontinuierliche Optimierung basierend auf echten Daten. Monatliche Reports und Strategie-Calls.",
    duration: "Laufend",
    deliverable: "Monatliche Reports & Calls",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white" id="process">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#5fdafb] font-bold text-sm uppercase tracking-widest mb-4">
            Unser Prozess
          </p>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
            VON DER ANALYSE
            <br />
            <span className="text-[#5fdafb]">ZUM WACHSTUM</span>
          </h2>
          
          <p className="text-xl text-[#666]">
            Ein klarer, bewährter Prozess der funktioniert. 
            <strong className="text-black"> Keine Überraschungen, nur Ergebnisse.</strong>
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#5fdafb] via-[#5fdafb]/50 to-transparent" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
              >
                {/* Content */}
                <div className={`${i % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:order-2 lg:pl-16'}`}>
                  <div className={`bg-[#f8f8f8] p-8 lg:p-10 relative ${i % 2 === 0 ? '' : ''}`}>
                    {/* Number Badge */}
                    <div className="absolute -top-4 left-6 lg:left-auto lg:right-6 bg-[#5fdafb] text-black px-4 py-1 font-bold text-sm" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
                      SCHRITT {step.number}
                    </div>

                    <div className={`flex items-start gap-4 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="p-3 bg-[#5fdafb]/10 rounded-xl shrink-0">
                        <step.icon className="w-8 h-8 text-[#5fdafb]" />
                      </div>
                      <div className={`${i % 2 === 0 ? 'lg:text-right' : ''}`}>
                        <h3 className="text-2xl font-bold text-black mb-3" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
                          {step.title.toUpperCase()}
                        </h3>
                        <p className="text-[#666] mb-4">{step.description}</p>
                        
                        <div className={`flex flex-wrap gap-4 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4 text-[#5fdafb]" />
                            <span className="text-[#444] font-medium">{step.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span className="text-[#444]">{step.deliverable}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Dot (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-[#5fdafb] rounded-full flex items-center justify-center text-black font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={`hidden lg:block ${i % 2 === 0 ? 'lg:order-2' : ''}`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center bg-black text-white p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
                BEREIT FÜR DEN ERSTEN SCHRITT?
              </h3>
              <p className="text-white/70">
                In 15 Minuten wissen Sie, welches Potenzial in Ihrer Praxis steckt.
              </p>
            </div>
            <Link 
              href="#contact" 
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#5fdafb] text-black font-bold hover:bg-white transition-all shrink-0"
            >
              Erstgespräch vereinbaren
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
