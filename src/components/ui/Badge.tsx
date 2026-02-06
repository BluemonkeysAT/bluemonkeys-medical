"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type BadgeVariant = "default" | "success" | "outline";

interface BadgeProps {
  variant?: BadgeVariant;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-bm-blue/10 text-bm-blue",
  success: "bg-bm-success/10 text-bm-success",
  outline: "bg-transparent border border-bm-blue/30 text-bm-blue",
};

export function Badge({
  variant = "default",
  icon,
  children,
  className,
  pulse = false,
}: BadgeProps) {
  return (
    <motion.span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full",
        variants[variant],
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
        </span>
      )}
      {icon}
      {children}
    </motion.span>
  );
}
