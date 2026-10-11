import { classNames } from '@/shared/lib/class-names';
import styles from './tag.module.scss';

export function Tag({ children, accent = 'cool', className = '' }) {
  const accentClass = accent === 'warm' ? styles.warm : styles.cool;
  return (
    <span className={classNames(styles.tag, accentClass, className)}>
      {children}
    </span>
  );
}
