'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-display text-3xl tracking-tighter group">
          <span className="text-brand-red group-hover:text-white transition-colors">RUN</span>
          <span className="text-white">TO</span>
          <span className="text-brand-orange">SPAIN</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-[11px] uppercase font-bold tracking-[0.2em]">
            <Link href="/#comment" className="text-gray-400 hover:text-brand-red transition-colors">Infos</Link>
            <Link href="/sorties" className="text-gray-400 hover:text-brand-red transition-colors">Calendrier</Link>
            <Link href="https://wa.me/33636226987" className="text-gray-400 hover:text-brand-red transition-colors flex items-center gap-2">
              <Phone size={12} className="text-brand-red" /> Contact
            </Link>
          </div>
          <Link href="/sorties"
            className="bg-brand-red hover:bg-red-600 text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-red/20">
            Réserver →
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2 bg-white/5 rounded-lg border border-white/10" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-card border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <Link href="/#comment" className="text-gray-300 font-bold uppercase tracking-widest text-sm" onClick={() => setOpen(false)}>Comment ça marche</Link>
              <Link href="/sorties" className="text-gray-300 font-bold uppercase tracking-widest text-sm" onClick={() => setOpen(false)}>Prochaines sorties</Link>
              <Link href="https://wa.me/33636226987" className="text-gray-300 font-bold uppercase tracking-widest text-sm" onClick={() => setOpen(false)}>Contact WhatsApp</Link>
              <Link href="/sorties"
                className="bg-brand-red text-white py-4 rounded-xl text-center font-bold uppercase tracking-widest text-sm shadow-xl shadow-brand-red/20"
                onClick={() => setOpen(false)}>
                Réserver ma place
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
