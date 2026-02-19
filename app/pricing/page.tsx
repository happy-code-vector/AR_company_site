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
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              {pricingData.title}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600">
              {pricingData.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingData.tiers.map((tier, index) => (
              <Card
                key={index}
                variant={tier.highlighted ? 'elevated' : 'bordered'}
                className={`relative flex flex-col ${tier.highlighted ? 'ring-2 ring-primary-600 scale-105' : ''}`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-neutral-900">${tier.price}</span>
                    {tier.period && (
                      <span className="text-neutral-500 ml-2">{tier.period}</span>
                    )}
                  </div>
                  <p className="text-neutral-600">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-0.5">✓</span>
                      <span className="text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button
                    variant={tier.highlighted ? 'primary' : 'outline'}
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
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {pricingData.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-neutral-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-medium text-neutral-900">{faq.question}</span>
                  <span className="text-primary-600 text-xl">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-neutral-600">{faq.answer}</p>
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
