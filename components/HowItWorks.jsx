const steps = [
  {
    id: '01',
    title: 'Drop in your brand',
    copy: 'Fonts, palette, hero copy—everything mirrors the homepage so you only edit text.',
    icon: '🎨',
  },
  {
    id: '02',
    title: 'Toggle premium modules',
    copy: 'Stripe, auth, dashboards, analytics, and newsletters wire up instantly.',
    icon: '⚙️',
  },
  {
    id: '03',
    title: 'Ship confidently',
    copy: 'Preview every state, QA flows, and publish in the same afternoon.',
    icon: '🚀',
  },
]

export default function HowItWorks() {
  return (
    <section id="product" className="relative overflow-hidden bg-[#fdfefe] px-4 py-24 text-slate-900">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute top-[-60px] left-1/2 h-[540px] w-[860px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(191,219,254,0.75),transparent_70%)]"></div>
        <div className="absolute bottom-[-40px] right-[10%] h-[260px] w-[360px] bg-[radial-gradient(circle,rgba(191,219,254,0.35),transparent_70%)]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-6xl space-y-16">
        <div className="text-center">
          <p className="text-base font-semibold uppercase tracking-[0.5em] text-slate-600">Product</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">How it works</h2>
          </div>

        <div className="relative grid grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center">
              <div className="flex w-full flex-col items-center justify-center rounded-[36px] border border-blue-100 bg-white px-10 py-16 text-center text-slate-900 shadow-[0_20px_60px_rgba(59,130,246,0.12)]">
                <p className="text-5xl font-bold text-slate-900">{step.id}</p>
            </div>
              {index < steps.length - 1 && (
                <div className="absolute left-full top-1/2 flex h-[2px] w-8 -translate-y-1/2 items-center justify-center">
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
                  <span className="px-2 text-3xl text-blue-400">➜</span>
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
            </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
