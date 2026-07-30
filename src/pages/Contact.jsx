import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
// Import des fonctions de mon service
import { sendViaFormspree } from '../services/ContactService';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
    useScrollReveal();
  
    const initialFormState = {
    nom: '',
    email: '',
    objet: 'Reservation de table',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      // Utilisation du service externe
      await sendViaFormspree(formData);
       // Toast de succès
       toast.success('Message envoyé avec succès !', {
       duration: 4000,
       position: 'top-center',
          style: {
                  background: '#10B981',
                  color: '#fff',
                },
          
            });      
      setFormData(initialFormState);
    } catch (error) {
      console.error("Erreur :", error);
      toast.error('Impossible d\'envoyer le message pour le moment.', {
                duration: 1000,
                position: 'top-center',
                style: {
                    background: '#EF4444',
                    color: '#fff',
                },
            });
    }
    finally {
      setLoading(false);
    }
  };
  
  
  return (
    <>
      <Toaster 
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    duration: 1000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                        padding: '16px',
                        borderRadius: '8px',
                    },
                }}
            />



    <div className="reveal-init space-y-12 py-6 dark:bg-black dark:text-white">
      {/* En-tête de la page */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-500">Contactez-nous</h1>       
        <p className="text-slate-500 dark:text-gray-300">Une question, une envie de commander ? Écrivez-nous !</p>
      </div>

      {/* Grille : Infos à gauche, Formulaire à droite */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* COLONNE GAUCHE : INFOS PRATIQUES */}
        <div className="reveal-init bg-blue-50 p-8 rounded-2xl space-y-6 dark:bg-gray-800">
         
         
          <div>
                <h2 className="text-xl font-bold text-slate-800 mb-2 dark:text-white">Contact Direct</h2>
                <div className="text-slate-600 space-y-2 flex flex-col dark:text-gray-300">
                    
                    {/* Lien Téléphone */}
                    <a href="tel:+2250101030363" className="hover:text-blue-400 transition flex items-center gap-1">
                    📞 Téléphone : +225 01 40 09 78 85
                    </a>
                    
                    {/* Lien WhatsApp */}
                    <a href="https://wa.me/8615710052793" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition flex items-center gap-1">
                    💬 WhatsApp : +86 157 1005 2793
                    </a>
                    
                    {/* Lien Email */}
                    <a href="mailto:zenithbridge@gmail.com" className="hover:text-blue-600 transition flex items-center gap-1">
                    ✉️ Email : zenithbridge@gmail.com
                    </a>
                    
                </div>
            </div>
        </div>

        {/* COLONNE DROITE : POUR NOTRE FORMULAIRE */}
        <form className=" reveal-init space-y-4 bg-white p-2 dark:bg-black" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1 dark:text-white">Nom complet</label>
            <input 
              type="text" 
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Ex: Kouamé Franck" 
              className="w-full p-3 rounded-xl border border-slate-200 
              focus:outline-none focus:border-blue-500 bg-slate-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1 dark:text-white">Adresse Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ex: utilisateur@email.com" 
              className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1 dark:text-white">Objet de votre message</label>
            <select className="w-full p-3 rounded-xl border border-slate-200
             focus:outline-none focus:border-blue-500
              bg-slate-50 dark:bg-gray-700
               dark:text-white dark:border-gray-600"
               name="objet"
               value={formData.objet}
               onChange={handleChange}
               required
            >
              <option>Commander des produits</option>
              <option>Privatisation / Événement</option>
              <option>Question sur les produits</option>
              <option>Autre demande</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1 dark:text-white">Votre message</label>
            <textarea 
              rows="4" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Écrivez votre message ici..." 
              className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-500 text-white p-3 rounded-xl font-semibold 
            hover:bg-blue-700 transform transition-all duration-600 ease-in-out shadow-sm hover:cursor-pointer hover:scale-105
             "
          >
            {loading ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </form>

      </div>
    </div>
    </>
  );
}