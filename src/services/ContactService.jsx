// src/services/contactService.js

// const FORMSPREE_ENDPOINT_TEST = process.env.REACT_APP_FORMSPREE_ENDPOINT;
// const CONTACT_NUMBER = process.env.REACT_APP_CONTACT_NUMBER;
// const WHATSAPP_NUMBER_2 = process.env.REACT_APP_WHATSAPP_NUMBER;
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdnkajp";
const WHATSAPP_NUMBER = "2250101030363";


/**
 * Envoie le formulaire via Formspree (API)
 */
export const sendViaFormspree = async (formData) => {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Erreur lors de l'envoi du message.");
  }

  return response;
};

/**
 * Envoie le message via mon WhatsApp
 */
export const sendViaWhatsApp = (formData) => {
  const message = `Bonjour Zenith Bridge !\n\n*Nom:* ${formData.nom}\n*Email:* ${formData.email}\n*Objet:* ${formData.objet}\n*Message:* ${formData.message}`;
  const encodedText = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, "_blank");
};


/**
 * Sauvegarde le message dans le LocalStorage
 */
export const saveToLocalStorage = (formData) => {
  const existingMessages = JSON.parse(localStorage.getItem("messages")) || [];
  const updatedMessages = [...existingMessages, { ...formData, date: new Date().toISOString() }];
  localStorage.setItem("messages", JSON.stringify(updatedMessages));
};