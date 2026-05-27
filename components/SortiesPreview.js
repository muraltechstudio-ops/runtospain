import Link from 'next/link'
import { getSortiesDisponibles } from '../lib/sorties'

export default function SortiesPreview() {
  const sorties = getSortiesDisponibles().slice(0, 3)

  return (
    <section id="sorties" className="py-24 px-4 bg-[#0d0f18]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-3">Places limitées</p>
          <h2 className="font-display text-5xl md:text-7xl text-white">PROCHAINES SORTIES</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {sorties.map(s => {
            const pct = Math.round((s.placesRestantes / s.placesTotal) * 100)
            const urgence = s.placesRestantes <= 2
            return (
              <div key={s.id} className="bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:border-brand-red/30 transition group">
                <div className="bg-gradient-to-r from-brand-red/20 to-brand-orange/10 px-6 py-4 border-b border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">{s.label}</span>
                    {urgence && (
                      <span className="bg-brand-red text-white text-xs px-2 py-1 rounded-full pulse-red">
                        Dernières places !
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.destinations.map(d => (
                      <span key={d} className="text-xs bg-white/5 text-gray-300 px-3 py-1 rounded-full">🇪🇸 {d}</span>
                    ))}
                  </div>

                  <div className="space-y-1 mb-4">
                    {s.departs.map(d => (
                      <div key={d.ville} className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{d.ville}</span>
                        <span className="text-brand-orange font-semibold">{d.heure}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>Places restantes</span>
                      <span className={urgence ? 'text-brand-red font-bold' : 'text-green-400'}>
                        {s.placesRestantes}/{s.placesTotal}
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${urgence ? 'bg-brand-red' : 'bg-green-400'}`}
                        style={{ width: `${pct}%` }} />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl text-white">{s.prix}€</span>
                    <Link href={`/reserver/${s.id}`}
                      className="bg-brand-red hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-full text-sm transition">
                      Réserver →
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/sorties"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-red/50 text-white px-8 py-3 rounded-full transition">
            Voir toutes les dates →
          </Link>
        </div>
      </div>
    </section>
  )
}
