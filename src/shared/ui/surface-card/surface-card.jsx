import styles from './surface-card.module.scss';

export function SurfaceCard({ as: Tag = 'article', className = '', children }) {
  return <Tag className={`${styles.card} ${className}`.trim()}>{children}</Tag>;
}
