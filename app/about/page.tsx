import { Metadata } from 'next'
import { getMDXBySlug } from '@/lib/mdx'
import Hero from '@/components/sections/Hero'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

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
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 via-accent-pink/20 to-accent-blue/20" />
          <div className="container relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.frontmatter.stats.map((stat: any, index: number) => (
                <div key={index} className="glass rounded-2xl p-6 text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-light-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Story */}
      {data && (
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="gradient-text">Our Story</span>
              </h2>
              <p className="text-xl text-light-300 mb-10 leading-relaxed">
                {data.frontmatter.story}
              </p>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">Our Mission</h3>
                <p className="text-light-300 text-lg leading-relaxed">{data.frontmatter.mission}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Values */}
      {data && (
        <section className="py-24 relative">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="gradient-text">Our Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.frontmatter.values.map((value: any, index: number) => (
                <Card key={index} variant="glass" className="text-center group">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-light-100">{value.title}</h3>
                  <p className="text-light-400">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team */}
      {data && (
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
          <div className="container relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="gradient-text">Meet the Team</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.frontmatter.team.map((member: any, index: number) => (
                <Card key={index} variant="glass" className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent-purple to-accent-pink rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map((n: string) => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-light-100">{member.name}</h3>
                  <p className="text-accent-purple mb-3">{member.role}</p>
                  <p className="text-light-400 text-sm">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/30 via-accent-pink/30 to-accent-blue/30" />
        <div className="container relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-light-300 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help bring your app idea to life.
            </p>
            <Button variant="gradient" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
