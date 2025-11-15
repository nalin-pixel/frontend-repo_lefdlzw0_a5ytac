import React from 'react'
import { Wand2, ShieldCheck, Gauge, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Wand2,
    title: 'Drag‑and‑Drop Ready',
    desc: 'Plug into Canva and customize in minutes with clean, modular layers.'
  },
  {
    icon: Gauge,
    title: 'Fast & Lightweight',
    desc: 'Optimized previews and assets for speedy browsing and conversions.'
  },
  {
    icon: ShieldCheck,
    title: 'Commercial Use',
    desc: 'Clear licensing across personal, commercial, and extended use.'
  },
  {
    icon: Sparkles,
    title: 'Pastel Liquid‑Glass',
    desc: 'A modern iOS‑style gloss with Heisei retro tones and Y2K micro‑accents.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="icon-wrap">
                {React.createElement(f.icon, { className: 'w-5 h-5 text-sky-700' })}
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
