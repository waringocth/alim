"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home, Calendar, ArrowRight, BookOpen } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

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

// Format date to Turkish locale
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-[#1a2d5a] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blog-diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-diag)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#5aaccc]/10 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.nav
            custom={0} variants={heroIn(0)} initial="hidden" animate="visible"
            className="flex items-center justify-center gap-2 text-white/55 text-sm mb-8 flex-wrap"
          >
            <Link href="/" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Ana Sayfa</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white font-medium">Blog</span>
          </motion.nav>

          <motion.span custom={1} variants={heroIn(1)} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#e87722] bg-[#e87722]/15 border border-[#e87722]/25 px-4 py-2 rounded-full mb-5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            BİLGİ BANKASI VE REHBERLER
          </motion.span>
          <motion.h1 custom={2} variants={heroIn(2)} initial="hidden" animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
          >
            Güncel Blog <span className="text-[#e87722]">Yazılarımız</span>
          </motion.h1>
          <motion.div custom={3} variants={heroIn(3)} initial="hidden" animate="visible"
            style={{ originX: 0.5 }}
            className="h-1 w-16 bg-[#e87722] rounded-full mx-auto mb-6"
          />
          <motion.p custom={4} variants={heroIn(4)} initial="hidden" animate="visible"
            className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Cam balkon, alüminyum sistemler ve enerji tasarrufu hakkında uzman rehberlerimizi inceleyin.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 10C1200 40 900 0 720 14C540 28 240 0 0 14L0 40Z" fill="#f4f7fb" />
          </svg>
        </div>
      </section>

      {/* ── BLOG LIST ────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            {posts.map((post) => (
              <motion.article 
                key={post.slug} 
                variants={fadeUp}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(26,45,90,0.04)] border border-gray-100 hover:border-[#e87722]/30 hover:shadow-[0_8px_32px_rgba(26,45,90,0.1)] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wide mb-4">
                  <span className="text-[#e87722] bg-[#e87722]/10 px-3 py-1.5 rounded-lg">
                    {post.category}
                  </span>
                  <span className="text-gray-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(post.date)}
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2d5a] mb-4 group-hover:text-[#e87722] transition-colors leading-tight">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#e87722] font-bold text-sm group-hover:gap-3 transition-all"
                >
                  Devamını Oku <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
