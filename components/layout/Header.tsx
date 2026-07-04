"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white border-b-2 border-[#1a2d5a] transition-all duration-300 ${
          isScrolled ? "shadow-[0_4px_20px_rgba(26,45,90,0.12)]" : "shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="w-[140px] h-[50px] bg-[#1a2d5a] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-widest">DHS</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-[#1a1a2e] hover:text-[#1a2d5a] transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#e87722] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full origin-left" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:05433057484"
                className="flex items-center gap-2 text-sm font-semibold text-[#1a2d5a] hover:text-[#e87722] transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>0543 305 74 84</span>
              </a>
              <Link
                href="/iletisim"
                className="bg-[#e87722] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#c5611a] transition-all duration-200 shadow-[0_4px_14px_rgba(232,119,34,0.35)] hover:shadow-[0_6px_20px_rgba(232,119,34,0.45)] hover:-translate-y-0.5"
              >
                Teklif Al
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg text-[#1a2d5a] hover:bg-[#f4f7fb] transition-colors duration-200"
              aria-label={mobileOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[300px] bg-white shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100 bg-[#1a2d5a]">
                <div className="w-[120px] h-[40px] bg-white/15 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs tracking-widest">DHS</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto py-6 px-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center px-4 py-3.5 rounded-xl text-[#1a1a2e] font-medium hover:bg-[#f4f7fb] hover:text-[#1a2d5a] transition-all duration-200 mb-1"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Contact at bottom */}
              <div className="border-t border-gray-100 p-6 space-y-3">
                <a
                  href="tel:05433057484"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#f4f7fb] text-[#1a2d5a] font-semibold text-sm hover:bg-[#e8eef6] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#e87722]" />
                  <div>
                    <div className="text-xs text-gray-500">Hüzeyfe TURHAN</div>
                    <div>0543 305 74 84</div>
                  </div>
                </a>
                <a
                  href="tel:05302418755"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#f4f7fb] text-[#1a2d5a] font-semibold text-sm hover:bg-[#e8eef6] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#e87722]" />
                  <div>
                    <div className="text-xs text-gray-500">Sefer KÖSE</div>
                    <div>0530 241 87 55</div>
                  </div>
                </a>
                <Link
                  href="/iletisim"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-[#e87722] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#c5611a] transition-colors"
                >
                  Ücretsiz Teklif Al
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
