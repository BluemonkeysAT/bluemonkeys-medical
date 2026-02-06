"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="section overflow-hidden">
      <div className="container">
        <motion.div
          className="relative overflow-hidden rounded-3xl"
          style={{ opacity }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-bm-blue via-bm-purple to-bm-pink" />
          
          {/* Animated Orbs */}
          <motion.div
            className="absolute -top-1/2 -right-1/4 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-1/2 -left-1/4 w-[400px] h-[400px] rounded-full bg-black/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-8 py-20 md:py-28 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-8">
                <Zap className="w-4 h-4" />
                Jetzt starten
              </span>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
                Bereit, Ihre Konkurrenz zu überholen?
              </h2>

              {/* Subline */}
              <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
                Während andere noch überlegen, könnten Sie schon mehr Patienten gewinnen.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-bm-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
                >
                  Kostenlose Beratung
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+4315555555"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-colors"
                >
                  +43 1 555 55 55
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
