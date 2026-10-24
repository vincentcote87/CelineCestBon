import type { ComponentType, SVGProps } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import logoCda from '../assets/images/logo-cda.png'
import logoDietitiansCanada from '../assets/images/logo-dietitians-canada.png'
import CtaBand from '../components/CtaBand/CtaBand.tsx'
import { Apple, Pot, SpiceDots, Sprout } from '../components/Illustrations/Illustrations.tsx'
import PageHero from '../components/PageHero/PageHero.tsx'
import PageMeta from '../components/PageMeta.tsx'
import Portrait from '../components/Portrait/Portrait.tsx'
import StatsBand from '../components/StatsBand/StatsBand.tsx'
import Button from '../components/ui/Button.tsx'
import { Accent, Eyebrow, Script } from '../components/ui/Eyebrow.tsx'
import { ChipList } from '../components/ui/Tag.tsx'
import { useLanguage } from '../i18n/useLanguage.ts'
import { mailto, serviceAnchors, site } from '../site.ts'
import layout from '../styles/layout.module.css'
import styles from './Home.module.css'

// Illustration, tile colour and Services-page anchor for each service tile, in order.
const serviceTiles: { art: ComponentType<SVGProps<SVGSVGElement>>; tone: string; anchor: string }[] = [
  { art: SpiceDots, tone: 'tomato', anchor: serviceAnchors.cinqEpices },
  { art: Pot, tone: 'sun', anchor: serviceAnchors.collectiveKitchens },
  { art: Sprout, tone: 'leaf', anchor: serviceAnchors.healthPromotion },
  { art: Apple, tone: 'forest', anchor: serviceAnchors.schoolWork },
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

      <PageHero
        eyebrow={t('home.hero.eyebrow')}
        title={<Trans i18nKey="home.hero.title" components={{ accent: <Accent /> }} />}
        meta={t('home.hero.meta')}
        text={t('home.hero.text')}
        actions={
          <>
            <Button href={mailto} dot>
              {t('common.emailMe')}
            </Button>
            <Button to={url('services')} variant="outline">
              {t('common.seeServices')}
            </Button>
          </>
        }
        aside={
          <Portrait
            alt={t('home.hero.photoAlt')}
            stickers={[t('home.hero.badge'), t('home.hero.badge2')]}
          />
        }
      >
        <div className={styles.audience}>
          <p className={styles.audienceLabel}>{t('home.audience.title')}</p>
          <ChipList items={audience} />
        </div>
      </PageHero>

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
            <div className={styles.signature}>
              <Script>{t('home.whoAmI.signature')}</Script>
            </div>
          </div>
        </div>
      </section>

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

          <ul className={styles.tiles}>
            {services.map((service, i) => {
              const { art: Art, tone, anchor } = serviceTiles[i]
              return (
                <li key={service.title}>
                  <Link to={`${url('services')}#${anchor}`} className={`${styles.tile} ${styles[tone]}`}>
                    <span className={styles.tileIcon} aria-hidden="true">
                      <Art />
                    </span>
                    <span className={styles.tileTag}>{service.tag}</span>
                    <span className={styles.tileTitle}>{service.title}</span>
                    <span className={styles.tileText}>{service.text}</span>
                    <span className={styles.tileLink}>
                      {service.link} <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <div className={layout.section}>
        <StatsBand
          kicker={t('home.stats.kicker')}
          title={t('home.stats.title')}
          text={t('home.stats.text')}
          stats={stats}
        />
      </div>

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
              <h3>{t('home.credentials.udem.title')}</h3>
              <p>{t('home.credentials.udem.text')}</p>
            </li>
            <li className={styles.credential}>
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
            <Button href={mailto} dot>
              {t('common.emailMe')}
            </Button>
            <Button href={site.phoneHref} variant="light">
              {site.phone}
            </Button>
          </>
        }
      />
    </>
  )
}
