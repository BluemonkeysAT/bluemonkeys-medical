"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ArrowRight, Play, Sparkles, Zap, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "150+", label: "Praxen betreut", icon: Users },
  { value: "47%", label: "Mehr Anfragen", icon: TrendingUp },
  { value: "3.2x", label: "ROI im Schnitt", icon: Zap },
];

function AnimatedText({ children, delay = 0 }: { children: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <span ref={ref} className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function MagneticButton({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.15;
    const y = (clientY - top - height / 2) * 0.15;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      className="btn-primary"
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      <span className="flex items-center gap-2">{children}</span>
    </motion.a>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 300]), {
    stiffness: 100,
    damping: 30,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="aurora" />
      <div className="mesh-gradient" />
      <div className="grid-pattern" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-bm-blue/20 to-bm-purple/20 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-bm-cyan/10 to-bm-pink/10 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 container px-6 text-center"
        style={{ y, opacity, scale }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="badge badge-pulse pl-6">
            <Sparkles className="w-4 h-4" />
            Premium Medical Marketing
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-hero mb-6">
          <AnimatedText delay={0.3}>Ihre Praxis.</AnimatedText>
          <br />
          <span className="text-gradient-blue">
            <AnimatedText delay={0.4}>Unser Fokus.</AnimatedText>
          </span>
        </h1>

        {/* Subline */}
        <motion.p
          className="text-body max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Wir bauen digitale Erlebnisse, die Patienten anziehen und Ihre Praxis
          auf das nächste Level heben. Websites, SEO, Ads — alles aus einer Hand.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <MagneticButton href="#contact">
            Projekt starten
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <Link href="#cases" className="btn-secondary">
            <Play className="w-4 h-4" />
            Case Studies
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
            >
              <div className="stat-value mb-1">{stat.value}</div>
              <div className="text-sm text-bm-gray-400 flex items-center gap-1.5 justify-center">
                <stat.icon className="w-3.5 h-3.5" />
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-bm-gray-500 flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div className="w-1.5 h-2 bg-bm-blue rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
