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
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
          <div className="container relative z-10">
            <div className="space-y-12">
              {data.frontmatter.studies.map((study: any, index: number) => (
                <Card key={index} variant="glass" className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className="bg-accent-purple/20 text-accent-purple border border-accent-purple/30">
                          {study.industry}
                        </Badge>
                        <Badge className="bg-accent-blue/20 text-accent-blue border border-accent-blue/30">
                          {study.platform}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-light-100">{study.title}</h3>
                      <p className="text-light-400 mb-6">Client: {study.client}</p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-light-100 mb-2">The Challenge</h4>
                          <p className="text-light-300">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-light-100 mb-2">Our Solution</h4>
                          <p className="text-light-300">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-accent-purple/20 via-accent-pink/10 to-accent-blue/20 rounded-xl p-6">
                      <h4 className="font-semibold text-light-100 mb-4">Results</h4>
                      <ul className="space-y-3">
                        {study.results.map((result: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <span className="text-accent-green mr-3 mt-1">✓</span>
                            <span className="text-light-200">{result}</span>
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
