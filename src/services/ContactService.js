// src/services/ContactService.js
import { CONTACT } from '../config/contact.js';

/** Envoie le formulaire de contact à Formspree. Lève une erreur si l'envoi échoue. */
export async function sendViaFormspree(formData) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10 s max

  try {
    const response = await fetch(CONTACT.formspreeEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(formData),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error("Erreur lors de l'envoi du message.");
    return response;
  } finally {
    clearTimeout(timeout);
  }
}
