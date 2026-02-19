import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/10 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold gradient-text">AR</span>
              <span className="text-2xl font-bold text-light-100">Company</span>
            </Link>
            <p className="text-light-400 leading-relaxed">
              Building web and mobile applications that ship to app stores.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-light-100 mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/solutions" className="text-light-400 hover:text-light-100 transition-colors">Web Development</Link></li>
              <li><Link href="/solutions" className="text-light-400 hover:text-light-100 transition-colors">Mobile Apps</Link></li>
              <li><Link href="/solutions" className="text-light-400 hover:text-light-100 transition-colors">App Store Launch</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-light-100 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-light-400 hover:text-light-100 transition-colors">About</Link></li>
              <li><Link href="/case-studies" className="text-light-400 hover:text-light-100 transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="text-light-400 hover:text-light-100 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-light-100 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-light-400 hover:text-light-100 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-light-400 hover:text-light-100 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light-400">&copy; 2025 AR Company. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-light-400 hover:text-light-100 transition-colors">Twitter</a>
            <a href="#" className="text-light-400 hover:text-light-100 transition-colors">LinkedIn</a>
            <a href="#" className="text-light-400 hover:text-light-100 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
