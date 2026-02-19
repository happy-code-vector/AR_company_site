import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface MDXPost {
  frontmatter: any
  content: string
  slug: string
}

export async function getMDXBySlug(dir: string, slug: string): Promise<MDXPost | null> {
  try {
    const fullPath = path.join(contentDirectory, dir, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      frontmatter: data,
      content,
      slug,
    }
  } catch {
    return null
  }
}

export async function getAllMDX(dir: string): Promise<MDXPost[]> {
  const fullPath = path.join(contentDirectory, dir)
  const files = fs.readdirSync(fullPath)
  const posts = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace(/\.mdx$/, '')
      const fullPath = path.join(contentDirectory, dir, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        frontmatter: data,
        content,
        slug,
      }
    })

  return posts
}
