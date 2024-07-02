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
    const { title, description, image } = pageData.frontmatter
    const head: HeadConfig[] = []
    if (title) {
      head.push(['meta', { property: 'og:title', content: title }])
      head.push(['meta', { property: 'twitter:title', content: title }])
      head.push(['meta', { property: "twitter:card", content: "summary_large_image" }])
      head.push(['meta', { property: "twitter:site", content: "@alfattarezqa" }])
      head.push(['meta', { property: "twitter:creator", content: "@alfattarezqa" }])
      head.push(['meta', { property: 'og:image:alt', content: title }])
      head.push(['meta', { property: 'twitter:image:alt', content: title }])
    }
    if (description) {
      head.push(['meta', { property: 'og:description', content: description }])
      head.push(['meta', { property: 'twitter:description', content: description }])
    }
    if (image) {
      head.push(['meta', { property: 'og:image', content: image }])
      head.push(['meta', { property: 'twitter:image', content: image }])
    } else {
      head.push(['meta', { property: 'og:image', content: 'https://alft.dev/img/og.png' }])
      head.push(['meta', { property: 'twitter:image', content: 'https://alft.dev/img/og.png' }])
    }

    return head
  },
})
