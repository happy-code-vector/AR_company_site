'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Implement form submission
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-gradient-to-r from-accent-green to-accent-cyan rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">✓</span>
        </div>
        <h3 className="text-2xl font-semibold mb-2 gradient-text">Thank you!</h3>
        <p className="text-light-400">We&apos;ll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-light-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-accent-purple focus:border-transparent text-light-100 placeholder-light-400 transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-light-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-accent-purple focus:border-transparent text-light-100 placeholder-light-400 transition-all"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-light-300 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-accent-purple focus:border-transparent text-light-100 placeholder-light-400 transition-all"
            placeholder="Your company"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-light-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-accent-purple focus:border-transparent text-light-100 placeholder-light-400 transition-all resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <Button type="submit" variant="gradient" size="lg" className="w-full">
          Send Message
        </Button>
      </div>
    </form>
  )
}
