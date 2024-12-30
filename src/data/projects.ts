export interface Project {
  slug: string;
  title: string;
  description: string;
  githubLink?: string; // Made optional with '?'
}

export const projects: Project[] = [
  // {
  //   slug: "personal-smart-calendar",
  //   title: "Personal Smart Calendar",
  //   description: "An AI-powered calendar app that optimizes your schedule.",
  //   githubLink: "https://github.com/boetro/personal-smart-calendar",
  // },
  // {
  //   slug: "next-saas-starter",
  //   title: "Next.js SaaS Starter",
  //   description: "A boilerplate for building SaaS applications with Next.js.",
  //   githubLink: "https://github.com/boetro/next-saas-starter",
  // },
  // {
  //   slug: "react-component-library",
  //   title: "React Component Library",
  //   description: "A collection of reusable React components with Storybook documentation.",
  //   // No githubLink for this project
  // },
];
