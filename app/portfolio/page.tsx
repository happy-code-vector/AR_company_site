import { Metadata } from 'next'
import { getMDXBySlug } from '@/lib/mdx'
import Hero from '@/components/sections/Hero'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Our Apps - AR Company',
  description: 'Discover our collection of beautiful mobile apps available on the App Store.',
}

export default async function PortfolioPage() {
  const data = await getMDXBySlug('portfolio', 'portfolio')

  return (
    <>
      {data && (
        <Hero
          headline={data.frontmatter.title}
          subheadline={data.frontmatter.subtitle}
        />
      )}

      {data && (
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.frontmatter.products.map((product: any, index: number) => (
                <Card key={index} variant="glass" className="group overflow-hidden p-0">
                  {/* App Image */}
                  <div className="relative h-48 bg-gradient-to-br from-dark-700 to-dark-800 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Stats overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <div className="flex items-center gap-1 bg-dark-950/60 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-white text-sm font-medium">{product.rating}</span>
                      </div>
                      <div className="bg-dark-950/60 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-light-300 text-sm">{product.downloads}</span>
                      </div>
                    </div>
                  </div>

                  {/* App Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge color="purple">{product.category}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-light-100 mb-2 group-hover:text-accent-purple transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-light-400 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-2">
                        {product.technologies.slice(0, 2).map((tech: string, i: number) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-dark-700 text-light-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={product.link}
                        className="text-accent-purple hover:text-accent-pink transition-colors text-sm font-medium"
                      >
                        App Page →
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
