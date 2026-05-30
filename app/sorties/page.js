'use client'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SortieList from '../../components/SortieList'
import { sorties } from '../../lib/sorties'
import { useTranslation } from '../../lib/useTranslation'
import { useEffect } from 'react'

export default function SortiesPage() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('sorties.title')
  }, [t])

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-brand-red/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-px bg-brand-red" />
              <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">{t('sorties.agenda')}</span>
              <div className="w-8 h-px bg-brand-red" />
            </div>
            <h1 className="font-display text-7xl md:text-9xl text-white leading-[0.8]">{t('sorties.heading')}</h1>
            <p className="text-gray-400 mt-8 text-lg max-w-xl mx-auto">
              {t('sorties.desc')}
            </p>
          </div>

          <SortieList sorties={sorties} />

          <div className="mt-20 text-center bg-brand-card rounded-[2.5rem] p-12 border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="text-gray-300 mb-8 text-lg relative z-10">{t('sorties.noDate')}</p>
            <a href="https://wa.me/33636226987?text=Bonjour%2C%20je%20souhaite%20être%20informé%20des%20prochaines%20dates"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-10 py-5 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-green-600/20 relative z-10">
              💬 {t('sorties.waitlist')}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
