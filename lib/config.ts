import { SiteConfig } from './types'

// 由于无法直接导入MD文件，我们使用一个默认配置
export const defaultConfig: SiteConfig = {
  defaultGame: "merge-rot",
  siteName: "Merge Rot",
  seo: {
    title: "Merge Rot - Viral Merge Game with Brainrot Energy | Play Now!",
    description: "Experience Merge Rot, the wildly chaotic and brain-melting merge game that breaks the mold of boring mechanics. Drop items into a cup and watch them evolve into increasingly bizarre and hilarious forms!",
    ogImage: "/images/hot_game/merge-rot.png",
    keywords: "Merge Rot, merge game, brainrot game, viral game, physics-based game, puzzle game, online game, browser game"
  },
  advertisement: {
    key: ""
  },
  gameSettings: {
    randomGamesCount: 20
  },
  siteInfo: {
    companyName: "Merge Rot",
    siteUrl: "https://www.merge-rot.net",
    email: "HarryC199101@gmail.com"
  },
  footer: {
    columns: [],
    copyright: "© 2025 All rights reserved.",
    disclaimer: "This is an independent website."
  }
}

// 获取随机游戏数量配置
export function getRandomGamesCount(): number {
  return defaultConfig.gameSettings?.randomGamesCount || 20
}

// 获取站点配置
export function getSiteConfig(): SiteConfig {
  return defaultConfig
}

export default defaultConfig 