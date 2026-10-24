import type { ReactNode } from 'react'
import { Link } from 'react-router'
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'outline' | 'light' | 'outlineLight'

type Props = {
  children: ReactNode
  variant?: Variant
  // Internal route (React Router) or external/mailto/tel link.
  to?: string
  href?: string
  dot?: boolean
}

// A link styled as a pill button.
export default function Button({ children, variant = 'primary', to, href, dot }: Props) {
  const className = `${styles.button} ${styles[variant]}`
  const content = (
    <>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </>
  )

  return to ? (
    <Link to={to} className={className}>
      {content}
    </Link>
  ) : (
    <a href={href} className={className}>
      {content}
    </a>
  )
}
