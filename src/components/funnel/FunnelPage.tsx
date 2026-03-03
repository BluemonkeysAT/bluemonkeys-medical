"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowLeft, TrendingUp, Globe, Search, Clock,
  CheckCircle2, Shield, Loader2, Star, Phone, X, ChevronRight,
  Smile, Activity, Heart, Building2, MoreHorizontal,
  Users, Sparkles, Zap,
} from "lucide-react";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

// ── Data ────────────────────────────────────────────────────────────────────

const specialties = [
  { id: "zahnarzt",  label: "Zahnarzt",       icon: Smile,
    result: "+€67.000", sub: "Ø Mehrumsatz im 1. Jahr · 18 Zahnärzte bei uns" },
  { id: "allgemein", label: "Allgemeinarzt",  icon: Activity,
    result: "+280%",    sub: "Ø mehr Patientenanfragen · 12 Allgemeinärzte" },
  { id: "facharzt",  label: "Facharzt",       icon: Heart,
    result: "+€45.000", sub: "Ø Mehrumsatz im 1. Jahr · 9 Fachärzte" },
  { id: "privat",    label: "Privatpraxis",   icon: Building2,
    result: "3×",       sub: "mehr Privatpatienten · 7 Privatpraxen" },
  { id: "andere",    label: "Andere",         icon: MoreHorizontal,
    result: "+340%",    sub: "Ø mehr Anfragen · 50+ Praxen gesamt" },
];

const problems = [
  { id: "patients", label: "Zu wenig Neupatienten",         icon: Users },
  { id: "private",  label: "Kaum Privatpatienten",          icon: TrendingUp },
  { id: "seo",      label: "Nicht bei Google sichtbar",     icon: Search },
  { id: "website",  label: "Veraltete Website",             icon: Globe },
  { id: "time",     label: "Keine Zeit für Marketing",      icon: Clock },
  { id: "all",      label: "Mehrere Probleme gleichzeitig", icon: Sparkles },
];

const infoTiles = [
  { id: "results", icon: TrendingUp, title: "MESSBARE ERGEBNISSE",  sub: "+340% · €53k Mehrumsatz · 50+ Praxen"  },
  { id: "cases",   icon: Star,       title: "REFERENZEN",           sub: "5.0★ · Echte Praxen · Echte Zahlen"   },
  { id: "system",  icon: Zap,        title: "DAS SYSTEM",           sub: "Erste Ergebnisse in 2–4 Wochen"       },
  { id: "trust",   icon: Shield,     title: "IHRE SICHERHEIT",      sub: "DSGVO · 24h · Kein Risiko"            },
];

const trustNames = [
  "Zahnarzt Dr. Reinisch", "Dr. Gradwohl Schönheit", "Zahnwohl Penzing",
  "Dr. Turkov", "Dr. Matis", "Dr. Miedler", "Dr. Heidi Paul Gynäkologie",
];

const stepLabels = ["Fachrichtung", "Ihr Problem", "Kontakt"];

interface FormData {
  specialty: string;
  problem: string;
  name: string;
  phone: string;
  email: string;
  privacy: boolean;
}

// ── Modal content components ────────────────────────────────────────────────

