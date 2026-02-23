import { Metadata } from 'next'
import { getMDXBySlug } from '@/lib/mdx'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About - AppHubUSA',
  description: 'Meet the founder and learn about AppHubUSA.',
}

export default async function AboutPage() {
  const data = await getMDXBySlug('about', 'about')

  return (
    <>
      {/* Hero with Owner */}
      {data && (
        <section className="py-24 md:py-32 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-pink/20 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              {/* Owner Info */}
              <span className="text-accent-purple text-sm font-medium uppercase tracking-wider">About</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4">
                <span className="gradient-text">{data.frontmatter.owner.name}</span>
              </h1>
              <p className="text-xl text-accent-pink mb-6">{data.frontmatter.owner.title}</p>
              <p className="text-lg text-light-300 leading-relaxed mb-8">
                {data.frontmatter.owner.bio}
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <a href={`mailto:${data.frontmatter.owner.email}`} className="flex items-center gap-3 text-light-200 hover:text-light-100 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center group-hover:bg-accent-purple/20 transition-colors">
                    <span>📧</span>
                  </div>
                  <span>{data.frontmatter.owner.email}</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href={data.frontmatter.owner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <span className="text-xl">in</span>
                </a>
                <a
                  href={data.frontmatter.owner.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <span className="text-xl">𝕏</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Studio Info */}
      {data && (
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-accent-pink/10 to-accent-blue/10" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="gradient-text">About Our Studio</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-3">📅</div>
                  <div className="text-light-400 text-sm mb-1">Founded</div>
                  <div className="text-xl font-semibold text-light-100">{data.frontmatter.company.founded}</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-3">📍</div>
                  <div className="text-light-400 text-sm mb-1">Location</div>
                  <div className="text-xl font-semibold text-light-100">{data.frontmatter.company.location}</div>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-3">📱</div>
                  <div className="text-light-400 text-sm mb-1">Focus</div>
                  <div className="text-xl font-semibold text-light-100">iOS Development</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Company Story */}
      {data && (
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="gradient-text">Our Story</span>
              </h2>
              <p className="text-xl text-light-300 mb-10 leading-relaxed">
                {data.frontmatter.company.story}
              </p>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">Our Mission</h3>
                <p className="text-light-300 text-lg leading-relaxed">{data.frontmatter.company.mission}</p>
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

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/30 via-accent-pink/30 to-accent-blue/30" />
        <div className="container relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-light-200 mb-10 max-w-2xl mx-auto">
              Have questions about our apps or company? We&apos;d love to hear from you.
            </p>
            <Link href="/contact">
              <Button variant="gradient" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
