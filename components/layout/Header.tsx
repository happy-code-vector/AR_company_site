'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            AR Company
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/solutions" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Solutions
            </Link>
            <Link href="/products" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Products
            </Link>
            <Link href="/case-studies" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Case Studies
            </Link>
            <Link href="/pricing" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-neutral-700 hover:text-primary-600 transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
