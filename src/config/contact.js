// src/config/contact.js
// Toutes les coordonnées de l'entreprise au même endroit.
// Change une valeur ici : elle est mise à jour sur tout le site.
export const CONTACT = {
  phoneDisplay: '+225 01 40 09 78 85',
  phoneHref: 'tel:+2250140097885',
  whatsappNumber: '8615710052793', // format international, sans + ni espaces
  whatsappDisplay: '+86 157 1005 2793',
  email: 'zenithbridge@gmail.com',
  formspreeEndpoint: 'https://formspree.io/f/xbdnkajp',
};

/** Construit un lien WhatsApp avec un message pré-rempli (texte encodé). */
export function whatsappLink(message = '') {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
