"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2,
  Shield,
  Zap,
  Calendar,
  Users,
  Star
} from "lucide-react";

const benefits = [
  "30-minütige Potenzialanalyse Ihrer Praxis",
  "Konkurrenzanalyse Ihres lokalen Marktes",
  "Individuelle Handlungsempfehlungen",
  "Kein Verkaufsgespräch — nur Mehrwert",
];

const stats = [
  { value: "150+", label: "Praxen betreut" },
  { value: "4.9", label: "Sterne Bewertung", icon: Star },
  { value: "<24h", label: "Antwortzeit" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section ref={ref} className="py-24 bg-[#fafafa]" id="contact">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-[#5fdafb]/10 text-[#222] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Nur noch 3 Plätze für Januar 2025 verfügbar
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
            LASSEN SIE UNS
            <br />
            <span className="text-[#5fdafb]">REDEN</span>
          </h2>
          
          <p className="text-xl text-[#666]">
            Kostenlose Erstberatung für Ihre Praxis. 
            <strong className="text-black"> Keine Verpflichtung, nur Klarheit.</strong>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-10 shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
                  KOSTENLOSE ERSTBERATUNG ANFORDERN
                </h3>
                <p className="text-[#666] mb-8">
                  Füllen Sie das Formular aus. Wir melden uns innerhalb von 24 Stunden.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-[#222] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Max Mustermann"
                      className="w-full px-4 py-3 border-2 border-[#eee] focus:border-[#5fdafb] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#222] mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="praxis@beispiel.at"
                      className="w-full px-4 py-3 border-2 border-[#eee] focus:border-[#5fdafb] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-[#222] mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      placeholder="+43 1 234 5678"
                      className="w-full px-4 py-3 border-2 border-[#eee] focus:border-[#5fdafb] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#222] mb-2">
                      Fachrichtung *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border-2 border-[#eee] focus:border-[#5fdafb] outline-none transition-colors bg-white"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="zahnarzt">Zahnarzt</option>
                      <option value="kieferorthopaedie">Kieferorthopädie</option>
                      <option value="dermatologie">Dermatologie</option>
                      <option value="augenheilkunde">Augenheilkunde</option>
                      <option value="orthopaedie">Orthopädie</option>
                      <option value="plastische-chirurgie">Plastische Chirurgie</option>
                      <option value="allgemeinmedizin">Allgemeinmedizin</option>
                      <option value="andere">Andere</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#222] mb-2">
                    Wobei können wir helfen? *
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Neue Website",
                      "Mehr Patienten (SEO)",
                      "Google/Meta Ads",
                      "Praxis Branding",
                      "KI-Telefonassistent",
                      "Rundum-Betreuung",
                    ].map((option) => (
                      <label key={option} className="flex items-center gap-3 p-3 border-2 border-[#eee] hover:border-[#5fdafb] cursor-pointer transition-colors">
                        <input type="checkbox" className="w-4 h-4 accent-[#5fdafb]" />
                        <span className="text-sm text-[#444]">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-[#222] mb-2">
                    Ihre Website (falls vorhanden)
                  </label>
                  <input
                    type="url"
                    placeholder="https://www.ihre-praxis.at"
                    className="w-full px-4 py-3 border-2 border-[#eee] focus:border-[#5fdafb] outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold text-lg hover:bg-[#5fdafb] hover:text-black transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      Kostenlose Beratung anfordern
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-[#888] mt-4 flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  Ihre Daten sind sicher. Keine Spam-Mails.
                </p>
              </form>
            ) : (
              <div className="bg-white p-8 lg:p-10 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
                  ANFRAGE ERHALTEN!
                </h3>
                <p className="text-[#666] mb-6">
                  Vielen Dank für Ihr Interesse. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <p className="text-[#888] text-sm">
                  In der Zwischenzeit: Folgen Sie uns auf{" "}
                  <a href="#" className="text-[#5fdafb] hover:underline">LinkedIn</a> für Marketing-Tipps.
                </p>
              </div>
            )}
          </motion.div>

          {/* Right - Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* What You Get */}
            <div className="bg-black text-white p-8">
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#5fdafb]" />
                Das bekommen Sie
              </h4>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5fdafb] shrink-0 mt-0.5" />
                    <span className="text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="bg-white p-8 shadow-sm">
              <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-black mb-1 flex items-center justify-center gap-1" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
                      {stat.value}
                      {stat.icon && <stat.icon className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
                    </div>
                    <div className="text-xs text-[#888]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-8 shadow-sm space-y-4">
              <h4 className="font-bold text-black mb-4">Direktkontakt</h4>
              
              <a href="tel:+4315555555" className="flex items-center gap-4 text-[#666] hover:text-[#5fdafb] transition-colors">
                <div className="p-2 bg-[#f5f5f5] rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-black">+43 1 555 5555</div>
                  <div className="text-sm">Mo-Fr, 9-18 Uhr</div>
                </div>
              </a>

              <a href="mailto:medical@bluemonkeys.at" className="flex items-center gap-4 text-[#666] hover:text-[#5fdafb] transition-colors">
                <div className="p-2 bg-[#f5f5f5] rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-black">medical@bluemonkeys.at</div>
                  <div className="text-sm">Antwort in 24h</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-[#666]">
                <div className="p-2 bg-[#f5f5f5] rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-black">Wien, Österreich</div>
                  <div className="text-sm">Termine vor Ort möglich</div>
                </div>
              </div>
            </div>

            {/* Testimonial Mini */}
            <div className="bg-[#5fdafb]/5 border border-[#5fdafb]/20 p-6">
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-[#444] italic text-sm mb-3">
                "Die Erstberatung war extrem wertvoll. Endlich jemand, der unsere Herausforderungen versteht."
              </p>
              <p className="text-[#5fdafb] font-semibold text-sm">
                — Dr. Anna Hofer, Augenärztin
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
