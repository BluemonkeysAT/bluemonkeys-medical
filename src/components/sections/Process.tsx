"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Kennenlernen",
    description:
      "Kostenloses Erstgespräch. Wir hören zu, stellen Fragen und verstehen Ihre Praxis, Ihre Ziele und Ihre Patienten.",
    duration: "30 Min",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategie & Konzept",
    description:
      "Basierend auf Ihrer Situation entwickeln wir eine maßgeschneiderte Digital-Strategie. Sie sehen genau, was kommt.",
    duration: "1-2 Wochen",
  },
  {
    icon: Code,
    number: "03",
    title: "Umsetzung",
    description:
      "Wir setzen um — ob Website, SEO, Ads oder alles zusammen. Regelmäßige Updates, keine Überraschungen.",
    duration: "4-8 Wochen",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Wachstum",
    description:
      "Go-Live ist erst der Anfang. Wir optimieren laufend, messen alles und sorgen für nachhaltiges Wachstum.",
    duration: "Ongoing",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section ref={containerRef} className="section overflow-hidden">
      <motion.div
        className="container-lg px-4 md:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-display text-bm-black mb-4">So arbeiten wir.</h2>
          <p className="text-xl text-bm-gray-400 max-w-2xl mx-auto">
            Transparent, strukturiert und immer auf Augenhöhe. Von der ersten
            Idee bis zum messbaren Erfolg.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-bm-gray-200 md:-translate-x-px">
            <motion.div
              className="w-full bg-bm-blue origin-top"
              style={{ scaleY: scrollYProgress, height: "100%" }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                custom={i}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon Circle */}
                <div className="relative z-10 shrink-0">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-white shadow-bm-lg border border-bm-gray-100 
                               flex items-center justify-center group-hover:shadow-bm-xl transition-shadow"
                    whileInView={{ scale: [0.8, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <step.icon className="w-7 h-7 text-bm-blue" />
                  </motion.div>
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-bm-blue text-white text-xs font-bold rounded-lg flex items-center justify-center">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? "md:text-left md:pr-16" : "md:text-right md:pl-16"
                  }`}
                >
                  <div
                    className={`inline-block px-3 py-1 bg-bm-blue/10 text-bm-blue text-sm font-medium rounded-full mb-3`}
                  >
                    {step.duration}
                  </div>
                  <h3 className="text-2xl font-bold text-bm-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-bm-gray-400">{step.description}</p>
                </div>

                {/* Spacer for desktop alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
