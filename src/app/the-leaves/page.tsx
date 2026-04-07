import type { Metadata } from "next"
import Image from "next/image"
import { LeafIcon, MountainIcon, Flame, Droplets } from "lucide-react"

import { teaLeaves } from "@/data/tea-leaves"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/motion/fade-in"

export const metadata: Metadata = {
  title: "THE LEAVES · 茶葉図鑑",
  description:
    "煎茶・茎茶・焙じ・玄米茶。品種、蒸し、火入れ、標高、水色のノートをテイスティング形式で。",
}

export default function TheLeavesPage() {
  return (
    <div className="bg-background">
      <div className="border-b border-border/70 bg-gradient-to-b from-emerald-950/[0.06] to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.45em] text-primary">
              The Leaves
            </p>
            <h1 className="font-heading mt-4 text-4xl font-medium tracking-wide text-foreground sm:text-5xl">
              茶葉図鑑
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              抹茶（碾茶）の項目は置いていません。煎茶の澄んだ黄緑、焙じの琥珀、玄米茶の麦の香ばしさ——
              <strong className="font-medium text-foreground">
                葉と茎の日本茶
              </strong>
              のスペクトルを、ワインのテイスティングノートのように整理した参照表です。
            </p>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted-foreground">
              ※掲載クラスは抹茶を含みません。
            </p>
          </FadeIn>
          <FadeIn className="mt-10" delay={0.08}>
            <div className="relative aspect-[2.1/1] max-h-[min(48vh,400px)] w-full overflow-hidden rounded-2xl border border-border/70 shadow-md">
              <Image
                src="/images/tea-varieties-collage.png"
                alt="煎茶・焙じ・玄米茶の乾茶と、急須で淹れた澄んだ水色のコラージュ"
                fill
                sizes="(min-width: 1024px) 72rem, 100vw"
                className="object-cover object-[50%_35%]"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <FadeInStagger className="grid gap-8 lg:grid-cols-2">
          {teaLeaves.map((tea) => (
            <FadeInItem key={tea.id}>
              <Card className="h-full overflow-hidden border-border/80 bg-card/95 shadow-sm transition-shadow hover:shadow-md">
                <CardHeader className="gap-2 border-b border-border/60 bg-muted/20 pb-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <CardTitle className="font-heading text-xl sm:text-2xl">
                        {tea.nameJa}
                      </CardTitle>
                      <CardDescription className="mt-1 text-xs tracking-wide">
                        {tea.nameEn}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="shrink-0 font-normal">
                      {tea.style}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-6 pt-6">
                  <dl className="grid gap-4 text-sm">
                    <div className="flex gap-3">
                      <LeafIcon
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          品種 / 原料
                        </dt>
                        <dd className="mt-1 leading-relaxed text-foreground">
                          {tea.cultivar}
                        </dd>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Droplets
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          蒸し
                        </dt>
                        <dd className="mt-1 leading-relaxed text-foreground">
                          {tea.steaming}
                        </dd>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Flame
                        className="mt-0.5 size-4 shrink-0 text-amber-700/90"
                        aria-hidden
                      />
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          火入れ / 焙煎
                        </dt>
                        <dd className="mt-1 leading-relaxed text-foreground">
                          {tea.firing}
                        </dd>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <MountainIcon
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          標高 / 立地
                        </dt>
                        <dd className="mt-1 leading-relaxed text-foreground">
                          {tea.elevation}
                        </dd>
                      </div>
                    </div>
                  </dl>

                  <Separator />

                  <div className="space-y-4 text-sm leading-relaxed">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-primary">
                        水色（すいしょく）
                      </p>
                      <p className="mt-2 text-foreground/95">{tea.suishoku}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        香気
                      </p>
                      <p className="mt-2">{tea.aroma}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        味わい
                      </p>
                      <p className="mt-2">{tea.palate}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        余韻
                      </p>
                      <p className="mt-2">{tea.finish}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </div>
  )
}
