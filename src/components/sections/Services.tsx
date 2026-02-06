"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Search,
  Megaphone,
  Palette,
  Bot,
  BarChart3,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Praxis Websites",
    description: "Individuelles Design, das Vertrauen schafft. Schnell, mobil-optimiert, barrierefrei.",
    color: "from-blue-500 to-cyan-400",
    span: "span-2",
    featured: true,
  },
  {
    icon: Search,
    title: "SEO",
    description: "Gefunden werden, wenn Patienten suchen.",
    color: "from-emerald-500 to-teal-400",
    span: "",
  },
  {
    icon: Megaphone,
    title: "Ads",
    description: "Google & Meta Ads mit messbarem ROI.",
    color: "from-orange-500 to-amber-400",
    span: "",
  },
  {
    icon: Bot,
    title: "KI Assistenten",
    description: "Automatisierte Terminbuchung, 24/7 Erreichbarkeit, intelligente Chatbots.",
    color: "from-violet-500 to-purple-400",
    span: "span-2 row-2",
    featured: true,
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Corporate Identity die bleibt.",
    color: "from-pink-500 to-rose-400",
    span: "",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Datengetriebene Entscheidungen.",
    color: "from-indigo-500 to-blue-400",
    span: "",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`bento-item ${service.span}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`card h-full p-6 flex flex-col group cursor-pointer ${service.featured ? 'justify-between' : ''}`}>
        {/* Icon */}
        <div
          className={`icon-container bg-gradient-to-br ${service.color} mb-4 group-hover:scale-110 transition-transform duration-500`}
        >
          <service.icon className="w-5 h-5 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-title text-white">{service.title}</h3>
            <ArrowUpRight className="w-5 h-5 text-bm-gray-500 group-hover:text-bm-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </div>
          <p className="text-bm-gray-400 text-sm leading-relaxed">{service.description}</p>
        </div>

        {/* Featured Extra Content */}
        {service.featured && (
          <div className="mt-6 pt-4 border-t border-bm-border">
            <div className="flex items-center gap-2 text-sm text-bm-blue">
              <Sparkles className="w-4 h-4" />
              <span>Beliebteste Leistung</span>
            </div>
          </div>
        )}

        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.06), transparent 40%)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="badge mb-4">
            <Sparkles className="w-4 h-4" />
            Full Service
          </span>
          <h2 className="text-display text-gradient mb-4">
            Alles. Aus einer Hand.
          </h2>
          <p className="text-body max-w-xl mx-auto">
            Kein Agentur-Hopping. Ein Partner für alles Digitale.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
