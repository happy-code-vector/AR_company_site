'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export interface HeroProps {
  headline: string
  subheadline: string
  primaryCta?: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  stats?: { value: string; label: string }[]
}

export default function Hero({ headline, subheadline, primaryCta, secondaryCta, stats }: HeroProps) {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-purple/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-pink/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">{headline}</span>
          </h1>
          <p className="text-xl md:text-2xl text-light-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {subheadline}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-xl font-semibold transition-all px-8 py-4 text-lg bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue text-white hover:opacity-90 shadow-lg shadow-accent-purple/30"
              >
                {primaryCta.text}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-xl font-semibold transition-all px-8 py-4 text-lg border-2 border-white/20 text-light-100 hover:bg-white/10"
              >
                {secondaryCta.text}
              </Link>
            )}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        {stats && stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-light-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
