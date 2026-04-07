"use client"

import { useTranslations } from "next-intl"

import { Link, usePathname } from "@/i18n/navigation"
import { mainNav } from "@/data/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/layout/language-switcher"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

export function SiteHeader() {
  const pathname = usePathname()
  const tNav = useTranslations("nav")
  const tBrand = useTranslations("Brand")

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex flex-col gap-0 leading-none">
          <span className="font-heading text-lg tracking-wide text-foreground transition-colors group-hover:text-primary">
            {tBrand("name")}
          </span>
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-muted-foreground">
            {tBrand("subtitle")}
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <nav className="flex items-center gap-1" aria-label="Main">
            {mainNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {tNav(`${item.id}.label`)}
                </Link>
              )
            })}
          </nav>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <MenuIcon className="size-5" />
                </Button>
              }
            />
            <SheetContent side="right" className="gap-6">
              <SheetHeader>
                <SheetTitle className="font-heading text-left">
                  {tBrand("name")}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1" aria-label="Mobile main">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-3 text-base text-foreground hover:bg-muted"
                  >
                    <span className="block font-medium">
                      {tNav(`${item.id}.label`)}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      {tNav(`${item.id}.description`)}
                    </span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
