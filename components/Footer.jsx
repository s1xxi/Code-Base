import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <nav className="grid grid-flow-col gap-4">
        <Link href="#features" className="link link-hover">Features</Link>
        <Link href="#pricing" className="link link-hover">Pricing</Link>
        <Link href="/dashboard" className="link link-hover">Dashboard</Link>
      </nav>
      <div>
        <p className="font-bold text-lg">SaaSify</p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </div>
    </footer>
  )
}

