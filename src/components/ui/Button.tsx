"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `bg-bm-blue text-white hover:bg-bm-blue-dark hover:shadow-lg 
            hover:-translate-y-0.5 active:translate-y-0`,
  secondary: `bg-bm-black text-white hover:bg-bm-gray-500 hover:shadow-lg 
              hover:-translate-y-0.5 active:translate-y-0`,
  ghost: `bg-transparent text-bm-black hover:bg-bm-gray-100 active:bg-bm-gray-200`,
  outline: `bg-transparent text-bm-blue border-2 border-bm-blue 
            hover:bg-bm-blue hover:text-white active:bg-bm-blue-dark`,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
  md: "px-6 py-3 text-base rounded-xl gap-2",
  lg: "px-8 py-4 text-lg rounded-xl gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  loading = false,
  icon,
  iconPosition = "right",
  children,
  className,
  disabled,
  type = "button",
  onClick,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(
    "inline-flex items-center justify-center font-semibold",
    "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0",
    "focus:outline-none focus:ring-2 focus:ring-bm-blue/50 focus:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!loading && icon && iconPosition === "left" && icon}
      {children && <span>{children}</span>}
      {!loading && icon && iconPosition === "right" && icon}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
