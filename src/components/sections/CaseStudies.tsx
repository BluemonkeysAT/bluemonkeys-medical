"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, TrendingUp, Users, Calendar } from "lucide-react";

const cases = [
  {
    title: "Dr. Müller Zahnklinik",
    category: "Zahnarzt",
    image: "/cases/dental-1.jpg",
    description:
      "Kompletter digitaler Neuauftritt mit Website, SEO und Google Ads Kampagne.",
    results: [
      { icon: TrendingUp, value: "+156%", label: "mehr Anfragen" },
      { icon: Users, value: "89", label: "neue Patienten/Monat" },
      { icon: Calendar, value: "3", label: "Monate bis ROI" },
    ],
    testimonial: {
      quote: "Die beste Investition in unsere Praxis seit Jahren.",
      author: "Dr. Thomas Müller",
    },
  },
  {
    title: "Praxis am Park",
    category: "Allgemeinmedizin",
    image: "/cases/medical-1.jpg",
    description:
      "Von null Online-Präsenz zur lokalen #1 bei Google für 'Hausarzt Wien Zentrum'.",
    results: [
      { icon: TrendingUp, value: "#1", label: "Google Ranking" },
      { icon: Users, value: "+72%", label: "Website Traffic" },
      { icon: Calendar, value: "6", label: "Monate SEO" },
    ],
    testimonial: {
      quote: "Endlich werden wir von Patienten gefunden, nicht umgekehrt.",
      author: "Dr. Anna Weber",
    },
  },
  {
    title: "Kieferorthopädie Donaustadt",
    category: "Kieferorthopäde",
    image: "/cases/ortho-1.jpg",
    description:
      "Premium-Branding und automatisierte Terminbuchung mit KI-Chatbot.",
    results: [
      { icon: TrendingUp, value: "-40%", label: "weniger Telefonanrufe" },
      { icon: Users, value: "24/7", label: "Terminbuchung" },
      { icon: Calendar, value: "€50K+", label: "Jahresumsatz mehr" },
    ],
    testimonial: {
      quote: "Der Chatbot hat unser Praxisleben verändert.",
      author: "Dr. Michael Berger",
    },
  },
];

export function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <section id="cases" className="section overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="container-lg px-4 md:px-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-display text-bm-black mb-4">
                Das haben wir erreicht.
              </h2>
              <p className="text-xl text-bm-gray-400 max-w-2xl">
                Echte Ergebnisse für echte Praxen. Keine Theorie, sondern bewiesener ROI.
              </p>
            </div>
            <motion.a
              href="#contact"
              className="text-bm-blue font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              whileHover={{ x: 5 }}
            >
              Ihr Case könnte hier stehen
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div
          ref={containerRef}
          className="scroll-x pb-8 -mb-8"
        >
          <motion.div
            className="flex gap-6 px-4 md:px-8"
            variants={staggerContainer}
          >
            {/* Spacer for container alignment */}
            <div className="shrink-0 w-[calc((100vw-1280px)/2)] hidden xl:block" />

            {cases.map((caseStudy, i) => (
              <motion.div
                key={caseStudy.title}
                className="snap-child"
                variants={fadeUp}
                custom={i}
              >
                <Card
                  className="w-[340px] md:w-[400px] h-full overflow-hidden"
                  padding="none"
                  hover
                  glow
                >
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-bm-gray-200 to-bm-gray-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-20">🏥</span>
                    </div>
                    <Badge className="absolute top-4 left-4" variant="outline">
                      {caseStudy.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-bm-black mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-bm-gray-400 mb-6">{caseStudy.description}</p>

                    {/* Results Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {caseStudy.results.map((result) => (
                        <div key={result.label} className="text-center">
                          <result.icon className="w-5 h-5 text-bm-blue mx-auto mb-1" />
                          <div className="text-lg font-bold text-bm-black">
                            {result.value}
                          </div>
                          <div className="text-xs text-bm-gray-400">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="pt-4 border-t border-bm-gray-100">
                      <p className="text-sm text-bm-gray-500 italic mb-2">
                        "{caseStudy.testimonial.quote}"
                      </p>
                      <p className="text-sm font-semibold text-bm-black">
                        {caseStudy.testimonial.author}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div className="snap-child" variants={fadeUp}>
              <Card
                className="w-[340px] md:w-[400px] h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-bm-blue to-bm-blue-dark"
                padding="lg"
                hover={false}
              >
                <div className="text-white">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold mb-2">Bereit für Ihren Erfolg?</h3>
                  <p className="text-white/80 mb-6">
                    Lassen Sie uns gemeinsam Ihre Praxis nach vorne bringen.
                  </p>
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-white text-bm-blue px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Jetzt starten
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.a>
                </div>
              </Card>
            </motion.div>

            {/* Spacer */}
            <div className="shrink-0 w-4 md:w-8" />
          </motion.div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="container-lg px-4 md:px-8 mt-8">
          <div className="h-1 bg-bm-gray-100 rounded-full overflow-hidden max-w-xs mx-auto">
            <motion.div
              className="h-full bg-bm-blue rounded-full"
              style={{ scaleX: scrollXProgress, transformOrigin: "left" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
