"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, Star, TrendingUp, Users, Shield } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

const heroStats = [
  { icon: TrendingUp, value: "+340%", label: "mehr Anfragen" },
  { icon: Users,      value: "2–4 Wo.", label: "erste Ergebnisse" },
  { icon: Shield,     value: "Nr. 1", label: "für Arztpraxen" },
];

// Position each stat card on the image
const statPositions = [
  { top: "20px", right: "20px" },
  { top: "50%", left: "-24px", transform: "translateY(-50%)" },
  { bottom: "90px", right: "20px" },
];

const trustLogos = [
  "Zahnarzt Dr. Reinisch", "Dr. Gradwohl Schönheit", "Zahnwohl Penzing",
  "Dr. Heidi Paul Gynäkologie", "Dr. Turkov", "Dr. Miedler", "Dr. Matis",
];

export function HeroV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] lg:h-[100svh] flex flex-col bg-white overflow-hidden"
    >
      {/* Grid background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1c1d1f 1px, transparent 1px), linear-gradient(90deg, #1c1d1f 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.04,
        }}
      />

      {/* ── Main content ── */}
      <div className="flex-1 flex items-center pt-[72px] min-h-0">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10 py-4 lg:py-8">
          <div className="grid lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_500px] gap-10 lg:gap-12 items-center">

            {/* ── LEFT ── */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
            >
              {/* Social proof */}
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
                <div className="flex -space-x-2">
                  {[
                    "https://i.pravatar.cc/40?img=11",
                    "https://i.pravatar.cc/40?img=47",
                    "https://i.pravatar.cc/40?img=32",
                    "https://i.pravatar.cc/40?img=58",
                    "https://i.pravatar.cc/40?img=19",
                  ].map((src, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={src}
                      src={src}
                      alt="Arzt"
                      className="w-8 h-8 rounded-full border-[2px] border-white object-cover"
                      style={{ zIndex: 5 - i }}
                      loading="lazy"
                      decoding="async"
                      width={32}
                      height={32}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-[#888] leading-none mt-0.5">
                    <strong className="text-[#1c1d1f]">5.0 Bewertung</strong> bei unseren Kunden
                  </p>
                </div>
              </motion.div>

              {/* H1 */}
              <motion.h1
                variants={fadeUp}
                className="uppercase leading-[0.9] tracking-tight text-[#1c1d1f] mb-4"
                style={{ ...RIFT, fontSize: "clamp(3.4rem, 7.5vw, 5rem)" }}
              >
                IHRE PRAXIS
                <br />
                <span className="text-[#6798df]">VERDIENT MEHR</span>
                <br />
                PATIENTEN
              </motion.h1>

              {/* Subline 1 */}
              <motion.p
                variants={fadeUp}
                className="text-base lg:text-lg text-[#666] leading-relaxed max-w-[500px] mb-2"
              >
                Während Sie Patienten behandeln, verlieren Sie täglich Neupatienten an Ihre
                Konkurrenz.
              </motion.p>

              {/* Subline 2 — highlighted result */}
              <motion.p
                variants={fadeUp}
                className="text-base lg:text-lg text-[#666] leading-relaxed max-w-[500px] mb-6"
              >
                Wir ändern das — mit digitalem Marketing, das speziell für Ärzte funktioniert.{" "}
                <strong className="text-[#1c1d1f]">
                  Durchschnittlich{" "}
                  <span className="text-[#6798df]">+€53.000 Mehrumsatz</span> im ersten Jahr.
                </strong>
              </motion.p>

              {/* Stat boxes — hidden on mobile, shown on desktop via floating cards */}
              <motion.div
                variants={fadeUp}
                className="hidden"
              >
                {heroStats.map((s) => (
                  <div
                    key={s.value}
                    className="bg-white border border-[#e5e5e5] p-3 hover:border-[#6798df] transition-colors duration-200"
                  >
                    <s.icon className="w-4 h-4 text-[#6798df] mb-2" />
                    <div
                      className="text-[#1c1d1f] font-bold text-xl leading-none mb-0.5"
                      style={RIFT}
                    >
                      {s.value}
                    </div>
                    <div className="text-[#999] text-[11px] leading-tight">{s.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-row gap-2 sm:gap-3 mb-5">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-3.5 bg-[#1c1d1f] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.05em] hover:bg-[#6798df] hover:text-[#1c1d1f] transition-all duration-300 flex-1 sm:flex-none"
                  style={RIFT}
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="sm:hidden">Analyse starten</span>
                  <span className="hidden sm:inline">Kostenlose Analyse starten</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </a>
                <a
                  href="#cases"
                  className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-3.5 border border-[#1c1d1f] text-[#1c1d1f] font-bold text-xs sm:text-sm uppercase tracking-[0.05em] hover:bg-[#1c1d1f] hover:text-white transition-all duration-300 flex-1 sm:flex-none"
                  style={RIFT}
                >
                  <span className="sm:hidden">Referenzen</span>
                  <span className="hidden sm:inline">Erfolgsgeschichten</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </a>
              </motion.div>

              {/* Trust micro-copy */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                {["Unverbindlich", "Keine Kosten", "Antwort in 24h"].map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 text-[11px] text-[#aaa] uppercase tracking-[0.06em] font-medium"
                  >
                    <span className="w-3.5 h-3.5 flex items-center justify-center bg-emerald-50 text-emerald-600 text-[9px] font-bold">
                      ✓
                    </span>
                    {t}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT: Doctor image + floating stat cards ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
              className="relative hidden lg:block"
              style={{ height: "min(520px, calc(100svh - 160px))" }}
            >
              {/* Video */}
              <div className="relative w-full h-full overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&q=80&auto=format&fit=crop"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                >
                  <source src="/hero.mp4" type="video/mp4" />
                </video>
                {/* Gradient: dark at bottom for quote readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1d1f]/85 via-[#1c1d1f]/15 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-bl from-[#6798df]/10 to-transparent" />
                {/* Brand accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#6798df]" />
              </div>

              {/* Floating stat cards */}
              {heroStats.map((s, i) => (
                <motion.div
                  key={s.value}
                  className="absolute bg-white shadow-2xl border border-[#f0f0f0] p-3.5 flex items-center gap-3 min-w-[148px]"
                  style={statPositions[i]}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.65 + i * 0.15, type: "spring", stiffness: 280, damping: 20 }}
                >
                  <div className="w-10 h-10 bg-[#6798df] flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div
                      className="text-[#1c1d1f] font-bold text-[1.35rem] leading-none"
                      style={RIFT}
                    >
                      {s.value}
                    </div>
                    <div className="text-[#888] text-[11px] mt-0.5 whitespace-nowrap">
                      {s.label}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Bottom quote overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <p className="text-white/75 text-sm italic leading-relaxed mb-1.5">
                  "In 6 Monaten haben wir unsere Patientenanfragen verdreifacht."
                </p>
                <p className="text-[#6798df] font-semibold text-xs" style={RIFT}>
                  — Dr. Reinisch, Zahnarzt Wien
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Carousel — pinned to bottom, always above fold ── */}
      <motion.div
        className="py-5 lg:py-16 relative z-10 bg-[#1c1d1f]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.0 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p
            className="text-center text-sm text-white/30 uppercase tracking-[0.22em] mb-3 lg:mb-6 font-medium"
            style={RIFT}
          >
            Vertrauen von führenden Praxen in DACH
          </p>
          <div className="marquee">
            <div className="marquee-content">
              {[...trustLogos, ...trustLogos].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="text-white/70 font-bold uppercase text-lg tracking-[0.06em] whitespace-nowrap hover:text-[#6798df] transition-colors cursor-default"
                  style={RIFT}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
