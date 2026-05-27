import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-[#1a0a0a] to-[#0a0a1a]" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        style={{ background: 'linear-gradient(135deg, transparent 40%, #E63024 40%, #F97316 60%, transparent 60%)' }} />
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-10 bg-brand-red" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-10 bg-brand-orange" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 fade-up">
          <span className="w-2 h-2 rounded-full bg-green-400 pulse-red" />
          <span className="text-sm text-gray-300">Départ depuis Montpellier · Sète · Béziers</span>
        </div>

        <h1 className="font-display text-[clamp(4rem,14vw,10rem)] leading-none tracking-wide mb-6 fade-up delay-1">
          <span className="text-white">L'ESPAGNE </span>
          <span className="text-brand-red">EN UN JOUR</span>
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4 fade-up delay-2">
          Excursions à la journée vers <strong className="text-white">La Jonquera</strong>,
          le <strong className="text-white">Mercado El Pertús</strong> et
          <strong className="text-white"> Empuriabrava</strong>.<br/>
          Départ tôt le matin, retour le soir. Zéro stress.
        </p>

        <div className="inline-block bg-brand-red/20 border border-brand-red/40 rounded-2xl px-6 py-3 mb-10 fade-up delay-3">
          <span className="text-brand-orange font-display text-5xl">49€</span>
          <span className="text-gray-300 text-lg ml-2">/ personne — Aller-Retour</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up delay-4">
          <Link href="/sorties"
            className="bg-brand-red hover:bg-red-600 text-white font-bold px-10 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg shadow-red-900/40">
            Voir les prochaines sorties →
          </Link>
          <a href="https://wa.me/33600000000?text=Bonjour%2C%20je%20voudrais%20réserver%20une%20place"
            target="_blank" rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all">
            💬 WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-14 fade-up delay-4">
          {[
            { icon: '🛡️', text: 'Conducteur professionnel certifié' },
            { icon: '🇪🇺', text: 'Pas de droits de douane EU' },
            { icon: '💳', text: 'Paiement sécurisé en ligne' },
            { icon: '📍', text: '3 points de départ' },
          ].map(b => (
            <div key={b.text} className="flex items-center gap-2 text-sm text-gray-400">
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce text-sm">↓</div>
    </section>
  )
}
