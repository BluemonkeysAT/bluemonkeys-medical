"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, ArrowRight, Send } from "lucide-react";

const RIFT = { fontFamily: "'Rift-Bold', Impact, sans-serif" };

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  const handleCTA = () => {
    setOpen(false);
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
            className="w-[300px] bg-[#1c1d1f] shadow-2xl overflow-hidden"
          >
            {/* Blue top accent */}
            <div className="h-[3px] bg-[#6798df]" />

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 bg-[#6798df] flex items-center justify-center">
                    <span className="text-[#1c1d1f] font-bold text-[11px]" style={RIFT}>BM</span>
                  </div>
                  {/* Green online dot */}
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                </div>
                <div>
                  <p className="text-white font-bold text-xs leading-none" style={RIFT}>
                    Blue Monkeys Medical
                  </p>
                  <p className="text-emerald-400 text-[10px] mt-0.5 font-medium">Online · Antwortet schnell</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/30 hover:text-white/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat bubble */}
            <div className="px-5 py-5 space-y-4">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 bg-[#6798df]/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#6798df] font-bold text-[10px]" style={RIFT}>GW</span>
                </div>
                <div className="bg-[#252629] px-4 py-3 flex-1">
                  <p className="text-white/80 text-sm leading-relaxed">
                    Hallo! 👋 Wie können wir Ihrer Praxis zu mehr Patienten verhelfen?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 justify-end">
                <div className="bg-[#6798df]/15 border border-[#6798df]/20 px-4 py-3 max-w-[80%]">
                  <p className="text-white/60 text-sm leading-relaxed italic">
                    Kostenlose Analyse anfragen...
                  </p>
                </div>
              </div>

              {/* Response time note */}
              <p className="text-white/25 text-[11px] text-center pt-1">
                Wir melden uns innerhalb von{" "}
                <span className="text-white/50 font-semibold">24 Stunden</span>
              </p>
            </div>

            {/* CTA */}
            <div className="px-5 pb-5">
              <button
                onClick={handleCTA}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#6798df] text-[#1c1d1f] font-bold text-sm uppercase tracking-[0.05em] hover:bg-white transition-colors duration-200"
                style={RIFT}
              >
                <Send className="w-4 h-4" />
                Gespräch starten
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <div className="relative">
        {/* Pulse ring when closed */}
        {!open && (
          <span className="absolute inset-0 pointer-events-none">
            <span className="animate-ping absolute inline-flex h-full w-full bg-[#6798df] opacity-20" />
          </span>
        )}
        <motion.button
          onClick={() => setOpen((o) => !o)}
          whileTap={{ scale: 0.95 }}
          className={`relative flex items-center gap-2.5 px-5 py-3.5 font-bold text-sm uppercase tracking-[0.06em] shadow-xl transition-colors duration-200 ${
            open
              ? "bg-[#252629] text-white/60 hover:text-white"
              : "bg-[#1c1d1f] text-white hover:bg-[#6798df] hover:text-[#1c1d1f]"
          }`}
          style={RIFT}
        >
          {open ? (
            <X className="w-4 h-4" />
          ) : (
            <>
              <MessageSquare className="w-4 h-4 text-[#6798df]" />
              Kontakt
              {/* Notification dot */}
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
}
