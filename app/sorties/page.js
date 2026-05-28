import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { sorties } from '../../lib/sorties'

export const metadata = {
  title: 'Prochaines sorties — RunToSpain',
}

export default function SortiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-3">Agenda 2026</p>
            <h1 className="font-display text-6xl md:text-8xl text-white">PROCHAINES<br/>SORTIES</h1>
            <p className="text-gray-400 mt-4">Places limitées à 8 par sortie. Réservez vite !</p>
          </div>

          <div className="space-y-6">
            {sorties.map(s => {
              const complet = s.placesRestantes === 0
              const urgence = s.placesRestantes > 0 && s.placesRestantes <= 2
              const pct = Math.round((s.placesRestantes / s.placesTotal) * 100)
              return (
                <div key={s.id}
                  className={`bg-brand-card rounded-2xl border overflow-hidden transition ${complet ? 'border-white/5 opacity-60' : 'border-white/5 hover:border-brand-red/30'}`}>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h2 className="text-white font-bold text-xl">{s.label}</h2>
                          {complet && <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">Complet</span>}
                          {urgence && <span className="bg-brand-red text-white text-xs px-2 py-1 rounded-full pulse-red">⚡ Dernières places</span>}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {s.destinations.map(d => (
                            <span key={d} className="text-xs bg-brand-dark/5 text-gray-300 px-3 py-1 rounded-full">🇪🇸 {d}</span>
                          ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
                          {s.departs.map(d => (
                            <div key={d.ville} className="bg-brand-dark/5 rounded-xl p-3">
                              <div className="text-brand-orange font-bold text-sm">{d.heure}</div>
                              <div className="text-white text-sm font-medium">{d.ville}</div>
                              <div className="text-gray-500 text-xs">{d.lieu}</div>
                            </div>
                          ))}
                        </div>
                        <div className="text-gray-400 text-sm">
                          🏠 Retour estimé : <span className="text-white">{s.retourEstime}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-4 min-w-[160px]">
                        <div className="text-center">
                          <div className="font-display text-5xl text-white">{s.prix}€</div>
                          <div className="text-gray-400 text-sm">par personne</div>
                        </div>
                        <div className="w-full">
                          <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>{s.placesRestantes} place{s.placesRestantes > 1 ? 's' : ''}</span>
                            <span>{s.placesTotal} max</span>
                          </div>
                          <div className="h-1.5 bg-brand-dark/10 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${complet ? 'bg-[#0d0f18]0' : urgence ? 'bg-brand-red' : 'bg-green-400'}`}
                              style={{ width: `${100 - pct}%` }} />
                          </div>
                        </div>
                        {complet ? (
                          <button disabled className="w-full bg-gray-700 text-gray-400 py-3 rounded-full font-semibold cursor-not-allowed">Complet</button>
                        ) : (
                          <Link href={`/reserver/${s.id}`}
                            className="w-full bg-brand-red hover:bg-red-600 text-white font-bold py-3 rounded-full text-center transition">
                            Réserver →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-14 text-center bg-brand-card rounded-2xl p-8 border border-white/5">
            <p className="text-gray-300 mb-4">Pas de date qui vous convient ?</p>
            <a href="https://wa.me/33600000000?text=Bonjour%2C%20je%20souhaite%20être%20informé%20des%20prochaines%20dates"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-full transition">
              💬 Rejoindre la liste d'attente
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
