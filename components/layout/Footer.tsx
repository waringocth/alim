import Link from "next/link";
import { Phone, MapPin, Globe, ChevronRight, Clock } from "lucide-react";

const quickLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Cam Balkon", href: "/hizmetler/cam-balkon" },
  { label: "Alüminyum Doğrama", href: "/hizmetler/aluminyum-dograma" },
  { label: "PVC Pencere", href: "/hizmetler/pvc-pencere" },
  { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a2d5a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Column 1: Logo + Description + Address */}
          <div className="space-y-6">
            {/* Logo Placeholder */}
            <div className="w-[140px] h-[50px] bg-white/15 rounded-lg flex items-center justify-center border border-white/20">
              <span className="text-white font-bold text-sm tracking-widest">DHS LOGO</span>
            </div>
            <p className="text-white/75 text-sm leading-relaxed max-w-xs">
              DHS Alüminyum & Cam Balkon Sistemleri olarak İstanbul ve çevresinde yıllardır kaliteli cam balkon, alüminyum doğrama ve PVC pencere çözümleri sunuyoruz.
            </p>
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#e87722] flex-shrink-0 mt-0.5" />
              <p className="text-white/75 text-sm leading-relaxed">
                Ulus Mahallesi, İstiklal Caddesi No/37<br />
                Büyükçekmece / İSTANBUL
              </p>
            </div>
            {/* Website */}
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#e87722] flex-shrink-0" />
              <a
                href="https://www.dhscamsistemleri.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 text-sm hover:text-[#e87722] transition-colors duration-200"
              >
                www.dhscamsistemleri.com
              </a>
            </div>
            {/* Working hours */}
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#e87722] flex-shrink-0" />
              <p className="text-white/75 text-sm">Pazartesi – Cumartesi: 08:00 – 18:00</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#e87722] rounded-full inline-block" />
              Hızlı Linkler
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/75 text-sm hover:text-[#e87722] transition-colors duration-200 group"
                  >
                    <ChevronRight className="w-4 h-4 text-[#e87722] opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#e87722] rounded-full inline-block" />
              İletişim Bilgileri
            </h3>
            <div className="space-y-5">
              {/* Phone 1 */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#e87722] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/50 text-xs mb-1 font-medium tracking-wide">Hüzeyfe TURHAN</p>
                  <a
                    href="tel:05433057484"
                    className="text-white font-semibold text-sm hover:text-[#e87722] transition-colors duration-200"
                  >
                    0543 305 74 84
                  </a>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#e87722] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/50 text-xs mb-1 font-medium tracking-wide">Sefer KÖSE</p>
                  <a
                    href="tel:05302418755"
                    className="text-white font-semibold text-sm hover:text-[#e87722] transition-colors duration-200"
                  >
                    0530 241 87 55
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/905433057484"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25d366] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1db954] transition-colors duration-200 mt-2"
              >
                {/* WhatsApp SVG */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp ile Yazın
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} DHS Alüminyum & Cam Balkon Sistemleri. Tüm hakları saklıdır.
          </p>
          <p className="text-white/40 text-xs">
            Büyükçekmece / İSTANBUL
          </p>
        </div>
      </div>
    </footer>
  );
}
