import type { Metadata } from "next";
import HakkimizdaClient from "./HakkimizdaClient";

export const metadata: Metadata = {
  title: "Hakkımızda | DHS Cam Sistemleri",
  description: "DHS Alüminyum & Cam Balkon Sistemleri kimdir? 10 yıllık deneyimimiz, kurucularımız Hüzeyfe TURHAN ve Sefer KÖSE, ve kalite odaklı değerlerimiz hakkında bilgi edinin.",
  keywords: [
    "DHS cam sistemleri hakkında",
    "istanbul cam balkon firması",
    "Hüzeyfe Turhan",
    "Sefer Köse",
    "DHS alüminyum",
  ],
  openGraph: {
    title: "Hakkımızda | DHS Cam Sistemleri",
    description: "DHS Alüminyum & Cam Balkon Sistemleri kimdir? 10 yıllık deneyimimiz ve değerlerimiz.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.dhsaluminyum.com/hakkimizda",
  },
  alternates: {
    canonical: "https://www.dhsaluminyum.com/hakkimizda",
  },
};

export default function HakkimizdaPage() {
  return <HakkimizdaClient />;
}
