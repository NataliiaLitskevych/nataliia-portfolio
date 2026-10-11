import styles from './page-shell.module.scss';

export function PageShell({ children }) {
  return <div className={styles.pageShell}>{children}</div>;
}
