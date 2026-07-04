import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSortedPostsData, getPostData } from "@/lib/blog";
import BlogPostClient from "./BlogPostClient";
import { MDXRemote } from "next-mdx-remote/rsc";

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostData(slug);
  if (!post) return { title: "Yazı Bulunamadı" };

  return {
    title: `${post.title} | DHS Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["DHS Ekibi"],
      url: `https://www.dhsaluminyum.com/blog/${slug}`,
    },
    alternates: {
      canonical: `https://www.dhsaluminyum.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostData(slug);

  if (!post) notFound();

  return (
    <BlogPostClient post={post}>
      {/* Prose class is required for raw markdown styling */}
      <div className="prose prose-lg prose-blue max-w-none text-gray-700">
        <MDXRemote source={post.content} />
      </div>
    </BlogPostClient>
  );
}
