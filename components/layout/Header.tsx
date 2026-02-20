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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="AR Company" className="h-10 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/about', label: 'About' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-light-300 hover:text-light-100 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-pink group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button variant="gradient" size="sm">
                Talk to Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
