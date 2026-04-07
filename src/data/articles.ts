export type Article = {
  slug: string
  title: string
  titleEn: string
  excerpt: string
  excerptEn: string
  category: string
  categoryEn: string
  publishedAt: string
  readMinutes: number
}

/** JOURNAL — 碾茶・抹茶の専門記事。将来 CMS / MDX へ。 */
export const articles: Article[] = [
  {
    slug: "uji-tencha-shade-structure",
    title: "宇治の覆下栽培：「陰影の階段」とテアニン蓄積の関係",
    titleEn: "Uji shade tea: “steps of shadow” and theanine buildup",
    excerpt:
      "黒い遮光幕の重ね枚数、南側の開口、露地との境界で変わる光量子束密度。一斉に覆うのではなく、段階的に青味を抜く現場の判断基準を、圃場ログとともに整理する。",
    excerptEn:
      "Photon flux changes with blackout layers, south openings, and borders to open fields. Field logs show how growers stage shade to pull green notes—not all at once.",
    category: "産地と栽培",
    categoryEn: "Origin & cultivation",
    publishedAt: "2026-04-01",
    readMinutes: 14,
  },
  {
    slug: "nishio-gokou-nitrogen",
    title: "西尾の「ごこう」碾茶：窒素同化と香気の「青芯」",
    titleEn: "Nishio Gokō tencha: nitrogen and a “green core” of aroma",
    excerpt:
      "愛知の平坦な茶畑で育つごこうは、覆下後の蒸し工程で葉の芯まで均一に通熱したとき、独特の花芯のような香気を帯びる。アミノ酸プロファイルと揮発成分の対応を、試飲とヘッドスペース分析の観点から読み解く。",
    excerptEn:
      "On Aichi’s flat fields, Gokō gains a floral core when steam penetrates evenly after covering. We pair cupping with headspace chemistry.",
    category: "品種と製茶",
    categoryEn: "Cultivar & processing",
    publishedAt: "2026-03-22",
    readMinutes: 11,
  },
  {
    slug: "ishiusu-rpm-and-particle",
    title: "石臼の回転数と粒度分布：「舌に残るザラつき」の正体",
    titleEn: "Mill RPM and particle size: what grit on the tongue really is",
    excerpt:
      "高速回転ほど微粉率は上がるが、過剰な摩擦熱は香気を飛ばす。現場で使われる花崗岩臼の溝の深さと、茶師が耳で聴く「臼の唸り」の意味を、粒子径分布の観点から考察する。",
    excerptEn:
      "Higher RPM raises fines but friction can volatilize aroma. Groove depth in granite mills—and the “mill hum” tea makers listen for—read through particle distributions.",
    category: "碾茶と科学",
    categoryEn: "Tencha & science",
    publishedAt: "2026-03-15",
    readMinutes: 10,
  },
  {
    slug: "koicha-usucha-foam-kinin",
    title: "濃茶の泡は立てない：薄茶の「きめ」と茶筅の本数",
    titleEn: "No foam on koicha: usucha “kinme” and whisk tines",
    excerpt:
      "濃茶は粘度と固形分濃度が高く、茶筅の動きは「解す」に近い。一方、薄茶では細かな泡立ちが旨味の触感と一体になる。茶筅の穗数・硬さと、湯の硬度の相互作用を、茶室での実測メモから。",
    excerptEn:
      "Koicha is viscous—motion is closer to blending than foaming. In usucha, fine foam carries umami texture. Notes from the tea room on tine count, stiffness, and water hardness.",
    category: "茶道と抽出",
    categoryEn: "Tea ceremony & extraction",
    publishedAt: "2026-03-08",
    readMinutes: 9,
  },
  {
    slug: "chakai-ichigo-ichie-modern",
    title: "茶会の「一期一会」と、モダンな茶の湯の器選び",
    titleEn: "Ichigo ichie and choosing bowls for modern tea gatherings",
    excerpt:
      "古帛紗とガラスの茶碗を同じ一席に並べることの是非ではなく、客人の緊張を解くための視覚的な手掛かりとして、器の肌合いと抹茶の濃緑のコントラストをどう設計するか——現代の茶懐石の現場から。",
    excerptEn:
      "Beyond mixing silk and glass on one mat: how surface of bowl and depth of green guide the guest’s eye—and breath—in contemporary tea kaiseki.",
    category: "文化と作法",
    categoryEn: "Culture & etiquette",
    publishedAt: "2026-02-28",
    readMinutes: 8,
  },
]

export function articleDisplay(
  article: Article,
  locale: string
): { title: string; excerpt: string; category: string } {
  if (locale === "en") {
    return {
      title: article.titleEn,
      excerpt: article.excerptEn,
      category: article.categoryEn,
    }
  }
  return {
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
  }
}
