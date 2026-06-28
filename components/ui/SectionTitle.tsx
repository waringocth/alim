"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${centered ? "text-center" : "text-left"} mb-12`}
    >
      {label && (
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#e87722] mb-3">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-[#1a2d5a]"
        }`}
      >
        {title}
      </h2>
      {/* Orange accent underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        style={{ originX: centered ? 0.5 : 0 }}
        className={`h-1 w-16 bg-[#e87722] rounded-full mb-6 ${centered ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""} ${
            light ? "text-white/80" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
