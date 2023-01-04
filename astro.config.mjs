import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import prefetch from '@astrojs/prefetch'

// https://astro.build/config
export default defineConfig({
  site: 'https://my-astro-site-flame.vercel.app',
  integrations: [mdx(), sitemap(), tailwind(), prefetch(), robotsTxt()]
})
