import { Metadata } from 'next'
import { getMDXBySlug } from '@/lib/mdx'
import Hero from '@/components/sections/Hero'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Portfolio - AR Company',
  description: 'Explore our portfolio of web and mobile applications built for clients across various industries.',
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
                  {/* Product Image */}
                  <div className="relative h-48 bg-gradient-to-br from-dark-700 to-dark-800 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 via-accent-pink/10 to-accent-blue/20" />
                    {/* Mock image placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center">
                        <span className="text-4xl">
                          {product.category === 'Mobile App' ? '📱' :
                           product.category === 'Web Application' ? '🌐' :
                           product.category === 'SaaS Platform' ? '☁️' :
                           product.category === 'Desktop Application' ? '💻' :
                           product.category === 'Web & Mobile' ? '🚀' : '📦'}
                        </span>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">View Project →</span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <Badge color="purple" className="mb-3">{product.category}</Badge>
                    <h3 className="text-xl font-semibold text-light-100 mb-2 group-hover:text-accent-purple transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-light-400 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.technologies.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-dark-700 text-light-300"
                        >
                          {tech}
                        </span>
                      ))}
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
