import Link from "next/link";
import { Navbar } from "@/components/navbar";

export default function BlogNotFound() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-16 font-light">
        <h1 className="text-xl font-light mb-4">404</h1>
        <p className="text-sm text-muted-foreground mb-4">
          Sorry, the blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/blogs" className="text-blue-500 hover:underline">
          View all blogs
        </Link>
      </main>
    </>
  );
}
