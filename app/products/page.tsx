import { Metadata } from 'next'
import { getMDXBySlug } from '@/lib/mdx'
import Hero from '@/components/sections/Hero'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Products - AR Company',
  description: 'Ready-to-use software products and solutions for your business.',
}

export default async function ProductsPage() {
  const data = await getMDXBySlug('products', 'products')

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.frontmatter.products.map((product: any, index: number) => (
                <Card key={index} variant="glass" className="flex flex-col group">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-light-100">{product.title}</h3>
                  <p className="text-light-400 mb-6 flex-grow leading-relaxed">{product.description}</p>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-center text-sm text-light-300">
                        <span className="text-accent-purple mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                    <span className="text-2xl font-bold gradient-text">{product.price}</span>
                    <Button variant="gradient" size="sm">Learn More</Button>
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
