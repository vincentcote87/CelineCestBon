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
}

// A link styled as a pill button.
export default function Button({ children, variant = 'primary', to, href }: Props) {
  const className = `${styles.button} ${styles[variant]}`

  return to ? (
    <Link to={to} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
