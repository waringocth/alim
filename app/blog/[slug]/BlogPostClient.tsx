"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home, Calendar, ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
}

export default function BlogPostClient({ post, children }: { post: BlogPost; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f4f7fb] pb-20">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-[#1a2d5a] pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="post-diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#post-diag)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#e87722]/10 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.nav
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-white/55 text-sm mb-10 flex-wrap"
          >
            <Link href="/" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Ana Sayfa</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">{post.title}</span>
          </motion.nav>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.5 }} className="flex justify-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-[#e87722] bg-[#e87722]/15 border border-[#e87722]/25 px-4 py-2 rounded-full">
              {post.category}
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-white/80 bg-white/10 border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" /> {formatDate(post.date)}
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            {post.title}
          </motion.h1>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.5 }} style={{ originX: 0.5 }} className="h-1 w-16 bg-[#e87722] rounded-full mx-auto" />
        </div>
      </section>

      {/* ── CONTENT BODY ──────────────────────────────────────── */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Article */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="lg:col-span-8">
            <article className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgba(26,45,90,0.06)] border border-gray-100">
              {/* The rendered MDX children are injected here */}
              <div className="post-content">
                {children}
              </div>

              <hr className="my-10 border-gray-100" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#1a2d5a] flex items-center justify-center text-white font-bold text-lg">
                    DHS
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1a2d5a]">DHS Ekibi</div>
                    <div className="text-xs text-gray-400">Yazar</div>
                  </div>
                </div>
                
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#e87722] hover:text-[#c5611a] transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Tüm Yazılar
                </Link>
              </div>
            </article>
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(26,45,90,0.04)] border border-gray-100">
              <h3 className="text-lg font-extrabold text-[#1a2d5a] mb-2">Hizmetlerimiz</h3>
              <div className="h-0.5 w-10 bg-[#e87722] rounded-full mb-6" />
              
              <ul className="space-y-3">
                {[
                  { name: "Cam Balkon Sistemleri", slug: "cam-balkon-sistemleri" },
                  { name: "Alüminyum Doğrama", slug: "aluminyum-dograma" },
                  { name: "PVC Pencere", slug: "pvc-pencere-sistemleri" },
                  { name: "Pergole Sistemleri", slug: "pergole-sistemleri" },
                  { name: "Giyotin Cam", slug: "giyotin-cam-sistemleri" }
                ].map((s) => (
                  <li key={s.slug}>
                    <Link href={`/hizmetler/${s.slug}`} className="group flex items-center justify-between text-sm text-gray-600 hover:text-[#e87722] transition-colors p-2 -mx-2 rounded-lg hover:bg-[#f4f7fb]">
                      <span className="font-medium">{s.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-10 bg-[#1a2d5a] rounded-2xl p-6 text-center">
                <h4 className="text-white font-bold mb-2">Ücretsiz Keşif</h4>
                <p className="text-white/70 text-xs mb-4">Evinize veya iş yerinize özel fiyat teklifi almak için hemen bizi arayın.</p>
                <a href="tel:05433057484" className="inline-block w-full bg-[#e87722] text-white text-sm font-bold py-3 rounded-xl hover:bg-[#c5611a] transition-colors">
                  0543 305 74 84
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
      
      {/* Global CSS overrides for the specific post-content class so we don't need typography plugin */}
      <style dangerouslySetInnerHTML={{ __html: `
        .post-content h2 { font-size: 1.5rem; font-weight: 800; color: #1a2d5a; margin-top: 2rem; margin-bottom: 1rem; }
        .post-content h3 { font-size: 1.25rem; font-weight: 700; color: #1a2d5a; margin-top: 1.5rem; margin-bottom: 0.75rem; }
        .post-content p { color: #4b5563; line-height: 1.8; margin-bottom: 1.25rem; }
        .post-content ul { list-style-type: disc; padding-left: 1.5rem; color: #4b5563; margin-bottom: 1.25rem; }
        .post-content li { margin-bottom: 0.5rem; line-height: 1.6; }
        .post-content strong { color: #111827; font-weight: 700; }
      `}} />
    </div>
  );
}
