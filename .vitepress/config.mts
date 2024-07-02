import { type HeadConfig, defineConfig } from 'vitepress'

import nav from './navbarItem'
import sidebar from './sidebarItem'
import socialLinks from './socialItem'
import footer from './footerItem'

const baseHead: HeadConfig[] = [
  ['link', { rel: "icon", href: "/img/profile-circle.webp", type: "image/webp" }],
]

if (process.env.UMAMI_ID) baseHead.push(['script', { defer: "true", src: "https://cloud.umami.is/script.js", "data-website-id": process.env.UMAMI_ID }])
if (process.env.GOOGLE_ID) baseHead.push(['meta', { name: "google-site-verification", content: process.env.GOOGLE_ID }],)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // project directory
  outDir: './dist',
  cacheDir: './cache',
  srcDir: './src',

  // feature toggle
  lastUpdated: true,

  // seo
  head: baseHead,
  sitemap: {
    hostname: 'https://alft.dev',
  },

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
      head.push(['meta', { name: 'og:title', content: title }])
      head.push(['meta', { name: 'twitter:title', content: title }])
      head.push(['meta', { name: "twitter:card", content: "summary_large_image" }])
      head.push(['meta', { name: "twitter:site", content: "@alfattarezqa" }])
      head.push(['meta', { name: "twitter:creator", content: "@alfattarezqa" }])
    }
    if (description) {
      head.push(['meta', { name: 'og:description', content: description }])
      head.push(['meta', { name: 'twitter:description', content: description }])
    }
    return head
  },
})
