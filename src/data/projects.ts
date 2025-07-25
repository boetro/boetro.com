export interface Project {
  slug: string;
  title: string;
  description: string;
  githubLink?: string; // Made optional with '?'
}

export const projects: Project[] = [];
