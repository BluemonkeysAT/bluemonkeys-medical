"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Globe, Search, Clock, Target, UserPlus,
  CheckCircle2, Shield, Loader2, Phone, ChevronLeft,
  Smile, Activity, Heart, Building2, MoreHorizontal,
  Users, Star,
} from "lucide-react";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

const trustNames = [
  "Zahnarzt Dr. Reinisch", "Dr. Gradwohl Schönheit", "Zahnwohl Penzing",
  "Dr. Matis", "Dr. Miedler", "Dr. Heidi Paul Gynäkologie",
];

// ── Data ─────────────────────────────────────────────────────────────────────

const specialties = [
  { id: "zahnarzt",  label: "Zahnarzt",      icon: Smile          },
  { id: "allgemein", label: "Allgemeinarzt", icon: Activity       },
  { id: "facharzt",  label: "Facharzt",      icon: Heart          },
  { id: "privat",    label: "Privatpraxis",  icon: Building2      },
  { id: "andere",    label: "Andere",        icon: MoreHorizontal },
];

const problems = [
  { id: "patients",    label: "Zu wenig Neupatienten",   icon: Users    },
  { id: "competition", label: "Zu viel Konkurrenz",      icon: Target   },
  { id: "recruiting",  label: "Mitarbeiter finden",      icon: UserPlus },
  { id: "seo",         label: "Nicht bei Google",        icon: Search   },
  { id: "website",     label: "Veraltete Website",       icon: Globe    },
  { id: "time",        label: "Kein Zeit für Marketing", icon: Clock    },
];

// ── Types ─────────────────────────────────────────────────────────────────────

interface FormData {
  specialty: string;
  problems:  string[];
  name:      string;
  phone:     string;
  email:     string;
  privacy:   boolean;
}

// ── Main component ────────────────────────────────────────────────────────────

