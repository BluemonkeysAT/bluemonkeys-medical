"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTABanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <motion.div className="container-lg px-4 md:px-8" style={{ y }}>
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 gradient-bg" />
          
          {/* Noise Overlay */}
          <div className="absolute inset-0 noise" />

          {/* Animated Shapes */}
          <motion.div
            className="absolute -top-1/2 -right-1/4 w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-1/2 -left-1/4 w-[300px] h-[300px] rounded-full bg-white/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:py-24 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Kostenlose Erstberatung
              </div>

              <h2 className="text-display max-w-3xl mx-auto mb-6">
                Starten Sie jetzt — und überholen Sie Ihre Konkurrenz.
              </h2>

              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Während andere noch überlegen, könnten Sie schon mehr Patienten
                gewinnen. Der erste Schritt ist ein Gespräch.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  href="#contact"
                  className="bg-white text-bm-blue hover:bg-white/90"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Jetzt Termin vereinbaren
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  href="tel:+4315555555"
                  className="text-white hover:bg-white/10"
                >
                  Oder anrufen: +43 1 555 55 55
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
