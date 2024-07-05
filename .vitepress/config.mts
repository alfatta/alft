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
  cleanUrls: true,

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
    const { title, description, image, type } = pageData.frontmatter
    const head: HeadConfig[] = []

    head.push(['meta', { property: 'og:title', content: title || 'Alfatta Rezqa - Software Developer' }])
    head.push(['meta', { property: 'og:description', content: description || 'Highly motivated software developer with >6 years of experience in designing and implementing software solutions. Dedicated to build high-quality software.' }])
    head.push(['meta', { property: 'og:image', content: image || 'https://alft.dev/img/og.png' }])
    head.push(['meta', { property: 'og:image:alt', content: title || 'Alfatta Rezqa - Software Developer' }])
    head.push(['meta', { property: 'og:type', content: type || 'website' }])

    head.push(['meta', { property: 'twitter:title', content: title || 'Alfatta Rezqa - Software Developer' }])
    head.push(['meta', { property: 'twitter:description', content: description || 'Highly motivated software developer with >6 years of experience in designing and implementing software solutions. Dedicated to build high-quality software.' }])
    head.push(['meta', { property: 'twitter:image', content: image || 'https://alft.dev/img/og.png' }])
    head.push(['meta', { property: 'twitter:image:alt', content: title || 'Alfatta Rezqa - Software Developer' }])
    head.push(['meta', { property: "twitter:card", content: "summary_large_image" }])
    head.push(['meta', { property: "twitter:site", content: "@alfattarezqa" }])
    head.push(['meta', { property: "twitter:creator", content: "@alfattarezqa" }])

    return head
  },
})
