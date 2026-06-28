"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home, MapPin, Phone, Globe, Clock } from "lucide-react";

/* ── Animation variants ── */
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const heroIn = (i: number): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.1, ease: "easeOut" } },
});

export default function IletisimClient() {
  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-[#1a2d5a] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="1" />
                <line x1="-10" y1="40" x2="30" y2="0" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-diag)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#e87722]/10 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.nav custom={0} variants={heroIn(0)} initial="hidden" animate="visible" className="flex items-center justify-center gap-2 text-white/55 text-sm mb-8 flex-wrap">
            <Link href="/" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Ana Sayfa</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white font-medium">İletişim</span>
          </motion.nav>

          <motion.span custom={1} variants={heroIn(1)} initial="hidden" animate="visible" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#e87722] bg-[#e87722]/15 border border-[#e87722]/25 px-4 py-2 rounded-full mb-5">
            <Phone className="w-3.5 h-3.5" /> ÜCRETSİZ KEŞİF
          </motion.span>
          <motion.h1 custom={2} variants={heroIn(2)} initial="hidden" animate="visible" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Bizimle <span className="text-[#e87722]">İletişime Geçin</span>
          </motion.h1>
          <motion.div custom={3} variants={heroIn(3)} initial="hidden" animate="visible" style={{ originX: 0.5 }} className="h-1 w-16 bg-[#e87722] rounded-full mx-auto" />
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 10C1200 40 900 0 720 14C540 28 240 0 0 14L0 40Z" fill="#f4f7fb" />
          </svg>
        </div>
      </section>

      {/* ── CONTENT ────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left: Contact Info */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-[#1a2d5a] mb-8">
                İletişim Bilgilerimiz
              </motion.h2>

              <div className="space-y-6">
                <motion.div variants={fadeUp} className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(26,45,90,0.04)] border border-gray-100 flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#e87722]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#e87722]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">Merkez Ofis</h3>
                    <p className="text-[#1a2d5a] font-bold text-lg leading-snug">
                      Ulus Mahallesi, İstiklal Caddesi No/37<br />
                      Büyükçekmece / İSTANBUL
                    </p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.a href="tel:05433057484" variants={fadeUp} className="bg-white rounded-3xl p-6 shadow-[0_4px_24px_rgba(26,45,90,0.04)] border border-gray-100 flex flex-col gap-4 group hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[#1a2d5a] flex items-center justify-center group-hover:bg-[#e87722] transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Hüzeyfe TURHAN</h3>
                      <p className="text-[#1a2d5a] font-extrabold text-xl">0543 305 74 84</p>
                    </div>
                  </motion.a>

                  <motion.a href="tel:05302418755" variants={fadeUp} className="bg-white rounded-3xl p-6 shadow-[0_4px_24px_rgba(26,45,90,0.04)] border border-gray-100 flex flex-col gap-4 group hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[#1a2d5a] flex items-center justify-center group-hover:bg-[#e87722] transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Sefer KÖSE</h3>
                      <p className="text-[#1a2d5a] font-extrabold text-xl">0530 241 87 55</p>
                    </div>
                  </motion.a>
                </div>

                <motion.div variants={fadeUp} className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(26,45,90,0.04)] border border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#5aaccc]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#5aaccc]" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Çalışma Saatleri</h3>
                      <p className="text-[#1a2d5a] font-bold">Pzt - Cts: 08:00 - 18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1a2d5a]/5 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-[#1a2d5a]" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Web Sitemiz</h3>
                      <p className="text-[#1a2d5a] font-bold">dhscamsistemleri.com</p>
                    </div>
                  </div>
                </motion.div>

                {/* WhatsApp Button */}
                <motion.div variants={fadeUp} className="pt-4">
                  <a
                    href="https://wa.me/905433057484?text=Merhaba,%20fiyat%20teklifi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#25d366] text-white px-8 py-5 rounded-2xl font-extrabold text-lg hover:bg-[#1db954] transition-all hover:-translate-y-1 shadow-[0_4px_20px_rgba(37,211,102,0.3)] w-full"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp'tan Mesaj Gönder
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Map Embed */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="h-full">
              <motion.div variants={fadeUp} className="bg-white rounded-3xl p-3 shadow-[0_8px_30px_rgba(26,45,90,0.06)] border border-gray-100 h-[600px] lg:h-full relative overflow-hidden group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12040.672465363198!2d28.571439712792984!3d41.0215433618457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55fc01decf15f%3A0xe54e38e82a6136d7!2zQsO8ecO8a8OnZWttZWNlLCDEsHN0YW5idWw!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: "1.25rem" }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DHS Cam Sistemleri Büyükçekmece"
                  className="grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
