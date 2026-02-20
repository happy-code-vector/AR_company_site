'use client'

import { motion } from 'framer-motion'

export interface AppStoreCTAProps {
  title?: string
  subtitle?: string
  iosLink?: string
}

export default function AppStoreCTA({
  title = "Download Our Apps",
  subtitle = "Available now on the App Store. Start your journey today.",
  iosLink = "#"
}: AppStoreCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-accent-pink/10 to-accent-blue/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/20 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* App icon grid */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center shadow-lg">
              <span className="text-3xl">🧠</span>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-pink to-accent-blue flex items-center justify-center shadow-lg">
              <span className="text-3xl">💕</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-light-200 mb-10">
            {subtitle}
          </p>

          {/* App Store Button */}
          <a
            href={iosLink}
            className="inline-flex items-center gap-3 bg-white text-dark-950 px-8 py-4 rounded-xl font-semibold hover:bg-light-100 transition-colors"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-70">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </a>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-light-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Free to download
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              No ads
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Privacy focused
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
