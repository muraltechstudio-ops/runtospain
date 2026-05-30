'use client'
import { motion } from 'framer-motion'
import { Wine, Shirt, Sparkles, ShoppingBag, UtensilsCrossed, Package } from 'lucide-react'

export default function WhatToBuy() {
  const categories = [
    {
      icon: <Package size={40} />,
      title: 'Tabac',
      desc: 'Cigarettes, tabac à rouler',
      savings: '-50%',
      color: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400'
    },
    {
      icon: <Wine size={40} />,
      title: 'Vins & Alcools',
      desc: 'Vins espagnols, spiritueux, bières',
      savings: '-30%',
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Parfums & Cosmétiques',
      desc: 'Grandes marques à prix cassés',
      savings: '-50%',
      color: 'from-pink-500/20 to-rose-500/20',
      iconColor: 'text-pink-400'
    },
    {
      icon: <ShoppingBag size={40} />,
      title: 'Lessive & Maison',
      desc: 'Produits ménagers, entretien',
      savings: '-40%',
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: <UtensilsCrossed size={40} />,
      title: 'Viande & Charcuterie',
      desc: 'Jambon, chorizo, spécialités',
      savings: '-50%',
      color: 'from-red-500/20 to-brand-red/20',
      iconColor: 'text-red-400'
    },
    {
      icon: <Shirt size={40} />,
      title: 'Mode & Divers',
      desc: 'Vêtements, accessoires, high-tech',
      savings: 'Variable',
      color: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-400'
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-brand-dark to-brand-card relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-brand-red/5 blur-[150px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-semibold tracking-widest uppercase text-sm mb-3"
          >
            Économisez jusqu'à -60%
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6"
          >
            QUE PEUT-ON ACHETER ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Des centaines de boutiques vous attendent à La Jonquera et au Mercado El Pertús.
            Tout pour usage personnel, dans les limites légales.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="relative bg-brand-card rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all group overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`${cat.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {cat.icon}
                </div>

                <h3 className="text-white font-bold text-xl mb-2">{cat.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{cat.desc}</p>

                <div className="flex items-center gap-2">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                    {cat.savings}
                  </span>
                  <span className="text-gray-500 text-xs">vs France</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-brand-red/10 border border-brand-red/20 rounded-2xl p-6 text-center"
        >
          <p className="text-white text-sm">
            <span className="font-bold text-brand-red">⚠️ Important :</span> Respectez les limites légales pour le tabac et l'alcool lors du passage en douane.
            <br />
            <span className="text-gray-400 text-xs">Consultez les quantités autorisées avant votre départ.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
