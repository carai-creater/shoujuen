export type NavItem = {
  href: string
  label: string
  description?: string
}

export const mainNav: NavItem[] = [
  { href: "/", label: "トップ", description: "水色と風土のはじまり" },
  { href: "/producers", label: "農家紹介", description: "土と品種に宿る物語" },
  { href: "/tea-library", label: "お茶図鑑", description: "品種・製法のスペック" },
  { href: "/brewing", label: "淹れ方", description: "湯温と待ち時間" },
  { href: "/blog", label: "読みもの", description: "産地レポートと季節の便り" },
]
