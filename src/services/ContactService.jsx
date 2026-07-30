// src/services/contactService.js

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdnkajp";
const WHATSAPP_NUMBER = "2250101030363";
const TELEGRAM_USERNAME = "ChezChristyOfficiel";

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
  const message = `Bonjour Chez Christy !\n\n*Nom:* ${formData.nom}\n*Email:* ${formData.email}\n*Objet:* ${formData.objet}\n*Message:* ${formData.message}`;
  const encodedText = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, "_blank");
};

/**
 * Envoie le message via mon Telegram
 */
export const sendViaTelegram = (formData) => {
  const message = `Bonjour Chez Christy !\n\nNom: ${formData.nom}\nEmail: ${formData.email}\nObjet: ${formData.objet}\nMessage: ${formData.message}`;
  const encodedText = encodeURIComponent(message);
  window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${encodedText}`, "_blank");
};

/**
 * Sauvegarde le message dans le LocalStorage
 */
export const saveToLocalStorage = (formData) => {
  const existingMessages = JSON.parse(localStorage.getItem("messages")) || [];
  const updatedMessages = [...existingMessages, { ...formData, date: new Date().toISOString() }];
  localStorage.setItem("messages", JSON.stringify(updatedMessages));
};