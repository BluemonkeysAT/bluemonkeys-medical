"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

export function CTABannerV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#1c1d1f] py-20 lg:py-28 overflow-hidden relative">
      {/* Blue vertical accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#6798df]" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div
              className="inline-flex items-center bg-[#6798df]/10 text-[#6798df] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.1em] mb-6"
              style={RIFT}
            >
              Jetzt handeln
            </div>
            <h2
              className="uppercase leading-[0.92] tracking-tight text-white mb-6"
              style={{ ...RIFT, fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              DIE NÄCHSTE
              <br />
              ERFOLGSGESCHICHTE?
              <br />
              <span className="text-[#6798df]">IHRE PRAXIS.</span>
            </h2>
            <p className="text-white/50 text-base lg:text-lg leading-relaxed max-w-xl">
              Starten Sie jetzt mit einer kostenlosen Praxis-Analyse. Keine Verpflichtungen,
              keine Kosten — nur ein ehrliches Gespräch über Ihr Potenzial.
            </p>
          </motion.div>

          {/* Right: CTA block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="shrink-0 flex flex-col gap-4"
          >
            {/* Urgency */}
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-white/60 text-sm font-medium">
                Noch <strong className="text-white">3 Plätze frei</strong> für Q2 2025
              </span>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-9 py-5 bg-[#6798df] text-[#1c1d1f] font-bold text-base uppercase tracking-[0.06em] hover:bg-white transition-all duration-300"
              style={RIFT}
            >
              Kostenlose Analyse starten
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-2 text-white/40 text-xs">
              <Shield className="w-3.5 h-3.5" />
              <span>100% Geld-zurück-Garantie · Keine Mindestlaufzeit</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
