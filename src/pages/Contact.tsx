import { Trans, useTranslation } from 'react-i18next'
import CtaBand from '../components/CtaBand/CtaBand.tsx'
import { Leaf } from '../components/Illustrations/Illustrations.tsx'
import PageHero from '../components/PageHero/PageHero.tsx'
import PageMeta from '../components/PageMeta.tsx'
import Button from '../components/ui/Button.tsx'
import { Accent, Eyebrow } from '../components/ui/Eyebrow.tsx'
import { useLanguage } from '../i18n/useLanguage.ts'
import { mailto, site } from '../site.ts'
import layout from '../styles/layout.module.css'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useTranslation()
  const { url } = useLanguage()
  const steps = t('contact.prepare.steps', { returnObjects: true })

  return (
    <>
      <PageMeta title={t('contact.title')} />

      <PageHero
        eyebrow={t('contact.hero.eyebrow')}
        title={<Trans i18nKey="contact.hero.title" components={{ accent: <Accent /> }} />}
        text={t('contact.hero.text')}
      >
        <div className={styles.methods}>
          <a href={mailto} className={`${styles.method} ${styles.blush}`}>
            <span className={styles.methodLabel}>{t('contact.email.label')}</span>
            <span className={styles.methodValue}>{site.email}</span>
            <span className={styles.methodAction}>
              {t('common.emailMe')} <span aria-hidden="true">→</span>
            </span>
          </a>
          <a href={site.phoneHref} className={`${styles.method} ${styles.sage}`}>
            <span className={styles.methodLabel}>{t('contact.phone.label')}</span>
            <span className={styles.methodValue}>{site.phone}</span>
            <span className={styles.methodAction}>
              {t('common.callMe')} <span aria-hidden="true">→</span>
            </span>
          </a>
        </div>
      </PageHero>

      <section className={layout.section}>
        <div className={`${layout.container} ${styles.grid}`}>
          <div>
            <Eyebrow>{t('contact.prepare.eyebrow')}</Eyebrow>
            <h2>{t('contact.prepare.title')}</h2>
            <p className={`${layout.lead} ${styles.prepareText}`}>{t('contact.prepare.text')}</p>
            <ol className={styles.steps}>
              {steps.map((step, i) => (
                <li key={step.title} className={styles.step}>
                  <span className={styles.stepNumber} aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className={styles.areaCard}>
            <Eyebrow>{t('contact.area.eyebrow')}</Eyebrow>
            <div className={styles.map} aria-hidden="true">
              <Leaf className={styles.mapLeaf} />
              <span className={styles.mapDot} />
              <span className={styles.mapRegion}>
                <span className={styles.mapLabel}>{t('contact.area.mapRegion')}</span>
              </span>
              <span className={styles.mapPin}>
                <span className={styles.pinIcon} />
                <span className={styles.mapLabel}>{t('contact.area.mapCity')}</span>
              </span>
            </div>
            <h3 className={styles.areaTitle}>{t('contact.area.title')}</h3>
            <p>{t('contact.area.text')}</p>
          </aside>
        </div>
      </section>

      <CtaBand
        kicker={t('contact.cta.kicker')}
        title={t('contact.cta.title')}
        text={t('contact.cta.text')}
        actions={
          <>
            <Button href={mailto} dot>
              {t('common.emailMe')}
            </Button>
            <Button to={url('services')} variant="light">
              {t('common.seeServices')}
            </Button>
          </>
        }
      />
    </>
  )
}
