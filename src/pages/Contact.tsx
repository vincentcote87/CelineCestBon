import { Trans, useTranslation } from 'react-i18next'
import Credentials from '../components/Credentials/Credentials.tsx'
import PageHero from '../components/PageHero/PageHero.tsx'
import PageMeta from '../components/PageMeta.tsx'
import Portrait from '../components/Portrait/Portrait.tsx'
import Button from '../components/ui/Button.tsx'
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
          <Portrait alt={t('home.hero.photoAlt')} cropped />
        }
      >
        {/* Info cards; the buttons inside are the links. */}
        <div className={styles.methods}>
          <div className={`${styles.method} ${styles.blush}`}>
            <span className={styles.methodLabel}>{t('contact.email.label')}</span>
            <span className={styles.methodValue}>{site.email}</span>
            <div className={styles.methodActions}>
              <Button href={mailto} variant="light">
                {t('common.emailMe')}
              </Button>
            </div>
          </div>
          <div className={`${styles.method} ${styles.sage}`}>
            <span className={styles.methodLabel}>{t('contact.phone.label')}</span>
            <span className={styles.methodValue}>{site.phone}</span>
            <div className={styles.methodActions}>
              <Button href={site.phoneHref} variant="light">
                {t('common.callMe')}
              </Button>
              <Button href={site.smsHref} variant="light">
                {t('common.textMe')}
              </Button>
            </div>
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
