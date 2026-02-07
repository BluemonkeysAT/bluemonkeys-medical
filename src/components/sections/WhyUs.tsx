"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Layers, BarChart3, Award } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "100% Medical",
    description: "Wir arbeiten ausschließlich mit Arztpraxen und Zahnarztpraxen.",
  },
  {
    icon: Layers,
    title: "Full Service",
    description: "Ein Ansprechpartner für alle digitalen Themen.",
  },
  {
    icon: BarChart3,
    title: "Datengetrieben",
    description: "Keine Bauchgefühl-Entscheidungen. Messbare Ergebnisse.",
  },
  {
    icon: Award,
    title: "Premium Qualität",
    description: "Höchste Standards in Design und Performance.",
  },
];

export function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-[#f8f8f8]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#5fdafb] font-semibold text-sm uppercase tracking-widest mb-4">
              Warum Blue Monkeys
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
              ANDERE MACHEN WEBSITES.
              <br />
              <span className="text-[#5fdafb]">WIR MACHEN PRAXEN VOLL.</span>
            </h2>
            <p className="text-xl text-[#666] mb-8">
              Seit über 5 Jahren helfen wir Ärzten und Zahnärzten dabei, 
              online sichtbar zu werden und neue Patienten zu gewinnen.
            </p>

            <div className="flex items-center gap-8">
              <div>
                <div className="text-4xl font-bold text-black" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
                  5+
                </div>
                <div className="text-[#666]">Jahre Erfahrung</div>
              </div>
              <div className="w-px h-12 bg-[#ddd]" />
              <div>
                <div className="text-4xl font-bold text-black" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
                  150+
                </div>
                <div className="text-[#666]">Praxen betreut</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Grid */}
          <div className="grid grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6"
              >
                <div className="w-10 h-10 bg-[#5fdafb] flex items-center justify-center mb-4">
                  <reason.icon className="w-5 h-5 text-black" />
                </div>
                <h3 className="font-bold text-black mb-2" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
                  {reason.title.toUpperCase()}
                </h3>
                <p className="text-sm text-[#666]">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
