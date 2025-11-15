import React from 'react'
import { Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="rounded-3xl border border-white/60 bg-white/40 backdrop-blur-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1">
            <h4 className="text-2xl font-bold text-slate-900">Get pastel‑fresh drops</h4>
            <p className="text-slate-600 mt-1">Join the newsletter for new Canva templates, bundles, and deals.</p>
          </div>
          <form className="flex w-full md:w-auto gap-3">
            <input type="email" placeholder="you@studio.com" className="input-glass" />
            <button className="btn-primary">Subscribe</button>
          </form>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600">
          <div>© {new Date().getFullYear()} Pastel Glass Studio</div>
          <div className="flex items-center gap-4">
            <a href="#" className="social-icon"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="social-icon"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="social-icon"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
