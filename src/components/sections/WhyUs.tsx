"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Card } from "@/components/ui/Card";
import { Target, Layers, BarChart3, Award, Check } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Spezialisiert",
    description:
      "Keine Generalisten. Wir machen nur Ärzte und Zahnärzte — und das merkt man an jedem Detail.",
    highlight: "100% Medical Focus",
  },
  {
    icon: Layers,
    title: "Full Service",
    description:
      "Website, SEO, Ads, Design — alles aus einer Hand. Ein Ansprechpartner, null Reibungsverlust.",
    highlight: "Alles inklusive",
  },
  {
    icon: BarChart3,
    title: "Messbar",
    description:
      "Keine Bauchgefühl-Aussagen. Echte Zahlen, echte Ergebnisse, nachvollziehbarer ROI.",
    highlight: "Daten-getrieben",
  },
  {
    icon: Award,
    title: "Premium",
    description:
      "Ja, wir sind teurer als die Konkurrenz. Dafür bekommen Sie auch Premium-Qualität.",
    highlight: "Award-winning",
  },
];

const checkpoints = [
  "Persönlicher Ansprechpartner für jedes Projekt",
  "Transparente Preise — keine versteckten Kosten",
  "DSGVO-konforme Lösungen aus Österreich",
  "Support auch nach Projektende",
];

export function WhyUs() {
  return (
    <section id="about" className="section bg-bm-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <motion.div
        className="container-lg px-4 md:px-8 relative z-10"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-display text-bm-black mb-4">
            Warum Blue Monkeys?
          </h2>
          <p className="text-xl text-bm-gray-400 max-w-2xl mx-auto">
            Andere machen Websites. Wir machen Ihre Praxis voll.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {reasons.map((reason, i) => (
            <motion.div key={reason.title} variants={fadeUp} custom={i}>
              <Card className="h-full" padding="lg" hover glow>
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-bm-blue/10 flex items-center justify-center shrink-0">
                    <reason.icon className="w-7 h-7 text-bm-blue" />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-bm-black">
                        {reason.title}
                      </h3>
                      <span className="text-xs font-semibold text-bm-blue bg-bm-blue/10 px-2 py-0.5 rounded-full">
                        {reason.highlight}
                      </span>
                    </div>
                    <p className="text-bm-gray-400">{reason.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Checkpoints */}
        <motion.div variants={fadeUp}>
          <Card
            className="bg-gradient-to-br from-bm-blue to-bm-blue-dark text-white"
            padding="lg"
            hover={false}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Was Sie erwarten können:</h3>
                <ul className="space-y-3">
                  {checkpoints.map((point, i) => (
                    <motion.li
                      key={point}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-white/90">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🇦🇹</div>
                  <p className="text-xl font-semibold">Made in Austria</p>
                  <p className="text-white/60">mit ❤️ aus Wien</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
