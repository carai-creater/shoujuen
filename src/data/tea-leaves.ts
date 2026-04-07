/**
 * THE LEAVES — 抹茶を除く代表クラスのスペック（モック）。
 * テイスティングノート風の項目で、将来は CMS 化しやすい形で保持。
 */
export type TeaLeafSpec = {
  id: string
  nameJa: string
  nameEn: string
  style: string
  cultivar: string
  steaming: string
  firing: string
  elevation: string
  suishoku: string
  aroma: string
  palate: string
  finish: string
}

export const teaLeaves: TeaLeafSpec[] = [
  {
    id: "asamushi-sencha",
    nameJa: "浅蒸し煎茶",
    nameEn: "Light-steamed sencha",
    style: "煎茶（荒揉み〜中揉み）",
    cultivar: "やぶきた / おくみどり",
    steaming: "蒸し 20〜40 秒台 · 葉肉の歯触りが残る",
    firing: "仕上げ乾燥〜補火は軽め。香気の揮発を抑えすぎない",
    elevation: "標高 200〜450m 台の斜面圃場が多い",
    suishoku: "淡い黄緑〜鮮やかな金緑。透明度が高く、濁りは少ない",
    aroma: "青葉、白い花、わずかに海藻的なニュアンス",
    palate: "アミノ酸の滑らかさと、カテキンの収斂が輪郭として同居",
    finish: "喉先は軽く、渋みは線で消えるタイプが多い",
  },
  {
    id: "fukamushi-sencha",
    nameJa: "深蒸し煎茶",
    nameEn: "Deep-steamed sencha",
    style: "煎茶（細揉み〜丸揉み）",
    cultivar: "やぶきた主体、地域でさえみどり系",
    steaming: "蒸し 60〜120 秒超 · 葉の細片化を前提とする",
    firing: "乾燥温度管理で青臭さを抑え、旨味の厚みを担保",
    elevation: "平地〜丘陵。霧と粘性土の組み合わせが多い",
    suishoku: "濃い若草〜やや白濁。光の透過で粒子が見えることも",
    aroma: "蒸し野菜、煮た豆、熟した葉の甘み",
    palate: "溶出が早く、旨味と渋みが同時に立ち上がる",
    finish: "口全体に旨味が広がり、渋みは面で残る傾向",
  },
  {
    id: "kukicha",
    nameJa: "茎茶（雁がね）",
    nameEn: "Stem tea (kukicha)",
    style: "煎茶製程から分離した茎・中梗",
    cultivar: "親茶の品種に準拠。テアニン蓄積が課題",
    steaming: "親茶と同工程だが、揉捻で茎が選別される",
    firing: "茎の繊維特性に合わせ、火入れで香ばしさを補助",
    elevation: "親茶の産地に依存",
    suishoku: "淡く透明感のある黄緑。煎茶より明るいことが多い",
    aroma: "新鮮な茎、スイートピー、清涼感",
    palate: "テアニンの甘みが前面、渋みは穏やか",
    finish: "軽やかで、後口に金属的な硬さが少ない",
  },
  {
    id: "hojicha",
    nameJa: "焙じ茶（葉）",
    nameEn: "Roasted green tea (hōjicha)",
    style: "煎茶または番茶原料を焙煎",
    cultivar: "品種より焙煎機と温度曲線が主役",
    steaming: "原料の蒸しは親工程に準拠",
    firing: "焙煎 180〜220℃ 帯でピラジン類を生成。過剰は煙臭へ",
    elevation: "原料産地に依存",
    suishoku: "琥珀〜赤褐色。煎茶の緑とは別物の色空間",
    aroma: "炒り米、ナッツ、キャラメル、軽いスモーク",
    palate: "カフェインは相対的に低めとされるが、濃度で変動",
    finish: "渋みより焙煎香が残り、胃当たりの軽さを好む飲み手も",
  },
  {
    id: "genmaicha",
    nameJa: "玄米茶",
    nameEn: "Genmaicha",
    style: "煎茶 + 炒り玄米のブレンド",
    cultivar: "茶葉は中蒸し〜深蒸しが多用される",
    steaming: "茶葉側は煎茶工程。玄米は別ラインで炒り",
    firing: "玄米のメイラードと、茶の乾燥火入れは独立して評価",
    elevation: "茶葉の産地に準拠",
    suishoku: "黄緑に炒り米の茶褐色が混ざる。温かい麦色のイメージ",
    aroma: "ポップコーン、焙じ麦、煎茶の青みが下支え",
    palate: "米由来の甘香と茶の渋みのバランスが設計の核心",
    finish: "米の香ばしさが後味を支配しやすい",
  },
]
