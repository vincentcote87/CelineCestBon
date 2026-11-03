import type { ComponentType, SVGProps } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import Credentials from '../components/Credentials/Credentials.tsx'
import CtaBand from '../components/CtaBand/CtaBand.tsx'
import { Apple, Pot, SpiceDots, Sprout } from '../components/Illustrations/Illustrations.tsx'
import PageHero from '../components/PageHero/PageHero.tsx'
import PageMeta from '../components/PageMeta.tsx'
import Portrait from '../components/Portrait/Portrait.tsx'
import Button from '../components/ui/Button.tsx'
import { Accent, Eyebrow, Script } from '../components/ui/Eyebrow.tsx'
import { useLanguage } from '../i18n/useLanguage.ts'
import { mailto, serviceAnchors } from '../site.ts'
import layout from '../styles/layout.module.css'
import styles from './Home.module.css'

// Illustration, tile colour and Services-page anchor for each service tile, in order.
const serviceTiles: { art: ComponentType<SVGProps<SVGSVGElement>>; tone: string; anchor: string }[] = [
  { art: SpiceDots, tone: 'tomato', anchor: serviceAnchors.cinqEpices },
  { art: Pot, tone: 'sun', anchor: serviceAnchors.collectiveKitchens },
  { art: Sprout, tone: 'leaf', anchor: serviceAnchors.healthPromotion },
  { art: Apple, tone: 'forest', anchor: serviceAnchors.workplace },
]

export default function Home() {
  const { t } = useTranslation()
  const { url } = useLanguage()

  const mission = t('home.mission.paragraphs', { returnObjects: true })
  const services = t('home.services.items', { returnObjects: true })

  return (
    <>
      <PageMeta title={t('home.title')} />

      <PageHero
        overline={t('home.hero.overline')}
        eyebrow={t('home.hero.eyebrow')}
        title={<Trans i18nKey="home.hero.title" components={{ accent: <Accent /> }} />}
        meta={t('home.hero.meta')}
        text={t('home.hero.text')}
        actions={
          <>
            <Button href={mailto}>
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
      />

      {/* Mission and vision cards, and bio */}
      <section className={layout.section}>
        <div className={`${layout.container} ${styles.introGrid}`}>
          <div className={styles.cards}>
            <article className={styles.profileCard}>
              <Eyebrow>{t('home.mission.eyebrow')}</Eyebrow>
              <h2 className={styles.cardTitle}>{t('home.mission.title')}</h2>
              {mission.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>

            <article className={styles.profileCard}>
              <Eyebrow>{t('home.vision.eyebrow')}</Eyebrow>
              <blockquote className={styles.cardQuote}>
                <p>{t('home.vision.quote')}</p>
              </blockquote>
              <p className={styles.conceptsLabel}>{t('home.vision.conceptsLabel')}</p>
              <p>{t('home.vision.concepts')}</p>
            </article>
          </div>

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

      <Credentials />

      <CtaBand
        title={t('home.cta.title')}
        actions={
          <Button href={mailto}>
            {t('common.emailMe')}
          </Button>
        }
      />
    </>
  )
}
