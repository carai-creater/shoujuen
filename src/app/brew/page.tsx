import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { FadeIn } from "@/components/motion/fade-in"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "BREW · 淹れ方",
  description:
    "煎茶と焙じ茶の抽出メソッド。湯温、茶葉量、待ち時間を軸に、特性を引き出すためのベースライン。",
}

export default function BrewPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <FadeIn>
        <div className="relative mb-10 aspect-[2/1] w-full overflow-hidden rounded-2xl border border-border/70 shadow-sm">
          <Image
            src="/images/tea-varieties-collage.png"
            alt="急須から煎茶を注ぐ様子と、抽出後の茶葉とガラスピッチャーの水色"
            fill
            sizes="(min-width: 768px) 48rem, 100vw"
            className="object-cover object-[50%_72%]"
            priority
          />
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
          Brew
        </p>
        <h1 className="font-heading mt-4 text-4xl font-medium text-foreground">
          淹れ方
        </h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          急須の容量と茶葉量の比率、湯の温度、注ぎの高さと酸化、待ち時間ごとの溶出曲線を、グラフィカルにまとめたガイドを準備しています。
          <strong className="font-medium text-foreground">
            煎茶（深蒸し・浅蒸し）と焙じ茶（葉・茎）
          </strong>
          の二系統で、「湯の落ち」の違いを比較できる UI を想定しています。
        </p>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          ※抹茶の点茶（茶筅・茶碗の作法）および薄茶・濃茶の濃度設計は扱いません。
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
