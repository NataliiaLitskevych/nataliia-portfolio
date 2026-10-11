import { useEffect, useState } from 'react';

const sectionIds = ['about', 'skills', 'projects', 'contact'];

export function useActiveSection(homeRef) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const header = homeRef.current?.closest('header');
    if (!header) return undefined;
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const hero = document.querySelector('h1')?.closest('section');
    const footer = document.querySelector('footer');
    let observer;
    let footerVisible = false;
    let activationTop = 0;
    const update = () => {
      if (hero && hero.getBoundingClientRect().bottom > activationTop) {
        setActiveSection(null);
        return;
      }
      if (footerVisible) {
        setActiveSection('contact');
        return;
      }
      const reached = sections.filter((section) => section.getBoundingClientRect().top <= activationTop);
      setActiveSection(reached.at(-1)?.id ?? null);
    };
    const observe = () => {
      observer?.disconnect();
      const rootSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const inset = rootSize;
      const headerBottom = header.getBoundingClientRect().height + inset;
      const offset = window.matchMedia('(min-width: 960px)').matches ? 6 * rootSize : Math.max(6 * rootSize, headerBottom + 8);
      document.documentElement.style.setProperty('--section-scroll-offset', `${offset}px`);
      activationTop = Math.min(window.innerHeight - 1, headerBottom + 32);
      observer = new IntersectionObserver(update, {
        rootMargin: `-${activationTop}px 0px -${Math.max(0, window.innerHeight - activationTop - 1)}px 0px`,
        threshold: 0,
      });
      sections.forEach((section) => observer.observe(section));
      if (hero) observer.observe(hero);
      update();
    };
    const footerObserver = new IntersectionObserver(([entry]) => {
      footerVisible = entry.isIntersecting;
      update();
    });
    if (footer) footerObserver.observe(footer);
    const resizeObserver = new ResizeObserver(observe);
    resizeObserver.observe(header);
    window.addEventListener('resize', observe);
    observe();
    return () => {
      observer?.disconnect();
      footerObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('resize', observe);
      document.documentElement.style.removeProperty('--section-scroll-offset');
    };
  }, [homeRef]);

  return activeSection;
}
