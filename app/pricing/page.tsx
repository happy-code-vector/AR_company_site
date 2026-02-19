'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

// Static data to avoid async client component issues
const pricingData = {
  title: "Pricing",
  subtitle: "Transparent pricing for every project size",
  tiers: [
    {
      name: "Starter",
      price: "5,000",
      period: "starting at",
      description: "Perfect for small projects and MVPs",
      features: [
        "Single platform (Web or Mobile)",
        "Up to 10 screens/pages",
        "Basic UI/UX design",
        "Core functionality",
        "1 month support",
        "App store submission guidance"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "15,000",
      period: "starting at",
      description: "Ideal for growing businesses",
      features: [
        "Multi-platform (Web + Mobile)",
        "Up to 25 screens/pages",
        "Custom UI/UX design",
        "Advanced features & integrations",
        "3 months support",
        "Full app store submission",
        "Analytics setup",
        "Performance optimization"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale projects",
      features: [
        "All platforms supported",
        "Unlimited screens/pages",
        "Premium UI/UX design",
        "Complex integrations & APIs",
        "12 months support",
        "Dedicated project manager",
        "Priority support",
        "Custom SLA",
        "On-site training"
      ],
      highlighted: false
    }
  ],
  faqs: [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A Starter project typically takes 4-6 weeks, Professional projects 8-12 weeks, and Enterprise projects are scoped individually."
    },
    {
      question: "What's included in the support period?",
      answer: "Support includes bug fixes, minor updates, and technical assistance. Major feature additions are quoted separately."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we typically work with a 40/40/20 payment structure: 40% upfront, 40% at milestone, and 20% on completion."
    },
    {
      question: "Can I start with Starter and upgrade later?",
      answer: "Absolutely! Many clients start with an MVP and expand functionality as their business grows."
    }
  ]
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-purple/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-pink/30 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">{pricingData.title}</span>
            </h1>
            <p className="text-xl md:text-2xl text-light-300">
              {pricingData.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingData.tiers.map((tier, index) => (
              <Card
                key={index}
                variant={tier.highlighted ? 'gradient' : 'glass'}
                className={`relative flex flex-col ${tier.highlighted ? 'ring-2 ring-accent-purple/50 scale-105' : ''}`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-accent-purple to-accent-pink text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2 text-light-100">{tier.name}</h3>
                  <div className="mb-2">
                    <span className="text-5xl font-bold gradient-text">${tier.price}</span>
                    {tier.period && (
                      <span className="text-light-400 ml-2">{tier.period}</span>
                    )}
                  </div>
                  <p className="text-light-400">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent-purple mr-3 mt-0.5">✓</span>
                      <span className="text-light-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button
                    variant={tier.highlighted ? 'gradient' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {pricingData.faqs.map((faq, index) => (
              <div
                key={index}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium text-light-100">{faq.question}</span>
                  <span className="text-accent-purple text-xl">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-light-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
