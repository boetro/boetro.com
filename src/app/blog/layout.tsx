"use client";
import { notFound, usePathname } from "next/navigation";
import { blogPosts } from "@/data/blogs";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const blogSlug = pathname.replace("/blog/", "");

  const post = blogPosts.find((post) => post.slug === blogSlug);
  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-16 font-light">
      <article className="prose prose-sm md:prose-base lg:prose-xl max-w-none dark:prose-invert">
        <header className="not-prose pb-2">
          <h1 className="text-xl dark:text-white font-medium mb-2">
            {post.title}
          </h1>
          <time className="text-sm text-muted-foreground">{post.date}</time>
        </header>
        <hr className="not-prose" />
        <div className="prose-headings:font-medium prose-h1:text-xl prose-h2:text-lg text-base dark:prose-invert">
          {children}
        </div>
      </article>
    </main>
  );
}
