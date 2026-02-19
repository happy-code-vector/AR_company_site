'use client'

import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'

const expertiseData = {
  title: "Our Expertise",
  subtitle: "Flexible engagement models tailored to your needs",
  models: [
    {
      title: "Project-Based",
      subtitle: "End-to-end development",
      description: "We take full responsibility for delivering your project from concept to launch. Perfect for businesses that want a complete solution without managing the development process.",
      benefits: [
        "Access to specialized expertise",
        "Established development teams",
        "Flexibility to scale resources",
        "Lower management overhead",
        "Fixed timeline and budget"
      ]
    },
    {
      title: "Team Augmentation",
      subtitle: "Extend your capabilities",
      description: "Add skilled developers to your existing team. Ideal for companies that need additional expertise while maintaining full control over project management and direction.",
      benefits: [
        "Full control over the team",
        "Clear communication",
        "Access to top talent",
        "Seamless integration",
        "Cost-effective scaling"
      ]
    }
  ]
}

export default function Expertise() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{expertiseData.title}</span>
          </h2>
          <p className="text-xl text-light-300">{expertiseData.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {expertiseData.models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="glass" className="h-full group">
                <div className="mb-6">
                  <span className="text-accent-purple text-sm font-medium">{model.subtitle}</span>
                  <h3 className="text-2xl font-bold text-light-100 mt-1">{model.title}</h3>
                </div>
                <p className="text-light-300 mb-6 leading-relaxed">{model.description}</p>
                <ul className="space-y-3">
                  {model.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-light-200">
                      <span className="w-2 h-2 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
