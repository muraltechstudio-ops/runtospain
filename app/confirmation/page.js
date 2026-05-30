'use client'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { getSortie } from '../../lib/sorties'
import { motion } from 'framer-motion'
import { CheckCircle2, Calendar, MapPin, Users, Clock, Mail, MessageSquare } from 'lucide-react'

export default function ConfirmationPage({ searchParams }) {
  const { sortie: sortieId, places, nom, email, method } = searchParams
  const sortie = getSortie(sortieId)

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4 bg-brand-dark flex items-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-green-500/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-xl mx-auto w-full text-center relative z-10">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 200 }}
            className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30 shadow-2xl shadow-green-500/20"
          >
            <CheckCircle2 size={48} className="text-green-500" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-display text-7xl md:text-8xl text-white mb-4 leading-none tracking-tighter">C'EST TOUT BON !</h1>
            <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">Merci <span className="text-white font-bold">{nom}</span> ! Votre place est réservée pour votre prochaine virée shopping.</p>
          </motion.div>

          {sortie && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-brand-card rounded-[2.5rem] p-8 border border-green-500/20 mb-8 text-left relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <CheckCircle2 size={120} className="text-green-500" />
              </div>
              
              <h2 className="font-bold text-white text-sm uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <div className="w-1 h-3 bg-green-500 rounded-full" />
                Détails du voyage
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/5"><Calendar size={16} className="text-brand-red" /></div>
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Date</div>
                    <div className="text-white font-bold">{sortie.label}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/5"><MapPin size={16} className="text-brand-red" /></div>
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Destinations</div>
                    <div className="text-white font-bold">{sortie.destinations.join(' & ')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/5"><Users size={16} className="text-brand-red" /></div>
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Places</div>
                    <div className="text-white font-bold">{places} voyageur{parseInt(places) > 1 ? 's' : ''}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/5"><Clock size={16} className="text-brand-red" /></div>
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Retour estimé</div>
                    <div className="text-white font-bold">{sortie.retourEstime}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-brand-card rounded-[2.5rem] p-10 border border-white/5 mb-10 text-left"
          >
            <h3 className="font-bold text-white text-sm uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <div className="w-1 h-3 bg-brand-orange rounded-full" />
              Prochaines étapes
            </h3>
            <div className="space-y-6">
              {[
                { icon: <Mail size={18} />, title: "Confirmation par email", text: `Un récapitulatif a été envoyé à ${email}` },
                { icon: <MessageSquare size={18} />, title: "Contact WhatsApp", text: "Nous vous contacterons la veille pour confirmer l'heure précise" },
                { icon: <Clock size={18} />, title: "Rendez-vous", text: "Présentez-vous 10 minutes avant le départ au point choisi" },
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/5 rounded-full flex items-center justify-center border border-white/5 text-brand-orange">
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-0.5">{step.title}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{step.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-10 py-5 rounded-2xl transition-all hover:scale-105">
              Retour à l'accueil
            </Link>
            <a href="https://wa.me/33600000000"
              target="_blank" rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-bold px-10 py-5 rounded-2xl transition-all hover:scale-105 shadow-xl shadow-green-600/20 flex items-center justify-center gap-2">
              <MessageSquare size={20} /> Une question ?
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
