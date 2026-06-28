"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "accent";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#1a2d5a] text-white hover:bg-[#111e3d] border-2 border-[#1a2d5a] hover:border-[#111e3d] shadow-[0_4px_14px_rgba(26,45,90,0.3)] hover:shadow-[0_6px_20px_rgba(26,45,90,0.4)]",
  outline:
    "bg-transparent text-[#1a2d5a] border-2 border-[#1a2d5a] hover:bg-[#1a2d5a] hover:text-white shadow-none hover:shadow-[0_4px_14px_rgba(26,45,90,0.3)]",
  accent:
    "bg-[#e87722] text-white hover:bg-[#c5611a] border-2 border-[#e87722] hover:border-[#c5611a] shadow-[0_4px_14px_rgba(232,119,34,0.35)] hover:shadow-[0_6px_20px_rgba(232,119,34,0.45)]",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-sm px-4 py-2 rounded-lg",
  md: "text-base px-6 py-3 rounded-xl",
  lg: "text-lg px-8 py-4 rounded-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#e87722] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`;
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.03, y: disabled ? 0 : -1 },
    whileTap: { scale: disabled ? 1 : 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
