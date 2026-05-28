export default function PourquoiJonquera() {
  const produits = [
    { emoji: '🍷', categorie: 'Alcools & Vins', exemple: 'Bouteille de Rioja', prixFR: '12-18€', prixES: '4-7€', economie: '-60%' },
    { emoji: '🚬', categorie: 'Tabac à rouler', exemple: 'Paquet 30g', prixFR: '13-15€', prixES: '3-5€', economie: '-70%' },
    { emoji: '👟', categorie: 'Vêtements & Chaussures', exemple: 'Baskets marque', prixFR: '80-120€', prixES: '35-60€', economie: '-50%' },
    { emoji: '💄', categorie: 'Parfums & Cosmétiques', exemple: 'Parfum 100ml', prixFR: '60-90€', prixES: '25-45€', economie: '-45%' },
    { emoji: '🧀', categorie: 'Alimentation', exemple: 'Jamón Ibérico 1kg', prixFR: '35-50€', prixES: '12-20€', economie: '-55%' },
    { emoji: '☕', categorie: 'Café & Épicerie', exemple: 'Café moulu 500g', prixFR: '6-9€', prixES: '2-4€', economie: '-55%' },
    { emoji: '🔋', categorie: 'Électronique', exemple: 'Accessoires tech', prixFR: '20-40€', prixES: '8-18€', economie: '-50%' },
    { emoji: '🧴', categorie: 'Hygiène & Santé', exemple: 'Crème solaire', prixFR: '8-15€', prixES: '3-6€', economie: '-55%' },
  ]

  return (
    <section className="py-24 px-4 bg-brand-dark">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-brand-red" />
          <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">Le bon plan de la région</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <h2 className="font-display text-5xl md:text-7xl text-white">POURQUOI<br/>LA JONQUERA ?</h2>
          <p className="text-gray-400 max-w-sm mt-4 md:mt-0 text-sm leading-relaxed">
            À seulement 3h de Montpellier, La Jonquera est la capitale européenne du shopping transfrontalier. Des milliers de français y font leurs courses chaque weekend.
          </p>
        </div>

        {/* Chiffres clés */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { n: '3h', label: 'De trajet depuis\nMontpellier', icon: '🚌' },
            { n: '-60%', label: 'D\'économies\nen moyenne', icon: '💰' },
            { n: '8h', label: 'Sur place pour\nfaire vos courses', icon: '🛍️' },
            { n: '0€', label: 'De droits de douane\nentre pays EU', icon: '🇪🇺' },
          ].map(s => (
            <div key={s.label} className="bg-brand-card border border-white/5 p-6 text-center hover:border-brand-red/30 transition">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-display text-5xl text-brand-red mb-2">{s.n}</div>
              <div className="text-gray-400 text-xs leading-relaxed whitespace-pre-line">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tableau comparatif prix */}
        <div className="mb-16">
          <h3 className="font-display text-3xl text-white mb-2">COMPARATIF DES PRIX</h3>
          <p className="text-gray-400 text-sm mb-8">Prix moyens constatés — à titre indicatif</p>

          <div className="grid md:grid-cols-2 gap-3">
            {produits.map((p, i) => (
              <div key={i} className="bg-brand-card border border-white/5 hover:border-brand-red/20 transition p-4 flex items-center gap-4">
                <span className="text-3xl flex-shrink-0">{p.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold text-sm">{p.categorie}</div>
                  <div className="text-gray-500 text-xs">{p.exemple}</div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="text-center">
                    <div className="text-gray-500 text-xs mb-0.5">🇫🇷 France</div>
                    <div className="text-gray-400 text-sm line-through">{p.prixFR}</div>
                  </div>
                  <div className="text-brand-red text-lg">→</div>
                  <div className="text-center">
                    <div className="text-gray-400 text-xs mb-0.5">🇪🇸 Espagne</div>
                    <div className="text-white font-bold text-sm">{p.prixES}</div>
                  </div>
                  <div className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded">
                    {p.economie}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Qu'est-ce qu'on y trouve */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* La Jonquera */}
          <div className="bg-brand-card border border-white/5 p-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🏪</span>
              <h3 className="font-display text-3xl text-white">LA JONQUERA</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ville frontière catalane à 3km de la France. Des centaines de commerces sur plusieurs kilomètres : supermarchés géants, boutiques de mode, caves à vins, épiceries fines, parfumeries...
            </p>
            <ul className="space-y-2">
              {[
                'Supermarchés Bon Preu, Mercadona',
                'Centres commerciaux El Pertús',
                'Boutiques de mode et chaussures',
                'Caves à vins et spiritueux',
                'Parfumeries et cosmétiques',
                'Épiceries et alimentation espagnole',
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-brand-red text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mercado El Pertús */}
          <div className="bg-brand-card border border-white/5 p-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🛒</span>
              <h3 className="font-display text-3xl text-white">MERCADO EL PERTÚS</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Le grand marché couvert situé au cœur de La Jonquera. Des centaines d'étals et de boutiques regroupés sous un même toit. Idéal pour faire le tour de toutes les bonnes affaires en une seule fois.
            </p>
            <ul className="space-y-2">
              {[
                'Marché couvert — toute météo',
                'Textile, maroquinerie, accessoires',
                'Produits régionaux et épicerie fine',
                'Jouets et articles de maison',
                'Électronique et accessoires',
                'Restauration sur place',
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-brand-red text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA bas de section */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6 text-lg">Prêt à faire de bonnes affaires ?</p>
          <a href="/sorties"
            className="inline-block bg-brand-red hover:bg-red-700 text-white font-bold px-12 py-4 text-lg transition-all hover:scale-105 shadow-xl shadow-red-900/30">
            Réserver ma place — 49€ →
          </a>
        </div>

      </div>
    </section>
  )
}
