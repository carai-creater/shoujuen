import type { Metadata } from "next"
import Link from "next/link"
import { BookOpenIcon, ClockIcon } from "lucide-react"

import { articles } from "@/data/articles"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/motion/fade-in"

export const metadata: Metadata = {
  title: "COLUMN",
  description:
    "煎茶・茎茶・焙じ・玄米茶。抹茶以外の日本茶を、産地と製法の専門視点で綴るコラム。",
}

export default function ColumnPage() {
  return (
    <div className="bg-background">
      <div className="relative border-b border-border/70 bg-muted/25">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,_rgba(34,120,80,0.08),_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.45em] text-primary">
              Column
            </p>
            <h1 className="font-heading mt-4 text-4xl font-medium tracking-wide text-foreground sm:text-5xl">
              COLUMN
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              茶樹の品種、圃場の方位、蒸しの秒数、焙煎の温度勾配——
              <strong className="font-medium text-foreground">
                抹茶以外
              </strong>
              の日本茶には、杯の水色と香気に現れる「説明のしがい」があります。文献と現地試飲を往復しながら、目利きの視点で記録します。
            </p>
            <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
              ※
              <span className="text-foreground/80">
                当メディアでは抹茶（碾茶・点茶の作法）の紹介・記事は扱いません。
              </span>
              煎茶・茎茶・焙じ・玄米茶など、葉と茎の茶の多様性に焦点を当てています。
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeIn className="mb-10 flex items-center gap-2 text-sm text-muted-foreground">
          <BookOpenIcon className="size-4 text-primary" aria-hidden />
          <span>全 {articles.length} 件</span>
        </FadeIn>

        <FadeInStagger className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <FadeInItem key={article.slug}>
              <Card className="group h-full border-border/80 bg-card/90 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                <CardHeader className="gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="font-normal">
                      {article.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <ClockIcon className="size-3.5" aria-hidden />
                      {article.readMinutes} 分 · {article.publishedAt}
                    </span>
                  </div>
                  <CardTitle className="font-heading text-xl leading-snug sm:text-2xl">
                    <Link
                      href={`/column/${article.slug}`}
                      className="text-foreground no-underline transition-colors group-hover:text-primary"
                    >
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-[0.95rem] leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/column/${article.slug}`}
                    className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    本文を読む
                  </Link>
                </CardContent>
              </Card>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </div>
  )
}
