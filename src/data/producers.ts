export type Producer = {
  id: string
  name: string
  nameEn: string
  region: string
  regionEn: string
  elevationM: string
  elevationMEn: string
  heroTagline: string
  heroTaglineEn: string
  soil: string
  soilEn: string
  cultivars: string[]
  processNotes: string
  processNotesEn: string
  curatorNote: string
  curatorNoteEn: string
}

/** 抹茶（碾茶）生産者 — 将来 JSON / CMS へ */
export const producers: Producer[] = [
  {
    id: "okubo-uji",
    name: "大久保碾茶工房",
    nameEn: "Okubo Tencha Workshop",
    region: "京都府宇治田原町 · 南山城台地",
    regionEn: "Ujitawara, Kyoto · Nanzan plateau",
    elevationM: "約180〜240m",
    elevationMEn: "ca. 180–240 m",
    heroTagline: "石臼の音で挽き上げる「宇治の緑」",
    heroTaglineEn: "Uji green, coaxed on the stone mill",
    soil:
      "花崗岩風化の砂質壌土が混じる赤土系。排水は良好で、春の根活動が早い。窒素肥料の施用タイミングを厳密に管理し、覆下前の徒長を抑えてテアニン蓄積のピークを狙う。",
    soilEn:
      "Sandy red soil with weathered granite; good drainage and early spring root flush. Nitrogen timing is strict to curb vigor before covering and hit theanine peaks.",
    cultivars: ["さみどり", "おくみどり", "うじひかり"],
    processNotes:
      "蒸しは「芯まで通すが葉色を殺さない」温度帯に固定。冷却後、熱風乾燥と遠赤外の二段で葉の含水率を均一化してから貯蔵。碾茶は自社石臼のみで、外注に出すロットと香気の違いを毎年比較している。",
    processNotesEn:
      "Steaming holds a band that penetrates the leaf without killing color. After cooling, hot-air plus IR drying evens moisture before storage. Tencha is milled in-house only; they benchmark outsourced lots every year.",
    curatorNote:
      "同じさみどりでも、大久保さんの碾茶は「香りの立ち上がりが静かで、口に含んだあとに一気に広がる」タイプ。石臼の回転を上げすぎず、粒子に角が残る設定に見えるが、薄茶ではその微細な角が泡の持続と一体になる。目利きとしては、濃茶で試すと粘度と旨味のバランスが如実に出る。",
    curatorNoteEn:
      "Even with the same Samidori, Okubo’s tencha rises quietly then blooms in the mouth. The mill isn’t overspun—particles keep a slight edge that pairs with usucha foam. In koicha, viscosity and umami line up clearly.",
  },
  {
    id: "aichi-nishio",
    name: "西尾碾茶倶楽部",
    nameEn: "Nishio Tencha Club",
    region: "愛知県西尾市 · 平地型の大規模覆下",
    regionEn: "Nishio, Aichi · large flat-field covering",
    elevationM: "海抜 20〜45m",
    elevationMEn: "20–45 m a.s.l.",
    heroTagline: "西尾の「花のような碾茶」を、機械と手で整える",
    heroTaglineEn: "Nishio’s floral tencha, tuned by machine and hand",
    soil:
      "沖積層の肥沃な黒ボク土。保水性が高く、春先の乾燥ストレスが少ないため、覆下後の葉は厚みを増しやすい。マグネシウムとカリウムのバランスが香気の「芯」に影響すると現場では語られる。",
    soilEn:
      "Fertile alluvial black soil; high water retention means little early-spring drought stress, so post-cover leaves thicken easily. Field talk ties aroma “core” to Mg/K balance.",
    cultivars: ["ごこう", "さえみどり", "つゆひかり"],
    processNotes:
      "大型の自動覆下装置で遮光率を時間帯ごとに変え、陰影のグラデーションを人工的に再現。蒸しは短時間高温で青臭さを切り、直後に急速冷却。碾茶は気流式と石臼のブレンド比率を銘柄ごとに変える。",
    processNotesEn:
      "Automated covers shift blackout by time of day to mimic shadow gradients. Short, hot steam cuts grassiness, then rapid chill. Mill blends air-classifier and stone ratios per label.",
    curatorNote:
      "西尾のごこうは、若手のバリスタ向け抹茶ラテでもよく使われるが、倶楽部のロットは「ラテにすると香りが負けない」点が際立つ。牛乳の脂肪が強いと抹茶の個性が潰れがちだが、ここは微粉の表面積と油分の相性がよく、飲み干した後に煎茶香が戻ってくる。",
    curatorNoteEn:
      "Nishio Gokō shows up in barista matcha lattes, but this club’s lots stand out for aroma that survives milk. Fat often masks matcha, yet fines and fat play well here—roasted tea notes return after the last sip.",
  },
]

export type ProducerDisplay = {
  id: string
  name: string
  region: string
  elevationM: string
  heroTagline: string
  soil: string
  cultivars: string[]
  processNotes: string
  curatorNote: string
}

export function producerDisplay(p: Producer, locale: string): ProducerDisplay {
  if (locale === "en") {
    return {
      id: p.id,
      name: p.nameEn,
      region: p.regionEn,
      elevationM: p.elevationMEn,
      heroTagline: p.heroTaglineEn,
      soil: p.soilEn,
      cultivars: p.cultivars,
      processNotes: p.processNotesEn,
      curatorNote: p.curatorNoteEn,
    }
  }
  return {
    id: p.id,
    name: p.name,
    region: p.region,
    elevationM: p.elevationM,
    heroTagline: p.heroTagline,
    soil: p.soil,
    cultivars: p.cultivars,
    processNotes: p.processNotes,
    curatorNote: p.curatorNote,
  }
}

export function getProducerById(id: string): Producer | undefined {
  return producers.find((p) => p.id === id)
}
