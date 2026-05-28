export default function Testimonials() {
  const avis = [
    {
      nom: "Marie-Claire D.",
      ville: "Montpellier",
      note: 5,
      texte: "Parfait de A à Z ! Départ ponctuel, bus confortable, et on a eu largement le temps de faire toutes nos courses. Je recommande à 100% !",
      date: "Mars 2026",
      emoji: "👜"
    },
    {
      nom: "Patricia R.",
      ville: "Sète",
      note: 5,
      texte: "J'ai économisé plus de 200€ sur mes achats par rapport aux prix français. Le trajet est super agréable et le chauffeur très professionnel.",
      date: "Avril 2026",
      emoji: "💰"
    },
    {
      nom: "Isabelle & Marc T.",
      ville: "Béziers",
      note: 5,
      texte: "On y est allés en couple, c'était notre première fois à La Jonquera. On a adoré ! On repart le mois prochain sans hésiter.",
      date: "Avril 2026",
      emoji: "❤️"
    },
    {
      nom: "Fatima B.",
      ville: "Montpellier",
      note: 5,
      texte: "Le meilleur plan de la région ! Réservation super simple sur le site, paiement sécurisé, et le chauffeur nous a donné plein de bons conseils sur place.",
      date: "Mai 2026",
      emoji: "⭐"
    },
    {
      nom: "Jean-Pierre M.",
      ville: "Sète",
      note: 4,
      texte: "Très bonne organisation, départ à l'heure, retour à l'heure. J'ai ramené 3 caisses de vin espagnol à moitié prix !",
      date: "Mai 2026",
      emoji: "🍷"
    },
    {
      nom: "Sylvie K.",
      ville: "Montpellier",
      note: 5,
      texte: "J'ai partagé le bon plan avec toutes mes collègues. On est parties à 4 et on a toutes adoré. La prochaine sortie on sera 8 !",
      date: "Mai 2026",
      emoji: "👯"
    },
  ]

  return (
    <section className="py-24 px-4 bg-[#0d0f18]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-brand-red" />
          <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">Ils en parlent mieux que nous</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <h2 className="font-display text-5xl md:text-7xl text-white">ILS SONT<br/>REVENUS CONQUIS</h2>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <div className="flex">
              {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-2xl">★</span>)}
            </div>
            <div>
              <div className="text-white font-bold">4.9/5</div>
              <div className="text-gray-500 text-xs">Sur 47 avis vérifiés</div>
            </div>
          </div>
        </div>

        {/* Grid avis */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {avis.map((a, i) => (
            <div key={i} className="bg-brand-card border border-white/5 hover:border-brand-red/20 p-6 transition group">
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex">
                  {Array.from({ length: a.note }).map((_, j) => (
                    <span key={j} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <span className="text-2xl">{a.emoji}</span>
              </div>

              {/* Texte */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">"{a.texte}"</p>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <div className="text-white text-sm font-bold">{a.nom}</div>
                  <div className="text-gray-500 text-xs">{a.ville}</div>
                </div>
                <div className="text-gray-600 text-xs">{a.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Réassurance paiement */}
        <div className="border border-white/10 p-8 bg-brand-card">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">Paiement 100% sécurisé</span>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: '🔒',
                title: 'Cryptage SSL',
                desc: 'Toutes vos données sont chiffrées. Nous ne stockons jamais vos coordonnées bancaires.'
              },
              {
                icon: '💳',
                title: 'Stripe',
                desc: 'Leader mondial du paiement en ligne. Utilisé par Amazon, Google et des millions de sites.'
              },
              {
                icon: '🅿️',
                title: 'PayPal',
                desc: 'Payez avec votre compte PayPal en toute confiance. Protection acheteur incluse.'
              },
              {
                icon: '↩️',
                title: 'Remboursement garanti',
                desc: 'Annulation jusqu\'à 7 jours avant : remboursement intégral, sans questions.'
              },
            ].map(r => (
              <div key={r.title} className="text-center">
                <div className="text-4xl mb-3">{r.icon}</div>
                <div className="text-white font-bold text-sm mb-2">{r.title}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{r.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications conducteur */}
        <div className="mt-6 border border-white/10 p-8 bg-brand-card">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">Votre sécurité, notre priorité</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🪪',
                title: 'Permis D International',
                desc: 'Habilité à conduire des autobus et autocars en France et dans toute l\'Europe. La qualification la plus exigeante du transport de personnes.'
              },
              {
                icon: '🚖',
                title: 'Carte Professionnelle VTC',
                desc: 'Chauffeur de Voiture de Tourisme avec Chauffeur certifié. Formation, casier judiciaire vierge et assurance professionnelle obligatoires.'
              },
              {
                icon: '🛡️',
                title: 'Assurance Professionnelle',
                desc: 'Couverture RC professionnelle transport de personnes à titre onéreux pour chaque sortie. Vous voyagez en toute sécurité.'
              },
            ].map(c => (
              <div key={c.title} className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{c.icon}</div>
                <div>
                  <div className="text-white font-bold text-sm mb-2">{c.title}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
