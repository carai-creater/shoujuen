import type { Metadata } from "next"
import { Geist_Mono, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

import "./globals.css"

const notoSans = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

const notoSerif = Noto_Serif_JP({
  variable: "--font-heading-jp",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "松樹園 | 日本茶のテロワールと水色を綴るメディア",
    template: "%s | 松樹園",
  },
  description:
    "産地の土壌、品種、蒸しと火入れ。杯に映る水色とともに日本茶の専門的な記録をお届けします。",
  openGraph: {
    title: "松樹園 Tea Journal",
    description:
      "産地のテロワールと製法の差異を、静かに読み解く独立メディア。",
    locale: "ja_JP",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSans.variable} ${notoSerif.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
