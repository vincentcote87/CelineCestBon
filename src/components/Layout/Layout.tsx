import { useLayoutEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import type { Page } from '../../i18n/routing.ts'
import { useLanguage } from '../../i18n/useLanguage.ts'
import { mailto, site } from '../../site.ts'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.tsx'
import styles from './Layout.module.css'

const navPages: Page[] = ['home', 'about', 'services', 'contact']
const year = new Date().getFullYear()

export default function Layout() {
  const { t } = useTranslation()
  const { url } = useLanguage()
  const { pathname, hash } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Start each new page at the top, unless the link points to a section.
  useLayoutEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link

  return (
    <div className={styles.page} id="top">
      <a href="#main" className={styles.skip}>
        {t('nav.skip')}
      </a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link to={url('home')} className={styles.brand}>
            {site.name}
          </Link>

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.menuIcon} aria-hidden="true" />
            {t('nav.menu')}
          </button>

          <div id="site-menu" className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
            <nav aria-label={t('nav.main')}>
              <ul className={styles.nav}>
                {navPages.map((page) => (
                  <li key={page}>
                    <NavLink
                      to={url(page)}
                      end
                      className={navLinkClass}
                      onClick={() => setMenuOpen(false)}
                    >
                      {t(`nav.${page}`)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main id="main" className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <p className={styles.brand}>{site.name}</p>
            <p>
              {t('footer.blurb')}
              <br />
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h2 className={styles.footerHeading}>{t('footer.contact')}</h2>
            <ul className={styles.footerList}>
              <li>
                <a href={mailto} className={styles.footerStrong}>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className={styles.footerStrong}>
                  {site.phone}
                </a>
              </li>
              <li>{t('footer.area')}</li>
            </ul>
          </div>

          <div>
            <h2 className={styles.footerHeading}>{t('footer.member')}</h2>
            <ul className={styles.footerList}>
              <li>
                <a href={site.links.cda} target="_blank" rel="noreferrer">
                  {t('footer.cda')}
                </a>
              </li>
              <li>
                <a href={site.links.dietitiansCanada} target="_blank" rel="noreferrer">
                  {t('footer.dietitiansCanada')}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-labelledby="footer-pages">
            <h2 id="footer-pages" className={styles.footerHeading}>
              {t('footer.pages')}
            </h2>
            <ul className={styles.footerList}>
              {navPages.map((page) => (
                <li key={page}>
                  <Link to={url(page)} className={styles.footerStrong}>
                    {t(`nav.${page}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <p>
            © {year} {site.name}
          </p>
          <a href="#top" className={styles.toTop}>
            {t('common.backToTop')}
          </a>
        </div>
      </footer>
    </div>
  )
}
