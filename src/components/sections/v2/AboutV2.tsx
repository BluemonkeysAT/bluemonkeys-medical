"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

const stats = [
  { value: "15+", unit: "Jahre", label: "Agenturerfahrung" },
  { value: "50+", unit: "Enterprise", label: "Kunden betreut" },
  { value: "€50M+", unit: "Werbebudget", label: "erfolgreich verwaltet" },
];

const team = [
  { initials: "GW", name: "Gregor Wallner", role: "Gründer & CEO" },
  { initials: "MM", name: "Moritz Miedler", role: "Gründer & Strategie" },
  { initials: "CT", name: "Christoph Tockner", role: "Gründer & Kreation" },
];

const brands = [
  "Red Bull", "Volkswagen", "Erste Bank", "OMV", "Raiffeisen",
  "BMW", "Porsche", "Billa", "A1 Telekom", "Swarovski",
  "Vienna Insurance Group", "Wiener Stadtwerke", "Strabag", "Kapsch",
];

export function AboutV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="about" className="bg-[#1c1d1f] relative overflow-hidden">
      {/* Blue accent top line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#6798df]" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">

        {/* ── TOP: Badge + headline + body ── */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="mb-16 lg:mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center bg-[#6798df]/10 text-[#6798df] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.1em] mb-6"
            style={RIFT}
          >
            Über uns
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-end">
            <motion.h2
              variants={fadeUp}
              className="uppercase leading-[0.93] tracking-tight text-white"
              style={{ ...RIFT, fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
            >
              NICHT NUR FÜR ÄRZTE —
              <br />
              <span className="text-[#6798df]">DIE BESTEN DER BRANCHE.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/50 text-base leading-relaxed">
              Bevor wir uns auf Arztpraxen spezialisiert haben, haben wir über 15 Jahre lang für
              einige der bekanntesten Marken Europas gearbeitet. Sie bekommen die besten
              Marketer der Branche — die sich auf Ärzte spezialisiert haben.
            </motion.p>
          </div>
        </motion.div>

        {/* ── STATS: 3 full-width rows ── */}
        <div className="border-t border-white/10 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              className="grid grid-cols-[1fr_auto] items-center border-b border-white/10 py-6 lg:py-8 group"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="text-white leading-none group-hover:text-[#6798df] transition-colors duration-300"
                  style={{ ...RIFT, fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
                >
                  {s.value}
                </span>
                <span
                  className="text-white/30 uppercase tracking-[0.08em] text-sm lg:text-base"
                  style={RIFT}
                >
                  {s.unit}
                </span>
              </div>
              <span className="text-white/30 text-xs lg:text-sm uppercase tracking-[0.1em]" style={RIFT}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── TEAM ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <p className="text-white/25 text-[11px] uppercase tracking-[0.18em] mb-6" style={RIFT}>
            Das Team
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06]">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="bg-[#252629] p-6 flex items-center gap-4 hover:bg-[#2d2e32] transition-colors duration-200"
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55 + i * 0.08 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#6798df]/15 border border-[#6798df]/20 flex items-center justify-center shrink-0">
                  <span className="text-[#6798df] font-bold text-sm leading-none" style={RIFT}>
                    {member.initials}
                  </span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight" style={RIFT}>
                    {member.name}
                  </p>
                  <p className="text-white/35 text-[11px] mt-0.5">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── BRANDS + CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-t border-white/10 pt-10"
        >
          <div className="flex-1 min-w-0">
            <p className="text-white/25 text-[11px] uppercase tracking-[0.18em] mb-4" style={RIFT}>
              Brands für die wir gearbeitet haben
            </p>
            <div className="marquee">
              <div className="marquee-content">
                {[...brands, ...brands].map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className="text-white/30 font-bold uppercase text-xs tracking-[0.08em] whitespace-nowrap hover:text-[#6798df] transition-colors"
                    style={RIFT}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-4 bg-[#6798df] text-[#1c1d1f] font-bold text-sm uppercase tracking-[0.05em] hover:bg-white transition-colors duration-300"
            style={RIFT}
          >
            Unser Team kennenlernen
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
