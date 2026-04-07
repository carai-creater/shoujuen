import type { Metadata } from "next"
import Link from "next/link"

import { FadeIn } from "@/components/motion/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "淹れ方",
  description: "湯温、茶葉量、抽出時間を視覚的に解説するガイド（準備中）。",
}

export default function BrewingPlaceholderPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-32">
      <FadeIn>
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
          Brewing Guide
        </p>
        <h1 className="font-heading mt-4 text-4xl font-medium text-foreground">
          淹れ方
        </h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          急須の容量と茶葉量の比率、注ぎの高さと酸化、待ち時間ごとの溶出曲線を、グラフィカルにまとめたガイドを準備しています。深蒸し・浅蒸し・玉露それぞれの「湯の落ち」を比較できるUIを想定しています。
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
