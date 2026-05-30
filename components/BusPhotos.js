'use client'
import { motion } from 'framer-motion'
import { Armchair, Snowflake, Users, Shield } from 'lucide-react'
import { useTranslation } from '../lib/useTranslation'

export default function BusPhotos() {
  const { t } = useTranslation()
  const features = [
    { icon: <Users size={24} />, label: t('bus.seats'), desc: t('bus.seatsDesc') },
    { icon: <Armchair size={24} />, label: t('bus.sieges'), desc: t('bus.siegesDesc') },
    { icon: <Snowflake size={24} />, label: t('bus.clim'), desc: t('bus.climDesc') },
    { icon: <Shield size={24} />, label: t('bus.assurance'), desc: t('bus.assuranceDesc') },
  ]

  return (
    <section className="py-24 px-4 bg-brand-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-semibold tracking-widest uppercase text-sm mb-3"
          >
            {t('bus.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white"
          >
            {t('bus.title')}
          </motion.h2>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-dark rounded-3xl p-8 border border-white/5 mb-8"
        >
          <h3 className="font-display text-3xl text-white text-center mb-10">{t('bus.comfort')}</h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-brand-red/30 transition-all group"
              >
                <div className="text-brand-red group-hover:scale-110 transition-transform flex-shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">{feat.label}</h4>
                  <p className="text-gray-500 text-xs">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-brand-red/10 border border-brand-red/20 rounded-xl px-6 py-3">
              <span className="text-6xl">🚐</span>
              <div className="text-left">
                <div className="text-white font-bold text-lg">{t('bus.seats')}</div>
                <div className="text-gray-400 text-xs">{t('bus.caption')}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Driver Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-red/10 to-brand-orange/10 border border-brand-red/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="text-6xl">👨‍✈️</div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-2">{t('bus.driverTitle')}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('bus.driverCreds')}
              <br />
              <span className="text-brand-orange font-semibold">{t('bus.driverSafety')}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
