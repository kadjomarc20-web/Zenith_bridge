import { useRef } from 'react';
import { services } from '../data/Service';
import ServiceCard from '../components/ServiceCard';
import ProcessSteps from '../components/ProcessSteps.jsx';
import { useReveal } from '../hooks/useReveal.js';
import { useMagnetic } from '../hooks/useMagnetic.js';
import { whatsappLink } from '../config/contact.js';
import { gsap, ScrollTrigger, useGSAP, MOTION } from '../lib/gsap.js';

export default function Service() {
  const scope = useRef(null);
  const cta = useRef(null);
  useReveal(scope);
  useMagnetic(cta);

  useGSAP(() => {
    gsap.matchMedia().add(MOTION, () => {
      gsap.set('[data-service-card]', { autoAlpha: 0 }); // état de départ (posé par JS)
      // Cartes en cascade + leurs icônes dessinées trait par trait.
      ScrollTrigger.batch('[data-service-card]', {
        start: 'top 85%',
        once: true,
        onEnter: (cards) => {
          gsap.fromTo(cards, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, stagger: 0.12 });
          gsap.from(cards.map((c) => c.querySelectorAll('path')), { drawSVG: '0%', duration: 1.2, delay: 0.3, stagger: 0.12, ease: 'power1.inOut' });
        },
      });
    });
  }, { scope });

  return (
    <div ref={scope} className="space-y-12 py-10 px-4 sm:px-6 max-w-7xl mx-auto dark:bg-black dark:text-white">
      <section data-reveal className="text-center space-y-4">
        <span className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">Nos Solutions Logistiques</span>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white sm:text-5xl">Ce que nous faisons pour vous</h1>
        <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full" />
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
          Un accompagnement de A à Z pour simplifier vos opérations d'importation, de transit et d'approvisionnement.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {services.map((service) => <ServiceCard key={service.id} service={service} />)}
      </section>

      <ProcessSteps />

      <section data-reveal className="bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Vous avez un projet d'importation en tête ?</h2>
        <p className="text-blue-100 max-w-xl mx-auto text-sm sm:text-base">
          Contactez nos équipes dès aujourd'hui pour obtenir une cotation personnalisée.
        </p>
        {/* Un lien stylé en bouton (et non un <a> dans un <button>, HTML invalide). */}
        <a ref={cta} href={whatsappLink("Bonjour Zenith Bridge, je souhaite un devis pour un projet d'importation.")}
          target="_blank" rel="noopener noreferrer"
          className="inline-block px-8 py-3.5 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-colors">
          Demander un devis
        </a>
      </section>
    </div>
  );
}
