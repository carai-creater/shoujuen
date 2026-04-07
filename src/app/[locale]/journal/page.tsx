import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { BookOpenIcon, ClockIcon } from "lucide-react"

import { Link } from "@/i18n/navigation"
import { articles, articleDisplay } from "@/data/articles"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/motion/fade-in"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "JournalPage" })
  return {
    title: t("title"),
    description: t("lead"),
  }
}

export default async function JournalPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("JournalPage")

  return (
    <div className="bg-background">
      <div className="relative border-b border-border/70 bg-muted/25">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,_rgba(22,90,55,0.06),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.45em] text-primary">
              {t("eyebrow")}
            </p>
            <h1 className="font-heading mt-4 text-4xl font-medium tracking-wide text-foreground sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("lead")}
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeIn className="mb-10 flex items-center gap-2 text-sm text-muted-foreground">
          <BookOpenIcon className="size-4 text-primary" aria-hidden />
          <span>{t("count", { count: articles.length })}</span>
        </FadeIn>

        <FadeInStagger className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => {
            const d = articleDisplay(article, locale)
            return (
              <FadeInItem key={article.slug}>
                <Card className="group h-full border-border/80 bg-card/90 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                  <CardHeader className="gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="font-normal">
                        {d.category}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <ClockIcon className="size-3.5" aria-hidden />
                        {article.readMinutes} {t("readUnit")} ·{" "}
                        {article.publishedAt}
                      </span>
                    </div>
                    <CardTitle className="font-heading text-xl leading-snug sm:text-2xl">
                      <Link
                        href={`/journal/${article.slug}`}
                        className="text-foreground no-underline transition-colors group-hover:text-primary"
                      >
                        {d.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-[0.95rem] leading-relaxed">
                      {d.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={`/journal/${article.slug}`}
                      className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {t("readMore")}
                    </Link>
                  </CardContent>
                </Card>
              </FadeInItem>
            )
          })}
        </FadeInStagger>
      </div>
    </div>
  )
}
