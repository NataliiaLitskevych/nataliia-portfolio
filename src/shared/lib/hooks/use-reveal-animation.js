import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { usePrefersReducedMotion } from './use-prefers-reduced-motion';

export function useRevealAnimation(enabled = true) {
  const scopeRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (!scopeRef.current || !enabled || prefersReducedMotion) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        '[data-reveal]',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.08,
          clearProps: 'all',
        }
      );
    }, scopeRef);

    return () => context.revert();
  }, [enabled, prefersReducedMotion]);

  return scopeRef;
}
