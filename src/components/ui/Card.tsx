"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeUp, cardHover, transition } from "@/lib/animations";
import { ReactNode } from "react";

interface CardProps {
  hover?: boolean;
  glass?: boolean;
  glow?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
  children?: ReactNode;
}

const paddings = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  hover = true,
  glass = false,
  glow = false,
  padding = "md",
  className,
  children,
}: CardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
        glass
          ? "bg-white/70 backdrop-blur-xl border border-white/20"
          : "bg-white shadow-bm",
        hover && "hover:shadow-bm-xl hover:-translate-y-1 cursor-pointer",
        glow && "hover:shadow-glow",
        paddings[padding],
        className
      )}
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      transition={transition}
      whileHover={hover ? cardHover : undefined}
    >
      {children}
    </motion.div>
  );
}

export function GlassCard({
  className,
  children,
  ...props
}: Omit<CardProps, "glass">) {
  return (
    <Card glass className={className} {...props}>
      {children}
    </Card>
  );
}
