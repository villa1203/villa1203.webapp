import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    siteTitle: '🏡 villa1203',
    nav: [
      { text: 'anne',  link: '/anne/' },
      { text: 'jud',  link: '/jud/' },
      { text: 'nico', link: '/nico/' },
      { text: 'ressources', link: '/ressources/' },
    ]
  }
})
