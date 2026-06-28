"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home, Phone, Star, Shield, Zap, Smile, CheckCircle2 } from "lucide-react";

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

/* ── Animated Counter Component ── */
function AnimatedCounter({ value, prefix = "", suffix = "", duration = 2000 }: { value: number, prefix?: string, suffix?: string, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const steps = 60;
    const increment = value / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const current = Math.min(Math.round(increment * step), value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function HakkimizdaClient() {
  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      {/* ── HERO ──────────────────────────────────────────────── */}
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#5aaccc]/10 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <motion.nav
            custom={0} variants={heroIn(0)} initial="hidden" animate="visible"
            className="flex items-center justify-center gap-2 text-white/55 text-sm mb-8 flex-wrap"
          >
            <Link href="/" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Ana Sayfa</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white font-medium">Hakkımızda</span>
          </motion.nav>

          <motion.span custom={1} variants={heroIn(1)} initial="hidden" animate="visible"
            className="inline-block text-xs font-bold tracking-widest uppercase text-[#e87722] bg-[#e87722]/15 border border-[#e87722]/25 px-4 py-2 rounded-full mb-5"
          >
            DHS Cam Sistemleri
          </motion.span>
          <motion.h1 custom={2} variants={heroIn(2)} initial="hidden" animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
          >
            Hakkımızda
          </motion.h1>
          <motion.div custom={3} variants={heroIn(3)} initial="hidden" animate="visible"
            style={{ originX: 0.5 }}
            className="h-1 w-16 bg-[#e87722] rounded-full mx-auto"
          />
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 10C1200 40 900 0 720 14C540 28 240 0 0 14L0 40Z" fill="#f4f7fb" />
          </svg>
        </div>
      </section>

      {/* ── STORY SECTION ──────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.span variants={fadeUp} className="text-[#e87722] font-bold tracking-widest uppercase text-sm mb-2 block">
                Biz Kimiz?
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-[#1a2d5a] mb-6 leading-tight">
                DHS Alüminyum & Cam Balkon Sistemleri Kimdir?
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  DHS Alüminyum & Cam Balkon Sistemleri, İstanbul&apos;da yaşam alanlarınıza estetik, konfor ve güvenlik katmak amacıyla kurulmuş yenilikçi bir firmadır. Kuruluşumuzdan bu yana sektördeki en son teknolojileri ve en kaliteli malzemeleri kullanarak müşterilerimize uzun ömürlü çözümler sunmayı misyon edindik.
                </p>
                <p>
                  10 yılı aşkın tecrübemizle İstanbul'un 39 ilçesinde yüzlerce başarılı projeye imza attık. Cam balkon sistemlerinden alüminyum doğramaya, giyotin camdan pergole sistemlerine kadar geniş bir yelpazede hizmet veriyoruz. Üretim ve montaj süreçlerimizin her aşamasında kalite standartlarından ödün vermeden, tamamen müşteri beklentilerine özel çözümler geliştiriyoruz.
                </p>
                <p>
                  Kurucu ortaklarımız Hüzeyfe TURHAN ve Sefer KÖSE liderliğindeki uzman kadromuz, sektördeki derin bilgi birikimi ve deneyimleriyle projelerinizi baştan sona titizlikle yönetmektedir. Müşteri memnuniyetini her zaman ön planda tutan DHS, satış sonrası 2 yıllık montaj garantisiyle de her zaman yanınızdadır.
                </p>
              </motion.div>
            </motion.div>
            
            {/* Stats Graphic */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgba(26,45,90,0.06)] border border-gray-100 flex flex-col justify-center text-center translate-y-8">
                <div className="text-5xl font-extrabold text-[#1a2d5a] mb-2"><AnimatedCounter value={10} suffix="+" /></div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Yıllık Deneyim</div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-[#e87722] rounded-3xl p-8 shadow-[0_4px_24px_rgba(232,119,34,0.2)] flex flex-col justify-center text-center">
                <div className="text-5xl font-extrabold text-white mb-2"><AnimatedCounter value={39} /></div>
                <div className="text-sm font-semibold text-white/80 uppercase tracking-wide">İlçede Hizmet</div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-[#5aaccc] rounded-3xl p-8 shadow-[0_4px_24px_rgba(90,172,204,0.2)] flex flex-col justify-center text-center translate-y-8">
                <div className="text-5xl font-extrabold text-white mb-2"><AnimatedCounter value={500} suffix="+" /></div>
                <div className="text-sm font-semibold text-white/80 uppercase tracking-wide">Tamamlanan Proje</div>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-[#1a2d5a] rounded-3xl p-8 shadow-[0_4px_24px_rgba(26,45,90,0.2)] flex flex-col justify-center text-center">
                <div className="text-5xl font-extrabold text-[#e87722] mb-2">%<AnimatedCounter value={100} /></div>
                <div className="text-sm font-semibold text-white/80 uppercase tracking-wide">Memnuniyet</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALUES SECTION ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-[#1a2d5a] mb-4">
              Değerlerimiz
            </motion.h2>
            <motion.div variants={fadeUp} className="h-1 w-12 bg-[#e87722] rounded-full mx-auto mb-4" />
            <motion.p variants={fadeUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
              Bizi biz yapan, işimize ve müşterilerimize olan bağlılığımızdır.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "Kalite", desc: "Tüm sistemlerimizde birinci sınıf malzemeler kullanır, TSE standartlarına uygun üretim yaparız." },
              { icon: Shield, title: "Güven", desc: "Verdiğimiz sözleri tutar, tüm montaj işlemlerimizde 2 yıllık resmi garanti belgesi sunarız." },
              { icon: Zap, title: "Hız", desc: "Söz verdiğimiz günde ücretsiz keşif yapar, montajı aksatmadan en kısa sürede tamamlarız." },
              { icon: Smile, title: "Müşteri Memnuniyeti", desc: "Proje bitiminde %100 memnuniyet sağlamadan işi teslim edilmiş saymayız." }
            ].map((v) => {
              const VIcon = v.icon;
              return (
                <motion.div key={v.title} variants={fadeUp} className="bg-[#f4f7fb] rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-[#1a2d5a] flex items-center justify-center mb-6">
                    <VIcon className="w-8 h-8 text-[#e87722]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2d5a] mb-3">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── TEAM SECTION ───────────────────────────────────────── */}
      <section className="py-20 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-extrabold text-[#1a2d5a] mb-4">
              Kurucularımız
            </motion.h2>
            <motion.div variants={fadeUp} className="h-1 w-12 bg-[#e87722] rounded-full mx-auto" />
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Team 1 */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(26,45,90,0.1)] transition-all duration-300 border border-gray-100 group">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#1a2d5a] to-[#5aaccc] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl text-white font-extrabold opacity-50">HT</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2d5a] mb-1">Hüzeyfe TURHAN</h3>
              <p className="text-[#e87722] font-semibold text-sm uppercase tracking-wide mb-4">Kurucu Ortak</p>
              <div className="flex justify-center">
                <a href="tel:05433057484" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#e87722] transition-colors bg-[#f4f7fb] px-4 py-2 rounded-full text-sm font-medium">
                  <Phone className="w-4 h-4" /> 0543 305 74 84
                </a>
              </div>
            </motion.div>

            {/* Team 2 */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(26,45,90,0.1)] transition-all duration-300 border border-gray-100 group">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#1a2d5a] to-[#e87722] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl text-white font-extrabold opacity-50">SK</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2d5a] mb-1">Sefer KÖSE</h3>
              <p className="text-[#e87722] font-semibold text-sm uppercase tracking-wide mb-4">Kurucu Ortak</p>
              <div className="flex justify-center">
                <a href="tel:05302418755" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#e87722] transition-colors bg-[#f4f7fb] px-4 py-2 rounded-full text-sm font-medium">
                  <Phone className="w-4 h-4" /> 0530 241 87 55
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#1a2d5a] relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#e87722]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-[#5aaccc]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Projeleriniz İçin Bizimle <span className="text-[#e87722]">İletişime Geçin</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/75 text-lg mb-10 max-w-2xl mx-auto">
              Siz de kaliteli hizmet, güvenilir montaj ve uzman kadromuzla tanışmak için hemen bizi arayın. Ücretsiz keşif avantajından yararlanın.
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-3 bg-[#e87722] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#c5611a] transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(232,119,34,0.3)]"
              >
                İletişim Bilgilerimiz
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