function ResultsContent() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-px bg-[#ebebeb] mb-7">
        {[
          { v: "+340%",   l: "Mehr Anfragen" },
          { v: "€53.000", l: "Mehrumsatz/Jahr" },
          { v: "2–4 Wo.", l: "Erste Ergebnisse" },
        ].map((s) => (
          <div key={s.v} className="bg-white px-3 py-5 text-center">
            <div className="text-[#6798df] font-bold text-2xl leading-none mb-1" style={RIFT}>{s.v}</div>
            <div className="text-[#999] text-[10px] uppercase tracking-[0.06em]">{s.l}</div>
          </div>
        ))}
      </div>

      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#aaa] mb-3" style={RIFT}>
        Ergebnisse nach Fachrichtung
      </p>
      <div className="space-y-1.5 mb-6">
        {[
          { spec: "Zahnarzt",       result: "+€67.000 Mehrumsatz/Jahr", n: "18 Praxen" },
          { spec: "Allgemeinarzt",  result: "+280% mehr Anfragen",      n: "12 Praxen" },
          { spec: "Facharzt",       result: "+€45.000 Mehrumsatz/Jahr", n: "9 Praxen"  },
          { spec: "Privatpraxis",   result: "3× mehr Privatpatienten",  n: "7 Praxen"  },
        ].map((row) => (
          <div key={row.spec} className="flex items-center justify-between px-3 py-2.5 bg-[#f8f8f8]">
            <div className="flex items-center gap-2">
              <span className="text-[#1c1d1f] text-sm font-semibold">{row.spec}</span>
              <span className="text-[#ccc] text-[10px]">{row.n}</span>
            </div>
            <span className="text-[#6798df] font-bold text-sm" style={RIFT}>{row.result}</span>
          </div>
        ))}
      </div>

      <div className="bg-[#f8f8f8] border-l-[3px] border-[#6798df] px-4 py-3">
        <p className="text-[#666] text-xs leading-relaxed">
          Basierend auf Daten von 50+ aktiven Kundenpraxen im DACH-Raum.
          Gemessen über das erste Jahr nach Onboarding.
        </p>
      </div>
    </div>
  );
}

