"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Euro,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Play
} from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    type: "Zahnarztpraxis",
    name: "Dr. Thomas Weber",
    location: "Wien Döbling",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    logo: "TW",
    challenge: "Keine Online-Präsenz, nur Empfehlungen. Website von 2014. Wartezeiten zu lang bei Kassenpatienten, zu wenige Privatpatienten.",
    solution: "Neue Premium-Website, lokale SEO-Strategie, Google Ads für Implantate und Ästhetik.",
    results: [
      { label: "Mehr Patientenanfragen", value: "+340%", icon: Users },
      { label: "Privatpatienten-Anteil", value: "von 20% auf 55%", icon: TrendingUp },
      { label: "Zusatzumsatz/Jahr", value: "+€127.000", icon: Euro },
    ],
    quote: "Ich habe in 20 Jahren Praxis noch nie so viele Anfragen bekommen. Die Qualität der Patienten ist eine andere — fast nur noch Privatpatienten und Selbstzahler.",
    timeline: "6 Monate",
  },
  {
    id: 2,
    type: "Hautarzt",
    name: "Dr. Lisa Berger",
    location: "Wien Innere Stadt",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    logo: "LB",
    challenge: "Starke Konkurrenz in zentraler Lage. Viele Kassenpatienten, wenig ästhetische Behandlungen.",
    solution: "Rebranding, spezialisierte Landing Pages für Botox/Filler, Instagram Marketing, KI-Telefonassistent.",
    results: [
      { label: "Ästhetik-Anfragen", value: "+520%", icon: TrendingUp },
      { label: "Telefonannahme", value: "100% (statt 67%)", icon: Users },
      { label: "Zusatzumsatz/Jahr", value: "+€89.000", icon: Euro },
    ],
    quote: "Der KI-Telefonassistent war ein Game-Changer. Wir verpassen keinen Anruf mehr und ich habe wieder Zeit für meine Patienten.",
    timeline: "4 Monate",
  },
  {
    id: 3,
    type: "Kieferorthopädie",
    name: "Dr. Michael Steiner",
    location: "Salzburg",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
    logo: "MS",
    challenge: "Neu gegründete Praxis, kein Bekanntheitsgrad, keine Empfehlungen.",
    solution: "Full-Service Paket: Branding, Website, SEO, Google Ads, Social Media.",
    results: [
      { label: "Google Position", value: "#1 für 'Kieferorthopäde Salzburg'", icon: TrendingUp },
      { label: "Erstberatungen/Monat", value: "von 8 auf 47", icon: Users },
      { label: "ROI im 1. Jahr", value: "847%", icon: Euro },
    ],
    quote: "Als Neugründer war Online-Marketing entscheidend. Blue Monkeys hat mir einen Vorsprung von 5 Jahren gegenüber etablierten Kollegen verschafft.",
    timeline: "12 Monate",
  },
];

export function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCase, setActiveCase] = useState(0);

  const nextCase = () => setActiveCase((prev) => (prev + 1) % caseStudies.length);
  const prevCase = () => setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  const currentCase = caseStudies[activeCase];

  return (
    <section ref={ref} className="py-24 bg-black text-white" id="cases">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#5fdafb] font-bold text-sm uppercase tracking-widest mb-4">
            Erfolgsgeschichten
          </p>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
            ECHTE ERGEBNISSE
            <br />
            <span className="text-[#5fdafb]">ECHTE PRAXEN</span>
          </h2>
          
          <p className="text-xl text-white/70">
            Keine leeren Versprechen. Hier sind die Zahlen, die wir für unsere Kunden erreicht haben.
          </p>
        </motion.div>

        {/* Case Study Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCase.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left - Image & Info */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={currentCase.image} 
                    alt={currentCase.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#5fdafb] rounded-full flex items-center justify-center text-black font-bold text-xl">
                        {currentCase.logo}
                      </div>
                      <div>
                        <div className="text-[#5fdafb] font-medium text-sm">{currentCase.type}</div>
                        <div className="text-white font-bold text-xl">{currentCase.name}</div>
                        <div className="text-white/60 text-sm">{currentCase.location}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Badge */}
                <div className="absolute -top-3 -right-3 bg-[#5fdafb] text-black px-4 py-2 font-bold text-sm">
                  {currentCase.timeline}
                </div>
              </div>

              {/* Right - Content */}
              <div>
                {/* Challenge */}
                <div className="mb-8">
                  <h4 className="text-[#5fdafb] font-bold text-sm uppercase tracking-widest mb-2">
                    Die Herausforderung
                  </h4>
                  <p className="text-white/80 text-lg">{currentCase.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h4 className="text-[#5fdafb] font-bold text-sm uppercase tracking-widest mb-2">
                    Unsere Lösung
                  </h4>
                  <p className="text-white/80 text-lg">{currentCase.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="text-[#5fdafb] font-bold text-sm uppercase tracking-widest mb-4">
                    Die Ergebnisse
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {currentCase.results.map((result) => (
                      <div key={result.label} className="bg-white/5 border border-white/10 p-4 rounded-lg">
                        <result.icon className="w-5 h-5 text-[#5fdafb] mb-2" />
                        <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
                          {result.value}
                        </div>
                        <div className="text-white/50 text-sm">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-white/5 border-l-4 border-[#5fdafb] p-6 rounded-r-lg">
                  <Quote className="w-8 h-8 text-[#5fdafb] mb-4" />
                  <p className="text-white/90 italic text-lg mb-4">"{currentCase.quote}"</p>
                  <p className="text-[#5fdafb] font-bold">{currentCase.name}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            <div className="flex gap-2">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCase(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === activeCase ? 'bg-[#5fdafb] w-8' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={prevCase}
                className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextCase}
                className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 pt-16 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
            DIE NÄCHSTE ERFOLGSGESCHICHTE?
            <br />
            <span className="text-[#5fdafb]">IHRE PRAXIS.</span>
          </h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Lassen Sie uns herausfinden, welches Potenzial in Ihrer Praxis steckt. 
            Die erste Analyse ist kostenlos.
          </p>
          <Link 
            href="#contact" 
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#5fdafb] text-black font-bold hover:bg-white transition-all"
          >
            Jetzt Potenzial analysieren
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
