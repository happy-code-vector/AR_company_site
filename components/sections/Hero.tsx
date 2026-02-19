'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export interface HeroProps {
  headline: string
  subheadline: string
  primaryCta?: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
}

export default function Hero({ headline, subheadline, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-8">
            {subheadline}
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-lg font-medium transition-all px-6 py-3 text-lg bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
              >
                {primaryCta.text}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-lg font-medium transition-all px-6 py-3 text-lg border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
              >
                {secondaryCta.text}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
