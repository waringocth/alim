"use client";

import { motion, Variants } from "framer-motion";
import { Shield, Star, Clock } from "lucide-react";

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

interface Props {
  accentColor: string;
}

/**
 * Client component — handles all Framer Motion scroll animations on the
 * service detail page. Receives only serializable primitive props from
 * the Server Component (no LucideIcon functions, no complex objects).
 */
export default function ServiceDetailClient({ accentColor }: Props) {
  return (
    <>
      {/* ── Animated intro stats bar ─────────────────────────── */}
      <section className="py-10 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { label: "Ücretsiz Keşif", value: "✓" },
              { label: "Montaj Garantisi", value: "2 Yıl" },
              { label: "Hizmet Bölgesi", value: "39 İlçe" },
              { label: "Müşteri Memnuniyeti", value: "%100" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100"
              >
                <div
                  className="text-2xl font-extrabold mb-1"
                  style={{ color: accentColor }}
                >
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-gray-500 tracking-wide">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Animated Why DHS cards ───────────────────────────── */}
      <section className="py-16 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-extrabold text-[#1a2d5a] mb-3">
              Neden DHS?
            </motion.h2>
            <motion.div
              variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.5, delay: 0.2 } } }}
              style={{ originX: 0.5 }}
              className="h-1 w-12 bg-[#e87722] rounded-full mx-auto"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                Icon: Shield,
                title: "2 Yıl Montaj Garantisi",
                desc: "Tüm hizmetlerimizde işçilik ve montaj garantisi sunuyoruz. Herhangi bir sorun oluştuğunda ücretsiz destek sağlıyoruz.",
              },
              {
                Icon: Star,
                title: "Sertifikalı Uzman Ekip",
                desc: "Tüm montaj ekiplerimiz alanında sertifikalıdır ve yüzlerce başarılı proje deneyimine sahiptir.",
              },
              {
                Icon: Clock,
                title: "Aynı Gün Keşif",
                desc: "İstanbul'un 39 ilçesinde randevu gününde keşif yapıyor, kısa sürede size özel fiyat teklifini sunuyoruz.",
              },
            ].map(({ Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-7 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(26,45,90,0.1)] transition-shadow duration-300 flex flex-col items-center text-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1a2d5a] flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#e87722]" />
                </div>
                <h3 className="font-bold text-[#1a2d5a] text-lg">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
