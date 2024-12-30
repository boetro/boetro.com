import Link from "next/link";
import { blogPosts } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 font-light">
      <header className="mb-4">
        <h1 className="text-xl font-light mb-4">Blogs</h1>
      </header>

      <section>
        <ul className="space-y-4">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <span className="text-muted-foreground mr-2 text-sm">
                {post.date}
              </span>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-500 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
