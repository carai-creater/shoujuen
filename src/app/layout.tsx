import type { ReactNode } from "react"

import "./globals.css"

/** Root pass-through — `<html>` lives in `[locale]/layout.tsx` (next-intl) */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
