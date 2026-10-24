import { Trans, useTranslation } from 'react-i18next'
import CtaBand from '../components/CtaBand/CtaBand.tsx'
import { Leaf } from '../components/Illustrations/Illustrations.tsx'
import PageHero from '../components/PageHero/PageHero.tsx'
import PageMeta from '../components/PageMeta.tsx'
import Portrait from '../components/Portrait/Portrait.tsx'
import Button from '../components/ui/Button.tsx'
import { BulletList } from '../components/ui/Content.tsx'
import { Accent, Eyebrow } from '../components/ui/Eyebrow.tsx'
import { useLanguage } from '../i18n/useLanguage.ts'
import { mailto } from '../site.ts'
import layout from '../styles/layout.module.css'
import styles from './About.module.css'

export default function About() {
  const { t } = useTranslation()
  const { url } = useLanguage()

  const career = t('about.background.career', { returnObjects: true })
  const roles = t('about.background.roles', { returnObjects: true })
  const pillars = t('about.vision.pillars', { returnObjects: true })
  const actions = t('about.action.items', { returnObjects: true })

  return (
    <>
      <PageMeta title={t('about.title')} />

      <PageHero
        eyebrow={t('about.hero.eyebrow')}
        title={<Trans i18nKey="about.hero.title" components={{ accent: <Accent /> }} />}
        meta={t('about.hero.meta')}
        text={t('about.hero.text')}
        actions={
          <>
            <Button href={mailto} dot>
              {t('common.emailMe')}
            </Button>
            <Button href="#vision" variant="secondary">
              {t('about.hero.vision')}
            </Button>
          </>
        }
        aside={<Portrait alt={t('home.hero.photoAlt')} />}
      />

      {/* Background and expertise */}
      <section className={layout.section}>
        <div className={`${layout.container} ${styles.backgroundGrid}`}>
          <div className={styles.prose}>
            <Eyebrow>{t('about.background.eyebrow')}</Eyebrow>
            <h2>{t('about.background.title')}</h2>
            <p>{t('about.background.p1')}</p>
            <p>{t('about.background.p2')}</p>
            <blockquote className={styles.pullQuote}>
              <p>{t('about.background.quote')}</p>
            </blockquote>
            <p>{t('about.background.p3')}</p>
            <p>{t('about.background.p4')}</p>
          </div>

          <aside className={styles.careerCard}>
            <h3>{t('about.background.careerTitle')}</h3>
            <BulletList items={career} />
            <dl className={styles.roles}>
              {roles.map((item) => (
                <div key={item.org}>
                  <dt>{item.org}</dt>
                  <dd>{item.role}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className={`${layout.section} ${layout.sand} ${styles.vision}`}>
        <div className={styles.visionBlob} aria-hidden="true" />
        <div className={layout.container}>
          <Eyebrow>{t('about.vision.eyebrow')}</Eyebrow>
          <figure className={styles.bigQuote}>
            <span className={styles.quoteMark} aria-hidden="true">
              «
            </span>
            <blockquote>
              <p>{t('about.vision.quote')}</p>
            </blockquote>
            <figcaption>{t('about.vision.author')}</figcaption>
          </figure>

          <ol className={styles.pillars}>
            {pillars.map((pillar, i) => (
              <li key={pillar.title} className={styles.pillar}>
                <p className={styles.pillarNumber} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3>{pillar.title}</h3>
                <p>{pillar.intro}</p>
                {pillar.points.map((point) => (
                  <div key={point.title} className={styles.point}>
                    <h4>{point.title}</h4>
                    <p>{point.text}</p>
                  </div>
                ))}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Taking action */}
      <section className={layout.section}>
        <div className={`${layout.container} ${styles.actionGrid}`}>
          <div>
            <Eyebrow>{t('about.action.eyebrow')}</Eyebrow>
            <h2>{t('about.action.title')}</h2>
            <p className={layout.lead}>{t('about.action.text')}</p>
          </div>
          <BulletList
            items={actions.map((item) => (
              <>
                <strong>{item.title}</strong> {item.text}
              </>
            ))}
          />
        </div>

        <div className={layout.container}>
          <figure className={styles.foodSecurity}>
            <Leaf className={styles.foodSecurityLeaf} />
            <blockquote>
              <p>
                <strong>{t('about.foodSecurity.lead')}</strong> {t('about.foodSecurity.text')}
              </p>
            </blockquote>
            <figcaption>{t('about.foodSecurity.source')}</figcaption>
          </figure>
        </div>
      </section>

      <CtaBand
        kicker={t('about.cta.kicker')}
        title={t('about.cta.title')}
        text={t('about.cta.text')}
        actions={
          <>
            <Button href={mailto} variant="light" dot>
              {t('common.emailMe')}
            </Button>
            <Button to={url('services')} variant="outlineLight">
              {t('common.seeServices')}
            </Button>
          </>
        }
      />
    </>
  )
}
