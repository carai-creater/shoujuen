"use client"

import { useLocale, useTranslations } from "next-intl"
import { LanguagesIcon } from "lucide-react"

import { usePathname, useRouter } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations("LanguageSwitcher")

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-lg border border-border/60 bg-muted/40 p-0.5",
        className
      )}
      role="group"
      aria-label={t("label")}
    >
      <LanguagesIcon
        className="ml-1 size-3.5 shrink-0 text-muted-foreground"
        aria-hidden
      />
      {routing.locales.map((loc) => (
        <Button
          key={loc}
          variant="ghost"
          size="sm"
          className={cn(
            "h-7 rounded-md px-2.5 text-xs",
            locale === loc
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
          onClick={() => {
            if (loc !== locale) {
              router.replace(pathname, { locale: loc })
            }
          }}
          type="button"
        >
          {loc === "ja" ? t("ja") : t("en")}
        </Button>
      ))}
    </div>
  )
}
