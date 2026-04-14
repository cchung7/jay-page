import { Briefcase, Mail, User, type LucideIcon } from "lucide-react";

export type SiteNavLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const siteNavLinks: SiteNavLink[] = [
  { name: "About", href: "/#about", icon: User },
  { name: "Experience", href: "/#experience", icon: Briefcase },
  { name: "Contact", href: "/#contact", icon: Mail },
];