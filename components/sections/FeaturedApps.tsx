'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

export interface FeaturedApp {
  title: string
  description: string
  category: string
  image: string
  link: string
  features?: string[]
}

export interface FeaturedAppsProps {
  title?: string
  subtitle?: string
  apps: FeaturedApp[]
}

export default function FeaturedApps({ title, subtitle, apps }: FeaturedAppsProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      <div className="container relative z-10">
        {/* Header */}
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{title}</span>
            </h2>
            {subtitle && (
              <p className="text-xl text-light-300 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Apps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="glass" className="group overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* App Image */}
                  <div className="relative w-full md:w-48 h-48 flex-shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* App Info */}
                  <div className="flex-1 flex flex-col">
                    <Badge color="purple" className="self-start mb-2">{app.category}</Badge>
                    <h3 className="text-2xl font-semibold text-light-100 mb-2 group-hover:text-accent-purple transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-light-400 mb-4 flex-grow">
                      {app.description}
                    </p>

                    {/* Features */}
                    {app.features && app.features.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {app.features.map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-dark-700 text-light-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-end mt-auto pt-4 border-t border-white/10">
                      <a
                        href={app.link}
                        className="text-accent-purple hover:text-accent-pink transition-colors font-medium flex items-center gap-1"
                      >
                        Learn More <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-light-300 hover:text-light-100 transition-colors text-lg"
          >
            View All Apps <span className="text-accent-purple">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
