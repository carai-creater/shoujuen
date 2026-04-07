import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { ExternalLinkIcon, LeafIcon } from "lucide-react"

import { ceo } from "@/data/ceo"
import { mainNav } from "@/data/navigation"
import type { SocialId } from "@/data/social"
import { socialLinks } from "@/data/social"

function socialLabel(id: SocialId, t: Awaited<ReturnType<typeof getTranslations>>) {
  switch (id) {
    case "note":
      return t("social.note")
    case "x":
      return t("social.x")
    case "instagram":
      return t("social.instagram")
    case "youtube":
      return t("social.youtube")
    default:
      return id
  }
}

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
            {socialLinks.length > 0 ? (
              <div className="pt-2">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {t("social.heading")}
                </p>
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                  {socialLinks.map((link) => {
                    const label = socialLabel(link.id, t)
                    return (
                      <li key={link.id}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                          aria-label={t("social.openExternal", { site: label })}
                        >
                          <ExternalLinkIcon
                            className="size-3.5 shrink-0 opacity-80"
                            aria-hidden
                          />
                          {label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : null}
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
