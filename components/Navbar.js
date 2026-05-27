'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-wider">
          <span className="text-brand-red">RUN</span>
          <span className="text-white">TO</span>
          <span className="text-brand-orange">SPAIN</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/#comment" className="text-gray-400 hover:text-white transition">Comment ça marche</Link>
          <Link href="/sorties" className="text-gray-400 hover:text-white transition">Prochaines sorties</Link>
          <Link href="/#contact" className="text-gray-400 hover:text-white transition">Contact</Link>
          <Link href="/sorties"
            className="bg-brand-red hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition">
            Réserver
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-brand-card border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          <Link href="/#comment" className="text-gray-300" onClick={() => setOpen(false)}>Comment ça marche</Link>
          <Link href="/sorties" className="text-gray-300" onClick={() => setOpen(false)}>Prochaines sorties</Link>
          <Link href="/#contact" className="text-gray-300" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/sorties"
            className="bg-brand-red text-white px-5 py-2 rounded-full text-center font-semibold"
            onClick={() => setOpen(false)}>
            Réserver ma place
          </Link>
        </div>
      )}
    </nav>
  )
}
