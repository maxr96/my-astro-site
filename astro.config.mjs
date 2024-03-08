import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import icon from "astro-icon";

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://my-astro-site-flame.vercel.app/',
  integrations: [mdx(), sitemap(), tailwind(), robotsTxt(), icon()],
  prefetch: true
})
