"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Layers,
  Shield,
  Wind,
  Thermometer,
  SlidersHorizontal,
  Umbrella,
  Lock,
  Filter,
  ArrowLeftRight,
  Droplets,
  Users,
  Star,
  MapPin,
  Award,
  CheckCircle,
  Tag,
  Headphones,
  Phone,
  ArrowRight,
  Calendar,
  ChevronRight,
  Frame,
  PanelTopOpen,
  LayoutTemplate,
  ScanLine,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────────────────────── */
function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2000,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
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

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const stats = [
  { prefix: "", value: 10, suffix: "+", label: "Yıl Deneyim" },
  { prefix: "", value: 39, suffix: "", label: "İlçede Hizmet" },
  { prefix: "", value: 500, suffix: "+", label: "Tamamlanan Proje" },
  { prefix: "%", value: 100, suffix: "", label: "Müşteri Memnuniyeti" },
];

const services = [
  {
    icon: Layers,
    title: "Cam Balkon Sistemleri",
    description: "Isıcam ve tek cam seçenekleriyle estetik ve dayanıklı cam balkon çözümleri.",
    href: "/hizmetler/cam-balkon",
  },
  {
    icon: Frame,
    title: "Alüminyum HBŞB Sistemleri",
    description: "Yüksek kaliteli alüminyum hava-su-bozulma-ses bariyeri sistemleri.",
    href: "/hizmetler/aluminyum-hbsb",
  },
  {
    icon: Wind,
    title: "PVC Kapı ve Pencere",
    description: "Isı ve ses yalıtımlı PVC kapı ve pencere sistemleri.",
    href: "/hizmetler/pvc-pencere",
  },
  {
    icon: Thermometer,
    title: "Isı Yalıtım Alüminyum",
    description: "Enerji tasarrufu sağlayan alüminyum ısı yalıtım çözümleri.",
    href: "/hizmetler/isi-yalitim",
  },
  {
    icon: SlidersHorizontal,
    title: "Giyotin Cam Sistemleri",
    description: "Çerçevesiz sürgülü cam sistemleriyle modern balkon kapatma.",
    href: "/hizmetler/giyotin-cam",
  },
  {
    icon: Umbrella,
    title: "Pergole Sistemleri",
    description: "Teras ve bahçeler için alüminyum pergole ve sundurma sistemleri.",
    href: "/hizmetler/pergole",
  },
  {
    icon: Lock,
    title: "Panjur ve Kepenk",
    description: "Güvenlik ve gölgeleme için elektrikli/mekanik panjur ve kepenk.",
    href: "/hizmetler/panjur-kepenk",
  },
  {
    icon: Filter,
    title: "Sineklik Sistemleri",
    description: "Plise, rulo ve sabit sineklik sistemleri.",
    href: "/hizmetler/sineklik",
  },
  {
    icon: ArrowLeftRight,
    title: "Volkswagen Sürme Sistemleri",
    description: "Sessiz ve şık Volkswagen tipi sürgülü cam sistemleri.",
    href: "/hizmetler/volkswagen-surme",
  },
  {
    icon: Droplets,
    title: "Duşakabin Sistemleri",
    description: "Banyo için şık ve modern duşakabin çözümleri.",
    href: "/hizmetler/dusakabin",
  },
  {
    icon: Wind,
    title: "Biyoklimatik Pergole",
    description: "Motorlu döner lamel ve yağmur sensörlü akıllı teras sistemi.",
    href: "/hizmetler/biyoklimatik-pergole",
  },
  {
    icon: PanelTopOpen,
    title: "Zip Perde Sistemleri",
    description: "Fermuar kılavuzlu, rüzgarda sabit dış cephe güneş kontrol perdesi.",
    href: "/hizmetler/zip-perde",
  },
  {
    icon: LayoutTemplate,
    title: "Wintente Sistemleri",
    description: "Cam ve kumaş hibrit cephe sistemi ile dört mevsim konfor.",
    href: "/hizmetler/wintente",
  },
  {
    icon: ScanLine,
    title: "Fotosel Kapı Sistemleri",
    description: "AVM, ofis ve hastane girişleri için otomatik kayar kapı sistemi.",
    href: "/hizmetler/fotoselli-kapi",
  },
];

