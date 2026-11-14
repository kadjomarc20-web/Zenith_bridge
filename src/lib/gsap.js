// src/lib/gsap.js
// Point d'entrée UNIQUE de GSAP dans le projet.
// On enregistre les plugins une seule fois ici, puis on importe
// `gsap` (et les plugins) depuis ce fichier partout ailleurs.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Flip } from 'gsap/Flip';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, Flip, DrawSVGPlugin, MotionPathPlugin, Draggable, InertiaPlugin);

// Réglages par défaut appliqués à toutes les animations.
gsap.defaults({ ease: 'power3.out', duration: 0.8 });

// Requêtes média réutilisables avec gsap.matchMedia().
// "motion" = l'utilisateur accepte les animations.
// "reduce" = l'utilisateur a demandé moins d'animations (accessibilité).
export const MOTION = '(prefers-reduced-motion: no-preference)';
export const REDUCE = '(prefers-reduced-motion: reduce)';

export { gsap, ScrollTrigger, SplitText, Flip, DrawSVGPlugin, MotionPathPlugin, Draggable, InertiaPlugin, useGSAP };
