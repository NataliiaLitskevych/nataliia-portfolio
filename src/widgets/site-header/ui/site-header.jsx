import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { SurfaceCard } from '@/shared/ui/surface-card/surface-card';
import { useMediaQuery } from '@/shared/lib/hooks/use-media-query';
import { useActiveSection } from '../lib/use-active-section';
import styles from './site-header.module.scss';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function SiteHeader() {
  const desktop = useMediaQuery('(min-width: 960px)');
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const homeRef = useRef(null);
  const navRef = useRef(null);
  const activeSection = useActiveSection(homeRef);

  useLayoutEffect(() => {
    // Capture focus before the responsive subscription hides or removes its target.
    const media = window.matchMedia('(min-width: 960px)');
    const change = () => {
      const restoreHome = media.matches && document.activeElement === toggleRef.current;
      const restoreToggle = !media.matches && navRef.current?.contains(document.activeElement);
      setOpen(false);
      requestAnimationFrame(() => {
        if (restoreHome) homeRef.current?.focus({ preventScroll: true });
        else if (restoreToggle) toggleRef.current?.focus({ preventScroll: true });
      });
    };
    media.addEventListener('change', change);
    return () => media.removeEventListener('change', change);
  }, []);

  useEffect(() => {
    if (!open || desktop) return undefined;
    const header = homeRef.current.closest('header');
    const outside = (event) => {
      if (!header.contains(event.target)) {
        if (navRef.current?.contains(document.activeElement)) toggleRef.current?.focus({ preventScroll: true });
        setOpen(false);
      }
    };
    const escape = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('focusin', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('focusin', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [open, desktop]);

  const navigate = (href) => {
    setOpen(false);
    if (!desktop) {
      const heading = document.querySelector(`${href} h2`);
      if (heading) {
        // Let the native fragment navigation finish before restoring useful focus.
        requestAnimationFrame(() => {
          heading.setAttribute('tabindex', '-1');
          heading.focus({ preventScroll: true });
          heading.addEventListener('blur', () => heading.removeAttribute('tabindex'), { once: true });
        });
      }
    }
  };

  return (
    <SurfaceCard as="header" className={styles.header}>
      <div className={styles.identity}>
        <a ref={homeRef} className={styles.name} href="#top" onClick={() => setOpen(false)}>Nataliia Litskevych</a>
        <p className={styles.role}>Frontend Developer · React Developer</p>
      </div>
      <div
        className={styles.navigation}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && open) {
            event.preventDefault();
            setOpen(false);
            toggleRef.current?.focus();
          }
        }}
        onBlur={(event) => {
          if (!event.currentTarget.closest('header').contains(event.relatedTarget)) setOpen(false);
        }}
      >
        {!desktop && (
          <button
            ref={toggleRef}
            className={styles.menuToggle}
            type="button"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="section-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              {open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        )}
        <nav ref={navRef} id="section-navigation" aria-label="Section navigation" className={styles.nav} hidden={!desktop && !open}>
          {navItems.map((item) => (
            <a key={item.href} className={styles.navLink} href={item.href}
              aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
              onClick={() => navigate(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </SurfaceCard>
  );
}
