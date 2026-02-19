import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/10 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold gradient-text">AR</span>
              <span className="text-2xl font-bold text-light-100">Company</span>
            </Link>
            <p className="text-light-400 leading-relaxed max-w-md">
              Full-stack software development services. We build web and mobile applications that drive business growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-light-100 mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/portfolio" className="text-light-400 hover:text-light-100 transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="text-light-400 hover:text-light-100 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-light-400 hover:text-light-100 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-light-100 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-light-400">ahmed@arcompany.dev</li>
              <li className="text-light-400">+1 (555) 123-4567</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-light-400 hover:text-light-100 transition-colors">Twitter</a>
              <a href="#" className="text-light-400 hover:text-light-100 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light-400">&copy; 2025 AR Company. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-light-400 hover:text-light-100 transition-colors text-sm">Privacy</Link>
            <Link href="/terms" className="text-light-400 hover:text-light-100 transition-colors text-sm">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
