'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { sorties } from '../../../lib/sorties'
import { loadStripe } from '@stripe/stripe-js'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Link from 'next/link'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function ReservationPage() {
  const params = useParams()
  const sortie = sorties.find(s => s.id === params.id)
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', telephone: '', depart: '', places: 1, cgv: false })
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (!sortie) return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center text-white">
      <div className="text-center">
        <p className="text-2xl mb-4">Sortie introuvable.</p>
        <Link href="/sorties" className="text-brand-red underline">Voir les sorties disponibles</Link>
      </div>
    </div>
  )

  const total = form.places * sortie.prix

  const validateForm = () => {
    if (!form.nom || !form.prenom || !form.email || !form.telephone || !form.depart) {
      setError('Merci de remplir tous les champs.'); return false
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError('Email invalide.'); return false
    }
    if (!form.cgv) {
      setError('Vous devez accepter les CGV.'); return false
    }
    setError(''); return true
  }

  const handleStripe = async () => {
    if (!validateForm()) return
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sortieId: sortie.id, places: form.places, client: form }),
      })
      const { sessionId } = await res.json()
      const stripe = await stripePromise
      await stripe.redirectToCheckout({ sessionId })
    } catch (e) {
      setError('Erreur lors du paiement. Réessayez ou contactez-nous.')
    }
    setLoading(false)
  }

  const Field = ({ label, name, type = 'text', placeholder }) => (
    <div>
      <label className="block text-sm text-gray-400 mb-1">{label}</label>
      <input type={type} value={form[name]}
        onChange={e => setForm({ ...form, [name]: e.target.value })}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-red transition"
      />
    </div>
  )

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-4 bg-brand-dark">
        <div className="max-w-2xl mx-auto">
          <Link href="/sorties" className="text-gray-400 hover:text-white text-sm mb-6 inline-block transition">← Retour aux sorties</Link>
          <h1 className="font-display text-5xl text-white mb-2">RÉSERVER</h1>
          <p className="text-gray-400 mb-8">{sortie.label} — {sortie.destinations.join(', ')}</p>

          <div className="bg-brand-card rounded-2xl p-6 border border-white/5 mb-8">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><div className="text-gray-500 mb-1">Date</div><div className="text-white font-semibold">{sortie.label}</div></div>
              <div><div className="text-gray-500 mb-1">Retour estimé</div><div className="text-white font-semibold">{sortie.retourEstime}</div></div>
              <div><div className="text-gray-500 mb-1">Places restantes</div><div className="text-green-400 font-semibold">{sortie.placesRestantes}/{sortie.placesTotal}</div></div>
              <div><div className="text-gray-500 mb-1">Prix</div><div className="text-brand-orange font-bold text-lg">{sortie.prix}€ / pers.</div></div>
            </div>
          </div>

          {step === 1 && (
            <div className="bg-brand-card rounded-2xl p-6 border border-white/5 space-y-4">
              <h2 className="font-bold text-white text-lg mb-2">Vos informations</h2>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Prénom *" name="prenom" placeholder="Marie" />
                <Field label="Nom *" name="nom" placeholder="Dupont" />
              </div>
              <Field label="Email *" name="email" type="email" placeholder="marie@exemple.fr" />
              <Field label="Téléphone / WhatsApp *" name="telephone" placeholder="06 12 34 56 78" />
              <div>
                <label className="block text-sm text-gray-400 mb-1">Point de départ *</label>
                <select value={form.depart} onChange={e => setForm({ ...form, depart: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red transition">
                  <option value="" className="bg-brand-dark">Choisissez votre point de départ</option>
                  {sortie.departs.map(d => (
                    <option key={d.ville} value={d.ville} className="bg-brand-dark">
                      {d.ville} — {d.lieu} ({d.heure})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Nombre de places</label>
                <select value={form.places} onChange={e => setForm({ ...form, places: parseInt(e.target.value) })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-red transition">
                  {Array.from({ length: Math.min(sortie.placesRestantes, 4) }, (_, i) => i + 1).map(n => (
                    <option key={n} value={n} className="bg-brand-dark">{n} place{n > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={form.cgv} onChange={e => setForm({ ...form, cgv: e.target.checked })}
                  className="mt-1 accent-brand-red" />
                <span className="text-sm text-gray-400">
                  J'accepte les <Link href="/cgv" target="_blank" className="text-brand-red underline">CGV</Link> et confirme avoir lu les informations sur la sortie.
                </span>
              </label>
              {error && <p className="text-brand-red text-sm">{error}</p>}
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-gray-400">Total ({form.places} place{form.places > 1 ? 's' : ''})</span>
                <span className="font-display text-4xl text-white">{total}€</span>
              </div>
              <button onClick={() => { if (validateForm()) setStep(2) }}
                className="w-full bg-brand-red hover:bg-red-600 text-white font-bold py-4 rounded-xl text-lg transition">
                Choisir le paiement →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="bg-brand-card rounded-2xl p-6 border border-white/5 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-white text-lg">Paiement sécurisé</h2>
                <button onClick={() => setStep(1)} className="text-gray-400 hover:text-white text-sm transition">← Modifier</button>
              </div>
              <div className="flex justify-between text-sm bg-white/5 rounded-xl p-4">
                <span className="text-gray-400">{form.prenom} {form.nom} — {form.places} place{form.places > 1 ? 's' : ''}</span>
                <span className="text-white font-bold">{total}€</span>
              </div>
              <button onClick={handleStripe} disabled={loading}
                className="w-full bg-[#635BFF] hover:bg-[#5046e5] text-white font-bold py-4 rounded-xl text-lg transition flex items-center justify-center gap-3">
                {loading ? 'Redirection…' : `💳 Payer par carte — ${total}€`}
              </button>
              <div className="relative flex items-center gap-4">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-gray-500 text-sm">ou</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, currency: 'EUR' }}>
                <PayPalButtons
                  style={{ layout: 'horizontal', color: 'gold', shape: 'pill', label: 'paypal', height: 48 }}
                  createOrder={(data, actions) => actions.order.create({
                    purchase_units: [{ amount: { value: total.toString(), currency_code: 'EUR' },
                      description: `RunToSpain — ${sortie.label} — ${form.places} place(s)` }]
                  })}
                  onApprove={async (data, actions) => {
                    await actions.order.capture()
                    window.location.href = `/confirmation?sortie=${sortie.id}&places=${form.places}&nom=${form.nom}&email=${form.email}&method=paypal`
                  }}
                  onError={() => setError('Erreur PayPal. Essayez la carte bancaire.')}
                />
              </PayPalScriptProvider>
              {error && <p className="text-brand-red text-sm">{error}</p>}
              <p className="text-gray-600 text-xs text-center">🔒 Paiement 100% sécurisé — Stripe & PayPal</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
