import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { LeafIcon } from "lucide-react"

import { ceo } from "@/data/ceo"
import { mainNav } from "@/data/navigation"

export async function SiteFooter() {
  const t = await getTranslations("Footer")
  const tNav = await getTranslations("nav")
  const tBrand = await getTranslations("Brand")

  return (
    <footer className="border-t border-border/80 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <div className="flex items-center gap-2 font-heading text-lg text-foreground">
              <LeafIcon className="size-5 text-primary" aria-hidden />
              <span className="font-heading">{tBrand("name")}</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("description")}
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground/90">
              {t("ceoLine", { name: ceo.nameJa, kana: ceo.nameKana })}
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3" aria-label="Footer">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {tNav(`${item.id}.label`)}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {t("copyright")}
        </p>
      </div>
    </footer>
  )
}
