'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-24 px-4 bg-brand-dark">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-8 h-px bg-brand-red" />
          <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">Le bon plan de la région</span>
        </motion.div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl text-white"
          >
            POURQUOI<br/>LA JONQUERA ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-sm mt-4 md:mt-0 text-sm leading-relaxed"
          >
            À seulement 2h15 de Montpellier, La Jonquera est la capitale européenne du shopping transfrontalier. Des milliers de français y font leurs courses chaque weekend.
          </motion.p>
        </div>

        {/* Chiffres clés */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { n: '2h15', label: 'De trajet depuis\nMontpellier', icon: '🚌' },
            { n: '-60%', label: 'D\'économies\nen moyenne', icon: '💰' },
            { n: '7h', label: 'Sur place pour\nfaire vos courses', icon: '🛍️' },
            { n: '0€', label: 'De droits de douane\nentre pays EU', icon: '🇪🇺' },
          ].map((s, i) => (
            <motion.div 
              key={s.label} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-card border border-white/5 p-6 text-center hover:border-brand-red/30 transition-all rounded-2xl group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{s.icon}</div>
              <div className="font-display text-5xl text-brand-red mb-2">{s.n}</div>
              <div className="text-gray-400 text-xs leading-relaxed whitespace-pre-line">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tableau comparatif prix */}
        <div className="mb-16">
          <h3 className="font-display text-3xl text-white mb-2 tracking-wide">COMPARATIF DES PRIX</h3>
          <p className="text-gray-500 text-sm mb-8">Prix moyens constatés — à titre indicatif</p>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4"
          >
            {produits.map((p, i) => (
              <motion.div 
                key={i} 
                variants={item}
                className="bg-brand-card border border-white/5 hover:border-brand-red/20 transition-all p-5 flex items-center gap-4 rounded-2xl"
              >
                <span className="text-3xl flex-shrink-0 bg-white/5 p-3 rounded-xl">{p.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-bold text-sm mb-0.5">{p.categorie}</div>
                  <div className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">{p.exemple}</div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="text-center">
                    <div className="text-gray-500 text-[9px] uppercase font-bold mb-1">France</div>
                    <div className="text-gray-500 text-xs line-through">{p.prixFR}</div>
                  </div>
                  <div className="text-brand-red/30 text-lg">→</div>
                  <div className="text-center">
                    <div className="text-gray-400 text-[9px] uppercase font-bold mb-1">Espagne</div>
                    <div className="text-white font-bold text-sm">{p.prixES}</div>
                  </div>
                  <div className="bg-green-500/10 text-green-400 text-[10px] font-bold px-2 py-1 rounded-lg border border-green-500/20">
                    {p.economie}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Qu'est-ce qu'on y trouve */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* La Jonquera */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-card border border-white/5 p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="text-9xl">🏪</span>
            </div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <span className="text-3xl">🏪</span>
              <h3 className="font-display text-3xl text-white">LA JONQUERA</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
              Ville frontière catalane à 3km de la France. Des centaines de commerces sur plusieurs kilomètres : supermarchés géants, boutiques de mode, caves à vins, épiceries fines, parfumeries...
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
              {[
                'Supermarchés géants',
                'Centres commerciaux',
                'Boutiques de mode',
                'Caves à spiritueux',
                'Parfumeries',
                'Épiceries fines',
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mercado El Pertús */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-card border border-white/5 p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="text-9xl">🛒</span>
            </div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <span className="text-3xl">🛒</span>
              <h3 className="font-display text-3xl text-white">MERCADO EL PERTÚS</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
              Le grand marché couvert situé au cœur de La Jonquera. Des centaines d'étals et de boutiques regroupés sous un même toit. Idéal pour faire le tour de toutes les bonnes affaires en une seule fois.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
              {[
                'Marché couvert',
                'Textile & Mode',
                'Produits régionaux',
                'Articles de maison',
                'Électronique',
                'Restauration',
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA bas de section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-8 text-xl font-medium tracking-tight">Prêt à faire de bonnes affaires ?</p>
          <Link href="/sorties"
            className="inline-flex items-center gap-3 bg-brand-red hover:bg-red-700 text-white font-bold px-12 py-5 text-lg transition-all hover:scale-105 shadow-2xl shadow-brand-red/30 rounded-2xl">
            Réserver ma place — 49€ <span className="text-xl">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
