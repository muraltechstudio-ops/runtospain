'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, HelpCircle, ChevronRight, Phone } from 'lucide-react'

export default function Footer() {
  const WA_NUMBER = '33636226987'
  const WA_MSG = encodeURIComponent("Bonjour, je souhaite réserver une place pour une excursion en Espagne !")
  const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

  return (
    <>
      <section id="contact" className="py-24 px-4 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-brand-red/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-brand-red" />
              <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">Une question ?</span>
              <div className="w-8 h-px bg-brand-red" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-white">ON VOUS RÉPOND</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-10 text-lg"
          >
            Notre équipe est disponible 7j/7 pour vous accompagner.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all hover:scale-105 shadow-xl shadow-green-600/20">
              <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
              WhatsApp
            </a>
            <a href="mailto:contact@runtospain.com"
              className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all hover:border-white/20">
              <Mail size={24} />
              Email
            </a>
            <a href="tel:+33636226987"
              className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all hover:border-white/20">
              <Phone size={24} />
              Téléphone
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-card rounded-[2rem] p-8 border border-white/5 text-left relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="text-brand-red" />
              <h3 className="font-display text-3xl text-white">FAQ RAPIDE</h3>
            </div>
            <div className="space-y-4">
              {[
                { q: ‘Que puis-je acheter en Espagne ?’, r: ‘Tout ce que vous voulez pour usage personnel : vêtements, alimentation, cosmétiques, électronique, alcool et tabac dans les limites légales.’ },
                { q: ‘Quelles sont les limites douanières ?’, r: ‘Tabac : 4 cartouches de cigarettes OU 1kg de tabac à rouler. Alcool : 10L de vin OU 20L de spiritueux. IMPORTANT : Ne pas dépasser ces limites pour éviter le blocage du véhicule et perturber le voyage des autres personnes !’ },
                { q: ‘Les courses sont-elles incluses ?’, r: ‘Non, le prix de 49 € couvre uniquement le transport A/R. Vos achats sont à votre charge.’ },
                { q: ‘Puis-je annuler ma réservation ?’, r: ‘Oui, remboursement intégral jusqu\’à 7 jours avant la sortie. Voir nos CGV pour le détail.’ },
                { q: ‘Le conducteur est-il professionnel ?’, r: ‘Oui, titulaire du permis D international et carte VTC. Vous êtes en sécurité.’ },
              ].map((item, i) => (
                <details key={i} className="group border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <summary className="text-gray-300 cursor-pointer list-none flex items-center justify-between hover:text-white transition font-bold text-sm">
                    {item.q}
                    <ChevronRight size={16} className="text-brand-red group-open:rotate-90 transition-transform" />
                  </summary>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-500 text-sm mt-3 leading-relaxed pl-2 border-l-2 border-brand-red/20"
                  >
                    {item.r}
                  </motion.p>
                </details>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#08090f] border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <Link href="/" className="font-display text-3xl tracking-tighter">
              <span className="text-brand-red">RUN</span>
              <span className="text-white">TO</span>
              <span className="text-brand-orange">SPAIN</span>
            </Link>

            <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500">
              <Link href="/cgv" className="hover:text-brand-red transition-colors">CGV</Link>
              <Link href="/contact" className="hover:text-brand-red transition-colors">Contact</Link>
              <Link href="/sorties" className="hover:text-brand-red transition-colors">Réserver</Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-gray-600 text-[10px] uppercase font-bold tracking-widest">
            <p>© 2026 RunToSpain · Montpellier, Sète & Béziers</p>
            <p>Conçu avec passion pour le shopping 🇪🇸</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href={WA_URL} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-400 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/30 transition-all hover:scale-110 active:scale-95 group"
        title="WhatsApp">
        <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute right-full mr-4 bg-brand-card text-white px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 shadow-2xl pointer-events-none">
          Une question ? Écrivez-nous !
        </span>
      </a>
    </>
  )
}
