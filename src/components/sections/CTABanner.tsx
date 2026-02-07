"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, Zap, Clock, Users } from "lucide-react";
import Link from "next/link";

export function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-20 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Accent Corner */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#5fdafb] opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#5fdafb] opacity-10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-[#5fdafb]/10 border border-[#5fdafb]/30 px-4 py-2 rounded-full text-sm mb-8">
            <Zap className="w-4 h-4 text-[#5fdafb]" />
            <span className="text-white">
              <strong className="text-[#5fdafb]">Limitiert:</strong> Nur 3 neue Kunden pro Monat
            </span>
          </div>

          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" 
            style={{ fontFamily: "'Rift-Bold', system-ui" }}
          >
            BEREIT, IHRE PRAXIS
            <br />
            <span className="text-[#5fdafb]">AUF DAS NÄCHSTE LEVEL</span>
            <br />
            ZU BRINGEN?
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Ihre Konkurrenz wartet nicht. Jeder Tag ohne professionelles Online-Marketing 
            kostet Sie Patienten und Umsatz.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {[
              { icon: Users, value: "150+", label: "Praxen vertrauen uns" },
              { icon: Clock, value: "<24h", label: "Antwortzeit" },
              { icon: Zap, value: "2-4 Wo.", label: "Erste Ergebnisse" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.icon className="w-5 h-5 text-[#5fdafb]" />
                <div className="text-left">
                  <div className="text-white font-bold">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#5fdafb] text-black font-bold text-lg hover:bg-white transition-all"
            >
              <Phone className="w-5 h-5" />
              Jetzt Erstgespräch sichern
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+4315555555"
              className="inline-flex items-center justify-center gap-2 px-8 py-5 border-2 border-white/30 text-white font-bold hover:border-white hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              +43 1 555 5555
            </a>
          </div>

          <p className="text-white/40 text-sm mt-6">
            Kostenlos & unverbindlich • Keine versteckten Kosten • DSGVO-konform
          </p>
        </motion.div>
      </div>
    </section>
  );
}
