import type { Metadata } from "next"
import Link from "next/link"
import { ClockIcon } from "lucide-react"

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
  title: "読みもの",
  description: "産地レポート、製茶と科学、器と抽出。松樹園の記事一覧。",
}

export default function BlogIndexPage() {
  return (
    <div className="bg-background">
      <div className="border-b border-border/70 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
              Journal
            </p>
            <h1 className="font-heading mt-4 text-4xl font-medium text-foreground sm:text-5xl">
              読みもの
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
              季節の便りと産地レポート。茶の専門的な視点で綴る長文記事を中心に公開していきます。
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeInStagger className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <FadeInItem key={article.slug}>
              <Card className="h-full border-border/80 transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="font-normal">
                      {article.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <ClockIcon className="size-3.5" aria-hidden />
                      {article.readMinutes} 分 · {article.publishedAt}
                    </span>
                  </div>
                  <CardTitle className="font-heading text-xl">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="no-underline hover:text-primary"
                    >
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    続きを読む
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
