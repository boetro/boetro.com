import Link from "next/link";
import { blogPosts } from "@/data/blogs";
import { projects } from "@/data/projects";
import { Github } from "lucide-react";

export default function HomePage() {
  const recentBlogPosts = blogPosts.slice(0, 5);
  const recentProjects = projects.slice(0, 5);

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <header className="mb-16">
        <h1 className="text-xl font-medium mb-4">Caleb Van Dyke</h1>
        <p className="font-light dark:text-white text-gray-800 leading-snug">
          I&apos;m a Co-Founder and CTO at{" "}
          <Link
            href="https://www.launchflow.com/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LaunchFlow
          </Link>
          . I previously worked as a software engineer at Verily Life Sciences
          and Google. Most of my career has been spent as a backend developer,
          but ever since starting a startup I have dabled more in the front end.
          I&apos;m a father of two kids who enjoys programming, running, and
          reading books. Most of my writing on here will be about one of those
          things.
        </p>
      </header>

      <div className="flex flex-col md:flex-row md:gap-16 mb-16">
        <section className="flex-1 mb-8 md:mb-0 flex flex-col">
          <h2 className="text-lg font-medium mb-4">Recent Blogs</h2>
          <ul className="space-y-2 text-base">
            {recentBlogPosts.map((post) => (
              <li key={post.slug}>
                <span className="text-muted-foreground mr-2">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-500 hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
          {blogPosts.length > 5 && (
            <div className="mt-auto pt-4">
              <Link href="/blogs" className="text-blue-500 hover:underline">
                View all blogs
              </Link>
            </div>
          )}
        </section>

        {projects.length > 0 && (
          <section className="flex-1 flex flex-col">
            <h2 className="text-lg mb-4 font-medium">Recent Projects</h2>
            <ul className="space-y-2 text-sm">
              {recentProjects.map((project) => (
                <li
                  key={project.slug}
                  className="flex items-center justify-between"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-blue-500 hover:underline"
                  >
                    {project.title}
                  </Link>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
            {projects.length > 5 && (
              <div className="mt-auto pt-4">
                <Link
                  href="/projects"
                  className="text-blue-500 hover:underline"
                >
                  View all projects
                </Link>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
