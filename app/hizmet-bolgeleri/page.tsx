import type { Metadata } from "next";
import DistrictsListClient from "./DistrictsListClient";
import { getSortedDistricts } from "@/lib/districts";

export const metadata: Metadata = {
  title: "Hizmet Bölgeleri — İstanbul'un 39 İlçesinde | DHS Cam Sistemleri",
  description:
    "DHS Alüminyum & Cam Balkon Sistemleri olarak İstanbul'un tüm 39 ilçesinde cam balkon, PVC pencere ve alüminyum doğrama hizmetleri sunuyoruz. Bölgenizi seçin.",
  keywords: [
    "istanbul cam balkon",
    "istanbul alüminyum doğrama",
    "istanbul hizmet bölgeleri",
    "cam balkon istanbul ilçeler",
    "DHS cam sistemleri istanbul",
  ],
  openGraph: {
    title: "İstanbul'un 39 İlçesinde Cam Balkon ve Alüminyum Doğrama | DHS",
    description:
      "İstanbul'un tüm ilçelerinde profesyonel cam balkon, PVC pencere ve alüminyum doğrama montajı. Bölgenizi seçin, ücretsiz keşif isteyin.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.dhscamsistemleri.com/hizmet-bolgeleri",
  },
  alternates: {
    canonical: "https://www.dhscamsistemleri.com/hizmet-bolgeleri",
  },
};

export default function HizmetBolgeleriPage() {
  const sortedDistricts = getSortedDistricts();
  return <DistrictsListClient districts={sortedDistricts} />;
}