function CasesContent() {
  const cases = [
    {
      name: "Dr. Reinisch",
      practice: "Zahnarzt · Wien",
      quote: "\u201EIn 6 Monaten haben wir unsere Patientenanfragen verdreifacht. Ich h\u00E4tte nie gedacht, dass digitales Marketing so messbar sein kann.\u201C",
      before: "8 Anfragen / Monat",
      after: "34 Anfragen / Monat",
    },
    {
      name: "Dr. Gradwohl",
      practice: "Schönheitschirurgie · Wien",
      quote: "\u201EMehr Privatpatienten als je zuvor. Das Onboarding war unkompliziert, die Ergebnisse kamen schnell.\u201C",
      before: "Wenig Premium-Anfragen",
      after: "+68% Privatpatienten",
    },
    {
      name: "Zahnwohl Penzing",
      practice: "Zahnarzt · Wien-Penzing",
      quote: "\u201EWir sind jetzt auf Platz 1 bei Google f\u00FCr alle relevanten Keywords. Die Praxis ist ausgebucht.\u201C",
      before: "Seite 3 bei Google",
      after: "Top 1 bei Google",
    },
  ];
  return (
    <div className="space-y-4">
      {cases.map((c) => (
        <div key={c.name} className="border border-[#f0f0f0]">
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#f5f5f5]">
            <div>
              <p className="font-bold text-[#1c1d1f] text-sm" style={RIFT}>{c.name}</p>
              <p className="text-[#aaa] text-xs">{c.practice}</p>
            </div>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <div className="px-5 py-3">
            <p className="text-[#555] text-sm italic leading-relaxed mb-3">{c.quote}</p>
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center py-2 bg-red-50">
                <p className="text-red-400 text-[9px] uppercase tracking-[0.07em] mb-0.5">Vorher</p>
                <p className="text-[#555] text-xs font-semibold">{c.before}</p>
              </div>
              <div className="text-center py-2 bg-[#e8f0fb]">
                <p className="text-[#6798df] text-[9px] uppercase tracking-[0.07em] mb-0.5">Nachher</p>
                <p className="text-[#6798df] text-xs font-bold">{c.after}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="text-center py-3 bg-[#f8f8f8]">
        <p className="text-[#aaa] text-xs">5.0 / 5.0 Kundenbewertung · 50+ Praxen im DACH-Raum</p>
      </div>
    </div>
  );
}

function SystemContent() {
  return (
    <div>
      <div className="space-y-0 mb-6">
        {[
          {
            phase: "Phase 1", time: "Woche 1–2", title: "ANALYSE & STRATEGIE",
            steps: ["Markt- & Mitbewerberanalyse", "Keyword-Potenzial-Recherche", "Technisches Praxis-Audit", "Individuelle Wachstumsstrategie"],
          },
          {
            phase: "Phase 2", time: "Woche 3–4", title: "LAUNCH",
            steps: ["Website-Optimierung oder Relaunch", "Google SEO & Ads live schalten", "Social Media Setup", "Tracking & Analytics aktiv"],
          },
          {
            phase: "Phase 3", time: "Ab Monat 2", title: "WACHSTUM & SKALIERUNG",
            steps: ["Monatliche Kampagnen-Optimierung", "A/B-Tests & Conversion-Tracking", "Persönliches Reporting-Gespräch", "Kontinuierliches Wachstum"],
          },
        ].map((p, i) => (
          <div key={p.phase} className="flex gap-4 pb-5">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-8 h-8 bg-[#6798df] flex items-center justify-center shrink-0">
                <span className="text-white text-[11px] font-bold" style={RIFT}>{i + 1}</span>
              </div>
              {i < 2 && <div className="w-px flex-1 bg-[#e5e5e5] mt-1" />}
            </div>
            <div className="pb-2">
              <div className="flex items-center gap-2 mb-1 mt-1">
                <span className="text-[#6798df] text-[10px] font-bold uppercase tracking-[0.1em]" style={RIFT}>{p.phase}</span>
                <span className="text-[#ccc] text-[10px]">· {p.time}</span>
              </div>
              <h4 className="text-[#1c1d1f] font-bold text-sm uppercase mb-2" style={RIFT}>{p.title}</h4>
              <ul className="space-y-1">
                {p.steps.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-[#666] text-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6798df] shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 bg-[#1c1d1f] px-5 py-4">
        <div>
          <p className="text-white/50 text-xs">Erste messbare Ergebnisse bereits nach</p>
          <p className="text-[#6798df] font-bold text-xl" style={RIFT}>2–4 WOCHEN</p>
        </div>
      </div>
    </div>
  );
}

function TrustContent() {
  return (
    <div>
      <div className="space-y-2 mb-6">
        {[
          { t: "Antwort innerhalb von 24 Stunden",    s: "Wir melden uns immer am nächsten Werktag" },
          { t: "Kostenlose Erstanalyse ohne Risiko",   s: "Keine Kreditkarte, keine Vorauszahlung" },
          { t: "DSGVO-konform & datensicher",          s: "Ihre Daten werden niemals weitergegeben" },
          { t: "Kein Kleingedrucktes",                 s: "Transparente Preise, keine versteckten Kosten" },
          { t: "Persönliche Betreuung",                s: "Ihr dedizierter Senior-Berater per WhatsApp erreichbar" },
          { t: "Monatliche Kündigung möglich",         s: "Keine Mindestlaufzeit im Basispaket" },
        ].map((g) => (
          <div key={g.t} className="flex items-start gap-3 p-3 bg-[#f8f8f8]">
            <CheckCircle2 className="w-4 h-4 text-[#6798df] shrink-0 mt-0.5" />
            <div>
              <p className="text-[#1c1d1f] text-sm font-semibold leading-snug">{g.t}</p>
              <p className="text-[#aaa] text-xs mt-0.5">{g.s}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 bg-[#1c1d1f] px-5 py-4">
        <Shield className="w-6 h-6 text-[#6798df] shrink-0" />
        <p className="text-white/60 text-sm leading-snug">
          <strong className="text-white">Nr. 1</strong> Medizin-Marketing-Agentur im DACH-Raum.
          Über 50 Praxen vertrauen uns.
        </p>
      </div>
    </div>
  );
}

// ── Modal titles lookup ──────────────────────────────────────────────────────

const MODAL_TITLES: Record<string, string> = {
  results: "MESSBARE ERGEBNISSE",
  cases:   "REFERENZEN",
  system:  "DAS SYSTEM",
  trust:   "IHRE SICHERHEIT",
};

// ── Main component ───────────────────────────────────────────────────────────

export function FunnelPage() {
  const [step, setStep]               = useState(1);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [form, setForm]               = useState<FormData>({
    specialty: "", problem: "", name: "", phone: "", email: "", privacy: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]       = useState(false);
  const [error, setError]           = useState("");

  const selectedSpec = specialties.find((s) => s.id === form.specialty);

  const selectSpecialty = (id: string) => {
    setForm((f) => ({ ...f, specialty: id }));
    setTimeout(() => setStep(2), 360);
  };

  const selectProblem = (id: string) => {
    setForm((f) => ({ ...f, problem: id }));
  };

  const canSubmit = () => !!form.phone.trim() && form.privacy;

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

  // Tile click handler
  const openModal = (id: string) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-[100svh] flex flex-col" style={{ background: "#F8FAFB" }}>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header
        className="flex items-center justify-between px-5 sm:px-8 py-3.5 shrink-0 relative z-30 bg-white"
        style={{ borderBottom: "1px solid #dee2e8" }}
      >
        <a href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo_bm.svg" alt="Blue Monkeys Medical" className="h-7 w-auto" />
          <span
            className="font-bold text-[#1c1d1f] text-[14px] sm:text-[15px] leading-none uppercase"
            style={RIFT}
          >
            Blue Monkeys <span className="text-[#6798df]">Medical</span>
          </span>
        </a>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-[#999] text-[11px]">
            <Shield className="w-3.5 h-3.5 text-[#6798df]/50" />
            DSGVO-konform
          </div>
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium bg-white border border-[#dee2e8]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#888] hidden sm:inline">47 Ärzte heute gestartet</span>
            <span className="text-[#888] sm:hidden">47 heute</span>
          </div>
        </div>
      </header>

      {/* ── Main grid ──────────────────────────────────────────────────────── */}
      <div className="flex-1 flex min-h-0">

        {/* LEFT / MAIN: form ------------------------------------------------ */}
        <div className="flex-1 flex flex-col items-center justify-start lg:justify-center px-4 sm:px-8 lg:px-10 xl:px-16 py-3 sm:py-6 lg:py-10 overflow-y-auto">
          <div className="w-full max-w-lg">

            {!success ? (
              <>
                {/* Page headline (outside the white card) */}
                <div className="mb-3">
                  <div
                    className="inline-flex items-center gap-2 text-[#6798df] text-[10px] font-bold uppercase tracking-[0.14em] mb-2"
                    style={{ ...RIFT }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6798df] animate-pulse" />
                    Kostenlose Praxis-Analyse
                  </div>
                  <h1
                    className="text-[#1c1d1f] uppercase leading-[0.9] tracking-tight"
                    style={{ ...RIFT, fontSize: "clamp(1.6rem, 5vw, 2.6rem)" }}
                  >
                    IHREN PERSÖNLICHEN
                    <br />
                    <span className="text-[#6798df]">PRAXIS-STRATEGIEPLAN</span>
                    <br />
                    ANFORDERN
                  </h1>
                  <p className="text-[#999] text-xs mt-1.5">
                    In 2 Minuten · Kostenlos · Individuell für Ihre Praxis
                  </p>

                  {/* 5-star social proof */}
                  <div className="flex items-center gap-3 mt-2.5">
                    <div className="flex -space-x-2">
                      {[
                        "https://i.pravatar.cc/40?img=11",
                        "https://i.pravatar.cc/40?img=47",
                        "https://i.pravatar.cc/40?img=32",
                        "https://i.pravatar.cc/40?img=58",
                        "https://i.pravatar.cc/40?img=19",
                      ].map((src, i) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={src}
                          src={src}
                          alt="Arzt"
                          width={28}
                          height={28}
                          loading="lazy"
                          decoding="async"
                          className="w-7 h-7 rounded-full object-cover"
                          style={{ border: "2px solid #F8FAFB", zIndex: 5 - i }}
                        />
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-[#aaa] text-[11px] leading-none mt-0.5">
                        <strong className="text-[#555]">5.0 Bewertung</strong> · 50+ Praxen
                      </p>
                    </div>
                  </div>
                </div>

                {/* White form card */}
                <div className="bg-white">

                  {/* Blue accent top */}
                  <div className="h-[3px] bg-[#6798df]" />

                  <div className="px-5 sm:px-8 py-5 sm:py-7">

                    {/* Step progress */}
                    <div className="flex items-center mb-5">
                      {[1, 2, 3].map((n) => (
                        <div key={n} className="flex items-center flex-1">
                          <div className="flex flex-col items-center gap-1 shrink-0">
                            <div
                              className={`w-7 h-7 flex items-center justify-center text-[11px] font-bold transition-all duration-300 ${
                                n < step
                                  ? "bg-[#6798df] text-white"
                                  : n === step
                                  ? "bg-[#1c1d1f] text-white"
                                  : "bg-[#f2f2f2] text-[#ccc]"
                              }`}
                              style={RIFT}
                            >
                              {n < step ? <CheckCircle2 className="w-3.5 h-3.5" /> : n}
                            </div>
                            <span
                              className={`text-[8px] uppercase tracking-[0.04em] whitespace-nowrap ${
                                n === step ? "text-[#1c1d1f] font-bold" : "text-[#ccc]"
                              }`}
                              style={RIFT}
                            >
                              {stepLabels[n - 1]}
                            </span>
                          </div>
                          {n < 3 && (
                            <div
                              className={`h-[2px] flex-1 mx-2 mb-4 transition-all duration-500 ${
                                n < step ? "bg-[#6798df]" : "bg-[#f0f0f0]"
                              }`}
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Steps */}
                    <AnimatePresence mode="wait">

                      {/* STEP 1 — Fachrichtung */}
                      {step === 1 && (
                        <motion.div
                          key="s1"
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -16 }}
                          transition={{ duration: 0.2 }}
                        >
                          <h3 className="text-[#1c1d1f] font-bold uppercase text-sm mb-1" style={RIFT}>
                            Welche Fachrichtung haben Sie?
                          </h3>
                          <p className="text-[#999] text-xs mb-4 leading-relaxed">
                            Damit wir Ihren Strategieplan gezielt auf Ihre Praxis zuschneiden können.
                          </p>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 mb-3">
                            {specialties.map((s) => (
                              <motion.button
                                key={s.id}
                                onClick={() => selectSpecialty(s.id)}
                                whileTap={{ scale: 0.96 }}
                                className={`flex flex-col items-center gap-2 py-4 px-2 border-2 transition-all duration-150 group ${
                                  form.specialty === s.id
                                    ? "border-[#6798df] bg-[#e8f0fb]"
                                    : "border-[#ebebeb] bg-[#fafafa] hover:border-[#6798df]/40 hover:bg-[#f5f8ff]"
                                }`}
                              >
                                <s.icon
                                  className={`w-5 h-5 transition-colors ${
                                    form.specialty === s.id ? "text-[#6798df]" : "text-[#d0d0d0] group-hover:text-[#6798df]/60"
                                  }`}
                                />
                                <span
                                  className={`text-xs font-semibold leading-tight text-center ${
                                    form.specialty === s.id ? "text-[#6798df]" : "text-[#555]"
                                  }`}
                                >
                                  {s.label}
                                </span>
                              </motion.button>
                            ))}
                          </div>
                          <p className="text-center text-[10px] text-[#d0d0d0]">
                            Klicken — weiter geht&apos;s automatisch
                          </p>
                        </motion.div>
                      )}

                      {/* STEP 2 — Problem */}
                      {step === 2 && (
                        <motion.div
                          key="s2"
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -16 }}
                          transition={{ duration: 0.2 }}
                        >
                          {/* Personalized result banner */}
                          {selectedSpec && (
                            <motion.div
                              initial={{ opacity: 0, y: -6 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex items-center gap-3 bg-[#e8f0fb] px-4 py-3 mb-5"
                              style={{ borderLeft: "3px solid #6798df" }}
                            >
                              <div
                                className="text-[#6798df] font-bold leading-none shrink-0"
                                style={{ ...RIFT, fontSize: "1.6rem" }}
                              >
                                {selectedSpec.result}
                              </div>
                              <div>
                                <p className="text-[#1c1d1f] text-xs font-semibold leading-tight">
                                  Praxen wie Ihre bei uns
                                </p>
                                <p className="text-[#888] text-[11px] mt-0.5">{selectedSpec.sub}</p>
                              </div>
                            </motion.div>
                          )}

                          <h3 className="text-[#1c1d1f] font-bold uppercase text-sm mb-1" style={RIFT}>
                            Was kostet Sie gerade am meisten?
                          </h3>
                          <p className="text-[#999] text-xs mb-4">
                            Wählen Sie Ihr größtes Problem — für einen gezielten Plan.
                          </p>
                          <div className="grid grid-cols-2 gap-1.5 mb-5">
                            {problems.map((p) => (
                              <button
                                key={p.id}
                                onClick={() => selectProblem(p.id)}
                                className={`flex items-center gap-2 p-3 border-2 text-left transition-all duration-150 ${
                                  form.problem === p.id
                                    ? "border-[#6798df] bg-[#e8f0fb]"
                                    : "border-[#ebebeb] bg-[#fafafa] hover:border-[#6798df]/40"
                                }`}
                              >
                                <p.icon
                                  className={`w-4 h-4 shrink-0 ${
                                    form.problem === p.id ? "text-[#6798df]" : "text-[#ccc]"
                                  }`}
                                />
                                <span
                                  className={`text-xs font-semibold leading-tight ${
                                    form.problem === p.id ? "text-[#6798df]" : "text-[#555]"
                                  }`}
                                >
                                  {p.label}
                                </span>
                              </button>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setStep(1)}
                              className="flex items-center px-4 py-3 border border-[#ebebeb] text-[#aaa] hover:border-[#1c1d1f] hover:text-[#1c1d1f] transition-all"
                              style={RIFT}
                            >
                              <ArrowLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setStep(3)}
                              disabled={!form.problem}
                              className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#1c1d1f] text-white font-bold text-sm uppercase tracking-[0.05em] hover:bg-[#6798df] hover:text-[#1c1d1f] transition-all disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-[#1c1d1f] disabled:hover:text-white"
                              style={RIFT}
                            >
                              Weiter
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 3 — Contact */}
                      {step === 3 && (
                        <motion.div
                          key="s3"
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -16 }}
                          transition={{ duration: 0.2 }}
                        >
                          <h3 className="text-[#1c1d1f] font-bold uppercase text-sm mb-1" style={RIFT}>
                            Fast geschafft!
                          </h3>
                          <p className="text-[#999] text-xs mb-5 leading-relaxed">
                            Wir melden uns innerhalb von{" "}
                            <strong className="text-[#1c1d1f]">24 Stunden</strong> per WhatsApp
                            oder Anruf — persönlich, keine Automatisierung.
                          </p>

                          <div className="space-y-3 mb-5">
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-[0.09em] text-[#aaa] mb-1.5" style={RIFT}>
                                Name (optional)
                              </label>
                              <input
                                type="text"
                                placeholder="Dr. Vorname Nachname"
                                value={form.name}
                                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                                className="w-full px-3.5 py-3 text-[#1c1d1f] text-sm border border-[#e5e5e5] bg-white outline-none focus:border-[#6798df] transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-[0.09em] text-[#aaa] mb-1.5" style={RIFT}>
                                Handynummer *
                              </label>
                              <div className="relative">
                                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#ccc] pointer-events-none" />
                                <input
                                  type="tel"
                                  placeholder="+43 123 456 789"
                                  value={form.phone}
                                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                                  className="w-full pl-9 pr-3.5 py-3 text-[#1c1d1f] text-sm border border-[#e5e5e5] bg-white outline-none focus:border-[#6798df] transition-colors"
                                />
                              </div>
                              <p className="text-[#ccc] text-[10px] mt-1">
                                Kontakt per WhatsApp oder Anruf — kein Spam, versprochen.
                              </p>
                            </div>
                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-[0.09em] text-[#aaa] mb-1.5" style={RIFT}>
                                E-Mail (optional)
                              </label>
                              <input
                                type="email"
                                placeholder="praxis@beispiel.at"
                                value={form.email}
                                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                                className="w-full px-3.5 py-3 text-[#1c1d1f] text-sm border border-[#e5e5e5] bg-white outline-none focus:border-[#6798df] transition-colors"
                              />
                            </div>
                            <label className="flex items-start gap-2.5 cursor-pointer group">
                              <input
                                type="checkbox"
                                checked={form.privacy}
                                onChange={(e) => setForm((f) => ({ ...f, privacy: e.target.checked }))}
                                className="mt-0.5 w-4 h-4 accent-[#6798df] cursor-pointer shrink-0"
                              />
                              <span className="text-[11px] text-[#aaa] leading-relaxed group-hover:text-[#666] transition-colors">
                                Ich stimme der{" "}
                                <a href="/datenschutz" className="text-[#6798df] hover:underline">
                                  Datenschutzerklärung
                                </a>{" "}
                                zu. *
                              </span>
                            </label>
                          </div>

                          {error && (
                            <p className="text-red-500 text-sm mb-3 p-3 bg-red-50 border border-red-100">
                              {error}
                            </p>
                          )}

                          <div className="flex gap-2 mb-4">
                            <button
                              onClick={() => setStep(2)}
                              className="flex items-center px-4 py-4 border border-[#ebebeb] text-[#aaa] hover:border-[#1c1d1f] hover:text-[#1c1d1f] transition-all"
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
                                  Strategieplan anfordern
                                  <ArrowRight className="w-4 h-4" />
                                </>
                              )}
                            </button>
                          </div>

                          <div className="flex flex-wrap gap-3">
                            {["Kostenlos", "Unverbindlich", "DSGVO-konform"].map((t) => (
                              <span key={t} className="flex items-center gap-1.5 text-[10px] text-[#ccc]">
                                <CheckCircle2 className="w-3 h-3 text-[#6798df]" />
                                {t}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Mobile proof tiles (2×2 grid below form) */}
                <div className="mt-4 lg:hidden">
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#bbb] mb-2 px-0.5" style={RIFT}>
                    Mehr erfahren
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {infoTiles.map((tile) => (
                      <button
                        key={tile.id}
                        onClick={() => openModal(tile.id)}
                        className="flex flex-col gap-2.5 px-4 py-4 text-left bg-white border border-[#dee2e8] hover:border-[#6798df] active:bg-[#EEF3FC] transition-all group"
                      >
                        <div className="w-9 h-9 bg-[#6798df]/10 flex items-center justify-center shrink-0 group-hover:bg-[#6798df]/20 transition-colors">
                          <tile.icon className="w-4.5 h-4.5 text-[#6798df]" />
                        </div>
                        <div>
                          <p className="text-[#1c1d1f] text-[11px] font-bold uppercase leading-tight" style={RIFT}>
                            {tile.title}
                          </p>
                          <p className="text-[#aaa] text-[10px] leading-tight mt-0.5 line-clamp-2">
                            {tile.sub}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              /* ── Success ──────────────────────────────────────────────── */
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18, delay: 0.1 }}
                  className="w-16 h-16 bg-[#6798df] flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </motion.div>
                <h2
                  className="text-[#1c1d1f] text-3xl uppercase mb-3"
                  style={RIFT}
                >
                  {form.name
                    ? `Danke, ${form.name.split(" ").find((w) => w.length > 2) ?? form.name.split(" ")[0]}!`
                    : "Danke!"}
                </h2>
                <p className="text-[#666] text-base mb-7 leading-relaxed">
                  Ihr persönlicher Strategieplan ist in Arbeit. Wir melden uns{" "}
                  <strong className="text-[#1c1d1f]">innerhalb von 24 Stunden</strong>.
                </p>
                <div className="bg-white">
                  <div className="h-[3px] bg-[#6798df]" />
                  {[
                    { n: "01", t: "Wir analysieren Ihre Praxis & Mitbewerber" },
                    { n: "02", t: "Kostenloses 30-min Strategiegespräch" },
                    { n: "03", t: "Ihr individueller Wachstumsplan — konkret & messbar" },
                  ].map((s, i) => (
                    <div
                      key={s.n}
                      className={`flex items-center gap-4 px-6 py-4 ${i < 2 ? "border-b border-[#f5f5f5]" : ""}`}
                    >
                      <div className="w-7 h-7 bg-[#6798df] flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-[11px]" style={RIFT}>{s.n}</span>
                      </div>
                      <p className="text-[#555] text-sm">{s.t}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* RIGHT: Info tiles — desktop only --------------------------------- */}
        <aside
          className="hidden lg:flex flex-col w-[300px] xl:w-[340px] shrink-0"
          style={{ borderLeft: "1px solid #dee2e8", background: "#FFFFFF" }}
        >
          {infoTiles.map((tile, i) => (
            <button
              key={tile.id}
              onClick={() => openModal(tile.id)}
              className="flex-1 flex items-center gap-4 px-6 xl:px-8 py-5 text-left group transition-all relative hover:bg-[#EEF3FC]"
              style={{ borderBottom: i < 3 ? "1px solid #dee2e8" : "none" }}
            >
              {/* Hover accent line */}
              <div className="absolute left-0 inset-y-3 w-[3px] bg-transparent group-hover:bg-[#6798df] transition-all duration-200" />

              <div className="w-10 h-10 bg-[#6798df]/10 flex items-center justify-center shrink-0 group-hover:bg-[#6798df]/18 transition-colors">
                <tile.icon className="w-5 h-5 text-[#6798df]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#1c1d1f] font-bold text-[13px] uppercase leading-tight mb-1" style={RIFT}>
                  {tile.title}
                </p>
                <p className="text-[#999] text-[11px] leading-tight truncate">{tile.sub}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#ccc] shrink-0 group-hover:text-[#6798df] group-hover:translate-x-0.5 transition-all" />
            </button>
          ))}
        </aside>
      </div>

      {/* ── Trust marquee ──────────────────────────────────────────────────── */}
      <div
        className="py-3.5 shrink-0 bg-white"
        style={{ borderTop: "1px solid #dee2e8" }}
      >
        <div className="marquee">
          <div className="marquee-content">
            {[...trustNames, ...trustNames].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-[#1c1d1f]/20 font-bold uppercase text-xs tracking-[0.06em] whitespace-nowrap"
                style={RIFT}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Minimal footer ─────────────────────────────────────────────────── */}
      <footer
        className="py-2.5 px-5 sm:px-8 flex items-center justify-between shrink-0 bg-white"
        style={{ borderTop: "1px solid #dee2e8" }}
      >
        <p className="text-[#bbb] text-[11px]">© 2025 Blue Monkeys Medical GmbH</p>
        <div className="flex gap-4">
          {["Impressum", "Datenschutz"].map((l) => (
            <a
              key={l}
              href={`/${l.toLowerCase()}`}
              className="text-[#bbb] text-[11px] hover:text-[#555] transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </footer>

      {/* ── Modals ─────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
            style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
            onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
          >
            <motion.div
              key="modal-card"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
              className="bg-white w-full sm:max-w-[480px] max-h-[92svh] sm:max-h-[85vh] flex flex-col"
            >
              {/* Blue accent */}
              <div className="h-[3px] bg-[#6798df] shrink-0" />

              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-4 shrink-0" style={{ borderBottom: "1px solid #f5f5f5" }}>
                <h3 className="text-[#1c1d1f] font-bold uppercase text-[15px]" style={RIFT}>
                  {MODAL_TITLES[activeModal]}
                </h3>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 flex items-center justify-center text-[#ccc] hover:text-[#1c1d1f] hover:bg-[#f5f5f5] transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal body */}
              <div className="overflow-y-auto px-6 py-5 flex-1">
                {activeModal === "results" && <ResultsContent />}
                {activeModal === "cases"   && <CasesContent />}
                {activeModal === "system"  && <SystemContent />}
                {activeModal === "trust"   && <TrustContent />}
              </div>

              {/* Modal footer CTA */}
              <div className="px-6 py-4 shrink-0" style={{ borderTop: "1px solid #f5f5f5" }}>
                <button
                  onClick={closeModal}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#6798df] text-[#1c1d1f] font-bold text-sm uppercase tracking-[0.05em] hover:bg-[#1c1d1f] hover:text-white transition-all"
                  style={RIFT}
                >
                  Analyse starten
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
