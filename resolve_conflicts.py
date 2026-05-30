import re

with open('components/HowItWorks.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove conflict markers for the first block (heading)
old1 = '''<<<<<<< HEAD
        <div className="text-center mb-20">
          <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-4">
            Simple comme bonjour
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white">
            COMMENT ÇA MARCHE ?
          </h2>
=======
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
>>>>>>> 51a82b6 (@)'''

new1 = '''        <div className="text-center mb-16">
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
          </motion.h2>'''

content = content.replace(old1, new1)
print(f'After block 1: <<<<<<< count = {content.count("<<<<<<<")}')

# Remove conflict markers for the second block (steps + itinerary)
old2 = '''<<<<<<< HEAD
            <div key={i} className="relative bg-brand-card rounded-2xl p-8 border border-white/6 hover:border-brand-red/40 transition-all duration-300 ease-in-out group">
              <div className="font-display text-7xl text-white/6 group-hover:text-brand-red/15 transition-all duration-300 absolute top-4 right-4">{s.n}</div>
              <div className="text-5xl mb-6">{s.icon}</div>
              <h3 className="font-bold text-white text-xl mb-3">{s.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-brand-card rounded-2xl p-10 border border-white/6">
          <h3 className="font-display text-3xl md:text-4xl text-white mb-8 text-center">L'ITINÉRAIRE</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-0">
            {[
              { ville: 'Montpellier', heure: '06h00', flag: '\U0001f3d9️' },
              { ville: 'Sète', heure: '06h30', flag: '⚓' },
              { ville: 'Béziers', heure: '07h00', flag: '\U0001f3db️' },
              { ville: 'La Jonquera', heure: '~09h00', flag: '\U0001f1ea\U0001f1f8' },
              { ville: 'Retour', heure: '~19h00', flag: '\U0001f3e0' },
            ].map((stop, i, arr) => (
              <div key={i} className="flex flex-col md:flex-row items-center">
                <div className="text-center px-4 py-3">
                  <div className="text-3xl mb-2">{stop.flag}</div>
                  <div className="text-white font-semibold text-base">{stop.ville}</div>
                  <div className="text-brand-orange text-sm">{stop.heure}</div>
                </div>
                {i < arr.length - 1 && (
                  <div className="text-brand-red text-3xl md:rotate-0 rotate-90 mx-2">
                    →
                  </div>
=======
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
>>>>>>> 51a82b6 (@)'''

new2 = '''            <motion.div
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
                  </motion.div>'''

content = content.replace(old2, new2)
print(f'After block 2: <<<<<<< count = {content.count("<<<<<<<")}')
print(f'======= count = {content.count("=======")}')
print(f'>>>>>>> count = {content.count(">>>>>>>")}')

with open('components/HowItWorks.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done')