export function FunnelPageV2() {
  const [step, setStep]             = useState<1 | 2 | 3>(1);
  const [form, setForm]             = useState<FormData>({
    specialty: "", problems: [], name: "", phone: "", email: "", privacy: false,
  });
  const [submitted, setSubmitted]   = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError]           = useState("");

  const canSubmit = () => !!form.phone.trim() && !!form.name.trim() && form.privacy;

  const handleSubmit = async () => {
    if (!canSubmit()) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[100svh] bg-[#F8FAFB] flex flex-col">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="shrink-0 bg-white border-b border-[#f2f2f2] z-10">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 h-[60px] lg:h-[76px] max-w-[1200px] mx-auto w-full">
        <a href="/" className="flex items-center gap-2.5 lg:gap-3.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo_bm.svg" alt="Blue Monkeys Medical" className="h-7 lg:h-9 w-auto" />
          <span
            className="font-bold text-[#1c1d1f] text-[14px] sm:text-[15px] lg:text-[19px] uppercase leading-none"
            style={RIFT}
          >
            Blue Monkeys <span className="text-[#6798df]">Medical</span>
          </span>
        </a>
        <div className="flex items-center gap-3 lg:gap-5">
          <div className="hidden sm:flex items-center gap-1.5 text-[12px] lg:text-[14px] text-[#bbb]">
            <Shield className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 text-[#6798df]/50" />
            DSGVO-konform
          </div>
          <div className="flex items-center gap-1.5 text-[12px] lg:text-[14px] text-[#888] border border-[#efefef] px-3 py-1.5 lg:px-5 lg:py-2.5 bg-white">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Schneller Rückruf
          </div>
        </div>
        </div>
      </header>

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 lg:py-12">
        <div className="w-full max-w-sm lg:max-w-[560px]">

          {/* Intro headline — hidden after submit */}
          {!submitted && (
            <div className="mb-5">
              <p
                className="text-[11px] lg:text-[14px] font-bold uppercase tracking-[0.12em] text-[#6798df] mb-1.5 lg:mb-2.5"
                style={RIFT}
              >
                Kostenlos &amp; unverbindlich
              </p>
              <h1 className="text-[34px] sm:text-[40px] lg:text-[56px] text-[#1c1d1f] leading-none mb-2 lg:mb-4" style={RIFT}>
                Mehr Neupatienten<br />in 6 Wochen.
              </h1>
              <p className="text-sm lg:text-lg text-[#888] leading-snug">
                Persönliche Strategie für Ihre Praxis — Rückruf in 24h.
              </p>
            </div>
          )}

          {/* Form card */}
          <div className="bg-white border border-[#e8e8e8] lg:border-[#ddd]" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>

            {/* Step progress bar */}
            {!submitted && (
              <div className="flex">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className="flex-1 h-[3px] transition-all duration-400"
                    style={{ background: s <= step ? "#6798df" : "#f0f0f0" }}
                  />
                ))}
              </div>
            )}

            <AnimatePresence mode="wait">

              {/* ── Success ───────────────────────────────────────────────── */}
              {submitted && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-5 py-8 lg:px-10 lg:py-14 text-center"
                >
                  <div className="w-12 h-12 lg:w-20 lg:h-20 bg-[#EEF3FC] flex items-center justify-center mx-auto mb-4 lg:mb-5">
                    <CheckCircle2 className="w-6 h-6 lg:w-10 lg:h-10 text-[#6798df]" />
                  </div>
                  <h2 className="text-[22px] lg:text-[32px] text-[#1c1d1f] leading-tight mb-2 lg:mb-3" style={RIFT}>
                    Anfrage erhalten!
                  </h2>
                  <p className="text-[13px] lg:text-[17px] text-[#666] leading-snug mb-5 lg:mb-6">
                    Wir melden uns in{" "}
                    <strong className="text-[#1c1d1f]">24 Stunden</strong>{" "}
                    mit Ihrem persönlichen Strategieplan.
                  </p>
                  <div className="flex justify-center gap-4 lg:gap-5">
                    {["Kostenlos", "DSGVO-konform", "Unverbindlich"].map((t) => (
                      <span key={t} className="flex items-center gap-1 text-[10px] lg:text-[14px] text-[#bbb]">
                        <CheckCircle2 className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#6798df]" />
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── Step 1 — Fachrichtung ─────────────────────────────────── */}
              {!submitted && step === 1 && (
                <motion.div
                  key="s1"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.18 }}
                  className="px-4 sm:px-5 lg:px-9 pt-4 lg:pt-8"
                  style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
                >
                  <p
                    className="text-[11px] lg:text-[15px] font-bold uppercase tracking-[0.09em] text-[#1c1d1f] mb-3 lg:mb-4"
                    style={RIFT}
                  >
                    Schritt 1 — Welche Fachrichtung?
                  </p>
                  {/* Row 1: 3 */}
                  <div className="grid grid-cols-3 gap-2 lg:gap-3 mb-2 lg:mb-3">
                    {specialties.slice(0, 3).map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          setForm((f) => ({ ...f, specialty: s.id }));
                          setTimeout(() => setStep(2), 220);
                        }}
                        className={`flex flex-col items-center gap-2 lg:gap-3.5 py-4 lg:py-6 px-2 lg:px-3 border-2 transition-all ${
                          form.specialty === s.id
                            ? "border-[#6798df] bg-[#EEF3FC]"
                            : "border-[#efefef] hover:border-[#6798df]/40 hover:bg-[#F8FBFF]"
                        }`}
                      >
                        <s.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${form.specialty === s.id ? "text-[#6798df]" : "text-[#bbb]"}`} />
                        <span
                          className={`text-[11px] lg:text-[15px] font-bold leading-tight text-center ${form.specialty === s.id ? "text-[#6798df]" : "text-[#333]"}`}
                          style={RIFT}
                        >
                          {s.label}
                        </span>
                      </button>
                    ))}
                  </div>
                  {/* Row 2: 2 */}
                  <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-4 lg:mb-5">
                    {specialties.slice(3).map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          setForm((f) => ({ ...f, specialty: s.id }));
                          setTimeout(() => setStep(2), 220);
                        }}
                        className={`flex flex-col items-center gap-2 lg:gap-3.5 py-4 lg:py-6 px-2 lg:px-3 border-2 transition-all ${
                          form.specialty === s.id
                            ? "border-[#6798df] bg-[#EEF3FC]"
                            : "border-[#efefef] hover:border-[#6798df]/40 hover:bg-[#F8FBFF]"
                        }`}
                      >
                        <s.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${form.specialty === s.id ? "text-[#6798df]" : "text-[#bbb]"}`} />
                        <span
                          className={`text-[11px] lg:text-[15px] font-bold leading-tight text-center ${form.specialty === s.id ? "text-[#6798df]" : "text-[#333]"}`}
                          style={RIFT}
                        >
                          {s.label}
                        </span>
                      </button>
                    ))}
                  </div>
                  <SocialProof />
                </motion.div>
              )}

              {/* ── Step 2 — Problem ─────────────────────────────────────── */}
              {!submitted && step === 2 && (
                <motion.div
                  key="s2"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.18 }}
                  className="px-4 sm:px-5 lg:px-9 pt-4 lg:pt-8"
                  style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
                >
                  <div className="flex items-center gap-1.5 mb-3 lg:mb-4">
                    <button
                      onClick={() => setStep(1)}
                      className="text-[#bbb] hover:text-[#1c1d1f] transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                    </button>
                    <p
                      className="text-[11px] lg:text-[15px] font-bold uppercase tracking-[0.09em] text-[#1c1d1f]"
                      style={RIFT}
                    >
                      Schritt 2 — Was ist Ihr Hauptproblem?
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-4 lg:mb-5">
                    {problems.map((p) => {
                      const selected = form.problems.includes(p.id);
                      return (
                        <button
                          key={p.id}
                          onClick={() => setForm((f) => ({
                            ...f,
                            problems: selected
                              ? f.problems.filter((id) => id !== p.id)
                              : [...f.problems, p.id],
                          }))}
                          className={`flex items-center gap-3 px-4 py-3.5 lg:px-6 lg:py-5 border-2 text-left transition-all ${
                            selected
                              ? "border-[#6798df] bg-[#EEF3FC]"
                              : "border-[#efefef] hover:border-[#6798df]/40 hover:bg-[#F8FBFF]"
                          }`}
                        >
                          <p.icon className={`w-5 h-5 lg:w-7 lg:h-7 shrink-0 ${selected ? "text-[#6798df]" : "text-[#bbb]"}`} />
                          <span
                            className={`text-[11px] lg:text-[15px] font-bold leading-tight ${selected ? "text-[#6798df]" : "text-[#333]"}`}
                            style={RIFT}
                          >
                            {p.label}
                          </span>
                          {selected && (
                            <CheckCircle2 className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#6798df] ml-auto shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => setStep(3)}
                    disabled={form.problems.length === 0}
                    className="w-full flex items-center justify-center gap-2 py-4 lg:py-5.5 bg-[#1c1d1f] text-white font-bold text-sm lg:text-[17px] uppercase tracking-[0.05em] hover:bg-[#6798df] hover:text-[#1c1d1f] transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                    style={RIFT}
                  >
                    {form.problems.length > 1
                      ? `${form.problems.length} Probleme gewählt`
                      : "Weiter"
                    } <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {/* ── Step 3 — Contact ─────────────────────────────────────── */}
              {!submitted && step === 3 && (
                <motion.div
                  key="s3"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.18 }}
                  className="px-4 sm:px-5 lg:px-9 pt-4 lg:pt-8"
                  style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
                >
                  <div className="flex items-center gap-1.5 mb-3 lg:mb-4">
                    <button
                      onClick={() => setStep(2)}
                      className="text-[#bbb] hover:text-[#1c1d1f] transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                    </button>
                    <p
                      className="text-[11px] lg:text-[15px] font-bold uppercase tracking-[0.09em] text-[#1c1d1f]"
                      style={RIFT}
                    >
                      Schritt 3 — Wie erreichen wir Sie?
                    </p>
                  </div>

                  <div className="space-y-2.5 lg:space-y-3.5 mb-4 lg:mb-5">
                    {/* Phone — required */}
                    <div>
                      <label
                        className="block text-[11px] lg:text-[14px] font-bold uppercase tracking-[0.07em] text-[#888] mb-1 lg:mb-1.5"
                        style={RIFT}
                      >
                        Handynummer *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5.5 lg:h-5.5 text-[#bbb] pointer-events-none" />
                        <input
                          type="tel"
                          placeholder="+43 123 456 789"
                          value={form.phone}
                          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                          autoFocus
                          className="w-full pl-10 lg:pl-14 pr-3 py-3.5 lg:py-4.5 text-[#1c1d1f] text-sm lg:text-[17px] border-2 border-[#e5e5e5] bg-white outline-none focus:border-[#6798df] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-2 gap-2 lg:gap-3">
                      <div>
                        <label
                          className="block text-[11px] lg:text-[14px] font-bold uppercase tracking-[0.07em] text-[#888] mb-1 lg:mb-1.5"
                          style={RIFT}
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Ihr Name"
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          className="w-full px-3.5 py-3 lg:py-4 text-[#1c1d1f] text-sm lg:text-[17px] border-2 border-[#e5e5e5] bg-white outline-none focus:border-[#6798df] transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-[11px] lg:text-[14px] font-bold uppercase tracking-[0.07em] text-[#bbb] mb-1 lg:mb-1.5"
                          style={RIFT}
                        >
                          E-Mail
                        </label>
                        <input
                          type="email"
                          placeholder="Optional"
                          value={form.email}
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          className="w-full px-3.5 py-3 lg:py-4 text-[#1c1d1f] text-sm lg:text-[17px] border-2 border-[#e5e5e5] bg-white outline-none focus:border-[#6798df] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Privacy */}
                    <label className="flex items-start gap-2.5 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={form.privacy}
                        onChange={(e) => setForm((f) => ({ ...f, privacy: e.target.checked }))}
                        className="mt-0.5 w-4 h-4 lg:w-5 lg:h-5 accent-[#6798df] cursor-pointer shrink-0"
                      />
                      <span className="text-xs lg:text-[15px] text-[#aaa] leading-relaxed group-hover:text-[#666] transition-colors">
                        Ich stimme der{" "}
                        <a href="https://www.bluemonkeys.at/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#6798df] hover:underline">
                          Datenschutzerklärung
                        </a>{" "}
                        zu. *
                      </span>
                    </label>
                  </div>

                  {error && (
                    <p className="text-red-500 text-xs lg:text-sm mb-3 p-2 lg:p-3 bg-red-50 border border-red-100">
                      {error}
                    </p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={submitting || !canSubmit()}
                    className="w-full flex items-center justify-center gap-2 py-4 lg:py-5.5 bg-[#6798df] text-white font-bold text-sm lg:text-[17px] uppercase tracking-[0.05em] hover:bg-[#1c1d1f] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    style={RIFT}
                  >
                    {submitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>Jetzt Rückruf anfordern <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Trust badges */}
          {!submitted && (
            <div className="flex items-center justify-center gap-5 lg:gap-6 mt-4 lg:mt-5">
              {["Kostenlos", "DSGVO-konform", "Unverbindlich"].map((t) => (
                <span key={t} className="flex items-center gap-1 text-[10px] lg:text-[14px] text-[#bbb]">
                  <CheckCircle2 className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#6798df]/60" />
                  {t}
                </span>
              ))}
            </div>
          )}

        </div>
      </div>
      {/* ── Logo marquee ───────────────────────────────────────────────────── */}
      <div className="shrink-0 py-3 lg:py-4 bg-white border-t border-[#f0f0f0]">
        <div className="max-w-[1200px] mx-auto">
        <div className="marquee">
          <div className="marquee-content">
            {[...trustNames, ...trustNames].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-[#1c1d1f]/20 font-bold uppercase text-xs lg:text-base tracking-[0.06em] whitespace-nowrap"
                style={RIFT}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
        </div>
      </div>

    </div>
  );
}

// ── Social proof strip ────────────────────────────────────────────────────────

function SocialProof() {
  return (
    <div className="flex items-center gap-2.5 lg:gap-3 pt-2.5 lg:pt-3 border-t border-[#f5f5f5]">
      <div className="flex -space-x-1.5">
        {[11, 47, 32, 58, 19].map((img, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={img}
            src={`https://i.pravatar.cc/40?img=${img}`}
            alt=""
            className="w-5 h-5 lg:w-7 lg:h-7 rounded-full object-cover"
            style={{ border: "2px solid white", zIndex: 5 - i }}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
      <p className="text-[10px] lg:text-[14px] text-[#bbb]">
        <strong className="text-[#888]">50+ Praxen</strong> ·{" "}
        <span className="inline-flex gap-px">
          {[1,2,3,4,5].map((i) => <Star key={i} className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 fill-amber-400 text-amber-400" />)}
        </span>
        {" "}5.0
      </p>
    </div>
  );
}
