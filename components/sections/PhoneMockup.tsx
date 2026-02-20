'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export interface PhoneMockupProps {
  title: string
  subtitle: string
  phoneImage?: string
  stats?: { value: string; label: string }[]
}

export default function PhoneMockup({ title, subtitle, phoneImage, stats }: PhoneMockupProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-pink/15 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="gradient-text">{title}</span>
            </h2>
            <p className="text-xl text-light-300 mb-8 leading-relaxed">
              {subtitle}
            </p>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="glass rounded-xl p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-light-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-[280px] md:w-[320px] aspect-[9/19] bg-dark-800 rounded-[3rem] border-4 border-dark-600 shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-dark-900 rounded-b-2xl" />
                {/* Screen */}
                <div className="absolute inset-3 top-8 bg-dark-950 rounded-[2rem] overflow-hidden">
                  {phoneImage ? (
                    <Image
                      src={phoneImage}
                      alt="App screenshot"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-accent-purple/30 via-accent-pink/20 to-accent-blue/30 flex items-center justify-center">
                      <span className="text-6xl">📱</span>
                    </div>
                  )}
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-purple/20 via-accent-pink/20 to-accent-blue/20 rounded-[4rem] blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
