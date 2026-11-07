// src/components/MobileMenu.jsx
// Menu plein écran mobile animé avec une timeline GSAP.
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, useGSAP, REDUCE } from '../lib/gsap.js';
import { appNav } from '../data/AppNav.js';

export default function MobileMenu({ open, onClose }) {
  const panel = useRef(null);
  const tl = useRef(null);

  // 1) On construit la timeline UNE fois, en pause.
  useGSAP(() => {
    tl.current = gsap.timeline({
      paused: true,
      // Une fois l'animation de fermeture finie, on retire le panneau du rendu.
      onReverseComplete: () => gsap.set(panel.current, { display: 'none' }),
    })
      .fromTo(panel.current, { clipPath: 'inset(0 0 100% 0)' },
        { clipPath: 'inset(0 0 0% 0)', duration: 0.5, ease: 'power4.inOut' })
      .from('[data-menu-link]', { y: 40, autoAlpha: 0, stagger: 0.08, duration: 0.4 }, '-=0.15');
  }, { scope: panel });

  // 2) On la joue ou on la rembobine selon l'état "open".
  useGSAP(() => {
    if (!tl.current) return;
    // Mouvement réduit demandé : l'animation devient quasi instantanée.
    const speed = window.matchMedia(REDUCE).matches ? 20 : 1;
    if (open) {
      gsap.set(panel.current, { display: 'flex' });
      tl.current.timeScale(speed).play();
    } else {
      tl.current.timeScale(speed * 1.6).reverse();
    }
  }, { dependencies: [open] });

  return (
    <section
      ref={panel}
      id="mobile-menu"
      aria-hidden={!open}
      style={{ display: 'none' }}
      className="absolute top-full left-0 min-h-screen w-full bg-blue-300 dark:bg-gray-800 text-white flex-col justify-center items-center py-6 sm:hidden shadow-lg"
    >
      <nav className="flex flex-col items-center gap-6 text-lg font-semibold">
        {appNav.map((item) => (
          <Link key={item.path} to={item.path} data-menu-link onClick={onClose}
            tabIndex={open ? 0 : -1} className="hover:text-blue-900 dark:hover:text-blue-400 transition-colors">
            {item.name}
          </Link>
        ))}
      </nav>
    </section>
  );
}
