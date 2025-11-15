import React from 'react'
import Hero from './Hero'
import Features from './components/Features'
import ProductGallery from './components/ProductGallery'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-site text-slate-800">
      <Hero />
      <Features />
      <ProductGallery />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}
