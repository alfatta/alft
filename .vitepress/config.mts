import { type HeadConfig, defineConfig } from 'vitepress'

import nav from './navbarItem'
import sidebar from './sidebarItem'
import socialLinks from './socialItem'
import footer from './footerItem'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // project directory
  outDir: './dist',
  cacheDir: './cache',
  srcDir: './src',

  // feature toggle
  lastUpdated: true,

  // seo
  head: [
    ['link', { rel: "icon", href: "/img/profile-circle.webp", type: "image/webp" }],
  ],

  // theme config
  title: "Alfatta Rezqa",
  description: "Senior Software Developer",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks,
    footer,
  },
  transformHead: ({ pageData }) => {
    const { title, description } = pageData.frontmatter
    const head: HeadConfig[] = []
    if (title) {
      head.push(['meta', { property: 'og:title', content: title }])
      head.push(['meta', { property: 'twitter:title', content: title }])
      head.push(['meta', { property: "twitter:card", content: "summary_large_image" }])
      head.push(['meta', { property: "twitter:site", content: "@alfattarezqa" }])
      head.push(['meta', { property: "twitter:creator", content: "@alfattarezqa" }])
    }
    if (description) {
      head.push(['meta', { property: 'og:description', content: description }])
      head.push(['meta', { property: 'twitter:description', content: description }])
    }
    return head
  },
})
