"use client";

import Link from "next/link";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1a2d5a] flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#e87722]/10 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#5aaccc]/10 blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-8xl sm:text-9xl font-extrabold text-[#e87722] mb-6">404</h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Sayfa Bulunamadı</h2>
        <p className="text-white/70 text-lg mb-10">
          Aradığınız sayfaya şu anda ulaşılamıyor. URL'yi yanlış yazmış olabilir veya sayfa kaldırılmış olabilir.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="flex items-center gap-2 bg-white text-[#1a2d5a] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center"
          >
            <Home className="w-5 h-5" /> Ana Sayfaya Dön
          </Link>
        </div>

        <div className="border-t border-white/10 pt-10">
          <p className="text-white/50 text-sm mb-4 uppercase tracking-wider font-bold">Veya Bizi Hemen Arayın</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:05433057484" className="flex items-center justify-center gap-2 text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-lg transition-colors border border-white/10">
              <Phone className="w-4 h-4 text-[#e87722]" /> 0543 305 74 84
            </a>
            <a href="tel:05302418755" className="flex items-center justify-center gap-2 text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-lg transition-colors border border-white/10">
              <Phone className="w-4 h-4 text-[#e87722]" /> 0530 241 87 55
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
