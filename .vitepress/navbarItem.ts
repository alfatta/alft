import { DefaultTheme } from "vitepress";

export default [
  { text: 'Home', link: '/' },
  { text: 'Blog', link: '/blog' },
  {
    text: 'About Me',
    items: [
      { text: 'About', link: '/about-me' },
      { text: 'Skills', link: '/about-me#skill' },
      { text: 'Work Experience', link: '/about-me#work-experience' },
      { text: 'Contact', link: '/about-me#contact' },
      { text: 'Hire', link: '/about-me#hire-me' },
    ]
  },
  { text: 'Weapon', link: '/weapon' },
  { text: 'Logs', link: '/logs' },
] as DefaultTheme.NavItem[]