import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { sendViaFormspree } from '../../services/ContactService.js';
import { gsap } from '../../lib/gsap.js';
import SuccessCheck from './SuccessCheck.jsx';

const OBJETS = ['Commander des produits', 'Demande de devis / Importation', 'Question sur les produits', 'Autre demande'];
const INITIAL = { nom: '', email: '', objet: OBJETS[0], message: '', _gotcha: '' };
const field = 'w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50 dark:bg-gray-700 dark:text-white dark:border-gray-600';
const label = 'block text-sm font-medium text-slate-700 mb-1 dark:text-white';

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL);
  const [loading, setLoading] = useState(false);
  const [successCount, setSuccessCount] = useState(0);
  const formRef = useRef(null);

  const handleChange = (e) => setFormData((d) => ({ ...d, [e.target.name]: e.target.value }));

  // Secousse horizontale en cas d'erreur (x va-et-vient, puis retour à 0).
  const shake = () => gsap.fromTo(formRef.current, { x: -10 }, { x: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._gotcha) return; // champ piège rempli = robot : on ignore
    setLoading(true);
    try {
      // On n'envoie que les champs utiles (liste blanche), nettoyés.
      await sendViaFormspree({
        nom: formData.nom.trim(),
        email: formData.email.trim().toLowerCase(),
        objet: formData.objet,
        message: formData.message.trim(),
      });
      toast.success('Message envoyé avec succès !');
      setSuccessCount((n) => n + 1);
      setFormData(INITIAL);
    } catch {
      toast.error("Impossible d'envoyer le message pour le moment. Réessayez ou écrivez-nous sur WhatsApp.");
      shake();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} data-reveal className="space-y-4 bg-white p-2 dark:bg-black" onSubmit={handleSubmit} onInvalid={shake}>
      {/* Honeypot anti-spam : invisible pour les humains, Formspree rejette si rempli. */}
      <input type="text" name="_gotcha" value={formData._gotcha} onChange={handleChange}
        tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div data-field>
        <label htmlFor="nom" className={label}>Nom complet</label>
        <input id="nom" type="text" name="nom" value={formData.nom} onChange={handleChange} autoComplete="name"
          placeholder="Ex: Kouamé Franck" minLength={2} maxLength={80} className={field} required />
      </div>
      <div data-field>
        <label htmlFor="email" className={label}>Adresse Email</label>
        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email"
          placeholder="Ex: franckkouame@gmail.com" maxLength={120} className={field} required />
      </div>
      <div data-field>
        <label htmlFor="objet" className={label}>Objet de votre message</label>
        <select id="objet" name="objet" value={formData.objet} onChange={handleChange} className={field} required>
          {OBJETS.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div data-field>
        <label htmlFor="message" className={label}>Votre message</label>
        <textarea id="message" rows="4" name="message" value={formData.message} onChange={handleChange}
          placeholder="Écrivez votre message ici..." minLength={10} maxLength={2000} className={field} required />
      </div>

      <button type="submit" disabled={loading}
        className="w-full bg-blue-500 text-white p-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-sm cursor-pointer disabled:opacity-60 disabled:cursor-wait">
        {loading ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>
      <SuccessCheck play={successCount} />
    </form>
  );
}
