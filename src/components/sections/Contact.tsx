"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft,
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2,
  Shield,
  Zap,
  Star,
  Globe,
  Search,
  Megaphone,
  Bot,
  Palette,
  Sparkles,
  User,
  Building2,
  MessageSquare
} from "lucide-react";

const services = [
  { id: "website", label: "Neue Website", icon: Globe, price: "ab €4.900" },
  { id: "seo", label: "SEO", icon: Search, price: "ab €990/Mo" },
  { id: "ads", label: "Google & Meta Ads", icon: Megaphone, price: "ab €690/Mo" },
  { id: "ki", label: "KI-Assistent", icon: Bot, price: "ab €290/Mo" },
  { id: "branding", label: "Branding", icon: Palette, price: "ab €2.900" },
  { id: "llm", label: "LLM Marketing", icon: Sparkles, price: "auf Anfrage" },
];

const specialties = [
  "Zahnarzt",
  "Kieferorthopädie", 
  "Dermatologie",
  "Augenheilkunde",
  "Orthopädie",
  "Plastische Chirurgie",
  "Allgemeinmedizin",
  "Andere",
];

const benefits = [
  "30-minütige Potenzialanalyse",
  "Konkurrenzanalyse",
  "Individuelle Empfehlungen",
  "Kein Verkaufsgespräch",
];

const stats = [
  { value: "150+", label: "Praxen" },
  { value: "4.9", label: "Sterne", icon: Star },
  { value: "<24h", label: "Antwort" },
];

