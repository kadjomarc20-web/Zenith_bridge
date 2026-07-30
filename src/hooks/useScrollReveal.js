import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ajoute la classe attendue par ton CSS
            entry.target.classList.add('reveal-active');
            // Optionnel : arrête d'observer une fois révélé
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Se déclenche dès que 10% de l'élément est visible
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Cibler tous les conteneurs reveal-init
    const targets = document.querySelectorAll('.reveal-init');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);
}