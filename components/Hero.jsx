'use client'

import Link from 'next/link'

  const benefits = [
    { 
      iconDefault: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      iconHover: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 12 10 17 20 7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    label: 'Fast setup',
    description: 'Get started in minutes',
    },
    { 
      iconDefault: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      iconHover: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    label: 'Secure',
    description: 'NextAuth ready',
    },
    { 
      iconDefault: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      iconHover: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 3v18h18" />
        <path d="m18 7-5 5-4-4-5 5" />
        </svg>
      ),
    label: 'Scalable',
    description: 'Grows with your business',
    },
    { 
      iconDefault: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
        </svg>
      ),
      iconHover: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 6v6M23 12h-6m-6 0H1" />
        </svg>
      ),
    label: 'Customizable',
    description: 'Tailor every section',
    },
    { 
      iconDefault: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
      iconHover: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    label: 'Payments ready',
    description: 'Stripe hooks included',
    },
    { 
      iconDefault: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      iconHover: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M12 11v6" strokeLinecap="round" />
        <path d="M9 14h6" strokeLinecap="round" />
        </svg>
      ),
    label: 'User management',
    description: 'Sessions & teams',
    },
  ]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fdfefe] px-4 pt-52 pb-32 text-slate-900">
      <div className="pointer-events-none absolute inset-0 opacity-65">
        <div className="absolute top-[-80px] left-1/2 h-[600px] w-[960px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(191,219,254,0.78),transparent_70%)]"></div>
        <div className="absolute top-[200px] right-[6%] h-[220px] w-[260px] bg-[radial-gradient(circle,rgba(191,219,254,0.3),transparent_65%)]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-6xl text-center">
        <h1 className="text-[3.2rem] font-bold leading-tight tracking-tight md:text-[5.4rem]">
            Build Your Business
            <br />
          <span className="text-slate-900">Faster</span>
          </h1>
        <p className="mx-auto mt-7 mb-8 max-w-3xl text-lg text-slate-600 md:text-xl">
          The complete SaaS boilerplate template. Perfect for any business idea—from coffee shops to tech startups. Everything
          you need to launch quickly.
          </p>
          
        <div className="mb-12 flex flex-col items-center justify-center gap-3">
            <Link 
            href="/auth/login"
            className="btn btn-lg border border-blue-200 bg-slate-900 px-12 py-4 font-semibold text-white shadow-[0_25px_60px_rgba(15,23,42,0.2)] transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-slate-900 hover:text-white hover:shadow-[0_35px_100px_rgba(59,130,246,0.4)]"
            >
              Get Started
            </Link>
          </div>
        </div>

      <div className="container relative z-10 mx-auto mt-26 max-w-7xl overflow-hidden pb-10">
        <div className="flex animate-slide justify-center gap-6 py-4">
          {[0, 1].map((loop) =>
            benefits.map((benefit, index) => (
              <div
                key={`${loop}-${index}`}
                className="group flex w-[18rem] min-h-[160px] flex-shrink-0 flex-col gap-4 rounded-3xl border border-transparent bg-white p-6 text-slate-900 outline outline-[3px] outline-blue-400 transition-all duration-200 hover:shadow-[0_24px_70px_rgba(59,130,246,0.3)]"
                style={{ outlineOffset: '6px' }}
              >
                <div className="relative flex h-14 w-14 items-center justify-center text-slate-900">
                  <div className="transition-opacity duration-200 group-hover:opacity-0">{benefit.iconDefault}</div>
                  <div
                    className="absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{ filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.4))' }}
                  >
                    {benefit.iconHover}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold">{benefit.label}</h3>
                <p className="text-lg text-slate-600">{benefit.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

