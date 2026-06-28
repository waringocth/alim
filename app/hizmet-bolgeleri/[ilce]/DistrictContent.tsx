"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  MapPin, ChevronRight, Home, Phone, Shield, Clock, Star,
  ThumbsUp, ArrowRight, CheckCircle2,
} from "lucide-react";
import type { District } from "@/lib/districts";
import { services } from "@/lib/services";

/* ── Animation variants ── */
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const heroIn = (i: number): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.12, ease: "easeOut" } },
});

/* ── Trust points ── */
const trustPoints = [
  {
    icon: Shield,
    title: "2 Yıl Montaj Garantisi",
    desc: "Tüm hizmetlerimizde işçilik ve montaj garantisi sunulur.",
  },
  {
    icon: Clock,
    title: "Aynı Gün Ücretsiz Keşif",
    desc: "İstanbul'un 39 ilçesinde randevu gününde keşif yapıyoruz.",
  },
  {
    icon: Star,
    title: "Sertifikalı Uzman Ekip",
    desc: "Alanında deneyimli sertifikalı montaj ekiplerimizle hizmetinizdeyiz.",
  },
  {
    icon: ThumbsUp,
    title: "%100 Müşteri Memnuniyeti",
    desc: "Her projede müşteri memnuniyeti odaklı çalışma anlayışı uyguluyoruz.",
  },
];

