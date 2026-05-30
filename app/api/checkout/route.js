import Stripe from 'stripe'
import { getSortie } from '../../../lib/sorties'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(request) {
  try {
    const { sortieId, places, client, locale } = await request.json()
    const sortie = getSortie(sortieId)

    if (!sortie) return Response.json({ error: 'Sortie introuvable' }, { status: 404 })
    if (places > sortie.placesRestantes) return Response.json({ error: 'Plus assez de places' }, { status: 400 })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      locale: locale || 'fr',
      customer_email: client.email,
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: `RunToSpain — ${sortie.label}`,
            description: `${places} place(s) · Départ ${client.depart} · ${sortie.destinations.join(', ')}`,
          },
          unit_amount: sortie.prix * 100,
        },
        quantity: places,
      }],
      metadata: {
        sortieId,
        places: places.toString(),
        nom: client.nom,
        prenom: client.prenom,
        email: client.email,
        telephone: client.telephone,
        depart: client.depart,
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/confirmation?sortie=${sortieId}&places=${places}&nom=${client.nom}&email=${client.email}&method=stripe`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/reserver/${sortieId}`,
    })

    return Response.json({ sessionId: session.id })
  } catch (err) {
    console.error('Stripe error:', err)
    return Response.json({ error: err.message }, { status: 500 })
  }
}
