import { Metadata } from 'next'
import { getMDXBySlug } from '@/lib/mdx'
import Hero from '@/components/sections/Hero'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Services - AR Company',
  description: 'Full-stack software development services including UI/UX design, web development, mobile apps, and cloud solutions.',
}

export default async function SolutionsPage() {
  const data = await getMDXBySlug('solutions', 'services')

  return (
    <>
      {data && (
        <Hero
          headline={data.frontmatter.title}
          subheadline={data.frontmatter.subtitle || "Full-stack software development services tailored to your business needs"}
        />
      )}

      {data && (
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.frontmatter.services.map((service: any, index: number) => (
                <Card key={index} variant="glass" className="group">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-light-100">{service.title}</h3>
                  <p className="text-light-400 leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
