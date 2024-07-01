import { defineConfig } from 'vitepress'

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

  // theme config
  title: "Alfatta Rezqa",
  description: "Senior Software Developer",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks,
    footer,
  }
})
