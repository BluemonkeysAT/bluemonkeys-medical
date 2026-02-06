"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Card } from "@/components/ui/Card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Seit der Zusammenarbeit mit Blue Monkeys haben wir nicht nur mehr Patienten, sondern vor allem die richtigen Patienten. Die Qualität der Anfragen ist spürbar gestiegen.",
    author: "Dr. Thomas Müller",
    role: "Zahnarzt",
    location: "Wien",
    image: "/testimonials/1.jpg",
  },
  {
    quote:
      "Endlich eine Agentur, die versteht, wie Arztpraxen ticken. Keine leeren Versprechungen, sondern messbare Ergebnisse. Unser ROI war nach 4 Monaten positiv.",
    author: "Dr. Anna Weber",
    role: "Allgemeinmedizinerin",
    location: "Salzburg",
    image: "/testimonials/2.jpg",
  },
  {
    quote:
      "Der KI-Chatbot hat unsere Rezeption komplett entlastet. 60% der Terminanfragen laufen jetzt automatisch — rund um die Uhr.",
    author: "Dr. Michael Berger",
    role: "Kieferorthopäde",
    location: "Graz",
    image: "/testimonials/3.jpg",
  },
  {
    quote:
      "Professionell, schnell, kreativ. Die neue Website war in 6 Wochen fertig und sieht besser aus als alles, was die Konkurrenz hat.",
    author: "Dr. Sarah Klein",
    role: "Dermatologin",
    location: "Wien",
    image: "/testimonials/4.jpg",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="section bg-bm-black text-white overflow-hidden">
      <motion.div
        className="container-lg px-4 md:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-display mb-4">Das sagen unsere Kunden.</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Nicht wir reden über uns — unsere Kunden tun es.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div variants={fadeUp} className="max-w-4xl mx-auto relative">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-0 md:left-8">
            <Quote className="w-16 h-16 text-bm-blue/20" />
          </div>

          {/* Carousel */}
          <div className="relative h-[320px] md:h-[280px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                <Card
                  className="h-full bg-white/5 border border-white/10"
                  padding="lg"
                  hover={false}
                >
                  <div className="flex flex-col h-full justify-between">
                    {/* Quote */}
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                      "{testimonials[current].quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-bm-blue to-bm-blue-dark flex items-center justify-center text-xl font-bold">
                        {testimonials[current].author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {testimonials[current].author}
                        </div>
                        <div className="text-white/60 text-sm">
                          {testimonials[current].role} • {testimonials[current].location}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={() => paginate(-1)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-bm-blue"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={() => paginate(1)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