type Step = 1 | 2 | 3 | 4;

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [step, setStep] = useState<Step>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [specialty, setSpecialty] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Listen for service selection from Services component
  useEffect(() => {
    const handleServiceSelect = (e: CustomEvent) => {
      const serviceId = e.detail;
      if (serviceId && !selectedServices.includes(serviceId)) {
        setSelectedServices([serviceId]);
      }
    };
    window.addEventListener('selectService', handleServiceSelect as EventListener);
    return () => window.removeEventListener('selectService', handleServiceSelect as EventListener);
  }, [selectedServices]);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const canProceed = () => {
    switch (step) {
      case 1: return selectedServices.length > 0;
      case 2: return specialty !== "";
      case 3: return formData.name && formData.email;
      default: return true;
    }
  };

  const nextStep = () => {
    if (canProceed() && step < 4) setStep((step + 1) as Step);
  };

  const prevStep = () => {
    if (step > 1) setStep((step - 1) as Step);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const progressWidth = `${(step / 4) * 100}%`;

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-[#fafafa]" id="contact">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <div className="inline-flex items-center gap-2 bg-[#5fdafb]/10 text-[#222] px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium mb-4 lg:mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Nur noch 3 Plätze für Januar 2025
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-black mb-4 lg:mb-6 tracking-tight">
            KOSTENLOSE
            <br />
            <span className="bg-gradient-to-r from-[#5fdafb] to-[#a855f7] bg-clip-text text-transparent">BERATUNG</span>
          </h2>
          
          <p className="text-base lg:text-xl text-[#666]">
            In 60 Sekunden zum Angebot — <strong className="text-black">keine Verpflichtung</strong>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-12">
          {/* Left - Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {!isSubmitted ? (
              <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden">
                {/* Progress Bar */}
                <div className="h-1.5 lg:h-2 bg-gray-100">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#5fdafb] to-[#a855f7]"
                    initial={{ width: 0 }}
                    animate={{ width: progressWidth }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Steps Indicator */}
                <div className="flex justify-between px-4 lg:px-8 py-3 lg:py-4 border-b border-gray-100">
                  {[1, 2, 3, 4].map((s) => (
                    <div 
                      key={s} 
                      className={`flex items-center gap-1.5 lg:gap-2 text-xs lg:text-sm font-medium transition-colors ${
                        s === step ? "text-[#5fdafb]" : s < step ? "text-green-500" : "text-gray-300"
                      }`}
                    >
                      <div className={`w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center text-[10px] lg:text-xs font-bold ${
                        s === step ? "bg-[#5fdafb] text-white" : s < step ? "bg-green-500 text-white" : "bg-gray-100 text-gray-400"
                      }`}>
                        {s < step ? <CheckCircle2 className="w-3 h-3 lg:w-4 lg:h-4" /> : s}
                      </div>
                      <span className="hidden sm:inline">
                        {s === 1 && "Leistung"}
                        {s === 2 && "Praxis"}
                        {s === 3 && "Kontakt"}
                        {s === 4 && "Fertig"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Form Content */}
                <div className="p-5 lg:p-8 min-h-[350px] lg:min-h-[400px]">
                  <AnimatePresence mode="wait">
                    {/* Step 1: Services */}
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-xl lg:text-2xl font-bold text-black mb-2">
                          Was brauchen Sie?
                        </h3>
                        <p className="text-sm lg:text-base text-[#666] mb-5 lg:mb-6">
                          Wählen Sie alle Leistungen die Sie interessieren.
                        </p>

                        <div className="grid grid-cols-2 gap-2 lg:gap-3">
                          {services.map((service) => (
                            <motion.button
                              key={service.id}
                              onClick={() => toggleService(service.id)}
                              className={`relative p-3 lg:p-4 rounded-xl lg:rounded-2xl border-2 text-left transition-all ${
                                selectedServices.includes(service.id)
                                  ? "border-[#5fdafb] bg-[#5fdafb]/5"
                                  : "border-gray-100 hover:border-gray-200"
                              }`}
                              whileTap={{ scale: 0.98 }}
                            >
                              {selectedServices.includes(service.id) && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute top-2 right-2 lg:top-3 lg:right-3 w-4 h-4 lg:w-5 lg:h-5 bg-[#5fdafb] rounded-full flex items-center justify-center"
                                >
                                  <CheckCircle2 className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" />
                                </motion.div>
                              )}
                              <service.icon className={`w-5 h-5 lg:w-6 lg:h-6 mb-2 ${
                                selectedServices.includes(service.id) ? "text-[#5fdafb]" : "text-gray-400"
                              }`} />
                              <div className="font-bold text-xs lg:text-sm text-black">{service.label}</div>
                              <div className="text-[10px] lg:text-xs text-[#888] blur-[2px]">{service.price}</div>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Specialty */}
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-xl lg:text-2xl font-bold text-black mb-2">
                          Ihre Fachrichtung?
                        </h3>
                        <p className="text-sm lg:text-base text-[#666] mb-5 lg:mb-6">
                          Damit können wir Ihnen passende Referenzen zeigen.
                        </p>

                        <div className="grid grid-cols-2 gap-2 lg:gap-3">
                          {specialties.map((spec) => (
                            <motion.button
                              key={spec}
                              onClick={() => setSpecialty(spec)}
                              className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl border-2 text-left transition-all flex items-center gap-2 lg:gap-3 ${
                                specialty === spec
                                  ? "border-[#5fdafb] bg-[#5fdafb]/5"
                                  : "border-gray-100 hover:border-gray-200"
                              }`}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Building2 className={`w-4 h-4 lg:w-5 lg:h-5 ${
                                specialty === spec ? "text-[#5fdafb]" : "text-gray-400"
                              }`} />
                              <span className="font-medium text-xs lg:text-sm text-black">{spec}</span>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Contact Info */}
                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-xl lg:text-2xl font-bold text-black mb-2">
                          Wie erreichen wir Sie?
                        </h3>
                        <p className="text-sm lg:text-base text-[#666] mb-5 lg:mb-6">
                          Wir melden uns innerhalb von 24 Stunden.
                        </p>

                        <div className="space-y-3 lg:space-y-4">
                          <div>
                            <label className="block text-xs lg:text-sm font-medium text-[#222] mb-1.5 lg:mb-2">
                              <User className="w-3.5 h-3.5 lg:w-4 lg:h-4 inline mr-1.5" />
                              Name *
                            </label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Dr. Max Mustermann"
                              className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl border-2 border-gray-100 focus:border-[#5fdafb] outline-none transition-colors text-sm lg:text-base"
                            />
                          </div>
                          <div>
                            <label className="block text-xs lg:text-sm font-medium text-[#222] mb-1.5 lg:mb-2">
                              <Mail className="w-3.5 h-3.5 lg:w-4 lg:h-4 inline mr-1.5" />
                              E-Mail *
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="praxis@beispiel.at"
                              className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl border-2 border-gray-100 focus:border-[#5fdafb] outline-none transition-colors text-sm lg:text-base"
                            />
                          </div>
                          <div>
                            <label className="block text-xs lg:text-sm font-medium text-[#222] mb-1.5 lg:mb-2">
                              <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4 inline mr-1.5" />
                              Telefon (optional)
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+43 1 234 5678"
                              className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl border-2 border-gray-100 focus:border-[#5fdafb] outline-none transition-colors text-sm lg:text-base"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 4: Review & Submit */}
                    {step === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-xl lg:text-2xl font-bold text-black mb-2">
                          Fast geschafft! 🎉
                        </h3>
                        <p className="text-sm lg:text-base text-[#666] mb-5 lg:mb-6">
                          Prüfen Sie Ihre Angaben und senden Sie ab.
                        </p>

                        <div className="space-y-3 lg:space-y-4 bg-gray-50 rounded-xl lg:rounded-2xl p-4 lg:p-6 mb-4 lg:mb-6">
                          <div className="flex justify-between text-xs lg:text-sm">
                            <span className="text-[#666]">Leistungen:</span>
                            <span className="font-medium text-black">
                              {selectedServices.map(id => services.find(s => s.id === id)?.label).join(", ")}
                            </span>
                          </div>
                          <div className="flex justify-between text-xs lg:text-sm">
                            <span className="text-[#666]">Fachrichtung:</span>
                            <span className="font-medium text-black">{specialty}</span>
                          </div>
                          <div className="flex justify-between text-xs lg:text-sm">
                            <span className="text-[#666]">Name:</span>
                            <span className="font-medium text-black">{formData.name}</span>
                          </div>
                          <div className="flex justify-between text-xs lg:text-sm">
                            <span className="text-[#666]">E-Mail:</span>
                            <span className="font-medium text-black">{formData.email}</span>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs lg:text-sm font-medium text-[#222] mb-1.5 lg:mb-2">
                            <MessageSquare className="w-3.5 h-3.5 lg:w-4 lg:h-4 inline mr-1.5" />
                            Nachricht (optional)
                          </label>
                          <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Gibt es etwas, das wir wissen sollten?"
                            rows={3}
                            className="w-full px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl border-2 border-gray-100 focus:border-[#5fdafb] outline-none transition-colors resize-none text-sm lg:text-base"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="p-4 lg:p-6 border-t border-gray-100 flex justify-between items-center">
                  {step > 1 ? (
                    <button
                      onClick={prevStep}
                      className="flex items-center gap-1.5 lg:gap-2 text-[#666] hover:text-black transition-colors text-sm lg:text-base"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                      Zurück
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 4 ? (
                    <motion.button
                      onClick={nextStep}
                      disabled={!canProceed()}
                      className="flex items-center gap-1.5 lg:gap-2 px-5 lg:px-6 py-2.5 lg:py-3 bg-black text-white font-bold rounded-xl hover:bg-[#5fdafb] hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm lg:text-base"
                      whileTap={{ scale: 0.98 }}
                    >
                      Weiter
                      <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="flex items-center gap-1.5 lg:gap-2 px-5 lg:px-6 py-2.5 lg:py-3 bg-gradient-to-r from-[#5fdafb] to-[#a855f7] text-white font-bold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 text-sm lg:text-base"
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-3.5 h-3.5 lg:w-4 lg:h-4 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          Kostenlos anfragen
                          <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                        </>
                      )}
                    </motion.button>
                  )}
                </div>

                {/* Security Note */}
                <div className="px-4 lg:px-6 pb-4 lg:pb-6">
                  <p className="text-center text-[10px] lg:text-xs text-[#888] flex items-center justify-center gap-1.5">
                    <Shield className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
                    Ihre Daten sind sicher. Keine Spam-Mails.
                  </p>
                </div>
              </div>
            ) : (
              /* Success State */
              <motion.div 
                className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-10 text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6"
                >
                  <CheckCircle2 className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </motion.div>
                <h3 className="text-xl lg:text-2xl font-black text-black mb-3 lg:mb-4">
                  ANFRAGE ERHALTEN! 🎉
                </h3>
                <p className="text-sm lg:text-base text-[#666] mb-4 lg:mb-6">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <div className="inline-flex items-center gap-2 bg-[#5fdafb]/10 text-[#5fdafb] px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium">
                  <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  Wir rufen Sie an
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right - Info (Mobile: Collapsed) */}
          <motion.div
            className="lg:col-span-2 space-y-4 lg:space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {/* What You Get */}
            <div className="bg-black text-white rounded-2xl p-5 lg:p-6">
              <h4 className="font-bold text-sm lg:text-base mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-[#5fdafb]" />
                Das bekommen Sie
              </h4>
              <ul className="space-y-2 lg:space-y-3">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 lg:gap-3">
                    <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-[#5fdafb] shrink-0 mt-0.5" />
                    <span className="text-white/90 text-xs lg:text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats - Mobile Horizontal */}
            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm">
              <div className="flex lg:grid lg:grid-cols-3 justify-around gap-2 lg:gap-4 text-center">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-lg lg:text-2xl font-black text-black mb-0.5 lg:mb-1 flex items-center justify-center gap-0.5 lg:gap-1">
                      {stat.value}
                      {stat.icon && <stat.icon className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400" />}
                    </div>
                    <div className="text-[10px] lg:text-xs text-[#888]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact - Clickable on Mobile */}
            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm space-y-3">
              <a href="tel:+4315555555" className="flex items-center gap-3 p-2 lg:p-3 rounded-xl bg-gray-50 hover:bg-[#5fdafb]/10 transition-colors active:scale-98">
                <div className="p-2 bg-[#5fdafb]/10 rounded-lg">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-[#5fdafb]" />
                </div>
                <div>
                  <div className="font-bold text-black text-xs lg:text-sm">+43 1 555 5555</div>
                  <div className="text-[10px] lg:text-xs text-[#888]">Jetzt anrufen</div>
                </div>
              </a>

              <a href="mailto:medical@bluemonkeys.at" className="flex items-center gap-3 p-2 lg:p-3 rounded-xl bg-gray-50 hover:bg-[#5fdafb]/10 transition-colors active:scale-98">
                <div className="p-2 bg-[#5fdafb]/10 rounded-lg">
                  <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-[#5fdafb]" />
                </div>
                <div>
                  <div className="font-bold text-black text-xs lg:text-sm">medical@bluemonkeys.at</div>
                  <div className="text-[10px] lg:text-xs text-[#888]">E-Mail schreiben</div>
                </div>
              </a>
            </div>

            {/* Mini Testimonial */}
            <div className="bg-gradient-to-br from-[#5fdafb]/5 to-[#a855f7]/5 border border-[#5fdafb]/20 rounded-2xl p-4 lg:p-5">
              <div className="flex items-center gap-0.5 mb-2">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-[#444] italic text-xs lg:text-sm mb-2">
                "Die Erstberatung war extrem wertvoll!"
              </p>
              <p className="text-[#5fdafb] font-bold text-xs">
                — Dr. Anna Hofer
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
