"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const stats = [
  { value: "150+", label: "Praxen betreut" },
  { value: "40%", label: "mehr Anfragen" },
  { value: "10+", label: "Jahre Erfahrung" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-bm-blue/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-bm-success/10 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Dot Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Content */}
      <motion.div
        className="container-lg px-4 md:px-8 pt-24 pb-16 md:py-32 relative z-10"
        style={{ y: smoothY, opacity: smoothOpacity, scale: smoothScale }}
      >
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <Badge icon={<Sparkles className="w-3.5 h-3.5" />} pulse>
              Premium Agentur für Ärzte & Zahnärzte
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-hero text-bm-black mb-6"
          >
            Ihre Praxis verdient
            <br />
            <span className="gradient-text">mehr Patienten.</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-bm-gray-400 mb-10 max-w-2xl mx-auto text-balance"
          >
            Websites, SEO und Werbung speziell für Arztpraxen. 
            Von der Agentur, die weiß was funktioniert.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button size="lg" href="#contact" icon={<ArrowRight className="w-5 h-5" />}>
              Kostenlose Erstberatung
            </Button>
            <Button
              size="lg"
              variant="ghost"
              href="#cases"
              icon={<Play className="w-5 h-5" />}
              iconPosition="left"
            >
              Case Studies ansehen
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-bm-blue mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-bm-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-bm-gray-300 flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div className="w-1.5 h-3 bg-bm-blue rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
