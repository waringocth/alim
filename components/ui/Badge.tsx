import { ReactNode } from "react";

type BadgeVariant = "primary" | "accent" | "sky" | "success" | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-[#1a2d5a] text-white",
  accent: "bg-[#e87722] text-white",
  sky: "bg-[#5aaccc] text-white",
  success: "bg-emerald-500 text-white",
  outline: "bg-transparent text-[#1a2d5a] border border-[#1a2d5a]",
};

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
