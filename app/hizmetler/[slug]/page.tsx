import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Home, Phone, ArrowRight } from "lucide-react";
import { services, getServiceBySlug, getOtherServices } from "@/lib/services";
import ServiceDetailClient from "./ServiceDetailClient";

/* ─────────────────────────────────────────────────────────────
   STATIC PARAMS
───────────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

/* ─────────────────────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Hizmet Bulunamadı",
      description: "İstenen hizmet sayfası bulunamadı.",
    };
  }

  return {
    title: `${service.title} | DHS Cam Sistemleri`,
    description: service.metaDescription,
    keywords: [
      service.title,
      "cam balkon",
      "alüminyum doğrama",
      "İstanbul",
      "DHS cam sistemleri",
      "Büyükçekmece",
    ],
    openGraph: {
      title: `${service.title} | DHS Cam Sistemleri`,
      description: service.metaDescription,
      type: "website",
      locale: "tr_TR",
      url: `https://www.dhsaluminyum.com/hizmetler/${service.slug}`,
    },
    alternates: {
      canonical: `https://www.dhsaluminyum.com/hizmetler/${service.slug}`,
    },
  };
}

/* whyDhs is defined inside ServiceDetailClient (client component) to avoid
   serialization of LucideIcon functions across the server→client boundary. */

/* ─────────────────────────────────────────────────────────────
   PAGE (Server Component)
───────────────────────────────────────────────────────────── */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const otherServices = getOtherServices(slug);
  const Icon = service.icon; // used only in this server component hero — never passed to client

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className={`relative bg-gradient-to-br ${service.gradient} py-24 overflow-hidden`}>
        {/* Diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="svc-diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="1" />
                <line x1="-10" y1="40" x2="30" y2="0" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#svc-diag)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-15"
          style={{ background: service.accentColor }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-10"
          style={{ background: service.accentColor }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-10 flex-wrap">
            <Link href="/" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Ana Sayfa</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/hizmetler" className="hover:text-white transition-colors">
              Hizmetlerimiz
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white font-medium">{service.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            {/* Icon badge */}
            <div
              className="w-24 h-24 rounded-3xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm"
              style={{ background: `${service.accentColor}22`, border: `2px solid ${service.accentColor}55` }}
            >
              <Icon className="w-12 h-12" style={{ color: service.accentColor }} />
            </div>

            <div>
              <span
                className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
                style={{ background: `${service.accentColor}25`, color: service.accentColor }}
              >
                {service.subtitle}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                {service.title}
              </h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 10C1200 40 900 0 720 14C540 28 240 0 0 14L0 40Z" fill="#f4f7fb" />
          </svg>
        </div>
      </section>

      {/* ── MAIN CONTENT (Client for animations) ──────────────── */}
      {/* Stats bar + animated Why DHS — client component (only primitives passed) */}
      <ServiceDetailClient accentColor={service.accentColor} />

      {/* ── FEATURES LIST (static, no animation needed here) ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-extrabold text-[#1a2d5a] mb-3">
                Hizmet Açıklaması
              </h2>
              <div
                className="h-1 w-12 rounded-full mb-8"
                style={{ background: service.accentColor }}
              />
              <div className="space-y-5">
                {service.longDescription.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-extrabold text-[#1a2d5a] mb-3">
                Özellikler
              </h2>
              <div
                className="h-1 w-12 rounded-full mb-8"
                style={{ background: service.accentColor }}
              />
              <ul className="space-y-3.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: service.accentColor }}
                    />
                    <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Quick contact */}
              <div className="mt-10 p-6 bg-[#f4f7fb] rounded-2xl border border-gray-100">
                <p className="text-sm font-bold text-[#1a2d5a] mb-4 uppercase tracking-wide">
                  Bu Hizmet Hakkında Bilgi Alın
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:05433057484"
                    className="flex items-center gap-3 text-sm font-semibold text-[#1a2d5a] hover:text-[#e87722] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#e87722]" />
                    <span>Hüzeyfe TURHAN — 0543 305 74 84</span>
                  </a>
                  <a
                    href="tel:05302418755"
                    className="flex items-center gap-3 text-sm font-semibold text-[#1a2d5a] hover:text-[#e87722] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#e87722]" />
                    <span>Sefer KÖSE — 0530 241 87 55</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why DHS is rendered inside <ServiceDetailClient> above with animations */}

      {/* ── OTHER SERVICES (horizontal scroll) ──────────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8 flex-wrap">
            <div>
              <h2 className="text-3xl font-extrabold text-[#1a2d5a] mb-2">Diğer Hizmetlerimiz</h2>
              <div className="h-1 w-12 bg-[#e87722] rounded-full" />
            </div>
            <Link
              href="/hizmetler"
              className="flex items-center gap-2 text-[#1a2d5a] font-bold text-sm hover:text-[#e87722] transition-colors"
            >
              Tüm Hizmetler
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Horizontal scroll container */}
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {otherServices.map((s) => {
              const SIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/hizmetler/${s.slug}`}
                  className="group flex-shrink-0 w-64 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(26,45,90,0.14)] hover:border-[#e87722]/30 transition-all duration-300 hover:-translate-y-1 snap-start"
                >
                  {/* Mini header */}
                  <div className={`h-28 bg-gradient-to-br ${s.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-white/5" />
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${s.accentColor}25` }}
                    >
                      <SIcon className="w-6 h-6" style={{ color: s.accentColor }} />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#1a2d5a] text-sm leading-snug mb-1 group-hover:text-[#e87722] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{s.shortDescription}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#1a2d5a] relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#e87722]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-[#5aaccc]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#e87722] mb-4">
            Ücretsiz Keşif
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            <span className="text-[#e87722]">{service.title}</span> için
            <br />Ücretsiz Keşif İsteyin
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
            Uzmanlarımız adresinize gelerek ölçüm alır ve size özel fiyat teklifi hazırlar. Tamamen ücretsiz!
          </p>

          {/* Phone cards */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
          </div>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/905433057484?text=${encodeURIComponent(`Merhaba, ${service.title} hakkında bilgi almak istiyorum.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25d366] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#1db954] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp&apos;tan Yazın
          </a>
        </div>
      </section>
    </div>
  );
}
