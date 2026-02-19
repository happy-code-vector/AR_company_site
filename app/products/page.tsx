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
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.frontmatter.products.map((product: any, index: number) => (
                <Card key={index} variant="elevated" className="flex flex-col">
                  <div className="text-5xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{product.title}</h3>
                  <p className="text-neutral-600 mb-4 flex-grow">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-center text-sm text-neutral-600">
                        <span className="text-primary-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-200">
                    <span className="text-lg font-semibold text-primary-600">{product.price}</span>
                    <Button size="sm">Learn More</Button>
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
