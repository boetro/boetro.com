import type { MDXComponents } from "mdx/types";
import { jetBrains } from "@/styles/fonts";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: ({ className, ...props }) => (
      <pre className={`${className} ${jetBrains.className}`} {...props} />
    ),
  };
}
