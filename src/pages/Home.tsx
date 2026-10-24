import type { ComponentType, SVGProps } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import logoCda from '../assets/images/logo-cda.png'
import logoDietitiansCanada from '../assets/images/logo-dietitians-canada.png'
import CtaBand from '../components/CtaBand/CtaBand.tsx'
import { Apple, Leaf, Pot, SpiceDots, Sprout } from '../components/Illustrations/Illustrations.tsx'
import PageMeta from '../components/PageMeta.tsx'
import Portrait from '../components/Portrait/Portrait.tsx'
import StatsBand from '../components/StatsBand/StatsBand.tsx'
import Button from '../components/ui/Button.tsx'
import { Accent, Eyebrow, Script } from '../components/ui/Eyebrow.tsx'
import { ChipList, Tag } from '../components/ui/Tag.tsx'
import { useLanguage } from '../i18n/useLanguage.ts'
import { mailto, serviceAnchors, site } from '../site.ts'
import layout from '../styles/layout.module.css'
import styles from './Home.module.css'

// Illustration and Services-page anchor for each of the four service cards, in order.
const serviceCards: { art: ComponentType<SVGProps<SVGSVGElement>>; tint: string; anchor: string }[] = [
  { art: SpiceDots, tint: 'blush', anchor: serviceAnchors.cinqEpices },
  { art: Pot, tint: 'sage', anchor: serviceAnchors.collectiveKitchens },
  { art: Sprout, tint: 'blush', anchor: serviceAnchors.healthPromotion },
  { art: Apple, tint: 'sage', anchor: serviceAnchors.schoolWork },
]

export default function Home() {
  const { t } = useTranslation()
  const { url } = useLanguage()

  const stats = t('home.stats.items', { returnObjects: true })
  const services = t('home.services.items', { returnObjects: true })
  const audience = t('home.audience.items', { returnObjects: true })

  return (
    <>
      <PageMeta title={t('home.title')} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBlob} aria-hidden="true" />
        <div className={`${layout.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <Eyebrow>{t('home.hero.eyebrow')}</Eyebrow>
            <h1 className={styles.heroTitle}>
              <Trans i18nKey="home.hero.title" components={{ accent: <Accent /> }} />
            </h1>
            <p className={styles.heroMeta}>{t('home.hero.meta')}</p>
            <p className={styles.heroText}>{t('home.hero.text')}</p>
            <div className={layout.actions}>
              <Button href={mailto} dot>
                {t('common.emailMe')}
              </Button>
              <Button to={url('services')} variant="outline">
                {t('common.seeServices')}
              </Button>
            </div>
          </div>

          <Portrait alt={t('home.hero.photoAlt')} badge={t('home.hero.badge')} />
        </div>
      </section>

      {/* Profile and bio */}
      <section className={layout.section}>
        <div className={`${layout.container} ${styles.introGrid}`}>
          <article className={styles.profileCard}>
            <Eyebrow>{t('home.profile.eyebrow')}</Eyebrow>
            <h2 className={styles.cardTitle}>{t('home.profile.title')}</h2>
            <p>{t('home.profile.p1')}</p>
            <p>{t('home.profile.p2')}</p>
          </article>

          <div className={styles.bio}>
            <Eyebrow>{t('home.whoAmI.eyebrow')}</Eyebrow>
            <h2>{t('home.whoAmI.title')}</h2>
            <p>{t('home.whoAmI.p1')}</p>
            <p>{t('home.whoAmI.p2')}</p>
            <p>{t('home.whoAmI.p3')}</p>
            <Script>
              <span className={styles.signature}>{t('home.whoAmI.signature')}</span>
            </Script>
          </div>
        </div>
      </section>

      <StatsBand title={t('home.stats.title')} text={t('home.stats.text')} stats={stats} />

      {/* Services overview */}
      <section className={layout.section}>
        <div className={layout.container}>
          <div className={layout.splitHeader}>
            <div>
              <Eyebrow>{t('home.services.eyebrow')}</Eyebrow>
              <h2>{t('home.services.title')}</h2>
            </div>
            <p className={layout.lead}>{t('home.services.text')}</p>
          </div>

          <ul className={styles.serviceGrid}>
            {services.map((service, i) => {
              const { art: Art, tint, anchor } = serviceCards[i]
              return (
                <li key={service.title} className={styles.serviceCard}>
                  <div className={`${styles.serviceArt} ${styles[tint]}`}>
                    <Art className={styles.serviceIcon} />
                    <span className={styles.serviceNumber} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className={styles.serviceBody}>
                    <Tag>{service.tag}</Tag>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <Link to={`${url('services')}#${anchor}`} className={styles.arrowLink}>
                      {service.link}
                      <span aria-hidden="true"> →</span>
                    </Link>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Audience */}
      <section className={`${layout.section} ${layout.sand}`}>
        <div className={`${layout.container} ${styles.audienceGrid}`}>
          <div>
            <Eyebrow>{t('home.audience.eyebrow')}</Eyebrow>
            <h2>{t('home.audience.title')}</h2>
            <p className={layout.lead}>{t('home.audience.text')}</p>
          </div>
          <ChipList items={audience} />
        </div>
      </section>

      {/* Credentials */}
      <section className={layout.section}>
        <div className={layout.container}>
          <Eyebrow>{t('home.credentials.eyebrow')}</Eyebrow>
          <ul className={styles.credentialGrid}>
            <li className={styles.credential}>
              <a href={site.links.cda} target="_blank" rel="noreferrer" className={styles.logoBox}>
                <img src={logoCda} alt={t('home.credentials.cda.title')} width={406} height={118} />
              </a>
              <h3>{t('home.credentials.cda.title')}</h3>
              <p>{t('home.credentials.cda.text')}</p>
            </li>
            <li className={styles.credential}>
              <a
                href={site.links.dietitiansCanada}
                target="_blank"
                rel="noreferrer"
                className={styles.logoBox}
              >
                <img
                  src={logoDietitiansCanada}
                  alt={t('home.credentials.dietitiansCanada.title')}
                  width={540}
                  height={128}
                />
              </a>
              <h3>{t('home.credentials.dietitiansCanada.title')}</h3>
              <p>{t('home.credentials.dietitiansCanada.text')}</p>
            </li>
            <li className={styles.credential}>
              <Leaf className={styles.credentialLeaf} />
              <h3>{t('home.credentials.udem.title')}</h3>
              <p>{t('home.credentials.udem.text')}</p>
            </li>
            <li className={styles.credential}>
              <Leaf className={styles.credentialLeaf} />
              <h3>{t('home.credentials.publicHealth.title')}</h3>
              <p>{t('home.credentials.publicHealth.text')}</p>
            </li>
          </ul>
        </div>
      </section>

      <CtaBand
        kicker={t('home.cta.kicker')}
        title={t('home.cta.title')}
        text={t('home.cta.text')}
        actions={
          <>
            <Button href={mailto} variant="light" dot>
              {t('common.emailMe')}
            </Button>
            <Button href={site.phoneHref} variant="outlineLight">
              {site.phone}
            </Button>
          </>
        }
      />
    </>
  )
}
