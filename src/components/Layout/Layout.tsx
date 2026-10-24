import { useTranslation } from 'react-i18next'
import { NavLink, Outlet } from 'react-router'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.tsx'
import styles from './Layout.module.css'

const navItems = [{ to: '/', labelKey: 'nav.home' }] as const
const year = new Date().getFullYear()

export default function Layout() {
  const { t } = useTranslation()

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.inner}>
          <NavLink to="/" className={styles.brand}>
            Celine Cest Bon
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
                {t(item.labelKey)}
              </NavLink>
            ))}
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.inner}>
          © {year} CelineCestBon. {t('footer.rights')}
        </div>
      </footer>
    </div>
  )
}
