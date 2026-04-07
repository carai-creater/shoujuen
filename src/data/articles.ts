export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  readMinutes: number
}

/**
 * COLUMN 記事データ — 抹茶以外（煎茶・茎茶・焙じ・玄米等）にフォーカス。
 * 将来 CMS / MDX へ差し替え可能。
 */
export const articles: Article[] = [
  {
    slug: "yame-chushi-first-flush",
    title: "八女中央部・一番茶の「青み」と粘土質土壌の関係",
    excerpt:
      "霧深い盆地で遅い萌芽がもたらす、アミノ酸バランスと渋みの収斂。同一品種でも圃場の方位で煎茶の水色が変わる理由を、現地の土壌断面とともに整理する。",
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
    slug: "hojicha-roast-curve-kuki",
    title: "棒ほうじの焙煎曲線と、揮発性ピラジンの立ち上がり",
    excerpt:
      "茎原料の含水率と焙床温度の勾配が、香気の「焦げ感」と「甘焼き」の分岐を決める。茶類は煎茶系に限定し、焙じ単体の化学と官能の対応を追う。",
    category: "焙じと科学",
    publishedAt: "2026-03-10",
    readMinutes: 11,
  },
  {
    slug: "genmaicha-kibi-toasty",
    title: "玄米茶における「炒り米」の褐変と、煎茶との抽出タイミング",
    excerpt:
      "玄米のメイラード生成物が湯に溶け出す速度は、茶葉の蒸し深さと非相関な場合がある。ガッツリ系と淡麗系、二つの玄米茶タイプのブレンド設計を想定した試飲ログ。",
    category: "ブレンドと抽出",
    publishedAt: "2026-03-05",
    readMinutes: 8,
  },
  {
    slug: "spring-kyusu-maintenance",
    title: "春茶に合わせる急須の素焼きと、湯の落ち",
    excerpt:
      "新茶の低湯温抽出では、器の熱容量と注ぎ口の角度が水色に直結する。常滑・萩焼の各特性を、同じ煎茶で比較したときの差異メモ。",
    category: "器と抽出",
    publishedAt: "2026-03-02",
    readMinutes: 7,
  },
]
