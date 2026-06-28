"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight, ChevronRight, Home, Phone } from "lucide-react";
import type { District } from "@/lib/districts";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const heroFade: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function DistrictsListClient({ districts }: { districts: District[] }) {
  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      {/* ── HERO ── */}
      <section className="relative bg-[#1a2d5a] py-20 overflow-hidden">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#e87722]/10 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#5aaccc]/10 blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            custom={0} variants={heroFade} initial="hidden" animate="visible"
            className="flex items-center gap-2 text-white/55 text-sm mb-8 flex-wrap"
          >
            <Link href="/" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Ana Sayfa</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white font-medium">Hizmet Bölgeleri</span>
          </motion.nav>

          <div className="max-w-3xl">
            <motion.span custom={1} variants={heroFade} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#e87722] bg-[#e87722]/15 border border-[#e87722]/25 px-4 py-2 rounded-full mb-5"
            >
              <MapPin className="w-3.5 h-3.5" />
              39 İlçede Hizmet
            </motion.span>

            <motion.h1 custom={2} variants={heroFade} initial="hidden" animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
            >
              İstanbul&apos;un Tüm{" "}
              <span className="text-[#e87722]">İlçelerinde</span>{" "}
              Hizmetinizdeyiz
            </motion.h1>

            <motion.div
              custom={3} variants={heroFade} initial="hidden" animate="visible"
              style={{ originX: 0 }}
              className="h-1 w-16 bg-[#e87722] rounded-full mb-6"
            />

            <motion.p custom={4} variants={heroFade} initial="hidden" animate="visible"
              className="text-white/75 text-lg sm:text-xl leading-relaxed"
            >
              Cam balkon, alüminyum doğrama, PVC pencere ve daha fazlası için İstanbul&apos;un 39 ilçesinde aynı gün keşif ve hızlı montaj hizmetindeyiz. Bölgenizi seçin, size özel teklif alın.
            </motion.p>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 10C1200 40 900 0 720 14C540 28 240 0 0 14L0 40Z" fill="#f4f7fb" />
          </svg>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-[#e87722] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {[
              { value: "39", label: "İlçede Hizmet" },
              { value: "Aynı Gün", label: "Ücretsiz Keşif" },
              { value: "10+", label: "Yıllık Deneyim" },
              { value: "2 Yıl", label: "Montaj Garantisi" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-white/80 text-xs font-semibold tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Districts Grid ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-between flex-wrap gap-3 mb-2">
              <h2 className="text-2xl font-extrabold text-[#1a2d5a]">Tüm Hizmet Bölgeleri</h2>
              <span className="text-sm text-gray-400 font-medium">
                <span className="font-bold text-[#e87722]">{districts.length}</span> ilçe — A&apos;dan Z&apos;ye sıralı
              </span>
            </motion.div>
            <motion.div variants={fadeUp} className="h-0.5 w-full bg-gray-200 rounded-full" />
          </motion.div>

          {/* Card grid: 2 → 3 → 4 → 5 cols */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4"
          >
            {districts.map((district) => (
              <motion.div key={district.slug} variants={fadeUp}>
                <Link
                  href={`/hizmet-bolgeleri/${district.slug}`}
                  className="group flex flex-col justify-between h-full bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_24px_rgba(26,45,90,0.14)] hover:border-[#e87722]/30 transition-all duration-300 hover:-translate-y-1 min-h-[100px]"
                >
                  <div className="flex items-start gap-2.5 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-[#f4f7fb] group-hover:bg-[#e87722] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <MapPin className="w-3.5 h-3.5 text-[#1a2d5a] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-[#1a2d5a] text-sm leading-snug group-hover:text-[#e87722] transition-colors duration-200">
                      {district.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-[#e87722] text-xs font-bold group-hover:gap-2 transition-all duration-200">
                    <span>Detay</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-[#1a2d5a] mb-4">
              Bölgenizi Bulamadınız mı?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg mb-8">
              İstanbul&apos;un her noktasına hizmet veriyoruz. Hemen arayın, keşif tarihi belirleyelim.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:05433057484"
                className="inline-flex items-center justify-center gap-3 bg-[#1a2d5a] text-white px-7 py-4 rounded-xl font-bold hover:bg-[#111e3d] transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(26,45,90,0.3)]"
              >
                <Phone className="w-5 h-5" />
                Hüzeyfe TURHAN: 0543 305 74 84
              </a>
              <a
                href="tel:05302418755"
                className="inline-flex items-center justify-center gap-3 bg-[#e87722] text-white px-7 py-4 rounded-xl font-bold hover:bg-[#c5611a] transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(232,119,34,0.3)]"
              >
                <Phone className="w-5 h-5" />
                Sefer KÖSE: 0530 241 87 55
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
