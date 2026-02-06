"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Blue Monkeys hat unsere Online-Präsenz komplett transformiert. Die Qualität der Anfragen ist spürbar gestiegen — wir bekommen jetzt die Patienten, die wirklich zu uns passen.",
    author: "Dr. Thomas Müller",
    role: "Zahnarzt",
    location: "Wien",
    rating: 5,
  },
  {
    quote: "Endlich eine Agentur, die unsere Sprache spricht. Keine leeren Versprechen, nur messbare Ergebnisse. Unser ROI war nach 4 Monaten im Plus.",
    author: "Dr. Anna Weber",
    role: "Allgemeinmedizinerin",
    location: "Salzburg",
    rating: 5,
  },
  {
    quote: "Der KI-Chatbot hat unsere Rezeption komplett entlastet. 60% der Terminanfragen laufen automatisch — rund um die Uhr, ohne Wartezeiten.",
    author: "Dr. Michael Berger",
    role: "Kieferorthopäde",
    location: "Graz",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const paginate = (newDir: number) => {
    setDirection(newDir);
    setCurrent((prev) => {
      let next = prev + newDir;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => paginate(1), 6000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="section bg-bm-dark" ref={ref}>
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-bm-blue/10 border border-bm-blue/20 flex items-center justify-center">
              <Quote className="w-8 h-8 text-bm-blue" />
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative min-h-[280px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
                  "{testimonials[current].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-bm-blue to-bm-purple flex items-center justify-center text-white font-bold text-lg mb-2">
                    {testimonials[current].author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="font-semibold text-white">{testimonials[current].author}</div>
                  <div className="text-sm text-bm-gray-400">
                    {testimonials[current].role} • {testimonials[current].location}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="p-3 rounded-full bg-bm-card border border-bm-border hover:border-bm-border-light hover:bg-bm-card-hover transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-bm-blue"
                      : "w-2 bg-bm-gray-600 hover:bg-bm-gray-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="p-3 rounded-full bg-bm-card border border-bm-border hover:border-bm-border-light hover:bg-bm-card-hover transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
