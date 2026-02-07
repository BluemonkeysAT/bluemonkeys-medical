"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play, Star, TrendingUp, Users, Phone, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

// Magnetic Button Component
function MagneticButton({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={className}
    >
      {children}
    </motion.a>
  );
}

// 3D Tilt Card
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const trustLogos = [
  "Dr. Müller Zahnklinik",
  "Ordination Döbling", 
  "Haut & Laser Wien",
  "Kieferorthopädie Plus",
  "Augenzentrum Graz",
];

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 bg-[#fafafa]">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, #5fdafb 0%, transparent 70%)",
            left: "10%",
            top: "-20%",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
            right: "10%",
            bottom: "10%",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)",
            left: "50%",
            top: "50%",
          }}
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#5fdafb]/30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Urgency Banner - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-3 backdrop-blur-xl bg-white/60 border border-white/40 px-6 py-3 rounded-full shadow-lg shadow-black/5">
            <motion.span 
              className="flex h-2.5 w-2.5 relative"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </motion.span>
            <span className="text-sm font-medium text-[#222]">
              <strong className="bg-gradient-to-r from-[#5fdafb] to-[#a855f7] bg-clip-text text-transparent">3 Plätze frei</strong> für Q1 2025
            </span>
            <Sparkles className="w-4 h-4 text-[#5fdafb]" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Social Proof Mini */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map((i) => (
                  <motion.div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5fdafb] to-[#a855f7] border-3 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg"
                    initial={{ scale: 0, x: -20 }}
                    animate={isInView ? { scale: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * i, type: "spring" }}
                  >
                    {String.fromCharCode(64 + i)}
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm text-[#666] font-medium">150+ zufriedene Praxen</span>
            </motion.div>

            {/* Headline with gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-[1.02] mb-6 tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="block"
              >
                IHRE PRAXIS
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="block bg-gradient-to-r from-[#5fdafb] via-[#22d3ee] to-[#a855f7] bg-clip-text text-transparent"
              >
                VERDIENT MEHR
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="block"
              >
                PATIENTEN
              </motion.span>
            </h1>

            <motion.p 
              className="text-xl lg:text-2xl text-[#444] leading-relaxed mb-4 max-w-xl"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Während Sie Patienten behandeln, <strong className="text-black">verlieren Sie täglich Neupatienten</strong> an Ihre Konkurrenz.
            </motion.p>
            
            <motion.p 
              className="text-lg text-[#666] leading-relaxed mb-10 max-w-xl"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              Wir ändern das. Mit digitalem Marketing, das speziell für Ärzte funktioniert —
              <span className="font-bold bg-gradient-to-r from-[#5fdafb] to-[#22d3ee] bg-clip-text text-transparent"> durchschnittlich +€53.000 Mehrumsatz</span> im ersten Jahr.
            </motion.p>

            {/* Key Benefits - Bento style */}
            <div className="grid grid-cols-3 gap-3 mb-10">
              {[
                { icon: TrendingUp, text: "+340%", sub: "mehr Anfragen" },
                { icon: Users, text: "2-4 Wo.", sub: "erste Ergebnisse" },
                { icon: Shield, text: "100%", sub: "Geld-zurück" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  className="group relative p-4 backdrop-blur-xl bg-white/70 rounded-2xl border border-white/50 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5fdafb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <item.icon className="w-6 h-6 text-[#5fdafb] mb-2" />
                    <div className="font-black text-2xl text-black">{item.text}</div>
                    <div className="text-xs text-[#888] font-medium">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs - Magnetic */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <MagneticButton 
                href="#contact" 
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold text-lg overflow-hidden rounded-xl"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#5fdafb] to-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Phone className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Kostenlose Analyse</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              <MagneticButton 
                href="#cases" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 backdrop-blur-xl bg-white/70 border-2 border-black/10 text-black font-bold hover:border-[#5fdafb] rounded-xl transition-all"
              >
                <Play className="w-5 h-5 group-hover:text-[#5fdafb] transition-colors" />
                Erfolgsgeschichten
              </MagneticButton>
            </motion.div>

            {/* Trust Text */}
            <motion.p
              className="flex items-center gap-4 text-sm text-[#888] mt-6 font-medium"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
            >
              <span className="flex items-center gap-1"><span className="text-emerald-500">✓</span> Unverbindlich</span>
              <span className="flex items-center gap-1"><span className="text-emerald-500">✓</span> Keine Kosten</span>
              <span className="flex items-center gap-1"><span className="text-emerald-500">✓</span> Antwort in 24h</span>
            </motion.p>
          </motion.div>

          {/* Right - 3D Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative perspective-1000"
          >
            <TiltCard className="relative">
              {/* Main Card - Glassmorphism Dark */}
              <div className="relative backdrop-blur-xl bg-black/90 text-white p-8 lg:p-10 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Glow effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#5fdafb] opacity-20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#a855f7] opacity-15 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-5 h-5 text-[#5fdafb]" />
                    </motion.div>
                    <p className="text-[#5fdafb] font-bold text-sm uppercase tracking-widest">
                      Live Ergebnisse
                    </p>
                  </div>
                  <p className="text-white/50 text-sm mb-8">
                    Echte Zahlen von echten Praxen
                  </p>

                  <div className="space-y-6">
                    {[
                      { value: "€2.3M+", label: "Zusatzumsatz generiert", sub: "in 12 Monaten" },
                      { value: "+47%", label: "Mehr Anfragen", sub: "Ø Steigerung" },
                      { value: "98%", label: "Zufriedenheit", sub: "Weiterempfehlung" },
                      { value: "<24h", label: "Reaktionszeit", sub: "garantiert" },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        className="flex items-center gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + i * 0.1 }}
                      >
                        <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#5fdafb] to-[#22d3ee] bg-clip-text text-transparent min-w-[110px]">
                          {stat.value}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{stat.label}</div>
                          <div className="text-white/40 text-sm">{stat.sub}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Quote */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white/70 italic text-sm leading-relaxed">
                      "In 6 Monaten haben wir unsere Patientenanfragen verdreifacht. Blue Monkeys versteht, was Ärzte brauchen."
                    </p>
                    <p className="bg-gradient-to-r from-[#5fdafb] to-[#a855f7] bg-clip-text text-transparent font-bold text-sm mt-3">
                      — Dr. Thomas Weber, Zahnarzt Wien
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Floating Badges */}
            <motion.div
              className="absolute -bottom-6 -left-6 backdrop-blur-xl bg-white/90 shadow-2xl p-4 rounded-2xl border border-white/50"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 1, type: "spring" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5fdafb] to-[#22d3ee] rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-black text-black text-lg">+127%</div>
                  <div className="text-xs text-[#888] font-medium">Diese Woche</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 backdrop-blur-xl bg-white/90 shadow-2xl px-4 py-2 rounded-full border border-white/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.1, type: "spring" }}
            >
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-bold text-black">12 online</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Logos - Infinite Scroll */}
        <motion.div
          className="mt-24 pt-12 border-t border-black/5"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <p className="text-center text-sm text-[#888] uppercase tracking-[0.2em] mb-10 font-medium">
            Vertrauen von führenden Praxen
          </p>
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex gap-16"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...trustLogos, ...trustLogos, ...trustLogos].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="text-[#bbb] font-black text-lg whitespace-nowrap hover:text-[#5fdafb] transition-colors cursor-default"
                >
                  {name.toUpperCase()}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
