import { defineConfig } from 'vitepress'

import nav from './navbarItem'
import sidebar from './sidebarItem'
import socialLinks from './socialItem'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: './dist',
  cacheDir: './cache',
  srcDir: './src',
  lastUpdated: true,
  title: "Alfatta Rezqa",
  description: "Senior Software Developer",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks,
  }
})
