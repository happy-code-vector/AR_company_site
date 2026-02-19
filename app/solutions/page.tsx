import { Metadata } from 'next'
import { getMDXBySlug } from '@/lib/mdx'
import Hero from '@/components/sections/Hero'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Solutions - AR Company',
  description: 'Our end-to-end app development services from discovery to app store launch.',
}

export default async function SolutionsPage() {
  const data = await getMDXBySlug('solutions', 'services')

  return (
    <>
      {data && (
        <Hero
          headline={data.frontmatter.title}
          subheadline="End-to-end app development services"
        />
      )}

      {data && (
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.frontmatter.services.map((service: any, index: number) => (
                <Card key={index} variant="elevated">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-neutral-600">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
