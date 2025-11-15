import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] w-full flex items-center">
      {/* Holographic grain + soft blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(207,247,233,0.55),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-24 -right-24 w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,217,236,0.55),transparent_60%)] blur-2xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(235,216,255,0.5),transparent_60%)] blur-2xl" />
        <div className="grain-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="glass-panel p-6 md:p-8 rounded-3xl inline-block"
          >
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-medium px-3 py-1.5 rounded-full bg-white/60 backdrop-blur border border-white/40 text-sky-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#006CF0] shadow-[0_0_0_2px_rgba(0,108,240,0.15)]" />
              Canva Templates • Liquid Glass • Pastel Y2K
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900"
            style={{ fontVariationSettings: '"wght" 750' }}
          >
            Sell stunning Canva digital products with a modern pastel vibe
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-slate-600 text-lg max-w-xl"
          >
            Liquid-glass aesthetics meet Heisei retro and minimal Y2K—crafted for clarity, interactivity, and conversion.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#products" className="btn-primary group">
              <span>Browse Products</span>
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#features" className="btn-ghost">Why choose us</a>
          </motion.div>
        </div>

        {/* Right: Spline 3D object inside floating glass */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[60vh] md:h-[70vh] lg:h-[75vh]"
        >
          <motion.div
            whileHover={{ rotateX: 6, rotateY: -6 }}
            transition={{ type: 'spring', stiffness: 100, damping: 12 }}
            className="absolute inset-0 rounded-[28px] border border-white/40 bg-white/25 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.65)]"
          >
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* neon edge glow */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/40">
              <div className="absolute -inset-px rounded-[28px] bg-[linear-gradient(120deg,rgba(0,108,240,0.25),rgba(207,247,233,0.2),rgba(255,217,236,0.2))] opacity-60 mix-blend-screen" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
