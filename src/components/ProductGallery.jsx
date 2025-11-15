import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Social', 'Ebook', 'Resume', 'Branding']

const products = [
  { id: 'p1', title: 'Pastel Social Kit', cat: 'Social', price: 18, preview: '/previews/social-kit.gif' },
  { id: 'p2', title: 'Lilac Resume', cat: 'Resume', price: 9, preview: '/previews/resume.gif' },
  { id: 'p3', title: 'Mint Ebook', cat: 'Ebook', price: 14, preview: '/previews/ebook.gif' },
  { id: 'p4', title: 'Butter Branding Pack', cat: 'Branding', price: 29, preview: '/previews/branding.gif' },
]

export default function ProductGallery() {
  const [active, setActive] = useState('All')
  const filtered = useMemo(() => active === 'All' ? products : products.filter(p => p.cat === active), [active])

  return (
    <section id="products" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(c => (
            <button key={c} onClick={() => setActive(c)} className={`filter-chip ${active === c ? 'is-active' : ''}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(p => (
              <motion.div key={p.id} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }} className="product-card">
                <div className="product-media">
                  <img src={p.preview} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="chrome-flare" />
                </div>
                <div className="p-4">
                  <h4 className="text-slate-900 font-semibold">{p.title}</h4>
                  <div className="mt-1 text-slate-600 text-sm">{p.cat}</div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sky-800 font-bold">${p.price}</div>
                    <div className="flex gap-2">
                      <a className="btn-ghost px-3 py-1.5 text-sm" href="#">Try Sample</a>
                      <a className="btn-primary px-3 py-1.5 text-sm" href="#">Buy Now</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
