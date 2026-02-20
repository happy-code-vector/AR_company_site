'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Card from '@/components/ui/Card'

export interface Testimonial {
  quote: string
  author: string
  role: string
  app?: string
  avatar?: string
}

export interface TestimonialsProps {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
}

export default function Testimonials({ title, subtitle, testimonials }: TestimonialsProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent-purple/10 rounded-full blur-[80px]" />
      </div>

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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="glass" className="h-full">
                {/* Quote */}
                <div className="mb-6">
                  <span className="text-4xl text-accent-purple/50">&ldquo;</span>
                  <p className="text-light-200 leading-relaxed -mt-4">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {testimonial.avatar ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center text-white font-semibold">
                      {testimonial.author.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-light-100">{testimonial.author}</div>
                    <div className="text-light-400 text-sm">{testimonial.role}</div>
                    {testimonial.app && (
                      <div className="text-accent-purple text-xs mt-1">{testimonial.app}</div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
