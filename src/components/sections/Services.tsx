"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Card } from "@/components/ui/Card";
import {
  Globe,
  Search,
  Megaphone,
  Palette,
  Bot,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Praxis-Websites",
    description:
      "Maßgeschneidertes Design, das Ihre Praxis repräsentiert und Patienten überzeugt. Schnell, mobil-optimiert, barrierefrei.",
    features: ["Responsive Design", "Termin-Integration", "DSGVO-konform"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      '"Zahnarzt Wien" — wenn Patienten suchen, sollten Sie gefunden werden. Lokale SEO, Google My Business, Content der rankt.',
    features: ["Lokale SEO", "Google My Business", "Content-Strategie"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Megaphone,
    title: "Google & Meta Ads",
    description:
      "Gezielt die richtigen Patienten ansprechen. Messbar, skalierbar, profitabel. Sie kümmern sich um Patienten, wir um Werbung.",
    features: ["Google Ads", "Meta Ads", "Retargeting"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description:
      "Von der Visitenkarte bis zur Praxisbeschilderung. Ein konsistentes Erscheinungsbild, das Vertrauen schafft.",
    features: ["Logo-Design", "Praxis-CI", "Drucksachen"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Bot,
    title: "KI-Assistenten",
    description:
      "Chatbots für Terminanfragen, automatisierte Patientenkommunikation, intelligente Workflows. Die Zukunft der Praxisorganisation.",
    features: ["Chatbots", "Automatisierung", "24/7 Erreichbar"],
    color: "from-bm-blue to-indigo-500",
  },
  {
    icon: TrendingUp,
    title: "Laufende Betreuung",
    description:
      "Monatliche Optimierung, Reporting, Support. Wir bleiben dran, damit Ihre Praxis wächst.",
    features: ["Monatliche Reports", "Laufende Optimierung", "Persönlicher Support"],
    color: "from-amber-500 to-orange-500",
  },
];

export function Services() {
  return (
    <section id="services" className="section bg-bm-gray-50">
      <motion.div
        className="container-lg"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-display text-bm-black mb-4">
            Alles aus einer Hand.
          </h2>
          <p className="text-xl text-bm-gray-400 max-w-2xl mx-auto">
            Kein Jonglieren mit verschiedenen Agenturen. Wir kümmern uns um
            alles, was Ihre Praxis digital braucht.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              custom={i}
              transition={{ delay: i * 0.1 }}
            >
              <Card
                className="h-full group"
                padding="lg"
                hover
                glow
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} 
                              flex items-center justify-center mb-5 
                              group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title with Arrow */}
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-bm-black">
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-bm-gray-300 group-hover:text-bm-blue 
                               group-hover:translate-x-1 group-hover:-translate-y-1 
                               transition-all duration-300"
                  />
                </div>

                {/* Description */}
                <p className="text-bm-gray-400 mb-5">{service.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-sm px-3 py-1 bg-bm-gray-100 text-bm-gray-500 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
