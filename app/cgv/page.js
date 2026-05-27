import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = { title: 'CGV — RunToSpain' }

const articles = [
  { titre: "Article 1 — Identification du prestataire", contenu: "[Votre Prénom NOM]\nMicro-entrepreneur — SIRET : [XXXXXXXXXXXXXXXXX]\nCode APE : 4939B\nEmail : contact@runtospain.com" },
  { titre: "Article 2 — Objet", contenu: "Les présentes CGV régissent les prestations de transport occasionnel de personnes proposées par RunToSpain, notamment les excursions à la journée vers les marchés espagnols au départ de Montpellier, Sète et Béziers." },
  { titre: "Article 3 — Réservation", contenu: "La réservation s'effectue en ligne via runtospain.com ou par WhatsApp. Elle est confirmée après réception du paiement intégral." },
  { titre: "Article 4 — Tarifs", contenu: "Le prix de 49€ par personne comprend le transport A/R et les bagages personnels. Il ne comprend pas les achats, la restauration ni les dépenses personnelles." },
  { titre: "Article 5 — Annulation", contenu: "• Plus de 7 jours avant : remboursement intégral.\n• Entre 3 et 7 jours : remboursement à 50%.\n• Moins de 3 jours ou absence : aucun remboursement.\n• Annulation par RunToSpain : remboursement intégral sous 7 jours." },
  { titre: "Article 6 — Obligations du passager", contenu: "Le passager s'engage à être présent à l'heure indiquée. Tout retard supérieur à 10 minutes pourra entraîner le départ sans remboursement. Le port de la ceinture est obligatoire." },
  { titre: "Article 7 — Bagages", contenu: "Les bagages sont transportés sous la responsabilité exclusive de leur propriétaire. RunToSpain ne saurait être tenu responsable de pertes, vols ou dommages." },
  { titre: "Article 8 — Douane", contenu: "Chaque passager est seul responsable du respect des franchises douanières. RunToSpain ne peut être tenu responsable des infractions douanières individuelles." },
  { titre: "Article 9 — Responsabilité", contenu: "RunToSpain est couvert par une assurance RC professionnelle transport de personnes à titre onéreux." },
  { titre: "Article 10 — RGPD", contenu: "Les données collectées sont utilisées uniquement pour la gestion des réservations. Elles ne sont ni vendues ni transmises à des tiers." },
  { titre: "Article 11 — Litiges", contenu: "Les présentes CGV sont soumises au droit français. Tribunal compétent : Montpellier." },
]

export default function CGVPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-4 bg-brand-dark">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="font-display text-6xl text-white mb-2">CONDITIONS<br/>GÉNÉRALES DE VENTE</h1>
            <p className="text-gray-500 text-sm">RunToSpain — Transport occasionnel — 2026</p>
          </div>
          <div className="space-y-6">
            {articles.map((art, i) => (
              <div key={i} className="bg-brand-card rounded-2xl p-6 border border-white/5">
                <h2 className="font-bold text-white mb-3">{art.titre}</h2>
                <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{art.contenu}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
