"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

const testimonials = [
  {
    name: "Dr. Reinisch",
    practice: "Zahnarzt Wien",
    quote:
      "In 6 Monaten haben wir unsere Privatpatientenanfragen verdreifacht. Das Team versteht die Besonderheiten einer Arztpraxis wie kein anderes.",
    services: ["SEO", "Website", "Google Ads"],
    resultNumber: "+340%",
    resultLabel: "mehr Anfragen",
  },
  {
    name: "Dr. Gradwohl",
    practice: "Schönheitschirurgie Wien",
    quote:
      "Endlich eine Agentur, die nicht erklärt werden muss, was eine Privatpraxis braucht. Die Ergebnisse sprechen für sich.",
    services: ["Google Ads", "KI-Assistent"],
    resultNumber: "+127%",
    resultLabel: "mehr Termine",
  },
  {
    name: "Dr. Heidi Paul",
    practice: "Gynäkologie Wien",
    quote:
      "Unsere Website war ein Projekt von 2016. Jetzt bekommen wir täglich Anfragen über Formulare — das kannte ich vorher nicht.",
    services: ["Website", "SEO", "Branding"],
    resultNumber: "3× mehr",
    resultLabel: "Onlineanfragen",
  },
];

export function ReviewsV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#1c1d1f]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-32">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-2xl mb-14 lg:mb-20"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center bg-[#6798df]/10 text-[#6798df] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.1em] mb-6"
            style={RIFT}
          >
            Echte Ergebnisse
          </motion.div>

          {/* H2 */}
          <motion.h2
            variants={fadeUp}
            className="uppercase leading-[0.95] tracking-tight text-white"
            style={{ ...RIFT, fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            WAS UNSERE KUNDEN{" "}
            <span className="text-[#6798df]">SAGEN</span> — UND ERREICHT HABEN
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="mt-5 text-white/50 text-base lg:text-lg leading-relaxed"
          >
            Echte Stimmen aus echten Praxen — mit messbaren Ergebnissen.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/[0.06]"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="bg-[#252629] border border-white/[0.08] p-6 lg:p-8 flex flex-col gap-5 hover:brightness-110 transition-[filter] duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-sm leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Service tags */}
              <div className="flex flex-wrap gap-2">
                {t.services.map((s) => (
                  <span
                    key={s}
                    className="bg-[#6798df]/15 text-[#6798df] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.07em]"
                    style={RIFT}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Result stat */}
              <div className="border-t border-white/[0.08] pt-5 flex items-end justify-between gap-4">
                <div>
                  <div
                    className="text-[#6798df] leading-none"
                    style={{ ...RIFT, fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
                  >
                    {t.resultNumber}
                  </div>
                  <div className="text-white/50 text-xs uppercase tracking-[0.07em] mt-1" style={RIFT}>
                    {t.resultLabel}
                  </div>
                </div>

                {/* Avatar placeholder */}
                <div className="shrink-0 flex flex-col items-center gap-1.5">
                  <div className="w-10 h-10 bg-[#6798df]/20 rounded-full" />
                  <div className="text-right">
                    <p className="text-white text-xs font-bold leading-tight" style={RIFT}>
                      {t.name}
                    </p>
                    <p className="text-white/40 text-[11px] leading-tight">{t.practice}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom strip */}
      <div className="bg-[#141415] py-4 px-6 text-center">
        <p className="text-white/30 text-xs tracking-[0.04em]">
          Alle Bewertungen sind von echten Kunden. Keine Fake-Reviews.
        </p>
      </div>
    </section>
  );
}
