"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowDownIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FloatingOrbs } from "@/components/motion/floating-orbs"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -40])

  const titleLines = ["抹茶だけが、", "日本茶ではない。"]

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[min(92vh,880px)] items-end overflow-hidden bg-stone-900"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 22, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/tea-varieties-collage.png"
            alt="煎茶の乾茶、焙じ茶、玄米茶、急須から注がれる緑の水色、抽出後の葉のコラージュ"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_32%]"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-900/55 to-stone-900/25"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.12),_transparent_55%)]"
          aria-hidden
        />
      </motion.div>

      <FloatingOrbs />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-32 sm:px-6 sm:pb-28"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <p className="mb-4 max-w-xl text-xs font-medium uppercase tracking-[0.45em] text-emerald-100/90">
          Sencha · Hōjicha · Genmaicha — Leaves & terroir
        </p>
        <motion.h1
          className="font-heading max-w-3xl text-4xl font-medium leading-[1.15] tracking-wide text-white drop-shadow-sm sm:text-5xl md:text-6xl"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.14, delayChildren: 0.35 },
            },
          }}
        >
          {titleLines.map((line) => (
            <motion.span
              key={line}
              className="block overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <span className="block">{line}</span>
            </motion.span>
          ))}
        </motion.h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-200/95 sm:text-lg">
          澄んだ黄緑の煎茶、琥珀の焙じ、玄米の香ばしさ。葉と茎の日本茶には、蒸しと火入れが刻む物語があります。松樹園は、
          <strong className="font-medium text-white">
            抹茶以外
          </strong>
          のカップを、水色と香気の言葉で綴ります。
        </p>
        <p className="mt-4 max-w-xl text-[0.7rem] leading-relaxed text-stone-400/95 sm:text-xs">
          ※当サイトは抹茶（碾茶）の記事・図鑑項目は扱いません。
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/farms"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-primary px-7 text-primary-foreground shadow-lg shadow-emerald-950/40 no-underline"
            )}
          >
            FARMS · 農家を見る
          </Link>
          <Link
            href="/the-leaves"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 no-underline"
            )}
          >
            THE LEAVES 図鑑
          </Link>
        </div>
        <motion.div
          className="mt-16 flex items-center gap-2 text-xs text-stone-300/90"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDownIcon className="size-4" aria-hidden />
          <span className="tracking-widest">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
