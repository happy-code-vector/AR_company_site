import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">AR Company</h3>
            <p className="text-neutral-400">
              Building web and mobile applications that ship to app stores.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/solutions" className="text-neutral-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/solutions" className="text-neutral-400 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link href="/solutions" className="text-neutral-400 hover:text-white transition-colors">App Store Launch</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/careers" className="text-neutral-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; 2025 AR Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
