import { Metadata } from 'next'
import { getMDXBySlug } from '@/lib/mdx'
import Hero from '@/components/sections/Hero'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Case Studies - AR Company',
  description: 'See how we\'ve helped businesses launch successful web and mobile applications.',
}

export default async function CaseStudiesPage() {
  const data = await getMDXBySlug('case-studies', 'case-studies')

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
            <div className="space-y-12">
              {data.frontmatter.studies.map((study: any, index: number) => (
                <Card key={index} variant="bordered" className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge color="primary">{study.industry}</Badge>
                        <Badge color="secondary">{study.platform}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                      <p className="text-neutral-500 mb-4">Client: {study.client}</p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2">The Challenge</h4>
                          <p className="text-neutral-600">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2">Our Solution</h4>
                          <p className="text-neutral-600">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary-50 rounded-lg p-6">
                      <h4 className="font-semibold text-neutral-900 mb-4">Results</h4>
                      <ul className="space-y-3">
                        {study.results.map((result: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-success mr-2 mt-1">✓</span>
                            <span className="text-neutral-700">{result}</span>
                          </li>
                        ))}
                      </ul>
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
