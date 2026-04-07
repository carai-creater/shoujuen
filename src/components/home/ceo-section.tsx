"use client"

import { useLocale } from "next-intl"
import { useTranslations } from "next-intl"
import { AwardIcon, SparklesIcon } from "lucide-react"

import { ceo } from "@/data/ceo"
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/motion/fade-in"

export function CeoSection() {
  const locale = useLocale()
  const t = useTranslations("Ceo")
  const isEn = locale === "en"

  return (
    <section className="relative border-t border-border/60 bg-muted/25 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(22,90,55,0.06),_transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="mb-14 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-primary">
            {t("eyebrow")}
          </p>
          <h2 className="font-heading mt-3 text-3xl font-medium tracking-wide text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {t("intro")}
          </p>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <div className="rounded-2xl border border-border/80 bg-card p-8 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-primary">
                {isEn ? ceo.titleEn : ceo.title}
              </p>
              <p className="font-heading mt-3 text-3xl font-medium text-foreground">
                {ceo.nameJa}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{ceo.nameKana}</p>
              <p className="mt-6 text-sm font-medium text-foreground/90">
                {isEn ? ceo.taglineEn : ceo.tagline}
              </p>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                {(isEn ? ceo.bioEn : ceo.bio).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="lg:col-span-7">
            <FadeIn className="mb-8 flex flex-wrap items-center gap-2">
              <SparklesIcon className="size-5 text-primary" aria-hidden />
              <h3 className="font-heading text-xl font-medium text-foreground">
                {t("legendsTitle")}
              </h3>
              <span className="text-xs text-muted-foreground">
                {t("legendsSubtitle")}
              </span>
            </FadeIn>
            <FadeInStagger className="space-y-5" stagger={0.06}>
              {ceo.legends.map((item) => (
                <FadeInItem key={item.headline}>
                  <article className="rounded-xl border border-border/70 bg-background/80 p-5 transition-colors hover:border-primary/25">
                    <div className="flex gap-3">
                      <AwardIcon
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      <div>
                        <h4 className="text-sm font-medium leading-snug text-foreground">
                          {isEn ? item.headlineEn : item.headline}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {isEn ? item.bodyEn : item.body}
                        </p>
                      </div>
                    </div>
                  </article>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </div>
    </section>
  )
}
