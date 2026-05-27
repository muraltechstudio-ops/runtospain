import Link from 'next/link'

export default function Footer() {
  const WA_NUMBER = '33600000000'
  const WA_MSG = encodeURIComponent("Bonjour, je souhaite réserver une place pour une excursion en Espagne !")
  const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`

  return (
    <>
      <section id="contact" className="py-24 px-4 bg-brand-dark">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-3">Une question ?</p>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">ON VOUS RÉPOND</h2>
          <p className="text-gray-400 mb-10">Réponse rapide par WhatsApp ou par email.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full text-lg transition">
              💬 WhatsApp
            </a>
            <a href="mailto:contact@runtospain.com"
              className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition">
              ✉️ contact@runtospain.com
            </a>
          </div>

          <div className="bg-brand-card rounded-2xl p-6 border border-white/5 text-left">
            <h3 className="font-bold text-white mb-4">FAQ Rapide</h3>
            {[
              { q: 'Que puis-je acheter en Espagne ?', r: 'Tout ce que vous voulez pour usage personnel : vêtements, alimentation, cosmétiques, électronique, alcool et tabac dans les limites légales.' },
              { q: 'Les courses sont-elles incluses ?', r: 'Non, le prix de 49 € couvre uniquement le transport A/R. Vos achats sont à votre charge.' },
              { q: 'Puis-je annuler ma réservation ?', r: 'Oui, remboursement intégral jusqu\'à 7 jours avant la sortie. Voir nos CGV pour le détail.' },
              { q: 'Le conducteur est-il professionnel ?', r: 'Oui, titulaire du permis D international et carte VTC. Vous êtes en sécurité.' },
            ].map((item, i) => (
              <details key={i} className="border-b border-white/5 py-3 last:border-0">
                <summary className="text-gray-300 cursor-pointer hover:text-white transition font-medium">{item.q}</summary>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0c14] border-t border-white/5 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl">
            <span className="text-brand-red">RUN</span>
            <span className="text-white">TO</span>
            <span className="text-brand-orange">SPAIN</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/cgv" className="hover:text-white transition">CGV</Link>
            <Link href="/#contact" className="hover:text-white transition">Contact</Link>
            <Link href="/sorties" className="hover:text-white transition">Réserver</Link>
          </div>
          <p className="text-gray-600 text-xs">© 2026 RunToSpain · Montpellier</p>
        </div>
      </footer>

      <a href={WA_URL} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
        title="WhatsApp">
        💬
      </a>
    </>
  )
}