const whyUs = [
  {
    icon: Users,
    title: "Uzman Kadro",
    desc: "Alanında uzman ve sertifikalı montaj ekiplerimizle kusursuz kurulum sağlıyoruz.",
  },
  {
    icon: Star,
    title: "Kaliteli Malzeme",
    desc: "Yalnızca birinci sınıf alüminyum ve cam malzeme kullanıyoruz.",
  },
  {
    icon: Shield,
    title: "Garantili Hizmet",
    desc: "Tüm sistemlerimiz 2 yıl montaj garantisi ile teslim edilir.",
  },
  {
    icon: MapPin,
    title: "İstanbul Geneli",
    desc: "39 ilçede aynı gün keşif ve hızlı montaj imkânı sunuyoruz.",
  },
  {
    icon: Tag,
    title: "Uygun Fiyat",
    desc: "Rekabetçi fiyatlarla en kaliteli ürünleri sunuyoruz.",
  },
  {
    icon: Headphones,
    title: "7/24 Destek",
    desc: "Montaj sonrası teknik destek hattımız her zaman aktif.",
  },
];

const districts = [
  "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar",
  "Bahçelievler", "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş",
  "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca",
  "Çekmeköy", "Esenler", "Esenyurt", "Eyüpsultan", "Fatih",
  "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal",
  "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer",
  "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli",
  "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu",
];

const blogPosts = [
  {
    title: "Cam Balkon Seçerken Dikkat Edilmesi Gerekenler",
    date: "15 Haziran 2025",
    excerpt: "Cam balkon seçerken ısıcam mı yoksa tek cam mı tercih etmeli? Doğru seçim için bilmeniz gereken tüm detaylar ve püf noktaları...",
    href: "/blog/cam-balkon-secerken-dikkat-edilmesi-gerekenler",
    tag: "Cam Balkon",
  },
  {
    title: "Isı Yalıtımlı Pencere Almanın Faydaları",
    date: "3 Mayıs 2025",
    excerpt: "Isı yalıtımlı pencereler hem konfor hem de enerji tasarrufu sağlar. Uzun vadede nasıl kazandırır, hangi özelliklere dikkat etmeli?",
    href: "/blog/isi-yalitimli-pencere-faydalari",
    tag: "PVC & Alüminyum",
  },
  {
    title: "Pergole Sistemleri: Bahçenizi Dönüştürün",
    date: "22 Nisan 2025",
    excerpt: "Alüminyum pergole sistemleri ile açık alanlarınızı dört mevsim kullanılabilir yaşam alanlarına dönüştürün. Seçenekler ve kurulum süreci...",
    href: "/blog/pergole-sistemleri-bahcenizi-donusturun",
    tag: "Pergole",
  },
];

