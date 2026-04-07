import type { Metadata } from "next"
import Link from "next/link"

import { FadeIn } from "@/components/motion/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "お茶図鑑",
  description: "品種、蒸し具合、火入れ、標高。ワインノートのように茶を読み解く図鑑（準備中）。",
}

export default function TeaLibraryPlaceholderPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-32">
      <FadeIn>
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
          Tea Library
        </p>
        <h1 className="font-heading mt-4 text-4xl font-medium text-foreground">
          お茶図鑑
        </h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          品種ごとの葉形とアミノ酸傾向、蒸しの秒数と葉底の色、火入れの温度帯と香気の移ろい——テイスティングノート形式で整理した図鑑を現在制作中です。データ層は将来 CMS へ差し替え可能な構造で実装予定です。
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "mt-10 inline-flex rounded-full"
          )}
        >
          トップへ戻る
        </Link>
      </FadeIn>
    </div>
  )
}
