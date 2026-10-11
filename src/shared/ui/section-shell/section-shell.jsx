import styles from './section-shell.module.scss';

export function SectionShell({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`${styles.section} ${className}`.trim()}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {children}
    </section>
  );
}
