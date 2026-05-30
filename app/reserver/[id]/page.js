'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { sorties } from '../../../lib/sorties'
import { loadStripe } from '@stripe/stripe-js'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, CreditCard, ShieldCheck } from 'lucide-react'

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
        <p className="text-2xl mb-4 font-display">Sortie introuvable.</p>
        <Link href="/sorties" className="bg-brand-red px-8 py-3 rounded-xl font-bold transition hover:scale-105">Voir les sorties disponibles</Link>
      </div>
    </div>
  )

  const total = form.places * sortie.prix

  const validateForm = () => {
    if (!form.nom || !form.prenom || !form.email || !form.telephone || !form.depart) {
      setError('Merci de remplir tous les champs obligatoires.'); return false
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
      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">{label}</label>
      <input type={type} value={form[name]}
        onChange={e => setForm({ ...form, [name]: e.target.value })}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-red transition-all"
      />
    </div>
  )

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-brand-red/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-2xl mx-auto relative z-10">
          <Link href="/sorties" className="flex items-center gap-2 text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest mb-10 transition-colors">
            <ChevronLeft size={16} /> Retour aux sorties
          </Link>
          
          <div className="mb-10">
            <h1 className="font-display text-7xl text-white leading-none mb-4 uppercase tracking-tighter">RÉSERVER</h1>
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-brand-red" />
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{sortie.label} — {sortie.destinations.join(', ')}</p>
            </div>
          </div>

          <div className="bg-brand-card rounded-3xl p-8 border border-white/5 mb-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="text-8xl">🚌</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              <div><div className="text-gray-600 text-[9px] font-bold uppercase tracking-widest mb-2">Date</div><div className="text-white font-bold text-sm">{sortie.label}</div></div>
              <div><div className="text-gray-600 text-[9px] font-bold uppercase tracking-widest mb-2">Retour estimé</div><div className="text-white font-bold text-sm">{sortie.retourEstime}</div></div>
              <div><div className="text-gray-600 text-[9px] font-bold uppercase tracking-widest mb-2">Disponibilité</div><div className="text-green-400 font-bold text-sm">{sortie.placesRestantes} places</div></div>
              <div><div className="text-gray-600 text-[9px] font-bold uppercase tracking-widest mb-2">Prix A/R</div><div className="text-brand-orange font-display text-2xl">{sortie.prix}€</div></div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-brand-card rounded-[2.5rem] p-10 border border-white/5 space-y-6 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-brand-red" />
                  <h2 className="font-bold text-white text-xl tracking-tight">VOS INFORMATIONS</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Prénom *" name="prenom" placeholder="Ex: Marie" />
                  <Field label="Nom *" name="nom" placeholder="Ex: Dupont" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Email *" name="email" type="email" placeholder="marie@exemple.fr" />
                  <Field label="Téléphone / WhatsApp *" name="telephone" placeholder="06 12 34 56 78" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Point de départ *</label>
                    <select value={form.depart} onChange={e => setForm({ ...form, depart: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-red transition-all appearance-none cursor-pointer">
                      <option value="" className="bg-brand-dark">Choisir un point de départ</option>
                      {sortie.departs.map(d => (
                        <option key={d.ville} value={d.ville} className="bg-brand-dark text-sm">
                          {d.ville} — {d.lieu} ({d.heure})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Nombre de places</label>
                    <select value={form.places} onChange={e => setForm({ ...form, places: parseInt(e.target.value) })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-brand-red transition-all appearance-none cursor-pointer">
                      {Array.from({ length: Math.min(sortie.placesRestantes, 4) }, (_, i) => i + 1).map(n => (
                        <option key={n} value={n} className="bg-brand-dark text-sm">{n} place{n > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input type="checkbox" checked={form.cgv} onChange={e => setForm({ ...form, cgv: e.target.checked })}
                      className="mt-1 w-5 h-5 accent-brand-red rounded-lg" />
                    <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                      J'accepte les <Link href="/cgv" target="_blank" className="text-brand-red underline font-bold">CGV</Link> et je confirme avoir pris connaissance des détails de la sortie.
                    </span>
                  </label>
                </div>

                {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-brand-red text-xs font-bold uppercase tracking-widest text-center">{error}</motion.p>}
                
                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-1">Total à régler</span>
                    <span className="font-display text-5xl text-white">{total}€</span>
                  </div>
                  <button onClick={() => { if (validateForm()) setStep(2) }}
                    className="bg-brand-red hover:bg-red-600 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand-red/20">
                    Paiement →
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-brand-card rounded-[2.5rem] p-10 border border-white/5 space-y-8 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-orange to-brand-red opacity-30" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-brand-red" size={24} />
                    <h2 className="font-bold text-white text-xl tracking-tight uppercase">PAIEMENT SÉCURISÉ</h2>
                  </div>
                  <button onClick={() => setStep(1)} className="text-gray-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">← Modifier</button>
                </div>

                <div className="flex justify-between items-center bg-white/5 rounded-2xl p-6 border border-white/5">
                  <div>
                    <div className="text-white font-bold text-sm mb-1">{form.prenom} {form.nom}</div>
                    <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{form.places} place{form.places > 1 ? 's' : ''} · {form.depart}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-brand-orange font-display text-3xl leading-none mb-1">{total}€</div>
                    <div className="text-gray-600 text-[9px] font-bold uppercase tracking-tighter">Total TTC</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button onClick={handleStripe} disabled={loading}
                    className="w-full bg-[#635BFF] hover:bg-[#5046e5] text-white font-bold py-5 rounded-2xl text-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-[#635BFF]/20">
                    {loading ? 'Connexion à Stripe...' : <><CreditCard size={20} /> Payer par carte bancaire</>}
                  </button>

                  <div className="relative flex items-center gap-4 py-2">
                    <div className="flex-1 h-px bg-white/5" />
                    <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">ou</span>
                    <div className="flex-1 h-px bg-white/5" />
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-white/5 p-4 bg-white/[0.02]">
                    <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, currency: 'EUR' }}>
                      <PayPalButtons
                        style={{ layout: 'horizontal', color: 'gold', shape: 'rect', label: 'paypal', height: 54 }}
                        createOrder={(data, actions) => actions.order.create({
                          purchase_units: [{ amount: { value: total.toString(), currency_code: 'EUR' },
                            description: `RunToSpain — ${sortie.label} — ${form.places} place(s)` }]
                        })}
                        onApprove={async (data, actions) => {
                          await actions.order.capture()
                          window.location.href = `/confirmation?sortie=${sortie.id}&places=${form.places}&nom=${form.nom}&email=${form.email}&method=paypal`
                        }}
                        onError={() => setError('Erreur PayPal. Essayez le paiement par carte.')}
                      />
                    </PayPalScriptProvider>
                  </div>
                </div>

                {error && <p className="text-brand-red text-center text-xs font-bold uppercase tracking-widest">{error}</p>}
                
                <div className="flex flex-col items-center gap-4 pt-4">
                  <div className="flex items-center gap-6 opacity-40 grayscale">
                    <img src="https://i.postimg.cc/85zX3S0p/Stripe-Logo-v2.png" alt="Stripe" className="h-4" />
                    <img src="https://i.postimg.cc/mD3Xv3Z6/PayPal-Logo.png" alt="PayPal" className="h-4" />
                  </div>
                  <p className="text-gray-600 text-[9px] uppercase font-bold tracking-[0.2em]">Transaction 100% sécurisée · Pas de frais cachés</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  )
}
