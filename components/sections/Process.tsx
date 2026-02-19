'use client'

import { motion } from 'framer-motion'

const processData = {
  title: "How We Work",
  subtitle: "A proven process that delivers results",
  steps: [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into your business needs, goals, and challenges to create a tailored solution."
    },
    {
      number: "02",
      title: "Design",
      description: "Our designers create intuitive interfaces and user experiences that engage and delight."
    },
    {
      number: "03",
      title: "Develop",
      description: "Our engineers build robust, scalable solutions using modern technologies and best practices."
    },
    {
      number: "04",
      title: "Deploy",
      description: "We launch your product and provide ongoing support to ensure continued success."
    }
  ]
}

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{processData.title}</span>
          </h2>
          <p className="text-xl text-light-300">{processData.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processData.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-6 h-full">
                <span className="text-5xl font-bold gradient-text opacity-30 group-hover:opacity-50 transition-opacity">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-light-100 mt-4 mb-2">{step.title}</h3>
                <p className="text-light-400">{step.description}</p>
              </div>
              {index < processData.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent-purple to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
