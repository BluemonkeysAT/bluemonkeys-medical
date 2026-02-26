"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

const testimonials = [
  {
    name: "Dr. Thomas Weber",
    role: "Zahnarzt",
    location: "Wien Döbling",
    stars: 5,
    text: "In 20 Jahren Praxis habe ich noch nie so viele qualifizierte Anfragen bekommen. Blue Monkeys versteht, was Ärzte brauchen.",
    highlight: "+340% Anfragen",
  },
  {
    name: "Dr. Lisa Berger",
    role: "Dermatologin",
    location: "Wien 1. Bezirk",
    stars: 5,
    text: "Der KI-Telefonassistent hat unsere Praxis revolutioniert. Kein Anruf geht mehr verloren — auch nicht um 23 Uhr.",
    highlight: "100% Anruf-Annahme",
  },
  {
    name: "Dr. Michael Steiner",
    role: "Kieferorthopäde",
    location: "Salzburg",
    stars: 5,
    text: "Als Neugründer war ich skeptisch. Heute bin ich auf Platz 1 bei Google und habe mehr Patienten als ich behandeln kann.",
    highlight: "847% ROI",
  },
  {
    name: "Dr. Anna Hofer",
    role: "Allgemeinmedizinerin",
    location: "Graz",
    stars: 5,
    text: "Endlich eine Agentur, die die Medizinbranche wirklich versteht. Keine generischen Lösungen, sondern echte Expertise.",
    highlight: "+180% Privatpatienten",
  },
  {
    name: "Dr. Klaus Brunner",
    role: "Orthopäde",
    location: "Linz",
    stars: 5,
    text: "Ich hätte nie gedacht, dass Marketing für meine Praxis so einen Unterschied macht. Innerhalb von 3 Monaten war die Investition mehr als amortisiert.",
    highlight: "+€62.000/Jahr",
  },
  {
    name: "Dr. Sandra Mayer",
    role: "Augenheilkunde",
    location: "Wien Hietzing",
    stars: 5,
    text: "Das Team ist schnell, professionell und erklärt alles auf Augenhöhe. Man merkt, dass sie Ärzte schätzen und respektieren.",
    highlight: "Voller Terminkalender",
  },
];

export function TestimonialsV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-xl mb-12 lg:mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center bg-[#e8f0fb] text-[#6798df] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.1em] mb-6"
            style={RIFT}
          >
            Stimmen unserer Kunden
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="uppercase leading-[0.95] tracking-tight text-[#1c1d1f]"
            style={{ ...RIFT, fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            WAS ÄRZTE
            <br />
            <span className="text-[#6798df]">ÜBER UNS SAGEN</span>
          </motion.h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#e5e5e5]">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-white p-7 lg:p-8 group hover:bg-[#f8f8f8] transition-colors duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {/* Blue bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#6798df] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote mark */}
              <Quote className="w-8 h-8 text-[#e5e5e5] mb-3" />

              {/* Text */}
              <p className="text-[#555] text-sm leading-relaxed mb-6 flex-1">"{t.text}"</p>

              {/* Highlight badge */}
              <div
                className="inline-block text-[10px] font-bold uppercase tracking-[0.08em] px-2.5 py-1.5 bg-[#e8f0fb] text-[#6798df] mb-5"
                style={RIFT}
              >
                {t.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#f0f0f0]">
                <div className="w-10 h-10 bg-[#1c1d1f] flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="text-[#1c1d1f] font-semibold text-sm leading-tight">{t.name}</p>
                  <p className="text-[#999] text-xs">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aggregate stats */}
        <motion.div
          className="mt-[1px] grid grid-cols-3 gap-[1px] bg-[#e5e5e5]"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          {[
            { value: "150+", label: "Zufriedene Praxen" },
            { value: "4.9/5", label: "Durchschnittliche Bewertung" },
            { value: "98%", label: "Weiterempfehlungsrate" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#f8f8f8] p-6 lg:p-8 text-center">
              <div
                className="text-[#1c1d1f] font-bold text-3xl lg:text-4xl leading-none mb-2"
                style={RIFT}
              >
                {stat.value}
              </div>
              <div className="text-[#999] text-xs uppercase tracking-[0.08em] font-medium" style={RIFT}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
