import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ClockIcon } from "lucide-react"

import { articles } from "@/data/articles"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FadeIn } from "@/components/motion/fade-in"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return { title: "記事が見つかりません" }
  return {
    title: article.title,
    description: article.excerpt,
  }
}

/** 記事本文は将来 MDX / CMS へ。専門的なダミー本文。 */
const bodyParagraphs: Record<string, string[]> = {
  "yame-chushi-first-flush": [
    "八女盆地の中央部では、春の訪れが周縁部よりわずかに遅い。夜間放射冷却で地表付近にたまる冷気が、萌芽を引き延ばし、一芽二葉のアミノ酸濃度を相対的に高める——これは経験則として古くから語られてきたが、近年の土壌呼吸測定でも、粘性土の圃場ほど早春の微生物活動が緩やかになる傾向が示されている。",
    "同じやぶきたでも、北東向きの斜面では午前の直射が弱く、葉緑素の分解とポリフェノール合成のバランスが「柔らかい渋み」に寄る。杯に注げば煎茶の水色はやや濁りを帯び、香気は花よりも茎に近い。湯温を70℃前後に落とし、短時間で切ると、その青みはほどけて、喉奥にだけミネラルの線が残る。",
  ],
  "fukamushi-sencha-polyphenols": [
    "深蒸しは、蒸し時間の延長によって葉肉細胞の破砕が進み、揉捻時に細片化しやすくなる。結果として抽出時の固形分濃度が上がり、旨味成分と渋味成分が同時に溶出しやすい。見た目の濁りは「品質低下」と誤解されがちだが、製茶が適切であれば、それはむしろ溶出プロファイルの幅の表れである。",
    "本レポートでは、同一原料を浅蒸しと深蒸しに分け、同じ茶葉量・同じ湯量でステップ抽出し、吸光度の推移を比較した。深蒸しの方が初期の溶出が急峻で、2煎目以降の持続性に差が出る点が興味深い。",
  ],
  "hojicha-roast-curve-kuki": [
    "焙じ茶の香ばしさの中心には、ピラジン類をはじめとする揮発性窒素化合物が関与する。茎原料は葉よりも繊維が硬く、含水率のばらつきが焙煎の「熱の伝わり」に影響する。低温で長く持ち上げる曲線と、短時間でピークに達する曲線では、同じ見た目の茶色でも、香気の「焦げ感」と「甘焼き」の分岐がはっきりする。",
    "本稿では抹茶・碾茶を対象外とし、煎茶製程から派生する棒ほうじに限定して論じる。試飲では湯温 90℃ 前後で単回抽出し、香気の立ち上がりと、冷却後の甘香の変化をスコアリングした。",
  ],
  "genmaicha-kibi-toasty": [
    "玄米の炒りはメイラード反応が主役。茶葉の蒸し深さと独立して、玄米側の褐変度が湯の色味と香気の第一印象を支配する。煎茶の抽出が早いと、茶の渋みが先に立ち、玄米の甘香と競合する。",
    "「ガッツリ系」のブレンドでは深蒸しの茶葉を厚めに、「淡麗系」では浅蒸しと軽い炒り玄米を組み合わせる——といった設計思想を、実際の試飲ログとともに整理した。",
  ],
  "spring-kyusu-maintenance": [
    "新茶の低湯温抽出では、器の熱容量が抽出曲線に与える影響は無視できない。素焼きの急須は湯を奪うが、その分最初の一滴で茶葉表面を均一に温め、以降の溶出を穏やかにする。釉薬の厚い器は熱を反射し、香気の揮発が立ち上がりやすい。",
    "常滑と萩で同じ煎茶を淹れたとき、湯落ちの音と、蓋裏に乗る結露の量まで違った。道具は趣味の領域に見えて、再現性のある変数として記録に値する。",
  ],
}

export default async function ColumnArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const paragraphs = bodyParagraphs[slug] ?? [
    article.excerpt,
    "（本文は編集中です。データソースと図版を追って公開予定です。）",
  ]

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <FadeIn>
        <Link
          href="/column"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← COLUMN 一覧
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Badge variant="secondary">{article.category}</Badge>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <ClockIcon className="size-4" aria-hidden />
            {article.readMinutes} 分 · {article.publishedAt}
          </span>
        </div>
        <h1 className="font-heading mt-6 text-3xl font-medium leading-snug text-foreground sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          {article.excerpt}
        </p>
        <p className="mt-12 border-l-2 border-primary/40 pl-4 text-xs leading-relaxed text-muted-foreground">
          本記事は煎茶・焙じ等の葉茶・茎茶を対象としています。抹茶の点茶や茶筅の作法は扱いません。
        </p>
        <Separator className="my-12" />
        <div className="space-y-8 text-base leading-[1.95] text-foreground/90">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </FadeIn>
    </article>
  )
}
