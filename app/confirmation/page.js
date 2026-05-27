import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { getSortie } from '../../lib/sorties'

export default function ConfirmationPage({ searchParams }) {
  const { sortie: sortieId, places, nom, email, method } = searchParams
  const sortie = getSortie(sortieId)

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-4 bg-brand-dark flex items-center">
        <div className="max-w-xl mx-auto w-full text-center">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✅</span>
          </div>
          <h1 className="font-display text-6xl text-white mb-3">RÉSERVÉ !</h1>
          <p className="text-gray-400 text-lg mb-8">Merci {nom} ! Votre réservation est confirmée.</p>

          {sortie && (
            <div className="bg-brand-card rounded-2xl p-6 border border-green-500/20 mb-8 text-left space-y-4">
              <h2 className="font-bold text-white">Récapitulatif</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Date</span>
                  <span className="text-white font-semibold">{sortie.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Destinations</span>
                  <span className="text-white">{sortie.destinations.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Places</span>
                  <span className="text-white">{places}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Retour estimé</span>
                  <span className="text-white">{sortie.retourEstime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Paiement</span>
                  <span className="text-green-400 font-semibold">{method === 'stripe' ? 'Carte bancaire' : 'PayPal'} ✓</span>
                </div>
              </div>
            </div>
          )}

          <div className="bg-brand-card rounded-2xl p-6 border border-white/5 mb-8">
            <h3 className="font-bold text-white mb-3">Prochaines étapes</h3>
            <ul className="text-sm text-gray-400 space-y-2 text-left">
              <li>📧 Un email de confirmation a été envoyé à <strong className="text-white">{email}</strong></li>
              <li>💬 Vous recevrez les détails par WhatsApp la veille du départ</li>
              <li>⏰ Soyez au point de départ 5 min avant l'heure indiquée</li>
              <li>🛒 Prévoyez de l'argent pour vos achats en Espagne</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/"
              className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-full transition">
              Retour à l'accueil
            </Link>
            <a href="https://wa.me/33600000000"
              target="_blank" rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-full transition">
              💬 Nous contacter
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
