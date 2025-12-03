import Link from 'next/link'

export default function Footer() {
  const partners = [
    'Fundamental Labs',
    'KUCOIN',
    'NGC',
    'NxGen',
    'Matter Labs',
    'DEXTOOLS',
    'NGRAVE'
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 py-16 px-4 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto max-w-6xl">
        {/* Partners Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 dark:text-gray-400 text-base font-medium">
              Backed by the best companies and visionary angels.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="text-gray-400 dark:text-gray-500 text-base font-medium hover:text-black dark:hover:text-white transition-colors"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Product */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-black">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#product" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-base">
                  Product
                </a>
              </li>
              <li>
                <Link href="/auth/login" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-base">
                  Log in
                </Link>
              </li>
              <li>
                <a href="#benefits" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-base">
                  Benefits
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-black dark:text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#developers" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-base">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-base">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-base">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-black dark:text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-base">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-base">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-base">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-black dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-base">
                  About
                </a>
              </li>
              <li>
                <a href="#join" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-base">
                  Join us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-6 text-center text-gray-400 dark:text-gray-500 text-base">
          <p>© {new Date().getFullYear()} codebase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
