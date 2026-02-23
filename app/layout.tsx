import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'AppHubUSA - Mobile Apps That Make Life Better',
  description: 'We create beautiful mobile apps that help people learn, connect, and live better. Download QuizliAI and Coupl from the App Store.',
  keywords: ['mobile apps', 'iOS apps', 'App Store', 'QuizliAI', 'Coupl', 'study app', 'relationship app'],
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
