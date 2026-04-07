export type SocialId = "note" | "x" | "instagram" | "youtube"

export type SocialLink = {
  id: SocialId
  /** 空文字の項目はフッターに表示しません */
  href: string
}

const raw: SocialLink[] = [
  /** note 記事・マガジン — 公開URLに差し替えてください */
  { id: "note", href: "https://note.com/shoujuen" },
  { id: "x", href: "" },
  { id: "instagram", href: "" },
  { id: "youtube", href: "" },
]

export const socialLinks: SocialLink[] = raw.filter((l) => l.href.length > 0)
