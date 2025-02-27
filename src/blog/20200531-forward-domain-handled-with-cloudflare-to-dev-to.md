---
title: "Forward domain handled with cloudflare to DEV.TO"
description: "Learn how to forward your domain handled with Cloudflare to dev.to. Step-by-step guide to seamless domain forwarding for your website."
prev:
  text: "How I setup my pc for programming use"
  link: /blog/20200528-how-i-setup-my-pc-for-programming-use
next: 
  text: "Vue.js: Ref vs Reactive and Which One Should I Use?"
  link: /blog/20240702-vuejs-ref-vs-reactive-and-which-one-should-i-use
image: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?fit=crop&w=800&h=418
---

![Forward domain handled with cloudflare to DEV.TO](https://images.unsplash.com/photo-1544197150-b99a580bb7a8?fit=crop&w=800&h=418)

# Forward domain handled with cloudflare to DEV.TO

Back to the day, i have my own personal site includes blog system built with jekyll. I host it with github pages and it's really awesome to use it. If i need to post, i just go to my code editor and type it in markdown format and commit and push it and it will automatically live (wow... some green github contribution).

After a few years, I decide to revamp it using VuePress (VueJs based static site generator) and host it in netlify with its CI/CD with github. I really love develop it. But then, i realize that i make more development in UI rather than posting some article.

Then I decide to use DEV.TO to post my article. So now I need to point my domain to my DEV.TO pages. I planned to setup my DEV.to pages as my subpath and keep my personal site alive. Here I want to share how I setup it.

So, in this case i've my domain setup pointing to Netlify.

![DNS Management](/img/20200531-dns-management-for-alfattarezqa-com.png)

Navigate to Page Rules page. Then create a new page rule.

Insert url you want to set. On the setting, you can pick Forwarding URL, set your forwarding status, and your destination url. In destination url, i fill with my DEV.TO pages.

![Page Redirection](/img/20200531-page-redirection.png)

And it will take a moment to live. After that my blog path is redirected to my DEV.TO pages and root domain still point to my site.
