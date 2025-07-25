export interface Project {
  slug: string;
  title: string;
  description: string;
  githubLink?: string; // Made optional with '?'
}

export const projects: Project[] = [
  {
    slug: "smart-calendar",
    title: "Smart Calendar",
    description:
      "A smart home calendar that makes it easy to view everyone in your homes schedule, as well as any other important information such as: grocery lists, weekly meal plans, etc..",
    // githubLink: "https://github.com/boetro/smart-calendar",
  },
];
