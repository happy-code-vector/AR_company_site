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
      <section className="py-16">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
