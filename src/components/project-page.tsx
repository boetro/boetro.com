import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blogs";
import { Github } from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const relatedPosts = blogPosts
    .filter((post) => post.projectSlug === project.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="max-w-2xl mx-auto px-4 py-16 font-light">
      <header className="mb-16">
        <h1 className="text-xl font-light mb-2">{project.title}</h1>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-sm hover:underline flex items-center mb-4"
          >
            <Github className="h-4 w-4 mr-2" />
            {new URL(project.githubLink).pathname.slice(1)}
          </a>
        )}
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </header>

      <section>
        <h2 className="text-lg font-light mb-4">Blog Posts</h2>
        {relatedPosts.length > 0 ? (
          <ul className="space-y-4">
            {relatedPosts.map((post) => (
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
        ) : (
          <p className="text-sm text-muted-foreground">
            No blog posts associated with this project yet.
          </p>
        )}
      </section>
    </main>
  );
}
