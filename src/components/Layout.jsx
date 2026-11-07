import { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { gsap, ScrollTrigger, useGSAP, MOTION } from '../lib/gsap.js';

export default function Layout() {
  const mainRef = useRef(null);
  const { pathname } = useLocation();
  // Clé de "page" : /produit/vetement et /produit/vetement/tshirt sont la MÊME page
  // (seul le filtre change, c'est Flip qui anime). La fiche détail est une vraie page.
  const pageKey = pathname.includes('/detail/') ? pathname : `/${pathname.split('/')[1]}`;

  // Transition entre les pages : à chaque changement d'URL,
  // on remonte en haut et le contenu entre en fondu + léger glissement.
  useGSAP(() => {
    window.scrollTo(0, 0);
    const mm = gsap.matchMedia();
    mm.add(MOTION, () => {
      gsap.fromTo(mainRef.current,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.6, clearProps: 'transform',
          onComplete: () => ScrollTrigger.refresh() });
    });
    return () => mm.revert();
  }, { dependencies: [pageKey] });

  return (
    <div className="min-h-screen flex flex-col justify-between gap-2 bg-slate-50 text-slate-900 dark:bg-black dark:text-white">
      <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
      <Navbar />
      <main ref={mainRef} className="flex-1 w-full bg-white shadow-sm dark:bg-black dark:text-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
