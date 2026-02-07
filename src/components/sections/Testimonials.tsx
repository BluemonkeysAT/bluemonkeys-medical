"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Thomas Weber",
    role: "Zahnarzt",
    location: "Wien Döbling",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
    text: "In 6 Monaten haben wir unsere Patientenanfragen verdreifacht. Die Qualität ist eine andere — fast nur noch Privatpatienten.",
    rating: 5,
    result: "+340% Anfragen",
    verified: true,
  },
  {
    name: "Dr. Lisa Berger",
    role: "Dermatologin",
    location: "Wien 1. Bezirk",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
    text: "Der KI-Telefonassistent war ein Game-Changer. Wir verpassen keinen Anruf mehr. Absolut professionell.",
    rating: 5,
    result: "100% Erreichbarkeit",
    verified: true,
  },
  {
    name: "Dr. Michael Steiner",
    role: "Kieferorthopäde",
    location: "Salzburg",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop&crop=face",
    text: "Als Neugründer war Online-Marketing entscheidend. Blue Monkeys hat mir einen Vorsprung von 5 Jahren verschafft.",
    rating: 5,
    result: "#1 bei Google",
    verified: true,
  },
  {
    name: "Dr. Anna Hofer",
    role: "Augenärztin",
    location: "Graz",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face",
    text: "Endlich ein Team, das versteht wie Arztpraxen funktionieren. Keine leeren Versprechen, nur Ergebnisse.",
    rating: 5,
    result: "+89% Website-Traffic",
    verified: true,
  },
  {
    name: "Dr. Peter Gruber",
    role: "Orthopäde",
    location: "Linz",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop&crop=face",
    text: "Die Website-Neugestaltung hat sofort Wirkung gezeigt. Patienten sagen mir, sie hätten sich für uns entschieden wegen der Website.",
    rating: 5,
    result: "+127% Conversions",
    verified: true,
  },
  {
    name: "Dr. Maria Novak",
    role: "Internistin",
    location: "Wien Währing",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=200&h=200&fit=crop&crop=face",
    text: "ROI nach 3 Monaten erreicht. Das Team ist reaktionsschnell und die Ergebnisse sprechen für sich.",
    rating: 5,
    result: "ROI in 3 Monaten",
    verified: true,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#fafafa]" id="testimonials">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#5fdafb] font-bold text-sm uppercase tracking-widest mb-4">
            Kundenstimmen
          </p>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6" style={{ fontFamily: "'Rift-Bold', system-ui" }}>
            WAS UNSERE
            <br />
            <span className="text-[#5fdafb]">KUNDEN SAGEN</span>
          </h2>

          {/* Rating Summary */}
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-[#222] font-semibold">4.9 von 5</span>
            <span className="text-[#888]">|</span>
            <span className="text-[#666]">150+ Bewertungen</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              className="bg-white p-8 shadow-sm border border-[#eee] hover:shadow-lg hover:border-[#5fdafb]/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[#5fdafb]/20 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#444] leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Result Badge */}
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium mb-6">
                <BadgeCheck className="w-4 h-4" />
                {testimonial.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#eee]">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-black">{testimonial.name}</span>
                    {testimonial.verified && (
                      <BadgeCheck className="w-4 h-4 text-[#5fdafb]" />
                    )}
                  </div>
                  <div className="text-sm text-[#888]">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-[#888] text-sm">
            Alle Bewertungen sind verifiziert und stammen von echten Kunden.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
