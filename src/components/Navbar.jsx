// src/components/Navbar.jsx
import { useState, useContext, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../contexts/theme-context.js';
import { appNav } from '../data/AppNav.js';
import { gsap, ScrollTrigger, useGSAP, MOTION } from '../lib/gsap.js';
import MobileMenu from './MobileMenu.jsx';

export default function Navbar() {
  const { theme, handleThemeSwitch } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const header = useRef(null);
  const { pathname } = useLocation();

  // Échap ferme le menu + on bloque le scroll de la page quand il est ouvert.
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION, () => {
      // Entrée du logo au chargement.
      gsap.from('[data-logo-item]', { y: -20, autoAlpha: 0, stagger: 0.1, duration: 0.6 });
      // Le petit avion décolle en boucle très légère.
      gsap.to('[data-logo-plane]', { y: -3, rotation: -6, duration: 1.4, ease: 'sine.inOut', yoyo: true, repeat: -1 });

      // Cacher la barre quand on descend, la montrer quand on remonte.
      const hide = gsap.to(header.current, { yPercent: -100, duration: 0.3, paused: true, ease: 'power2.out' });
      ScrollTrigger.create({
        start: 'top top-=80',
        end: 'max',
        onUpdate: (self) => (self.direction === 1 ? hide.play() : hide.reverse()),
        onLeaveBack: () => hide.reverse(),
      });
    });
    return () => mm.revert();
  }, { scope: header });

  return (
    <header ref={header} className="bg-blue-400 dark:bg-gray-900 p-4 sticky top-0 z-50">
      <nav className="flex justify-between items-center text-white max-w-7xl mx-auto" aria-label="Navigation principale">
        <div className="flex items-center gap-3" >
          <span data-logo-plane data-logo-item className="inline-block"><Plane className="text-blue-500" size={32} aria-hidden="true" /></span>
          <Link to="/" data-logo-item className="flex flex-col items-center">
            <span className="text-lg font-bold tracking-tight text-white">Zenith Bridge</span>
            <span className="flex items-center gap-2 w-full mt-1">
              <span className="flex-1 h-0.5 bg-blue-500 rounded-full" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 shrink-0">Global</span>
              <span className="flex-1 h-0.5 bg-blue-500 rounded-full" />
            </span>
          </Link>
          <button onClick={handleThemeSwitch} aria-label="Changer de thème"
            className="hover:text-blue-500 hover:scale-110 cursor-pointer transform transition-all duration-300 ease-in-out p-1">
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button id="hamburger-button" type="button" onClick={() => setIsMenuOpen((o) => !o)}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen} aria-controls="mobile-menu"
            className={`relative h-8 w-8 cursor-pointer text-2xl sm:hidden ${isMenuOpen ? 'toggle-btn' : ''}`}>
            <div className="absolute top-4 -mt-0.5 h-0.5 w-8 rounded bg-white transition-all duration-500
              before:absolute before:h-0.5 before:w-8 before:-translate-x-4 before:-translate-y-3
              before:rounded before:bg-white before:transition-all before:duration-500 before:content-['']
              after:absolute after:h-0.5 after:w-8 after:-translate-x-4 after:translate-y-3
              after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']" />
          </button>

          <ul className="hidden sm:flex space-x-4 list-none items-center">
            {appNav.map((item) => (
              <li key={item.path}>
                <Link to={item.path} aria-current={pathname === item.path ? 'page' : undefined}
                  className="hover:text-blue-500 hover:scale-110 transform transition-all duration-300 ease-in-out block">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <MobileMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
