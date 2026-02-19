import { Metadata } from 'next'
import { getMDXBySlug } from '@/lib/mdx'
import Hero from '@/components/sections/Hero'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'About - AR Company',
  description: 'Learn about our mission, values, and the team behind AR Company.',
}

export default async function AboutPage() {
  const data = await getMDXBySlug('about', 'about')

  return (
    <>
      {data && (
        <Hero
          headline={data.frontmatter.title}
          subheadline={data.frontmatter.subtitle}
        />
      )}

      {/* Stats */}
      {data && (
        <section className="py-12 bg-primary-600">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {data.frontmatter.stats.map((stat: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Story */}
      {data && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <p className="text-lg text-neutral-600 mb-6">
                {data.frontmatter.story}
              </p>
              <div className="bg-primary-50 rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-neutral-700">{data.frontmatter.mission}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Values */}
      {data && (
        <section className="py-16 bg-neutral-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.frontmatter.values.map((value: any, index: number) => (
                <Card key={index} variant="elevated" className="text-center">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-neutral-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team */}
      {data && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.frontmatter.team.map((member: any, index: number) => (
                <Card key={index} variant="bordered" className="text-center">
                  <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-600">
                      {member.name.split(' ').map((n: string) => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary-600 mb-2">{member.role}</p>
                  <p className="text-neutral-600 text-sm">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help bring your app idea to life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg font-medium transition-all px-6 py-3 text-lg bg-primary-600 text-white hover:bg-primary-700"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
