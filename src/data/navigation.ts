export type NavItem = {
  href: string
  label: string
  labelEn?: string
  description?: string
}

export const mainNav: NavItem[] = [
  { href: "/", label: "トップ", description: "水色と風土のはじまり" },
  {
    href: "/the-leaves",
    label: "茶葉図鑑",
    labelEn: "THE LEAVES",
    description: "品種・蒸し・火入れのスペック",
  },
  {
    href: "/farms",
    label: "農家紹介",
    labelEn: "FARMS",
    description: "煎茶・焙じの生産者",
  },
  {
    href: "/column",
    label: "COLUMN",
    labelEn: "COLUMN",
    description: "産地と製法の考察",
  },
  {
    href: "/brew",
    label: "淹れ方",
    labelEn: "BREW",
    description: "湯温・茶葉量・時間",
  },
]
