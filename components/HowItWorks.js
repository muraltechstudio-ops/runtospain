export default function HowItWorks() {
  const steps = [
    { n: '01', icon: '📅', title: 'Choisissez votre date', desc: 'Consultez les prochaines sorties et sélectionnez celle qui vous convient.' },
    { n: '02', icon: '💳', title: 'Réservez en ligne', desc: 'Payez votre place en ligne par carte bancaire ou PayPal. Simple, rapide, sécurisé.' },
    { n: '03', icon: '📍', title: 'Montez à bord', desc: 'Retrouvez-nous à votre point de départ choisi : Montpellier, Sète ou Béziers.' },
    { n: '04', icon: '🛒', title: 'Faites vos emplettes', desc: 'Profitez de la journée pour faire vos achats en Espagne à des prix imbattables.' },
  ]

  return (
    <section id="comment" className="py-28 px-6 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-4">
            Simple comme bonjour
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white">
            COMMENT ÇA MARCHE ?
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative bg-brand-card rounded-2xl p-8 border border-white/6 hover:border-brand-red/40 transition-all duration-300 ease-in-out group">
              <div className="font-display text-7xl text-white/6 group-hover:text-brand-red/15 transition-all duration-300 absolute top-4 right-4">{s.n}</div>
              <div className="text-5xl mb-6">{s.icon}</div>
              <h3 className="font-bold text-white text-xl mb-3">{s.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-brand-card rounded-2xl p-10 border border-white/6">
          <h3 className="font-display text-3xl md:text-4xl text-white mb-8 text-center">L'ITINÉRAIRE</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-0">
            {[
              { ville: 'Montpellier', heure: '06h00', flag: '🏙️' },
              { ville: 'Sète', heure: '06h30', flag: '⚓' },
              { ville: 'Béziers', heure: '07h00', flag: '🏛️' },
              { ville: 'La Jonquera', heure: '~09h00', flag: '🇪🇸' },
              { ville: 'Retour', heure: '~19h00', flag: '🏠' },
            ].map((stop, i, arr) => (
              <div key={i} className="flex flex-col md:flex-row items-center">
                <div className="text-center px-4 py-3">
                  <div className="text-3xl mb-2">{stop.flag}</div>
                  <div className="text-white font-semibold text-base">{stop.ville}</div>
                  <div className="text-brand-orange text-sm">{stop.heure}</div>
                </div>
                {i < arr.length - 1 && (
                  <div className="text-brand-red text-3xl md:rotate-0 rotate-90 mx-2">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
