export default function HowItWorks() {
  const steps = [
    { n: '01', icon: '📅', title: 'Choisissez votre date', desc: 'Consultez les prochaines sorties et sélectionnez celle qui vous convient.' },
    { n: '02', icon: '💳', title: 'Réservez en ligne', desc: 'Payez votre place en ligne par carte bancaire ou PayPal. Simple, rapide, sécurisé.' },
    { n: '03', icon: '📍', title: 'Montez à bord', desc: 'Retrouvez-nous à votre point de départ choisi : Montpellier, Sète ou Béziers.' },
    { n: '04', icon: '🛒', title: 'Faites vos emplettes', desc: 'Profitez de la journée pour faire vos achats en Espagne à des prix imbattables.' },
  ]

  return (
    <section id="comment" className="py-24 px-4 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-3">Simple comme bonjour</p>
          <h2 className="font-display text-5xl md:text-7xl text-white">COMMENT ÇA MARCHE ?</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative bg-brand-card rounded-2xl p-6 border border-white/5 hover:border-brand-red/30 transition group">
              <div className="font-display text-7xl text-white/5 group-hover:text-brand-red/10 transition absolute top-4 right-4">{s.n}</div>
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand-card rounded-2xl p-8 border border-white/5">
          <h3 className="font-display text-3xl text-white mb-6 text-center">L'ITINÉRAIRE</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-0">
            {[
              { ville: 'Montpellier', heure: '06h00', flag: '🏙️' },
              { ville: 'Sète', heure: '06h30', flag: '⚓' },
              { ville: 'Béziers', heure: '07h00', flag: '🏛️' },
              { ville: 'La Jonquera', heure: '~09h00', flag: '🇪🇸' },
              { ville: 'Retour', heure: '~19h00', flag: '🏠' },
            ].map((stop, i, arr) => (
              <div key={i} className="flex flex-col md:flex-row items-center">
                <div className="text-center px-4 py-2">
                  <div className="text-2xl mb-1">{stop.flag}</div>
                  <div className="text-white font-semibold text-sm">{stop.ville}</div>
                  <div className="text-brand-orange text-xs">{stop.heure}</div>
                </div>
                {i < arr.length - 1 && (
                  <div className="text-brand-red text-2xl md:rotate-0 rotate-90 mx-1">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
