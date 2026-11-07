// Coche de succès dessinée avec DrawSVG, rejouée à chaque envoi réussi (prop "play").
import { useRef } from 'react';
import { gsap, useGSAP } from '../../lib/gsap.js';

export default function SuccessCheck({ play }) {
  const scope = useRef(null);

  useGSAP(() => {
    if (!play) return;
    gsap.timeline()
      .set(scope.current, { autoAlpha: 1 })
      .fromTo('circle', { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.6, ease: 'power2.inOut' })
      .fromTo('path', { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.4 }, '-=0.1')
      .to(scope.current, { autoAlpha: 0, duration: 0.4, delay: 1.5 });
  }, { scope, dependencies: [play] });

  return (
    <svg ref={scope} viewBox="0 0 52 52" className="mx-auto h-14 w-14 invisible" aria-hidden="true">
      <circle cx="26" cy="26" r="24" fill="none" className="stroke-emerald-500" strokeWidth="3" />
      <path d="M14 27l8 8 16-16" fill="none" className="stroke-emerald-500" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
