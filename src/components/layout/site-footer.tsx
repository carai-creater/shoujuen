import Link from "next/link"
import { LeafIcon } from "lucide-react"

import { mainNav } from "@/data/navigation"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <div className="flex items-center gap-2 font-heading text-lg text-foreground">
              <LeafIcon className="size-5 text-primary" aria-hidden />
              松樹園
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              煎茶・茎茶・焙じ・玄米茶など、葉と茎の日本茶に焦点を当てた独立メディア。産地のテロワールと蒸し・火入れの差異を、水色と香気で読み解きます。販売は行いません。
            </p>
            <p className="text-[0.7rem] leading-relaxed text-muted-foreground/90">
              ※抹茶（碾茶）の記事・商品紹介は扱いません。
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3" aria-label="フッター">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Shoujuen Tea Journal. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
