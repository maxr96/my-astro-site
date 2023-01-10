export type PostType = {
  slug?: string
  title: string
  pubDate: string
  coverImage: CoverImageType
  excerpt: string
  content: string
  tags: string
}

export type CoverImageType = {
  src: string
  width: string
  height: string
}
