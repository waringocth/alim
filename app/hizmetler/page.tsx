"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Home } from "lucide-react";
import { services } from "@/lib/services";

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ─── Service Card ───────────────────────────────────────────── */
function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div variants={staggerItem}>
      <Link
        href={`/hizmetler/${service.slug}`}
        className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_40px_rgba(26,45,90,0.16)] hover:border-[#e87722]/30 transition-all duration-300 hover:-translate-y-1.5"
      >
        {/* Placeholder image area — 400×300 ratio */}
        <div
          className={`relative w-full aspect-[4/3] bg-gradient-to-br ${service.gradient} flex items-center justify-center overflow-hidden flex-shrink-0`}
        >
          {/* Geometric decoration */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-white/5" />
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/30" />
          <div className="absolute top-4 right-9 w-2 h-2 rounded-full bg-white/20" />
          <div className="absolute top-4 right-14 w-2 h-2 rounded-full bg-white/15" />

          {/* SVG diagonal pattern overlay */}
          <div className="absolute inset-0 opacity-[0.06]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="20" x2="20" y2="0" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
            </svg>
          </div>

          {/* Icon */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
              style={{ background: `${service.accentColor}22`, border: `1px solid ${service.accentColor}44` }}
            >
              <Icon className="w-10 h-10" style={{ color: service.accentColor }} />
            </div>
            <span
              className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full backdrop-blur-sm"
              style={{ background: `${service.accentColor}22`, color: service.accentColor, border: `1px solid ${service.accentColor}44` }}
            >
              {service.subtitle}
            </span>
          </div>

          {/* Number badge */}
          <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <span className="text-white text-xs font-bold">{String(index + 1).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <h2 className="font-bold text-[#1a2d5a] text-lg leading-snug mb-3 group-hover:text-[#e87722] transition-colors duration-200">
            {service.title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
            {service.shortDescription}
          </p>
          <div className="flex items-center gap-2 text-[#e87722] font-bold text-sm group-hover:gap-3 transition-all duration-200">
            <span>İncele</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function HizmetlerPage() {
  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      {/* ── Hero Banner ── */}
      <section className="relative bg-[#1a2d5a] py-20 overflow-hidden">
        {/* Geometric pattern */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="1" />
                <line x1="-10" y1="40" x2="30" y2="0" stroke="white" strokeWidth="0.5" />
                <line x1="10" y1="40" x2="50" y2="0" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-diag)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#5aaccc]/10 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-white/60 text-sm mb-8"
          >
            <Link href="/" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Ana Sayfa</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white font-medium">Hizmetlerimiz</span>
          </motion.nav>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-xs font-bold tracking-widest uppercase text-[#e87722] bg-[#e87722]/15 border border-[#e87722]/25 px-4 py-2 rounded-full mb-5"
            >
              10 Farklı Çözüm
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5"
            >
              Hizmetlerimiz
            </motion.h1>
            <motion.div
              variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5, delay: 0.3 } } }}
              style={{ originX: 0 }}
              className="h-1 w-16 bg-[#e87722] rounded-full mb-6"
            />
            <motion.p variants={fadeInUp} className="text-white/75 text-lg leading-relaxed">
              Cam balkon sistemlerinden alüminyum doğramaya, pergolelerden duşakabin çözümlerine kadar 10 farklı hizmette İstanbul&apos;un 39 ilçesinde profesyonel montaj ve kurulum sunuyoruz.
            </motion.p>
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 10C1200 40 900 0 720 14C540 28 240 0 0 14L0 40Z" fill="#f4f7fb" />
          </svg>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Count badge */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center justify-between mb-10 flex-wrap gap-4"
          >
            <div>
              <p className="text-gray-500 text-sm">
                Toplam <span className="font-bold text-[#1a2d5a]">{services.length}</span> hizmet listeleniyor
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 rounded-full bg-[#e87722] animate-pulse" />
              İstanbul genelinde hizmet veriyoruz
            </div>
          </motion.div>

          {/* Grid: 1 → 2 → 3 cols */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-extrabold text-[#1a2d5a] mb-4">
              Aradığınız Hizmeti Bulamadınız mı?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 mb-8 text-lg">
              İhtiyacınıza özel çözüm için uzmanlarımızı arayın.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:05433057484"
                className="inline-flex items-center justify-center gap-3 bg-[#1a2d5a] text-white px-7 py-4 rounded-xl font-bold hover:bg-[#111e3d] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(26,45,90,0.3)]"
              >
                Hüzeyfe TURHAN: 0543 305 74 84
              </a>
              <a
                href="tel:05302418755"
                className="inline-flex items-center justify-center gap-3 bg-[#e87722] text-white px-7 py-4 rounded-xl font-bold hover:bg-[#c5611a] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(232,119,34,0.3)]"
              >
                Sefer KÖSE: 0530 241 87 55
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