export default function DistrictContent({ district }: { district: District }) {
  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-[#1a2d5a] pt-20 pb-28 overflow-hidden">
        {/* Diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dist-diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="1" />
                <line x1="-10" y1="40" x2="30" y2="0" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dist-diag)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-[#e87722]/10 blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/3" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#5aaccc]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            custom={0} variants={heroIn(0)} initial="hidden" animate="visible"
            className="flex items-center gap-2 text-white/55 text-sm mb-10 flex-wrap"
          >
            <Link href="/" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Ana Sayfa</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/hizmet-bolgeleri" className="hover:text-white transition-colors">
              Hizmet Bölgeleri
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white font-medium">{district.name}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div variants={heroIn(1)} initial="hidden" animate="visible"
                className="flex items-center gap-2 mb-5"
              >
                <div className="w-8 h-8 rounded-full bg-[#e87722]/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#e87722]" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#e87722]">
                  İstanbul / {district.name}
                </span>
              </motion.div>

              <motion.h1 variants={heroIn(2)} initial="hidden" animate="visible"
                className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white leading-tight mb-5"
              >
                {district.name}{" "}
                <span className="text-[#5aaccc]">Alüminyum &</span>{" "}
                <span className="text-[#e87722]">Cam Balkon</span>{" "}
                Sistemleri
              </motion.h1>

              <motion.div variants={heroIn(3)} initial="hidden" animate="visible"
                style={{ originX: 0 }}
                className="h-1 w-14 bg-[#e87722] rounded-full mb-6"
              />

              <motion.p variants={heroIn(4)} initial="hidden" animate="visible"
                className="text-white/80 text-lg leading-relaxed mb-8"
              >
                {district.intro}
              </motion.p>

              <motion.div variants={heroIn(5)} initial="hidden" animate="visible"
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="tel:05433057484"
                  className="inline-flex items-center gap-3 bg-[#e87722] text-white px-6 py-3.5 rounded-xl font-bold hover:bg-[#c5611a] transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(232,119,34,0.35)]"
                >
                  <Phone className="w-4 h-4" />
                  Ücretsiz Keşif İsteyin
                </a>
                <Link
                  href="/hizmetler"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all"
                >
                  Hizmetlerimizi İnceleyin
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Quick stats card */}
            <motion.div variants={heroIn(5)} initial="hidden" animate="visible"
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {[
                { value: "10+", label: "Yıl Deneyim" },
                { value: "39", label: "İlçe Hizmet" },
                { value: "500+", label: "Proje" },
                { value: "%100", label: "Memnuniyet" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-extrabold text-[#e87722] mb-1">{s.value}</div>
                  <div className="text-white/70 text-sm font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 10C1200 40 900 0 720 14C540 28 240 0 0 14L0 40Z" fill="#f4f7fb" />
          </svg>
        </div>
      </section>

      {/* ── "Bu ilçede sunduğumuz hizmetler" ──────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.span variants={fadeUp}
              className="inline-block text-xs font-bold tracking-widest uppercase text-[#e87722] mb-3"
            >
              {district.name} Hizmetleri
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-[#1a2d5a] mb-3">
              Bu İlçede Sunduğumuz Hizmetler
            </motion.h2>
            <motion.div variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5 } } }}
              style={{ originX: 0 }}
              className="h-1 w-12 bg-[#e87722] rounded-full"
            />
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {services.map((service) => {
              const SIcon = service.icon;
              return (
                <motion.div key={service.slug} variants={fadeUp}>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="group flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_24px_rgba(26,45,90,0.12)] hover:border-[#e87722]/30 transition-all duration-300 hover:-translate-y-0.5 h-full"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                      style={{ background: `${service.accentColor}18` }}
                    >
                      <SIcon className="w-5 h-5" style={{ color: service.accentColor }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[#1a2d5a] text-sm leading-snug mb-1 group-hover:text-[#e87722] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                        {service.shortDescription.slice(0, 70)}…
                      </p>
                      <div className="flex items-center gap-1 text-[#e87722] text-xs font-bold mt-2 group-hover:gap-2 transition-all">
                        <span>Detay</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── "Neden DHS?" ─────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-[#1a2d5a] mb-3">
              {district.name}&apos;de Neden DHS?
            </motion.h2>
            <motion.div variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5 } } }}
              style={{ originX: 0.5 }}
              className="h-1 w-12 bg-[#e87722] rounded-full mx-auto"
            />
          </motion.div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {trustPoints.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-[#f4f7fb] rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-[0_6px_24px_rgba(26,45,90,0.1)] transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1a2d5a] flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#e87722]" />
                </div>
                <h3 className="font-bold text-[#1a2d5a] text-base">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Neighborhoods ─────────────────────────────────────── */}
      <section className="py-16 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-[#1a2d5a] mb-3">
              {district.name} ve Çevre Mahallelere Hizmet Veriyoruz
            </motion.h2>
            <motion.div variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5 } } }}
              style={{ originX: 0 }}
              className="h-1 w-12 bg-[#e87722] rounded-full mb-5"
            />
            <motion.p variants={fadeUp} className="text-gray-500 text-base leading-relaxed mb-10 max-w-2xl">
              {district.name} ilçesinin tüm mahalle ve semtlerinde ücretsiz keşif hizmeti sunuyoruz. Aşağıdaki bölgeler dahil olmak üzere {district.name}&apos;in her noktasına hizmet veriyoruz.
            </motion.p>

            <motion.div
              variants={stagger}
              className="flex flex-wrap gap-3"
            >
              {district.neighborhoods.map((hood, i) => (
                <motion.div
                  key={hood}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#e87722] flex-shrink-0" />
                  <span className="font-semibold text-[#1a2d5a] text-sm">{hood}</span>
                </motion.div>
              ))}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-2 bg-[#e87722]/10 border border-[#e87722]/20 rounded-xl px-4 py-2.5"
              >
                <MapPin className="w-4 h-4 text-[#e87722] flex-shrink-0" />
                <span className="font-semibold text-[#e87722] text-sm">ve tüm mahalleler</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#1a2d5a] relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#e87722]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-[#5aaccc]/10 blur-3xl pointer-events-none" />
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-dots)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeUp}
              className="inline-block text-xs font-bold tracking-widest uppercase text-[#e87722] mb-4"
            >
              {district.name} — Ücretsiz Keşif
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
              {district.name}&apos;de{" "}
              <span className="text-[#e87722]">Ücretsiz Keşif</span>{" "}
              İsteyin
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
              Uzmanlarımız {district.name}&apos;e gelerek ölçüm alır ve size özel fiyat teklifi hazırlar. Hemen arayın!
            </motion.p>

            {/* Phone cards */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:05433057484"
                className="group flex items-center gap-4 bg-white px-7 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <div className="w-10 h-10 rounded-full bg-[#e87722]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e87722]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[#e87722]" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 font-semibold tracking-wide uppercase mb-0.5">Hüzeyfe TURHAN</div>
                  <div className="text-xl font-extrabold text-[#1a2d5a]">0543 305 74 84</div>
                </div>
              </a>
              <a
                href="tel:05302418755"
                className="group flex items-center gap-4 bg-white px-7 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <div className="w-10 h-10 rounded-full bg-[#e87722]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e87722]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[#e87722]" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 font-semibold tracking-wide uppercase mb-0.5">Sefer KÖSE</div>
                  <div className="text-xl font-extrabold text-[#1a2d5a]">0530 241 87 55</div>
                </div>
              </a>
            </motion.div>

            {/* WhatsApp */}
            <motion.div variants={fadeUp}>
              <a
                href={`https://wa.me/905433057484?text=${encodeURIComponent(`Merhaba, ${district.name} ilçesinde hizmet almak istiyorum. Bilgi alabilir miyim?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25d366] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#1db954] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp&apos;tan Yazın
              </a>
            </motion.div>

            {/* Back to districts */}
            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="/hizmet-bolgeleri"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                Tüm Hizmet Bölgelerine Dön
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
