import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Card from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Contact - AppHubUSA',
  description: 'Get in touch for press inquiries, support, or business opportunities.',
}

export default function ContactPage() {
  return (
    <>
      <Hero
        headline="Get in Touch"
        subheadline="Have questions about our apps? Interested in partnership opportunities? We'd love to hear from you."
      />
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card variant="glass" className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-light-100 mb-3">General Inquiries</h3>
              <p className="text-light-400 mb-4">Questions about our apps or company</p>
              <a href="mailto:info@apphubusa.com" className="text-accent-purple hover:text-accent-pink transition-colors">
                info@apphubusa.com
              </a>
            </Card>

            <Card variant="glass" className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛟</span>
              </div>
              <h3 className="text-xl font-semibold text-light-100 mb-3">App Support</h3>
              <p className="text-light-400 mb-4">Need help with one of our apps?</p>
              <a href="mailto:info@apphubusa.com" className="text-accent-purple hover:text-accent-pink transition-colors">
                info@apphubusa.com
              </a>
            </Card>

            <Card variant="glass" className="text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-pink to-accent-orange flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📰</span>
              </div>
              <h3 className="text-xl font-semibold text-light-100 mb-3">Press & Media</h3>
              <p className="text-light-400 mb-4">Interview requests and media inquiries</p>
              <a href="mailto:info@apphubusa.com" className="text-accent-purple hover:text-accent-pink transition-colors">
                info@apphubusa.com
              </a>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-light-400">
              For app-specific support, please also check the FAQ section within each app.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
