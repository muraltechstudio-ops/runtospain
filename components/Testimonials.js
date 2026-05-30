'use client'
import { motion } from 'framer-motion'
import { Star, ShieldCheck, Lock, CreditCard, RotateCcw } from 'lucide-react'

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
    <section className="py-24 px-4 bg-brand-dark overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-8 h-px bg-brand-red" />
          <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">Ils en parlent mieux que nous</span>
        </motion.div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl text-white"
          >
            ILS SONT<br/>REVENUS CONQUIS
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mt-6 md:mt-0 bg-white/5 p-4 rounded-2xl border border-white/5"
          >
            <div className="flex text-yellow-500">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <div>
              <div className="text-white font-bold text-lg">4.9/5</div>
              <div className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">Sur 47 avis vérifiés</div>
            </div>
          </motion.div>
        </div>

        {/* Grid avis */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {avis.map((a, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-brand-card border border-white/5 hover:border-brand-red/20 p-8 rounded-3xl transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-6xl">
                {a.emoji}
              </div>
              
              <div className="flex items-center gap-1 mb-6 text-yellow-500">
                {Array.from({ length: a.note }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-8 italic relative z-10">"{a.texte}"</p>

              <div className="flex items-center justify-between pt-6 border-t border-white/5 relative z-10">
                <div>
                  <div className="text-white text-sm font-bold">{a.nom}</div>
                  <div className="text-gray-500 text-[10px] uppercase font-bold tracking-tighter">{a.ville}</div>
                </div>
                <div className="text-gray-600 text-[10px] font-bold tracking-widest uppercase">{a.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Réassurance paiement */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] p-10 bg-brand-card border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-30" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Lock size={16} className="text-brand-red" />
                <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">Paiement 100% sécurisé</span>
              </div>
              <h3 className="font-display text-4xl text-white">RÉSERVEZ EN TOUTE CONFIANCE</h3>
            </div>
            <div className="flex items-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all">
              <img src="https://i.postimg.cc/85zX3S0p/Stripe-Logo-v2.png" alt="Stripe" className="h-6" />
              <img src="https://i.postimg.cc/mD3Xv3Z6/PayPal-Logo.png" alt="PayPal" className="h-6" />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="text-brand-red" size={32} />,
                title: 'Cryptage SSL',
                desc: 'Toutes vos données sont chiffrées de bout en bout.'
              },
              {
                icon: <CreditCard className="text-brand-red" size={32} />,
                title: 'Stripe',
                desc: 'Leader mondial du paiement sécurisé par carte.'
              },
              {
                icon: <CreditCard className="text-brand-orange" size={32} />,
                title: 'PayPal',
                desc: 'Payez avec votre compte PayPal en toute simplicité.'
              },
              {
                icon: <RotateCcw className="text-green-500" size={32} />,
                title: 'Remboursement',
                desc: 'Annulation possible jusqu\'à 7 jours avant le départ.'
              },
            ].map((r, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="mb-4 p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform border border-white/5">{r.icon}</div>
                <div className="text-white font-bold text-sm mb-2">{r.title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{r.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications conducteur */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '🪪',
              title: 'Permis D International',
              desc: 'Habilité à conduire des autobus et autocars en Europe.'
            },
            {
              icon: '🚖',
              title: 'Carte Professionnelle VTC',
              desc: 'Chauffeur certifié avec casier judiciaire vierge.'
            },
            {
              icon: '🛡️',
              title: 'Assurance Professionnelle',
              desc: 'Couverture RC transport de personnes pour chaque sortie.'
            },
          ].map((c, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 bg-white/5 p-6 rounded-3xl border border-white/5"
            >
              <div className="text-3xl flex-shrink-0">{c.icon}</div>
              <div>
                <div className="text-white font-bold text-sm mb-1">{c.title}</div>
                <div className="text-gray-500 text-[10px] uppercase font-bold tracking-tight leading-relaxed">{c.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
