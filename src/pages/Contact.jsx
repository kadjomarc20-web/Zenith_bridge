import { useRef } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { gsap, useGSAP, MOTION } from '../lib/gsap.js';
import ContactInfo from '../components/contact/ContactInfo.jsx';
import ContactForm from '../components/contact/ContactForm.jsx';

export default function Contact() {
  const scope = useRef(null);
  useReveal(scope);

  // Les champs du formulaire arrivent un par un.
  useGSAP(() => {
    gsap.matchMedia().add(MOTION, () => {
      gsap.from('[data-field]', { autoAlpha: 0, x: 30, stagger: 0.08, delay: 0.3 });
    });
  }, { scope });

  return (
    <div ref={scope} className="space-y-12 py-6 px-4 dark:bg-black dark:text-white">
      <div data-reveal className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-500">Contactez-nous</h1>
        <p className="text-slate-500 dark:text-gray-300">Une question, une envie de commander ? Écrivez-nous !</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
