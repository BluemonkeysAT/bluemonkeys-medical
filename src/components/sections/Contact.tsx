"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, Phone, MapPin, Clock, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  praxisType: string;
  message: string;
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    praxisType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-4">
              <Calendar className="w-4 h-4" />
              Let's Talk
            </span>
            <h2 className="text-display text-gradient mb-6">
              Bereit für mehr Patienten?
            </h2>
            <p className="text-body mb-10">
              In 30 Minuten besprechen wir Ihre Situation und zeigen konkrete
              Möglichkeiten. Kostenlos. Unverbindlich.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-10">
              <a href="mailto:medical@bluemonkeys.at" className="flex items-center gap-4 p-4 rounded-xl bg-bm-card border border-bm-border hover:border-bm-border-light transition-colors group">
                <div className="icon-container">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-bm-gray-400">Email</div>
                  <div className="text-white group-hover:text-bm-blue transition-colors">medical@bluemonkeys.at</div>
                </div>
              </a>

              <a href="tel:+4315555555" className="flex items-center gap-4 p-4 rounded-xl bg-bm-card border border-bm-border hover:border-bm-border-light transition-colors group">
                <div className="icon-container">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-bm-gray-400">Telefon</div>
                  <div className="text-white group-hover:text-bm-blue transition-colors">+43 1 555 55 55</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-bm-card border border-bm-border">
                <div className="icon-container">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-bm-gray-400">Erreichbarkeit</div>
                  <div className="text-white">Mo – Fr: 09:00 – 18:00</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card p-8">
              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Nachricht gesendet!</h3>
                  <p className="text-bm-gray-400 mb-6">Wir melden uns innerhalb von 24 Stunden.</p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", praxisType: "", message: "" });
                    }}
                    className="btn-secondary"
                  >
                    Neue Nachricht
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-bm-gray-300 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                        placeholder="Dr. Max Mustermann"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-bm-gray-300 mb-2">E-Mail *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        placeholder="praxis@beispiel.at"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-bm-gray-300 mb-2">Telefon</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                        placeholder="+43 1 234 56 78"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-bm-gray-300 mb-2">Praxistyp</label>
                      <select name="praxisType" value={formData.praxisType} onChange={handleChange} className="input">
                        <option value="">Bitte wählen...</option>
                        <option value="zahnarzt">Zahnarzt</option>
                        <option value="allgemeinmedizin">Allgemeinmedizin</option>
                        <option value="facharzt">Facharzt</option>
                        <option value="andere">Andere</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-bm-gray-300 mb-2">Nachricht</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="input resize-none"
                      placeholder="Erzählen Sie uns von Ihrer Praxis..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Nachricht senden
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </span>
                  </button>

                  <p className="text-xs text-bm-gray-500 text-center">
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <a href="/datenschutz" className="text-bm-blue hover:underline">Datenschutzerklärung</a> zu.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
