// src/components/home/Hero.jsx
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, SplitText, useGSAP, MOTION } from '../../lib/gsap.js';

export default function Hero() {
  const scope = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION, () => {
      // SplitText découpe le titre en lettres et le texte en lignes.
      const title = SplitText.create('[data-hero-title]', { type: 'chars' });
      const text = SplitText.create('[data-hero-text]', { type: 'lines', mask: 'lines' });

      // Timeline = suite d'animations orchestrées dans le temps.
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.from(title.chars, { yPercent: 120, autoAlpha: 0, rotation: 8, stagger: 0.04, duration: 0.9 })
        .from(text.lines, { yPercent: 100, stagger: 0.1, duration: 0.8 }, '-=0.5')
        .from('[data-hero-cta]', { scale: 0.6, autoAlpha: 0, duration: 0.6, ease: 'back.out(2)' }, '-=0.4')
        // L'image se dévoile de bas en haut grâce à clip-path.
        .from('[data-hero-img]', { clipPath: 'inset(100% 0 0 0)', scale: 1.15, duration: 1.2 }, 0.2);

      // Parallax : l'image monte un peu plus lentement que la page.
      gsap.to('[data-hero-img] img', {
        yPercent: -10, ease: 'none',
        scrollTrigger: { trigger: scope.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    });
    return () => mm.revert();
  }, { scope });

  return (
    <section ref={scope} className="flex flex-col md:flex-row items-center gap-8 bg-blue-50 p-6 md:p-10 rounded-2xl dark:bg-slate-900 dark:text-white overflow-hidden">
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h1 data-hero-title className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-500 leading-tight">
          Zenith Bridge
        </h1>
        <p data-hero-text className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
          Fournisseur direct depuis la Chine : découvrez une sélection exclusive de produits de qualité
          supérieure, livrés directement en Côte d'Ivoire au meilleur prix.
        </p>
        <div className="pt-2">
          <Link data-hero-cta to="/contact"
            className="inline-block text-center bg-blue-500 text-white px-6 py-3 w-full sm:w-auto rounded-xl font-semibold hover:bg-blue-700 shadow-md transition-colors">
            Nous contacter
          </Link>
        </div>
      </div>

      <div data-hero-img className="flex-1 w-full overflow-hidden rounded-2xl shadow-lg">
        <img src="/ZenithBridge.webp" alt="Zenith Bridge - Importation & Logistique"
          width="1379" height="752" fetchPriority="high"
          className="w-full h-auto object-cover scale-110" />
      </div>
    </section>
  );
}
