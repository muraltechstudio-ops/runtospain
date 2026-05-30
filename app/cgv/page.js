import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = { title: 'CGV — RunToSpain' }

const articles = [
  { titre: "Article 1 — Identification du prestataire", contenu:
    "Rancurel Cyril (RunToSpain)\n" +
    "Micro-entrepreneur\n" +
    "SIREN : 403 345 317\n" +
    "Code APE : 4939B (Transports routiers réguliers de voyageurs)\n" +
    "TVA non applicable — art. 293 B du CGI\n" +
    "Adresse : 4 rue du Labech, 34250 Palavas-les-Flots\n" +
    "Tél. : 06 36 22 69 87\n" +
    "Email : contact@runtospain.com\n\n" +
    "Directeur de la publication : Rancurel Cyril\n" +
    "Hébergement : Vercel Inc., 340 S Lemon Ave #4133 Walnut, CA 91789, USA"
  },
  { titre: "Article 1 bis — Mentions légales", contenu:
    "Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), les mentions légales complètes sont disponibles sur cette page.\n\n" +
    "Assurance : Responsabilité civile professionnelle transport de personnes à titre onéreux — cf. Article 9."
  },
  { titre: "Article 2 — Objet", contenu: "Les présentes CGV régissent les prestations de transport occasionnel de personnes proposées par RunToSpain, notamment les excursions à la journée vers les marchés espagnols (La Jonquera — Mercado El Pertús) au départ de Montpellier, Sète et Béziers." },
  { titre: "Article 3 — Réservation", contenu: "La réservation s'effectue en ligne via le site runtospain.com ou par WhatsApp au 06 36 22 69 87. Elle est ferme et définitive après réception du paiement intégral. Un email de confirmation est envoyé au passager." },
  { titre: "Article 4 — Tarifs & Paiement", contenu: "Le prix de 49 € par personne (TTC, TVA non applicable) comprend le transport A/R et les bagages personnels. Il ne comprend pas les achats, la restauration ni les dépenses personnelles. Le paiement s'effectue par carte bancaire (Stripe) ou PayPal." },
  { titre: "Article 5 — Annulation & Remboursement", contenu: "• Plus de 7 jours avant la sortie : remboursement intégral.\n• Entre 3 et 7 jours avant : remboursement à 50 %.\n• Moins de 3 jours avant ou absence non signalée : aucun remboursement.\n• Annulation par RunToSpain (nombre insuffisant de passagers, cas de force majeure) : remboursement intégral sous 7 jours ou report sur une autre date." },
  { titre: "Article 5 bis — Droit de rétractation", contenu: "Conformément à l'article L.221-28 12° du Code de la consommation, le droit de rétractation est exclu pour les prestations de transport de personnes à une date ou à une période déterminée. Les conditions d'annulation contractuelles de l'Article 5 font seules foi." },
  { titre: "Article 6 — Obligations du passager", contenu: "Le passager s'engage à être présent au point de rendez-vous à l'heure indiquée dans l'email de confirmation. Tout retard supérieur à 10 minutes pourra entraîner le départ sans remboursement. Le port de la ceinture de sécurité est obligatoire pendant tout le trajet. Un comportement respectueux est exigé à bord." },
  { titre: "Article 7 — Bagages", contenu: "Les bagages sont transportés sous la responsabilité exclusive de leur propriétaire. RunToSpain ne saurait être tenu responsable des pertes, vols ou dommages, quelle qu'en soit la cause. Il est recommandé de ne pas laisser d'objets de valeur sans surveillance." },
  { titre: "Article 8 — Douane & Franchises", contenu: "Chaque passager est seul responsable du respect des franchises douanières en vigueur entre la France et l'Espagne. RunToSpain ne peut être tenu responsable des infractions, saisies ou amendes douanières individuelles. Le conducteur se réserve le droit de refuser l'accès au véhicule à tout passager transportant des marchandises prohibées ou en quantités manifestement excessives." },
  { titre: "Article 9 — Responsabilité & Assurance", contenu: "RunToSpain est couvert par une assurance responsabilité civile professionnelle adaptée au transport de personnes à titre onéreux (permis D international et carte VTC). La responsabilité de RunToSpain est limitée aux dommages directs prouvés, à l'exclusion de tout préjudice immatériel ou indirect." },
  { titre: "Article 10 — Protection des données (RGPD)", contenu:
    "Les données personnelles collectées (nom, prénom, email, téléphone) sont utilisées exclusivement pour la gestion des réservations et la communication liée au service.\n\n" +
    "• Responsable de traitement : Rancurel Cyril — contact@runtospain.com\n" +
    "• Finalité : réservation, confirmation, information des passagers\n" +
    "• Conservation : 3 ans après la dernière réservation\n" +
    "• Destinataires : aucune transmission à des tiers, hors obligations légales\n" +
    "• Droits : accès, rectification, suppression, opposition — par email à contact@runtospain.com\n" +
    "• Réclamation : droit de saisir la CNIL (cnil.fr)"
  },
  { titre: "Article 11 — Médiation & Droit applicable", contenu: "Les présentes CGV sont soumises au droit français. En cas de litige, le passager peut recourir gratuitement au Médiateur du Tourisme et du Voyage (MTV) : www.mtv.travel. À défaut de solution amiable, le tribunal compétent est celui de Montpellier." },
]

export default function CGVPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-brand-red/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-px bg-brand-red" />
              <span className="text-brand-red text-xs font-bold tracking-[0.3em] uppercase">Document légal</span>
              <div className="w-8 h-px bg-brand-red" />
            </div>
            <h1 className="font-display text-6xl md:text-8xl text-white leading-none">CONDITIONS<br/>GÉNÉRALES</h1>
            <p className="text-gray-500 text-sm mt-4 uppercase font-bold tracking-widest">RunToSpain · Transport occasionnel · 2026</p>
          </div>
          
          <div className="space-y-4">
            {articles.map((art, i) => (
              <div key={i} className="bg-brand-card rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors">
                <h2 className="font-bold text-white text-lg mb-4 flex items-center gap-3">
                  <span className="w-1 h-4 bg-brand-red rounded-full" />
                  {art.titre}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line pl-4 border-l border-white/5">{art.contenu}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
