import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DHS Alüminyum & Cam Balkon Sistemleri | İstanbul",
    template: "%s | DHS Cam Sistemleri",
  },
  description:
    "İstanbul'un tüm ilçelerinde alüminyum, cam balkon, PVC pencere, giyotin cam, pergole ve sineklik sistemleri kurulum ve montaj hizmetleri. Ücretsiz keşif: 0543 305 74 84",
  keywords: [
    "cam balkon sistemleri istanbul",
    "alüminyum pencere istanbul",
    "pvc kapı istanbul",
    "giyotin cam istanbul",
    "pergole istanbul"
  ],
  authors: [{ name: "DHS Alüminyum & Cam Balkon Sistemleri" }],
  creator: "DHS Alüminyum & Cam Balkon Sistemleri",
  metadataBase: new URL("https://www.dhscamsistemleri.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.dhscamsistemleri.com",
    siteName: "DHS Cam Sistemleri",
    title: "DHS Alüminyum & Cam Balkon Sistemleri | İstanbul",
    description:
      "İstanbul'un tüm ilçelerinde alüminyum, cam balkon, PVC pencere, giyotin cam, pergole ve sineklik sistemleri kurulum ve montaj hizmetleri. Ücretsiz keşif: 0543 305 74 84",
  },
  twitter: {
    card: "summary_large_image",
    title: "DHS Alüminyum & Cam Balkon Sistemleri | İstanbul",
    description: "İstanbul'un tüm ilçelerinde alüminyum, cam balkon, PVC pencere kurulum hizmetleri. Ücretsiz keşif: 0543 305 74 84",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "DHS Alüminyum & Cam Balkon Sistemleri",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ulus Mahallesi İstiklal Caddesi No/37",
    "addressLocality": "Büyükçekmece",
    "addressRegion": "İstanbul",
    "addressCountry": "TR"
  },
  "telephone": "+905433057484",
  "url": "https://www.dhscamsistemleri.com",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "İstanbul"
  },
  "openingHours": "Mo-Sa 08:00-18:00"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full scroll-smooth`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-white text-[#1a1a2e]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
