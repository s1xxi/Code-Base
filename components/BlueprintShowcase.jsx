'use client'

import { useEffect, useRef, useState } from 'react'

const cards = [
  {
    id: 'workflows',
    tag: 'Automations',
    title: 'Launch playbooks',
    description:
      'Pre-built onboarding, billing, and churn flows. Drop in your product copy later—structure already mirrors DataFast.',
    metrics: ['Time saved: 6 hrs', 'Coverage: 9 flows'],
  },
  {
    id: 'replays',
    tag: 'Insight layer',
    title: 'Live customer replays',
    description:
      'Placeholder hooks for session recording, heatmaps, and AI notes so you can wire any analytics stack without refactors.',
    metrics: ['Integrations: 5', 'Latency: <200ms'],
  },
  {
    id: 'stack',
    tag: 'Stack proof',
    title: 'Stripe + Resend ready',
    description:
      'All CTA placeholders, checkout hooks, and transactional email routes already wired—swap to your keys when you’re set.',
    metrics: ['Payments ready', 'Emails templated'],
  },
]

const rotatingWords = ['polish', 'customize', 'create']

export default function BlueprintShowcase() {
  const [visible, setVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(cards[0].id)
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => {
        const currentIndex = cards.findIndex((card) => card.id === prev)
        return cards[(currentIndex + 1) % cards.length].id
      })
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const currentWord = rotatingWords[wordIndex]
    let timeout

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 1000)
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % rotatingWords.length)
      }, 200)
    } else {
      timeout = setTimeout(() => {
        const nextText = !isDeleting
          ? currentWord.slice(0, displayText.length + 1)
          : currentWord.slice(0, displayText.length - 1)
        setDisplayText(nextText)
      }, isDeleting ? 60 : 120)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#010615] px-4 py-32 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="blueprint-rain relative mb-16 text-center md:mb-20">
          <div className="inline-flex animate-[titleBounce_3s_ease-in-out_infinite] items-center justify-center rounded-full border border-white/30 px-14 py-4 text-base font-semibold uppercase tracking-[0.45em] text-white shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
            Codebase blueprints
          </div>
          <h2 className="mt-8 text-4xl font-semibold leading-tight drop-shadow-[0_20px_45px_rgba(59,130,246,0.45)] md:text-6xl">
            Ship with <span className="text-blue-300">MediaFast</span>{' '}
            <span className="text-blue-100">{displayText}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80">
            These placeholders mirror Marc Lou flows—swap in your product language whenever you're ready without rebuilding
            the interactions.
          </p>
        </div>

        <div className="mt-16 overflow-visible">
          <div className="flex snap-x snap-mandatory gap-16 overflow-x-auto pb-12 md:justify-center md:overflow-visible">
            {cards.map((card, index) => {
              const delay = index * 120
              const isActive = activeCard === card.id
              return (
                <div
                  key={card.id}
                  style={{ transitionDelay: `${delay}ms` }}
                  className={`relative flex w-[360px] flex-shrink-0 snap-center rounded-[38px] border border-white/12 bg-gradient-to-br from-[#090c16] via-[#040406] to-[#050507] p-10 text-white shadow-[0_35px_130px_rgba(0,0,0,0.7)] transition-all duration-500 ${
                    visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                  } ${isActive ? 'border-blue-400 shadow-[0_45px_170px_rgba(37,99,235,0.6)]' : ''}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-[38px] border border-blue-400/20 opacity-0 transition-all duration-500 ${
                      isActive ? 'opacity-100 border-blue-500/60' : ''
                    }`}
                  >
                    <div className="absolute inset-[10%] rounded-[34px] bg-[radial-gradient(circle,rgba(37,99,235,0.6),transparent_70%)] blur-3xl"></div>
                  </div>
                  <div className="relative">
                    <p className="text-base font-semibold uppercase tracking-[0.45em] text-white/70 text-center">{card.tag}</p>
                    <h3 className="mt-6 text-5xl font-semibold">{card.title}</h3>
                    <p className="mt-6 text-xl text-white/85">{card.description}</p>
                    <div className="mt-8 space-y-4 text-left text-lg font-semibold text-white">
                      {card.metrics.map((metric) => (
                        <div key={metric} className="flex items-center gap-3 text-white text-lg">
                          <span className="h-3 w-3 rounded-full bg-white"></span>
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
