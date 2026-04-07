export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  readMinutes: number
}

/** 拡張用: 将来的に CMS / MDX へ差し替え */
export const articles: Article[] = [
  {
    slug: "yame-chushi-first-flush",
    title: "八女中央部・一番茶の「青み」と粘土質土壌の関係",
    excerpt:
      "霧深い盆地で遅い萌芽がもたらす、アミノ酸バランスと渋みの収斂。同一品種でも圃場の方位で水色が変わる理由を、現地の土壌断面とともに整理する。",
    category: "産地レポート",
    publishedAt: "2026-03-28",
    readMinutes: 12,
  },
  {
    slug: "fukamushi-sencha-polyphenols",
    title: "深蒸し煎茶の「旨味の厚み」はどこから来るのか",
    excerpt:
      "蒸し時間の延長が葉組織に与える物理的変化と、抽出時の固形分濃度。杯の中の濁りと香気のトレードオフを、実測の抽出曲線で読み解く。",
    category: "製茶と科学",
    publishedAt: "2026-03-15",
    readMinutes: 9,
  },
  {
    slug: "spring-kyusu-maintenance",
    title: "春茶に合わせる急須の素焼きと、湯の落ち",
    excerpt:
      "新茶の低湯温抽出では、器の熱容量と注ぎ口の角度が水色に直結する。常滑・萩焼の各特性を、同じ茶葉で比較したときの差異メモ。",
    category: "器と抽出",
    publishedAt: "2026-03-02",
    readMinutes: 7,
  },
]
