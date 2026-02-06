"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Calendar,
} from "lucide-react";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />

      <motion.div
        className="container-lg px-4 md:px-8 relative z-10"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-display text-bm-black mb-4">
            Bereit für mehr Patienten?
          </h2>
          <p className="text-xl text-bm-gray-400 max-w-2xl mx-auto">
            In 30 Minuten besprechen wir Ihre Situation und zeigen konkrete
            Möglichkeiten. Kostenlos und unverbindlich.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <Card className="p-6 md:p-8" hover={false}>
              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 bg-bm-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-bm-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-bm-black mb-2">
                    Nachricht gesendet!
                  </h3>
                  <p className="text-bm-gray-400 mb-6">
                    Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        praxisType: "",
                        message: "",
                      });
                    }}
                  >
                    Weitere Nachricht senden
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-bm-black mb-2">
                        Name *
                      </label>
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
                      <label className="block text-sm font-medium text-bm-black mb-2">
                        E-Mail *
                      </label>
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-bm-black mb-2">
                        Telefon
                      </label>
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
                      <label className="block text-sm font-medium text-bm-black mb-2">
                        Praxistyp
                      </label>
                      <select
                        name="praxisType"
                        value={formData.praxisType}
                        onChange={handleChange}
                        className="input"
                      >
                        <option value="">Bitte wählen...</option>
                        <option value="zahnarzt">Zahnarzt</option>
                        <option value="allgemeinmedizin">Allgemeinmedizin</option>
                        <option value="facharzt">Facharzt</option>
                        <option value="andere">Andere</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-bm-black mb-2">
                      Ihre Nachricht
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="input resize-none"
                      placeholder="Erzählen Sie uns von Ihrer Praxis und Ihren Zielen..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto"
                    loading={isSubmitting}
                    icon={<Send className="w-5 h-5" />}
                  >
                    Nachricht senden
                  </Button>

                  <p className="text-sm text-bm-gray-400">
                    Mit dem Absenden stimmen Sie unserer{" "}
                    <a href="/datenschutz" className="text-bm-blue hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    zu.
                  </p>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp} className="lg:col-span-2 space-y-6">
            {/* Quick Contact */}
            <Card padding="lg" hover={false}>
              <h3 className="text-lg font-bold text-bm-black mb-4">
                Direkter Kontakt
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:medical@bluemonkeys.at"
                    className="flex items-center gap-3 text-bm-gray-500 hover:text-bm-blue transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-bm-blue/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-bm-blue" />
                    </div>
                    medical@bluemonkeys.at
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+4315555555"
                    className="flex items-center gap-3 text-bm-gray-500 hover:text-bm-blue transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-bm-blue/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-bm-blue" />
                    </div>
                    +43 1 555 55 55
                  </a>
                </li>
                <li className="flex items-center gap-3 text-bm-gray-500">
                  <div className="w-10 h-10 rounded-xl bg-bm-blue/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-bm-blue" />
                  </div>
                  Musterstraße 1, 1010 Wien
                </li>
              </ul>
            </Card>

            {/* Availability */}
            <Card padding="lg" hover={false}>
              <h3 className="text-lg font-bold text-bm-black mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-bm-blue" />
                Erreichbarkeit
              </h3>
              <div className="space-y-2 text-bm-gray-500">
                <p>Mo – Fr: 09:00 – 18:00</p>
                <p className="text-sm text-bm-gray-400">
                  Termine auch außerhalb der Geschäftszeiten möglich
                </p>
              </div>
            </Card>

            {/* Book Meeting CTA */}
            <Card
              className="bg-gradient-to-br from-bm-blue to-bm-blue-dark text-white"
              padding="lg"
              hover={false}
            >
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-6 h-6" />
                <h3 className="text-lg font-bold">Lieber gleich sprechen?</h3>
              </div>
              <p className="text-white/80 mb-4 text-sm">
                Buchen Sie direkt einen kostenlosen 30-Minuten-Call.
              </p>
              <Button
                variant="secondary"
                className="w-full bg-white text-bm-blue hover:bg-white/90"
              >
                Termin buchen
              </Button>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
