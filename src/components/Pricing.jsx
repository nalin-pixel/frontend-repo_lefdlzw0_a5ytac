import React from 'react'

const plans = [
  { name: 'Starter Bundle', price: 29, items: ['10 Social Posts', '2 Resume Templates', 'Basic License'], accent: 'from-[#CFF7E9] to-white' },
  { name: 'Creator Bundle', price: 59, items: ['30 Social Posts', 'Ebook Kit', 'Resume + Branding', 'Commercial License'], accent: 'from-[#FFD9EC] to-white' },
  { name: 'Studio Bundle', price: 99, items: ['All Templates', 'Brand System', 'Lifetime Updates', 'Extended License'], accent: 'from-[#EBD8FF] to-white' }
]

export default function Pricing() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-3xl border border-white/50 bg-white/30 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.7)] overflow-hidden`}> 
              <div className={`h-28 bg-gradient-to-br ${p.accent}`} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
                <div className="mt-1 text-3xl font-extrabold text-slate-900">${p.price}</div>
                <ul className="mt-4 space-y-2 text-slate-700">
                  {p.items.map(i => <li key={i}>• {i}</li>)}
                </ul>
                <a href="#checkout" className="btn-primary mt-6 w-full text-center">Choose {p.name.split(' ')[0]}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
