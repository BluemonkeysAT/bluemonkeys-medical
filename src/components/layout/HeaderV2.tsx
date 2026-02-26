"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

const navLinks = [
  { label: "Leistungen", href: "#services" },
  { label: "Cases", href: "#cases" },
  { label: "Warum wir", href: "#why" },
  { label: "Kontakt", href: "#contact" },
];

export function HeaderV2() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white border-b border-[#e5e5e5] shadow-[0_1px_0_#e5e5e5]" : "bg-white"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo_bm.svg" alt="Blue Monkeys" className="w-9 h-9 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-[#1c1d1f] font-bold text-sm uppercase tracking-[0.05em]" style={RIFT}>
                  Blue Monkeys
                </span>
                <span className="text-[#6798df] font-bold text-sm uppercase tracking-[0.05em]" style={RIFT}>
                  Medical
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#666] hover:text-[#1c1d1f] text-sm font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#6798df] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1c1d1f] text-white text-sm font-semibold uppercase tracking-[0.05em] hover:bg-[#6798df] hover:text-[#1c1d1f] transition-all duration-300 rounded-none"
                style={RIFT}
              >
                Analyse starten
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#1c1d1f]"
              aria-label="Menü öffnen"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-full max-w-[320px] bg-white"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex flex-col h-full pt-[80px] pb-10 px-6">
                <nav className="flex-1 space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between py-4 text-xl font-bold text-[#1c1d1f] uppercase border-b border-[#f0f0f0] hover:text-[#6798df] transition-colors"
                        style={RIFT}
                      >
                        {link.label}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-4 bg-[#1c1d1f] text-white font-bold uppercase tracking-[0.05em] hover:bg-[#6798df] hover:text-[#1c1d1f] transition-all"
                  style={RIFT}
                >
                  Kostenlose Analyse
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
