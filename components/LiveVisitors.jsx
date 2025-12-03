'use client'

import { useState } from 'react'

const mapDots = [
  { id: 'nyc', coords: { x: 62, y: 38 } },
  { id: 'ldn', coords: { x: 48, y: 28 } },
  { id: 'blr', coords: { x: 72, y: 55 } },
  { id: 'syd', coords: { x: 86, y: 70 } },
  { id: 'sfo', coords: { x: 20, y: 42 } },
]

const reviews = [
  { id: 1, name: 'Ava — NYC', rating: '4.9', quote: '“Swapped their pricing section in 20 minutes and launched the same day.”' },
  { id: 2, name: 'Devin — LA', rating: '5.0', quote: '“Stripe hooks worked out of the box. No rewiring, no fire drills.”' },
  { id: 3, name: 'Mara — Paris', rating: '4.8', quote: '“Finally a template that isn’t cookie cutter. The details are already done.”' },
]

export default function LiveVisitors() {
  const [activeDot, setActiveDot] = useState(mapDots[0].id)

  return (
    <section className="bg-[#05070d] px-4 py-20 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-white/50">Live map</p>
        <h2 className="mt-3 text-4xl font-semibold">See who’s shipping right now</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Hover over the dots to spot teams lighting up the globe. Every ping matches a real-time ShipFast blueprint launch.
        </p>
        </div>

      <div className="mx-auto mt-12 max-w-5xl rounded-[32px] border border-white/10 bg-gradient-to-br from-[#06080f] to-[#050609] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
        <div className="relative aspect-[4/2.1] w-full overflow-hidden rounded-3xl border border-white/5 bg-[#07080f]">
          <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/BlankMap-World-v2.png/1024px-BlankMap-World-v2.png')] bg-cover bg-center opacity-[0.08]"></div>
          <div className="relative h-full w-full">
            {mapDots.map((point) => {
              const isActive = activeDot === point.id
                return (
                  <div
                  key={point.id}
                    className="absolute"
                  style={{ top: `${point.coords.y}%`, left: `${point.coords.x}%` }}
                  onMouseEnter={() => setActiveDot(point.id)}
                  >
                    <span
                    className={`block h-3 w-3 rounded-full ${isActive ? 'bg-red-400' : 'bg-red-500/70'} shadow-[0_0_18px_rgba(248,113,113,0.7)]`}
                    ></span>
                  <span className={`absolute -inset-1 rounded-full ${isActive ? 'animate-ping bg-red-400/50' : 'bg-red-400/20'}`}></span>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </section>
  )
}


