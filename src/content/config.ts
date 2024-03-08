import { z, defineCollection } from 'astro:content'

const posts = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string().min(10).max(60),
    excerpt: z.string().min(60).max(300),
    coverImage: z.object({
      src: image(),
      width: z.number(),
      height: z.number()
    }),
    pubDate: z.date(),
    tags: z.array(z.string())
  })
})

export const collections = { posts }
