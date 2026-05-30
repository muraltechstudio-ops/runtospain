'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getSortiesDisponibles } from '../lib/sorties'
import { useTranslation } from '../lib/useTranslation'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function SortiesPreview() {
  const { t } = useTranslation()
  const sorties = getSortiesDisponibles()

  return (
    <section id="sorties" className="py-24 px-4 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-3"
          >
            {t('sp.limited')}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white"
          >
            {t('sp.title')}
          </motion.h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-10"
        >
          {sorties.map(s => {
            const pct = Math.round((s.placesRestantes / s.placesTotal) * 100)
            const urgence = s.placesRestantes <= 2
            return (
              <motion.div
                key={s.id}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-brand-card rounded-3xl overflow-hidden border border-white/5 hover:border-brand-red/50 transition-all group hover:shadow-2xl hover:shadow-brand-red/30"
              >
                <div className="bg-gradient-to-r from-brand-red/20 to-brand-orange/10 px-6 py-4 border-b border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">{s.label}</span>
                    {urgence && (
                      <span className="bg-brand-red text-white text-[10px] font-bold uppercase tracking-tighter px-2 py-0.5 rounded-full pulse-red">
                        {t('sp.lastSeats')}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.destinations.map(d => (
                      <span key={d} className="text-[10px] font-bold uppercase tracking-wider bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/5">
                        🇪🇸 {d}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6">
                    {s.departs.map(d => (
                      <div key={d.ville} className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{d.ville}</span>
                        <span className="text-brand-orange font-semibold">{d.heure}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>{t('sp.availability')}</span>
                      <span className={urgence ? 'text-brand-red font-bold' : 'text-green-400 font-medium'}>
                        {s.placesRestantes} places dispos
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full rounded-full ${urgence ? 'bg-brand-red' : 'bg-green-400'}`}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">{t('sp.pricePerPerson')}</span>
                      <span className="font-display text-4xl text-white">{s.prix}€</span>
                    </div>
                    <Link href={`/reserver/${s.id}`}
                      className="bg-brand-red hover:bg-red-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/20">
                      {t('sp.book')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="text-center">
          <Link href="/sorties"
            className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 hover:bg-white/5 text-white px-8 py-3 rounded-xl transition-all">
            {t('sp.seeAll')}
          </Link>
        </div>
      </div>
    </section>
  )
}
