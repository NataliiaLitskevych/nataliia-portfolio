import { useEffect, useRef, useState } from 'react';
import styles from './back-to-top.module.scss';

export function BackToTop() {
  const linkRef = useRef(null);
  const [pastHero, setPastHero] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('h1')?.closest('section');
    if (!hero) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      setPastHero(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let observer;
    const observe = () => {
      observer?.disconnect();
      const occupied = new Set();
      // Protect text and actions underneath the small floating control.
      const targets = [...document.querySelectorAll('p, h1, h2, h3, button, a, img, li, span')]
        .filter((element) => element !== linkRef.current && !linkRef.current?.contains(element));
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) occupied.add(entry.target);
          else occupied.delete(entry.target);
        });
        setBlocked(occupied.size > 0);
      }, {
        rootMargin: `-${Math.max(0, window.innerHeight - 80)}px 0px 0px -${Math.max(0, document.documentElement.clientWidth - 80)}px`,
      });
      targets.forEach((element) => observer.observe(element));
    };
    observe();
    window.addEventListener('resize', observe);
    const mutations = new MutationObserver(observe);
    mutations.observe(document.getElementById('root'), { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
      window.removeEventListener('resize', observe);
    };
  }, []);

  return (
    <a ref={linkRef} className={styles.link} href="#top" aria-label="Back to top" title="Back to top"
      hidden={!focused && (!pastHero || blocked)}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      onClick={() => requestAnimationFrame(() => document.querySelector('header a[href="#top"]')?.focus({ preventScroll: true }))}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="m6 11 6-6 6 6M12 5v14" />
      </svg>
    </a>
  );
}
