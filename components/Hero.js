import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Image de fond SANS dégradé */}
      <div className="absolute inset-0">
        <img
          src="https://i.postimg.cc/grbbQ5TJ/seedream-4-high-res-fal-a-il-me-faut-la-meme-i.jpg"
          alt="Excursion Espagne RunToSpain"
          className="w-full h-full object-cover object-center"
        />
        {/* Juste un léger fondu en haut pour la navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-2xl">

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-0.5 bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase bg-black/40 backdrop-blur px-2 py-1">
              Excursion à la journée · Chaque dimanche
            </span>
          </div>

          <h1 className="font-display leading-[0.9] mb-6">
            <span className="block text-[clamp(3.5rem,9vw,7rem)] text-white drop-shadow-2xl" style={{textShadow:'2px 2px 20px rgba(0,0,0,0.8)'}}>L'ESPAGNE</span>
            <span className="block text-[clamp(3.5rem,9vw,7rem)] text-brand-red drop-shadow-2xl" style={{textShadow:'2px 2px 20px rgba(0,0,0,0.8)'}}>EN UN JOUR</span>
            <span className="block text-[clamp(1.2rem,3vw,2rem)] text-white font-body font-normal tracking-widest mt-3 drop-shadow-xl" style={{textShadow:'1px 1px 10px rgba(0,0,0,0.9)'}}>
              La Jonquera · Mercado El Pertús
            </span>
          </h1>

          <p className="text-white text-lg leading-relaxed mb-8 max-w-xl bg-black/30 backdrop-blur-sm p-4 rounded">
            Partez faire vos courses en Espagne depuis <strong>Montpellier, Sète ou Béziers</strong>.
            Alcools, parfums, vêtements, électronique… jusqu'à <strong className="text-brand-orange">-60% moins cher</strong> qu'en France.
            Retour le soir, zéro stress.
          </p>

          <div className="flex items-end gap-4 mb-8">
            <div className="bg-black/40 backdrop-blur p-4 rounded">
              <div className="text-gray-300 text-xs tracking-widest uppercase mb-1">Prix unique A/R</div>
              <div className="font-display text-9xl text-white leading-none drop-shadow-2xl">
                49<span className="text-brand-red text-5xl align-top mt-4 inline-block">€</span>
              </div>
            </div>
            <div className="pb-4 text-white text-sm leading-relaxed drop-shadow-xl font-bold">
              Bagages<br/>inclus<br/>✓
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="/sorties"
              className="bg-brand-red hover:bg-red-700 text-white font-bold px-10 py-4 text-lg transition-all hover:scale-105 shadow-2xl text-center">
              Voir les prochaines sorties →
            </Link>
            <a href="https://wa.me/33600000000?text=Bonjour%2C%20je%20voudrais%20réserver%20une%20place"
              target="_blank" rel="noopener noreferrer"
              className="border-2 border-white text-white font-semibold px-10 py-4 text-lg transition-all text-center flex items-center justify-center gap-2 backdrop-blur-sm bg-black/30">
              💬 Réserver par WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { icon: '🛡️', text: 'Permis D International' },
              { icon: '💳', text: 'Paiement Stripe & PayPal' },
              { icon: '↩️', text: 'Remboursé si annulation' },
              { icon: '⭐', text: '4.9/5 — 47 avis' },
            ].map(b => (
              <div key={b.text} className="flex items-center gap-2 bg-black/50 backdrop-blur px-3 py-2 border border-white/20">
                <span className="text-sm">{b.icon}</span>
                <span className="text-white text-xs font-medium">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white animate-pulse" />
        <span className="text-white text-xs tracking-widest uppercase drop-shadow-xl">Découvrir</span>
      </div>
    </section>
  )
}
