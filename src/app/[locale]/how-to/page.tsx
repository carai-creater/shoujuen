import type { Metadata } from "next"
import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { Link } from "@/i18n/navigation"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "HowTo" })
  return {
    title: t("metaTitle"),
    description: t("lead"),
  }
}

export default async function HowToPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("HowTo")

  const thinRows = [
    { label: t("fieldTemp"), value: t("thinTempValue") },
    { label: t("fieldAmount"), value: t("thinAmountValue") },
    { label: t("fieldWhisk"), value: t("thinWhiskValue") },
    { label: t("fieldWait"), value: t("thinWaitValue") },
  ]
  const thickRows = [
    { label: t("fieldTemp"), value: t("thickTempValue") },
    { label: t("fieldAmount"), value: t("thickAmountValue") },
    { label: t("fieldWhisk"), value: t("thickWhiskValue") },
    { label: t("fieldWait"), value: t("thickWaitValue") },
  ]

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <FadeIn>
        <div className="relative mb-10 aspect-[2/1] w-full overflow-hidden rounded-2xl border border-primary/20 shadow-sm ring-1 ring-primary/10">
          <Image
            src="/images/tea-varieties-collage.png"
            alt={t("imageAlt")}
            fill
            sizes="(min-width: 768px) 48rem, 100vw"
            className="object-cover object-[50%_72%]"
            priority
          />
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
          {t("eyebrow")}
        </p>
        <h1 className="font-heading mt-4 text-4xl font-medium text-foreground">
          {t("title")}
        </h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          {t("lead")}
        </p>
      </FadeIn>

      <FadeInStagger className="mt-14 space-y-12">
        <FadeInItem>
          <section>
            <h2 className="font-heading text-2xl font-medium text-foreground">
              {t("thinTitle")}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{t("thinSubtitle")}</p>
            <Separator className="my-6" />
            <dl className="space-y-5">
              {thinRows.map((row) => (
                <div key={`thin-${row.label}`}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-primary">
                    {row.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-foreground/90">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </FadeInItem>
        <FadeInItem>
          <section>
            <h2 className="font-heading text-2xl font-medium text-foreground">
              {t("thickTitle")}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{t("thickSubtitle")}</p>
            <Separator className="my-6" />
            <dl className="space-y-5">
              {thickRows.map((row) => (
                <div key={`thick-${row.label}`}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-primary">
                    {row.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-foreground/90">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </FadeInItem>
      </FadeInStagger>

      <FadeIn className="mt-14 rounded-2xl border border-border/80 bg-muted/30 p-6 sm:p-8">
        <h2 className="font-heading text-lg font-medium text-foreground">
          {t("modernTitle")}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {t("modernBody")}
        </p>
      </FadeIn>

      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "mt-10 inline-flex rounded-full"
        )}
      >
        {t("backTop")}
      </Link>
    </div>
  )
}
