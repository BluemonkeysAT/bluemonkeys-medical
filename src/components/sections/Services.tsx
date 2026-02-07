"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Globe, 
  Search, 
  Megaphone, 
  Palette, 
  Bot, 
  Phone,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Zap,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Premium Websites",
    subtitle: "Die convertieren",
    description: "Moderne, schnelle Websites die aus Besuchern Patienten machen.",
    features: ["Conversion-optimiert", "Terminbuchung integriert", "DSGVO-konform"],
    result: "+89% mehr Anfragen",
    resultIcon: TrendingUp,
    price: "ab €4.900",
    popular: false,
    size: "normal", // normal, large, tall
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Search,
    title: "SEO für Ärzte",
    subtitle: "Platz 1 bei Google",
    description: "Werden Sie gefunden wenn Patienten suchen. Lokale SEO, Medical Content.",
    features: ["Lokale SEO", "Medical Content", "Google Business"],
    result: "3x mehr Besucher",
    resultIcon: Users,
    price: "ab €990/Mo",
    popular: true,
    size: "large",
    gradient: "from-violet-500/10 to-purple-500/10",
  },
  {
    icon: Megaphone,
    title: "Google & Meta Ads",
    subtitle: "Sofort mehr Patienten",
    description: "Bezahlte Werbung die funktioniert.",
    features: ["Google Ads", "Meta Ads", "A/B Testing"],
    result: "4.2x ROAS",
    resultIcon: TrendingUp,
    price: "ab €690/Mo",
    popular: false,
    size: "normal",
    gradient: "from-orange-500/10 to-amber-500/10",
  },
  {
    icon: Bot,
    title: "KI-Telefonassistent",
    subtitle: "24/7 erreichbar",
    description: "Verpassen Sie nie wieder einen Anruf. KI nimmt Termine an — auch nachts.",
    features: ["Natürliche Sprache", "Terminbuchung", "Praxissoftware-Integration"],
    result: "+35% mehr Termine",
    resultIcon: Phone,
    price: "ab €290/Mo",
    popular: true,
    size: "tall",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    icon: Palette,
    title: "Praxis Branding",
    subtitle: "Der erste Eindruck",
    description: "Logo bis Visitenkarte — konsistenter Auftritt.",
    features: ["Logo Design", "Corporate Design", "Print & Digital"],
    result: "+40% Wiedererkennung",
    resultIcon: Zap,
    price: "ab €2.900",
    popular: false,
    size: "normal",
    gradient: "from-pink-500/10 to-rose-500/10",
  },
  {
    icon: Sparkles,
    title: "LLM Marketing",
    subtitle: "Die Zukunft ist jetzt",
    description: "Werden Sie bei ChatGPT & Perplexity empfohlen.",
    features: ["LLM-optimiert", "E-E-A-T", "Monitoring"],
    result: "Marktvorteil",
    resultIcon: Zap,
    price: "auf Anfrage",
    popular: false,
    size: "normal",
    gradient: "from-indigo-500/10 to-blue-500/10",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 relative overflow-hidden" id="services">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fafafa]">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/80 border border-white/50 px-4 py-2 rounded-full shadow-lg mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#5fdafb]" />
            <span className="text-sm font-semibold text-[#222]">Unsere Leistungen</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-black mb-6 tracking-tight">
            ALLES FÜR IHREN
            <br />
            <span className="bg-gradient-to-r from-[#5fdafb] via-[#22d3ee] to-[#a855f7] bg-clip-text text-transparent">
              PRAXIS-ERFOLG
            </span>
          </h2>
          
          <p className="text-xl text-[#666] max-w-2xl mx-auto">
            Von der Website bis zum KI-Telefonassistenten — 
            <strong className="text-black"> alles aus einer Hand, alles messbar.</strong>
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 auto-rows-[minmax(280px,auto)]">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={`group relative backdrop-blur-xl bg-white/80 border border-white/50 rounded-3xl p-6 lg:p-8 transition-all duration-500 cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl ${
                service.size === "large" ? "md:col-span-2" : ""
              } ${service.size === "tall" ? "md:row-span-2" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              
              {/* Glow on hover */}
              <motion.div
                className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(95,218,251,0.3) 0%, rgba(168,85,247,0.3) 100%)",
                  filter: "blur(20px)",
                  zIndex: -1,
                }}
              />

              {/* Popular Badge */}
              {service.popular && (
                <motion.div 
                  className="absolute top-4 right-4 bg-gradient-to-r from-[#5fdafb] to-[#22d3ee] text-black px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                >
                  ⭐ BELIEBT
                </motion.div>
              )}

              <div className="relative z-10 h-full flex flex-col">
                {/* Icon */}
                <motion.div 
                  className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-[#5fdafb]/20 to-[#a855f7]/20 mb-5 w-fit"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-7 h-7 text-[#5fdafb]" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-black text-black mb-1 tracking-tight">
                  {service.title.toUpperCase()}
                </h3>
                <p className="bg-gradient-to-r from-[#5fdafb] to-[#a855f7] bg-clip-text text-transparent font-bold text-sm mb-3">
                  {service.subtitle}
                </p>
                <p className="text-[#666] mb-5 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature) => (
                    <li 
                      key={feature} 
                      className="flex items-center gap-1.5 text-xs font-medium text-[#555] bg-black/5 px-3 py-1.5 rounded-full"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#5fdafb]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Result Badge */}
                <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-700 px-4 py-2.5 rounded-xl mb-5">
                  <service.resultIcon className="w-4 h-4" />
                  <span className="font-bold text-sm">{service.result}</span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-black/5 mt-auto">
                  <span className="font-black text-black text-lg">{service.price}</span>
                  <Link 
                    href="#contact" 
                    className="group/link flex items-center gap-1 text-[#5fdafb] font-bold text-sm hover:gap-2 transition-all"
                  >
                    Anfragen
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Glassmorphism */}
        <motion.div
          className="relative backdrop-blur-xl bg-black/90 rounded-3xl p-10 lg:p-14 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5fdafb] opacity-20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#a855f7] opacity-15 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center">
            <h3 className="text-2xl lg:text-4xl font-black text-white mb-4 tracking-tight">
              NICHT SICHER WAS SIE BRAUCHEN?
            </h3>
            <p className="text-white/60 mb-8 max-w-xl mx-auto text-lg">
              Wir analysieren Ihre aktuelle Situation kostenlos und empfehlen genau die Maßnahmen, 
              die für Ihre Praxis am meisten Sinn machen.
            </p>
            <Link 
              href="#contact" 
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-[#5fdafb] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Kostenlose Potenzialanalyse
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
