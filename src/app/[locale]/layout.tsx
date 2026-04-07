import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Geist_Mono, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { routing } from "@/i18n/routing"

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

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Metadata" })
  const tLayout = await getTranslations({ locale, namespace: "LocaleLayout" })

  return {
    title: {
      default: tLayout("title"),
      template: "%s | " + (locale === "ja" ? "松樹園" : "Shoujuen"),
    },
    description: t("description"),
    openGraph: {
      title: locale === "ja" ? "松樹園 Tea Journal" : "Shoujuen Tea Journal",
      description:
        locale === "ja"
          ? "抹茶の碾茶・茶道・文化。濃緑の一杯とともに読み解く独立メディア。"
          : "Tencha, tea ceremony, culture—an independent matcha journal.",
      locale: locale === "ja" ? "ja_JP" : "en_US",
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${notoSans.variable} ${notoSerif.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
