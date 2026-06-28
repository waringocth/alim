import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { districts, getDistrictBySlug } from "@/lib/districts";
import DistrictContent from "./DistrictContent";

/* ─────────────────────────────────────────────────────────────
   STATIC PARAMS — all 39 district slugs
───────────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return districts.map((d) => ({ ilce: d.slug }));
}

/* ─────────────────────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ ilce: string }>;
}): Promise<Metadata> {
  const { ilce } = await params;
  const district = getDistrictBySlug(ilce);

  if (!district) {
    return {
      title: "Bölge Bulunamadı",
      description: "İstenen hizmet bölgesi sayfası bulunamadı.",
    };
  }

  const title = `${district.name} Alüminyum & Cam Balkon Sistemleri | DHS`;
  const description = `${district.name} ilçesinde cam balkon, alüminyum doğrama, PVC pencere ve daha fazlası için DHS Cam Sistemleri. Aynı gün ücretsiz keşif — 0543 305 74 84`;

  return {
    title,
    description,
    keywords: [
      `${district.name} cam balkon`,
      `${district.name} alüminyum doğrama`,
      `${district.name} PVC pencere`,
      `${district.name} cam balkon fiyatları`,
      `${district.name} cam sistem`,
      "DHS cam sistemleri",
      "istanbul cam balkon",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "tr_TR",
      url: `https://www.dhscamsistemleri.com/hizmet-bolgeleri/${district.slug}`,
    },
    alternates: {
      canonical: `https://www.dhscamsistemleri.com/hizmet-bolgeleri/${district.slug}`,
    },
  };
}

/* ─────────────────────────────────────────────────────────────
   JSON-LD SCHEMA BUILDER
───────────────────────────────────────────────────────────── */
function buildJsonLd(districtName: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://www.dhscamsistemleri.com/#localbusiness`,
        name: "DHS Alüminyum & Cam Balkon Sistemleri",
        description: `${districtName} ilçesinde cam balkon, alüminyum doğrama ve PVC pencere sistemleri kurulumu`,
        url: "https://www.dhscamsistemleri.com",
        telephone: "+905433057484",
        priceRange: "$$",
        image: "https://www.dhscamsistemleri.com/og-image.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ulus Mahallesi, İstiklal Caddesi No/37",
          addressLocality: "Büyükçekmece",
          addressRegion: "İstanbul",
          postalCode: "34500",
          addressCountry: "TR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "41.0163",
          longitude: "28.5854",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:00",
            closes: "18:00",
          },
        ],
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: `${districtName}, İstanbul, Türkiye`,
          },
        ],
        sameAs: ["https://www.dhscamsistemleri.com"],
      },
      {
        "@type": "Service",
        name: `Cam Balkon ve Alüminyum Doğrama — ${districtName}`,
        provider: {
          "@type": "LocalBusiness",
          name: "DHS Alüminyum & Cam Balkon Sistemleri",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: `${districtName}, İstanbul`,
        },
        serviceType:
          "Cam Balkon Sistemleri, Alüminyum Doğrama, PVC Pencere, Giyotin Cam, Pergole, Sineklik, Duşakabin",
        description: `${districtName} ilçesinde ücretsiz keşif ile cam balkon, alüminyum doğrama ve PVC pencere sistemleri kurulumu. 2 yıl montaj garantisi.`,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "TRY",
          description: "Ücretsiz keşif ve fiyat teklifi",
        },
      },
      {
        "@type": "WebPage",
        "@id": `https://www.dhscamsistemleri.com/hizmet-bolgeleri/${slug}`,
        url: `https://www.dhscamsistemleri.com/hizmet-bolgeleri/${slug}`,
        name: `${districtName} Cam Balkon Sistemleri | DHS`,
        description: `${districtName} ilçesinde cam balkon, PVC pencere ve alüminyum doğrama. Ücretsiz keşif için arayın.`,
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.dhscamsistemleri.com" },
            { "@type": "ListItem", position: 2, name: "Hizmet Bölgeleri", item: "https://www.dhscamsistemleri.com/hizmet-bolgeleri" },
            { "@type": "ListItem", position: 3, name: districtName, item: `https://www.dhscamsistemleri.com/hizmet-bolgeleri/${slug}` },
          ],
        },
      },
    ],
  };
}

/* ─────────────────────────────────────────────────────────────
   PAGE (Server Component)
───────────────────────────────────────────────────────────── */
export default async function DistrictPage({
  params,
}: {
  params: Promise<{ ilce: string }>;
}) {
  const { ilce } = await params;
  const district = getDistrictBySlug(ilce);

  if (!district) notFound();

  const jsonLd = buildJsonLd(district.name, district.slug);

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Animated page content */}
      <DistrictContent district={district} />
    </>
  );
}
