export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  projectSlug?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "my-developer-stack",
    title: "My Developer Stack",
    date: "2024-12-30",
  },
  // {
  //   slug: "prototype-frontend",
  //   title: "Prototype Frontend",
  //   date: "2024-11-30",
  //   projectSlug: "personal-smart-calendar",
  //   content: "/content/blogs/prototype-frontend.md"
  // },
  // {
  //   slug: "idea-personal-smart-calendar",
  //   title: "Idea: Personal Smart Calendar",
  //   date: "2024-11-15",
  //   projectSlug: "personal-smart-calendar",
  //   content: "/content/blogs/idea-personal-smart-calendar.md"
  // },
  // {
  //   slug: "why-i-switched-to-zed-dev",
  //   title: "Why I switched to zed.dev",
  //   date: "2024-10-31",
  //   content: "/content/blogs/why-i-switched-to-zed-dev.md"
  // },
  // {
  //   slug: "building-with-next-js",
  //   title: "Building with Next.js",
  //   date: "2024-09-30",
  //   projectSlug: "next-saas-starter",
  //   content: "/content/blogs/building-with-next-js.md"
  // },
  // {
  //   slug: "react-best-practices",
  //   title: "React Best Practices",
  //   date: "2024-09-15",
  //   projectSlug: "react-component-library",
  //   content: "/content/blogs/react-best-practices.md"
  // },
];
