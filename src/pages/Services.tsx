import type { ReactNode } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import CtaBand from '../components/CtaBand/CtaBand.tsx'
import PageHero from '../components/PageHero/PageHero.tsx'
import PageMeta from '../components/PageMeta.tsx'
import StatsBand from '../components/StatsBand/StatsBand.tsx'
import Button from '../components/ui/Button.tsx'
import { BulletList, Callout, InfoCard, InfoGrid, Pills, Timeline } from '../components/ui/Content.tsx'
import { Accent } from '../components/ui/Eyebrow.tsx'
import { ChipList, Tag } from '../components/ui/Tag.tsx'
import { useLanguage } from '../i18n/useLanguage.ts'
import { mailto, serviceAnchors } from '../site.ts'
import layout from '../styles/layout.module.css'
import styles from './Services.module.css'

const anchors = serviceAnchors
type ServiceKey = keyof typeof anchors
const order: ServiceKey[] = ['cinqEpices', 'collectiveKitchens', 'healthPromotion', 'schoolWork']

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
          <h2 id={`${anchors[id]}-title`} className={styles.title}>
            {t(`services.${id}.title`)}
          </h2>
          <p className={styles.tagline}>{t(`services.${id}.tagline`)}</p>
          <Button href={mailto} dot>
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
  const { url } = useLanguage()
  const labels = t('services.labels', { returnObjects: true })

  return (
    <>
      <PageMeta title={t('services.title')} />

      <PageHero
        eyebrow={t('services.hero.eyebrow')}
        title={<Trans i18nKey="services.hero.title" components={{ accent: <Accent /> }} />}
        text={t('services.hero.text')}
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

      {/* 01 Ateliers Cinq Épices */}
      <Service id="cinqEpices" number={1}>
        <div>
          <h3 className={styles.subTitle}>{labels.approach}</h3>
          <p>{t('services.cinqEpices.approach')}</p>
        </div>
        <div className={styles.mission}>
          <h4 className={styles.missionLabel}>{labels.mission}</h4>
          <p className={styles.missionText}>{t('services.cinqEpices.mission')}</p>
        </div>
        <InfoGrid>
          <InfoCard label={labels.forWho}>
            <p>{t('services.cinqEpices.forWho')}</p>
          </InfoCard>
          <InfoCard label={labels.format}>
            <p>{t('services.cinqEpices.format')}</p>
          </InfoCard>
        </InfoGrid>
        <div className={styles.stack}>
          <h3 className={styles.subTitle}>{labels.history}</h3>
          <p>{t('services.cinqEpices.historyIntro')}</p>
          <Pills items={t('services.cinqEpices.values', { returnObjects: true })} />
          <p>{t('services.cinqEpices.historyText')}</p>
        </div>
        <Timeline items={t('services.cinqEpices.timeline', { returnObjects: true })} />
      </Service>

      <StatsBand
        title={t('services.cinqEpices.stats.title')}
        text={t('services.cinqEpices.stats.text')}
        stats={t('services.cinqEpices.stats.items', { returnObjects: true })}
        footnote={<Trans i18nKey="services.cinqEpices.stats.footnote" components={{ strong: <strong /> }} />}
      />

      {/* 02 Cuisines collectives */}
      <Service id="collectiveKitchens" number={2}>
        <p>{t('services.collectiveKitchens.p1')}</p>
        <p>{t('services.collectiveKitchens.p2')}</p>
        <InfoGrid>
          <InfoCard label={labels.forWho}>
            <p>{t('services.collectiveKitchens.forWho')}</p>
          </InfoCard>
          <InfoCard label={labels.eachSession}>
            <BulletList items={t('services.collectiveKitchens.eachSession', { returnObjects: true })} />
          </InfoCard>
        </InfoGrid>
        <p>{t('services.collectiveKitchens.closing')}</p>
      </Service>

      {/* 03 Promotion de la santé */}
      <Service id="healthPromotion" number={3} sand>
        <p>{t('services.healthPromotion.intro')}</p>
        <div className={styles.stack}>
          <h3 className={styles.subTitle}>{labels.themes}</h3>
          <BulletList items={t('services.healthPromotion.themes', { returnObjects: true })} />
        </div>
        <Callout>{t('services.healthPromotion.callout')}</Callout>
      </Service>

      {/* 04 La santé à l'école et au travail */}
      <Service id="schoolWork" number={4}>
        <p>{t('services.schoolWork.p1')}</p>
        <p>{t('services.schoolWork.p2')}</p>
        <div className={styles.stack}>
          <h3 className={styles.subTitle}>{labels.formats}</h3>
          <ChipList items={t('services.schoolWork.formats', { returnObjects: true })} />
        </div>
        <InfoGrid>
          <InfoCard label={labels.forWho}>
            <p>{t('services.schoolWork.forWho')}</p>
          </InfoCard>
          <InfoCard label={labels.program}>
            <p>{t('services.schoolWork.program')}</p>
          </InfoCard>
        </InfoGrid>
        <p>{t('services.schoolWork.closing')}</p>
      </Service>

      <CtaBand
        kicker={t('services.cta.kicker')}
        title={t('services.cta.title')}
        text={t('services.cta.text')}
        actions={
          <>
            <Button href={mailto} variant="light" dot>
              {t('common.emailMe')}
            </Button>
            <Button to={url('contact')} variant="outlineLight">
              {t('services.cta.allContacts')}
            </Button>
          </>
        }
      />
    </>
  )
}
