'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SortieList({ sorties }) {
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

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {sorties.map(s => {
        const complet = s.placesRestantes === 0
        const urgence = s.placesRestantes > 0 && s.placesRestantes <= 2
        const pct = Math.round((s.placesRestantes / s.placesTotal) * 100)
        return (
          <motion.div 
            key={s.id}
            variants={item}
            className={`bg-brand-card rounded-[2rem] border overflow-hidden transition-all duration-300 ${complet ? 'border-white/5 opacity-60' : 'border-white/5 hover:border-brand-red/30 hover:shadow-2xl hover:shadow-brand-red/5'}`}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-white font-bold text-2xl tracking-tight">{s.label}</h2>
                    {complet && <span className="bg-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/5">Complet</span>}
                    {urgence && <span className="bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full pulse-red">⚡ Dernières places</span>}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {s.destinations.map(d => (
                      <span key={d} className="text-[10px] font-bold uppercase tracking-wider bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/5">🇪🇸 {d}</span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {s.departs.map(d => (
                      <div key={d.ville} className="bg-white/5 rounded-2xl p-4 border border-white/5 group hover:border-brand-orange/30 transition-colors">
                        <div className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-1">{d.heure}</div>
                        <div className="text-white text-sm font-bold mb-1">{d.ville}</div>
                        <div className="text-gray-500 text-[10px] leading-relaxed line-clamp-1">{d.lieu}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-500 text-[11px] font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    Retour estimé : <span className="text-white">{s.retourEstime}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-6 min-w-[200px] bg-white/5 p-8 rounded-3xl border border-white/5">
                  <div className="text-center">
                    <div className="font-display text-6xl text-white leading-none mb-2">{s.prix}€</div>
                    <div className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">Prix unique A/R</div>
                  </div>
                  
                  <div className="w-full">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                      <span>{s.placesRestantes} dispos</span>
                      <span>Total {s.placesTotal}</span>
                    </div>
                    <div className="h-2 bg-brand-dark/20 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full rounded-full ${complet ? 'bg-gray-800' : urgence ? 'bg-brand-red' : 'bg-green-400'}`}
                      />
                    </div>
                  </div>

                  {complet ? (
                    <button disabled className="w-full bg-white/5 text-gray-600 py-4 rounded-xl font-bold uppercase tracking-widest text-xs border border-white/5 cursor-not-allowed">Complet</button>
                  ) : (
                    <Link href={`/reserver/${s.id}`}
                      className="w-full bg-brand-red hover:bg-red-600 text-white font-bold py-4 rounded-xl text-center transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-red/20 text-sm">
                      Réserver →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
