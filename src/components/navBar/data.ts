export interface NavItem {
  title: string;
  href?: string;
  items?: {
    category: string;
    href?: string;
    description?: string;
    subitems?: {
      title: string;
      description?: string;
      href: string;
    }[];
  }[];
}

export const navItems: NavItem[] = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/service",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Studio",
    href: "/studio",
  },
  {
    title: "Foundation",
    href: "/foundation",
  },
];
