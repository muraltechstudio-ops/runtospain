'use client'
import { motion } from 'framer-motion'
import { MapPin, Clock, Navigation } from 'lucide-react'
import { useTranslation } from '../lib/useTranslation'

export default function RouteMap() {
  const { t } = useTranslation()
  const stops = [
    {
      ville: 'Montpellier',
      heure: '08h00',
      lieu: 'Parking Burger King Montpellier Sud',
      flag: '🏙️',
      color: 'bg-blue-500'
    },
    {
      ville: 'Sète',
      heure: '08h30',
      lieu: 'Sortie autoroute A9',
      flag: '⚓',
      color: 'bg-cyan-500'
    },
    {
      ville: 'Béziers',
      heure: '09h00',
      lieu: 'Sortie autoroute A9',
      flag: '🏛️',
      color: 'bg-purple-500'
    },
    {
      ville: 'La Jonquera',
      heure: '~10h15',
      lieu: 'Gran Jonquera & La Tramontana',
      flag: '🇪🇸',
      color: 'bg-brand-red',
      isDestination: true
    },
  ]

  return (
    <section className="py-24 px-4 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Navigation className="text-brand-red" size={20} />
            <span className="text-brand-red font-semibold tracking-widest uppercase text-sm">
              {t('map.detail')}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white"
          >
            {t('map.title')}
          </motion.h2>
        </div>

        {/* Desktop Route */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Route Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 via-purple-500 to-brand-red transform -translate-y-1/2" />

            <div className="relative flex justify-between items-center">
              {stops.map((stop, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, type: "spring" }}
                  className="flex flex-col items-center relative"
                >
                  {/* Pin */}
                  <motion.div
                    whileHover={{ scale: 1.2, y: -5 }}
                    className={`${stop.color} w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl border-4 border-brand-dark relative z-10 cursor-pointer ${stop.isDestination ? 'ring-4 ring-brand-orange/50 animate-pulse' : ''}`}
                  >
                    {stop.flag}
                  </motion.div>

                  {/* Info Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.3 }}
                    className={`mt-6 bg-brand-card rounded-2xl p-6 border ${stop.isDestination ? 'border-brand-red' : 'border-white/5'} min-w-[200px] text-center`}
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock size={14} className="text-brand-orange" />
                      <span className="text-brand-orange font-mono font-bold text-sm">{stop.heure}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">{stop.ville}</h3>
                    <div className="flex items-center justify-center gap-1 text-gray-500 text-xs">
                      <MapPin size={12} />
                      <span>{stop.lieu}</span>
                    </div>
                    {stop.isDestination && (
                      <div className="mt-3 bg-brand-red/20 text-brand-red px-3 py-1 rounded-full text-xs font-bold">
                        {t('map.timeOnSite')}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Route */}
        <div className="md:hidden space-y-4">
          {stops.map((stop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className={`${stop.color} w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-xl flex-shrink-0 ${stop.isDestination ? 'ring-4 ring-brand-orange/50' : ''}`}>
                {stop.flag}
              </div>
              <div className={`flex-1 bg-brand-card rounded-xl p-4 border ${stop.isDestination ? 'border-brand-red' : 'border-white/5'}`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-bold">{stop.ville}</h3>
                  <span className="text-brand-orange font-mono font-bold text-sm">{stop.heure}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <MapPin size={12} />
                  <span>{stop.lieu}</span>
                </div>
              </div>
              {i < stops.length - 1 && (
                <div className="absolute left-7 w-px h-8 bg-gradient-to-b from-white/20 to-transparent translate-y-14" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Retour Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-brand-red/10 to-brand-orange/10 border border-brand-red/20 rounded-3xl p-8 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-6xl">🏠</div>
            <div className="text-left">
              <h3 className="text-white font-bold text-xl mb-2">{t('map.return')}</h3>
              <p className="text-gray-400 text-sm">
                {t('map.returnDetail')}
                <br />
                <span className="text-brand-orange font-semibold">{t('map.timeOnSite')}</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Lunch Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 bg-brand-card border border-white/5 rounded-3xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-6xl">🍽️</div>
            <div className="text-left flex-1">
              <h3 className="text-white font-bold text-xl mb-2">{t('map.lunch')}</h3>
              <p className="text-gray-400 text-sm mb-3">
                {t('map.lunchDesc')}
              </p>
              <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-brand-orange font-bold text-2xl">{t('map.lunchPrice')}</span>
                  <span className="text-white text-sm font-semibold">{t('map.perPerson')}</span>
                </div>
                <p className="text-gray-400 text-xs">
                  {t('map.lunchDetail')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
