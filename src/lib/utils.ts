import { Noto_Sans, Noto_Sans_Mono, Sora } from "next/font/google";

import { Node } from "@markdoc/markdoc";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-mono",
});

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
    window.location.hash = `#${id}`;
  }
};

// Function to create unique IDs from heading text
export const createId = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

// Source example
export type Heading = {
  title: string;
  id?: string;
  level?: number;
};

export type HeadingNode = {
  name: string;
  attributes?: { [key: string]: never };
  children?: Array<HeadingNode | string>;
};

export function collectHeadings(
  node: HeadingNode,
  sections: Heading[] = []
): Heading[] {
  if (!node) return sections;

  // Check if the node represents a heading element (e.g., h1, h2, h3...)
  if (typeof node.name === "string" && node.name.match(/^h[1-6]$/)) {
    const titleNode = node.children?.[0];
    const title = typeof titleNode === "string" ? titleNode : "";

    if (title) {
      sections.push({
        title,
        id: node.attributes?.id || title.toLowerCase().replace(/ /g, "-"),
        level: parseInt(node.name[1]), // Extract the heading level from the tag name
      });
    }
  }

  // Recursively traverse child nodes
  if (node.children) {
    for (const child of node.children) {
      if (typeof child !== "string") {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}
// const content = Markdoc.transform(ast);
// const headings = collectHeadings(content);

export function addIdsToHeadings(node: Node) {
  if (node.type === "heading") {
    const text = node.children
      .map((child) => (typeof child === "string" ? child : ""))
      .join(" ")
      .trim();

    // Generate a slug-style ID based on the text content
    const id = text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    node.attributes.id = id;
  }

  // Recursively process child nodes
  if (node.children) {
    node.children = node.children.map(addIdsToHeadings);
  }

  return node;
}
