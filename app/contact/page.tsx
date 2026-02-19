import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - AR Company',
  description: 'Get in touch to discuss your project. We respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <>
      <Hero
        headline="Let's Build Something Great"
        subheadline="Tell us about your project and we'll get back to you within 24 hours."
      />
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="glass rounded-2xl p-8 md:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
