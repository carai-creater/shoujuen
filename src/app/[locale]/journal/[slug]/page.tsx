import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { ClockIcon } from "lucide-react"

import { Link } from "@/i18n/navigation"
import { articles, articleDisplay } from "@/data/articles"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FadeIn } from "@/components/motion/fade-in"

type Props = { params: Promise<{ locale: string; slug: string }> }

const bodyParagraphsJa: Record<string, string[]> = {
  "uji-tencha-shade-structure": [
    "宇治南山城では、覆下の「何日目にどの遮光率をかけるか」が、テアニンとフラボノイドのバランスを決める。一斉に真っ暗にするのではなく、最初の数日は透過光を残して青味を抜き、その後に重ね幕で光量子束密度を落とす——この段階設計が、碾茶の香気の芯に直結する。",
    "現場のログでは、南側の斜面ほど午前の直射が強く、同じ遮光幕でも葉温のピークが高い。北東向きの圃場では、葉の厚みが均一になり、蒸し工程での通熱ムラが少ない傾向が観察された。",
  ],
  "nishio-gokou-nitrogen": [
    "ごこうは、窒素同化の賜物とも言われる品種だが、覆下後の蒸しで「芯まで通す」熱の入り方が、花芯様の香気を引き出す鍵になる。西尾の平地では、朝露と昼間の乾燥のリズムが葉の含水率を均一化し、蒸し後の乾燥で香気の揮発が抑えられやすい。",
    "試飲では、同じごこうでも、蒸しが長時間のロットは香気が閉じ、短時間高温のロットはトップノートが立ちすぎる。碾茶の粒子径と合わせて評価しないと、銘柄の個性は見えない。",
  ],
  "ishiusu-rpm-and-particle": [
    "石臼の回転数を上げると、微粉率は上がるが、摩擦熱で揮発成分が失われる。茶師が聴く「唸り」は、臼歯と茶の噛み合いの音であり、粒度分布の歪みを耳で補正しているとも言える。",
    "レーザー回折式の粒度計で見ると、理想的な薄茶用は、数ミクロン以下のピークと、十数ミクロンのサブピークが共存する分布が多い。一方で、ラテ向けは意図的にサブピークを抑え、舌触りのクリーミーさを優先する。",
  ],
  "koicha-usucha-foam-kinin": [
    "濃茶は茶筅で「解す」ことに近く、泡の立ちは不要とされる。粘度が高いため、茶筅の動きは碗底を這わせるようにし、かき混ぜすぎると澱が出る。",
    "薄茶では茶筅の本数と硬さが、きめの細かさに直結する。湯が硬いと泡が粗く、軟水では細かいが持続が短い——水質は茶室でも再現性の変数として記録に値する。",
  ],
  "chakai-ichigo-ichie-modern": [
    "一期一会は、同じ茶会は二度と来ないという時間の倫理の言葉だが、現代の茶会では「客人が初めての緊張を解く」ための視覚的設計も問われる。古帛紗の上に、現代作家のガラス茶碗を置くことの是非は、流派の承認を超えて、客がどこに視線を置けるかの問題でもある。",
    "濃緑の抹茶と、透明な碗の縁のコントラストは、スマートフォンに映える以前に、客の呼吸を浅くする効果がある。ただし、器の冷たさが抹茶の温度を奪う場合もあり、季節と湯の温度の設計が不可欠だ。",
  ],
}

const bodyParagraphsEn: Record<string, string[]> = {
  "uji-tencha-shade-structure": [
    "In Minamiyamashiro, Uji, the schedule of shade layers and blackout density sets the balance of theanine and flavonoids. Growers rarely go dark all at once: early days keep transmitted light to pull green notes, then stacked screens drop photon flux—this staging is what lands in tencha aroma.",
    "Field logs show south-facing slopes catch harsh morning sun, so leaf temperature peaks differ even under the same cloth. Northeast-facing plots tend toward even leaf thickness and fewer hot spots in steaming.",
  ],
  "nishio-gokou-nitrogen": [
    "Gokō is often tied to nitrogen assimilation, but after covering, how steam heat reaches the leaf core is what unlocks its floral core. On Nishio’s flats, dew and daytime drying even out moisture, and post-steam drying holds volatiles in.",
    "In cupping, long steams can mute aroma while short, hot runs spike top notes—you cannot read the label without pairing with particle size.",
  ],
  "ishiusu-rpm-and-particle": [
    "Higher mill RPM raises fines but friction volatilizes aroma. The “hum” tea makers listen to is the bite between stone teeth and leaf—a kind of ear-led correction for skewed distributions.",
    "Laser diffraction often shows ideal usucha with a sub-micron peak plus a ten-micron shoulder; latte blends may suppress the shoulder for creamier mouthfeel.",
  ],
  "koicha-usucha-foam-kinin": [
    "Koicha is closer to blending than foaming; viscosity is high, so the whisk hugs the bowl bottom—over-agitation brings sediment.",
    "For usucha, tine count and stiffness set foam fineness. Hard water foams coarse; soft water foams fine but fades fast—worth logging in the tea room.",
  ],
  "chakai-ichigo-ichie-modern": [
    "Ichigo ichie names the ethics of unrepeatable time; contemporary gatherings also ask how visuals ease a guest’s first tension. Silk and glass on one mat is less about orthodoxy than where the eye can rest.",
    "Deep green against a clear rim slows the breath before phones do—but cold glass can steal heat from the tea, so season and water temperature need a plan.",
  ],
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) {
    const t = await getTranslations({ locale, namespace: "Article" })
    return { title: t("notFoundTitle") }
  }
  const d = articleDisplay(article, locale)
  return {
    title: d.title,
    description: d.excerpt,
  }
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("Article")

  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const d = articleDisplay(article, locale)
  const bodyJa = bodyParagraphsJa[slug]
  const bodyEn = bodyParagraphsEn[slug]
  const paragraphs =
    locale === "en"
      ? (bodyEn ?? [d.excerpt, t("draftNote")])
      : (bodyJa ?? [d.excerpt, t("draftNote")])

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <FadeIn>
        <Link
          href="/journal"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {t("back")}
        </Link>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Badge variant="secondary">{d.category}</Badge>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <ClockIcon className="size-4" aria-hidden />
            {article.readMinutes} {t("readUnit")} · {article.publishedAt}
          </span>
        </div>
        <h1 className="font-heading mt-6 text-3xl font-medium leading-snug text-foreground sm:text-4xl">
          {d.title}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          {d.excerpt}
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
