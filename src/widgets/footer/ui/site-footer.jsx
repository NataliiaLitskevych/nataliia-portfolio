import { SurfaceCard } from '@/shared/ui/surface-card/surface-card';
import styles from './site-footer.module.scss';

export function SiteFooter() {
  return (
    <SurfaceCard as="footer" className={styles.footer} data-reveal>
      <p className={styles.copy}>© 2026 Nataliia Litskevych</p>
    </SurfaceCard>
  );
}
