'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export interface CTAProps {
  title?: string
  subtitle?: string
  primaryCta?: { text: string; href: string }
}

export default function CTA({
  title = "Ready to Start Your Project?",
  subtitle = "Let's discuss how we can help bring your ideas to life.",
  primaryCta = { text: "Get in Touch", href: "/contact" }
}: CTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 via-accent-pink/20 to-accent-blue/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-purple/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-light-200 mb-10">
            {subtitle}
          </p>
          <Link href={primaryCta.href}>
            <Button variant="gradient" size="lg">
              {primaryCta.text}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
