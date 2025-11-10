import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-ocean-deep via-ocean-blue to-ocean-deep py-16 px-4 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Product */}
          <div>
            <h3 className="font-black text-lg mb-6 text-seafoam">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#pricing" className="link link-hover text-white/70 hover:text-seafoam transition-colors text-base">
                  Pricing
                </a>
              </li>
              <li>
                <Link href="/auth/login" className="link link-hover text-white/70 hover:text-seafoam transition-colors text-base">
                  Log in
                </Link>
              </li>
              <li>
                <a href="#features" className="link link-hover text-white/70 hover:text-seafoam transition-colors text-base">
                  Features
                </a>
              </li>
              <li>
                <Link href="/dashboard" className="link link-hover text-white/70 hover:text-seafoam transition-colors text-base">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-black text-lg mb-6 text-seafoam">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com" className="link link-hover text-white/70 hover:text-seafoam transition-colors text-base" target="_blank" rel="noopener noreferrer">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-white/70 hover:text-seafoam transition-colors text-base">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-white/70 hover:text-seafoam transition-colors text-base">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-white/70 hover:text-seafoam transition-colors text-base">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-black text-lg mb-6 text-seafoam">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="link link-hover text-white/70 hover:text-seafoam transition-colors text-base">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-white/70 hover:text-seafoam transition-colors text-base">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-white/70 hover:text-seafoam transition-colors text-base">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-white/70 hover:text-seafoam transition-colors text-base">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-black text-lg mb-6 text-seafoam">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="link link-hover text-white/70 hover:text-seafoam transition-colors text-base">
                  About
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="link link-hover text-white/70 hover:text-seafoam transition-colors text-base" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com" className="link link-hover text-white/70 hover:text-seafoam transition-colors text-base" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-white/70 hover:text-seafoam transition-colors text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🌊</div>
            <span className="font-black text-xl text-seafoam">SaaS Starter</span>
          </div>
          
          <p className="text-white/60 text-center text-base">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>

          <div className="flex gap-3">
            <a 
              href="https://twitter.com" 
              className="btn btn-circle btn-sm bg-white/10 border-none hover:bg-seafoam hover:scale-110 transition-all duration-300" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://github.com" 
              className="btn btn-circle btn-sm bg-white/10 border-none hover:bg-seafoam hover:scale-110 transition-all duration-300" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              className="btn btn-circle btn-sm bg-white/10 border-none hover:bg-seafoam hover:scale-110 transition-all duration-300" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
