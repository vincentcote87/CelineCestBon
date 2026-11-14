import type { ReactNode } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import CtaBand from '../components/CtaBand/CtaBand.tsx'
import PageHero from '../components/PageHero/PageHero.tsx'
import PageMeta from '../components/PageMeta.tsx'
import Portrait from '../components/Portrait/Portrait.tsx'
import StatsBand from '../components/StatsBand/StatsBand.tsx'
import Button from '../components/ui/Button.tsx'
import { BulletList, InfoCard, InfoGrid, Pills, Timeline } from '../components/ui/Content.tsx'
import { Accent } from '../components/ui/Eyebrow.tsx'
import { ChipList, Tag } from '../components/ui/Tag.tsx'
import { mailto, serviceAnchors } from '../site.ts'
import layout from '../styles/layout.module.css'
import styles from './Services.module.css'

const anchors = serviceAnchors
type ServiceKey = keyof typeof anchors
const order: ServiceKey[] = ['healthPromotion', 'cinqEpices', 'collectiveKitchens', 'workplace']

type ServiceProps = {
  id: ServiceKey
  number: number
  sand?: boolean
  children: ReactNode
}

// One numbered service: sticky summary on the left, details on the right.
function Service({ id, number, sand, children }: ServiceProps) {
  const { t } = useTranslation()

  return (
    <section
      id={anchors[id]}
      className={`${layout.section} ${sand ? layout.sand : ''}`}
      aria-labelledby={`${anchors[id]}-title`}
    >
      <div className={`${layout.container} ${styles.service}`}>
        <div className={styles.summary}>
          <p className={styles.number} aria-hidden="true">
            {String(number).padStart(2, '0')}
          </p>
          <Tag>{t(`services.${id}.tag`)}</Tag>
          <p className={styles.duration}>{t(`services.${id}.duration`)}</p>
          <h2 id={`${anchors[id]}-title`} className={styles.title}>
            {t(`services.${id}.title`)}
          </h2>
          <p className={styles.tagline}>{t(`services.${id}.tagline`)}</p>
          <Button href={mailto}>
            {t(`services.${id}.button`)}
          </Button>
        </div>
        <div className={styles.details}>{children}</div>
      </div>
    </section>
  )
}

export default function Services() {
  const { t } = useTranslation()
  const labels = t('services.labels', { returnObjects: true })

  return (
    <>
      <PageMeta title={t('services.title')} />

      <PageHero
        eyebrow={t('services.hero.eyebrow')}
        title={<Trans i18nKey="services.hero.title" components={{ accent: <Accent /> }} />}
        text={t('services.hero.text')}
        aside={<Portrait alt={t('home.hero.photoAlt')} cropped />}
      >
        <nav aria-label={t('services.hero.jumpNav')}>
          <ol className={styles.jumpNav}>
            {order.map((key, i) => (
              <li key={key}>
                <a href={`#${anchors[key]}`} className={styles.jumpLink}>
                  <span className={styles.jumpNumber}>{String(i + 1).padStart(2, '0')}</span>
                  {t(`services.${key}.short`)}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </PageHero>

      {/* 01 Promotion de la santé alimentaire */}
      <Service id="healthPromotion" number={1}>
        <p>{t('services.healthPromotion.p1')}</p>
        <p>{t('services.healthPromotion.p2')}</p>
        <InfoCard label={labels.themes}>
          <BulletList items={t('services.healthPromotion.themes', { returnObjects: true })} />
        </InfoCard>
      </Service>

      {/* 02 Ateliers cinq épices Alberta */}
      <Service id="cinqEpices" number={2}>
        <div className={styles.stack}>
          <h3 className={styles.subTitle}>{labels.approach}</h3>
          <p>{t('services.cinqEpices.approach')}</p>
          <figure className={styles.quote}>
            <blockquote>
              <p>{t('services.cinqEpices.approachQuote')}</p>
            </blockquote>
            <figcaption>{t('services.cinqEpices.approachSource')}</figcaption>
          </figure>
        </div>
        <div className={styles.mission}>
          <h4 className={styles.missionLabel}>{labels.mission}</h4>
          <p className={styles.missionText}>{t('services.cinqEpices.mission')}</p>
        </div>
        <div className={styles.stack}>
          <h3 className={styles.subTitle}>{labels.history}</h3>
          <Pills items={t('services.cinqEpices.values', { returnObjects: true })} />
        </div>
        <Timeline items={t('services.cinqEpices.timeline', { returnObjects: true })} />
        <p>{t('services.cinqEpices.historyText')}</p>
        <InfoGrid>
          <InfoCard label={labels.forWho}>
            <BulletList items={t('services.cinqEpices.forWho', { returnObjects: true })} />
          </InfoCard>
          <InfoCard label={labels.format}>
            <BulletList items={t('services.cinqEpices.format', { returnObjects: true })} />
          </InfoCard>
        </InfoGrid>
      </Service>

      <div className={layout.section}>
        <StatsBand
          title={t('services.cinqEpices.stats.title')}
          stats={t('services.cinqEpices.stats.items', { returnObjects: true })}
          footnote={<Trans i18nKey="services.cinqEpices.stats.footnote" components={{ strong: <strong /> }} />}
        />
      </div>

      {/* 03 Cuisines collectives */}
      <Service id="collectiveKitchens" number={3} sand>
        <p>{t('services.collectiveKitchens.p1')}</p>
        <p>{t('services.collectiveKitchens.p2')}</p>
        <p>{t('services.collectiveKitchens.p3')}</p>
        <InfoGrid>
          <InfoCard label={labels.forWho}>
            <BulletList items={t('services.collectiveKitchens.forWho', { returnObjects: true })} />
          </InfoCard>
          <InfoCard label={labels.format}>
            <BulletList items={t('services.collectiveKitchens.format', { returnObjects: true })} />
          </InfoCard>
        </InfoGrid>
      </Service>

      {/* 04 La santé alimentaire en milieu de travail */}
      <Service id="workplace" number={4}>
        <p>{t('services.workplace.p1')}</p>
        <div className={styles.stack}>
          <h3 className={styles.subTitle}>{labels.services}</h3>
          <ChipList items={t('services.workplace.services', { returnObjects: true })} even />
        </div>
      </Service>

      <CtaBand
        kicker={t('services.cta.kicker')}
        title={t('services.cta.title')}
        actions={
          <Button href={mailto}>
            {t('common.emailMe')}
          </Button>
        }
      />
    </>
  )
}
