"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery",
    description: "Wir hören zu, analysieren und verstehen Ihre Praxis, Ihre Ziele und Ihre Patienten.",
    duration: "30 Min Call",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategie",
    description: "Basierend auf Daten entwickeln wir einen maßgeschneiderten Plan für Ihr Wachstum.",
    duration: "1-2 Wochen",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch",
    description: "Wir setzen um — Website, SEO, Ads. Regelmäßige Updates, keine Überraschungen.",
    duration: "4-8 Wochen",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Wachstum",
    description: "Go-Live ist erst der Anfang. Wir optimieren laufend und skalieren Ihren Erfolg.",
    duration: "Ongoing",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Connector Line */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-12 left-[calc(100%+0.5rem)] w-[calc(100%-2rem)] h-px bg-gradient-to-r from-bm-border-light to-transparent" />
      )}

      <div className="card p-6 h-full relative group">
        {/* Number */}
        <div className="absolute top-4 right-4 text-5xl font-bold text-bm-gray-500/10 group-hover:text-bm-blue/10 transition-colors">
          {step.number}
        </div>

        {/* Icon */}
        <div className="icon-container mb-4">
          <step.icon className="w-5 h-5 text-white" />
        </div>

        {/* Duration Badge */}
        <span className="inline-block text-xs font-medium text-bm-blue bg-bm-blue/10 px-2 py-1 rounded-full mb-3">
          {step.duration}
        </span>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
        <p className="text-sm text-bm-gray-400 leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

export function Process() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section className="section" ref={containerRef}>
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
            <Rocket className="w-4 h-4" />
            Unser Prozess
          </span>
          <h2 className="text-display text-gradient mb-4">
            Von Idee zu Impact.
          </h2>
          <p className="text-body max-w-xl mx-auto">
            Transparent, strukturiert und immer auf Augenhöhe.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="relative h-1 bg-bm-border rounded-full mb-12 max-w-2xl mx-auto overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-bm-blue to-bm-purple rounded-full"
            style={{ width: lineWidth }}
          />
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
