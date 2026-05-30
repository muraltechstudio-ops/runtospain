'use client'
import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    { n: '01', icon: '📅', title: 'Choisissez votre date', desc: 'Consultez les prochaines sorties et sélectionnez celle qui vous convient.' },
    { n: '02', icon: '💳', title: 'Réservez en ligne', desc: 'Payez votre place en ligne par carte bancaire ou PayPal. Simple, rapide, sécurisé.' },
    { n: '03', icon: '📍', title: 'Montez à bord', desc: 'Retrouvez-nous à votre point de départ choisi : Montpellier, Sète ou Béziers.' },
    { n: '04', icon: '🛒', title: 'Faites vos emplettes', desc: 'Profitez de la journée pour faire vos achats en Espagne à des prix imbattables.' },
  ]

  const stops = [
    { ville: 'Montpellier', heure: '08h00', flag: '🏙️' },
    { ville: 'Sète', heure: '08h30', flag: '⚓' },
    { ville: 'Béziers', heure: '09h00', flag: '🏛️' },
    { ville: 'La Jonquera', heure: '~10h15', flag: '🇪🇸' },
    { ville: 'Retour', heure: '~20h15', flag: '🏠' },
  ]

  return (
    <section id="comment" className="py-28 px-6 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-3"
          >
            Simple comme bonjour
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl text-white"
          >
            COMMENT ÇA MARCHE ?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-brand-card rounded-2xl p-6 border border-white/5 hover:border-brand-red/30 transition-all group overflow-hidden"
            >
              <div className="font-display text-7xl text-white/5 group-hover:text-brand-red/10 transition-colors absolute -top-2 -right-2">{s.n}</div>
              <div className="text-4xl mb-4 relative z-10">{s.icon}</div>
              <h3 className="font-bold text-white text-lg mb-2 relative z-10">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-brand-card rounded-3xl p-8 border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-orange to-brand-red opacity-20" />
          <h3 className="font-display text-3xl text-white mb-10 text-center">L'ITINÉRAIRE TYPE</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {stops.map((stop, i, arr) => (
              <div key={i} className="flex flex-col md:flex-row items-center">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center px-6 py-4 bg-white/5 rounded-2xl border border-white/5 min-w-[140px]"
                >
                  <div className="text-3xl mb-2">{stop.flag}</div>
                  <div className="text-white font-bold text-sm mb-1">{stop.ville}</div>
                  <div className="text-brand-orange text-xs font-mono">{stop.heure}</div>
                </motion.div>
                {i < arr.length - 1 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-brand-red text-2xl md:rotate-0 rotate-90"
                  >
                    →
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
