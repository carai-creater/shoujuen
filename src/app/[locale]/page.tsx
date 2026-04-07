import { setRequestLocale } from "next-intl/server"
import { getTranslations } from "next-intl/server"

import { CeoSection } from "@/components/home/ceo-section"
import { HeroSection } from "@/components/home/hero-section"
import { LatestArticles } from "@/components/home/latest-articles"
import { ProducersPreview } from "@/components/home/producers-preview"
import { FadeIn } from "@/components/motion/fade-in"

type Props = { params: Promise<{ locale: string }> }

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("HomeClosing")

  return (
    <>
      <HeroSection />
      <LatestArticles />
      <ProducersPreview />
      <CeoSection />
      <section className="relative overflow-hidden border-t border-border/60 bg-background py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
          aria-hidden
        />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <FadeIn y={20}>
            <p className="font-heading text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
              {t("line")}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("body")}
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
