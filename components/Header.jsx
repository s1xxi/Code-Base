'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/60 bg-white/95 px-8 py-6 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-2xl font-bold uppercase tracking-[0.4em] text-slate-900">
          <span>codebase</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </Link>

        <nav className="hidden items-center gap-10 text-xl font-semibold text-slate-900 md:flex">
          <a href="#product" className="transition-colors hover:text-slate-900">
            Product
          </a>
          <a href="#benefits" className="transition-colors hover:text-slate-900">
            Benefits
          </a>
          <a href="#pricing" className="transition-colors hover:text-slate-900">
            Pricing
          </a>
          <a href="#faq" className="transition-colors hover:text-slate-900">
            FAQ
          </a>
        </nav>

          <Link 
          href="/auth/login"
          className="rounded-full border border-slate-900 px-7 py-3 text-base font-semibold uppercase tracking-[0.2em] text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white"
          >
            Get Started
          </Link>
      </div>
    </header>
  )
}
