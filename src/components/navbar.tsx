"use client";

import Link from "next/link";
import { jetBrains } from "@/styles/fonts";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b">
      <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className={`${jetBrains.className} flex items-center space-x-6`}>
          <div className="hidden sm:flex space-x-6 font-semibold">
            <Link
              href="/"
              className={`hover:text-blue-500 ${pathname === "/" ? "text-blue-500" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/blogs"
              className={`hover:text-blue-500 ${pathname === "/blogs" ? "text-blue-500" : ""}`}
            >
              Blogs
            </Link>
            {projects.length > 0 && (
              <Link
                href="/projects"
                className={`hover:text-blue-500 ${pathname === "/projects" ? "text-blue-500" : ""}`}
              >
                Projects
              </Link>
            )}
          </div>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
