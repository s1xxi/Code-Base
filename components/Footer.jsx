import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#e0f2fe] py-12 px-4 border-t border-black/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Product */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-black">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#pricing" className="text-black/60 hover:text-black transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <Link href="/auth/login" className="text-black/60 hover:text-black transition-colors text-sm">
                  Log in
                </Link>
              </li>
              <li>
                <a href="#features" className="text-black/60 hover:text-black transition-colors text-sm">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-black">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black/60 hover:text-black transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-black/60 hover:text-black transition-colors text-sm">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-black/60 hover:text-black transition-colors text-sm">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-black">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black/60 hover:text-black transition-colors text-sm">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-black/60 hover:text-black transition-colors text-sm">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-black/60 hover:text-black transition-colors text-sm">
                  Refunds
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-black">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-black/60 hover:text-black transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-black/60 hover:text-black transition-colors text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-black/60 hover:text-black transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/5 pt-6 text-center text-black/40 text-xs">
          <p>© {new Date().getFullYear()} SaaS Starter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
