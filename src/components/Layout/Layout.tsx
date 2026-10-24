import { NavLink, Outlet } from 'react-router'
import styles from './Layout.module.css'

const navItems = [{ to: '/', label: 'Home' }]
const year = new Date().getFullYear()

export default function Layout() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.inner}>
          <NavLink to="/" className={styles.brand}>
            Celine
          </NavLink>
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.inner}>© {year} Celine</div>
      </footer>
    </div>
  )
}
