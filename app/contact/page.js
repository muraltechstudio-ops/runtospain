'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const WA_NUMBER = '33636226987'
  const WA_MSG = encodeURIComponent("Bonjour, je souhaite réserver une place pour une excursion en Espagne !")
  const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

  return (
    <div className="min-h-screen bg-brand-dark pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-3">
            Contactez-nous
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-white mb-6">
            ON EST LÀ POUR VOUS
          </h1>
          <p className="text-gray-400 text-lg">
            Une question ? Besoin d'informations ? Notre équipe vous répond rapidement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* WhatsApp */}
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-green-600 hover:bg-green-500 rounded-3xl p-8 transition-all group shadow-xl shadow-green-600/20"
          >
            <MessageCircle size={40} className="text-white mb-4 group-hover:rotate-12 transition-transform" />
            <h3 className="text-white font-bold text-2xl mb-2">WhatsApp</h3>
            <p className="text-green-100 text-sm mb-4">Réponse rapide garantie</p>
            <p className="text-white font-mono text-lg">+33 6 36 22 69 87</p>
          </motion.a>

          {/* Téléphone */}
          <motion.a
            href="tel:+33636226987"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-brand-card hover:bg-brand-card/80 border border-white/10 hover:border-brand-red/30 rounded-3xl p-8 transition-all group"
          >
            <Phone size={40} className="text-brand-red mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-bold text-2xl mb-2">Téléphone</h3>
            <p className="text-gray-400 text-sm mb-4">Appelez-nous directement</p>
            <p className="text-white font-mono text-lg">+33 6 36 22 69 87</p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:contact@runtospain.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-brand-card hover:bg-brand-card/80 border border-white/10 hover:border-brand-red/30 rounded-3xl p-8 transition-all group"
          >
            <Mail size={40} className="text-brand-orange mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-white font-bold text-2xl mb-2">Email</h3>
            <p className="text-gray-400 text-sm mb-4">Écrivez-nous</p>
            <p className="text-white text-lg break-all">contact@runtospain.com</p>
          </motion.a>

          {/* Adresse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-brand-card border border-white/10 rounded-3xl p-8"
          >
            <MapPin size={40} className="text-blue-400 mb-4" />
            <h3 className="text-white font-bold text-2xl mb-2">Adresse</h3>
            <p className="text-gray-400 text-sm mb-4">Notre siège social</p>
            <p className="text-white text-lg leading-relaxed">
              4 rue du Labech<br />
              34250 Palavas-les-Flots
            </p>
          </motion.div>
        </div>

        {/* Horaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-brand-red/10 to-brand-orange/10 border border-brand-red/20 rounded-3xl p-8 text-center"
        >
          <h3 className="text-white font-bold text-xl mb-4">Disponibilité</h3>
          <p className="text-gray-300 text-lg">
            📞 Disponibles <span className="text-brand-orange font-bold">7j/7</span> pour répondre à vos questions
          </p>
        </motion.div>
      </div>
    </div>
  )
}
