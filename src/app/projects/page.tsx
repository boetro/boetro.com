import Link from "next/link";
import { projects } from "@/data/projects";
import { Github } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 font-light">
      <header className="mb-4">
        <h1 className="text-xl font-light mb-4">Projects</h1>
      </header>

      <section>
        <ul className="space-y-8">
          {projects.map((project) => (
            <li key={project.slug} className="border-b pb-6 last:border-b-0">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-light">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-blue-500 hover:underline"
                  >
                    {project.title}
                  </Link>
                </h2>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
