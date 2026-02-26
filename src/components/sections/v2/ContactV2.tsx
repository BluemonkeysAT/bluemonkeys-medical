"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowLeft,
  Globe, Search, Bot, Sparkles, TrendingUp, UserPlus,
  CheckCircle2, Shield, Loader2,
} from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

const goalOptions = [
  { id: "patients",    label: "Mehr Neu- & Privatpatienten", icon: TrendingUp },
  { id: "website",     label: "Neue Website / Relaunch",     icon: Globe },
  { id: "seo",         label: "Besser bei Google",           icon: Search },
  { id: "ki",          label: "KI-Implementierungen",        icon: Bot },
  { id: "recruiting",  label: "Recruiting & Personal",       icon: UserPlus },
  { id: "full",        label: "Alles — Komplett-Marketing",  icon: Sparkles },
];

const nextSteps = [
  { num: "01", text: "Wir melden uns innerhalb von 24 Stunden" },
  { num: "02", text: "Kostenloses 30-min Analysegespräch" },
  { num: "03", text: "Sie erhalten eine individuelle Strategie" },
];

interface FormData {
  goals: string[];
  name: string;
  phone: string;
  privacy: boolean;
}

export function ContactV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    goals: [], name: "", phone: "", privacy: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const allIds = goalOptions.map((g) => g.id);

  const isSelected = (id: string) =>
    form.goals.includes(id) || form.goals.includes("full");

  const toggleGoal = (id: string) => {
    if (id === "full") {
      // Toggle all on/off
      setForm((f) => ({
        ...f,
        goals: f.goals.includes("full") ? [] : [...allIds],
      }));
    } else {
      setForm((f) => {
        const withoutFull = f.goals.filter((g) => g !== "full");
        const next = withoutFull.includes(id)
          ? withoutFull.filter((g) => g !== id)
          : [...withoutFull, id];
        return { ...f, goals: next };
      });
    }
  };

  const canAdvance = () => {
    if (step === 1) return form.goals.length > 0;
    return false;
  };

  const canSubmit = () => !!form.phone && form.privacy;

  const handleSubmit = async () => {
    if (!canSubmit()) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
    } catch {
      setError("Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-white py-10 lg:py-32">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-[400px_1fr]">

          {/* LEFT: Dark panel */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="bg-[#1c1d1f] text-white px-6 py-8 lg:px-10 lg:py-12 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#6798df]" />

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center bg-[#6798df]/10 text-[#6798df] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.1em] mb-6"
              style={RIFT}
            >
              Kontakt
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="uppercase leading-[0.95] tracking-tight text-white mb-6"
              style={{ ...RIFT, fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              BEREIT FÜR
              <br />
              <span className="text-[#6798df]">MEHR PATIENTEN?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-sm leading-relaxed mb-6 lg:mb-10">
              Starten Sie mit einer kostenlosen Praxis-Analyse. Unverbindlich, persönlich,
              konkret — in 24 Stunden melden wir uns bei Ihnen.
            </motion.p>

            {/* Next steps — hidden on mobile to keep form compact */}
            <motion.div variants={fadeUp} className="mb-6 lg:mb-10 hidden lg:block">
              <p className="text-white/30 text-[10px] uppercase tracking-[0.12em] mb-4" style={RIFT}>
                Was passiert als Nächstes
              </p>
              <div className="space-y-4">
                {nextSteps.map((s) => (
                  <div key={s.num} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#6798df] flex items-center justify-center shrink-0">
                      <span className="text-[#1c1d1f] font-bold text-xs" style={RIFT}>
                        {s.num}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm pt-1 leading-snug">{s.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Guarantee */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 bg-white/5 p-4"
            >
              <Shield className="w-5 h-5 text-[#6798df] shrink-0" />
              <p className="text-white/50 text-xs leading-relaxed">
                <strong className="text-white/80">Antwort in 24h</strong> — persönlich,
                unverbindlich, ohne Kleingedrucktes.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="px-6 py-8 lg:px-12 lg:py-20 bg-[#f8f8f8]"
          >
            {!success ? (
              <>
                {/* Progress — 2 steps */}
                <div className="flex items-center gap-3 mb-6 lg:mb-10">
                  {[1, 2].map((n) => (
                    <div key={n} className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          n < step
                            ? "bg-[#6798df] text-white"
                            : n === step
                            ? "bg-[#1c1d1f] text-white"
                            : "bg-[#e5e5e5] text-[#aaa]"
                        }`}
                        style={RIFT}
                      >
                        {n < step ? <CheckCircle2 className="w-4 h-4" /> : n}
                      </div>
                      <span
                        className={`text-xs uppercase tracking-[0.06em] font-medium hidden sm:block ${
                          n === step ? "text-[#1c1d1f]" : "text-[#ccc]"
                        }`}
                        style={RIFT}
                      >
                        {n === 1 ? "Ihre Ziele" : "Kontakt"}
                      </span>
                      {n < 2 && (
                        <div className={`hidden sm:block w-10 h-[2px] ${n < step ? "bg-[#6798df]" : "bg-[#e5e5e5]"}`} />
                      )}
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {/* STEP 1: Goals */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h3 className="text-[#1c1d1f] font-bold text-lg uppercase mb-1" style={RIFT}>
                        Was möchten Sie erreichen?
                      </h3>
                      <p className="text-[#888] text-sm mb-5 lg:mb-8">
                        Wählen Sie alles, was auf Sie zutrifft — Mehrfachauswahl möglich.
                      </p>
                      <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-5 lg:mb-8">
                        {goalOptions.map((g) => {
                          const selected = isSelected(g.id);
                          return (
                            <button
                              key={g.id}
                              onClick={() => toggleGoal(g.id)}
                              className={`flex items-center gap-2 p-3 sm:p-4 border-2 text-left transition-all duration-200 ${
                                selected
                                  ? "border-[#6798df] bg-[#e8f0fb] text-[#6798df]"
                                  : "border-[#e5e5e5] bg-white text-[#666] hover:border-[#6798df]/40 hover:bg-[#f8f8f8]"
                              }`}
                            >
                              <g.icon className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${selected ? "text-[#6798df]" : "text-[#aaa]"}`} />
                              <span className="text-xs sm:text-sm font-semibold leading-tight">{g.label}</span>
                            </button>
                          );
                        })}
                      </div>
                      <button
                        onClick={() => setStep(2)}
                        disabled={!canAdvance()}
                        className="w-full flex items-center justify-center gap-2 py-4 bg-[#1c1d1f] text-white font-bold text-sm uppercase tracking-[0.05em] hover:bg-[#6798df] hover:text-[#1c1d1f] transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#1c1d1f] disabled:hover:text-white"
                        style={RIFT}
                      >
                        Weiter
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}

                  {/* STEP 2: Contact */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h3 className="text-[#1c1d1f] font-bold text-lg uppercase mb-1" style={RIFT}>
                        Wie können wir Sie erreichen?
                      </h3>
                      <p className="text-[#888] text-sm mb-5 lg:mb-8">
                        Wir schreiben Ihnen per WhatsApp — innerhalb von 24 Stunden.
                      </p>
                      <div className="space-y-4 lg:space-y-5 mb-5 lg:mb-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-[0.08em] text-[#555] mb-2" style={RIFT}>
                            Ihr Name (optional)
                          </label>
                          <input
                            type="text"
                            placeholder="Dr. Vorname Nachname"
                            value={form.name}
                            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                            className="input bg-white w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-[0.08em] text-[#555] mb-2" style={RIFT}>
                            Ihre Handynummer *
                          </label>
                          <input
                            type="tel"
                            placeholder="+43 123 456 789"
                            value={form.phone}
                            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                            className="input bg-white w-full"
                          />
                          <p className="text-[#aaa] text-xs mt-1.5">
                            Wir kontaktieren Sie per WhatsApp oder Anruf.
                          </p>
                        </div>
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={form.privacy}
                            onChange={(e) => setForm((f) => ({ ...f, privacy: e.target.checked }))}
                            className="mt-0.5 w-4 h-4 accent-[#6798df] cursor-pointer"
                          />
                          <span className="text-xs text-[#888] leading-relaxed group-hover:text-[#666] transition-colors">
                            Ich stimme der{" "}
                            <a href="/datenschutz" className="text-[#6798df] hover:underline">
                              Datenschutzerklärung
                            </a>{" "}
                            zu und bin damit einverstanden, dass Blue Monkeys Medical meine Daten
                            zur Bearbeitung meiner Anfrage verwendet. *
                          </span>
                        </label>
                      </div>

                      {error && (
                        <p className="text-red-500 text-sm mb-4 bg-red-50 border border-red-100 p-3">
                          {error}
                        </p>
                      )}

                      <div className="flex gap-3">
                        <button
                          onClick={() => setStep(1)}
                          className="flex items-center gap-2 px-5 py-4 border border-[#e5e5e5] text-[#666] font-bold text-sm hover:border-[#1c1d1f] hover:text-[#1c1d1f] transition-all"
                          style={RIFT}
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={handleSubmit}
                          disabled={submitting || !canSubmit()}
                          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#6798df] text-[#1c1d1f] font-bold text-sm uppercase tracking-[0.05em] hover:bg-[#1c1d1f] hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                          style={RIFT}
                        >
                          {submitting ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <>
                              Kostenlose Analyse starten
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-4 mt-5">
                        {["Unverbindlich", "Keine Kosten", "100% Datenschutz"].map((t) => (
                          <span key={t} className="flex items-center gap-1.5 text-xs text-[#aaa]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#6798df]" />
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-16 h-16 bg-[#6798df] flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[#1c1d1f] font-bold text-2xl uppercase mb-4" style={RIFT}>
                  {form.name ? `Danke, ${form.name.split(" ")[0]}!` : "Danke!"}
                </h3>
                <p className="text-[#666] text-base mb-6 max-w-sm leading-relaxed">
                  Ihre Anfrage ist eingegangen. Wir melden uns{" "}
                  <strong className="text-[#1c1d1f]">innerhalb von 24 Stunden</strong> per
                  WhatsApp bei Ihnen.
                </p>
                <div className="space-y-3 w-full max-w-sm">
                  {nextSteps.map((s) => (
                    <div key={s.num} className="flex items-center gap-4 p-4 bg-[#f8f8f8] text-left">
                      <div className="w-8 h-8 bg-[#6798df] flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-xs" style={RIFT}>{s.num}</span>
                      </div>
                      <p className="text-[#555] text-sm">{s.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
