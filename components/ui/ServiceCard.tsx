"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  index?: number;
  featured?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  index = 0,
  featured = false,
}: ServiceCardProps) {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className={`group relative rounded-2xl p-7 flex flex-col gap-4 cursor-pointer transition-all duration-300 overflow-hidden
        ${
          featured
            ? "bg-[#1a2d5a] text-white shadow-[0_8px_30px_rgba(26,45,90,0.4)]"
            : "bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_32px_rgba(26,45,90,0.15)] hover:border-[#5aaccc]/30"
        }`}
    >
      {/* Background glow on hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          featured
            ? "bg-gradient-to-br from-[#243f7d] to-[#1a2d5a]"
            : "bg-gradient-to-br from-[#f4f7fb] to-white"
        }`}
      />

      {/* Icon */}
      <div
        className={`relative z-10 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
          featured
            ? "bg-white/15 group-hover:bg-white/20"
            : "bg-[#f4f7fb] group-hover:bg-[#e87722] group-hover:text-white"
        }`}
      >
        <Icon
          className={`w-7 h-7 transition-colors duration-300 ${
            featured
              ? "text-[#e87722]"
              : "text-[#1a2d5a] group-hover:text-white"
          }`}
        />
      </div>

      {/* Title */}
      <h3
        className={`relative z-10 text-xl font-bold leading-snug ${
          featured ? "text-white" : "text-[#1a2d5a]"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`relative z-10 text-sm leading-relaxed flex-1 ${
          featured ? "text-white/80" : "text-gray-600"
        }`}
      >
        {description}
      </p>

      {/* Link arrow */}
      {href && (
        <div
          className={`relative z-10 flex items-center gap-1 text-sm font-semibold transition-all duration-200 ${
            featured
              ? "text-[#e87722]"
              : "text-[#e87722] group-hover:gap-2"
          }`}
        >
          <span>Detaylı Bilgi</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return <Link href={href} className="block">{CardContent}</Link>;
  }

  return CardContent;
}
