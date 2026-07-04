import type { Metadata } from "next";
import IletisimClient from "./IletisimClient";

export const metadata: Metadata = {
  title: "İletişim | DHS Cam Sistemleri",
  description: "DHS Alüminyum & Cam Balkon Sistemleri iletişim bilgileri. Ücretsiz keşif ve fiyat teklifi için bizi arayın: 0543 305 74 84",
  keywords: ["iletişim", "DHS telefon", "cam balkon iletişim", "DHS adres", "Büyükçekmece cam balkon"],
  openGraph: {
    title: "İletişim | DHS Cam Sistemleri",
    description: "Ücretsiz keşif ve fiyat teklifi için bize ulaşın.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.dhsaluminyum.com/iletisim",
  },
  alternates: {
    canonical: "https://www.dhsaluminyum.com/iletisim",
  },
};

export default function IletisimPage() {
  return <IletisimClient />;
}
