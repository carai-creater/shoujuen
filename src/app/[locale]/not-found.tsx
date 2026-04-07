import { getLocale, getTranslations, setRequestLocale } from "next-intl/server"

import { Link } from "@/i18n/navigation"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/motion/fade-in"

export default async function NotFound() {
  const locale = await getLocale()
  setRequestLocale(locale)
  const t = await getTranslations("NotFound")

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col justify-center px-4 py-24 text-center sm:px-6">
      <FadeIn>
        <p className="font-heading text-6xl font-medium text-primary/80">404</p>
        <h1 className="font-heading mt-4 text-2xl text-foreground">{t("title")}</h1>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {t("description")}
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "mt-8 inline-flex rounded-full"
          )}
        >
          {t("back")}
        </Link>
      </FadeIn>
    </div>
  )
}
