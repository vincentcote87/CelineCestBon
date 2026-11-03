import { Trans, useTranslation } from 'react-i18next'
import Credentials from '../components/Credentials/Credentials.tsx'
import PageHero from '../components/PageHero/PageHero.tsx'
import PageMeta from '../components/PageMeta.tsx'
import Portrait from '../components/Portrait/Portrait.tsx'
import { Accent, Eyebrow } from '../components/ui/Eyebrow.tsx'
import { mailto, site } from '../site.ts'
import layout from '../styles/layout.module.css'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useTranslation()
  const steps = t('contact.prepare.steps', { returnObjects: true })

  return (
    <>
      <PageMeta title={t('contact.title')} />

      <PageHero
        eyebrow={t('contact.hero.eyebrow')}
        title={<Trans i18nKey="contact.hero.title" components={{ accent: <Accent /> }} />}
        text={t('contact.hero.text', { returnObjects: true })}
        aside={
          <Portrait
            alt={t('home.hero.photoAlt')}
            stickers={[t('home.hero.badge'), t('home.hero.badge2')]}
            cropped
          />
        }
      >
        <div className={styles.methods}>
          <a href={mailto} className={`${styles.method} ${styles.blush}`}>
            <span className={styles.methodLabel}>{t('contact.email.label')}</span>
            <span className={styles.methodValue}>{site.email}</span>
            <span className={styles.methodAction}>
              {t('common.emailMe')} <span aria-hidden="true">→</span>
            </span>
          </a>
          {/* Information only: no tel: link for now, see docs/corrections-notes.md. */}
          <div className={`${styles.method} ${styles.sage}`}>
            <span className={styles.methodLabel}>{t('contact.phone.label')}</span>
            <span className={styles.methodValue}>{site.phone}</span>
          </div>
        </div>
      </PageHero>

      <section className={layout.section}>
        <div className={layout.container}>
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
      </section>

      <Credentials />
    </>
  )
}
