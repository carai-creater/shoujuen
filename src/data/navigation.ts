export type NavItem = {
  href: string
  id: "home" | "theMatcha" | "producers" | "journal" | "howTo"
}

export const mainNav: NavItem[] = [
  { href: "/", id: "home" },
  { href: "/the-matcha", id: "theMatcha" },
  { href: "/producers", id: "producers" },
  { href: "/journal", id: "journal" },
  { href: "/how-to", id: "howTo" },
]
