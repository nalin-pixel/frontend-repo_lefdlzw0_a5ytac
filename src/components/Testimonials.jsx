import React, { useState } from 'react'

const data = [
  { name: 'Mika', role: 'Designer', quote: 'The templates feel fresh—like pastel iOS with retro soul.', avatar: 'https://i.pravatar.cc/80?img=12' },
  { name: 'Kenji', role: 'Creator', quote: 'Glassmorphic cards + smooth animations = instant brand glow.', avatar: 'https://i.pravatar.cc/80?img=22' },
  { name: 'Aiko', role: 'Marketer', quote: 'Fast to edit in Canva and converts like crazy.', avatar: 'https://i.pravatar.cc/80?img=32' }
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const next = () => setI((i + 1) % data.length)
  const prev = () => setI((i - 1 + data.length) % data.length)

  const t = data[i]

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <div className="rounded-3xl border border-white/60 bg-white/30 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.7)] p-8">
          <div className="flex justify-center -space-x-2 mb-6">
            {data.map((d, idx) => (
              <img key={d.name} src={d.avatar} alt={d.name} className={`w-10 h-10 rounded-full border-2 ${idx === i ? 'border-[#006CF0]' : 'border-white'} shadow`} />
            ))}
          </div>
          <p className="text-xl text-slate-800 leading-relaxed">“{t.quote}”</p>
          <div className="mt-4 text-slate-600">{t.name} • {t.role}</div>
          <div className="mt-6 flex justify-center gap-3">
            <button className="btn-ghost px-4" onClick={prev}>Prev</button>
            <button className="btn-primary px-4" onClick={next}>Next</button>
          </div>
        </div>
      </div>
    </section>
  )
}