/* ================================================================
   ANIMATION VARIANTS
================================================================ */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function HeroSection() {
  return (
    <section
      className="relative bg-[#1a2d5a] overflow-hidden h-screen flex flex-col justify-center px-5 pt-20 pb-8 md:py-0 md:h-auto md:min-h-screen md:flex-row md:items-center md:px-0"
    >
      {/* Diagonal line geometric pattern */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="1" />
              <line x1="-10" y1="40" x2="30" y2="0" stroke="white" strokeWidth="0.5" />
              <line x1="10" y1="40" x2="50" y2="0" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
      </div>

      {/* Ambient glow blobs */}
      <div className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] rounded-full bg-[#5aaccc]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[400px] h-[400px] rounded-full bg-[#e87722]/10 blur-3xl pointer-events-none" />

      {/* Inner container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-start md:justify-center pt-4 md:pt-0 flex-1 md:max-w-7xl md:mx-auto md:px-4 md:py-20 md:block">

        {/* TOP AREA: image + headline */}
        <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">

          {/* LEFT: Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >

            {/* Badge */}
            <motion.div variants={staggerItem} className="flex md:flex mb-3 md:mb-6 overflow-hidden">
              <span className="inline-flex items-center gap-2 bg-[#e87722]/20 text-[#e87722] border border-[#e87722]/30 text-[10px] md:text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e87722] animate-pulse" />
                İstanbul&apos;un Güvenilir Cam Sistemi Uzmanı
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={staggerItem}
              className="text-2xl md:text-5xl font-bold leading-tight mb-4 text-white md:font-extrabold md:leading-[1.15] md:mb-6 lg:text-[3.25rem] xl:text-6xl"
            >
              İstanbul&apos;un Güvenilir{" "}
              <span className="text-[#e87722]">Alüminyum &amp; Cam Balkon</span>{" "}
              Sistemleri Uzmanı
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={staggerItem}
              className="block text-white/75 text-sm md:text-base leading-relaxed mb-4 md:mb-10 max-w-xl"
            >
              10 yıllık deneyimle İstanbul&apos;un tüm ilçelerinde profesyonel montaj ve kurulum hizmetleri sunuyoruz.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={staggerItem} className="flex flex-col gap-3 w-full mb-4 md:flex-row md:w-auto md:mb-12 md:gap-4 md:flex-wrap">
              <a
                href="tel:+905433057484"
                className="flex items-center justify-center gap-2 w-full md:w-auto py-3 md:px-7 md:py-4 bg-[#e87722] text-white rounded-xl font-bold text-base hover:bg-[#c5611a] transition-all duration-200 shadow-[0_6px_20px_rgba(232,119,34,0.45)] hover:shadow-[0_8px_28px_rgba(232,119,34,0.55)] hover:-translate-y-0.5 active:bg-[#c5611a]"
              >
                <Phone className="w-5 h-5" />
                0543 305 74 84
              </a>
              <a
                href="https://wa.me/905433057484"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full md:w-auto py-3 md:px-7 md:py-4 bg-transparent text-[#25D366] border-2 border-[#25D366] rounded-xl font-bold text-base hover:bg-[#25D366] hover:text-white transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp&apos;tan Yaz
              </a>
            </motion.div>

            {/* Pills */}
            <motion.div variants={staggerItem} className="flex flex-row gap-2 w-full md:flex-wrap md:gap-3 md:w-auto">
              <a
                href="tel:+905433057484"
                className="flex flex-1 flex-col justify-center text-xs py-2 px-3 md:flex-none md:flex-row md:items-center md:gap-2.5 bg-white/10 text-white rounded-xl border border-white/15 transition-all duration-200 active:bg-white/20 md:px-4 md:py-2.5 md:text-sm md:font-medium hover:bg-white/18 backdrop-blur-sm hover:border-white/30 cursor-pointer"
              >
                <Phone className="hidden md:block w-4 h-4 text-[#e87722] flex-shrink-0" />
                <div className="flex flex-col leading-tight">
                  <span className="text-white/50 text-[10px] font-semibold tracking-wide uppercase mb-0.5 md:mb-0">Hüzeyfe TURHAN</span>
                  <span className="flex items-center gap-1 md:gap-0"><Phone className="md:hidden w-[10px] h-[10px] text-[#e87722]" /> 0543 305 74 84</span>
                </div>
              </a>
              <a
                href="tel:+905302418755"
                className="flex flex-1 flex-col justify-center text-xs py-2 px-3 md:flex-none md:flex-row md:items-center md:gap-2.5 bg-white/10 text-white rounded-xl border border-white/15 transition-all duration-200 active:bg-white/20 md:px-4 md:py-2.5 md:text-sm md:font-medium hover:bg-white/18 backdrop-blur-sm hover:border-white/30 cursor-pointer"
              >
                <Phone className="hidden md:block w-4 h-4 text-[#e87722] flex-shrink-0" />
                <div className="flex flex-col leading-tight">
                  <span className="text-white/50 text-[10px] font-semibold tracking-wide uppercase mb-0.5 md:mb-0">Sefer KÖSE</span>
                  <span className="flex items-center gap-1 md:gap-0"><Phone className="md:hidden w-[10px] h-[10px] text-[#e87722]" /> 0530 241 87 55</span>
                </div>
              </a>
            </motion.div>

            {/* Stat Pills - mobile only */}
            <motion.div variants={staggerItem} className="flex md:hidden flex-wrap gap-2 mt-4">
              <span className="flex items-center gap-1.5 bg-white/10 text-white text-xs py-1.5 px-3 rounded-full">
                <Award className="w-3.5 h-3.5 text-[#e87722]" /> 10+ Yıl Deneyim
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 text-white text-xs py-1.5 px-3 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[#e87722]" /> 39 İlçede Hizmet
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 text-white text-xs py-1.5 px-3 rounded-full">
                <CheckCircle className="w-3.5 h-3.5 text-[#e87722]" /> 500+ Proje
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 text-white text-xs py-1.5 px-3 rounded-full">
                <Star className="w-3.5 h-3.5 text-[#e87722]" /> %100 Memnuniyet
              </span>
            </motion.div>

          </motion.div>

          {/* RIGHT: Hero image - desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[560px] h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
              <Image
                src="/pencere.svg"
                alt="DHS Cam Balkon Sistemleri"
                width={600}
                height={450}
                className="w-full h-full object-cover"
                priority
              />

              {/* Overlay text badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div className="bg-[#e87722]/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                  🏆 10+ Yıl Deneyim
                </div>
                <div className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-medium border border-white/20">
                  39 İlçede Hizmet
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-[-1px] left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-[56px]">
          <path d="M0 56L1440 56L1440 20C1200 56 900 0 720 20C540 40 240 0 0 20L0 56Z" fill="#e87722" />
        </svg>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   STATS BAR
───────────────────────────────────────────────────────────── */
function StatsBar() {
  return (
    <section className="bg-[#e87722] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/30"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="flex flex-col items-center text-center py-2 lg:px-6"
            >
              <span className="text-4xl sm:text-5xl font-extrabold text-white leading-none mb-2 tabular-nums">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </span>
              <span className="text-white/85 font-semibold text-sm sm:text-base tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SERVICES
───────────────────────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section id="hizmetler" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.span variants={staggerItem} className="inline-block text-sm font-bold tracking-widest uppercase text-[#e87722] mb-3">
            Ne Yapıyoruz?
          </motion.span>
          <motion.h2 variants={staggerItem} className="text-4xl lg:text-5xl font-extrabold text-[#1a2d5a] mb-4">
            Hizmetlerimiz
          </motion.h2>
          <motion.div
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5, delay: 0.3 } } }}
            style={{ originX: 0.5 }}
            className="h-1 w-16 bg-[#e87722] rounded-full mx-auto mb-6"
          />
          <motion.p variants={staggerItem} className="text-gray-500 text-lg max-w-2xl mx-auto">
            Cam balkon sistemlerinden alüminyum doğramaya kadar geniş hizmet yelpazemizle her ihtiyacınıza çözüm sunuyoruz.
          </motion.p>
        </motion.div>

        {/* 2×5 grid: 1col → 2col → 3col → 5col */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={staggerItem}>
                <Link
                  href={service.href}
                  className="group flex flex-col h-full bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(26,45,90,0.14)] hover:border-[#e87722]/40 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#f4f7fb] group-hover:bg-[#e87722] flex items-center justify-center mb-4 transition-colors duration-300 flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#1a2d5a] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[#1a2d5a] text-sm mb-2 leading-snug group-hover:text-[#e87722] transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">
                    {service.description}
                  </p>

                  {/* Link */}
                  <span className="inline-flex items-center gap-1 text-[#e87722] text-xs font-bold group-hover:gap-2 transition-all duration-200">
                    Detay
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   NEDEN BİZ
───────────────────────────────────────────────────────────── */
function WhyUsSection() {
  return (
    <section className="py-24 bg-[#f4f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.span variants={staggerItem} className="inline-block text-sm font-bold tracking-widest uppercase text-[#e87722] mb-3">
            Farkımız
          </motion.span>
          <motion.h2 variants={staggerItem} className="text-4xl lg:text-5xl font-extrabold text-[#1a2d5a] mb-4">
            Neden Bizi Seçmelisiniz?
          </motion.h2>
          <motion.div
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5, delay: 0.3 } } }}
            style={{ originX: 0.5 }}
            className="h-1 w-16 bg-[#e87722] rounded-full mx-auto mb-6"
          />
          <motion.p variants={staggerItem} className="text-gray-500 text-lg max-w-2xl mx-auto">
            Müşteri memnuniyetini her şeyin önünde tutarak sektörde öncü konumumuzu sürdürüyoruz.
          </motion.p>
        </motion.div>

        {/* 3-column grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyUs.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group bg-white rounded-2xl p-7 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(26,45,90,0.12)] transition-all duration-300 hover:-translate-y-1 flex gap-5 items-start"
              >
                <div className="w-13 h-13 flex-shrink-0 w-12 h-12 rounded-xl bg-[#f4f7fb] group-hover:bg-[#1a2d5a] flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#e87722] group-hover:text-[#e87722] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a2d5a] text-base mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   HİZMET BÖLGELERİ
───────────────────────────────────────────────────────────── */
function DistrictsBanner() {
  // Duplicate for seamless infinite scroll
  const allDistricts = [...districts, ...districts];

  return (
    <section className="py-24 bg-[#1a2d5a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.span variants={staggerItem} className="inline-block text-sm font-bold tracking-widest uppercase text-[#e87722] mb-3">
            Hizmet Bölgeleri
          </motion.span>
          <motion.h2 variants={staggerItem} className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            İstanbul&apos;un Her İlçesinde <br className="hidden sm:block" />
            <span className="text-[#e87722]">Hizmetinizdeyiz</span>
          </motion.h2>
          <motion.div
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5, delay: 0.3 } } }}
            style={{ originX: 0.5 }}
            className="h-1 w-16 bg-[#e87722] rounded-full mx-auto mb-6"
          />
          <motion.p variants={staggerItem} className="text-white/70 text-lg max-w-2xl mx-auto">
            İstanbul&apos;un 39 ilçesinin tamamında ücretsiz keşif, hızlı montaj ve garantili hizmet sunuyoruz.
          </motion.p>
        </motion.div>
      </div>

      {/* Marquee Row 1 — left to right */}
      <div className="mb-4 overflow-hidden">
        <div
          className="flex gap-3 w-max"
          style={{ animation: "marquee-ltr 40s linear infinite" }}
        >
          {allDistricts.map((d, i) => (
            <span
              key={`ltr-${i}`}
              className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap hover:bg-[#e87722] hover:border-[#e87722] transition-colors duration-200 cursor-default"
            >
              <MapPin className="w-3 h-3 text-[#e87722]" />
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — right to left */}
      <div className="mb-12 overflow-hidden">
        <div
          className="flex gap-3 w-max"
          style={{ animation: "marquee-rtl 35s linear infinite" }}
        >
          {[...allDistricts].reverse().map((d, i) => (
            <span
              key={`rtl-${i}`}
              className="inline-flex items-center gap-1.5 bg-white/8 border border-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap hover:bg-[#e87722] hover:border-[#e87722] hover:text-white transition-colors duration-200 cursor-default"
            >
              <MapPin className="w-3 h-3 text-[#5aaccc]" />
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <Link
          href="/hizmet-bolgeleri"
          className="inline-flex items-center gap-2 bg-[#e87722] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#c5611a] transition-all duration-200 shadow-[0_6px_20px_rgba(232,119,34,0.4)] hover:shadow-[0_8px_28px_rgba(232,119,34,0.5)] hover:-translate-y-0.5"
        >
          <MapPin className="w-5 h-5" />
          Bölgenizi Görün
          <ChevronRight className="w-5 h-5" />
        </Link>
      </motion.div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   BLOG PREVIEW
───────────────────────────────────────────────────────────── */
function BlogPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <motion.span variants={staggerItem} className="inline-block text-sm font-bold tracking-widest uppercase text-[#e87722] mb-3">
              Son Yazılar
            </motion.span>
            <motion.h2 variants={staggerItem} className="text-4xl lg:text-5xl font-extrabold text-[#1a2d5a]">
              Blog
            </motion.h2>
            <motion.div
              variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5, delay: 0.3 } } }}
              style={{ originX: 0 }}
              className="h-1 w-16 bg-[#e87722] rounded-full mt-4"
            />
          </div>
          <motion.div variants={staggerItem}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#1a2d5a] font-semibold border-2 border-[#1a2d5a] px-5 py-2.5 rounded-xl hover:bg-[#1a2d5a] hover:text-white transition-all duration-200 text-sm"
            >
              Tüm Yazılar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Blog cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={post.title} variants={staggerItem}>
              <Link
                href={post.href}
                className="group flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(26,45,90,0.14)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Colorful top bar / placeholder image area */}
                <div
                  className="h-44 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: index === 0
                      ? "linear-gradient(135deg, #1a2d5a 0%, #243f7d 100%)"
                      : index === 1
                        ? "linear-gradient(135deg, #e87722 0%, #f0913d 100%)"
                        : "linear-gradient(135deg, #5aaccc 0%, #4398b8 100%)",
                  }}
                >
                  {/* Geometric accent */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/10" />

                  {/* Tag badge */}
                  <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/30">
                    {post.tag}
                  </span>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center">
                    <Frame className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <h3 className="font-bold text-[#1a2d5a] text-lg leading-snug mb-3 group-hover:text-[#e87722] transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#e87722] font-bold text-sm group-hover:gap-3 transition-all duration-200">
                    Devamını Oku
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   CTA BANNER
───────────────────────────────────────────────────────────── */
function CtaBanner() {
  return (
    <section className="py-20 bg-[#e87722] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span variants={staggerItem} className="inline-block text-sm font-bold tracking-widest uppercase text-white/70 mb-4">
            Ücretsiz Keşif
          </motion.span>
          <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Ücretsiz Keşif için <br className="hidden sm:block" />Hemen Arayın!
          </motion.h2>
          <motion.p variants={staggerItem} className="text-white/85 text-lg mb-10 max-w-xl mx-auto">
            Uzmanlarımız evinize gelir, ölçüm alır ve size özel ücretsiz fiyat teklifi sunar.
          </motion.p>

          {/* Phone numbers */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <a
              href="tel:05433057484"
              className="group flex items-center gap-4 bg-white text-[#e87722] px-7 py-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <div className="w-10 h-10 rounded-full bg-[#e87722]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e87722]/20 transition-colors">
                <Phone className="w-5 h-5 text-[#e87722]" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400 font-semibold tracking-wide uppercase mb-0.5">Hüzeyfe TURHAN</div>
                <div className="text-xl font-extrabold text-[#1a2d5a] tracking-tight">0543 305 74 84</div>
              </div>
            </a>

            <a
              href="tel:05302418755"
              className="group flex items-center gap-4 bg-white text-[#e87722] px-7 py-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <div className="w-10 h-10 rounded-full bg-[#e87722]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e87722]/20 transition-colors">
                <Phone className="w-5 h-5 text-[#e87722]" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400 font-semibold tracking-wide uppercase mb-0.5">Sefer KÖSE</div>
                <div className="text-xl font-extrabold text-[#1a2d5a] tracking-tight">0530 241 87 55</div>
              </div>
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div variants={staggerItem}>
            <a
              href="https://wa.me/905433057484?text=Merhaba%2C%20%C3%BCcretsiz%20ke%C5%9Fif%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25d366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1db954] transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp&apos;tan Yazın
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      {/* <StatsBar /> */}
      <ServicesSection />
      <WhyUsSection />
      <DistrictsBanner />
      <BlogPreview />
      <CtaBanner />
    </div>
  );
}
