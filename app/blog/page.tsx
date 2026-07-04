import type { Metadata } from "next";
import { getSortedPostsData } from "@/lib/blog";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "Blog | DHS Cam Sistemleri",
  description: "Cam balkon sistemleri, ısı yalıtımı, pergole ve PVC doğrama hakkında faydalı bilgiler, rehberler ve sektör yenilikleri.",
  keywords: ["cam balkon rehberi", "pvc doğrama faydaları", "cam balkon seçerken", "DHS blog", "ısıcamlı balkon"],
  openGraph: {
    title: "DHS Cam Sistemleri Blog",
    description: "Cam balkon sistemleri ve yapı sektörü hakkında güncel yazılar.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.dhsaluminyum.com/blog",
  },
  alternates: {
    canonical: "https://www.dhsaluminyum.com/blog",
  },
};

export default function BlogPage() {
  const posts = getSortedPostsData();
  return <BlogListClient posts={posts} />;
}
