import type { Metadata } from "next"
import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"
import {
  LeafIcon,
  MapPinIcon,
  CogIcon,
  PaletteIcon,
} from "lucide-react"

import { matchaCatalog } from "@/data/matcha-catalog"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/motion/fade-in"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "TheMatcha" })
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  }
}

export default async function TheMatchaPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("TheMatcha")

  return (
    <div className="bg-background">
      <div className="border-b border-border/70 bg-gradient-to-b from-emerald-950/10 via-emerald-950/[0.04] to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
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
          <FadeIn className="mt-10" delay={0.08}>
            <div className="relative aspect-[2.1/1] max-h-[min(48vh,400px)] w-full overflow-hidden rounded-2xl border border-primary/20 shadow-md ring-1 ring-primary/10">
              <Image
                src="/images/tea-varieties-collage.png"
                alt={t("heroImageAlt")}
                fill
                sizes="(min-width: 1024px) 72rem, 100vw"
                className="object-cover object-[50%_35%]"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeInStagger className="grid gap-8 lg:grid-cols-2">
          {matchaCatalog.map((m) => (
            <FadeInItem key={m.id}>
              <Card className="h-full overflow-hidden border-border/80 bg-card/95 shadow-sm transition-shadow hover:border-primary/25 hover:shadow-md">
                <CardHeader className="gap-2 border-b border-border/60 bg-gradient-to-r from-primary/[0.06] to-transparent pb-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <CardTitle className="font-heading text-xl sm:text-2xl">
                        {locale === "en" ? m.nameEn : m.nameJa}
                      </CardTitle>
                      <CardDescription className="mt-1 text-xs tracking-wide">
                        {locale === "en" ? m.nameJa : m.nameEn}
                      </CardDescription>
                    </div>
                    <Badge className="shrink-0 border-primary/30 bg-primary/10 font-normal text-primary">
                      {t("badge")}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-6 pt-6">
                  <dl className="grid gap-4 text-sm">
                    <div className="flex gap-3">
                      <MapPinIcon
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {t("origin")}
                        </dt>
                        <dd className="mt-1 leading-relaxed text-foreground">
                          {m.origin}
                        </dd>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <LeafIcon
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {t("cultivar")}
                        </dt>
                        <dd className="mt-1 leading-relaxed text-foreground">
                          {m.cultivar}
                        </dd>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CogIcon
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {t("milling")}
                        </dt>
                        <dd className="mt-1 leading-relaxed text-foreground">
                          {m.milling}
                        </dd>
                      </div>
                    </div>
                  </dl>

                  <Separator />

                  <div className="space-y-4 text-sm leading-relaxed">
                    <div>
                      <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary">
                        <PaletteIcon className="size-3.5" aria-hidden />
                        {t("color")}
                      </p>
                      <p className="mt-2 text-foreground/95">{m.color}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {t("aroma")}
                      </p>
                      <p className="mt-2">{m.aroma}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {t("palate")}
                      </p>
                      <p className="mt-2">{m.palate}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {t("finish")}
                      </p>
                      <p className="mt-2">{m.finish}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </div>
  )
}
