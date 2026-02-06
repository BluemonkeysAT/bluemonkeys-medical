"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Clock, Quote } from "lucide-react";

const cases = [
  {
    title: "Dr. Müller Zahnklinik",
    category: "Zahnarzt • Wien",
    image: "🦷",
    results: [
      { icon: TrendingUp, value: "+156%", label: "Anfragen" },
      { icon: Users, value: "89", label: "Patienten/Mo" },
      { icon: Clock, value: "3 Mo", label: "bis ROI" },
    ],
    quote: "Die beste Investition seit der Praxisgründung.",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "Praxis am Park",
    category: "Allgemeinmedizin • Salzburg",
    image: "🏥",
    results: [
      { icon: TrendingUp, value: "#1", label: "Ranking" },
      { icon: Users, value: "+72%", label: "Traffic" },
      { icon: Clock, value: "6 Mo", label: "SEO" },
    ],
    quote: "Endlich werden wir gefunden.",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    title: "KFO Donaustadt",
    category: "Kieferorthopädie • Wien",
    image: "😁",
    results: [
      { icon: TrendingUp, value: "-40%", label: "Anrufe" },
      { icon: Users, value: "24/7", label: "Buchbar" },
      { icon: Clock, value: "€50K+", label: "Umsatz" },
    ],
    quote: "Der Chatbot hat alles verändert.",
    gradient: "from-violet-600 to-purple-500",
  },
];

function CaseCard({ caseItem, index }: { caseItem: typeof cases[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="card overflow-hidden">
        {/* Header with Gradient */}
        <div className={`relative h-48 bg-gradient-to-br ${caseItem.gradient} p-6 flex items-end`}>
          {/* Large Emoji */}
          <div className="absolute top-4 right-4 text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
            {caseItem.image}
          </div>
          
          {/* Category Badge */}
          <span className="text-xs font-medium text-white/80 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            {caseItem.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">{caseItem.title}</h3>
            <ArrowUpRight className="w-5 h-5 text-bm-gray-500 group-hover:text-bm-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {caseItem.results.map((result) => (
              <div key={result.label} className="text-center">
                <result.icon className="w-4 h-4 text-bm-blue mx-auto mb-1" />
                <div className="text-lg font-bold text-white">{result.value}</div>
                <div className="text-xs text-bm-gray-500">{result.label}</div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="flex items-start gap-2 pt-4 border-t border-bm-border">
            <Quote className="w-4 h-4 text-bm-gray-500 shrink-0 mt-0.5" />
            <p className="text-sm text-bm-gray-400 italic">{caseItem.quote}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CaseStudies() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="cases" className="section overflow-hidden" ref={containerRef}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="badge mb-4">
              <TrendingUp className="w-4 h-4" />
              Erfolgsgeschichten
            </span>
            <h2 className="text-display text-gradient">
              Resultate, die sprechen.
            </h2>
          </div>
          <motion.a
            href="#contact"
            className="text-bm-blue font-medium flex items-center gap-2 group"
            whileHover={{ x: 5 }}
          >
            Ihr Case könnte hier stehen
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, i) => (
            <CaseCard key={caseItem.title} caseItem={caseItem} index={i} />
          ))}
        </div>

        {/* Floating Label */}
        <motion.div
          className="mt-16 overflow-hidden"
          style={{ x }}
        >
          <div className="text-[8vw] font-bold text-bm-gray-500/5 whitespace-nowrap select-none">
            MEHR PATIENTEN • MEHR ERFOLG • MEHR WACHSTUM •
          </div>
        </motion.div>
      </div>
    </section>
  );
}
