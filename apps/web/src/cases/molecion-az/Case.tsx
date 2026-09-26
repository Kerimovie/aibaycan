// Molecion case study (/[locale]/projects/molecion-az): the e-commerce platform and retail back office built for
// Molecion, a Baku premium-fragrance retailer. One supplier line threads through the page — printed, parsed from
// the right, locked into one fragrance, reviewed, remembered as a rule, priced, and finally put on a shelf in three
// languages. Molecion is built, tested and deployment-ready: never "live", and `molecion.az` is plain text.
// Port of Atlas `src/components/cases/molecion/Case.astro`.
//
// Stylesheet order = Atlas bundle order (it decides equal-specificity ties): kit (via CaseLayout) → the scene
// components in Atlas import order → molecion.css (imported LAST on Atlas, so its `.cine .mo-*` primitives win ties
// against the scenes) → this page's own styles (Case.css).
import { CaseLayout } from '../_shared/CaseLayout';
import { Chapter } from '../_shared/Chapter';
import { DefinitionRows } from '../_shared/DefinitionRows';
import { FeatureGrid } from '../_shared/FeatureGrid';
import { TagList } from '../_shared/TagList';
import { HeroVisual } from './HeroVisual';
import { SheetScene } from './SheetScene';
import { ScaleBand } from './ScaleBand';
import { ParseScene } from './ParseScene';
import { IdentityScene } from './IdentityScene';
import { ReviewScene } from './ReviewScene';
import { RulesScene } from './RulesScene';
import { PricingScene } from './PricingScene';
import { ProductScene } from './ProductScene';
import { ShopFront } from './ShopFront';
import './molecion.css';
import './Case.css';
import type { Locale } from '../types';
import { molecionCopy } from './i18n';
import { MolecionEffects } from './MolecionEffects';

export default function MolecionCase({ locale }: { locale: Locale }) {
  const t = molecionCopy[locale];
  const { status, challenge, parse, identity, review, rules, pricing, product, engineering } = t;
  const chapters = [challenge, parse, identity, review, rules, pricing, product, engineering];
  const rail = chapters.map((chapter) => ({ id: chapter.id, label: t.railLabels[chapter.id] }));
  const no = (id: string) => String(chapters.findIndex((chapter) => chapter.id === id) + 1).padStart(2, '0');

  return (
    <CaseLayout locale={locale} slug="molecion-az" copy={t} rail={rail} heroVisual={<HeroVisual t={t} />}>
      <section className="mo-status" aria-labelledby="mo-status-title">
        <div className="container-page">
          <h2 id="mo-status-title" className="sr-only">
            {status.label}
          </h2>
          <div className="mo-status__grid">
            <p className="mo-status__value">
              <span className="mo-label" data-tone="accent">
                {status.label}
              </span>{' '}
              <b>{status.value}</b>
            </p>
            <p className="mo-status__domain mo-mono">{status.domain}</p>
            <p className="cine-text mo-status__note">{status.note}</p>
          </div>
        </div>
      </section>

      <Chapter
        id={challenge.id}
        tone="paper"
        km={no(challenge.id)}
        eyebrow={challenge.eyebrow}
        title={challenge.title}
        accent={challenge.accent}
        lead={challenge.lead}
      >
        <SheetScene t={t} className="mt-14 lg:mt-20" />
        <ol className="mo-pains">
          {challenge.pains.map((pain, index) => (
            <li key={pain.title}>
              <span className="mo-pains__no" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="mo-pains__title">{pain.title}</h3>
                <p className="cine-text mt-1.5">{pain.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mo-rule">
          <p className="cine-eyebrow">{challenge.rule.label}</p>
          <p className="mo-rule__text">{challenge.rule.text}</p>
        </div>
        <ScaleBand scale={challenge.scale} className="mo-scalewrap" />
      </Chapter>

      <Chapter
        id={parse.id}
        tone="navy"
        km={no(parse.id)}
        eyebrow={parse.eyebrow}
        title={parse.title}
        accent={parse.accent}
        lead={parse.lead}
      >
        <ParseScene t={t} />
        <FeatureGrid items={parse.points} columns={3} className="mt-16 lg:mt-20" />
      </Chapter>

      <Chapter
        id={identity.id}
        km={no(identity.id)}
        eyebrow={identity.eyebrow}
        title={identity.title}
        accent={identity.accent}
        lead={identity.lead}
      >
        <IdentityScene t={t} />
      </Chapter>

      <Chapter
        id={review.id}
        tone="paper"
        km={no(review.id)}
        eyebrow={review.eyebrow}
        title={review.title}
        accent={review.accent}
        lead={review.lead}
      >
        <ReviewScene t={t} />
        <FeatureGrid items={review.points} columns={4} className="mt-16 lg:mt-20" />
      </Chapter>

      <Chapter
        id={rules.id}
        tone="navy"
        km={no(rules.id)}
        eyebrow={rules.eyebrow}
        title={rules.title}
        accent={rules.accent}
        lead={rules.lead}
      >
        <RulesScene t={t} />
        <FeatureGrid items={rules.points} columns={4} className="mt-16 lg:mt-20" />
      </Chapter>

      <Chapter
        id={pricing.id}
        km={no(pricing.id)}
        eyebrow={pricing.eyebrow}
        title={pricing.title}
        accent={pricing.accent}
        lead={pricing.lead}
      >
        <PricingScene t={t} locale={locale} />
      </Chapter>

      <Chapter
        id={product.id}
        tone="paper"
        km={no(product.id)}
        eyebrow={product.eyebrow}
        title={product.title}
        accent={product.accent}
        lead={product.lead}
      >
        <ShopFront t={t} className="mt-14 lg:mt-20" />
        <ProductScene t={t} className="mt-14 lg:mt-20" />
      </Chapter>

      <Chapter
        id={engineering.id}
        km={no(engineering.id)}
        eyebrow={engineering.eyebrow}
        title={engineering.title}
        accent={engineering.accent}
        lead={engineering.lead}
      >
        <div className="mo-eng">
          <DefinitionRows items={engineering.principles} />
          <div className="mo-eng__posture">
            <h3 className="cine-eyebrow">{engineering.posture.title}</h3>
            <TagList tags={engineering.posture.tags} label={engineering.posture.ariaLabel} className="mt-5" />
          </div>
        </div>
        <h3 className="cine-eyebrow mt-20">{engineering.roles.title}</h3>
        <ul className="mo-roles">
          {engineering.roles.items.map((role) => (
            <li key={role.title}>
              <h4 className="mo-roles__title">{role.title}</h4>
              <p className="cine-text mt-3">{role.text}</p>
            </li>
          ))}
        </ul>
      </Chapter>

      <MolecionEffects />
    </CaseLayout>
  );
}
