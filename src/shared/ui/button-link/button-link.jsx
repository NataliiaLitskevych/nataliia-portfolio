import styles from './button-link.module.scss';

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  target,
  rel,
  ariaLabel,
}) {
  if (href) {
    return (
      <a
        className={styles[variant]}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={styles[variant]}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
