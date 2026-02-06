"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Layers, BarChart3, Award, Check, Shield, Clock, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "100% Medical",
    description: "Wir machen nur Ärzte und Zahnärzte. Das merkt man.",
  },
  {
    icon: Layers,
    title: "Full Service",
    description: "Ein Partner. Alles inklusive. Null Reibungsverlust.",
  },
  {
    icon: BarChart3,
    title: "Daten-Driven",
    description: "Keine Bauchgefühl-Aussagen. Messbare Ergebnisse.",
  },
  {
    icon: Award,
    title: "Premium",
    description: "Teurer als andere. Aber auch besser.",
  },
];

const checkpoints = [
  { icon: HeartHandshake, text: "Persönlicher Ansprechpartner" },
  { icon: Shield, text: "DSGVO-konform aus Österreich" },
  { icon: Clock, text: "Support nach Projektende" },
];

export function WhyUs() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="badge mb-4">
            <Award className="w-4 h-4" />
            Warum wir
          </span>
          <h2 className="text-display text-gradient mb-4">
            Andere machen Websites.
            <br />
            <span className="text-gradient-blue">Wir machen Praxen voll.</span>
          </h2>
        </motion.div>

        {/* Bento Grid for Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {reasons.map((reason, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-50px" });

            return (
              <motion.div
                key={reason.title}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="card p-6 h-full text-center group">
                  <div className="icon-container mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <reason.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                  <p className="text-sm text-bm-gray-400">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-bm-blue via-bm-purple to-bm-pink p-px">
            <div className="bg-bm-dark rounded-[calc(1.5rem-1px)] p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                {/* Checkpoints */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white mb-6">Was Sie erwarten können:</h3>
                  {checkpoints.map((point, i) => (
                    <motion.div
                      key={point.text}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-bm-blue/20 flex items-center justify-center">
                        <point.icon className="w-4 h-4 text-bm-blue" />
                      </div>
                      <span className="text-bm-gray-200">{point.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Austria Badge */}
                <div className="text-center md:text-right">
                  <div className="text-6xl mb-2">🇦🇹</div>
                  <div className="text-xl font-semibold text-white">Made in Austria</div>
                  <div className="text-bm-gray-400">mit ❤️ aus Wien</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
