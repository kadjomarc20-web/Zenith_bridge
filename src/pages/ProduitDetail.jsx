import { Link, useParams } from 'react-router-dom';
import { MessageCircle, ArrowLeft, Plane, ShieldCheck } from 'lucide-react';
import { produits } from '../data/produits';
import WhatsappIcon from '../components/social/meta.jsx';

function ProduitDetail() {
  const { id } = useParams();
  
  // Comparaison sécurisée (convertit les deux côtés en string)
  const p = produits.find((item) => String(item.id) === String(id));

  // Numéro WhatsApp des frérots (Format international sans + ni espaces)
  // Ex: 2250700000000 pour la Côte d'Ivoire
  const whatsappNumber = "2250000000000"; 

  if (!p) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center dark:bg-black">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Produit introuvable</h2>
        <p className="text-slate-600 mt-4 max-w-xl dark:text-gray-300">
          Ce produit n'est plus disponible ou l'identifiant est incorrect. Retournez au catalogue pour découvrir nos autres articles.
        </p>
        <Link
          to="/produit"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold transition hover:bg-blue-700"
        >
          <ArrowLeft size={18} />
          Retour au catalogue
        </Link>
      </div>
    );
  }

  // Génération du lien WhatsApp personnalisé avec le nom du produit
  const messageWhatsApp = encodeURIComponent(
    `Bonjour ! Je suis intéressé(e) par le produit "${p.nom}". Pouvez-vous me donner plus d'informations sur la disponibilité et la livraison ?`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${messageWhatsApp}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-6 sm:py-10 dark:bg-black">
      <div className="w-full max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl md:p-8 dark:bg-gray-900 dark:border-gray-700">
        
        {/* En-tête de la page */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-500">
              Fiche Produit & Importation
            </p>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">{p.nom}</h1>
            <p className="text-slate-600 max-w-2xl leading-relaxed dark:text-gray-300">
              Consultez les détails de cet article importé directement de Chine. Contactez-nous sur WhatsApp pour commander ou demander un devis de livraison.
            </p>
          </div>
          <Link
            to="/produit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <ArrowLeft size={16} />
            Retour au catalogue
          </Link>
        </div>

        {/* Section principale : Image + Détails */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          
          {/* Image du produit */}
          <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-lg dark:bg-gray-800 flex items-center justify-center">
            <img src={p.image} alt={p.nom} className="w-full h-96 object-cover" />
          </div>

          {/* Informations produit */}
          <div className="flex flex-col justify-between space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{p.nom}</h2>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">
                    Sourcing Chine — CIV
                  </p>
                </div>
                
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-slate-600 leading-7 dark:text-gray-300">{p.description}</p>
                <p className="text-sm text-slate-500 dark:text-gray-400">
                  Article vérifié en usine avant expédition. Qualité garantie pour vos achats en gros ou au détail.
                </p>
              </div>

              {/* Cartes d'informations Logistique */}
              <div className="grid gap-3 sm:grid-cols-2 pt-2">
                <div className="rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-600 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <Plane className="text-blue-500 shrink-0 mt-0.5" size={18} />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Expédition</h3>
                    <p className="mt-0.5">Par Fret Aérien (7-10 jours) ou Maritime (30-40 jours).</p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-600 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <ShieldCheck className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Garantie Qualité</h3>
                    <p className="mt-0.5">Produit inspecté sur place en Chine avant l'envoi.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bouton de commande WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-emerald-700 shadow-lg shadow-emerald-600/20"
            >
              <WhatsappIcon className="w-6 h-6 text-white" />
              Commander sur WhatsApp
            </a>

          </div>
        </div>
      </div>
    </div>
  ); 
}

export default ProduitDetail;