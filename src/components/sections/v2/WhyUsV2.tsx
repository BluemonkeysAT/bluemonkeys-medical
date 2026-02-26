"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

const differentiators = [
  {
    feature: "Spezialisierung auf Ärzte",
    us: "Nur Ärzte & Zahnärzte — kein Maler, kein Restaurant",
    them: "Alle Branchen, keine Spezialisierung",
  },
  {
    feature: "Messbare Ergebnisse",
    us: "Monatliche Reports, ROI-Tracking, volle Transparenz",
    them: "\"Wir arbeiten daran\" ohne konkrete Zahlen",
  },
  {
    feature: "Alles aus einer Hand",
    us: "Website, SEO, Ads, KI, Branding — eine Agentur",
    them: "3-5 verschiedene Anbieter koordinieren",
  },
  {
    feature: "Reaktionszeit",
    us: "Antwort innerhalb von 24h, garantiert",
    them: "Oft Tage oder Wochen auf Rückmeldung warten",
  },
  {
    feature: "DSGVO & Compliance",
    us: "Vollständig DSGVO-konform, auf Medizin optimiert",
    them: "Generische Lösungen mit rechtlichen Risiken",
  },
];

const team = [
  { name: "Christoph Tockner", role: "Managing Director", photo: "https://v2.bluemonkeys.at/assets/images/team/christoph-tockner.png" },
  { name: "Gregor Wallner", role: "CTO & Performance Lead", photo: "https://v2.bluemonkeys.at/assets/images/team/gregor-wallner.png" },
  { name: "Moritz Miedler", role: "Creative Director", photo: "https://v2.bluemonkeys.at/assets/images/team/moritz-miedler.png" },
];

const brandLogos = [
  { src: "https://v2.bluemonkeys.at/assets/images/logo_a1.png", alt: "A1" },
  { src: "https://v2.bluemonkeys.at/assets/images/logo_wolftheiss.png", alt: "Wolf Theiss" },
  { src: "https://v2.bluemonkeys.at/assets/images/logo_thermewien2.png", alt: "Therme Wien" },
  { src: "https://v2.bluemonkeys.at/assets/images/logo_uniqa.png", alt: "Uniqa" },
  { src: "https://v2.bluemonkeys.at/assets/images/logo_cocacola.png", alt: "Coca-Cola" },
  { src: "https://v2.bluemonkeys.at/assets/images/logo_diepresse.png", alt: "Die Presse" },
  { src: "https://v2.bluemonkeys.at/assets/images/wirtschaftsbund.svg", alt: "Wirtschaftsbund" },
  { src: "https://v2.bluemonkeys.at/assets/images/logo_waterdrop.png", alt: "Waterdrop" },
];

export function WhyUsV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="why" className="bg-[#f8f8f8]">

      {/* ── Main content ── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* Left: Header + team */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center bg-[#e8f0fb] text-[#6798df] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.1em] mb-6"
              style={RIFT}
            >
              Warum wir?
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="uppercase leading-[0.95] tracking-tight text-[#1c1d1f] mb-6"
              style={{ ...RIFT, fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
            >
              NICHT DIE GÜNSTIGSTEN.
              <br />
              <span className="text-[#6798df]">DIE BESTEN.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#666] text-lg leading-relaxed mb-10 max-w-full">
              Es gibt hunderte Agenturen in Österreich. Wir sind die einzige, die ausschließlich
              für Ärzte und Zahnärzte arbeitet — und das jeden Tag aufs Neue beweist.
            </motion.p>

            {/* Team */}
            <motion.div variants={fadeUp}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-8 mt-8">
                {team.map((member) => (
                  <div key={member.name} className="flex items-stretch gap-3 pl-3 pr-5 bg-white border border-[#e5e5e5] hover:border-[#6798df] transition-colors duration-200">
                    {/* Cutout photo — bottom flush, top overflows */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-28 w-auto object-contain object-bottom flex-shrink-0 self-end -mt-8"
                    />
                    <div className="flex flex-col justify-center py-3">
                      <p className="text-[#1c1d1f] font-bold text-[15px] leading-tight" style={RIFT}>
                        {member.name}
                      </p>
                      <p className="text-[#aaa] text-[11px] mt-1 leading-snug">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Comparison table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Horizontal scroll wrapper for mobile */}
            <div className="overflow-x-auto">
              <div className="min-w-[460px]">
                {/* Table header */}
                <div className="grid grid-cols-[120px_1px_1fr_1px_1fr] items-center bg-[#1c1d1f] py-3">
                  <span className="text-white/40 text-sm uppercase tracking-[0.1em] px-4" style={RIFT}>
                    Kriterium
                  </span>
                  <div className="bg-white/10 self-stretch" />
                  <span
                    className="text-[#6798df] font-bold text-sm uppercase tracking-[0.1em] px-4 text-center"
                    style={RIFT}
                  >
                    Blue Monkeys
                  </span>
                  <div className="bg-white/10 self-stretch" />
                  <span
                    className="text-white/30 text-sm uppercase tracking-[0.1em] px-4 text-center"
                    style={RIFT}
                  >
                    Andere
                  </span>
                </div>

                {/* Rows */}
                <div className="divide-y divide-[#e5e5e5]">
                  {differentiators.map((d, i) => (
                    <motion.div
                      key={d.feature}
                      className="grid grid-cols-[120px_1px_1fr_1px_1fr] items-start bg-white hover:bg-[#f8f8f8] transition-colors"
                      initial={{ opacity: 0, x: 16 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.06 }}
                    >
                      <div className="p-3">
                        <p className="text-[#1c1d1f] font-semibold text-xs leading-snug">
                          {d.feature}
                        </p>
                      </div>
                      <div className="bg-[#e5e5e5] self-stretch" />
                      <div className="p-3">
                        <div className="flex items-start gap-2">
                          <div className="w-4 h-4 bg-[#6798df] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>
                          <p className="text-[#333] text-xs leading-relaxed">{d.us}</p>
                        </div>
                      </div>
                      <div className="bg-[#e5e5e5] self-stretch" />
                      <div className="p-3">
                        <div className="flex items-start gap-2">
                          <div className="w-4 h-4 bg-[#f5f5f5] flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-2.5 h-2.5 text-[#ccc]" />
                          </div>
                          <p className="text-[#aaa] text-xs leading-relaxed">{d.them}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust note */}
            <div className="bg-[#e8f0fb] border border-[#6798df]/20 p-5 mt-[1px]">
              <p className="text-[#6798df] font-bold text-sm uppercase tracking-[0.06em] mb-1" style={RIFT}>
                Nr. 1 Medizin-Agentur im DACH-Raum
              </p>
              <p className="text-[#555] text-xs leading-relaxed">
                Ausschließlich für Ärzte und Zahnärzte — in 5 Jahren über 50 Praxen auf Wachstumskurs gebracht.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Brands strip — same design as hero carousel ── */}
      <motion.div
        className="py-12 lg:py-16 bg-[#1c1d1f]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p
            className="text-center text-sm text-white/30 uppercase tracking-[0.22em] mb-6 font-medium"
            style={RIFT}
          >
            Brands für die wir gearbeitet haben
          </p>
          <div className="marquee">
            <div className="marquee-content">
              {[...brandLogos, ...brandLogos].map((logo, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={`${logo.alt}-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 w-auto object-contain opacity-65 hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
