import { Trans, useTranslation } from 'react-i18next'
import CtaBand from '../components/CtaBand/CtaBand.tsx'
import { Leaf } from '../components/Illustrations/Illustrations.tsx'
import PageHero from '../components/PageHero/PageHero.tsx'
import PageMeta from '../components/PageMeta.tsx'
import Portrait from '../components/Portrait/Portrait.tsx'
import Button from '../components/ui/Button.tsx'
import { BulletList } from '../components/ui/Content.tsx'
import { Accent, Eyebrow } from '../components/ui/Eyebrow.tsx'
import { ChipList } from '../components/ui/Tag.tsx'
import { useLanguage } from '../i18n/useLanguage.ts'
import { mailto } from '../site.ts'
import layout from '../styles/layout.module.css'
import styles from './About.module.css'

export default function About() {
  const { t } = useTranslation()
  const { url } = useLanguage()

  const career = t('about.background.career', { returnObjects: true })
  const roles = t('about.background.roles', { returnObjects: true })
  const expertise = t('about.expertise.items', { returnObjects: true })

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
            <Button to={url('services')} variant="outline">
              {t('common.seeServices')}
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
            <blockquote className={styles.pullQuote}>
              <p>{t('about.background.quote2')}</p>
            </blockquote>
            <p>{t('about.background.p5')}</p>
            <p>{t('about.background.p6')}</p>
          </div>

          <aside className={styles.careerCard}>
            <h3>{t('about.background.careerTitle')}</h3>
            <BulletList items={career} />
            <dl className={styles.roles}>
              {roles.map((item) => (
                <div key={item.org}>
                  <dt>
                    {item.org}
                    {item.note && <span className={styles.roleNote}> {item.note}</span>}
                  </dt>
                  <dd>{item.role}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Expertise keywords */}
      <section className={layout.section}>
        <div className={layout.container}>
          <Eyebrow>{t('about.expertise.eyebrow')}</Eyebrow>
          <ChipList items={expertise} />
        </div>
      </section>

      {/* Food security definition */}
      <section className={layout.section}>
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
